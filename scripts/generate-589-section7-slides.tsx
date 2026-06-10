#!/usr/bin/env npx tsx

import React from 'react';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import * as fs from 'fs';
import * as path from 'path';

const OUT = path.join(
  '/Users/marcellmar/Documents/projects/marcus-gpi-brain',
  'work-loyola/processed-documents/SCMG-589-capstone/figures/section-07'
);

// Tight palette pulled from the Honest Ale logo: forest green + gold amber,
// deep brown ink, cream parchment fills. No other accents.
const C = {
  slideBg:  '#F4EFE6',  // matches deck slide background
  cardBg:   '#FFFCF5',  // warm card white
  text:     '#2A1F14',  // deep brown ink
  muted:    '#5A4A3D',  // muted brown
  rule:     '#E5DBC7',
  forest:   '#2D4A2A',  // logo deep green
  gold:     '#C9822E',  // logo amber
  fillP:    '#F4ECD8',  // pale parchment row fill
  fillG:    '#EAD8B0',  // slightly darker parchment
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
const H = 500;

function Card({ num, title, children, footer }: { num: string; title: string; children: any; footer: string; }) {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', flex: 1,
      backgroundColor: C.cardBg, borderRadius: 10,
      borderLeft: `5px solid ${C.forest}`,
      padding: '16px 20px',
      minHeight: 220,
      boxShadow: '0 2px 8px rgba(42,31,20,0.10)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
        <span style={{ fontSize: 16, fontWeight: 700, color: C.forest, letterSpacing: 0.3 }}>{title}</span>
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

function Row({ tag, mid, body }: { tag: string; mid: string; body: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', backgroundColor: C.fillP, borderRadius: 4, padding: '5px 10px', gap: 10 }}>
      <span style={{ fontSize: 9, fontWeight: 700, color: C.forest, width: 80, letterSpacing: 0.6 }}>{tag}</span>
      <span style={{ fontSize: 10, fontWeight: 700, color: C.gold, width: 70 }}>{mid}</span>
      <span style={{ fontSize: 10, color: C.text, flex: 1 }}>{body}</span>
    </div>
  );
}

function SlideStrategy() {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', width: W, height: H,
      backgroundColor: C.slideBg, padding: '24px 30px',
      fontFamily: 'Inter, sans-serif',
    }}>
      <div style={{ display: 'flex', flexDirection: 'row', flex: 1, gap: 18 }}>
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, gap: 18 }}>
          <Card num="01" title="TAPROOM-FIRST ALLOCATION"
            footer="Distribution treated as secondary channel; core brands brewed to keep taproom stocked first.">
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 14 }}>
              <span style={{ fontSize: 56, fontWeight: 700, color: C.forest, lineHeight: 1 }}>4-5x</span>
              <span style={{ fontSize: 13, color: C.text, lineHeight: 1.3 }}>margin gap per equivalent volume</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', marginTop: 10, gap: 4 }}>
              <span style={{ fontSize: 11, color: C.muted }}>~$1,000 taproom · ~$200 / keg distribution</span>
            </div>
          </Card>
          <Card num="03" title="THREE-ZONE WAREHOUSE"
            footer="FIFO via date-stamped pallets and bins. 5S applied across all three zones.">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <Row tag="COLD" mid="34 - 38°F" body="Finished beer · yeast" />
              <Row tag="COOL / DRY" mid="50 - 65°F" body="Grain · specialty malt" />
              <Row tag="AMBIENT" mid="Room" body="Cans · MRO · cleaning" />
            </div>
          </Card>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, gap: 18 }}>
          <Card num="02" title="ABC CLASSIFICATION"
            footer="Pareto-aligned. Yeast and flagship IPA sit in Class A with weekly cycle counts.">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {[
                { c: 'A', lbl: 'Yeast · premium hops · IPA', cycle: 'Weekly', w: 220 },
                { c: 'B', lbl: 'Base malts · packaging', cycle: 'Monthly', w: 180 },
                { c: 'C', lbl: 'Adjuncts · MRO · finings', cycle: 'Quarterly', w: 140 },
              ].map((r, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ display: 'flex', width: 22, height: 22, borderRadius: 11, backgroundColor: C.forest, alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontSize: 11, fontWeight: 700, color: '#FFFCF5' }}>{r.c}</span>
                  </div>
                  <div style={{ display: 'flex', backgroundColor: C.fillP, height: 22, width: r.w, borderRadius: 4, alignItems: 'center', paddingLeft: 8 }}>
                    <span style={{ fontSize: 10, color: C.text, fontWeight: 700 }}>{r.lbl}</span>
                  </div>
                  <span style={{ fontSize: 10, color: C.gold, fontWeight: 700 }}>{r.cycle}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card num="04" title="THREE-TIER FORECASTING"
            footer="Weekly check is the same Monday anchor used in Section 5 procurement.">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <Row tag="ANNUAL" mid="November" body="Sets brew calendar + seasonal lineup" />
              <Row tag="MONTHLY" mid="Rolling" body="Adjusts the 60-day schedule" />
              <Row tag="WEEKLY" mid="Monday" body="Catches tactical drift early" />
            </div>
          </Card>
        </div>
      </div>
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
      <span style={{ fontSize: 9, color: prominent ? C.forest : C.muted, marginTop: 4, letterSpacing: 0.5 }}>{small}</span>
    </div>
  );
}

