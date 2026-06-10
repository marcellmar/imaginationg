#!/usr/bin/env npx tsx

import React from 'react';

/**
 * SCMG 487 Chapter 4, 5 & 6 Diagrams
 * Academic / book style: white background, minimal color, Inter font
 *
 * Chapter 4 (Supply Processes and Technology):
 *   fig-4-0-chapter-overview.png
 *   fig-4-1-nine-step-supply-process.png
 *   fig-4-2-strategic-vs-nonstrategic.png
 *   fig-4-3-rfx-tools.png
 *   fig-4-4-technology-ecosystem.png
 *
 * Chapter 5 (Make or Buy, Insourcing, Outsourcing):
 *   fig-5-0-chapter-overview.png
 *   fig-5-1-make-buy-spectrum.png
 *   fig-5-2-reasons-make-vs-buy.png
 *   fig-5-3-outsourcing-decision.png
 *
 * Chapter 6 (Need Identification and Specification):
 *   fig-6-0-chapter-overview.png
 *   fig-6-1-acquisition-value-window.png
 *   fig-6-2-seven-categories-needs.png
 *   fig-6-3-methods-of-description.png
 *
 * Run from imaginationg-main root:
 *   npx tsx scripts/generate-487-ch4-ch5-ch6-diagrams.tsx
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

// ============================================================
// FIGURE 4-0: Chapter 4 Overview
// ============================================================

function Fig4_Overview() {
  const W = 1120, H = 880;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: W, height: H, backgroundColor: C.bg, padding: '32px 40px', fontFamily: 'Inter, sans-serif' }}>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 18 }}>
        <span style={{ fontSize: 11, color: C.muted, letterSpacing: 1.5, textTransform: 'uppercase' as const }}>Chapter 4 Concept Map</span>
        <span style={{ fontSize: 24, fontWeight: 700, color: C.text, marginTop: 4 }}>Supply Processes and Technology</span>
      </div>

      <div style={{ display: 'flex', border: `1.5px solid ${C.borderDk}`, borderRadius: 6, padding: '10px 20px', marginBottom: 20, backgroundColor: C.fill1 }}>
        <span style={{ fontSize: 12, color: C.text, fontStyle: 'italic' as const }}>
          "Robust processes ensure compliance and reduce maverick buying. Technology enables these processes but doesn't replace governance. The goal is information flow in both directions, not just transactions."
        </span>
      </div>

      <div style={{ display: 'flex', gap: 16, flex: 1 }}>

        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, border: `1px solid ${C.border}`, borderRadius: 6, overflow: 'hidden' }}>
          {colHeader('FIGS 4-1 · 4-2', 'Process Architecture')}
          <div style={{ display: 'flex', flexDirection: 'column', padding: '14px 14px', flex: 1 }}>
            {bullet('9-Step Supply Process', 'Steps 1-4: need > source > select > contract. Steps 5-8: requisition > PO > receive > pay. Step 9: measure.')}
            {bullet('3-Gate Requisition', 'Under threshold: catalog/p-card. Mid: supervisor + purchasing. Over threshold: full RFx.')}
            {bullet('5 Reasons for Process', 'Compliance, maverick reduction, info flow, policy enforcement, performance measurement.')}
            {bullet('Strategic vs. Nonstrategic', 'Strategic spend: full RFx + negotiation. Nonstrategic: 14 small-value solutions (p-card, catalog, VMI).')}
            {bullet('4 Rush Order Root Causes', 'Poor planning, poor demand forecasting, system failures, genuine emergencies.')}
            {bullet('Portland Bus: reverse auction', '$2M fabricated metal, 7 suppliers, David McGregor 25% reduction target.')}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, border: `1px solid ${C.border}`, borderRadius: 6, overflow: 'hidden' }}>
          {colHeader('RFX · PO · COMPLIANCE', 'Solicitation and Payment Tools')}
          <div style={{ display: 'flex', flexDirection: 'column', padding: '14px 14px', flex: 1 }}>
            {bullet('RFI', 'Request for Information — market research only, NOT a solicitation. Cannot award from an RFI.')}
            {bullet('RFQ', 'Request for Quotation — price-driven, specs fixed, award goes to lowest qualified bidder.')}
            {bullet('RFP', 'Request for Proposal — complex/service buys, 5 common mistakes, price is one of many criteria.')}
            {bullet('RFB / IFB', 'Request for Bid / Invitation for Bid — public sector formal competitive bid.')}
            {bullet('Blanket PO / MSA', 'Long-term volume commitment with periodic releases. MSA = Master Supply Agreement for services.')}
            {bullet('P-cards', '5 controls + 6 advanced capabilities. Reduce transaction cost. Llydican College: $17K folding machine case.')}
            {bullet('VMI / SMI', 'Vendor/Supplier manages inventory at buyer location. Walmart/P&G VMI reduced OOS 40-70%.')}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, border: `1px solid ${C.border}`, borderRadius: 6, overflow: 'hidden' }}>
          {colHeader('FIG 4-4 · TECHNOLOGY', 'Digital Supply Infrastructure')}
          <div style={{ display: 'flex', flexDirection: 'column', padding: '14px 14px', flex: 1 }}>
            {bullet('ERP', 'Enterprise Resource Planning — integrates supply with finance, HR, operations. Single source of truth.')}
            {bullet('EDI', 'Electronic Data Interchange — structured machine-to-machine transaction exchange (PO, invoice, ASN).')}
            {bullet('Blockchain', 'Distributed ledger for supply chain traceability. Walmart Canada: 70% → under 1% freight invoice discrepancies.')}
            {bullet('RFID', 'Radio frequency ID for real-time inventory tracking. Walmart mandate drove adoption across retail SC.')}
            {bullet('RPA', 'Robotic Process Automation — automates repetitive P2P tasks (invoice matching, PO creation).')}
            {bullet('Reverse Auctions', 'Suppliers bid DOWN on price in real time. Works for commodities with clear specs. Risk: supplier quality race to bottom.')}
            {bullet('7 IS Benefits', 'Reduce cycle time, improve accuracy, enable analysis, compliance tracking, global coordination.')}
          </div>
        </div>

      </div>

      <div style={{ display: 'flex', gap: 8, marginTop: 14, flexWrap: 'wrap' as const }}>
        {['Maverick buying', 'UNSPSC taxonomy', 'Systems contracting', 'Commodity hierarchy', 'Sarbanes-Oxley compliance', 'Llydican (threshold)', 'Eastern Pharma (jurisdiction)', 'Portland Bus (reverse auction)'].map((t, i) => (
          <div key={i} style={{ display: 'flex', backgroundColor: C.fill2, border: `1px solid ${C.border}`, borderRadius: 4, padding: '4px 10px' }}>
            <span style={{ fontSize: 10, color: C.muted }}>{t}</span>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 10 }}>
        <span style={{ fontSize: 11, color: C.light }}>SCMG 487 | Chapter 4 | Supply Processes and Technology</span>
      </div>

    </div>
  );
}

// ============================================================
// FIGURE 4-1: 9-Step Supply Process
// ============================================================

function Fig4_1() {
  const W = 740, H = 920;

  const steps = [
    { n: '1', label: 'Need Recognition', sub: 'Internal trigger: user identifies requirement. Supply professional must recognize it early.' },
    { n: '2', label: 'Need Description', sub: 'Translate need into commercial equivalents. Specify what is needed and why (functional, not just physical).' },
    { n: '3', label: 'Identify Potential Suppliers', sub: 'Market research. Supplier prequalification. RFI for unknown markets.' },
    { n: '4', label: 'Select Supplier', sub: 'RFQ / RFP / RFB process. Evaluate proposals. Award based on criteria (quality, delivery, price, service).' },
    { n: '5', label: 'Prepare and Issue PO', sub: 'Convert requisition to purchase order. Confirm terms, price, delivery, quantity. Send to supplier.' },
    { n: '6', label: 'Follow Up and Expedite', sub: 'Monitor delivery. Expedite when delays occur. Root cause: poor planning, demand error, failure, or genuine emergency.' },
    { n: '7', label: 'Receive and Inspect', sub: 'Physical receipt. Inspection against PO and spec. Discrepancies trigger supplier communication.' },
    { n: '8', label: 'Invoice Clearance and Payment', sub: 'Three-way match: PO + receiving report + invoice. RPA automates this in modern systems.' },
    { n: '9', label: 'Maintain Records and Measure', sub: 'Performance data captured for supplier evaluation, audit compliance, and strategy refinement.' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: W, height: H, backgroundColor: C.bg, padding: '36px 44px', fontFamily: 'Inter, sans-serif' }}>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 24 }}>
        <span style={{ fontSize: 10, color: C.muted, letterSpacing: 1.5, textTransform: 'uppercase' as const }}>Figure 4-1</span>
        <span style={{ fontSize: 20, fontWeight: 700, color: C.text, marginTop: 4 }}>The 9-Step Supply Process</span>
        <span style={{ fontSize: 12, color: C.muted, marginTop: 6 }}>Steps 1-4: Strategic sourcing cycle. Steps 5-8: P2P execution. Step 9: continuous improvement.</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
        {steps.map((s, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14, padding: '10px 14px', backgroundColor: i % 2 === 0 ? C.fill1 : C.bg, border: `1px solid ${C.border}`, borderRadius: i === 0 ? '6px 6px 0 0' : i === steps.length - 1 ? '0 0 6px 6px' : '0', borderTop: i > 0 ? 'none' : `1px solid ${C.border}` }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 28, height: 28, backgroundColor: C.accent, borderRadius: 14, flexShrink: 0, marginTop: 2 }}>
                <span style={{ fontSize: 12, fontWeight: 700, color: '#FFFFFF' }}>{s.n}</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: C.text }}>{s.label}</span>
                <span style={{ fontSize: 11, color: C.muted, marginTop: 3 }}>{s.sub}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 16 }}>
        <span style={{ fontSize: 11, color: C.light }}>SCMG 487 | Chapter 4 | Supply Processes and Technology</span>
      </div>

    </div>
  );
}

// ============================================================
// FIGURE 4-2: Strategic vs. Nonstrategic Flowchart
// ============================================================

function Fig4_2() {
  const W = 860, H = 600;

  const box = (text: string, sub: string, dark?: boolean) => (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '10px 16px', backgroundColor: dark ? C.accent : C.fill1, border: `1.5px solid ${dark ? C.accent : C.border}`, borderRadius: 6, minHeight: 56 }}>
      <span style={{ fontSize: 13, fontWeight: 700, color: dark ? '#FFFFFF' : C.text, textAlign: 'center' as const }}>{text}</span>
      {sub ? <span style={{ fontSize: 11, color: dark ? '#CCCCCC' : C.muted, marginTop: 3, textAlign: 'center' as const }}>{sub}</span> : null}
    </div>
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: W, height: H, backgroundColor: C.bg, padding: '36px 44px', fontFamily: 'Inter, sans-serif' }}>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 28 }}>
        <span style={{ fontSize: 10, color: C.muted, letterSpacing: 1.5, textTransform: 'uppercase' as const }}>Figure 4-2</span>
        <span style={{ fontSize: 20, fontWeight: 700, color: C.text, marginTop: 4 }}>Strategic vs. Nonstrategic Spend Decision</span>
        <span style={{ fontSize: 12, color: C.muted, marginTop: 6 }}>The flowchart that determines how much process rigor any acquisition gets</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}>

        {/* Start */}
        <div style={{ display: 'flex', width: 280 }}>{box('Identify Spend Item', 'New requisition or category review', true)}</div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 24 }}>
          <span style={{ fontSize: 18, color: C.borderDk }}>↓</span>
        </div>

        {/* Decision diamond approximation */}
        <div style={{ display: 'flex', border: `2px solid ${C.borderDk}`, borderRadius: 8, padding: '10px 24px', backgroundColor: C.fill2 }}>
          <span style={{ fontSize: 13, fontWeight: 700, color: C.text }}>Is this spend STRATEGIC?</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 12 }}>
          <span style={{ fontSize: 11, color: C.muted }}>High dollar / high risk / critical to operations / few suppliers</span>
        </div>

        <div style={{ display: 'flex', gap: 40, marginTop: 12, width: '100%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, flex: 1 }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: C.text }}>YES</span>
            <span style={{ fontSize: 18, color: C.borderDk }}>v</span>
            {box('Full Sourcing Process', 'RFQ / RFP / RFB. Supplier evaluation. Negotiation. Long-term contract.')}
            <span style={{ fontSize: 18, color: C.borderDk }}>v</span>
            {box('Category Management', 'Ongoing relationship, performance measurement, supply strategy alignment.')}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, flex: 1 }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: C.text }}>NO</span>
            <span style={{ fontSize: 18, color: C.borderDk }}>v</span>
            {box('Small-Value Solutions', '14 options: p-card, catalog, VMI, systems contracting, SVPO, e-marketplace.')}
            <span style={{ fontSize: 18, color: C.borderDk }}>v</span>
            {box('Minimize Transaction Cost', 'User-direct ordering, blanket PO releases, automated replenishment.')}
          </div>
        </div>

      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
        <span style={{ fontSize: 11, color: C.light }}>SCMG 487 | Chapter 4 | Supply Processes and Technology</span>
      </div>

    </div>
  );
}

