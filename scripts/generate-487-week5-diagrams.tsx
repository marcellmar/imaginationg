#!/usr/bin/env npx tsx

import React from 'react';

/**
 * SCMG 487 Week 5 Lecture Diagrams
 * Price and Contracts, Strategic Cost Management
 * Academic / book style: white background, minimal color, Inter font
 *
 * Figures:
 *   lectures/fig-w5-0-lecture-overview.png
 *   lectures/fig-w5-1-contracts-discounts.png
 *   lectures/fig-w5-2-strategic-sourcing-matrix.png
 *   lectures/fig-w5-3-negotiation-zopa.png
 *
 * Run from imaginationg-main root:
 *   npx tsx scripts/generate-487-week5-diagrams.tsx
 */

import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import * as fs from 'fs';
import * as path from 'path';

const BASE = path.join(
  '/Users/marsonemac/Documents/projects/marcus-gpi-brain',
  'work-loyola/processed-documents/SCMG-487-purchasing-management/lectures'
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

function save(buf: Buffer, name: string) {
  if (!fs.existsSync(BASE)) fs.mkdirSync(BASE, { recursive: true });
  const p = path.join(BASE, name);
  fs.writeFileSync(p, buf);
  console.log('Saved:', p);
}

/* ── shared helpers ── */

const bullet = (bold: string, sub: string) => (
  <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 2, marginBottom: 10 }}>
    <span style={{ fontSize: 12, fontWeight: 700, color: C.text }}>{'\u203A'} {bold}</span>
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
   FIG W5-0  LECTURE OVERVIEW
   ════════════════════════════════════════════════════════════════ */

