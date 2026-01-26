/**
 * Satori Diagram Generator
 * Professional diagrams matching the GPI chart visual style
 */

import satori from 'satori';
import * as fs from 'fs';
import * as path from 'path';
import { COLORS, CompanyData } from './types';

// Font loading (cached)
let fontData: ArrayBuffer | null = null;
let fontBoldData: ArrayBuffer | null = null;

async function loadFonts() {
  if (fontData && fontBoldData) {
    return [
      { name: 'Inter', data: fontData, weight: 400 as const },
      { name: 'Inter', data: fontBoldData, weight: 700 as const },
    ];
  }

  // Try local fonts first
  try {
    const fontDir = path.join(process.cwd(), 'public', 'fonts');
    const regularBuffer = fs.readFileSync(path.join(fontDir, 'Inter-Regular.woff'));
    const boldBuffer = fs.readFileSync(path.join(fontDir, 'Inter-Bold.woff'));
    fontData = regularBuffer.buffer.slice(regularBuffer.byteOffset, regularBuffer.byteOffset + regularBuffer.byteLength);
    fontBoldData = boldBuffer.buffer.slice(boldBuffer.byteOffset, boldBuffer.byteOffset + boldBuffer.byteLength);
  } catch {
    // Fallback to fetch
    const regularRes = await fetch(
      'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff'
    );
    fontData = await regularRes.arrayBuffer();

    const boldRes = await fetch(
      'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYAZ9hjp-Ek-_EeA.woff'
    );
    fontBoldData = await boldRes.arrayBuffer();
  }

  return [
    { name: 'Inter', data: fontData, weight: 400 as const },
    { name: 'Inter', data: fontBoldData, weight: 700 as const },
  ];
}

// ============================================
// SHARED COMPONENTS
// ============================================

function DiagramContainer({
  children,
  title,
  subtitle,
  width = 800,
  height = 600
}: {
  children: any;
  title: string;
  subtitle?: string;
  width?: number;
  height?: number;
}) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width,
        height,
        backgroundColor: COLORS.bg,
        padding: 48,
        fontFamily: 'Inter, Arial, sans-serif',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 32 }}>
        <span style={{ fontSize: 32, fontWeight: 700, color: COLORS.text, letterSpacing: -0.5 }}>{title}</span>
        {subtitle && (
          <span style={{ fontSize: 16, color: COLORS.textMuted, marginTop: 10 }}>{subtitle}</span>
        )}
      </div>

      {/* Content */}
      <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
        {children}
      </div>

      {/* Footer */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 32 }}>
        <span style={{ fontSize: 13, color: COLORS.textMuted, letterSpacing: 0.5 }}>
          imaginationg.studio
        </span>
      </div>
    </div>
  );
}

function StateBox({
  label,
  state,
  items
}: {
  label: string;
  state: 'field' | 'transitioning' | 'particle';
  items: { name: string; value: number }[];
}) {
  const colors = {
    field: { bg: '#052e16', border: COLORS.field, text: COLORS.field },
    transitioning: { bg: '#422006', border: COLORS.transitioning, text: COLORS.transitioning },
    particle: { bg: '#450a0a', border: COLORS.particle, text: COLORS.particle },
  };
  const c = colors[state];

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: c.bg,
        border: `2px solid ${c.border}`,
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
      }}
    >
      <span style={{ fontSize: 14, fontWeight: 700, color: c.text, marginBottom: 12 }}>
        {label}
      </span>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {items.map((item, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              backgroundColor: COLORS.bg,
              border: `1px solid ${c.border}`,
              borderRadius: 6,
              padding: '6px 12px',
            }}
          >
            <span style={{ fontSize: 13, color: c.text }}>
              {item.name} <span style={{ fontWeight: 700 }}>{item.value.toFixed(2)}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function CompanyPill({
  name,
  gpi,
  state
}: {
  name: string;
  gpi: number;
  state: 'field' | 'transitioning' | 'particle';
}) {
  const colors = {
    field: COLORS.field,
    transitioning: COLORS.transitioning,
    particle: COLORS.particle,
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#111',
        border: `1px solid ${colors[state]}`,
        borderRadius: 20,
        padding: '8px 16px',
        margin: 4,
      }}
    >
      <span style={{ fontSize: 14, color: colors[state], fontWeight: 600 }}>
        {name}
      </span>
      <span style={{ fontSize: 12, color: COLORS.textMuted, marginLeft: 8 }}>
        {gpi.toFixed(2)}
      </span>
    </div>
  );
}

