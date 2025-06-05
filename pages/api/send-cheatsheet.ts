import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import { z } from 'zod';

// Email credentials from environment variables
const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;

// Check if email credentials are configured
if (!EMAIL_USER || !EMAIL_PASS) {
  console.error('Email credentials not configured. Please set EMAIL_USER and EMAIL_PASS environment variables.');
}

// Validation schema
const cheatsheetRequestSchema = z.object({
  email: z.string().email('Invalid email format').max(255, 'Email too long'),
  name: z.string().max(100, 'Name too long').optional()
});

// Email template for sending the cheatsheet
const getEmailTemplate = (recipientName: string) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; }
    .header { text-align: center; padding: 20px; background-color: #000; color: #fff; }
    .content { padding: 20px; }
    .footer { text-align: center; padding: 20px; font-size: 12px; color: #666; }
    h1 { color: #fff; }
    h2 { color: #333; }
    .button { display: inline-block; background-color: #000; color: #fff; padding: 10px 20px; text-decoration: none; border-radius: 4px; }
  </style>
</head>
<body>
  <div class="header">
    <h1>IMAGINATION G</h1>
  </div>
  
  <div class="content">
    <p>Hello${recipientName ? ` ${recipientName}` : ''},</p>
    
    <p>Thank you for your interest in our "5 Signals You're Drifting Instead of Moving" cheatsheet. We believe this will help you identify momentum killers in your project, business, or team.</p>
    
    <p>Please find attached a text version of the cheatsheet. For the full experience with better formatting, you can download the PDF from our website:</p>
    
    <p style="text-align: center;">
      <a href="https://imaginationg.studio/cheatsheet" class="button">View Cheatsheet Online</a>
    </p>
    
    <h2>Next Steps</h2>
    
    <p>If you find the cheatsheet valuable and want to take action on the insights, we're here to help:</p>
    
    <ul>
      <li>Book a <a href="https://outlook.office.com/owa/calendar/IG@imaginationg.studio/bookings/">Clarity Catalyst Call</a> to map out your next steps</li>
      <li>Explore our <a href="https://imaginationg.studio/services">full range of services</a></li>
      <li>Reply to this email with any questions you might have</li>
    </ul>
    
    <p>Wishing you clarity and momentum,</p>
    <p>Marcus Davis<br>Founder, IMAGINATION G</p>
  </div>
  
  <div class="footer">
    <p>© ${new Date().getFullYear()} IMAGINATION G. All rights reserved.</p>
    <p>This email was sent to you because you requested our cheatsheet.</p>
  </div>
</body>
</html>
`;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // Check if email credentials are configured
  if (!EMAIL_USER || !EMAIL_PASS) {
    return res.status(500).json({ 
      message: 'Email service not configured',
      error: 'Missing email credentials' 
    });
  }

  try {
    // Validate request body
    const validatedData = cheatsheetRequestSchema.parse(req.body);
    const { email, name } = validatedData;


    // For development, we'll use a simpler setup - Gmail service
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    });

    // Set up email options
    const mailOptions = {
      from: `"IMAGINATION G" <${EMAIL_USER}>`,
      to: email,
      subject: "5 Signals You're Drifting Instead of Moving - Your Cheatsheet",
      html: getEmailTemplate(name || ''),
      attachments: [
        // Option 1: Using an inline content for a simple text version
        {
          filename: 'IMAGINATION_G_5_Signals_Cheatsheet.txt',
          content: `
IMAGINATION G - 5 Signals You're Drifting Instead of Moving

A quick diagnostic to spot momentum killers in your project, business, or team.

1. Meetings Multiply, Outcomes Disappear
If your calendar is full but your checklist is empty...
→ You're drifting.

2. You're Collecting Insights, Not Decisions
Endless reports, no clear next steps?
→ You're in data fog, not movement.

3. Everything Feels 'Almost Ready'... Forever
Perfection is the enemy of momentum.
→ You're polishing, not pushing.

4. Your Team Asks for Permission, Not Accountability
When people wait for directives instead of making moves...
→ You're managing, not mobilizing.

5. Your Energy is Scattered Across Too Many 'Nice to Haves'
Busyness ≠ progress.
→ You're stuck in noise, not clarity.

✅ IMAGINATION G's Rule of Thumb:
- Movement beats management.
- Clarity kills drift.
- Build rhythm, not rigidity.

🎯 Quick Self-Check:
- Meetings with no decisions → Stalled energy → Anchor every meeting to action
- Endless 'research' → Paralysis → Set a decision date and ship
- Over-polishing MVP → Missed market windows → Launch ugly, learn fast
- Waiting for approval → Friction buildup → Design systems that empower moves
- Scattered energy → Burnout risk → Pick 1-3 signals that matter most now

© IMAGINATION G - Marcus Davis, Founder
`,
          contentType: 'text/plain',
        },
        // Option 2: Adding a link to download the PDF in the email
      ],
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Return success
    return res.status(200).json({ message: 'Cheatsheet sent successfully' });
  } catch (error) {
    // Handle Zod validation errors
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        message: 'Invalid request data',
        errors: error.errors.map(e => ({
          field: e.path.join('.'),
          message: e.message
        }))
      });
    }

    console.error('Error sending email:', error);

    // Provide more detailed error information
    let errorMessage = 'Error sending cheatsheet';
    let errorDetails = null;

    if (error instanceof Error) {
      errorMessage = error.message;
      errorDetails = {
        name: error.name,
        stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
      };
    }

    return res.status(500).json({
      message: errorMessage,
      details: process.env.NODE_ENV === 'development' ? errorDetails : undefined
    });
  }
}