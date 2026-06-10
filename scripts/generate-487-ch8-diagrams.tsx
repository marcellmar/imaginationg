#!/usr/bin/env npx tsx

import React from 'react';

/**
 * SCMG 487 Chapter 8 Diagrams
 * Academic / book style: white background, minimal color, Inter font
 *
 * Figures:
 *   fig-8-0-chapter-overview.png
 *   fig-8-1-carrying-order-costs.png
 *   fig-8-2-fixed-quantity-model.png
 *   fig-8-3-buffer-demand-variation.png
 *   fig-8-4-buffer-service-coverage.png
 *   fig-8-5-price-increase-decision.png
 *   fig-8-6-inventory-forms-function.png
 *   fig-8-7-abc-classification.png
 *
 * Run from imaginationg-main root:
 *   npx tsx scripts/generate-487-ch8-diagrams.tsx
 */

import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import * as fs from 'fs';
import * as path from 'path';

const OUT = path.join(
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

/* ── shared helpers (same pattern as ch4-ch5-ch6 script) ── */

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

/* ════════════════════════════════════════════════════════════════
   FIG 8-0  Chapter Overview Concept Map
   ════════════════════════════════════════════════════════════════ */
function Fig8_Overview() {
  const W = 1120, H = 920;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: W, height: H, backgroundColor: C.bg, padding: '32px 40px', fontFamily: 'Inter, sans-serif' }}>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 18 }}>
        <span style={{ fontSize: 11, color: C.muted, letterSpacing: 1.5, textTransform: 'uppercase' as const }}>Chapter 8 Concept Map</span>
        <span style={{ fontSize: 24, fontWeight: 700, color: C.text, marginTop: 4 }}>Quantity and Inventory</span>
      </div>

      <div style={{ display: 'flex', border: `1.5px solid ${C.borderDk}`, borderRadius: 6, padding: '10px 20px', marginBottom: 20, backgroundColor: C.fill1 }}>
        <span style={{ fontSize: 12, color: C.text }}>
          Three questions: How much to acquire? When to acquire? How to manage inventory? Every answer is a trade-off between carrying cost and stockout risk.
        </span>
      </div>

      <div style={{ display: 'flex', gap: 16, flex: 1 }}>

        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, border: `1px solid ${C.border}`, borderRadius: 6, overflow: 'hidden' }}>
          {colHeader('FIG 8-1 · 8-2', 'Order Quantity Models')}
          <div style={{ display: 'flex', flexDirection: 'column', padding: '14px 14px', flex: 1 }}>
            {bullet('EOQ', 'Q = sqrt(2RS/KC). Minimizes total cost. Curve is flat near optimum.')}
            {bullet('Reorder Point', 'P = L x R/250. When to trigger next order.')}
            {bullet('Fixed-Quantity', 'Order EOQ when inventory hits P. Continuous monitoring.')}
            {bullet('Fixed-Period', 'Review every T days. Variable order size. More buffer needed.')}
            {bullet('Total Cost', 'TC = RC + RS/Q + QKC/2. Purchase + ordering + carrying.')}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, border: `1px solid ${C.border}`, borderRadius: 6, overflow: 'hidden' }}>
          {colHeader('FIG 8-3 · 8-4 · 8-6', 'Inventory Functions and Buffer')}
          <div style={{ display: 'flex', flexDirection: 'column', padding: '14px 14px', flex: 1 }}>
            {bullet('Transit', 'In-motion. Depends on distance, mode, location.')}
            {bullet('Cycle', 'Buy in lots. Size = sqrt of demand. EOQ governs.')}
            {bullet('Buffer', 'Variability insurance. Demand + supply uncertainty.')}
            {bullet('Anticipation', 'Known events: seasons, strikes, price increases.')}
            {bullet('Decoupling', 'Independence between stages. Flexibility buffer.')}
            {bullet('Service Coverage', 'Filled / Total requests. Target: 95%.')}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, border: `1px solid ${C.border}`, borderRadius: 6, overflow: 'hidden' }}>
          {colHeader('MRP · JIT · 8-7', 'Planning Systems and ABC')}
          <div style={{ display: 'flex', flexDirection: 'column', padding: '14px 14px', flex: 1 }}>
            {bullet('MRP Inputs', 'Master schedule + BOM + inventory record.')}
            {bullet('Lot Sizing', 'L4L, EOQ, LTC, LUC. Trade setup vs carrying.')}
            {bullet('JIT/Kanban', 'Pull system. Materials arrive as needed. Visual cards.')}
            {bullet('A Items', '10-20% of items, 70-80% of value. Tight control.')}
            {bullet('B Items', '10-20% of items, 10-15% of value. Moderate review.')}
            {bullet('C Items', '70-80% of items, 10-20% of value. Simple controls.')}
          </div>
        </div>

      </div>

      <div style={{ display: 'flex', gap: 12, marginTop: 16 }}>
        <div style={{ display: 'flex', flex: 1, backgroundColor: C.blueBg, border: `1px solid ${C.blue}`, borderRadius: 4, padding: '8px 12px' }}>
          <span style={{ fontSize: 11, color: C.blue }}>GPI: Capital Intensity = every $ in inventory is $ not deployed elsewhere. EOQ optimizes this tension.</span>
        </div>
        <div style={{ display: 'flex', flex: 1, backgroundColor: C.greenBg, border: `1px solid ${C.green}`, borderRadius: 4, padding: '8px 12px' }}>
          <span style={{ fontSize: 11, color: C.green }}>GPI: Decision Latency = lead time L is embedded decision lag. JIT and VMI compress it.</span>
        </div>
        <div style={{ display: 'flex', flex: 1, backgroundColor: C.redBg, border: `1px solid ${C.red}`, borderRadius: 4, padding: '8px 12px' }}>
          <span style={{ fontSize: 11, color: C.red }}>GPI: Error Correction = buffer stock is the price of poor error correction capacity.</span>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 14 }}>
        <span style={{ fontSize: 10, color: C.light }}>SCMG 487 | Chapter 8 | Quantity and Inventory</span>
      </div>

    </div>
  );
}

