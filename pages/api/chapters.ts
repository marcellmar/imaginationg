/**
 * API Route: /api/chapters
 * Fetches all chapters from Notion Chapters database
 */

import type { NextApiRequest, NextApiResponse } from 'next';

const NOTION_API_KEY = process.env.NOTION_API_KEY;
const CHAPTERS_DB_ID = 'a8701b03-fdcd-4bb2-b7ba-4f512bd0b01e';

interface ChapterData {
  id: string;
  order: number;
  title: string;
  slug: string;
  status: 'Outline' | 'Drafting' | 'Review' | 'Complete';
  wordCount: number;
  targetWordCount: number;
  voiceCheck: boolean;
  anchorStory: string;
  keyConcepts: string[];
  lastUpdated: string | null;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!NOTION_API_KEY) {
    return res.status(500).json({ error: 'Notion API key not configured' });
  }

  try {
    const response = await fetch(`https://api.notion.com/v1/databases/${CHAPTERS_DB_ID}/query`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${NOTION_API_KEY}`,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sorts: [{ property: 'Order', direction: 'ascending' }],
      }),
    });

    if (!response.ok) {
      throw new Error(`Notion API error: ${response.status}`);
    }

    const data = await response.json();

    const chapters: ChapterData[] = data.results.map((page: any) => {
      const props = page.properties;
      const title = props.Chapter?.title?.[0]?.plain_text || 'Untitled';
      const order = props.Order?.number || 0;

      // Generate slug from order number
      const slug = order <= 16 ? `chapter-${order}` : 'conclusion';

      return {
        id: page.id,
        order,
        title,
        slug,
        status: props.Status?.select?.name || 'Outline',
        wordCount: props['Word Count']?.number || 0,
        targetWordCount: props['Target Word Count']?.number || 3000,
        voiceCheck: props['Voice Check']?.checkbox || false,
        anchorStory: props['Anchor Story']?.rich_text?.[0]?.plain_text || '',
        keyConcepts: props['Key Concepts']?.multi_select?.map((s: any) => s.name) || [],
        lastUpdated: props['Last Updated']?.date?.start || null,
      };
    });

    // Set cache headers (revalidate every 60 seconds)
    res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate');

    return res.status(200).json({ chapters });
  } catch (error) {
    console.error('Error fetching chapters:', error);
    return res.status(500).json({ error: 'Failed to fetch chapters' });
  }
}
