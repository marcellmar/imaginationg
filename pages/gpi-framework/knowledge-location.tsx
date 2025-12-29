/**
 * Knowledge Location Dimension Page
 * Weight: 15%
 */

import React from 'react';
import Link from 'next/link';
import SEOHead from '../../components/SEOHead';
import Navigation from '../../components/Navigation';
import { GPISpectrum } from '../../components/gpi';

const KnowledgeLocationPage = () => {
  const examples = {
    low: [
      { company: 'GitLab', gpi: 1.8, detail: 'Everything in the public handbook. New hires productive in days.' },
      { company: 'Notion', gpi: 1.8, detail: 'Documentation-first culture. Knowledge is the product.' },
    ],
    high: [
      { company: 'Epic Systems', gpi: 7.3, detail: 'Proprietary systems. Training takes months. Knowledge is moat.' },
      { company: 'Construction', gpi: 8.0, detail: 'Apprenticeship model. Knowledge transfers person-to-person.' },
    ],
  };

  const diagnosticQuestions = [
    'Can new hires find answers without asking veterans?',
    'Is operational knowledge documented or tribal?',
    'What happens when key people leave?',
    'Can you onboard someone without dedicated training?',
    'Is information shared across teams or hoarded?',
  ];

  return (
    <>
      <SEOHead
        title="Knowledge Location (GPI Dimension #2) | IMAGINATION G"
        description="Knowledge Location measures where operational knowledge resides. Weight: 15%. Is it distributed and accessible, or trapped in people's heads?"
        ogImage="/images/og-knowledge-location.svg"
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
                  2
                </div>
                <span className="text-xs font-mono text-zinc-500 bg-zinc-900 px-2 py-1 rounded">
                  15% weight
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-black mb-6">
                KNOWLEDGE LOCATION<span className="text-red-600">.</span>
              </h1>

              <p className="text-xl text-zinc-400 mb-8 max-w-2xl">
                Where operational knowledge resides. Is it distributed and codified,
                or trapped in institutional black boxes?
              </p>

              {/* Knowledge Location Visual */}
              <div className="mb-12 p-8 bg-zinc-950 border border-zinc-800 rounded-xl">
                <svg viewBox="0 0 400 120" className="w-full max-w-lg mx-auto">
                  {/* Distributed (left) */}
                  <text x="80" y="15" textAnchor="middle" fill="#22c55e" fontSize="10" fontWeight="bold">DISTRIBUTED</text>

                  {/* Connected nodes */}
                  <circle cx="50" cy="45" r="10" fill="#22c55e" opacity="0.7">
                    <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="110" cy="35" r="10" fill="#22c55e" opacity="0.7">
                    <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2s" begin="0.3s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="80" cy="75" r="10" fill="#22c55e" opacity="0.7">
                    <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2s" begin="0.6s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="50" cy="95" r="10" fill="#22c55e" opacity="0.7">
                    <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2s" begin="0.9s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="110" cy="95" r="10" fill="#22c55e" opacity="0.7">
                    <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2s" begin="1.2s" repeatCount="indefinite" />
                  </circle>

                  {/* Connections */}
                  <line x1="50" y1="45" x2="110" y2="35" stroke="#22c55e" strokeWidth="1" opacity="0.5" />
                  <line x1="50" y1="45" x2="80" y2="75" stroke="#22c55e" strokeWidth="1" opacity="0.5" />
                  <line x1="110" y1="35" x2="80" y2="75" stroke="#22c55e" strokeWidth="1" opacity="0.5" />
                  <line x1="80" y1="75" x2="50" y2="95" stroke="#22c55e" strokeWidth="1" opacity="0.5" />
                  <line x1="80" y1="75" x2="110" y2="95" stroke="#22c55e" strokeWidth="1" opacity="0.5" />
                  <line x1="50" y1="95" x2="110" y2="95" stroke="#22c55e" strokeWidth="1" opacity="0.5" />
                  <line x1="50" y1="45" x2="50" y2="95" stroke="#22c55e" strokeWidth="1" opacity="0.5" />
                  <line x1="110" y1="35" x2="110" y2="95" stroke="#22c55e" strokeWidth="1" opacity="0.5" />

                  {/* Data flowing */}
                  <circle r="3" fill="#22c55e">
                    <animateMotion dur="2s" repeatCount="indefinite" path="M50,45 L110,35 L80,75 L50,95 L110,95 L80,75 L50,45" />
                  </circle>

                  <text x="80" y="115" textAnchor="middle" fill="#22c55e" fontSize="8">EVERYONE KNOWS</text>

                  {/* Divider */}
                  <line x1="165" y1="20" x2="165" y2="110" stroke="#3f3f46" strokeWidth="1" strokeDasharray="4,4" />
                  <text x="200" y="70" textAnchor="middle" fill="#3f3f46" fontSize="10">VS</text>
                  <line x1="235" y1="20" x2="235" y2="110" stroke="#3f3f46" strokeWidth="1" strokeDasharray="4,4" />

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
                <p className="text-center text-zinc-500 text-sm mt-4 font-mono">CODIFIED VS TRIBAL</p>
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
                  <h3 className="text-xl font-bold mb-3">Distributed / Codified</h3>
                  <p className="text-zinc-400">
                    Knowledge is documented, searchable, and accessible. New people can find
                    answers. The organization functions even when key people leave.
                  </p>
                </div>

                <div className="bg-red-950/20 border border-red-900/50 rounded-xl p-6">
                  <div className="text-red-500 font-mono font-bold mb-2">SCORE 7-10</div>
                  <h3 className="text-xl font-bold mb-3">Institutional Black Box</h3>
                  <p className="text-zinc-400">
                    Knowledge lives in people's heads. Veterans are irreplaceable. New hires
                    take months to become productive. Departure = knowledge loss.
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
                    <strong className="text-white">"Knowledge is power"</strong> is the problem.
                    When people hoard knowledge, the organization becomes hostage to individuals.
                    Bus factor of 1 = organizational fragility.
                  </p>
                </div>

                <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6">
                  <h3 className="font-bold mb-4">THE DOCUMENTATION PARADOX</h3>
                  <p className="text-zinc-400">
                    Organizations that don't document say they're "too busy." But the busyness
                    comes from answering the same questions repeatedly, onboarding the same
                    skills over and over, and rebuilding tribal knowledge after every departure.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-4">
                    <div className="text-2xl font-black text-green-500 mb-2">Days</div>
                    <p className="text-sm text-zinc-500">Time to productivity in documented orgs</p>
                  </div>
                  <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-4">
                    <div className="text-2xl font-black text-red-500 mb-2">Months</div>
                    <p className="text-sm text-zinc-500">Time to productivity in tribal knowledge orgs</p>
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
                  <h3 className="text-green-500 font-bold mb-4">DISTRIBUTED KNOWLEDGE (Score 1-3)</h3>
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
                  <h3 className="text-red-500 font-bold mb-4">HOARDED KNOWLEDGE (Score 7-10)</h3>
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
                <Link href="/actions/knowledge-flow" className="bg-black border border-zinc-800 rounded-xl p-6 hover:border-red-600 transition-colors">
                  <h3 className="font-bold text-xl mb-2">KNOWLEDGE FLOW</h3>
                  <p className="text-zinc-500 text-sm">
                    Free DIY playbook. Document decisions, pair new with experienced, create runbooks.
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
              <Link href="/gpi-framework/error-correction" className="border border-zinc-700 px-8 py-4 text-lg font-black hover:border-zinc-500 transition-colors text-center">
                ← ERROR CORRECTION
              </Link>
              <Link href="/gpi-framework/structural-lock-in" className="bg-red-600 px-8 py-4 text-lg font-black hover:bg-red-700 transition-colors text-center">
                NEXT: STRUCTURAL LOCK-IN →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default KnowledgeLocationPage;
