#!/usr/bin/env npx tsx

import React from 'react';

/**
 * SCMG 487 Chapter 7 + Chapter 9 Diagrams
 * Academic / book style: white background, minimal color, Inter font
 *
 * Figures:
 *   ch07/fig-7-0-chapter-overview.png
 *   ch07/fig-7-1-cost-of-quality.png
 *   ch07/fig-7-2-quality-tools-comparison.png
 *   ch07/fig-7-3-magnificent-seven.png
 *   ch09/fig-9-0-chapter-overview.png
 *   ch09/fig-9-1-transport-modes.png
 *   ch09/fig-9-2-fob-terms-matrix.png
 *   ch09/fig-9-3-carrier-types-providers.png
 *
 * Run from imaginationg-main root:
 *   npx tsx scripts/generate-487-ch7-ch9-diagrams.tsx
 */

import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import * as fs from 'fs';
import * as path from 'path';

const BASE = path.join(
  '/Users/marsonemac/Documents/projects/marcus-gpi-brain',
  'work-loyola/processed-documents/SCMG-487-purchasing-management/chapters'
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
  blue:     '#2563EB',
  blueBg:   '#EFF6FF',
  green:    '#16A34A',
  greenBg:  '#F0FDF4',
  red:      '#DC2626',
  redBg:    '#FEF2F2',
  amber:    '#D97706',
  amberBg:  '#FFFBEB',
  teal:     '#0D9488',
  tealBg:   '#F0FDFA',
  purple:   '#7C3AED',
  purpleBg: '#F5F3FF',
};

const SCALE = 3;

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

async function render(jsx: any, width: number, height: number, fonts: any[]): Promise<Buffer> {
  const svg = await satori(jsx, { width, height, fonts });
  const resvg = new Resvg(svg, { fitTo: { mode: 'width', value: width * SCALE } });
  return Buffer.from(resvg.render().asPng());
}

function save(buf: Buffer, subdir: string, name: string) {
  const dir = path.join(BASE, subdir);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  const p = path.join(dir, name);
  fs.writeFileSync(p, buf);
  console.log('Saved:', p);
}

/* ── shared helpers ── */

const bullet = (bold: string, sub: string) => (
  <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 2, marginBottom: 10 }}>
    <span style={{ fontSize: 12, fontWeight: 700, color: C.text }}>› {bold}</span>
    <span style={{ fontSize: 11, color: C.muted, paddingLeft: 12 }}>{sub}</span>
  </div>
);

const colHeader = (figRef: string, title: string) => (
  <div style={{ display: 'flex', flexDirection: 'column' as const, backgroundColor: C.accent, padding: '8px 14px' }}>
    <span style={{ fontSize: 10, color: '#AAAAAA', letterSpacing: 1 }}>{figRef}</span>
    <span style={{ fontSize: 13, fontWeight: 700, color: '#FFFFFF' }}>{title}</span>
  </div>
);

const tableRow = (cells: string[], isHeader: boolean = false) => (
  <div style={{
    display: 'flex',
    borderBottom: `1px solid ${C.rule}`,
    backgroundColor: isHeader ? C.fill2 : C.bg,
  }}>
    {cells.map((cell, i) => (
      <div key={i} style={{
        display: 'flex',
        flex: i === 0 ? '0 0 160px' : '1',
        padding: '6px 10px',
        borderRight: i < cells.length - 1 ? `1px solid ${C.rule}` : 'none',
      }}>
        <span style={{
          fontSize: isHeader ? 11 : 10.5,
          fontWeight: isHeader ? 700 : 400,
          color: isHeader ? C.text : C.muted,
        }}>{cell}</span>
      </div>
    ))}
  </div>
);

/* ════════════════════════════════════════════════════════════════
   CHAPTER 7 FIGURES
   ════════════════════════════════════════════════════════════════ */

