/**
 * Error Correction Speed Dimension Page
 * Weight: 20% - Joint highest weighted dimension
 */

import React from 'react';
import Link from 'next/link';
import SEOHead from '../../components/SEOHead';
import Navigation from '../../components/Navigation';
import { GPISpectrum } from '../../components/gpi';

const ErrorCorrectionPage = () => {
  const examples = {
    low: [
      { company: 'Netflix', gpi: 2.0, detail: 'Failed experiments get killed in days. Every product decision has pre-defined kill criteria. Being wrong fast is the goal.' },
      { company: 'Amazon', gpi: 2.2, detail: 'Two-pizza teams can reverse decisions without executive permission. Reversibility is a design principle.' },
    ],
    high: [
      { company: 'WBD', gpi: 7.4, detail: 'Streaming strategy reversed direction multiple times. Each reversal took 12+ months to execute. The org can\'t correct at market speed.' },
      { company: 'Comcast', gpi: 6.95, detail: 'The Versant spinoff decision took years to execute after the signal was clear. Structural complexity extends every correction cycle.' },
    ],
  };

  const diagnosticQuestions = [
    'What\'s the fastest a bad decision has ever been reversed here?',
    'Do people share bad news or manage it?',
    'When was the last time a project got killed mid-execution?',
    'Are post-mortems blameless or political?',
    'How long has your longest known problem been unresolved?',
  ];

  return (
    <>
      <SEOHead
        title="Error Correction Speed (GPI Dimension #3) | IMAGINATION G"
        description="Error Correction Speed measures time for identifying and fixing mistakes. Weight: 20%. How fast can your organization learn from failures?"
        ogImage="/images/og-error-correction.svg"
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
                  3
                </div>
                <span className="text-xs font-mono text-zinc-500 bg-zinc-900 px-2 py-1 rounded">
                  20% weight
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-black mb-6">
                ERROR CORRECTION<span className="text-red-600">.</span>
              </h1>

              <p className="text-xl text-zinc-400 mb-8 max-w-2xl">
                How fast the org catches its own mistakes and reverses them. Mistakes aren't the problem. Mistakes that compound for years are.
              </p>

              {/* Error Correction Loop Visual */}
              <div className="mb-12 p-8 bg-zinc-950 border border-zinc-800 rounded-xl">
                <svg viewBox="0 0 400 140" className="w-full max-w-lg mx-auto">
                  {/* Fast correction (left side) */}
                  <text x="60" y="15" textAnchor="middle" fill="#22c55e" fontSize="10" fontWeight="bold">FAST LOOP</text>

                  {/* Error appears */}
                  <circle cx="60" cy="50" r="15" fill="#ef4444" opacity="0.8">
                    <animate attributeName="opacity" values="0.8;0;0;0;0.8" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <text x="60" y="54" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">X</text>

                  {/* Detection arrow */}
                  <path d="M 75 50 Q 100 30, 100 70" fill="none" stroke="#22c55e" strokeWidth="2">
                    <animate attributeName="stroke-dasharray" values="0,100;50,50;100,0" dur="2s" repeatCount="indefinite" />
                  </path>

                  {/* Fix applied */}
                  <circle cx="60" cy="100" r="15" fill="#22c55e" opacity="0.8">
                    <animate attributeName="opacity" values="0;0;0;0.8;0.8" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <text x="60" y="104" textAnchor="middle" fill="black" fontSize="12" fontWeight="bold">✓</text>

                  {/* Loop back arrow */}
                  <path d="M 45 100 Q 20 75, 45 50" fill="none" stroke="#22c55e" strokeWidth="2" strokeDasharray="4,2">
                    <animate attributeName="stroke-dashoffset" values="0;-12" dur="0.5s" repeatCount="indefinite" />
                  </path>

                  <text x="60" y="135" textAnchor="middle" fill="#22c55e" fontSize="9" fontWeight="bold">DAYS</text>

                  {/* VS divider */}
                  <line x1="140" y1="20" x2="140" y2="120" stroke="#3f3f46" strokeWidth="1" strokeDasharray="4,4" />

                  {/* Slow correction (right side) */}
                  <text x="280" y="15" textAnchor="middle" fill="#ef4444" fontSize="10" fontWeight="bold">SLOW LOOP</text>

                  {/* Error persists */}
                  <circle cx="200" cy="70" r="15" fill="#ef4444" opacity="0.8" />
                  <text x="200" y="74" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">X</text>

                  {/* Blame arrows going outward */}
                  <line x1="215" y1="60" x2="245" y2="40" stroke="#ef4444" strokeWidth="2" opacity="0.5" />
                  <line x1="215" y1="70" x2="250" y2="70" stroke="#ef4444" strokeWidth="2" opacity="0.5" />
                  <line x1="215" y1="80" x2="245" y2="100" stroke="#ef4444" strokeWidth="2" opacity="0.5" />

                  {/* Hidden/ignored feedback */}
                  <rect x="250" y="30" width="30" height="20" fill="none" stroke="#ef4444" strokeWidth="1" strokeDasharray="2,2" opacity="0.5" />
                  <text x="265" y="43" textAnchor="middle" fill="#ef4444" fontSize="7" opacity="0.5">HIDE</text>

                  <rect x="255" y="60" width="30" height="20" fill="none" stroke="#ef4444" strokeWidth="1" strokeDasharray="2,2" opacity="0.5" />
                  <text x="270" y="73" textAnchor="middle" fill="#ef4444" fontSize="7" opacity="0.5">DENY</text>

                  <rect x="250" y="90" width="30" height="20" fill="none" stroke="#ef4444" strokeWidth="1" strokeDasharray="2,2" opacity="0.5" />
                  <text x="265" y="103" textAnchor="middle" fill="#ef4444" fontSize="7" opacity="0.5">BLAME</text>

                  {/* Error still there, pulsing */}
                  <circle cx="340" cy="70" r="18" fill="#ef4444" opacity="0.6">
                    <animate attributeName="r" values="15;20;15" dur="3s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.4;0.7;0.4" dur="3s" repeatCount="indefinite" />
                  </circle>
                  <text x="340" y="74" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">X</text>
                  <text x="340" y="55" textAnchor="middle" fill="#ef4444" fontSize="7">STILL</text>
                  <text x="340" y="90" textAnchor="middle" fill="#ef4444" fontSize="7">BROKEN</text>

                  <text x="280" y="135" textAnchor="middle" fill="#ef4444" fontSize="9" fontWeight="bold">YEARS</text>
                </svg>
                <p className="text-center text-zinc-500 text-sm mt-4 font-mono">ERROR → DETECT → CORRECT</p>
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
                  <h3 className="text-xl font-bold mb-3">Failure is data</h3>
                  <p className="text-zinc-400">
                    Errors surface fast because there's no cost to surfacing them. Wrong turns get reversed, not buried. Post-mortems lead to actual changes. Being wrong fast is fine.
                  </p>
                </div>

                <div className="bg-red-950/20 border border-red-900/50 rounded-xl p-6">
                  <div className="text-red-500 font-mono font-bold mb-2">SCORE 7-10</div>
                  <h3 className="text-xl font-bold mb-3">Mistakes become commitments</h3>
                  <p className="text-zinc-400">
                    The org learns to defend what isn't working rather than fix it, because fixing it means admitting it was wrong. The same problems recur. People know about them. Nobody fixes them.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-black mb-8">THE COMPOUND COST</h2>

              <div className="space-y-6">
                <p className="text-lg text-zinc-300">
                  The cost of a mistake isn't the mistake. It's the duration. A bad call caught in a week costs a week. The same call running uncorrected for three years costs <strong className="text-white">three years of compounded dysfunction</strong>.
                </p>

                <div className="border-l-4 border-red-600 pl-6 py-4">
                  <p className="text-zinc-400">
                    When failure is career-ending, people hide failure. Hidden failures compound. The org develops antibodies against surfacing bad news, which means leadership runs on filtered information. The errors don't get smaller. They just get invisible.
                  </p>
                </div>

                <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6">
                  <h3 className="font-bold mb-4">WHY MISTAKES PERSIST</h3>
                  <p className="text-zinc-400">
                    Sunk cost has veto power. Once an org has invested enough in a direction, changing course reads as admitting the original call was wrong. The people who made that call are often the same people who'd have to authorize the reversal. So they don't. Not because they're bad at their jobs. Because the incentive structure rewards defending the decision over correcting it.
                  </p>
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
                  <h3 className="text-green-500 font-bold mb-4">FAST CORRECTION (Score 1-3)</h3>
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
                  <h3 className="text-red-500 font-bold mb-4">SLOW CORRECTION (Score 7-10)</h3>
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

        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between gap-6">
              <Link href="/gpi-framework/decision-latency" className="border border-zinc-700 px-8 py-4 text-lg font-black hover:border-zinc-500 transition-colors text-center">
                ← DECISION LATENCY
              </Link>
              <Link href="/gpi-framework/knowledge-location" className="bg-red-600 px-8 py-4 text-lg font-black hover:bg-red-700 transition-colors text-center">
                NEXT: KNOWLEDGE LOCATION →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ErrorCorrectionPage;
