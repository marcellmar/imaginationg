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
      { company: 'Stripe', gpi: 1.5, detail: 'API changes ship in hours. Standard decisions don\'t require committee review. Authority is distributed by design.' },
      { company: 'Spotify', gpi: 2.5, detail: 'Squad model means most decisions never leave the team. Escalation is the exception, not the default.' },
    ],
    high: [
      { company: 'Comcast', gpi: 6.95, detail: '33% family voting control since 2002. 894 executives in the org. Decisions travel through all of it before anything moves.' },
      { company: 'WBD', gpi: 7.4, detail: 'Merger integration locked leadership into quarterly budget cycles. Strategic calls take months to finalize.' },
    ],
  };

  const diagnosticQuestions = [
    'How many people have to approve a budget shift under $50K?',
    'When did you last change something significant without a project kickoff?',
    'How long does it take to kill a failing initiative?',
    'Who can say yes without asking someone else first?',
    'Are urgent decisions faster, or do they still follow the same path?',
  ];

  return (
    <>
      <SEOHead
        title="Decision Latency (GPI Dimension #1) | IMAGINATION G"
        description="Decision Latency measures time from signal to decision to action. Weight: 20%. The most impactful dimension in the GPI framework."
        ogImage="/images/og-decision-latency.svg"
      />

      <div className="min-h-screen bg-stone-50 text-stone-900">
        <Navigation currentPage="framework" />

        {/* Hero */}
        <section className="pt-24 pb-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <Link href="/gpi-framework" className="text-stone-500 hover:text-stone-900 transition-colors text-sm">
                  ← GPI Framework
                </Link>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-red-600 text-white flex items-center justify-center font-black text-2xl rounded">
                  1
                </div>
                <div>
                  <span className="text-xs font-mono text-stone-500 bg-stone-100 px-2 py-1 rounded">
                    20% weight
                  </span>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-black mb-6">
                DECISION LATENCY<span className="text-red-600">.</span>
              </h1>

              <p className="text-xl text-stone-500 mb-8 max-w-2xl">
                How fast the org moves from "we need to decide" to decided. Every layer between signal and action is a tax. Most orgs don't know how much they're paying.
              </p>

              {/* Decision Timeline Visual */}
              <div className="mb-12 p-8 bg-white border border-stone-200 rounded-xl">
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
                <p className="text-center text-stone-500 text-sm mt-4 font-mono">SIGNAL → DECISION → ACTION</p>
              </div>

              <div className="max-w-md">
                <GPISpectrum score={5.0} size="lg" showMarker={false} />
              </div>
            </div>
          </div>
        </section>

        {/* Scale */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-black mb-8">THE SCALE</h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-green-950/20 border border-green-900/50 rounded-xl p-6">
                  <div className="text-green-500 font-mono font-bold mb-2">SCORE 1-3</div>
                  <h3 className="text-xl font-bold mb-3">Decisions happen near the work</h3>
                  <p className="text-stone-500">
                    Authority sits close to the problem. Teams decide without escalating. Budget moves in days, not quarters. Nobody waits for a meeting to fix an obvious problem.
                  </p>
                </div>

                <div className="bg-red-950/20 border border-red-900/50 rounded-xl p-6">
                  <div className="text-red-500 font-mono font-bold mb-2">SCORE 7-10</div>
                  <h3 className="text-xl font-bold mb-3">Decisions travel up and down</h3>
                  <p className="text-stone-500">
                    Decisions go upward to people far from the work, then back down. By the time approval lands, the context has shifted. The org doesn't move slowly on purpose. It built a structure that can't do anything else.
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
              <h2 className="text-2xl font-black mb-8">THE CEILING</h2>

              <div className="space-y-6">
                <p className="text-lg text-stone-600">
                  Decision Latency is the <strong className="text-stone-900">metabolic rate</strong> of the organization. Speed everything else can move at is capped by how fast this one thing moves.
                </p>

                <div className="border-l-4 border-red-600 pl-6 py-4">
                  <p className="text-stone-500">
                    Each sign-off adds time without adding value. A decision that needs five approvals doesn't get five times better. It gets five times slower. Most of the cost isn't the delay itself, it's what doesn't happen while you're waiting.
                  </p>
                </div>

                <div className="bg-stone-100 border border-stone-200 rounded-xl p-6">
                  <h3 className="font-bold mb-4">THE APPROVAL CHAIN TAX</h3>
                  <p className="text-stone-500">
                    Approval chains don't exist to slow things down. They exist because someone, at some point, made a mistake and added a checkpoint. Then someone else made a different mistake and added another one. The checkpoints accumulate. The mistakes they were designed to prevent become rare. The latency becomes permanent.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-stone-100 border border-stone-200 rounded-lg p-4">
                    <div className="text-3xl font-black text-green-500 mb-2">3x</div>
                    <p className="text-sm text-stone-500">Faster iteration cycles in field-state orgs</p>
                  </div>
                  <div className="bg-stone-100 border border-stone-200 rounded-lg p-4">
                    <div className="text-3xl font-black text-yellow-500 mb-2">6mo</div>
                    <p className="text-sm text-stone-500">Average budget reallocation time in particle state</p>
                  </div>
                  <div className="bg-stone-100 border border-stone-200 rounded-lg p-4">
                    <div className="text-3xl font-black text-red-500 mb-2">80%</div>
                    <p className="text-sm text-stone-500">Of slow decisions are process problems, not analysis problems</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Examples */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-black mb-8">EXAMPLES</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-green-500 font-bold mb-4">LOW LATENCY (Score 1-3)</h3>
                  <div className="space-y-3">
                    {examples.low.map((ex) => (
                      <div key={ex.company} className="bg-stone-50 border border-stone-200 rounded-lg p-4 flex items-center justify-between">
                        <div>
                          <span className="font-bold">{ex.company}</span>
                          <p className="text-sm text-stone-500 mt-1">{ex.detail}</p>
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
                      <div key={ex.company} className="bg-stone-50 border border-stone-200 rounded-lg p-4 flex items-center justify-between">
                        <div>
                          <span className="font-bold">{ex.company}</span>
                          <p className="text-sm text-stone-500 mt-1">{ex.detail}</p>
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
                  <div key={i} className="border border-stone-200 rounded-lg p-4 flex items-center gap-4">
                    <span className="text-red-600 font-bold">{i + 1}</span>
                    <span className="text-stone-600">{q}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-stone-100 border border-stone-200 rounded-xl">
                <p className="text-stone-500">
                  <strong className="text-stone-900">Scoring:</strong> If most answers suggest
                  fast, autonomous decision-making, score 1-3. If most answers suggest
                  multi-layered approval and long timelines, score 7-10.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-16 px-6 border-t border-stone-200">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between gap-6">
              <Link
                href="/gpi-framework"
                className="border border-stone-300 px-8 py-4 text-lg font-black hover:border-red-400 transition-colors text-center"
              >
                ← BACK TO FRAMEWORK
              </Link>
              <Link
                href="/gpi-framework/error-correction"
                className="bg-red-600 text-white px-8 py-4 text-lg font-black hover:bg-red-700 transition-colors text-center"
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