function DimensionRow({
  label,
  abbrev,
  weight,
  tier,
}: {
  label: string;
  abbrev: string;
  weight: string;
  tier: 'high' | 'medium' | 'low';
}) {
  const colors = {
    high: COLORS.field,
    medium: COLORS.transitioning,
    low: COLORS.textMuted,
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#111',
        border: `1px solid ${colors[tier]}`,
        borderRadius: 8,
        padding: '12px 20px',
        marginBottom: 8,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ fontSize: 14, fontWeight: 700, color: colors[tier], width: 40 }}>
          {abbrev}
        </span>
        <span style={{ fontSize: 14, color: COLORS.text, marginLeft: 12 }}>
          {label}
        </span>
      </div>
      <span style={{ fontSize: 14, fontWeight: 700, color: colors[tier] }}>
        {weight}
      </span>
    </div>
  );
}

function FlowArrow({ direction = 'down' }: { direction?: 'down' | 'right' }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: direction === 'down' ? '8px 0' : '0 8px',
      }}
    >
      <span style={{ fontSize: 20, color: COLORS.textMuted }}>
        {direction === 'down' ? '↓' : '→'}
      </span>
    </div>
  );
}

// ============================================
// DIAGRAM: Company Spectrum
// ============================================

interface SpectrumData {
  field: { name: string; gpi: number }[];
  transitioning: { name: string; gpi: number }[];
  particle: { name: string; gpi: number }[];
}

function GPISpectrumDiagram({ data }: { data: SpectrumData }) {
  return (
    <DiagramContainer title="GPI Company Spectrum" subtitle="Companies organized by transformation state" height={700}>
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        {/* Field State */}
        <StateBox
          label="FIELD STATE (GPI 1.0 - 3.0)"
          state="field"
          items={data.field.map(c => ({ name: c.name, value: c.gpi }))}
        />

        <FlowArrow />

        {/* Transitioning */}
        <StateBox
          label="TRANSITIONING (GPI 3.1 - 6.9)"
          state="transitioning"
          items={data.transitioning.map(c => ({ name: c.name, value: c.gpi }))}
        />

        <FlowArrow />

        {/* Particle State */}
        <StateBox
          label="PARTICLE STATE (GPI 7.0 - 10.0)"
          state="particle"
          items={data.particle.map(c => ({ name: c.name, value: c.gpi }))}
        />
      </div>
    </DiagramContainer>
  );
}

export async function generateSpectrumDiagram(data: SpectrumData) {
  const fonts = await loadFonts();
  const svg = await satori(<GPISpectrumDiagram data={data} />, {
    width: 800,
    height: 700,
    fonts,
  });
  return { svg, width: 800, height: 700 };
}

// ============================================
// DIAGRAM: Dimensions Weight
// ============================================

function GPIDimensionsDiagram() {
  return (
    <DiagramContainer title="GPI Dimensions" subtitle="Weighted by impact on organizational metabolism" height={600}>
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'center' }}>
        {/* High Weight */}
        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 20 }}>
          <span style={{ fontSize: 12, fontWeight: 700, color: COLORS.field, marginBottom: 8 }}>
            HIGH WEIGHT (20% each)
          </span>
          <DimensionRow label="Decision Latency" abbrev="DL" weight="0.20" tier="high" />
          <DimensionRow label="Error Correction" abbrev="EC" weight="0.20" tier="high" />
        </div>

        {/* Medium Weight */}
        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 20 }}>
          <span style={{ fontSize: 12, fontWeight: 700, color: COLORS.transitioning, marginBottom: 8 }}>
            MEDIUM WEIGHT (15% each)
          </span>
          <DimensionRow label="Knowledge Location" abbrev="KL" weight="0.15" tier="medium" />
          <DimensionRow label="Structural Lock-In" abbrev="SL" weight="0.15" tier="medium" />
        </div>

        {/* Low Weight */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontSize: 12, fontWeight: 700, color: COLORS.textMuted, marginBottom: 8 }}>
            LOWER WEIGHT (10% each)
          </span>
          <DimensionRow label="Talent Flow" abbrev="TF" weight="0.10" tier="low" />
          <DimensionRow label="Capital Intensity" abbrev="CI" weight="0.10" tier="low" />
          <DimensionRow label="Knowledge Velocity" abbrev="KV" weight="0.10" tier="low" />
        </div>
      </div>
    </DiagramContainer>
  );
}

