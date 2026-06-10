import type { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';
import { calculateIndustryPercentile } from '../../lib/gpi-industry-benchmarks';

const NOTION_API_KEY = process.env.NOTION_API_KEY;
const DIAGNOSTIC_DB = '317990ae-cd45-81eb-a2cc-e5626d935734';
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

type DimKey = 'DECISION_LATENCY' | 'ERROR_CORRECTION' | 'KNOWLEDGE_LOCATION' | 'KNOWLEDGE_VELOCITY' | 'TALENT_FLOW' | 'STRUCTURAL_LOCKIN' | 'CAPITAL_INTENSITY';

function getDimensionInsight(dimension: DimKey, score: number): { text: string; subtext: string } {
  const insights: Record<DimKey, { low: { text: string; subtext: string }; mid: { text: string; subtext: string }; high: { text: string; subtext: string } }> = {
    DECISION_LATENCY: {
      low: { text: "Decisions happen at the speed of information", subtext: "Authority sits close to the problem. No approval chain between signal and action." },
      mid: { text: "Some decisions flow, some stall", subtext: "Smaller calls move fast. Anything significant starts traveling upward and slowing down." },
      high: { text: "Decisions are metabolically expensive", subtext: "Every choice passes through layers that add time without adding value. The org burns energy just to move." }
    },
    ERROR_CORRECTION: {
      low: { text: "The system catches its own mistakes", subtext: "Wrong turns surface fast. There's no political cost to reversing, so reversals happen." },
      mid: { text: "Visible errors get fixed. Hidden ones don't.", subtext: "The org corrects what it can see. What's buried in process or protected by seniority compounds." },
      high: { text: "Sunk cost has veto power", subtext: "Mistakes become commitments. Changing course reads as admitting failure, so the org defends what isn't working." }
    },
    KNOWLEDGE_LOCATION: {
      low: { text: "The right person knows and is reachable", subtext: "Operational knowledge is distributed and findable. Nobody's head is the single point of failure." },
      mid: { text: "Knowledge clusters around people and teams", subtext: "Some information moves freely. Some lives in relationships and informal networks that not everyone can access." },
      high: { text: "Knowledge is a currency here", subtext: "Information concentrates where it protects status. Silos aren't accidents, they're architecture. The org can't see itself clearly from inside." }
    },
    KNOWLEDGE_VELOCITY: {
      low: { text: "Signal reaches decision-makers before it decays", subtext: "What the front line sees, leadership hears quickly. Bad news travels as fast as good news." },
      mid: { text: "Information moves, but it gets filtered", subtext: "Some signal gets through intact. Some gets softened or timed for political convenience before it arrives." },
      high: { text: "Leadership is running on old data", subtext: "By the time information reaches the people who need it, context has shifted. Decisions get made on what was true, not what is." }
    },
    TALENT_FLOW: {
      low: { text: "People move toward the hardest problems", subtext: "Strong performers go where they're needed. Titles don't outweigh outcomes." },
      mid: { text: "Mobility exists but org charts create drag", subtext: "People can move, but there's friction. The structure shapes who goes where more than the work does." },
      high: { text: "Roles outlast their usefulness", subtext: "People serve positions, not problems. The best performers eventually calculate that their leverage is higher somewhere else." }
    },
    STRUCTURAL_LOCKIN: {
      low: { text: "The structure bends when reality requires it", subtext: "Pivoting doesn't require a reorganization. Process is a tool, not a law." },
      mid: { text: "Some structure helps. Some structure just persists.", subtext: "Certain processes earn their place. Others exist because dismantling them is harder than tolerating them." },
      high: { text: "The org is metabolically committed to its current form", subtext: "Changing how work gets done means changing the org itself. Expensive, slow, and politically dangerous." }
    },
    CAPITAL_INTENSITY: {
      low: { text: "Resources follow results", subtext: "Spending is tied to outcomes. Money moves when the work moves. Budgets aren't defended, they're allocated." },
      mid: { text: "Some spending is strategic. Some is inertia.", subtext: "Resources go to the right places often enough. But some capital is locked in legacy commitments that haven't been reconsidered." },
      high: { text: "Budget cycles shape strategy more than strategy shapes budgets", subtext: "Capital is territorial. Defending last year's allocation takes as much energy as doing the work." }
    }
  };
  const level = score <= 3 ? 'low' : score <= 6 ? 'mid' : 'high';
  return insights[dimension][level];
}

async function sendResultsEmail(submission: DiagnosticSubmission): Promise<{ sent: boolean; id?: string; to: string; error?: unknown }> {
  if (!RESEND_API_KEY) {
    console.log('No Resend API key configured, skipping email');
    return { sent: false, to: submission.email, error: 'No Resend API key configured' };
  }

  const displayName = submission.company || submission.name;

  const dims: { label: string; key: DimKey; score: number }[] = [
    { label: 'Decision Latency', key: 'DECISION_LATENCY', score: submission.dimensions.decisionLatency },
    { label: 'Error Correction', key: 'ERROR_CORRECTION', score: submission.dimensions.errorCorrection },
    { label: 'Knowledge Location', key: 'KNOWLEDGE_LOCATION', score: submission.dimensions.knowledgeLocation },
    { label: 'Talent Flow', key: 'TALENT_FLOW', score: submission.dimensions.talentFlow },
    { label: 'Knowledge Velocity', key: 'KNOWLEDGE_VELOCITY', score: submission.dimensions.knowledgeVelocity },
    { label: 'Structural Lock-In', key: 'STRUCTURAL_LOCKIN', score: submission.dimensions.structuralLockIn },
    { label: 'Capital Intensity', key: 'CAPITAL_INTENSITY', score: submission.dimensions.capitalIntensity },
  ];

  // Sort highest score (most friction) first
  const sortedDims = [...dims].sort((a, b) => b.score - a.score);
  // Industry comparison (same math as results page)
  const comparison = calculateIndustryPercentile(submission.gpiScore, submission.industry);
  const vsLabel = comparison.position === 'above' ? 'more friction than peers' : comparison.position === 'below' ? 'less friction than peers' : 'in the peer range';

  const dimRows = sortedDims.map((d, i) => {
    const insight = getDimensionInsight(d.key, d.score);
    const isWeakest = i === 0;
    return `
    <table width="100%" cellpadding="0" cellspacing="0" style="border-top:1px solid #ddd;padding:14px 0;">
      <tr>
        <td valign="top" style="padding:10px 0;">
          <div style="font-size:15px;color:#1c1917;font-weight:700;">${d.label}${isWeakest ? ' - start here' : ''}</div>
          <div style="font-size:13px;color:#57534e;margin-top:4px;">${insight.text}</div>
          <div style="font-size:13px;color:#78716c;margin-top:4px;line-height:1.5;">${insight.subtext}</div>
        </td>
        <td valign="top" align="right" style="padding:10px 0;font-size:16px;color:#1c1917;font-weight:700;">
          ${d.score.toFixed(1)}
        </td>
      </tr>
    </table>`;
  }).join('');

  const textBody = [
    `Your GPI read for ${displayName}`,
    '',
    `Score: ${submission.gpiScore.toFixed(1)} / 10`,
    `State: ${submission.stage}`,
    `Industry context: ${comparison.percentile}th percentile, ${vsLabel}`,
    '',
    'Dimension read:',
    ...sortedDims.map((d, i) => {
      const insight = getDimensionInsight(d.key, d.score);
      return `${i === 0 ? 'Start here: ' : ''}${d.label} - ${d.score.toFixed(1)}. ${insight.text}. ${insight.subtext}`;
    }),
    '',
    'GPI Studio',
    'marcus@gpi.studio',
  ].join('\n');

  const emailHtml = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f7f2e8;font-family:Georgia,'Times New Roman',serif;color:#1c1917;">
  <div style="max-width:640px;margin:0 auto;padding:36px 24px;">
    <p style="margin:0 0 8px;font-size:13px;color:#78716c;">GPI Studio</p>
    <h1 style="margin:0 0 8px;font-size:28px;line-height:1.2;color:#1c1917;">Your GPI read</h1>
    <p style="margin:0 0 24px;font-size:15px;line-height:1.5;color:#57534e;">${displayName} · ${submission.industry}</p>

    <table width="100%" cellpadding="0" cellspacing="0" style="border-top:1px solid #d6d3d1;border-bottom:1px solid #d6d3d1;margin-bottom:24px;">
      <tr>
        <td style="padding:16px 0;font-size:14px;color:#57534e;">Score</td>
        <td align="right" style="padding:16px 0;font-size:20px;font-weight:700;color:#1c1917;">${submission.gpiScore.toFixed(1)} / 10</td>
      </tr>
      <tr>
        <td style="padding:16px 0;border-top:1px solid #d6d3d1;font-size:14px;color:#57534e;">State</td>
        <td align="right" style="padding:16px 0;border-top:1px solid #d6d3d1;font-size:16px;font-weight:700;color:#1c1917;">${submission.stage}</td>
      </tr>
      <tr>
        <td style="padding:16px 0;border-top:1px solid #d6d3d1;font-size:14px;color:#57534e;">Industry context</td>
        <td align="right" style="padding:16px 0;border-top:1px solid #d6d3d1;font-size:14px;color:#1c1917;">${comparison.percentile}th percentile, ${vsLabel}</td>
      </tr>
    </table>

    <h2 style="margin:0 0 8px;font-size:18px;color:#1c1917;">Dimension read</h2>
    ${dimRows}

    <p style="margin:28px 0 0;border-top:1px solid #d6d3d1;padding-top:16px;font-size:13px;color:#78716c;line-height:1.5;">
      GPI Studio<br>
      marcus@gpi.studio
    </p>
  </div>
</body>
</html>`;

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'GPI Studio <consult@gpi.studio>',
        to: submission.email,
        subject: `Your GPI read`,
        text: textBody,
        html: emailHtml,
      }),
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ message: response.statusText }));
      console.error('Resend error:', error);
      return { sent: false, to: submission.email, error };
    }

    const data = await response.json().catch(() => ({}));
    return { sent: true, id: data.id, to: submission.email };
  } catch (error) {
    console.error('Email send error:', error);
    return { sent: false, to: submission.email, error };
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
    // Email is the requested user-facing action. Do not make it depend on the
    // Notion record write succeeding first.
    let emailResult: { sent: boolean; id?: string; to: string; error?: unknown } | null = null;
    let emailSent = false;
    if (submission.sendEmail) {
      emailResult = await sendResultsEmail(submission);
      emailSent = emailResult.sent;
      if (!emailSent) {
        return res.status(502).json({
          error: 'Email delivery failed',
          code: 'EMAIL_SEND_FAILED',
          emailTo: emailResult.to,
          detail: emailResult.error,
        });
      }
    }

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
          'Email Sent': { checkbox: emailSent },
        },
      }),
    });

    if (!notionResponse.ok) {
      const error = await notionResponse.json();
      console.error('Notion error:', error);
      if (emailSent) {
        return res.status(200).json({
          success: true,
          emailSent,
          emailTo: emailResult?.to,
          emailId: emailResult?.id,
          recordSaved: false,
          warning: 'Email sent, but the read was not saved to Notion.',
        });
      }
      return res.status(500).json({ error: 'Failed to save submission' });
    }

    const notionData = await notionResponse.json();

    return res.status(200).json({
      success: true,
      emailSent,
      emailTo: emailResult?.to,
      emailId: emailResult?.id,
      recordSaved: true,
      id: notionData.id
    });
  } catch (error) {
    console.error('Submission error:', error);
    return res.status(500).json({ error: 'Failed to process submission' });
  }
}
