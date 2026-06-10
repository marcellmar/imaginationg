#!/usr/bin/env npx tsx

import React from 'react';

/**
 * SCMG 589 Capstone - Section 7 (Inventory & Warehousing) Appendix Exhibits
 *
 * Builds 6 exhibits for Section 11 Appendix:
 *   7.1 Three-Zone Warehouse Layout
 *   7.2 ABC Classification Matrix (Raw Materials + Finished Goods)
 *   7.3 Annual Demand Curve - Illinois Craft Beer
 *   7.4 Safety Stock & Reorder Point Worksheet (Flagship IPA)
 *   7.5 Three-Way Comparison (Midwest Coast / Haymarket / Honest Ale)
 *   7.6 Inventory KPI Dashboard
 *
 * Run from imaginationg-main root:
 *   npx tsx scripts/generate-589-section7-exhibits.tsx
 */

import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import * as fs from 'fs';
import * as path from 'path';

const OUT = path.join(
  '/Users/marsonemac/Documents/projects/marcus-gpi-brain',
  'work-loyola/processed-documents/SCMG-589-capstone/figures/section-07'
);

const C = {
  bg:       '#FFFFFF',
  text:     '#111111',
  muted:    '#555555',
  light:    '#888888',
  border:   '#CCCCCC',
  rule:     '#E5E5E5',
  accent:   '#1A1A1A',
  fill1:    '#F7F7F7',
  fill2:    '#EFEFEF',
  // semantic
  cold:     '#1E40AF', coldBg:    '#DBEAFE', coldLt: '#BFDBFE',
  cool:     '#15803D', coolBg:    '#DCFCE7', coolLt: '#BBF7D0',
  ambient:  '#B45309', ambientBg: '#FEF3C7', ambientLt:'#FDE68A',
  // class colors
  classA:   '#9B2226', classABg:  '#FFE5E9',
  classB:   '#7B5800', classBBg:  '#FFF3CD',
  classC:   '#1E3A5F', classCBg:  '#DBEAFE',
  // accents
  green:    '#2D6A4F',
  red:      '#9B2226',
  amber:    '#7B5800',
  blue:     '#1E3A5F',
  blueMd:   '#3B82F6',
  teal:     '#0D9488',
};

