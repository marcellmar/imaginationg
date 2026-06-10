#!/usr/bin/env npx tsx

import React from 'react';

/**
 * SCMG 487 Chapter 1 Diagrams
 * Academic / book style: white background, minimal color, Inter font
 *
 * Generates:
 *   fig-1-1-roa-leverage.png          -- Profit leverage effect / ROA model
 *   fig-1-3-org-matrix.png            -- Nature of organization (2x2 matrix)
 *   fig-1-7-challenges-ahead.png      -- Challenges ahead (hub-and-spoke)
 *
 * Run from imaginationg-main root:
 *   npx tsx scripts/generate-487-ch1-diagrams.ts
 */

import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import * as fs from 'fs';
import * as path from 'path';

// ── Output folder ────────────────────────────────────────────────────────────
const OUT = path.join(
  '/Users/marcellmar/Documents/projects/marcus-gpi-brain',
  'work-loyola/processed-documents/SCMG-487-purchasing-management/chapters'
);

// ── Palette (book style) ─────────────────────────────────────────────────────
const C = {
  bg:       '#FFFFFF',
  text:     '#111111',
  muted:    '#555555',
  light:    '#888888',
  border:   '#CCCCCC',
  borderDk: '#999999',
  rule:     '#E5E5E5',
  // single accent -- used sparingly
  accent:   '#1A1A1A',
  // soft fills for matrix cells
  fill1:    '#F7F7F7',
  fill2:    '#EFEFEF',
};

// ── Font loading ─────────────────────────────────────────────────────────────
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
// FIGURE 1-1: The Profit Leverage Effect (ROA Model)
// ============================================================