export async function generateDimensionsDiagram() {
  const fonts = await loadFonts();
  const svg = await satori(<GPIDimensionsDiagram />, {
    width: 800,
    height: 600,
    fonts,
  });
  return { svg, width: 800, height: 600 };
}

// ============================================
// DIAGRAM: Formula
// ============================================

function GPIFormulaDiagram() {
  return (
    <DiagramContainer title="GPI Weighted Formula" subtitle="How the score is calculated" height={650}>
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {/* Formula */}
        <div
          style={{
            display: 'flex',
            backgroundColor: '#111',
            border: `2px solid ${COLORS.text}`,
            borderRadius: 12,
            padding: '20px 40px',
            marginBottom: 30,
          }}
        >
          <span style={{ fontSize: 18, fontWeight: 700, color: COLORS.text }}>
            GPI = Σ (Dimension × Weight)
          </span>
        </div>

        {/* Breakdown */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#0a0a0a',
            border: `1px solid #333`,
            borderRadius: 12,
            padding: 24,
            marginBottom: 30,
          }}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 8 }}>
            <span style={{ color: COLORS.field }}>(DL × 0.20)</span>
            <span style={{ color: COLORS.textMuted }}>+</span>
            <span style={{ color: COLORS.field }}>(EC × 0.20)</span>
            <span style={{ color: COLORS.textMuted }}>+</span>
            <span style={{ color: COLORS.transitioning }}>(KL × 0.15)</span>
            <span style={{ color: COLORS.textMuted }}>+</span>
            <span style={{ color: COLORS.transitioning }}>(SL × 0.15)</span>
            <span style={{ color: COLORS.textMuted }}>+</span>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 8, marginTop: 8 }}>
            <span style={{ color: COLORS.textMuted }}>(TF × 0.10)</span>
            <span style={{ color: COLORS.textMuted }}>+</span>
            <span style={{ color: COLORS.textMuted }}>(CI × 0.10)</span>
            <span style={{ color: COLORS.textMuted }}>+</span>
            <span style={{ color: COLORS.textMuted }}>(KV × 0.10)</span>
          </div>
        </div>

        {/* Result bands */}
        <div style={{ display: 'flex', gap: 16 }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: '#052e16',
              border: `2px solid ${COLORS.field}`,
              borderRadius: 8,
              padding: '16px 24px',
            }}
          >
            <span style={{ fontSize: 20, fontWeight: 700, color: COLORS.field }}>1.0 - 3.0</span>
            <span style={{ fontSize: 14, color: COLORS.field, marginTop: 4 }}>Field</span>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: '#422006',
              border: `2px solid ${COLORS.transitioning}`,
              borderRadius: 8,
              padding: '16px 24px',
            }}
          >
            <span style={{ fontSize: 20, fontWeight: 700, color: COLORS.transitioning }}>3.1 - 6.9</span>
            <span style={{ fontSize: 14, color: COLORS.transitioning, marginTop: 4 }}>Transitioning</span>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: '#450a0a',
              border: `2px solid ${COLORS.particle}`,
              borderRadius: 8,
              padding: '16px 24px',
            }}
          >
            <span style={{ fontSize: 20, fontWeight: 700, color: COLORS.particle }}>7.0 - 10.0</span>
            <span style={{ fontSize: 14, color: COLORS.particle, marginTop: 4 }}>Particle</span>
          </div>
        </div>
      </div>
    </DiagramContainer>
  );
}

export async function generateFormulaDiagram() {
  const fonts = await loadFonts();
  const svg = await satori(<GPIFormulaDiagram />, {
    width: 800,
    height: 650,
    fonts,
  });
  return { svg, width: 800, height: 650 };
}

// ============================================
// DIAGRAM: Deal/Acquisition Flow
// ============================================

interface DealData {
  acquirer: { name: string; gpi: number; traits: string[] };
  target: { name: string; gpi: number; traits: string[] };
  acquiring: string[];
  spinningOff: string[];
  delta: number;
}

