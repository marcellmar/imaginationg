#!/usr/bin/env npx tsx

import React from 'react';

/**
 * SCMG 487 Case Study Diagrams — Chapters 1-5
 *
 * fig-case-5-1-garland-chocolates.png
 * fig-case-rafiki-make-or-buy.png
 * fig-case-chu-pandemic-ppe.png
 * fig-case-ikea-sustainability.png
 *
 * Run from imaginationg-main root:
 *   npx tsx scripts/generate-487-other-case-diagrams.tsx
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
  blue:     '#1E3A5F',
  blueBg:   '#DBEAFE',
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
// CASE 5-1: Garland Chocolates — Make or Buy
// ============================================================

function FigGarland() {
  const W = 1060, H = 900;

  const perfRows = [
    { metric: 'Manufacturing efficiency', standard: '80%', actual: '76%', flag: false },
    { metric: 'Manufacturing scrap rate', standard: '1.2%', actual: '1.5%', flag: false },
    { metric: 'Packing efficiency', standard: '80%', actual: '48%', flag: true },
    { metric: 'Packing scrap rate', standard: '1.2%', actual: '9.6%', flag: true },
  ];

  const costRows = [
    { item: 'Raw material', std: '$24.65', out: 'Martin covers', pct: '17%' },
    { item: 'Packaging material', std: '$29.00', out: 'Martin covers', pct: '20%' },
    { item: 'Labor — manufacturing', std: '$13.05', out: 'Martin covers', pct: '9%' },
    { item: 'Labor — packing', std: '$7.25', out: 'Martin covers', pct: '5%' },
    { item: 'Overhead & depreciation', std: '$21.75', out: '$15.23 (−30%)', pct: '15%' },
    { item: 'Martin contract fee', std: '—', out: '$68.00', pct: '' },
    { item: 'TOTAL per case', std: '$95.70', out: '$83.23', pct: '66%', bold: true },
    { item: 'MARGIN per case', std: '$49.30 (34%)', out: '$61.77 (43%)', pct: '', bold: true, green: true },
  ];

  const qualRows = [
    { factor: 'Quality control', inhouse: 'Full control', outsource: 'Dependent on Martin', risk: 'medium' },
    { factor: 'Line fill rate', inhouse: '98% (historical)', outsource: 'Unknown — 6-month ramp', risk: 'high' },
    { factor: 'Delivery performance', inhouse: 'Proven', outsource: 'Risk during transition', risk: 'high' },
    { factor: 'Capital required', inhouse: '$140K–$740K', outsource: '$35K tooling only', risk: 'low' },
    { factor: 'Future flexibility', inhouse: 'Own the process', outsource: 'Locked into Martin', risk: 'medium' },
    { factor: 'Brand strategy fit', inhouse: 'Historical model', outsource: 'Strategic departure', risk: 'medium' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: W, minHeight: H, backgroundColor: C.bg, padding: '32px 40px', fontFamily: 'Inter, sans-serif' }}>

      <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 6 }}>
        <span style={{ fontSize: 10, color: C.muted, letterSpacing: 1.5, textTransform: 'uppercase' as const }}>Case 5-1 · Garland Chocolates</span>
        <span style={{ fontSize: 22, fontWeight: 700, color: C.text, marginTop: 4 }}>Make or Buy: Edgeworth Toffee Brand</span>
        <span style={{ fontSize: 12, color: C.muted, marginTop: 4 }}>Shanti Suppiah · Durham NC · 5,500 cases/yr at $145/case · Decision: March 18</span>
      </div>
      <div style={{ display: 'flex', height: 1, backgroundColor: C.border, marginBottom: 18 }} />

      {/* Top row: performance problem + three options */}
      <div style={{ display: 'flex', gap: 16, marginBottom: 18 }}>

        {/* Performance problem */}
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, border: `1px solid ${C.border}`, borderRadius: 6, overflow: 'hidden' }}>
          <div style={{ display: 'flex', backgroundColor: C.accent, padding: '8px 14px' }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: '#FFFFFF' }}>ACTUAL VS. STANDARD PERFORMANCE</span>
          </div>
          <div style={{ display: 'flex', backgroundColor: C.accent, borderTop: '1px solid #444' }}>
            <div style={{ display: 'flex', flex: 2, padding: '6px 12px' }}><span style={{ fontSize: 10, fontWeight: 700, color: '#AAAAAA' }}>METRIC</span></div>
            <div style={{ display: 'flex', flex: 1, padding: '6px 12px', borderLeft: '1px solid #444' }}><span style={{ fontSize: 10, fontWeight: 700, color: '#AAAAAA' }}>STANDARD</span></div>
            <div style={{ display: 'flex', flex: 1, padding: '6px 12px', borderLeft: '1px solid #444' }}><span style={{ fontSize: 10, fontWeight: 700, color: '#AAAAAA' }}>ACTUAL</span></div>
          </div>
          {perfRows.map((r, i) => (
            <div key={i} style={{ display: 'flex', backgroundColor: r.flag ? C.redBg : (i % 2 === 0 ? C.bg : C.fill1), borderTop: `1px solid ${C.rule}` }}>
              <div style={{ display: 'flex', flex: 2, padding: '8px 12px', alignItems: 'center' }}>
                <span style={{ fontSize: 11, color: C.text, fontWeight: r.flag ? 700 : 400 }}>{r.metric}</span>
              </div>
              <div style={{ display: 'flex', flex: 1, padding: '8px 12px', borderLeft: `1px solid ${C.rule}`, alignItems: 'center' }}>
                <span style={{ fontSize: 11, color: C.muted }}>{r.standard}</span>
              </div>
              <div style={{ display: 'flex', flex: 1, padding: '8px 12px', borderLeft: `1px solid ${C.rule}`, alignItems: 'center' }}>
                <span style={{ fontSize: 11, color: r.flag ? C.red : C.muted, fontWeight: r.flag ? 700 : 400 }}>{r.actual}</span>
              </div>
            </div>
          ))}
          <div style={{ display: 'flex', padding: '8px 12px', backgroundColor: C.amberBg, borderTop: `1px solid ${C.border}` }}>
            <span style={{ fontSize: 11, color: C.amber }}>Packing maintenance: $18,000/yr, rising 25%+ in next 12 months. Manufacturing parts increasingly hard to source.</span>
          </div>
        </div>

        {/* Three options */}
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, gap: 8 }}>
          <div style={{ display: 'flex', flexDirection: 'column', padding: '10px 14px', backgroundColor: C.fill1, border: `1px solid ${C.border}`, borderRadius: 5 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: C.text }}>Option 1: Replace Packing Lines Only</span>
            <span style={{ fontSize: 11, color: C.muted, marginTop: 3 }}>$140,000 installed. Returns packing to 80% efficiency / 1.2% scrap. Supports new packaging. Does not fix deteriorating manufacturing line.</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', padding: '10px 14px', backgroundColor: C.fill1, border: `1px solid ${C.border}`, borderRadius: 5 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: C.text }}>Option 2: Replace Manufacturing Line Too</span>
            <span style={{ fontSize: 11, color: C.muted, marginTop: 3 }}>~$600,000 installed. Fixes root cause of declining efficiency ({'>'} 90% five years ago, now 76%). Parts increasingly scarce. Full $740K combined capex. Finance requires exceeding 10% cost of capital hurdle.</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', padding: '10px 14px', backgroundColor: C.greenBg, border: `1px solid ${C.green}`, borderRadius: 5 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: C.green }}>Option 3: Outsource to Martin Contract Manufacturing</span>
            <span style={{ fontSize: 11, color: C.green, marginTop: 3 }}>$68.00/case (Martin covers raw mat + packaging + all labor). $35K tooling upfront. 6-month ramp. Overhead drops ~30%. Net cost: $83.23/case vs. $95.70 in-house. Saves $12.47/case = $68,600/yr. Tooling payback under 7 months.</span>
          </div>
        </div>
      </div>

      {/* Cost comparison table */}
      <div style={{ display: 'flex', flexDirection: 'column', border: `1px solid ${C.border}`, borderRadius: 6, overflow: 'hidden', marginBottom: 18 }}>
        <div style={{ display: 'flex', backgroundColor: C.accent }}>
          <div style={{ display: 'flex', flex: 3, padding: '8px 12px' }}><span style={{ fontSize: 11, fontWeight: 700, color: '#FFFFFF' }}>COST COMPONENT (PER CASE)</span></div>
          <div style={{ display: 'flex', flex: 1, padding: '8px 12px', borderLeft: '1px solid #444' }}><span style={{ fontSize: 11, fontWeight: 700, color: '#FFFFFF' }}>IN-HOUSE</span></div>
          <div style={{ display: 'flex', flex: 1, padding: '8px 12px', borderLeft: '1px solid #444' }}><span style={{ fontSize: 11, fontWeight: 700, color: '#FFFFFF' }}>OUTSOURCE</span></div>
          <div style={{ display: 'flex', flex: 1, padding: '8px 12px', borderLeft: '1px solid #444' }}><span style={{ fontSize: 11, fontWeight: 700, color: '#FFFFFF' }}>% OF PRICE</span></div>
        </div>
        {costRows.map((r, i) => (
          <div key={i} style={{ display: 'flex', backgroundColor: r.green ? C.greenBg : r.bold ? C.fill2 : (i % 2 === 0 ? C.bg : C.fill1), borderTop: `1px solid ${C.rule}` }}>
            <div style={{ display: 'flex', flex: 3, padding: '7px 12px', alignItems: 'center' }}>
              <span style={{ fontSize: 11, color: C.text, fontWeight: r.bold ? 700 : 400 }}>{r.item}</span>
            </div>
            <div style={{ display: 'flex', flex: 1, padding: '7px 12px', borderLeft: `1px solid ${C.rule}`, alignItems: 'center' }}>
              <span style={{ fontSize: 11, color: r.bold ? C.text : C.muted, fontWeight: r.bold ? 700 : 400 }}>{r.std}</span>
            </div>
            <div style={{ display: 'flex', flex: 1, padding: '7px 12px', borderLeft: `1px solid ${C.rule}`, alignItems: 'center' }}>
              <span style={{ fontSize: 11, color: r.green ? C.green : r.bold ? C.text : C.muted, fontWeight: r.bold ? 700 : 400 }}>{r.out}</span>
            </div>
            <div style={{ display: 'flex', flex: 1, padding: '7px 12px', borderLeft: `1px solid ${C.rule}`, alignItems: 'center' }}>
              <span style={{ fontSize: 11, color: C.muted }}>{r.pct}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Qualitative tradeoffs */}
      <div style={{ display: 'flex', flexDirection: 'column', border: `1px solid ${C.border}`, borderRadius: 6, overflow: 'hidden' }}>
        <div style={{ display: 'flex', backgroundColor: C.accent }}>
          <div style={{ display: 'flex', flex: 1, padding: '8px 12px' }}><span style={{ fontSize: 11, fontWeight: 700, color: '#FFFFFF' }}>QUALITATIVE FACTOR</span></div>
          <div style={{ display: 'flex', flex: 1.5, padding: '8px 12px', borderLeft: '1px solid #444' }}><span style={{ fontSize: 11, fontWeight: 700, color: '#FFFFFF' }}>IN-HOUSE</span></div>
          <div style={{ display: 'flex', flex: 1.5, padding: '8px 12px', borderLeft: '1px solid #444' }}><span style={{ fontSize: 11, fontWeight: 700, color: '#FFFFFF' }}>OUTSOURCE</span></div>
        </div>
        {qualRows.map((r, i) => (
          <div key={i} style={{ display: 'flex', backgroundColor: i % 2 === 0 ? C.bg : C.fill1, borderTop: `1px solid ${C.rule}` }}>
            <div style={{ display: 'flex', flex: 1, padding: '7px 12px', alignItems: 'center' }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: C.text }}>{r.factor}</span>
            </div>
            <div style={{ display: 'flex', flex: 1.5, padding: '7px 12px', borderLeft: `1px solid ${C.rule}`, alignItems: 'center' }}>
              <span style={{ fontSize: 11, color: C.muted }}>{r.inhouse}</span>
            </div>
            <div style={{ display: 'flex', flex: 1.5, padding: '7px 12px', borderLeft: `1px solid ${C.rule}`, alignItems: 'center' }}>
              <span style={{ fontSize: 11, color: r.risk === 'high' ? C.red : r.risk === 'low' ? C.green : C.muted }}>{r.outsource}</span>
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 14 }}>
        <span style={{ fontSize: 11, color: C.light }}>SCMG 487 | Case 5-1 | Garland Chocolates</span>
      </div>

    </div>
  );
}

