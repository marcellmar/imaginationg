/**
 * Article Graphics
 * Content-aware SVG visualizations for each series type
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

const getColor = (score: number | null) => {
  if (!score) return '#71717a';
  if (score <= 3) return '#22c55e';
  if (score <= 6.9) return '#eab308';
  return '#ef4444';
};

const getState = (score: number | null) => {
  if (!score) return 'UNKNOWN';
  if (score <= 3) return 'FIELD';
  if (score <= 6.9) return 'TRANSITIONING';
  return 'PARTICLE';
};

// Weekly Smackdown - Two companies head to head
const SmackdownGraphic: React.FC<{ companies: Company[] }> = ({ companies }) => {
  const [c1, c2] = companies;
  if (!c1) return null;

  return (
    <svg viewBox="0 0 600 280" className="w-full h-auto">
      <rect width="600" height="280" fill="#09090b" rx="8" />

      {/* Header */}
      <text x="300" y="28" textAnchor="middle" fill="#71717a" fontSize="10" fontFamily="monospace">
        HEAD TO HEAD
      </text>

      {/* Company 1 */}
      <g>
        <rect x="20" y="50" width="260" height="180" fill="#18181b" rx="6" stroke={getColor(c1.gpiScore)} strokeWidth="2" />
        <text x="150" y="80" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="bold" fontFamily="system-ui">
          {c1.name}
        </text>
        <text x="150" y="130" textAnchor="middle" fill={getColor(c1.gpiScore)} fontSize="48" fontWeight="bold" fontFamily="monospace">
          {c1.gpiScore?.toFixed(1) || '—'}
        </text>
        <rect x="100" y="150" width="100" height="24" fill={`${getColor(c1.gpiScore)}22`} rx="4" />
        <text x="150" y="166" textAnchor="middle" fill={getColor(c1.gpiScore)} fontSize="11" fontFamily="monospace">
          {getState(c1.gpiScore)}
        </text>

        {/* Mini dimension bars */}
        {[
          { key: 'decisionLatency', label: 'DL' },
          { key: 'errorCorrection', label: 'EC' },
          { key: 'structuralLockIn', label: 'SL' },
        ].map((dim, i) => {
          const val = c1[dim.key as keyof Company] as number;
          if (!val) return null;
          return (
            <g key={dim.key}>
              <text x={50 + i * 80} y="200" fill="#52525b" fontSize="8" fontFamily="monospace">{dim.label}</text>
              <rect x={50 + i * 80} y="205" width="60" height="8" fill="#27272a" rx="2" />
              <rect x={50 + i * 80} y="205" width={val * 6} height="8" fill={getColor(val)} rx="2" opacity="0.8" />
            </g>
          );
        })}
      </g>

      {/* VS */}
      <text x="300" y="150" textAnchor="middle" fill="#52525b" fontSize="24" fontWeight="bold" fontFamily="system-ui">
        VS
      </text>

      {/* Company 2 */}
      {c2 && (
        <g>
          <rect x="320" y="50" width="260" height="180" fill="#18181b" rx="6" stroke={getColor(c2.gpiScore)} strokeWidth="2" />
          <text x="450" y="80" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="bold" fontFamily="system-ui">
            {c2.name}
          </text>
          <text x="450" y="130" textAnchor="middle" fill={getColor(c2.gpiScore)} fontSize="48" fontWeight="bold" fontFamily="monospace">
            {c2.gpiScore?.toFixed(1) || '—'}
          </text>
          <rect x="400" y="150" width="100" height="24" fill={`${getColor(c2.gpiScore)}22`} rx="4" />
          <text x="450" y="166" textAnchor="middle" fill={getColor(c2.gpiScore)} fontSize="11" fontFamily="monospace">
            {getState(c2.gpiScore)}
          </text>

          {/* Mini dimension bars */}
          {[
            { key: 'decisionLatency', label: 'DL' },
            { key: 'errorCorrection', label: 'EC' },
            { key: 'structuralLockIn', label: 'SL' },
          ].map((dim, i) => {
            const val = c2[dim.key as keyof Company] as number;
            if (!val) return null;
            return (
              <g key={dim.key}>
                <text x={350 + i * 80} y="200" fill="#52525b" fontSize="8" fontFamily="monospace">{dim.label}</text>
                <rect x={350 + i * 80} y="205" width="60" height="8" fill="#27272a" rx="2" />
                <rect x={350 + i * 80} y="205" width={val * 6} height="8" fill={getColor(val)} rx="2" opacity="0.8" />
              </g>
            );
          })}
        </g>
      )}

      {/* Footer */}
      <text x="300" y="265" textAnchor="middle" fill="#52525b" fontSize="9" fontFamily="monospace">
        WEEKLY SMACKDOWN
      </text>
    </svg>
  );
};