function GPIDealDiagram({ data }: { data: DealData }) {
  return (
    <DiagramContainer
      title={`${data.acquirer.name} + ${data.target.name}`}
      subtitle={`GPI Delta: ${data.delta.toFixed(1)} points`}
      height={750}
    >
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        {/* Target (top) */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#450a0a',
            border: `2px solid ${COLORS.particle}`,
            borderRadius: 12,
            padding: 20,
            marginBottom: 16,
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
            <span style={{ fontSize: 18, fontWeight: 700, color: COLORS.particle }}>{data.target.name}</span>
            <span style={{ fontSize: 16, color: COLORS.particle }}>GPI {data.target.gpi.toFixed(2)}</span>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            {data.target.traits.map((t, i) => (
              <span key={i} style={{ fontSize: 12, color: COLORS.particle, backgroundColor: '#000', padding: '4px 8px', borderRadius: 4 }}>
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Split arrows */}
        <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: 16 }}>
          <span style={{ fontSize: 24, color: COLORS.field }}>↓</span>
          <span style={{ fontSize: 24, color: COLORS.particle }}>↓</span>
        </div>

        {/* Two columns */}
        <div style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
          {/* Going to acquirer */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              flex: 1,
              backgroundColor: '#0a1a0a',
              border: `2px solid ${COLORS.field}`,
              borderRadius: 12,
              padding: 16,
            }}
          >
            <span style={{ fontSize: 14, fontWeight: 700, color: COLORS.field, marginBottom: 12 }}>
              GOING TO {data.acquirer.name.toUpperCase()}
            </span>
            {data.acquiring.map((item, i) => (
              <div key={i} style={{ display: 'flex', backgroundColor: '#000', border: `1px solid ${COLORS.field}`, borderRadius: 6, padding: '8px 12px', marginBottom: 6 }}>
                <span style={{ fontSize: 13, color: COLORS.field }}>{item}</span>
              </div>
            ))}
          </div>

          {/* Spinning off */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              flex: 1,
              backgroundColor: '#1a0a0a',
              border: `2px solid ${COLORS.particle}`,
              borderRadius: 12,
              padding: 16,
            }}
          >
            <span style={{ fontSize: 14, fontWeight: 700, color: COLORS.particle, marginBottom: 12 }}>
              SPINNING OFF
            </span>
            {data.spinningOff.map((item, i) => (
              <div key={i} style={{ display: 'flex', backgroundColor: '#000', border: `1px solid ${COLORS.particle}`, borderRadius: 6, padding: '8px 12px', marginBottom: 6 }}>
                <span style={{ fontSize: 13, color: COLORS.particle }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Arrow down */}
        <div style={{ display: 'flex', justifyContent: 'flex-start', marginLeft: '25%', marginBottom: 16 }}>
          <span style={{ fontSize: 24, color: COLORS.field }}>↓</span>
        </div>

        {/* Acquirer (bottom) */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#052e16',
            border: `2px solid ${COLORS.field}`,
            borderRadius: 12,
            padding: 20,
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
            <span style={{ fontSize: 18, fontWeight: 700, color: COLORS.field }}>{data.acquirer.name}</span>
            <span style={{ fontSize: 16, color: COLORS.field }}>GPI {data.acquirer.gpi.toFixed(2)}</span>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            {data.acquirer.traits.map((t, i) => (
              <span key={i} style={{ fontSize: 12, color: COLORS.field, backgroundColor: '#000', padding: '4px 8px', borderRadius: 4 }}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </DiagramContainer>
  );
}

export async function generateDealDiagram(data: DealData) {
  const fonts = await loadFonts();
  const svg = await satori(<GPIDealDiagram data={data} />, {
    width: 800,
    height: 750,
    fonts,
  });
  return { svg, width: 800, height: 750 };
}

// ============================================
// DIAGRAM: Versus Story
// ============================================

interface VersusData {
  company1: { name: string; gpi: number; traits: string[]; outcome: string };
  company2: { name: string; gpi: number; traits: string[]; outcome: string };
  insight: string;
}

function GPIVersusDiagram({ data }: { data: VersusData }) {
  const delta = Math.abs(data.company1.gpi - data.company2.gpi);
  const c1State = data.company1.gpi <= 3 ? 'field' : data.company1.gpi < 7 ? 'transitioning' : 'particle';
  const c2State = data.company2.gpi <= 3 ? 'field' : data.company2.gpi < 7 ? 'transitioning' : 'particle';

  const stateColors = {
    field: COLORS.field,
    transitioning: COLORS.transitioning,
    particle: COLORS.particle,
  };

  return (
    <DiagramContainer
      title={`${data.company1.name} vs ${data.company2.name}`}
      subtitle={`GPI Delta: ${delta.toFixed(1)} points`}
      height={650}
    >
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        {/* Two columns */}
        <div style={{ display: 'flex', gap: 20, marginBottom: 20 }}>
          {/* Company 1 */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              flex: 1,
              backgroundColor: c1State === 'field' ? '#052e16' : c1State === 'transitioning' ? '#422006' : '#450a0a',
              border: `2px solid ${stateColors[c1State]}`,
              borderRadius: 12,
              padding: 20,
            }}
          >
            <span style={{ fontSize: 20, fontWeight: 700, color: stateColors[c1State], marginBottom: 8 }}>
              {data.company1.name}
            </span>
            <span style={{ fontSize: 32, fontWeight: 700, color: stateColors[c1State], marginBottom: 16 }}>
              {data.company1.gpi.toFixed(2)}
            </span>
            {data.company1.traits.map((t, i) => (
              <div key={i} style={{ display: 'flex', backgroundColor: '#000', borderRadius: 6, padding: '8px 12px', marginBottom: 6 }}>
                <span style={{ fontSize: 13, color: stateColors[c1State] }}>{t}</span>
              </div>
            ))}
            <div style={{ display: 'flex', marginTop: 12, backgroundColor: '#000', borderRadius: 6, padding: '10px 12px' }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: stateColors[c1State] }}>{data.company1.outcome}</span>
            </div>
          </div>

          {/* Company 2 */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              flex: 1,
              backgroundColor: c2State === 'field' ? '#052e16' : c2State === 'transitioning' ? '#422006' : '#450a0a',
              border: `2px solid ${stateColors[c2State]}`,
              borderRadius: 12,
              padding: 20,
            }}
          >
            <span style={{ fontSize: 20, fontWeight: 700, color: stateColors[c2State], marginBottom: 8 }}>
              {data.company2.name}
            </span>
            <span style={{ fontSize: 32, fontWeight: 700, color: stateColors[c2State], marginBottom: 16 }}>
              {data.company2.gpi.toFixed(2)}
            </span>
            {data.company2.traits.map((t, i) => (
              <div key={i} style={{ display: 'flex', backgroundColor: '#000', borderRadius: 6, padding: '8px 12px', marginBottom: 6 }}>
                <span style={{ fontSize: 13, color: stateColors[c2State] }}>{t}</span>
              </div>
            ))}
            <div style={{ display: 'flex', marginTop: 12, backgroundColor: '#000', borderRadius: 6, padding: '10px 12px' }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: stateColors[c2State] }}>{data.company2.outcome}</span>
            </div>
          </div>
        </div>

        {/* Insight */}
        <div
          style={{
            display: 'flex',
            backgroundColor: '#111',
            border: `1px solid #444`,
            borderRadius: 12,
            padding: 20,
          }}
        >
          <span style={{ fontSize: 16, color: COLORS.text, textAlign: 'center', width: '100%' }}>
            {data.insight}
          </span>
        </div>
      </div>
    </DiagramContainer>
  );
}

export async function generateVersusDiagram(data: VersusData) {
  const fonts = await loadFonts();
  const svg = await satori(<GPIVersusDiagram data={data} />, {
    width: 800,
    height: 650,
    fonts,
  });
  return { svg, width: 800, height: 650 };
}

// ============================================
// DIAGRAM: Transformation Spiral
// ============================================

function GPISpiralDiagram() {
  const stages = [
    { name: 'Exploration Seeds', desc: 'Raw ideas, initial thoughts', color: COLORS.field },
    { name: 'Identified Patterns', desc: 'Themes emerging from seeds', color: '#3d9970' },
    { name: 'Outlined Constructs', desc: 'Structured plans/outlines', color: COLORS.transitioning },
    { name: 'Constructed Artifacts', desc: 'Finished, actionable outputs', color: COLORS.text },
  ];

  return (
    <DiagramContainer title="The Transformation Spiral" subtitle="From raw ideas to actionable outputs" height={500}>
      <div style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {stages.map((stage, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  backgroundColor: '#111',
                  border: `2px solid ${stage.color}`,
                  borderRadius: 12,
                  padding: '16px 20px',
                  width: 140,
                }}
              >
                <span style={{ fontSize: 13, fontWeight: 700, color: stage.color, textAlign: 'center' }}>
                  {stage.name}
                </span>
                <span style={{ fontSize: 11, color: COLORS.textMuted, textAlign: 'center', marginTop: 8 }}>
                  {stage.desc}
                </span>
              </div>
              {i < stages.length - 1 && (
                <span style={{ fontSize: 24, color: COLORS.textMuted, margin: '0 12px' }}>→</span>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Feedback loop */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
        <span style={{ fontSize: 13, color: COLORS.textMuted }}>
          ← New insights feed back into exploration →
        </span>
      </div>
    </DiagramContainer>
  );
}

export async function generateSpiralDiagram() {
  const fonts = await loadFonts();
  const svg = await satori(<GPISpiralDiagram />, {
    width: 800,
    height: 500,
    fonts,
  });
  return { svg, width: 800, height: 500 };
}

// ============================================
// DIAGRAM: Heatmap Grid
// ============================================

interface HeatmapData {
  companies: {
    name: string;
    scores: { DL: number; EC: number; KL: number; SL: number; TF: number; CI: number; KV: number };
    gpi: number;
  }[];
}

function getHeatColor(score: number): string {
  if (score <= 3) return COLORS.field;
  if (score <= 6) return COLORS.transitioning;
  return COLORS.particle;
}

function GPIHeatmapDiagram({ data }: { data: HeatmapData }) {
  const dims = ['DL', 'EC', 'KL', 'SL', 'TF', 'CI', 'KV', 'GPI'] as const;
  const dimLabels: Record<string, string> = {
    DL: 'Decision', EC: 'Error Fix', KL: 'Knowledge', SL: 'Lock-In',
    TF: 'Talent', CI: 'Capital', KV: 'Velocity', GPI: 'GPI'
  };

  return (
    <DiagramContainer title="GPI Heatmap" subtitle="Dimension scores across companies" width={920} height={Math.max(550, 180 + data.companies.length * 48)}>
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        {/* Header row */}
        <div style={{ display: 'flex', marginBottom: 8, paddingLeft: 120 }}>
          {dims.map((dim) => (
            <div key={dim} style={{ display: 'flex', width: 80, justifyContent: 'center' }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: dim === 'GPI' ? COLORS.text : COLORS.textMuted }}>
                {dimLabels[dim]}
              </span>
            </div>
          ))}
        </div>

        {/* Company rows */}
        {data.companies.map((company, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', marginBottom: 4 }}>
            <div style={{ display: 'flex', width: 120, paddingRight: 12 }}>
              <span style={{ fontSize: 13, color: COLORS.text, textAlign: 'right', width: '100%' }}>
                {company.name}
              </span>
            </div>
            {dims.map((dim) => {
              const score = dim === 'GPI' ? company.gpi : company.scores[dim as keyof typeof company.scores];
              const color = getHeatColor(score);
              return (
                <div
                  key={dim}
                  style={{
                    display: 'flex',
                    width: 80,
                    height: 36,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: dim === 'GPI' ? '#1a1a1a' : `${color}22`,
                    border: `1px solid ${dim === 'GPI' ? color : `${color}66`}`,
                    borderRadius: 4,
                    marginRight: 4,
                  }}
                >
                  <span style={{ fontSize: 14, fontWeight: dim === 'GPI' ? 700 : 500, color }}>
                    {score.toFixed(dim === 'GPI' ? 2 : 0)}
                  </span>
                </div>
              );
            })}
          </div>
        ))}

        {/* Legend */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 32, gap: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ width: 18, height: 18, backgroundColor: `${COLORS.field}44`, border: `2px solid ${COLORS.field}`, borderRadius: 3, marginRight: 10 }} />
            <span style={{ fontSize: 13, color: COLORS.field }}>1-3 Field</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ width: 18, height: 18, backgroundColor: `${COLORS.transitioning}44`, border: `2px solid ${COLORS.transitioning}`, borderRadius: 3, marginRight: 10 }} />
            <span style={{ fontSize: 13, color: COLORS.transitioning }}>4-6 Transitioning</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ width: 18, height: 18, backgroundColor: `${COLORS.particle}44`, border: `2px solid ${COLORS.particle}`, borderRadius: 3, marginRight: 10 }} />
            <span style={{ fontSize: 13, color: COLORS.particle }}>7-10 Particle</span>
          </div>
        </div>
      </div>
    </DiagramContainer>
  );
}

