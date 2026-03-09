/**
 * Structural Lock-In Dimension Page
 * Weight: 15%
 */

import React from 'react';
import Link from 'next/link';
import SEOHead from '../../components/SEOHead';
import Navigation from '../../components/Navigation';
import { GPISpectrum } from '../../components/gpi';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const StructuralLockInPage = () => {
  useScrollReveal();

  const examples = {
    low: [
      { company: 'Shopify', gpi: 2.2, detail: 'Modular architecture means components can be swapped without rebuilding everything. The platform bends when strategy changes.' },
      { company: 'Stripe', gpi: 1.5, detail: 'API-first. Decoupled services. Architecture designed for optionality, not permanence.' },
    ],
    high: [
      { company: 'Comcast', gpi: 6.95, detail: '$124B+ in total assets tied to cable infrastructure, parks, studios, and linear TV rights. Every strategic option runs through that constraint first.' },
      { company: 'Phillips 66', gpi: 6.4, detail: '40-year refineries priced at original investment. Unwinding them means taking losses nobody wants to authorize.' },
    ],
  };

  const diagnosticQuestions = [
    'What would it cost to replace your core platform in two years?',
    'How many processes exist because of a vendor contract?',
    'If you had to pivot your delivery model in 90 days, what would break?',
    'What percentage of budget goes to maintaining existing infrastructure vs new capability?',
    'Who benefits organizationally from things staying the same?',
  ];

  return (
    <>
      <SEOHead
        title="Structural Lock-In (GPI Dimension #4) | IMAGINATION G"
        description="Structural Lock-In measures how legacy systems prevent adaptation. Weight: 15%. How trapped are you by your own infrastructure?"
        ogImage="/images/og-structural-lock-in.svg"
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
                  4
                </div>
                <span className="text-xs font-mono text-stone-500 bg-stone-100 px-2 py-1 rounded-full">
                  15% weight
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-headline mb-6">
                STRUCTURAL LOCK-IN<span className="text-red-600">.</span>
              </h1>

              <p className="text-xl text-stone-500 mb-8 max-w-2xl">
                How much the current structure constrains what's possible next. Not just technology. Org charts, vendor contracts, physical infrastructure, anything that makes changing direction expensive.
              </p>

              {/* Structural Lock-In Visual */}
              <div className="mb-12 p-8 bg-white border border-stone-200">
                <svg viewBox="0 0 400 120" className="w-full max-w-lg mx-auto">
                  {/* Modular (left) */}
                  <text x="80" y="15" textAnchor="middle" fill="#1c1917" fontSize="10" fontWeight="bold">MODULAR</text>

                  {/* Independent blocks that can move */}
                  <rect x="30" y="35" width="25" height="25" fill="#1c1917" opacity="0.7" rx="3">
                    <animate attributeName="x" values="30;35;30" dur="3s" repeatCount="indefinite" />
                  </rect>
                  <rect x="65" y="35" width="25" height="25" fill="#1c1917" opacity="0.7" rx="3">
                    <animate attributeName="y" values="35;30;35" dur="3s" begin="0.5s" repeatCount="indefinite" />
                  </rect>
                  <rect x="100" y="35" width="25" height="25" fill="#1c1917" opacity="0.7" rx="3">
                    <animate attributeName="x" values="100;95;100" dur="3s" begin="1s" repeatCount="indefinite" />
                  </rect>

                  <rect x="30" y="70" width="25" height="25" fill="#1c1917" opacity="0.7" rx="3">
                    <animate attributeName="y" values="70;75;70" dur="3s" begin="1.5s" repeatCount="indefinite" />
                  </rect>
                  <rect x="65" y="70" width="25" height="25" fill="#1c1917" opacity="0.7" rx="3">
                    <animate attributeName="x" values="65;70;65" dur="3s" begin="2s" repeatCount="indefinite" />
                  </rect>
                  <rect x="100" y="70" width="25" height="25" fill="#1c1917" opacity="0.7" rx="3">
                    <animate attributeName="y" values="70;65;70" dur="3s" begin="2.5s" repeatCount="indefinite" />
                  </rect>

                  {/* Swap indicator */}
                  <path d="M 140 55 L 155 45 L 155 50 L 165 50 L 165 60 L 155 60 L 155 65 Z" fill="#1c1917" opacity="0.5">
                    <animate attributeName="opacity" values="0.3;0.7;0.3" dur="1.5s" repeatCount="indefinite" />
                  </path>
                  <text x="80" y="115" textAnchor="middle" fill="#1c1917" fontSize="8">SWAP ANYTHING</text>

                  {/* Divider */}
                  <line x1="180" y1="20" x2="180" y2="110" stroke="#d6d3d1" strokeWidth="1" strokeDasharray="4,4" />
                  <text x="200" y="70" textAnchor="middle" fill="#d6d3d1" fontSize="10">VS</text>
                  <line x1="220" y1="20" x2="220" y2="110" stroke="#d6d3d1" strokeWidth="1" strokeDasharray="4,4" />

                  {/* Entangled (right) */}
                  <text x="320" y="15" textAnchor="middle" fill="#ef4444" fontSize="10" fontWeight="bold">ENTANGLED</text>

                  {/* Rigid connected blocks */}
                  <rect x="250" y="35" width="25" height="25" fill="#ef4444" opacity="0.7" />
                  <rect x="285" y="35" width="25" height="25" fill="#ef4444" opacity="0.7" />
                  <rect x="320" y="35" width="25" height="25" fill="#ef4444" opacity="0.7" />
                  <rect x="355" y="35" width="25" height="25" fill="#ef4444" opacity="0.7" />

                  <rect x="250" y="70" width="25" height="25" fill="#ef4444" opacity="0.7" />
                  <rect x="285" y="70" width="25" height="25" fill="#ef4444" opacity="0.7" />
                  <rect x="320" y="70" width="25" height="25" fill="#ef4444" opacity="0.7" />
                  <rect x="355" y="70" width="25" height="25" fill="#ef4444" opacity="0.7" />

                  {/* Entanglement lines */}
                  <line x1="262" y1="60" x2="262" y2="70" stroke="#ef4444" strokeWidth="2" />
                  <line x1="297" y1="60" x2="297" y2="70" stroke="#ef4444" strokeWidth="2" />
                  <line x1="332" y1="60" x2="332" y2="70" stroke="#ef4444" strokeWidth="2" />
                  <line x1="367" y1="60" x2="367" y2="70" stroke="#ef4444" strokeWidth="2" />

                  <line x1="275" y1="47" x2="285" y2="47" stroke="#ef4444" strokeWidth="2" />
                  <line x1="310" y1="47" x2="320" y2="47" stroke="#ef4444" strokeWidth="2" />
                  <line x1="345" y1="47" x2="355" y2="47" stroke="#ef4444" strokeWidth="2" />

                  <line x1="275" y1="82" x2="285" y2="82" stroke="#ef4444" strokeWidth="2" />
                  <line x1="310" y1="82" x2="320" y2="82" stroke="#ef4444" strokeWidth="2" />
                  <line x1="345" y1="82" x2="355" y2="82" stroke="#ef4444" strokeWidth="2" />

                  {/* Diagonal dependencies */}
                  <line x1="275" y1="60" x2="285" y2="70" stroke="#ef4444" strokeWidth="1" opacity="0.5" />
                  <line x1="310" y1="60" x2="320" y2="70" stroke="#ef4444" strokeWidth="1" opacity="0.5" />
                  <line x1="345" y1="60" x2="355" y2="70" stroke="#ef4444" strokeWidth="1" opacity="0.5" />
                  <line x1="275" y1="70" x2="285" y2="60" stroke="#ef4444" strokeWidth="1" opacity="0.5" />

                  {/* Lock symbol */}
                  <rect x="300" y="48" width="20" height="15" fill="#ef4444" rx="2" />
                  <path d="M 305 48 L 305 42 Q 310 35, 315 42 L 315 48" fill="none" stroke="#ef4444" strokeWidth="2" />

                  <text x="320" y="115" textAnchor="middle" fill="#ef4444" fontSize="8">TOUCH ONE, BREAK FIVE</text>
                </svg>
                <p className="text-center text-stone-500 text-sm mt-4 font-mono">FLEXIBLE VS FROZEN</p>
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
                  <h3 className="text-xl font-bold mb-3">Pivoting doesn't require rebuilding</h3>
                  <p className="text-stone-500">
                    The org can replace components without breaking everything else. Contracts are short. Architecture is modular. What got you here doesn't have to be what gets you there.
                  </p>
                </div>

                <div className="bg-stone-100 border border-stone-300 p-6">
                  <div className="text-red-600 font-mono font-bold mb-2">SCORE 7-10</div>
                  <h3 className="text-xl font-bold mb-3">The org is committed to its current form</h3>
                  <p className="text-stone-500">
                    Changing how work gets done requires changing the org itself. Expensive, slow, and politically dangerous. Touch one thing, break five. So it doesn't happen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-black mb-8 fade-up">THE WEIGHT OF LEGACY</h2>

              <div className="border-l-4 border-red-600 pl-6 py-4 fade-up mb-6">
                <p className="text-lg text-stone-600">
                  High lock-in doesn't make transformation impossible. It makes it expensive enough that <strong className="text-stone-900">the people with authority to approve it are the same people whose power depends on things staying the same</strong>.
                </p>
              </div>

              <div className="bg-stone-100 border border-stone-200 p-6 fade-up">
                <h3 className="font-bold mb-4">THE MAINTENANCE TAX</h3>
                <p className="text-stone-500 mb-4">
                  Organizations with high structural lock-in spend 60-80% of IT budget maintaining what already exists. Not because they planned it that way. Because the existing infrastructure demands to be fed. What's left over for new capability is whatever the maintenance doesn't eat first.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white p-4">
                    <div className="text-2xl font-black text-red-600">70%</div>
                    <div className="text-xs text-stone-500">Maintenance (Particle)</div>
                  </div>
                  <div className="bg-white p-4">
                    <div className="text-2xl font-black text-stone-900">30%</div>
                    <div className="text-xs text-stone-500">Maintenance (Field)</div>
                  </div>
                </div>
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
                  <h3 className="text-stone-900 font-bold mb-4">FLEXIBLE SYSTEMS (Score 1-3)</h3>
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
                  <h3 className="text-red-600 font-bold mb-4">LOCKED-IN SYSTEMS (Score 7-10)</h3>
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
              <Link href="/gpi-framework/knowledge-location" className="border border-stone-300 px-8 py-4 text-sm font-semibold hover:border-stone-400 transition-colors text-center">
                ← Knowledge Location
              </Link>
              <Link href="/gpi-framework/talent-flow" className="bg-stone-900 text-white px-8 py-4 text-sm font-semibold hover:bg-stone-800 transition-colors text-center">
                Next: Talent Flow →
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

export default StructuralLockInPage;