/* ════════════════════════════════════════════════════════════════
   FIG 8-1  Material Carrying and Order Costs
   ════════════════════════════════════════════════════════════════ */
function Fig8_1() {
  const W = 900, H = 620;
  const data = [
    { q: 30, order: 1500, carry: 169, total: 1669 },
    { q: 50, order: 900,  carry: 281, total: 1181 },
    { q: 70, order: 643,  carry: 394, total: 1037 },
    { q: 89, order: 506,  carry: 501, total: 1007 },
    { q: 110,order: 409,  carry: 619, total: 1028 },
    { q: 140,order: 321,  carry: 788, total: 1109 },
    { q: 180,order: 250,  carry: 1013,total: 1263 },
  ];
  const maxCost = 1700;
  const barH = 260;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: W, height: H, backgroundColor: C.bg, padding: '32px 40px', fontFamily: 'Inter, sans-serif' }}>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 18 }}>
        <span style={{ fontSize: 11, color: C.muted, letterSpacing: 1.5, textTransform: 'uppercase' as const }}>Figure 8-1</span>
        <span style={{ fontSize: 20, fontWeight: 700, color: C.text, marginTop: 4 }}>Material Carrying and Order Costs</span>
        <span style={{ fontSize: 12, color: C.muted, marginTop: 4 }}>Total cost = Ordering cost + Carrying cost. EOQ is at the minimum.</span>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: 20, marginBottom: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <div style={{ display: 'flex', width: 12, height: 12, backgroundColor: C.blue, borderRadius: 2 }} />
          <span style={{ fontSize: 11, color: C.text }}>Ordering Cost (RS/Q)</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <div style={{ display: 'flex', width: 12, height: 12, backgroundColor: C.amber, borderRadius: 2 }} />
          <span style={{ fontSize: 11, color: C.text }}>Carrying Cost (QKC/2)</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <div style={{ display: 'flex', width: 12, height: 12, backgroundColor: C.accent, borderRadius: 2 }} />
          <span style={{ fontSize: 11, color: C.text }}>Total Cost</span>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: 14 }}>
        {data.map((d, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <div style={{ display: 'flex', gap: 3, alignItems: 'flex-end', height: barH }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', height: barH }}>
                <span style={{ fontSize: 8, color: C.muted, marginBottom: 2 }}>${d.order}</span>
                <div style={{ display: 'flex', width: 16, height: Math.round((d.order / maxCost) * barH), backgroundColor: C.blue, borderRadius: 2 }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', height: barH }}>
                <span style={{ fontSize: 8, color: C.muted, marginBottom: 2 }}>${d.carry}</span>
                <div style={{ display: 'flex', width: 16, height: Math.round((d.carry / maxCost) * barH), backgroundColor: C.amber, borderRadius: 2 }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', height: barH }}>
                <span style={{ fontSize: 8, color: C.muted, marginBottom: 2 }}>${d.total}</span>
                <div style={{ display: 'flex', width: 16, height: Math.round((d.total / maxCost) * barH), backgroundColor: C.accent, borderRadius: 2 }} />
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', borderTop: `1px solid ${C.border}`, paddingTop: 4 }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: d.q === 89 ? C.blue : C.text }}>Q={d.q}</span>
              {d.q === 89 ? <span style={{ fontSize: 10, color: C.blue, fontWeight: 700 }}>EOQ</span> : null}
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', marginTop: 24, backgroundColor: C.fill1, border: `1px solid ${C.border}`, borderRadius: 4, padding: '12px 18px' }}>
        <span style={{ fontSize: 11, color: C.text }}>
          The total cost curve is flat near EOQ. Ordering 96 (8 dozen) instead of 89 adds only ~$2.50 to $41,500 annual cost. Practical rounding is fine.
        </span>
      </div>

    </div>
  );
}

/* ════════════════════════════════════════════════════════════════
   FIG 8-2  Simple Fixed-Quantity Model (Sawtooth)
   ════════════════════════════════════════════════════════════════ */
function Fig8_2() {
  const W = 900, H = 540;
  const phases = [
    { phase: 'Order Received', inv: 'EOQ (89 units)', action: 'Inventory at maximum' },
    { phase: 'Consumption', inv: 'Decreasing linearly', action: 'Demand draws down stock at constant rate (R/250 per day)' },
    { phase: 'Reorder Point Hit', inv: 'P = 36 units', action: 'New order placed. L = 10 working days until delivery.' },
    { phase: 'During Lead Time', inv: '36 to 0 units', action: 'Stock continues to deplete. Order is in transit.' },
    { phase: 'Order Arrives', inv: 'Back to EOQ', action: 'Cycle restarts. Average inventory = Q/2 = 44.5 units.' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: W, height: H, backgroundColor: C.bg, padding: '32px 40px', fontFamily: 'Inter, sans-serif' }}>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 18 }}>
        <span style={{ fontSize: 11, color: C.muted, letterSpacing: 1.5, textTransform: 'uppercase' as const }}>Figure 8-2</span>
        <span style={{ fontSize: 20, fontWeight: 700, color: C.text, marginTop: 4 }}>Simple Fixed-Quantity Model</span>
        <span style={{ fontSize: 12, color: C.muted, marginTop: 4 }}>Sawtooth pattern: inventory drops linearly, jumps back to EOQ on delivery</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', border: `1px solid ${C.border}`, borderRadius: 4, overflow: 'hidden' }}>
        <div style={{ display: 'flex', backgroundColor: C.accent, padding: '10px 16px' }}>
          <span style={{ fontSize: 12, fontWeight: 700, color: '#FFFFFF', width: 160 }}>Phase</span>
          <span style={{ fontSize: 12, fontWeight: 700, color: '#FFFFFF', width: 160 }}>Inventory Level</span>
          <span style={{ fontSize: 12, fontWeight: 700, color: '#FFFFFF', flex: 1 }}>What Happens</span>
        </div>
        {phases.map((p, i) => (
          <div key={i} style={{ display: 'flex', padding: '10px 16px', backgroundColor: i % 2 === 0 ? C.fill1 : C.bg, borderTop: `1px solid ${C.rule}`, alignItems: 'center' }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: C.text, width: 160 }}>{p.phase}</span>
            <span style={{ fontSize: 12, color: C.blue, fontWeight: 700, width: 160 }}>{p.inv}</span>
            <span style={{ fontSize: 11, color: C.muted, flex: 1 }}>{p.action}</span>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', gap: 12, marginTop: 20 }}>
        {[
          { label: 'EOQ', value: '89 units', note: 'Order quantity' },
          { label: 'P', value: '36 units', note: 'Reorder point' },
          { label: 'L', value: '10 days', note: 'Lead time' },
          { label: 'Avg Inv', value: '44.5 units', note: 'Q/2' },
          { label: 'Orders/yr', value: '~10', note: 'R/Q' },
        ].map((v, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', flex: 1, alignItems: 'center', backgroundColor: C.fill1, border: `1px solid ${C.border}`, borderRadius: 4, padding: '10px 8px' }}>
            <span style={{ fontSize: 11, color: C.muted }}>{v.label}</span>
            <span style={{ fontSize: 16, fontWeight: 700, color: C.text }}>{v.value}</span>
            <span style={{ fontSize: 10, color: C.light }}>{v.note}</span>
          </div>
        ))}
      </div>

    </div>
  );
}

/* ════════════════════════════════════════════════════════════════
   FIG 8-3  Buffer Inventory and Demand Variation
   ════════════════════════════════════════════════════════════════ */
function Fig8_3() {
  const W = 900, H = 520;
  const scenarios = [
    { num: '1', label: 'Some buffer used', detail: 'Demand higher than expected during lead time. Buffer partially consumed. No stockout.', color: C.green, bg: C.greenBg },
    { num: '2', label: 'No buffer used', detail: 'Demand matched forecast exactly. Buffer inventory remained full. No stockout.', color: C.blue, bg: C.blueBg },
    { num: '3', label: 'Stockout occurs', detail: 'Demand exceeded reorder point + buffer. All buffer consumed and demand still unmet.', color: C.red, bg: C.redBg },
    { num: '4', label: 'All buffer remains', detail: 'Demand lower than expected. Buffer completely untouched. Order arrives to overstocked position.', color: C.amber, bg: C.amberBg },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: W, height: H, backgroundColor: C.bg, padding: '32px 40px', fontFamily: 'Inter, sans-serif' }}>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 18 }}>
        <span style={{ fontSize: 11, color: C.muted, letterSpacing: 1.5, textTransform: 'uppercase' as const }}>Figure 8-3</span>
        <span style={{ fontSize: 20, fontWeight: 700, color: C.text, marginTop: 4 }}>Buffer Inventory and Demand Variation</span>
        <span style={{ fontSize: 12, color: C.muted, marginTop: 4 }}>Four possible outcomes during lead time when buffer stock exists</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {scenarios.map((s, i) => (
          <div key={i} style={{ display: 'flex', backgroundColor: s.bg, border: `1px solid ${s.color}`, borderRadius: 6, padding: '14px 18px', alignItems: 'center', gap: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 36, height: 36, borderRadius: 18, backgroundColor: s.color }}>
              <span style={{ fontSize: 16, fontWeight: 700, color: '#FFFFFF' }}>{s.num}</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
              <span style={{ fontSize: 14, fontWeight: 700, color: s.color }}>{s.label}</span>
              <span style={{ fontSize: 12, color: C.text, marginTop: 2 }}>{s.detail}</span>
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', marginTop: 16, backgroundColor: C.fill1, border: `1px solid ${C.border}`, borderRadius: 4, padding: '10px 14px' }}>
        <span style={{ fontSize: 11, color: C.muted }}>
          Buffer stock (B) sits below the reorder point (P). Inventory can dip below P into buffer during lead time. If demand exceeds P + B, stockout occurs. Service coverage = % of demand cycles without stockout.
        </span>
      </div>

    </div>
  );
}

/* ════════════════════════════════════════════════════════════════
   FIG 8-4  Buffer Inventory for Desired Service Coverage
   ════════════════════════════════════════════════════════════════ */
function Fig8_4() {
  const W = 900, H = 500;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: W, height: H, backgroundColor: C.bg, padding: '32px 40px', fontFamily: 'Inter, sans-serif' }}>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 18 }}>
        <span style={{ fontSize: 11, color: C.muted, letterSpacing: 1.5, textTransform: 'uppercase' as const }}>Figure 8-4</span>
        <span style={{ fontSize: 20, fontWeight: 700, color: C.text, marginTop: 4 }}>Buffer Inventory for Desired Coverage</span>
        <span style={{ fontSize: 12, color: C.muted, marginTop: 4 }}>Normal distribution of demand during lead time sets the buffer level</span>
      </div>

      <div style={{ display: 'flex', gap: 16 }}>
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, backgroundColor: C.fill1, border: `1px solid ${C.border}`, borderRadius: 6, padding: '16px 20px', overflow: 'hidden' }}>
          <span style={{ fontSize: 14, fontWeight: 700, color: C.text, marginBottom: 8 }}>The Setup</span>
          <span style={{ fontSize: 12, color: C.muted, marginBottom: 6 }}>Start with EOQ model, but demand during lead time is uncertain. Usage follows a normal distribution.</span>
          <span style={{ fontSize: 12, color: C.muted }}>If actual demand exceeds reorder point, buffer stock covers the gap.</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, backgroundColor: C.blueBg, border: `1px solid ${C.blue}`, borderRadius: 6, padding: '16px 20px', overflow: 'hidden' }}>
          <span style={{ fontSize: 14, fontWeight: 700, color: C.blue, marginBottom: 8 }}>The Math</span>
          <span style={{ fontSize: 12, color: C.text, marginBottom: 4 }}>Target: 95% service coverage</span>
          <span style={{ fontSize: 12, color: C.text, marginBottom: 4 }}>Buffer = z x sigma x sqrt(L)</span>
          <span style={{ fontSize: 12, color: C.muted }}>z = 1.65 for 95%, sigma = std dev of daily demand, L = lead time</span>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', border: `1px solid ${C.border}`, borderRadius: 6, padding: '16px 20px', marginTop: 16 }}>
        <span style={{ fontSize: 13, fontWeight: 700, color: C.text, marginBottom: 10 }}>Inventory Level Hierarchy</span>
        {[
          { level: 'Q (Order Quantity)', val: '89 units', desc: 'Maximum inventory after delivery', bg: C.greenBg, color: C.green },
          { level: 'P (Reorder Point)', val: '36 units', desc: 'Trigger for new order', bg: C.blueBg, color: C.blue },
          { level: 'Most Likely Usage', val: '~36 units', desc: 'Expected consumption during lead time', bg: C.fill1, color: C.text },
          { level: 'B (Buffer Stock)', val: 'Below P', desc: 'Absorbs demand above expected. Set by service target.', bg: C.amberBg, color: C.amber },
          { level: 'Stockout Zone', val: '0 units', desc: 'Demand exceeded P + B. Service failure.', bg: C.redBg, color: C.red },
        ].map((l, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', padding: '6px 12px', backgroundColor: l.bg, borderRadius: 3, marginBottom: 3 }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: l.color, width: 180 }}>{l.level}</span>
            <span style={{ fontSize: 12, fontWeight: 700, color: C.text, width: 80 }}>{l.val}</span>
            <span style={{ fontSize: 11, color: C.muted, flex: 1 }}>{l.desc}</span>
          </div>
        ))}
      </div>

    </div>
  );
}

