#!/usr/bin/env npx tsx

import React from 'react';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import * as fs from 'fs';
import * as path from 'path';

const OUT = '/Users/marcellmar/Documents/projects/marcus-gpi-brain/pressly-print/active-spirals/constructed-artifacts';

const C = {
  bg:      '#FFFFFF',
  ink:     '#111111',
  muted:   '#555555',
  light:   '#888888',
  border:  '#DDDDDD',
  accent:  '#1A1A1A',
  tag:     '#F4F4F4',
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

// ── Flyer: 8.5 x 11 at 96dpi = 816 x 1056 ─────────────────────────────────

function Flyer() {
  const W = 816, H = 1056;

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      width: W,
      minHeight: H,
      backgroundColor: C.bg,
      padding: '72px 80px',
      fontFamily: 'Inter',
    }}>

      {/* Top label */}
      <div style={{
        display: 'flex',
        backgroundColor: C.tag,
        border: `1px solid ${C.border}`,
        borderRadius: 4,
        padding: '6px 14px',
        width: 'fit-content',
        marginBottom: 32,
      }}>
        <span style={{ fontSize: 13, color: C.muted, fontWeight: 400, letterSpacing: 1 }}>
          LOYOLA UNIVERSITY CHICAGO  ·  GRADUATE RESEARCH
        </span>
      </div>

      {/* Headline */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 40,
      }}>
        <span style={{ fontSize: 42, fontWeight: 700, color: C.ink, lineHeight: 1.15 }}>
          How do print shops
        </span>
        <span style={{ fontSize: 42, fontWeight: 700, color: C.ink, lineHeight: 1.15 }}>
          handle customer files?
        </span>
      </div>

      {/* Divider */}
      <div style={{ display: 'flex', height: 1, backgroundColor: C.border, marginBottom: 40 }} />

      {/* Body */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        marginBottom: 48,
      }}>
        <span style={{ fontSize: 18, color: C.ink, lineHeight: 1.6, fontWeight: 400 }}>
          I'm a graduate student at Loyola studying how print shops receive, fix, and process files from customers and designers.
        </span>
        <span style={{ fontSize: 18, color: C.ink, lineHeight: 1.6, fontWeight: 400 }}>
          Most shops fix the same kinds of file problems every day. I want to understand that process from operators who actually do the work, not from the software side.
        </span>
        <span style={{ fontSize: 18, color: C.ink, lineHeight: 1.6, fontWeight: 400 }}>
          I'll share the full findings with every shop that participates.
        </span>
      </div>

      {/* What I'm asking box */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: C.tag,
        border: `1px solid ${C.border}`,
        borderRadius: 6,
        padding: '28px 32px',
        marginBottom: 48,
        gap: 14,
      }}>
        <span style={{ fontSize: 15, fontWeight: 700, color: C.accent, letterSpacing: 0.5 }}>
          WHAT I'M ASKING FOR
        </span>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <span style={{ fontSize: 17, color: C.ink, fontWeight: 400 }}>
            · 30-minute conversation at a time that works for you
          </span>
          <span style={{ fontSize: 17, color: C.ink, fontWeight: 400 }}>
            · Walk me through how files come in and what you do with them
          </span>
          <span style={{ fontSize: 17, color: C.ink, fontWeight: 400 }}>
            · I'll share the research findings with you when done
          </span>
        </div>
      </div>

      {/* Spacer */}
      <div style={{ display: 'flex', flex: 1 }} />

      {/* Divider */}
      <div style={{ display: 'flex', height: 1, backgroundColor: C.border, marginBottom: 32 }} />

      {/* Contact */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
      }}>
        <span style={{ fontSize: 20, fontWeight: 700, color: C.ink }}>Marcus Davis</span>
        <span style={{ fontSize: 16, color: C.muted }}>Graduate Student, Quinlan School of Business</span>
        <span style={{ fontSize: 16, color: C.muted }}>Loyola University Chicago</span>
        <div style={{ display: 'flex', gap: 32, marginTop: 8 }}>
          <span style={{ fontSize: 16, color: C.ink }}>773-704-4833</span>
          <span style={{ fontSize: 16, color: C.ink }}>mdavis32@luc.edu</span>
        </div>
      </div>

    </div>
  );
}

async function main() {
  fs.mkdirSync(OUT, { recursive: true });
  const fonts = await loadFonts();

  const W = 816, H = 1056;
  const buf = await render(<Flyer />, W, H, fonts);
  const outPath = path.join(OUT, 'pressly-shop-research-flyer.png');
  fs.writeFileSync(outPath, buf);
  console.log('Saved:', outPath);
}

main().catch(console.error);
