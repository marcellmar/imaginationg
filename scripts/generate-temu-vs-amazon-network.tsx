#!/usr/bin/env npx tsx

import React from 'react';

/**
 * Temu vs Amazon: Mycelial Network vs Root System
 *
 * IN-CLASS CASE - WEEK 4 - SUPPLY CHAIN ARCHITECTURE
 * Side-by-side comparison of Temu's distributed supplier mesh
 * vs Amazon's vertically-integrated fulfillment tree.
 *
 * Output: fig-case-temu-vs-amazon-network.png
 *
 * Run from imaginationg-main root:
 *   npx tsx scripts/generate-temu-vs-amazon-network.tsx
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
  rule:     '#E5E5E5',
  accent:   '#1A1A1A',
  fill1:    '#F7F7F7',
  fill2:    '#EFEFEF',
  green:    '#2D6A4F',
  greenBg:  '#D8F3DC',
  greenLt:  '#B7E4C7',
  red:      '#9B2226',
  redBg:    '#FFCCD5',
  amber:    '#7B5800',
  amberBg:  '#FFF3CD',
  blue:     '#1E3A5F',
  blueBg:   '#DBEAFE',
  blueMd:   '#3B82F6',
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
// MAIN FIGURE
// ============================================================

function FigTemuVsAmazon() {
  const W = 1100, H = 1260;

  // Temu hub center (relative to panel)
  const hubX = 240;
  const hubY = 200;

  // Supplier nodes scattered around the hub (organic positions)
  const suppliers = [
    { x: 80, y: 65 }, { x: 160, y: 50 }, { x: 300, y: 55 }, { x: 380, y: 75 },
    { x: 50, y: 135 }, { x: 130, y: 115 }, { x: 350, y: 105 }, { x: 420, y: 145 },
    { x: 45, y: 215 }, { x: 440, y: 205 },
    { x: 55, y: 290 }, { x: 140, y: 310 }, { x: 340, y: 300 }, { x: 430, y: 280 },
    { x: 100, y: 355 }, { x: 200, y: 345 }, { x: 310, y: 350 }, { x: 400, y: 340 },
  ];

  // Amazon FC positions (dropping from root bar)
  const fcXs = [60, 120, 180, 240, 300, 360, 420];

  // Comparison table data
  const tableRows = [
    { dim: 'Inventory Ownership', temu: 'None (consignment)', amazon: 'Full ownership', winner: 'temu' },
    { dim: 'Capital Intensity', temu: 'Low (rising)', amazon: 'Very high', winner: 'temu' },
    { dim: 'Decision Latency', temu: 'Real-time algorithmic', amazon: 'Two-pizza teams', winner: 'tie' },
    { dim: 'Supplier Relationships', temu: '150K+, transactional', amazon: 'Curated, contracted', winner: 'neutral' },
    { dim: 'Network Resilience', temu: 'Self-healing (any node)', amazon: 'Redundant (built-out)', winner: 'tie' },
    { dim: 'Delivery Speed', temu: '5-11 days (improving)', amazon: '1-2 days', winner: 'amazon' },
    { dim: 'Error Correction', temu: 'Product-level only', amazon: 'System-wide', winner: 'amazon' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: W, height: H, background: C.bg, padding: '28px 32px', fontFamily: 'Inter' }}>

      {/* ===== ZONE 1: HEADER ===== */}
      <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 8 }}>
        <div style={{ display: 'flex', fontSize: 11, color: C.light, letterSpacing: 1.8, marginBottom: 4 }}>
          IN-CLASS CASE - WEEK 4 - SUPPLY CHAIN ARCHITECTURE
        </div>
        <div style={{ display: 'flex', fontSize: 26, fontWeight: 700, color: C.text }}>
          Mycelial Network vs Root System
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', gap: 20, marginTop: 6 }}>
          <div style={{ display: 'flex', fontSize: 13, color: C.green, fontWeight: 700 }}>
            Temu GPI 3.75 (Transitioning, Declining)
          </div>
          <div style={{ display: 'flex', fontSize: 13, color: C.light }}>vs</div>
          <div style={{ display: 'flex', fontSize: 13, color: C.blue, fontWeight: 700 }}>
            Amazon GPI 3.55 (Transitioning, Stable)
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', width: '100%', borderBottom: `1px solid ${C.rule}`, marginBottom: 14 }} />

      {/* ===== ZONE 2: SIDE-BY-SIDE NETWORK DIAGRAMS ===== */}
      <div style={{ display: 'flex', flexDirection: 'row', gap: 20, marginBottom: 16 }}>

        {/* ---- LEFT PANEL: TEMU MYCELIAL NETWORK ---- */}
        <div style={{
          display: 'flex', flexDirection: 'column',
          width: 500, height: 440,
          background: C.greenBg,
          borderRadius: 8,
          border: `1px solid ${C.green}33`,
          position: 'relative',
        }}>
          {/* Panel header */}
          <div style={{ display: 'flex', flexDirection: 'column', padding: '12px 16px' }}>
            <div style={{ display: 'flex', fontSize: 13, fontWeight: 700, color: C.green }}>TEMU: Mycelial Network</div>
            <div style={{ display: 'flex', fontSize: 10, color: C.green, opacity: 0.7, marginTop: 2 }}>Distributed, no inventory, self-healing mesh</div>
          </div>

          {/* Ghosted count */}
          <div style={{
            position: 'absolute', right: 16, top: 12,
            display: 'flex', fontSize: 36, fontWeight: 700, color: C.green, opacity: 0.1,
          }}>150K+</div>

          {/* Concentric rings around hub */}
          {[50, 90, 130, 170].map((r, i) => (
            <div key={`ring${i}`} style={{
              position: 'absolute',
              left: hubX - r,
              top: hubY - r,
              width: r * 2,
              height: r * 2,
              borderRadius: r,
              border: `1px solid ${C.green}`,
              opacity: 0.3 - i * 0.05,
            }} />
          ))}

          {/* Horizontal connector lines from each supplier toward hub column */}
          {suppliers.map((s, i) => {
            const fromX = s.x < hubX ? s.x + 7 : hubX + 28;
            const toX = s.x < hubX ? hubX - 28 : s.x - 7;
            const w = Math.abs(toX - fromX);
            return w > 4 ? (
              <div key={`hc${i}`} style={{
                position: 'absolute',
                left: Math.min(fromX, toX),
                top: s.y - 1,
                width: w,
                height: 1,
                background: C.green,
                opacity: 0.15,
              }} />
            ) : null;
          })}

          {/* Supplier dots */}
          {suppliers.map((s, i) => (
            <div key={`sd${i}`} style={{
              position: 'absolute',
              left: s.x - 8,
              top: s.y - 8,
              width: 16,
              height: 16,
              borderRadius: 8,
              background: C.green,
              opacity: 0.6,
            }} />
          ))}

          {/* Central hub */}
          <div style={{
            position: 'absolute',
            left: hubX - 28,
            top: hubY - 28,
            width: 56,
            height: 56,
            borderRadius: 28,
            background: C.green,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <div style={{ display: 'flex', fontSize: 9, color: '#FFFFFF', fontWeight: 700 }}>Shanghai</div>
          </div>

          {/* Consumer squares at bottom */}
          {[100, 160, 220, 280, 340].map((cx, i) => (
            <div key={`cq${i}`} style={{
              position: 'absolute',
              left: cx - 8,
              top: 388,
              width: 16,
              height: 16,
              borderRadius: 2,
              background: C.green,
              opacity: 0.35,
            }} />
          ))}

          {/* Consumer label */}
          <div style={{
            position: 'absolute', left: 60, top: 408,
            display: 'flex', fontSize: 9, color: C.green,
          }}>Consumers</div>

          {/* Key traits at bottom */}
          <div style={{
            position: 'absolute', left: 12, top: 418,
            display: 'flex', flexDirection: 'row', gap: 6,
          }}>
            {['No inventory', 'Consignment', 'Self-healing'].map((t) => (
              <div key={t} style={{
                display: 'flex', padding: '2px 7px',
                background: C.greenLt, borderRadius: 8,
              }}>
                <div style={{ display: 'flex', fontSize: 8, color: C.green, fontWeight: 700 }}>{t}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ---- RIGHT PANEL: AMAZON ROOT SYSTEM ---- */}
        <div style={{
          display: 'flex', flexDirection: 'column',
          width: 500, height: 440,
          background: C.blueBg,
          borderRadius: 8,
          border: `1px solid ${C.blue}33`,
          position: 'relative',
        }}>
          {/* Panel header */}
          <div style={{ display: 'flex', flexDirection: 'column', padding: '12px 16px' }}>
            <div style={{ display: 'flex', fontSize: 13, fontWeight: 700, color: C.blue }}>AMAZON: Root System</div>
            <div style={{ display: 'flex', fontSize: 10, color: C.blue, opacity: 0.7, marginTop: 2 }}>Vertically integrated, heavy infrastructure</div>
          </div>

          {/* Ghosted count */}
          <div style={{
            position: 'absolute', right: 16, top: 12,
            display: 'flex', fontSize: 36, fontWeight: 700, color: C.blue, opacity: 0.1,
          }}>110+</div>

          {/* HQ rectangle at top */}
          <div style={{
            position: 'absolute',
            left: 200, top: 60,
            width: 100, height: 36,
            background: C.blue,
            borderRadius: 4,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <div style={{ display: 'flex', fontSize: 10, color: '#FFFFFF', fontWeight: 700 }}>Seattle HQ</div>
          </div>

          {/* Trunk line from HQ down */}
          <div style={{
            position: 'absolute',
            left: 248, top: 96,
            width: 4, height: 80,
            background: C.blue,
          }} />

          {/* Root bar (horizontal) */}
          <div style={{
            position: 'absolute',
            left: 45, top: 176,
            width: 410, height: 4,
            background: C.blue,
          }} />

          {/* Branch lines down from root bar to FCs */}
          {fcXs.map((x, i) => (
            <div key={`br${i}`} style={{
              position: 'absolute',
              left: x - 1, top: 180,
              width: 3, height: 70,
              background: C.blue,
              opacity: 0.5,
            }} />
          ))}

          {/* Fulfillment center circles */}
          {fcXs.map((x, i) => (
            <div key={`fc${i}`} style={{
              position: 'absolute',
              left: x - 16,
              top: 250 - 16,
              width: 32,
              height: 32,
              borderRadius: 16,
              background: C.blue,
              opacity: 0.7,
            }} />
          ))}

          {/* FC label */}
          <div style={{
            position: 'absolute', left: 150, top: 282,
            display: 'flex', fontSize: 9, color: C.blue,
          }}>Fulfillment Centers</div>

          {/* Amber inventory blocks below each FC */}
          {fcXs.map((x, i) => (
            <div key={`inv${i}`} style={{
              position: 'absolute',
              left: x - 10, top: 298,
              width: 20, height: 14,
              background: C.amberBg,
              border: `1px solid ${C.amber}`,
              borderRadius: 2,
              opacity: 0.7,
            }} />
          ))}

          {/* Inventory label */}
          <div style={{
            position: 'absolute', left: 130, top: 316,
            display: 'flex', fontSize: 8, color: C.amber,
          }}>Inventory (capital tied up)</div>

          {/* Delivery lines to consumer row */}
          {[120, 180, 240, 300, 360].map((x, i) => (
            <div key={`da${i}`} style={{
              position: 'absolute',
              left: x - 1, top: 334,
              width: 2, height: 36,
              background: C.blue,
              opacity: 0.2,
            }} />
          ))}

          {/* Consumer squares */}
          {[120, 180, 240, 300, 360].map((x, i) => (
            <div key={`ac${i}`} style={{
              position: 'absolute',
              left: x - 8, top: 372,
              width: 16, height: 16,
              borderRadius: 2,
              background: C.blue,
              opacity: 0.3,
            }} />
          ))}

          {/* Consumer label */}
          <div style={{
            position: 'absolute', left: 80, top: 392,
            display: 'flex', fontSize: 9, color: C.blue,
          }}>Consumers (1-2 day delivery)</div>

          {/* Key traits at bottom */}
          <div style={{
            position: 'absolute', left: 12, top: 418,
            display: 'flex', flexDirection: 'row', gap: 6,
          }}>
            {['Owns inventory', 'Heavy infra', 'Long contracts'].map((t) => (
              <div key={t} style={{
                display: 'flex', padding: '2px 7px',
                background: '#B6D4F0', borderRadius: 8,
              }}>
                <div style={{ display: 'flex', fontSize: 8, color: C.blue, fontWeight: 700 }}>{t}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== ZONE 3: COMPARISON TABLE ===== */}
      <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 14 }}>
        {/* Table header */}
        <div style={{ display: 'flex', flexDirection: 'row', padding: '8px 12px', background: C.accent, borderRadius: '6px 6px 0 0' }}>
          <div style={{ display: 'flex', width: 200, fontSize: 10, fontWeight: 700, color: '#FFFFFF' }}>Dimension</div>
          <div style={{ display: 'flex', flex: 1, fontSize: 10, fontWeight: 700, color: C.greenLt }}>Temu</div>
          <div style={{ display: 'flex', flex: 1, fontSize: 10, fontWeight: 700, color: '#93C5FD' }}>Amazon</div>
        </div>

        {/* Table rows */}
        {tableRows.map((row, i) => (
          <div key={row.dim} style={{
            display: 'flex', flexDirection: 'row', padding: '7px 12px',
            background: i % 2 === 0 ? C.fill1 : C.bg,
            borderBottom: `1px solid ${C.rule}`,
          }}>
            <div style={{ display: 'flex', width: 200, fontSize: 11, fontWeight: 700, color: C.text }}>{row.dim}</div>
            <div style={{
              display: 'flex', flex: 1, fontSize: 11,
              color: row.winner === 'temu' ? C.green : C.muted,
              fontWeight: row.winner === 'temu' ? 700 : 400,
            }}>{row.temu}</div>
            <div style={{
              display: 'flex', flex: 1, fontSize: 11,
              color: row.winner === 'amazon' ? C.blue : C.muted,
              fontWeight: row.winner === 'amazon' ? 700 : 400,
            }}>{row.amazon}</div>
          </div>
        ))}
      </div>

      {/* ===== INSIGHT BOXES ===== */}
      <div style={{ display: 'flex', flexDirection: 'row', gap: 12, marginBottom: 12 }}>
        {/* Temu advantage */}
        <div style={{ display: 'flex', flex: 1, flexDirection: 'column', background: C.greenBg, borderRadius: 6, padding: '10px 14px', border: `1px solid ${C.green}33` }}>
          <div style={{ display: 'flex', fontSize: 11, fontWeight: 700, color: C.green, marginBottom: 4 }}>MYCELIAL ADVANTAGE</div>
          <div style={{ display: 'flex', fontSize: 11, color: C.muted, lineHeight: 1.4 }}>
            Any node can fail without killing the network. No warehouses means no sunk cost. The algorithm replaces bad suppliers the way mycelium reroutes around dead roots. Speed comes from not owning anything.
          </div>
        </div>

        {/* Amazon advantage */}
        <div style={{ display: 'flex', flex: 1, flexDirection: 'column', background: C.blueBg, borderRadius: 6, padding: '10px 14px', border: `1px solid ${C.blue}33` }}>
          <div style={{ display: 'flex', fontSize: 11, fontWeight: 700, color: C.blue, marginBottom: 4 }}>ROOT SYSTEM ADVANTAGE</div>
          <div style={{ display: 'flex', fontSize: 11, color: C.muted, lineHeight: 1.4 }}>
            The infrastructure IS the moat. 110+ fulfillment centers, two-pizza team culture, and owned last-mile delivery create a system that is hard to replicate. Speed comes from having built everything already.
          </div>
        </div>
      </div>

      {/* Convergence box */}
      <div style={{ display: 'flex', flexDirection: 'column', background: C.amberBg, borderRadius: 6, padding: '10px 14px', border: `1px solid ${C.amber}44` }}>
        <div style={{ display: 'flex', fontSize: 11, fontWeight: 700, color: C.amber, marginBottom: 4 }}>THE CONVERGENCE QUESTION</div>
        <div style={{ display: 'flex', fontSize: 11, color: C.muted, lineHeight: 1.4 }}>
          Temu is adding US warehouses (10+ and growing). Amazon launched a direct-from-China discount section. Both architectures are drifting toward the middle. The question for class: does Temu become a slower Amazon, or does Amazon absorb the mycelial model? What does each company lose by converging?
        </div>
      </div>

      {/* Footer */}
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
        <div style={{ display: 'flex', fontSize: 9, color: C.light }}>SCMG 487: Purchasing and Supply Management | Wu and Yang (2026) Case</div>
        <div style={{ display: 'flex', fontSize: 9, color: C.light }}>GPI Framework Analysis | March 2026</div>
      </div>
    </div>
  );
}

// ============================================================
// MAIN
// ============================================================

async function main() {
  const fonts = await loadFonts();
  console.log('Fonts loaded. Generating Temu vs Amazon network figure...');

  const fig = await render(<FigTemuVsAmazon />, 1100, 1260, fonts);
  save(fig, 'fig-case-temu-vs-amazon-network.png');

  console.log('\nDone. Figure written to case-studies/');
}

main().catch(console.error);
