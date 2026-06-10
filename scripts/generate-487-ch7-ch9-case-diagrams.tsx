#!/usr/bin/env npx tsx

import React from 'react';

/**
 * SCMG 487 Chapter 7 + 9 Case Study Diagrams
 *
 * Case 7-1 RAS Technologies:
 *   fig-case-7-1-ras-quality-failure-cascade.png
 *
 * Case 7-2 Caledon Concrete Mixers:
 *   fig-case-7-2-caledon-supplier-scorecard.png
 *
 * Case 7-3 Wentworth Hospital:
 *   fig-case-7-3-wentworth-repair-levels.png
 *
 * Case 9-1 Cameron Power Equipment:
 *   fig-case-9-1-cameron-warehouse-crossdock.png
 *
 * Case 9-2 Dhiman Electronics:
 *   fig-case-9-2-dhiman-carrier-analysis.png
 *
 * Run from imaginationg-main root:
 *   npx tsx scripts/generate-487-ch7-ch9-case-diagrams.tsx
 */

import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import * as fs from 'fs';
import * as path from 'path';

const OUT = path.join(
  '/Users/marsonemac/Documents/projects/marcus-gpi-brain',
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
  blue:     '#1E3A5F',
  blueBg:   '#DBEAFE',
  teal:     '#0F766E',
  tealBg:   '#CCFBF1',
  purple:   '#6B21A8',
  purpleBg: '#F3E8FF',
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
// CASE 7-1: RAS Technologies — Quality Failure Cost Cascade
// ============================================================

function FigCase7_1() {
  const W = 1100, H = 980;

  const cascade = [
    { stage: '1. COMPONENT', item: 'Girard 21C pressure sensor', cost: '$70.62 each', note: 'Recommended by Girard for "hostile media in severe environments"' },
    { stage: '2. FIELD FAILURE', item: '11 RAS-200G correctors fail in China', cost: 'Lost gas volume data', note: 'Guangxi Gas: 1,600 units, 4 of 5 models affected at 50C / 90% humidity' },
    { stage: '3. FULL RECALL', item: 'Replace all 1,600 units (Guangxi)', cost: '$560,000', note: '1,600 x $350 avg manufacturing cost' },
    { stage: '4. OBSOLETE INVENTORY', item: '1,225 sensors now unusable', cost: '$86,510', note: 'Discontinued from use, sitting in Fremont warehouse' },
    { stage: '5. FIELD EXPOSURE', item: '5,775 total units shipped globally', cost: 'Unknown', note: '4 of 5 models use the same sensor. Only 11 failures found so far.' },
  ];

  const leverage = [
    { label: '$326,665 payable due Nov 30', type: 'Financial', color: C.green },
    { label: '3 independent test confirmations', type: 'Evidence', color: C.blue },
    { label: 'Girard admits humidity affects circuit', type: 'Evidence', color: C.blue },
    { label: '$390K/yr CL150 regulator relationship', type: 'Dependency', color: C.amber },
    { label: 'Girard data sheet promised suitability', type: 'Liability', color: C.red },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: W, minHeight: H, backgroundColor: C.bg, padding: '32px 40px', fontFamily: 'Inter, sans-serif' }}>
      <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 6 }}>
        <span style={{ fontSize: 10, color: C.muted, letterSpacing: 1.5, textTransform: 'uppercase' as const }}>Case 7-1 · RAS Technologies</span>
        <span style={{ fontSize: 22, fontWeight: 700, color: C.text, marginTop: 4 }}>Quality Failure Cost Cascade: $70 Sensor, $560K Recall</span>
        <span style={{ fontSize: 12, color: C.muted, marginTop: 4 }}>Victoria Barclay · Fremont, CA · $50M revenue · Girard (Fortune 100, $43B) denies responsibility</span>
      </div>
      <div style={{ display: 'flex', height: 1, backgroundColor: C.border, marginBottom: 16 }} />

      {/* Key numbers */}
      <div style={{ display: 'flex', gap: 10, marginBottom: 18 }}>
        {[
          { label: 'Sensor Unit Cost', value: '$70.62', sub: 'The root cause', bg: C.fill1, border: C.border, color: C.text },
          { label: 'Recall Cost', value: '$560,000', sub: '1,600 units x $350', bg: C.redBg, border: C.red, color: C.red },
          { label: 'Obsolete Inventory', value: '$86,510', sub: '1,225 sensors stranded', bg: C.amberBg, border: C.amber, color: C.amber },
          { label: 'Payable to Girard', value: '$326,665', sub: 'Leverage: due Nov 30', bg: C.greenBg, border: C.green, color: C.green },
          { label: 'Field Exposure', value: '5,775 units', sub: '4 of 5 models affected', bg: C.blueBg, border: C.blue, color: C.blue },
        ].map((c, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '10px 12px', backgroundColor: c.bg, border: `1px solid ${c.border}`, borderRadius: 6 }}>
            <span style={{ fontSize: 9, color: c.color, letterSpacing: 1, textTransform: 'uppercase' as const }}>{c.label}</span>
            <span style={{ fontSize: 18, fontWeight: 700, color: c.color, marginTop: 2 }}>{c.value}</span>
            <span style={{ fontSize: 9, color: c.color }}>{c.sub}</span>
          </div>
        ))}
      </div>

      {/* Cascade table */}
      <span style={{ fontSize: 12, fontWeight: 700, color: C.text, marginBottom: 8 }}>EXTERNAL FAILURE CASCADE (Ch. 7: Most Expensive Cost of Quality Category)</span>
      <div style={{ display: 'flex', flexDirection: 'column', border: `1px solid ${C.border}`, borderRadius: 6, overflow: 'hidden', marginBottom: 18 }}>
        <div style={{ display: 'flex', backgroundColor: C.accent }}>
          <div style={{ display: 'flex', flex: 1.2, padding: '7px 12px' }}><span style={{ fontSize: 9, fontWeight: 700, color: '#FFFFFF' }}>STAGE</span></div>
          <div style={{ display: 'flex', flex: 2, padding: '7px 12px', borderLeft: '1px solid #444' }}><span style={{ fontSize: 9, fontWeight: 700, color: '#FFFFFF' }}>ITEM</span></div>
          <div style={{ display: 'flex', flex: 1.2, padding: '7px 12px', borderLeft: '1px solid #444' }}><span style={{ fontSize: 9, fontWeight: 700, color: '#FFFFFF' }}>COST</span></div>
          <div style={{ display: 'flex', flex: 3, padding: '7px 12px', borderLeft: '1px solid #444' }}><span style={{ fontSize: 9, fontWeight: 700, color: '#FFFFFF' }}>DETAIL</span></div>
        </div>
        {cascade.map((r, i) => (
          <div key={i} style={{ display: 'flex', backgroundColor: i % 2 === 0 ? C.bg : C.fill1, borderTop: `1px solid ${C.rule}` }}>
            <div style={{ display: 'flex', flex: 1.2, padding: '7px 12px', alignItems: 'center' }}>
              <span style={{ fontSize: 10, fontWeight: 700, color: i >= 2 ? C.red : C.text }}>{r.stage}</span>
            </div>
            <div style={{ display: 'flex', flex: 2, padding: '7px 12px', borderLeft: `1px solid ${C.rule}`, alignItems: 'center' }}>
              <span style={{ fontSize: 10, color: C.text }}>{r.item}</span>
            </div>
            <div style={{ display: 'flex', flex: 1.2, padding: '7px 12px', borderLeft: `1px solid ${C.rule}`, alignItems: 'center' }}>
              <span style={{ fontSize: 10, fontWeight: 700, color: i >= 2 ? C.red : C.muted }}>{r.cost}</span>
            </div>
            <div style={{ display: 'flex', flex: 3, padding: '7px 12px', borderLeft: `1px solid ${C.rule}`, alignItems: 'center' }}>
              <span style={{ fontSize: 9, color: C.muted }}>{r.note}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Leverage points */}
      <span style={{ fontSize: 12, fontWeight: 700, color: C.text, marginBottom: 8 }}>VICTORIA'S LEVERAGE POINTS (November 5 Meeting)</span>
      <div style={{ display: 'flex', gap: 10, marginBottom: 18 }}>
        {leverage.map((l, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '10px 12px', border: `1px solid ${C.border}`, borderRadius: 6, backgroundColor: C.fill1 }}>
            <span style={{ fontSize: 9, fontWeight: 700, color: l.color, letterSpacing: 1, textTransform: 'uppercase' as const, marginBottom: 4 }}>{l.type}</span>
            <span style={{ fontSize: 10, color: C.text }}>{l.label}</span>
          </div>
        ))}
      </div>

      {/* Key insight */}
      <div style={{ display: 'flex', padding: '12px 16px', backgroundColor: C.fill1, border: `1px solid ${C.border}`, borderRadius: 6 }}>
        <span style={{ fontSize: 11, color: C.text }}>
          <span style={{ fontWeight: 700 }}>The lesson:</span> RAS relied on Girard's product brochure and recommendation without independent verification for actual operating conditions. Prevention cost (testing the sensor under field conditions before mass deployment) would have been minimal compared to $646K+ in recall and obsolete inventory. This is Ch. 7's core argument: prevention investment reduces all other cost-of-quality categories.
        </span>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 14 }}>
        <span style={{ fontSize: 11, color: C.light }}>SCMG 487 | Case 7-1 | RAS Technologies</span>
      </div>
    </div>
  );
}

