#!/usr/bin/env npx tsx

import React from 'react';

/**
 * SCMG 487 Chapter 8 Case Study Diagrams
 *
 * Case 8-1 Lisa Caruso (Morrison Inc.):
 *   fig-case-8-1-morrison-stockroom-analysis.png
 *
 * Case 8-2 Huntington School District:
 *   fig-case-8-2-hsd-distribution-center.png
 *
 * Case 8-3 Sondra Fox (Covington Meters):
 *   fig-case-8-3-covington-inventory-breakdown.png
 *
 * Run from imaginationg-main root:
 *   npx tsx scripts/generate-487-ch8-case-diagrams.tsx
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
// CASE 8-1: Lisa Caruso, Morrison Inc. — Stockroom Analysis
// ============================================================

function FigCase8_1() {
  const W = 1060, H = 960;

  const problemRows = [
    { problem: 'Inventory records vs. physical counts', impact: 'Rush orders at premium prices', cost: '$10,000/mo minimum', root: 'Removals not recorded (supervisors, night shift)' },
    { problem: 'Annual count only', impact: 'Discrepancies found 12 months late', cost: 'Compounding errors all year', root: 'No cycle counting program' },
    { problem: 'Maintenance "borrows" parts', impact: 'Phantom demand triggers wrong reorders', cost: 'Unknown (untracked)', root: 'No access control between maintenance and stockroom' },
    { problem: 'Production workers wait at stockroom', impact: '140 workers x ~20 min/day idle', cost: '~$133K/yr in lost labor', root: 'Stockroom understaffed for demand volume' },
    { problem: 'Stockroom clerks overworked', impact: 'Overtime, Saturday counts', cost: '$50K/yr per clerk + OT', root: 'Manual processes, reactive work' },
    { problem: 'Night shift has no clerk', impact: 'Supervisors take parts unrecorded', cost: 'Data accuracy collapse', root: 'Staffing gap in 24-hr operation' },
  ];

  const phases = [
    { phase: 'IMMEDIATE', time: 'Before Feb ramp', actions: ['Mandatory withdrawal recording for ALL shifts', 'Night shift: clerk or self-service scanning', 'Stop the data bleed first'], color: C.red, bg: C.redBg },
    { phase: 'SHORT-TERM', time: 'Q1', actions: ['ABC classify 13,000 SKUs', 'Cycle count A-items weekly', 'B-items monthly, C-items quarterly', 'Catch discrepancies in days, not months'], color: C.amber, bg: C.amberBg },
    { phase: 'MEDIUM-TERM', time: 'Q2+', actions: ['EOQ/reorder point calculations (data now accurate)', 'ERP forecasting module for 15% volume increase', 'Past usage no longer valid baseline'], color: C.green, bg: C.greenBg },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: W, minHeight: H, backgroundColor: C.bg, padding: '32px 40px', fontFamily: 'Inter, sans-serif' }}>

      {/* Header */}
      <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 6 }}>
        <span style={{ fontSize: 10, color: C.muted, letterSpacing: 1.5, textTransform: 'uppercase' as const }}>Case 8-1 · Morrison Inc.</span>
        <span style={{ fontSize: 22, fontWeight: 700, color: C.text, marginTop: 4 }}>Stockroom Inventory Control Failure</span>
        <span style={{ fontSize: 12, color: C.muted, marginTop: 4 }}>Lisa Caruso · Philadelphia, PA · $50M sales · 13,000 SKUs · $28M annual purchases · 15% growth coming</span>
      </div>

      <div style={{ display: 'flex', height: 1, backgroundColor: C.border, marginBottom: 16 }} />

      {/* Key numbers */}
      <div style={{ display: 'flex', gap: 12, marginBottom: 18 }}>
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '12px 14px', backgroundColor: C.redBg, border: `1px solid ${C.red}`, borderRadius: 6 }}>
          <span style={{ fontSize: 10, color: C.red, letterSpacing: 1, textTransform: 'uppercase' as const }}>Monthly Loss</span>
          <span style={{ fontSize: 20, fontWeight: 700, color: C.red, marginTop: 2 }}>$10,000+</span>
          <span style={{ fontSize: 10, color: C.red }}>Rush orders + tied-up capital</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '12px 14px', backgroundColor: C.amberBg, border: `1px solid ${C.amber}`, borderRadius: 6 }}>
          <span style={{ fontSize: 10, color: C.amber, letterSpacing: 1, textTransform: 'uppercase' as const }}>Inventory Swing</span>
          <span style={{ fontSize: 20, fontWeight: 700, color: C.amber, marginTop: 2 }}>$1.2M - $3M</span>
          <span style={{ fontSize: 10, color: C.amber }}>Wide band = poor control</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '12px 14px', backgroundColor: C.blueBg, border: `1px solid ${C.blue}`, borderRadius: 6 }}>
          <span style={{ fontSize: 10, color: C.blue, letterSpacing: 1, textTransform: 'uppercase' as const }}>Count Frequency</span>
          <span style={{ fontSize: 20, fontWeight: 700, color: C.blue, marginTop: 2 }}>1x / year</span>
          <span style={{ fontSize: 10, color: C.blue }}>Annual only. Chapter 8 says: cycle count.</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '12px 14px', backgroundColor: C.fill1, border: `1px solid ${C.border}`, borderRadius: 6 }}>
          <span style={{ fontSize: 10, color: C.muted, letterSpacing: 1, textTransform: 'uppercase' as const }}>ERP Status</span>
          <span style={{ fontSize: 20, fontWeight: 700, color: C.text, marginTop: 2 }}>Installed</span>
          <span style={{ fontSize: 10, color: C.muted }}>Has modules. Process bypasses them.</span>
        </div>
      </div>

      {/* Problem table */}
      <div style={{ display: 'flex', flexDirection: 'column', border: `1px solid ${C.border}`, borderRadius: 6, overflow: 'hidden', marginBottom: 18 }}>
        <div style={{ display: 'flex', backgroundColor: C.accent }}>
          <div style={{ display: 'flex', flex: 2, padding: '8px 12px' }}>
            <span style={{ fontSize: 10, fontWeight: 700, color: '#FFFFFF' }}>PROBLEM</span>
          </div>
          <div style={{ display: 'flex', flex: 2, padding: '8px 12px', borderLeft: `1px solid #444` }}>
            <span style={{ fontSize: 10, fontWeight: 700, color: '#FFFFFF' }}>IMPACT</span>
          </div>
          <div style={{ display: 'flex', flex: 1.5, padding: '8px 12px', borderLeft: `1px solid #444` }}>
            <span style={{ fontSize: 10, fontWeight: 700, color: '#FFFFFF' }}>COST</span>
          </div>
          <div style={{ display: 'flex', flex: 2.5, padding: '8px 12px', borderLeft: `1px solid #444` }}>
            <span style={{ fontSize: 10, fontWeight: 700, color: '#FFFFFF' }}>ROOT CAUSE</span>
          </div>
        </div>
        {problemRows.map((r, i) => (
          <div key={i} style={{ display: 'flex', backgroundColor: i % 2 === 0 ? C.bg : C.fill1, borderTop: `1px solid ${C.rule}` }}>
            <div style={{ display: 'flex', flex: 2, padding: '7px 12px', alignItems: 'center' }}>
              <span style={{ fontSize: 10, fontWeight: 700, color: C.text }}>{r.problem}</span>
            </div>
            <div style={{ display: 'flex', flex: 2, padding: '7px 12px', borderLeft: `1px solid ${C.rule}`, alignItems: 'center' }}>
              <span style={{ fontSize: 10, color: C.muted }}>{r.impact}</span>
            </div>
            <div style={{ display: 'flex', flex: 1.5, padding: '7px 12px', borderLeft: `1px solid ${C.rule}`, alignItems: 'center' }}>
              <span style={{ fontSize: 10, color: C.red, fontWeight: 700 }}>{r.cost}</span>
            </div>
            <div style={{ display: 'flex', flex: 2.5, padding: '7px 12px', borderLeft: `1px solid ${C.rule}`, alignItems: 'center' }}>
              <span style={{ fontSize: 10, color: C.muted }}>{r.root}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Three-phase solution */}
      <span style={{ fontSize: 12, fontWeight: 700, color: C.text, marginBottom: 10 }}>SOLUTION: THREE PHASES (Chapter 8 Framework)</span>
      <div style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
        {phases.map((p, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '12px 14px', backgroundColor: p.bg, border: `1.5px solid ${p.color}`, borderRadius: 6 }}>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 6 }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: p.color }}>{p.phase}</span>
              <span style={{ fontSize: 10, color: p.color }}>({p.time})</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {p.actions.map((a, j) => (
                <span key={j} style={{ fontSize: 10, color: p.color }}>{'\u203A'} {a}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Key insight */}
      <div style={{ display: 'flex', padding: '12px 16px', backgroundColor: C.fill1, border: `1px solid ${C.border}`, borderRadius: 6 }}>
        <span style={{ fontSize: 11, color: C.text }}>
          <span style={{ fontWeight: 700 }}>The trap:</span> Adding a 4th clerk treats the symptom. The root cause is that the ERP system exists but the process bypasses it. Cycle counting + mandatory withdrawal recording fixes data accuracy. Good data makes the min/max system work. More clerks processing bad data faster doesn't fix bad data.
        </span>
      </div>

      {/* Footer */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 14 }}>
        <span style={{ fontSize: 11, color: C.light }}>SCMG 487 | Case 8-1 | Morrison Inc.</span>
      </div>

    </div>
  );
}