/* ════════════════════════════════════════════════════════════════
   FIG 8-5  Decision Tree: Inventory for Price Increase
   ════════════════════════════════════════════════════════════════ */
function Fig8_5() {
  const W = 960, H = 560;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: W, height: H, backgroundColor: C.bg, padding: '32px 40px', fontFamily: 'Inter, sans-serif' }}>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 18 }}>
        <span style={{ fontSize: 11, color: C.muted, letterSpacing: 1.5, textTransform: 'uppercase' as const }}>Figure 8-5</span>
        <span style={{ fontSize: 20, fontWeight: 700, color: C.text, marginTop: 4 }}>Decision to Inventory for a Price Increase</span>
        <span style={{ fontSize: 12, color: C.muted, marginTop: 4 }}>Decision tree: buy extra now or wait?</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: C.fill1, border: `1px solid ${C.border}`, borderRadius: 6, padding: '16px 20px' }}>
          <span style={{ fontSize: 14, fontWeight: 700, color: C.text, marginBottom: 10 }}>Alternative 1: Purchase Additional Inventory</span>
          <div style={{ display: 'flex', gap: 12 }}>
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1, gap: 6 }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: C.green }}>If price increases (probability P):</span>
              <span style={{ fontSize: 11, color: C.muted }}>Price increase AVOIDED. Carrying cost INCURRED.</span>
              <span style={{ fontSize: 11, color: C.green }}>Net: Win if savings exceed carrying cost.</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1, gap: 6 }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: C.red }}>If price does NOT increase (1-P):</span>
              <span style={{ fontSize: 11, color: C.muted }}>No savings from avoided increase. Carrying cost INCURRED.</span>
              <span style={{ fontSize: 11, color: C.red }}>Net: Pure loss. Paid carrying cost for nothing.</span>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: C.fill1, border: `1px solid ${C.border}`, borderRadius: 6, padding: '16px 20px' }}>
          <span style={{ fontSize: 14, fontWeight: 700, color: C.text, marginBottom: 10 }}>Alternative 2: No Additional Inventory</span>
          <div style={{ display: 'flex', gap: 12 }}>
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1, gap: 6 }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: C.red }}>If price increases (probability P):</span>
              <span style={{ fontSize: 11, color: C.muted }}>Price increase INCURRED. No carrying cost.</span>
              <span style={{ fontSize: 11, color: C.red }}>Net: Pay the higher price going forward.</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1, gap: 6 }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: C.green }}>If price does NOT increase (1-P):</span>
              <span style={{ fontSize: 11, color: C.muted }}>No price increase, no carrying cost.</span>
              <span style={{ fontSize: 11, color: C.green }}>Net: Best outcome. No cost at all.</span>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', backgroundColor: C.blueBg, border: `1px solid ${C.blue}`, borderRadius: 4, padding: '10px 16px' }}>
          <span style={{ fontSize: 12, color: C.blue }}>
            Decision rule: Buy extra if P x (price increase savings) exceeds (certain carrying cost). Higher probability and larger expected increase make buying ahead more attractive.
          </span>
        </div>
      </div>

    </div>
  );
}