// Vital Signs - Single company health check
const VitalSignsGraphic: React.FC<{ companies: Company[] }> = ({ companies }) => {
  const company = companies[0];
  if (!company) return null;

  const dims = [
    { key: 'decisionLatency', label: 'DECISION', short: 'DL' },
    { key: 'errorCorrection', label: 'ERROR', short: 'EC' },
    { key: 'knowledgeLocation', label: 'KNOWLEDGE', short: 'KL' },
    { key: 'structuralLockIn', label: 'STRUCTURE', short: 'SL' },
    { key: 'talentFlow', label: 'TALENT', short: 'TF' },
    { key: 'capitalIntensity', label: 'CAPITAL', short: 'CI' },
    { key: 'knowledgeVelocity', label: 'VELOCITY', short: 'KV' },
  ];

  return (
    <svg viewBox="0 0 600 320" className="w-full h-auto">
      <rect width="600" height="320" fill="#09090b" rx="8" />

      {/* Header */}
      <text x="300" y="28" textAnchor="middle" fill="#3b82f6" fontSize="10" fontFamily="monospace">
        VITAL SIGNS
      </text>

      {/* Company name and score */}
      <text x="300" y="60" textAnchor="middle" fill="#fff" fontSize="20" fontWeight="bold" fontFamily="system-ui">
        {company.name}
      </text>
      <text x="300" y="95" textAnchor="middle" fill={getColor(company.gpiScore)} fontSize="36" fontWeight="bold" fontFamily="monospace">
        GPI {company.gpiScore?.toFixed(1) || '—'}
      </text>

      {/* Heartbeat line */}
      <path
        d="M50,130 L100,130 L120,110 L140,150 L160,120 L180,140 L200,130 L400,130 L420,110 L440,150 L460,120 L480,140 L500,130 L550,130"
        stroke="#3b82f6"
        strokeWidth="2"
        fill="none"
        opacity="0.6"
      >
        <animate attributeName="stroke-dashoffset" from="500" to="0" dur="2s" repeatCount="indefinite" />
      </path>
      <path
        d="M50,130 L100,130 L120,110 L140,150 L160,120 L180,140 L200,130 L400,130 L420,110 L440,150 L460,120 L480,140 L500,130 L550,130"
        stroke="#3b82f6"
        strokeWidth="2"
        fill="none"
        strokeDasharray="500"
        strokeDashoffset="500"
      >
        <animate attributeName="stroke-dashoffset" from="500" to="0" dur="2s" repeatCount="indefinite" />
      </path>

      {/* Dimension bars */}
      {dims.map((dim, i) => {
        const val = company[dim.key as keyof Company] as number || 5;
        const y = 160 + i * 20;
        return (
          <g key={dim.key}>
            <text x="50" y={y + 12} fill="#71717a" fontSize="9" fontFamily="monospace">{dim.short}</text>
            <rect x="85" y={y} width="430" height="14" fill="#27272a" rx="2" />
            <rect x="85" y={y} width={val * 43} height="14" fill={getColor(val)} rx="2" opacity="0.7">
              <animate attributeName="width" from="0" to={val * 43} dur="1s" fill="freeze" begin={`${i * 0.1}s`} />
            </rect>
            <text x="525" y={y + 11} fill={getColor(val)} fontSize="10" fontWeight="bold" fontFamily="monospace">
              {val.toFixed(0)}
            </text>
            {val >= 7 && (
              <circle cx="555" cy={y + 7} r="4" fill="#ef4444">
                <animate attributeName="opacity" values="1;0.3;1" dur="1s" repeatCount="indefinite" />
              </circle>
            )}
          </g>
        );
      })}

      {/* Footer */}
      <text x="300" y="310" textAnchor="middle" fill="#3b82f6" fontSize="9" fontFamily="monospace">
        MONITORING ORGANIZATIONAL HEALTH
      </text>
    </svg>
  );
};