async function loadFonts() {
  const dir = path.join(process.cwd(), 'public', 'fonts');
  const reg = fs.readFileSync(path.join(dir, 'Inter-Regular.woff'));
  const bld = fs.readFileSync(path.join(dir, 'Inter-Bold.woff'));
  return [
    { name: 'Inter', data: reg.buffer.slice(reg.byteOffset, reg.byteOffset + reg.byteLength), weight: 400 as const },
    { name: 'Inter', data: bld.buffer.slice(bld.byteOffset, bld.byteOffset + bld.byteLength), weight: 700 as const },
  ];
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
// EXHIBIT 7.1: Three-Zone Warehouse Layout
// ============================================================

function ExhibitWarehouseZones() {
  const W = 1060, H = 600;

  const zones = [
    {
      label: 'COLD STORAGE',
      temp: '34 to 38 degrees Fahrenheit',
      footprint: '~35%',
      border: C.cold, bg: C.coldBg, lt: C.coldLt,
      items: [
        'Finished beer (kegs and cans)',
        'Active hop working stock',
        'Yeast cultures (33-40 degrees F)',
        'Tapped keg area (taproom-adjacent)',
      ],
      controls: 'VFD fan systems, +/- 1 degree C variation, sized for ~3 weeks FG at Phase 2',
    },
    {
      label: 'COOL & DRY STORAGE',
      temp: '50 to 65 degrees Fahrenheit',
      footprint: '~40%',
      border: C.cool, bg: C.coolBg, lt: C.coolLt,
      items: [
        'Pilsner and 2-row base malts',
        'Specialty malts',
        'Shelf-stable adjuncts (dry)',
        'Reserve hop freezer (in-zone)',
      ],
      controls: 'Bulk palletized, FIFO via date-stamped pallets, adjacent to mill room',
    },
    {
      label: 'AMBIENT STORAGE',
      temp: 'Room temperature',
      footprint: '~25%',
      border: C.ambient, bg: C.ambientBg, lt: C.ambientLt,
      items: [
        'Aluminum cans, labels, six-pack carriers',
        'Empty kegs awaiting cleaning',
        'Cleaning chemicals, MRO supplies',
        'Cans purchased in quarterly bulk orders',
      ],
      controls: 'Quarterly bulk procurement to hedge aluminum tariff (5-10% can cost pressure)',
    },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: W, height: H, backgroundColor: C.bg, padding: '32px 48px', fontFamily: 'Inter, sans-serif' }}>

      {/* Header */}
      <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 4 }}>
        <span style={{ fontSize: 10, color: C.muted, letterSpacing: 1.5 }}>EXHIBIT 7.1 - INVENTORY MANAGEMENT AND WAREHOUSING</span>
        <span style={{ fontSize: 22, fontWeight: 700, color: C.text, marginTop: 4 }}>Three-Zone Warehouse Design</span>
      </div>
      <span style={{ fontSize: 11, color: C.muted, marginTop: 6, marginBottom: 18 }}>
        Logan Square facility. Each zone matched to material temperature requirements. Coordinates with floor plan in Section 10, Fig 10.02.
      </span>

      <div style={{ display: 'flex', height: 1, backgroundColor: C.rule, marginBottom: 18 }} />

      {/* Three zones side by side */}
      <div style={{ display: 'flex', gap: 14, flex: 1 }}>
        {zones.map((z) => (
          <div key={z.label} style={{
            display: 'flex', flexDirection: 'column', flex: 1,
            border: `2px solid ${z.border}`, borderRadius: 8, overflow: 'hidden',
            backgroundColor: C.bg,
          }}>
            {/* Label band */}
            <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: z.bg, padding: '12px 16px' }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: z.border, letterSpacing: 0.8 }}>{z.label}</span>
              <span style={{ fontSize: 10, color: z.border, marginTop: 4 }}>{z.temp}</span>
            </div>

            {/* Footprint */}
            <div style={{ display: 'flex', flexDirection: 'column', padding: '14px 16px', borderBottom: `1px solid ${C.rule}`, backgroundColor: C.fill1 }}>
              <span style={{ fontSize: 9, color: C.light, letterSpacing: 1.2 }}>WAREHOUSE FOOTPRINT</span>
              <span style={{ fontSize: 26, fontWeight: 700, color: C.text, marginTop: 2 }}>{z.footprint}</span>
            </div>

            {/* Items */}
            <div style={{ display: 'flex', flexDirection: 'column', padding: '14px 16px', flex: 1 }}>
              <span style={{ fontSize: 9, color: C.light, letterSpacing: 1.2, marginBottom: 8 }}>HOLDS</span>
              {z.items.map((it, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 6, marginBottom: 5 }}>
                  <span style={{ fontSize: 11, color: z.border, marginTop: 1 }}>·</span>
                  <span style={{ fontSize: 10, color: C.text, lineHeight: 1.4, flex: 1 }}>{it}</span>
                </div>
              ))}
            </div>

            {/* Controls */}
            <div style={{ display: 'flex', flexDirection: 'column', padding: '12px 16px', backgroundColor: z.bg, borderTop: `1px solid ${z.lt}` }}>
              <span style={{ fontSize: 9, color: z.border, letterSpacing: 1.2, marginBottom: 4 }}>CONTROLS</span>
              <span style={{ fontSize: 10, color: z.border, lineHeight: 1.4 }}>{z.controls}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer note */}
      <div style={{ display: 'flex', backgroundColor: C.fill1, padding: '10px 16px', marginTop: 14, borderLeft: `3px solid ${C.accent}` }}>
        <span style={{ fontSize: 10, color: C.muted, lineHeight: 1.5 }}>
          5S applied across all three zones. Color-coded labels (blue cold, green cool, yellow ambient). Sustained through daily MDI board (Section 10, Fig 10.08).
        </span>
      </div>
    </div>
  );
}

// ============================================================
// EXHIBIT 7.2: ABC Classification Matrix
// ============================================================

