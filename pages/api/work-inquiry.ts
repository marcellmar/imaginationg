import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const NOTION_API_KEY = process.env.NOTION_API_KEY;
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const WORK_DB_ID = '31e990ae-cd45-81c7-bc9e-c30d1f6c669c';
const MARCUS_EMAIL = 'marcus@gpi.studio';

const CATEGORY_MAP: Record<string, string> = {
  'process': 'Process Improvement',
  'prototype': 'Prototyping & Product Development',
  'supply-chain': 'Supply Chain & Logistics',
  'operational': 'Operational Builds',
  'not-sure': 'Not sure yet',
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, category, details } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email required' });
  }

  if (!NOTION_API_KEY) {
    return res.status(500).json({ error: 'Server configuration error' });
  }

  const categoryLabel = CATEGORY_MAP[category] || 'Not sure yet';

  try {
    const notionRes = await fetch('https://api.notion.com/v1/pages', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${NOTION_API_KEY}`,
        'Content-Type': 'application/json',
        'Notion-Version': '2022-06-28',
      },
      body: JSON.stringify({
        parent: { database_id: WORK_DB_ID },
        properties: {
          Name: { title: [{ text: { content: name } }] },
          Email: { email },
          Category: { select: { name: categoryLabel } },
          Details: { rich_text: [{ text: { content: details || '' } }] },
          Status: { select: { name: 'New' } },
          'Submitted At': { date: { start: new Date().toISOString() } },
        },
      }),
    });

    if (!notionRes.ok) {
      const error = await notionRes.json();
      console.error('Notion error:', error);
      return res.status(500).json({ error: 'Failed to save inquiry' });
    }

    if (RESEND_API_KEY) {
      const resend = new Resend(RESEND_API_KEY);

      // Confirmation to visitor
      resend.emails.send({
        from: 'Imagination G <work@gpi.studio>',
        to: email,
        subject: 'We got your message',
        html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#fafaf9;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#1c1917;">
  <div style="max-width:600px;margin:0 auto;padding:40px 24px;">
    <p style="margin:0 0 16px;font-size:11px;letter-spacing:3px;color:#a8a29e;text-transform:uppercase;">IMAGINATION G</p>
    <h1 style="margin:0 0 24px;font-size:26px;font-weight:900;">Got it.</h1>
    <p style="color:#78716c;font-size:16px;line-height:1.6;margin-bottom:32px;">
      We'll get back to you within 48 hours. If your project is time-sensitive, reply to this email and say so.
    </p>
    <div style="border-top:1px solid #e7e5e4;padding-top:24px;">
      <p style="color:#a8a29e;font-size:12px;margin:0 0 4px;">You Dream. We Build. Together.</p>
      <p style="color:#d6d3d1;font-size:11px;margin:0;">Imagination G | gpi.studio</p>
    </div>
  </div>
</body>
</html>`,
      }).catch(console.error);

      // Notification to Marcus
      resend.emails.send({
        from: 'Imagination G <work@gpi.studio>',
        to: MARCUS_EMAIL,
        subject: `New work inquiry from ${name}`,
        html: `
<div style="font-family:monospace;padding:24px;background:#fafaf9;color:#1c1917;max-width:600px;">
  <p style="color:#a8a29e;font-size:11px;letter-spacing:2px;margin:0 0 16px;">NEW WORK INQUIRY</p>
  <p style="margin:0 0 8px;"><strong>Name:</strong> ${name}</p>
  <p style="margin:0 0 8px;"><strong>Email:</strong> ${email}</p>
  <p style="margin:0 0 8px;"><strong>Category:</strong> ${categoryLabel}</p>
  <p style="margin:0 0 8px;"><strong>Details:</strong></p>
  <p style="color:#44403c;margin:0 0 24px;padding:12px;background:#f5f5f4;border-left:3px solid #dc2626;">${details || 'Not provided'}</p>
  <p style="color:#a8a29e;font-size:11px;margin:0;">Saved to Notion Work Inquiries.</p>
</div>`,
      }).catch(console.error);
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Work inquiry error:', error);
    return res.status(500).json({ error: 'Failed to process inquiry' });
  }
}
