#!/usr/bin/env npx tsx

import React from 'react';

/**
 * SCMG 487 Chapter 2 & 3 Diagrams
 * Academic / book style: white background, minimal color, Inter font
 *
 * Chapter 2 (Supply Strategy):
 *   fig-2-0-chapter-overview.png
 *   fig-2-1-supply-strategy-alignment.png
 *   fig-2-2-current-future-needs-markets.png
 *   fig-2-3-strategic-supply-planning-process.png
 *   fig-2-4-supply-strategy-questions.png
 *
 * Chapter 3 (Supply Organization):
 *   fig-3-0-chapter-overview.png
 *   fig-3-1-medium-org-structure.png
 *   fig-3-2-hybrid-structure.png
 *   fig-3-3-commodity-specialist-jd.png
 *   fig-3-4-supply-planner-jd.png
 *
 * Run from imaginationg-main root:
 *   npx tsx scripts/generate-487-ch2-ch3-diagrams.tsx
 */

import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import * as fs from 'fs';
import * as path from 'path';

const OUT = path.join(
  '/Users/marcellmar/Documents/projects/marcus-gpi-brain',
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
// FIGURE 2-0: Chapter 2 Overview
// ============================================================

function Fig2_Overview() {
  const W = 1120, H = 840;

  const colHeader = (label: string, figRef: string): any => ({
    display: 'flex',
    flexDirection: 'column' as const,
    backgroundColor: C.accent,
    padding: '10px 16px',
    borderRadius: '6px 6px 0 0',
  });

  const bullet = (bold: string, sub: string) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 2, marginBottom: 10 }}>
      <span style={{ fontSize: 12, fontWeight: 700, color: C.text }}>› {bold}</span>
      <span style={{ fontSize: 11, color: C.muted, paddingLeft: 12 }}>{sub}</span>
    </div>
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: W, height: H, backgroundColor: C.bg, padding: '32px 40px', fontFamily: 'Inter, sans-serif' }}>

      {/* Title bar */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 20 }}>
        <span style={{ fontSize: 11, color: C.muted, letterSpacing: 1.5, textTransform: 'uppercase' as const }}>Chapter 2 Concept Map</span>
        <span style={{ fontSize: 24, fontWeight: 700, color: C.text, marginTop: 4 }}>Supply Strategy</span>
      </div>

      {/* Thesis bar */}
      <div style={{ display: 'flex', border: `1.5px solid ${C.borderDk}`, borderRadius: 6, padding: '10px 20px', marginBottom: 22, backgroundColor: C.fill1 }}>
        <span style={{ fontSize: 12, color: C.text, fontStyle: 'italic' as const }}>
          "A strategy is an action plan designed to achieve specific long-term goals. Supply strategy links the firm to the competitive environment — it must flow both to AND from organizational strategy."
        </span>
      </div>

      {/* Three columns */}
      <div style={{ display: 'flex', gap: 16, flex: 1 }}>

        {/* Col 1: Strategic Planning */}
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, border: `1px solid ${C.border}`, borderRadius: 6, overflow: 'hidden' }}>
          <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: C.accent, padding: '8px 14px' }}>
            <span style={{ fontSize: 10, color: '#AAAAAA', letterSpacing: 1 }}>FIGS 2-1 · 2-2 · 2-3</span>
            <span style={{ fontSize: 13, fontWeight: 700, color: '#FFFFFF' }}>Strategic Planning</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', padding: '14px 14px', flex: 1 }}>
            {bullet('3 Levels', 'Corporate (what business?) → Business Unit → Function (supply)')}
            {bullet('3 Challenges', 'Interpretation · Action Plan · Feedback (Topeka case)')}
            {bullet('Fig 2-1: Alignment', 'Supply objectives ↔ Org objectives (double arrows both ways)')}
            {bullet('Fig 2-2: Markets', 'Current needs/markets ↔ Future needs/markets')}
            {bullet('Fig 2-3: 8-Step Cycle', 'Restate org goals → supply objectives → alternatives → strategy → implement → evaluate → repeat')}
            {bullet('Forward-looking', 'Anticipate social, economic, political, legal, technological change')}
          </div>
        </div>

        {/* Col 2: Substrategies & Risk */}
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, border: `1px solid ${C.border}`, borderRadius: 6, overflow: 'hidden' }}>
          <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: C.accent, padding: '8px 14px' }}>
            <span style={{ fontSize: 10, color: '#AAAAAA', letterSpacing: 1 }}>RISK MANAGEMENT</span>
            <span style={{ fontSize: 13, fontWeight: 700, color: '#FFFFFF' }}>6 Substrategies + 3 Risk Types</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', padding: '14px 14px', flex: 1 }}>
            {bullet('1. Assurance-of-supply', 'Ensure future supply — quality, quantity, continuity')}
            {bullet('2. Cost-reduction', 'Laid-down cost / total lifecycle cost')}
            {bullet('3. Supply chain support', 'Knowledge and capabilities of SC members available')}
            {bullet('4. Competitive environment', 'Anticipate economic, legal, tech shifts')}
            {bullet('5. Competitive advantage', 'Exploit market opportunities')}
            {bullet('6. Risk management', 'Explicitly covers risk aspects of all five above')}
            <div style={{ display: 'flex', height: 1, backgroundColor: C.rule, marginBottom: 10 }} />
            {bullet('Operational risk', 'Supply disruption (Suman: barac shortage)')}
            {bullet('Financial risk', 'Price changes, FX, tariffs (steel, lumber)')}
            {bullet('Reputational risk', 'Supplier behavior (Walmart: 14,300+ audits/yr)')}
          </div>
        </div>

        {/* Col 3: Strategic Components (Fig 2-4) */}
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, border: `1px solid ${C.border}`, borderRadius: 6, overflow: 'hidden' }}>
          <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: C.accent, padding: '8px 14px' }}>
            <span style={{ fontSize: 10, color: '#AAAAAA', letterSpacing: 1 }}>FIG 2-4 · 9 COMPONENTS</span>
            <span style={{ fontSize: 13, fontWeight: 700, color: '#FFFFFF' }}>Strategic Questions</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', padding: '14px 14px', flex: 1 }}>
            {bullet('1. What?', 'Make or buy / standard vs. custom')}
            {bullet('2. Quality?', 'ZD programs, process control, certification')}
            {bullet('3. How much?', 'JIT, consignment, systems contracting (Walmart/Zara)')}
            {bullet('4. Who?', 'Centralize vs. decentralize supply function')}
            {bullet('5. When?', 'Forward buying, hedging, commodity futures')}
            {bullet('6. What price?', 'Target cost, market, cost-plus, competitive bid')}
            {bullet('7. Where?', 'Single vs. multiple source, local vs. global')}
            {bullet('8. How?', 'Bidding, negotiation, long-term agreement, e-procurement')}
            {bullet('9. Why?', 'Alignment check — does strategy match org objectives?')}
          </div>
        </div>

      </div>

      {/* Bottom band: key exam terms */}
      <div style={{ display: 'flex', gap: 10, marginTop: 16 }}>
        {[
          'Target costing',
          'Forward buying',
          'Consignment buying',
          'Systems contracting',
          'Zero-defect (ZD)',
          'CRO / enterprise risk',
          'Gartner SCM leaders: Amazon · Apple · P&G · McDonald\'s',
        ].map((t, i) => (
          <div key={i} style={{ display: 'flex', backgroundColor: C.fill2, border: `1px solid ${C.border}`, borderRadius: 4, padding: '4px 10px' }}>
            <span style={{ fontSize: 10, color: C.muted }}>{t}</span>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 12 }}>
        <span style={{ fontSize: 11, color: C.light }}>SCMG 487 | Chapter 2 | Supply Strategy</span>
      </div>

    </div>
  );
}