function ExhibitABCMatrix() {
  const W = 1060, H = 700;

  const rawRows = [
    {
      cls: 'A', clsBg: C.classABg, clsBorder: C.classA,
      materials: 'Yeast, premium hop varieties (Citra, Mosaic, Galaxy), specialty malts',
      profile: 'Highest cost per unit, highest spoilage risk',
      cycle: 'Weekly',
      safety: '1 to 2 weeks coverage',
    },
    {
      cls: 'B', clsBg: C.classBBg, clsBorder: C.classB,
      materials: 'Base malts (Pilsner, 2-row), standard hop varieties, packaging components (cans, kegs)',
      profile: 'Moderate cost, moderate stability',
      cycle: 'Monthly',
      safety: '3 to 4 weeks coverage',
    },
    {
      cls: 'C', clsBg: C.classCBg, clsBorder: C.classC,
      materials: 'Adjuncts, finings, water treatment chemicals, MRO supplies',
      profile: 'Low cost, high stability',
      cycle: 'Quarterly',
      safety: '1 to 2 months coverage',
    },
  ];

  const fgRows = [
    {
      cls: 'A', clsBg: C.classABg, clsBorder: C.classA,
      sku: 'Flagship IPA, pale ale, year-round lager',
      policy: 'Brewed continuously to maintain taproom and distribution coverage. 2 weeks safety stock. Monthly forecast review.',
      cycle: 'Weekly',
    },
    {
      cls: 'B', clsBg: C.classBBg, clsBorder: C.classB,
      sku: 'Rotating seasonal, limited release',
      policy: 'Brewed to forecasted seasonal window. Minimal safety stock. Production tied to event calendar.',
      cycle: 'Monthly',
    },
    {
      cls: 'C', clsBg: C.classCBg, clsBorder: C.classC,
      sku: 'Collaboration one-offs, taproom-only experimental',
      policy: 'Brewed to demand. Zero safety stock. Sold through taproom only.',
      cycle: 'Quarterly',
    },
  ];

  function tableHeader(cols: { label: string; w: number }[]) {
    return (
      <div style={{ display: 'flex', backgroundColor: C.accent, padding: '8px 12px' }}>
        {cols.map((c, i) => (
          <span key={i} style={{ fontSize: 10, fontWeight: 700, color: '#fff', letterSpacing: 0.6, width: c.w }}>{c.label.toUpperCase()}</span>
        ))}
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: W, height: H, backgroundColor: C.bg, padding: '32px 48px', fontFamily: 'Inter, sans-serif' }}>

      {/* Header */}
      <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 4 }}>
        <span style={{ fontSize: 10, color: C.muted, letterSpacing: 1.5 }}>EXHIBIT 7.2 - INVENTORY MANAGEMENT AND WAREHOUSING</span>
        <span style={{ fontSize: 22, fontWeight: 700, color: C.text, marginTop: 4 }}>ABC Classification Matrix</span>
      </div>
      <span style={{ fontSize: 11, color: C.muted, marginTop: 6, marginBottom: 18 }}>
        Pareto-aligned attention. Cycle count frequency and safety stock policy scale with dollar exposure, not volume.
      </span>

      <div style={{ display: 'flex', height: 1, backgroundColor: C.rule, marginBottom: 18 }} />

      {/* Raw materials table */}
      <span style={{ fontSize: 13, fontWeight: 700, color: C.text, marginBottom: 8 }}>Raw Materials</span>
      <div style={{ display: 'flex', flexDirection: 'column', border: `1px solid ${C.border}`, borderRadius: 6, overflow: 'hidden', marginBottom: 24 }}>
        {tableHeader([
          { label: 'Class', w: 60 },
          { label: 'Materials', w: 380 },
          { label: 'Cost Profile', w: 230 },
          { label: 'Cycle Count', w: 110 },
          { label: 'Safety Stock', w: 180 },
        ])}
        {rawRows.map((r, i) => (
          <div key={r.cls} style={{ display: 'flex', padding: '12px 12px', backgroundColor: r.clsBg, borderTop: i > 0 ? `1px solid ${C.rule}` : 'none', alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', width: 60, alignItems: 'center' }}>
              <div style={{ display: 'flex', width: 28, height: 28, borderRadius: 14, backgroundColor: r.clsBorder, alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: '#fff' }}>{r.cls}</span>
              </div>
            </div>
            <span style={{ fontSize: 10, color: C.text, width: 380, lineHeight: 1.45, paddingRight: 10 }}>{r.materials}</span>
            <span style={{ fontSize: 10, color: C.muted, width: 230, lineHeight: 1.45, paddingRight: 10 }}>{r.profile}</span>
            <span style={{ fontSize: 10, fontWeight: 700, color: r.clsBorder, width: 110 }}>{r.cycle}</span>
            <span style={{ fontSize: 10, color: C.text, width: 180, lineHeight: 1.45 }}>{r.safety}</span>
          </div>
        ))}
      </div>

      {/* Finished goods table */}
      <span style={{ fontSize: 13, fontWeight: 700, color: C.text, marginBottom: 8 }}>Finished Goods (SKUs)</span>
      <div style={{ display: 'flex', flexDirection: 'column', border: `1px solid ${C.border}`, borderRadius: 6, overflow: 'hidden' }}>
        {tableHeader([
          { label: 'Class', w: 60 },
          { label: 'SKU Type', w: 280 },
          { label: 'Inventory Policy', w: 510 },
          { label: 'Cycle Count', w: 110 },
        ])}
        {fgRows.map((r, i) => (
          <div key={r.cls} style={{ display: 'flex', padding: '12px 12px', backgroundColor: r.clsBg, borderTop: i > 0 ? `1px solid ${C.rule}` : 'none', alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', width: 60, alignItems: 'center' }}>
              <div style={{ display: 'flex', width: 28, height: 28, borderRadius: 14, backgroundColor: r.clsBorder, alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: '#fff' }}>{r.cls}</span>
              </div>
            </div>
            <span style={{ fontSize: 10, color: C.text, width: 280, lineHeight: 1.45, paddingRight: 10 }}>{r.sku}</span>
            <span style={{ fontSize: 10, color: C.muted, width: 510, lineHeight: 1.45, paddingRight: 10 }}>{r.policy}</span>
            <span style={{ fontSize: 10, fontWeight: 700, color: r.clsBorder, width: 110 }}>{r.cycle}</span>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div style={{ display: 'flex', backgroundColor: C.fill1, padding: '10px 16px', marginTop: 18, borderLeft: `3px solid ${C.accent}` }}>
        <span style={{ fontSize: 10, color: C.muted, lineHeight: 1.5 }}>
          Mirrors the Kraljic supplier segmentation in Section 5 appendix. Aligns inventory effort with where dollar exposure actually sits.
        </span>
      </div>
    </div>
  );
}

// ============================================================
// EXHIBIT 7.3: Annual Demand Curve
// ============================================================

function ExhibitDemandCurve() {
  const W = 1060, H = 560;

  // Monthly demand index, baseline 100. Reflects Illinois craft seasonal pattern.
  const months = [
    { m: 'Jan', val: 70,  label: 'TROUGH' },
    { m: 'Feb', val: 65,  label: '' },
    { m: 'Mar', val: 85,  label: 'St. Patrick' },
    { m: 'Apr', val: 95,  label: '' },
    { m: 'May', val: 110, label: '' },
    { m: 'Jun', val: 135, label: 'PEAK' },
    { m: 'Jul', val: 145, label: '' },
    { m: 'Aug', val: 140, label: '' },
    { m: 'Sep', val: 115, label: '' },
    { m: 'Oct', val: 100, label: '' },
    { m: 'Nov', val: 120, label: 'Holiday' },
    { m: 'Dec', val: 130, label: '' },
  ];

  const chartW = 880, chartH = 280;
  const maxVal = 160;
  const leftPad = 60;
  const topPad = 30;

  function pointX(i: number) { return leftPad + (i / (months.length - 1)) * (chartW - 80); }
  function pointY(v: number) { return topPad + (1 - v / maxVal) * chartH; }

  // Build smooth path via cubic-bezier-ish approximation
  let path = '';
  months.forEach((m, i) => {
    const x = pointX(i), y = pointY(m.val);
    if (i === 0) path += `M ${x} ${y}`;
    else {
      const xPrev = pointX(i - 1), yPrev = pointY(months[i - 1].val);
      const cp1x = xPrev + (x - xPrev) / 2, cp1y = yPrev;
      const cp2x = xPrev + (x - xPrev) / 2, cp2y = y;
      path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${x} ${y}`;
    }
  });

  // Build area fill (line down to baseline)
  const areaPath = path + ` L ${pointX(months.length - 1)} ${pointY(0)} L ${leftPad} ${pointY(0)} Z`;

  // SVG only renders shapes (lines, paths, circles). All text is rendered as React divs over the chart.
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${chartW} ${chartH + 60}">
      <defs>
        <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="${C.blueMd}" stop-opacity="0.25"/>
          <stop offset="100%" stop-color="${C.blueMd}" stop-opacity="0.02"/>
        </linearGradient>
      </defs>
      ${[0, 40, 80, 120, 160].map(v => `
        <line x1="${leftPad}" y1="${pointY(v)}" x2="${leftPad + chartW - 80}" y2="${pointY(v)}" stroke="${C.rule}" stroke-width="1"/>
      `).join('')}
      <path d="${areaPath}" fill="url(#grad)"/>
      <path d="${path}" stroke="${C.blueMd}" stroke-width="2.5" fill="none"/>
      ${months.map((m, i) => `
        <circle cx="${pointX(i)}" cy="${pointY(m.val)}" r="4" fill="${C.blueMd}"/>
      `).join('')}
    </svg>
  `;
  const svgB64 = 'data:image/svg+xml;base64,' + Buffer.from(svg).toString('base64');

  const annotations = [
    { color: C.cool, label: 'PEAK', value: 'Jun-Aug', why: 'Patio traffic, outdoor events, sports seasons. Wheat beer +40% summer.' },
    { color: C.amber, label: 'HOLIDAY', value: 'Nov-Dec', why: 'Gift packs, specialty releases. Barrel-aged stouts 80% of annual sales here.' },
    { color: C.cold, label: 'TROUGH', value: 'Jan-Feb', why: 'Lowest demand. Highest overstock and shelf-life pressure on standing inventory.' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: W, height: H, backgroundColor: C.bg, padding: '32px 48px', fontFamily: 'Inter, sans-serif' }}>

      {/* Header */}
      <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 4 }}>
        <span style={{ fontSize: 10, color: C.muted, letterSpacing: 1.5 }}>EXHIBIT 7.3 - INVENTORY MANAGEMENT AND WAREHOUSING</span>
        <span style={{ fontSize: 22, fontWeight: 700, color: C.text, marginTop: 4 }}>Annual Demand Curve - Illinois Craft Beer</span>
      </div>
      <span style={{ fontSize: 11, color: C.muted, marginTop: 6, marginBottom: 14 }}>
        Indexed monthly demand (Jan baseline = 100). Pattern derived from Brewers Association seasonal benchmarks and Crafted ERP forecasting data.
      </span>

      <div style={{ display: 'flex', height: 1, backgroundColor: C.rule, marginBottom: 8 }} />

      {/* Chart with overlaid text labels */}
      <div style={{ display: 'flex', position: 'relative', width: chartW, height: chartH + 60, alignSelf: 'center' }}>
        <img src={svgB64} width={chartW} height={chartH + 60} style={{ position: 'absolute', top: 0, left: 0 }} />
        {/* Y-axis labels */}
        {[0, 40, 80, 120, 160].map(v => (
          <span key={`y${v}`} style={{
            position: 'absolute',
            left: 0, top: pointY(v) - 7, width: leftPad - 12,
            fontSize: 10, color: C.light, textAlign: 'right' as const,
          }}>{v}</span>
        ))}
        {/* Month labels */}
        {months.map((m, i) => (
          <span key={`m${i}`} style={{
            position: 'absolute',
            left: pointX(i) - 18, top: chartH + topPad + 6, width: 36,
            fontSize: 11, fontWeight: 700 as const, color: C.text, textAlign: 'center' as const,
          }}>{m.m}</span>
        ))}
        {/* Inline highlight labels above peaks */}
        {months.map((m, i) => m.label ? (
          <span key={`l${i}`} style={{
            position: 'absolute',
            left: pointX(i) - 60, top: pointY(m.val) - 26, width: 120,
            fontSize: 9, fontWeight: 700 as const, color: C.muted, textAlign: 'center' as const, letterSpacing: '1px',
          }}>{m.label.toUpperCase()}</span>
        ) : null)}
      </div>

      {/* Annotations */}
      <div style={{ display: 'flex', gap: 14, marginTop: 12 }}>
        {annotations.map((a) => (
          <div key={a.label} style={{ display: 'flex', flexDirection: 'column', flex: 1, border: `1.5px solid ${a.color}`, borderRadius: 6, padding: '10px 14px', backgroundColor: C.bg }}>
            <span style={{ fontSize: 9, fontWeight: 700, color: a.color, letterSpacing: 1 }}>{a.label}</span>
            <span style={{ fontSize: 14, fontWeight: 700, color: C.text, marginTop: 4 }}>{a.value}</span>
            <span style={{ fontSize: 10, color: C.muted, marginTop: 6, lineHeight: 1.4 }}>{a.why}</span>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div style={{ display: 'flex', backgroundColor: C.fill1, padding: '10px 16px', marginTop: 14, borderLeft: `3px solid ${C.accent}` }}>
        <span style={{ fontSize: 10, color: C.muted, lineHeight: 1.5 }}>
          Honest Ale operates on three-tier forecasting cadence: November annual planning, monthly rolling reviews, weekly inventory position checks. Anchored to Section 5 Monday procurement cycle.
        </span>
      </div>
    </div>
  );
}

// ============================================================
// EXHIBIT 7.4: Safety Stock & Reorder Worksheet
// ============================================================

function ExhibitSafetyStock() {
  const W = 1060, H = 660;

  const inputs = [
    { label: 'Average weekly demand (Phase 2)', value: '100 cases', source: 'Built from Midwest Coast reorder trigger (T. Ficken, Apr 13, 2026)' },
    { label: 'Demand standard deviation', value: '25 cases', source: 'Estimated at 25% of mean for craft IPA' },
    { label: 'Production lead time', value: '3 weeks', source: 'Standard ale cycle: brew + ferment + condition + package (M. Gemma, Apr 15, 2026)' },
    { label: 'Service level target', value: '95%', source: 'Z = 1.65 (one-tail standard normal)' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: W, height: H, backgroundColor: C.bg, padding: '32px 48px', fontFamily: 'Inter, sans-serif' }}>

      {/* Header */}
      <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 4 }}>
        <span style={{ fontSize: 10, color: C.muted, letterSpacing: 1.5 }}>EXHIBIT 7.4 - INVENTORY MANAGEMENT AND WAREHOUSING</span>
        <span style={{ fontSize: 22, fontWeight: 700, color: C.text, marginTop: 4 }}>Safety Stock & Reorder Point - Flagship IPA</span>
      </div>
      <span style={{ fontSize: 11, color: C.muted, marginTop: 6, marginBottom: 18 }}>
        Worked calculation per Berk (2026) inventory lecture. Baseline policy refined as Honest Ale accumulates own demand history.
      </span>

      <div style={{ display: 'flex', height: 1, backgroundColor: C.rule, marginBottom: 18 }} />

      {/* Inputs table */}
      <span style={{ fontSize: 12, fontWeight: 700, color: C.text, marginBottom: 8 }}>Inputs</span>
      <div style={{ display: 'flex', flexDirection: 'column', border: `1px solid ${C.border}`, borderRadius: 6, overflow: 'hidden', marginBottom: 18 }}>
        <div style={{ display: 'flex', backgroundColor: C.accent, padding: '8px 14px' }}>
          <span style={{ fontSize: 10, fontWeight: 700, color: '#fff', letterSpacing: 0.6, width: 280 }}>PARAMETER</span>
          <span style={{ fontSize: 10, fontWeight: 700, color: '#fff', letterSpacing: 0.6, width: 160 }}>VALUE</span>
          <span style={{ fontSize: 10, fontWeight: 700, color: '#fff', letterSpacing: 0.6, width: 480 }}>SOURCE</span>
        </div>
        {inputs.map((r, i) => (
          <div key={i} style={{ display: 'flex', padding: '11px 14px', backgroundColor: i % 2 === 0 ? C.bg : C.fill1, borderTop: i > 0 ? `1px solid ${C.rule}` : 'none', alignItems: 'center' }}>
            <span style={{ fontSize: 11, color: C.text, width: 280 }}>{r.label}</span>
            <span style={{ fontSize: 13, fontWeight: 700, color: C.blue, width: 160 }}>{r.value}</span>
            <span style={{ fontSize: 10, color: C.muted, width: 480, lineHeight: 1.4 }}>{r.source}</span>
          </div>
        ))}
      </div>

      {/* Formula and outputs */}
      <div style={{ display: 'flex', gap: 16 }}>
        {/* Formula box */}
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, border: `2px solid ${C.accent}`, borderRadius: 8, padding: '18px 22px', backgroundColor: C.fill1 }}>
          <span style={{ fontSize: 10, fontWeight: 700, color: C.muted, letterSpacing: 1.2, marginBottom: 12 }}>SAFETY STOCK FORMULA</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontSize: 26, fontWeight: 700, color: C.text }}>SS</span>
            <span style={{ fontSize: 26, color: C.muted }}>=</span>
            <span style={{ fontSize: 26, fontWeight: 700, color: C.blue }}>Z</span>
            <span style={{ fontSize: 26, color: C.muted }}>x</span>
            <span style={{ fontSize: 26, fontWeight: 700, color: C.blue }}>StDev</span>
            <span style={{ fontSize: 26, color: C.muted }}>x</span>
            <span style={{ fontSize: 26, fontWeight: 700, color: C.blue }}>sqrt(LT)</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 14 }}>
            <span style={{ fontSize: 22, fontWeight: 700, color: C.text }}>SS</span>
            <span style={{ fontSize: 22, color: C.muted }}>=</span>
            <span style={{ fontSize: 22, fontWeight: 700, color: C.text }}>1.65</span>
            <span style={{ fontSize: 22, color: C.muted }}>x</span>
            <span style={{ fontSize: 22, fontWeight: 700, color: C.text }}>25</span>
            <span style={{ fontSize: 22, color: C.muted }}>x</span>
            <span style={{ fontSize: 22, fontWeight: 700, color: C.text }}>sqrt(3)</span>
            <span style={{ fontSize: 22, color: C.muted }}>=</span>
            <span style={{ fontSize: 22, fontWeight: 700, color: C.green }}>71 cases</span>
          </div>
          <span style={{ fontSize: 10, color: C.muted, marginTop: 10, lineHeight: 1.5 }}>
            Reorder Point = (Avg Demand × LT) + SS = (100 × 3) + 71
          </span>
        </div>

        {/* Outputs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ display: 'flex', flexDirection: 'column', border: `2px solid ${C.green}`, borderRadius: 8, padding: '18px 24px', backgroundColor: '#F0FDF4', minWidth: 240 }}>
            <span style={{ fontSize: 10, fontWeight: 700, color: C.green, letterSpacing: 1.2 }}>SAFETY STOCK</span>
            <span style={{ fontSize: 36, fontWeight: 700, color: C.green, marginTop: 4 }}>71</span>
            <span style={{ fontSize: 10, color: C.muted, marginTop: 2 }}>cases</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', border: `2px solid ${C.blue}`, borderRadius: 8, padding: '18px 24px', backgroundColor: C.classCBg, minWidth: 240 }}>
            <span style={{ fontSize: 10, fontWeight: 700, color: C.blue, letterSpacing: 1.2 }}>REORDER POINT</span>
            <span style={{ fontSize: 36, fontWeight: 700, color: C.blue, marginTop: 4 }}>371</span>
            <span style={{ fontSize: 10, color: C.muted, marginTop: 2 }}>cases — triggers new IPA brew</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ display: 'flex', backgroundColor: C.fill1, padding: '10px 16px', marginTop: 18, borderLeft: `3px solid ${C.accent}` }}>
        <span style={{ fontSize: 10, color: C.muted, lineHeight: 1.5 }}>
          Other A-class SKUs use the same formula with style-specific lead times. Lager carries a longer 6-7 week conditioning cycle, raising both pipeline inventory and safety stock requirements. B-class seasonal SKUs use the seasonal calendar as planning anchor instead.
        </span>
      </div>
    </div>
  );
}

// ============================================================
// EXHIBIT 7.5: Three-Way Comparison
// ============================================================

function ExhibitComparison() {
  const W = 1060, H = 700;

  const cols = [
    { name: 'MIDWEST COAST', sub: 'Single-site, taproom-centric', color: C.cold, bg: C.coldBg },
    { name: 'HAYMARKET', sub: 'Two-echelon, dual-site', color: C.cool, bg: C.coolBg },
    { name: 'HONEST ALE', sub: 'Single-site, taproom-first', color: C.amber, bg: C.ambientBg },
  ];

  const rows = [
    {
      label: 'Sites',
      values: [
        'Single Chicago location (West Town). Brewery = warehouse.',
        'Bridgman MI production + Chicago brewpub. Cross-state transfer.',
        'Single Logan Square location. Brewery + taproom + warehouse.',
      ],
    },
    {
      label: 'Production Volume',
      values: ['~1,000-1,500 bbl/year', 'Up to 20,000 bbl capacity', 'Phase 2 target 1,000-3,000 bbl'],
    },
    {
      label: 'Inventory Tech',
      values: ['Excel dashboards, 6+ years history, 98% accuracy', 'Ekos ERP', 'Ekos + Square POS integration (Section 9)'],
    },
    {
      label: 'Keg Fleet',
      values: [
        'Owns kegs. Forecast by feel.',
        'Leases kegs via MicroStar. Lease contract forces annual planning.',
        'MicroStar pay-per-fill (Phase 1-2). 12 owned kegs for taproom.',
      ],
    },
    {
      label: 'Forecasting',
      values: [
        'Weekly Excel review. November plans annual seasonal lineup.',
        'Distribution rep + head brewer collaboration. Annual forced forecast tied to keg lease.',
        'Three-tier: annual (Nov) + monthly rolling + weekly position check.',
      ],
    },
    {
      label: 'Distribution',
      values: ['Self-distribution, IL only', 'Three-tier, IL + MI distributors', 'Self-distribution Phase 1-2, IL only'],
    },
    {
      label: 'Channel Margin',
      values: ['$8 taproom vs $1 cost (87.5%)', '$1,400 on-site vs $400 distro per 2 kegs', 'Taproom-first allocation, distribution make-to-order'],
    },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: W, height: H, backgroundColor: C.bg, padding: '32px 48px', fontFamily: 'Inter, sans-serif' }}>

      {/* Header */}
      <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 4 }}>
        <span style={{ fontSize: 10, color: C.muted, letterSpacing: 1.5 }}>EXHIBIT 7.5 - INVENTORY MANAGEMENT AND WAREHOUSING</span>
        <span style={{ fontSize: 22, fontWeight: 700, color: C.text, marginTop: 4 }}>Inventory Practices: Comparative Lens</span>
      </div>
      <span style={{ fontSize: 11, color: C.muted, marginTop: 6, marginBottom: 18 }}>
        Honest Ale's design choices benchmarked against two operating models from primary research interviews.
      </span>

      <div style={{ display: 'flex', height: 1, backgroundColor: C.rule, marginBottom: 18 }} />

      {/* Column headers */}
      <div style={{ display: 'flex', gap: 10, marginBottom: 4 }}>
        <div style={{ display: 'flex', width: 140, flexShrink: 0 }} />
        {cols.map((c) => (
          <div key={c.name} style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '10px 14px', backgroundColor: c.bg, borderTop: `3px solid ${c.color}`, borderRadius: '0 0 4px 4px' }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: c.color, letterSpacing: 0.6 }}>{c.name}</span>
            <span style={{ fontSize: 9, color: c.color, marginTop: 2 }}>{c.sub}</span>
          </div>
        ))}
      </div>

      {/* Comparison rows */}
      {rows.map((r, i) => (
        <div key={i} style={{ display: 'flex', gap: 10, marginTop: 4, alignItems: 'stretch' }}>
          <div style={{ display: 'flex', width: 140, padding: '10px 12px', flexShrink: 0, backgroundColor: i % 2 === 0 ? C.fill1 : C.bg, alignItems: 'center' }}>
            <span style={{ fontSize: 10, fontWeight: 700, color: C.muted, letterSpacing: 0.5 }}>{r.label.toUpperCase()}</span>
          </div>
          {r.values.map((v, j) => (
            <div key={j} style={{ display: 'flex', flex: 1, padding: '10px 14px', backgroundColor: i % 2 === 0 ? C.fill1 : C.bg, border: `1px solid ${C.rule}`, alignItems: 'flex-start' }}>
              <span style={{ fontSize: 10, color: C.text, lineHeight: 1.4 }}>{v}</span>
            </div>
          ))}
        </div>
      ))}

      {/* Footer */}
      <div style={{ display: 'flex', backgroundColor: C.fill1, padding: '10px 16px', marginTop: 14, borderLeft: `3px solid ${C.accent}` }}>
        <span style={{ fontSize: 10, color: C.muted, lineHeight: 1.5 }}>
          Sources: T. Ficken interview (Apr 13, 2026), M. Gemma interview (Apr 15, 2026), Honest Ale strategy v1. Honest Ale combines Midwest Coast's taproom-first economics with Haymarket's pooled keg leasing discipline.
        </span>
      </div>
    </div>
  );
}

