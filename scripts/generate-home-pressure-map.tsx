#!/usr/bin/env npx tsx

import React from 'react';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import * as fs from 'fs';
import * as path from 'path';

const W = 640;
const H = 820;
const SCALE = 2;

const C = {
  page: '#F7F2E8',
  paper: '#FFFCF5',
  ink: '#1C1917',
  muted: '#6B6257',
  faint: '#E4D8C3',
  red: '#A8201A',
  amber: '#C47A2C',
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

function Section({ label, children, accent }: { label: string; children: React.ReactNode; accent?: boolean }) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      borderTop: `2px solid ${accent ? C.red : C.faint}`,
      paddingTop: 14,
      gap: 8,
    }}>
      <div style={{
        display: 'flex',
        fontSize: 14,
        fontWeight: 700,
        letterSpacing: 1.8,
        color: accent ? C.red : C.muted,
        textTransform: 'uppercase',
      }}>
        {label}
      </div>
      {children}
    </div>
  );
}

function Line({ children, strong }: { children: React.ReactNode; strong?: boolean }) {
  return (
    <div style={{
      display: 'flex',
      fontSize: strong ? 28 : 21,
      lineHeight: 1.18,
      fontWeight: strong ? 700 : 400,
      color: C.ink,
    }}>
      {children}
    </div>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'flex-start' }}>
      <div style={{ display: 'flex', width: 7, height: 7, borderRadius: 4, backgroundColor: C.red, marginTop: 9 }} />
      <div style={{ display: 'flex', flex: 1, fontSize: 19, lineHeight: 1.2, color: C.ink }}>{children}</div>
    </div>
  );
}

function Artifact() {
  return (
    <div style={{
      display: 'flex',
      width: W,
      height: H,
      backgroundColor: C.page,
      padding: 24,
      fontFamily: 'Inter',
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        backgroundColor: C.paper,
        border: `2px solid ${C.faint}`,
        borderRadius: 24,
        padding: 28,
        gap: 18,
      }}>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ display: 'flex', fontSize: 16, fontWeight: 700, color: C.ink, letterSpacing: 0.4 }}>
              GPI.STUDIO
            </div>
            <div style={{ display: 'flex', fontSize: 12, color: C.muted, letterSpacing: 1.6, textTransform: 'uppercase' }}>
              sample pressure map
            </div>
          </div>
          <div style={{
            display: 'flex',
            border: `1.5px solid ${C.red}`,
            borderRadius: 999,
            padding: '6px 10px',
            fontSize: 12,
            fontWeight: 700,
            color: C.red,
            letterSpacing: 1.1,
            textTransform: 'uppercase',
          }}>
            7 day move
          </div>
        </div>

        <Section label="Live pressure" accent>
            <Line strong>Line keeps stopping.</Line>
          <div style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1, backgroundColor: '#F1E7D5', borderRadius: 14, padding: 16 }}>
              <div style={{ display: 'flex', fontSize: 28, fontWeight: 700, color: C.ink }}>-9%</div>
              <div style={{ display: 'flex', fontSize: 12, color: C.muted, textTransform: 'uppercase', letterSpacing: 1.1 }}>output</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1, backgroundColor: '#F1E7D5', borderRadius: 14, padding: 16 }}>
              <div style={{ display: 'flex', fontSize: 28, fontWeight: 700, color: C.red }}>+22%</div>
              <div style={{ display: 'flex', fontSize: 12, color: C.muted, textTransform: 'uppercase', letterSpacing: 1.1 }}>expedites</div>
            </div>
          </div>
        </Section>

        <Section label="Signal">
          <Bullet>Supplier says parts shipped.</Bullet>
          <Bullet>Planner changes promise dates daily.</Bullet>
          <Bullet>Operators wait on one missing part.</Bullet>
        </Section>

        <Section label="GPI read">
          <Line strong>The constraint is trust, not parts.</Line>
          <Line>Every team protects its own number.</Line>
        </Section>

        <Section label="Move this week" accent>
          <Line strong>Put one owner on part readiness.</Line>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <Bullet>Freeze promise dates after 2 p.m.</Bullet>
            <Bullet>Tag orders missing one part.</Bullet>
            <Bullet>Review top 10 expedites at 8 a.m.</Bullet>
          </div>
        </Section>

        <div style={{
          display: 'flex',
          marginTop: 'auto',
          borderTop: `1.5px solid ${C.faint}`,
          paddingTop: 12,
          fontSize: 13,
          lineHeight: 1.35,
          color: C.muted,
        }}>
          Small enough to use before next shift huddle.
        </div>
      </div>
    </div>
  );
}

async function main() {
  const fonts = await loadFonts();
  const svg = await satori(<Artifact />, { width: W, height: H, fonts });
  const resvg = new Resvg(svg, { fitTo: { mode: 'width', value: W * SCALE } });
  const png = Buffer.from(resvg.render().asPng());
  const outDir = path.join(process.cwd(), 'public', 'images', 'maps');
  fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, 'home-supply-chain-pressure-map-satori.png');
  fs.writeFileSync(outPath, png);
  console.log(outPath);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