// Calcification Alert - Warning visualization
const CalcificationGraphic: React.FC<{ companies: Company[] }> = ({ companies }) => {
  const company = companies[0];

  return (
    <svg viewBox="0 0 600 240" className="w-full h-auto">
      <rect width="600" height="240" fill="#09090b" rx="8" />

      {/* Warning stripes */}
      <defs>
        <pattern id="warning-stripes" patternUnits="userSpaceOnUse" width="20" height="20" patternTransform="rotate(45)">
          <rect width="10" height="20" fill="#f97316" opacity="0.1" />
        </pattern>
      </defs>
      <rect x="0" y="0" width="600" height="40" fill="url(#warning-stripes)" />
      <rect x="0" y="200" width="600" height="40" fill="url(#warning-stripes)" />

      {/* Alert icon */}
      <polygon points="300,50 340,110 260,110" fill="none" stroke="#f97316" strokeWidth="3" />
      <text x="300" y="95" textAnchor="middle" fill="#f97316" fontSize="24" fontWeight="bold">!</text>

      {/* Company info */}
      {company && (
        <g>
          <text x="300" y="140" textAnchor="middle" fill="#fff" fontSize="20" fontWeight="bold" fontFamily="system-ui">
            {company.name}
          </text>
          <text x="300" y="170" textAnchor="middle" fill="#ef4444" fontSize="32" fontWeight="bold" fontFamily="monospace">
            GPI {company.gpiScore?.toFixed(1) || '7.0+'}
          </text>
        </g>
      )}

      {/* Pulsing circles */}
      {[60, 540].map((x, i) => (
        <g key={i}>
          <circle cx={x} cy="120" r="8" fill="#f97316" opacity="0.8">
            <animate attributeName="r" values="8;16;8" dur="1.5s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.8;0.2;0.8" dur="1.5s" repeatCount="indefinite" />
          </circle>
          <circle cx={x} cy="120" r="4" fill="#f97316" />
        </g>
      ))}

      {/* Header */}
      <text x="300" y="220" textAnchor="middle" fill="#f97316" fontSize="10" fontFamily="monospace">
        CALCIFICATION ALERT
      </text>
    </svg>
  );
};

// The Autopsy - Post-mortem visualization
const AutopsyGraphic: React.FC<{ companies: Company[] }> = ({ companies }) => {
  const company = companies[0];

  return (
    <svg viewBox="0 0 600 240" className="w-full h-auto">
      <rect width="600" height="240" fill="#09090b" rx="8" />

      {/* Flatline */}
      <line x1="50" y1="80" x2="550" y2="80" stroke="#52525b" strokeWidth="2" />
      <path
        d="M50,80 L150,80 L160,60 L170,100 L180,70 L190,90 L200,80 L300,80"
        stroke="#71717a"
        strokeWidth="2"
        fill="none"
        opacity="0.4"
      />
      <line x1="300" y1="80" x2="550" y2="80" stroke="#71717a" strokeWidth="2" opacity="0.8" />

      {/* Time of death marker */}
      <line x1="300" y1="60" x2="300" y2="100" stroke="#ef4444" strokeWidth="2" />
      <text x="300" y="115" textAnchor="middle" fill="#ef4444" fontSize="9" fontFamily="monospace">END</text>

      {/* Company info */}
      {company && (
        <g>
          <text x="300" y="150" textAnchor="middle" fill="#71717a" fontSize="18" fontWeight="bold" fontFamily="system-ui">
            {company.name}
          </text>
          <text x="300" y="180" textAnchor="middle" fill="#52525b" fontSize="24" fontWeight="bold" fontFamily="monospace">
            GPI {company.gpiScore?.toFixed(1) || '—'}
          </text>
        </g>
      )}

      {/* Cross/tombstone icon */}
      <rect x="275" y="195" width="50" height="30" fill="#27272a" rx="2" />
      <line x1="300" y1="200" x2="300" y2="220" stroke="#52525b" strokeWidth="2" />
      <line x1="290" y1="208" x2="310" y2="208" stroke="#52525b" strokeWidth="2" />

      {/* Footer */}
      <text x="300" y="235" textAnchor="middle" fill="#52525b" fontSize="9" fontFamily="monospace">
        THE AUTOPSY
      </text>
    </svg>
  );
};

// Field Notes - Healthy company visualization
const FieldNotesGraphic: React.FC<{ companies: Company[] }> = ({ companies }) => {
  const company = companies[0];

  return (
    <svg viewBox="0 0 600 240" className="w-full h-auto">
      <rect width="600" height="240" fill="#09090b" rx="8" />

      {/* Flowing particles */}
      {[...Array(12)].map((_, i) => (
        <circle key={i} r={4 + (i % 3)} fill="#22c55e" opacity={0.4 + (i % 3) * 0.2}>
          <animate
            attributeName="cx"
            values={`${50 + i * 20};${500 - i * 10};${50 + i * 20}`}
            dur={`${3 + i * 0.3}s`}
            repeatCount="indefinite"
          />
          <animate
            attributeName="cy"
            values={`${60 + (i % 4) * 30};${80 + (i % 5) * 25};${60 + (i % 4) * 30}`}
            dur={`${2.5 + i * 0.2}s`}
            repeatCount="indefinite"
          />
        </circle>
      ))}

      {/* Company info */}
      {company && (
        <g>
          <text x="300" y="150" textAnchor="middle" fill="#fff" fontSize="20" fontWeight="bold" fontFamily="system-ui">
            {company.name}
          </text>
          <text x="300" y="185" textAnchor="middle" fill="#22c55e" fontSize="32" fontWeight="bold" fontFamily="monospace">
            GPI {company.gpiScore?.toFixed(1) || '2.5'}
          </text>
          <rect x="225" y="195" width="150" height="20" fill="#22c55e22" rx="4" />
          <text x="300" y="209" textAnchor="middle" fill="#22c55e" fontSize="10" fontFamily="monospace">
            FIELD STATE
          </text>
        </g>
      )}

      {/* Footer */}
      <text x="300" y="235" textAnchor="middle" fill="#22c55e" fontSize="9" fontFamily="monospace">
        FIELD NOTES
      </text>
    </svg>
  );
};

