#!/usr/bin/env npx tsx

import React from 'react';

/**
 * SCMG 487 GMC Case Study - Discussion Answer Figures
 *
 * 1. fig-case-gmc-coq-evolution.png      - 4-year CoQ breakdown (Q5)
 * 2. fig-case-gmc-coq-shift.png          - Good vs bad quality shift (Q5/Q7)
 * 3. fig-case-gmc-growth-quality-risk.png - Growth moves vs quality pressure (Q2)
 *
 * Run from imaginationg-main root:
 *   npx tsx scripts/generate-487-gmc-answer-figures.tsx
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
  rule:     '#E5E5E5',
  accent:   '#1A1A1A',
  fill1:    '#F7F7F7',
  fill2:    '#EFEFEF',
  green:    '#2D6A4F',
  greenBg:  '#D8F3DC',
  greenLt:  '#B7E4C7',
  red:      '#9B2226',
  redBg:    '#FFCCD5',
  amber:    '#7B5800',
  amberBg:  '#FFF3CD',
  blue:     '#1E3A5F',
  blueBg:   '#DBEAFE',
  blueMd:   '#3B82F6',
  purple:   '#5B21B6',
  purpleBg: '#EDE9FE',
  teal:     '#0D9488',
  tealBg:   '#CCFBF1',
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
// FIGURE 1: CoQ Evolution (4-Year Stacked Bar)
// ============================================================

function FigCoQEvolution() {
  const W = 1060, H = 600;

  const years = [
    { year: 'FY 2021', prev: 100, appr: 50, intF: 19, extF: 15, total: 184 },
    { year: 'FY 2022', prev: 140, appr: 65, intF: 15.5, extF: 11, total: 231.5 },
    { year: 'FY 2023', prev: 150, appr: 73, intF: 11, extF: 8, total: 242 },
    { year: 'FY 2024', prev: 160, appr: 82, intF: 7.5, extF: 5, total: 254.5 },
  ];

  const maxVal = 260;
  const barAreaH = 340;
  const barW = 120;
  const barGap = 100;
  const leftPad = 120;
  const chartTop = 10;

  function barH(val: number) { return (val / maxVal) * barAreaH; }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: W, height: H, backgroundColor: C.bg, padding: '28px 40px', fontFamily: 'Inter, sans-serif' }}>

      {/* Header */}
      <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 4 }}>
        <span style={{ fontSize: 10, color: C.muted, letterSpacing: 1.5, textTransform: 'uppercase' as const }}>GMC Cost of Quality Analysis</span>
        <span style={{ fontSize: 20, fontWeight: 700, color: C.text, marginTop: 2 }}>CoQ Evolution: FY 2021 to FY 2024 (INR crore)</span>
      </div>

      <span style={{ fontSize: 11, color: C.muted, marginBottom: 8 }}>
        Prevention and appraisal spending up. Failure costs down. Total CoQ rising but composition shifting toward good quality.
      </span>

      {/* Chart area - extra height for year labels below bars */}
      <div style={{ display: 'flex', position: 'relative', width: W - 80, height: barAreaH + 40 }}>

        {/* Y-axis labels */}
        {[0, 50, 100, 150, 200, 250].map((v) => (
          <span key={v} style={{
            position: 'absolute',
            left: 0,
            top: chartTop + barAreaH - barH(v) - 6,
            fontSize: 9,
            color: C.light,
            width: 36,
            textAlign: 'right' as const,
          }}>{v}</span>
        ))}

        {/* Grid lines */}
        {[0, 50, 100, 150, 200, 250].map((v) => (
          <div key={`g${v}`} style={{
            position: 'absolute',
            left: 46,
            top: chartTop + barAreaH - barH(v),
            width: W - 160,
            height: 1,
            backgroundColor: C.rule,
          }} />
        ))}

        {/* Bars */}
        {years.map((y, i) => {
          const x = leftPad + i * (barW + barGap);
          const baseY = chartTop + barAreaH;
          const hPrev = barH(y.prev);
          const hAppr = barH(y.appr);
          const hIntF = barH(y.intF);
          const hExtF = barH(y.extF);
          const failureSmall = (hIntF + hExtF) < 30;

          return (
            <div key={y.year} style={{ display: 'flex', flexDirection: 'column', position: 'absolute', left: x }}>
              {/* Total label on top */}
              <span style={{
                position: 'absolute',
                top: baseY - barH(y.total) - 22,
                width: barW,
                textAlign: 'center' as const,
                fontSize: 13,
                fontWeight: 700,
                color: C.text,
              }}>{y.total}</span>

              {/* External failure (top segment, sits on baseline) */}
              <div style={{
                position: 'absolute',
                top: baseY - hExtF,
                width: barW,
                height: Math.max(hExtF, 2),
                backgroundColor: '#E76F51',
              }} />

              {/* Internal failure */}
              <div style={{
                position: 'absolute',
                top: baseY - hExtF - hIntF,
                width: barW,
                height: Math.max(hIntF, 2),
                backgroundColor: '#F4A261',
              }} />

              {/* Callout for failure values (to the right of bar) */}
              <div style={{
                position: 'absolute',
                top: baseY - hExtF - hIntF - 2,
                left: barW + 6,
                display: 'flex',
                flexDirection: 'column',
              }}>
                <span style={{ fontSize: 8, color: '#E76F51', fontWeight: 700 }}>Ext: {y.extF}</span>
                <span style={{ fontSize: 8, color: '#D4850F', fontWeight: 700 }}>Int: {y.intF}</span>
              </div>

              {/* Appraisal */}
              <div style={{
                position: 'absolute',
                top: baseY - hExtF - hIntF - hAppr,
                width: barW,
                height: Math.max(hAppr, 1),
                backgroundColor: '#2A9D8F',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <span style={{ fontSize: 11, color: '#fff', fontWeight: 700 }}>{y.appr}</span>
              </div>

              {/* Prevention (bottom of stack) */}
              <div style={{
                position: 'absolute',
                top: baseY - hExtF - hIntF - hAppr - hPrev,
                width: barW,
                height: Math.max(hPrev, 1),
                backgroundColor: '#264653',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <span style={{ fontSize: 11, color: '#fff', fontWeight: 700 }}>{y.prev}</span>
              </div>

              {/* Year label - well below the baseline */}
              <span style={{
                position: 'absolute',
                top: baseY + 10,
                width: barW,
                textAlign: 'center' as const,
                fontSize: 12,
                fontWeight: 700,
                color: C.text,
              }}>{y.year}</span>
            </div>
          );
        })}
      </div>

      {/* Legend - clear space below chart */}
      <div style={{ display: 'flex', gap: 28, marginTop: 20, marginLeft: 46 }}>
        {[
          { color: '#264653', label: 'Prevention' },
          { color: '#2A9D8F', label: 'Appraisal' },
          { color: '#F4A261', label: 'Internal Failure' },
          { color: '#E76F51', label: 'External Failure' },
        ].map((l) => (
          <div key={l.label} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{ width: 14, height: 14, backgroundColor: l.color, borderRadius: 2 }} />
            <span style={{ fontSize: 10, color: C.muted }}>{l.label}</span>
          </div>
        ))}
      </div>

      {/* Key insight */}
      <div style={{ display: 'flex', backgroundColor: C.fill1, padding: '10px 16px', marginTop: 14, borderLeft: `3px solid ${C.green}` }}>
        <span style={{ fontSize: 10, color: C.muted }}>
          Good quality costs (prevention + appraisal) grew from 81.5% to 95.1% of total CoQ. Failure costs dropped from 34 to 12.5 crore. The investment is working, but total CoQ as % of revenue rose from 3.4% to 3.9% while profit margins shrank from 3.0% to 1.5%.
        </span>
      </div>
    </div>
  );
}

// ============================================================
// FIGURE 2: CoQ Composition Shift
// ============================================================

function FigCoQShift() {
  const W = 1060, H = 420;

  const data = [
    { year: 'FY 2021', good: 150, bad: 34, goodPct: 81.5, badPct: 18.5, profit: 161.3, profitMgn: 3.0 },
    { year: 'FY 2022', good: 205, bad: 26.5, goodPct: 88.6, badPct: 11.4, profit: 124.0, profitMgn: 1.9 },
    { year: 'FY 2023', good: 223, bad: 19, goodPct: 92.1, badPct: 7.9, profit: 91.2, profitMgn: 1.5 },
    { year: 'FY 2024', good: 242, bad: 12.5, goodPct: 95.1, badPct: 4.9, profit: null, profitMgn: null },
  ];

  const barW = 180;
  const barH = 24;
  const leftPad = 100;
  const startY = 100;
  const rowGap = 80;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: W, height: H, backgroundColor: C.bg, padding: '28px 40px', fontFamily: 'Inter, sans-serif' }}>

      {/* Header */}
      <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 4 }}>
        <span style={{ fontSize: 10, color: C.muted, letterSpacing: 1.5, textTransform: 'uppercase' as const }}>GMC Cost of Quality Analysis</span>
        <span style={{ fontSize: 20, fontWeight: 700, color: C.text, marginTop: 2 }}>Quality Cost Composition: From Failure to Prevention</span>
      </div>

      <span style={{ fontSize: 11, color: C.muted, marginBottom: 20 }}>
        The ratio of good quality costs (prevention + appraisal) to bad quality costs (internal + external failure) over 4 years.
      </span>

      {/* Column headers */}
      <div style={{ display: 'flex', marginLeft: leftPad, gap: 0, marginBottom: 8 }}>
        <span style={{ fontSize: 9, color: C.light, width: 520, textAlign: 'center' as const }}>Good Quality vs Bad Quality (% of Total CoQ)</span>
        <span style={{ fontSize: 9, color: C.light, width: 120, textAlign: 'center' as const }}>Failure Cost</span>
        <span style={{ fontSize: 9, color: C.light, width: 120, textAlign: 'center' as const }}>Profit Margin</span>
      </div>

      {/* Rows */}
      {data.map((d, i) => {
        const goodW = (d.goodPct / 100) * 480;
        const badW = (d.badPct / 100) * 480;

        return (
          <div key={d.year} style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
            {/* Year label */}
            <span style={{ fontSize: 12, fontWeight: 700, color: C.text, width: leftPad, textAlign: 'right' as const, paddingRight: 16 }}>{d.year}</span>

            {/* Stacked horizontal bar */}
            <div style={{ display: 'flex', height: barH, width: 480 }}>
              <div style={{ display: 'flex', width: goodW, height: barH, backgroundColor: '#264653', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: 10, color: '#fff', fontWeight: 700 }}>{d.goodPct}%</span>
              </div>
              <div style={{ display: 'flex', width: badW, height: barH, backgroundColor: '#E76F51', alignItems: 'center', justifyContent: 'center' }}>
                {d.badPct > 6 && <span style={{ fontSize: 10, color: '#fff', fontWeight: 700 }}>{d.badPct}%</span>}
                {d.badPct <= 6 && <span style={{ fontSize: 8, color: '#fff', fontWeight: 700 }}>{d.badPct}%</span>}
              </div>
            </div>

            {/* Failure cost */}
            <span style={{ fontSize: 12, fontWeight: 700, color: C.green, width: 120, textAlign: 'center' as const }}>
              {d.bad} cr
            </span>

            {/* Profit margin */}
            <span style={{ fontSize: 12, fontWeight: 700, color: d.profitMgn !== null ? (d.profitMgn < 2 ? C.red : C.amber) : C.light, width: 120, textAlign: 'center' as const }}>
              {d.profitMgn !== null ? `${d.profitMgn}%` : 'TBD'}
            </span>
          </div>
        );
      })}

      {/* Legend */}
      <div style={{ display: 'flex', gap: 24, marginLeft: leftPad, marginTop: 8 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <div style={{ width: 14, height: 14, backgroundColor: '#264653', borderRadius: 2 }} />
          <span style={{ fontSize: 10, color: C.muted }}>Good Quality (Prevention + Appraisal)</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <div style={{ width: 14, height: 14, backgroundColor: '#E76F51', borderRadius: 2 }} />
          <span style={{ fontSize: 10, color: C.muted }}>Bad Quality (Internal + External Failure)</span>
        </div>
      </div>

      {/* Key insight boxes */}
      <div style={{ display: 'flex', gap: 12, marginTop: 16 }}>
        <div style={{ display: 'flex', flex: 1, backgroundColor: C.greenBg, padding: '10px 14px', borderRadius: 4 }}>
          <span style={{ fontSize: 10, color: C.green }}>
            Failure costs dropped 63% (34 to 12.5 crore). Internal failure down 61%. External failure down 67%. Prevention and appraisal investment is reducing defects.
          </span>
        </div>
        <div style={{ display: 'flex', flex: 1, backgroundColor: C.redBg, padding: '10px 14px', borderRadius: 4 }}>
          <span style={{ fontSize: 10, color: C.red }}>
            But profit margin shrank from 3.0% to 1.5% (FY21 to FY23). Total CoQ as % of revenue rose from 3.4% to 3.9%. Quality spending growing faster than revenue. Watch for diminishing returns.
          </span>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// FIGURE 3: Growth Moves vs Quality Risk
// ============================================================

function FigGrowthQualityRisk() {
  const W = 1060, H = 520;

  const moves = [
    {
      move: 'Delhi Market Entry',
      detail: '2,500 km, 50-54 hrs by road',
      risk: 'CRITICAL',
      riskColor: C.red,
      riskBg: C.redBg,
      quality: 'Temperature control over 2+ day transport. One break = batch spoiled. Competitor sabotage already happening.',
    },
    {
      move: 'Product Diversification',
      detail: 'Idli/dosa batter, sweets, exports',
      risk: 'HIGH',
      riskColor: C.amber,
      riskBg: C.amberBg,
      quality: 'Each new product line needs its own quality standards, testing protocols, equipment calibration. More SKUs = more failure points.',
    },
    {
      move: 'Volume Scaling',
      detail: '100L lakh litres/day, 40L surplus',
      risk: 'HIGH',
      riskColor: C.amber,
      riskBg: C.amberBg,
      quality: 'Surplus must be processed or transported to distant markets. Volume pressure creates shortcuts. Capacity 57.4L vs production 100L = processing bottleneck.',
    },
    {
      move: 'Export Orders',
      detail: 'Maldives, West Asia, Singapore',
      risk: 'MEDIUM',
      riskColor: C.blue,
      riskBg: C.blueBg,
      quality: 'International quality standards differ from domestic. Zero tolerance in export markets. One incident can close an entire market.',
    },
    {
      move: 'Brand Globalization',
      detail: 'Cricket sponsorships: Ireland, Scotland',
      risk: 'MEDIUM',
      riskColor: C.blue,
      riskBg: C.blueBg,
      quality: 'Global brand promise must be backed by global quality consistency. Brand value amplifies both success and failure.',
    },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: W, height: H, backgroundColor: C.bg, padding: '28px 40px', fontFamily: 'Inter, sans-serif' }}>

      {/* Header */}
      <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 4 }}>
        <span style={{ fontSize: 10, color: C.muted, letterSpacing: 1.5, textTransform: 'uppercase' as const }}>GMC Cost of Quality Analysis</span>
        <span style={{ fontSize: 20, fontWeight: 700, color: C.text, marginTop: 2 }}>Growth Moves vs Quality Risk Exposure</span>
      </div>

      <span style={{ fontSize: 11, color: C.muted, marginBottom: 16 }}>
        Every growth initiative increases quality complexity. Prevention and appraisal spending must scale with growth, or failure costs will spike.
      </span>

      {/* Table header */}
      <div style={{ display: 'flex', padding: '8px 12px', backgroundColor: '#264653', borderRadius: '4px 4px 0 0' }}>
        <span style={{ fontSize: 10, color: '#fff', fontWeight: 700, width: 180 }}>Growth Move</span>
        <span style={{ fontSize: 10, color: '#fff', fontWeight: 700, width: 80, textAlign: 'center' as const }}>Risk</span>
        <span style={{ fontSize: 10, color: '#fff', fontWeight: 700, flex: 1 }}>Quality Implication</span>
      </div>

      {/* Rows */}
      {moves.map((m, i) => (
        <div key={m.move} style={{
          display: 'flex',
          padding: '12px 12px',
          backgroundColor: i % 2 === 0 ? C.fill1 : C.bg,
          borderBottom: `1px solid ${C.rule}`,
          alignItems: 'flex-start',
        }}>
          {/* Move */}
          <div style={{ display: 'flex', flexDirection: 'column', width: 180 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: C.text }}>{m.move}</span>
            <span style={{ fontSize: 9, color: C.light, marginTop: 2 }}>{m.detail}</span>
          </div>

          {/* Risk badge */}
          <div style={{ display: 'flex', width: 80, justifyContent: 'center' }}>
            <div style={{
              display: 'flex',
              padding: '3px 10px',
              backgroundColor: m.riskBg,
              borderRadius: 10,
            }}>
              <span style={{ fontSize: 9, fontWeight: 700, color: m.riskColor }}>{m.risk}</span>
            </div>
          </div>

          {/* Quality implication */}
          <span style={{ fontSize: 10, color: C.muted, flex: 1, lineHeight: 1.4 }}>{m.quality}</span>
        </div>
      ))}

      {/* Bottom insight */}
      <div style={{ display: 'flex', gap: 12, marginTop: 16 }}>
        <div style={{ display: 'flex', flex: 1, backgroundColor: C.amberBg, padding: '12px 16px', borderRadius: 4, borderLeft: `3px solid ${C.amber}` }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: C.amber }}>The Core Tension</span>
            <span style={{ fontSize: 10, color: C.amber, marginTop: 4 }}>
              GMC is simultaneously expanding geography (Delhi), diversifying products (batter, sweets), scaling volume (100L litres/day), entering export markets, and building a global brand. Each move multiplies the quality surface area. Prevention spending at 160 crore (FY24) may not be enough if all five moves accelerate at once.
            </span>
          </div>
        </div>
      </div>

      {/* Cooperative constraint note */}
      <div style={{ display: 'flex', backgroundColor: C.fill1, padding: '10px 16px', marginTop: 8, borderLeft: `3px solid ${C.muted}` }}>
        <span style={{ fontSize: 10, color: C.muted }}>
          Cooperative constraint: GMC cannot drop underperforming farmer-suppliers. Quality must be built through training and infrastructure at the source, not supplier selection. This makes prevention costs structurally higher than a private company.
        </span>
      </div>
    </div>
  );
}

// ============================================================
// MAIN
// ============================================================

async function main() {
  const fonts = await loadFonts();
  console.log('Fonts loaded. Generating GMC discussion answer figures...');

  const fig1 = await render(<FigCoQEvolution />, 1060, 600, fonts);
  save(fig1, 'fig-case-gmc-coq-evolution.png');

  const fig2 = await render(<FigCoQShift />, 1060, 420, fonts);
  save(fig2, 'fig-case-gmc-coq-shift.png');

  const fig3 = await render(<FigGrowthQualityRisk />, 1060, 520, fonts);
  save(fig3, 'fig-case-gmc-growth-quality-risk.png');

  console.log('\nDone. 3 GMC answer figures written to case-studies/');
}

main().catch(console.error);