function Fig1_1() {
  const W = 900, H = 620;

  // Shared cell style
  const cell = (bg: string, border: string, flex?: string): any => ({
    display: 'flex',
    flexDirection: 'column' as const,
    backgroundColor: bg,
    border: `1px solid ${border}`,
    borderRadius: 4,
    padding: '14px 18px',
    flex: flex || '1',
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: W, height: H, backgroundColor: C.bg, padding: '40px 48px', fontFamily: 'Inter, sans-serif' }}>

      {/* Title */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 36 }}>
        <span style={{ fontSize: 13, color: C.muted, letterSpacing: 1.5, textTransform: 'uppercase' as const, marginBottom: 6 }}>Figure 1-1</span>
        <span style={{ fontSize: 22, fontWeight: 700, color: C.text }}>The Profit Leverage Effect</span>
        <span style={{ fontSize: 14, color: C.muted, marginTop: 6 }}>Two levers that amplify supply management's impact on ROA</span>
      </div>

      {/* ROA formula bar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginBottom: 32 }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', border: `1.5px solid ${C.borderDk}`, borderRadius: 6, padding: '10px 28px' }}>
          <span style={{ fontSize: 13, color: C.muted, marginBottom: 2 }}>ROA</span>
          <span style={{ fontSize: 20, fontWeight: 700, color: C.text }}>Net Income / Total Assets</span>
        </div>
        <span style={{ fontSize: 18, color: C.muted }}>=</span>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', border: `1.5px solid ${C.borderDk}`, borderRadius: 6, padding: '10px 28px' }}>
          <span style={{ fontSize: 13, color: C.muted, marginBottom: 2 }}>Profit Margin</span>
          <span style={{ fontSize: 18, fontWeight: 700, color: C.text }}>Net Income / Sales</span>
        </div>
        <span style={{ fontSize: 18, color: C.muted }}>x</span>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', border: `1.5px solid ${C.borderDk}`, borderRadius: 6, padding: '10px 28px' }}>
          <span style={{ fontSize: 13, color: C.muted, marginBottom: 2 }}>Asset Turnover</span>
          <span style={{ fontSize: 18, fontWeight: 700, color: C.text }}>Sales / Total Assets</span>
        </div>
      </div>

      {/* Two lever columns */}
      <div style={{ display: 'flex', gap: 24, flex: 1 }}>

        {/* Lever 1: Profit Margin */}
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, border: `1.5px solid ${C.border}`, borderRadius: 8, overflow: 'hidden' }}>
          <div style={{ display: 'flex', backgroundColor: C.accent, padding: '10px 18px' }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: '#FFFFFF', letterSpacing: 0.5 }}>LEVER 1: Reduce Costs</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', padding: '16px 18px', gap: 10, flex: 1 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <span style={{ fontSize: 12, color: C.muted, letterSpacing: 0.8, textTransform: 'uppercase' as const }}>Scenario</span>
              <span style={{ fontSize: 13, color: C.text }}>$100M sales, 5% net margin = $5M profit</span>
              <span style={{ fontSize: 13, color: C.text }}>Supply saves $3M on COGS/expenses</span>
            </div>
            <div style={{ display: 'flex', height: 1, backgroundColor: C.rule }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <span style={{ fontSize: 12, color: C.muted, letterSpacing: 0.8, textTransform: 'uppercase' as const }}>Result</span>
              <span style={{ fontSize: 13, color: C.text }}>Profit rises from $5M to $8M (+60%)</span>
              <span style={{ fontSize: 13, color: C.text }}>To match with sales: need +$60M revenue</span>
            </div>
            <div style={{ display: 'flex', height: 1, backgroundColor: C.rule }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <span style={{ fontSize: 12, color: C.muted, letterSpacing: 0.8, textTransform: 'uppercase' as const }}>Real example</span>
              <span style={{ fontSize: 13, color: C.text }}>CHU Sainte-Justine: purchasing groups</span>
              <span style={{ fontSize: 13, color: C.text }}>negotiated volume discounts across</span>
              <span style={{ fontSize: 13, color: C.text }}>Quebec hospitals -- savings go directly</span>
              <span style={{ fontSize: 13, color: C.text }}>to the budget bottom line.</span>
            </div>
          </div>
        </div>

        {/* Divider label */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
          <span style={{ fontSize: 12, color: C.muted }}>or</span>
        </div>

        {/* Lever 2: Asset Turnover */}
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, border: `1.5px solid ${C.border}`, borderRadius: 8, overflow: 'hidden' }}>
          <div style={{ display: 'flex', backgroundColor: C.accent, padding: '10px 18px' }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: '#FFFFFF', letterSpacing: 0.5 }}>LEVER 2: Reduce Assets</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', padding: '16px 18px', gap: 10, flex: 1 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <span style={{ fontSize: 12, color: C.muted, letterSpacing: 0.8, textTransform: 'uppercase' as const }}>Scenario</span>
              <span style={{ fontSize: 13, color: C.text }}>$100M sales, $50M total assets</span>
              <span style={{ fontSize: 13, color: C.text }}>Supply reduces inventory by $5M</span>
            </div>
            <div style={{ display: 'flex', height: 1, backgroundColor: C.rule }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <span style={{ fontSize: 12, color: C.muted, letterSpacing: 0.8, textTransform: 'uppercase' as const }}>Result</span>
              <span style={{ fontSize: 13, color: C.text }}>Asset base shrinks from $50M to $45M</span>
              <span style={{ fontSize: 13, color: C.text }}>Same sales, better ROA -- no added revenue</span>
            </div>
            <div style={{ display: 'flex', height: 1, backgroundColor: C.rule }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <span style={{ fontSize: 12, color: C.muted, letterSpacing: 0.8, textTransform: 'uppercase' as const }}>Real example</span>
              <span style={{ fontSize: 13, color: C.text }}>Print-on-demand (Pressly): zero inventory</span>
              <span style={{ fontSize: 13, color: C.text }}>model eliminates the asset entirely.</span>
              <span style={{ fontSize: 13, color: C.text }}>JIT design = maximum asset turnover</span>
              <span style={{ fontSize: 13, color: C.text }}>without any inventory management cost.</span>
            </div>
          </div>
        </div>

      </div>

      {/* Footer */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
        <span style={{ fontSize: 11, color: C.light }}>SCMG 487 | Chapter 1 | Purchasing &amp; Supply Management</span>
      </div>

    </div>
  );
}

// ============================================================
// FIGURES 1-3 and 1-4: Spectrum Tables (learning-first)
// ============================================================

// Shared spectrum row component
// Factor (italic) | Val1 ↔ Val2 ↔ Val3 | Supply implication
function SpectrumTable({
  figLabel,
  title,
  subtitle,
  rows,
  note,
}: {
  figLabel: string;
  title: string;
  subtitle: string;
  rows: { factor: string; low: string; mid: string; high: string; implication: string }[];
  note: string;
}) {
  const FACTOR_W = 160;
  const IMPL_W   = 250;
  const MIN_ROW  = 52;   // rows auto-expand beyond this if text wraps
  const ARROW    = '↔';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: C.bg, padding: '36px 44px', fontFamily: 'Inter, sans-serif' }}>

      {/* Title */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 22 }}>
        <span style={{ fontSize: 12, color: C.muted, letterSpacing: 1.4, textTransform: 'uppercase' as const, marginBottom: 6 }}>{figLabel}</span>
        <span style={{ fontSize: 22, fontWeight: 700, color: C.text }}>{title}</span>
        <span style={{ fontSize: 13, color: C.muted, marginTop: 5 }}>{subtitle}</span>
      </div>

      {/* Column headers */}
      <div style={{ display: 'flex', marginBottom: 4 }}>
        <div style={{ width: FACTOR_W }} />
        <div style={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
          <span style={{ fontSize: 10, color: C.light, letterSpacing: 1.2, textTransform: 'uppercase' as const }}>Spectrum (textbook exact)</span>
        </div>
        <div style={{ display: 'flex', width: IMPL_W, justifyContent: 'center' }}>
          <span style={{ fontSize: 10, color: C.light, letterSpacing: 1.2, textTransform: 'uppercase' as const }}>Supply implication</span>
        </div>
      </div>

      {/* Table -- rows auto-height so long implications don't clip */}
      <div style={{ display: 'flex', flexDirection: 'column', border: `1.5px solid ${C.border}` }}>
        {rows.map((row, i) => (
          <div key={i} style={{
            display: 'flex',
            minHeight: MIN_ROW,
            borderTop: i === 0 ? 'none' : `1px solid ${C.border}`,
            backgroundColor: i % 2 === 0 ? C.bg : C.fill1,
          }}>
            {/* Factor label -- italic, vertically centered */}
            <div style={{
              display: 'flex', alignItems: 'center',
              width: FACTOR_W, minWidth: FACTOR_W,
              padding: '10px 16px',
              borderRight: `1px solid ${C.border}`,
            }}>
              <span style={{ fontSize: 13, color: C.text, fontStyle: 'italic' as const }}>{row.factor}</span>
            </div>

            {/* Spectrum: val ↔ val ↔ val -- centered */}
            <div style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center', gap: 10, padding: '10px 16px' }}>
              <span style={{ fontSize: 13, color: C.text }}>{row.low}</span>
              <span style={{ fontSize: 14, color: C.borderDk }}>{ARROW}</span>
              <span style={{ fontSize: 13, color: C.text }}>{row.mid}</span>
              <span style={{ fontSize: 14, color: C.borderDk }}>{ARROW}</span>
              <span style={{ fontSize: 13, color: C.text }}>{row.high}</span>
            </div>

            {/* Supply implication -- wraps freely */}
            <div style={{
              display: 'flex', alignItems: 'center',
              width: IMPL_W, minWidth: IMPL_W,
              padding: '10px 14px',
              borderLeft: `1px solid ${C.border}`,
              backgroundColor: i % 2 === 0 ? C.fill1 : C.fill2,
            }}>
              <span style={{ fontSize: 11, color: C.muted, lineHeight: 1.5 }}>{row.implication}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Note bar */}
      <div style={{ display: 'flex', backgroundColor: C.fill1, border: `1px solid ${C.border}`, borderTop: 'none', padding: '9px 16px' }}>
        <span style={{ fontSize: 11, color: C.muted }}>{note}</span>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 14 }}>
        <span style={{ fontSize: 11, color: C.light }}>SCMG 487 | Chapter 1 | Purchasing &amp; Supply Management</span>
      </div>

    </div>
  );
}