function FigW5_Overview() {
  const W = 1120, H = 960;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: W, height: H, backgroundColor: C.bg, padding: '32px 40px', fontFamily: 'Inter, sans-serif' }}>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 18 }}>
        <span style={{ fontSize: 11, color: C.muted, letterSpacing: 1.5, textTransform: 'uppercase' as const }}>Week 5 Lecture Map</span>
        <span style={{ fontSize: 24, fontWeight: 700, color: C.text, marginTop: 4 }}>Price, Contracts, and Strategic Cost Management</span>
        <span style={{ fontSize: 12, color: C.muted, marginTop: 4 }}>Chapters 10 and 11</span>
      </div>

      <div style={{ display: 'flex', border: `1.5px solid ${C.borderDk}`, borderRadius: 6, padding: '10px 20px', marginBottom: 20, backgroundColor: C.fill1 }}>
        <span style={{ fontSize: 12, color: C.text }}>
          Three layers: (1) How prices work and how to analyze them, (2) How contracts structure risk, (3) How to manage costs strategically across the supply chain.
        </span>
      </div>

      {/* Row 1: Price Analysis + Discounts + Cost Components */}
      <div style={{ display: 'flex', gap: 16, flex: 1 }}>
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, border: `1px solid ${C.border}`, borderRadius: 6, overflow: 'hidden' }}>
          {colHeader('PRICING', 'Fair Price and How Prices Are Set')}
          <div style={{ display: 'flex', flexDirection: 'column', padding: '12px 14px', flex: 1 }}>
            {bullet('Fair Price', 'Lowest price ensuring continuous supply from a profitable supplier')}
            {bullet('Cost Approach', 'Price > direct costs + indirect + overhead + profit')}
            {bullet('Market Approach', 'Marketplace sets price, may not relate to cost')}
            {bullet('Psychological', 'Temporary below-market deal. Risk: kill the supplier')}
            {bullet('Three Laws', 'Clayton (discrimination), FTC (unfair practices), Robinson-Patman (same price/qty)')}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, border: `1px solid ${C.border}`, borderRadius: 6, overflow: 'hidden' }}>
          {colHeader('DISCOUNTS', 'Cash, Trade, Quantity, Cumulative')}
          <div style={{ display: 'flex', flexDirection: 'column', padding: '12px 14px', flex: 1 }}>
            {bullet('Cash: 3/10 net 30', '3% for paying 20 days early = 54% annualized. Always take it.')}
            {bullet('Trade', 'Buy direct, skip the middleman. Margin savings.')}
            {bullet('Quantity', 'Volume savings. Must balance vs. holding cost. Check EOQ.')}
            {bullet('Cumulative 10,10,10', 'Sequential: $100 x .90 x .90 x .90 = $72.90 (not $70)')}
            {bullet('EOQ + Discounts', 'Best qty may not be EOQ. Check total cost at each price break.')}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, border: `1px solid ${C.border}`, borderRadius: 6, overflow: 'hidden' }}>
          {colHeader('COST BUILDUP', 'Product Cost Structure')}
          <div style={{ display: 'flex', flexDirection: 'column', padding: '12px 14px', flex: 1 }}>
            {bullet('Direct Materials', '$5,500')}
            {bullet('+ Direct Labor', '$2,000')}
            {bullet('+ Factory Overhead', '$2,500')}
            {bullet('= Mfg Cost', '$10,000')}
            {bullet('+ G&A + Selling', '$1,500 = Total $11,500')}
            {bullet('+ Profit (8%)', '$920 = Selling Price $12,420')}
          </div>
        </div>
      </div>

      {/* Row 2: Contracts + Forward Buying/Hedging + Cost Management */}
      <div style={{ display: 'flex', gap: 16, marginTop: 16, flex: 1 }}>
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, border: `1px solid ${C.border}`, borderRadius: 6, overflow: 'hidden' }}>
          {colHeader('CONTRACTS', 'Four Types + Five Clauses')}
          <div style={{ display: 'flex', flexDirection: 'column', padding: '12px 14px', flex: 1 }}>
            {bullet('FFP', 'Firm Fixed Price. Supplier bears all cost risk.')}
            {bullet('CPFF', 'Cost Plus Fixed Fee. Buyer bears risk. For experimental items.')}
            {bullet('CNF', 'Cost No Fee. Costs only. Subsidiary benefits persuade supplier.')}
            {bullet('CPIF', 'Cost Plus Incentive Fee. Shared risk via formula.')}
            {bullet('Key Clauses', 'Price decline guarantee, protection, escalator, most favored customer, cancelation')}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, border: `1px solid ${C.border}`, borderRadius: 6, overflow: 'hidden' }}>
          {colHeader('HEDGING', 'Forward Buying and Commodity Exchange')}
          <div style={{ display: 'flex', flexDirection: 'column', padding: '12px 14px', flex: 1 }}>
            {bullet('Forward Buy', 'Pay now, deliver later. Known requirements only. NOT speculation.')}
            {bullet('Hedge Mechanism', 'Simultaneous buy/sell in two markets. Loss offsets gain.')}
            {bullet('Wheat Example', 'Cash: buy $4.00, sell $3.85 (loss $0.15). Futures: sell $4.10, buy $3.95 (gain $0.15). Net $0.')}
            {bullet('Coffee Solution', 'Spot $2.50, futures $2.65, forecast $2.80. Hedge saves $300K on 2M lbs.')}
            {bullet('Key Sources', 'BLS (PPI/CPI), CME, Moodys, S&P, PMI')}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, border: `1px solid ${C.border}`, borderRadius: 6, overflow: 'hidden' }}>
          {colHeader('COST MGMT', 'Strategic Tools and Frameworks')}
          <div style={{ display: 'flex', flexDirection: 'column', padding: '12px 14px', flex: 1 }}>
            {bullet('ABC/Pareto', 'A=high spend, B=medium, C=low. Focus attention on A items.')}
            {bullet('Kraljic/SSM', '4 quadrants: Non-critical, Leverage, Bottleneck, Strategic')}
            {bullet('TCO', 'Total Cost of Ownership. Beyond purchase price.')}
            {bullet('Target Costing', 'Cost = Price - Profit. Design to market constraint.')}
            {bullet('Should-Cost', 'Industry benchmarks. What it SHOULD cost.')}
            {bullet('Savings vs Avoidance', 'Savings = actual cut. Avoidance = prevented increase.')}
          </div>
        </div>
      </div>

      {/* GPI overlays */}
      <div style={{ display: 'flex', gap: 12, marginTop: 16 }}>
        <div style={{ display: 'flex', flex: 1, backgroundColor: C.blueBg, border: `1px solid ${C.blue}`, borderRadius: 4, padding: '8px 12px' }}>
          <span style={{ fontSize: 11, color: C.blue }}>GPI: Decision Latency = cash discount (54% annualized) is a DL test. Orgs that can't approve in 10 days leave money on the table.</span>
        </div>
        <div style={{ display: 'flex', flex: 1, backgroundColor: C.redBg, border: `1px solid ${C.red}`, borderRadius: 4, padding: '8px 12px' }}>
          <span style={{ fontSize: 11, color: C.red }}>GPI: Structural Lock-In = contract type reveals lock-in. FFP = supplier locked. CPFF = buyer locked. Bottleneck quadrant = max lock-in.</span>
        </div>
        <div style={{ display: 'flex', flex: 1, backgroundColor: C.greenBg, border: `1px solid ${C.green}`, borderRadius: 4, padding: '8px 12px' }}>
          <span style={{ fontSize: 11, color: C.green }}>GPI: Error Correction = hedging is error correction for price risk. Offsetting positions contain the damage.</span>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 14 }}>
        <span style={{ fontSize: 10, color: C.light }}>SCMG 487 | Week 5 | Price, Contracts, Strategic Cost Management</span>
      </div>
    </div>
  );
}


