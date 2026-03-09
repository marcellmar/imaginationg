/**
 * Capital Intensity Dimension Page
 * Weight: 10%
 */

import React from 'react';
import Link from 'next/link';
import SEOHead from '../../components/SEOHead';
import Navigation from '../../components/Navigation';
import { GPISpectrum } from '../../components/gpi';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const CapitalIntensityPage = () => {
  useScrollReveal();

  const examples = {
    low: [
      { company: 'Notion', gpi: 1.5, detail: 'Purely digital. Infrastructure cost scales with revenue. No physical constraint on what to build next.' },
      { company: 'Stripe', gpi: 1.5, detail: 'Software layer on top of financial rails. The business can grow without proportional capital.' },
    ],
    high: [
      { company: 'Comcast', gpi: 6.95, detail: '$124B in revenue tied to infrastructure that takes decades and billions to replace. Broadband is the business and the constraint.' },
      { company: 'Phillips 66', gpi: 6.4, detail: '40-year refineries. Physical infrastructure priced at original investment. Unwinding it means taking losses nobody wants to authorize.' },
    ],
  };

  const diagnosticQuestions = [
    'What percentage of operating cost is maintaining existing physical assets?',
    'What would it cost to exit your current infrastructure in two years?',
    'Which strategic decisions get made to protect existing asset utilization?',
    'How much of your capex goes to new capability vs replacing what\'s aging?',
    'What does the org look like if it couldn\'t build anything physical for three years?',
  ];

  return (
    <>
      <SEOHead
        title="Capital Intensity (GPI Dimension #6) | IMAGINATION G"
        description="Capital Intensity measures ratio of physical to digital/human assets. Weight: 10%. How infrastructure-locked is your organization?"
        ogImage="/images/og-capital-intensity.svg"
      />

      <div className="min-h-screen bg-stone-50 text-stone-900">
        <Navigation currentPage="framework" />

        <section className="pt-36 pb-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto fade-up">
              <div className="mb-8">
                <Link href="/gpi-framework" className="text-stone-500 hover:text-stone-900 transition-colors text-sm">
                  GPI Framework
                </Link>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-red-600 text-white flex items-center justify-center font-black text-2xl">
                  6
                </div>
                <span className="text-xs font-mono text-stone-500 bg-stone-100 px-2 py-1">
                  10% weight
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-headline mb-6">
                CAPITAL INTENSITY<span className="text-red-600">.</span>
              </h1>

              <p className="text-xl text-stone-500 mb-8 max-w-2xl">
                How much physical infrastructure anchors the org in place. Every dollar locked in physical assets is a dollar that can't move. Every building or refinery is a bet on a specific future that gets harder to unwind every year.
              </p>

              {/* Capital Intensity Visual */}
              <div className="mb-12 p-8 bg-white border border-stone-200">
                <svg viewBox="0 0 400 120" className="w-full max-w-lg mx-auto">
                  {/* Low Intensity / Digital (left) */}
                  <text x="80" y="15" textAnchor="middle" fill="#1c1917" fontSize="10" fontWeight="bold">DIGITAL</text>

                  {/* Cloud shape */}
                  <ellipse cx="60" cy="50" rx="25" ry="15" fill="#1c1917" opacity="0.3" />
                  <ellipse cx="85" cy="45" rx="20" ry="12" fill="#1c1917" opacity="0.3" />
                  <ellipse cx="100" cy="55" rx="22" ry="14" fill="#1c1917" opacity="0.3" />

                  {/* Data flowing from cloud */}
                  <circle r="2" fill="#1c1917">
                    <animate attributeName="cy" values="65;100;65" dur="1.5s" repeatCount="indefinite" />
                    <animate attributeName="cx" values="60;60;60" dur="1.5s" repeatCount="indefinite" />
                  </circle>
                  <circle r="2" fill="#1c1917">
                    <animate attributeName="cy" values="65;100;65" dur="1.5s" begin="0.3s" repeatCount="indefinite" />
                    <animate attributeName="cx" values="80;80;80" dur="1.5s" begin="0.3s" repeatCount="indefinite" />
                  </circle>
                  <circle r="2" fill="#1c1917">
                    <animate attributeName="cy" values="65;100;65" dur="1.5s" begin="0.6s" repeatCount="indefinite" />
                    <animate attributeName="cx" values="100;100;100" dur="1.5s" begin="0.6s" repeatCount="indefinite" />
                  </circle>

                  {/* Scale up arrow */}
                  <path d="M 130 70 L 160 40 L 155 40 L 160 40 L 160 45" stroke="#1c1917" strokeWidth="2" fill="none">
                    <animate attributeName="opacity" values="0.5;1;0.5" dur="1s" repeatCount="indefinite" />
                  </path>
                  <text x="175" y="45" fill="#1c1917" fontSize="7">SCALE</text>
                  <text x="175" y="55" fill="#1c1917" fontSize="7">FREELY</text>

                  <text x="80" y="110" textAnchor="middle" fill="#1c1917" fontSize="8">$0.1x CAPITAL/REVENUE</text>

                  {/* Divider */}
                  <line x1="190" y1="20" x2="190" y2="100" stroke="#d6d3d1" strokeWidth="1" strokeDasharray="4,4" />
                  <text x="205" y="60" textAnchor="middle" fill="#d6d3d1" fontSize="10">VS</text>
                  <line x1="220" y1="20" x2="220" y2="100" stroke="#d6d3d1" strokeWidth="1" strokeDasharray="4,4" />

                  {/* High Intensity / Physical (right) */}
                  <text x="320" y="15" textAnchor="middle" fill="#ef4444" fontSize="10" fontWeight="bold">PHYSICAL</text>

                  {/* Factory/refinery shape */}
                  <rect x="245" y="50" width="40" height="40" fill="#ef4444" opacity="0.7" />
                  <rect x="250" y="35" width="10" height="15" fill="#ef4444" opacity="0.7" />
                  <rect x="265" y="30" width="8" height="20" fill="#ef4444" opacity="0.7" />
                  <rect x="278" y="40" width="5" height="10" fill="#ef4444" opacity="0.7" />

                  {/* Smoke/emissions */}
                  <circle cx="255" cy="30" r="4" fill="#ef4444" opacity="0.3">
                    <animate attributeName="cy" values="30;20;30" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.3;0.1;0.3" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="269" cy="25" r="3" fill="#ef4444" opacity="0.3">
                    <animate attributeName="cy" values="25;15;25" dur="2.5s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.3;0.1;0.3" dur="2.5s" repeatCount="indefinite" />
                  </circle>

                  {/* Another building */}
                  <rect x="300" y="55" width="35" height="35" fill="#ef4444" opacity="0.7" />
                  <rect x="310" y="45" width="15" height="10" fill="#ef4444" opacity="0.7" />

                  {/* Pipeline */}
                  <rect x="340" y="65" width="50" height="8" fill="#ef4444" opacity="0.5" />
                  <circle cx="395" cy="69" r="6" fill="#ef4444" opacity="0.7" />

                  {/* Anchor symbol */}
                  <path d="M 365 50 L 365 40 M 360 40 L 370 40 M 365 50 Q 355 55, 365 55 Q 375 55, 365 50" stroke="#ef4444" strokeWidth="2" fill="none" />

                  <text x="320" y="110" textAnchor="middle" fill="#ef4444" fontSize="8">$5x CAPITAL/REVENUE</text>
                </svg>
                <p className="text-center text-stone-500 text-sm mt-4 font-mono">WEIGHTLESS VS ANCHORED</p>
              </div>

              <div className="max-w-md mx-auto">
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
                  <h3 className="text-xl font-bold mb-3">Can pivot without selling assets</h3>
                  <p className="text-stone-500">
                    Minimal physical footprint. Scaling doesn't require building anything new. The org's commitments live in code and contracts, not concrete.
                  </p>
                </div>

                <div className="bg-stone-100 border border-stone-300 p-6">
                  <div className="text-red-600 font-mono font-bold mb-2">SCORE 7-10</div>
                  <h3 className="text-xl font-bold mb-3">The infrastructure makes decisions</h3>
                  <p className="text-stone-500">
                    Executives are measured on returns from capital already deployed. Changing direction means writing down assets, which means admitting the prior bet was wrong. So the prior bet runs until it can't.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-black mb-8 fade-up">THE GRAVITY PROBLEM</h2>

              <div className="border-l-4 border-red-600 pl-6 py-4 fade-up mb-6">
                <p className="text-lg text-stone-600">
                  Capital intensity determines how fast you can change direction. Not because you can't see where you need to go. Because you've spent decades building <strong className="text-stone-900">the road that goes the other way</strong>.
                </p>
              </div>

              <div className="bg-stone-100 border border-stone-200 p-6 fade-up mb-6">
                <h3 className="font-bold mb-4">THE STRANDED ASSET PROBLEM</h3>
                <p className="text-stone-500">
                  When assets are worth more running than written down, the org optimizes for utilization. Rational at the asset level. At the org level it means strategy is shaped by what you already built, not what the market needs. The asset starts making the decisions. You're along for the ride.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 fade-up-stagger">
                <div className="bg-stone-100 border border-stone-200 p-4">
                  <div className="text-2xl font-black text-stone-900 mb-2">0.1x</div>
                  <p className="text-sm text-stone-500">Capital/revenue ratio for software companies</p>
                </div>
                <div className="bg-stone-100 border border-stone-200 p-4">
                  <div className="text-2xl font-black text-red-600 mb-2">3-5x</div>
                  <p className="text-sm text-stone-500">Capital/revenue ratio for oil refiners</p>
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
                  <h3 className="text-stone-900 font-bold mb-4">LOW INTENSITY (Score 1-3)</h3>
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
                  <h3 className="text-red-600 font-bold mb-4">HIGH INTENSITY (Score 7-10)</h3>
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
              <Link href="/gpi-framework/talent-flow" className="bg-stone-900 text-white hover:bg-stone-800 px-8 py-4 text-lg font-black transition-colors text-center">
                Talent Flow
              </Link>
              <Link href="/gpi-framework/knowledge-velocity" className="bg-stone-900 text-white hover:bg-stone-800 px-8 py-4 text-lg font-black transition-colors text-center">
                Next: Knowledge Velocity
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

export default CapitalIntensityPage;