export async function generateHeatmapDiagram(data: HeatmapData) {
  const fonts = await loadFonts();
  const height = Math.max(550, 180 + data.companies.length * 48);
  const svg = await satori(<GPIHeatmapDiagram data={data} />, {
    width: 920,
    height,
    fonts,
  });
  return { svg, width: 920, height };
}

// ============================================
// DIAGRAM: GPI Gauge
// ============================================

interface GaugeData {
  name: string;
  ticker?: string;
  gpi: number;
  trend?: 'improving' | 'stable' | 'declining';
}

function GPIGaugeDiagram({ data }: { data: GaugeData }) {
  const state = data.gpi <= 3 ? 'Field' : data.gpi < 7 ? 'Transitioning' : 'Particle';
  const color = data.gpi <= 3 ? COLORS.field : data.gpi < 7 ? COLORS.transitioning : COLORS.particle;

  return (
    <DiagramContainer title={data.name} subtitle={data.ticker} width={400} height={400}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        {/* Large GPI Score */}
        <span style={{ fontSize: 96, fontWeight: 700, color, letterSpacing: -2 }}>{data.gpi.toFixed(2)}</span>

        {/* State badge */}
        <div
          style={{
            display: 'flex',
            backgroundColor: `${color}22`,
            border: `2px solid ${color}`,
            borderRadius: 24,
            padding: '12px 32px',
            marginTop: 24,
          }}
        >
          <span style={{ fontSize: 18, fontWeight: 600, color }}>{state} State</span>
        </div>
      </div>
    </DiagramContainer>
  );
}