/* ════════════════════════════════════════════════════════════════
   FIG 8-6  Inventory Forms and Function (5x5 Matrix)
   ════════════════════════════════════════════════════════════════ */
function Fig8_6() {
  const W = 1100, H = 780;
  const forms = ['Raw Materials', 'Work-in-Process', 'Finished Goods', 'MRO', 'Resale'];
  const functions = [
    { name: '1. Transit', decisions: 'Logistics', cells: [
      'Supply system, supplier location, transport mode',
      'Layout, materials handling design',
      'Plant location, distribution system',
      'Supplier location, mode, small shipments',
      'Warehouse location, distribution, transport',
    ]},
    { name: '2. Cycle', decisions: 'Product/Process', cells: [
      'Order size, order cost',
      'Lot size, setup costs',
      'Distribution costs, lot sizes',
      'OEM or not, order size',
      'Order size and order cost',
    ]},
    { name: '3. Buffer', decisions: 'Risk Level', cells: [
      'Price, supply, stockout, carrying costs',
      'Machine and product capabilities',
      'Demand breakdowns, carrying cost',
      'Breakdowns during use',
      'Demand with carrying and stockout costs',
    ]},
    { name: '4. Anticipation', decisions: 'Price/Season', cells: [
      'Future supply and demand price',
      'Capacity, hire, fire, overtime, idle',
      'Demand patterns (seasonal)',
      'Maintenance planning',
      'Supply/demand patterns and price',
    ]},
    { name: '5. Decoupling', decisions: 'Prod. Control', cells: [
      'Independence from supplier',
      'Independence of production ops',
      'Independence from market',
      'Stock at vendor or user',
      'Stock at supplier or buyer',
    ]},
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: W, height: H, backgroundColor: C.bg, padding: '32px 40px', fontFamily: 'Inter, sans-serif' }}>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 18 }}>
        <span style={{ fontSize: 11, color: C.muted, letterSpacing: 1.5, textTransform: 'uppercase' as const }}>Figure 8-6</span>
        <span style={{ fontSize: 20, fontWeight: 700, color: C.text, marginTop: 4 }}>Inventory Forms and Function</span>
        <span style={{ fontSize: 12, color: C.muted, marginTop: 4 }}>5 functions x 5 forms = 25 inventory types. Each cell shows managerial decision variables.</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', border: `1px solid ${C.borderDk}`, borderRadius: 4, overflow: 'hidden' }}>
        <div style={{ display: 'flex', backgroundColor: C.accent }}>
          <div style={{ display: 'flex', width: 100, padding: '8px 6px', borderRight: `1px solid ${C.borderDk}`, alignItems: 'center' }}>
            <span style={{ fontSize: 10, fontWeight: 700, color: '#FFFFFF' }}>Function</span>
          </div>
          <div style={{ display: 'flex', width: 90, padding: '8px 6px', borderRight: `1px solid ${C.borderDk}`, alignItems: 'center' }}>
            <span style={{ fontSize: 10, fontWeight: 700, color: '#FFFFFF' }}>Decisions</span>
          </div>
          {forms.map((f, i) => (
            <div key={i} style={{ display: 'flex', flex: 1, padding: '8px 6px', borderRight: i < 4 ? `1px solid ${C.borderDk}` : 'none', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: 10, fontWeight: 700, color: '#FFFFFF' }}>{f}</span>
            </div>
          ))}
        </div>
        {functions.map((fn, ri) => (
          <div key={ri} style={{ display: 'flex', borderTop: `1px solid ${C.border}`, backgroundColor: ri % 2 === 0 ? C.fill1 : C.bg }}>
            <div style={{ display: 'flex', width: 100, padding: '10px 6px', borderRight: `1px solid ${C.border}`, alignItems: 'center' }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: C.text }}>{fn.name}</span>
            </div>
            <div style={{ display: 'flex', width: 90, padding: '10px 6px', borderRight: `1px solid ${C.border}`, alignItems: 'center' }}>
              <span style={{ fontSize: 10, color: C.blue, fontWeight: 700 }}>{fn.decisions}</span>
            </div>
            {fn.cells.map((cell, ci) => (
              <div key={ci} style={{ display: 'flex', flex: 1, padding: '10px 6px', borderRight: ci < 4 ? `1px solid ${C.rule}` : 'none', alignItems: 'center' }}>
                <span style={{ fontSize: 10, color: C.muted }}>{cell}</span>
              </div>
            ))}
          </div>
        ))}
      </div>

    </div>
  );
}

