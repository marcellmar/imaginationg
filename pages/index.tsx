import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import SEOHead from '../components/SEOHead';
import Navigation from '../components/Navigation';
import { GPIRadarChart } from '../components/gpi';

const Home: NextPage = () => {
  // Animated GPI score
  const [gpiScore, setGpiScore] = useState(7.2);
  const [direction, setDirection] = useState(-1);

  useEffect(() => {
    const interval = setInterval(() => {
      setGpiScore(prev => {
        let next = prev + (direction * 0.1);
        if (next <= 2) {
          setDirection(1);
          next = 2;
        } else if (next >= 8.5) {
          setDirection(-1);
          next = 8.5;
        }
        return Math.round(next * 10) / 10;
      });
    }, 120);
    return () => clearInterval(interval);
  }, [direction]);

  // Radar chart data - represents where friction lives
  const dimensions = [
    { dimension: 'DECISION_LATENCY' as const, score: 7.5, label: 'Decision Latency', weight: 0.20 },
    { dimension: 'ERROR_CORRECTION' as const, score: 6.0, label: 'Error Correction', weight: 0.20 },
    { dimension: 'KNOWLEDGE_LOCATION' as const, score: 8.0, label: 'Knowledge Location', weight: 0.15 },
    { dimension: 'STRUCTURAL_LOCKIN' as const, score: 5.5, label: 'Structural Lock-In', weight: 0.15 },
    { dimension: 'TALENT_FLOW' as const, score: 4.0, label: 'Talent Flow', weight: 0.10 },
    { dimension: 'CAPITAL_INTENSITY' as const, score: 6.5, label: 'Capital Intensity', weight: 0.10 },
    { dimension: 'KNOWLEDGE_VELOCITY' as const, score: 7.0, label: 'Knowledge Velocity', weight: 0.10 },
  ];

  return (
    <>
      <SEOHead
        title="Growing Pains Index | IMAGINATION G"
        description="Measure where energy gets stuck in your organization. The GPI diagnostic reveals friction across 7 dimensions."
        ogImage="/images/og-home.svg"
      />

      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://www.imaginationg.studio/#organization",
              "name": "IMAGINATION G",
              "url": "https://www.imaginationg.studio",
              "logo": "https://www.imaginationg.studio/logo.png",
              "description": "GPI diagnostic measures organizational friction across 7 dimensions.",
            })
          }}
        />
      </Head>

      <div className="min-h-screen bg-black text-white">
        <Navigation currentPage="home" />

        {/* Main Diagnostic Display */}
        <section className="pt-20 pb-8 px-6">
          <div className="max-w-6xl mx-auto">

            {/* System Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-zinc-600 mb-6">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                ORGANIZATIONAL DIAGNOSTIC
              </div>
              <h1 className="text-3xl md:text-4xl font-black tracking-tight">
                GROWING PAINS INDEX
              </h1>
            </div>

            {/* Core Display: Score + Radar */}
            <div className="grid lg:grid-cols-2 gap-8 items-center mb-16">

              {/* Left: The Score */}
              <div className="flex flex-col items-center lg:items-end">
                <div className="bg-zinc-950 border border-zinc-800 p-8 w-full max-w-sm">
                  <div className="text-xs font-mono text-zinc-600 mb-4 tracking-widest">GPI READING</div>

                  {/* Score Display */}
                  <div className="flex items-baseline gap-2 mb-6">
                    <span
                      className="text-7xl font-black tabular-nums"
                      style={{
                        color: gpiScore <= 3 ? '#22c55e' : gpiScore <= 6 ? '#eab308' : '#ef4444'
                      }}
                    >
                      {gpiScore.toFixed(1)}
                    </span>
                    <span className="text-2xl text-zinc-700">/10</span>
                  </div>

                  {/* Minimal Scale */}
                  <div className="relative h-2 bg-zinc-900 rounded-full mb-4">
                    <div
                      className="absolute top-0 left-0 h-full rounded-full transition-all duration-150"
                      style={{
                        width: `${(gpiScore / 10) * 100}%`,
                        backgroundColor: gpiScore <= 3 ? '#22c55e' : gpiScore <= 6 ? '#eab308' : '#ef4444'
                      }}
                    />
                  </div>

                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-green-600">FLOW</span>
                    <span className="text-red-600">FRICTION</span>
                  </div>
                </div>

                {/* Interpretation */}
                <div className="text-center lg:text-right mt-6 max-w-sm">
                  <p className="text-sm text-zinc-500">
                    Energy either flows through your organization or it doesn't. GPI measures where it gets stuck.
                  </p>
                </div>
              </div>

              {/* Right: The Radar */}
              <div className="flex flex-col items-center lg:items-start">
                <div className="relative">
                  <GPIRadarChart
                    dimensions={dimensions}
                    size={320}
                    showLabels={true}
                    showValues={true}
                    highlightWeakest={true}
                  />
                </div>
                <div className="text-center lg:text-left mt-4">
                  <div className="text-xs font-mono text-zinc-600">7-DIMENSION FRICTION MAP</div>
                </div>
              </div>
            </div>

            {/* The Point */}
            <div className="max-w-2xl mx-auto text-center mb-16">
              <p className="text-xl text-zinc-400 mb-8">
                Organizations have physics. This measures yours.
              </p>
              <Link
                href="/diagnostic"
                className="inline-block bg-red-600 px-8 py-4 font-black hover:bg-red-700 transition-colors"
              >
                MEASURE YOUR GPI
              </Link>
            </div>

            {/* 7 Dimensions - Clinical List */}
            <div className="border-t border-zinc-900 pt-12">
              <div className="text-xs font-mono text-zinc-600 text-center mb-8">WHAT GPI MEASURES</div>
              <div className="grid grid-cols-1 md:grid-cols-7 gap-px bg-zinc-900">
                {[
                  { name: 'Decision Latency', question: 'How fast do decisions happen?' },
                  { name: 'Error Correction', question: 'How fast do mistakes get fixed?' },
                  { name: 'Knowledge Location', question: 'Where does expertise live?' },
                  { name: 'Structural Lock-In', question: 'How rigid are processes?' },
                  { name: 'Talent Flow', question: 'How do people move to impact?' },
                  { name: 'Capital Intensity', question: 'What does validation cost?' },
                  { name: 'Knowledge Velocity', question: 'How fast does learning spread?' },
                ].map((dim, i) => (
                  <div key={i} className="bg-black p-4 text-center">
                    <div className="text-xs font-bold text-white mb-1">{dim.name}</div>
                    <div className="text-xs text-zinc-600">{dim.question}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* Bottom CTA - Minimal */}
        <section className="py-12 px-6 border-t border-zinc-900">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-zinc-600 text-sm mb-6">
              32 questions. 7 dimensions. No email required.
            </p>
            <Link
              href="/diagnostic"
              className="text-white font-bold hover:text-red-500 transition-colors"
            >
              START DIAGNOSTIC →
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