// ============================================================
// FIGURE 4-3: RFx Tools Comparison
// ============================================================

function Fig4_3() {
  const W = 960, H = 500;

  const rows = [
    { tool: 'RFI', full: 'Request for Information', use: 'Market research, supplier landscape, capability assessment', legal: 'NOT a solicitation — cannot award a contract from an RFI', risk: 'Suppliers may not respond if they expect no work' },
    { tool: 'RFQ', full: 'Request for Quotation', use: 'Well-defined specs, price is primary criterion, competitive commodity', legal: 'Award to lowest qualified bidder (price-driven)', risk: 'Wrong for complex services where price is not the only factor' },
    { tool: 'RFP', full: 'Request for Proposal', use: 'Complex, service, or innovative buys where method is open', legal: 'Price is one of multiple weighted criteria', risk: '5 common mistakes: vague specs, unrealistic timelines, no pre-bid, ignoring references, skipping pilot' },
    { tool: 'RFB / IFB', full: 'Request for Bid / Invitation for Bid', use: 'Public sector formal procurement, government contracts', legal: 'Formal sealed bid process, legally prescribed award rules', risk: 'Rigid — no negotiation allowed after bid opening' },
  ];

  const colWidths = [60, 160, 220, 220, 220];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: W, height: H, backgroundColor: C.bg, padding: '32px 36px', fontFamily: 'Inter, sans-serif' }}>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 22 }}>
        <span style={{ fontSize: 10, color: C.muted, letterSpacing: 1.5, textTransform: 'uppercase' as const }}>Figure 4-3</span>
        <span style={{ fontSize: 20, fontWeight: 700, color: C.text, marginTop: 4 }}>RFx Solicitation Tools</span>
        <span style={{ fontSize: 12, color: C.muted, marginTop: 6 }}>Choosing the wrong tool is the most common procurement process error</span>
      </div>

      {/* Header row */}
      <div style={{ display: 'flex', backgroundColor: C.accent, borderRadius: '6px 6px 0 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', width: colWidths[0], padding: '8px 10px', flexShrink: 0 }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: '#FFFFFF' }}>Tool</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', width: colWidths[1], padding: '8px 10px', flexShrink: 0, borderLeft: `1px solid #444` }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: '#FFFFFF' }}>Full Name</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', width: colWidths[2], padding: '8px 10px', flexShrink: 0, borderLeft: `1px solid #444` }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: '#FFFFFF' }}>When to Use</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', width: colWidths[3], padding: '8px 10px', flexShrink: 0, borderLeft: `1px solid #444` }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: '#FFFFFF' }}>Award Logic</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', flex: 1, padding: '8px 10px', borderLeft: `1px solid #444` }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: '#FFFFFF' }}>Key Risk</span>
        </div>
      </div>

      {/* Data rows */}
      {rows.map((r, i) => (
        <div key={i} style={{ display: 'flex', backgroundColor: i % 2 === 0 ? C.fill1 : C.bg, borderLeft: `1px solid ${C.border}`, borderRight: `1px solid ${C.border}`, borderBottom: i === rows.length - 1 ? `1px solid ${C.border}` : 'none', borderTop: `1px solid ${C.border}` }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', width: colWidths[0], padding: '10px 10px', flexShrink: 0 }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: C.text }}>{r.tool}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-start', width: colWidths[1], padding: '10px 10px', flexShrink: 0, borderLeft: `1px solid ${C.border}` }}>
            <span style={{ fontSize: 11, color: C.muted }}>{r.full}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-start', width: colWidths[2], padding: '10px 10px', flexShrink: 0, borderLeft: `1px solid ${C.border}` }}>
            <span style={{ fontSize: 11, color: C.text }}>{r.use}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-start', width: colWidths[3], padding: '10px 10px', flexShrink: 0, borderLeft: `1px solid ${C.border}` }}>
            <span style={{ fontSize: 11, color: C.text }}>{r.legal}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-start', flex: 1, padding: '10px 10px', borderLeft: `1px solid ${C.border}` }}>
            <span style={{ fontSize: 11, color: C.muted }}>{r.risk}</span>
          </div>
        </div>
      ))}

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 16 }}>
        <span style={{ fontSize: 11, color: C.light }}>SCMG 487 | Chapter 4 | Supply Processes and Technology</span>
      </div>

    </div>
  );
}