// ============================================================
// CASE 7-2: Caledon Concrete Mixers — Supplier Scorecard
// ============================================================

function FigCase7_2() {
  const W = 1100, H = 1020;

  const criteria = [
    { name: 'Price', wt: 15, bgk: 7, igr: 8, mor: 9 },
    { name: 'Warranty', wt: 5, bgk: 5, igr: 7, mor: 7 },
    { name: 'Lead time', wt: 20, bgk: 3, igr: 9, mor: 7 },
    { name: 'Inventory cost', wt: 10, bgk: 4, igr: 8, mor: 8 },
    { name: 'Logistics / Distribution', wt: 10, bgk: 2, igr: 10, mor: 7 },
    { name: 'Order flexibility', wt: 15, bgk: 3, igr: 8, mor: 7 },
    { name: 'Payment terms', wt: 10, bgk: 5, igr: 8, mor: 8 },
    { name: 'Supplier financial stability', wt: 5, bgk: 7, igr: 7, mor: 7 },
  ];

  const profiles = [
    { name: 'BGK GmbH', origin: 'Germany', price: '$3,600', warranty: '1 year', lead: '3-5 months', fail: '0.5%', special: '30+ year relationship. No NA distribution. Full container minimums.', color: C.blue, score: 380 },
    { name: 'IGR Industries', origin: 'Italy', price: '$3,400 + FX', warranty: '5 years', lead: 'JIT / 2-day', fail: '1.0%', special: 'Proposed Missouri facility. No current NA presence. Best scorecard.', color: C.green, score: 750 },
    { name: 'Moretti SpA', origin: 'Italy', price: '$3,200 + FX', warranty: '5 years', lead: 'Standard', fail: '1.5%', special: 'Consignment inventory model. Had oil leak issue 5 years ago. 18 countries.', color: C.amber, score: 680 },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: W, minHeight: H, backgroundColor: C.bg, padding: '32px 40px', fontFamily: 'Inter, sans-serif' }}>
      <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 6 }}>
        <span style={{ fontSize: 10, color: C.muted, letterSpacing: 1.5, textTransform: 'uppercase' as const }}>Case 7-2 · Caledon Concrete Mixers</span>
        <span style={{ fontSize: 22, fontWeight: 700, color: C.text, marginTop: 4 }}>Gearbox Supplier Evaluation: 30-Year Relationship vs. Better Score</span>
        <span style={{ fontSize: 12, color: C.muted, marginTop: 4 }}>Sarah Jenkins · Caledon, Ontario · CCM + IMC combined volume: 2,800-3,300 units/year · $3,600/gearbox · 5-year contract</span>
      </div>
      <div style={{ display: 'flex', height: 1, backgroundColor: C.border, marginBottom: 16 }} />

      {/* Score summary cards */}
      <div style={{ display: 'flex', gap: 10, marginBottom: 16 }}>
        {profiles.map((p, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '12px 14px', border: `1.5px solid ${p.color}`, borderRadius: 6, backgroundColor: C.bg }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: p.color }}>{p.name}</span>
              <span style={{ fontSize: 9, color: C.muted }}>{p.origin}</span>
            </div>
            <span style={{ fontSize: 28, fontWeight: 700, color: p.color }}>{p.score}</span>
            <div style={{ display: 'flex', gap: 12, marginTop: 6 }}>
              <span style={{ fontSize: 9, color: C.muted }}>Price: {p.price}</span>
              <span style={{ fontSize: 9, color: C.muted }}>Fail: {p.fail}</span>
              <span style={{ fontSize: 9, color: C.muted }}>Lead: {p.lead}</span>
            </div>
            <span style={{ fontSize: 9, color: C.muted, marginTop: 4 }}>{p.special}</span>
          </div>
        ))}
      </div>

      {/* Weighted scorecard table */}
      <div style={{ display: 'flex', flexDirection: 'column', border: `1px solid ${C.border}`, borderRadius: 6, overflow: 'hidden', marginBottom: 16 }}>
        <div style={{ display: 'flex', backgroundColor: C.accent }}>
          <div style={{ display: 'flex', flex: 2, padding: '7px 12px' }}><span style={{ fontSize: 9, fontWeight: 700, color: '#FFFFFF' }}>CRITERIA</span></div>
          <div style={{ display: 'flex', flex: 0.6, padding: '7px 8px', borderLeft: '1px solid #444', justifyContent: 'center' }}><span style={{ fontSize: 9, fontWeight: 700, color: '#FFFFFF' }}>WT</span></div>
          <div style={{ display: 'flex', flex: 0.5, padding: '7px 8px', borderLeft: '1px solid #444', justifyContent: 'center' }}><span style={{ fontSize: 9, fontWeight: 700, color: '#FFFFFF' }}>BGK</span></div>
          <div style={{ display: 'flex', flex: 0.8, padding: '7px 8px', borderLeft: '1px solid #444', justifyContent: 'center' }}><span style={{ fontSize: 9, fontWeight: 700, color: C.blueBg }}>BGK SCORE</span></div>
          <div style={{ display: 'flex', flex: 0.5, padding: '7px 8px', borderLeft: '1px solid #444', justifyContent: 'center' }}><span style={{ fontSize: 9, fontWeight: 700, color: '#FFFFFF' }}>IGR</span></div>
          <div style={{ display: 'flex', flex: 0.8, padding: '7px 8px', borderLeft: '1px solid #444', justifyContent: 'center' }}><span style={{ fontSize: 9, fontWeight: 700, color: C.greenBg }}>IGR SCORE</span></div>
          <div style={{ display: 'flex', flex: 0.5, padding: '7px 8px', borderLeft: '1px solid #444', justifyContent: 'center' }}><span style={{ fontSize: 9, fontWeight: 700, color: '#FFFFFF' }}>MOR</span></div>
          <div style={{ display: 'flex', flex: 0.8, padding: '7px 8px', borderLeft: '1px solid #444', justifyContent: 'center' }}><span style={{ fontSize: 9, fontWeight: 700, color: C.amberBg }}>MOR SCORE</span></div>
        </div>
        {criteria.map((r, i) => (
          <div key={i} style={{ display: 'flex', backgroundColor: i % 2 === 0 ? C.bg : C.fill1, borderTop: `1px solid ${C.rule}` }}>
            <div style={{ display: 'flex', flex: 2, padding: '6px 12px', alignItems: 'center' }}>
              <span style={{ fontSize: 10, fontWeight: 700, color: C.text }}>{r.name}</span>
            </div>
            <div style={{ display: 'flex', flex: 0.6, padding: '6px 8px', borderLeft: `1px solid ${C.rule}`, justifyContent: 'center', alignItems: 'center' }}>
              <span style={{ fontSize: 10, color: C.muted }}>{r.wt}</span>
            </div>
            <div style={{ display: 'flex', flex: 0.5, padding: '6px 8px', borderLeft: `1px solid ${C.rule}`, justifyContent: 'center', alignItems: 'center' }}>
              <span style={{ fontSize: 10, color: r.bgk <= 3 ? C.red : C.muted }}>{r.bgk}</span>
            </div>
            <div style={{ display: 'flex', flex: 0.8, padding: '6px 8px', borderLeft: `1px solid ${C.rule}`, justifyContent: 'center', alignItems: 'center', backgroundColor: r.bgk <= 3 ? C.redBg : 'transparent' }}>
              <span style={{ fontSize: 10, fontWeight: 700, color: r.bgk <= 3 ? C.red : C.blue }}>{r.bgk * r.wt}</span>
            </div>
            <div style={{ display: 'flex', flex: 0.5, padding: '6px 8px', borderLeft: `1px solid ${C.rule}`, justifyContent: 'center', alignItems: 'center' }}>
              <span style={{ fontSize: 10, color: r.igr >= 9 ? C.green : C.muted }}>{r.igr}</span>
            </div>
            <div style={{ display: 'flex', flex: 0.8, padding: '6px 8px', borderLeft: `1px solid ${C.rule}`, justifyContent: 'center', alignItems: 'center', backgroundColor: r.igr >= 9 ? C.greenBg : 'transparent' }}>
              <span style={{ fontSize: 10, fontWeight: 700, color: C.green }}>{r.igr * r.wt}</span>
            </div>
            <div style={{ display: 'flex', flex: 0.5, padding: '6px 8px', borderLeft: `1px solid ${C.rule}`, justifyContent: 'center', alignItems: 'center' }}>
              <span style={{ fontSize: 10, color: C.muted }}>{r.mor}</span>
            </div>
            <div style={{ display: 'flex', flex: 0.8, padding: '6px 8px', borderLeft: `1px solid ${C.rule}`, justifyContent: 'center', alignItems: 'center' }}>
              <span style={{ fontSize: 10, fontWeight: 700, color: C.amber }}>{r.mor * r.wt}</span>
            </div>
          </div>
        ))}
        {/* Total row */}
        <div style={{ display: 'flex', backgroundColor: C.fill2, borderTop: `2px solid ${C.borderDk}` }}>
          <div style={{ display: 'flex', flex: 2, padding: '8px 12px', alignItems: 'center' }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: C.text }}>TOTAL</span>
          </div>
          <div style={{ display: 'flex', flex: 0.6, padding: '8px 8px', borderLeft: `1px solid ${C.rule}`, justifyContent: 'center', alignItems: 'center' }}>
            <span style={{ fontSize: 10, fontWeight: 700, color: C.muted }}>90</span>
          </div>
          <div style={{ display: 'flex', flex: 0.5, padding: '8px 8px', borderLeft: `1px solid ${C.rule}` }} />
          <div style={{ display: 'flex', flex: 0.8, padding: '8px 8px', borderLeft: `1px solid ${C.rule}`, justifyContent: 'center', alignItems: 'center' }}>
            <span style={{ fontSize: 14, fontWeight: 700, color: C.blue }}>380</span>
          </div>
          <div style={{ display: 'flex', flex: 0.5, padding: '8px 8px', borderLeft: `1px solid ${C.rule}` }} />
          <div style={{ display: 'flex', flex: 0.8, padding: '8px 8px', borderLeft: `1px solid ${C.rule}`, justifyContent: 'center', alignItems: 'center' }}>
            <span style={{ fontSize: 14, fontWeight: 700, color: C.green }}>750</span>
          </div>
          <div style={{ display: 'flex', flex: 0.5, padding: '8px 8px', borderLeft: `1px solid ${C.rule}` }} />
          <div style={{ display: 'flex', flex: 0.8, padding: '8px 8px', borderLeft: `1px solid ${C.rule}`, justifyContent: 'center', alignItems: 'center' }}>
            <span style={{ fontSize: 14, fontWeight: 700, color: C.amber }}>680</span>
          </div>
        </div>
      </div>

      {/* Cost of quality math */}
      <span style={{ fontSize: 12, fontWeight: 700, color: C.text, marginBottom: 8 }}>COST OF QUALITY MATH (Does BGK Quality Justify the Premium?)</span>
      <div style={{ display: 'flex', gap: 10, marginBottom: 16 }}>
        {[
          { label: 'BGK Quality Cost', fail: '0.5%', units: '15 failures', cost: '$54,000/yr', color: C.blue },
          { label: 'IGR Quality Cost', fail: '1.0%', units: '30 failures', cost: '$102,000/yr', color: C.green },
          { label: 'Moretti Quality Cost', fail: '1.5%', units: '45 failures', cost: '$135,000/yr', color: C.amber },
          { label: 'BGK Price Premium vs IGR', fail: '$200/unit', units: '3,000 units', cost: '$600,000/yr', color: C.red },
        ].map((q, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '10px 12px', border: `1px solid ${q.color}`, borderRadius: 6, backgroundColor: C.fill1 }}>
            <span style={{ fontSize: 9, fontWeight: 700, color: q.color, letterSpacing: 1, textTransform: 'uppercase' as const }}>{q.label}</span>
            <span style={{ fontSize: 16, fontWeight: 700, color: q.color, marginTop: 2 }}>{q.cost}</span>
            <span style={{ fontSize: 9, color: C.muted, marginTop: 2 }}>{q.fail} x {q.units}</span>
          </div>
        ))}
      </div>

      {/* Key insight */}
      <div style={{ display: 'flex', padding: '12px 16px', backgroundColor: C.fill1, border: `1px solid ${C.border}`, borderRadius: 6 }}>
        <span style={{ fontSize: 11, color: C.text }}>
          <span style={{ fontWeight: 700 }}>The math is clear:</span> BGK's quality advantage (0.5% vs 1.0%) saves $48K/year in failure costs. BGK's price premium costs $600K/year. Quality doesn't justify the premium. But the scorecard is missing: total cost of ownership (currency risk), switching costs (qualifying IGR with no NA track record), and relationship value (30 years of data). IGR's Missouri facility is a promise, not a warehouse.
        </span>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 14 }}>
        <span style={{ fontSize: 11, color: C.light }}>SCMG 487 | Case 7-2 | Caledon Concrete Mixers</span>
      </div>
    </div>
  );
}

