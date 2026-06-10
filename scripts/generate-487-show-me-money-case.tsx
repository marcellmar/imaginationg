#!/usr/bin/env npx tsx

import React from 'react';

/**
 * SCMG 487 Case Study Diagrams — Show Me the Money: Managing Cost Savings
 *
 * fig-case-10-1-show-me-money-overview.png     — Direct vs Indirect spend structure
 * fig-case-10-2-show-me-money-measurement.png  — Measurement gap (direct vs indirect tracking)
 * fig-case-10-3-show-me-money-math.png         — Question 6 scenario math (avoidance vs reduction)
 *
 * Run from imaginationg-main root:
 *   npx tsx scripts/generate-487-show-me-money-case.tsx
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
  green:    '#16A34A',
  greenBg:  '#F0FDF4',
  red:      '#DC2626',
  redBg:    '#FEF2F2',
  amber:    '#D97706',
  amberBg:  '#FFFBEB',
  blue:     '#2563EB',
  blueBg:   '#EFF6FF',
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

function save(buf: Buffer, name: string) {
  const p = path.join(OUT, name);
  fs.writeFileSync(p, buf);
  console.log('Saved:', p);
}

// ============================================================
// FIGURE 1: Direct vs Indirect Spend Structure at Acme Motors
// ============================================================

function Fig1_Overview() {
  const W = 1100, H = 780;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: W, height: H, background: C.bg, padding: '36px 40px 28px', fontFamily: 'Inter' }}>
      {/* Title */}
      <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 20 }}>
        <div style={{ fontSize: 22, fontWeight: 700, color: C.text }}>Show Me the Money — Acme Motors Spend Structure</div>
        <div style={{ fontSize: 13, color: C.muted, marginTop: 4 }}>Ellram & Tate (2020) | Chapters 10–11: Cost Savings vs. Cost Avoidance</div>
      </div>

      {/* Two columns */}
      <div style={{ display: 'flex', flex: 1, gap: 20 }}>
        {/* LEFT: Direct */}
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, border: `2px solid ${C.green}`, borderRadius: 8, overflow: 'hidden' }}>
          <div style={{ display: 'flex', padding: '10px 16px', background: C.greenBg, borderBottom: `1px solid ${C.green}` }}>
            <div style={{ fontSize: 16, fontWeight: 700, color: C.green }}>Direct Spend</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', padding: '14px 16px', gap: 10 }}>
            <div style={{ display: 'flex', fontSize: 32, fontWeight: 700, color: C.text }}>$25B / year</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {[
                ['Suppliers', '~600'],
                ['Buyers', '200 across 8 commodity groups'],
                ['Tracking', 'Cost accountant reports to accounting'],
                ['Savings type', 'Cost downs (2–3%/yr target)'],
                ['Visibility', 'Affects per-unit profitability directly'],
                ['Avoidance', 'Informal, not officially tracked'],
              ].map(([label, val], i) => (
                <div key={i} style={{ display: 'flex', fontSize: 12, lineHeight: '1.4' }}>
                  <div style={{ display: 'flex', fontWeight: 700, color: C.muted, width: 100, flexShrink: 0 }}>{label}</div>
                  <div style={{ display: 'flex', color: C.text }}>{val}</div>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', marginTop: 6, padding: '8px 12px', background: C.greenBg, borderRadius: 6, fontSize: 11, color: C.green, fontWeight: 700 }}>
              80% of product costs — management watches every dollar
            </div>
          </div>
        </div>

        {/* RIGHT: Indirect */}
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, border: `2px solid ${C.amber}`, borderRadius: 8, overflow: 'hidden' }}>
          <div style={{ display: 'flex', padding: '10px 16px', background: C.amberBg, borderBottom: `1px solid ${C.amber}` }}>
            <div style={{ fontSize: 16, fontWeight: 700, color: C.amber }}>Indirect Spend</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', padding: '14px 16px', gap: 10 }}>
            <div style={{ display: 'flex', fontSize: 32, fontWeight: 700, color: C.text }}>$3B / year</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {[
                ['Managers', '2 (for all categories)'],
                ['Categories', 'MRO, Services, Logistics, IT, Industrial Equipment'],
                ['Tracking', 'Buyers self-report into SAP'],
                ['Savings type', 'Reduction + avoidance both tracked'],
                ['Visibility', 'Monthly report — nobody outside purchasing reads it'],
                ['Avoidance', 'Tracked but not credible to management'],
              ].map(([label, val], i) => (
                <div key={i} style={{ display: 'flex', fontSize: 12, lineHeight: '1.4' }}>
                  <div style={{ display: 'flex', fontWeight: 700, color: C.muted, width: 100, flexShrink: 0 }}>{label}</div>
                  <div style={{ display: 'flex', color: C.text }}>{val}</div>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', marginTop: 6, padding: '8px 12px', background: C.amberBg, borderRadius: 6, fontSize: 11, color: C.amber, fontWeight: 700 }}>
              10–12% of total spend — treated as non-critical
            </div>
          </div>
        </div>
      </div>

      {/* Bottom: Indirect categories */}
      <div style={{ display: 'flex', flexDirection: 'column', marginTop: 16, padding: '12px 16px', background: C.fill1, borderRadius: 8, border: `1px solid ${C.border}` }}>
        <div style={{ display: 'flex', fontSize: 12, fontWeight: 700, color: C.text, marginBottom: 8 }}>Indirect Cost Categories (Table 1)</div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {['MRO', 'Services', 'Packaging', 'Parcels', 'Returnable Containers', 'Hardware', 'Software', 'Labor/Cloud', 'DSSA', 'Capex', 'Robotics/Labor'].map((cat, i) => (
            <div key={i} style={{ display: 'flex', padding: '4px 10px', background: C.bg, borderRadius: 4, border: `1px solid ${C.border}`, fontSize: 11, color: C.muted }}>
              {cat}
            </div>
          ))}
        </div>
      </div>

      {/* EXAM FLAG */}
      <div style={{ display: 'flex', marginTop: 12, padding: '8px 14px', background: C.redBg, borderRadius: 6, border: `1px solid ${C.red}` }}>
        <div style={{ display: 'flex', fontSize: 11, color: C.red, fontWeight: 700, marginRight: 8 }}>EXAM</div>
        <div style={{ display: 'flex', fontSize: 11, color: C.text }}>
          200 buyers for $25B direct vs. 2 managers for $3B indirect. The resource asymmetry explains the measurement gap.
        </div>
      </div>
    </div>
  );
}

// ============================================================
// FIGURE 2: Measurement Gap — How Savings Are Tracked
// ============================================================

function Fig2_MeasurementGap() {
  const W = 1100, H = 740;

  const rows = [
    { dim: 'Who tracks', direct: 'Cost accountant (accounting dept)', indirect: 'Buyers themselves', flag: true },
    { dim: 'Where it reports', direct: 'Into product cost, visible to top mgmt', indirect: 'Report nobody outside purchasing reads', flag: true },
    { dim: 'Cost reduction', direct: 'Official, measured, rewarded (2–3%/yr)', indirect: 'Tracked but disconnected from budgets', flag: false },
    { dim: 'Cost avoidance', direct: 'Informal, not officially reported', indirect: 'Tracked but not credible', flag: true },
    { dim: 'Budget impact', direct: 'Direct to unit cost and margin', indirect: 'Budget holder keeps the money', flag: true },
    { dim: 'Accountability', direct: 'High (affects vehicle profitability)', indirect: 'Low (no trace to budget reductions)', flag: false },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: W, height: H, background: C.bg, padding: '36px 40px 28px', fontFamily: 'Inter' }}>
      {/* Title */}
      <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 20 }}>
        <div style={{ fontSize: 22, fontWeight: 700, color: C.text }}>The Measurement Gap — Direct vs. Indirect Savings Tracking</div>
        <div style={{ fontSize: 13, color: C.muted, marginTop: 4 }}>Why Cecelia's cost avoidance work doesn't "count"</div>
      </div>

      {/* Table */}
      <div style={{ display: 'flex', flexDirection: 'column', border: `1px solid ${C.border}`, borderRadius: 8, overflow: 'hidden' }}>
        {/* Header */}
        <div style={{ display: 'flex', background: C.accent, padding: '10px 0' }}>
          <div style={{ display: 'flex', width: 160, padding: '0 16px', fontSize: 12, fontWeight: 700, color: '#FFFFFF' }}>Dimension</div>
          <div style={{ display: 'flex', flex: 1, padding: '0 16px', fontSize: 12, fontWeight: 700, color: '#FFFFFF' }}>Direct Spend ($25B)</div>
          <div style={{ display: 'flex', flex: 1, padding: '0 16px', fontSize: 12, fontWeight: 700, color: '#FFFFFF' }}>Indirect Spend ($3B)</div>
        </div>
        {rows.map((r, i) => (
          <div key={i} style={{ display: 'flex', background: i % 2 === 0 ? C.fill1 : C.bg, padding: '12px 0', borderTop: `1px solid ${C.rule}` }}>
            <div style={{ display: 'flex', width: 160, padding: '0 16px', fontSize: 12, fontWeight: 700, color: C.text }}>{r.dim}</div>
            <div style={{ display: 'flex', flex: 1, padding: '0 16px', fontSize: 12, color: C.green, fontWeight: r.flag ? 400 : 400 }}>
              {r.direct}
            </div>
            <div style={{ display: 'flex', flex: 1, padding: '0 16px', fontSize: 12, color: C.red }}>
              {r.indirect}
            </div>
          </div>
        ))}
      </div>

      {/* Cecelia quote */}
      <div style={{ display: 'flex', marginTop: 20, padding: '14px 18px', background: C.blueBg, borderRadius: 8, border: `1px solid ${C.blue}`, borderLeft: `4px solid ${C.blue}` }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <div style={{ display: 'flex', fontSize: 13, color: C.text, fontStyle: 'italic' }}>
            "Our combined reduction and avoidance is more than twice the percentage rate of direct material cost reductions. It just doesn't hit the bottom line."
          </div>
          <div style={{ display: 'flex', fontSize: 11, color: C.blue, fontWeight: 700 }}>— Cecelia Hahn, Manager of Indirect Spending</div>
        </div>
      </div>

      {/* Chad's benchmark */}
      <div style={{ display: 'flex', marginTop: 14, padding: '14px 18px', background: C.tealBg, borderRadius: 8, border: `1px solid ${C.teal}` }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <div style={{ display: 'flex', fontSize: 13, fontWeight: 700, color: C.teal }}>Chad's Benchmark (Financial Institution)</div>
          <div style={{ display: 'flex', gap: 20 }}>
            {[
              ['Analytics team', '6 people, each supports ~40 negotiators'],
              ['Methodology', 'Consistent counting, conservative estimates, internal audits'],
              ['Reports to', 'Accounting (not purchasing)'],
              ['Credibility', '"The story only gets better" if challenged'],
            ].map(([k, v], i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div style={{ display: 'flex', fontSize: 10, fontWeight: 700, color: C.teal }}>{k}</div>
                <div style={{ display: 'flex', fontSize: 11, color: C.text }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* EXAM FLAG */}
      <div style={{ display: 'flex', marginTop: 12, padding: '8px 14px', background: C.redBg, borderRadius: 6, border: `1px solid ${C.red}` }}>
        <div style={{ display: 'flex', fontSize: 11, color: C.red, fontWeight: 700, marginRight: 8 }}>EXAM</div>
        <div style={{ display: 'flex', fontSize: 11, color: C.text }}>
          Cost avoidance = preventing an increase (soft savings). Cost reduction = actual price decrease (hard savings). Finance validates both differently.
        </div>
      </div>
    </div>
  );
}

// ============================================================
// FIGURE 3: Question 6 — MRO Scenario Math
// ============================================================

function Fig3_ScenarioMath() {
  const W = 1100, H = 820;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: W, height: H, background: C.bg, padding: '36px 40px 28px', fontFamily: 'Inter' }}>
      {/* Title */}
      <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 16 }}>
        <div style={{ fontSize: 22, fontWeight: 700, color: C.text }}>Question 6 — MRO Scenario: Avoidance vs. Reduction Math</div>
        <div style={{ fontSize: 13, color: C.muted, marginTop: 4 }}>Supplier costs up 5%, wants 5% increase. Prior spend: $1,000,000.</div>
      </div>

      {/* Three scenarios */}
      <div style={{ display: 'flex', gap: 14, flex: 1 }}>
        {/* Scenario A */}
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, border: `2px solid ${C.blue}`, borderRadius: 8, overflow: 'hidden' }}>
          <div style={{ display: 'flex', padding: '10px 14px', background: C.blueBg, borderBottom: `1px solid ${C.blue}` }}>
            <div style={{ display: 'flex', fontSize: 14, fontWeight: 700, color: C.blue }}>6a: Negotiate to 3% Increase</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', padding: '14px', gap: 10 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <div style={{ display: 'flex', fontSize: 11, color: C.muted }}>Action: Supplier wanted 5%, you got 3%</div>
              <div style={{ display: 'flex', fontSize: 11, color: C.muted }}>Price still goes UP (no reduction)</div>
            </div>
            <div style={{ display: 'flex', height: 1, background: C.rule }}></div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', fontSize: 11, fontWeight: 700, color: C.amber }}>Cost Avoidance</div>
                <div style={{ display: 'flex', fontSize: 11, color: C.text }}>(5% − 3%) × $1M</div>
                <div style={{ display: 'flex', fontSize: 22, fontWeight: 700, color: C.amber }}>$20,000</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', fontSize: 11, fontWeight: 700, color: C.green }}>Cost Reduction</div>
                <div style={{ display: 'flex', fontSize: 22, fontWeight: 700, color: C.green }}>$0</div>
                <div style={{ display: 'flex', fontSize: 10, color: C.muted }}>Price went up, not down</div>
              </div>
            </div>
            <div style={{ display: 'flex', marginTop: 'auto', padding: '8px 10px', background: C.fill1, borderRadius: 6, fontSize: 10, color: C.muted }}>
              New annual cost: $1,030,000
            </div>
          </div>
        </div>

        {/* Scenario B */}
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, border: `2px solid ${C.green}`, borderRadius: 8, overflow: 'hidden' }}>
          <div style={{ display: 'flex', padding: '10px 14px', background: C.greenBg, borderBottom: `1px solid ${C.green}` }}>
            <div style={{ display: 'flex', fontSize: 14, fontWeight: 700, color: C.green }}>6b: Switch Items, Get 2% Decrease</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', padding: '14px', gap: 10 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <div style={{ display: 'flex', fontSize: 11, color: C.muted }}>Action: Switch to equivalent items</div>
              <div style={{ display: 'flex', fontSize: 11, color: C.muted }}>Proposed 5% increase becomes 2% decrease</div>
            </div>
            <div style={{ display: 'flex', height: 1, background: C.rule }}></div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', fontSize: 11, fontWeight: 700, color: C.amber }}>Cost Avoidance</div>
                <div style={{ display: 'flex', fontSize: 11, color: C.text }}>5% × $1M (full increase avoided)</div>
                <div style={{ display: 'flex', fontSize: 22, fontWeight: 700, color: C.amber }}>$50,000</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', fontSize: 11, fontWeight: 700, color: C.green }}>Cost Reduction</div>
                <div style={{ display: 'flex', fontSize: 11, color: C.text }}>2% × $1M</div>
                <div style={{ display: 'flex', fontSize: 22, fontWeight: 700, color: C.green }}>$20,000</div>
              </div>
            </div>
            <div style={{ display: 'flex', marginTop: 'auto', padding: '8px 10px', background: C.fill1, borderRadius: 6, fontSize: 10, color: C.muted }}>
              New annual cost: $980,000
            </div>
          </div>
        </div>

        {/* Scenario C */}
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, border: `2px solid ${C.red}`, borderRadius: 8, overflow: 'hidden' }}>
          <div style={{ display: 'flex', padding: '10px 14px', background: C.redBg, borderBottom: `1px solid ${C.red}` }}>
            <div style={{ display: 'flex', fontSize: 14, fontWeight: 700, color: C.red }}>6c: Delay the Reduction (TRAP)</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', padding: '14px', gap: 10 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <div style={{ display: 'flex', fontSize: 11, color: C.muted }}>Action: Accept 3% increase now,</div>
              <div style={{ display: 'flex', fontSize: 11, color: C.muted }}>supplier reduces back next year</div>
              <div style={{ display: 'flex', fontSize: 11, color: C.red, fontWeight: 700 }}>No avoidance reporting at company</div>
            </div>
            <div style={{ display: 'flex', height: 1, background: C.rule }}></div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <div style={{ display: 'flex', fontSize: 11, fontWeight: 700, color: C.text }}>This Year:</div>
              <div style={{ display: 'flex', fontSize: 11, color: C.text }}>Reduction: $0 | Avoidance: $20K (not reported)</div>
              <div style={{ display: 'flex', fontSize: 11, fontWeight: 700, color: C.text, marginTop: 4 }}>Next Year:</div>
              <div style={{ display: 'flex', fontSize: 11, color: C.text }}>Reduction: $30K | Avoidance: $0</div>
            </div>
            <div style={{ display: 'flex', marginTop: 'auto', padding: '8px 10px', background: C.redBg, borderRadius: 6 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <div style={{ display: 'flex', fontSize: 10, fontWeight: 700, color: C.red }}>THE PROBLEM</div>
                <div style={{ display: 'flex', fontSize: 10, color: C.text }}>Company pays $30K extra this year to claim a "reduction" next year. Gaming the system at the company's expense.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Summary bar */}
      <div style={{ display: 'flex', marginTop: 14, gap: 14 }}>
        <div style={{ display: 'flex', flex: 1, padding: '10px 14px', background: C.blueBg, borderRadius: 6, border: `1px solid ${C.blue}` }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', fontSize: 11, fontWeight: 700, color: C.blue }}>6a Total Value</div>
            <div style={{ display: 'flex', fontSize: 16, fontWeight: 700, color: C.blue }}>$20,000</div>
            <div style={{ display: 'flex', fontSize: 10, color: C.muted }}>Avoidance only</div>
          </div>
        </div>
        <div style={{ display: 'flex', flex: 1, padding: '10px 14px', background: C.greenBg, borderRadius: 6, border: `1px solid ${C.green}` }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', fontSize: 11, fontWeight: 700, color: C.green }}>6b Total Value</div>
            <div style={{ display: 'flex', fontSize: 16, fontWeight: 700, color: C.green }}>$70,000</div>
            <div style={{ display: 'flex', fontSize: 10, color: C.muted }}>$50K avoid + $20K reduce</div>
          </div>
        </div>
        <div style={{ display: 'flex', flex: 1, padding: '10px 14px', background: C.redBg, borderRadius: 6, border: `1px solid ${C.red}` }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', fontSize: 11, fontWeight: 700, color: C.red }}>6c Net Cost to Company</div>
            <div style={{ display: 'flex', fontSize: 16, fontWeight: 700, color: C.red }}>+$30,000</div>
            <div style={{ display: 'flex', fontSize: 10, color: C.muted }}>Overpays this year to game metrics</div>
          </div>
        </div>
      </div>

      {/* EXAM FLAG */}
      <div style={{ display: 'flex', marginTop: 12, padding: '8px 14px', background: C.redBg, borderRadius: 6, border: `1px solid ${C.red}` }}>
        <div style={{ display: 'flex', fontSize: 11, color: C.red, fontWeight: 700, marginRight: 8 }}>EXAM</div>
        <div style={{ display: 'flex', fontSize: 11, color: C.text }}>
          6c is the trap. If your system only counts reductions, people will convert avoidance into reduction by overpaying first. The measurement system creates the perverse incentive.
        </div>
      </div>
    </div>
  );
}

// ============================================================
// MAIN
// ============================================================

async function main() {
  const fonts = await loadFonts();

  const fig1 = await render(<Fig1_Overview />, 1100, 780, fonts);
  save(fig1, 'fig-case-10-1-show-me-money-overview.png');

  const fig2 = await render(<Fig2_MeasurementGap />, 1100, 740, fonts);
  save(fig2, 'fig-case-10-2-show-me-money-measurement.png');

  const fig3 = await render(<Fig3_ScenarioMath />, 1100, 820, fonts);
  save(fig3, 'fig-case-10-3-show-me-money-math.png');

  console.log('\nDone — 3 figures generated.');
}

main().catch(console.error);
