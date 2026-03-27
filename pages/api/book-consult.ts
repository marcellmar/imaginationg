import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const NOTION_API_KEY = process.env.NOTION_API_KEY;
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;
const BOOKINGS_DB_ID = '317990ae-cd45-812a-acc8-e4136be60ab1';
const MARCUS_EMAIL = 'marcus@imaginationg.studio';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, company, context, slot } = req.body;

  if (!name || !email || !slot) {
    return res.status(400).json({ error: 'Name, email, and slot are required' });
  }

  if (!NOTION_API_KEY) {
    return res.status(500).json({ error: 'Server configuration error' });
  }

  try {
    // Check if slot is already booked
    const checkRes = await fetch(`https://api.notion.com/v1/databases/${BOOKINGS_DB_ID}/query`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${NOTION_API_KEY}`,
        'Content-Type': 'application/json',
        'Notion-Version': '2022-06-28',
      },
      body: JSON.stringify({
        filter: {
          and: [
            { property: 'Slot', date: { equals: slot } },
            { property: 'Status', select: { does_not_equal: 'Cancelled' } },
          ],
        },
      }),
    });

    const checkData = await checkRes.json();
    if (checkData.results?.length > 0) {
      return res.status(409).json({ error: 'That slot was just taken. Pick another time.' });
    }

    // Save booking
    const bookingRes = await fetch('https://api.notion.com/v1/pages', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${NOTION_API_KEY}`,
        'Content-Type': 'application/json',
        'Notion-Version': '2022-06-28',
      },
      body: JSON.stringify({
        parent: { database_id: BOOKINGS_DB_ID },
        properties: {
          Name: { title: [{ text: { content: name } }] },
          Email: { email },
          Company: { rich_text: [{ text: { content: company || '' } }] },
          'What They Want': { rich_text: [{ text: { content: context || '' } }] },
          Slot: { date: { start: slot } },
          Status: { select: { name: 'Pending' } },
        },
      }),
    });

    if (!bookingRes.ok) {
      return res.status(500).json({ error: 'Failed to save booking' });
    }

    // Format slot time (used by both email and Telegram)
    const slotDate = new Date(slot);
    const formatted = slotDate.toLocaleString('en-US', {
      weekday: 'long', month: 'long', day: 'numeric',
      hour: 'numeric', minute: '2-digit', timeZone: 'America/Chicago',
      timeZoneName: 'short',
    });

    // Send emails
    if (RESEND_API_KEY) {
      const resend = new Resend(RESEND_API_KEY);

      // Confirmation to visitor
      resend.emails.send({
        from: 'GPI Consult <consult@gpi.studio>',
        to: email,
        subject: `Your GPI consult is booked — ${formatted}`,
        html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#000;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#fff;">
  <div style="max-width:600px;margin:0 auto;padding:40px 24px;">
    <p style="margin:0 0 16px;font-size:11px;letter-spacing:3px;color:#666;text-transform:uppercase;">GPI.STUDIO</p>
    <h1 style="margin:0 0 24px;font-size:26px;font-weight:900;">You're booked.</h1>
    <p style="color:#aaa;font-size:16px;line-height:1.6;margin-bottom:8px;">${formatted}</p>
    <p style="color:#666;font-size:14px;line-height:1.6;margin-bottom:32px;">One hour. No fluff. You'll walk away with a clear read on where your org is losing speed and what to do about it.</p>
    <div style="border-top:1px solid #1a1a1a;padding-top:24px;">
      <p style="color:#444;font-size:12px;margin:0 0 4px;">Questions? Reply to this email.</p>
      <p style="color:#333;font-size:11px;margin:0;">GPI CONSULT | gpi.studio</p>
    </div>
  </div>
</body>
</html>`,
      }).catch(console.error);

      // Notification to Marcus
      resend.emails.send({
        from: 'GPI Consult <consult@gpi.studio>',
        to: MARCUS_EMAIL,
        subject: `New consult booked — ${name} — ${formatted}`,
        html: `
<div style="font-family:monospace;padding:24px;background:#111;color:#fff;max-width:600px;">
  <p style="color:#666;font-size:11px;letter-spacing:2px;margin:0 0 16px;">NEW BOOKING</p>
  <p style="margin:0 0 8px;"><strong>Name:</strong> ${name}</p>
  <p style="margin:0 0 8px;"><strong>Email:</strong> ${email}</p>
  <p style="margin:0 0 8px;"><strong>Company:</strong> ${company || 'Not provided'}</p>
  <p style="margin:0 0 8px;"><strong>Slot:</strong> ${formatted}</p>
  <p style="margin:0 0 8px;"><strong>Context:</strong></p>
  <p style="color:#aaa;margin:0 0 24px;padding:12px;background:#1a1a1a;border-left:3px solid #444;">${context || 'Not provided'}</p>
  <p style="color:#444;font-size:11px;margin:0;">Saved to Notion GPI Consult Bookings.</p>
</div>`,
      }).catch(console.error);
    }

    // Telegram notification to Marcus
    if (TELEGRAM_BOT_TOKEN && TELEGRAM_CHAT_ID) {
      const msg = `📅 New GPI consult booked\n\n👤 ${name}${company ? ` — ${company}` : ''}\n📧 ${email}\n🕐 ${formatted}${context ? `\n\n💬 ${context}` : ''}`;
      fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text: msg }),
      }).catch(console.error);
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Booking error:', error);
    return res.status(500).json({ error: 'Failed to process booking' });
  }
}