// ============================================================
// FIGURE 2-1: Supply Strategy Alignment (4-box)
// ============================================================

function Fig2_1() {
  const W = 720, H = 480;

  const box = (title: string, sub: string, dark?: boolean): any => (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      flex: 1, border: `1.5px solid ${dark ? C.borderDk : C.border}`,
      borderRadius: 8, padding: '20px 24px', backgroundColor: dark ? C.fill2 : C.fill1,
      minHeight: 100,
    }}>
      <span style={{ fontSize: 16, fontWeight: 700, color: C.text, textAlign: 'center' as const }}>{title}</span>
      <span style={{ fontSize: 12, color: C.muted, marginTop: 6, textAlign: 'center' as const }}>{sub}</span>
    </div>
  );

  const arrow = (horizontal?: boolean) => (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      width: horizontal ? 48 : 40, height: horizontal ? 40 : 48,
    }}>
      <span style={{ fontSize: 22, color: C.borderDk }}>{horizontal ? '↔' : '↕'}</span>
    </div>
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: W, height: H, backgroundColor: C.bg, padding: '40px 48px', fontFamily: 'Inter, sans-serif' }}>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 28 }}>
        <span style={{ fontSize: 11, color: C.muted, letterSpacing: 1.5, textTransform: 'uppercase' as const }}>Figure 2-1</span>
        <span style={{ fontSize: 20, fontWeight: 700, color: C.text, marginTop: 4 }}>Supply Strategy Congruent with Organizational Strategy</span>
        <span style={{ fontSize: 12, color: C.muted, marginTop: 6 }}>Double arrows: the relationship runs both ways — not a one-way directive</span>
      </div>

      {/* Row 1: objectives */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 0, marginBottom: 0 }}>
        {box('Supply Objectives', 'Quality · Cost · Delivery · Risk', true)}
        {arrow(true)}
        {box('Organizational Objectives', 'Growth · Profitability · Sustainability', true)}
      </div>

      {/* Vertical arrows row */}
      <div style={{ display: 'flex', gap: 0 }}>
        <div style={{ display: 'flex', flex: 1, justifyContent: 'center' }}>{arrow()}</div>
        <div style={{ display: 'flex', width: 48 }} />
        <div style={{ display: 'flex', flex: 1, justifyContent: 'center' }}>{arrow()}</div>
      </div>

      {/* Row 2: strategies */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
        {box('Supply Strategy', 'Make/buy · Source · Price · Risk plan')}
        {arrow(true)}
        {box('Organizational Strategy', 'Competitive position · Resource allocation')}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
        <span style={{ fontSize: 11, color: C.light }}>SCMG 487 | Chapter 2 | Supply Strategy</span>
      </div>

    </div>
  );
}

