import type { NextApiRequest, NextApiResponse } from 'next';

const NOTION_API_KEY = process.env.NOTION_API_KEY;
const GPI_CONTENT_DB = '2d8990ae-cd45-811a-b634-c11c51be4013';

interface NotionBlock {
  id: string;
  type: string;
  [key: string]: unknown;
}

interface NotionRichText {
  plain_text: string;
  href?: string | null;
  annotations?: {
    bold?: boolean;
    italic?: boolean;
    code?: boolean;
  };
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { slug } = req.query;

  if (!slug || typeof slug !== 'string') {
    return res.status(400).json({ error: 'Slug required' });
  }

  if (!NOTION_API_KEY) {
    return res.status(500).json({ error: 'Server configuration error' });
  }

  try {
    // Find the page by slug
    const searchResponse = await fetch(
      `https://api.notion.com/v1/databases/${GPI_CONTENT_DB}/query`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${NOTION_API_KEY}`,
          'Content-Type': 'application/json',
          'Notion-Version': '2022-06-28',
        },
        body: JSON.stringify({
          filter: {
            and: [
              { property: 'Slug', rich_text: { equals: slug } },
              { property: 'Status', select: { equals: 'Published' } },
            ],
          },
        }),
      }
    );

    const searchData = await searchResponse.json();

    if (!searchData.results || searchData.results.length === 0) {
      return res.status(404).json({ error: 'Content not found' });
    }

    const page = searchData.results[0];
    const pageId = page.id;
    const props = page.properties;

    // Get page content blocks
    const blocksResponse = await fetch(
      `https://api.notion.com/v1/blocks/${pageId}/children?page_size=100`,
      {
        headers: {
          'Authorization': `Bearer ${NOTION_API_KEY}`,
          'Notion-Version': '2022-06-28',
        },
      }
    );

    const blocksData = await blocksResponse.json();

    // Get featured companies details
    const companyIds = props['Featured Companies']?.relation?.map((r: { id: string }) => r.id) || [];
    const companies = [];

    for (const companyId of companyIds) {
      const companyResponse = await fetch(
        `https://api.notion.com/v1/pages/${companyId}`,
        {
          headers: {
            'Authorization': `Bearer ${NOTION_API_KEY}`,
            'Notion-Version': '2022-06-28',
          },
        }
      );
      const companyData = await companyResponse.json();
      const companyProps = companyData.properties;

      companies.push({
        id: companyId,
        name: companyProps.Name?.title?.[0]?.plain_text || 'Unknown',
        gpiScore: companyProps['GPI Score']?.number || null,
        stage: companyProps['Transformation Stage']?.select?.name || 'Unknown',
        sector: companyProps.Sector?.select?.name || 'Unknown',
        decisionLatency: companyProps['Decision Latency']?.number,
        errorCorrection: companyProps['Error Correction']?.number,
        knowledgeLocation: companyProps['Knowledge Location']?.number,
        talentFlow: companyProps['Talent Flow']?.number,
        knowledgeVelocity: companyProps['Knowledge Velocity']?.number,
        structuralLockIn: companyProps['Structural Lock-In']?.number,
        capitalIntensity: companyProps['Capital Intensity']?.number,
        frictionPoints: companyProps['Key Friction Points']?.multi_select?.map((s: { name: string }) => s.name) || [],
      });
    }

    // Transform blocks to simpler format
    const transformRichText = (richText: NotionRichText[]) => {
      return richText?.map((t: NotionRichText) => ({
        text: t.plain_text,
        href: t.href,
        bold: t.annotations?.bold,
        italic: t.annotations?.italic,
        code: t.annotations?.code,
      })) || [];
    };

    const blocks = blocksData.results?.map((block: NotionBlock) => {
      const blockType = block.type;
      const blockContent = block[blockType] as { rich_text?: NotionRichText[] };

      return {
        id: block.id,
        type: blockType,
        content: transformRichText(blockContent?.rich_text || []),
      };
    }) || [];

    const content = {
      id: pageId,
      headline: props.Headline?.title?.[0]?.plain_text || '',
      series: props.Series?.select?.name || '',
      publishDate: props['Publish Date']?.date?.start || '',
      teaser: props.Teaser?.rich_text?.[0]?.plain_text || '',
      slug: props.Slug?.rich_text?.[0]?.plain_text || '',
      companies,
      blocks,
    };

    res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate');
    return res.status(200).json(content);
  } catch (error) {
    console.error('Error fetching content:', error);
    return res.status(500).json({ error: 'Failed to fetch content' });
  }
}
