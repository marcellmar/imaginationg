/**
 * Talent Flow Dimension Page
 * Weight: 10%
 */

import React from 'react';
import Link from 'next/link';
import SEOHead from '../../components/SEOHead';
import Navigation from '../../components/Navigation';
import { GPISpectrum } from '../../components/gpi';

const TalentFlowPage = () => {
  const examples = {
    low: [
      { company: 'Spotify', gpi: 2.5, detail: 'Internal mobility is the norm. People move between squads regularly.' },
      { company: 'Google', gpi: 2.8, detail: '20% time, internal transfers, low friction between teams.' },
    ],
    high: [
      { company: 'Education', gpi: 7.5, detail: 'Tenure locks people in place. Hiring is political. Departure is rare.' },
      { company: 'Government', gpi: 9.0, detail: 'Civil service protections. Rigid hierarchies. Low voluntary turnover.' },
    ],
  };

  const diagnosticQuestions = [
    'Can top performers move between teams easily?',
    'Is hiring responsive to actual needs?',
    'Do talented people choose to stay?',
    'How hard is it to exit underperformers?',
    'Is promotion based on merit or tenure?',
  ];

  return (
    <>
      <SEOHead
        title="Talent Flow (GPI Dimension #5) | IMAGINATION G"
        description="Talent Flow measures ease of entry, exit, and mobility. Weight: 10%. How fluidly can talent move through your organization?"
        ogImage="/images/og-talent-flow.svg"
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
                  5
                </div>
                <span className="text-xs font-mono text-zinc-500 bg-zinc-900 px-2 py-1 rounded">
                  10% weight
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-black mb-6">
                TALENT FLOW<span className="text-red-600">.</span>
              </h1>

              <p className="text-xl text-zinc-400 mb-8 max-w-2xl">
                Ease of entry, exit, and mobility. How fluidly can talent move
                to where it creates the most value?
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
                  <h3 className="text-xl font-bold mb-3">Highly Fluid</h3>
                  <p className="text-zinc-400">
                    People move to where they're needed. Internal mobility is common.
                    Hiring is fast and responsive. Top performers stay because they want to.
                  </p>
                </div>

                <div className="bg-red-950/20 border border-red-900/50 rounded-xl p-6">
                  <div className="text-red-500 font-mono font-bold mb-2">SCORE 7-10</div>
                  <h3 className="text-xl font-bold mb-3">Exodus or Stagnation</h3>
                  <p className="text-zinc-400">
                    Either a revolving door or a prison. People leave for better opportunities
                    or they're trapped by golden handcuffs. Nobody moves internally.
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
                    <strong className="text-white">Talent flow is organizational circulation.</strong>
                    When flow stops, the organization becomes stagnant. Ideas stop spreading.
                    Skills stop developing. The best people leave for places where they can grow.
                  </p>
                </div>

                <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6">
                  <h3 className="font-bold mb-4">THE TALENT PARADOX</h3>
                  <p className="text-zinc-400">
                    Organizations with low talent flow often think they have a hiring problem.
                    They actually have a staying problem. The best people self-select out,
                    leaving those who can't or won't leave. This creates a negative cycle
                    that makes the organization even less attractive.
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
                  <h3 className="text-green-500 font-bold mb-4">HIGH FLOW (Score 1-3)</h3>
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
                  <h3 className="text-red-500 font-bold mb-4">LOW FLOW (Score 7-10)</h3>
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
                <Link href="/interventions/the-map" className="bg-black border border-zinc-800 rounded-xl p-6 hover:border-red-600 transition-colors">
                  <h3 className="font-bold text-xl mb-2">THE MAP</h3>
                  <p className="text-zinc-500 text-sm">
                    Identify where talent is stuck and create paths to mobility.
                  </p>
                </Link>
                <Link href="/interventions/the-naming" className="bg-black border border-zinc-800 rounded-xl p-6 hover:border-red-600 transition-colors">
                  <h3 className="font-bold text-xl mb-2">THE NAMING</h3>
                  <p className="text-zinc-500 text-sm">
                    Surface what's actually driving talent decisions.
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between gap-6">
              <Link href="/gpi-framework/structural-lock-in" className="border border-zinc-700 px-8 py-4 text-lg font-black hover:border-zinc-500 transition-colors text-center">
                ← STRUCTURAL LOCK-IN
              </Link>
              <Link href="/gpi-framework/capital-intensity" className="bg-red-600 px-8 py-4 text-lg font-black hover:bg-red-700 transition-colors text-center">
                NEXT: CAPITAL INTENSITY →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TalentFlowPage;