export async function generateGaugeDiagram(data: GaugeData) {
  const fonts = await loadFonts();
  const svg = await satori(<GPIGaugeDiagram data={data} />, {
    width: 400,
    height: 400,
    fonts,
  });
  return { svg, width: 400, height: 400 };
}

// ============================================
// DIAGRAM: Quote Card
// ============================================

interface QuoteData {
  quote: string;
  company?: string;
  gpi?: number;
  context?: string;
}

function GPIQuoteCard({ data }: { data: QuoteData }) {
  const color = data.gpi ? (data.gpi <= 3 ? COLORS.field : data.gpi < 7 ? COLORS.transitioning : COLORS.particle) : COLORS.text;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: 640,
        height: 400,
        backgroundColor: COLORS.bg,
        padding: 48,
        fontFamily: 'Inter, Arial, sans-serif',
      }}
    >
      {/* Quote mark */}
      <span style={{ fontSize: 80, color: `${color}55`, lineHeight: 1, marginBottom: -24 }}>"</span>

      {/* Quote text */}
      <div style={{ display: 'flex', flex: 1, alignItems: 'center' }}>
        <span style={{ fontSize: 26, color: COLORS.text, lineHeight: 1.5, letterSpacing: -0.3 }}>
          {data.quote}
        </span>
      </div>

      {/* Attribution */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: 24 }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {data.company && (
            <span style={{ fontSize: 16, fontWeight: 700, color }}>
              {data.company} {data.gpi && `(GPI ${data.gpi.toFixed(2)})`}
            </span>
          )}
          {data.context && (
            <span style={{ fontSize: 14, color: COLORS.textMuted, marginTop: 6 }}>{data.context}</span>
          )}
        </div>
        <span style={{ fontSize: 13, color: COLORS.textMuted, letterSpacing: 0.5 }}>imaginationg.studio</span>
      </div>
    </div>
  );
}

