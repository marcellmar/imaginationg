#!/usr/bin/env npx tsx

import React from 'react';

/**
 * SCMG 487 Chapter 6 Case Study Diagrams
 *
 * Case 6-1 Northwest Gas & Electric:
 *   fig-case-6-1-nge-tco-analysis.png
 *
 * Case 6-2 Granton Shores:
 *   fig-case-6-2-granton-shores-bid-matrix.png
 *
 * Case 6-3 Haniff Machining:
 *   fig-case-6-3-haniff-capex-analysis.png
 *
 * Run from imaginationg-main root:
 *   npx tsx scripts/generate-487-case-study-diagrams.tsx
 */

import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import * as fs from 'fs';
import * as path from 'path';

const OUT = path.join(
  '/Users/marcellmar/Documents/projects/marcus-gpi-brain',
  'work-loyola/processed-documents/SCMG-487-purchasing-management/case-studies'
);

const C = {
  bg:       '#FFFFFF',
  text:     '#111111',
  muted:    '#555555',
  light:    '#888888',
  border:   '#CCCCCC',
  borderDk: '#999999',
  rule:     '#E5E5E5',
  accent:   '#1A1A1A',
  fill1:    '#F7F7F7',
  fill2:    '#EFEFEF',
  green:    '#2D6A4F',
  greenBg:  '#D8F3DC',
  red:      '#9B2226',
  redBg:    '#FFCCD5',
  amber:    '#7B5800',
  amberBg:  '#FFF3CD',
};

async function loadFonts() {
  try {
    const dir = path.join(process.cwd(), 'public', 'fonts');
    const reg = fs.readFileSync(path.join(dir, 'Inter-Regular.woff'));
    const bld = fs.readFileSync(path.join(dir, 'Inter-Bold.woff'));
    return [
      { name: 'Inter', data: reg.buffer.slice(reg.byteOffset, reg.byteOffset + reg.byteLength), weight: 400 as const },
      { name: 'Inter', data: bld.buffer.slice(bld.byteOffset, bld.byteOffset + bld.byteLength), weight: 700 as const },
    ];
  } catch {
    const rRes = await fetch('https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff');
    const rBuf = await rRes.arrayBuffer();
    const bRes = await fetch('https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYAZ9hjp-Ek-_EeA.woff');
    const bBuf = await bRes.arrayBuffer();
    return [
      { name: 'Inter', data: rBuf, weight: 400 as const },
      { name: 'Inter', data: bBuf, weight: 700 as const },
    ];
  }
}

const SCALE = 3;

async function render(jsx: any, width: number, height: number, fonts: any[]): Promise<Buffer> {
  const svg = await satori(jsx, { width, height, fonts });
  const resvg = new Resvg(svg, { fitTo: { mode: 'width', value: width * SCALE } });
  return Buffer.from(resvg.render().asPng());
}

function save(buf: Buffer, name: string) {
  const p = path.join(OUT, name);
  fs.writeFileSync(p, buf);
  console.log('Saved:', p);
}

// ============================================================
// CASE 6-1: Northwest Gas & Electric — TCO Analysis
// ============================================================

