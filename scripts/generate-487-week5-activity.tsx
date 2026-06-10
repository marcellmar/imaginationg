#!/usr/bin/env npx tsx

import React from 'react';

/**
 * SCMG 487 Week 5 - Commodity Hedging Class Activity
 * CORN - Real market data, Sept/Dec 2026 futures
 *
 * Run from imaginationg-main root:
 *   npx tsx scripts/generate-487-week5-activity.tsx
 */

import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import * as fs from 'fs';
import * as path from 'path';

const BASE = path.join(
  '/Users/marsonemac/Documents/projects/marcus-gpi-brain',
  'work-loyola/processed-documents/SCMG-487-purchasing-management/lectures'
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
  blue:     '#2563EB',
  blueBg:   '#EFF6FF',
  green:    '#16A34A',
  greenBg:  '#F0FDF4',
  red:      '#DC2626',
  redBg:    '#FEF2F2',
  amber:    '#D97706',
  amberBg:  '#FFFBEB',
  teal:     '#0D9488',
  tealBg:   '#F0FDFA',
  purple:   '#7C3AED',
  purpleBg: '#F5F3FF',
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

function save(buf: Buffer, name: string) {
  if (!fs.existsSync(BASE)) fs.mkdirSync(BASE, { recursive: true });
  const p = path.join(BASE, name);
  fs.writeFileSync(p, buf);
  console.log('Saved:', p);
}

const colHeader = (figRef: string, title: string) => (
  <div style={{ display: 'flex', flexDirection: 'column' as const, backgroundColor: C.accent, padding: '8px 14px' }}>
    <span style={{ fontSize: 10, color: '#AAAAAA', letterSpacing: 1 }}>{figRef}</span>
    <span style={{ fontSize: 13, fontWeight: 700, color: '#FFFFFF' }}>{title}</span>
  </div>
);

const bullet = (bold: string, sub: string) => (
  <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 2, marginBottom: 8 }}>
    <span style={{ fontSize: 12, fontWeight: 700, color: C.text }}>{'\u203A'} {bold}</span>
    <span style={{ fontSize: 11, color: C.muted, paddingLeft: 12 }}>{sub}</span>
  </div>
);