// Transition Watch - Company in flux
const TransitionWatchGraphic: React.FC<{ companies: Company[] }> = ({ companies }) => {
  const company = companies[0];

  return (
    <svg viewBox="0 0 600 240" className="w-full h-auto">
      <rect width="600" height="240" fill="#09090b" rx="8" />

      {/* Transition arrows */}
      <defs>
        <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="#eab308" />
        </marker>
      </defs>

      {/* From state */}
      <rect x="50" y="70" width="120" height="60" fill="#ef444422" stroke="#ef4444" strokeWidth="2" rx="4" />
      <text x="110" y="105" textAnchor="middle" fill="#ef4444" fontSize="12" fontFamily="monospace">PARTICLE</text>

      {/* Arrow */}
      <line x1="180" y1="100" x2="260" y2="100" stroke="#eab308" strokeWidth="2" markerEnd="url(#arrow)" strokeDasharray="8,4">
        <animate attributeName="stroke-dashoffset" from="24" to="0" dur="1s" repeatCount="indefinite" />
      </line>

      {/* Current state */}
      <rect x="270" y="60" width="160" height="80" fill="#eab30822" stroke="#eab308" strokeWidth="3" rx="4" />
      {company && (
        <g>
          <text x="350" y="90" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold" fontFamily="system-ui">
            {company.name}
          </text>
          <text x="350" y="120" textAnchor="middle" fill="#eab308" fontSize="20" fontWeight="bold" fontFamily="monospace">
            {company.gpiScore?.toFixed(1) || '5.5'}
          </text>
        </g>
      )}

      {/* Arrow */}
      <line x1="440" y1="100" x2="520" y2="100" stroke="#eab308" strokeWidth="2" markerEnd="url(#arrow)" strokeDasharray="8,4">
        <animate attributeName="stroke-dashoffset" from="24" to="0" dur="1s" repeatCount="indefinite" />
      </line>

      {/* To state (goal) */}
      <rect x="530" y="70" width="60" height="60" fill="#22c55e22" stroke="#22c55e" strokeWidth="2" rx="4" strokeDasharray="4,4" />
      <text x="560" y="105" textAnchor="middle" fill="#22c55e" fontSize="10" fontFamily="monospace">FIELD?</text>

      {/* Question marks */}
      {[200, 480].map((x, i) => (
        <text key={i} x={x} y="180" textAnchor="middle" fill="#eab308" fontSize="24" fontWeight="bold" opacity="0.5">?</text>
      ))}

      {/* Footer */}
      <text x="300" y="220" textAnchor="middle" fill="#eab308" fontSize="9" fontFamily="monospace">
        TRANSITION WATCH
      </text>
    </svg>
  );
};

// Wildcard - Abstract pattern
const WildcardGraphic: React.FC<{ headline?: string }> = ({ headline }) => {
  return (
    <svg viewBox="0 0 600 240" className="w-full h-auto">
      <rect width="600" height="240" fill="#09090b" rx="8" />

      {/* Abstract patterns */}
      <defs>
        <radialGradient id="purple-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#a855f7" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Glowing orbs */}
      {[
        { cx: 150, cy: 100, r: 60 },
        { cx: 450, cy: 140, r: 80 },
        { cx: 300, cy: 80, r: 40 },
      ].map((orb, i) => (
        <circle key={i} cx={orb.cx} cy={orb.cy} r={orb.r} fill="url(#purple-glow)">
          <animate attributeName="r" values={`${orb.r};${orb.r + 10};${orb.r}`} dur={`${2 + i}s`} repeatCount="indefinite" />
        </circle>
      ))}

      {/* Connecting lines */}
      <line x1="150" y1="100" x2="300" y2="80" stroke="#a855f7" strokeWidth="1" opacity="0.3" />
      <line x1="300" y1="80" x2="450" y2="140" stroke="#a855f7" strokeWidth="1" opacity="0.3" />

      {/* Large question mark / wildcard symbol */}
      <text x="300" y="160" textAnchor="middle" fill="#a855f7" fontSize="80" fontFamily="serif" opacity="0.2">?</text>

      {/* Footer */}
      <text x="300" y="220" textAnchor="middle" fill="#a855f7" fontSize="9" fontFamily="monospace">
        WILDCARD
      </text>
    </svg>
  );
};

// Main component that selects the right graphic
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
