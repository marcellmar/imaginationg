#!/usr/bin/env npx tsx

import React from 'react';

/**
 * SCMG 487 Week 4 In-Class Case Study Diagrams
 *
 * Temu Supply Chain:
 *   fig-case-temu-supply-chain-modes.png
 *
 * GollaKrishna Milk Company (GMC) Cost of Quality:
 *   fig-case-gmc-cost-of-quality.png
 *
 * Run from imaginationg-main root:
 *   npx tsx scripts/generate-487-week4-inclass-diagrams.tsx
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
// TEMU: Three Supply Chain Modes Comparison
// ============================================================

function FigTemu() {
  const W = 1060, H = 1000;

  const modes = [
    {
      name: 'TRADITIONAL RETAIL',
      example: 'Amazon "Sold by Amazon", Walmart in-store',
      inv: 'Retailer owns inventory',
      warehouse: 'US-based (Amazon: 110+ fulfillment centers)',
      shipping: 'Domestic ground/air',
      speed: '1-2 days (Prime)',
      capital: 'Very high',
      tariff: 'Full (bulk imports above de minimis)',
      color: C.blue,
      bg: C.blueBg,
    },
    {
      name: 'MARKETPLACE (FBA/FBM)',
      example: 'Amazon 3P sellers, eBay, Walmart marketplace',
      inv: 'Seller owns (FBA: stored at Amazon)',
      warehouse: 'US-based',
      shipping: 'Domestic',
      speed: '1-5 days',
      capital: 'Medium (FBA fees)',
      tariff: 'Varies by import method',
      color: C.amber,
      bg: C.amberBg,
    },
    {
      name: 'TEMU DIRECT FROM CHINA',
      example: 'Temu consignment model',
      inv: 'Supplier owns (consignment, 100%)',
      warehouse: 'China-based (few centralized)',
      shipping: 'Intercontinental air freight',
      speed: '5-11 days',
      capital: 'Very low (zero inventory)',
      tariff: 'Minimal (de minimis <$800)',
      color: C.green,
      bg: C.greenBg,
    },
  ];

  const risks = [
    { risk: 'De minimis repeal', detail: '$800 threshold to $10 = tariffs on nearly everything. EU scrapping EUR150 threshold.', severity: 'CRITICAL' },
    { risk: 'Profitability', detail: 'Lost ~$30 per US order. $140M marketing in month one. Subsidized growth model.', severity: 'HIGH' },
    { risk: 'Geopolitical', detail: 'US-China trade tensions, potential sanctions. Temu at the center.', severity: 'HIGH' },
    { risk: 'Delivery speed', detail: '5-11 days vs Amazon Prime 1-2 days. Third-party last-mile = variability.', severity: 'MEDIUM' },
    { risk: 'Quality + ethics', detail: 'BBB C+ rating, 2,425 complaints. Forced labor concerns. Data privacy scrutiny.', severity: 'MEDIUM' },
    { risk: 'Supplier churn', detail: 'Transactional relationships. Razor-thin margins. Suppliers unhappy and defecting.', severity: 'MEDIUM' },
  ];

  const fields = ['inv', 'warehouse', 'shipping', 'speed', 'capital', 'tariff'] as const;
  const labels = ['Inventory ownership', 'Warehouse location', 'Shipping method', 'Delivery speed', 'Capital tied up', 'Tariff exposure'];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: W, minHeight: H, backgroundColor: C.bg, padding: '32px 40px', fontFamily: 'Inter, sans-serif' }}>

      <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 6 }}>
        <span style={{ fontSize: 10, color: C.muted, letterSpacing: 1.5, textTransform: 'uppercase' as const }}>In-Class Case · Week 4</span>
        <span style={{ fontSize: 22, fontWeight: 700, color: C.text, marginTop: 4 }}>Temu Supply Chain: Three Delivery Mode Comparison</span>
        <span style={{ fontSize: 12, color: C.muted, marginTop: 4 }}>$15.3B global sales (2023) · 152M US monthly users · 53 countries · Launched Sept 2022</span>
      </div>

      <div style={{ display: 'flex', height: 1, backgroundColor: C.border, marginBottom: 16 }} />

      {/* Key numbers */}
      <div style={{ display: 'flex', gap: 10, marginBottom: 16 }}>
        {[
          { label: 'Avg package value', val: '~$40', note: 'Under $800 de minimis', color: C.green, bg: C.greenBg },
          { label: 'Shipping cost/pkg', val: '~$10', note: '$1 + $5 air + $3-4 last mile', color: C.amber, bg: C.amberBg },
          { label: 'Loss per US order', val: '~$30', note: 'Marketing subsidies', color: C.red, bg: C.redBg },
          { label: 'Daily exports', val: '400K pkgs', note: '600 tons/day, ~50% to US', color: C.blue, bg: C.blueBg },
        ].map((k, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '10px 12px', backgroundColor: k.bg, border: `1px solid ${k.color}`, borderRadius: 6 }}>
            <span style={{ fontSize: 9, color: k.color, letterSpacing: 1, textTransform: 'uppercase' as const }}>{k.label}</span>
            <span style={{ fontSize: 18, fontWeight: 700, color: k.color, marginTop: 2 }}>{k.val}</span>
            <span style={{ fontSize: 9, color: k.color }}>{k.note}</span>
          </div>
        ))}
      </div>

      {/* Three-mode comparison table */}
      <div style={{ display: 'flex', flexDirection: 'column', border: `1px solid ${C.border}`, borderRadius: 6, overflow: 'hidden', marginBottom: 16 }}>
        {/* Column headers */}
        <div style={{ display: 'flex' }}>
          <div style={{ display: 'flex', flex: 1.5, backgroundColor: C.accent, padding: '8px 12px' }}>
            <span style={{ fontSize: 10, fontWeight: 700, color: '#FFFFFF' }}>DIMENSION</span>
          </div>
          {modes.map((m, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', flex: 2, backgroundColor: m.bg, padding: '8px 12px', borderLeft: `1px solid ${C.border}` }}>
              <span style={{ fontSize: 10, fontWeight: 700, color: m.color }}>{m.name}</span>
              <span style={{ fontSize: 9, color: m.color }}>{m.example}</span>
            </div>
          ))}
        </div>
        {/* Data rows */}
        {fields.map((f, i) => (
          <div key={i} style={{ display: 'flex', borderTop: `1px solid ${C.rule}` }}>
            <div style={{ display: 'flex', flex: 1.5, padding: '7px 12px', backgroundColor: C.fill1, alignItems: 'center' }}>
              <span style={{ fontSize: 10, fontWeight: 700, color: C.text }}>{labels[i]}</span>
            </div>
            {modes.map((m, j) => (
              <div key={j} style={{ display: 'flex', flex: 2, padding: '7px 12px', borderLeft: `1px solid ${C.rule}`, alignItems: 'center' }}>
                <span style={{ fontSize: 10, color: C.muted }}>{m[f]}</span>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Convergence note */}
      <div style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '10px 12px', backgroundColor: C.fill1, border: `1px solid ${C.border}`, borderRadius: 6 }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: C.text, marginBottom: 4 }}>Temu moving toward Amazon</span>
          <span style={{ fontSize: 10, color: C.muted }}>Added "local warehouse" mode (March 2024). ~1,000 US sellers with local inventory. Faster delivery. Looks like Amazon FBM. Reduces tariff and delivery risk.</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '10px 12px', backgroundColor: C.fill1, border: `1px solid ${C.border}`, borderRadius: 6 }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: C.text, marginBottom: 4 }}>Amazon moving toward Temu</span>
          <span style={{ fontSize: 10, color: C.muted }}>Added "direct from China" discount section (June 2024). 9-11 day delivery. Lower prices. 75% of new Amazon items already sourced from China. Supply origins converging.</span>
        </div>
      </div>

      {/* Risk factors */}
      <span style={{ fontSize: 12, fontWeight: 700, color: C.text, marginBottom: 8 }}>RISK FACTORS</span>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 14 }}>
        {risks.map((r, i) => (
          <div key={i} style={{ display: 'flex', gap: 10, padding: '8px 12px', backgroundColor: C.fill1, border: `1px solid ${C.rule}`, borderRadius: 5 }}>
            <span style={{
              fontSize: 9, fontWeight: 700, letterSpacing: 0.5, flexShrink: 0, padding: '2px 6px', borderRadius: 3,
              color: r.severity === 'CRITICAL' ? C.red : r.severity === 'HIGH' ? C.amber : C.muted,
              backgroundColor: r.severity === 'CRITICAL' ? C.redBg : r.severity === 'HIGH' ? C.amberBg : C.fill2,
            }}>{r.severity}</span>
            <span style={{ fontSize: 10, fontWeight: 700, color: C.text, flexShrink: 0, width: 130 }}>{r.risk}</span>
            <span style={{ fontSize: 10, color: C.muted }}>{r.detail}</span>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 6 }}>
        <span style={{ fontSize: 11, color: C.light }}>SCMG 487 | Week 4 In-Class | Temu Supply Chain</span>
      </div>
    </div>
  );
}

