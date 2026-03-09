/**
 * Knowledge Location Dimension Page
 * Weight: 15%
 */

import React from 'react';
import Link from 'next/link';
import SEOHead from '../../components/SEOHead';
import Navigation from '../../components/Navigation';
import { GPISpectrum } from '../../components/gpi';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const KnowledgeLocationPage = () => {
  useScrollReveal();

  const examples = {
    low: [
      { company: 'GitLab', gpi: 1.8, detail: 'Fully remote, fully documented. The handbook is the org. New hires are productive in days because institutional knowledge is accessible, not personal.' },
      { company: 'Notion', gpi: 1.8, detail: 'Docs are the default communication layer. If it\'s not written down, it didn\'t happen.' },
    ],
    high: [
      { company: 'Epic Systems', gpi: 7.3, detail: 'Proprietary stack with years of institutional knowledge baked in. Implementation takes months because knowledge transfer is the product.' },
      { company: 'Comcast', gpi: 6.95, detail: 'Siloed across business units. Knowledge lives in relationships and org charts, not systems. Each unit operates as its own black box.' },
    ],
  };

  const diagnosticQuestions = [
    'What happens operationally when your most experienced person is unavailable for a week?',
    'Can a new hire find the answer to a process question without asking someone?',
    'How many things work because of a specific person rather than a documented process?',
    'Does the org document decisions or just outcomes?',
    'How much time do veterans spend answering the same questions repeatedly?',
  ];

  return (
    <>
      <SEOHead
        title="Knowledge Location (GPI Dimension #2) | IMAGINATION G"
        description="Knowledge Location measures where operational knowledge resides. Weight: 15%. Is it distributed and accessible, or trapped in people's heads?"
        ogImage="/images/og-knowledge-location.svg"
      />

      <div className="min-h-screen bg-stone-50 text-stone-900">
        <Navigation currentPage="framework" />

        <section className="pt-36 pb-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto fade-up">
              <div className="mb-8 text-left">
                <Link href="/gpi-framework" className="text-stone-500 hover:text-stone-900 transition-colors text-sm">
                  ← GPI Framework
                </Link>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-red-600 text-white flex items-center justify-center font-black text-2xl">
                  2
                </div>
                <span className="text-xs font-mono text-stone-500 bg-stone-100 px-2 py-1 rounded-full">
                  15% weight
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-headline mb-6">
                KNOWLEDGE LOCATION<span className="text-red-600">.</span>
              </h1>

              <p className="text-xl text-stone-500 mb-8 max-w-2xl">
                Where operational knowledge actually lives. Documented and findable, or in someone's head and leaving with them when they go.
              </p>

              {/* Knowledge Location Visual */}
              <div className="mb-12 p-8 bg-white border border-stone-200">
                <svg viewBox="0 0 400 120" className="w-full max-w-lg mx-auto">
                  {/* Distributed (left) */}
                  <text x="80" y="15" textAnchor="middle" fill="#1c1917" fontSize="10" fontWeight="bold">DISTRIBUTED</text>

                  {/* Connected nodes */}
                  <circle cx="50" cy="45" r="10" fill="#1c1917" opacity="0.7">
                    <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="110" cy="35" r="10" fill="#1c1917" opacity="0.7">
                    <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2s" begin="0.3s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="80" cy="75" r="10" fill="#1c1917" opacity="0.7">
                    <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2s" begin="0.6s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="50" cy="95" r="10" fill="#1c1917" opacity="0.7">
                    <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2s" begin="0.9s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="110" cy="95" r="10" fill="#1c1917" opacity="0.7">
                    <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2s" begin="1.2s" repeatCount="indefinite" />
                  </circle>

                  {/* Connections */}
                  <line x1="50" y1="45" x2="110" y2="35" stroke="#1c1917" strokeWidth="1" opacity="0.5" />
                  <line x1="50" y1="45" x2="80" y2="75" stroke="#1c1917" strokeWidth="1" opacity="0.5" />
                  <line x1="110" y1="35" x2="80" y2="75" stroke="#1c1917" strokeWidth="1" opacity="0.5" />
                  <line x1="80" y1="75" x2="50" y2="95" stroke="#1c1917" strokeWidth="1" opacity="0.5" />
                  <line x1="80" y1="75" x2="110" y2="95" stroke="#1c1917" strokeWidth="1" opacity="0.5" />
                  <line x1="50" y1="95" x2="110" y2="95" stroke="#1c1917" strokeWidth="1" opacity="0.5" />
                  <line x1="50" y1="45" x2="50" y2="95" stroke="#1c1917" strokeWidth="1" opacity="0.5" />
                  <line x1="110" y1="35" x2="110" y2="95" stroke="#1c1917" strokeWidth="1" opacity="0.5" />

                  {/* Data flowing */}
                  <circle r="3" fill="#1c1917">
                    <animateMotion dur="2s" repeatCount="indefinite" path="M50,45 L110,35 L80,75 L50,95 L110,95 L80,75 L50,45" />
                  </circle>

                  <text x="80" y="115" textAnchor="middle" fill="#1c1917" fontSize="8">EVERYONE KNOWS</text>

                  {/* Divider */}
                  <line x1="165" y1="20" x2="165" y2="110" stroke="#d6d3d1" strokeWidth="1" strokeDasharray="4,4" />
                  <text x="200" y="70" textAnchor="middle" fill="#d6d3d1" fontSize="10">VS</text>
                  <line x1="235" y1="20" x2="235" y2="110" stroke="#d6d3d1" strokeWidth="1" strokeDasharray="4,4" />

                  {/* Centralized (right) */}
                  <text x="320" y="15" textAnchor="middle" fill="#ef4444" fontSize="10" fontWeight="bold">CENTRALIZED</text>

                  {/* Central brain/black box */}
                  <rect x="295" y="45" width="50" height="40" fill="#ef4444" opacity="0.8" rx="4">
                    <animate attributeName="opacity" values="0.6;0.9;0.6" dur="3s" repeatCount="indefinite" />
                  </rect>
                  <text x="320" y="62" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">TRIBAL</text>
                  <text x="320" y="74" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">KNOWLEDGE</text>

                  {/* Disconnected people */}
                  <circle cx="270" cy="35" r="6" fill="#ef4444" opacity="0.3" />
                  <line x1="270" y1="35" x2="295" y2="55" stroke="#ef4444" strokeWidth="1" opacity="0.2" strokeDasharray="2,2" />

                  <circle cx="370" cy="35" r="6" fill="#ef4444" opacity="0.3" />
                  <line x1="370" y1="35" x2="345" y2="55" stroke="#ef4444" strokeWidth="1" opacity="0.2" strokeDasharray="2,2" />

                  <circle cx="270" cy="95" r="6" fill="#ef4444" opacity="0.3" />
                  <line x1="270" y1="95" x2="295" y2="75" stroke="#ef4444" strokeWidth="1" opacity="0.2" strokeDasharray="2,2" />

                  <circle cx="370" cy="95" r="6" fill="#ef4444" opacity="0.3" />
                  <line x1="370" y1="95" x2="345" y2="75" stroke="#ef4444" strokeWidth="1" opacity="0.2" strokeDasharray="2,2" />

                  <text x="270" y="50" textAnchor="middle" fill="#ef4444" fontSize="6">?</text>
                  <text x="370" y="50" textAnchor="middle" fill="#ef4444" fontSize="6">?</text>
                  <text x="270" y="82" textAnchor="middle" fill="#ef4444" fontSize="6">?</text>
                  <text x="370" y="82" textAnchor="middle" fill="#ef4444" fontSize="6">?</text>

                  <text x="320" y="115" textAnchor="middle" fill="#ef4444" fontSize="8">ASK STEVE</text>
                </svg>
                <p className="text-center text-stone-500 text-sm mt-4 font-mono">CODIFIED VS TRIBAL</p>
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
                  <h3 className="text-xl font-bold mb-3">Findable without asking</h3>
                  <p className="text-stone-500">
                    A new hire can find most answers without asking a veteran. Processes are written down because writing them down is how the org thinks. The org functions when the expert is on vacation.
                  </p>
                </div>

                <div className="bg-stone-100 border border-stone-300 p-6">
                  <div className="text-red-600 font-mono font-bold mb-2">SCORE 7-10</div>
                  <h3 className="text-xl font-bold mb-3">Ask Steve</h3>
                  <p className="text-stone-500">
                    Knowledge lives in relationships and relationships have single points of failure. When the expert leaves, the knowledge goes with them. Onboarding isn't a process. It's a relationship you have to earn.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-black mb-8 fade-up">THE TRIBAL TAX</h2>

              <div className="border-l-4 border-red-600 pl-6 py-4 fade-up mb-6">
                <p className="text-lg text-stone-600">
                  Tribal knowledge looks like <strong className="text-stone-900">institutional wisdom</strong> until someone retires. Then it looks like starting over.
                </p>
              </div>

              <div className="bg-stone-100 border border-stone-200 p-6 fade-up mb-6">
                <h3 className="font-bold mb-4">THE PRODUCTIVITY ILLUSION</h3>
                <p className="text-stone-500">
                  Teams running on tribal knowledge look efficient because their veterans move fast. New people take months to get useful. That onboarding cost is invisible because it's distributed across hundreds of conversations. Document it and the cost becomes obvious. Don't, and you pay it forever. Most orgs choose not to see it.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 fade-up-stagger">
                <div className="bg-stone-100 border border-stone-200 p-4">
                  <div className="text-2xl font-black text-stone-900 mb-2">Days</div>
                  <p className="text-sm text-stone-500">Time to productivity in documented orgs</p>
                </div>
                <div className="bg-stone-100 border border-stone-200 p-4">
                  <div className="text-2xl font-black text-red-600 mb-2">Months</div>
                  <p className="text-sm text-stone-500">Time to productivity in tribal knowledge orgs</p>
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
                  <h3 className="text-stone-900 font-bold mb-4">DISTRIBUTED KNOWLEDGE (Score 1-3)</h3>
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
                  <h3 className="text-red-600 font-bold mb-4">HOARDED KNOWLEDGE (Score 7-10)</h3>
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
              <Link href="/gpi-framework/error-correction" className="border border-stone-300 px-8 py-4 text-sm font-semibold hover:border-stone-400 transition-colors text-center">
                ← Back to Error Correction
              </Link>
              <Link href="/gpi-framework/structural-lock-in" className="bg-stone-900 text-white px-8 py-4 text-sm font-semibold hover:bg-stone-800 transition-colors text-center">
                Next: Structural Lock-in →
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

export default KnowledgeLocationPage;