function Fig1_3() {
  return (
    <SpectrumTable
      figLabel="Figure 1-3"
      title="Differentiations for Supply Management in Public Sector Organizations"
      subtitle="Each factor shifts what supply must prioritize"
      rows={[
        {
          factor: 'Level',
          low: 'Municipal', mid: 'State or Provincial', high: 'Federal',
          implication: 'Federal: massive scale, FAR regulations, national security items can be sole-sourced',
        },
        {
          factor: 'Mission',
          low: 'Social Aims', mid: 'Other or Combination', high: 'Economic',
          implication: 'Social mission = minority supplier mandates, local hiring requirements -- cost alone doesn\'t win bids',
        },
        {
          factor: 'Revenue Generation',
          low: 'Limited', mid: 'Combination', high: 'Substantial',
          implication: 'Limited revenue = tight budgets, strict approval chains, harder to move fast (CHU pre-2020)',
        },
        {
          factor: 'Size',
          low: 'Small', mid: 'Medium', high: 'Large',
          implication: 'Larger = more spend, more resources, more leverage -- but also more bureaucracy and slower decisions',
        },
        {
          factor: 'Number of Sites',
          low: 'Single', mid: 'Few', high: 'Many',
          implication: 'Multiple sites = transportation, storage, control complexity compounds. Consistency across sites is hard.',
        },
      ]}
      note="Example: CHU Sainte-Justine = Provincial / Social-Economic mission / Large / Many sites -- its supply team had to navigate all these constraints when building the PPE stockpile."
    />
  );
}

function Fig1_4() {
  return (
    <SpectrumTable
      figLabel="Figure 1-4"
      title="Differentiations for Supply Management in Private Sector Organizations"
      subtitle="Each factor shapes supply's role and leverage"
      rows={[
        {
          factor: 'Goods or Services',
          low: 'Manufacturer', mid: 'Combination', high: 'Services',
          implication: 'Manufacturers: direct spend dominates (materials = product). Services: indirect spend dominates (IT, facilities, contractors)',
        },
        {
          factor: 'Strategy',
          low: 'Low cost', mid: 'Combination', high: 'Differentiation',
          implication: 'Low cost (Walmart): supply must minimize price. Differentiation (Apple): supply must secure unique or superior components -- cost is secondary',
        },
        {
          factor: 'Size',
          low: 'Small', mid: 'Medium', high: 'Large',
          implication: 'Cost of acquisition = 1-2% of purchase value. $1B purchase = up to $20M in acquisition costs -- scale justifies a dedicated supply function',
        },
        {
          factor: 'Number of Sites',
          low: 'Single', mid: 'Few', high: 'Many',
          implication: 'IKEA: 400+ stores globally. Supply complexity across sites requires central coordination or regional hubs',
        },
        {
          factor: 'Location',
          low: 'Domestic', mid: 'Few International', high: 'Many International',
          implication: 'International = currency risk, lead time variability, IP protection, trade compliance. Canada\'s 100% foreign PPE dependency = maximum location risk realized',
        },
        {
          factor: 'Financial Strength',
          low: 'Weak', mid: 'Medium', high: 'Strong',
          implication: 'Financially strong buyers are preferred customers. Better payment terms, priority allocation in shortages, more willing suppliers',
        },
        {
          factor: 'Reputation',
          low: 'Poor', mid: 'Medium', high: 'Outstanding',
          implication: 'Reputation attracts better suppliers and better deals. "You are known by the company you keep." IKEA sustainability = reputation as competitive asset',
        },
      ]}
      note="Key connection: Strategy drives supply priority. Financial strength and reputation amplify leverage. Location multiplies risk. Size determines whether a dedicated supply function pays for itself."
    />
  );
}

