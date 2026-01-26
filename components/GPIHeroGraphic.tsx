/**
 * GPI Hero Graphics
 * Visual components for homepage and article pages
 */

import React from 'react';

// Homepage Hero - Animated spectrum visualization
export const GPISpectrumHero: React.FC = () => {
  return (
    <div className="relative w-full h-64 md:h-80 overflow-hidden rounded-lg border border-zinc-800">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-950/50 via-yellow-950/50 to-red-950/50" />

      {/* Animated particles */}
      <div className="absolute inset-0">
        {/* Field particles (green, moving fast) */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`field-${i}`}
            className="absolute w-2 h-2 bg-green-500 rounded-full animate-pulse"
            style={{
              left: `${5 + i * 3}%`,
              top: `${20 + Math.sin(i) * 30}%`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: '1.5s',
            }}
          />
        ))}

        {/* Transitioning particles (yellow, medium speed) */}
        {[...Array(6)].map((_, i) => (
          <div
            key={`trans-${i}`}
            className="absolute w-3 h-3 bg-yellow-500 rounded-full opacity-70"
            style={{
              left: `${35 + i * 5}%`,
              top: `${30 + Math.cos(i) * 20}%`,
              animation: `pulse ${2 + i * 0.3}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}

        {/* Particle state (red, slow/stuck) */}
        {[...Array(5)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-4 h-4 bg-red-500 rounded-sm opacity-60"
            style={{
              left: `${70 + i * 5}%`,
              top: `${25 + i * 10}%`,
              animation: `pulse ${4 + i * 0.5}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>

      {/* Spectrum bar */}
      <div className="absolute bottom-0 left-0 right-0 h-2">
        <div className="h-full bg-gradient-to-r from-green-500 via-yellow-500 to-red-500" />
      </div>

      {/* Labels */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-between px-8 text-xs font-mono">
        <span className="text-green-500">FIELD</span>
        <span className="text-yellow-500">TRANSITIONING</span>
        <span className="text-red-500">PARTICLE</span>
      </div>

      {/* Score markers */}
      <div className="absolute bottom-3 left-0 right-0 flex justify-between px-8 text-[10px] text-zinc-600 font-mono">
        <span>1.0</span>
        <span>3.0</span>
        <span>5.0</span>
        <span>7.0</span>
        <span>10.0</span>
      </div>
    </div>
  );
};

// Series-specific hero banners
interface SeriesHeroProps {
  series: string;
  headline: string;
  companies?: { name: string; gpi: number }[];
}

const seriesStyles: Record<string, { gradient: string; accent: string; icon: string }> = {
  'Weekly Smackdown': {
    gradient: 'from-red-950 via-zinc-950 to-red-950',
    accent: 'text-red-500 border-red-500',
    icon: '⚔️',
  },
  'Vital Signs': {
    gradient: 'from-blue-950 via-zinc-950 to-blue-950',
    accent: 'text-blue-500 border-blue-500',
    icon: '🩺',
  },
  'Calcification Alert': {
    gradient: 'from-orange-950 via-zinc-950 to-orange-950',
    accent: 'text-orange-500 border-orange-500',
    icon: '🚨',
  },
  'The Autopsy': {
    gradient: 'from-zinc-900 via-zinc-950 to-zinc-900',
    accent: 'text-zinc-400 border-zinc-400',
    icon: '🪦',
  },
  'Field Notes': {
    gradient: 'from-green-950 via-zinc-950 to-green-950',
    accent: 'text-green-500 border-green-500',
    icon: '📡',
  },
  'Transition Watch': {
    gradient: 'from-yellow-950 via-zinc-950 to-yellow-950',
    accent: 'text-yellow-500 border-yellow-500',
    icon: '🔄',
  },
  'Wildcard': {
    gradient: 'from-purple-950 via-zinc-950 to-purple-950',
    accent: 'text-purple-500 border-purple-500',
    icon: '🃏',
  },
};

export const SeriesHero: React.FC<SeriesHeroProps> = ({ series, headline, companies }) => {
  const style = seriesStyles[series] || seriesStyles['Wildcard'];

  return (
    <div className={`relative w-full overflow-hidden rounded-lg border border-zinc-800 bg-gradient-to-r ${style.gradient}`}>
      {/* Abstract background pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative p-8 md:p-12">
        {/* Series badge */}
        <div className={`inline-flex items-center gap-2 text-sm font-mono ${style.accent} border px-3 py-1 rounded mb-4`}>
          <span className="text-lg">{style.icon}</span>
          <span>{series.toUpperCase()}</span>
        </div>

        {/* Company GPI scores (if smackdown or comparison) */}
        {companies && companies.length > 0 && (
          <div className="flex flex-wrap gap-4 mt-6">
            {companies.map((company, i) => (
              <div
                key={i}
                className={`flex items-center gap-3 bg-black/50 border rounded-lg px-4 py-3 ${
                  company.gpi <= 3 ? 'border-green-500' :
                  company.gpi <= 6.9 ? 'border-yellow-500' : 'border-red-500'
                }`}
              >
                <span className="text-white font-bold">{company.name}</span>
                <span className={`text-2xl font-black font-mono ${
                  company.gpi <= 3 ? 'text-green-500' :
                  company.gpi <= 6.9 ? 'text-yellow-500' : 'text-red-500'
                }`}>
                  {company.gpi.toFixed(1)}
                </span>
              </div>
            ))}
            {companies.length === 2 && (
              <div className="flex items-center text-zinc-600 font-black text-xl px-2">
                VS
              </div>
            )}
          </div>
        )}
      </div>

      {/* Decorative elements based on series */}
      {series === 'Weekly Smackdown' && (
        <div className="absolute right-8 top-1/2 -translate-y-1/2 text-8xl opacity-10">
          ⚔️
        </div>
      )}
      {series === 'Calcification Alert' && (
        <div className="absolute right-4 top-4 bottom-4 w-1 bg-gradient-to-b from-orange-500 via-red-500 to-red-900 rounded" />
      )}
      {series === 'Vital Signs' && (
        <div className="absolute bottom-0 left-0 right-0 h-8 overflow-hidden opacity-30">
          <svg viewBox="0 0 400 50" className="w-full h-full">
            <path
              d="M0,25 L50,25 L60,10 L70,40 L80,20 L90,30 L100,25 L150,25 L160,5 L170,45 L180,15 L190,35 L200,25 L400,25"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-blue-500"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

// Company GPI Score Card
interface GPIScoreCardProps {
  name: string;
  gpi: number;
  stage: string;
  dimensions?: {
    decisionLatency?: number;
    errorCorrection?: number;
    knowledgeLocation?: number;
    structuralLockIn?: number;
    talentFlow?: number;
    capitalIntensity?: number;
    knowledgeVelocity?: number;
  };
}

export const GPIScoreCard: React.FC<GPIScoreCardProps> = ({ name, gpi, stage, dimensions }) => {
  const stageColor = stage === 'Field' ? 'green' : stage === 'Transitioning' ? 'yellow' : 'red';

  return (
    <div className={`border-2 border-${stageColor}-500 bg-${stageColor}-950/20 rounded-lg p-6`}>
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-black text-white">{name}</h3>
          <span className={`text-sm font-mono text-${stageColor}-500`}>{stage.toUpperCase()}</span>
        </div>
        <div className={`text-4xl font-black font-mono text-${stageColor}-500`}>
          {gpi.toFixed(1)}
        </div>
      </div>

      {dimensions && (
        <div className="grid grid-cols-7 gap-1 mt-4">
          {[
            { key: 'decisionLatency', label: 'DL' },
            { key: 'errorCorrection', label: 'EC' },
            { key: 'knowledgeLocation', label: 'KL' },
            { key: 'structuralLockIn', label: 'SL' },
            { key: 'talentFlow', label: 'TF' },
            { key: 'capitalIntensity', label: 'CI' },
            { key: 'knowledgeVelocity', label: 'KV' },
          ].map(({ key, label }) => {
            const value = dimensions[key as keyof typeof dimensions];
            const barColor = value && value <= 3 ? 'bg-green-500' : value && value <= 6 ? 'bg-yellow-500' : 'bg-red-500';
            return (
              <div key={key} className="flex flex-col items-center">
                <div className="w-full h-16 bg-zinc-900 rounded relative overflow-hidden">
                  <div
                    className={`absolute bottom-0 left-0 right-0 ${barColor}`}
                    style={{ height: `${((value || 0) / 10) * 100}%` }}
                  />
                </div>
                <span className="text-[10px] text-zinc-500 mt-1">{label}</span>
                <span className="text-xs font-mono font-bold text-zinc-300">{value || '—'}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default GPISpectrumHero;