function FigCase6_1() {
  const W = 1060, H = 860;

  const tcoRows = [
    { item: 'Purchase price / unit', becker: '$950', covington: '$1,700', note: '+$750 for Covington' },
    { item: 'Field inspections (20 yr)', becker: '$660 (3 visits × $220)', covington: '$220 (1 visit)', note: 'Rotary saves $440' },
    { item: 'Revenue accuracy gain', becker: 'Baseline', covington: '+$1,314', note: '0.05% more gas registered' },
    { item: 'Inventory holding cost', becker: '$190/unit (2,000 units)', covington: '$113/unit (665 units)', note: 'Rotary saves $77' },
    { item: 'Total 20-yr savings (Covington)', becker: '—', covington: '+$1,831', note: 'Covington\'s TCO claim' },
    { item: 'Net TCO advantage', becker: '—', covington: '+$1,081/unit', note: '$1,831 savings − $750 premium' },
  ];

  const traps = [
    { n: '1', label: 'Larry\'s metric conflicts with the math', body: '3% YoY price reduction = Becker wins on paper. $1,081 TCO advantage = Covington wins in reality. Liz needs to change the evaluation framework, not the supplier.' },
    { n: '2', label: 'Revenue figure is the seller\'s assumption', body: 'Covington\'s $1,314 is based on 500 CFH at $0.03/cf 24/7. Any variance in volume, price, or usage changes the number. Verify with NG&E metering data before accepting.' },
    { n: '3', label: 'Standardization cost is real and hidden', body: '40,000 diaphragm meters in the network. Switching to rotary = two maintenance protocols, two parts inventories, two training programs. Andrew Spence flagged this.' },
    { n: '4', label: 'This is a performance spec situation', body: 'Liz should specify what the meter must DO (accuracy, flow range, service interval) not which technology. That opens the market and keeps Becker competitive.' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: W, minHeight: H, backgroundColor: C.bg, padding: '32px 40px', fontFamily: 'Inter, sans-serif' }}>

      {/* Header */}
      <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 6 }}>
        <span style={{ fontSize: 10, color: C.muted, letterSpacing: 1.5, textTransform: 'uppercase' as const }}>Case 6-1 · Northwest Gas & Electric</span>
        <span style={{ fontSize: 22, fontWeight: 700, color: C.text, marginTop: 4 }}>Price vs. Total Cost of Ownership</span>
        <span style={{ fontSize: 12, color: C.muted, marginTop: 4 }}>Liz Gates · Portland, Oregon · 2,000 meters · March 31 deadline</span>
      </div>

      <div style={{ display: 'flex', height: 1, backgroundColor: C.border, marginBottom: 18 }} />

      {/* Supplier quick compare */}
      <div style={{ display: 'flex', gap: 14, marginBottom: 20 }}>
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, border: `1.5px solid ${C.borderDk}`, borderRadius: 6, padding: '14px 16px', backgroundColor: C.fill1 }}>
          <span style={{ fontSize: 11, color: C.muted, letterSpacing: 1, textTransform: 'uppercase' as const }}>Becker (B-1,000)</span>
          <span style={{ fontSize: 18, fontWeight: 700, color: C.text, marginTop: 4 }}>$950 / unit</span>
          <span style={{ fontSize: 11, color: C.muted, marginTop: 6 }}>Diaphragm technology. Germany HQ, Chicago US ops. Longstanding strategic supplier. 12-week lead time. $60 reduction already offered from expiring contract.</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, border: `1.5px solid ${C.borderDk}`, borderRadius: 6, padding: '14px 16px', backgroundColor: C.fill1 }}>
          <span style={{ fontSize: 11, color: C.muted, letterSpacing: 1, textTransform: 'uppercase' as const }}>Covington (COV-1,000)</span>
          <span style={{ fontSize: 18, fontWeight: 700, color: C.text, marginTop: 4 }}>$1,700 / unit</span>
          <span style={{ fontSize: 11, color: C.muted, marginTop: 6 }}>Rotary technology. Cincinnati, OH. Recently approved supplier (~$20M revenue). 8-week lead time. Price includes conversion kit for diaphragm replacement.</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, border: `1.5px solid ${C.borderDk}`, borderRadius: 6, padding: '14px 16px', backgroundColor: C.amberBg }}>
          <span style={{ fontSize: 11, color: C.amber, letterSpacing: 1, textTransform: 'uppercase' as const }}>The Tension</span>
          <span style={{ fontSize: 13, fontWeight: 700, color: C.amber, marginTop: 4 }}>Larry wants 3% YoY price cuts</span>
          <span style={{ fontSize: 11, color: C.amber, marginTop: 6 }}>Covington is $750/unit MORE than Becker on the face. But Covington claims $1,081/unit NET advantage over 20 years. The evaluation system and the right answer point in opposite directions.</span>
        </div>
      </div>

      {/* TCO table */}
      <div style={{ display: 'flex', flexDirection: 'column', border: `1px solid ${C.border}`, borderRadius: 6, overflow: 'hidden', marginBottom: 20 }}>
        {/* Header row */}
        <div style={{ display: 'flex', backgroundColor: C.accent }}>
          <div style={{ display: 'flex', flex: 3, padding: '8px 12px' }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: '#FFFFFF', letterSpacing: 0.5 }}>COST COMPONENT (20-YEAR PER UNIT)</span>
          </div>
          <div style={{ display: 'flex', flex: 2, padding: '8px 12px', borderLeft: `1px solid #444` }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: '#FFFFFF' }}>BECKER DIAPHRAGM</span>
          </div>
          <div style={{ display: 'flex', flex: 2, padding: '8px 12px', borderLeft: `1px solid #444` }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: '#FFFFFF' }}>COVINGTON ROTARY</span>
          </div>
          <div style={{ display: 'flex', flex: 2, padding: '8px 12px', borderLeft: `1px solid #444` }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: '#FFFFFF' }}>DELTA</span>
          </div>
        </div>
        {tcoRows.map((r, i) => (
          <div key={i} style={{ display: 'flex', backgroundColor: i % 2 === 0 ? C.bg : C.fill1, borderTop: `1px solid ${C.border}` }}>
            <div style={{ display: 'flex', flex: 3, padding: '8px 12px', alignItems: 'center' }}>
              <span style={{ fontSize: 11, color: C.text }}>{r.item}</span>
            </div>
            <div style={{ display: 'flex', flex: 2, padding: '8px 12px', borderLeft: `1px solid ${C.rule}`, alignItems: 'center' }}>
              <span style={{ fontSize: 11, color: C.muted }}>{r.becker}</span>
            </div>
            <div style={{ display: 'flex', flex: 2, padding: '8px 12px', borderLeft: `1px solid ${C.rule}`, alignItems: 'center' }}>
              <span style={{ fontSize: 11, fontWeight: i >= 4 ? 700 : 400, color: i >= 4 ? C.green : C.muted }}>{r.covington}</span>
            </div>
            <div style={{ display: 'flex', flex: 2, padding: '8px 12px', borderLeft: `1px solid ${C.rule}`, alignItems: 'center' }}>
              <span style={{ fontSize: 11, color: C.muted, fontStyle: 'italic' as const }}>{r.note}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Key traps */}
      <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 14 }}>
        <span style={{ fontSize: 12, fontWeight: 700, color: C.text, marginBottom: 10 }}>KEY TRAPS FOR CLASS DISCUSSION</span>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {traps.map((t, i) => (
            <div key={i} style={{ display: 'flex', gap: 12, padding: '10px 14px', backgroundColor: C.fill1, border: `1px solid ${C.border}`, borderRadius: 5 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 22, height: 22, backgroundColor: C.accent, borderRadius: 11, flexShrink: 0 }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: '#FFFFFF' }}>{t.n}</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                <span style={{ fontSize: 12, fontWeight: 700, color: C.text }}>{t.label}</span>
                <span style={{ fontSize: 11, color: C.muted, marginTop: 2 }}>{t.body}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 6 }}>
        <span style={{ fontSize: 11, color: C.light }}>SCMG 487 | Case 6-1 | Northwest Gas & Electric</span>
      </div>

    </div>
  );
}

