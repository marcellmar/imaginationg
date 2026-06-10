#!/usr/bin/env npx tsx

import React from 'react';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import * as fs from 'fs';
import * as path from 'path';

const W = 1100;
const H = 760;
const SCALE = 2;

const C = {
  table: '#EEE4D3',
  paper: '#FFFCF5',
  paperDark: '#F4E8D3',
  ink: '#1C1917',
  muted: '#6B6257',
  faint: '#D8C9AE',
  red: '#A8201A',
  amber: '#C47A2C',
  green: '#526B45',
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

function Label({ children, red }: { children: React.ReactNode; red?: boolean }) {
  return (
    <div style={{
      display: 'flex',
      fontSize: 16,
      fontWeight: 700,
      letterSpacing: 1.6,
      textTransform: 'uppercase',
      color: red ? C.red : C.muted,
    }}>
      {children}
    </div>
  );
}

function Paper({
  children,
  x,
  y,
  w,
  h,
  rotate = 0,
  tone = C.paper,
}: {
  children: React.ReactNode;
  x: number;
  y: number;
  w: number;
  h: number;
  rotate?: number;
  tone?: string;
}) {
  return (
    <div style={{
      display: 'flex',
      position: 'absolute',
      left: x,
      top: y,
      width: w,
      height: h,
      transform: `rotate(${rotate}deg)`,
      backgroundColor: tone,
      border: `2px solid ${C.faint}`,
      borderRadius: 18,
      padding: 24,
      boxShadow: '0 16px 35px rgba(60, 45, 25, 0.13)',
      flexDirection: 'column',
      gap: 14,
    }}>
      {children}
    </div>
  );
}

function Tape({ x, y, rotate = 0 }: { x: number; y: number; rotate?: number }) {
  return (
    <div style={{
      display: 'flex',
      position: 'absolute',
      left: x,
      top: y,
      width: 110,
      height: 34,
      transform: `rotate(${rotate}deg)`,
      backgroundColor: 'rgba(255, 252, 245, 0.58)',
      border: `1px solid ${C.faint}`,
    }} />
  );
}

function Bullet({ children, size = 22 }: { children: React.ReactNode; size?: number }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'flex-start' }}>
      <div style={{ display: 'flex', width: 8, height: 8, borderRadius: 4, backgroundColor: C.red, marginTop: 10 }} />
      <div style={{ display: 'flex', flex: 1, fontSize: size, lineHeight: 1.18, color: C.ink }}>{children}</div>
    </div>
  );
}