// ============================================================
// FIGURE 2-2: Current/Future Needs × Markets
// ============================================================

function Fig2_2() {
  const W = 720, H = 480;

  const box = (title: string, sub: string, accent?: boolean): any => (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      flex: 1, border: `1.5px solid ${accent ? C.borderDk : C.border}`,
      borderRadius: 8, padding: '20px 24px', backgroundColor: accent ? C.fill2 : C.fill1,
      minHeight: 100,
    }}>
      <span style={{ fontSize: 15, fontWeight: 700, color: C.text, textAlign: 'center' as const }}>{title}</span>
      <span style={{ fontSize: 11, color: C.muted, marginTop: 6, textAlign: 'center' as const }}>{sub}</span>
    </div>
  );

  const arrow = (horizontal?: boolean) => (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: horizontal ? 48 : 40, height: horizontal ? 40 : 48 }}>
      <span style={{ fontSize: 22, color: C.borderDk }}>{horizontal ? '↔' : '↕'}</span>
    </div>
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: W, height: H, backgroundColor: C.bg, padding: '40px 48px', fontFamily: 'Inter, sans-serif' }}>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 28 }}>
        <span style={{ fontSize: 11, color: C.muted, letterSpacing: 1.5, textTransform: 'uppercase' as const }}>Figure 2-2</span>
        <span style={{ fontSize: 20, fontWeight: 700, color: C.text, marginTop: 4 }}>Supply Strategy Links Markets to Needs</span>
        <span style={{ fontSize: 12, color: C.muted, marginTop: 6 }}>Effective supply strategy addresses all four quadrants simultaneously</span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 0, marginBottom: 0 }}>
        {box('Current Needs', 'Today\'s specs, volumes, quality requirements', true)}
        {arrow(true)}
        {box('Future Needs', 'Anticipated demand, new products, tech changes', true)}
      </div>

      <div style={{ display: 'flex', gap: 0 }}>
        <div style={{ display: 'flex', flex: 1, justifyContent: 'center' }}>{arrow()}</div>
        <div style={{ display: 'flex', width: 48 }} />
        <div style={{ display: 'flex', flex: 1, justifyContent: 'center' }}>{arrow()}</div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
        {box('Current Markets', 'Known suppliers, existing contracts, current prices')}
        {arrow(true)}
        {box('Future Markets', 'Emerging suppliers, substitutes, global sources')}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20, flexDirection: 'column', alignItems: 'center', gap: 4 }}>
        <span style={{ fontSize: 11, color: C.muted }}>Example: Suman Corp — current barac markets about to be disrupted by substitute. Future needs and future markets must be addressed NOW.</span>
        <span style={{ fontSize: 11, color: C.light }}>SCMG 487 | Chapter 2 | Supply Strategy</span>
      </div>

    </div>
  );
}

// ============================================================
// FIGURE 2-3: 8-Step Strategic Supply Planning Process
// ============================================================

function Fig2_3() {
  const W = 740, H = 820;

  const steps = [
    { n: '1', title: 'Restate Organizational Goals', sub: 'Survival · growth · financial · sustainability' },
    { n: '2', title: 'Determine Supply Objectives', sub: 'Translate org goals → supply language (quality, delivery, cost, risk)' },
    { n: '3', title: 'Isolate Affecting Factors', sub: 'Market conditions, supplier capabilities, internal constraints' },
    { n: '4', title: 'Identify & Analyze Alternatives', sub: 'Single source vs. dual · make vs. buy · long-term vs. spot' },
    { n: '5', title: 'Determine Supply Strategy', sub: 'Select best alternative across 6 substrategy categories' },
    { n: '6', title: 'Review Implementation Factors', sub: 'Capabilities, budget, change management, stakeholder buy-in' },
    { n: '7', title: 'Gain Commitment & Implement', sub: 'Cross-functional teams, supplier agreements, rollout' },
    { n: '8', title: 'Evaluate', sub: 'Measure results vs. objectives → feeds back to Step 1' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: W, height: H, backgroundColor: C.bg, padding: '36px 44px', fontFamily: 'Inter, sans-serif' }}>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 24 }}>
        <span style={{ fontSize: 11, color: C.muted, letterSpacing: 1.5, textTransform: 'uppercase' as const }}>Figure 2-3</span>
        <span style={{ fontSize: 20, fontWeight: 700, color: C.text, marginTop: 4 }}>Strategic Supply Planning Process</span>
        <span style={{ fontSize: 12, color: C.muted, marginTop: 6 }}>Eight-step cycle — focuses on long-run opportunities, not just immediate problems</span>
      </div>

      {/* Steps */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 0, flex: 1 }}>
        {steps.map((s, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 16,
              border: `1.5px solid ${C.border}`, borderRadius: 6,
              padding: '12px 16px',
              backgroundColor: i === 0 || i === 7 ? C.fill2 : C.bg,
            }}>
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: 32, height: 32, borderRadius: 16,
                backgroundColor: C.accent, flexShrink: 0,
              }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: '#FFFFFF' }}>{s.n}</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                <span style={{ fontSize: 14, fontWeight: 700, color: C.text }}>{s.title}</span>
                <span style={{ fontSize: 11, color: C.muted, marginTop: 2 }}>{s.sub}</span>
              </div>
            </div>
            {i < steps.length - 1 && (
              <div style={{ display: 'flex', justifyContent: 'center', padding: '2px 0' }}>
                <span style={{ fontSize: 16, color: C.borderDk }}>↓</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Loop back arrow label */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 12, gap: 8, alignItems: 'center' }}>
        <span style={{ fontSize: 12, color: C.muted, fontStyle: 'italic' as const }}>↺  Step 8 feeds back into Step 1 — continuous cycle</span>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 10 }}>
        <span style={{ fontSize: 11, color: C.light }}>SCMG 487 | Chapter 2 | Supply Strategy</span>
      </div>

    </div>
  );
}