// ============================================================
// EXHIBIT 7.6: Inventory KPI Dashboard
// ============================================================

function ExhibitKPIDashboard() {
  const W = 1060, H = 640;

  const kpis = [
    {
      name: 'Inventory Turnover',
      formula: 'Annual COGS / Avg Inventory Value',
      targets: [
        { label: 'Finished Goods', value: '12 turns/yr', why: 'Matches IPA shelf-life ceiling' },
        { label: 'Raw Materials', value: '8 turns/yr', why: 'Matches procurement cycle' },
      ],
      color: C.green, bg: '#F0FDF4',
      trigger: 'Below target  > review affected SKU brew schedule',
    },
    {
      name: 'Days of Inventory On Hand',
      formula: 'Avg Inventory Value / Daily COGS',
      targets: [
        { label: 'Finished Goods', value: '30 days', why: 'Operational early warning for FG' },
        { label: 'Raw Materials', value: '45 days', why: 'Buffer against supply tightness' },
      ],
      color: C.blue, bg: C.classCBg,
      trigger: 'Above target  > cash-trap risk, reduce brew cadence',
    },
    {
      name: 'Inventory Accuracy',
      formula: 'Cycle count vs system records',
      targets: [
        { label: 'A-class', value: '98%', why: 'Yeast, premium hops, IPA' },
        { label: 'B-class', value: '95%', why: 'Base malts, standard SKUs' },
        { label: 'C-class', value: '90%', why: 'Adjuncts, MRO' },
      ],
      color: C.amber, bg: C.ambientBg,
      trigger: 'Variance above tolerance  > fishbone analysis (Section 10, Fig 10.09)',
    },
    {
      name: 'Spoilage & Write-Off',
      formula: 'Expired inventory $ / Total inventory $',
      targets: [
        { label: 'Annual target', value: '< 2%', why: 'Quantifies inventory discipline failures' },
      ],
      color: C.red, bg: '#FFF1F2',
      trigger: 'Above 2%  > review FIFO discipline and forecast accuracy',
    },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: W, height: H, backgroundColor: C.bg, padding: '32px 48px', fontFamily: 'Inter, sans-serif' }}>

      {/* Header */}
      <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 4 }}>
        <span style={{ fontSize: 10, color: C.muted, letterSpacing: 1.5 }}>EXHIBIT 7.6 - INVENTORY MANAGEMENT AND WAREHOUSING</span>
        <span style={{ fontSize: 22, fontWeight: 700, color: C.text, marginTop: 4 }}>Inventory KPI Dashboard</span>
      </div>
      <span style={{ fontSize: 11, color: C.muted, marginTop: 6, marginBottom: 18 }}>
        Four KPIs tracked daily on the MDI board (Section 10, Fig 10.08) and reviewed monthly during demand review meeting.
      </span>

      <div style={{ display: 'flex', height: 1, backgroundColor: C.rule, marginBottom: 18 }} />

      {/* 2x2 grid */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, flex: 1 }}>
        <div style={{ display: 'flex', gap: 14, flex: 1 }}>
          {kpis.slice(0, 2).map((k) => <KPICard key={k.name} k={k} />)}
        </div>
        <div style={{ display: 'flex', gap: 14, flex: 1 }}>
          {kpis.slice(2, 4).map((k) => <KPICard key={k.name} k={k} />)}
        </div>
      </div>

      {/* Footer */}
      <div style={{ display: 'flex', backgroundColor: C.fill1, padding: '10px 16px', marginTop: 14, borderLeft: `3px solid ${C.accent}` }}>
        <span style={{ fontSize: 10, color: C.muted, lineHeight: 1.5 }}>
          Cycle counting follows the ABC frequency table (Exhibit 7.2). Full physical inventory twice per year: January (post-holiday) and July (pre-Q4 buildup).
        </span>
      </div>
    </div>
  );
}