/* ════════════════════════════════════════════════════════════════
   FIG 8-7  ABC Classification of Inventory
   ════════════════════════════════════════════════════════════════ */
function Fig8_7() {
  const W = 900, H = 560;
  const classes = [
    { cls: 'A', items: '10-20%', value: '70-80%', approach: 'Tight control, frequent review, exact order quantities, best suppliers, continuous monitoring', color: C.red, bg: C.redBg },
    { cls: 'B', items: '10-20%', value: '10-15%', approach: 'Systematic approach, moderate review frequency, less frequent than A items', color: C.amber, bg: C.amberBg },
    { cls: 'C', items: '70-80%', value: '10-20%', approach: 'Simple controls, stockless buying, procurement cards, blanket orders, infrequent review', color: C.green, bg: C.greenBg },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: W, height: H, backgroundColor: C.bg, padding: '32px 40px', fontFamily: 'Inter, sans-serif' }}>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 18 }}>
        <span style={{ fontSize: 11, color: C.muted, letterSpacing: 1.5, textTransform: 'uppercase' as const }}>Figure 8-7</span>
        <span style={{ fontSize: 20, fontWeight: 700, color: C.text, marginTop: 4 }}>ABC Classification of Inventory</span>
        <span style={{ fontSize: 12, color: C.muted, marginTop: 4 }}>Pareto principle: small % of items drives majority of dollar value</span>
      </div>

      <div style={{ display: 'flex', gap: 16, flex: 1 }}>
        {classes.map((c, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', flex: 1, border: `2px solid ${c.color}`, borderRadius: 8, overflow: 'hidden', backgroundColor: c.bg }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px 16px', gap: 8, flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 48, height: 48, borderRadius: 24, backgroundColor: c.color }}>
                <span style={{ fontSize: 24, fontWeight: 700, color: '#FFFFFF' }}>{c.cls}</span>
              </div>
              <span style={{ fontSize: 13, fontWeight: 700, color: C.text }}>{c.items} of items</span>
              <span style={{ fontSize: 22, fontWeight: 700, color: c.color }}>{c.value} of value</span>
            </div>
            <div style={{ display: 'flex', borderTop: `1px solid ${c.color}`, padding: '12px 16px' }}>
              <span style={{ fontSize: 11, color: C.text }}>{c.approach}</span>
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', marginTop: 16, backgroundColor: C.fill1, border: `1px solid ${C.border}`, borderRadius: 4, padding: '10px 14px' }}>
        <span style={{ fontSize: 11, color: C.text }}>
          Purchase value = unit price x annual volume. A cheap bolt bought in millions can be Class A. An expensive one-off tool can be Class C. Classification is about total dollar impact, not unit cost.
        </span>
      </div>

    </div>
  );
}