// ============================================================
// FIGURE 4-4: Technology Ecosystem
// ============================================================

function Fig4_4() {
  const W = 960, H = 560;

  const tech = [
    { name: 'ERP', full: 'Enterprise Resource Planning', note: 'Integrates supply, finance, operations, HR into one system. SAP and Oracle are the most common. Single source of truth across the organization.' },
    { name: 'EDI', full: 'Electronic Data Interchange', note: 'Machine-to-machine structured transaction exchange: PO, ASN, invoice. Pre-internet standard still widely used in retail and manufacturing.' },
    { name: 'Blockchain', full: 'Distributed Ledger Technology', note: 'Walmart Canada: reduced freight invoice discrepancies from 70% to under 1% after deployment. Immutable audit trail across supply chain participants.' },
    { name: 'RFID', full: 'Radio Frequency Identification', note: 'Real-time inventory tracking without line-of-sight scanning. Walmart mandate drove adoption across its entire retail supply chain network.' },
    { name: 'RPA', full: 'Robotic Process Automation', note: 'Automates repetitive P2P tasks: invoice matching, PO creation, status updates. Reduces human error in high-volume transaction environments.' },
    { name: 'Reverse Auction', full: 'Real-time Competitive Bidding', note: 'Suppliers bid DOWN on price in real time. Works for commodities with clear specs. Portland Bus: 7 suppliers, $2M spend, 25% reduction target.' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: W, minHeight: H, backgroundColor: C.bg, padding: '32px 40px', fontFamily: 'Inter, sans-serif' }}>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 24 }}>
        <span style={{ fontSize: 10, color: C.muted, letterSpacing: 1.5, textTransform: 'uppercase' as const }}>Figure 4-4</span>
        <span style={{ fontSize: 20, fontWeight: 700, color: C.text, marginTop: 4 }}>Supply Technology Ecosystem</span>
        <span style={{ fontSize: 12, color: C.muted, marginTop: 6 }}>Technology enables process. It doesn't replace governance or judgment.</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', border: `1px solid ${C.border}`, borderRadius: 6, overflow: 'hidden' }}>
        <div style={{ display: 'flex', backgroundColor: C.accent }}>
          <div style={{ display: 'flex', width: 130, padding: '8px 14px', flexShrink: 0 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: '#FFFFFF' }}>TECHNOLOGY</span>
          </div>
          <div style={{ display: 'flex', flex: 1, padding: '8px 14px', borderLeft: '1px solid #444' }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: '#FFFFFF' }}>FULL NAME</span>
          </div>
          <div style={{ display: 'flex', flex: 3, padding: '8px 14px', borderLeft: '1px solid #444' }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: '#FFFFFF' }}>KEY FACT / HOW IT WORKS</span>
          </div>
        </div>
        {tech.map((t, i) => (
          <div key={i} style={{ display: 'flex', backgroundColor: i % 2 === 0 ? C.fill1 : C.bg, borderTop: `1px solid ${C.rule}` }}>
            <div style={{ display: 'flex', alignItems: 'center', width: 130, padding: '10px 14px', flexShrink: 0, borderRight: `1px solid ${C.border}` }}>
              <span style={{ fontSize: 14, fontWeight: 700, color: C.text }}>{t.name}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', flex: 1, padding: '10px 14px', borderRight: `1px solid ${C.border}` }}>
              <span style={{ fontSize: 11, color: C.muted }}>{t.full}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', flex: 3, padding: '10px 14px' }}>
              <span style={{ fontSize: 11, color: C.text }}>{t.note}</span>
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
        <span style={{ fontSize: 11, color: C.light }}>SCMG 487 | Chapter 4 | Supply Processes and Technology</span>
      </div>

    </div>
  );
}

// ============================================================
// FIGURE 5-0: Chapter 5 Overview
// ============================================================

function Fig5_Overview() {
  const W = 1120, H = 860;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: W, height: H, backgroundColor: C.bg, padding: '32px 40px', fontFamily: 'Inter, sans-serif' }}>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 18 }}>
        <span style={{ fontSize: 11, color: C.muted, letterSpacing: 1.5, textTransform: 'uppercase' as const }}>Chapter 5 Concept Map</span>
        <span style={{ fontSize: 24, fontWeight: 700, color: C.text, marginTop: 4 }}>Make or Buy, Insourcing and Outsourcing</span>
      </div>

      <div style={{ display: 'flex', border: `1.5px solid ${C.borderDk}`, borderRadius: 6, padding: '10px 20px', marginBottom: 20, backgroundColor: C.fill1 }}>
        <span style={{ fontSize: 12, color: C.text, fontStyle: 'italic' as const }}>
          "Make/Buy is the initial strategic choice. Insource reverses a prior Buy decision. Outsource reverses a prior Make decision. These are distinct. Conflating them is the most common Connect trap."
        </span>
      </div>

      <div style={{ display: 'flex', gap: 16, flex: 1 }}>

        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, border: `1px solid ${C.border}`, borderRadius: 6, overflow: 'hidden' }}>
          {colHeader('FIG 5-1 · DEFINITIONS', '4 Terms, 1 Spectrum')}
          <div style={{ display: 'flex', flexDirection: 'column', padding: '14px 14px', flex: 1 }}>
            {bullet('MAKE', 'Produce internally using own resources and assets. High control, high capital intensity.')}
            {bullet('BUY', 'Purchase from external supplier. Reduces capital intensity, adds supplier dependency.')}
            {bullet('INSOURCE', 'Reverse a prior BUY decision — bring back in-house. Necessity argument (no suppliers) or opportunity argument (cost/quality gain).')}
            {bullet('OUTSOURCE', 'Reverse a prior MAKE decision — move to external supplier. Permanent strategic shift, not just subcontracting.')}
            {bullet('Gray Zone', 'Mixed models — assemble internally from outsourced components. Apple chip design + TSMC manufacture.')}
            {bullet('Subcontracting', 'Temporary overflow capacity release to outside firm. Not the same as outsourcing — no strategic commitment.')}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, border: `1px solid ${C.border}`, borderRadius: 6, overflow: 'hidden' }}>
          {colHeader('FIG 5-2 · DECISION FACTORS', '16 Reasons Each Direction')}
          <div style={{ display: 'flex', flexDirection: 'column', padding: '14px 14px', flex: 1 }}>
            {bullet('Make when...', 'Volume justifies fixed cost, proprietary technology, quality control critical, supplier unreliable, strategic differentiation, labor relations require it.')}
            {bullet('Buy when...', 'Supplier more efficient, lower cost at scale, focus on core competency, technology changes fast, capital constraints, supply market competitive.')}
            {bullet('Capacity constraint', 'Temporary peak demand → subcontract, not outsource. Permanent demand shift → outsource decision.')}
            {bullet('Garland case', '$95.70/case in-house vs. $83.23 outsourced to Martin. $12.47/case savings × 5,500 cases = $68,600/yr. Payback under 7 months. But: 6-month ramp risk.')}
            {bullet('Brent Industries', '$240.53 Empey price vs. $188.90 insource cost. ~$852K annual savings at 16,500 units. $10K capital. Demand uncertainty is the tension.')}
            {bullet('Finance threshold', '10% cost of capital hurdle at Garland applies to capex options. Math drives the recommendation.')}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, border: `1px solid ${C.border}`, borderRadius: 6, overflow: 'hidden' }}>
          {colHeader('FIG 5-3 · OUTSOURCING TOOLS', 'Service Triad, 3PL, P2P/S2C/S2P')}
          <div style={{ display: 'flex', flexDirection: 'column', padding: '14px 14px', flex: 1 }}>
            {bullet('Service Triad', 'Buyer hires service firm who serves end customer. Buyer loses direct control of customer experience. Marshall Insurance + Gilmore Printing = Triad.')}
            {bullet('9 Outsourcing Concerns', 'Loss of control, quality risk, service triad complexity, confidentiality, concentration risk, labor relations, reputational risk, reversibility, TCO.')}
            {bullet('P2P Outsource', 'Procure-to-Pay: third party runs the entire transaction process from req to payment.')}
            {bullet('S2C Outsource', 'Source-to-Contract: third party runs supplier selection and contracting.')}
            {bullet('S2P Outsource', 'Source-to-Pay: third party runs everything — both S2C and P2P combined.')}
            {bullet('3PL', 'Third-Party Logistics. 5 most outsourced: transportation, warehousing, distribution, customs brokerage, freight payment. Rafiki → Provider C at $11.50/unit only option meeting 48-hr requirement.')}
          </div>
        </div>

      </div>

      <div style={{ display: 'flex', gap: 8, marginTop: 14, flexWrap: 'wrap' as const }}>
        {['Make vs. Buy vs. Insource vs. Outsource', 'Subcontracting ≠ Outsourcing', 'Service triad', 'P2P / S2C / S2P', 'Gray zone', 'Garland: Martin bid $68/case', 'Rafiki: Provider C 36-hr delivery', 'Marshall: concentration risk 30%'].map((t, i) => (
          <div key={i} style={{ display: 'flex', backgroundColor: C.fill2, border: `1px solid ${C.border}`, borderRadius: 4, padding: '4px 10px' }}>
            <span style={{ fontSize: 10, color: C.muted }}>{t}</span>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 10 }}>
        <span style={{ fontSize: 11, color: C.light }}>SCMG 487 | Chapter 5 | Make or Buy, Insourcing and Outsourcing</span>
      </div>

    </div>
  );
}

