/**
 * Knowledge Velocity Dimension Page
 * Weight: 10%
 */

import React from 'react';
import Link from 'next/link';
import SEOHead from '../../components/SEOHead';
import Navigation from '../../components/Navigation';
import { GPISpectrum } from '../../components/gpi';

const KnowledgeVelocityPage = () => {
  const examples = {
    low: [
      { company: 'OpenAI', gpi: 1.2, detail: 'Knowledge updates in days. Research to production in weeks.' },
      { company: 'Netflix', gpi: 2.0, detail: 'A/B tests inform decisions in real-time. Algorithms learn continuously.' },
    ],
    high: [
      { company: 'Construction', gpi: 8.0, detail: 'Apprenticeship model. Best practices take decades to spread.' },
      { company: 'Government', gpi: 9.0, detail: 'Policy knowledge trapped in bureaucratic silos. Updates are generational.' },
    ],
  };

  const diagnosticQuestions = [
    'How fast does operational knowledge update across the organization?',
    'Are best practices shared and adopted quickly?',
    'Is learning embedded in daily operations?',
    'How long until a new insight becomes standard practice?',
    'Does knowledge spread horizontally or only vertically?',
  ];

  return (
    <>
      <SEOHead
        title="Knowledge Velocity (GPI Dimension #7) | IMAGINATION G"
        description="Knowledge Velocity measures how fast operational knowledge updates. Weight: 10%. How quickly does your organization learn and adapt?"
        ogImage="/images/og-knowledge-velocity.svg"
      />

      <div className="min-h-screen bg-black text-white">
        <Navigation currentPage="framework" />

        <section className="pt-24 pb-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <Link href="/gpi-framework" className="text-zinc-500 hover:text-white transition-colors text-sm">
                  ← GPI Framework
                </Link>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-red-600 text-black flex items-center justify-center font-black text-2xl rounded">
                  7
                </div>
                <span className="text-xs font-mono text-zinc-500 bg-zinc-900 px-2 py-1 rounded">
                  10% weight
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-black mb-6">
                KNOWLEDGE VELOCITY<span className="text-red-600">.</span>
              </h1>

              <p className="text-xl text-zinc-400 mb-8 max-w-2xl">
                How fast operational knowledge updates and spreads. The speed of
                organizational learning in the wild.
              </p>

              {/* Knowledge Velocity Visual */}
              <div className="mb-12 p-8 bg-zinc-950 border border-zinc-800 rounded-xl">
                <svg viewBox="0 0 400 120" className="w-full max-w-lg mx-auto">
                  {/* High Velocity (left) */}
                  <text x="80" y="15" textAnchor="middle" fill="#22c55e" fontSize="10" fontWeight="bold">HIGH VELOCITY</text>

                  {/* Network nodes */}
                  <circle cx="40" cy="60" r="8" fill="#22c55e" opacity="0.7" />
                  <circle cx="70" cy="35" r="8" fill="#22c55e" opacity="0.7" />
                  <circle cx="70" cy="85" r="8" fill="#22c55e" opacity="0.7" />
                  <circle cx="110" cy="45" r="8" fill="#22c55e" opacity="0.7" />
                  <circle cx="110" cy="75" r="8" fill="#22c55e" opacity="0.7" />
                  <circle cx="140" cy="60" r="8" fill="#22c55e" opacity="0.7" />

                  {/* Connections */}
                  <line x1="40" y1="60" x2="70" y2="35" stroke="#22c55e" strokeWidth="1" opacity="0.3" />
                  <line x1="40" y1="60" x2="70" y2="85" stroke="#22c55e" strokeWidth="1" opacity="0.3" />
                  <line x1="70" y1="35" x2="110" y2="45" stroke="#22c55e" strokeWidth="1" opacity="0.3" />
                  <line x1="70" y1="85" x2="110" y2="75" stroke="#22c55e" strokeWidth="1" opacity="0.3" />
                  <line x1="110" y1="45" x2="140" y2="60" stroke="#22c55e" strokeWidth="1" opacity="0.3" />
                  <line x1="110" y1="75" x2="140" y2="60" stroke="#22c55e" strokeWidth="1" opacity="0.3" />
                  <line x1="70" y1="35" x2="70" y2="85" stroke="#22c55e" strokeWidth="1" opacity="0.3" />
                  <line x1="110" y1="45" x2="110" y2="75" stroke="#22c55e" strokeWidth="1" opacity="0.3" />

                  {/* Fast spreading pulse */}
                  <circle cx="40" cy="60" r="15" fill="none" stroke="#22c55e" strokeWidth="1">
                    <animate attributeName="r" values="8;35;8" dur="1.5s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.8;0;0.8" dur="1.5s" repeatCount="indefinite" />
                  </circle>

                  {/* Info packets traveling fast */}
                  <circle r="3" fill="#22c55e">
                    <animateMotion dur="0.5s" repeatCount="indefinite" path="M40,60 L70,35 L110,45 L140,60" />
                  </circle>
                  <circle r="3" fill="#22c55e">
                    <animateMotion dur="0.5s" begin="0.25s" repeatCount="indefinite" path="M40,60 L70,85 L110,75 L140,60" />
                  </circle>

                  <text x="90" y="110" textAnchor="middle" fill="#22c55e" fontSize="8">HOURS TO SPREAD</text>

                  {/* Divider */}
                  <line x1="175" y1="20" x2="175" y2="100" stroke="#3f3f46" strokeWidth="1" strokeDasharray="4,4" />
                  <text x="200" y="60" textAnchor="middle" fill="#3f3f46" fontSize="10">VS</text>
                  <line x1="225" y1="20" x2="225" y2="100" stroke="#3f3f46" strokeWidth="1" strokeDasharray="4,4" />

                  {/* Low Velocity (right) */}
                  <text x="320" y="15" textAnchor="middle" fill="#ef4444" fontSize="10" fontWeight="bold">LOW VELOCITY</text>

                  {/* Silos - isolated boxes */}
                  <rect x="245" y="35" width="25" height="50" fill="#ef4444" opacity="0.5" stroke="#ef4444" strokeWidth="2" />
                  <circle cx="257" cy="50" r="5" fill="white" opacity="0.3" />
                  <text x="257" y="75" textAnchor="middle" fill="white" fontSize="6">SILO</text>

                  <rect x="285" y="35" width="25" height="50" fill="#ef4444" opacity="0.5" stroke="#ef4444" strokeWidth="2" />
                  <circle cx="297" cy="50" r="5" fill="white" opacity="0.3" />
                  <text x="297" y="75" textAnchor="middle" fill="white" fontSize="6">SILO</text>

                  <rect x="325" y="35" width="25" height="50" fill="#ef4444" opacity="0.5" stroke="#ef4444" strokeWidth="2" />
                  <circle cx="337" cy="50" r="5" fill="white" opacity="0.3" />
                  <text x="337" y="75" textAnchor="middle" fill="white" fontSize="6">SILO</text>

                  <rect x="365" y="35" width="25" height="50" fill="#ef4444" opacity="0.5" stroke="#ef4444" strokeWidth="2" />
                  <circle cx="377" cy="50" r="5" fill="white" opacity="0.3" />
                  <text x="377" y="75" textAnchor="middle" fill="white" fontSize="6">SILO</text>

                  {/* Slow knowledge drip */}
                  <circle cx="257" cy="50" r="2" fill="#ef4444">
                    <animate attributeName="cx" values="257;297;257" dur="5s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="1;0.3;1" dur="5s" repeatCount="indefinite" />
                  </circle>

                  {/* Question marks - people don't know */}
                  <text x="275" y="45" fill="#ef4444" fontSize="10" opacity="0.5">?</text>
                  <text x="315" y="45" fill="#ef4444" fontSize="10" opacity="0.5">?</text>
                  <text x="355" y="45" fill="#ef4444" fontSize="10" opacity="0.5">?</text>

                  <text x="320" y="110" textAnchor="middle" fill="#ef4444" fontSize="8">YEARS TO SPREAD</text>
                </svg>
                <p className="text-center text-zinc-500 text-sm mt-4 font-mono">INSTANT VS GENERATIONAL</p>
              </div>

              <div className="max-w-md">
                <GPISpectrum score={5.0} size="lg" showMarker={false} />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-black mb-8">THE SCALE</h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-green-950/20 border border-green-900/50 rounded-xl p-6">
                  <div className="text-green-500 font-mono font-bold mb-2">SCORE 1-3</div>
                  <h3 className="text-xl font-bold mb-3">Real-Time Algorithmic</h3>
                  <p className="text-zinc-400">
                    Learning happens continuously. Insights propagate instantly.
                    The organization's collective intelligence updates in real-time.
                    What works spreads. What doesn't, dies.
                  </p>
                </div>

                <div className="bg-red-950/20 border border-red-900/50 rounded-xl p-6">
                  <div className="text-red-500 font-mono font-bold mb-2">SCORE 7-10</div>
                  <h3 className="text-xl font-bold mb-3">Generational Transfer</h3>
                  <p className="text-zinc-400">
                    Knowledge passes through apprenticeship. Best practices take
                    years to spread. Learning happens when people retire and new
                    ones bring different assumptions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-black mb-8">WHY IT MATTERS</h2>

              <div className="space-y-6">
                <div className="border-l-4 border-red-600 pl-6 py-4">
                  <p className="text-lg text-zinc-300">
                    <strong className="text-white">Knowledge velocity is the clock speed of adaptation.</strong>
                    How fast the organization can recognize "this works better" and make
                    it the new standard determines how fast it can evolve.
                  </p>
                </div>

                <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6">
                  <h3 className="font-bold mb-4">THE AI ACCELERATION</h3>
                  <p className="text-zinc-400 mb-4">
                    AI is compressing knowledge velocity timescales. What used to take
                    months of analysis now takes minutes. Organizations that can't absorb
                    and act on insights quickly will be outpaced by those that can.
                  </p>
                  <p className="text-zinc-400">
                    The gap between high and low knowledge velocity organizations
                    is widening. Those stuck at 7-10 will fall further behind as
                    field-state competitors learn faster and faster.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-4">
                    <div className="text-2xl font-black text-green-500 mb-2">Hours</div>
                    <p className="text-sm text-zinc-500">Insight to action in field-state orgs</p>
                  </div>
                  <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-4">
                    <div className="text-2xl font-black text-yellow-500 mb-2">Months</div>
                    <p className="text-sm text-zinc-500">Insight to action in transition orgs</p>
                  </div>
                  <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-4">
                    <div className="text-2xl font-black text-red-500 mb-2">Years</div>
                    <p className="text-sm text-zinc-500">Insight to action in particle orgs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-black mb-8">EXAMPLES</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-green-500 font-bold mb-4">HIGH VELOCITY (Score 1-3)</h3>
                  <div className="space-y-3">
                    {examples.low.map((ex) => (
                      <div key={ex.company} className="bg-black border border-zinc-800 rounded-lg p-4 flex items-center justify-between">
                        <div>
                          <span className="font-bold">{ex.company}</span>
                          <p className="text-sm text-zinc-500 mt-1">{ex.detail}</p>
                        </div>
                        <span className="text-green-500 font-mono font-bold">{ex.gpi}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-red-500 font-bold mb-4">LOW VELOCITY (Score 7-10)</h3>
                  <div className="space-y-3">
                    {examples.high.map((ex) => (
                      <div key={ex.company} className="bg-black border border-zinc-800 rounded-lg p-4 flex items-center justify-between">
                        <div>
                          <span className="font-bold">{ex.company}</span>
                          <p className="text-sm text-zinc-500 mt-1">{ex.detail}</p>
                        </div>
                        <span className="text-red-500 font-mono font-bold">{ex.gpi}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-black mb-8">DIAGNOSTIC QUESTIONS</h2>

              <div className="space-y-3">
                {diagnosticQuestions.map((q, i) => (
                  <div key={i} className="border border-zinc-800 rounded-lg p-4 flex items-center gap-4">
                    <span className="text-red-600 font-bold">{i + 1}</span>
                    <span className="text-zinc-300">{q}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-black mb-8">ACTION GUIDE FOR THIS DIMENSION</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <Link href="/actions/velocity-boost" className="bg-black border border-zinc-800 rounded-xl p-6 hover:border-red-600 transition-colors">
                  <h3 className="font-bold text-xl mb-2">VELOCITY BOOST</h3>
                  <p className="text-zinc-500 text-sm">
                    Free DIY playbook. Create signal routes, weekly learning rituals, embed info in workflow.
                  </p>
                </Link>
                <Link href="/actions" className="bg-black border border-zinc-800 rounded-xl p-6 hover:border-zinc-600 transition-colors">
                  <h3 className="font-bold text-xl mb-2">ALL ACTION GUIDES</h3>
                  <p className="text-zinc-500 text-sm">
                    View action guides for all 7 GPI dimensions.
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between gap-6">
              <Link href="/gpi-framework/capital-intensity" className="border border-zinc-700 px-8 py-4 text-lg font-black hover:border-zinc-500 transition-colors text-center">
                ← CAPITAL INTENSITY
              </Link>
              <Link href="/diagnostic" className="bg-red-600 px-8 py-4 text-lg font-black hover:bg-red-700 transition-colors text-center">
                CALCULATE YOUR GPI →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default KnowledgeVelocityPage;
