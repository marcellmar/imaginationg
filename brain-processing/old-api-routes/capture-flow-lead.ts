import type { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';

// Validation schema
const leadSchema = z.object({
  drift: z.string().min(1, 'Drift is required').max(500, 'Drift too long'),
  move: z.string().min(1, 'Move is required').max(500, 'Move too long'),
  weapon: z.string().min(1, 'Weapon is required').max(100, 'Weapon too long'),
  service: z.object({
    serviceName: z.string().min(1, 'Service name is required').max(100, 'Service name too long'),
    price: z.string().min(1, 'Price is required').max(50, 'Price too long')
  }).optional(),
  email: z.string().email('Invalid email format').max(255, 'Email too long')
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Validate request body
    const validatedData = leadSchema.parse(req.body);
    const { drift, move, weapon, service, email } = validatedData;

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
    // Handle Zod validation errors
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        error: 'Invalid request data',
        errors: error.errors.map(e => ({
          field: e.path.join('.'),
          message: e.message
        }))
      });
    }

    console.error('Error capturing lead:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}