// ============================================================
// FIGURE 5-1: Make/Buy/Insource/Outsource Spectrum
// ============================================================

function Fig5_1() {
  const W = 920, H = 380;

  const positions = [
    { label: 'MAKE', sub: 'Full internal production', note: 'Own assets, own labor, full control. Highest capital intensity. Reversal = OUTSOURCE.', left: true },
    { label: 'GRAY ZONE', sub: 'Partial internalization', note: 'Design internally, manufacture externally. Or: assemble internally from outsourced components.', left: false },
    { label: 'BUY', sub: 'External supplier provides', note: 'Purchased from market. Reduces capital intensity. Reversal = INSOURCE.', left: false },
    { label: 'FULL OUTSOURCE', sub: 'Strategic hand-off', note: 'Prior make capability permanently transferred. Requires ongoing supplier governance.', left: false },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: W, height: H, backgroundColor: C.bg, padding: '36px 44px', fontFamily: 'Inter, sans-serif' }}>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 28 }}>
        <span style={{ fontSize: 10, color: C.muted, letterSpacing: 1.5, textTransform: 'uppercase' as const }}>Figure 5-1</span>
        <span style={{ fontSize: 20, fontWeight: 700, color: C.text, marginTop: 4 }}>The Make-or-Buy Spectrum</span>
        <span style={{ fontSize: 12, color: C.muted, marginTop: 6 }}>Insource = move left. Outsource = move right. Both require reversing a prior decision.</span>
      </div>

      {/* Spectrum bar */}
      <div style={{ display: 'flex', alignItems: 'stretch', borderRadius: 6, overflow: 'hidden', border: `1.5px solid ${C.borderDk}`, marginBottom: 20 }}>
        {positions.map((p, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '12px 14px', backgroundColor: i === 0 ? C.accent : i === positions.length - 1 ? '#333333' : i % 2 === 0 ? C.fill2 : C.fill1, borderLeft: i > 0 ? `1px solid ${C.border}` : 'none' }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: i === 0 || i === positions.length - 1 ? '#FFFFFF' : C.text }}>{p.label}</span>
            <span style={{ fontSize: 11, color: i === 0 || i === positions.length - 1 ? '#BBBBBB' : C.muted, marginTop: 3 }}>{p.sub}</span>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16, padding: '0 20px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span style={{ fontSize: 16, color: C.borderDk }}>← INSOURCE</span>
          <span style={{ fontSize: 11, color: C.muted }}>Reverse a prior BUY</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span style={{ fontSize: 13, color: C.muted }}>Capital Intensity: Low ← → High</span>
          <span style={{ fontSize: 13, color: C.muted }}>Control: Low ← → High</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span style={{ fontSize: 16, color: C.borderDk }}>OUTSOURCE →</span>
          <span style={{ fontSize: 11, color: C.muted }}>Reverse a prior MAKE</span>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <span style={{ fontSize: 11, color: C.light }}>SCMG 487 | Chapter 5 | Make or Buy, Insourcing and Outsourcing</span>
      </div>

    </div>
  );
}

