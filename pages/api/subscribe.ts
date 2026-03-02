import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const NOTION_API_KEY = process.env.NOTION_API_KEY;
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const SUBSCRIBERS_DB_ID = '317990ae-cd45-8169-a304-c79bf1ad12de';

async function sendWelcomeEmail(email: string): Promise<boolean> {
  if (!RESEND_API_KEY) return false;
  const resend = new Resend(RESEND_API_KEY);

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;background:#000;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#fff;">
  <div style="max-width:600px;margin:0 auto;padding:40px 24px;">

    <!-- Header -->
    <div style="margin-bottom:40px;">
      <p style="margin:0;font-size:11px;letter-spacing:3px;color:#666;text-transform:uppercase;">GPI.STUDIO</p>
      <h1 style="margin:12px 0 0;font-size:28px;font-weight:900;line-height:1.1;">You're in.</h1>
    </div>

    <!-- Intro -->
    <p style="color:#aaa;font-size:16px;line-height:1.6;margin-bottom:24px;">
      Every week I run GPI analyses on companies making big moves. Who's calcifying. Who's already dead and doesn't know it. Who's doing something worth watching.
    </p>

    <p style="color:#aaa;font-size:16px;line-height:1.6;margin-bottom:40px;">
      You'll get the breakdown before it posts anywhere else. No padding. Just the physics.
    </p>

    <!-- Divider -->
    <div style="border-top:1px solid #222;margin-bottom:40px;"></div>

    <!-- What to expect -->
    <h2 style="font-size:13px;letter-spacing:2px;color:#666;text-transform:uppercase;margin-bottom:20px;">WHAT YOU GET</h2>

    <table style="width:100%;border-collapse:collapse;margin-bottom:40px;">
      <tr>
        <td style="padding:14px 0;border-bottom:1px solid #1a1a1a;color:#fff;font-weight:600;">Weekly Smackdown</td>
        <td style="padding:14px 0;border-bottom:1px solid #1a1a1a;color:#666;text-align:right;">Two companies. One winner.</td>
      </tr>
      <tr>
        <td style="padding:14px 0;border-bottom:1px solid #1a1a1a;color:#fff;font-weight:600;">Vital Signs</td>
        <td style="padding:14px 0;border-bottom:1px solid #1a1a1a;color:#666;text-align:right;">Catch metabolic stress before the market does.</td>
      </tr>
      <tr>
        <td style="padding:14px 0;border-bottom:1px solid #1a1a1a;color:#fff;font-weight:600;">Calcification Alert</td>
        <td style="padding:14px 0;border-bottom:1px solid #1a1a1a;color:#666;text-align:right;">When a company starts dying in public.</td>
      </tr>
      <tr>
        <td style="padding:14px 0;color:#fff;font-weight:600;">The Autopsy</td>
        <td style="padding:14px 0;color:#666;text-align:right;">What actually killed them.</td>
      </tr>
    </table>

    <!-- CTA -->
    <div style="text-align:center;margin-bottom:48px;">
      <a href="https://gpi.studio/companies" style="display:inline-block;background:#dc2626;color:#fff;padding:16px 40px;font-weight:700;font-size:14px;letter-spacing:1px;text-decoration:none;text-transform:uppercase;">
        EXPLORE 100+ GPI ANALYSES
      </a>
    </div>

    <!-- Footer -->
    <div style="border-top:1px solid #1a1a1a;padding-top:24px;text-align:center;">
      <p style="color:#444;font-size:12px;margin:0 0 8px;">GPI WEEKLY | gpi.studio</p>
      <p style="color:#333;font-size:11px;margin:0;">You subscribed at gpi.studio. <a href="https://gpi.studio/api/unsubscribe?email=${encodeURIComponent(email)}" style="color:#444;text-decoration:underline;">Unsubscribe</a>.</p>
    </div>

  </div>
</body>
</html>`;

  try {
    const { error } = await resend.emails.send({
      from: 'GPI Weekly <weekly@gpi.studio>',
      to: email,
      subject: "You're subscribed to GPI Weekly",
      html,
    });
    return !error;
  } catch {
    return false;
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, source = 'GPI Studio' } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Valid email required' });
  }

  if (!NOTION_API_KEY) {
    return res.status(500).json({ error: 'Server configuration error' });
  }

  try {
    const notionRes = await fetch('https://api.notion.com/v1/pages', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${NOTION_API_KEY}`,
        'Content-Type': 'application/json',
        'Notion-Version': '2022-06-28',
      },
      body: JSON.stringify({
        parent: { database_id: SUBSCRIBERS_DB_ID },
        properties: {
          Email: { title: [{ text: { content: email } }] },
          Source: { select: { name: source } },
          'Subscribed At': { date: { start: new Date().toISOString() } },
          Status: { select: { name: 'Active' } },
        },
      }),
    });

    if (!notionRes.ok) {
      const error = await notionRes.json();
      console.error('Notion error:', error);
      return res.status(500).json({ error: 'Failed to save subscription' });
    }

    sendWelcomeEmail(email).catch(err => console.error('Welcome email failed:', err));

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Subscription error:', error);
    return res.status(500).json({ error: 'Failed to process subscription' });
  }
}
