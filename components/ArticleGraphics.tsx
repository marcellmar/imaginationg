/**
 * Article Graphics
 * Clinical SVG visualizations for each series type.
 * GPI aesthetic: black, white, no color. Muted amber for GPI scores only.
 * No animations. No gradients. Medical scan, not marketing slide.
 */

import React from 'react';

interface Company {
  name: string;
  gpiScore: number | null;
  stage: string;
  decisionLatency?: number;
  errorCorrection?: number;
  knowledgeLocation?: number;
  structuralLockIn?: number;
  talentFlow?: number;
  capitalIntensity?: number;
  knowledgeVelocity?: number;
}

interface ArticleGraphicProps {
  series: string;
  companies: Company[];
  headline?: string;
}

const AMBER = 'rgba(234,179,8,0.82)';
const W1 = 'rgba(255,255,255,0.88)';
const W2 = 'rgba(255,255,255,0.45)';
const W3 = 'rgba(255,255,255,0.22)';
const W4 = 'rgba(255,255,255,0.10)';
const BG = '#000000';

const getState = (score: number | null) => {
  if (!score) return 'UNKNOWN';
  if (score <= 3) return 'FIELD';
  if (score <= 6.9) return 'TRANSITIONING';
  return 'PARTICLE';
};

// Branding mark
const Brand = ({ x, y }: { x: number; y: number }) => (
  <text x={x} y={y} textAnchor="middle" fill={W3} fontSize="10" fontFamily="monospace" letterSpacing="0.2em">
    gpi.studio
  </text>
);

// Dimension bar (horizontal, white at varying opacity)
const DimBar = ({
  x, y, w, label, value, barW,
}: {
  x: number; y: number; w: number; label: string; value: number | undefined; barW: number;
}) => {
  const v = value || 0;
  const barFill = v > 0 ? `rgba(255,255,255,${0.12 + (v / 10) * 0.65})` : W4;
  return (
    <g>
      <text x={x} y={y + 10} fill={W3} fontSize="9" fontFamily="monospace">{label}</text>
      <rect x={x + 28} y={y} width={w} height="10" fill={W4} rx="1" />
      {v > 0 && <rect x={x + 28} y={y} width={(v / 10) * w} height="10" fill={barFill} rx="1" />}
      <text x={x + 28 + w + 6} y={y + 10} fill={W2} fontSize="9" fontFamily="monospace" fontWeight="bold">{v || '—'}</text>
    </g>
  );
};

// Weekly Smackdown — two companies, head to head diagnostic
const SmackdownGraphic: React.FC<{ companies: Company[] }> = ({ companies }) => {
  const [c1, c2] = companies;
  if (!c1) return null;

  const DIMS = [
    { key: 'decisionLatency', label: 'DL' },
    { key: 'errorCorrection', label: 'EC' },
    { key: 'structuralLockIn', label: 'SL' },
  ];

  return (
    <svg viewBox="0 0 600 260" className="w-full h-auto">
      <rect width="600" height="260" fill={BG} />

      {/* Separator line */}
      <line x1="300" y1="40" x2="300" y2="220" stroke={W4} strokeWidth="1" />
      <text x="300" y="238" textAnchor="middle" fill={W4} fontSize="10" fontFamily="monospace">VS</text>

      {/* Company 1 */}
      <text x="150" y="65" textAnchor="middle" fill={W1} fontSize="15" fontWeight="bold" fontFamily="system-ui">{c1.name}</text>
      <text x="150" y="120" textAnchor="middle" fill={AMBER} fontSize="50" fontWeight="bold" fontFamily="monospace">
        {c1.gpiScore?.toFixed(1) || '—'}
      </text>
      <text x="150" y="138" textAnchor="middle" fill={W3} fontSize="10" fontFamily="monospace">{getState(c1.gpiScore)}</text>

      {DIMS.map((d, i) => (
        <DimBar
          key={d.key}
          x={40} y={158 + i * 18} w={110}
          label={d.label}
          value={c1[d.key as keyof Company] as number}
          barW={110}
        />
      ))}

      {/* Company 2 */}
      {c2 && (
        <>
          <text x="450" y="65" textAnchor="middle" fill={W1} fontSize="15" fontWeight="bold" fontFamily="system-ui">{c2.name}</text>
          <text x="450" y="120" textAnchor="middle" fill={AMBER} fontSize="50" fontWeight="bold" fontFamily="monospace">
            {c2.gpiScore?.toFixed(1) || '—'}
          </text>
          <text x="450" y="138" textAnchor="middle" fill={W3} fontSize="10" fontFamily="monospace">{getState(c2.gpiScore)}</text>
          {DIMS.map((d, i) => (
            <DimBar
              key={d.key}
              x={320} y={158 + i * 18} w={110}
              label={d.label}
              value={c2[d.key as keyof Company] as number}
              barW={110}
            />
          ))}
        </>
      )}

      {/* Top label */}
      <text x="300" y="22" textAnchor="middle" fill={W3} fontSize="9" fontFamily="monospace" letterSpacing="0.18em">
        WEEKLY SMACKDOWN
      </text>

      <Brand x={300} y={253} />
    </svg>
  );
};