// ============================================================
// FIGURE 5-2: 16 Reasons to Make vs. Buy (abridged key reasons)
// ============================================================

function Fig5_2() {
  const W = 960, H = 820;

  const makeReasons = [
    'Quantities too small to interest suppliers',
    'Maintain or protect design/quality secrets',
    'Ensure adequate supply (no reliable sources)',
    'Utilize idle equipment, labor, or plant space',
    'Obtain desired quality not available externally',
    'Avoid supplier profit margin on item',
    'Maintain skill or process capability in-house',
    'Proprietary item with patent protection',
    'Cost reduction below current purchase price',
    'Maintain core competence in manufacturing',
    'Labor relations: work rules require it',
    'Supply chain control at critical step',
    'Avoid long lead times or delivery risk',
    'Support insourcing strategy or rebuild capability',
    'Protect customer relationship from third-party risk',
    'Regulatory or compliance requirement for internal production',
  ];

  const buyReasons = [
    'Supplier has lower cost through scale or specialization',
    'Item is not central to the organization\'s core competency',
    'Insufficient volume to justify in-house production',
    'Capital resources required for higher-priority uses',
    'Managerial/technical expertise not available internally',
    'Technology changes so fast that investment is risky',
    'Stable or competitive supply market exists',
    'Reduce risk through supplier diversification',
    'Reduce inventory and working capital requirements',
    'Improve flexibility to scale up or down',
    'Access to supplier R&D and innovation',
    'Lower total cost including overhead absorption',
    'Avoid building or maintaining specialized facilities',
    'Reduce workforce complexity and labor commitments',
    'Supplier offers better quality at comparable cost',
    'Seasonal demand makes permanent capacity uneconomic',
  ];

  const row = (make: string, buy: string, i: number) => (
    <div key={i} style={{ display: 'flex', backgroundColor: i % 2 === 0 ? C.fill1 : C.bg, borderTop: `1px solid ${C.rule}` }}>
      <div style={{ display: 'flex', flex: 1, padding: '8px 12px', borderRight: `2px solid ${C.borderDk}` }}>
        <span style={{ fontSize: 11, color: C.text }}>{i + 1}. {make}</span>
      </div>
      <div style={{ display: 'flex', flex: 1, padding: '8px 12px' }}>
        <span style={{ fontSize: 11, color: C.text }}>{i + 1}. {buy}</span>
      </div>
    </div>
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: W, height: H, backgroundColor: C.bg, padding: '32px 36px', fontFamily: 'Inter, sans-serif' }}>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 20 }}>
        <span style={{ fontSize: 10, color: C.muted, letterSpacing: 1.5, textTransform: 'uppercase' as const }}>Figure 5-2 (Tables 5-1 and 5-2)</span>
        <span style={{ fontSize: 20, fontWeight: 700, color: C.text, marginTop: 4 }}>16 Reasons to Make vs. 16 Reasons to Buy</span>
        <span style={{ fontSize: 12, color: C.muted, marginTop: 6 }}>Neither list is exhaustive. Most decisions involve multiple competing reasons on both sides.</span>
      </div>

      <div style={{ display: 'flex', border: `1.5px solid ${C.borderDk}`, borderRadius: '6px 6px 0 0', overflow: 'hidden' }}>
        <div style={{ display: 'flex', flex: 1, padding: '10px 14px', backgroundColor: C.accent, borderRight: `2px solid #555` }}>
          <span style={{ fontSize: 14, fontWeight: 700, color: '#FFFFFF' }}>Reasons to MAKE</span>
        </div>
        <div style={{ display: 'flex', flex: 1, padding: '10px 14px', backgroundColor: '#333333' }}>
          <span style={{ fontSize: 14, fontWeight: 700, color: '#FFFFFF' }}>Reasons to BUY</span>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', border: `1px solid ${C.border}`, borderTop: 'none', borderRadius: '0 0 6px 6px', overflow: 'hidden' }}>
        {makeReasons.map((m, i) => row(m, buyReasons[i], i))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 14 }}>
        <span style={{ fontSize: 11, color: C.light }}>SCMG 487 | Chapter 5 | Make or Buy, Insourcing and Outsourcing</span>
      </div>

    </div>
  );
}

// ============================================================
// FIGURE 5-3: Outsourcing Decision / Service Triad
// ============================================================

function Fig5_3() {
  const W = 860, H = 520;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: W, height: H, backgroundColor: C.bg, padding: '32px 40px', fontFamily: 'Inter, sans-serif' }}>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 22 }}>
        <span style={{ fontSize: 10, color: C.muted, letterSpacing: 1.5, textTransform: 'uppercase' as const }}>Figure 5-3</span>
        <span style={{ fontSize: 20, fontWeight: 700, color: C.text, marginTop: 4 }}>Outsourcing Decision: Service Triad and Contract Types</span>
      </div>

      <div style={{ display: 'flex', gap: 20, flex: 1 }}>

        {/* Service Triad */}
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, border: `1px solid ${C.border}`, borderRadius: 6, overflow: 'hidden' }}>
          <div style={{ display: 'flex', backgroundColor: C.accent, padding: '8px 14px' }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: '#FFFFFF' }}>The Service Triad</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', padding: '14px 14px', gap: 12 }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
              <div style={{ display: 'flex', border: `1.5px solid ${C.borderDk}`, borderRadius: 6, padding: '8px 20px', backgroundColor: C.fill2 }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: C.text }}>Buyer Organization</span>
              </div>
              <div style={{ display: 'flex', gap: 40 }}>
                <span style={{ fontSize: 18, color: C.borderDk }}>↙</span>
                <span style={{ fontSize: 18, color: C.borderDk }}>↘</span>
              </div>
              <div style={{ display: 'flex', gap: 20 }}>
                <div style={{ display: 'flex', border: `1.5px solid ${C.borderDk}`, borderRadius: 6, padding: '8px 14px', backgroundColor: C.fill1 }}>
                  <span style={{ fontSize: 12, fontWeight: 700, color: C.text }}>Service Firm</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{ fontSize: 18, color: C.borderDk }}>→</span>
                </div>
                <div style={{ display: 'flex', border: `1.5px solid ${C.borderDk}`, borderRadius: 6, padding: '8px 14px', backgroundColor: C.fill1 }}>
                  <span style={{ fontSize: 12, fontWeight: 700, color: C.text }}>End Customer</span>
                </div>
              </div>
            </div>
            <span style={{ fontSize: 11, color: C.muted, textAlign: 'center' as const }}>Buyer contracts service firm who serves the buyer's customer. Buyer loses direct control of customer experience.</span>
            <span style={{ fontSize: 11, color: C.text, textAlign: 'center' as const, fontStyle: 'italic' as const }}>Marshall Insurance + Gilmore Printing: if Gilmore fails, Marshall's clients feel it — not Gilmore's.</span>
          </div>
        </div>

        {/* Procurement Outsourcing Types */}
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, border: `1px solid ${C.border}`, borderRadius: 6, overflow: 'hidden' }}>
          <div style={{ display: 'flex', backgroundColor: '#333333', padding: '8px 14px' }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: '#FFFFFF' }}>Procurement Outsourcing Contract Types</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', padding: '14px 14px', gap: 14 }}>
            {[
              { type: 'P2P', full: 'Procure-to-Pay', desc: 'Third party runs the entire transaction process: requisitioning through invoice payment.' },
              { type: 'S2C', full: 'Source-to-Contract', desc: 'Third party runs supplier identification, evaluation, negotiation, and contracting only.' },
              { type: 'S2P', full: 'Source-to-Pay', desc: 'Third party runs both S2C and P2P combined — the full procurement function.' },
            ].map((t, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, padding: '10px 12px', backgroundColor: i % 2 === 0 ? C.fill1 : C.bg, border: `1px solid ${C.border}`, borderRadius: 4 }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: 44, flexShrink: 0 }}>
                  <span style={{ fontSize: 14, fontWeight: 700, color: C.text }}>{t.type}</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <span style={{ fontSize: 12, fontWeight: 700, color: C.text }}>{t.full}</span>
                  <span style={{ fontSize: 11, color: C.muted, marginTop: 2 }}>{t.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 14 }}>
        <span style={{ fontSize: 11, color: C.light }}>SCMG 487 | Chapter 5 | Make or Buy, Insourcing and Outsourcing</span>
      </div>

    </div>
  );
}