/* ════════════════════════════════════════════════════════════════
   FIG W5-1  CONTRACT TYPES + DISCOUNT MATH
   ════════════════════════════════════════════════════════════════ */

function FigW5_1() {
  const W = 1060, H = 640;
  const contracts = [
    { type: 'FFP', full: 'Firm Fixed Price', risk: 'Supplier', when: 'Known specs, stable costs', color: C.blue },
    { type: 'CPFF', full: 'Cost + Fixed Fee', risk: 'Buyer', when: 'Experimental, specs not firm', color: C.red },
    { type: 'CNF', full: 'Cost No Fee', risk: 'Buyer', when: 'Subsidiary benefits persuade supplier', color: C.amber },
    { type: 'CPIF', full: 'Cost + Incentive Fee', risk: 'Shared', when: 'Target cost agreed, over/underruns split', color: C.green },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: W, height: H, backgroundColor: C.bg, padding: '32px 40px', fontFamily: 'Inter, sans-serif' }}>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 16 }}>
        <span style={{ fontSize: 11, color: C.muted, letterSpacing: 1.5, textTransform: 'uppercase' as const }}>Figure W5-1</span>
        <span style={{ fontSize: 20, fontWeight: 700, color: C.text, marginTop: 4 }}>Contract Pricing Types and Discount Math</span>
      </div>

      {/* Contract types table */}
      <div style={{ display: 'flex', flexDirection: 'column', border: `1px solid ${C.border}`, borderRadius: 6, overflow: 'hidden', marginBottom: 16 }}>
        <div style={{ display: 'flex', backgroundColor: C.accent }}>
          {['Type', 'Full Name', 'Risk Bearer', 'When to Use'].map((h, i) => (
            <div key={i} style={{ display: 'flex', flex: i === 0 ? '0 0 80px' : (i === 3 ? 2 : 1), padding: '8px 12px' }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: '#FFFFFF' }}>{h}</span>
            </div>
          ))}
        </div>
        {contracts.map((c, i) => (
          <div key={i} style={{ display: 'flex', borderBottom: `1px solid ${C.rule}`, backgroundColor: i % 2 === 0 ? C.bg : C.fill1 }}>
            <div style={{ display: 'flex', flex: '0 0 80px', padding: '8px 12px', alignItems: 'center' }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: c.color }}>{c.type}</span>
            </div>
            <div style={{ display: 'flex', flex: 1, padding: '8px 12px', alignItems: 'center' }}>
              <span style={{ fontSize: 11, color: C.text }}>{c.full}</span>
            </div>
            <div style={{ display: 'flex', flex: 1, padding: '8px 12px', alignItems: 'center' }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: c.risk === 'Supplier' ? C.blue : (c.risk === 'Shared' ? C.green : C.red) }}>{c.risk}</span>
            </div>
            <div style={{ display: 'flex', flex: 2, padding: '8px 12px', alignItems: 'center' }}>
              <span style={{ fontSize: 11, color: C.muted }}>{c.when}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Discount math boxes */}
      <div style={{ display: 'flex', gap: 16, flex: 1 }}>
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, border: `2px solid ${C.blue}`, borderRadius: 8, overflow: 'hidden' }}>
          <div style={{ display: 'flex', backgroundColor: C.blue, padding: '10px 14px', justifyContent: 'center' }}>
            <span style={{ fontSize: 14, fontWeight: 700, color: '#FFFFFF' }}>Cash Discount: 3/10 net 30</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', padding: '14px 16px', flex: 1, backgroundColor: C.blueBg }}>
            <span style={{ fontSize: 11, color: C.text, marginBottom: 6 }}>3% off if paid within 10 days (vs 30)</span>
            <span style={{ fontSize: 11, color: C.text, marginBottom: 6 }}>Saves 20 days of float</span>
            <span style={{ fontSize: 11, color: C.text, marginBottom: 6 }}>365 / 20 = 18.25 periods/year</span>
            <span style={{ fontSize: 18, fontWeight: 700, color: C.blue, marginTop: 4 }}>3% x 18 = 54% annualized</span>
            <span style={{ fontSize: 11, fontWeight: 700, color: C.text, marginTop: 8 }}>ALWAYS take the discount.</span>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, border: `2px solid ${C.amber}`, borderRadius: 8, overflow: 'hidden' }}>
          <div style={{ display: 'flex', backgroundColor: C.amber, padding: '10px 14px', justifyContent: 'center' }}>
            <span style={{ fontSize: 14, fontWeight: 700, color: '#FFFFFF' }}>Cumulative: 10, 10, 10</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', padding: '14px 16px', flex: 1, backgroundColor: C.amberBg }}>
            <span style={{ fontSize: 11, color: C.text, marginBottom: 6 }}>Sequential discounts MULTIPLY</span>
            <span style={{ fontSize: 11, color: C.text, marginBottom: 6 }}>$100 x 0.90 = $90.00</span>
            <span style={{ fontSize: 11, color: C.text, marginBottom: 6 }}>$90 x 0.90 = $81.00</span>
            <span style={{ fontSize: 11, color: C.text, marginBottom: 6 }}>$81 x 0.90 = $72.90</span>
            <span style={{ fontSize: 18, fontWeight: 700, color: C.amber, marginTop: 4 }}>27.1% total (NOT 30%)</span>
            <span style={{ fontSize: 11, fontWeight: 700, color: C.text, marginTop: 8 }}>Never add sequential discounts.</span>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, border: `2px solid ${C.green}`, borderRadius: 8, overflow: 'hidden' }}>
          <div style={{ display: 'flex', backgroundColor: C.green, padding: '10px 14px', justifyContent: 'center' }}>
            <span style={{ fontSize: 14, fontWeight: 700, color: '#FFFFFF' }}>Cost Savings vs Avoidance</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', padding: '14px 16px', flex: 1, backgroundColor: C.greenBg }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: C.text, marginBottom: 8 }}>Cost Avoidance:</span>
            <span style={{ fontSize: 11, color: C.text, marginBottom: 4 }}>(new price - current price) x volume</span>
            <span style={{ fontSize: 10, color: C.muted, marginBottom: 12 }}>Prevented an increase. Defensive.</span>
            <span style={{ fontSize: 11, fontWeight: 700, color: C.text, marginBottom: 8 }}>Cost Savings:</span>
            <span style={{ fontSize: 11, color: C.text, marginBottom: 4 }}>(new$)(new qty) - (old$)(old qty)</span>
            <span style={{ fontSize: 10, color: C.muted }}>Actual spend reduction. Offensive.</span>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 14 }}>
        <span style={{ fontSize: 10, color: C.light }}>SCMG 487 | Week 5 | Price, Contracts, Strategic Cost Management</span>
      </div>
    </div>
  );
}