// ============================================================
// CASE 7-3: Wentworth Hospital — Repair Levels Analysis
// ============================================================

function FigCase7_3() {
  const W = 1100, H = 920;

  const levels = [
    { level: 'Level 1', name: 'Preventive Maintenance', current: 'In-house (biomed)', proposed: 'In-house (no change)', cost: 'Included in $3M budget', feasible: true, color: C.green },
    { level: 'Level 2', name: 'Screening and Estimates', current: 'OEM (Robinson)', proposed: 'In-house (with training)', cost: '$3K training', feasible: true, color: C.green },
    { level: 'Level 3', name: 'Minor Repairs', current: 'OEM (Robinson)', proposed: 'In-house (with tools)', cost: '$15K parts/tools', feasible: true, color: C.green },
    { level: 'Level 4', name: 'Large/Complex Repairs', current: 'OEM (Robinson)', proposed: 'OEM (Robinson)', cost: 'Unchanged', feasible: false, color: C.red },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: W, minHeight: H, backgroundColor: C.bg, padding: '32px 40px', fontFamily: 'Inter, sans-serif' }}>
      <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 6 }}>
        <span style={{ fontSize: 10, color: C.muted, letterSpacing: 1.5, textTransform: 'uppercase' as const }}>Case 7-3 · Wentworth Hospital</span>
        <span style={{ fontSize: 22, fontWeight: 700, color: C.text, marginTop: 4 }}>Endoscope Repair: OEM Lock-In vs. In-House Capability</span>
        <span style={{ fontSize: 12, color: C.muted, marginTop: 4 }}>Rebecca Hogan · Hamilton, Ontario · ~2,500 procedures/yr · $90K/yr repair (Wentworth) · $350K/yr (NHS network)</span>
      </div>
      <div style={{ display: 'flex', height: 1, backgroundColor: C.border, marginBottom: 16 }} />

      {/* Key numbers */}
      <div style={{ display: 'flex', gap: 10, marginBottom: 16 }}>
        {[
          { label: 'Wentworth Repairs', value: '$90,000/yr', sub: 'Sent to OEM, 2-3 week turnaround', bg: C.redBg, border: C.red, color: C.red },
          { label: 'NHS Network Repairs', value: '$350,000/yr', sub: 'Four hospitals combined', bg: C.amberBg, border: C.amber, color: C.amber },
          { label: 'Levels 1-3 (Addressable)', value: '80% of costs', sub: '$280K addressable across NHS', bg: C.greenBg, border: C.green, color: C.green },
          { label: 'Startup Investment', value: '$18,000', sub: '$15K tools + $3K training', bg: C.blueBg, border: C.blue, color: C.blue },
          { label: 'Toronto Precedent', value: '40% savings', sub: '7 hospitals, centralized model', bg: C.fill1, border: C.border, color: C.text },
        ].map((c, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '10px 12px', backgroundColor: c.bg, border: `1px solid ${c.border}`, borderRadius: 6 }}>
            <span style={{ fontSize: 9, color: c.color, letterSpacing: 1, textTransform: 'uppercase' as const }}>{c.label}</span>
            <span style={{ fontSize: 16, fontWeight: 700, color: c.color, marginTop: 2 }}>{c.value}</span>
            <span style={{ fontSize: 9, color: c.color }}>{c.sub}</span>
          </div>
        ))}
      </div>

      {/* Four repair levels */}
      <span style={{ fontSize: 12, fontWeight: 700, color: C.text, marginBottom: 8 }}>FOUR REPAIR LEVELS: Make-or-Buy at Each Level</span>
      <div style={{ display: 'flex', flexDirection: 'column', border: `1px solid ${C.border}`, borderRadius: 6, overflow: 'hidden', marginBottom: 16 }}>
        <div style={{ display: 'flex', backgroundColor: C.accent }}>
          <div style={{ display: 'flex', flex: 0.8, padding: '7px 12px' }}><span style={{ fontSize: 9, fontWeight: 700, color: '#FFFFFF' }}>LEVEL</span></div>
          <div style={{ display: 'flex', flex: 1.5, padding: '7px 12px', borderLeft: '1px solid #444' }}><span style={{ fontSize: 9, fontWeight: 700, color: '#FFFFFF' }}>ACTIVITY</span></div>
          <div style={{ display: 'flex', flex: 1.2, padding: '7px 12px', borderLeft: '1px solid #444' }}><span style={{ fontSize: 9, fontWeight: 700, color: '#FFFFFF' }}>CURRENT</span></div>
          <div style={{ display: 'flex', flex: 1.5, padding: '7px 12px', borderLeft: '1px solid #444' }}><span style={{ fontSize: 9, fontWeight: 700, color: '#FFFFFF' }}>PROPOSED</span></div>
          <div style={{ display: 'flex', flex: 1, padding: '7px 12px', borderLeft: '1px solid #444' }}><span style={{ fontSize: 9, fontWeight: 700, color: '#FFFFFF' }}>INVESTMENT</span></div>
        </div>
        {levels.map((l, i) => (
          <div key={i} style={{ display: 'flex', backgroundColor: l.feasible ? (i % 2 === 0 ? C.bg : C.fill1) : C.redBg, borderTop: `1px solid ${C.rule}` }}>
            <div style={{ display: 'flex', flex: 0.8, padding: '8px 12px', alignItems: 'center' }}>
              <span style={{ fontSize: 10, fontWeight: 700, color: l.color }}>{l.level}</span>
            </div>
            <div style={{ display: 'flex', flex: 1.5, padding: '8px 12px', borderLeft: `1px solid ${C.rule}`, alignItems: 'center' }}>
              <span style={{ fontSize: 10, fontWeight: 700, color: C.text }}>{l.name}</span>
            </div>
            <div style={{ display: 'flex', flex: 1.2, padding: '8px 12px', borderLeft: `1px solid ${C.rule}`, alignItems: 'center' }}>
              <span style={{ fontSize: 10, color: C.muted }}>{l.current}</span>
            </div>
            <div style={{ display: 'flex', flex: 1.5, padding: '8px 12px', borderLeft: `1px solid ${C.rule}`, alignItems: 'center' }}>
              <span style={{ fontSize: 10, fontWeight: 700, color: l.feasible ? C.green : C.red }}>{l.proposed}</span>
            </div>
            <div style={{ display: 'flex', flex: 1, padding: '8px 12px', borderLeft: `1px solid ${C.rule}`, alignItems: 'center' }}>
              <span style={{ fontSize: 10, color: C.muted }}>{l.cost}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Irvine disaster */}
      <span style={{ fontSize: 12, fontWeight: 700, color: C.red, marginBottom: 8 }}>THE IRVINE MEDICAL SERVICES DISASTER (Why Third Parties Failed)</span>
      <div style={{ display: 'flex', gap: 10, marginBottom: 16 }}>
        {[
          { label: 'Promise', detail: '20-80% cheaper than OEMs, 3-5 day turnaround, "repair only what is broken"' },
          { label: 'Reality', detail: '3 weeks return. 13 defects introduced. Zero actual repair. Metal filings inside housing. False service report.' },
          { label: 'Aftermath', detail: 'Second repair attempt: angulation wire snapped again on first use. Robinson then charged extra for third-party damage on another scope.' },
        ].map((d, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '10px 12px', backgroundColor: i === 0 ? C.greenBg : (i === 1 ? C.redBg : C.amberBg), border: `1px solid ${i === 0 ? C.green : (i === 1 ? C.red : C.amber)}`, borderRadius: 6 }}>
            <span style={{ fontSize: 10, fontWeight: 700, color: i === 0 ? C.green : (i === 1 ? C.red : C.amber), marginBottom: 4 }}>{d.label}</span>
            <span style={{ fontSize: 10, color: C.text }}>{d.detail}</span>
          </div>
        ))}
      </div>

      {/* ROI calculation */}
      <div style={{ display: 'flex', gap: 14, marginBottom: 16 }}>
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '12px 16px', backgroundColor: C.greenBg, border: `1.5px solid ${C.green}`, borderRadius: 6 }}>
          <span style={{ fontSize: 10, fontWeight: 700, color: C.green, marginBottom: 6 }}>ROI: IN-HOUSE (CONSERVATIVE)</span>
          <span style={{ fontSize: 10, color: C.text }}>{'\u203A'} Addressable: $280K/yr (80% of $350K NHS)</span>
          <span style={{ fontSize: 10, color: C.text }}>{'\u203A'} At 25% savings: $70K/yr</span>
          <span style={{ fontSize: 10, color: C.text }}>{'\u203A'} Startup: $18K</span>
          <span style={{ fontSize: 10, color: C.green, fontWeight: 700, marginTop: 4 }}>{'\u203A'} Payback: under 3 months</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '12px 16px', backgroundColor: C.blueBg, border: `1.5px solid ${C.blue}`, borderRadius: 6 }}>
          <span style={{ fontSize: 10, fontWeight: 700, color: C.blue, marginBottom: 6 }}>ROI: IN-HOUSE (TORONTO BENCHMARK)</span>
          <span style={{ fontSize: 10, color: C.text }}>{'\u203A'} Addressable: $280K/yr</span>
          <span style={{ fontSize: 10, color: C.text }}>{'\u203A'} At 40% savings: $112K/yr</span>
          <span style={{ fontSize: 10, color: C.text }}>{'\u203A'} Startup: $18K</span>
          <span style={{ fontSize: 10, color: C.blue, fontWeight: 700, marginTop: 4 }}>{'\u203A'} Payback: under 2 months</span>
        </div>
      </div>

      {/* Key insight */}
      <div style={{ display: 'flex', padding: '12px 16px', backgroundColor: C.fill1, border: `1px solid ${C.border}`, borderRadius: 6 }}>
        <span style={{ fontSize: 11, color: C.text }}>
          <span style={{ fontWeight: 700 }}>The OEM lock-in pattern:</span> Robinson controls components, voids warranties on third-party repairs, and has no incentive to reduce costs. The Irvine disaster actually strengthened Robinson's lock-in by proving the risk of alternatives. In-house repair (levels 2-3) with Robinson supplying tools and training is the pragmatic middle ground: reduces cost, speeds turnaround (1-2 days vs 2-3 weeks), and preserves the OEM relationship for complex work.
        </span>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 14 }}>
        <span style={{ fontSize: 11, color: C.light }}>SCMG 487 | Case 7-3 | Wentworth Hospital</span>
      </div>
    </div>
  );
}