// ============================================================
// FIGURE 2-4: 9 Strategic Supply Components
// ============================================================

function Fig2_4() {
  const W = 920, H = 860;

  const rows = [
    { q: '1. What?', decision: 'Make or Buy / Insource or Outsource', options: 'Standard items (available, no edge) vs. Custom/special (not available, potential edge)' },
    { q: '2. Quality?', decision: 'Spec level + supplier quality programs', options: 'Zero-defect (ZD) · Process control charts · Quality certification (eliminates incoming inspection)' },
    { q: '3. How Much?', decision: 'Order quantity / inventory policy', options: 'JIT delivery · Consignment buying · Systems contracting (shared safety stock, Walmart/Zara)' },
    { q: '4. Who?', decision: 'Centralize or decentralize supply?', options: 'Central authority · Decentralized BUs · Hybrid (center-led) · Cross-functional teams' },
    { q: '5. When?', decision: 'Timing of purchases', options: 'Spot market · Forward buying · Futures hedging (commodity exchanges, Ch 10)' },
    { q: '6. What Price?', decision: 'Pricing strategy', options: 'Target cost · Market price · Cost-plus · Competitive bidding · Negotiated price' },
    { q: '7. Where?', decision: 'Source selection / geography', options: 'Single source · Multiple sources · Local vs. global · Sole source (supplier\'s choice)' },
    { q: '8. How?', decision: 'Acquisition method', options: 'Competitive bid · Negotiation · Long-term agreement · E-procurement · Purchasing card' },
    { q: '9. Why?', decision: 'Alignment check', options: 'Does the supply strategy actually support organizational objectives? Feedback loop to corporate strategy.' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: W, height: H, backgroundColor: C.bg, padding: '36px 44px', fontFamily: 'Inter, sans-serif' }}>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 20 }}>
        <span style={{ fontSize: 11, color: C.muted, letterSpacing: 1.5, textTransform: 'uppercase' as const }}>Figure 2-4</span>
        <span style={{ fontSize: 20, fontWeight: 700, color: C.text, marginTop: 4 }}>Supply Strategy Questions — 9 Strategic Components</span>
        <span style={{ fontSize: 12, color: C.muted, marginTop: 6 }}>Every supply strategy must answer all nine. Opportunities limited only by the supply manager's imagination.</span>
      </div>

      {/* Header row */}
      <div style={{ display: 'flex', backgroundColor: C.accent, borderRadius: '6px 6px 0 0', padding: '8px 0' }}>
        <div style={{ display: 'flex', width: 90, padding: '0 14px' }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: '#FFFFFF' }}>Question</span>
        </div>
        <div style={{ display: 'flex', flex: 1, padding: '0 14px' }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: '#FFFFFF' }}>Decision Focus</span>
        </div>
        <div style={{ display: 'flex', flex: 2, padding: '0 14px' }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: '#FFFFFF' }}>Options / Examples</span>
        </div>
      </div>

      {rows.map((r, i) => (
        <div key={i} style={{
          display: 'flex', alignItems: 'flex-start',
          backgroundColor: i % 2 === 0 ? C.fill1 : C.bg,
          border: `1px solid ${C.rule}`,
          borderTop: 'none',
          borderRadius: i === rows.length - 1 ? '0 0 6px 6px' : 0,
          padding: '9px 0',
          minHeight: 44,
        }}>
          <div style={{ display: 'flex', width: 90, padding: '0 14px', flexShrink: 0 }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: C.text }}>{r.q}</span>
          </div>
          <div style={{ display: 'flex', flex: 1, padding: '0 14px' }}>
            <span style={{ fontSize: 11, color: C.text }}>{r.decision}</span>
          </div>
          <div style={{ display: 'flex', flex: 2, padding: '0 14px' }}>
            <span style={{ fontSize: 11, color: C.muted }}>{r.options}</span>
          </div>
        </div>
      ))}

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 16 }}>
        <span style={{ fontSize: 11, color: C.light }}>SCMG 487 | Chapter 2 | Supply Strategy</span>
      </div>

    </div>
  );
}