/* ── FIG 7-0  Chapter Overview ── */
function Fig7_Overview() {
  const W = 1120, H = 920;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: W, height: H, backgroundColor: C.bg, padding: '32px 40px', fontFamily: 'Inter, sans-serif' }}>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 18 }}>
        <span style={{ fontSize: 11, color: C.muted, letterSpacing: 1.5, textTransform: 'uppercase' as const }}>Chapter 7 Concept Map</span>
        <span style={{ fontSize: 24, fontWeight: 700, color: C.text, marginTop: 4 }}>Quality</span>
      </div>

      <div style={{ display: 'flex', border: `1.5px solid ${C.borderDk}`, borderRadius: 6, padding: '10px 20px', marginBottom: 20, backgroundColor: C.fill1 }}>
        <span style={{ fontSize: 12, color: C.text }}>
          How do we assure quality, and how do we know what we ordered meets expectations? Five cost categories, nine dimensions, and a toolkit from lean to Six Sigma.
        </span>
      </div>

      <div style={{ display: 'flex', gap: 16, flex: 1 }}>

        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, border: `1px solid ${C.border}`, borderRadius: 6, overflow: 'hidden' }}>
          {colHeader('FIG 7-1', 'Cost of Quality')}
          <div style={{ display: 'flex', flexDirection: 'column', padding: '14px 14px', flex: 1 }}>
            {bullet('Prevention', 'QA programs, precertification, training, maintenance, machine/tool/material assessment')}
            {bullet('Appraisal', 'Inspection, testing, measuring, QC reports, service audits')}
            {bullet('Internal Failure', 'Scrap, rework, reinspection, lost labor, delays, expediting replacements')}
            {bullet('External Failure', 'Returns, warranty, complaints, recalls, brand damage. MOST EXPENSIVE.')}
            {bullet('Morale', 'Lost pride, frustration, "don\'t care" attitude. Rarely measured.')}
            {bullet('30-40%', 'Of final product cost may come from poor quality.')}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, border: `1px solid ${C.border}`, borderRadius: 6, overflow: 'hidden' }}>
          {colHeader('FIG 7-2', 'CI Tools: Lean vs Six Sigma')}
          <div style={{ display: 'flex', flexDirection: 'column', padding: '14px 14px', flex: 1 }}>
            {bullet('Lean', 'Speed + waste reduction. 8 wastes (DOWNTIME). Toyota Production System.')}
            {bullet('Six Sigma', 'Data to reduce variation. DMAIC cycle. 3.4 DPMO target.')}
            {bullet('Lean Six Sigma', 'Combined: Speed + Quality.')}
            {bullet('TQM', 'Customer satisfaction, Deming\'s 14 points, supplier-as-partner.')}
            {bullet('QFD', 'Voice of Customer translated to specs. Cross-functional.')}
            {bullet('PDCA', 'Plan-Do-Check-Act. Also called Deming or Shewhart Cycle.')}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, border: `1px solid ${C.border}`, borderRadius: 6, overflow: 'hidden' }}>
          {colHeader('FIG 7-3', 'Quality Standards and Control')}
          <div style={{ display: 'flex', flexDirection: 'column', padding: '14px 14px', flex: 1 }}>
            {bullet('ISO 9001', 'Quality management system. Certifies PROCESS not product.')}
            {bullet('ISO 14001', 'Environmental management system. Also process-based.')}
            {bullet('Baldrige Award', 'US award. Leadership, strategy, customers, operations, results.')}
            {bullet('Deming Prize', 'Japan 1950. TQM promotion and implementation.')}
            {bullet('Supplier Cert', 'Certified suppliers skip receiving inspection. Earn trust over time.')}
            {bullet('SPC', 'Control charts for real-time process monitoring, not post-inspection.')}
          </div>
        </div>

      </div>

      <div style={{ display: 'flex', gap: 16, marginTop: 16, flex: 1 }}>

        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, border: `1px solid ${C.border}`, borderRadius: 6, overflow: 'hidden' }}>
          {colHeader('GARVIN 8+1', 'Quality Dimensions')}
          <div style={{ display: 'flex', flexDirection: 'column', padding: '14px 14px', flex: 1 }}>
            {bullet('Performance', 'Primary function of product/service')}
            {bullet('Features', 'Supplementary attributes')}
            {bullet('Reliability', 'Probability of failure over time')}
            {bullet('Durability', 'Life expectancy')}
            {bullet('Conformance', 'Meets specifications')}
            {bullet('Serviceability', 'Maintainable, easy to fix')}
            {bullet('Aesthetics', 'Sensory experience')}
            {bullet('Perceived Quality', 'Customer perception')}
            {bullet('Procurability (9th)', 'Availability at reasonable price. Procurement\'s addition.')}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', flex: 2, border: `1px solid ${C.border}`, borderRadius: 6, overflow: 'hidden' }}>
          {colHeader('8 WASTES + 7 TOOLS', 'DOWNTIME Mnemonic and Magnificent Seven')}
          <div style={{ display: 'flex', padding: '14px 14px', flex: 1, gap: 24 }}>
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: C.red, marginBottom: 8 }}>8 WASTES (DOWNTIME)</span>
              {bullet('D - Defects', 'Rework, scrap')}
              {bullet('O - Overproduction', 'More than demanded')}
              {bullet('W - Waiting', 'Idle time')}
              {bullet('N - Non-utilized talent', 'Underusing people')}
              {bullet('T - Transportation', 'Unnecessary material movement')}
              {bullet('I - Inventory', 'Excess stock')}
              {bullet('M - Motion', 'Unnecessary people movement')}
              {bullet('E - Extra processing', 'More work than required')}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: C.blue, marginBottom: 8 }}>MAGNIFICENT SEVEN TOOLS</span>
              {bullet('1. Check sheet', 'Data collection for frequency')}
              {bullet('2. Fishbone diagram', 'Maps potential causes (Ishikawa)')}
              {bullet('3. Histogram', 'Data distribution: shape, spread')}
              {bullet('4. Scatter diagram', 'Relationship between two variables')}
              {bullet('5. Process flow chart', 'Maps process steps')}
              {bullet('6. Pareto analysis', 'Vital few vs trivial many (80/20)')}
              {bullet('7. Control charts', 'Process stability over time (SPC)')}
            </div>
          </div>
        </div>

      </div>

      <div style={{ display: 'flex', gap: 12, marginTop: 16 }}>
        <div style={{ display: 'flex', flex: 1, backgroundColor: C.redBg, border: `1px solid ${C.red}`, borderRadius: 4, padding: '8px 12px' }}>
          <span style={{ fontSize: 11, color: C.red }}>GPI: Error Correction = entire chapter. Prevention vs detection vs failure. Feedback loop speed determines cost category.</span>
        </div>
        <div style={{ display: 'flex', flex: 1, backgroundColor: C.blueBg, border: `1px solid ${C.blue}`, borderRadius: 4, padding: '8px 12px' }}>
          <span style={{ fontSize: 11, color: C.blue }}>GPI: Decision Latency = lean is about compressing cycle time. Six Sigma is about reducing noise in the signal.</span>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 14 }}>
        <span style={{ fontSize: 10, color: C.light }}>SCMG 487 | Chapter 7 | Quality</span>
      </div>
    </div>
  );
}