// ============================================================
// CASE 8-2: Huntington School District — Distribution Center
// ============================================================

function FigCase8_2() {
  const W = 1060, H = 900;

  const currentCosts = [
    { item: 'Staff (12 people: 1 supervisor, 1 clerk, 5 warehouse, 5 drivers)', cost: '$650,000' },
    { item: 'Overhead (rent, utilities, vehicle maintenance)', cost: '~$650,000' },
    { item: 'Inventory carrying cost ($1.3M avg at ~20%)', cost: '~$260,000' },
    { item: 'Estimated total distribution center cost', cost: '~$1.56M', bold: true },
  ];

  const hiddenCosts = [
    { item: 'Lost quantity discounts (200 schools ordering individually)', cost: 'Could be millions', severity: 'high' },
    { item: 'Staff time at 200 schools managing own purchasing/receiving', cost: 'Teacher/admin hours diverted', severity: 'high' },
    { item: 'Higher per-unit prices (small orders, no consolidation)', cost: 'Spread across $100M spend', severity: 'high' },
    { item: 'Duplicate inventory across 200 locations', cost: 'Higher total inventory than centralized', severity: 'med' },
    { item: 'Rural school delivery (supplier minimums, pickup costs)', cost: '3,000 sq mi geography', severity: 'med' },
    { item: 'Loss of educational resource lending library', cost: 'No substitute (AV equipment, teaching aids)', severity: 'med' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: W, minHeight: H, backgroundColor: C.bg, padding: '32px 40px', fontFamily: 'Inter, sans-serif' }}>

      {/* Header */}
      <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 6 }}>
        <span style={{ fontSize: 10, color: C.muted, letterSpacing: 1.5, textTransform: 'uppercase' as const }}>Case 8-2 · Huntington School District</span>
        <span style={{ fontSize: 22, fontWeight: 700, color: C.text, marginTop: 4 }}>Close the Distribution Center? Cost-Benefit Analysis</span>
        <span style={{ fontSize: 12, color: C.muted, marginTop: 4 }}>Derek Chan · Arizona · 200 schools · 8,500 staff · $690M budget · $9M deficit · Friday deadline</span>
      </div>

      <div style={{ display: 'flex', height: 1, backgroundColor: C.border, marginBottom: 16 }} />

      {/* Context cards */}
      <div style={{ display: 'flex', gap: 12, marginBottom: 18 }}>
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '12px 14px', backgroundColor: C.redBg, border: `1px solid ${C.red}`, borderRadius: 6 }}>
          <span style={{ fontSize: 10, color: C.red, letterSpacing: 1, textTransform: 'uppercase' as const }}>Budget Deficit</span>
          <span style={{ fontSize: 20, fontWeight: 700, color: C.red, marginTop: 2 }}>$9 million</span>
          <span style={{ fontSize: 10, color: C.red }}>For the coming fiscal year</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '12px 14px', backgroundColor: C.amberBg, border: `1px solid ${C.amber}`, borderRadius: 6 }}>
          <span style={{ fontSize: 10, color: C.amber, letterSpacing: 1, textTransform: 'uppercase' as const }}>Proposed Savings</span>
          <span style={{ fontSize: 20, fontWeight: 700, color: C.amber, marginTop: 2 }}>~$1.3M</span>
          <span style={{ fontSize: 10, color: C.amber }}>Jocelyn's estimate (14% of deficit)</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '12px 14px', backgroundColor: C.blueBg, border: `1px solid ${C.blue}`, borderRadius: 6 }}>
          <span style={{ fontSize: 10, color: C.blue, letterSpacing: 1, textTransform: 'uppercase' as const }}>Annual Purchases</span>
          <span style={{ fontSize: 20, fontWeight: 700, color: C.blue, marginTop: 2 }}>$100M</span>
          <span style={{ fontSize: 10, color: C.blue }}>Consolidated purchasing power at risk</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '12px 14px', backgroundColor: C.fill1, border: `1px solid ${C.border}`, borderRadius: 6 }}>
          <span style={{ fontSize: 10, color: C.muted, letterSpacing: 1, textTransform: 'uppercase' as const }}>Average Inventory</span>
          <span style={{ fontSize: 20, fontWeight: 700, color: C.text, marginTop: 2 }}>$1.3M</span>
          <span style={{ fontSize: 10, color: C.muted }}>Fluctuates considerably during year</span>
        </div>
      </div>

      {/* Two column: visible savings vs hidden costs */}
      <div style={{ display: 'flex', gap: 14, marginBottom: 18 }}>

        {/* Visible savings (Jocelyn's math) */}
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, border: `1px solid ${C.border}`, borderRadius: 6, overflow: 'hidden' }}>
          <div style={{ display: 'flex', backgroundColor: C.green, padding: '8px 14px' }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: '#FFFFFF' }}>JOCELYN'S SAVINGS (VISIBLE)</span>
          </div>
          {currentCosts.map((r, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 14px', backgroundColor: r.bold ? C.greenBg : (i % 2 === 0 ? C.bg : C.fill1), borderTop: `1px solid ${C.rule}` }}>
              <span style={{ fontSize: 10, color: r.bold ? C.green : C.muted, fontWeight: r.bold ? 700 : 400, flex: 1, paddingRight: 8 }}>{r.item}</span>
              <span style={{ fontSize: 10, color: r.bold ? C.green : C.muted, fontWeight: r.bold ? 700 : 400, flexShrink: 0 }}>{r.cost}</span>
            </div>
          ))}
        </div>

        {/* Hidden costs of closing */}
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, border: `1px solid ${C.border}`, borderRadius: 6, overflow: 'hidden' }}>
          <div style={{ display: 'flex', backgroundColor: C.red, padding: '8px 14px' }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: '#FFFFFF' }}>HIDDEN COSTS OF CLOSING</span>
          </div>
          {hiddenCosts.map((r, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 14px', backgroundColor: i % 2 === 0 ? C.bg : C.fill1, borderTop: `1px solid ${C.rule}` }}>
              <span style={{ fontSize: 10, color: C.text, flex: 1, paddingRight: 8 }}>{r.item}</span>
              <span style={{ fontSize: 10, color: r.severity === 'high' ? C.red : C.amber, fontWeight: 700, flexShrink: 0 }}>{r.cost}</span>
            </div>
          ))}
        </div>

      </div>

      {/* Distribution center services */}
      <span style={{ fontSize: 12, fontWeight: 700, color: C.text, marginBottom: 10 }}>WHAT THE DISTRIBUTION CENTER ACTUALLY DOES (Unbundle Before Cutting)</span>
      <div style={{ display: 'flex', gap: 10, marginBottom: 16 }}>
        {[
          { svc: 'Bulk purchasing', desc: 'Quantity discounts, consolidated orders', replaceable: 'Partially (direct delivery)', color: C.amber },
          { svc: 'Warehousing', desc: 'Safety stock, lead time buffer', replaceable: 'Schools have no storage', color: C.red },
          { svc: 'Delivery service', desc: '4 vans + truck, 2x/week to 200 schools', replaceable: 'Supplier delivery or school pickup', color: C.amber },
          { svc: 'Resource library', desc: 'AV equipment, teaching aids loaned', replaceable: 'No substitute exists', color: C.red },
        ].map((s, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '10px 12px', backgroundColor: C.fill1, border: `1px solid ${C.border}`, borderRadius: 6 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: C.text, marginBottom: 4 }}>{s.svc}</span>
            <span style={{ fontSize: 10, color: C.muted, marginBottom: 6 }}>{s.desc}</span>
            <span style={{ fontSize: 10, fontWeight: 700, color: s.color }}>Replaceable? {s.replaceable}</span>
          </div>
        ))}
      </div>

      {/* Key insight */}
      <div style={{ display: 'flex', padding: '12px 16px', backgroundColor: C.fill1, border: `1px solid ${C.border}`, borderRadius: 6 }}>
        <span style={{ fontSize: 11, color: C.text }}>
          <span style={{ fontWeight: 700 }}>The frame:</span> This is a make-or-buy decision for distribution services (Ch. 5 + Ch. 8). $1.3M savings covers only 14% of the $9M deficit while risking the purchasing power behind $100M in annual spend. Even a 2% increase in per-unit costs from lost volume discounts = $2M, which exceeds the entire savings. Derek should propose alternatives: reduce staff, shrink footprint, renegotiate supplier direct delivery for non-bulk items.
        </span>
      </div>

      {/* Footer */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 14 }}>
        <span style={{ fontSize: 11, color: C.light }}>SCMG 487 | Case 8-2 | Huntington School District</span>
      </div>

    </div>
  );
}