export async function generateQuoteCard(data: QuoteData) {
  const fonts = await loadFonts();
  const svg = await satori(<GPIQuoteCard data={data} />, {
    width: 640,
    height: 400,
    fonts,
  });
  return { svg, width: 640, height: 400 };
}

// ============================================
// DIAGRAM: Industry Map
// ============================================

interface IndustryData {
  industries: {
    name: string;
    companies: { name: string; gpi: number }[];
  }[];
}

function GPIIndustryMap({ data }: { data: IndustryData }) {
  return (
    <DiagramContainer title="GPI Industry Map" subtitle="Companies grouped by sector" width={900} height={600}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
        {data.industries.map((industry, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: '#111',
              border: '1px solid #333',
              borderRadius: 12,
              padding: 16,
              minWidth: 200,
            }}
          >
            <span style={{ fontSize: 14, fontWeight: 700, color: COLORS.text, marginBottom: 12 }}>
              {industry.name}
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {industry.companies.sort((a, b) => a.gpi - b.gpi).map((company, j) => {
                const color = company.gpi <= 3 ? COLORS.field : company.gpi < 7 ? COLORS.transitioning : COLORS.particle;
                return (
                  <div
                    key={j}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      backgroundColor: '#000',
                      border: `1px solid ${color}`,
                      borderRadius: 6,
                      padding: '6px 12px',
                    }}
                  >
                    <span style={{ fontSize: 13, color }}>{company.name}</span>
                    <span style={{ fontSize: 13, fontWeight: 700, color }}>{company.gpi.toFixed(2)}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </DiagramContainer>
  );
}

export async function generateIndustryMap(data: IndustryData) {
  const fonts = await loadFonts();
  const svg = await satori(<GPIIndustryMap data={data} />, {
    width: 900,
    height: 600,
    fonts,
  });
  return { svg, width: 900, height: 600 };
}

// ============================================
// DIAGRAM: Trajectory Chart
// ============================================

interface TrajectoryData {
  company: string;
  current: number;
  projections: { year: string; gpi: number; event?: string }[];
}

function GPITrajectoryDiagram({ data }: { data: TrajectoryData }) {
  const allGpis = [data.current, ...data.projections.map(p => p.gpi)];
  const minGpi = Math.floor(Math.min(...allGpis) - 0.5);
  const maxGpi = Math.ceil(Math.max(...allGpis) + 0.5);
  const range = maxGpi - minGpi;

  const chartWidth = 600;
  const chartHeight = 200;
  const points = [
    { x: 50, y: chartHeight - ((data.current - minGpi) / range) * chartHeight },
    ...data.projections.map((p, i) => ({
      x: 50 + ((i + 1) / data.projections.length) * (chartWidth - 100),
      y: chartHeight - ((p.gpi - minGpi) / range) * chartHeight,
    })),
  ];

  const pathD = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');

  return (
    <DiagramContainer title={`${data.company} GPI Trajectory`} subtitle="Projected transformation path" width={700} height={450}>
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        {/* Chart area */}
        <div style={{ display: 'flex', position: 'relative', width: 700, height: 250 }}>
          <img
            src={`data:image/svg+xml,${encodeURIComponent(`
              <svg width="700" height="250" xmlns="http://www.w3.org/2000/svg">
                <!-- Grid lines -->
                <line x1="50" y1="25" x2="650" y2="25" stroke="#333" stroke-width="1"/>
                <line x1="50" y1="125" x2="650" y2="125" stroke="#333" stroke-width="1"/>
                <line x1="50" y1="225" x2="650" y2="225" stroke="#333" stroke-width="1"/>

                <!-- Zone backgrounds -->
                <rect x="50" y="25" width="600" height="${(3 - minGpi) / range * 200}" fill="${COLORS.particle}" opacity="0.1"/>
                <rect x="50" y="${225 - (7 - minGpi) / range * 200}" width="600" height="${4 / range * 200}" fill="${COLORS.transitioning}" opacity="0.1"/>
                <rect x="50" y="${225 - (3 - minGpi) / range * 200}" width="600" height="${(3 - minGpi) / range * 200}" fill="${COLORS.field}" opacity="0.1"/>

                <!-- Trajectory line -->
                <path d="${pathD}" stroke="${COLORS.text}" stroke-width="3" fill="none"/>

                <!-- Points -->
                ${points.map((p, i) => {
                  const gpi = i === 0 ? data.current : data.projections[i - 1].gpi;
                  const color = gpi <= 3 ? COLORS.field : gpi < 7 ? COLORS.transitioning : COLORS.particle;
                  return `<circle cx="${p.x}" cy="${p.y}" r="8" fill="${color}" stroke="#000" stroke-width="2"/>`;
                }).join('')}
              </svg>
            `)}`}
            width={700}
            height={250}
          />
        </div>

        {/* Timeline labels */}
        <div style={{ display: 'flex', justifyContent: 'space-between', paddingLeft: 30, paddingRight: 30, marginTop: 8 }}>
          <span style={{ fontSize: 12, color: COLORS.textMuted }}>Now</span>
          {data.projections.map((p, i) => (
            <span key={i} style={{ fontSize: 12, color: COLORS.textMuted }}>{p.year}</span>
          ))}
        </div>

        {/* Events */}
        <div style={{ display: 'flex', flexDirection: 'column', marginTop: 20, gap: 8 }}>
          {data.projections.filter(p => p.event).map((p, i) => {
            const color = p.gpi <= 3 ? COLORS.field : p.gpi < 7 ? COLORS.transitioning : COLORS.particle;
            return (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: 12, fontWeight: 700, color }}>{p.year}:</span>
                <span style={{ fontSize: 12, color: COLORS.textMuted }}>{p.event}</span>
              </div>
            );
          })}
        </div>
      </div>
    </DiagramContainer>
  );
}

export async function generateTrajectoryDiagram(data: TrajectoryData) {
  const fonts = await loadFonts();
  const svg = await satori(<GPITrajectoryDiagram data={data} />, {
    width: 700,
    height: 450,
    fonts,
  });
  return { svg, width: 700, height: 450 };
}