/* ── FIG 7-1  Cost of Quality Categories ── */
function Fig7_1() {
  const W = 960, H = 620;
  const categories = [
    { name: 'Prevention', color: C.green, bg: C.greenBg, pct: 'Invest here', items: ['QA programs', 'Supplier precertification', 'Employee training', 'Preventive maintenance', 'Machine/tool/material assessment'], note: 'UPSTREAM: Before production' },
    { name: 'Appraisal', color: C.blue, bg: C.blueBg, pct: 'Detection', items: ['Inspection', 'Testing', 'Measuring equipment', 'QC reports', 'Service audits'], note: 'DURING/AFTER production' },
    { name: 'Internal Failure', color: C.amber, bg: C.amberBg, pct: 'Caught inside', items: ['Scrap and rework', 'Returns to supplier', 'Reinspection', 'Lost labor/delays', 'Extra safety stock'], note: 'Before reaching customer' },
    { name: 'External Failure', color: C.red, bg: C.redBg, pct: 'MOST EXPENSIVE', items: ['Warranty costs', 'Customer returns', 'Complaint handling', 'Recalls, brand damage', 'Lost customers'], note: 'Reached the customer' },
    { name: 'Morale', color: C.purple, bg: C.purpleBg, pct: 'Hidden', items: ['Lost pride in work', 'Employee frustration', 'Don\'t-care attitude'], note: 'Rarely measured' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: W, height: H, backgroundColor: C.bg, padding: '32px 40px', fontFamily: 'Inter, sans-serif' }}>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 20 }}>
        <span style={{ fontSize: 11, color: C.muted, letterSpacing: 1.5, textTransform: 'uppercase' as const }}>Figure 7-1</span>
        <span style={{ fontSize: 20, fontWeight: 700, color: C.text, marginTop: 4 }}>Five Costs of Quality</span>
        <span style={{ fontSize: 12, color: C.muted, marginTop: 4 }}>30-40% of final product cost may be attributable to poor quality</span>
      </div>

      <div style={{ display: 'flex', gap: 10, flex: 1 }}>
        {categories.map((cat) => (
          <div key={cat.name} style={{ display: 'flex', flexDirection: 'column', flex: 1, border: `1.5px solid ${cat.color}`, borderRadius: 6, overflow: 'hidden' }}>
            <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: cat.color, padding: '8px 10px' }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: '#FFFFFF' }}>{cat.name}</span>
              <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.8)', marginTop: 2 }}>{cat.pct}</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', padding: '10px 10px', flex: 1, backgroundColor: cat.bg }}>
              {cat.items.map((item) => (
                <span key={item} style={{ fontSize: 10, color: C.text, marginBottom: 5 }}>• {item}</span>
              ))}
            </div>
            <div style={{ display: 'flex', padding: '6px 10px', borderTop: `1px solid ${cat.color}` }}>
              <span style={{ fontSize: 9, fontWeight: 700, color: cat.color }}>{cat.note}</span>
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', backgroundColor: C.fill1, border: `1px solid ${C.border}`, borderRadius: 4, padding: '10px 16px', marginTop: 16 }}>
        <span style={{ fontSize: 11, color: C.text }}>
          <span style={{ fontWeight: 700 }}>Key insight:</span> Prevention spending drives down the other four. Testing/inspection = appraisal (detection). Machine/tool/material assessment = prevention (process readiness).
        </span>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 14 }}>
        <span style={{ fontSize: 10, color: C.light }}>SCMG 487 | Chapter 7 | Quality</span>
      </div>
    </div>
  );
}

