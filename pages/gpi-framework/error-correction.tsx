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
      { company: 'Netflix', gpi: 2.0, detail: 'A/B testing everything. Failed experiments killed in days, not years.' },
      { company: 'Amazon', gpi: 2.2, detail: 'Two-pizza teams can reverse decisions. Bias toward action over analysis.' },
    ],
    high: [
      { company: 'Healthcare', gpi: 8.5, detail: 'Medical errors persist for decades. Systemic issues require regulatory intervention.' },
      { company: 'Education', gpi: 7.5, detail: 'Curriculum changes take years. Bad teaching practices protected by tenure.' },
    ],
  };

  const diagnosticQuestions = [
    'How long does it take to identify a mistake after it happens?',
    'Can bad decisions be reversed without career consequences?',
    'Are there blame-free post-mortems?',
    'How quickly can a failed initiative be killed?',
    'Do the same mistakes recur across teams/years?',
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
                Time for identifying and fixing mistakes. How fast can your organization
                recognize something isn't working and course correct?
              </p>

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
                  <h3 className="text-xl font-bold mb-3">Self-Correcting</h3>
                  <p className="text-zinc-400">
                    Errors are detected in hours, fixed in days. Systems have built-in feedback
                    loops. Failure is data, not disgrace. Post-mortems lead to actual changes.
                  </p>
                </div>

                <div className="bg-red-950/20 border border-red-900/50 rounded-xl p-6">
                  <div className="text-red-500 font-mono font-bold mb-2">SCORE 7-10</div>
                  <h3 className="text-xl font-bold mb-3">Generational</h3>
                  <p className="text-zinc-400">
                    Errors persist until someone retires or gets fired. Systemic problems become
                    "how we do things." The same mistakes recur decade after decade.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-black mb-8">WHY 20% WEIGHT?</h2>

              <div className="space-y-6">
                <p className="text-lg text-zinc-300">
                  Error Correction determines <strong className="text-white">learning velocity</strong>.
                  Organizations that can't fix mistakes can't improve.
                </p>

                <div className="border-l-4 border-red-600 pl-6 py-4">
                  <p className="text-zinc-400">
                    The cost of an error isn't the error itself. It's how long it compounds.
                    A mistake caught in a day costs a day. The same mistake persisting for
                    five years costs five years of compounded dysfunction.
                  </p>
                </div>

                <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6">
                  <h3 className="font-bold mb-4">THE BLAME DYNAMIC</h3>
                  <p className="text-zinc-400">
                    In high-error-correction organizations, mistakes are learning opportunities.
                    In low-error-correction organizations, mistakes are career-ending events.
                    When failure is punished, people hide failures. Hidden failures compound.
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

        <section className="py-16 px-6 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-black mb-8">INTERVENTIONS THAT TARGET THIS</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <Link href="/interventions/the-override" className="bg-black border border-zinc-800 rounded-xl p-6 hover:border-red-600 transition-colors">
                  <h3 className="font-bold text-xl mb-2">THE OVERRIDE</h3>
                  <p className="text-zinc-500 text-sm">
                    Create mechanisms to bypass normal channels when errors need immediate fixing.
                  </p>
                </Link>
                <Link href="/interventions/first-blood-build" className="bg-black border border-zinc-800 rounded-xl p-6 hover:border-red-600 transition-colors">
                  <h3 className="font-bold text-xl mb-2">FIRST BLOOD BUILD</h3>
                  <p className="text-zinc-500 text-sm">
                    Ship fast, learn fast. Build feedback loops into everything.
                  </p>
                </Link>
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