// ============================================================
// CASE 9-1: Cameron Power Equipment — Warehouse vs Cross-Dock
// ============================================================

function FigCase9_1() {
  const W = 1100, H = 900;

  const currentCosts = [
    { item: 'Warehouse operating', monthly: '$5,250', annual: '$63,000' },
    { item: 'Salaries / wages / admin', monthly: '$6,500', annual: '$78,000' },
    { item: 'Freight: Charlotte to Atlanta (8 TL x $725)', monthly: '$5,800', annual: '$69,600' },
    { item: 'Freight: Columbia to Atlanta (4 TL x $625)', monthly: '$2,500', annual: '$30,000' },
    { item: 'Inventory holding (16.5% x $400K)', monthly: '$5,500', annual: '$66,000' },
  ];

  const proposedCosts = [
    { item: 'Merwin cross-dock fee', monthly: '$7,000', annual: '$84,000' },
    { item: 'Freight: Charlotte to Atlanta (daily TL, ~22/mo)', monthly: '$15,950', annual: '$191,400' },
    { item: 'Freight: Columbia to Charlotte (4 x $260)', monthly: '$1,040', annual: '$12,480' },
    { item: 'Inventory holding (16.5% x $200K)', monthly: '$2,750', annual: '$33,000' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: W, minHeight: H, backgroundColor: C.bg, padding: '32px 40px', fontFamily: 'Inter, sans-serif' }}>
      <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 6 }}>
        <span style={{ fontSize: 10, color: C.muted, letterSpacing: 1.5, textTransform: 'uppercase' as const }}>Case 9-1 · Cameron Power Equipment</span>
        <span style={{ fontSize: 22, fontWeight: 700, color: C.text, marginTop: 4 }}>Atlanta Warehouse Close: Current vs. Cross-Dock Model</span>
        <span style={{ fontSize: 12, color: C.muted, marginTop: 4 }}>Tim Peterman · Charlotte, NC · $2.5B revenue · 8 regional warehouses · Competitor uses half as many · Lease expires in 2 months</span>
      </div>
      <div style={{ display: 'flex', height: 1, backgroundColor: C.border, marginBottom: 16 }} />

      {/* Context cards */}
      <div style={{ display: 'flex', gap: 10, marginBottom: 16 }}>
        {[
          { label: 'Current Annual Cost', value: '$306,600', sub: 'Atlanta warehouse total', bg: C.redBg, border: C.red, color: C.red },
          { label: 'Proposed Annual Cost', value: '$320,880', sub: 'Merwin cross-dock model', bg: C.amberBg, border: C.amber, color: C.amber },
          { label: 'One-Time Inventory Freed', value: '$200,000', sub: '50% reduction from closing', bg: C.greenBg, border: C.green, color: C.green },
          { label: 'Hurdle Rate', value: '30%', sub: '$200K x 30% = $60K/yr saved', bg: C.blueBg, border: C.blue, color: C.blue },
          { label: 'Service Target vs Actual', value: '99% vs 97%', sub: '2% gap already exists', bg: C.fill1, border: C.border, color: C.text },
        ].map((c, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '10px 12px', backgroundColor: c.bg, border: `1px solid ${c.border}`, borderRadius: 6 }}>
            <span style={{ fontSize: 9, color: c.color, letterSpacing: 1, textTransform: 'uppercase' as const }}>{c.label}</span>
            <span style={{ fontSize: 16, fontWeight: 700, color: c.color, marginTop: 2 }}>{c.value}</span>
            <span style={{ fontSize: 9, color: c.color }}>{c.sub}</span>
          </div>
        ))}
      </div>

      {/* Side-by-side cost tables */}
      <div style={{ display: 'flex', gap: 14, marginBottom: 16 }}>
        {/* Current */}
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, border: `1px solid ${C.border}`, borderRadius: 6, overflow: 'hidden' }}>
          <div style={{ display: 'flex', backgroundColor: C.red, padding: '7px 12px' }}>
            <span style={{ fontSize: 10, fontWeight: 700, color: '#FFFFFF' }}>CURRENT: ATLANTA WAREHOUSE</span>
          </div>
          <div style={{ display: 'flex', backgroundColor: C.accent }}>
            <div style={{ display: 'flex', flex: 3, padding: '5px 10px' }}><span style={{ fontSize: 9, fontWeight: 700, color: '#FFFFFF' }}>COST ELEMENT</span></div>
            <div style={{ display: 'flex', flex: 1, padding: '5px 10px', borderLeft: '1px solid #444', justifyContent: 'flex-end' }}><span style={{ fontSize: 9, fontWeight: 700, color: '#FFFFFF' }}>MONTHLY</span></div>
            <div style={{ display: 'flex', flex: 1, padding: '5px 10px', borderLeft: '1px solid #444', justifyContent: 'flex-end' }}><span style={{ fontSize: 9, fontWeight: 700, color: '#FFFFFF' }}>ANNUAL</span></div>
          </div>
          {currentCosts.map((r, i) => (
            <div key={i} style={{ display: 'flex', backgroundColor: i % 2 === 0 ? C.bg : C.fill1, borderTop: `1px solid ${C.rule}` }}>
              <div style={{ display: 'flex', flex: 3, padding: '6px 10px', alignItems: 'center' }}>
                <span style={{ fontSize: 10, color: C.text }}>{r.item}</span>
              </div>
              <div style={{ display: 'flex', flex: 1, padding: '6px 10px', borderLeft: `1px solid ${C.rule}`, justifyContent: 'flex-end', alignItems: 'center' }}>
                <span style={{ fontSize: 10, color: C.muted }}>{r.monthly}</span>
              </div>
              <div style={{ display: 'flex', flex: 1, padding: '6px 10px', borderLeft: `1px solid ${C.rule}`, justifyContent: 'flex-end', alignItems: 'center' }}>
                <span style={{ fontSize: 10, color: C.muted }}>{r.annual}</span>
              </div>
            </div>
          ))}
          <div style={{ display: 'flex', backgroundColor: C.redBg, borderTop: `2px solid ${C.red}` }}>
            <div style={{ display: 'flex', flex: 3, padding: '8px 10px', alignItems: 'center' }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: C.red }}>TOTAL CURRENT</span>
            </div>
            <div style={{ display: 'flex', flex: 1, padding: '8px 10px', borderLeft: `1px solid ${C.rule}`, justifyContent: 'flex-end', alignItems: 'center' }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: C.red }}>$25,550</span>
            </div>
            <div style={{ display: 'flex', flex: 1, padding: '8px 10px', borderLeft: `1px solid ${C.rule}`, justifyContent: 'flex-end', alignItems: 'center' }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: C.red }}>$306,600</span>
            </div>
          </div>
        </div>

        {/* Proposed */}
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, border: `1px solid ${C.border}`, borderRadius: 6, overflow: 'hidden' }}>
          <div style={{ display: 'flex', backgroundColor: C.blue, padding: '7px 12px' }}>
            <span style={{ fontSize: 10, fontWeight: 700, color: '#FFFFFF' }}>PROPOSED: MERWIN CROSS-DOCK</span>
          </div>
          <div style={{ display: 'flex', backgroundColor: C.accent }}>
            <div style={{ display: 'flex', flex: 3, padding: '5px 10px' }}><span style={{ fontSize: 9, fontWeight: 700, color: '#FFFFFF' }}>COST ELEMENT</span></div>
            <div style={{ display: 'flex', flex: 1, padding: '5px 10px', borderLeft: '1px solid #444', justifyContent: 'flex-end' }}><span style={{ fontSize: 9, fontWeight: 700, color: '#FFFFFF' }}>MONTHLY</span></div>
            <div style={{ display: 'flex', flex: 1, padding: '5px 10px', borderLeft: '1px solid #444', justifyContent: 'flex-end' }}><span style={{ fontSize: 9, fontWeight: 700, color: '#FFFFFF' }}>ANNUAL</span></div>
          </div>
          {proposedCosts.map((r, i) => (
            <div key={i} style={{ display: 'flex', backgroundColor: i % 2 === 0 ? C.bg : C.fill1, borderTop: `1px solid ${C.rule}` }}>
              <div style={{ display: 'flex', flex: 3, padding: '6px 10px', alignItems: 'center' }}>
                <span style={{ fontSize: 10, color: C.text }}>{r.item}</span>
              </div>
              <div style={{ display: 'flex', flex: 1, padding: '6px 10px', borderLeft: `1px solid ${C.rule}`, justifyContent: 'flex-end', alignItems: 'center' }}>
                <span style={{ fontSize: 10, color: r.item.includes('Charlotte to Atlanta') ? C.red : C.muted, fontWeight: r.item.includes('Charlotte to Atlanta') ? 700 : 400 }}>{r.monthly}</span>
              </div>
              <div style={{ display: 'flex', flex: 1, padding: '6px 10px', borderLeft: `1px solid ${C.rule}`, justifyContent: 'flex-end', alignItems: 'center' }}>
                <span style={{ fontSize: 10, color: r.item.includes('Charlotte to Atlanta') ? C.red : C.muted, fontWeight: r.item.includes('Charlotte to Atlanta') ? 700 : 400 }}>{r.annual}</span>
              </div>
            </div>
          ))}
          <div style={{ display: 'flex', backgroundColor: C.blueBg, borderTop: `2px solid ${C.blue}` }}>
            <div style={{ display: 'flex', flex: 3, padding: '8px 10px', alignItems: 'center' }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: C.blue }}>TOTAL PROPOSED</span>
            </div>
            <div style={{ display: 'flex', flex: 1, padding: '8px 10px', borderLeft: `1px solid ${C.rule}`, justifyContent: 'flex-end', alignItems: 'center' }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: C.blue }}>$26,740</span>
            </div>
            <div style={{ display: 'flex', flex: 1, padding: '8px 10px', borderLeft: `1px solid ${C.rule}`, justifyContent: 'flex-end', alignItems: 'center' }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: C.blue }}>$320,880</span>
            </div>
          </div>
        </div>
      </div>

      {/* Net analysis */}
      <span style={{ fontSize: 12, fontWeight: 700, color: C.text, marginBottom: 8 }}>NET ANALYSIS: Operating Cost vs. Capital Release</span>
      <div style={{ display: 'flex', gap: 10, marginBottom: 16 }}>
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '12px 14px', backgroundColor: C.redBg, border: `1px solid ${C.red}`, borderRadius: 6 }}>
          <span style={{ fontSize: 10, fontWeight: 700, color: C.red }}>OPERATING COST INCREASE</span>
          <span style={{ fontSize: 18, fontWeight: 700, color: C.red, marginTop: 2 }}>+$14,280/yr</span>
          <span style={{ fontSize: 10, color: C.red }}>$320,880 - $306,600. Daily TL freight is the cost driver ($191K vs $70K).</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '12px 14px', backgroundColor: C.greenBg, border: `1px solid ${C.green}`, borderRadius: 6 }}>
          <span style={{ fontSize: 10, fontWeight: 700, color: C.green }}>CAPITAL RELEASE VALUE</span>
          <span style={{ fontSize: 18, fontWeight: 700, color: C.green, marginTop: 2 }}>$60,000/yr</span>
          <span style={{ fontSize: 10, color: C.green }}>$200K freed x 30% hurdle rate. One-time inventory reduction.</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '12px 14px', backgroundColor: C.blueBg, border: `1.5px solid ${C.blue}`, borderRadius: 6 }}>
          <span style={{ fontSize: 10, fontWeight: 700, color: C.blue }}>NET BENEFIT</span>
          <span style={{ fontSize: 18, fontWeight: 700, color: C.blue, marginTop: 2 }}>+$45,720/yr</span>
          <span style={{ fontSize: 10, color: C.blue }}>$60K capital benefit - $14.3K operating increase. Cross-dock wins.</span>
        </div>
      </div>

      {/* Key insight */}
      <div style={{ display: 'flex', padding: '12px 16px', backgroundColor: C.fill1, border: `1px solid ${C.border}`, borderRadius: 6 }}>
        <span style={{ fontSize: 11, color: C.text }}>
          <span style={{ fontWeight: 700 }}>The decision is net positive,</span> but the margin is thin ($45K/yr on a $2.5B company). The real value is strategic: daily cross-dock shipments convert batch replenishment to flow, reducing forecast dependency. Service level may improve (fresher inventory) or worsen (single-point Merwin dependency). Kelly wants two closures. If Atlanta works, the 30% hurdle rate applied to 7 more warehouses is the real business case.
        </span>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 14 }}>
        <span style={{ fontSize: 11, color: C.light }}>SCMG 487 | Case 9-1 | Cameron Power Equipment</span>
      </div>
    </div>
  );
}