/* ── main ── */
async function main() {
  const fonts = await loadFonts();
  console.log('Fonts loaded. Generating Chapter 8 figures...');

  const fig0 = await render(<Fig8_Overview />, 1120, 920, fonts);
  save(fig0, 'fig-8-0-chapter-overview.png');

  const fig1 = await render(<Fig8_1 />, 900, 620, fonts);
  save(fig1, 'fig-8-1-carrying-order-costs.png');

  const fig2 = await render(<Fig8_2 />, 900, 540, fonts);
  save(fig2, 'fig-8-2-fixed-quantity-model.png');

  const fig3 = await render(<Fig8_3 />, 900, 520, fonts);
  save(fig3, 'fig-8-3-buffer-demand-variation.png');

  const fig4 = await render(<Fig8_4 />, 900, 500, fonts);
  save(fig4, 'fig-8-4-buffer-service-coverage.png');

  const fig5 = await render(<Fig8_5 />, 960, 560, fonts);
  save(fig5, 'fig-8-5-price-increase-decision.png');

  const fig6 = await render(<Fig8_6 />, 1100, 780, fonts);
  save(fig6, 'fig-8-6-inventory-forms-function.png');

  const fig7 = await render(<Fig8_7 />, 900, 560, fonts);
  save(fig7, 'fig-8-7-abc-classification.png');

  console.log('Done. 8 figures written to chapters/');
}

main().catch(console.error);
