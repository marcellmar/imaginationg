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
              <h2 className="text-2xl font-black mb-8">INTERVENTIONS THAT TARGET THIS</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <Link href="/interventions/the-map" className="bg-black border border-zinc-800 rounded-xl p-6 hover:border-red-600 transition-colors">
                  <h3 className="font-bold text-xl mb-2">THE MAP</h3>
                  <p className="text-zinc-500 text-sm">
                    Surface where knowledge actually lives and create paths to access it.
                  </p>
                </Link>
                <Link href="/interventions/the-naming" className="bg-black border border-zinc-800 rounded-xl p-6 hover:border-red-600 transition-colors">
                  <h3 className="font-bold text-xl mb-2">THE NAMING</h3>
                  <p className="text-zinc-500 text-sm">
                    Document what people know before they leave.
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