// ============================================================
// FIGURE 6-0: Chapter 6 Overview
// ============================================================

function Fig6_Overview() {
  const W = 1120, H = 880;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: W, height: H, backgroundColor: C.bg, padding: '32px 40px', fontFamily: 'Inter, sans-serif' }}>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 18 }}>
        <span style={{ fontSize: 11, color: C.muted, letterSpacing: 1.5, textTransform: 'uppercase' as const }}>Chapter 6 Concept Map</span>
        <span style={{ fontSize: 24, fontWeight: 700, color: C.text, marginTop: 4 }}>Need Identification and Specification</span>
      </div>

      <div style={{ display: 'flex', border: `1.5px solid ${C.borderDk}`, borderRadius: 6, padding: '10px 20px', marginBottom: 20, backgroundColor: C.fill1 }}>
        <span style={{ fontSize: 12, color: C.text, fontStyle: 'italic' as const }}>
          "70% of value opportunity lives in steps 1 and 2 of acquisition. After the specification is finalized, the window closes. Defining the need correctly before translating to suppliers is the highest-leverage supply activity."
        </span>
      </div>

      <div style={{ display: 'flex', gap: 16, flex: 1 }}>

        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, border: `1px solid ${C.border}`, borderRadius: 6, overflow: 'hidden' }}>
          {colHeader('FIG 6-0 · 3 CRITERIA LEVELS', 'Need Criteria in the Value Proposition')}
          <div style={{ display: 'flex', flexDirection: 'column', padding: '14px 14px', flex: 1 }}>
            {bullet('Level 1: Strategic', 'Is this requirement strategic? ABC/Pareto: A items = 10-20% of needs, 70-80% of spend. Strategic sourcing applies.')}
            {bullet('Level 2: Traditional (5)', 'Quality, Quantity, Delivery, Price, Service. In supply literature 100+ years. Price is the "order getter" — only after Q/Q/D are met.')}
            {bullet('Financial', 'Beyond price: balance sheet improvement, working capital reduction, cash flow, inventory reduction, ROI.')}
            {bullet('Risk Management', 'Operational (flow), Financial (price), Reputational (supplier behavior). All three can hit simultaneously.')}
            {bullet('Sustainability', 'ESG compliance. Walmart: 14,300+ supplier factory assessments per year in Responsible Sourcing Program.')}
            {bullet('Innovation + Regulatory + Political', 'Suppliers expected to bring improvement suggestions. Comply with OSHA/EPA. "Buy Local" government priorities.')}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, border: `1px solid ${C.border}`, borderRadius: 6, overflow: 'hidden' }}>
          {colHeader('FIG 6-2 · 7 CATEGORIES', 'Categories of Needs')}
          <div style={{ display: 'flex', flexDirection: 'column', padding: '14px 14px', flex: 1 }}>
            {bullet('1. Resale', 'Retailers/distributors. Cash conversion cycle is the key metric. Apple and GM have negative CCC — suppliers finance them.')}
            {bullet('2. Raw/Semiprocessed', 'Commodities: price volatility, hedging, forward buying. Converters squeezed between large raw suppliers and large customers.')}
            {bullet('3. Parts/Components/Packaging', 'Standard vs. custom tradeoff. ESI critical here. Apple insourced chip design for iPhone/Mac. Packaging = brand + safety.')}
            {bullet('4. MRO / SVP', 'Syncrude: 150,000+ SKUs. Challenge: acquisition cost can exceed item value. Systems contracting solves this.')}
            {bullet('5. Capital Assets', 'Depreciated, separate budget, cross-functional team required. TCO = purchase price is 30-50% of total. US: $1.9T in capital goods in 2019.')}
            {bullet('6. Services', 'Intangible, can\'t be stored, timing is critical. US GDP is 80% services. Even 5% price reduction has major profitability impact.')}
            {bullet('7. Other', 'Energy, water, unusual/infrequent requirements. Handled ad hoc or on project basis.')}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, border: `1px solid ${C.border}`, borderRadius: 6, overflow: 'hidden' }}>
          {colHeader('FIG 6-3 · METHODS', 'Description and Specification')}
          <div style={{ display: 'flex', flexDirection: 'column', padding: '14px 14px', flex: 1 }}>
            {bullet('Brand', 'Relies on supplier reputation. Acceptable when: confidential process, specialized skill, small quantity, end-user preference. Risk: restricts competition.')}
            {bullet('"Or Equal"', 'Public sector: specify a brand + "or equal." Bidder must prove equivalence. Avoids writing detailed specs while allowing competition.')}
            {bullet('Physical/Chemical', 'Measurable properties. Buyer defines properties, seller hits them. Buyer retains full responsibility for adequacy.')}
            {bullet('Performance/Function', 'Specify what it must DO, not what it must BE. Shifts outcome responsibility to seller. Enables innovation. RFPs use this. Hard to compare bids.')}
            {bullet('Engineering Drawing', 'Most accurate. Used for machined parts, assemblies requiring close tolerances. Expensive to develop.')}
            {bullet('Standardization vs. Simplification', 'Standardization = agreement on specs (engineering). Simplification = reduce number of varieties (commercial). Automotive industry uses both to cut cost and maintain apparent product diversity.')}
          </div>
        </div>

      </div>

      <div style={{ display: 'flex', gap: 8, marginTop: 14, flexWrap: 'wrap' as const }}>
        {['ESI: Early Supplier Involvement', 'Commercial equivalents', '70% value in steps 1-2', 'NIST / ANSI / MIL specs', 'TCO for capital assets', 'NG&E: rotary vs. diaphragm meter', 'Granton Shores: weighted criteria for services', 'Haniff: 5-axis CNC $305K capex'].map((t, i) => (
          <div key={i} style={{ display: 'flex', backgroundColor: C.fill2, border: `1px solid ${C.border}`, borderRadius: 4, padding: '4px 10px' }}>
            <span style={{ fontSize: 10, color: C.muted }}>{t}</span>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 10 }}>
        <span style={{ fontSize: 11, color: C.light }}>SCMG 487 | Chapter 6 | Need Identification and Specification</span>
      </div>

    </div>
  );
}