// ============================================================
// FIGURE 3-0: Chapter 3 Overview
// ============================================================

function Fig3_Overview() {
  const W = 1120, H = 860;

  const bullet = (bold: string, sub: string) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 2, marginBottom: 10 }}>
      <span style={{ fontSize: 12, fontWeight: 700, color: C.text }}>› {bold}</span>
      <span style={{ fontSize: 11, color: C.muted, paddingLeft: 12 }}>{sub}</span>
    </div>
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: W, height: H, backgroundColor: C.bg, padding: '32px 40px', fontFamily: 'Inter, sans-serif' }}>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 20 }}>
        <span style={{ fontSize: 11, color: C.muted, letterSpacing: 1.5, textTransform: 'uppercase' as const }}>Chapter 3 Concept Map</span>
        <span style={{ fontSize: 24, fontWeight: 700, color: C.text, marginTop: 4 }}>Supply Organization</span>
      </div>

      <div style={{ display: 'flex', border: `1.5px solid ${C.borderDk}`, borderRadius: 6, padding: '10px 20px', marginBottom: 22, backgroundColor: C.fill1 }}>
        <span style={{ fontSize: 12, color: C.text, fontStyle: 'italic' as const }}>
          "There is no one perfect organizational structure for supply. The challenge is to maximize the benefits of your structure — centralized, decentralized, or hybrid — while minimizing disadvantages."
        </span>
      </div>

      <div style={{ display: 'flex', gap: 16, flex: 1 }}>

        {/* Col 1: Objectives */}
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, border: `1px solid ${C.border}`, borderRadius: 6, overflow: 'hidden' }}>
          <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: C.accent, padding: '8px 14px' }}>
            <span style={{ fontSize: 10, color: '#AAAAAA', letterSpacing: 1 }}>FIGS 3-0</span>
            <span style={{ fontSize: 13, fontWeight: 700, color: '#FFFFFF' }}>7 Rights + 9 Goals</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', padding: '14px 14px', flex: 1 }}>
            {bullet('7 Rights', 'Materials · Quality · Quantity · Time · Place · Source · Service · Price')}
            {bullet('Goal 1', 'Support competitive position — supply as strategic weapon')}
            {bullet('Goal 2', 'Uninterrupted flow — no idle labor, no missed deliveries')}
            {bullet('Goal 3', 'Minimize inventory — reduce carrying costs')}
            {bullet('Goal 5', 'Best-in-class suppliers — preferred customer status')}
            {bullet('Goal 6', 'Standardize — reduce variety, lower total cost')}
            {bullet('Goal 7', 'Lowest total cost of ownership (TCO), not just price')}
            {bullet('Goal 8', 'Harmonious internal relationships — supply as partner')}
          </div>
        </div>

        {/* Col 2: Org Structure */}
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, border: `1px solid ${C.border}`, borderRadius: 6, overflow: 'hidden' }}>
          <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: C.accent, padding: '8px 14px' }}>
            <span style={{ fontSize: 10, color: '#AAAAAA', letterSpacing: 1 }}>TABLES 3-1 · 3-2 · FIGS 3-1 · 3-2</span>
            <span style={{ fontSize: 13, fontWeight: 700, color: '#FFFFFF' }}>Org Structures</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', padding: '14px 14px', flex: 1 }}>
            {bullet('Centralized', 'Low cost of supply · high visibility · clout with suppliers')}
            {bullet('Decentralized', 'Speed · BU autonomy · hidden cost of supply')}
            {bullet('Hybrid (center-led)', '2/3 of large orgs — best of both (Lambert-Martin case)')}
            {bullet('5 Corporate Tasks', 'Policies · recruiting · common item coordination · audit · corporate strategy')}
            {bullet('4 Specializations', 'Strategic sourcing · materials management · admin · supply research')}
            {bullet('Direct vs. indirect', '10-20% savings from structured indirect spend sourcing')}
            {bullet('CPO profile (CAPS)', '14 yrs at org · 4.6 yrs in role · 80% worked in another function')}
          </div>
        </div>

        {/* Col 3: Teams & Consortia */}
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, border: `1px solid ${C.border}`, borderRadius: 6, overflow: 'hidden' }}>
          <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: C.accent, padding: '8px 14px' }}>
            <span style={{ fontSize: 10, color: '#AAAAAA', letterSpacing: 1 }}>FIGS 3-3 · 3-4 · TABLE 3-3</span>
            <span style={{ fontSize: 13, fontWeight: 700, color: '#FFFFFF' }}>Teams + Consortia</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', padding: '14px 14px', flex: 1 }}>
            {bullet('4 Involvement types', 'No involvement · documentary · professional · meaningful')}
            {bullet('Sourcing teams', 'Cost reduction, supplier selection, spend analysis (General Mills DSO)')}
            {bullet('NPD teams', 'Concurrent development — shorten cycles, reduce cost')}
            {bullet('Commodity mgmt', 'Permanent teams for high-spend complex categories')}
            {bullet('Supplier councils', 'GM: 20 preferred suppliers = 85% of annual purchases')}
            {bullet('Consortia', 'Educational/healthcare — price reductions + admin efficiencies')}
            {bullet('5 Roadblocks', 'Confidentiality · benefit sharing · supplier loyalty · bureaucracy · supplier resistance')}
          </div>
        </div>

      </div>

      {/* Bottom band */}
      <div style={{ display: 'flex', gap: 10, marginTop: 16, flexWrap: 'wrap' as const }}>
        {[
          'Table 3-1: Centralization (12 adv / 11 disadv)',
          'Table 3-2: Decentralization (10 adv / 14 disadv)',
          'Table 3-3: Supply Chain Activities (9 areas)',
          'CPO reporting: CEO > CFO > COO > other',
          '4 Levels of supply involvement',
          'Cases: Donovan Valley · Central University · Lambert-Martin',
        ].map((t, i) => (
          <div key={i} style={{ display: 'flex', backgroundColor: C.fill2, border: `1px solid ${C.border}`, borderRadius: 4, padding: '4px 10px' }}>
            <span style={{ fontSize: 10, color: C.muted }}>{t}</span>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 12 }}>
        <span style={{ fontSize: 11, color: C.light }}>SCMG 487 | Chapter 3 | Supply Organization</span>
      </div>

    </div>
  );
}

