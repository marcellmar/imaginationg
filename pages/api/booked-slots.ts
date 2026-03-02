import type { NextApiRequest, NextApiResponse } from 'next';

const NOTION_API_KEY = process.env.NOTION_API_KEY;
const BOOKINGS_DB_ID = '317990ae-cd45-812a-acc8-e4136be60ab1';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!NOTION_API_KEY) {
    return res.status(200).json({ slots: [] });
  }

  try {
    const now = new Date().toISOString();

    const notionRes = await fetch(`https://api.notion.com/v1/databases/${BOOKINGS_DB_ID}/query`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${NOTION_API_KEY}`,
        'Content-Type': 'application/json',
        'Notion-Version': '2022-06-28',
      },
      body: JSON.stringify({
        filter: {
          and: [
            { property: 'Slot', date: { on_or_after: now } },
            { property: 'Status', select: { does_not_equal: 'Cancelled' } },
          ],
        },
      }),
    });

    const data = await notionRes.json();
    const slots = (data.results || [])
      .map((r: any) => r.properties?.Slot?.date?.start)
      .filter(Boolean);

    // Cache for 30 seconds
    res.setHeader('Cache-Control', 's-maxage=30, stale-while-revalidate');
    return res.status(200).json({ slots });
  } catch {
    return res.status(200).json({ slots: [] });
  }
}