// ============================================================
// RAFIKI: Make-or-Buy — Outbound Logistics
// ============================================================

function FigRafiki() {
  const W = 1060, H = 820;

  const volumeRows = [
    { yr: '1', total: '12,000', south: '12,000', north: '0' },
    { yr: '2', total: '16,600', south: '15,000', north: '1,600' },
    { yr: '3', total: '23,500', south: '19,000', north: '4,500' },
    { yr: '4', total: '29,400', south: '21,700', north: '7,700' },
    { yr: '5', total: '38,080', south: '27,780', north: '10,300' },
  ];

  const stakeholders = [
    { name: 'Solomon Souza', role: 'Logistics Manager', stance: 'Decision-maker. Personally nervous about job security if outsourced. Flag this bias explicitly.', risk: 'bias' },
    { name: 'Raymond Hess', role: 'COO', stance: 'Recommends investigating outsourcing.', risk: 'neutral' },
    { name: 'Chris Canale', role: 'CMO', stance: 'Don\'t care how — just keep 2-day (48-hr) delivery. This is the binding constraint.', risk: 'constraint' },
    { name: 'Emma Winstead', role: 'CFO', stance: 'Rafiki\'s logistics costs are higher than competitors. Do a cost analysis.', risk: 'neutral' },
    { name: 'Elizabeth Diez', role: 'HR Manager', stance: 'Hiring for north region requires 15% salary premium over base.', risk: 'neutral' },
    { name: 'Peter Atunez', role: 'Purchasing Manager', stance: 'Has relationships with all 3 providers. Source of provider data.', risk: 'neutral' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: W, minHeight: H, backgroundColor: C.bg, padding: '32px 40px', fontFamily: 'Inter, sans-serif' }}>

      <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 6 }}>
        <span style={{ fontSize: 10, color: C.muted, letterSpacing: 1.5, textTransform: 'uppercase' as const }}>Case Study · Rafiki Fashion</span>
        <span style={{ fontSize: 22, fontWeight: 700, color: C.text, marginTop: 4 }}>Make or Buy: Outbound Logistics</span>
        <span style={{ fontSize: 12, color: C.muted, marginTop: 4 }}>Solomon Souza · Expanding from south to north region · Current capacity maxed · Binding constraint: 48-hour delivery</span>
      </div>
      <div style={{ display: 'flex', height: 1, backgroundColor: C.border, marginBottom: 18 }} />

      {/* Binding constraint callout */}
      <div style={{ display: 'flex', padding: '10px 16px', backgroundColor: C.redBg, border: `1.5px solid ${C.red}`, borderRadius: 6, marginBottom: 18 }}>
        <span style={{ fontSize: 12, fontWeight: 700, color: C.red }}>THE BINDING CONSTRAINT: CMO requires 48-hour delivery. Provider A (72 hrs) and Provider B (3 days / 72 hrs) both FAIL. Only Provider C (36 hrs) qualifies. The real decision is in-house vs. Provider C at $11.50/unit.</span>
      </div>

      {/* Provider comparison + volume side by side */}
      <div style={{ display: 'flex', gap: 16, marginBottom: 18 }}>

        {/* Provider table */}
        <div style={{ display: 'flex', flexDirection: 'column', flex: 2, border: `1px solid ${C.border}`, borderRadius: 6, overflow: 'hidden' }}>
          <div style={{ display: 'flex', backgroundColor: C.accent }}>
            <div style={{ display: 'flex', flex: 1.5, padding: '8px 12px' }}><span style={{ fontSize: 11, fontWeight: 700, color: '#FFFFFF' }}>PROVIDER</span></div>
            <div style={{ display: 'flex', flex: 1, padding: '8px 12px', borderLeft: '1px solid #444' }}><span style={{ fontSize: 11, fontWeight: 700, color: '#FFFFFF' }}>SOUTH $/UNIT</span></div>
            <div style={{ display: 'flex', flex: 1, padding: '8px 12px', borderLeft: '1px solid #444' }}><span style={{ fontSize: 11, fontWeight: 700, color: '#FFFFFF' }}>NORTH $/UNIT</span></div>
            <div style={{ display: 'flex', flex: 1.5, padding: '8px 12px', borderLeft: '1px solid #444' }}><span style={{ fontSize: 11, fontWeight: 700, color: '#FFFFFF' }}>DELIVERY</span></div>
            <div style={{ display: 'flex', flex: 1, padding: '8px 12px', borderLeft: '1px solid #444' }}><span style={{ fontSize: 11, fontWeight: 700, color: '#FFFFFF' }}>48-HR?</span></div>
          </div>
          {[
            { name: 'Provider A', south: '$6.50', north: '$6.00', delivery: 'Up to 72 hours', pass: false, note: 'Established routes' },
            { name: 'Provider B', south: '$8.30', north: '$9.00', delivery: 'Up to 3 days', pass: false, note: 'Quality, traceability, on-time' },
            { name: 'Provider C', south: '$11.50', north: '$11.50', delivery: '36 hours', pass: true, note: 'Newer firm, experienced leadership' },
          ].map((p, i) => (
            <div key={i} style={{ display: 'flex', backgroundColor: p.pass ? C.greenBg : C.redBg, borderTop: `1px solid ${C.rule}` }}>
              <div style={{ display: 'flex', flex: 1.5, padding: '8px 12px', flexDirection: 'column' as const }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: p.pass ? C.green : C.red }}>{p.name}</span>
                <span style={{ fontSize: 10, color: p.pass ? C.green : C.muted }}>{p.note}</span>
              </div>
              <div style={{ display: 'flex', flex: 1, padding: '8px 12px', borderLeft: `1px solid ${C.rule}`, alignItems: 'center' }}>
                <span style={{ fontSize: 11, color: p.pass ? C.green : C.muted }}>{p.south}</span>
              </div>
              <div style={{ display: 'flex', flex: 1, padding: '8px 12px', borderLeft: `1px solid ${C.rule}`, alignItems: 'center' }}>
                <span style={{ fontSize: 11, color: p.pass ? C.green : C.muted }}>{p.north}</span>
              </div>
              <div style={{ display: 'flex', flex: 1.5, padding: '8px 12px', borderLeft: `1px solid ${C.rule}`, alignItems: 'center' }}>
                <span style={{ fontSize: 11, color: p.pass ? C.green : C.red }}>{p.delivery}</span>
              </div>
              <div style={{ display: 'flex', flex: 1, padding: '8px 12px', borderLeft: `1px solid ${C.rule}`, alignItems: 'center' }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: p.pass ? C.green : C.red }}>{p.pass ? 'YES' : 'NO'}</span>
              </div>
            </div>
          ))}
          <div style={{ display: 'flex', padding: '8px 12px', backgroundColor: C.fill1, borderTop: `1px solid ${C.border}` }}>
            <span style={{ fontSize: 11, color: C.muted }}>In-house yr 1 fuel alone: $76,000 on 12,000 units = $6.33/unit just for fuel. Provider C $11.50 includes everything.</span>
          </div>
        </div>

        {/* Volume forecast */}
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, border: `1px solid ${C.border}`, borderRadius: 6, overflow: 'hidden' }}>
          <div style={{ display: 'flex', backgroundColor: C.accent }}>
            <div style={{ display: 'flex', flex: 1, padding: '8px 12px' }}><span style={{ fontSize: 11, fontWeight: 700, color: '#FFFFFF' }}>YR</span></div>
            <div style={{ display: 'flex', flex: 1.5, padding: '8px 12px', borderLeft: '1px solid #444' }}><span style={{ fontSize: 11, fontWeight: 700, color: '#FFFFFF' }}>TOTAL UNITS</span></div>
            <div style={{ display: 'flex', flex: 1, padding: '8px 12px', borderLeft: '1px solid #444' }}><span style={{ fontSize: 11, fontWeight: 700, color: '#FFFFFF' }}>SOUTH</span></div>
            <div style={{ display: 'flex', flex: 1, padding: '8px 12px', borderLeft: '1px solid #444' }}><span style={{ fontSize: 11, fontWeight: 700, color: '#FFFFFF' }}>NORTH</span></div>
          </div>
          {volumeRows.map((r, i) => (
            <div key={i} style={{ display: 'flex', backgroundColor: i % 2 === 0 ? C.bg : C.fill1, borderTop: `1px solid ${C.rule}` }}>
              <div style={{ display: 'flex', flex: 1, padding: '7px 12px', alignItems: 'center' }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: C.text }}>{r.yr}</span>
              </div>
              <div style={{ display: 'flex', flex: 1.5, padding: '7px 12px', borderLeft: `1px solid ${C.rule}`, alignItems: 'center' }}>
                <span style={{ fontSize: 11, color: C.text }}>{r.total}</span>
              </div>
              <div style={{ display: 'flex', flex: 1, padding: '7px 12px', borderLeft: `1px solid ${C.rule}`, alignItems: 'center' }}>
                <span style={{ fontSize: 11, color: C.muted }}>{r.south}</span>
              </div>
              <div style={{ display: 'flex', flex: 1, padding: '7px 12px', borderLeft: `1px solid ${C.rule}`, alignItems: 'center' }}>
                <span style={{ fontSize: 11, color: C.muted }}>{r.north}</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Stakeholder map */}
      <div style={{ display: 'flex', flexDirection: 'column', border: `1px solid ${C.border}`, borderRadius: 6, overflow: 'hidden', marginBottom: 14 }}>
        <div style={{ display: 'flex', backgroundColor: C.accent, padding: '8px 14px' }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: '#FFFFFF' }}>STAKEHOLDER MAP AND THEIR POSITIONS</span>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap' as const }}>
          {stakeholders.map((s, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', flex: '1 1 30%', padding: '10px 14px', backgroundColor: s.risk === 'bias' ? C.amberBg : s.risk === 'constraint' ? C.redBg : (i % 2 === 0 ? C.bg : C.fill1), borderRight: `1px solid ${C.rule}`, borderTop: i >= 3 ? `1px solid ${C.rule}` : 'none' }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: s.risk === 'bias' ? C.amber : s.risk === 'constraint' ? C.red : C.text }}>{s.name}</span>
              <span style={{ fontSize: 10, color: C.muted, marginTop: 1 }}>{s.role}</span>
              <span style={{ fontSize: 11, color: s.risk === 'bias' ? C.amber : s.risk === 'constraint' ? C.red : C.muted, marginTop: 4 }}>{s.stance}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 6 }}>
        <span style={{ fontSize: 11, color: C.light }}>SCMG 487 | Case Study | Rafiki Make-or-Buy</span>
      </div>

    </div>
  );
}

