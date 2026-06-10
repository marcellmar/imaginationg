#!/usr/bin/env npx tsx

import React from 'react';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import * as fs from 'fs';
import * as path from 'path';

const OUT = path.join(
  '/Users/marsonemac/Documents/projects/marcus-gpi-brain',
  'work-loyola/processed-documents/SCMG-589-capstone/figures/insights'
);

// Honest Ale palette: forest green + gold amber, deep brown ink, cream parchment.
// Matches generate-589-section7-slides.tsx for visual continuity with the capstone deck.
const C = {
  slideBg:  '#F4EFE6',
  cardBg:   '#FFFCF5',
  text:     '#2A1F14',
  muted:    '#5A4A3D',
  rule:     '#E5DBC7',
  forest:   '#2D4A2A',
  gold:     '#C9822E',
  fillP:    '#F4ECD8',
  fillG:    '#EAD8B0',
  alert:    '#9B3A1E',
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

const W = 1200;
const H = 600;

function Card({ num, title, children, footer }: { num: string; title: string; children: any; footer: string; }) {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', flex: 1,
      backgroundColor: C.cardBg, borderRadius: 10,
      borderLeft: `5px solid ${C.forest}`,
      padding: '16px 20px',
      minHeight: 240,
      boxShadow: '0 2px 8px rgba(42,31,20,0.10)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
        <span style={{ fontSize: 15, fontWeight: 700, color: C.forest, letterSpacing: 0.3 }}>{title}</span>
        <span style={{ fontSize: 28, fontWeight: 700, color: C.gold }}>{num}</span>
      </div>
      <div style={{ display: 'flex', height: 1, backgroundColor: C.rule, marginBottom: 12 }} />
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        {children}
      </div>
      <span style={{ fontSize: 10, color: C.muted, lineHeight: 1.45, marginTop: 10 }}>{footer}</span>
    </div>
  );
}

function StatTile({ big, small, prominent }: { big: string; small: string; prominent?: boolean }) {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1,
      backgroundColor: prominent ? C.fillG : C.fillP, borderRadius: 6, padding: '10px 14px',
    }}>
      <span style={{ fontSize: 26, fontWeight: 700, color: prominent ? C.forest : C.muted, lineHeight: 1 }}>{big}</span>
      <span style={{ fontSize: 9, color: prominent ? C.forest : C.muted, marginTop: 4, letterSpacing: 0.5, textAlign: 'center' }}>{small}</span>
    </div>
  );
}

function SlideHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 18 }}>
      <span style={{ fontSize: 11, fontWeight: 700, color: C.gold, letterSpacing: 1.2 }}>{subtitle}</span>
      <span style={{ fontSize: 24, fontWeight: 700, color: C.forest, marginTop: 4, lineHeight: 1.1 }}>{title}</span>
    </div>
  );
}

function YeastInsightSlide() {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', width: W, height: H,
      backgroundColor: C.slideBg, padding: '22px 30px',
      fontFamily: 'Inter, sans-serif',
    }}>
      <SlideHeader subtitle="POST-CAPSTONE INSIGHT · MIDWEST COAST" title="The Hybrid Yeast Question" />

      <div style={{ display: 'flex', flexDirection: 'row', flex: 1, gap: 16 }}>
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, gap: 16 }}>
          <Card num="01" title="THE COST FLIP"
            footer="Liquid wins past 2-3 repitches. Midwest Coast already runs 5-7 generations per Omega purchase.">
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 14 }}>
              <span style={{ fontSize: 56, fontWeight: 700, color: C.forest, lineHeight: 1 }}>$200</span>
              <span style={{ fontSize: 13, color: C.text, lineHeight: 1.3 }}>per batch yeast cost at 6 repitch generations</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', marginTop: 8, gap: 4 }}>
              <span style={{ fontSize: 11, color: C.muted }}>$1,200 initial Omega · 6 generations · liquid economics dominate at scale</span>
            </div>
          </Card>
          <Card num="03" title="WHERE DRY STILL WINS"
            footer="Hybrid model rather than wholesale switch. Most pro brewers running serious volume work this way.">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <Row tag="BACKUP" body="Dry brick in freezer covers Omega shipment delays" />
              <Row tag="ONE-OFFS" body="Seasonals and collabs where repitching has no payoff" />
              <Row tag="TRIALS" body="Cheap testbed for a strain before committing liquid" />
            </div>
          </Card>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, gap: 16 }}>
          <Card num="02" title="LALLEMAND VERDANT IPA"
            footer="Dried from Verdant Brewing Co. (UK) house IPA strain. Built specifically for hop-forward styles.">
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <StatTile big="78%" small="ATTENUATION" />
              <StatTile big="5 days" small="FERMENTATION" />
              <StatTile big="64-73°F" small="OPTIMAL TEMP" prominent />
            </div>
            <span style={{ fontSize: 11, color: C.muted, marginTop: 12, lineHeight: 1.4 }}>
              Apricot, tropical fruit, citrus notes that merge with hop aromas. Worth a single 40-bbl trial against a current West Coast IPA recipe.
            </span>
          </Card>
          <Card num="04" title="THE BIGGER LEVER"
            footer="Yeast cost reduction is more about generations per pitch than format change.">
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 14 }}>
              <span style={{ fontSize: 44, fontWeight: 700, color: C.forest, lineHeight: 1 }}>5 → 10</span>
              <span style={{ fontSize: 13, color: C.text, lineHeight: 1.3 }}>generations is the real cost lever</span>
            </div>
            <span style={{ fontSize: 11, color: C.muted, marginTop: 10, lineHeight: 1.4 }}>
              Some breweries push to 12 generations with healthy strain management. Doubling current rate cuts effective batch yeast cost in half.
            </span>
          </Card>
        </div>
      </div>
    </div>
  );
}