// Vital Signs — single company, 7-dimension read
const VitalSignsGraphic: React.FC<{ companies: Company[] }> = ({ companies }) => {
  const c = companies[0];
  if (!c) return null;

  const dims = [
    { key: 'decisionLatency', label: 'DECISION LATENCY' },
    { key: 'errorCorrection', label: 'ERROR CORRECTION' },
    { key: 'knowledgeLocation', label: 'KNOWLEDGE LOCATION' },
    { key: 'structuralLockIn', label: 'STRUCTURAL LOCK-IN' },
    { key: 'talentFlow', label: 'TALENT FLOW' },
    { key: 'capitalIntensity', label: 'CAPITAL INTENSITY' },
    { key: 'knowledgeVelocity', label: 'KNOWLEDGE VELOCITY' },
  ];

  return (
    <svg viewBox="0 0 600 300" className="w-full h-auto">
      <rect width="600" height="300" fill={BG} />

      {/* Scan line texture */}
      {[...Array(15)].map((_, i) => (
        <line key={i} x1="0" y1={20 * i} x2="600" y2={20 * i} stroke={W4} strokeWidth="0.5" opacity="0.4" />
      ))}

      {/* Company + score */}
      <text x="300" y="30" textAnchor="middle" fill={W2} fontSize="9" fontFamily="monospace" letterSpacing="0.18em">VITAL SIGNS</text>
      <text x="300" y="58" textAnchor="middle" fill={W1} fontSize="18" fontWeight="bold" fontFamily="system-ui">{c.name}</text>
      <text x="300" y="90" textAnchor="middle" fill={AMBER} fontSize="32" fontWeight="bold" fontFamily="monospace">
        GPI {c.gpiScore?.toFixed(1) || '—'}
      </text>

      {/* Dimension bars */}
      {dims.map((dim, i) => {
        const v = (c[dim.key as keyof Company] as number) || 0;
        const y = 108 + i * 22;
        const barFill = v > 0 ? `rgba(255,255,255,${0.10 + (v / 10) * 0.70})` : W4;
        return (
          <g key={dim.key}>
            <text x="50" y={y + 11} fill={W3} fontSize="8" fontFamily="monospace">{dim.label}</text>
            <rect x="200" y={y} width="320" height="13" fill={W4} rx="1" />
            {v > 0 && <rect x="200" y={y} width={(v / 10) * 320} height="13" fill={barFill} rx="1" />}
            <text x="528" y={y + 11} fill={W2} fontSize="10" fontFamily="monospace" fontWeight="bold">{v || '—'}</text>
          </g>
        );
      })}

      <Brand x={300} y={292} />
    </svg>
  );
};

// Calcification Alert — crystallizing grid pattern
const CalcificationGraphic: React.FC<{ companies: Company[] }> = ({ companies }) => {
  const c = companies[0];

  // Dot grid: brighter toward bottom-right (calcification accumulates)
  const cols = 18;
  const rows = 7;
  const dots = [];
  for (let r = 0; r < rows; r++) {
    for (let col = 0; col < cols; col++) {
      const progress = (r / rows + col / cols) / 2;
      const opacity = 0.06 + progress * 0.55;
      dots.push(
        <circle
          key={`${r}-${col}`}
          cx={50 + col * 28}
          cy={50 + r * 22}
          r={progress > 0.6 ? 3.5 : 2}
          fill={`rgba(255,255,255,${opacity})`}
        />
      );
    }
  }

  return (
    <svg viewBox="0 0 600 220" className="w-full h-auto">
      <rect width="600" height="220" fill={BG} />

      {dots}

      {/* Overlay card */}
      <rect x="160" y="60" width="280" height="100" fill="rgba(0,0,0,0.75)" />
      {c && (
        <>
          <text x="300" y="95" textAnchor="middle" fill={W1} fontSize="18" fontWeight="bold" fontFamily="system-ui">{c.name}</text>
          <text x="300" y="138" textAnchor="middle" fill={AMBER} fontSize="36" fontWeight="bold" fontFamily="monospace">
            GPI {c.gpiScore?.toFixed(1) || '7.0+'}
          </text>
        </>
      )}

      <text x="300" y="18" textAnchor="middle" fill={W3} fontSize="9" fontFamily="monospace" letterSpacing="0.18em">
        CALCIFICATION ALERT
      </text>
      <Brand x={300} y={212} />
    </svg>
  );
};