/* ── FIG 7-2  Lean vs Six Sigma Comparison ── */
function Fig7_2() {
  const W = 960, H = 560;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: W, height: H, backgroundColor: C.bg, padding: '32px 40px', fontFamily: 'Inter, sans-serif' }}>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 20 }}>
        <span style={{ fontSize: 11, color: C.muted, letterSpacing: 1.5, textTransform: 'uppercase' as const }}>Figure 7-2</span>
        <span style={{ fontSize: 20, fontWeight: 700, color: C.text, marginTop: 4 }}>Continuous Improvement: Lean vs Six Sigma</span>
      </div>

      <div style={{ display: 'flex', gap: 20, flex: 1 }}>
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, border: `2px solid ${C.green}`, borderRadius: 8, overflow: 'hidden' }}>
          <div style={{ display: 'flex', backgroundColor: C.green, padding: '12px 16px', justifyContent: 'center' }}>
            <span style={{ fontSize: 16, fontWeight: 700, color: '#FFFFFF' }}>LEAN</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', padding: '16px 16px', flex: 1 }}>
            {bullet('Focus', 'Speed + Waste reduction')}
            {bullet('Origin', 'Toyota Production System (Japan)')}
            {bullet('Method', '8 wastes (DOWNTIME), Kaizen, Value stream mapping')}
            {bullet('Philosophy', 'Maximize value, eliminate muda')}
            {bullet('Cycle', 'PDCA (Plan-Do-Check-Act)')}
            {bullet('Belt system', 'No')}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, border: `2px solid ${C.purple}`, borderRadius: 8, overflow: 'hidden' }}>
          <div style={{ display: 'flex', backgroundColor: C.purple, padding: '12px 16px', justifyContent: 'center' }}>
            <span style={{ fontSize: 16, fontWeight: 700, color: '#FFFFFF' }}>SIX SIGMA</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', padding: '16px 16px', flex: 1 }}>
            {bullet('Focus', 'Variability + Defect reduction')}
            {bullet('Origin', 'Motorola 1980s')}
            {bullet('Method', 'DMAIC (Define, Measure, Analyze, Improve, Control)')}
            {bullet('Target', '3.4 DPMO (defects per million opportunities)')}
            {bullet('Tools', 'SPC, control charts, failure analysis, flowcharting')}
            {bullet('Belt system', 'Green Belt, Black Belt, Master Black Belt')}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, border: `2px solid ${C.amber}`, borderRadius: 8, overflow: 'hidden' }}>
          <div style={{ display: 'flex', backgroundColor: C.amber, padding: '12px 16px', justifyContent: 'center' }}>
            <span style={{ fontSize: 16, fontWeight: 700, color: '#FFFFFF' }}>LEAN SIX SIGMA</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', padding: '16px 16px', flex: 1 }}>
            {bullet('Focus', 'Speed + Quality (combined)')}
            {bullet('Takes from Lean', 'Waste elimination, flow optimization, pull systems')}
            {bullet('Takes from 6σ', 'Data-driven analysis, statistical rigor, DMAIC')}
            {bullet('Result', 'Faster processes with fewer defects')}
            {bullet('Also uses', 'TQM, QFD, Kaizen events, Treasure hunts')}
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', backgroundColor: C.amberBg, border: `1px solid ${C.amber}`, borderRadius: 4, padding: '10px 16px', marginTop: 16 }}>
        <span style={{ fontSize: 11, color: C.amber }}>
          <span style={{ fontWeight: 700 }}>Exam trap:</span> "Data-driven methodology to reduce variation" = Six Sigma, NOT Lean. Lean is a philosophy about value and waste.
        </span>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 14 }}>
        <span style={{ fontSize: 10, color: C.light }}>SCMG 487 | Chapter 7 | Quality</span>
      </div>
    </div>
  );
}