function Row({ tag, body }: { tag: string; body: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', backgroundColor: C.fillP, borderRadius: 4, padding: '6px 10px', gap: 10 }}>
      <span style={{ fontSize: 9, fontWeight: 700, color: C.forest, width: 80, letterSpacing: 0.6 }}>{tag}</span>
      <span style={{ fontSize: 11, color: C.text, flex: 1 }}>{body}</span>
    </div>
  );
}

function ContractInsightSlide() {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', width: W, height: H,
      backgroundColor: C.slideBg, padding: '22px 30px',
      fontFamily: 'Inter, sans-serif',
    }}>
      <SlideHeader subtitle="POST-CAPSTONE INSIGHT · HAYMARKET" title="Bridgman as a Contract Brewing Destination" />

      <div style={{ display: 'flex', flexDirection: 'row', flex: 1, gap: 16 }}>
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, gap: 16 }}>
          <Card num="01" title="INDUSTRY-WIDE OVERBUILD"
            footer="Bridgman is the rule, not the exception. Breweries with absorbable fixed costs are the ones surviving 2026.">
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <StatTile big="56-57%" small="EXCESS CAPACITY" prominent />
              <StatTile big="12 yrs" small="TO FILL AT CURRENT GROWTH" />
            </div>
            <span style={{ fontSize: 11, color: C.muted, marginTop: 12, lineHeight: 1.4 }}>
              New openings dropped to 300 in 2025 (from 518 in 2024). Closures running ahead of openings two years running.
            </span>
          </Card>
          <Card num="03" title="PILOT PROJECT · LOGAN SQUARE"
            footer="Three miles from the Haymarket brewpub. Same structural model running explicitly as a brand.">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <Row tag="SYSTEM" body="10 BBL three-vessel automated brewhouse" />
              <Row tag="CAPACITY" body="3,000 BBL annual" />
              <Row tag="INCUBATED" body="13 brands including Funkytown, Azadi, Luna Bay" />
            </div>
          </Card>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, gap: 16 }}>
          <Card num="02" title="REVENUE CEILING MATH"
            footer="Realistic capture at 50-70% of theoretical: $200K-$400K incremental annual revenue absorbing fixed costs.">
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 14 }}>
              <span style={{ fontSize: 50, fontWeight: 700, color: C.forest, lineHeight: 1 }}>$412K</span>
              <span style={{ fontSize: 13, color: C.text, lineHeight: 1.3 }}>theoretical ceiling at $55/BBL</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', marginTop: 8, gap: 4 }}>
              <span style={{ fontSize: 11, color: C.muted }}>7,500 BBL gap (10K capacity − 2.5K own brand)</span>
              <span style={{ fontSize: 11, color: C.muted }}>$55-75/BBL going market rate (Cavendish 2026)</span>
            </div>
          </Card>
          <Card num="04" title="LISTING CHANNELS · REAL PROSPECTS"
            footer="Capacity Tap creates inbound interest with no outbound effort. Moor's and Funkytown fit the brand-side client profile.">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <Row tag="MARKETPLACE" body="capacitytap.com — list and wait for inbound" />
              <Row tag="MOOR'S" body="500+ retailers IL/NY/IN/NJ. Currently at Homewood." />
              <Row tag="FUNKYTOWN" body="Chicago-based. Currently at Pilot Project." />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

(async () => {
  if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });
  const fonts = await loadFonts();

  console.log('Rendering Tim yeast insight...');
  const yeast = await render(<YeastInsightSlide />, W, H, fonts);
  save(yeast, 'tim-yeast-hybrid-insight.png');

  console.log('Rendering Mike contract brewing insight...');
  const contract = await render(<ContractInsightSlide />, W, H, fonts);
  save(contract, 'mike-bridgman-contract-insight.png');

  console.log('Done.');
})();
