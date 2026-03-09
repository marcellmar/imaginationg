/**
 * Talent Flow Dimension Page
 * Weight: 10%
 */

import React from 'react';
import Link from 'next/link';
import SEOHead from '../../components/SEOHead';
import Navigation from '../../components/Navigation';
import { GPISpectrum } from '../../components/gpi';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const TalentFlowPage = () => {
  useScrollReveal();

  const examples = {
    low: [
      { company: 'Spotify', gpi: 2.5, detail: 'Squad model with fluid membership. Moving between squads is a normal career move, not an exception that requires HR approval.' },
      { company: 'Amazon', gpi: 2.2, detail: 'Internal transfers are a legitimate career path. Talent gets routed toward problems, not locked into org boxes.' },
    ],
    high: [
      { company: 'Comcast', gpi: 6.95, detail: 'Wage compression and legacy culture make internal mobility difficult. High performers calculate that their leverage is higher somewhere else.' },
      { company: 'WBD', gpi: 7.4, detail: 'Post-merger org has multiple competing power structures. Moving between them requires political navigation, not just performance.' },
    ],
  };

  const diagnosticQuestions = [
    'When did someone last move from one team to a completely different function internally?',
    'What\'s the process for acknowledging that a role is no longer needed?',
    'Do your best people get more meaningful work or more approval layers?',
    'Can you identify who\'s checked out but staying?',
    'Is internal mobility seen as disloyalty or development?',
  ];

  return (
    <>
      <SEOHead
        title="Talent Flow (GPI Dimension #5) | IMAGINATION G"
        description="Talent Flow measures ease of entry, exit, and mobility. Weight: 10%. How fluidly can talent move through your organization?"
        ogImage="/images/og-talent-flow.svg"
      />

      <div className="min-h-screen bg-stone-50 text-stone-900">
        <Navigation currentPage="framework" />

        <section className="pt-36 pb-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto fade-up">
              <div className="mb-8">
                <Link href="/gpi-framework" className="text-stone-500 hover:text-stone-900 transition-colors text-sm">
                  ← GPI Framework
                </Link>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-red-600 text-white flex items-center justify-center font-black text-2xl">
                  5
                </div>
                <span className="text-xs font-mono text-stone-500 bg-stone-100 px-2 py-1 rounded-full">
                  10% weight
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-headline mb-6">
                TALENT FLOW<span className="text-red-600">.</span>
              </h1>

              <p className="text-xl text-stone-500 mb-8 max-w-2xl">
                How easily people move through the org, and whether the movement goes toward the highest-leverage problems. Stagnation isn't just an HR issue. Stuck people do stuck work.
              </p>

              {/* Talent Flow Visual */}
              <div className="mb-12 p-8 bg-white border border-stone-200">
                <svg viewBox="0 0 400 120" className="w-full max-w-lg mx-auto">
                  {/* High Flow (left) */}
                  <text x="80" y="15" textAnchor="middle" fill="#1c1917" fontSize="10" fontWeight="bold">HIGH FLOW</text>

                  {/* Entry point */}
                  <rect x="20" y="45" width="30" height="30" fill="none" stroke="#1c1917" strokeWidth="2" rx="4" />
                  <text x="35" y="63" textAnchor="middle" fill="#1c1917" fontSize="8">IN</text>

                  {/* Flowing people */}
                  <circle r="5" fill="#1c1917">
                    <animateMotion dur="2s" repeatCount="indefinite" path="M25,60 Q70,30 100,60 Q130,90 160,60" />
                  </circle>
                  <circle r="5" fill="#1c1917">
                    <animateMotion dur="2s" begin="0.5s" repeatCount="indefinite" path="M25,60 Q70,80 100,60 Q130,40 160,60" />
                  </circle>
                  <circle r="5" fill="#1c1917">
                    <animateMotion dur="2s" begin="1s" repeatCount="indefinite" path="M25,60 Q70,50 100,70 Q130,60 160,50" />
                  </circle>

                  {/* Team boxes they flow through */}
                  <rect x="60" y="40" width="20" height="20" fill="#1c1917" opacity="0.3" rx="2" />
                  <rect x="90" y="55" width="20" height="20" fill="#1c1917" opacity="0.3" rx="2" />
                  <rect x="120" y="45" width="20" height="20" fill="#1c1917" opacity="0.3" rx="2" />

                  {/* Exit point */}
                  <rect x="150" y="45" width="30" height="30" fill="none" stroke="#1c1917" strokeWidth="2" rx="4" />
                  <text x="165" y="63" textAnchor="middle" fill="#1c1917" fontSize="8">OUT</text>

                  <text x="100" y="105" textAnchor="middle" fill="#1c1917" fontSize="8">PEOPLE MOVE FREELY</text>

                  {/* Divider */}
                  <line x1="190" y1="20" x2="190" y2="100" stroke="#d6d3d1" strokeWidth="1" strokeDasharray="4,4" />
                  <text x="205" y="60" textAnchor="middle" fill="#d6d3d1" fontSize="10">VS</text>
                  <line x1="220" y1="20" x2="220" y2="100" stroke="#d6d3d1" strokeWidth="1" strokeDasharray="4,4" />

                  {/* Low Flow (right) */}
                  <text x="320" y="15" textAnchor="middle" fill="#ef4444" fontSize="10" fontWeight="bold">LOW FLOW</text>

                  {/* Trapped people in boxes */}
                  <rect x="240" y="35" width="30" height="30" fill="#ef4444" opacity="0.7" />
                  <circle cx="255" cy="50" r="8" fill="white" opacity="0.3" />
                  <text x="255" y="74" textAnchor="middle" fill="#ef4444" fontSize="6">STUCK</text>

                  <rect x="285" y="35" width="30" height="30" fill="#ef4444" opacity="0.7" />
                  <circle cx="300" cy="50" r="8" fill="white" opacity="0.3" />
                  <text x="300" y="74" textAnchor="middle" fill="#ef4444" fontSize="6">STUCK</text>

                  <rect x="330" y="35" width="30" height="30" fill="#ef4444" opacity="0.7" />
                  <circle cx="345" cy="50" r="8" fill="white" opacity="0.3" />
                  <text x="345" y="74" textAnchor="middle" fill="#ef4444" fontSize="6">STUCK</text>

                  <rect x="375" y="35" width="20" height="30" fill="#ef4444" opacity="0.5" rx="2" />
                  <text x="385" y="52" textAnchor="middle" fill="white" fontSize="7">EXIT</text>

                  {/* Fleeing arrow */}
                  <path d="M 370 85 L 390 85 L 385 80 M 390 85 L 385 90" stroke="#ef4444" strokeWidth="2" fill="none">
                    <animate attributeName="opacity" values="0.3;1;0.3" dur="1s" repeatCount="indefinite" />
                  </path>
                  <circle cx="365" cy="85" r="5" fill="#ef4444">
                    <animate attributeName="cx" values="355;380;355" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="1;0;1" dur="2s" repeatCount="indefinite" />
                  </circle>

                  <text x="320" y="105" textAnchor="middle" fill="#ef4444" fontSize="8">BEST TALENT LEAVES</text>
                </svg>
                <p className="text-center text-stone-500 text-sm mt-4 font-mono">FLUID VS STAGNANT</p>
              </div>

              <div className="max-w-md">
                <GPISpectrum score={5.0} size="lg" showMarker={false} />
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-black mb-8 fade-up">THE SCALE</h2>

              <div className="grid md:grid-cols-2 gap-8 fade-up-stagger">
                <div className="bg-stone-100 border border-stone-300 p-6">
                  <div className="text-stone-900 font-mono font-bold mb-2">SCORE 1-3</div>
                  <h3 className="text-xl font-bold mb-3">People move toward hard problems</h3>
                  <p className="text-stone-500">
                    Strong performers go where they're needed. Internal mobility is common enough that it's not a big deal. The best stay because they have room to grow, not because leaving is difficult.
                  </p>
                </div>

                <div className="bg-stone-100 border border-stone-300 p-6">
                  <div className="text-red-600 font-mono font-bold mb-2">SCORE 7-10</div>
                  <h3 className="text-xl font-bold mb-3">Roles outlast their usefulness</h3>
                  <p className="text-stone-500">
                    The best performers eventually calculate that their leverage is higher somewhere else and leave. What stays behind is a selection effect. The org gets more calcified at every level.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-black mb-8 fade-up">THE SLOW DRAIN</h2>

              <div className="border-l-4 border-red-600 pl-6 py-4 fade-up mb-6">
                <p className="text-lg text-stone-600">
                  Organizations don't fail from bad people. They fail from the gradual concentration of people who've run out of reasons to try. <strong className="text-stone-900">That concentration is the signal.</strong>
                </p>
              </div>

              <div className="bg-stone-100 border border-stone-200 p-6 fade-up">
                <h3 className="font-bold mb-4">THE SELECTION EFFECT</h3>
                <p className="text-stone-500">
                  Low talent flow looks like a retention problem. It's usually a mobility problem. When people can't move to different work inside the org, the only signal available to a high performer is to leave entirely. The best self-select out. What remains increasingly self-selects for compliance over capability. The org hires harder to fill the same hole.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-black mb-8 fade-up">EXAMPLES</h2>

              <div className="space-y-8 fade-up">
                <div>
                  <h3 className="text-stone-900 font-bold mb-4">HIGH FLOW (Score 1-3)</h3>
                  <div className="space-y-3">
                    {examples.low.map((ex) => (
                      <div key={ex.company} className="bg-stone-50 border border-stone-200 p-4 flex items-center justify-between">
                        <div>
                          <span className="font-bold">{ex.company}</span>
                          <p className="text-sm text-stone-500 mt-1">{ex.detail}</p>
                        </div>
                        <span className="text-stone-900 font-mono font-bold">{ex.gpi}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-red-600 font-bold mb-4">LOW FLOW (Score 7-10)</h3>
                  <div className="space-y-3">
                    {examples.high.map((ex) => (
                      <div key={ex.company} className="bg-stone-50 border border-stone-200 p-4 flex items-center justify-between">
                        <div>
                          <span className="font-bold">{ex.company}</span>
                          <p className="text-sm text-stone-500 mt-1">{ex.detail}</p>
                        </div>
                        <span className="text-red-600 font-mono font-bold">{ex.gpi}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-black mb-8 fade-up">DIAGNOSTIC QUESTIONS</h2>

              <div className="space-y-3 fade-up">
                {diagnosticQuestions.map((q, i) => (
                  <div key={i} className="border border-stone-200 p-4 flex items-center gap-4">
                    <span className="text-red-600 font-bold">{i + 1}</span>
                    <span className="text-stone-600">{q}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 border-t border-stone-200">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between gap-6">
              <Link href="/gpi-framework/structural-lock-in" className="border border-stone-300 px-8 py-4 text-sm font-semibold hover:border-stone-400 transition-colors text-center">
                ← Structural Lock-In
              </Link>
              <Link href="/gpi-framework/capital-intensity" className="bg-stone-900 text-white px-8 py-4 text-sm font-semibold hover:bg-stone-800 transition-colors text-center">
                Next: Capital Intensity →
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 px-6 border-t border-stone-200">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
              <div>
                <div className="font-black text-sm mb-4">GPI<span className="text-red-600">.</span>STUDIO</div>
                <p className="text-sm text-stone-400 leading-relaxed">
                  Organizational physics.<br />
                  We measure where energy gets stuck.
                </p>
              </div>
              <div>
                <div className="text-xs font-mono text-stone-400 mb-4">RESEARCH</div>
                <div className="space-y-3">
                  <Link href="/insights" className="block text-sm text-stone-500 hover:text-stone-900 transition-colors">Insights</Link>
                  <Link href="/insights/gpi-analyses" className="block text-sm text-stone-500 hover:text-stone-900 transition-colors">Analyses</Link>
                  <Link href="/gpi-framework" className="block text-sm text-stone-500 hover:text-stone-900 transition-colors">Framework</Link>
                </div>
              </div>
              <div>
                <div className="text-xs font-mono text-stone-400 mb-4">WORK</div>
                <div className="space-y-3">
                  <Link href="/diagnostic" className="block text-sm text-stone-500 hover:text-stone-900 transition-colors">Diagnostic</Link>
                  <Link href="/consult" className="block text-sm text-stone-500 hover:text-stone-900 transition-colors">Book a Session</Link>
                  <Link href="/work-with-us" className="block text-sm text-stone-500 hover:text-stone-900 transition-colors">Work With Us</Link>
                </div>
              </div>
              <div>
                <div className="text-xs font-mono text-stone-400 mb-4">COMPANY</div>
                <div className="space-y-3">
                  <Link href="/about" className="block text-sm text-stone-500 hover:text-stone-900 transition-colors">About</Link>
                </div>
              </div>
            </div>
            <div className="pt-8 border-t border-stone-200 flex justify-between items-center text-xs text-stone-400">
              <div>© {new Date().getFullYear()} Imagination G LLC</div>
              <div className="font-mono">gpi.studio</div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default TalentFlowPage;