/* ── FIG 7-3  Magnificent Seven + SERVQUAL ── */
function Fig7_3() {
  const W = 960, H = 580;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: W, height: H, backgroundColor: C.bg, padding: '32px 40px', fontFamily: 'Inter, sans-serif' }}>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 20 }}>
        <span style={{ fontSize: 11, color: C.muted, letterSpacing: 1.5, textTransform: 'uppercase' as const }}>Figure 7-3</span>
        <span style={{ fontSize: 20, fontWeight: 700, color: C.text, marginTop: 4 }}>Quality Analysis Tools and Service Quality</span>
      </div>

      <div style={{ display: 'flex', gap: 20, flex: 1 }}>
        <div style={{ display: 'flex', flexDirection: 'column', flex: 3, border: `1px solid ${C.border}`, borderRadius: 6, overflow: 'hidden' }}>
          {colHeader('MAGNIFICENT SEVEN', 'Data Collection and Analysis Tools (used by PDCA, Kaizen, DMAIC)')}
          <div style={{ display: 'flex', flexDirection: 'column', padding: '4px 0', flex: 1 }}>
            {[
              ['1. Check sheet', 'Data collection form', 'Tallies frequency of quality problems'],
              ['2. Cause-and-effect', 'Fishbone / Ishikawa', 'Maps potential causes for a problem'],
              ['3. Histogram', 'Bar chart', 'Shows data distribution: shape, center, spread'],
              ['4. Scatter diagram', 'X-Y plot', 'Shows relationship between two variables'],
              ['5. Process flow chart', 'Step diagram', 'Maps sequence of events in a process'],
              ['6. Pareto analysis', '80/20 bar chart', 'Identifies the "vital few" causes'],
              ['7. Control charts', 'Time-series plot', 'Monitors process stability (SPC)'],
            ].map((row, i) => (
              <div key={i} style={{ display: 'flex', borderBottom: `1px solid ${C.rule}`, backgroundColor: i % 2 === 0 ? C.bg : C.fill1 }}>
                <div style={{ display: 'flex', flex: '0 0 170px', padding: '6px 12px' }}>
                  <span style={{ fontSize: 11, fontWeight: 700, color: C.text }}>{row[0]}</span>
                </div>
                <div style={{ display: 'flex', flex: '0 0 130px', padding: '6px 8px' }}>
                  <span style={{ fontSize: 10, color: C.muted }}>{row[1]}</span>
                </div>
                <div style={{ display: 'flex', flex: 1, padding: '6px 8px' }}>
                  <span style={{ fontSize: 10, color: C.muted }}>{row[2]}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', flex: 2, border: `1px solid ${C.border}`, borderRadius: 6, overflow: 'hidden' }}>
          {colHeader('SERVQUAL', 'Service Quality Evaluation')}
          <div style={{ display: 'flex', flexDirection: 'column', padding: '14px 14px', flex: 1 }}>
            {bullet('Reliability', 'Perform service dependably and accurately')}
            {bullet('Responsiveness', 'Willingness to help, prompt service')}
            {bullet('Assurance', 'Knowledge and courtesy, inspire trust')}
            {bullet('Empathy', 'Caring, individualized attention')}
            {bullet('Tangibles', 'Appearance of facilities, equipment, personnel')}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', padding: '10px 14px', borderTop: `1px solid ${C.border}`, backgroundColor: C.fill1 }}>
            <span style={{ fontSize: 10, fontWeight: 700, color: C.text, marginBottom: 4 }}>Assessment Factors:</span>
            <span style={{ fontSize: 9.5, color: C.muted }}>Value (ABC), repetitiveness, tangibility, direction (people vs assets), capability, demand nature, standardization</span>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 14 }}>
        <span style={{ fontSize: 10, color: C.light }}>SCMG 487 | Chapter 7 | Quality</span>
      </div>
    </div>
  );
}


/* ════════════════════════════════════════════════════════════════
   CHAPTER 9 FIGURES
   ════════════════════════════════════════════════════════════════ */

/* ── FIG 9-0  Chapter Overview ── */
function Fig9_Overview() {
  const W = 1120, H = 860;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: W, height: H, backgroundColor: C.bg, padding: '32px 40px', fontFamily: 'Inter, sans-serif' }}>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 18 }}>
        <span style={{ fontSize: 11, color: C.muted, letterSpacing: 1.5, textTransform: 'uppercase' as const }}>Chapter 9 Concept Map</span>
        <span style={{ fontSize: 24, fontWeight: 700, color: C.text, marginTop: 4 }}>Delivery</span>
      </div>

      <div style={{ display: 'flex', border: `1.5px solid ${C.borderDk}`, borderRadius: 6, padding: '10px 20px', marginBottom: 20, backgroundColor: C.fill1 }}>
        <span style={{ fontSize: 12, color: C.text }}>
          How to get goods from supplier to buyer: on time, undamaged, lowest total cost. Every choice is a cost-risk-control trade-off.
        </span>
      </div>

      <div style={{ display: 'flex', gap: 16, flex: 1 }}>

        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, border: `1px solid ${C.border}`, borderRadius: 6, overflow: 'hidden' }}>
          {colHeader('FIG 9-1', 'Transportation Modes')}
          <div style={{ display: 'flex', flexDirection: 'column', padding: '14px 14px', flex: 1 }}>
            {bullet('Truck (~70%)', 'Most flexible. Point-to-point, any distance. Best for JIT.')}
            {bullet('Rail', 'Bulk commodities, long haul. Lower cost, slower, higher damage.')}
            {bullet('Air', 'Speed. High-value, perishable, emergency. Costly, needs truck last mile.')}
            {bullet('Marine', 'Bulk, large tonnage, long distance. Cheapest but slowest.')}
            {bullet('Pipeline', 'Liquid/gas only. High fixed cost, low variable cost.')}
            {bullet('Intermodal', 'COFC/TOFC. Rail long-haul + truck door-to-door flexibility.')}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, border: `1px solid ${C.border}`, borderRadius: 6, overflow: 'hidden' }}>
          {colHeader('FIG 9-2 · 9-3', 'Carriers, Providers, and Terms')}
          <div style={{ display: 'flex', flexDirection: 'column', padding: '14px 14px', flex: 1 }}>
            {bullet('Common carrier', 'All shippers, published rates, nondiscriminatory')}
            {bullet('Contract carrier', 'Limited shippers, specific contracts, lower rates')}
            {bullet('Exempt carrier', 'Exempt from rate regulation (not safety)')}
            {bullet('Private carrier', 'Company-owned fleet. Make-or-buy decision.')}
            {bullet('Freight forwarder', 'Buys carrier space, consolidates. Lower rates.')}
            {bullet('Broker', 'Arranges transport for a fee. FMCSA registered.')}
            {bullet('3PL', 'Integrated logistics outsourcing. Scope + specialization.')}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, border: `1px solid ${C.border}`, borderRadius: 6, overflow: 'hidden' }}>
          {colHeader('FOB · DOCS', 'Terms, Documentation, Rates')}
          <div style={{ display: 'flex', flexDirection: 'column', padding: '14px 14px', flex: 1 }}>
            {bullet('FOB Origin', 'Title at seller\'s dock. Buyer owns in transit, bears risk.')}
            {bullet('FOB Destination', 'Title at buyer\'s dock. Seller owns in transit, bears risk.')}
            {bullet('Bill of Lading', 'Contract + evidence of ownership. 4 types.')}
            {bullet('Freight Bill', 'Carrier\'s invoice for services.')}
            {bullet('Freight Claim', 'Document to recoup loss or damage.')}
            {bullet('Demurrage', 'Charge for tied-up railcars. Detention = trucks.')}
            {bullet('LTL vs TL', 'Shipment SIZE distinction, not distance.')}
          </div>
        </div>

      </div>

      <div style={{ display: 'flex', gap: 12, marginTop: 16 }}>
        <div style={{ display: 'flex', flex: 1, backgroundColor: C.blueBg, border: `1px solid ${C.blue}`, borderRadius: 4, padding: '8px 12px' }}>
          <span style={{ fontSize: 11, color: C.blue }}>GPI: Capital Intensity = every FOB choice and mode selection either ties up or releases capital. Private fleets lock it.</span>
        </div>
        <div style={{ display: 'flex', flex: 1, backgroundColor: C.greenBg, border: `1px solid ${C.green}`, borderRadius: 4, padding: '8px 12px' }}>
          <span style={{ fontSize: 11, color: C.green }}>GPI: Decision Latency = JIT requires truck proximity. Air buys speed. Mode = decision speed materialized.</span>
        </div>
        <div style={{ display: 'flex', flex: 1, backgroundColor: C.redBg, border: `1px solid ${C.red}`, borderRadius: 4, padding: '8px 12px' }}>
          <span style={{ fontSize: 11, color: C.red }}>GPI: Error Correction = claims, tracing, freight audit are all error correction systems for transit failures.</span>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 14 }}>
        <span style={{ fontSize: 10, color: C.light }}>SCMG 487 | Chapter 9 | Delivery</span>
      </div>
    </div>
  );
}