// ============================================================
// FIGURE 1-7: Challenges Ahead (Hub-and-Spoke, 3x3 grid)
// ============================================================

function Fig1_7() {
  const W = 940, H = 680;
  const SPOKE_W = 220;
  const SPOKE_H = 130;
  const HUB_SIZE = 180;
  const GAP = 20;

  const challenges = [
    { label: 'Technology & Digital Tools',      sub: 'AI, ERP, e-procurement, blockchain traceability' },
    { label: 'Supply Chain Risk & Disruption',  sub: 'COVID PPE: 100% foreign dependency = failure' },
    { label: 'Cost, Quality & Service Balance', sub: 'Trade-off triangle -- cannot optimize all three' },
    { label: 'Sustainability & ESG',            sub: 'IKEA: FSC wood, BCI cotton, circular economy target' },
    { label: 'Talent & Professional Dev.',      sub: 'CPM, CPSM, CSCMP -- certification signals competence' },
    { label: 'Supplier Development',            sub: 'Build long-term capability, not just contracts' },
    { label: 'Ethics & Social Responsibility',  sub: 'Conflict minerals, labor practices, anti-corruption' },
  ];

  const Spoke = ({ label, sub }: { label: string; sub: string }) => (
    <div style={{
      display: 'flex', flexDirection: 'column',
      width: SPOKE_W, height: SPOKE_H,
      border: `1.5px solid ${C.border}`, borderRadius: 8,
      padding: '12px 14px', backgroundColor: C.fill1,
    }}>
      <span style={{ fontSize: 12, fontWeight: 700, color: C.text }}>{label}</span>
      <div style={{ display: 'flex', height: 1, backgroundColor: C.rule, margin: '8px 0' }} />
      <span style={{ fontSize: 11, color: C.muted, lineHeight: 1.45 }}>{sub}</span>
    </div>
  );

  // Connector: horizontal line with arrow-like end (just a thin div)
  const HConn = ({ right }: { right?: boolean }) => (
    <div style={{
      display: 'flex', alignItems: 'center',
      width: GAP,
      height: SPOKE_H,
      justifyContent: 'center',
    }}>
      <div style={{ width: GAP, height: 1.5, backgroundColor: C.borderDk }} />
    </div>
  );

  // Vertical connector (for top/bottom rows to hub)
  const VConnRow = () => (
    <div style={{ display: 'flex', justifyContent: 'center', width: SPOKE_W + GAP * 2 + HUB_SIZE, height: GAP }}>
      {/* left spoke center */}
      <div style={{ display: 'flex', width: SPOKE_W, justifyContent: 'center' }}>
        <div style={{ width: 1.5, height: GAP, backgroundColor: C.borderDk }} />
      </div>
      {/* hub gap */}
      <div style={{ width: GAP * 2 + HUB_SIZE }} />
      {/* right spoke center */}
      <div style={{ display: 'flex', width: SPOKE_W, justifyContent: 'center' }}>
        <div style={{ width: 1.5, height: GAP, backgroundColor: C.borderDk }} />
      </div>
    </div>
  );

  const Hub = () => (
    <div style={{
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      width: HUB_SIZE, height: HUB_SIZE,
      borderRadius: HUB_SIZE / 2,
      backgroundColor: C.accent,
    }}>
      <span style={{ fontSize: 14, fontWeight: 700, color: '#FFFFFF', textAlign: 'center' as const }}>Supply</span>
      <span style={{ fontSize: 14, fontWeight: 700, color: '#FFFFFF', textAlign: 'center' as const }}>Management</span>
      <span style={{ fontSize: 11, color: '#BBBBBB', marginTop: 6, textAlign: 'center' as const }}>7 Challenges</span>
    </div>
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: W, height: H, backgroundColor: C.bg, padding: '36px 44px', fontFamily: 'Inter, sans-serif' }}>

      {/* Title */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 24 }}>
        <span style={{ fontSize: 12, color: C.muted, letterSpacing: 1.5, textTransform: 'uppercase' as const, marginBottom: 6 }}>Figure 1-7</span>
        <span style={{ fontSize: 22, fontWeight: 700, color: C.text }}>Challenges Ahead in Supply Management</span>
      </div>

      {/* 3x3 grid: row1=[0,1,gap] row2=[2,hub,3] row3=[4,5,6] */}
      <div style={{ display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 0 }}>

        {/* Row 1: top two spokes + spacer aligned with hub */}
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 0 }}>
          <Spoke label={challenges[0].label} sub={challenges[0].sub} />
          <div style={{ width: GAP * 2 + HUB_SIZE }} />
          <Spoke label={challenges[1].label} sub={challenges[1].sub} />
        </div>

        {/* Vertical connectors down to middle row */}
        <div style={{ display: 'flex', width: SPOKE_W * 2 + GAP * 2 + HUB_SIZE, height: GAP }}>
          <div style={{ display: 'flex', width: SPOKE_W, justifyContent: 'center' }}>
            <div style={{ width: 1.5, height: GAP, backgroundColor: C.borderDk }} />
          </div>
          <div style={{ width: GAP * 2 + HUB_SIZE }} />
          <div style={{ display: 'flex', width: SPOKE_W, justifyContent: 'center' }}>
            <div style={{ width: 1.5, height: GAP, backgroundColor: C.borderDk }} />
          </div>
        </div>

        {/* Row 2: middle -- spoke + H-conn + hub + H-conn + spoke */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
          <Spoke label={challenges[2].label} sub={challenges[2].sub} />
          <HConn />
          <Hub />
          <HConn right />
          <Spoke label={challenges[3].label} sub={challenges[3].sub} />
        </div>

        {/* Vertical connectors down from middle row */}
        <div style={{ display: 'flex', width: SPOKE_W * 2 + GAP * 2 + HUB_SIZE, height: GAP }}>
          <div style={{ display: 'flex', width: SPOKE_W, justifyContent: 'center' }}>
            <div style={{ width: 1.5, height: GAP, backgroundColor: C.borderDk }} />
          </div>
          <div style={{ width: GAP * 2 + HUB_SIZE }} />
          <div style={{ display: 'flex', width: SPOKE_W, justifyContent: 'center' }}>
            <div style={{ width: 1.5, height: GAP, backgroundColor: C.borderDk }} />
          </div>
        </div>

        {/* Row 3: bottom two spokes + one more centered under hub */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 0 }}>
          <Spoke label={challenges[4].label} sub={challenges[4].sub} />
          <div style={{ display: 'flex', flexDirection: 'column', width: GAP * 2 + HUB_SIZE, alignItems: 'center' }}>
            <div style={{ width: 1.5, height: GAP, backgroundColor: C.borderDk }} />
            <Spoke label={challenges[6].label} sub={challenges[6].sub} />
          </div>
          <Spoke label={challenges[5].label} sub={challenges[5].sub} />
        </div>

      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 16 }}>
        <span style={{ fontSize: 11, color: C.light }}>SCMG 487 | Chapter 1 | Purchasing &amp; Supply Management</span>
      </div>

    </div>
  );
}