// ============================================================
// FIGURE 6-1: Acquisition Value Window (downward curve)
// ============================================================

function Fig6_1() {
  const W = 760, H = 500;

  const steps = ['1. Need Recognition', '2. Description', '3. Potential Suppliers', '4. Selection', '5. Receipt', '6. Payment'];
  const stepW = 96;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: W, height: H, backgroundColor: C.bg, padding: '36px 44px', fontFamily: 'Inter, sans-serif' }}>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 20 }}>
        <span style={{ fontSize: 10, color: C.muted, letterSpacing: 1.5, textTransform: 'uppercase' as const }}>Figure 6-1</span>
        <span style={{ fontSize: 20, fontWeight: 700, color: C.text, marginTop: 4 }}>Opportunity to Affect Value During Acquisition</span>
        <span style={{ fontSize: 12, color: C.muted, marginTop: 6 }}>70% of value improvement opportunity lives in steps 1 and 2. After description is finalized, the window closes.</span>
      </div>

      {/* Chart area */}
      <div style={{ display: 'flex', flex: 1, alignItems: 'flex-end', gap: 0 }}>

        {/* Y axis label */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', marginRight: 10, height: 220 }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: C.text }}>High</span>
          <span style={{ fontSize: 11, fontWeight: 700, color: C.text, marginTop: 'auto' as const }}>Low</span>
        </div>

        {/* Bars representing declining opportunity */}
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, flex: 1 }}>
          {[220, 180, 110, 60, 28, 12].map((h, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
              <div style={{ display: 'flex', width: '100%', height: h, backgroundColor: i < 2 ? C.accent : i < 4 ? C.fill2 : '#DDDDDD', border: `1px solid ${C.border}`, borderRadius: '4px 4px 0 0' }} />
              <div style={{ display: 'flex', height: 1, width: '100%', backgroundColor: C.borderDk }} />
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 6, width: stepW }}>
                <span style={{ fontSize: 10, color: i < 2 ? C.accent : C.muted, fontWeight: i < 2 ? 700 : 400, textAlign: 'center' as const }}>{steps[i]}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Key insight */}
      <div style={{ display: 'flex', backgroundColor: C.fill1, border: `1px solid ${C.border}`, borderRadius: 6, padding: '8px 16px', marginTop: 14 }}>
        <span style={{ fontSize: 11, color: C.text }}>
          Steps 1-2 shown in dark: highest impact zone. Once specifications are set, suppliers are locked in, alternatives are eliminated, and the ability to create value drops sharply.
        </span>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 12 }}>
        <span style={{ fontSize: 11, color: C.light }}>SCMG 487 | Chapter 6 | Need Identification and Specification</span>
      </div>

    </div>
  );
}

// ============================================================
// FIGURE 6-2: 7 Categories of Needs
// ============================================================

function Fig6_2() {
  const W = 920, H = 720;

  const categories = [
    { n: '1', name: 'Resale', desc: 'Retailers, wholesalers, distributors, agents, brokers, traders.', key: 'Cash conversion cycle: Apple and GM have negative CCC — suppliers finance their operations.', risk: 'Disintermediation: buyers bypass reseller to buy direct.' },
    { n: '2', name: 'Raw and Semiprocessed Materials', desc: 'Basic substances in natural, modified, or semiprocessed state used as production inputs.', key: 'Commodities traded on exchanges. Nestle (coffee/cocoa), Coca-Cola (sugar) affect market prices with volume.', risk: 'Price volatility. Converters squeezed between raw material suppliers and large customers.' },
    { n: '3', name: 'Parts, Components, Packaging', desc: 'Parts/components produced by suppliers to create finished product.', key: 'Standard vs. custom tradeoff. ESI critical. Apple insourced chip design, manufactures at TSMC.', risk: 'Custom components create lock-in. Packaging adds environmental and regulatory complexity.' },
    { n: '4', name: 'MRO and Small Value Purchases', desc: 'Maintenance, repair, operating supplies. Every organization has MRO requirements.', key: 'Syncrude: 150,000+ SKUs. Challenge: acquisition cost can exceed item value for cheap C-items.', risk: 'SKU proliferation, maverick buying, poor availability tracking.' },
    { n: '5', name: 'Capital Assets', desc: 'Long-term assets depreciated over time. Equipment, IT, real estate, construction.', key: 'US businesses: $1.9T in capital goods (2019). TCO = purchase price is 30-50% of total. Requires cross-functional team.', risk: 'High dollar, long commitment, hard to reverse. New technology may make purchase obsolete.' },
    { n: '6', name: 'Services', desc: 'Intangible and nonmanufactured. US GDP is 80% services.', key: '5% reduction in service prices has major profit impact. Services can\'t be stored — timing must match demand.', risk: 'Quality has intangible components. Can\'t pre-inspect. Granton Shores: reference verification is the only proxy.' },
    { n: '7', name: 'Other', desc: 'Anything not covered above: energy, water, unusual or infrequent requirements.', key: 'Energy and water are often major expenditures managed outside the MRO category.', risk: 'Handled ad hoc. Risk of inconsistent process and missed savings.' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: W, height: H, backgroundColor: C.bg, padding: '32px 36px', fontFamily: 'Inter, sans-serif' }}>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 20 }}>
        <span style={{ fontSize: 10, color: C.muted, letterSpacing: 1.5, textTransform: 'uppercase' as const }}>Figure 6-2 (Table 6-1)</span>
        <span style={{ fontSize: 20, fontWeight: 700, color: C.text, marginTop: 4 }}>Seven Categories of Organizational Needs</span>
        <span style={{ fontSize: 12, color: C.muted, marginTop: 6 }}>Every acquisition falls into one of these seven. Each requires different supply expertise.</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', border: `1px solid ${C.border}`, borderRadius: 6, overflow: 'hidden' }}>
        <div style={{ display: 'flex', backgroundColor: C.accent }}>
          <div style={{ display: 'flex', width: 28, padding: '8px 8px', flexShrink: 0 }} />
          <div style={{ display: 'flex', flex: 1, padding: '8px 12px', borderLeft: `1px solid #444` }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: '#FFFFFF' }}>Category</span>
          </div>
          <div style={{ display: 'flex', flex: 2, padding: '8px 12px', borderLeft: `1px solid #444` }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: '#FFFFFF' }}>Key Characteristics</span>
          </div>
          <div style={{ display: 'flex', flex: 2, padding: '8px 12px', borderLeft: `1px solid #444` }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: '#FFFFFF' }}>Main Risk</span>
          </div>
        </div>
        {categories.map((c, i) => (
          <div key={i} style={{ display: 'flex', backgroundColor: i % 2 === 0 ? C.fill1 : C.bg, borderTop: `1px solid ${C.rule}` }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 28, flexShrink: 0, borderRight: `1px solid ${C.border}` }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: C.muted }}>{c.n}</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '8px 12px', borderRight: `1px solid ${C.border}` }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: C.text }}>{c.name}</span>
              <span style={{ fontSize: 10, color: C.muted, marginTop: 2 }}>{c.desc}</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', flex: 2, padding: '8px 12px', borderRight: `1px solid ${C.border}` }}>
              <span style={{ fontSize: 11, color: C.text }}>{c.key}</span>
            </div>
            <div style={{ display: 'flex', flex: 2, padding: '8px 12px' }}>
              <span style={{ fontSize: 11, color: C.muted }}>{c.risk}</span>
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 14 }}>
        <span style={{ fontSize: 11, color: C.light }}>SCMG 487 | Chapter 6 | Need Identification and Specification</span>
      </div>

    </div>
  );
}

