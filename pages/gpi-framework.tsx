import React from 'react';
import Link from 'next/link';
import SEOHead from '../components/SEOHead';
import Navigation from '../components/Navigation';
import { getOrderedDimensions } from '../lib/gpi-calculator';
import { ArrowRight } from 'lucide-react';

// Dimension slug mapping
const DIMENSION_SLUGS: Record<string, string> = {
  DECISION_LATENCY: 'decision-latency',
  KNOWLEDGE_LOCATION: 'knowledge-location',
  ERROR_CORRECTION: 'error-correction',
  STRUCTURAL_LOCKIN: 'structural-lock-in',
  TALENT_FLOW: 'talent-flow',
  CAPITAL_INTENSITY: 'capital-intensity',
  KNOWLEDGE_VELOCITY: 'knowledge-velocity',
};

// Custom icons for each dimension
const DecisionIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
    <circle cx="12" cy="6" r="3" stroke="currentColor" strokeWidth="2" />
    <path d="M12 9 L12 14 M12 14 L7 19 M12 14 L17 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const KnowledgeLocationIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
    <circle cx="12" cy="12" r="3" fill="currentColor" />
    <circle cx="5" cy="5" r="2" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="19" cy="5" r="2" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="5" cy="19" r="2" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="19" cy="19" r="2" stroke="currentColor" strokeWidth="1.5" />
    <line x1="7" y1="7" x2="10" y2="10" stroke="currentColor" strokeWidth="1" strokeDasharray="2,2" />
    <line x1="17" y1="7" x2="14" y2="10" stroke="currentColor" strokeWidth="1" strokeDasharray="2,2" />
  </svg>
);

const ErrorCorrectionIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
    <path d="M4 12 L8 16 L20 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4 12 L8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
  </svg>
);

const StructuralLockIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
    <rect x="4" y="4" width="6" height="6" stroke="currentColor" strokeWidth="2" />
    <rect x="14" y="4" width="6" height="6" stroke="currentColor" strokeWidth="2" />
    <rect x="4" y="14" width="6" height="6" stroke="currentColor" strokeWidth="2" />
    <rect x="14" y="14" width="6" height="6" stroke="currentColor" strokeWidth="2" />
    <line x1="10" y1="7" x2="14" y2="7" stroke="currentColor" strokeWidth="1.5" />
    <line x1="7" y1="10" x2="7" y2="14" stroke="currentColor" strokeWidth="1.5" />
    <line x1="17" y1="10" x2="17" y2="14" stroke="currentColor" strokeWidth="1.5" />
    <line x1="10" y1="17" x2="14" y2="17" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const TalentFlowIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
    <circle cx="6" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
    <circle cx="18" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
    <path d="M9 12 L15 12" stroke="currentColor" strokeWidth="2" />
    <path d="M13 9 L15 12 L13 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CapitalIntensityIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
    <rect x="3" y="8" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="2" />
    <path d="M12 12 L12 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M9 14 L15 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M7 8 L7 5 L17 5 L17 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const KnowledgeVelocityIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
    <path d="M4 12 L20 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M16 8 L20 12 L16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4 6 L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    <path d="M4 18 L12 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
  </svg>
);

const DIMENSION_ICONS: Record<string, React.ReactNode> = {
  DECISION_LATENCY: <DecisionIcon />,
  KNOWLEDGE_LOCATION: <KnowledgeLocationIcon />,
  ERROR_CORRECTION: <ErrorCorrectionIcon />,
  STRUCTURAL_LOCKIN: <StructuralLockIcon />,
  TALENT_FLOW: <TalentFlowIcon />,
  CAPITAL_INTENSITY: <CapitalIntensityIcon />,
  KNOWLEDGE_VELOCITY: <KnowledgeVelocityIcon />,
};