// ============================================================
// CASE 9-2: Dhiman Electronics — Carrier Spend Analysis
// ============================================================

function FigCase9_2() {
  const W = 1100, H = 920;

  const carriers = [
    { name: 'Martins Forwarding', type: 'Small local trucking', spend: '$124,800', pct: '72.7%', loads: '42 loads', lanes: 'FTL dominant (1,000 mi CDN + US)', risk: 'HIGH', color: C.red },
    { name: 'JW Express', type: 'Large Canadian carrier', spend: '$31,845', pct: '18.5%', loads: '28 loads', lanes: 'LTL dominant, all distances', risk: 'LOW', color: C.green },
    { name: 'Orford Freight', type: 'Large 3PL / logistics', spend: '$12,000', pct: '7.0%', loads: '3 loads', lanes: 'FTL to 2,500 mi only', risk: 'LOW', color: C.green },
    { name: 'FedEx', type: 'Multinational logistics', spend: '$3,000', pct: '1.7%', loads: '3 loads', lanes: 'LTL to US 500 mi only', risk: 'LOW', color: C.green },
  ];

  const issues = [
    { issue: 'No formal contracts', impact: 'Every shipment is spot pricing. No volume discounts, no SLAs, no accountability.', fix: 'Formal RFQ process with 12 months of data' },
    { issue: '72.7% with one carrier', impact: 'Martins failure = 72.7% of freight disrupted. Small company = higher insolvency risk.', fix: 'Negotiate Martins contract, qualify JW/Orford as backups' },
    { issue: 'Pricing inconsistencies', impact: 'Martins charges same price ($300) for 500 mi and 1,000 mi single skid to US.', fix: 'Benchmark against market rates' },
    { issue: 'Inbound freight ignored', impact: 'FOB destination from suppliers hides inbound costs in purchase price. No leverage.', fix: 'Evaluate FOB origin for high-volume suppliers' },
  ];

  // Build horizontal bar data for concentration visual
  const maxBar = 500; // px width for 100%

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: W, minHeight: H, backgroundColor: C.bg, padding: '32px 40px', fontFamily: 'Inter, sans-serif' }}>
      <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 6 }}>
        <span style={{ fontSize: 10, color: C.muted, letterSpacing: 1.5, textTransform: 'uppercase' as const }}>Case 9-2 · Dhiman Electronics</span>
        <span style={{ fontSize: 22, fontWeight: 700, color: C.text, marginTop: 4 }}>Carrier Spend Analysis: Concentration Risk and Missing Contracts</span>
        <span style={{ fontSize: 12, color: C.muted, marginTop: 4 }}>Lauren Michell · Brampton, Ontario · $35M revenue · $171,645/yr outbound freight · 4 carriers · Facing 3-5% increase</span>
      </div>
      <div style={{ display: 'flex', height: 1, backgroundColor: C.border, marginBottom: 16 }} />

      {/* Key numbers */}
      <div style={{ display: 'flex', gap: 10, marginBottom: 16 }}>
        {[
          { label: 'Annual Freight', value: '$171,645', sub: '0.49% of revenue', bg: C.fill1, border: C.border, color: C.text },
          { label: 'Martins Share', value: '72.7%', sub: '$124,800 with one small carrier', bg: C.redBg, border: C.red, color: C.red },
          { label: 'Formal Contracts', value: 'ZERO', sub: 'All pricing is informal quotes', bg: C.amberBg, border: C.amber, color: C.amber },
          { label: 'Threatened Increase', value: '3-5%', sub: 'Fuel + wage costs cited', bg: C.blueBg, border: C.blue, color: C.blue },
        ].map((c, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '10px 12px', backgroundColor: c.bg, border: `1px solid ${c.border}`, borderRadius: 6 }}>
            <span style={{ fontSize: 9, color: c.color, letterSpacing: 1, textTransform: 'uppercase' as const }}>{c.label}</span>
            <span style={{ fontSize: 18, fontWeight: 700, color: c.color, marginTop: 2 }}>{c.value}</span>
            <span style={{ fontSize: 9, color: c.color }}>{c.sub}</span>
          </div>
        ))}
      </div>

      {/* Carrier table with horizontal bars */}
      <div style={{ display: 'flex', flexDirection: 'column', border: `1px solid ${C.border}`, borderRadius: 6, overflow: 'hidden', marginBottom: 16 }}>
        <div style={{ display: 'flex', backgroundColor: C.accent }}>
          <div style={{ display: 'flex', flex: 1.5, padding: '7px 12px' }}><span style={{ fontSize: 9, fontWeight: 700, color: '#FFFFFF' }}>CARRIER</span></div>
          <div style={{ display: 'flex', flex: 1, padding: '7px 10px', borderLeft: '1px solid #444' }}><span style={{ fontSize: 9, fontWeight: 700, color: '#FFFFFF' }}>TYPE</span></div>
          <div style={{ display: 'flex', flex: 0.8, padding: '7px 10px', borderLeft: '1px solid #444', justifyContent: 'flex-end' }}><span style={{ fontSize: 9, fontWeight: 700, color: '#FFFFFF' }}>SPEND</span></div>
          <div style={{ display: 'flex', flex: 0.5, padding: '7px 10px', borderLeft: '1px solid #444', justifyContent: 'center' }}><span style={{ fontSize: 9, fontWeight: 700, color: '#FFFFFF' }}>%</span></div>
          <div style={{ display: 'flex', flex: 2.5, padding: '7px 10px', borderLeft: '1px solid #444' }}><span style={{ fontSize: 9, fontWeight: 700, color: '#FFFFFF' }}>CONCENTRATION</span></div>
          <div style={{ display: 'flex', flex: 0.5, padding: '7px 10px', borderLeft: '1px solid #444', justifyContent: 'center' }}><span style={{ fontSize: 9, fontWeight: 700, color: '#FFFFFF' }}>RISK</span></div>
        </div>
        {carriers.map((r, i) => {
          const barW = Math.round(parseFloat(r.pct) / 100 * maxBar);
          return (
            <div key={i} style={{ display: 'flex', backgroundColor: i % 2 === 0 ? C.bg : C.fill1, borderTop: `1px solid ${C.rule}` }}>
              <div style={{ display: 'flex', flex: 1.5, padding: '8px 12px', alignItems: 'center' }}>
                <span style={{ fontSize: 10, fontWeight: 700, color: C.text }}>{r.name}</span>
              </div>
              <div style={{ display: 'flex', flex: 1, padding: '8px 10px', borderLeft: `1px solid ${C.rule}`, alignItems: 'center' }}>
                <span style={{ fontSize: 9, color: C.muted }}>{r.type}</span>
              </div>
              <div style={{ display: 'flex', flex: 0.8, padding: '8px 10px', borderLeft: `1px solid ${C.rule}`, justifyContent: 'flex-end', alignItems: 'center' }}>
                <span style={{ fontSize: 10, fontWeight: 700, color: C.text }}>{r.spend}</span>
              </div>
              <div style={{ display: 'flex', flex: 0.5, padding: '8px 10px', borderLeft: `1px solid ${C.rule}`, justifyContent: 'center', alignItems: 'center' }}>
                <span style={{ fontSize: 10, fontWeight: 700, color: i === 0 ? C.red : C.muted }}>{r.pct}</span>
              </div>
              <div style={{ display: 'flex', flex: 2.5, padding: '8px 10px', borderLeft: `1px solid ${C.rule}`, alignItems: 'center' }}>
                <div style={{ display: 'flex', width: barW, height: 16, backgroundColor: i === 0 ? C.red : C.blue, borderRadius: 3, alignItems: 'center', paddingLeft: 6 }}>
                  {barW > 80 && <span style={{ fontSize: 8, color: '#FFFFFF', fontWeight: 700 }}>{r.lanes}</span>}
                </div>
                {barW <= 80 && <span style={{ fontSize: 8, color: C.muted, marginLeft: 6 }}>{r.lanes}</span>}
              </div>
              <div style={{ display: 'flex', flex: 0.5, padding: '8px 10px', borderLeft: `1px solid ${C.rule}`, justifyContent: 'center', alignItems: 'center' }}>
                <span style={{ fontSize: 9, fontWeight: 700, color: r.risk === 'HIGH' ? C.red : C.green }}>{r.risk}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Issues and fixes */}
      <span style={{ fontSize: 12, fontWeight: 700, color: C.text, marginBottom: 8 }}>KEY ISSUES AND RECOMMENDATIONS</span>
      <div style={{ display: 'flex', flexDirection: 'column', border: `1px solid ${C.border}`, borderRadius: 6, overflow: 'hidden', marginBottom: 16 }}>
        <div style={{ display: 'flex', backgroundColor: C.accent }}>
          <div style={{ display: 'flex', flex: 1.2, padding: '7px 12px' }}><span style={{ fontSize: 9, fontWeight: 700, color: '#FFFFFF' }}>ISSUE</span></div>
          <div style={{ display: 'flex', flex: 2, padding: '7px 12px', borderLeft: '1px solid #444' }}><span style={{ fontSize: 9, fontWeight: 700, color: '#FFFFFF' }}>IMPACT</span></div>
          <div style={{ display: 'flex', flex: 2, padding: '7px 12px', borderLeft: '1px solid #444' }}><span style={{ fontSize: 9, fontWeight: 700, color: '#FFFFFF' }}>RECOMMENDATION</span></div>
        </div>
        {issues.map((r, i) => (
          <div key={i} style={{ display: 'flex', backgroundColor: i % 2 === 0 ? C.bg : C.fill1, borderTop: `1px solid ${C.rule}` }}>
            <div style={{ display: 'flex', flex: 1.2, padding: '7px 12px', alignItems: 'center' }}>
              <span style={{ fontSize: 10, fontWeight: 700, color: C.red }}>{r.issue}</span>
            </div>
            <div style={{ display: 'flex', flex: 2, padding: '7px 12px', borderLeft: `1px solid ${C.rule}`, alignItems: 'center' }}>
              <span style={{ fontSize: 10, color: C.muted }}>{r.impact}</span>
            </div>
            <div style={{ display: 'flex', flex: 2, padding: '7px 12px', borderLeft: `1px solid ${C.rule}`, alignItems: 'center' }}>
              <span style={{ fontSize: 10, color: C.green, fontWeight: 700 }}>{r.fix}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Key insight */}
      <div style={{ display: 'flex', padding: '12px 16px', backgroundColor: C.fill1, border: `1px solid ${C.border}`, borderRadius: 6 }}>
        <span style={{ fontSize: 11, color: C.text }}>
          <span style={{ fontWeight: 700 }}>Before negotiating the 3-5% increase,</span> Lauren needs to fix the process. Step 1: formal RFQ with all four carriers using 12 months of lane data. Step 2: negotiate a Martins contract with rate locks and SLAs. Step 3: test JW and Orford on Martins-dominated lanes for competitive pressure. Step 4: evaluate FOB origin on inbound freight for aggregate tender opportunities. The increase is a symptom. The lack of contracts is the disease.
        </span>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 14 }}>
        <span style={{ fontSize: 11, color: C.light }}>SCMG 487 | Case 9-2 | Dhiman Electronics</span>
      </div>
    </div>
  );
}

// ============================================================

async function main() {
  const fonts = await loadFonts();
  console.log('Fonts loaded. Generating Ch 7 + 9 case study figures...');

  const fig7_1 = await render(<FigCase7_1 />, 1100, 980, fonts);
  save(fig7_1, 'fig-case-7-1-ras-quality-failure-cascade.png');

  const fig7_2 = await render(<FigCase7_2 />, 1100, 1020, fonts);
  save(fig7_2, 'fig-case-7-2-caledon-supplier-scorecard.png');

  const fig7_3 = await render(<FigCase7_3 />, 1100, 920, fonts);
  save(fig7_3, 'fig-case-7-3-wentworth-repair-levels.png');

  const fig9_1 = await render(<FigCase9_1 />, 1100, 900, fonts);
  save(fig9_1, 'fig-case-9-1-cameron-warehouse-crossdock.png');

  const fig9_2 = await render(<FigCase9_2 />, 1100, 920, fonts);
  save(fig9_2, 'fig-case-9-2-dhiman-carrier-analysis.png');

  console.log('Done. 5 case study figures written to case-studies/');
}

main().catch(console.error);
