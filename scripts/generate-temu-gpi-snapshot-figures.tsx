#!/usr/bin/env npx tsx

import React from 'react';

/**
 * Temu GPI Snapshot Figures (Supply Chain + GPI Analysis)
 *
 * Fig 1: Supply Chain Model Shift (Pre-tariff vs Post-tariff)
 *   fig-temu-supply-chain-shift.png
 *
 * Fig 2: GPI Dimension Profile with Supply Chain Evidence
 *   fig-temu-gpi-dimensions.png
 *
 * Fig 3: De Minimis Cost Impact Timeline
 *   fig-temu-de-minimis-impact.png
 *
 * Run from imaginationg-main root:
 *   npx tsx scripts/generate-temu-gpi-snapshot-figures.tsx
 */

import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import * as fs from 'fs';
import * as path from 'path';

const OUT = path.join(
  '/Users/marcellmar/Documents/projects/marcus-gpi-brain',
  'gpi-framework/active-spirals/constructed-artifacts/gpi-snapshots'
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
  purple:   '#5B21B6',
  purpleBg: '#EDE9FE',
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
// FIG 1: Supply Chain Model Shift (Before/After Tariffs)
// ============================================================

function FigSupplyChainShift() {
  const W = 1100, H = 920;

  const beforeItems = [
    { label: 'Inventory', value: '100% consignment (supplier-owned)' },
    { label: 'Warehouses', value: 'Southern China only' },
    { label: 'Shipping', value: 'All air freight (~$5/pkg)' },
    { label: 'Tariffs', value: 'Zero (de minimis $800 threshold)' },
    { label: 'Delivery', value: '5-11 days from China' },
    { label: 'Supplier margins', value: '15-20%' },
    { label: 'Handling cost/order', value: '$15 (US)' },
  ];

  const afterItems = [
    { label: 'Inventory', value: 'Mixed: consignment + pre-positioned' },
    { label: 'Warehouses', value: '10+ US, 13 global (self-owned)' },
    { label: 'Shipping', value: 'Shifting to sea freight + rail' },
    { label: 'Tariffs', value: '54% or $100 flat fee per package' },
    { label: 'Delivery', value: '1-5 days (local) / 7-11 days (China)' },
    { label: 'Supplier margins', value: '10% or lower' },
    { label: 'Handling cost/order', value: '$8 (US)' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: W, height: H, background: C.bg, padding: '28px 32px', fontFamily: 'Inter' }}>
      {/* Title */}
      <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 8 }}>
        <div style={{ display: 'flex', fontSize: 13, color: C.light, letterSpacing: 1.5, marginBottom: 4 }}>TEMU SUPPLY CHAIN</div>
        <div style={{ display: 'flex', fontSize: 24, fontWeight: 700, color: C.text }}>Model Shift: Pre-Tariff vs Post-Tariff</div>
        <div style={{ display: 'flex', fontSize: 13, color: C.muted, marginTop: 4 }}>GPI 3.75 (Transitioning, Declining) | March 2026</div>
      </div>

      <div style={{ display: 'flex', width: '100%', borderBottom: `1px solid ${C.rule}`, marginBottom: 16 }}></div>

      {/* Two columns */}
      <div style={{ display: 'flex', flexDirection: 'row', gap: 20, flex: 1 }}>
        {/* Before */}
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, background: C.greenBg, borderRadius: 8, padding: '16px 20px', border: `1px solid ${C.green}33` }}>
          <div style={{ display: 'flex', fontSize: 14, fontWeight: 700, color: C.green, marginBottom: 4 }}>BEFORE: 2022-2024</div>
          <div style={{ display: 'flex', fontSize: 12, color: C.green, marginBottom: 14, opacity: 0.8 }}>De minimis era, direct from China</div>
          {beforeItems.map((item, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', marginBottom: 10, borderBottom: i < beforeItems.length - 1 ? `1px solid ${C.green}22` : 'none', paddingBottom: 8 }}>
              <div style={{ display: 'flex', fontSize: 11, fontWeight: 700, color: C.green, letterSpacing: 0.5 }}>{item.label.toUpperCase()}</div>
              <div style={{ display: 'flex', fontSize: 14, color: C.text, marginTop: 2 }}>{item.value}</div>
            </div>
          ))}
        </div>

        {/* Arrow */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: 60 }}>
          <div style={{ display: 'flex', fontSize: 32, color: C.red }}>→</div>
          <div style={{ display: 'flex', fontSize: 10, color: C.red, fontWeight: 700, textAlign: 'center', marginTop: 4 }}>FORCED</div>
          <div style={{ display: 'flex', fontSize: 10, color: C.red, fontWeight: 700, textAlign: 'center' }}>SHIFT</div>
        </div>

        {/* After */}
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, background: C.redBg, borderRadius: 8, padding: '16px 20px', border: `1px solid ${C.red}33` }}>
          <div style={{ display: 'flex', fontSize: 14, fontWeight: 700, color: C.red, marginBottom: 4 }}>AFTER: 2025-2026</div>
          <div style={{ display: 'flex', fontSize: 12, color: C.red, marginBottom: 14, opacity: 0.8 }}>De minimis dead, forced localization</div>
          {afterItems.map((item, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', marginBottom: 10, borderBottom: i < afterItems.length - 1 ? `1px solid ${C.red}22` : 'none', paddingBottom: 8 }}>
              <div style={{ display: 'flex', fontSize: 11, fontWeight: 700, color: C.red, letterSpacing: 0.5 }}>{item.label.toUpperCase()}</div>
              <div style={{ display: 'flex', fontSize: 14, color: C.text, marginTop: 2 }}>{item.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom insight */}
      <div style={{ display: 'flex', flexDirection: 'column', marginTop: 16, background: C.fill1, borderRadius: 6, padding: '12px 16px', border: `1px solid ${C.border}` }}>
        <div style={{ display: 'flex', fontSize: 12, fontWeight: 700, color: C.accent, marginBottom: 4 }}>THE PARADOX</div>
        <div style={{ display: 'flex', fontSize: 13, color: C.muted }}>Every move to survive (US warehouses, local fulfillment, semi-managed model) adds the weight the original model was designed to avoid. Capital Intensity rising. Structural Lock-In rising. The more Temu localizes, the more it resembles Amazon without Amazon's infrastructure advantage.</div>
      </div>
    </div>
  );
}

// ============================================================
// FIG 2: GPI Dimension Profile with Supply Chain Evidence
// ============================================================

function FigGPIDimensions() {
  const W = 1100, H = 880;

  const dims = [
    { name: 'Decision Latency', score: 2, color: C.green, bg: C.greenBg, evidence: 'Real-time demand signals, forced SKU elimination at 30 units/30 days, small frequent orders' },
    { name: 'Error Correction', score: 2, color: C.green, bg: C.greenBg, evidence: 'Bad SKUs auto-killed. Bad suppliers replaced instantly. No system-level Plan B for tariff changes.' },
    { name: 'Capital Intensity', score: 3, color: C.green, bg: C.greenBg, evidence: 'Consignment = zero inventory ownership. But 10+ US warehouses and growing. Score moving toward 4-5.' },
    { name: 'Knowledge Velocity', score: 3, color: C.green, bg: C.greenBg, evidence: 'Algorithmic speed: real-time pricing, automated replenishment. Speed is code, not culture.' },
    { name: 'Structural Lock-In', score: 4, color: C.amber, bg: C.amberBg, evidence: 'Zero lock-in today (no membership, transactional suppliers). Building lock-in fast via US fulfillment.' },
    { name: 'Knowledge Location', score: 7, color: C.red, bg: C.redBg, evidence: 'All intelligence in Shanghai. EU entity: 8 employees. Extreme concentration, single point of failure.' },
    { name: 'Talent Flow', score: 7, color: C.red, bg: C.redBg, evidence: 'Supplier margins crushed to 10%. Payment withholding. 996 culture. Key engineers concentrated and scarce.' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: W, height: H, background: C.bg, padding: '28px 32px', fontFamily: 'Inter' }}>
      {/* Title */}
      <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 8 }}>
        <div style={{ display: 'flex', fontSize: 13, color: C.light, letterSpacing: 1.5, marginBottom: 4 }}>GPI ANALYSIS</div>
        <div style={{ display: 'flex', fontSize: 24, fontWeight: 700, color: C.text }}>Temu: GPI 3.75 (Transitioning, Declining)</div>
        <div style={{ display: 'flex', fontSize: 13, color: C.muted, marginTop: 4 }}>10 calcification signals on a sub-4 score | Particle ops, fragile foundation</div>
      </div>

      <div style={{ display: 'flex', width: '100%', borderBottom: `1px solid ${C.rule}`, marginBottom: 14 }}></div>

      {/* Dimension rows */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {dims.map((d, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', background: d.bg, borderRadius: 6, padding: '10px 14px', border: `1px solid ${d.color}22` }}>
            {/* Score circle */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: 42, height: 42, borderRadius: 21, background: d.color, flexShrink: 0 }}>
              <div style={{ display: 'flex', fontSize: 18, fontWeight: 700, color: '#FFFFFF' }}>{d.score}</div>
            </div>
            {/* Name + evidence */}
            <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 14, flex: 1 }}>
              <div style={{ display: 'flex', fontSize: 14, fontWeight: 700, color: d.color }}>{d.name}</div>
              <div style={{ display: 'flex', fontSize: 12, color: C.muted, marginTop: 2 }}>{d.evidence}</div>
            </div>
            {/* Bar */}
            <div style={{ display: 'flex', flexDirection: 'row', width: 200, height: 14, background: '#E5E5E5', borderRadius: 7, overflow: 'hidden', flexShrink: 0, marginLeft: 12 }}>
              <div style={{ display: 'flex', width: `${d.score * 10}%`, height: '100%', background: d.color, borderRadius: 7 }}></div>
            </div>
          </div>
        ))}
      </div>

      {/* Formula */}
      <div style={{ display: 'flex', flexDirection: 'column', marginTop: 14, background: C.fill1, borderRadius: 6, padding: '10px 14px', border: `1px solid ${C.border}` }}>
        <div style={{ display: 'flex', fontSize: 11, color: C.light, marginBottom: 4 }}>GPI = (2×0.20) + (2×0.20) + (7×0.15) + (4×0.15) + (7×0.10) + (3×0.10) + (3×0.10) = 3.75</div>
        <div style={{ display: 'flex', fontSize: 12, fontWeight: 700, color: C.accent }}>Strengths: Decision Latency, Error Correction, Capital Intensity | Weaknesses: Knowledge Location, Talent Flow</div>
      </div>

      {/* Amazon comparison */}
      <div style={{ display: 'flex', flexDirection: 'row', marginTop: 10, gap: 12 }}>
        <div style={{ display: 'flex', flex: 1, background: C.blueBg, borderRadius: 6, padding: '10px 14px', border: `1px solid ${C.blue}22` }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', fontSize: 12, fontWeight: 700, color: C.blue }}>vs Amazon (GPI 3.55, Stable)</div>
            <div style={{ display: 'flex', fontSize: 12, color: C.muted, marginTop: 2 }}>Amazon's speed is internal architecture (two-pizza teams, writing culture). Temu's speed is external conditions (de minimis, factory overcapacity). When conditions change, Amazon adapts. Temu scrambles.</div>
          </div>
        </div>
        <div style={{ display: 'flex', flex: 1, background: C.purpleBg, borderRadius: 6, padding: '10px 14px', border: `1px solid ${C.purple}22` }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', fontSize: 12, fontWeight: 700, color: C.purple }}>Calcification Trajectory</div>
            <div style={{ display: 'flex', fontSize: 12, color: C.muted, marginTop: 2 }}>10 signals on a 3.75 score is abnormal. Most companies under 4.0 have 2-4 signals. Temu is calcifying faster than the score suggests. Expect 4.5-5.0 within 12 months if localization continues.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// FIG 3: De Minimis Cost Impact Timeline
// ============================================================

function FigDeMinimisImpact() {
  const W = 1100, H = 700;

  const events = [
    { date: 'Sep 2022', label: 'Temu launches in US', detail: 'Direct from China, all packages under $800 threshold, zero tariffs', color: C.green },
    { date: 'Early 2024', label: '152M monthly US users', detail: '$20B GMV in H1 2024. 400K packages/day exported. Model scales.', color: C.green },
    { date: 'Mar 2024', label: 'Local warehouse pilot', detail: '~1,000 US sellers vs 150K China consignment sellers. Amazon launches China discount section.', color: C.amber },
    { date: '2025', label: 'De minimis eliminated (China)', detail: 'Trump ends $800 exemption for China/Hong Kong. US-bound shipments fall 81% in one day.', color: C.red },
    { date: 'Feb 2026', label: 'Extended to ALL countries', detail: 'All packages now face 54% tariff or $100 flat fee. No workaround via third countries.', color: C.red },
    { date: 'Jul 2026', label: 'EU scraps threshold', detail: 'New €3/package customs fee on all imports under €150. Second major market hit.', color: C.red },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: W, height: H, background: C.bg, padding: '28px 32px', fontFamily: 'Inter' }}>
      {/* Title */}
      <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 8 }}>
        <div style={{ display: 'flex', fontSize: 13, color: C.light, letterSpacing: 1.5, marginBottom: 4 }}>POLICY RISK TIMELINE</div>
        <div style={{ display: 'flex', fontSize: 24, fontWeight: 700, color: C.text }}>De Minimis: From Advantage to Collapse</div>
        <div style={{ display: 'flex', fontSize: 13, color: C.muted, marginTop: 4 }}>The case study flagged this as a risk. It already happened.</div>
      </div>

      <div style={{ display: 'flex', width: '100%', borderBottom: `1px solid ${C.rule}`, marginBottom: 20 }}></div>

      {/* Timeline */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, flex: 1 }}>
        {events.map((e, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
            {/* Date column */}
            <div style={{ display: 'flex', width: 100, flexShrink: 0, justifyContent: 'flex-end', paddingRight: 16, paddingTop: 4 }}>
              <div style={{ display: 'flex', fontSize: 12, fontWeight: 700, color: e.color }}>{e.date}</div>
            </div>
            {/* Dot + line */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 24, flexShrink: 0 }}>
              <div style={{ display: 'flex', width: 12, height: 12, borderRadius: 6, background: e.color, marginTop: 4 }}></div>
              {i < events.length - 1 && (
                <div style={{ display: 'flex', width: 2, flex: 1, background: C.rule, marginTop: 4 }}></div>
              )}
            </div>
            {/* Content */}
            <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: 12, paddingBottom: 12, flex: 1 }}>
              <div style={{ display: 'flex', fontSize: 15, fontWeight: 700, color: C.text }}>{e.label}</div>
              <div style={{ display: 'flex', fontSize: 12, color: C.muted, marginTop: 3 }}>{e.detail}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom insight */}
      <div style={{ display: 'flex', flexDirection: 'row', gap: 12, marginTop: 12 }}>
        <div style={{ display: 'flex', flex: 1, background: C.redBg, borderRadius: 6, padding: '10px 14px', border: `1px solid ${C.red}33` }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', fontSize: 12, fontWeight: 700, color: C.red }}>COST IMPACT</div>
            <div style={{ display: 'flex', fontSize: 12, color: C.muted, marginTop: 2 }}>Avg package ~$40. Old cost: $0 tariff. New cost: $21.60 (54%) or $100 flat fee. On 400K daily packages, that is $8.6M-$40M per day in new costs.</div>
          </div>
        </div>
        <div style={{ display: 'flex', flex: 1, background: C.amberBg, borderRadius: 6, padding: '10px 14px', border: `1px solid ${C.amber}33` }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', fontSize: 12, fontWeight: 700, color: C.amber }}>GPI DIMENSION IMPACT</div>
            <div style={{ display: 'flex', fontSize: 12, color: C.muted, marginTop: 2 }}>Capital Intensity: 3→5 (warehouses). Structural Lock-In: 4→6 (fixed assets, legal entities). Knowledge Location: 7→7 (unchanged, still Shanghai). Trajectory: 3.75 → 4.5-5.0 within 12 months.</div>
          </div>
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

  const fig1 = FigSupplyChainShift();
  const buf1 = await render(fig1, 1100, 920, fonts);
  save(buf1, 'fig-temu-supply-chain-shift.png');

  const fig2 = FigGPIDimensions();
  const buf2 = await render(fig2, 1100, 880, fonts);
  save(buf2, 'fig-temu-gpi-dimensions.png');

  const fig3 = FigDeMinimisImpact();
  const buf3 = await render(fig3, 1100, 700, fonts);
  save(buf3, 'fig-temu-de-minimis-impact.png');

  console.log('\nDone. 3 figures generated.');
}

main().catch(console.error);