// The Autopsy — flatline, end of life
const AutopsyGraphic: React.FC<{ companies: Company[] }> = ({ companies }) => {
  const c = companies[0];

  return (
    <svg viewBox="0 0 600 220" className="w-full h-auto">
      <rect width="600" height="220" fill={BG} />

      {/* Activity then flatline */}
      <line x1="40" y1="80" x2="560" y2="80" stroke={W4} strokeWidth="1" />
      <path
        d="M40,80 L120,80 L130,60 L140,100 L152,68 L164,92 L174,80 L240,80"
        stroke={W2}
        strokeWidth="1.5"
        fill="none"
        opacity="0.5"
      />
      {/* Flatline after death */}
      <line x1="240" y1="80" x2="560" y2="80" stroke={W3} strokeWidth="1.5" />
      {/* Death marker */}
      <line x1="240" y1="58" x2="240" y2="102" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
      <text x="240" y="115" textAnchor="middle" fill={W3} fontSize="8" fontFamily="monospace">END</text>

      {c && (
        <>
          <text x="300" y="155" textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize="18" fontWeight="bold" fontFamily="system-ui">
            {c.name}
          </text>
          <text x="300" y="185" textAnchor="middle" fill={AMBER} fontSize="28" fontWeight="bold" fontFamily="monospace">
            GPI {c.gpiScore?.toFixed(1) || '—'}
          </text>
        </>
      )}

      <text x="300" y="18" textAnchor="middle" fill={W3} fontSize="9" fontFamily="monospace" letterSpacing="0.18em">
        THE AUTOPSY
      </text>
      <Brand x={300} y={212} />
    </svg>
  );
};

// Field Notes — open signal flow, low friction
const FieldNotesGraphic: React.FC<{ companies: Company[] }> = ({ companies }) => {
  const c = companies[0];

  return (
    <svg viewBox="0 0 600 220" className="w-full h-auto">
      <rect width="600" height="220" fill={BG} />

      {/* Signal flow: nodes connected by thin white lines, sparse and open */}
      {[
        [60, 60], [160, 40], [280, 55], [400, 42], [520, 58],
        [100, 110], [220, 100], [340, 115], [460, 105],
        [70, 160], [190, 150], [310, 160], [430, 148], [540, 155],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="3" fill={`rgba(255,255,255,${0.15 + (i % 4) * 0.12})`} />
      ))}

      {/* Connecting lines */}
      {[
        [60, 60, 160, 40], [160, 40, 280, 55], [280, 55, 400, 42], [400, 42, 520, 58],
        [100, 110, 220, 100], [220, 100, 340, 115], [340, 115, 460, 105],
        [70, 160, 190, 150], [190, 150, 310, 160], [310, 160, 430, 148], [430, 148, 540, 155],
        [60, 60, 100, 110], [160, 40, 220, 100], [280, 55, 340, 115],
        [100, 110, 70, 160], [220, 100, 190, 150], [340, 115, 310, 160],
      ].map(([x1, y1, x2, y2], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={`rgba(255,255,255,${0.08 + (i % 3) * 0.04})`} strokeWidth="0.8" />
      ))}

      {/* Score overlay */}
      {c && (
        <>
          <rect x="200" y="75" width="200" height="70" fill="rgba(0,0,0,0.8)" />
          <text x="300" y="108" textAnchor="middle" fill={W1} fontSize="14" fontWeight="bold" fontFamily="system-ui">{c.name}</text>
          <text x="300" y="134" textAnchor="middle" fill={AMBER} fontSize="24" fontWeight="bold" fontFamily="monospace">
            GPI {c.gpiScore?.toFixed(1) || '2.5'}
          </text>
        </>
      )}

      <text x="300" y="18" textAnchor="middle" fill={W3} fontSize="9" fontFamily="monospace" letterSpacing="0.18em">
        FIELD NOTES
      </text>
      <Brand x={300} y={212} />
    </svg>
  );
};

