/**
 * API Route: /api/chapters/[slug]
 * Fetches a single chapter with full content blocks from Notion
 */

import type { NextApiRequest, NextApiResponse } from 'next';

const NOTION_API_KEY = process.env.NOTION_API_KEY;
const CHAPTERS_DB_ID = 'a8701b03-fdcd-4bb2-b7ba-4f512bd0b01e';

interface NotionBlock {
  id: string;
  type: string;
  [key: string]: any;
}

interface ChapterWithContent {
  id: string;
  order: number;
  title: string;
  slug: string;
  status: string;
  wordCount: number;
  voiceCheck: boolean;
  anchorStory: string;
  keyConcepts: string[];
  lastUpdated: string | null;
  blocks: NotionBlock[];
}

// Parse slug to find chapter number
function parseSlug(slug: string): number | null {
  if (slug === 'conclusion') return 17;
  const match = slug.match(/^chapter-(\d+)$/);
  return match ? parseInt(match[1], 10) : null;
}

// Fetch all blocks for a page (handles pagination)
async function fetchAllBlocks(pageId: string): Promise<NotionBlock[]> {
  const blocks: NotionBlock[] = [];
  let cursor: string | undefined;

  do {
    const url = `https://api.notion.com/v1/blocks/${pageId}/children?page_size=100${cursor ? `&start_cursor=${cursor}` : ''}`;

    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${NOTION_API_KEY}`,
        'Notion-Version': '2022-06-28',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch blocks: ${response.status}`);
    }

    const data = await response.json();
    blocks.push(...data.results);
    cursor = data.has_more ? data.next_cursor : undefined;
  } while (cursor);

  return blocks;
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
    return res.status(400).json({ error: 'Invalid slug' });
  }

  if (!NOTION_API_KEY) {
    return res.status(500).json({ error: 'Notion API key not configured' });
  }

  const chapterNumber = parseSlug(slug);
  if (chapterNumber === null) {
    return res.status(400).json({ error: 'Invalid chapter slug format' });
  }

  try {
    // Query database to find the chapter by order number
    const queryResponse = await fetch(`https://api.notion.com/v1/databases/${CHAPTERS_DB_ID}/query`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${NOTION_API_KEY}`,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        filter: {
          property: 'Order',
          number: { equals: chapterNumber },
        },
      }),
    });

    if (!queryResponse.ok) {
      throw new Error(`Notion API error: ${queryResponse.status}`);
    }

    const queryData = await queryResponse.json();

    if (!queryData.results || queryData.results.length === 0) {
      return res.status(404).json({ error: 'Chapter not found' });
    }

    const page = queryData.results[0];
    const props = page.properties;

    // Check if chapter is published (status is Review or Complete, and has content)
    const status = props.Status?.select?.name || 'Outline';
    const wordCount = props['Word Count']?.number || 0;

    // Only allow access to chapters that are at least in Drafting with content
    if (status === 'Outline' || wordCount === 0) {
      return res.status(403).json({
        error: 'Chapter not yet published',
        status,
        wordCount
      });
    }

    // Fetch all content blocks
    const blocks = await fetchAllBlocks(page.id);

    const title = props.Chapter?.title?.[0]?.plain_text || 'Untitled';

    const chapter: ChapterWithContent = {
      id: page.id,
      order: chapterNumber,
      title,
      slug,
      status,
      wordCount,
      voiceCheck: props['Voice Check']?.checkbox || false,
      anchorStory: props['Anchor Story']?.rich_text?.[0]?.plain_text || '',
      keyConcepts: props['Key Concepts']?.multi_select?.map((s: any) => s.name) || [],
      lastUpdated: props['Last Updated']?.date?.start || null,
      blocks,
    };

    // Set cache headers (revalidate every 5 minutes for published content)
    res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate');

    return res.status(200).json(chapter);
  } catch (error) {
    console.error('Error fetching chapter:', error);
    return res.status(500).json({ error: 'Failed to fetch chapter' });
  }
}