// ============================================================
// CASE 8-3: Sondra Fox, Covington Meters — Inventory Breakdown
// ============================================================

function FigCase8_3() {
  const W = 1060, H = 1080;

  const rawTop = [
    { cat: 'Electronics', cost: '$560,445', pct: '31%', skus: '444', note: 'A-item. 10-15 week supplier lead time.' },
    { cat: 'Hardware', cost: '$232,681', pct: '13%', skus: '198', note: 'High SKU count, moderate value per unit.' },
    { cat: 'Castings', cost: '$206,063', pct: '12%', skus: '43', note: 'A-item. 10-12 week lead time. Machined in-house.' },
    { cat: 'Counter subassemblies', cost: '$204,032', pct: '11%', skus: '79', note: 'Feeds into counter assemblies (WIP).' },
    { cat: 'Plastic parts', cost: '$183,558', pct: '10%', skus: '41', note: 'High unit volume (876K units).' },
    { cat: 'All other (9 categories)', cost: '$401,000', pct: '22%', skus: '400', note: 'C-items. Light management.' },
  ];

  const wipTop = [
    { cat: 'Counter assemblies', cost: '$464,308', pct: '21%', skus: '39', note: 'Largest WIP category. Custom per order.' },
    { cat: 'Counter subassemblies', cost: '$426,904', pct: '19%', skus: '175', note: 'High SKU count. Builds into assemblies.' },
    { cat: 'Reduction gear housings', cost: '$239,253', pct: '11%', skus: '166', note: 'Very high SKU count for a single category.' },
    { cat: 'Cylinders', cost: '$208,772', pct: '9%', skus: '41', note: 'Moderate. Machined in-house.' },
    { cat: 'Gears', cost: '$144,798', pct: '6%', skus: '47', note: 'Standard across meter sizes.' },
    { cat: 'All other (13 categories)', cost: '$766,000', pct: '34%', skus: '367', note: 'Many small categories.' },
  ];

  const contradictions = [
    { n: '1', label: 'Cut $1M inventory', vs: 'Grow sales 30%', tension: 'Growth usually increases inventory. Must improve turns dramatically.' },
    { n: '2', label: 'Keep 4-week lead time', vs: '8-12 week supplier lead times', tension: 'The gap between customer and supplier lead time = inventory buffer.' },
    { n: '3', label: 'Custom specs per order', vs: 'Supplier minimum order qtys', tension: 'Order 100 plates, minimum is 500. Excess 400 sit until next similar order.' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: W, minHeight: H, backgroundColor: C.bg, padding: '32px 40px', fontFamily: 'Inter, sans-serif' }}>

      {/* Header */}
      <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 6 }}>
        <span style={{ fontSize: 10, color: C.muted, letterSpacing: 1.5, textTransform: 'uppercase' as const }}>Case 8-3 · Covington Meters (also Case 6-1 supplier)</span>
        <span style={{ fontSize: 22, fontWeight: 700, color: C.text, marginTop: 4 }}>Inventory Reduction Plan: $4M Problem</span>
        <span style={{ fontSize: 12, color: C.muted, marginTop: 4 }}>Sondra Fox · Cincinnati, OH · $20M sales (was $14M) · Target $40M · $1M interest burden · Monday deadline</span>
      </div>

      <div style={{ display: 'flex', height: 1, backgroundColor: C.border, marginBottom: 16 }} />

      {/* Summary cards */}
      <div style={{ display: 'flex', gap: 10, marginBottom: 16 }}>
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '10px 12px', backgroundColor: C.redBg, border: `1px solid ${C.red}`, borderRadius: 6 }}>
          <span style={{ fontSize: 10, color: C.red, letterSpacing: 1, textTransform: 'uppercase' as const }}>Raw Material</span>
          <span style={{ fontSize: 18, fontWeight: 700, color: C.red, marginTop: 2 }}>$1,787,773</span>
          <span style={{ fontSize: 10, color: C.red }}>1,205 SKUs</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '10px 12px', backgroundColor: C.amberBg, border: `1px solid ${C.amber}`, borderRadius: 6 }}>
          <span style={{ fontSize: 10, color: C.amber, letterSpacing: 1, textTransform: 'uppercase' as const }}>Work-in-Progress</span>
          <span style={{ fontSize: 18, fontWeight: 700, color: C.amber, marginTop: 2 }}>$2,249,980</span>
          <span style={{ fontSize: 10, color: C.amber }}>735 SKUs</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '10px 12px', backgroundColor: C.greenBg, border: `1px solid ${C.green}`, borderRadius: 6 }}>
          <span style={{ fontSize: 10, color: C.green, letterSpacing: 1, textTransform: 'uppercase' as const }}>Finished Goods</span>
          <span style={{ fontSize: 18, fontWeight: 700, color: C.green, marginTop: 2 }}>$150-200K</span>
          <span style={{ fontSize: 10, color: C.green }}>Ship immediately. Not the problem.</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '10px 12px', backgroundColor: C.fill1, border: `1.5px solid ${C.accent}`, borderRadius: 6 }}>
          <span style={{ fontSize: 10, color: C.muted, letterSpacing: 1, textTransform: 'uppercase' as const }}>Slow-Moving ({'>'}180 days)</span>
          <span style={{ fontSize: 18, fontWeight: 700, color: C.text, marginTop: 2 }}>$1,400,000</span>
          <span style={{ fontSize: 10, color: C.muted }}>Structural surplus from min order qtys</span>
        </div>
      </div>

      {/* Raw material ABC */}
      <div style={{ display: 'flex', gap: 14, marginBottom: 16 }}>
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, border: `1px solid ${C.border}`, borderRadius: 6, overflow: 'hidden' }}>
          <div style={{ display: 'flex', backgroundColor: C.red, padding: '7px 12px' }}>
            <span style={{ fontSize: 10, fontWeight: 700, color: '#FFFFFF' }}>RAW MATERIAL — TOP CATEGORIES (ABC view)</span>
          </div>
          <div style={{ display: 'flex', backgroundColor: C.accent }}>
            <div style={{ display: 'flex', flex: 2, padding: '5px 10px' }}><span style={{ fontSize: 9, fontWeight: 700, color: '#FFFFFF' }}>CATEGORY</span></div>
            <div style={{ display: 'flex', flex: 1, padding: '5px 10px', borderLeft: `1px solid #444` }}><span style={{ fontSize: 9, fontWeight: 700, color: '#FFFFFF' }}>COST</span></div>
            <div style={{ display: 'flex', flex: 0.5, padding: '5px 10px', borderLeft: `1px solid #444` }}><span style={{ fontSize: 9, fontWeight: 700, color: '#FFFFFF' }}>%</span></div>
            <div style={{ display: 'flex', flex: 0.5, padding: '5px 10px', borderLeft: `1px solid #444` }}><span style={{ fontSize: 9, fontWeight: 700, color: '#FFFFFF' }}>SKUs</span></div>
            <div style={{ display: 'flex', flex: 2, padding: '5px 10px', borderLeft: `1px solid #444` }}><span style={{ fontSize: 9, fontWeight: 700, color: '#FFFFFF' }}>NOTE</span></div>
          </div>
          {rawTop.map((r, i) => (
            <div key={i} style={{ display: 'flex', backgroundColor: i % 2 === 0 ? C.bg : C.fill1, borderTop: `1px solid ${C.rule}` }}>
              <div style={{ display: 'flex', flex: 2, padding: '6px 10px', alignItems: 'center' }}>
                <span style={{ fontSize: 10, fontWeight: i < 3 ? 700 : 400, color: C.text }}>{r.cat}</span>
              </div>
              <div style={{ display: 'flex', flex: 1, padding: '6px 10px', borderLeft: `1px solid ${C.rule}`, alignItems: 'center' }}>
                <span style={{ fontSize: 10, color: C.muted }}>{r.cost}</span>
              </div>
              <div style={{ display: 'flex', flex: 0.5, padding: '6px 10px', borderLeft: `1px solid ${C.rule}`, alignItems: 'center' }}>
                <span style={{ fontSize: 10, fontWeight: 700, color: i < 3 ? C.red : C.muted }}>{r.pct}</span>
              </div>
              <div style={{ display: 'flex', flex: 0.5, padding: '6px 10px', borderLeft: `1px solid ${C.rule}`, alignItems: 'center' }}>
                <span style={{ fontSize: 10, color: C.muted }}>{r.skus}</span>
              </div>
              <div style={{ display: 'flex', flex: 2, padding: '6px 10px', borderLeft: `1px solid ${C.rule}`, alignItems: 'center' }}>
                <span style={{ fontSize: 9, color: C.muted }}>{r.note}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* WIP ABC */}
      <div style={{ display: 'flex', gap: 14, marginBottom: 16 }}>
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, border: `1px solid ${C.border}`, borderRadius: 6, overflow: 'hidden' }}>
          <div style={{ display: 'flex', backgroundColor: C.amber, padding: '7px 12px' }}>
            <span style={{ fontSize: 10, fontWeight: 700, color: '#FFFFFF' }}>WORK-IN-PROGRESS — TOP CATEGORIES (ABC view)</span>
          </div>
          <div style={{ display: 'flex', backgroundColor: C.accent }}>
            <div style={{ display: 'flex', flex: 2, padding: '5px 10px' }}><span style={{ fontSize: 9, fontWeight: 700, color: '#FFFFFF' }}>CATEGORY</span></div>
            <div style={{ display: 'flex', flex: 1, padding: '5px 10px', borderLeft: `1px solid #444` }}><span style={{ fontSize: 9, fontWeight: 700, color: '#FFFFFF' }}>COST</span></div>
            <div style={{ display: 'flex', flex: 0.5, padding: '5px 10px', borderLeft: `1px solid #444` }}><span style={{ fontSize: 9, fontWeight: 700, color: '#FFFFFF' }}>%</span></div>
            <div style={{ display: 'flex', flex: 0.5, padding: '5px 10px', borderLeft: `1px solid #444` }}><span style={{ fontSize: 9, fontWeight: 700, color: '#FFFFFF' }}>SKUs</span></div>
            <div style={{ display: 'flex', flex: 2, padding: '5px 10px', borderLeft: `1px solid #444` }}><span style={{ fontSize: 9, fontWeight: 700, color: '#FFFFFF' }}>NOTE</span></div>
          </div>
          {wipTop.map((r, i) => (
            <div key={i} style={{ display: 'flex', backgroundColor: i % 2 === 0 ? C.bg : C.fill1, borderTop: `1px solid ${C.rule}` }}>
              <div style={{ display: 'flex', flex: 2, padding: '6px 10px', alignItems: 'center' }}>
                <span style={{ fontSize: 10, fontWeight: i < 3 ? 700 : 400, color: C.text }}>{r.cat}</span>
              </div>
              <div style={{ display: 'flex', flex: 1, padding: '6px 10px', borderLeft: `1px solid ${C.rule}`, alignItems: 'center' }}>
                <span style={{ fontSize: 10, color: C.muted }}>{r.cost}</span>
              </div>
              <div style={{ display: 'flex', flex: 0.5, padding: '6px 10px', borderLeft: `1px solid ${C.rule}`, alignItems: 'center' }}>
                <span style={{ fontSize: 10, fontWeight: 700, color: i < 3 ? C.amber : C.muted }}>{r.pct}</span>
              </div>
              <div style={{ display: 'flex', flex: 0.5, padding: '6px 10px', borderLeft: `1px solid ${C.rule}`, alignItems: 'center' }}>
                <span style={{ fontSize: 10, color: C.muted }}>{r.skus}</span>
              </div>
              <div style={{ display: 'flex', flex: 2, padding: '6px 10px', borderLeft: `1px solid ${C.rule}`, alignItems: 'center' }}>
                <span style={{ fontSize: 9, color: C.muted }}>{r.note}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Roy's contradictions */}
      <span style={{ fontSize: 12, fontWeight: 700, color: C.text, marginBottom: 8 }}>ROY'S THREE CONTRADICTIONS</span>
      <div style={{ display: 'flex', gap: 10, marginBottom: 14 }}>
        {contradictions.map((c, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '10px 12px', backgroundColor: C.fill1, border: `1px solid ${C.border}`, borderRadius: 6 }}>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 6 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 20, height: 20, backgroundColor: C.accent, borderRadius: 10, flexShrink: 0 }}>
                <span style={{ fontSize: 10, fontWeight: 700, color: '#FFFFFF' }}>{c.n}</span>
              </div>
              <span style={{ fontSize: 10, fontWeight: 700, color: C.red }}>{c.label}</span>
            </div>
            <span style={{ fontSize: 10, fontWeight: 700, color: C.green, marginBottom: 4 }}>vs. {c.vs}</span>
            <span style={{ fontSize: 10, color: C.muted }}>{c.tension}</span>
          </div>
        ))}
      </div>

      {/* Key insight */}
      <div style={{ display: 'flex', padding: '12px 16px', backgroundColor: C.fill1, border: `1px solid ${C.border}`, borderRadius: 6 }}>
        <span style={{ fontSize: 11, color: C.text }}>
          <span style={{ fontWeight: 700 }}>The $1.4M slow-moving inventory is the obvious target, but it's structural.</span> Custom orders + supplier minimum order quantities = leftover inventory by design. ABC classify both pools. Separate contract orders (forecastable, run JIT) from rush orders (unforecastable, need buffers). Negotiate shorter supplier lead times or qualify backup suppliers. Present Roy with inventory turns, not just absolute dollars.
        </span>
      </div>

      {/* Footer */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 14 }}>
        <span style={{ fontSize: 11, color: C.light }}>SCMG 487 | Case 8-3 | Covington Meters</span>
      </div>

    </div>
  );
}

// ============================================================

async function main() {
  const fonts = await loadFonts();
  console.log('Fonts loaded. Generating Ch 8 case study figures...');

  const fig8_1 = await render(<FigCase8_1 />, 1060, 960, fonts);
  save(fig8_1, 'fig-case-8-1-morrison-stockroom-analysis.png');

  const fig8_2 = await render(<FigCase8_2 />, 1060, 900, fonts);
  save(fig8_2, 'fig-case-8-2-hsd-distribution-center.png');

  const fig8_3 = await render(<FigCase8_3 />, 1060, 1080, fonts);
  save(fig8_3, 'fig-case-8-3-covington-inventory-breakdown.png');

  console.log('Done. 3 case study figures written to case-studies/');
}

main().catch(console.error);