// Transition Watch — spectrum bar with position indicator
const TransitionWatchGraphic: React.FC<{ companies: Company[] }> = ({ companies }) => {
  const c = companies[0];
  const score = c?.gpiScore || 5;
  const pos = ((score - 1) / 9) * 460 + 70; // map 1-10 to 70-530

  return (
    <svg viewBox="0 0 600 220" className="w-full h-auto">
      <rect width="600" height="220" fill={BG} />

      {/* Spectrum bar */}
      <text x="70" y="95" fill={W3} fontSize="9" fontFamily="monospace">FIELD</text>
      <text x="530" y="95" textAnchor="end" fill={W3} fontSize="9" fontFamily="monospace">PARTICLE</text>

      {/* Background bar */}
      <rect x="70" y="100" width="460" height="12" fill={W4} rx="2" />

      {/* Filled portion from left */}
      <rect x="70" y="100" width={pos - 70} height="12" fill={`rgba(255,255,255,${0.08 + (score / 10) * 0.18})`} rx="2" />

      {/* Position marker */}
      <line x1={pos} y1="92" x2={pos} y2="122" stroke="rgba(255,255,255,0.7)" strokeWidth="2" />
      <circle cx={pos} cy="106" r="6" fill="rgba(0,0,0,1)" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" />

      {/* Score and company */}
      {c && (
        <>
          <text x="300" y="158" textAnchor="middle" fill={W1} fontSize="16" fontWeight="bold" fontFamily="system-ui">{c.name}</text>
          <text x="300" y="185" textAnchor="middle" fill={AMBER} fontSize="28" fontWeight="bold" fontFamily="monospace">
            GPI {c.gpiScore?.toFixed(1) || '—'}
          </text>
        </>
      )}

      {/* Tick marks at 3.0 and 7.0 */}
      {[3, 7].map((val) => {
        const tx = ((val - 1) / 9) * 460 + 70;
        return (
          <g key={val}>
            <line x1={tx} y1="98" x2={tx} y2="116" stroke={W3} strokeWidth="0.5" />
            <text x={tx} y="126" textAnchor="middle" fill={W3} fontSize="7" fontFamily="monospace">{val}.0</text>
          </g>
        );
      })}

      <text x="300" y="22" textAnchor="middle" fill={W3} fontSize="9" fontFamily="monospace" letterSpacing="0.18em">
        TRANSITION WATCH
      </text>
      <Brand x={300} y={212} />
    </svg>
  );
};

// Wildcard — unexpected connection in a grid
const WildcardGraphic: React.FC<{ headline?: string }> = () => {
  const rows = 6;
  const cols = 12;

  return (
    <svg viewBox="0 0 600 220" className="w-full h-auto">
      <rect width="600" height="220" fill={BG} />

      {/* Regular grid */}
      {[...Array(rows)].map((_, r) =>
        [...Array(cols)].map((_, col) => {
          const x = 50 + col * 46;
          const y = 40 + r * 28;
          return <circle key={`${r}-${col}`} cx={x} cy={y} r="2" fill={`rgba(255,255,255,${0.08 + (r * 0.02)})`} />;
        })
      )}

      {/* Regular grid connections */}
      {[...Array(rows)].map((_, r) =>
        [...Array(cols - 1)].map((_, col) => {
          const x1 = 50 + col * 46;
          const x2 = 50 + (col + 1) * 46;
          const y = 40 + r * 28;
          return <line key={`h-${r}-${col}`} x1={x1} y1={y} x2={x2} y2={y} stroke={W4} strokeWidth="0.5" />;
        })
      )}

      {/* The unexpected diagonal connection */}
      <line x1="50" y1="40" x2="506" y2="180" stroke="rgba(255,255,255,0.45)" strokeWidth="1.5" strokeDasharray="6,4" />
      <circle cx="50" cy="40" r="4" fill="rgba(255,255,255,0.6)" />
      <circle cx="506" cy="180" r="4" fill="rgba(255,255,255,0.6)" />

      <text x="300" y="18" textAnchor="middle" fill={W3} fontSize="9" fontFamily="monospace" letterSpacing="0.18em">
        WILDCARD
      </text>
      <Brand x={300} y={212} />
    </svg>
  );
};

// Main selector
export const ArticleGraphic: React.FC<ArticleGraphicProps> = ({ series, companies, headline }) => {
  switch (series) {
    case 'Weekly Smackdown':
      return <SmackdownGraphic companies={companies} />;
    case 'Vital Signs':
      return <VitalSignsGraphic companies={companies} />;
    case 'Calcification Alert':
      return <CalcificationGraphic companies={companies} />;
    case 'The Autopsy':
      return <AutopsyGraphic companies={companies} />;
    case 'Field Notes':
      return <FieldNotesGraphic companies={companies} />;
    case 'Transition Watch':
      return <TransitionWatchGraphic companies={companies} />;
    case 'Wildcard':
    default:
      return <WildcardGraphic headline={headline} />;
  }
};

export default ArticleGraphic;