function KPICard({ k }: { k: any }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, border: `2px solid ${k.color}`, borderRadius: 8, overflow: 'hidden', backgroundColor: k.bg }}>
      {/* KPI name */}
      <div style={{ display: 'flex', flexDirection: 'column', padding: '12px 16px', backgroundColor: C.bg, borderBottom: `1px solid ${C.rule}` }}>
        <span style={{ fontSize: 13, fontWeight: 700, color: k.color }}>{k.name}</span>
        <span style={{ fontSize: 9, color: C.muted, marginTop: 3 }}>{k.formula}</span>
      </div>
      {/* Targets */}
      <div style={{ display: 'flex', flexDirection: 'column', padding: '12px 16px', flex: 1 }}>
        {k.targets.map((t: any, i: number) => (
          <div key={i} style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 6 }}>
            <span style={{ fontSize: 9, color: C.muted, width: 90, letterSpacing: 0.5 }}>{t.label.toUpperCase()}</span>
            <span style={{ fontSize: 18, fontWeight: 700, color: k.color, width: 110 }}>{t.value}</span>
            <span style={{ fontSize: 9, color: C.muted, flex: 1, lineHeight: 1.4 }}>{t.why}</span>
          </div>
        ))}
      </div>
      {/* Trigger */}
      <div style={{ display: 'flex', padding: '8px 16px', backgroundColor: C.bg, borderTop: `1px solid ${C.rule}` }}>
        <span style={{ fontSize: 9, color: C.muted, lineHeight: 1.4 }}>{k.trigger}</span>
      </div>
    </div>
  );
}

// ============================================================
// MAIN
// ============================================================

async function main() {
  if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });

  const fonts = await loadFonts();
  console.log('Fonts loaded. Generating Section 7 exhibits...\n');

  save(await render(<ExhibitWarehouseZones />, 1060, 600, fonts), 'exhibit-7-1-warehouse-zones.png');
  save(await render(<ExhibitABCMatrix />, 1060, 700, fonts), 'exhibit-7-2-abc-matrix.png');
  save(await render(<ExhibitDemandCurve />, 1060, 560, fonts), 'exhibit-7-3-demand-curve.png');
  save(await render(<ExhibitSafetyStock />, 1060, 660, fonts), 'exhibit-7-4-safety-stock.png');
  save(await render(<ExhibitComparison />, 1060, 700, fonts), 'exhibit-7-5-comparison.png');
  save(await render(<ExhibitKPIDashboard />, 1060, 640, fonts), 'exhibit-7-6-kpi-dashboard.png');

  console.log('\nDone. 6 Section 7 exhibits written to figures/section-07/');
}

main().catch(console.error);