// ============================================================
// CHU SAINTE-JUSTINE: PPE Procurement During COVID-19
// ============================================================

function FigCHU() {
  const W = 1060, H = 860;

  const timeline = [
    { date: 'Dec 31, 2019', event: 'China reveals new coronavirus strain', signal: 'weak' },
    { date: 'Early Jan 2020', event: 'Benguerrah reads WHO warning at CDG airport (on vacation in France)', signal: 'weak' },
    { date: 'Mid-Jan 2020', event: 'Returns to work. Orders 6 months of PPE. ZERO Quebec cases at this point.', signal: 'action' },
    { date: 'End of Jan 2020', event: 'Orders 1,700 critical medical supplies at 6-month quantities each', signal: 'action' },
    { date: 'Jan 23–24, 2020', event: 'Internal Quebec Ministry memo. Chinese New Year begins — 4-week Wuhan shutdown.', signal: 'warning' },
    { date: 'Feb 13, 2020', event: 'Suppliers warn they cannot meet demand', signal: 'warning' },
    { date: 'Feb 18, 2020', event: 'Ministry asks purchasing groups to search international markets', signal: 'warning' },
    { date: 'Mar 11, 2020', event: 'WHO declares pandemic', signal: 'crisis' },
    { date: 'Mar 13, 2020', event: 'Quebec declares health emergency', signal: 'crisis' },
    { date: 'Mar 17, 2020', event: 'Most hospitals\' surplus PPE depleted. CHU Sainte-Justine: still stocked.', signal: 'outcome' },
    { date: 'Mar 20, 2020', event: 'CHU launches website for spontaneous PPE offers from businesses', signal: 'action' },
  ];

  const decisions = [
    { n: '1', label: 'Early ordering (mid-Jan)', body: '6 months of PPE before any Quebec case. Read the supply chain signal (Wuhan = world\'s PPE production center) before it became obvious.' },
    { n: '2', label: 'Critical supplies list', body: 'Repurposed H1N1-era list. Circulated to all department heads, updated in under 2 weeks, ordered 1,700 items at 6-month quantities.' },
    { n: '3', label: 'Consignment accounting', body: 'Treated stockpile as consignment to avoid balance sheet impact before fiscal year end (March 31). Supply knowledge + financial awareness together.' },
    { n: '4', label: 'Roy-Dupuy demand method', body: 'Highest single-day consumption in past week, rounded to nearest 1,000, times 30 = monthly target. Simple heuristic, but it outperformed complex systems.' },
    { n: '5', label: 'Internal production', body: 'First institution to make its own visors (Technical Aids Services), produced hand sanitizer (pharmacy), established container recovery circuit.' },
    { n: '6', label: 'Demand rationing', body: 'Daily quotas per care unit. Daily resupply for high-activity units (emergency). 30-day reorder trigger treated as "24 hours."' },
  ];

  const signalColor = (s: string) => {
    if (s === 'action') return { bg: C.greenBg, text: C.green };
    if (s === 'warning') return { bg: C.amberBg, text: C.amber };
    if (s === 'crisis') return { bg: C.redBg, text: C.red };
    if (s === 'outcome') return { bg: C.blueBg, text: C.blue };
    return { bg: C.fill1, text: C.muted };
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: W, minHeight: H, backgroundColor: C.bg, padding: '32px 40px', fontFamily: 'Inter, sans-serif' }}>

      <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 6 }}>
        <span style={{ fontSize: 10, color: C.muted, letterSpacing: 1.5, textTransform: 'uppercase' as const }}>Case Study · CHU Sainte-Justine</span>
        <span style={{ fontSize: 22, fontWeight: 700, color: C.text, marginTop: 4 }}>PPE Procurement During COVID-19</span>
        <span style={{ fontSize: 12, color: C.muted, marginTop: 4 }}>Saad Benguerrah · Logistics Director · Montreal · 494 beds · CAD $550M operational budget</span>
      </div>
      <div style={{ display: 'flex', height: 1, backgroundColor: C.border, marginBottom: 18 }} />

      {/* Key outcome box */}
      <div style={{ display: 'flex', gap: 14, marginBottom: 18 }}>
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '12px 16px', backgroundColor: C.greenBg, border: `1px solid ${C.green}`, borderRadius: 6, gap: 4 }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: C.green }}>OUTCOME</span>
          <span style={{ fontSize: 12, color: C.green }}>"Practically no stockouts." On March 17, 2020, most hospitals had depleted surplus PPE. CHU Sainte-Justine was still stocked. The hospital became a distribution node for the entire provincial network.</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '12px 16px', backgroundColor: C.fill1, border: `1px solid ${C.border}`, borderRadius: 6, gap: 4 }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: C.text }}>THE CONTEXT</span>
          <span style={{ fontSize: 12, color: C.muted }}>Canada sourced almost 100% of PPE from foreign markets pre-pandemic (vs. 50% local in EU/US). Wuhan = world's foremost PPE production center. Chinese New Year = 4-week shutdown locked in on Jan 24.</span>
        </div>
      </div>

      {/* Timeline + decisions side by side */}
      <div style={{ display: 'flex', gap: 16 }}>

        {/* Timeline */}
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1.2, border: `1px solid ${C.border}`, borderRadius: 6, overflow: 'hidden' }}>
          <div style={{ display: 'flex', backgroundColor: C.accent, padding: '8px 14px' }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: '#FFFFFF' }}>DECISION TIMELINE (Dec 2019 – Mar 2020)</span>
          </div>
          {timeline.map((t, i) => {
            const sc = signalColor(t.signal);
            return (
              <div key={i} style={{ display: 'flex', gap: 10, padding: '7px 12px', backgroundColor: sc.bg, borderTop: `1px solid ${C.rule}`, alignItems: 'flex-start' }}>
                <span style={{ fontSize: 10, color: sc.text, fontWeight: 700, flexShrink: 0, width: 90, marginTop: 2 }}>{t.date}</span>
                <span style={{ fontSize: 11, color: sc.text }}>{t.event}</span>
              </div>
            );
          })}
          <div style={{ display: 'flex', gap: 8, padding: '8px 12px', backgroundColor: C.fill1, borderTop: `1px solid ${C.border}`, flexWrap: 'wrap' as const }}>
            {[['Action taken', C.green, C.greenBg], ['Warning signal', C.amber, C.amberBg], ['Crisis trigger', C.red, C.redBg], ['Outcome', C.blue, C.blueBg]].map(([label, tc, bg], i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '3px 8px', backgroundColor: bg as string, borderRadius: 3 }}>
                <span style={{ fontSize: 10, color: tc as string, fontWeight: 700 }}>{label as string}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Key decisions */}
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, border: `1px solid ${C.border}`, borderRadius: 6, overflow: 'hidden' }}>
          <div style={{ display: 'flex', backgroundColor: C.accent, padding: '8px 14px' }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: '#FFFFFF' }}>BENGUERRAH'S KEY DECISIONS</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', padding: '10px 12px', gap: 8 }}>
            {decisions.map((d, i) => (
              <div key={i} style={{ display: 'flex', gap: 10 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 22, height: 22, backgroundColor: C.accent, borderRadius: 11, flexShrink: 0 }}>
                  <span style={{ fontSize: 11, fontWeight: 700, color: '#FFFFFF' }}>{d.n}</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <span style={{ fontSize: 12, fontWeight: 700, color: C.text }}>{d.label}</span>
                  <span style={{ fontSize: 11, color: C.muted, marginTop: 2 }}>{d.body}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 14 }}>
        <span style={{ fontSize: 11, color: C.light }}>SCMG 487 | Case Study | CHU Sainte-Justine | Risk Management and Supply Resilience</span>
      </div>

    </div>
  );
}