/* ── FIG 9-1  Transportation Modes Comparison ── */
function Fig9_1() {
  const W = 1060, H = 520;
  const modes = [
    { mode: 'Truck', pct: '~70%', speed: 'Fast', cost: 'Moderate', flex: 'High', best: 'JIT, door-to-door, any size', limit: 'Driver shortage', color: C.blue },
    { mode: 'Rail', pct: 'Declining', speed: 'Slow', cost: 'Low variable', flex: 'Low', best: 'Bulk, long haul, heavy', limit: 'Inflexible, higher damage', color: C.green },
    { mode: 'Air', pct: 'Growing', speed: 'Fastest', cost: 'High', flex: 'Low', best: 'High-value, perishable, urgent', limit: 'Needs truck for last mile', color: C.purple },
    { mode: 'Marine', pct: 'Int\'l dominant', speed: 'Slowest', cost: 'Lowest', flex: 'Very low', best: 'Bulk, large tonnage, distance', limit: 'Slow, port dependent', color: C.teal },
    { mode: 'Pipeline', pct: 'Specialized', speed: 'Continuous', cost: 'Low var/High fixed', flex: 'None', best: 'Oil, gas, chemicals', limit: 'Fixed routes, env. regulation', color: C.amber },
    { mode: 'Intermodal', pct: 'Growing', speed: 'Moderate', cost: 'Moderate', flex: 'Moderate', best: 'COFC/TOFC long-haul + local', limit: 'Terminal transfers', color: C.text },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: W, height: H, backgroundColor: C.bg, padding: '32px 40px', fontFamily: 'Inter, sans-serif' }}>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 16 }}>
        <span style={{ fontSize: 11, color: C.muted, letterSpacing: 1.5, textTransform: 'uppercase' as const }}>Figure 9-1</span>
        <span style={{ fontSize: 20, fontWeight: 700, color: C.text, marginTop: 4 }}>5+1 Transportation Modes Comparison</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', border: `1px solid ${C.border}`, borderRadius: 6, overflow: 'hidden', flex: 1 }}>
        <div style={{ display: 'flex', backgroundColor: C.accent }}>
          {['Mode', '% Spend', 'Speed', 'Cost', 'Flexibility', 'Best For', 'Limitation'].map((h, i) => (
            <div key={i} style={{ display: 'flex', flex: i >= 5 ? 2 : (i === 0 ? '0 0 100px' : 1), padding: '8px 10px' }}>
              <span style={{ fontSize: 10, fontWeight: 700, color: '#FFFFFF' }}>{h}</span>
            </div>
          ))}
        </div>
        {modes.map((m, i) => (
          <div key={i} style={{ display: 'flex', borderBottom: `1px solid ${C.rule}`, backgroundColor: i % 2 === 0 ? C.bg : C.fill1 }}>
            <div style={{ display: 'flex', flex: '0 0 100px', padding: '7px 10px', alignItems: 'center' }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: m.color }}>{m.mode}</span>
            </div>
            {[m.pct, m.speed, m.cost, m.flex, m.best, m.limit].map((val, j) => (
              <div key={j} style={{ display: 'flex', flex: j >= 4 ? 2 : 1, padding: '7px 10px', alignItems: 'center' }}>
                <span style={{ fontSize: 10, color: C.muted }}>{val}</span>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 14 }}>
        <span style={{ fontSize: 10, color: C.light }}>SCMG 487 | Chapter 9 | Delivery</span>
      </div>
    </div>
  );
}

/* ── FIG 9-2  FOB Terms Matrix ── */
function Fig9_2() {
  const W = 1060, H = 480;
  const rows = [
    { term: 'FOB Origin, Freight Collect', pays: 'Buyer', bears: 'Buyer', owns: 'Buyer', claims: 'Buyer', color: C.blue },
    { term: 'FOB Origin, Freight Prepaid', pays: 'Seller', bears: 'Seller', owns: 'Buyer', claims: 'Buyer', color: C.blue },
    { term: 'FOB Origin, Prepaid & Charged Back', pays: 'Seller', bears: 'Buyer', owns: 'Buyer', claims: 'Buyer', color: C.blue },
    { term: 'FOB Dest, Freight Collect', pays: 'Buyer', bears: 'Buyer', owns: 'Seller', claims: 'Seller', color: C.red },
    { term: 'FOB Dest, Freight Prepaid', pays: 'Seller', bears: 'Seller', owns: 'Seller', claims: 'Seller', color: C.red },
    { term: 'FOB Dest, Prepaid & Charged Back', pays: 'Seller', bears: 'Buyer', owns: 'Seller', claims: 'Seller', color: C.red },
    { term: 'FOB Dest, Collect & Allowed', pays: 'Buyer', bears: 'Seller', owns: 'Seller', claims: 'Seller', color: C.red },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: W, height: H, backgroundColor: C.bg, padding: '32px 40px', fontFamily: 'Inter, sans-serif' }}>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 16 }}>
        <span style={{ fontSize: 11, color: C.muted, letterSpacing: 1.5, textTransform: 'uppercase' as const }}>Figure 9-2</span>
        <span style={{ fontSize: 20, fontWeight: 700, color: C.text, marginTop: 4 }}>FOB Terms Matrix (Table 9-1)</span>
        <span style={{ fontSize: 12, color: C.muted, marginTop: 4 }}>Origin = title at seller's dock (blue). Destination = title at buyer's dock (red).</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', border: `1px solid ${C.border}`, borderRadius: 6, overflow: 'hidden', flex: 1 }}>
        <div style={{ display: 'flex', backgroundColor: C.accent }}>
          {['FOB Term', 'Pays Freight', 'Bears Charges', 'Owns in Transit', 'Files Claims'].map((h, i) => (
            <div key={i} style={{ display: 'flex', flex: i === 0 ? '0 0 280px' : 1, padding: '8px 12px' }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: '#FFFFFF' }}>{h}</span>
            </div>
          ))}
        </div>
        {rows.map((r, i) => (
          <div key={i} style={{ display: 'flex', borderBottom: `1px solid ${C.rule}`, backgroundColor: i % 2 === 0 ? C.bg : C.fill1 }}>
            <div style={{ display: 'flex', flex: '0 0 280px', padding: '7px 12px', alignItems: 'center' }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: r.color }}>{r.term}</span>
            </div>
            {[r.pays, r.bears, r.owns, r.claims].map((val, j) => (
              <div key={j} style={{ display: 'flex', flex: 1, padding: '7px 12px', alignItems: 'center' }}>
                <span style={{ fontSize: 11, color: val === 'Buyer' ? C.blue : C.red, fontWeight: 600 }}>{val}</span>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', backgroundColor: C.amberBg, border: `1px solid ${C.amber}`, borderRadius: 4, padding: '10px 16px', marginTop: 12 }}>
        <span style={{ fontSize: 11, color: C.amber }}>
          <span style={{ fontWeight: 700 }}>Key rule:</span> "Origin" = title passes at seller's dock. "Destination" = title passes at buyer's dock. Whoever has title owns the risk and files the claims.
        </span>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 10 }}>
        <span style={{ fontSize: 10, color: C.light }}>SCMG 487 | Chapter 9 | Delivery</span>
      </div>
    </div>
  );
}

/* ── FIG 9-3  Carrier Types and Service Providers ── */
function Fig9_3() {
  const W = 1060, H = 520;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: W, height: H, backgroundColor: C.bg, padding: '32px 40px', fontFamily: 'Inter, sans-serif' }}>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 16 }}>
        <span style={{ fontSize: 11, color: C.muted, letterSpacing: 1.5, textTransform: 'uppercase' as const }}>Figure 9-3</span>
        <span style={{ fontSize: 20, fontWeight: 700, color: C.text, marginTop: 4 }}>Carrier Types, Service Providers, and Documentation</span>
      </div>

      <div style={{ display: 'flex', gap: 16, flex: 1 }}>

        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, border: `1px solid ${C.border}`, borderRadius: 6, overflow: 'hidden' }}>
          {colHeader('CARRIERS', 'Four Types')}
          <div style={{ display: 'flex', flexDirection: 'column', padding: '14px 14px', flex: 1 }}>
            {bullet('Common', 'All shippers, published rates. Flexible post-deregulation.')}
            {bullet('Contract', 'Limited shippers, specific contracts. Lower rates, predictable.')}
            {bullet('Exempt', 'Exempt from RATE regulation. Safety rules still apply.')}
            {bullet('Private', 'Own fleet. Flexibility but must utilize fully. Make-or-buy decision.')}
            {bullet('Integrated', 'Owns trucks + hubs + aircraft. UPS, FedEx.')}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, border: `1px solid ${C.border}`, borderRadius: 6, overflow: 'hidden' }}>
          {colHeader('SERVICE PROVIDERS', 'Three Types + 3PL')}
          <div style={{ display: 'flex', flexDirection: 'column', padding: '14px 14px', flex: 1 }}>
            {bullet('Freight Forwarder', 'Buys carrier space, consolidates shipments. Lower rates than spot.')}
            {bullet('Broker', 'Arranges transport for shipper. Registered with FMCSA.')}
            {bullet('Customs Broker', 'Accurate import documentation. Landed cost estimates.')}
            {bullet('3PL', 'Integrated outsourced logistics. Differentiated by geographic scope + industry specialization.')}
            <div style={{ display: 'flex', backgroundColor: C.fill1, borderRadius: 4, padding: '8px 10px', marginTop: 8 }}>
              <span style={{ fontSize: 10, color: C.text }}>3PL benefits: economies of scale/scope, specialized expertise, risk outsourcing, IT-enabled</span>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, border: `1px solid ${C.border}`, borderRadius: 6, overflow: 'hidden' }}>
          {colHeader('DOCUMENTS + RATES', 'Bills, Claims, Discounts')}
          <div style={{ display: 'flex', flexDirection: 'column', padding: '14px 14px', flex: 1 }}>
            {bullet('Straight B/L', 'Prepaid goods. Non-negotiable.')}
            {bullet('Short-form B/L', 'References contract, omits details.')}
            {bullet('Order B/L', 'Credit. Must surrender at destination for title. Negotiable.')}
            {bullet('Clean B/L', 'Carrier sign-off: goods loaded in good condition.')}
            {bullet('Freight Bill', 'Carrier\'s invoice. Not the same as freight claim.')}
            {bullet('Freight Claim', 'Recoup loss/damage. Unconcealed vs concealed.')}
            {bullet('Demurrage', 'Railcar penalty. Detention = trucks.')}
          </div>
        </div>

      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 14 }}>
        <span style={{ fontSize: 10, color: C.light }}>SCMG 487 | Chapter 9 | Delivery</span>
      </div>
    </div>
  );
}