// ============================================================
// FIGURE 3-1: Medium-Sized Org Structure
// ============================================================

function Fig3_1() {
  const W = 820, H = 680;

  const node = (label: string, sub?: string, dark?: boolean) => (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      border: `1.5px solid ${dark ? C.borderDk : C.border}`,
      borderRadius: 6, padding: '8px 14px',
      backgroundColor: dark ? C.fill2 : C.fill1,
      minWidth: 140,
    }}>
      <span style={{ fontSize: 12, fontWeight: 700, color: C.text, textAlign: 'center' as const }}>{label}</span>
      {sub ? <span style={{ fontSize: 10, color: C.muted, marginTop: 2, textAlign: 'center' as const }}>{sub}</span> : null}
    </div>
  );

  const vLine = () => <div style={{ display: 'flex', justifyContent: 'center', height: 14 }}><div style={{ width: 1.5, backgroundColor: C.borderDk }} /></div>;
  const hLine = (w: number) => <div style={{ display: 'flex', height: 1.5, width: w, backgroundColor: C.borderDk }} />;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: W, height: H, backgroundColor: C.bg, padding: '36px 44px', fontFamily: 'Inter, sans-serif', alignItems: 'center' }}>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 24 }}>
        <span style={{ fontSize: 11, color: C.muted, letterSpacing: 1.5, textTransform: 'uppercase' as const }}>Figure 3-1</span>
        <span style={{ fontSize: 18, fontWeight: 700, color: C.text, marginTop: 4 }}>Typical Supply Organization</span>
        <span style={{ fontSize: 12, color: C.muted, marginTop: 4 }}>Single-location, medium-sized company</span>
      </div>

      {/* Root */}
      {node('Director of Procurement', 'Reports to VP Operations or CFO', true)}
      {vLine()}

      {/* Horizontal bar connecting all direct reports */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 0 }}>

        {/* Left stem */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {hLine(60)}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              {node('Commodity Manager', 'Category A')}
              {vLine()}
              <div style={{ display: 'flex', gap: 8 }}>
                {node('Buyer')}
                {node('Buyer')}
              </div>
            </div>
          </div>
        </div>

        {/* Center stems */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: 16 }}>
          <div style={{ display: 'flex', gap: 16 }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              {node('Commodity Manager', 'Category B')}
              {vLine()}
              <div style={{ display: 'flex', gap: 8 }}>
                {node('Buyer')}
                {node('Buyer')}
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 0 }}>
              {node('Purchasing &', 'Materials Analyst')}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              {node('Manager Admin', '& Processes')}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              {node('Manager Sched', '& Planning')}
            </div>
          </div>
        </div>

        {/* Logistics branch */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: 16 }}>
          {node('Logistics Manager', 'Distribution & customs')}
          {vLine()}
          <div style={{ display: 'flex', gap: 8 }}>
            {node('Inventory Control', 'Coordinator')}
            {node('Shipping /', 'Receiving Mgr')}
            {node('Transportation', '& Customs Mgr')}
          </div>
        </div>

      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
        <span style={{ fontSize: 11, color: C.light }}>SCMG 487 | Chapter 3 | Supply Organization</span>
      </div>

    </div>
  );
}

// ============================================================
// FIGURE 3-2: Hybrid Structure Advantages
// ============================================================