// ============================================================
// FIGURE 1-2: Supply Contribution (3-frame)
// ============================================================

function Fig1_2() {
  const W = 900, H = 920;

  // Fixed-height branch card + fixed-height example card -- no flex stretching
  const BRANCH_H = 52;
  const EXAMPLE_H = 72;
  const COL_GAP = 16;

  const TreeFrame = ({
    frameLabel,
    left,
    right,
  }: {
    frameLabel: string;
    left: { label: string; tag: string; eg: string; detail: string };
    right: { label: string; tag: string; eg: string; detail: string };
  }) => (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {/* Section label */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
        <span style={{ fontSize: 10, color: C.light, letterSpacing: 1.4, textTransform: 'uppercase' as const }}>{frameLabel}</span>
        <div style={{ display: 'flex', flex: 1, height: 1, backgroundColor: C.rule }} />
      </div>

      {/* Root node -- centered */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 0 }}>
        <div style={{ display: 'flex', backgroundColor: C.accent, borderRadius: 5, padding: '9px 28px' }}>
          <span style={{ fontSize: 13, fontWeight: 700, color: '#FFFFFF' }}>Supply Contribution</span>
        </div>
      </div>

      {/* Stem down from root -- two short vertical lines + horizontal bar */}
      <div style={{ display: 'flex', justifyContent: 'center', height: 16 }}>
        <div style={{ width: 1.5, height: 16, backgroundColor: C.borderDk }} />
      </div>
      <div style={{ display: 'flex', marginBottom: 0 }}>
        {/* horizontal bar spanning half-left to half-right */}
        <div style={{ flex: 1 }} />
        <div style={{ display: 'flex', flex: 8, height: 1.5, backgroundColor: C.borderDk, marginTop: 0 }} />
        <div style={{ flex: 1 }} />
      </div>

      {/* Two drop lines */}
      <div style={{ display: 'flex', gap: COL_GAP, marginBottom: 0 }}>
        <div style={{ display: 'flex', flex: 1, justifyContent: 'center', height: 14 }}>
          <div style={{ width: 1.5, height: 14, backgroundColor: C.borderDk }} />
        </div>
        <div style={{ display: 'flex', flex: 1, justifyContent: 'center', height: 14 }}>
          <div style={{ width: 1.5, height: 14, backgroundColor: C.borderDk }} />
        </div>
      </div>

      {/* Two branch boxes -- fixed height */}
      <div style={{ display: 'flex', gap: COL_GAP, marginBottom: 10 }}>
        {[left, right].map((side, i) => (
          <div key={i} style={{
            display: 'flex', flexDirection: 'column', flex: 1,
            height: BRANCH_H,
            border: `1.5px solid ${C.borderDk}`, borderRadius: 6,
            padding: '9px 14px', justifyContent: 'center',
          }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: C.text }}>{side.label}</span>
            <span style={{ fontSize: 11, color: C.muted, marginTop: 2 }}>{side.tag}</span>
          </div>
        ))}
      </div>

      {/* Two example boxes -- fixed height */}
      <div style={{ display: 'flex', gap: COL_GAP }}>
        {[left, right].map((side, i) => (
          <div key={i} style={{
            display: 'flex', flexDirection: 'column', flex: 1,
            height: EXAMPLE_H,
            backgroundColor: C.fill1, border: `1px solid ${C.border}`, borderRadius: 5,
            padding: '9px 14px',
          }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: C.text, marginBottom: 4 }}>{side.eg}</span>
            <span style={{ fontSize: 11, color: C.muted, lineHeight: 1.45 }}>{side.detail}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const ratingCols = [
    {
      label: 'NEGATIVE',
      headerBg: C.fill2,
      headerColor: C.text,
      borderColor: C.border,
      attrs: ['Operationally deficient', 'Strategically deficient', 'Directly deficient', 'Indirectly deficient'],
      eg: 'Canada pre-2020',
      egDetail: '100% foreign PPE, no reserves, no plan',
    },
    {
      label: 'NEUTRAL',
      headerBg: C.fill2,
      headerColor: C.text,
      borderColor: C.borderDk,
      attrs: ['Operationally acceptable', 'Strategically deficient', 'Directly acceptable', 'Indirectly deficient'],
      eg: 'Most QC hospitals',
      egDetail: 'Normal inventory, no strategic buffer',
    },
    {
      label: 'POSITIVE',
      headerBg: C.accent,
      headerColor: '#FFFFFF',
      borderColor: C.accent,
      attrs: ['Operationally acceptable', 'Strategically acceptable', 'Directly acceptable', 'Indirectly acceptable'],
      eg: 'CHU Sainte-Justine',
      egDetail: 'Early action, stockpile, shared network',
    },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: W, height: H, backgroundColor: C.bg, padding: '36px 44px', fontFamily: 'Inter, sans-serif' }}>

      {/* Title */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 28 }}>
        <span style={{ fontSize: 12, color: C.muted, letterSpacing: 1.5, textTransform: 'uppercase' as const, marginBottom: 6 }}>Figure 1-2</span>
        <span style={{ fontSize: 22, fontWeight: 700, color: C.text }}>Supply Contribution</span>
        <span style={{ fontSize: 13, color: C.muted, marginTop: 5 }}>Three ways to measure supply's contribution to the organization</span>
      </div>

      {/* Frame 1 */}
      <TreeFrame
        frameLabel="Frame 1 -- Operational vs. Strategic"
        left={{ label: 'Operational', tag: 'Trouble prevention', eg: 'CHU Sainte-Justine', detail: 'PPE stockpile before pandemic = no stockouts when crisis hit. Kept hospital running.' }}
        right={{ label: 'Strategic', tag: 'Opportunity maximization', eg: 'IKEA', detail: 'FSC-certified wood before regulations required it = brand differentiator and market advantage.' }}
      />

      {/* Divider */}
      <div style={{ display: 'flex', height: 1, backgroundColor: C.rule, margin: '22px 0' }} />

      {/* Frame 2 */}
      <TreeFrame
        frameLabel="Frame 2 -- Direct vs. Indirect"
        left={{ label: 'Direct', tag: 'Bottom-line impact', eg: 'Quebec Purchasing Groups', detail: 'Volume discounts negotiated across hospitals show up directly in the budget.' }}
        right={{ label: 'Indirect', tag: 'Enhancing performance of others', eg: 'Clinical Staff at CHU', detail: 'PPE stockpile = nurses never scrambled for equipment. Supply enabled care delivery.' }}
      />

      {/* Divider */}
      <div style={{ display: 'flex', height: 1, backgroundColor: C.rule, margin: '22px 0' }} />

      {/* Frame 3: Rating */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
          <span style={{ fontSize: 10, color: C.light, letterSpacing: 1.4, textTransform: 'uppercase' as const }}>Frame 3 -- Supply Contribution Rating</span>
          <div style={{ display: 'flex', flex: 1, height: 1, backgroundColor: C.rule }} />
        </div>
        <div style={{ display: 'flex', gap: COL_GAP }}>
          {ratingCols.map((col, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', flex: 1, border: `1.5px solid ${col.borderColor}`, borderRadius: 6, overflow: 'hidden' }}>
              <div style={{ display: 'flex', justifyContent: 'center', padding: '8px 0', backgroundColor: col.headerBg, borderBottom: `1px solid ${col.borderColor}` }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: col.headerColor, letterSpacing: 0.8 }}>{col.label}</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', padding: '10px 12px', gap: 5 }}>
                {col.attrs.map((a, j) => (
                  <span key={j} style={{ fontSize: 11, color: C.muted }}>{a}</span>
                ))}
                <div style={{ display: 'flex', height: 1, backgroundColor: C.rule, margin: '6px 0' }} />
                <span style={{ fontSize: 11, fontWeight: 700, color: C.text }}>{col.eg}</span>
                <span style={{ fontSize: 11, color: C.muted, lineHeight: 1.4 }}>{col.egDetail}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
        <span style={{ fontSize: 11, color: C.light }}>SCMG 487 | Chapter 1 | Purchasing &amp; Supply Management</span>
      </div>

    </div>
  );
}

// ============================================================
// MAIN
// ============================================================
// FIGURE 1-0: Chapter 1 Concept Map (Overview)
// ============================================================

function Fig1_Overview() {
  const W = 1120, H = 920;

  const SectionHeader = ({ label, fig }: { label: string; fig: string }) => (
    <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: C.accent, padding: '9px 14px' }}>
      <span style={{ fontSize: 9, color: '#999999', letterSpacing: 1.1 }}>{fig}</span>
      <span style={{ fontSize: 13, fontWeight: 700, color: '#FFFFFF', marginTop: 2 }}>{label}</span>
    </div>
  );

  const Bullet = ({ text, sub }: { text: string; sub?: string }) => (
    <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 8 }}>
      <div style={{ display: 'flex', gap: 6 }}>
        <span style={{ fontSize: 11, color: C.borderDk, marginTop: 1 }}>›</span>
        <span style={{ fontSize: 11, color: C.text, fontWeight: 700 }}>{text}</span>
      </div>
      {sub ? (
        <span style={{ fontSize: 10, color: C.muted, marginLeft: 14, lineHeight: 1.5 }}>{sub}</span>
      ) : null}
    </div>
  );

  const challenges = [
    'Supply Chain\nManagement',
    'Measurement',
    'Risk\nManagement',
    'Sustainability',
    'Growth &\nInfluence',
    'Technology',
    'Effective\nContribution',
  ];

  const terms = [
    'Purchasing',
    'Supply Management',
    'Materials Management',
    'Logistics',
    'Supply Chain Management',
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: W, height: H, backgroundColor: C.bg, padding: '32px 40px', fontFamily: 'Inter, sans-serif' }}>

      {/* Title */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 16 }}>
        <span style={{ fontSize: 11, color: C.light, letterSpacing: 1.5, textTransform: 'uppercase' as const, marginBottom: 5 }}>Chapter 1 Concept Map</span>
        <span style={{ fontSize: 22, fontWeight: 700, color: C.text }}>Purchasing &amp; Supply Management</span>
      </div>

      {/* Thesis bar */}
      <div style={{ display: 'flex', border: `1.5px solid ${C.borderDk}`, borderRadius: 5, padding: '9px 18px', marginBottom: 20, backgroundColor: C.fill1 }}>
        <span style={{ fontSize: 11, color: C.muted, fontStyle: 'italic' as const, lineHeight: 1.5 }}>
          Goal: "Because of the kinds of suppliers we have and the way we relate to them, we can outperform our competition and provide greater customer satisfaction."
        </span>
      </div>

      {/* Three columns */}
      <div style={{ display: 'flex', gap: 16, marginBottom: 18 }}>

        {/* Col 1: Financial Impact */}
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, border: `1.5px solid ${C.border}`, borderRadius: 6, overflow: 'hidden' }}>
          <SectionHeader label="Financial Impact" fig="Fig 1-1" />
          <div style={{ display: 'flex', flexDirection: 'column', padding: '12px 14px' }}>
            <Bullet
              text="Profit-Leverage Effect"
              sub={'$1 cost cut = $1 profit. 10% cut on $60M spend → 75% profit increase vs. needing +75% in sales to match.'}
            />
            <Bullet
              text="ROA: Two Levers at Once"
              sub={'Lever 1: ↓ costs → ↑ net income. Lever 2: ↓ inventory → ↓ total assets. Both move ROA simultaneously.'}
            />
            <Bullet
              text="Industry Purchase/Sales Ratios"
              sub={'Energy 80% · Food 60% · Services 25% · Wages 10-20%. Higher ratio = more leverage from supply savings.'}
            />
            <Bullet
              text="GPI: Pressly (POD)"
              sub={'Zero inventory model = Lever 2 built in by design. JIT by architecture, not discipline.'}
            />
          </div>
        </div>

        {/* Col 2: Supply Contribution */}
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, border: `1.5px solid ${C.border}`, borderRadius: 6, overflow: 'hidden' }}>
          <SectionHeader label="Supply Contribution" fig="Fig 1-2" />
          <div style={{ display: 'flex', flexDirection: 'column', padding: '12px 14px' }}>
            <Bullet
              text="Operational vs. Strategic"
              sub={'Operational = trouble avoidance (CHU PPE stockpile). Strategic = opportunity maximization (IKEA FSC before regulations).'}
            />
            <Bullet
              text="Direct vs. Indirect (7 types)"
              sub={'Direct = P&L visible. Indirect: Info · Efficiency · Competitive Position · Risk · Image · Training Ground · Strategy.'}
            />
            <Bullet
              text="Preferred Customer Status"
              sub={'Strong buyer relationships → priority allocation during shortages, better terms, first access to innovation.'}
            />
            <Bullet
              text="Rating: Neg / Neutral / Positive"
              sub={'Positive = acceptable on all 4 dimensions. Canada pre-2020 PPE = Negative. CHU = Positive.'}
            />
          </div>
        </div>

        {/* Col 3: Org Context */}
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, border: `1.5px solid ${C.border}`, borderRadius: 6, overflow: 'hidden' }}>
          <SectionHeader label="Organizational Context" fig="Fig 1-3 / 1-4" />
          <div style={{ display: 'flex', flexDirection: 'column', padding: '12px 14px' }}>
            <Bullet
              text="Public Sector (5 factors)"
              sub={'Level · Mission · Revenue · Size · Sites. Strict bidding laws, transparency, social goals. CHU = provincial + social-economic mission.'}
            />
            <Bullet
              text="Private Sector (7 factors)"
              sub={'Strategy (cost vs. differentiation) · Goods/Services · Size · Sites · Location · Financial Strength · Reputation.'}
            />
            <Bullet
              text="Strategy Drives Supply Priority"
              sub={'Low cost (Walmart) = minimize price. Differentiation (Apple) = secure unique components. Cost is secondary.'}
            />
            <Bullet
              text="Financial Strength + Reputation"
              sub={'Strong buyers = preferred customers. "You are known by the company you keep." IKEA sustainability = reputation as asset.'}
            />
          </div>
        </div>

      </div>

      {/* Challenges band */}
      <div style={{ display: 'flex', flexDirection: 'column', border: `1.5px solid ${C.border}`, borderRadius: 6, overflow: 'hidden', marginBottom: 16 }}>
        <div style={{ display: 'flex', backgroundColor: C.fill2, padding: '7px 14px', borderBottom: `1px solid ${C.border}` }}>
          <span style={{ fontSize: 10, color: C.muted, letterSpacing: 1.2, textTransform: 'uppercase' as const }}>7 Challenges Ahead  —  Fig 1-7</span>
        </div>
        <div style={{ display: 'flex' }}>
          {challenges.map((c, i) => (
            <div key={i} style={{
              display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center',
              padding: '10px 6px',
              borderRight: i < challenges.length - 1 ? `1px solid ${C.rule}` : 'none',
            }}>
              <span style={{ fontSize: 10.5, color: C.text, textAlign: 'center' as const, lineHeight: 1.4 }}>{c}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom row: Terminology + Credentials */}
      <div style={{ display: 'flex', gap: 16 }}>

        {/* Terminology hierarchy */}
        <div style={{ display: 'flex', flex: 3, border: `1px solid ${C.border}`, borderRadius: 6, padding: '10px 14px', flexDirection: 'column' }}>
          <span style={{ fontSize: 10, color: C.light, letterSpacing: 1.2, textTransform: 'uppercase' as const, marginBottom: 8 }}>Terminology Hierarchy (narrowest → broadest)</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            {terms.map((t, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <div style={{ display: 'flex', border: `1px solid ${C.border}`, borderRadius: 4, padding: '4px 10px', backgroundColor: C.fill1 }}>
                  <span style={{ fontSize: 10.5, color: C.text, fontWeight: 700 }}>{t}</span>
                </div>
                {i < terms.length - 1 ? (
                  <span style={{ fontSize: 11, color: C.light }}>→</span>
                ) : null}
              </div>
            ))}
          </div>
          <span style={{ fontSize: 10, color: C.muted, marginTop: 7 }}>ISM Report on Business (PMI) = published first business day of each month. $38T annual supply spend across US/Canada/Mexico.</span>
        </div>

        {/* Credentials */}
        <div style={{ display: 'flex', flex: 1, border: `1px solid ${C.border}`, borderRadius: 6, padding: '10px 14px', flexDirection: 'column' }}>
          <span style={{ fontSize: 10, color: C.light, letterSpacing: 1.2, textTransform: 'uppercase' as const, marginBottom: 8 }}>Professional Bodies</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
            <span style={{ fontSize: 10.5, color: C.text }}><span style={{ fontWeight: 700 }}>ISM</span> (US, 1915) → CPSM, CPSD</span>
            <span style={{ fontSize: 10.5, color: C.text }}><span style={{ fontWeight: 700 }}>CIPS</span> (Global, 70K+ members)</span>
            <span style={{ fontSize: 10.5, color: C.text }}><span style={{ fontWeight: 700 }}>SCC</span> (Canada) → CSCMP</span>
            <span style={{ fontSize: 10.5, color: C.text }}><span style={{ fontWeight: 700 }}>NIGP / NASPO</span> (Government)</span>
          </div>
        </div>

      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 14 }}>
        <span style={{ fontSize: 11, color: C.light }}>SCMG 487 | Chapter 1 | Purchasing &amp; Supply Management</span>
      </div>

    </div>
  );
}

// ============================================================

async function main() {
  const fonts = await loadFonts();
  console.log('Fonts loaded. Generating...');

  const figOverview = await render(<Fig1_Overview />, 1120, 800, fonts);
  save(figOverview, 'fig-1-0-chapter-overview.png');

  const fig1 = await render(<Fig1_1 />, 900, 620, fonts);
  save(fig1, 'fig-1-1-roa-leverage.png');

  const fig2 = await render(<Fig1_2 />, 900, 920, fonts);
  save(fig2, 'fig-1-2-supply-contribution.png');

  const fig3 = await render(<Fig1_3 />, 980, 700, fonts);
  save(fig3, 'fig-1-3-public-sector.png');

  const fig4 = await render(<Fig1_4 />, 980, 1000, fonts);
  save(fig4, 'fig-1-4-private-sector.png');

  const fig7 = await render(<Fig1_7 />, 940, 680, fonts);
  save(fig7, 'fig-1-7-challenges-ahead.png');

  console.log('Done. 4 figures written to chapters/');
}

main().catch(console.error);
