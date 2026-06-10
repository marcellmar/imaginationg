#!/usr/bin/env npx tsx

import React from 'react';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import * as fs from 'fs';
import * as path from 'path';

const OUT = '/Users/marsonemac/Documents/projects/marcus-gpi-brain/work-loyola/processed-documents/SCMG-589-capstone';

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

  const questions = [
    { area: 'RAW MATERIALS', items: [
      'Where do you source your main ingredients (grain, hops, yeast, water treatment)?',
      'How do you decide how much raw material to keep on hand versus ordering as needed?',
    ]},
    { area: 'FINISHED GOODS', items: [
      'Once beer is packaged, how long does it typically sit before it ships?',
      'How do you decide what to brew next? Is it based on orders, seasonality, or gut feel?',
    ]},
    { area: 'WAREHOUSE', items: [
      'Walk me through your storage setup. Cold storage, dry storage, how is it organized?',
      'What are the biggest storage challenges you deal with?',
    ]},
    { area: 'DISTRIBUTION', items: [
      'What limits how far you distribute? Licensing, logistics cost, production capacity, or something else?',
      'How do orders get to retailers or customers from here?',
    ]},
  ];

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      width: W,
      minHeight: H,
      backgroundColor: C.bg,
      padding: '60px 72px',
      fontFamily: 'Inter',
    }}>

      {/* Top label */}
      <div style={{
        display: 'flex',
        backgroundColor: C.tag,
        border: `1px solid ${C.border}`,
        borderRadius: 4,
        padding: '6px 14px',
        marginBottom: 28,
      }}>
        <span style={{ fontSize: 12, color: C.muted, fontWeight: 400, letterSpacing: 1 }}>
          LOYOLA UNIVERSITY CHICAGO  ·  SCMG 589 CAPSTONE
        </span>
      </div>

      {/* Headline */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 28,
      }}>
        <span style={{ fontSize: 36, fontWeight: 700, color: C.ink, lineHeight: 1.15 }}>
          Brewery Interview
        </span>
        <span style={{ fontSize: 36, fontWeight: 700, color: C.ink, lineHeight: 1.15 }}>
          Questions
        </span>
        <span style={{ fontSize: 15, color: C.muted, marginTop: 8 }}>
          Inventory and Warehousing Section
        </span>
      </div>

      {/* Divider */}
      <div style={{ display: 'flex', height: 1, backgroundColor: C.border, marginBottom: 24 }} />

      {/* Questions by area */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        marginBottom: 32,
      }}>
        {questions.map((section, si) => (
          <div key={si} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: C.accent, letterSpacing: 1.2 }}>
              {section.area}
            </span>
            {section.items.map((q, qi) => (
              <div key={qi} style={{ display: 'flex', paddingLeft: 8 }}>
                <span style={{ fontSize: 14, color: C.muted, marginRight: 10, fontWeight: 400 }}>
                  {si * 2 + qi + 1}.
                </span>
                <span style={{ fontSize: 14, color: C.ink, lineHeight: 1.5, fontWeight: 400 }}>
                  {q}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Notes box */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: C.tag,
        border: `1px solid ${C.border}`,
        borderRadius: 6,
        padding: '20px 24px',
        marginBottom: 32,
        gap: 10,
      }}>
        <span style={{ fontSize: 11, fontWeight: 700, color: C.accent, letterSpacing: 0.5 }}>
          INTERVIEW NOTES
        </span>
        <span style={{ fontSize: 13, color: C.muted, fontWeight: 400, lineHeight: 1.5 }}>
          · 20-30 minutes, conversational, follow their answers
        </span>
        <span style={{ fontSize: 13, color: C.muted, fontWeight: 400, lineHeight: 1.5 }}>
          · Distribution constraint question (#7) is the key differentiator for our section
        </span>
        <span style={{ fontSize: 13, color: C.muted, fontWeight: 400, lineHeight: 1.5 }}>
          · Ask to see the storage and warehouse setup if they offer
        </span>
      </div>

      {/* Spacer */}
      <div style={{ display: 'flex', flex: 1 }} />

      {/* Divider */}
      <div style={{ display: 'flex', height: 1, backgroundColor: C.border, marginBottom: 24 }} />

      {/* Contact */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 6,
      }}>
        <span style={{ fontSize: 18, fontWeight: 700, color: C.ink }}>Marcus Davis</span>
        <span style={{ fontSize: 14, color: C.muted }}>Graduate Student, Quinlan School of Business</span>
        <span style={{ fontSize: 14, color: C.muted }}>Loyola University Chicago</span>
        <div style={{ display: 'flex', gap: 32, marginTop: 6 }}>
          <span style={{ fontSize: 14, color: C.ink }}>773-704-4833</span>
          <span style={{ fontSize: 14, color: C.ink }}>mdavis32@luc.edu</span>
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
  const outPath = path.join(OUT, 'brewery-interview-questions.png');
  fs.writeFileSync(outPath, buf);
  console.log('Saved:', outPath);
}

main().catch(console.error);
