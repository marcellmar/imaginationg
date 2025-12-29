/**
 * Capital Intensity Dimension Page
 * Weight: 10%
 */

import React from 'react';
import Link from 'next/link';
import SEOHead from '../../components/SEOHead';
import Navigation from '../../components/Navigation';
import { GPISpectrum } from '../../components/gpi';

const CapitalIntensityPage = () => {
  const examples = {
    low: [
      { company: 'Notion', gpi: 1.5, detail: 'Purely digital. Server costs are the main infrastructure.' },
      { company: 'Stripe', gpi: 1.5, detail: 'Software layer on financial rails. No physical footprint.' },
    ],
    high: [
      { company: 'Phillips 66', gpi: 6.4, detail: 'Refineries, pipelines, storage. Billions in physical assets.' },
      { company: 'Exxon Mobil', gpi: 6.8, detail: 'Multi-decade asset commitments. Infrastructure that spans continents.' },
    ],
  };

  const diagnosticQuestions = [
    'How much physical infrastructure is required to operate?',
    'Can the business scale without proportional capital investment?',
    'What\'s the ratio of digital to physical assets?',
    'How long do major investments take to pay back?',
    'What\'s the exit cost if you need to change direction?',
  ];

  return (
    <>
      <SEOHead
        title="Capital Intensity (GPI Dimension #6) | IMAGINATION G"
        description="Capital Intensity measures ratio of physical to digital/human assets. Weight: 10%. How infrastructure-locked is your organization?"
        ogImage="/images/og-capital-intensity.svg"
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
                  6
                </div>
                <span className="text-xs font-mono text-zinc-500 bg-zinc-900 px-2 py-1 rounded">
                  10% weight
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-black mb-6">
                CAPITAL INTENSITY<span className="text-red-600">.</span>
              </h1>

              <p className="text-xl text-zinc-400 mb-8 max-w-2xl">
                Ratio of physical to digital/human capital. How much physical
                infrastructure anchors your organization in place?
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
                  <h3 className="text-xl font-bold mb-3">Purely Digital</h3>
                  <p className="text-zinc-400">
                    Minimal physical footprint. Cloud infrastructure. Can scale or pivot
                    without building anything. Human and digital capital dominate.
                  </p>
                </div>

                <div className="bg-red-950/20 border border-red-900/50 rounded-xl p-6">
                  <div className="text-red-500 font-mono font-bold mb-2">SCORE 7-10</div>
                  <h3 className="text-xl font-bold mb-3">Infrastructure-Locked</h3>
                  <p className="text-zinc-400">
                    Massive physical assets. Factories, refineries, hospitals, campuses.
                    Capital decisions made decades ago still constrain today.
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
                    <strong className="text-white">Physical capital creates inertia.</strong>
                    When you've invested billions in refineries, you don't pivot to solar.
                    When you've built a hospital, you don't switch to telemedicine.
                    Capital intensity determines how fast you can change direction.
                  </p>
                </div>

                <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6">
                  <h3 className="font-bold mb-4">THE SUNK COST PRISON</h3>
                  <p className="text-zinc-400">
                    High capital intensity creates powerful incentives to protect existing
                    investments, even when they're becoming obsolete. Executives are measured
                    on returns from capital already deployed, not on adaptation to new realities.
                    This creates structural resistance to transformation.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-4">
                    <div className="text-2xl font-black text-green-500 mb-2">0.1x</div>
                    <p className="text-sm text-zinc-500">Capital/revenue ratio for software companies</p>
                  </div>
                  <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-4">
                    <div className="text-2xl font-black text-red-500 mb-2">3-5x</div>
                    <p className="text-sm text-zinc-500">Capital/revenue ratio for oil refiners</p>
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
                  <h3 className="text-green-500 font-bold mb-4">LOW INTENSITY (Score 1-3)</h3>
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
                  <h3 className="text-red-500 font-bold mb-4">HIGH INTENSITY (Score 7-10)</h3>
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
                    Create digital layers that reduce physical asset dependency.
                  </p>
                </Link>
                <Link href="/interventions/the-market-smackdown" className="bg-black border border-zinc-800 rounded-xl p-6 hover:border-red-600 transition-colors">
                  <h3 className="font-bold text-xl mb-2">MARKET SMACKDOWN</h3>
                  <p className="text-zinc-500 text-sm">
                    GO/NO-GO on products, services, upgrades. Right-size capital to evidence.
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between gap-6">
              <Link href="/gpi-framework/talent-flow" className="border border-zinc-700 px-8 py-4 text-lg font-black hover:border-zinc-500 transition-colors text-center">
                ← TALENT FLOW
              </Link>
              <Link href="/gpi-framework/knowledge-velocity" className="bg-red-600 px-8 py-4 text-lg font-black hover:bg-red-700 transition-colors text-center">
                NEXT: KNOWLEDGE VELOCITY →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CapitalIntensityPage;
