#!/usr/bin/env npx tsx

import React from 'react';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import * as fs from 'fs';
import * as path from 'path';

const SCALE = 2;

const C = {
  page: '#F7F2E8',
  paper: '#FFFCF5',
  tan: '#F1E7D5',
  ink: '#1C1917',
  muted: '#6B6257',
  faint: '#D8C9AE',
  red: '#A8201A',
  green: '#536B45',
};

type Size = { w: number; h: number };

async function loadFonts() {
  const dir = path.join(process.cwd(), 'public', 'fonts');
  const reg = fs.readFileSync(path.join(dir, 'Inter-Regular.woff'));
  const bld = fs.readFileSync(path.join(dir, 'Inter-Bold.woff'));
  return [
    { name: 'Inter', data: reg.buffer.slice(reg.byteOffset, reg.byteOffset + reg.byteLength), weight: 400 as const },
    { name: 'Inter', data: bld.buffer.slice(bld.byteOffset, bld.byteOffset + bld.byteLength), weight: 700 as const },
  ];
}

function Shell({ size, title, label, children }: { size: Size; title: string; label: string; children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', width: size.w, height: size.h, backgroundColor: C.page, padding: 28, fontFamily: 'Inter' }}>
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', backgroundColor: C.paper, border: `2px solid ${C.faint}`, borderRadius: 24, padding: 28, gap: 20 }}>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ display: 'flex', fontSize: 17, fontWeight: 700, letterSpacing: 0.4, color: C.ink }}>GPI.STUDIO</div>
            <div style={{ display: 'flex', fontSize: 13, fontWeight: 700, letterSpacing: 1.6, textTransform: 'uppercase', color: C.red }}>{label}</div>
          </div>
          <div style={{ display: 'flex', fontSize: 13, fontWeight: 700, letterSpacing: 1.1, textTransform: 'uppercase', color: C.muted }}>sample map</div>
        </div>
        <div style={{ display: 'flex', fontSize: 45, lineHeight: 1.02, fontWeight: 700, color: C.ink }}>{title}</div>
        {children}
      </div>
    </div>
  );
}

function Box({ title, detail, tone = C.tan, grow }: { title: string; detail: string; tone?: string; grow?: number }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: grow ?? 1, backgroundColor: tone, border: `1.5px solid ${C.faint}`, borderRadius: 16, padding: 18, gap: 8 }}>
      <div style={{ display: 'flex', fontSize: 22, lineHeight: 1.08, fontWeight: 700, color: C.ink }}>{title}</div>
      <div style={{ display: 'flex', fontSize: 16, lineHeight: 1.22, color: C.muted }}>{detail}</div>
    </div>
  );
}

function Callout({ title, detail }: { title: string; detail: string }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: 190, backgroundColor: C.tan, border: `1.5px solid ${C.faint}`, borderRadius: 16, padding: 18, gap: 8 }}>
      <div style={{ display: 'flex', fontSize: 22, lineHeight: 1.08, fontWeight: 700, color: C.ink }}>{title}</div>
      <div style={{ display: 'flex', fontSize: 16, lineHeight: 1.22, color: C.muted }}>{detail}</div>
    </div>
  );
}

function MiniLine({ text, red }: { text: string; red?: boolean }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'flex-start' }}>
      <div style={{ display: 'flex', width: 8, height: 8, borderRadius: 4, backgroundColor: red ? C.red : C.faint, marginTop: 9 }} />
      <div style={{ display: 'flex', flex: 1, fontSize: 19, lineHeight: 1.18, color: C.ink }}>{text}</div>
    </div>
  );
}

function FlowArrow() {
  return <div style={{ display: 'flex', alignItems: 'center', fontSize: 32, fontWeight: 700, color: C.red, padding: '0 6px' }}>→</div>;
}

function ClinicAdminMap() {
  const size = { w: 1100, h: 760 };
  return (
    <Shell size={size} label="clinic admin map" title="Visit is booked. Care still stalls.">
      <div style={{ display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'stretch' }}>
        <Box title="Schedule" detail="Slot exists before readiness is clean." />
        <FlowArrow />
        <Box title="Chart note" detail="Missing detail changes the code." />
        <FlowArrow />
        <Box title="CPT / plan" detail="Code and coverage do not line up." />
        <FlowArrow />
        <Box title="Payer call" detail="Nurse tracks the gap by phone." />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', gap: 16, marginTop: 4 }}>
        <Box title="+18%" detail="reschedules" tone="#FFF8EA" />
        <Box title="+26%" detail="payer calls" tone="#F4DFCF" />
        <Box title="1 owner?" detail="Nobody owns readiness across note, code, plan, and patient." tone="#FFF8EA" grow={1.4} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', gap: 16, marginTop: 'auto' }}>
        <Box title="GPI read" detail="The clinic is measuring booked visits while readiness sits across four desks." tone="#FFF8EA" />
        <Box title="Move" detail="Check note, CPT, plan, and auth before the visit gets called ready." tone="#FFF8EA" />
      </div>
    </Shell>
  );
}

function DecisionDragMap() {
  const size = { w: 900, h: 900 };
  return (
    <Shell size={size} label="decision drag map" title="Decision keeps circling.">
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
        <div style={{ display: 'flex', width: 310, height: 310, borderRadius: 155, border: `3px solid ${C.red}`, backgroundColor: '#FFF8EA', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: 34, fontSize: 34, lineHeight: 1.05, fontWeight: 700, color: C.ink }}>
          No one owns the call.
        </div>
        <div style={{ display: 'flex', position: 'absolute', left: 16, top: 10 }}><Callout title="Risk" detail="Legal asks for one more pass." /></div>
        <div style={{ display: 'flex', position: 'absolute', right: 12, top: 72 }}><Callout title="Data" detail="Metric debate restarts." /></div>
        <div style={{ display: 'flex', position: 'absolute', left: 4, bottom: 80 }}><Callout title="Politics" detail="Approval path stays soft." /></div>
        <div style={{ display: 'flex', position: 'absolute', right: 24, bottom: 16 }}><Callout title="Budget" detail="Owner has spend, no authority." /></div>
      </div>
      <div style={{ display: 'flex', borderTop: `2px solid ${C.faint}`, paddingTop: 16, fontSize: 23, lineHeight: 1.2, color: C.ink }}>
        Move: force one reversible test, one owner, one kill date.
      </div>
    </Shell>
  );
}

async function render(name: string, size: Size, element: React.ReactElement, fonts: Awaited<ReturnType<typeof loadFonts>>) {
  const svg = await satori(element, { width: size.w, height: size.h, fonts });
  const resvg = new Resvg(svg, { fitTo: { mode: 'width', value: size.w * SCALE } });
  const png = Buffer.from(resvg.render().asPng());
  const outDir = path.join(process.cwd(), 'public', 'images', 'maps');
  fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, name);
  fs.writeFileSync(outPath, png);
  console.log(outPath);
}

async function main() {
  const fonts = await loadFonts();
  await render('clinic-admin-map-satori.png', { w: 1100, h: 760 }, <ClinicAdminMap />, fonts);
  await render('decision-drag-map-satori.png', { w: 900, h: 900 }, <DecisionDragMap />, fonts);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