// ============================================================
// GMC: Cost of Quality Analysis
// ============================================================

function FigGMC() {
  const W = 1060, H = 920;

  const years = ['FY 2021', 'FY 2022', 'FY 2023', 'FY 2024'];
  const prevention = [100, 140, 150, 160];
  const appraisal = [50, 65, 73, 82];
  const intFail = [19, 15.5, 11, 7.5];
  const extFail = [15, 11, 8, 5];
  const totals = [184, 231.5, 242, 254.5];
  const goodPct = ['81.5%', '88.6%', '92.1%', '95.1%'];
  const badPct = ['18.5%', '11.4%', '7.9%', '4.9%'];

  const categories = [
    { name: 'Prevention costs', values: prevention, type: 'GOOD', color: C.green },
    { name: 'Appraisal costs', values: appraisal, type: 'GOOD', color: C.blue },
    { name: 'Internal failure', values: intFail, type: 'BAD', color: C.amber },
    { name: 'External failure', values: extFail, type: 'BAD', color: C.red },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: W, minHeight: H, backgroundColor: C.bg, padding: '32px 40px', fontFamily: 'Inter, sans-serif' }}>

      <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 6 }}>
        <span style={{ fontSize: 10, color: C.muted, letterSpacing: 1.5, textTransform: 'uppercase' as const }}>In-Class Case · Week 4</span>
        <span style={{ fontSize: 22, fontWeight: 700, color: C.text, marginTop: 4 }}>GollaKrishna Milk Company: Cost of Quality Analysis</span>
        <span style={{ fontSize: 12, color: C.muted, marginTop: 4 }}>Indian dairy cooperative · 5.74M litres/day · Karnataka · ~$740M revenue (FY23) · Profit margin shrinking</span>
      </div>

      <div style={{ display: 'flex', height: 1, backgroundColor: C.border, marginBottom: 16 }} />

      {/* CoQ framework */}
      <div style={{ display: 'flex', gap: 10, marginBottom: 16 }}>
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '10px 12px', backgroundColor: C.greenBg, border: `1px solid ${C.green}`, borderRadius: 6 }}>
          <span style={{ fontSize: 10, fontWeight: 700, color: C.green }}>COST OF GOOD QUALITY</span>
          <span style={{ fontSize: 9, color: C.green, marginTop: 4 }}>Prevention: training, equipment maintenance, new technology</span>
          <span style={{ fontSize: 9, color: C.green }}>Appraisal: inspection, testing, audits, calibration</span>
          <span style={{ fontSize: 14, fontWeight: 700, color: C.green, marginTop: 4 }}>Invest to PREVENT defects</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '10px 12px', backgroundColor: C.redBg, border: `1px solid ${C.red}`, borderRadius: 6 }}>
          <span style={{ fontSize: 10, fontWeight: 700, color: C.red }}>COST OF BAD QUALITY</span>
          <span style={{ fontSize: 9, color: C.red, marginTop: 4 }}>Internal failure: rework, scrap, downtime, fuel waste</span>
          <span style={{ fontSize: 9, color: C.red }}>External failure: returns, reverse logistics</span>
          <span style={{ fontSize: 14, fontWeight: 700, color: C.red, marginTop: 4 }}>Pay for DEFECTS that happened</span>
        </div>
      </div>

      {/* Main data table */}
      <div style={{ display: 'flex', flexDirection: 'column', border: `1px solid ${C.border}`, borderRadius: 6, overflow: 'hidden', marginBottom: 16 }}>
        <div style={{ display: 'flex', backgroundColor: C.accent }}>
          <div style={{ display: 'flex', flex: 2.5, padding: '8px 12px' }}>
            <span style={{ fontSize: 10, fontWeight: 700, color: '#FFFFFF' }}>COST CATEGORY (INR crore)</span>
          </div>
          {years.map((y, i) => (
            <div key={i} style={{ display: 'flex', flex: 1, padding: '8px 12px', borderLeft: `1px solid #444`, justifyContent: 'center' }}>
              <span style={{ fontSize: 10, fontWeight: 700, color: '#FFFFFF' }}>{y}</span>
            </div>
          ))}
          <div style={{ display: 'flex', flex: 0.8, padding: '8px 12px', borderLeft: `1px solid #444`, justifyContent: 'center' }}>
            <span style={{ fontSize: 10, fontWeight: 700, color: '#FFFFFF' }}>TREND</span>
          </div>
        </div>

        {categories.map((cat, ci) => (
          <div key={ci} style={{ display: 'flex', borderTop: `1px solid ${C.rule}`, backgroundColor: ci % 2 === 0 ? C.bg : C.fill1 }}>
            <div style={{ display: 'flex', flex: 2.5, padding: '7px 12px', alignItems: 'center', gap: 6 }}>
              <span style={{ fontSize: 9, fontWeight: 700, padding: '1px 5px', borderRadius: 3, color: cat.type === 'GOOD' ? C.green : C.red, backgroundColor: cat.type === 'GOOD' ? C.greenBg : C.redBg }}>{cat.type}</span>
              <span style={{ fontSize: 10, fontWeight: 700, color: C.text }}>{cat.name}</span>
            </div>
            {cat.values.map((v, i) => (
              <div key={i} style={{ display: 'flex', flex: 1, padding: '7px 12px', borderLeft: `1px solid ${C.rule}`, justifyContent: 'center', alignItems: 'center' }}>
                <span style={{ fontSize: 10, color: cat.color, fontWeight: 700 }}>{v}</span>
              </div>
            ))}
            <div style={{ display: 'flex', flex: 0.8, padding: '7px 12px', borderLeft: `1px solid ${C.rule}`, justifyContent: 'center', alignItems: 'center' }}>
              <span style={{ fontSize: 10, fontWeight: 700, color: cat.type === 'GOOD' ? C.green : C.green }}>
                {cat.type === 'GOOD' ? '\u2191' : '\u2193'}
              </span>
            </div>
          </div>
        ))}

        {/* Total row */}
        <div style={{ display: 'flex', borderTop: `2px solid ${C.accent}`, backgroundColor: C.fill2 }}>
          <div style={{ display: 'flex', flex: 2.5, padding: '8px 12px', alignItems: 'center' }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: C.text }}>TOTAL CoQ</span>
          </div>
          {totals.map((t, i) => (
            <div key={i} style={{ display: 'flex', flex: 1, padding: '8px 12px', borderLeft: `1px solid ${C.rule}`, justifyContent: 'center', alignItems: 'center' }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: C.text }}>{t}</span>
            </div>
          ))}
          <div style={{ display: 'flex', flex: 0.8, padding: '8px 12px', borderLeft: `1px solid ${C.rule}`, justifyContent: 'center', alignItems: 'center' }}>
            <span style={{ fontSize: 10, fontWeight: 700, color: C.amber }}>{'\u2191'} 38%</span>
          </div>
        </div>

        {/* Good/Bad split */}
        <div style={{ display: 'flex', borderTop: `1px solid ${C.rule}` }}>
          <div style={{ display: 'flex', flex: 2.5, padding: '6px 12px', alignItems: 'center' }}>
            <span style={{ fontSize: 10, color: C.green, fontWeight: 700 }}>Good quality % of CoQ</span>
          </div>
          {goodPct.map((p, i) => (
            <div key={i} style={{ display: 'flex', flex: 1, padding: '6px 12px', borderLeft: `1px solid ${C.rule}`, justifyContent: 'center', alignItems: 'center' }}>
              <span style={{ fontSize: 10, fontWeight: 700, color: C.green }}>{p}</span>
            </div>
          ))}
          <div style={{ display: 'flex', flex: 0.8 }} />
        </div>
        <div style={{ display: 'flex', borderTop: `1px solid ${C.rule}` }}>
          <div style={{ display: 'flex', flex: 2.5, padding: '6px 12px', alignItems: 'center' }}>
            <span style={{ fontSize: 10, color: C.red, fontWeight: 700 }}>Bad quality % of CoQ</span>
          </div>
          {badPct.map((p, i) => (
            <div key={i} style={{ display: 'flex', flex: 1, padding: '6px 12px', borderLeft: `1px solid ${C.rule}`, justifyContent: 'center', alignItems: 'center' }}>
              <span style={{ fontSize: 10, fontWeight: 700, color: C.red }}>{p}</span>
            </div>
          ))}
          <div style={{ display: 'flex', flex: 0.8 }} />
        </div>
      </div>

      {/* The story */}
      <span style={{ fontSize: 12, fontWeight: 700, color: C.text, marginBottom: 8 }}>WHAT THE DATA SHOWS</span>
      <div style={{ display: 'flex', gap: 10, marginBottom: 14 }}>
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '10px 12px', backgroundColor: C.greenBg, border: `1px solid ${C.green}`, borderRadius: 6 }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: C.green }}>Prevention up 60%</span>
          <span style={{ fontSize: 10, color: C.green }}>100 to 160 crore. Training, equipment maintenance, new technology all increased every year.</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '10px 12px', backgroundColor: C.greenBg, border: `1px solid ${C.green}`, borderRadius: 6 }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: C.green }}>Failure down 63%</span>
          <span style={{ fontSize: 10, color: C.green }}>Internal + external failure: 34 to 12.5 crore. Rework, scrap, returns, reverse logistics all declining steadily.</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '10px 12px', backgroundColor: C.amberBg, border: `1px solid ${C.amber}`, borderRadius: 6 }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: C.amber }}>But total CoQ up 38%</span>
          <span style={{ fontSize: 10, color: C.amber }}>184 to 254.5 crore. Spending more to prevent less. Diminishing returns question: is the rate of prevention increase still justified?</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '10px 12px', backgroundColor: C.redBg, border: `1px solid ${C.red}`, borderRadius: 6 }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: C.red }}>Profit margin shrinking</span>
          <span style={{ fontSize: 10, color: C.red }}>3.0% (FY21) to 1.5% (FY23). Revenue declined FY22 to FY23. Quality spend growing as a share of revenue.</span>
        </div>
      </div>

      {/* Key insight */}
      <div style={{ display: 'flex', padding: '12px 16px', backgroundColor: C.fill1, border: `1px solid ${C.border}`, borderRadius: 6 }}>
        <span style={{ fontSize: 11, color: C.text }}>
          <span style={{ fontWeight: 700 }}>The pattern is textbook-correct but the economics are tightening.</span> Failure costs dropped 63% while prevention rose 60%. The composition shift (18.5% bad to 4.9% bad) is exactly what quality theory predicts. But the total bill went up 38% on margins that are already thin. In dairy, one contamination incident can destroy years of brand trust, so "overspending" on prevention may be rational insurance. The question for class: where are the diminishing returns, and how do you find the optimal CoQ balance?
        </span>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 14 }}>
        <span style={{ fontSize: 11, color: C.light }}>SCMG 487 | Week 4 In-Class | GollaKrishna Milk Company</span>
      </div>
    </div>
  );
}

// ============================================================

async function main() {
  const fonts = await loadFonts();
  console.log('Fonts loaded. Generating Week 4 in-class case figures...');

  const figTemu = await render(<FigTemu />, 1060, 1000, fonts);
  save(figTemu, 'fig-case-temu-supply-chain-modes.png');

  const figGMC = await render(<FigGMC />, 1060, 920, fonts);
  save(figGMC, 'fig-case-gmc-cost-of-quality.png');

  console.log('Done. 2 in-class case figures written to case-studies/');
}

main().catch(console.error);
