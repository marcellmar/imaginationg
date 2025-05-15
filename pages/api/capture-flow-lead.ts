import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { drift, move, weapon, service, email } = req.body;

    // In a real application, you would:
    // 1. Save to database
    // 2. Send to CRM
    // 3. Trigger email automation
    // 4. Update analytics
    
    // For now, let's log the data
    console.log('New lead from confrontation flow:', {
      drift,
      move,
      weapon,
      service: service?.serviceName,
      price: service?.price,
      email,
      timestamp: new Date().toISOString()
    });

    // Optionally send a notification email to the team
    // You could use the existing nodemailer setup from send-cheatsheet.ts

    res.status(200).json({ success: true, message: 'Lead captured successfully' });
  } catch (error) {
    console.error('Error capturing lead:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}