function FigW5_CornHedge() {
  const W = 1100, H = 880;

  // Real data as of March 25, 2026
  const spotPrice = 4.24;        // Iowa cash corn, March 2026
  const septFutures = 4.805;     // ZCU26 last: 480-4 = $4.805/bu
  const decFutures = 4.9425;     // ZCZ26 last: 494-2 = $4.9425/bu
  const forecastSpot = 5.10;     // USDA season avg $4.20, but weather risk + tariff risk + ethanol demand => upside scenario
  const need = 500000;           // 500,000 bushels (100 contracts x 5,000 bu)
  const contractSize = 5000;     // CBOT standard
  const numContracts = need / contractSize; // 100

  const withoutHedge = need * forecastSpot;
  const withHedge = need * septFutures;
  const savings = withoutHedge - withHedge;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: W, height: H, backgroundColor: C.bg, padding: '32px 40px', fontFamily: 'Inter, sans-serif' }}>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 14 }}>
        <span style={{ fontSize: 11, color: C.muted, letterSpacing: 1.5, textTransform: 'uppercase' as const }}>Week 5 Class Activity</span>
        <span style={{ fontSize: 22, fontWeight: 700, color: C.text, marginTop: 4 }}>Commodity Hedging: Corn</span>
        <span style={{ fontSize: 12, color: C.muted, marginTop: 4 }}>Real CBOT data as of March 25, 2026 | Delivery: September-October</span>
      </div>

      <div style={{ display: 'flex', gap: 16, flex: 1 }}>

        {/* LEFT: Market Data */}
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, gap: 12 }}>

          <div style={{ display: 'flex', flexDirection: 'column', border: `1px solid ${C.border}`, borderRadius: 6, overflow: 'hidden', flex: 1 }}>
            {colHeader('MARKET DATA', 'CBOT Corn Prices (March 25, 2026)')}
            <div style={{ display: 'flex', flexDirection: 'column', padding: '14px 16px', flex: 1 }}>

              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10, padding: '8px 12px', backgroundColor: C.fill1, borderRadius: 4 }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: 12, fontWeight: 700, color: C.text }}>Cash Corn (spot)</span>
                  <span style={{ fontSize: 10, color: C.muted }}>Iowa state avg, Mar 25</span>
                </div>
                <span style={{ fontSize: 18, fontWeight: 700, color: C.text }}>$4.24/bu</span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10, padding: '8px 12px', backgroundColor: C.blueBg, borderRadius: 4 }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: 12, fontWeight: 700, color: C.blue }}>Sept 2026 Futures (ZCU26)</span>
                  <span style={{ fontSize: 10, color: C.blue }}>Delivery: Sept. First Notice late Aug.</span>
                </div>
                <span style={{ fontSize: 18, fontWeight: 700, color: C.blue }}>$4.805/bu</span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10, padding: '8px 12px', backgroundColor: C.purpleBg, borderRadius: 4 }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: 12, fontWeight: 700, color: C.purple }}>Dec 2026 Futures (ZCZ26)</span>
                  <span style={{ fontSize: 10, color: C.purple }}>New crop contract, harvest delivery</span>
                </div>
                <span style={{ fontSize: 18, fontWeight: 700, color: C.purple }}>$4.94/bu</span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10, padding: '8px 12px', backgroundColor: C.redBg, borderRadius: 4 }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: 12, fontWeight: 700, color: C.red }}>Our Forecast (Sept spot)</span>
                  <span style={{ fontSize: 10, color: C.red }}>Weather risk + tariff uncertainty</span>
                </div>
                <span style={{ fontSize: 18, fontWeight: 700, color: C.red }}>$5.10/bu</span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 12px', backgroundColor: C.fill1, borderRadius: 4 }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: 12, fontWeight: 700, color: C.text }}>Total Need</span>
                  <span style={{ fontSize: 10, color: C.muted }}>100 contracts x 5,000 bu each</span>
                </div>
                <span style={{ fontSize: 18, fontWeight: 700, color: C.text }}>500,000 bu</span>
              </div>
            </div>
          </div>

          {/* Why we forecast higher */}
          <div style={{ display: 'flex', flexDirection: 'column', border: `2px solid ${C.amber}`, borderRadius: 8, overflow: 'hidden' }}>
            <div style={{ display: 'flex', backgroundColor: C.amber, padding: '8px 14px', justifyContent: 'center' }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: '#FFFFFF' }}>Why Forecast $5.10?</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', padding: '10px 14px', backgroundColor: C.amberBg }}>
              <span style={{ fontSize: 10, color: C.text, marginBottom: 4 }}>{'\u2022'} USDA projects 7% production decline (15.8B bu, down from 17B)</span>
              <span style={{ fontSize: 10, color: C.text, marginBottom: 4 }}>{'\u2022'} Summer weather risk (La Nina watch, drought potential)</span>
              <span style={{ fontSize: 10, color: C.text, marginBottom: 4 }}>{'\u2022'} Tariff uncertainty pressuring export demand</span>
              <span style={{ fontSize: 10, color: C.text }}>{'\u2022'} Ethanol mandate keeps domestic demand floor firm</span>
            </div>
          </div>
        </div>

        {/* MIDDLE: Decision Logic + Hedge Mechanics */}
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, gap: 12 }}>

          <div style={{ display: 'flex', flexDirection: 'column', border: `1px solid ${C.border}`, borderRadius: 6, overflow: 'hidden', flex: 1 }}>
            {colHeader('DECISION', 'Should We Hedge Corn Now?')}
            <div style={{ display: 'flex', flexDirection: 'column', padding: '14px 14px', flex: 1 }}>

              <span style={{ fontSize: 11, fontWeight: 700, color: C.text, marginBottom: 10 }}>Compare forecast vs. futures:</span>

              <div style={{ display: 'flex', flexDirection: 'column', padding: '10px 12px', backgroundColor: C.greenBg, border: `1.5px solid ${C.green}`, borderRadius: 6, marginBottom: 10 }}>
                <span style={{ fontSize: 12, fontWeight: 700, color: C.green, marginBottom: 4 }}>Forecast $5.10 {'>'} Sept Futures $4.805</span>
                <span style={{ fontSize: 11, color: C.text }}>We believe corn will cost more in September than the futures price today. Lock in the lower price now.</span>
              </div>

              <span style={{ fontSize: 11, fontWeight: 700, color: C.text, marginBottom: 8, marginTop: 6 }}>Which contract month?</span>

              {bullet('Sept (ZCU26): $4.805', 'Matches our delivery window. First Notice Day late August. Delivery in September.')}
              {bullet('Dec (ZCZ26): $4.94', '$0.135 more per bushel. New crop pricing. Only use if we need Oct/Nov delivery flexibility.')}

              <div style={{ display: 'flex', backgroundColor: C.blueBg, border: `1px solid ${C.blue}`, borderRadius: 4, padding: '8px 10px', marginTop: 6 }}>
                <span style={{ fontSize: 11, color: C.blue, fontWeight: 700 }}>Pick September (ZCU26). Cheaper and aligns with delivery need.</span>
              </div>
            </div>
          </div>

          {/* Hedge mechanics */}
          <div style={{ display: 'flex', flexDirection: 'column', border: `1px solid ${C.border}`, borderRadius: 6, overflow: 'hidden' }}>
            {colHeader('MECHANICS', 'How the Hedge Works')}
            <div style={{ display: 'flex', flexDirection: 'column', padding: '12px 14px' }}>

              <div style={{ display: 'flex', flexDirection: 'column', border: `1px solid ${C.rule}`, borderRadius: 4, overflow: 'hidden' }}>
                <div style={{ display: 'flex', backgroundColor: C.fill2 }}>
                  <div style={{ display: 'flex', flex: '0 0 120px', padding: '6px 10px' }}>
                    <span style={{ fontSize: 10, fontWeight: 700, color: C.text }}>Date</span>
                  </div>
                  <div style={{ display: 'flex', flex: 1, padding: '6px 10px' }}>
                    <span style={{ fontSize: 10, fontWeight: 700, color: C.text }}>Cash Market</span>
                  </div>
                  <div style={{ display: 'flex', flex: 1, padding: '6px 10px' }}>
                    <span style={{ fontSize: 10, fontWeight: 700, color: C.text }}>Futures Market</span>
                  </div>
                </div>

                <div style={{ display: 'flex', borderTop: `1px solid ${C.rule}` }}>
                  <div style={{ display: 'flex', flex: '0 0 120px', padding: '6px 10px' }}>
                    <span style={{ fontSize: 10, color: C.muted }}>March 25</span>
                  </div>
                  <div style={{ display: 'flex', flex: 1, padding: '6px 10px' }}>
                    <span style={{ fontSize: 10, color: C.text }}>Spot: $4.24/bu (don't buy yet)</span>
                  </div>
                  <div style={{ display: 'flex', flex: 1, padding: '6px 10px' }}>
                    <span style={{ fontSize: 10, color: C.blue, fontWeight: 700 }}>BUY 100 Sept @ $4.805</span>
                  </div>
                </div>

                <div style={{ display: 'flex', borderTop: `1px solid ${C.rule}` }}>
                  <div style={{ display: 'flex', flex: '0 0 120px', padding: '6px 10px' }}>
                    <span style={{ fontSize: 10, color: C.muted }}>September</span>
                  </div>
                  <div style={{ display: 'flex', flex: 1, padding: '6px 10px' }}>
                    <span style={{ fontSize: 10, color: C.red }}>Buy corn at $5.10 (spot)</span>
                  </div>
                  <div style={{ display: 'flex', flex: 1, padding: '6px 10px' }}>
                    <span style={{ fontSize: 10, color: C.green, fontWeight: 700 }}>SELL 100 Sept @ ~$5.10</span>
                  </div>
                </div>

                <div style={{ display: 'flex', borderTop: `1px solid ${C.rule}`, backgroundColor: C.fill1 }}>
                  <div style={{ display: 'flex', flex: '0 0 120px', padding: '6px 10px' }}>
                    <span style={{ fontSize: 10, fontWeight: 700, color: C.text }}>Result</span>
                  </div>
                  <div style={{ display: 'flex', flex: 1, padding: '6px 10px' }}>
                    <span style={{ fontSize: 10, color: C.red, fontWeight: 700 }}>Loss: $0.86/bu higher</span>
                  </div>
                  <div style={{ display: 'flex', flex: 1, padding: '6px 10px' }}>
                    <span style={{ fontSize: 10, color: C.green, fontWeight: 700 }}>Gain: ~$0.295/bu profit</span>
                  </div>
                </div>
              </div>

              <span style={{ fontSize: 10, color: C.muted, marginTop: 6 }}>Futures gain offsets higher cash price. Net cost stabilized near $4.805/bu.</span>
            </div>
          </div>
        </div>

        {/* RIGHT: The Math + Recommendation */}
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, gap: 12 }}>

          <div style={{ display: 'flex', flexDirection: 'column', border: `2px solid ${C.blue}`, borderRadius: 8, overflow: 'hidden', flex: 1 }}>
            <div style={{ display: 'flex', backgroundColor: C.blue, padding: '10px 14px', justifyContent: 'center' }}>
              <span style={{ fontSize: 14, fontWeight: 700, color: '#FFFFFF' }}>The Math</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', padding: '16px 16px', flex: 1, backgroundColor: C.blueBg }}>

              <span style={{ fontSize: 11, fontWeight: 700, color: C.text, marginBottom: 8 }}>Without hedge (buy at forecast spot):</span>
              <span style={{ fontSize: 11, color: C.text, marginBottom: 4 }}>500,000 bu x $5.10/bu</span>
              <span style={{ fontSize: 18, fontWeight: 700, color: C.red, marginBottom: 14 }}>= $2,550,000</span>

              <span style={{ fontSize: 11, fontWeight: 700, color: C.text, marginBottom: 8 }}>With hedge (lock Sept futures):</span>
              <span style={{ fontSize: 11, color: C.text, marginBottom: 4 }}>500,000 bu x $4.805/bu</span>
              <span style={{ fontSize: 18, fontWeight: 700, color: C.blue, marginBottom: 14 }}>= $2,402,500</span>

              <div style={{ display: 'flex', borderTop: `2px solid ${C.blue}`, paddingTop: 12, flexDirection: 'column' }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: C.text, marginBottom: 4 }}>Estimated Savings:</span>
                <span style={{ fontSize: 11, color: C.text, marginBottom: 4 }}>($5.10 - $4.805) x 500,000</span>
                <span style={{ fontSize: 24, fontWeight: 700, color: C.green }}>= $147,500</span>
              </div>
            </div>
          </div>

          {/* Contract specs */}
          <div style={{ display: 'flex', flexDirection: 'column', border: `1px solid ${C.border}`, borderRadius: 6, overflow: 'hidden' }}>
            {colHeader('CBOT SPECS', 'Corn Futures Contract')}
            <div style={{ display: 'flex', flexDirection: 'column', padding: '10px 14px' }}>
              <span style={{ fontSize: 10, color: C.muted, marginBottom: 3 }}>{'\u2022'} Contract size: 5,000 bushels</span>
              <span style={{ fontSize: 10, color: C.muted, marginBottom: 3 }}>{'\u2022'} Tick: 1/4 cent = $12.50 per contract</span>
              <span style={{ fontSize: 10, color: C.muted, marginBottom: 3 }}>{'\u2022'} Months: Mar, May, Jul, Sep, Dec (no Oct)</span>
              <span style={{ fontSize: 10, color: C.muted, marginBottom: 3 }}>{'\u2022'} Exchange: CBOT (CME Group)</span>
              <span style={{ fontSize: 10, color: C.muted }}>{'\u2022'} 100 contracts = 500,000 bushels</span>
            </div>
          </div>

          {/* Recommendation */}
          <div style={{ display: 'flex', backgroundColor: C.accent, borderRadius: 8, padding: '14px 16px', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ fontSize: 16, fontWeight: 700, color: '#FFFFFF' }}>RECOMMENDATION: HEDGE NOW</span>
              <span style={{ fontSize: 11, color: '#AAAAAA', marginTop: 4 }}>Buy 100 Sept corn futures (ZCU26) at $4.805/bu</span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom notes */}
      <div style={{ display: 'flex', gap: 12, marginTop: 14 }}>
        <div style={{ display: 'flex', flex: 1, backgroundColor: C.amberBg, border: `1px solid ${C.amber}`, borderRadius: 4, padding: '8px 12px' }}>
          <span style={{ fontSize: 10, color: C.amber }}>
            <span style={{ fontWeight: 700 }}>Risk:</span> If Sept spot falls below $4.805, we overpay vs. spot. Hedge locks in cost but caps the downside savings. Insurance has a cost.
          </span>
        </div>
        <div style={{ display: 'flex', flex: 1, backgroundColor: C.greenBg, border: `1px solid ${C.green}`, borderRadius: 4, padding: '8px 12px' }}>
          <span style={{ fontSize: 10, color: C.green }}>
            <span style={{ fontWeight: 700 }}>Key principle:</span> Hedging is insurance, not speculation. We lock in a known cost ($4.805) to eliminate price uncertainty for our Sept-Oct delivery window.
          </span>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10, padding: '0 4px' }}>
        <span style={{ fontSize: 9, color: C.light }}>Sources: Barchart ZCU26/ZCZ26, Iowa USDA cash corn, USDA Feb 2026 Ag Outlook</span>
        <span style={{ fontSize: 10, color: C.light }}>SCMG 487 | Week 5 | Commodity Hedging Activity</span>
      </div>
    </div>
  );
}

async function main() {
  const fonts = await loadFonts();
  console.log('Generating Week 5 corn hedging figure...');

  const fig = await render(<FigW5_CornHedge />, 1100, 880, fonts);
  save(fig, 'fig-w5-activity-commodity-hedging.png');

  console.log('Done.');
}

main().catch(console.error);