function Fig3_2() {
  const W = 860, H = 560;

  const cell = (label: string, items: string[], dark?: boolean, highlight?: boolean) => (
    <div style={{
      display: 'flex', flexDirection: 'column', flex: 1,
      border: `1.5px solid ${highlight ? C.borderDk : C.border}`,
      borderRadius: 6,
      backgroundColor: highlight ? C.fill2 : C.bg,
      overflow: 'hidden',
    }}>
      <div style={{ display: 'flex', backgroundColor: highlight ? C.accent : C.fill2, padding: '8px 14px' }}>
        <span style={{ fontSize: 12, fontWeight: 700, color: highlight ? '#FFFFFF' : C.text }}>{label}</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', padding: '10px 14px', gap: 6 }}>
        {items.map((it, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 6 }}>
            <span style={{ fontSize: 11, color: dark ? '#CC3333' : '#2266AA', fontWeight: 700, flexShrink: 0 }}>{dark ? '✗' : '✓'}</span>
            <span style={{ fontSize: 11, color: C.muted }}>{it}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: W, height: H, backgroundColor: C.bg, padding: '36px 44px', fontFamily: 'Inter, sans-serif' }}>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 24 }}>
        <span style={{ fontSize: 11, color: C.muted, letterSpacing: 1.5, textTransform: 'uppercase' as const }}>Figure 3-2</span>
        <span style={{ fontSize: 20, fontWeight: 700, color: C.text, marginTop: 4 }}>Potential Advantages of the Hybrid Structure</span>
        <span style={{ fontSize: 12, color: C.muted, marginTop: 6 }}>Center-led: strategic direction centralized, execution decentralized. ~2/3 of large organizations use this model.</span>
      </div>

      <div style={{ display: 'flex', gap: 12, flex: 1 }}>
        {cell('Centralized Advantages Kept', ['Clout with common suppliers', 'Consolidated requirements', 'Policy & procedure consistency', 'Supply talent development', 'Corporate cost visibility', 'Strategic research capability'], false, false)}

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: 20 }}>
          <div style={{ display: 'flex', width: 1.5, flex: 1, backgroundColor: C.rule }} />
        </div>

        {cell('HYBRID (Center-Led)', ['5 corporate tasks: policies, recruiting, common item coordination, audit, corporate strategy', 'BUs execute within corporate framework', 'Lambert-Martin solution: consolidate common commodities, keep OEM-specific local'], false, true)}

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: 20 }}>
          <div style={{ display: 'flex', width: 1.5, flex: 1, backgroundColor: C.rule }} />
        </div>

        {cell('Decentralized Advantages Kept', ['Speed of response to BU needs', 'BU autonomy preserved', 'Local market knowledge', 'Broad buyer job definition', 'Geographic/cultural flexibility'], false, false)}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 16 }}>
        <span style={{ fontSize: 11, color: C.light }}>SCMG 487 | Chapter 3 | Supply Organization</span>
      </div>

    </div>
  );
}

// ============================================================
// FIGURE 3-3: Deere Commodity Specialist JD
// ============================================================

function Fig3_3() {
  const W = 820, H = 680;

  const duties = [
    'Source selection and development — identify and qualify suppliers for assigned commodity',
    'Supplier relationship management — primary contact for negotiations, contracts, performance',
    'Simultaneous engineering teams — supply input at design stage to reduce cost and lead time',
    'PDP integration — participate in product development process for new programs',
    'Cost-effectiveness evaluation — total cost analysis across supplier alternatives',
    'Design change recommendations — identify substitutions that reduce cost or improve performance',
    'Commodity strategies — develop and own the category-level supply strategy',
    'Material control and logistics — ensure delivery, manage lead times and inventory levels',
    'Communications link — connect internal stakeholders (engineering, operations) with suppliers',
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: W, height: H, backgroundColor: C.bg, padding: '36px 44px', fontFamily: 'Inter, sans-serif' }}>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 20 }}>
        <span style={{ fontSize: 11, color: C.muted, letterSpacing: 1.5, textTransform: 'uppercase' as const }}>Figure 3-3</span>
        <span style={{ fontSize: 20, fontWeight: 700, color: C.text, marginTop: 4 }}>Commodity Specialist Job Description</span>
        <span style={{ fontSize: 13, color: C.muted, marginTop: 4 }}>Deere & Company — Strategic Sourcing / Commodity Management specialization</span>
      </div>

      {/* Role summary box */}
      <div style={{ display: 'flex', border: `1.5px solid ${C.border}`, borderRadius: 6, padding: '12px 16px', marginBottom: 16, backgroundColor: C.fill1 }}>
        <span style={{ fontSize: 12, color: C.text }}>
          Locates sources, procures materials/products/supplies/services for assigned commodity. Manages supplier relationships. Primarily strategic — focuses on total cost of ownership and competitive supply advantage.
        </span>
      </div>

      {/* Duties */}
      <div style={{ display: 'flex', flexDirection: 'column', border: `1px solid ${C.border}`, borderRadius: 6, overflow: 'hidden' }}>
        <div style={{ display: 'flex', backgroundColor: C.accent, padding: '8px 16px' }}>
          <span style={{ fontSize: 12, fontWeight: 700, color: '#FFFFFF' }}>Primary Duties</span>
        </div>
        {duties.map((d, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'flex-start', gap: 12,
            padding: '8px 16px',
            backgroundColor: i % 2 === 0 ? C.fill1 : C.bg,
            borderTop: `1px solid ${C.rule}`,
          }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: C.muted, flexShrink: 0, width: 18 }}>{i + 1}.</span>
            <span style={{ fontSize: 12, color: C.text }}>{d}</span>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 14 }}>
        <span style={{ fontSize: 11, color: C.light }}>SCMG 487 | Chapter 3 | Supply Organization</span>
      </div>

    </div>
  );
}