/* ── main ── */
async function main() {
  const fonts = await loadFonts();
  console.log('Fonts loaded. Generating Chapter 7 + 9 figures...');

  // Chapter 7
  const fig7_0 = await render(<Fig7_Overview />, 1120, 920, fonts);
  save(fig7_0, 'ch07', 'fig-7-0-chapter-overview.png');

  const fig7_1 = await render(<Fig7_1 />, 960, 620, fonts);
  save(fig7_1, 'ch07', 'fig-7-1-cost-of-quality.png');

  const fig7_2 = await render(<Fig7_2 />, 960, 560, fonts);
  save(fig7_2, 'ch07', 'fig-7-2-lean-vs-sixsigma.png');

  const fig7_3 = await render(<Fig7_3 />, 960, 580, fonts);
  save(fig7_3, 'ch07', 'fig-7-3-quality-tools-servqual.png');

  // Chapter 9
  const fig9_0 = await render(<Fig9_Overview />, 1120, 860, fonts);
  save(fig9_0, 'ch09', 'fig-9-0-chapter-overview.png');

  const fig9_1 = await render(<Fig9_1 />, 1060, 520, fonts);
  save(fig9_1, 'ch09', 'fig-9-1-transport-modes.png');

  const fig9_2 = await render(<Fig9_2 />, 1060, 480, fonts);
  save(fig9_2, 'ch09', 'fig-9-2-fob-terms-matrix.png');

  const fig9_3 = await render(<Fig9_3 />, 1060, 520, fonts);
  save(fig9_3, 'ch09', 'fig-9-3-carrier-types-providers.png');

  console.log('Done. 8 figures written (4 ch07, 4 ch09).');
}

main().catch(console.error);