// ============================================================
// CASE 6-2: Granton Shores — Services Bid Comparison Matrix
// ============================================================

function FigCase6_2() {
  const W = 1060, H = 820;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: W, minHeight: H, backgroundColor: C.bg, padding: '32px 40px', fontFamily: 'Inter, sans-serif' }}>

      {/* Header */}
      <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 6 }}>
        <span style={{ fontSize: 10, color: C.muted, letterSpacing: 1.5, textTransform: 'uppercase' as const }}>Case 6-2 · Granton Shores</span>
        <span style={{ fontSize: 22, fontWeight: 700, color: C.text, marginTop: 4 }}>Services Procurement: Three-Bid Evaluation</span>
        <span style={{ fontSize: 12, color: C.muted, marginTop: 4 }}>Taylor Winston · City of Granton · Nursing home costs 14% above state average · Deadline: December 19</span>
      </div>

      <div style={{ display: 'flex', height: 1, backgroundColor: C.border, marginBottom: 18 }} />

      {/* Bid comparison table */}
      <div style={{ display: 'flex', flexDirection: 'column', border: `1px solid ${C.border}`, borderRadius: 6, overflow: 'hidden', marginBottom: 20 }}>

        {/* Column headers */}
        <div style={{ display: 'flex' }}>
          <div style={{ display: 'flex', flex: 2, backgroundColor: C.accent, padding: '10px 14px' }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: '#FFFFFF' }}>EVALUATION CRITERION</span>
          </div>
          <div style={{ display: 'flex', flex: 2, flexDirection: 'column', backgroundColor: C.redBg, padding: '10px 14px', borderLeft: `1px solid ${C.border}` }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: C.red }}>BITTNER-MCWHINNIE</span>
            <span style={{ fontSize: 10, color: C.red }}>$52,500 · Local · DISQUALIFY</span>
          </div>
          <div style={{ display: 'flex', flex: 2, flexDirection: 'column', backgroundColor: C.amberBg, padding: '10px 14px', borderLeft: `1px solid ${C.border}` }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: C.amber }}>CHS CONSULTING</span>
            <span style={{ fontSize: 10, color: C.amber }}>$70,000 · 100 mi · WRONG FIT</span>
          </div>
          <div style={{ display: 'flex', flex: 2, flexDirection: 'column', backgroundColor: C.greenBg, padding: '10px 14px', borderLeft: `1px solid ${C.border}` }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: C.green }}>AXELL HEALTHCARE</span>
            <span style={{ fontSize: 10, color: C.green }}>$115,500 · National · RECOMMEND</span>
          </div>
        </div>

        {/* Bid price row */}
        <div style={{ display: 'flex', borderTop: `1px solid ${C.border}` }}>
          <div style={{ display: 'flex', flex: 2, padding: '9px 14px', backgroundColor: C.fill1, alignItems: 'center' }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: C.text }}>Bid Price</span>
          </div>
          <div style={{ display: 'flex', flex: 2, padding: '9px 14px', borderLeft: `1px solid ${C.rule}`, alignItems: 'center' }}>
            <span style={{ fontSize: 11, color: C.muted }}>$52,500</span>
          </div>
          <div style={{ display: 'flex', flex: 2, padding: '9px 14px', borderLeft: `1px solid ${C.rule}`, alignItems: 'center' }}>
            <span style={{ fontSize: 11, color: C.muted }}>$70,000</span>
          </div>
          <div style={{ display: 'flex', flex: 2, padding: '9px 14px', borderLeft: `1px solid ${C.rule}`, alignItems: 'center' }}>
            <span style={{ fontSize: 11, color: C.muted }}>$115,500</span>
          </div>
        </div>

        {/* Savings claim row */}
        <div style={{ display: 'flex', borderTop: `1px solid ${C.border}` }}>
          <div style={{ display: 'flex', flex: 2, padding: '9px 14px', backgroundColor: C.fill1, alignItems: 'center' }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: C.text }}>Savings Claim</span>
          </div>
          <div style={{ display: 'flex', flex: 2, padding: '9px 14px', borderLeft: `1px solid ${C.rule}`, alignItems: 'flex-start', flexDirection: 'column' as const }}>
            <span style={{ fontSize: 11, color: C.red, fontWeight: 700 }}>"At least $11 million"</span>
            <span style={{ fontSize: 10, color: C.muted }}>Unsubstantiated, no methodology</span>
          </div>
          <div style={{ display: 'flex', flex: 2, padding: '9px 14px', borderLeft: `1px solid ${C.rule}`, alignItems: 'flex-start', flexDirection: 'column' as const }}>
            <span style={{ fontSize: 11, color: C.amber }}>3:1 to 30:1 benefit/cost ratio</span>
            <span style={{ fontSize: 10, color: C.muted }}>Vague ratio, no dollar anchor</span>
          </div>
          <div style={{ display: 'flex', flex: 2, padding: '9px 14px', borderLeft: `1px solid ${C.rule}`, alignItems: 'flex-start', flexDirection: 'column' as const }}>
            <span style={{ fontSize: 11, color: C.green, fontWeight: 700 }}>8–10% of expenses (~$1.7M)</span>
            <span style={{ fontSize: 10, color: C.muted }}>Specific, grounded in methodology</span>
          </div>
        </div>

        {/* Experience type row */}
        <div style={{ display: 'flex', borderTop: `1px solid ${C.border}` }}>
          <div style={{ display: 'flex', flex: 2, padding: '9px 14px', backgroundColor: C.fill1, alignItems: 'center' }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: C.text }}>Experience Type</span>
          </div>
          <div style={{ display: 'flex', flex: 2, padding: '9px 14px', borderLeft: `1px solid ${C.rule}`, flexDirection: 'column' as const }}>
            <span style={{ fontSize: 11, color: C.muted }}>11 institutions. Manages long-term care facilities. Consulting work includes construction reviews.</span>
          </div>
          <div style={{ display: 'flex', flex: 2, padding: '9px 14px', borderLeft: `1px solid ${C.rule}`, flexDirection: 'column' as const }}>
            <span style={{ fontSize: 11, color: C.amber }}>11 reviews — mainly hospitals, 3 regional centers. Implemented patient classification systems. Not long-term care.</span>
          </div>
          <div style={{ display: 'flex', flex: 2, padding: '9px 14px', borderLeft: `1px solid ${C.rule}`, flexDirection: 'column' as const }}>
            <span style={{ fontSize: 11, color: C.green }}>15 long-term care facilities. Manages 2,400+ beds in IL and FL. Direct nursing home operational review.</span>
          </div>
        </div>

        {/* Reference quality row */}
        <div style={{ display: 'flex', borderTop: `1px solid ${C.border}` }}>
          <div style={{ display: 'flex', flex: 2, padding: '9px 14px', backgroundColor: C.fill1, alignItems: 'center' }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: C.text }}>Reference Quality</span>
          </div>
          <div style={{ display: 'flex', flex: 2, padding: '9px 14px', borderLeft: `1px solid ${C.rule}`, flexDirection: 'column' as const }}>
            <span style={{ fontSize: 11, color: C.red, fontWeight: 700 }}>FATAL: Two references unlocatable</span>
            <span style={{ fontSize: 10, color: C.muted }}>Anthony Nursing Home — not found. Nithburg Residence Chicago — not found. Wellesley: construction only, not management.</span>
          </div>
          <div style={{ display: 'flex', flex: 2, padding: '9px 14px', borderLeft: `1px solid ${C.rule}`, flexDirection: 'column' as const }}>
            <span style={{ fontSize: 11, color: C.amber }}>Mixed. 3 verifiable: satisfied with work. But all hospital settings — not long-term care context.</span>
          </div>
          <div style={{ display: 'flex', flex: 2, padding: '9px 14px', borderLeft: `1px solid ${C.rule}`, flexDirection: 'column' as const }}>
            <span style={{ fontSize: 11, color: C.green }}>Salem LTC: operational review in progress, projected $420K savings. Directly applicable. Verifiable.</span>
          </div>
        </div>

        {/* Methodology row */}
        <div style={{ display: 'flex', borderTop: `1px solid ${C.border}` }}>
          <div style={{ display: 'flex', flex: 2, padding: '9px 14px', backgroundColor: C.fill1, alignItems: 'center' }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: C.text }}>Methodology</span>
          </div>
          <div style={{ display: 'flex', flex: 2, padding: '9px 14px', borderLeft: `1px solid ${C.rule}`, flexDirection: 'column' as const }}>
            <span style={{ fontSize: 11, color: C.muted }}>Standard review steps. Uses DHHS general guidelines. May not leave ongoing system.</span>
          </div>
          <div style={{ display: 'flex', flex: 2, padding: '9px 14px', borderLeft: `1px solid ${C.rule}`, flexDirection: 'column' as const }}>
            <span style={{ fontSize: 11, color: C.muted }}>Steering committee approach. Plans to leave work standard and patient classification system for ongoing use.</span>
          </div>
          <div style={{ display: 'flex', flex: 2, padding: '9px 14px', borderLeft: `1px solid ${C.rule}`, flexDirection: 'column' as const }}>
            <span style={{ fontSize: 11, color: C.muted }}>Section-by-section operational review. Staffing schedule comparison. Identifies implementation skill requirements. Assist with implementation if required.</span>
          </div>
        </div>

        {/* Verdict row */}
        <div style={{ display: 'flex', borderTop: `1px solid ${C.border}` }}>
          <div style={{ display: 'flex', flex: 2, padding: '9px 14px', backgroundColor: C.accent, alignItems: 'center' }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: '#FFFFFF' }}>VERDICT</span>
          </div>
          <div style={{ display: 'flex', flex: 2, padding: '9px 14px', borderLeft: `1px solid ${C.rule}`, backgroundColor: C.redBg, alignItems: 'center' }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: C.red }}>Disqualify. Fabricated references are a governance risk in public procurement.</span>
          </div>
          <div style={{ display: 'flex', flex: 2, padding: '9px 14px', borderLeft: `1px solid ${C.rule}`, backgroundColor: C.amberBg, alignItems: 'center' }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: C.amber }}>Credible firm, wrong fit. Hospital experience doesn't transfer to long-term care operations.</span>
          </div>
          <div style={{ display: 'flex', flex: 2, padding: '9px 14px', borderLeft: `1px solid ${C.rule}`, backgroundColor: C.greenBg, alignItems: 'center' }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: C.green }}>Recommend. $63K premium disappears in first month of $1.7M savings.</span>
          </div>
        </div>

      </div>

      {/* The core lesson */}
      <div style={{ display: 'flex', gap: 14 }}>
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '12px 14px', backgroundColor: C.fill1, border: `1px solid ${C.border}`, borderRadius: 5 }}>
          <span style={{ fontSize: 12, fontWeight: 700, color: C.text, marginBottom: 4 }}>Why Services Are Different (Ch. 6)</span>
          <span style={{ fontSize: 11, color: C.muted }}>Services can't be inspected before purchase. Quality is intangible until delivery. References are the only proxy for performance. That's why unverifiable references are a disqualifying condition, not a minor concern. The cheapest bid has the weakest evidentiary basis for quality.</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '12px 14px', backgroundColor: C.fill1, border: `1px solid ${C.border}`, borderRadius: 5 }}>
          <span style={{ fontSize: 12, fontWeight: 700, color: C.text, marginBottom: 4 }}>Experience Match Is the Real Filter</span>
          <span style={{ fontSize: 11, color: C.muted }}>Hospitals and long-term care facilities are different operations: different patient classification systems, different staffing models, different regulatory environments, different union dynamics. CHS' hospital experience is adjacent. Axell's long-term care experience is directly applicable. Proximity of experience matters more than volume of experience.</span>
        </div>
      </div>

      {/* Footer */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 14 }}>
        <span style={{ fontSize: 11, color: C.light }}>SCMG 487 | Case 6-2 | Granton Shores</span>
      </div>

    </div>
  );
}