// ============================================================
// FIGURE 3-4: Deere Supply Management Planner JD
// ============================================================

function Fig3_4() {
  const W = 820, H = 680;

  const duties = [
    'Supplier performance feedback — track and report delivery, quality, and commitment metrics',
    'Inventory goals — manage JIT, P.O.U.D., and EDI programs to minimize inventory while avoiding stockouts',
    'Scheduling and expediting — coordinate delivery schedules, resolve late deliveries, expedite when needed',
    'Systems interpretation — translate ERP/MRP signals into supplier-facing requirements',
    'Day-to-day problem resolution — handle quality disputes, quantity errors, logistics issues',
    'Communications link — connect manufacturing planning and suppliers on short-term issues',
    'EOQ analysis — perform economic order quantity and safety stock calculations for managed items',
    'Multiple quotes — evaluate piece price, freight, duty, performance rating, and supplier rating together',
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: W, height: H, backgroundColor: C.bg, padding: '36px 44px', fontFamily: 'Inter, sans-serif' }}>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 20 }}>
        <span style={{ fontSize: 11, color: C.muted, letterSpacing: 1.5, textTransform: 'uppercase' as const }}>Figure 3-4</span>
        <span style={{ fontSize: 20, fontWeight: 700, color: C.text, marginTop: 4 }}>Supply Management Planner Job Description</span>
        <span style={{ fontSize: 13, color: C.muted, marginTop: 4 }}>Deere & Company — Materials Management specialization</span>
      </div>

      {/* Role summary box */}
      <div style={{ display: 'flex', border: `1.5px solid ${C.border}`, borderRadius: 6, padding: '12px 16px', marginBottom: 16, backgroundColor: C.fill1 }}>
        <span style={{ fontSize: 12, color: C.text }}>
          Expedites, schedules, and analyzes requirements for purchased materials per established requirements and inventory control criteria. Interacts with suppliers for procedural agreements, delivery commitments, and quality problem resolution. Primarily operational — manages contracts after they are signed.
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', border: `1px solid ${C.border}`, borderRadius: 6, overflow: 'hidden' }}>
        <div style={{ display: 'flex', backgroundColor: C.accent, padding: '8px 16px' }}>
          <span style={{ fontSize: 12, fontWeight: 700, color: '#FFFFFF' }}>Primary Duties</span>
        </div>
        {duties.map((d, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'flex-start', gap: 12,
            padding: '8px 16px',
            backgroundColor: i % 2 === 0 ? C.fill1 : C.bg,
            borderTop: `1px solid ${C.rule}`,
          }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: C.muted, flexShrink: 0, width: 18 }}>{i + 1}.</span>
            <span style={{ fontSize: 12, color: C.text }}>{d}</span>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 14 }}>
        <span style={{ fontSize: 11, color: C.light }}>SCMG 487 | Chapter 3 | Supply Organization</span>
      </div>

    </div>
  );
}

// ============================================================

async function main() {
  const fonts = await loadFonts();
  console.log('Fonts loaded. Generating Ch 2 & Ch 3 figures...');

  // Chapter 2
  const fig2_0 = await render(<Fig2_Overview />, 1120, 840, fonts);
  save(fig2_0, 'fig-2-0-chapter-overview.png');

  const fig2_1 = await render(<Fig2_1 />, 720, 480, fonts);
  save(fig2_1, 'fig-2-1-supply-strategy-alignment.png');

  const fig2_2 = await render(<Fig2_2 />, 720, 480, fonts);
  save(fig2_2, 'fig-2-2-current-future-needs-markets.png');

  const fig2_3 = await render(<Fig2_3 />, 740, 820, fonts);
  save(fig2_3, 'fig-2-3-strategic-supply-planning-process.png');

  const fig2_4 = await render(<Fig2_4 />, 920, 860, fonts);
  save(fig2_4, 'fig-2-4-supply-strategy-questions.png');

  // Chapter 3
  const fig3_0 = await render(<Fig3_Overview />, 1120, 860, fonts);
  save(fig3_0, 'fig-3-0-chapter-overview.png');

  const fig3_1 = await render(<Fig3_1 />, 820, 680, fonts);
  save(fig3_1, 'fig-3-1-medium-org-structure.png');

  const fig3_2 = await render(<Fig3_2 />, 860, 560, fonts);
  save(fig3_2, 'fig-3-2-hybrid-structure.png');

  const fig3_3 = await render(<Fig3_3 />, 820, 680, fonts);
  save(fig3_3, 'fig-3-3-commodity-specialist-jd.png');

  const fig3_4 = await render(<Fig3_4 />, 820, 680, fonts);
  save(fig3_4, 'fig-3-4-supply-planner-jd.png');

  console.log('Done. 10 figures written to chapters/');
}

main().catch(console.error);