function Artifact() {
  return (
    <div style={{
      display: 'flex',
      width: W,
      height: H,
      backgroundColor: C.table,
      fontFamily: 'Inter',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        display: 'flex',
        position: 'absolute',
        left: -120,
        top: 110,
        width: 1340,
        height: 2,
        backgroundColor: '#D1BE9F',
      }} />
      <div style={{
        display: 'flex',
        position: 'absolute',
        left: 0,
        bottom: 0,
        width: W,
        height: 150,
        backgroundColor: 'rgba(128, 94, 55, 0.08)',
      }} />

      <Tape x={106} y={68} rotate={-6} />
      <Tape x={780} y={80} rotate={8} />
      <Tape x={308} y={536} rotate={4} />

      <Paper x={58} y={84} w={418} h={306} rotate={-5}>
        <Label red>Live pressure</Label>
        <div style={{ display: 'flex', fontSize: 50, lineHeight: 1.02, fontWeight: 700, color: C.ink }}>
          Parts late again.
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', gap: 12, marginTop: 'auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', flex: 1, backgroundColor: '#F0E1C8', borderRadius: 14, padding: 14 }}>
            <div style={{ display: 'flex', fontSize: 28, fontWeight: 700, color: C.ink }}>-9%</div>
            <div style={{ display: 'flex', fontSize: 12, color: C.muted, letterSpacing: 1.1, textTransform: 'uppercase' }}>output</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', flex: 1, backgroundColor: '#F0E1C8', borderRadius: 14, padding: 14 }}>
            <div style={{ display: 'flex', fontSize: 28, fontWeight: 700, color: C.red }}>+22%</div>
            <div style={{ display: 'flex', fontSize: 12, color: C.muted, letterSpacing: 1.1, textTransform: 'uppercase' }}>expedites</div>
          </div>
        </div>
      </Paper>

      <Paper x={500} y={72} w={350} h={210} rotate={3} tone={C.paperDark}>
        <Label>Tape</Label>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: `1.5px solid ${C.faint}`, paddingBottom: 9 }}>
            <div style={{ display: 'flex', fontSize: 18, color: C.ink }}>1,100 company reads</div>
            <div style={{ display: 'flex', fontSize: 18, fontWeight: 700, color: C.red }}>live</div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: `1.5px solid ${C.faint}`, paddingBottom: 9 }}>
            <div style={{ display: 'flex', fontSize: 18, color: C.ink }}>vendor misses</div>
            <div style={{ display: 'flex', fontSize: 18, color: C.muted }}>31</div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', fontSize: 18, color: C.ink }}>same pattern</div>
            <div style={{ display: 'flex', fontSize: 18, color: C.muted }}>trust</div>
          </div>
        </div>
      </Paper>

      <Paper x={846} y={162} w={220} h={284} rotate={7}>
        <Label>Marked up</Label>
        <div style={{ display: 'flex', height: 68, border: `2px solid ${C.faint}`, borderRadius: 12, backgroundColor: '#F2E7D5' }} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 8 }}>
          <div style={{ display: 'flex', width: 150, height: 4, backgroundColor: C.red, transform: 'rotate(-3deg)' }} />
          <div style={{ display: 'flex', width: 176, height: 3, backgroundColor: C.faint }} />
          <div style={{ display: 'flex', width: 126, height: 4, backgroundColor: C.red, transform: 'rotate(4deg)' }} />
          <div style={{ display: 'flex', width: 162, height: 3, backgroundColor: C.faint }} />
        </div>
      </Paper>

      <Paper x={118} y={428} w={394} h={226} rotate={4} tone={C.paperDark}>
        <Label>Read</Label>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          <div style={{ display: 'flex', fontSize: 33, lineHeight: 1.04, fontWeight: 700, color: C.ink }}>
            Constraint is trust,
          </div>
          <div style={{ display: 'flex', fontSize: 33, lineHeight: 1.04, fontWeight: 700, color: C.ink }}>
            not parts.
          </div>
        </div>
        <div style={{ display: 'flex', fontSize: 21, lineHeight: 1.22, color: C.muted }}>
          Every team protects its own number. The line pays for the gap.
        </div>
      </Paper>

      <Paper x={544} y={392} w={500} h={262} rotate={-3}>
        <Label red>Move ready</Label>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          <div style={{ display: 'flex', fontSize: 36, lineHeight: 1.02, fontWeight: 700, color: C.ink }}>
            One owner on
          </div>
          <div style={{ display: 'flex', fontSize: 36, lineHeight: 1.02, fontWeight: 700, color: C.ink }}>
            part readiness.
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <Bullet size={19}>Freeze dates after 2 p.m.</Bullet>
          <Bullet size={19}>Tag orders missing one part.</Bullet>
          <Bullet size={19}>Check top 10 expedites at 8 a.m.</Bullet>
        </div>
      </Paper>

      <div style={{
        display: 'flex',
        position: 'absolute',
        left: 58,
        bottom: 28,
        fontSize: 18,
        fontWeight: 700,
        letterSpacing: 2,
        color: C.muted,
        textTransform: 'uppercase',
      }}>
        GPI.STUDIO / workbench
      </div>
      <div style={{
        display: 'flex',
        position: 'absolute',
        right: 58,
        bottom: 28,
        fontSize: 18,
        color: C.red,
        fontWeight: 700,
        letterSpacing: 1.2,
        textTransform: 'uppercase',
      }}>
        Pressure in / move out
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
  const outPath = path.join(outDir, 'studio-workbench-satori-v2.png');
  fs.writeFileSync(outPath, png);
  console.log(outPath);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