// ============================================================
// CASE 6-3: Haniff Machining — Capital Expenditure Analysis
// ============================================================

function FigCase6_3() {
  const W = 1060, H = 880;

  const costRows = [
    { item: 'List price (Mazak 5-axis CNC)', amount: '$275,000' },
    { item: 'Freight and rigging', amount: '$10,000' },
    { item: 'Tooling investment', amount: '$20,000' },
    { item: 'Total capital outlay', amount: '$305,000', bold: true },
  ];

  const savingsRows = [
    { item: 'Labor reduction: 2 operators eliminated (2 shifts × $25/hr × 2,000 hr)', amount: '+$100,000/yr' },
    { item: 'Programmer added: 20% of $25/hr × 2 shifts × 2,000 hr', amount: '−$20,000/yr' },
    { item: 'Net labor savings', amount: '$80,000/yr', bold: true },
    { item: 'Outsourcing recapture (local machine shop, assumed)', amount: '+$86,000/yr' },
    { item: 'Combined annual benefit (Haley\'s starting point)', amount: '$166,000/yr', bold: true },
    { item: 'Simple payback: $305K / $166K', amount: '~1.8 years', bold: true },
  ];

  const missing = [
    { cat: 'QUANTITATIVE', label: 'Scrap reduction', body: 'CNC produces lower defect rates. On high-value aerospace parts, even 2-3% scrap reduction is material. Not in Haley\'s analysis.' },
    { cat: 'QUANTITATIVE', label: 'Depreciation and tax treatment', body: '20-year useful life. Capital asset treatment on balance sheet. Affects ROI calculation and financial approval threshold.' },
    { cat: 'QUANTITATIVE', label: 'Maintenance delta', body: 'New machine under warranty vs. aging manual equipment with growing maintenance burden. Old machines cost more each year.' },
    { cat: 'QUANTITATIVE', label: 'Outsourcing assumption needs verification', body: 'Haley "believes" the new capacity can absorb $86K. If outsourced work has different specs or customer lock-in, the assumption fails. Payback on labor alone = ~3.8 years.' },
    { cat: 'QUALITATIVE', label: 'Strategic positioning in automotive/aerospace', body: 'Tier 1/2 OEM customers are increasingly requiring CNC precision as a base standard. This machine is about staying in the market, not just cutting cost.' },
    { cat: 'QUALITATIVE', label: 'Workforce transition', body: '2 operators become redundant. Haniff is a 50-year family business. Layoffs vs. reassignment is a cultural decision, not just a cost decision.' },
    { cat: 'QUALITATIVE', label: 'Five-axis opens new capability', body: '5-axis can produce geometries 3-axis can\'t. This isn\'t replacing current capacity — it\'s opening new customer opportunities Haniff doesn\'t currently have access to.' },
    { cat: 'PROCESS', label: 'Where is the cross-functional team?', body: 'Chapter 6: capital acquisitions require engineering, users, finance, marketing, and supply. Haley is a first-week engineer doing this alone. The board will ask who validated the financial assumptions.' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: W, minHeight: H, backgroundColor: C.bg, padding: '32px 40px', fontFamily: 'Inter, sans-serif' }}>

      {/* Header */}
      <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 6 }}>
        <span style={{ fontSize: 10, color: C.muted, letterSpacing: 1.5, textTransform: 'uppercase' as const }}>Case 6-3 · Haniff Machining</span>
        <span style={{ fontSize: 22, fontWeight: 700, color: C.text, marginTop: 4 }}>Capital Equipment Acquisition Analysis</span>
        <span style={{ fontSize: 12, color: C.muted, marginTop: 4 }}>Haley Gregson (week 1 engineer) · Mississauga, Ontario · Board meeting July 29 · Five-axis Mazak CNC</span>
      </div>

      <div style={{ display: 'flex', height: 1, backgroundColor: C.border, marginBottom: 18 }} />

      {/* Cost + Savings side by side */}
      <div style={{ display: 'flex', gap: 16, marginBottom: 20 }}>

        {/* Capital costs */}
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, border: `1px solid ${C.border}`, borderRadius: 6, overflow: 'hidden' }}>
          <div style={{ display: 'flex', backgroundColor: C.accent, padding: '8px 14px' }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: '#FFFFFF' }}>CAPITAL OUTLAY</span>
          </div>
          {costRows.map((r, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 14px', backgroundColor: r.bold ? C.fill2 : (i % 2 === 0 ? C.bg : C.fill1), borderTop: `1px solid ${C.rule}` }}>
              <span style={{ fontSize: 11, color: r.bold ? C.text : C.muted, fontWeight: r.bold ? 700 : 400 }}>{r.item}</span>
              <span style={{ fontSize: 11, color: r.bold ? C.text : C.muted, fontWeight: r.bold ? 700 : 400 }}>{r.amount}</span>
            </div>
          ))}
          <div style={{ display: 'flex', padding: '8px 14px', backgroundColor: C.fill1 }}>
            <span style={{ fontSize: 11, color: C.muted, fontStyle: 'italic' as const }}>Useful life: ~20 years. Already have 3 Mazak CNC machines. Tech center 1 hr away in Cambridge, ON.</span>
          </div>
        </div>

        {/* Savings analysis */}
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1.4, border: `1px solid ${C.border}`, borderRadius: 6, overflow: 'hidden' }}>
          <div style={{ display: 'flex', backgroundColor: C.accent, padding: '8px 14px' }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: '#FFFFFF' }}>HALEY'S SAVINGS ANALYSIS (STARTING POINT)</span>
          </div>
          {savingsRows.map((r, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 14px', backgroundColor: r.bold ? C.fill2 : (i % 2 === 0 ? C.bg : C.fill1), borderTop: `1px solid ${C.rule}` }}>
              <span style={{ fontSize: 11, color: r.bold ? C.text : C.muted, fontWeight: r.bold ? 700 : 400, flex: 1, paddingRight: 8 }}>{r.item}</span>
              <span style={{ fontSize: 11, color: r.bold ? C.green : C.muted, fontWeight: r.bold ? 700 : 400, flexShrink: 0 }}>{r.amount}</span>
            </div>
          ))}
        </div>

      </div>

      {/* What Haley still needs */}
      <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 14 }}>
        <span style={{ fontSize: 12, fontWeight: 700, color: C.text, marginBottom: 10 }}>WHAT HALEY STILL NEEDS TO CONSIDER (The Real Question)</span>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' as const }}>
          {missing.map((m, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', flex: '1 1 46%', minWidth: 200, padding: '10px 12px', backgroundColor: C.fill1, border: `1px solid ${C.border}`, borderRadius: 5 }}>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 4 }}>
                <span style={{ fontSize: 9, fontWeight: 700, color: m.cat === 'QUALITATIVE' ? C.amber : m.cat === 'PROCESS' ? C.red : C.muted, letterSpacing: 0.8, backgroundColor: m.cat === 'QUALITATIVE' ? C.amberBg : m.cat === 'PROCESS' ? C.redBg : C.fill2, padding: '2px 6px', borderRadius: 3 }}>{m.cat}</span>
                <span style={{ fontSize: 12, fontWeight: 700, color: C.text }}>{m.label}</span>
              </div>
              <span style={{ fontSize: 11, color: C.muted }}>{m.body}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 6 }}>
        <span style={{ fontSize: 11, color: C.light }}>SCMG 487 | Case 6-3 | Haniff Machining</span>
      </div>

    </div>
  );
}

// ============================================================

async function main() {
  const fonts = await loadFonts();
  console.log('Fonts loaded. Generating Ch 6 case study figures...');

  const figCase6_1 = await render(<FigCase6_1 />, 1060, 860, fonts);
  save(figCase6_1, 'fig-case-6-1-nge-tco-analysis.png');

  const figCase6_2 = await render(<FigCase6_2 />, 1060, 820, fonts);
  save(figCase6_2, 'fig-case-6-2-granton-shores-bid-matrix.png');

  const figCase6_3 = await render(<FigCase6_3 />, 1060, 880, fonts);
  save(figCase6_3, 'fig-case-6-3-haniff-capex-analysis.png');

  console.log('Done. 3 case study figures written to case-studies/');
}

main().catch(console.error);
