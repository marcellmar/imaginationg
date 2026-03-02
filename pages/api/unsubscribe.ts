import type { NextApiRequest, NextApiResponse } from 'next';

const NOTION_API_KEY = process.env.NOTION_API_KEY;
const SUBSCRIBERS_DB_ID = '317990ae-cd45-8169-a304-c79bf1ad12de';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email } = req.method === 'POST' ? req.body : req.query;

  if (!email || typeof email !== 'string' || !email.includes('@')) {
    return res.status(400).json({ error: 'Valid email required' });
  }

  if (!NOTION_API_KEY) {
    return res.status(500).json({ error: 'Server configuration error' });
  }

  try {
    // Find the subscriber row
    const searchRes = await fetch(`https://api.notion.com/v1/databases/${SUBSCRIBERS_DB_ID}/query`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${NOTION_API_KEY}`,
        'Content-Type': 'application/json',
        'Notion-Version': '2022-06-28',
      },
      body: JSON.stringify({
        filter: {
          property: 'Email',
          title: { equals: email },
        },
      }),
    });

    const data = await searchRes.json();
    const page = data.results?.[0];

    if (!page) {
      // Don't reveal whether email exists — just confirm
      return res.status(200).send(unsubscribePage('done'));
    }

    // Update status to Unsubscribed
    await fetch(`https://api.notion.com/v1/pages/${page.id}`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${NOTION_API_KEY}`,
        'Content-Type': 'application/json',
        'Notion-Version': '2022-06-28',
      },
      body: JSON.stringify({
        properties: {
          Status: { select: { name: 'Unsubscribed' } },
        },
      }),
    });

    return res.status(200).send(unsubscribePage('done'));
  } catch (error) {
    console.error('Unsubscribe error:', error);
    return res.status(500).json({ error: 'Failed to process unsubscribe' });
  }
}

function unsubscribePage(state: 'done' | 'error') {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Unsubscribed | GPI Weekly</title>
</head>
<body style="margin:0;padding:0;background:#000;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#fff;">
  <div style="max-width:480px;margin:80px auto;padding:40px 24px;text-align:center;">
    <p style="margin:0 0 16px;font-size:11px;letter-spacing:3px;color:#666;text-transform:uppercase;">GPI WEEKLY</p>
    <h1 style="font-size:24px;font-weight:900;margin:0 0 16px;">${state === 'done' ? "You're unsubscribed." : "Something went wrong."}</h1>
    <p style="color:#666;font-size:15px;margin:0 0 32px;">${state === 'done' ? "No more emails from us." : "Try again or reply to any GPI Weekly email."}</p>
    <a href="https://gpi.studio" style="color:#fff;font-size:13px;letter-spacing:1px;text-decoration:none;text-transform:uppercase;border-bottom:1px solid #333;padding-bottom:2px;">Back to gpi.studio</a>
  </div>
</body>
</html>`;
}