// ============================================================
// IKEA: Sustainability Communication Strategy
// ============================================================

function FigIKEA() {
  const W = 1060, H = 820;

  const initiatives = [
    { area: 'Energy', action: '920,000+ solar panels on buildings worldwide (by 2021). Wind farm investments. LED retrofits across all stores.' },
    { area: 'Materials', action: '98% of wood FSC-certified or recycled by 2020. Better Cotton Initiative. Goal: 100% renewable/recycled materials in products by 2030.' },
    { area: 'Circular Economy', action: 'Buy Back and Resell program. Modular product designs. In-store repair services. Flat-pack = efficient packaging by design.' },
    { area: 'Transportation', action: 'EV delivery fleets in major cities. Target: all city deliveries by electric vehicle by 2025.' },
    { area: 'Waste', action: 'Phasing out single-use plastics. Flat-pack minimizes shipping volume and packaging waste.' },
    { area: 'Labor', action: 'Supplier codes of conduct. Factory audits. Fair wage standards.' },
    { area: 'Partnerships', action: 'WWF (forest management), FSC certification, Better Cotton Initiative.' },
  ];

  const tensions = [
    { t: 'Scale vs. restraint', body: 'IKEA serves 1B+ annual visitors. Genuine sustainability requires reduced consumption. These goals point in opposite directions.' },
    { t: 'Affordable = disposable', body: 'The original value proposition (cheap, replace when worn) directly contradicts the circular economy goal. "Buy Back" doesn\'t offset volume of new production.' },
    { t: '98% certified vs. more total', body: 'Is 98% FSC-certified wood meaningful if absolute wood consumption keeps growing each year with new stores?' },
    { t: 'Greenwashing accusation risk', body: 'Scale means any sustainability claim faces public scrutiny. Detailed annual reporting is the defense — but transparency also reveals gaps.' },
  ];

  const supplyRole = [
    'Sustainability criterion applies to every supplier evaluation: environmental AND social compliance required',
    'Supply function can influence more than 50% of total environmental costs for manufacturers',
    'Walmart\'s 14,300+ supplier assessments/year is the benchmark for sustainability at scale',
    'Cross-functional team required: supply, strategy, operations, finance, IT, risk management',
    'Supplier codes of conduct + third-party audits + ESG reporting = operationalized sustainability',
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: W, minHeight: H, backgroundColor: C.bg, padding: '32px 40px', fontFamily: 'Inter, sans-serif' }}>

      <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 6 }}>
        <span style={{ fontSize: 10, color: C.muted, letterSpacing: 1.5, textTransform: 'uppercase' as const }}>Case Study · IKEA</span>
        <span style={{ fontSize: 22, fontWeight: 700, color: C.text, marginTop: 4 }}>Sustainability Communication Strategy</span>
        <span style={{ fontSize: 12, color: C.muted, marginTop: 4 }}>422 stores · 50+ markets · 1B+ annual visitors · "People & Planet Positive" 2018 · Goal: climate-positive and circular by 2030</span>
      </div>
      <div style={{ display: 'flex', height: 1, backgroundColor: C.border, marginBottom: 18 }} />

      {/* Core tension box */}
      <div style={{ display: 'flex', flexDirection: 'column', padding: '10px 16px', backgroundColor: C.amberBg, border: `1px solid ${C.amber}`, borderRadius: 6, marginBottom: 18, gap: 4 }}>
        <span style={{ fontSize: 11, fontWeight: 700, color: C.amber }}>CORE TENSION</span>
        <span style={{ fontSize: 12, color: C.amber }}>IKEA's model is built on affordable, mass-produced furniture. The circular economy goal requires restraint. IKEA is trying to do both simultaneously, and the two goals conflict at the product design level.</span>
      </div>

      <div style={{ display: 'flex', gap: 16, marginBottom: 18 }}>

        {/* Sustainability initiatives */}
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1.5, border: `1px solid ${C.border}`, borderRadius: 6, overflow: 'hidden' }}>
          <div style={{ display: 'flex', backgroundColor: C.accent, padding: '8px 14px' }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: '#FFFFFF' }}>SUSTAINABILITY INITIATIVES BY AREA</span>
          </div>
          {initiatives.map((r, i) => (
            <div key={i} style={{ display: 'flex', backgroundColor: i % 2 === 0 ? C.bg : C.fill1, borderTop: `1px solid ${C.rule}` }}>
              <div style={{ display: 'flex', width: 100, padding: '8px 12px', borderRight: `1px solid ${C.border}`, alignItems: 'center', flexShrink: 0 }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: C.text }}>{r.area}</span>
              </div>
              <div style={{ display: 'flex', flex: 1, padding: '8px 12px', alignItems: 'center' }}>
                <span style={{ fontSize: 11, color: C.muted }}>{r.action}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Tensions + supply role */}
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, gap: 12 }}>
          <div style={{ display: 'flex', flexDirection: 'column', border: `1px solid ${C.border}`, borderRadius: 6, overflow: 'hidden' }}>
            <div style={{ display: 'flex', backgroundColor: C.accent, padding: '8px 14px' }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: '#FFFFFF' }}>THE GREENWASHING TENSIONS</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {tensions.map((t, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', padding: '9px 12px', backgroundColor: i % 2 === 0 ? C.bg : C.fill1, borderTop: i > 0 ? `1px solid ${C.rule}` : 'none' }}>
                  <span style={{ fontSize: 12, fontWeight: 700, color: C.amber }}>{t.t}</span>
                  <span style={{ fontSize: 11, color: C.muted, marginTop: 2 }}>{t.body}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', border: `1px solid ${C.border}`, borderRadius: 6, overflow: 'hidden' }}>
            <div style={{ display: 'flex', backgroundColor: C.accent, padding: '8px 14px' }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: '#FFFFFF' }}>SUPPLY MANAGEMENT'S ROLE</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', padding: '10px 12px', gap: 6 }}>
              {supplyRole.map((s, i) => (
                <div key={i} style={{ display: 'flex', gap: 8 }}>
                  <span style={{ fontSize: 11, color: C.accent, fontWeight: 700, flexShrink: 0 }}>›</span>
                  <span style={{ fontSize: 11, color: C.muted }}>{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 6 }}>
        <span style={{ fontSize: 11, color: C.light }}>SCMG 487 | Case Study | IKEA | Supply Strategy and Sustainability</span>
      </div>

    </div>
  );
}