function SlideDecisions() {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', width: W, height: H,
      backgroundColor: C.slideBg, padding: '24px 30px',
      fontFamily: 'Inter, sans-serif',
    }}>
      <div style={{ display: 'flex', flexDirection: 'row', flex: 1, gap: 18 }}>
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, gap: 18 }}>
          <Card num="01" title="MICROSTAR PAY-PER-FILL"
            footer="Lease contract is the forcing function for annual production planning (Gemma).">
            <div style={{ display: 'flex', alignItems: 'stretch', gap: 10 }}>
              <div style={{ display: 'flex', flexDirection: 'column', flex: 1, backgroundColor: C.fillP, borderRadius: 6, padding: '10px 12px' }}>
                <span style={{ fontSize: 9, color: C.muted, letterSpacing: 0.6 }}>OWN MODEL</span>
                <span style={{ fontSize: 22, fontWeight: 700, color: C.muted, marginTop: 4, lineHeight: 1 }}>$60-120K</span>
                <span style={{ fontSize: 10, color: C.muted, marginTop: 4 }}>tied-up keg capital</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', flex: 1, backgroundColor: C.fillG, borderRadius: 6, padding: '10px 12px' }}>
                <span style={{ fontSize: 9, color: C.forest, letterSpacing: 0.6 }}>PAY-PER-FILL</span>
                <span style={{ fontSize: 22, fontWeight: 700, color: C.forest, marginTop: 4, lineHeight: 1 }}>variable</span>
                <span style={{ fontSize: 10, color: C.forest, marginTop: 4 }}>operating cost only</span>
              </div>
            </div>
          </Card>
          <Card num="03" title="FICKEN · MIDWEST COAST"
            footer="6+ years of weekly Excel forecast history. 5-7 yeast generations achieved per strain.">
            <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: C.fillP, borderRadius: 6, padding: '10px 12px', borderLeft: `3px solid ${C.gold}` }}>
              <span style={{ fontSize: 13, color: C.text, fontWeight: 700, lineHeight: 1.3 }}>"$1 to make. $8 in the taproom."</span>
              <span style={{ fontSize: 10, color: C.muted, marginTop: 4 }}>87.5% gross margin · April 13, 2026</span>
            </div>
          </Card>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, gap: 18 }}>
          <Card num="02" title="FLAGSHIP IPA SAFETY STOCK"
            footer="95% service level baseline (Z = 1.65). Refined as demand history accumulates.">
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <StatTile big="71" small="CASES SAFETY" prominent />
              <StatTile big="371" small="REORDER POINT" prominent />
            </div>
            <span style={{ fontSize: 10, color: C.muted, marginTop: 10 }}>Yeast reuse to 5 generations · break-even vs fresh at 2-4 repitches.</span>
          </Card>
          <Card num="04" title="GEMMA · HAYMARKET"
            footer="Co-Owner and COO interview, April 15, 2026. Distributor takes 25-30%, retailer similar.">
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <StatTile big="$400" small="2 kegs · DISTRIBUTION" />
              <StatTile big="$1,400" small="2 kegs · ON-SITE" prominent />
            </div>
            <span style={{ fontSize: 10, color: C.muted, marginTop: 10 }}>3.5x revenue gap. Validates taproom-first allocation rule.</span>
          </Card>
        </div>
      </div>
    </div>
  );
}

(async () => {
  if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });
  const fonts = await loadFonts();

  console.log('Rendering slide 12 strategy visual...');
  const buf12 = await render(<SlideStrategy />, W, H, fonts);
  save(buf12, 'slide-12-strategy.png');

  console.log('Rendering slide 13 decisions visual...');
  const buf13 = await render(<SlideDecisions />, W, H, fonts);
  save(buf13, 'slide-13-decisions.png');

  console.log('Done.');
})();