/* ════════════════════════════════════════════════════════════════
   FIG W5-2  STRATEGIC SOURCING MATRIX (KRALJIC)
   ════════════════════════════════════════════════════════════════ */

function FigW5_2() {
  const W = 1060, H = 680;

  const quadrant = (name: string, goal: string, color: string, bg: string, examples: string, strategies: string[]) => (
    <div style={{ display: 'flex', flexDirection: 'column' as const, flex: 1, border: `2px solid ${color}`, borderRadius: 8, overflow: 'hidden' }}>
      <div style={{ display: 'flex', flexDirection: 'column' as const, backgroundColor: color, padding: '10px 14px' }}>
        <span style={{ fontSize: 15, fontWeight: 700, color: '#FFFFFF' }}>{name}</span>
        <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.85)', marginTop: 2 }}>Goal: {goal}</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' as const, padding: '12px 14px', flex: 1, backgroundColor: bg }}>
        <span style={{ fontSize: 10, fontWeight: 700, color: C.muted, marginBottom: 8 }}>Example: {examples}</span>
        {strategies.map((s, i) => (
          <span key={i} style={{ fontSize: 11, color: C.text, marginBottom: 5 }}>{'\u2022'} {s}</span>
        ))}
      </div>
    </div>
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: W, height: H, backgroundColor: C.bg, padding: '32px 40px', fontFamily: 'Inter, sans-serif' }}>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 16 }}>
        <span style={{ fontSize: 11, color: C.muted, letterSpacing: 1.5, textTransform: 'uppercase' as const }}>Figure W5-2</span>
        <span style={{ fontSize: 20, fontWeight: 700, color: C.text, marginTop: 4 }}>Strategic Sourcing Matrix (Kraljic)</span>
        <span style={{ fontSize: 12, color: C.muted, marginTop: 4 }}>X-axis: Spend/Business Impact (low to high) | Y-axis: Supply Risk (low to high)</span>
      </div>

      {/* Axis labels */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 6 }}>
        <span style={{ fontSize: 10, fontWeight: 700, color: C.red, letterSpacing: 1 }}>HIGH SUPPLY RISK</span>
      </div>

      {/* Top row: Bottleneck + Strategic */}
      <div style={{ display: 'flex', gap: 16, flex: 1 }}>
        {quadrant('BOTTLENECK', 'Supply Security', C.amber, C.amberBg, 'Specialized chips, rare materials',
          ['Join purchasing consortiums', 'Collaborative partnerships', 'Seek alternatives/standardization', 'Manage scarcity proactively']
        )}
        {quadrant('STRATEGIC', 'Preferred Customer', C.red, C.redBg, 'Custom tech, key raw materials',
          ['Long-term partnerships', 'Senior-level relationship mgmt', 'Joint innovation', 'Strategic alliance', 'Win-win mutual profitability']
        )}
      </div>

      {/* Bottom row: Non-Critical + Leverage */}
      <div style={{ display: 'flex', gap: 16, marginTop: 16, flex: 1 }}>
        {quadrant('NON-CRITICAL', 'Efficiency', C.teal, C.tealBg, 'Office supplies, paper clips',
          ['Web catalogs, reverse auctions', 'Online spot buying', 'Framework agreements', 'Vendor-managed inventory (VMI)', 'Minimize admin time and cost']
        )}
        {quadrant('LEVERAGE', 'Cost Reduction', C.blue, C.blueBg, 'Plastic bottles (PepsiCo)',
          ['Spend analysis + rationalization', 'Volume consolidation', 'Competitive bidding', 'Global sourcing', 'Fewer suppliers, bigger contracts']
        )}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 6 }}>
        <span style={{ fontSize: 10, fontWeight: 700, color: C.green, letterSpacing: 1 }}>LOW SUPPLY RISK</span>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 4, padding: '0 4px' }}>
        <span style={{ fontSize: 10, fontWeight: 700, color: C.light }}>LOW SPEND/IMPACT</span>
        <span style={{ fontSize: 10, fontWeight: 700, color: C.light }}>HIGH SPEND/IMPACT</span>
      </div>

      <div style={{ display: 'flex', backgroundColor: C.fill1, border: `1px solid ${C.border}`, borderRadius: 4, padding: '8px 16px', marginTop: 10 }}>
        <span style={{ fontSize: 11, color: C.text }}>
          <span style={{ fontWeight: 700 }}>Exam key:</span> Non-critical = efficiency. Leverage = cost reduction. Bottleneck = supply security. Strategic = become preferred customer. Each quadrant has a different strategy because the power dynamics are different.
        </span>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 10 }}>
        <span style={{ fontSize: 10, color: C.light }}>SCMG 487 | Week 5 | Price, Contracts, Strategic Cost Management</span>
      </div>
    </div>
  );
}