// ============================================================
// JBS CYBER ATTACK: New Risks to Global Meat Supply Chains
// ============================================================

function FigJBS() {
  const W = 1060, H = 920;

  const timeline = [
    { date: 'May 30', event: 'JBS detects organized cybersecurity attack on North American and Australian IT systems', signal: 'crisis' },
    { date: 'May 31', event: 'Press release issued. All systems suspended. White House notified. Incident response team activated.', signal: 'warning' },
    { date: 'Jun 1', event: 'All 13 US beef plants offline. USDA cannot post wholesale prices. Retail shortages begin.', signal: 'crisis' },
    { date: 'Jun 1-3', event: 'Farmers cannot deliver livestock. Feedlots back up. Animal welfare crisis from halted processing.', signal: 'crisis' },
    { date: 'Jun 3', event: 'White House links attack to Russia. FBI attributes to REvil. Partial operations resume.', signal: 'warning' },
    { date: 'Jun 5', event: 'Most plants resume after 5-day shutdown across US, Canada, Australia.', signal: 'outcome' },
    { date: 'Jun 9', event: 'JBS confirms $11M ransom in Bitcoin. No customer/employee data compromised.', signal: 'warning' },
  ];

  const questions = [
    { n: '1', label: 'Who is JBS?', body: 'Brazilian multinational, world\'s largest meat processor. $86B revenue, 270K employees, 250+ plants in 20+ countries. Four divisions: JBS USA, Australia, Canada, Pilgrim\'s. Processes beef, pork, chicken, lamb, aquaculture.' },
    { n: '2', label: 'How important is JBS to global meat?', body: 'Dominant. Processes 1/5 of global meat supply. 51,400 head/day. 20.5% US market share (largest). Big 4 control 55% of US meat. $65B net revenue in 2021 (+29.8% YoY).' },
    { n: '3', label: 'Who do they supply?', body: 'Grocery (Walmart, Kroger, Costco), restaurants, food service (Sysco, US Foods), fast food, military, institutional buyers. 180 countries. Asia = 55% of exports.' },
    { n: '4', label: 'How significant was the disruption?', body: 'Catastrophic. Upstream: livestock delivery halted, animal welfare crisis. Midstream: 22% production drop, cold chain broken. Downstream: no USDA prices, retail shortages, panic buying. Exposed Big 4 concentration risk.' },
    { n: '5', label: 'If JBS were your supplier, what would you do?', body: 'Immediate: activate backup suppliers, assess inventory buffers, contact JBS for timeline. Long-term: require cyber audits from suppliers, add incident response clauses, build safety stock, diversify beyond Big 4.' },
    { n: '6', label: 'Is cyber the only risk with JBS?', body: 'No. Bribery scandal (2017, CEO arrested), Amazon deforestation links, COVID plant outbreaks, food safety across 20+ jurisdictions, currency risk, animal welfare scrutiny, Big 4 antitrust concerns.' },
  ];

  const signalColor = (s: string) => {
    if (s === 'warning') return { bg: C.amberBg, text: C.amber };
    if (s === 'crisis') return { bg: C.redBg, text: C.red };
    if (s === 'outcome') return { bg: C.greenBg, text: C.green };
    return { bg: C.fill1, text: C.muted };
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: W, minHeight: H, backgroundColor: C.bg, padding: '32px 40px', fontFamily: 'Inter, sans-serif' }}>

      <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 6 }}>
        <span style={{ fontSize: 10, color: C.muted, letterSpacing: 1.5, textTransform: 'uppercase' as const }}>Case Study · JBS SA · SCMG 487</span>
        <span style={{ fontSize: 22, fontWeight: 700, color: C.text, marginTop: 4 }}>JBS Cyber Attack: New Risks to Global Meat Supply Chains</span>
        <span style={{ fontSize: 12, color: C.muted, marginTop: 4 }}>REvil Ransomware · May 30, 2021 · $86B Revenue · 270,000 Employees · 250+ Plants · 20+ Countries</span>
      </div>
      <div style={{ display: 'flex', height: 1, backgroundColor: C.border, marginBottom: 18 }} />

      {/* Context boxes */}
      <div style={{ display: 'flex', gap: 14, marginBottom: 18 }}>
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '12px 16px', backgroundColor: C.redBg, border: `1px solid ${C.red}`, borderRadius: 6, gap: 4 }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: C.red }}>THE ATTACK</span>
          <span style={{ fontSize: 12, color: C.red }}>May 30, 2021: REvil ransomware gang hit JBS USA servers. 13 US plants shut down for 5 days. 7,000 workers stood down in Australia. 3,000 shifts cancelled in US/Canada. Production dropped 22% (94K vs 121K animals). JBS paid $11M ransom in Bitcoin.</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '12px 16px', backgroundColor: C.greenBg, border: `1px solid ${C.green}`, borderRadius: 6, gap: 4 }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: C.green }}>THE COMPANY</span>
          <span style={{ fontSize: 12, color: C.green }}>Brazilian multinational founded 1953. World's largest food company by revenue ($86B). Global leader in beef, chicken, pork, lamb. 20.5% US market share. Big 4 (JBS, Tyson, Cargill, Smithfield) control 55% of US meat. Exports to 180 countries.</span>
        </div>
      </div>

      {/* Timeline + Q&A side by side */}
      <div style={{ display: 'flex', gap: 16 }}>

        {/* Timeline */}
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, border: `1px solid ${C.border}`, borderRadius: 6, overflow: 'hidden', alignSelf: 'flex-start' as const }}>
          <div style={{ display: 'flex', backgroundColor: C.accent, padding: '8px 14px' }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: '#FFFFFF' }}>ATTACK TIMELINE</span>
          </div>
          {timeline.map((t, i) => {
            const sc = signalColor(t.signal);
            return (
              <div key={i} style={{ display: 'flex', gap: 10, padding: '7px 12px', backgroundColor: sc.bg, borderTop: `1px solid ${C.rule}`, alignItems: 'flex-start' }}>
                <span style={{ fontSize: 10, color: sc.text, fontWeight: 700, flexShrink: 0, width: 60, marginTop: 2 }}>{t.date}</span>
                <span style={{ fontSize: 11, color: sc.text }}>{t.event}</span>
              </div>
            );
          })}
          <div style={{ display: 'flex', gap: 8, padding: '8px 12px', backgroundColor: C.fill1, borderTop: `1px solid ${C.border}`, flexWrap: 'wrap' as const }}>
            {[['Crisis', C.red, C.redBg], ['Response', C.amber, C.amberBg], ['Resolution', C.green, C.greenBg]].map(([label, tc, bg], i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '3px 8px', backgroundColor: bg as string, borderRadius: 3 }}>
                <span style={{ fontSize: 10, color: tc as string, fontWeight: 700 }}>{label as string}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Case Q&A */}
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1.2, border: `1px solid ${C.border}`, borderRadius: 6, overflow: 'hidden' }}>
          <div style={{ display: 'flex', backgroundColor: C.accent, padding: '8px 14px' }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: '#FFFFFF' }}>CASE QUESTIONS AND ANSWERS</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', padding: '10px 12px', gap: 8 }}>
            {questions.map((q, i) => (
              <div key={i} style={{ display: 'flex', gap: 10 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 22, height: 22, backgroundColor: C.accent, borderRadius: 11, flexShrink: 0 }}>
                  <span style={{ fontSize: 11, fontWeight: 700, color: '#FFFFFF' }}>{q.n}</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <span style={{ fontSize: 12, fontWeight: 700, color: C.text }}>{q.label}</span>
                  <span style={{ fontSize: 11, color: C.muted, marginTop: 2 }}>{q.body}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 14 }}>
        <span style={{ fontSize: 11, color: C.light }}>SCMG 487 | Case Study | JBS Cyber Attack | Risk Management and Supply Chain Resilience</span>
      </div>

    </div>
  );
}

// ============================================================

async function main() {
  const fonts = await loadFonts();
  console.log('Fonts loaded. Generating remaining case study figures...');

  const figGarland = await render(<FigGarland />, 1060, 900, fonts);
  save(figGarland, 'fig-case-5-1-garland-chocolates.png');

  const figRafiki = await render(<FigRafiki />, 1060, 820, fonts);
  save(figRafiki, 'fig-case-rafiki-make-or-buy.png');

  const figCHU = await render(<FigCHU />, 1060, 860, fonts);
  save(figCHU, 'fig-case-chu-pandemic-ppe.png');

  const figIKEA = await render(<FigIKEA />, 1060, 820, fonts);
  save(figIKEA, 'fig-case-ikea-sustainability.png');

  const figJBS = await render(<FigJBS />, 1060, 920, fonts);
  save(figJBS, 'fig-case-jbs-cyber-attack.png');

  console.log('Done. 5 case study figures written to case-studies/');
}

main().catch(console.error);
