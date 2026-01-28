import type { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';

const NOTION_API_KEY = process.env.NOTION_API_KEY;
const DIAGNOSTIC_DB = '2d8990ae-cd45-810c-bcf6-cf242c398775';
const RESEND_API_KEY = process.env.RESEND_API_KEY;

interface DiagnosticSubmission {
  name: string;
  email: string;
  city?: string;
  company?: string;
  gpiScore: number;
  stage: string;
  dimensions: {
    decisionLatency: number;
    errorCorrection: number;
    knowledgeLocation: number;
    talentFlow: number;
    knowledgeVelocity: number;
    structuralLockIn: number;
    capitalIntensity: number;
  };
  industry: string;
  sendEmail?: boolean;
}

const DiagnosticSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email().max(255),
  city: z.string().max(100).optional(),
  company: z.string().max(200).optional(),
  gpiScore: z.number().min(1).max(10),
  stage: z.enum(['Field', 'Transitioning', 'Particle']),
  dimensions: z.object({
    decisionLatency: z.number().min(1).max(10),
    errorCorrection: z.number().min(1).max(10),
    knowledgeLocation: z.number().min(1).max(10),
    talentFlow: z.number().min(1).max(10),
    knowledgeVelocity: z.number().min(1).max(10),
    structuralLockIn: z.number().min(1).max(10),
    capitalIntensity: z.number().min(1).max(10),
  }),
  industry: z.string().min(1).max(100),
  sendEmail: z.boolean().optional(),
});