// ============================================================
// FIGURE 6-3: Methods of Description
// ============================================================

function Fig6_3() {
  const W = 960, H = 620;

  const methods = [
    { name: 'Brand', when: 'Confidential process, specialized skill, small quantity, end-user preference', pro: 'No spec writing cost. Leverage supplier reputation.', con: 'Premium price, restricts competition, limits substitution flexibility.', respons: 'Buyer (trusts supplier)' },
    { name: '"Or Equal"', when: 'Public sector. Known reference product but want competition.', pro: 'Avoids spec writing. Allows competition.', con: 'Bidder must prove equality. Ambiguity in evaluation.', respons: 'Bidder must prove' },
    { name: 'Physical/Chemical', when: 'Measurable properties where buyer can define them precisely.', pro: 'Clear standard. Easy to verify.', con: 'Buyer retains full adequacy risk. May over-specify.', respons: 'Buyer' },
    { name: 'Performance/Function', when: 'Complex, innovative, or service acquisitions. RFP context.', pro: 'Shifts outcome responsibility to seller. Enables innovation and substitution.', con: 'Hard to compare bids. Seller may price in risk allowance.', respons: 'Seller' },
    { name: 'Engineering Drawing', when: 'Machined parts, assemblies, castings requiring close tolerances.', pro: 'Most accurate. Supplier knows exactly what to build.', con: 'Most expensive to develop. Expensive to manufacture to.', respons: 'Buyer (design)' },
    { name: 'Market Grade / Sample', when: 'Commodities (wheat, cotton, steel). Visual items requiring physical reference.', pro: 'Low cost, widely understood grades. Sample = fast for visual items.', con: 'Grade accuracy depends on grader honesty. Sample limits competition.', respons: 'Market / Buyer' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: W, height: H, backgroundColor: C.bg, padding: '28px 32px', fontFamily: 'Inter, sans-serif' }}>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 18 }}>
        <span style={{ fontSize: 10, color: C.muted, letterSpacing: 1.5, textTransform: 'uppercase' as const }}>Figure 6-3</span>
        <span style={{ fontSize: 20, fontWeight: 700, color: C.text, marginTop: 4 }}>Methods of Description</span>
        <span style={{ fontSize: 12, color: C.muted, marginTop: 6 }}>Who bears the performance risk changes based on which method is used</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' as const, border: `1px solid ${C.border}`, borderRadius: 6, overflow: 'hidden' }}>
        <div style={{ display: 'flex', backgroundColor: C.accent }}>
            <div style={{ display: 'flex', width: 110, padding: '8px 10px', flexShrink: 0 }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: '#FFFFFF' }}>Method</span>
            </div>
            <div style={{ display: 'flex', flex: 2, padding: '8px 10px', borderLeft: `1px solid #444` }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: '#FFFFFF' }}>Best Used When</span>
            </div>
            <div style={{ display: 'flex', flex: 2, padding: '8px 10px', borderLeft: `1px solid #444` }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: '#FFFFFF' }}>Advantage</span>
            </div>
            <div style={{ display: 'flex', flex: 2, padding: '8px 10px', borderLeft: `1px solid #444` }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: '#FFFFFF' }}>Limitation</span>
            </div>
            <div style={{ display: 'flex', width: 90, padding: '8px 10px', borderLeft: `1px solid #444`, flexShrink: 0 }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: '#FFFFFF' }}>Risk Held By</span>
            </div>
        </div>
        {methods.map((m, i) => (
          <div key={i} style={{ display: 'flex', backgroundColor: i % 2 === 0 ? C.fill1 : C.bg, borderTop: `1px solid ${C.rule}` }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', width: 110, padding: '9px 10px', flexShrink: 0, borderRight: `1px solid ${C.border}` }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: C.text }}>{m.name}</span>
            </div>
            <div style={{ display: 'flex', flex: 2, padding: '9px 10px', borderRight: `1px solid ${C.border}` }}>
              <span style={{ fontSize: 11, color: C.text }}>{m.when}</span>
            </div>
            <div style={{ display: 'flex', flex: 2, padding: '9px 10px', borderRight: `1px solid ${C.border}` }}>
              <span style={{ fontSize: 11, color: C.text }}>{m.pro}</span>
            </div>
            <div style={{ display: 'flex', flex: 2, padding: '9px 10px', borderRight: `1px solid ${C.border}` }}>
              <span style={{ fontSize: 11, color: C.muted }}>{m.con}</span>
            </div>
            <div style={{ display: 'flex', width: 90, padding: '9px 10px', flexShrink: 0 }}>
              <span style={{ fontSize: 11, color: C.muted }}>{m.respons}</span>
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 14 }}>
        <span style={{ fontSize: 11, color: C.light }}>SCMG 487 | Chapter 6 | Need Identification and Specification</span>
      </div>

    </div>
  );
}

// ============================================================

async function main() {
  const fonts = await loadFonts();
  console.log('Fonts loaded. Generating Ch 4, Ch 5 & Ch 6 figures...');

  // Chapter 4
  const fig4_0 = await render(<Fig4_Overview />, 1120, 880, fonts);
  save(fig4_0, 'fig-4-0-chapter-overview.png');

  const fig4_1 = await render(<Fig4_1 />, 740, 920, fonts);
  save(fig4_1, 'fig-4-1-nine-step-supply-process.png');

  const fig4_2 = await render(<Fig4_2 />, 860, 600, fonts);
  save(fig4_2, 'fig-4-2-strategic-vs-nonstrategic.png');

  const fig4_3 = await render(<Fig4_3 />, 960, 500, fonts);
  save(fig4_3, 'fig-4-3-rfx-tools.png');

  const fig4_4 = await render(<Fig4_4 />, 960, 480, fonts);
  save(fig4_4, 'fig-4-4-technology-ecosystem.png');

  // Chapter 5
  const fig5_0 = await render(<Fig5_Overview />, 1120, 860, fonts);
  save(fig5_0, 'fig-5-0-chapter-overview.png');

  const fig5_1 = await render(<Fig5_1 />, 920, 380, fonts);
  save(fig5_1, 'fig-5-1-make-buy-spectrum.png');

  const fig5_2 = await render(<Fig5_2 />, 960, 820, fonts);
  save(fig5_2, 'fig-5-2-reasons-make-vs-buy.png');

  const fig5_3 = await render(<Fig5_3 />, 860, 520, fonts);
  save(fig5_3, 'fig-5-3-outsourcing-decision.png');

  // Chapter 6
  const fig6_0 = await render(<Fig6_Overview />, 1120, 880, fonts);
  save(fig6_0, 'fig-6-0-chapter-overview.png');

  const fig6_1 = await render(<Fig6_1 />, 760, 500, fonts);
  save(fig6_1, 'fig-6-1-acquisition-value-window.png');

  const fig6_2 = await render(<Fig6_2 />, 920, 720, fonts);
  save(fig6_2, 'fig-6-2-seven-categories-needs.png');

  const fig6_3 = await render(<Fig6_3 />, 960, 620, fonts);
  save(fig6_3, 'fig-6-3-methods-of-description.png');

  console.log('Done. 13 figures written to chapters/');
}

main().catch(console.error);