/* ════════════════════════════════════════════════════════════════
   FIG W5-3  NEGOTIATION FRAMEWORK + ZOPA
   ════════════════════════════════════════════════════════════════ */

function FigW5_3() {
  const W = 1060, H = 700;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: W, height: H, backgroundColor: C.bg, padding: '32px 40px', fontFamily: 'Inter, sans-serif' }}>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 16 }}>
        <span style={{ fontSize: 11, color: C.muted, letterSpacing: 1.5, textTransform: 'uppercase' as const }}>Figure W5-3</span>
        <span style={{ fontSize: 20, fontWeight: 700, color: C.text, marginTop: 4 }}>Negotiation Framework and ZOPA</span>
        <span style={{ fontSize: 13, fontWeight: 700, color: C.red, marginTop: 6 }}>"Outcome is determined BEFORE negotiation starts"</span>
      </div>

      <div style={{ display: 'flex', gap: 16, flex: 1 }}>
        {/* Left: Two types */}
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, gap: 12 }}>
          <div style={{ display: 'flex', flexDirection: 'column', border: `2px solid ${C.red}`, borderRadius: 8, overflow: 'hidden', flex: 1 }}>
            <div style={{ display: 'flex', backgroundColor: C.red, padding: '10px 14px', justifyContent: 'center' }}>
              <span style={{ fontSize: 14, fontWeight: 700, color: '#FFFFFF' }}>DISTRIBUTIVE (Win-Lose)</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', padding: '14px 16px', flex: 1, backgroundColor: C.redBg }}>
              {bullet('Focus', 'Divide fixed value. Price-focused.')}
              {bullet('Mindset', 'Your gain is my loss. Zero-sum.')}
              {bullet('Tactic', 'Anchor high, concede slowly.')}
              {bullet('Risk', 'Damages relationship. Short-term.')}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', border: `2px solid ${C.green}`, borderRadius: 8, overflow: 'hidden', flex: 1 }}>
            <div style={{ display: 'flex', backgroundColor: C.green, padding: '10px 14px', justifyContent: 'center' }}>
              <span style={{ fontSize: 14, fontWeight: 700, color: '#FFFFFF' }}>INTEGRATIVE (Win-Win)</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', padding: '14px 16px', flex: 1, backgroundColor: C.greenBg }}>
              {bullet('Focus', 'Expand value BEFORE dividing.')}
              {bullet('Mindset', 'Find mutual gains. Grow the pie.')}
              {bullet('Tactic', 'Trade across issues. Quid pro quo.')}
              {bullet('Note', 'Most real negotiations include both types.')}
            </div>
          </div>
        </div>

        {/* Middle: ZOPA diagram */}
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, border: `1px solid ${C.border}`, borderRadius: 6, overflow: 'hidden' }}>
          {colHeader('ZOPA', 'Zone of Possible Agreement')}
          <div style={{ display: 'flex', flexDirection: 'column', padding: '16px 16px', flex: 1 }}>
            {/* ZOPA visual */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: 10, fontWeight: 700, color: C.blue, width: 85 }}>Seller Min</span>
                <div style={{ display: 'flex', flex: 1, height: 24, backgroundColor: C.fill2, borderRadius: 4, position: 'relative' as const }}>
                  <div style={{ display: 'flex', position: 'absolute' as const, left: '20%', right: '25%', top: 0, bottom: 0, backgroundColor: C.greenBg, border: `2px solid ${C.green}`, borderRadius: 4, justifyContent: 'center', alignItems: 'center' }}>
                    <span style={{ fontSize: 11, fontWeight: 700, color: C.green }}>ZOPA</span>
                  </div>
                </div>
                <span style={{ fontSize: 10, fontWeight: 700, color: C.red, width: 85, textAlign: 'right' as const }}>Buyer Max</span>
              </div>
              <span style={{ fontSize: 10, color: C.muted, textAlign: 'center' as const }}>Exists when Buyer Max {'\u2265'} Seller Min. No overlap = no deal.</span>
            </div>

            {bullet('Buyer Surplus', 'Value below buyer max. What buyer saves.')}
            {bullet('Seller Surplus', 'Value above seller min. What seller earns.')}
            {bullet('Negotiation', 'How the surplus gets split.')}
            {bullet('Key Question', 'If buyer doesn\'t know seller\'s cost... where is the ZOPA?')}

            <div style={{ display: 'flex', backgroundColor: C.amberBg, border: `1px solid ${C.amber}`, borderRadius: 4, padding: '8px 10px', marginTop: 8 }}>
              <span style={{ fontSize: 10, color: C.amber, fontWeight: 700 }}>Answer: you don't know. Cost analysis before negotiation matters.</span>
            </div>
          </div>
        </div>

        {/* Right: Preparation checklist */}
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, border: `1px solid ${C.border}`, borderRadius: 6, overflow: 'hidden' }}>
          {colHeader('PREPARATION', 'Before, During, and Drivers')}
          <div style={{ display: 'flex', flexDirection: 'column', padding: '14px 14px', flex: 1 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: C.blue, marginBottom: 8 }}>BEFORE (determines outcome)</span>
            {bullet('Define', 'Target price, walk-away point, BATNA')}
            {bullet('Opening', 'Aggressive but credible')}
            {bullet('Concessions', 'Gradual. Trade, don\'t give.')}
            {bullet('Analyze', 'Supplier costs, market, competitive bids')}

            <span style={{ fontSize: 11, fontWeight: 700, color: C.green, marginBottom: 8, marginTop: 8 }}>DURING</span>
            {bullet('Listen', 'More than you talk.')}
            {bullet('Control', 'Pace. Don\'t rush.')}
            {bullet('Emotion', 'Avoid reactions.')}

            <span style={{ fontSize: 11, fontWeight: 700, color: C.purple, marginBottom: 8, marginTop: 8 }}>OUTCOME DRIVERS</span>
            <span style={{ fontSize: 10, color: C.muted, marginBottom: 4 }}>Economic: cost structures, BATNA, supply/demand</span>
            <span style={{ fontSize: 10, color: C.muted }}>Psychological: anchoring, fairness, time pressure, behavior</span>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', backgroundColor: C.fill1, border: `1px solid ${C.border}`, borderRadius: 4, padding: '8px 16px', marginTop: 14 }}>
        <span style={{ fontSize: 11, color: C.text }}>
          <span style={{ fontWeight: 700 }}>Concessions signal information.</span> Every time you give something up, the other side learns about your position. Trade, don't give. Best negotiators manage BOTH numbers and behavior.
        </span>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 10 }}>
        <span style={{ fontSize: 10, color: C.light }}>SCMG 487 | Week 5 | Price, Contracts, Strategic Cost Management</span>
      </div>
    </div>
  );
}


/* ── main ── */
async function main() {
  const fonts = await loadFonts();
  console.log('Fonts loaded. Generating Week 5 lecture figures...');

  const fig0 = await render(<FigW5_Overview />, 1120, 960, fonts);
  save(fig0, 'fig-w5-0-lecture-overview.png');

  const fig1 = await render(<FigW5_1 />, 1060, 640, fonts);
  save(fig1, 'fig-w5-1-contracts-discounts.png');

  const fig2 = await render(<FigW5_2 />, 1060, 680, fonts);
  save(fig2, 'fig-w5-2-strategic-sourcing-matrix.png');

  const fig3 = await render(<FigW5_3 />, 1060, 700, fonts);
  save(fig3, 'fig-w5-3-negotiation-zopa.png');

  console.log('Done. 4 figures written for Week 5.');
}

main().catch(console.error);