const GPIFrameworkPage = () => {
  const dimensions = getOrderedDimensions();

  return (
    <>
      <SEOHead
        title="The Growing Pains Index (GPI) Framework | IMAGINATION G"
        description="GPI measures organizational physics across 7 dimensions. Scores from 1 (field state - adaptive) to 10 (particle state - rigid). Diagnostic exposure, not consulting theater."
        ogImage="/images/og-gpi-framework.svg"
      />

      <div className="min-h-screen bg-black text-white">
        <Navigation currentPage="framework" />

        {/* Hero with Main Visual */}
        <section className="pt-24 pb-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block mb-8 text-green-400 text-xs font-mono bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-full">
                  <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                  FRAMEWORK DOCUMENTATION
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1]">
                  THE GROWING<br />PAINS INDEX<span className="text-red-600">.</span>
                </h1>

                <p className="text-xl text-zinc-400 mb-8 max-w-xl">
                  7 dimensions. 3 states. 1 score that measures where energy gets stuck in your organization.
                </p>

                <Link
                  href="/diagnostic"
                  className="inline-flex items-center gap-2 bg-red-600 px-8 py-4 text-lg font-black hover:bg-red-700 transition-colors"
                >
                  CALCULATE YOUR GPI
                  <ArrowRight size={20} />
                </Link>
              </div>

              {/* MAIN VISUAL - 7 Dimension Diagnostic Display */}
              <div className="flex justify-center">
                <div className="relative w-full max-w-md">
                  <svg viewBox="0 0 300 320" className="w-full h-auto">
                    {/* Background */}
                    <rect x="0" y="0" width="300" height="320" fill="#09090b" rx="8" />

                    {/* Header */}
                    <text x="150" y="30" textAnchor="middle" fill="#52525b" fontSize="10" fontFamily="monospace">GPI DIMENSIONAL SCAN</text>

                    {/* 7 Dimension Bars */}
                    {[
                      { label: 'DECISION', score: 7.5, color: '#ef4444' },
                      { label: 'ERROR', score: 6.0, color: '#eab308' },
                      { label: 'KNOWLEDGE', score: 8.0, color: '#ef4444' },
                      { label: 'STRUCTURE', score: 5.5, color: '#eab308' },
                      { label: 'TALENT', score: 4.0, color: '#22c55e' },
                      { label: 'CAPITAL', score: 6.5, color: '#eab308' },
                      { label: 'VELOCITY', score: 7.0, color: '#ef4444' },
                    ].map((dim, i) => {
                      const y = 50 + i * 35;
                      return (
                        <g key={dim.label}>
                          {/* Label */}
                          <text x="20" y={y + 12} fill="#71717a" fontSize="9" fontFamily="monospace">{dim.label}</text>

                          {/* Bar background */}
                          <rect x="85" y={y} width="150" height="16" fill="#27272a" rx="2" />

                          {/* Bar fill - animated */}
                          <rect x="85" y={y} width="0" height="16" fill={dim.color} rx="2" opacity="0.8">
                            <animate
                              attributeName="width"
                              from="0"
                              to={dim.score * 15}
                              dur="1s"
                              fill="freeze"
                              begin={`${i * 0.1}s`}
                            />
                          </rect>

                          {/* Score */}
                          <text x="245" y={y + 12} fill={dim.color} fontSize="11" fontWeight="bold" fontFamily="monospace">
                            {dim.score.toFixed(1)}
                          </text>

                          {/* Pulse indicator for high scores */}
                          {dim.score >= 7 && (
                            <circle cx="270" cy={y + 8} r="4" fill={dim.color}>
                              <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite" />
                            </circle>
                          )}
                        </g>
                      );
                    })}

                    {/* Divider */}
                    <line x1="20" y1="300" x2="280" y2="300" stroke="#27272a" strokeWidth="1" />

                    {/* Overall Score */}
                    <text x="20" y="285" fill="#71717a" fontSize="10" fontFamily="monospace">COMPOSITE GPI</text>
                    <text x="245" y="285" fill="#ef4444" fontSize="16" fontWeight="bold" fontFamily="monospace">6.4</text>

                    {/* State indicator */}
                    <rect x="180" y="303" width="100" height="14" fill="#27272a" rx="2" />
                    <text x="230" y="313" textAnchor="middle" fill="#eab308" fontSize="8" fontFamily="monospace">TRANSITION STATE</text>
                  </svg>

                  <div className="text-center mt-4">
                    <span className="text-xs font-mono text-zinc-600">Each dimension reveals a different friction point.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GPI Scale */}
        <section className="py-12 px-6 border-t border-zinc-900">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-2">
              <span className="text-green-500 font-bold text-xl">1</span>
              <span className="text-yellow-500 font-bold text-xl">5</span>
              <span className="text-red-500 font-bold text-xl">10</span>
            </div>
            <div className="h-4 bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 rounded mb-2"></div>
            <div className="flex justify-between text-sm text-zinc-500">
              <span>FIELD STATE</span>
              <span>TRANSITION</span>
              <span>PARTICLE STATE</span>
            </div>
          </div>
        </section>

        {/* Three States */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-black mb-4 text-center">THREE STATES</h2>
            <p className="text-center text-zinc-500 mb-12 max-w-xl mx-auto">
              Where does your organization sit?
            </p>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {/* Field State */}
              <Link href="/gpi-framework/field-state" className="group">
                <div className="border border-green-600/50 hover:border-green-600 p-8 bg-zinc-950 transition-all">
                  {/* Visual */}
                  <div className="h-24 mb-6 flex items-center justify-center">
                    <svg viewBox="0 0 100 60" className="w-full h-full">
                      {[0, 1, 2, 3, 4].map((i) => (
                        <circle key={i} r="5" fill="#22c55e" opacity="0.7">
                          <animate
                            attributeName="cx"
                            values={`${10 + i * 10};${80 - i * 5};${10 + i * 10}`}
                            dur={`${2 + i * 0.3}s`}
                            repeatCount="indefinite"
                          />
                          <animate
                            attributeName="cy"
                            values={`${15 + i * 10};${20 + i * 8};${15 + i * 10}`}
                            dur={`${2 + i * 0.3}s`}
                            repeatCount="indefinite"
                          />
                        </circle>
                      ))}
                    </svg>
                  </div>
                  <div className="text-2xl font-black text-green-500 mb-1">FIELD STATE</div>
                  <div className="text-lg font-mono text-zinc-500 mb-4">GPI 1-3</div>
                  <p className="text-zinc-400 text-sm">Distributed intelligence. Rapid adaptation. Energy flows freely.</p>
                  <div className="text-green-500 text-xs font-bold mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    LEARN MORE →
                  </div>
                </div>
              </Link>

              {/* Transition State */}
              <Link href="/gpi-framework/transition-state" className="group">
                <div className="border border-yellow-600/50 hover:border-yellow-600 p-8 bg-zinc-950 transition-all">
                  {/* Visual */}
                  <div className="h-24 mb-6 flex items-center justify-center">
                    <svg viewBox="0 0 100 60" className="w-full h-full">
                      {[0, 1, 2, 3, 4].map((i) => (
                        <circle key={i} r="5" fill="#eab308" opacity="0.7">
                          <animate
                            attributeName="cx"
                            values={`${20 + i * 12};${40 + i * 8};${20 + i * 12}`}
                            dur={`${3 + i * 0.5}s`}
                            repeatCount="indefinite"
                          />
                          <animate
                            attributeName="cy"
                            values={`${15 + i * 10};${18 + i * 9};${15 + i * 10}`}
                            dur={`${3.5 + i * 0.4}s`}
                            repeatCount="indefinite"
                          />
                        </circle>
                      ))}
                      <line x1="50" y1="5" x2="50" y2="55" stroke="#eab308" strokeWidth="1" opacity="0.3" strokeDasharray="2,2" />
                    </svg>
                  </div>
                  <div className="text-2xl font-black text-yellow-500 mb-1">TRANSITION</div>
                  <div className="text-lg font-mono text-zinc-500 mb-4">GPI 4-6</div>
                  <p className="text-zinc-400 text-sm">Mixed systems. High turbulence. Critical transformation window.</p>
                  <div className="text-yellow-500 text-xs font-bold mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    LEARN MORE →
                  </div>
                </div>
              </Link>

              {/* Particle State */}
              <Link href="/gpi-framework/particle-state" className="group">
                <div className="border border-red-600/50 hover:border-red-600 p-8 bg-zinc-950 transition-all">
                  {/* Visual */}
                  <div className="h-24 mb-6 flex items-center justify-center">
                    <svg viewBox="0 0 100 60" className="w-full h-full">
                      {/* Grid */}
                      <line x1="30" y1="5" x2="30" y2="55" stroke="#ef4444" strokeWidth="1" opacity="0.4" />
                      <line x1="50" y1="5" x2="50" y2="55" stroke="#ef4444" strokeWidth="1" opacity="0.4" />
                      <line x1="70" y1="5" x2="70" y2="55" stroke="#ef4444" strokeWidth="1" opacity="0.4" />
                      <line x1="10" y1="20" x2="90" y2="20" stroke="#ef4444" strokeWidth="1" opacity="0.4" />
                      <line x1="10" y1="40" x2="90" y2="40" stroke="#ef4444" strokeWidth="1" opacity="0.4" />
                      {/* Frozen particles */}
                      <circle cx="30" cy="20" r="5" fill="#ef4444" opacity="0.7" />
                      <circle cx="50" cy="20" r="5" fill="#ef4444" opacity="0.7" />
                      <circle cx="70" cy="40" r="5" fill="#ef4444" opacity="0.7" />
                      <circle cx="30" cy="40" r="5" fill="#ef4444" opacity="0.7" />
                      <circle cx="50" cy="40" r="5" fill="#ef4444" opacity="0.7" />
                    </svg>
                  </div>
                  <div className="text-2xl font-black text-red-500 mb-1">PARTICLE STATE</div>
                  <div className="text-lg font-mono text-zinc-500 mb-4">GPI 7-10</div>
                  <p className="text-zinc-400 text-sm">Centralized control. Rigid hierarchies. Energy trapped at boundaries.</p>
                  <div className="text-red-500 text-xs font-bold mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    LEARN MORE →
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Seven Dimensions */}
        <section className="py-16 px-6 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-black mb-4 text-center">SEVEN DIMENSIONS</h2>
            <p className="text-center text-zinc-400 mb-12 max-w-xl mx-auto">
              Each dimension measures a different aspect of organizational friction.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {dimensions.map((dim) => (
                <Link
                  key={dim.key}
                  href={`/gpi-framework/${DIMENSION_SLUGS[dim.key]}`}
                  className="group"
                >
                  <div className="border border-zinc-800 hover:border-red-600 p-6 bg-black transition-all h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-red-600/20 text-red-500 flex items-center justify-center rounded group-hover:bg-red-600 group-hover:text-white transition-all">
                        {DIMENSION_ICONS[dim.key]}
                      </div>
                      <span className="text-xs font-mono text-zinc-600 bg-zinc-900 px-2 py-1 rounded">
                        {Math.round(dim.weight * 100)}%
                      </span>
                    </div>
                    <h3 className="text-lg font-black mb-2">{dim.label.toUpperCase()}</h3>
                    <p className="text-zinc-500 text-sm mb-4">{dim.description}</p>
                    <div className="space-y-1 text-xs">
                      <div className="flex gap-2">
                        <span className="text-green-500 font-mono w-8">1-3:</span>
                        <span className="text-zinc-600">{dim.lowDescription}</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-red-500 font-mono w-8">7-10:</span>
                        <span className="text-zinc-600">{dim.highDescription}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black mb-12 text-center">HOW GPI WORKS</h2>

            <div className="space-y-6">
              {[
                { num: '01', title: 'DIAGNOSTIC', desc: '32 binary questions map to 7 dimensions', color: 'red' },
                { num: '02', title: 'WEIGHTED SCORE', desc: 'Each dimension weighted by organizational impact', color: 'yellow' },
                { num: '03', title: 'STATE CLASSIFICATION', desc: 'Field (1-3), Transition (4-6), or Particle (7-10)', color: 'green' },
                { num: '04', title: 'FRICTION MAP', desc: 'Radar chart shows where energy gets stuck', color: 'blue' },
              ].map((step) => (
                <div key={step.num} className="flex gap-6 items-start">
                  <div className={`text-2xl font-mono font-bold text-${step.color}-500`}>{step.num}</div>
                  <div>
                    <h3 className="text-xl font-black mb-1">{step.title}</h3>
                    <p className="text-zinc-500">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-black mb-6">MEASURE YOUR GPI</h2>
            <p className="text-xl text-zinc-400 mb-8 max-w-xl mx-auto">
              32 questions. 7 dimensions. See where energy gets stuck.
            </p>
            <Link
              href="/diagnostic"
              className="inline-flex items-center gap-2 bg-red-600 px-12 py-6 text-2xl font-black hover:bg-red-700 transition-colors"
            >
              START DIAGNOSTIC
              <ArrowRight size={24} />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default GPIFrameworkPage;
