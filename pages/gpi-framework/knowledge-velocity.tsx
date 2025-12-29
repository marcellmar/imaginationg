/**
 * Knowledge Velocity Dimension Page
 * Weight: 10%
 */

import React from 'react';
import Link from 'next/link';
import SEOHead from '../../components/SEOHead';
import Navigation from '../../components/Navigation';
import { GPISpectrum } from '../../components/gpi';

const KnowledgeVelocityPage = () => {
  const examples = {
    low: [
      { company: 'OpenAI', gpi: 1.2, detail: 'Knowledge updates in days. Research to production in weeks.' },
      { company: 'Netflix', gpi: 2.0, detail: 'A/B tests inform decisions in real-time. Algorithms learn continuously.' },
    ],
    high: [
      { company: 'Construction', gpi: 8.0, detail: 'Apprenticeship model. Best practices take decades to spread.' },
      { company: 'Government', gpi: 9.0, detail: 'Policy knowledge trapped in bureaucratic silos. Updates are generational.' },
    ],
  };

  const diagnosticQuestions = [
    'How fast does operational knowledge update across the organization?',
    'Are best practices shared and adopted quickly?',
    'Is learning embedded in daily operations?',
    'How long until a new insight becomes standard practice?',
    'Does knowledge spread horizontally or only vertically?',
  ];

  return (
    <>
      <SEOHead
        title="Knowledge Velocity (GPI Dimension #7) | IMAGINATION G"
        description="Knowledge Velocity measures how fast operational knowledge updates. Weight: 10%. How quickly does your organization learn and adapt?"
        ogImage="/images/og-knowledge-velocity.svg"
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
                  7
                </div>
                <span className="text-xs font-mono text-zinc-500 bg-zinc-900 px-2 py-1 rounded">
                  10% weight
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-black mb-6">
                KNOWLEDGE VELOCITY<span className="text-red-600">.</span>
              </h1>

              <p className="text-xl text-zinc-400 mb-8 max-w-2xl">
                How fast operational knowledge updates and spreads. The speed of
                organizational learning in the wild.
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
                  <h3 className="text-xl font-bold mb-3">Real-Time Algorithmic</h3>
                  <p className="text-zinc-400">
                    Learning happens continuously. Insights propagate instantly.
                    The organization's collective intelligence updates in real-time.
                    What works spreads. What doesn't, dies.
                  </p>
                </div>

                <div className="bg-red-950/20 border border-red-900/50 rounded-xl p-6">
                  <div className="text-red-500 font-mono font-bold mb-2">SCORE 7-10</div>
                  <h3 className="text-xl font-bold mb-3">Generational Transfer</h3>
                  <p className="text-zinc-400">
                    Knowledge passes through apprenticeship. Best practices take
                    years to spread. Learning happens when people retire and new
                    ones bring different assumptions.
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
                    <strong className="text-white">Knowledge velocity is the clock speed of adaptation.</strong>
                    How fast the organization can recognize "this works better" and make
                    it the new standard determines how fast it can evolve.
                  </p>
                </div>

                <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6">
                  <h3 className="font-bold mb-4">THE AI ACCELERATION</h3>
                  <p className="text-zinc-400 mb-4">
                    AI is compressing knowledge velocity timescales. What used to take
                    months of analysis now takes minutes. Organizations that can't absorb
                    and act on insights quickly will be outpaced by those that can.
                  </p>
                  <p className="text-zinc-400">
                    The gap between high and low knowledge velocity organizations
                    is widening. Those stuck at 7-10 will fall further behind as
                    field-state competitors learn faster and faster.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-4">
                    <div className="text-2xl font-black text-green-500 mb-2">Hours</div>
                    <p className="text-sm text-zinc-500">Insight to action in field-state orgs</p>
                  </div>
                  <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-4">
                    <div className="text-2xl font-black text-yellow-500 mb-2">Months</div>
                    <p className="text-sm text-zinc-500">Insight to action in transition orgs</p>
                  </div>
                  <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-4">
                    <div className="text-2xl font-black text-red-500 mb-2">Years</div>
                    <p className="text-sm text-zinc-500">Insight to action in particle orgs</p>
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
                  <h3 className="text-green-500 font-bold mb-4">HIGH VELOCITY (Score 1-3)</h3>
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
                  <h3 className="text-red-500 font-bold mb-4">LOW VELOCITY (Score 7-10)</h3>
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
                <Link href="/interventions/the-build" className="bg-black border border-zinc-800 rounded-xl p-6 hover:border-red-600 transition-colors">
                  <h3 className="font-bold text-xl mb-2">THE BUILD</h3>
                  <p className="text-zinc-500 text-sm">
                    Create systems that capture and propagate learning automatically.
                  </p>
                </Link>
                <Link href="/interventions/the-map" className="bg-black border border-zinc-800 rounded-xl p-6 hover:border-red-600 transition-colors">
                  <h3 className="font-bold text-xl mb-2">THE MAP</h3>
                  <p className="text-zinc-500 text-sm">
                    Identify where knowledge is stuck and create flow paths.
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between gap-6">
              <Link href="/gpi-framework/capital-intensity" className="border border-zinc-700 px-8 py-4 text-lg font-black hover:border-zinc-500 transition-colors text-center">
                ← CAPITAL INTENSITY
              </Link>
              <Link href="/diagnostic" className="bg-red-600 px-8 py-4 text-lg font-black hover:bg-red-700 transition-colors text-center">
                CALCULATE YOUR GPI →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default KnowledgeVelocityPage;
