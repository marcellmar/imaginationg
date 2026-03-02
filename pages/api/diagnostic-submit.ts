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
      high: { text: "The org is metabolically committed to its current form", subtext: "Changing how work gets done requires changing the org itself. That's expensive, slow, and politically dangerous." }
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

async function sendResultsEmail(submission: DiagnosticSubmission) {
  if (!RESEND_API_KEY) {
    console.log('No Resend API key configured, skipping email');
    return false;
  }

  const stageColor = submission.stage === 'Field' ? '#22c55e' : submission.stage === 'Transitioning' ? '#eab308' : '#ef4444';
  const scoreColor = (s: number) => s <= 3 ? '#22c55e' : s <= 5 ? '#eab308' : s <= 7 ? '#f97316' : '#ef4444';
  const displayName = submission.company || submission.name;
  const today = new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

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
  const highestFriction = sortedDims[0];

  // Industry comparison (same math as results page)
  const comparison = calculateIndustryPercentile(submission.gpiScore, submission.industry);
  const vsLabel = comparison.position === 'above' ? 'BETTER' : comparison.position === 'below' ? 'WORSE' : 'AVG';
  const vsColor = comparison.position === 'above' ? '#22c55e' : comparison.position === 'below' ? '#ef4444' : '#eab308';

  const DIM_SLUGS: Record<DimKey, string> = {
    DECISION_LATENCY: 'decision-latency',
    ERROR_CORRECTION: 'error-correction',
    KNOWLEDGE_LOCATION: 'knowledge-location',
    KNOWLEDGE_VELOCITY: 'knowledge-velocity',
    TALENT_FLOW: 'talent-flow',
    STRUCTURAL_LOCKIN: 'structural-lock-in',
    CAPITAL_INTENSITY: 'capital-intensity',
  };

  const dimRows = sortedDims.map((d, i) => {
    const insight = getDimensionInsight(d.key, d.score);
    const isWeakest = i === 0;
    const borderColor = isWeakest ? '#7f1d1d' : '#27272a';
    const bgColor = isWeakest ? '#1a0505' : '#0a0a0a';
    return `
    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:10px;border:1px solid ${borderColor};background:${bgColor};padding:14px;">
      <tr>
        <td valign="top">
          <span style="font-size:13px;color:#ccc;font-weight:700;">${d.label}</span>
          ${isWeakest ? `<span style="display:inline-block;margin-left:8px;font-size:10px;background:#7f1d1d;color:#fca5a5;padding:2px 6px;font-weight:700;">HIGHEST FRICTION</span>` : ''}
        </td>
        <td valign="top" align="right">
          <span style="font-size:22px;font-weight:900;color:${scoreColor(d.score)};">${d.score.toFixed(1)}</span>
        </td>
      </tr>
      <tr>
        <td colspan="2" style="padding-top:6px;padding-bottom:8px;">
          <div style="height:4px;background:#1a1a1a;"><div style="height:4px;width:${d.score * 10}%;background:${scoreColor(d.score)};"></div></div>
        </td>
      </tr>
      <tr>
        <td colspan="2">
          <div style="font-size:13px;font-weight:700;color:${scoreColor(d.score)};">${insight.text}</div>
          <div style="font-size:11px;color:#71717a;margin-top:3px;">${insight.subtext}</div>
          ${isWeakest ? `<div style="margin-top:12px;"><a href="https://gpi.studio/gpi-framework/${DIM_SLUGS[d.key]}" style="display:inline-block;font-size:11px;font-weight:700;letter-spacing:2px;color:#fff;text-transform:uppercase;text-decoration:none;border:1px solid #3f3f46;padding:8px 16px;">UNDERSTAND ${d.label.toUpperCase()} &rarr;</a></div>` : ''}
        </td>
      </tr>
    </table>`;
  }).join('');

  const emailHtml = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#000;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#fff;">
  <div style="max-width:600px;margin:0 auto;padding:48px 32px;">

    <p style="margin:0 0 4px;font-size:10px;letter-spacing:3px;color:#22c55e;text-transform:uppercase;">&#9679; ANALYSIS COMPLETE</p>
    <h1 style="margin:0 0 4px;font-size:32px;font-weight:900;color:#fff;">YOUR GPI RESULTS</h1>
    <p style="margin:0 0 28px;font-size:13px;font-weight:700;color:#fff;">${displayName} <span style="font-weight:400;color:#555;font-size:11px;letter-spacing:1px;">${submission.industry}</span></p>

    <!-- Score box + stats row -->
    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
      <tr>
        <!-- Score box -->
        <td width="56%" valign="top" style="padding-right:8px;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#111;border:1px solid #27272a;">
            <tr>
              <td style="padding:24px;">
                <div style="font-size:9px;letter-spacing:3px;color:#555;text-transform:uppercase;margin-bottom:12px;">GROWING PAINS INDEX</div>
                <div style="margin-bottom:4px;">
                  <span style="font-size:60px;font-weight:900;line-height:1;color:${stageColor};">${submission.gpiScore.toFixed(1)}</span><span style="font-size:16px;color:#444;margin-left:4px;">/10</span>
                </div>
                <div style="font-size:11px;font-weight:900;letter-spacing:2px;color:${stageColor};text-transform:uppercase;margin-bottom:20px;">${submission.stage.toUpperCase()} STATE</div>
                <div style="height:6px;background:#222;margin-bottom:8px;">
                  <div style="height:6px;width:${submission.gpiScore * 10}%;background:${stageColor};"></div>
                </div>
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td><span style="font-size:9px;color:#22c55e;letter-spacing:2px;text-transform:uppercase;">FLOW</span></td>
                    <td align="right"><span style="font-size:9px;color:#ef4444;letter-spacing:2px;text-transform:uppercase;">FRICTION</span></td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
        <!-- Stat tiles -->
        <td width="44%" valign="top" style="padding-left:8px;">
          <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:8px;background:#111;border:1px solid #27272a;">
            <tr>
              <td style="padding:20px 24px;">
                <div style="font-size:9px;letter-spacing:3px;color:#555;text-transform:uppercase;margin-bottom:10px;">PERCENTILE</div>
                <div style="font-size:36px;font-weight:900;color:#fff;line-height:1;">${comparison.percentile}th</div>
              </td>
            </tr>
          </table>
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#111;border:1px solid #27272a;">
            <tr>
              <td style="padding:20px 24px;">
                <div style="font-size:9px;letter-spacing:3px;color:#555;text-transform:uppercase;margin-bottom:10px;">VS INDUSTRY</div>
                <div style="font-size:32px;font-weight:900;color:${vsColor};line-height:1;">${vsLabel}</div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>

    <p style="margin:0 0 14px;font-size:10px;letter-spacing:3px;color:#555;text-transform:uppercase;">DIMENSION BREAKDOWN</p>
    ${dimRows}

    <table width="100%" cellpadding="0" cellspacing="0" style="border-top:1px solid #1a1a1a;padding-top:20px;margin-top:32px;">
      <tr>
        <td><span style="font-size:10px;color:#444;letter-spacing:2px;text-transform:uppercase;">GPI.STUDIO</span></td>
        <td align="center"><span style="font-size:10px;color:#444;">${today}</span></td>
        <td align="right"><span style="font-size:10px;color:#333;">Growing Pains Index &trade;</span></td>
      </tr>
    </table>

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
        from: 'GPI Vital Signs <diagnostics@gpi.studio>',
        to: submission.email,
        subject: `GPI Vital Signs: ${displayName} — ${submission.gpiScore.toFixed(2)} / ${submission.stage}`,
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
