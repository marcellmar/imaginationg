import type { NextApiRequest, NextApiResponse } from 'next';

const NOTION_API_KEY = process.env.NOTION_API_KEY;
const GPI_CONTENT_DB = '2d8990ae-cd45-811a-b634-c11c51be4013';
const GPI_ANALYSES_DB = '7d636c92-c316-4bfc-9bc7-7899e575e19e';

interface NotionRichText {
  plain_text: string;
}

interface NotionTitle {
  title: NotionRichText[];
}

interface NotionSelect {
  select: { name: string } | null;
}

interface NotionDate {
  date: { start: string } | null;
}

interface NotionRelation {
  relation: { id: string }[];
}

interface NotionNumber {
  number: number | null;
}

interface ContentProperties {
  Headline: NotionTitle;
  Series: NotionSelect;
  Status: NotionSelect;
  'Publish Date': NotionDate;
  Teaser: { rich_text: NotionRichText[] };
  Slug: { rich_text: NotionRichText[] };
  'Featured Companies': NotionRelation;
}

interface AnalysisProperties {
  Name: NotionTitle;
  'GPI Score': NotionNumber;
  'Transformation Stage': NotionSelect;
  Sector: NotionSelect;
}

interface ContentItem {
  id: string;
  headline: string;
  series: string;
  publishDate: string;
  teaser: string;
  slug: string;
  companies: {
    id: string;
    name: string;
    gpiScore: number | null;
    stage: string;
    sector: string;
  }[];
}

async function fetchCompanyDetails(companyIds: string[]): Promise<Map<string, ContentItem['companies'][0]>> {
  const companies = new Map<string, ContentItem['companies'][0]>();

  for (const id of companyIds) {
    try {
      const response = await fetch(`https://api.notion.com/v1/pages/${id}`, {
        headers: {
          'Authorization': `Bearer ${NOTION_API_KEY}`,
          'Notion-Version': '2022-06-28',
        },
      });

      if (response.ok) {
        const page = await response.json();
        const props = page.properties as AnalysisProperties;
        companies.set(id, {
          id,
          name: props.Name?.title?.[0]?.plain_text || 'Unknown',
          gpiScore: props['GPI Score']?.number || null,
          stage: props['Transformation Stage']?.select?.name || 'Unknown',
          sector: props.Sector?.select?.name || 'Unknown',
        });
      }
    } catch (error) {
      console.error(`Failed to fetch company ${id}:`, error);
    }
  }

  return companies;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!NOTION_API_KEY) {
    return res.status(500).json({ error: 'Server configuration error' });
  }

  const { series } = req.query;

  try {
    // Build filter for published content
    const filter: Record<string, unknown> = {
      property: 'Status',
      select: { equals: 'Published' },
    };

    // Add series filter if specified
    const filters = series
      ? {
          and: [
            filter,
            { property: 'Series', select: { equals: series } },
          ],
        }
      : filter;

    const response = await fetch(
      `https://api.notion.com/v1/databases/${GPI_CONTENT_DB}/query`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${NOTION_API_KEY}`,
          'Content-Type': 'application/json',
          'Notion-Version': '2022-06-28',
        },
        body: JSON.stringify({
          filter: filters,
          sorts: [{ property: 'Publish Date', direction: 'descending' }],
        }),
      }
    );

    if (!response.ok) {
      const error = await response.json();
      console.error('Notion API error:', error);
      return res.status(500).json({ error: 'Failed to fetch content' });
    }

    const data = await response.json();

    // Collect all company IDs to fetch
    const allCompanyIds = new Set<string>();
    for (const page of data.results) {
      const props = page.properties as ContentProperties;
      for (const rel of props['Featured Companies']?.relation || []) {
        allCompanyIds.add(rel.id);
      }
    }

    // Fetch company details
    const companiesMap = await fetchCompanyDetails(Array.from(allCompanyIds));

    // Transform results
    const content: ContentItem[] = data.results.map((page: { id: string; properties: ContentProperties }) => {
      const props = page.properties;
      const companyIds = props['Featured Companies']?.relation?.map((r) => r.id) || [];

      return {
        id: page.id,
        headline: props.Headline?.title?.[0]?.plain_text || '',
        series: props.Series?.select?.name || '',
        publishDate: props['Publish Date']?.date?.start || '',
        teaser: props.Teaser?.rich_text?.[0]?.plain_text || '',
        slug: props.Slug?.rich_text?.[0]?.plain_text || '',
        companies: companyIds.map((id) => companiesMap.get(id)).filter(Boolean),
      };
    });

    // Set cache headers (revalidate every 5 minutes)
    res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate');
    return res.status(200).json({ content });
  } catch (error) {
    console.error('Error fetching GPI content:', error);
    return res.status(500).json({ error: 'Failed to fetch content' });
  }
}