async function sendResultsEmail(submission: DiagnosticSubmission) {
  if (!RESEND_API_KEY) {
    console.log('No Resend API key configured, skipping email');
    return false;
  }

  const stageEmoji = submission.stage === 'Field' ? '🟢' : submission.stage === 'Transitioning' ? '🟡' : '🔴';

  const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #000; color: #fff; padding: 40px; }
    .container { max-width: 600px; margin: 0 auto; }
    .header { text-align: center; margin-bottom: 40px; }
    .score-box { background: #111; border: 1px solid #333; padding: 30px; text-align: center; margin-bottom: 30px; }
    .score { font-size: 72px; font-weight: 900; color: ${submission.stage === 'Field' ? '#22c55e' : submission.stage === 'Transitioning' ? '#eab308' : '#ef4444'}; }
    .stage { font-size: 18px; font-weight: bold; color: ${submission.stage === 'Field' ? '#22c55e' : submission.stage === 'Transitioning' ? '#eab308' : '#ef4444'}; margin-top: 10px; }
    .dimensions { background: #111; border: 1px solid #333; padding: 20px; margin-bottom: 30px; }
    .dim-row { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #222; }
    .dim-label { color: #888; }
    .dim-score { font-weight: bold; font-family: monospace; }
    .cta { text-align: center; margin-top: 40px; }
    .cta a { background: #dc2626; color: #fff; padding: 16px 32px; text-decoration: none; font-weight: bold; }
    .footer { text-align: center; color: #666; font-size: 12px; margin-top: 40px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin: 0; font-size: 24px;">IMAGINATION G</h1>
      <p style="color: #666; margin-top: 10px;">Your GPI Diagnostic Results</p>
    </div>

    <div class="score-box">
      <div class="score">${submission.gpiScore.toFixed(1)}</div>
      <div class="stage">${stageEmoji} ${submission.stage.toUpperCase()}</div>
    </div>

    <div class="dimensions">
      <h3 style="margin-top: 0; color: #888; font-size: 12px; letter-spacing: 1px;">DIMENSION BREAKDOWN</h3>
      <div class="dim-row"><span class="dim-label">Decision Latency</span><span class="dim-score">${submission.dimensions.decisionLatency.toFixed(1)}</span></div>
      <div class="dim-row"><span class="dim-label">Error Correction</span><span class="dim-score">${submission.dimensions.errorCorrection.toFixed(1)}</span></div>
      <div class="dim-row"><span class="dim-label">Knowledge Location</span><span class="dim-score">${submission.dimensions.knowledgeLocation.toFixed(1)}</span></div>
      <div class="dim-row"><span class="dim-label">Talent Flow</span><span class="dim-score">${submission.dimensions.talentFlow.toFixed(1)}</span></div>
      <div class="dim-row"><span class="dim-label">Knowledge Velocity</span><span class="dim-score">${submission.dimensions.knowledgeVelocity.toFixed(1)}</span></div>
      <div class="dim-row"><span class="dim-label">Structural Lock-In</span><span class="dim-score">${submission.dimensions.structuralLockIn.toFixed(1)}</span></div>
      <div class="dim-row" style="border-bottom: none;"><span class="dim-label">Capital Intensity</span><span class="dim-score">${submission.dimensions.capitalIntensity.toFixed(1)}</span></div>
    </div>

    <p style="color: #888; line-height: 1.6;">
      Your GPI of <strong style="color: #fff;">${submission.gpiScore.toFixed(1)}</strong> indicates ${
        submission.stage === 'Field'
          ? 'your organization operates with low friction. Energy flows. Decisions happen. Keep it this way.'
          : submission.stage === 'Transitioning'
          ? 'your organization is between states. Some areas flow, others stick. Focus on your highest-friction dimension.'
          : 'your organization has significant friction. Energy gets stuck. Decisions stall. Start with one dimension.'
      }
    </p>

    <div class="cta">
      <a href="https://www.imaginationg.studio/actions">VIEW ACTION GUIDES</a>
    </div>

    <div class="footer">
      <p>IMAGINATION G | Unstick satisfactory.</p>
      <p>Retake in 90 days to measure change.</p>
    </div>
  </div>
</body>
</html>
  `;

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'IMAGINATION G <diagnostics@imaginationg.studio>',
        to: submission.email,
        subject: `Your GPI Score: ${submission.gpiScore.toFixed(1)} (${submission.stage})`,
        html: emailHtml,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('Resend error:', error);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Email send error:', error);
    return false;
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!NOTION_API_KEY) {
    return res.status(500).json({ error: 'Server configuration error' });
  }

  // Validate request body
  try {
    var submission = DiagnosticSchema.parse(req.body);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        error: 'Invalid request data',
        details: error.errors
      });
    }
    return res.status(400).json({ error: 'Invalid request' });
  }

  try {
    // Save to Notion
    const notionResponse = await fetch('https://api.notion.com/v1/pages', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${NOTION_API_KEY}`,
        'Content-Type': 'application/json',
        'Notion-Version': '2022-06-28',
      },
      body: JSON.stringify({
        parent: { database_id: DIAGNOSTIC_DB },
        properties: {
          'Name': { title: [{ text: { content: submission.name } }] },
          'Email': { email: submission.email },
          'City': { rich_text: submission.city ? [{ text: { content: submission.city } }] : [] },
          'Company': { rich_text: submission.company ? [{ text: { content: submission.company } }] : [] },
          'GPI Score': { number: submission.gpiScore },
          'Stage': { select: { name: submission.stage } },
          'Decision Latency': { number: submission.dimensions.decisionLatency },
          'Error Correction': { number: submission.dimensions.errorCorrection },
          'Knowledge Location': { number: submission.dimensions.knowledgeLocation },
          'Talent Flow': { number: submission.dimensions.talentFlow },
          'Knowledge Velocity': { number: submission.dimensions.knowledgeVelocity },
          'Structural Lock-In': { number: submission.dimensions.structuralLockIn },
          'Capital Intensity': { number: submission.dimensions.capitalIntensity },
          'Submitted At': { date: { start: new Date().toISOString() } },
          'Email Sent': { checkbox: false },
        },
      }),
    });

    if (!notionResponse.ok) {
      const error = await notionResponse.json();
      console.error('Notion error:', error);
      return res.status(500).json({ error: 'Failed to save submission' });
    }

    const notionData = await notionResponse.json();

    // Send email if requested
    let emailSent = false;
    if (submission.sendEmail) {
      emailSent = await sendResultsEmail(submission);

      // Update Notion record with email status
      if (emailSent) {
        await fetch(`https://api.notion.com/v1/pages/${notionData.id}`, {
          method: 'PATCH',
          headers: {
            'Authorization': `Bearer ${NOTION_API_KEY}`,
            'Content-Type': 'application/json',
            'Notion-Version': '2022-06-28',
          },
          body: JSON.stringify({
            properties: {
              'Email Sent': { checkbox: true },
            },
          }),
        });
      }
    }

    return res.status(200).json({
      success: true,
      emailSent,
      id: notionData.id
    });
  } catch (error) {
    console.error('Submission error:', error);
    return res.status(500).json({ error: 'Failed to process submission' });
  }
}
