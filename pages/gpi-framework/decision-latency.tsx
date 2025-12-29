/**
 * Decision Latency Dimension Page
 * Weight: 20% - The highest weighted dimension
 */

import React from 'react';
import Link from 'next/link';
import SEOHead from '../../components/SEOHead';
import Navigation from '../../components/Navigation';
import { GPISpectrum } from '../../components/gpi';

const DecisionLatencyPage = () => {
  const examples = {
    low: [
      { company: 'Stripe', gpi: 1.5, detail: 'API decisions ship same-day. No committee reviews for standard changes.' },
      { company: 'Spotify', gpi: 2.5, detail: 'Squad autonomy means most decisions happen at team level.' },
    ],
    high: [
      { company: 'Exxon Mobil', gpi: 6.8, detail: 'Multi-year capital allocation cycles. Board approval for major investments.' },
      { company: 'Government', gpi: 9.0, detail: 'Legislative cycles, budget years, regulatory review periods.' },
    ],
  };

  const diagnosticQuestions = [
    'Can a team ship a feature without executive approval?',
    'How long does budget reallocation take?',
    'Can decisions be reversed within the same quarter?',
    'Do routine decisions require multiple sign-offs?',
    'Is there a fast-track process for urgent decisions?',
  ];

  return (
    <>
      <SEOHead
        title="Decision Latency (GPI Dimension #1) | IMAGINATION G"
        description="Decision Latency measures time from signal to decision to action. Weight: 20%. The most impactful dimension in the GPI framework."
        ogImage="/images/og-decision-latency.svg"
      />

      <div className="min-h-screen bg-black text-white">
        <Navigation currentPage="framework" />

        {/* Hero */}
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
                  1
                </div>
                <div>
                  <span className="text-xs font-mono text-zinc-500 bg-zinc-900 px-2 py-1 rounded">
                    20% weight
                  </span>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-black mb-6">
                DECISION LATENCY<span className="text-red-600">.</span>
              </h1>

              <p className="text-xl text-zinc-400 mb-8 max-w-2xl">
                Time from signal to decision to action. How fast can your organization
                recognize a need and respond to it?
              </p>

              {/* Decision Timeline Visual */}
              <div className="mb-12 p-8 bg-zinc-950 border border-zinc-800 rounded-xl">
                <svg viewBox="0 0 400 120" className="w-full max-w-lg mx-auto">
                  {/* Fast path (top) */}
                  <text x="10" y="20" fill="#22c55e" fontSize="10" fontWeight="bold">FIELD STATE</text>

                  {/* Signal */}
                  <circle cx="50" cy="45" r="12" fill="#22c55e" opacity="0.8">
                    <animate attributeName="r" values="10;14;10" dur="1s" repeatCount="indefinite" />
                  </circle>
                  <text x="50" y="48" textAnchor="middle" fill="black" fontSize="8" fontWeight="bold">!</text>

                  {/* Fast arrow */}
                  <line x1="65" y1="45" x2="150" y2="45" stroke="#22c55e" strokeWidth="3" strokeDasharray="4,2">
                    <animate attributeName="stroke-dashoffset" values="0;-12" dur="0.5s" repeatCount="indefinite" />
                  </line>

                  {/* Decision */}
                  <rect x="155" y="32" width="26" height="26" fill="#22c55e" opacity="0.8" />
                  <text x="168" y="48" textAnchor="middle" fill="black" fontSize="8" fontWeight="bold">D</text>

                  {/* Fast arrow */}
                  <line x1="185" y1="45" x2="270" y2="45" stroke="#22c55e" strokeWidth="3" strokeDasharray="4,2">
                    <animate attributeName="stroke-dashoffset" values="0;-12" dur="0.5s" repeatCount="indefinite" />
                  </line>

                  {/* Action */}
                  <polygon points="290,45 320,30 350,45 320,60" fill="#22c55e" opacity="0.8">
                    <animate attributeName="opacity" values="0.8;1;0.8" dur="0.8s" repeatCount="indefinite" />
                  </polygon>
                  <text x="320" y="49" textAnchor="middle" fill="black" fontSize="8" fontWeight="bold">GO</text>

                  <text x="380" y="48" fill="#22c55e" fontSize="10" fontWeight="bold">Hours</text>

                  {/* Slow path (bottom) */}
                  <text x="10" y="80" fill="#ef4444" fontSize="10" fontWeight="bold">PARTICLE STATE</text>

                  {/* Signal */}
                  <circle cx="50" cy="100" r="12" fill="#ef4444" opacity="0.5">
                    <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <text x="50" y="103" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">!</text>

                  {/* Slow arrow with barriers */}
                  <line x1="65" y1="100" x2="90" y2="100" stroke="#ef4444" strokeWidth="2" opacity="0.5" />
                  <rect x="90" y="94" width="4" height="12" fill="#ef4444" opacity="0.7" />
                  <line x1="94" y1="100" x2="110" y2="100" stroke="#ef4444" strokeWidth="2" opacity="0.5" />
                  <rect x="110" y="94" width="4" height="12" fill="#ef4444" opacity="0.7" />
                  <line x1="114" y1="100" x2="130" y2="100" stroke="#ef4444" strokeWidth="2" opacity="0.5" />
                  <rect x="130" y="94" width="4" height="12" fill="#ef4444" opacity="0.7" />
                  <line x1="134" y1="100" x2="155" y2="100" stroke="#ef4444" strokeWidth="2" opacity="0.5" />

                  {/* Decision with waiting */}
                  <rect x="155" y="87" width="26" height="26" fill="#ef4444" opacity="0.5" stroke="#ef4444" strokeWidth="2" strokeDasharray="3,3">
                    <animate attributeName="stroke-dashoffset" values="0;-6" dur="2s" repeatCount="indefinite" />
                  </rect>
                  <text x="168" y="103" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">?</text>

                  {/* More barriers */}
                  <line x1="185" y1="100" x2="200" y2="100" stroke="#ef4444" strokeWidth="2" opacity="0.5" />
                  <rect x="200" y="94" width="4" height="12" fill="#ef4444" opacity="0.7" />
                  <line x1="204" y1="100" x2="220" y2="100" stroke="#ef4444" strokeWidth="2" opacity="0.5" />
                  <rect x="220" y="94" width="4" height="12" fill="#ef4444" opacity="0.7" />
                  <line x1="224" y1="100" x2="240" y2="100" stroke="#ef4444" strokeWidth="2" opacity="0.5" />
                  <rect x="240" y="94" width="4" height="12" fill="#ef4444" opacity="0.7" />
                  <line x1="244" y1="100" x2="260" y2="100" stroke="#ef4444" strokeWidth="2" opacity="0.5" />
                  <rect x="260" y="94" width="4" height="12" fill="#ef4444" opacity="0.7" />
                  <line x1="264" y1="100" x2="290" y2="100" stroke="#ef4444" strokeWidth="2" opacity="0.5" />

                  {/* Delayed Action */}
                  <polygon points="290,100 320,85 350,100 320,115" fill="#ef4444" opacity="0.3" stroke="#ef4444" strokeDasharray="3,3" />
                  <text x="320" y="104" textAnchor="middle" fill="#ef4444" fontSize="7" fontWeight="bold">WAIT</text>

                  <text x="380" y="103" fill="#ef4444" fontSize="10" fontWeight="bold">Months</text>
                </svg>
                <p className="text-center text-zinc-500 text-sm mt-4 font-mono">SIGNAL → DECISION → ACTION</p>
              </div>

              <div className="max-w-md">
                <GPISpectrum score={5.0} size="lg" showMarker={false} />
              </div>
            </div>
          </div>
        </section>

        {/* Scale */}
        <section className="py-16 px-6 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-black mb-8">THE SCALE</h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-green-950/20 border border-green-900/50 rounded-xl p-6">
                  <div className="text-green-500 font-mono font-bold mb-2">SCORE 1-3</div>
                  <h3 className="text-xl font-bold mb-3">Real-time / Continuous</h3>
                  <p className="text-zinc-400">
                    Decisions happen in hours to days. Authority is distributed. Most choices
                    don't require executive approval. Teams are empowered to act on local
                    information without escalation.
                  </p>
                </div>

                <div className="bg-red-950/20 border border-red-900/50 rounded-xl p-6">
                  <div className="text-red-500 font-mono font-bold mb-2">SCORE 7-10</div>
                  <h3 className="text-xl font-bold mb-3">Annual / Generational</h3>
                  <p className="text-zinc-400">
                    Decisions take months to years. Budget cycles, committee reviews, and
                    stakeholder alignment create massive latency. By the time you decide,
                    the opportunity has often passed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why It Matters */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-black mb-8">WHY 20% WEIGHT?</h2>

              <div className="space-y-6">
                <p className="text-lg text-zinc-300">
                  Decision Latency is the <strong className="text-white">metabolic rate</strong> of
                  the organization. It determines how fast everything else can move.
                </p>

                <div className="border-l-4 border-red-600 pl-6 py-4">
                  <p className="text-zinc-400">
                    You can have brilliant people, perfect information, and flawless processes.
                    But if decisions take six months, you're still moving at six-month speed.
                    Decision Latency is the ceiling on organizational velocity.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-4">
                    <div className="text-3xl font-black text-green-500 mb-2">3x</div>
                    <p className="text-sm text-zinc-500">Faster iteration cycles in field-state orgs</p>
                  </div>
                  <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-4">
                    <div className="text-3xl font-black text-yellow-500 mb-2">6mo</div>
                    <p className="text-sm text-zinc-500">Average budget reallocation time in particle state</p>
                  </div>
                  <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-4">
                    <div className="text-3xl font-black text-red-500 mb-2">80%</div>
                    <p className="text-sm text-zinc-500">Of slow decisions are process, not analysis</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Examples */}
        <section className="py-16 px-6 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-black mb-8">EXAMPLES</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-green-500 font-bold mb-4">LOW LATENCY (Score 1-3)</h3>
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
                  <h3 className="text-red-500 font-bold mb-4">HIGH LATENCY (Score 7-10)</h3>
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

        {/* Diagnostic Questions */}
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

              <div className="mt-8 p-6 bg-zinc-950 border border-zinc-800 rounded-xl">
                <p className="text-zinc-400">
                  <strong className="text-white">Scoring:</strong> If most answers suggest
                  fast, autonomous decision-making, score 1-3. If most answers suggest
                  multi-layered approval and long timelines, score 7-10.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Action Guide */}
        <section className="py-16 px-6 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-black mb-8">ACTION GUIDE FOR THIS DIMENSION</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <Link href="/actions/decision-speed" className="bg-black border border-zinc-800 rounded-xl p-6 hover:border-red-600 transition-colors">
                  <h3 className="font-bold text-xl mb-2">DECISION SPEED</h3>
                  <p className="text-zinc-500 text-sm">
                    Free DIY playbook. Create decision rights matrix, force binary framing, push decisions down.
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

        {/* Navigation */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between gap-6">
              <Link
                href="/gpi-framework"
                className="border border-zinc-700 px-8 py-4 text-lg font-black hover:border-zinc-500 transition-colors text-center"
              >
                ← BACK TO FRAMEWORK
              </Link>
              <Link
                href="/gpi-framework/error-correction"
                className="bg-red-600 px-8 py-4 text-lg font-black hover:bg-red-700 transition-colors text-center"
              >
                NEXT: ERROR CORRECTION →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DecisionLatencyPage;
