/**
 * GPI Tools Hub
 * Streamlined page for GPI diagnostic tools
 */

import React from 'react';
import Link from 'next/link';
import SEOHead from '../../components/SEOHead';
import Navigation from '../../components/Navigation';
import { GPISpectrum } from '../../components/gpi';

const ToolsPage = () => {
  const fiveQuestions = [
    'If your role disappeared tomorrow, how long before anyone outside your team would notice?',
    'What percentage of your work could be written as a checklist and handed to someone else?',
    'When was the last time your industry\'s fundamentals changed, and did you change with them?',
    'If you left your industry entirely, what would transfer and what would evaporate?',
    'Are you being paid for what you know, or for what you figure out?',
  ];

  const signalVsStructureQuestions = [
    'Do you mostly execute defined processes, or define new ones?',
    'Is your value in following protocols or in judgment calls?',
    'Could your job be described in a checklist?',
    'Do you create information or process it?',
    'How fast do decisions happen in your industry?',
    'Is disruption happening in your industry?',
  ];

  return (
    <>
      <SEOHead
        title="GPI Tools | IMAGINATION G"
        description="Diagnostic tools for measuring your Growing Pains Index. Quick personal audits and comprehensive organizational assessments."
        ogImage="/images/og-tools.svg"
      />

      <div className="min-h-screen bg-black text-white">
        <Navigation currentPage="tools" />

        {/* Hero */}
        <section className="pt-24 pb-12 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <div className="inline-block mb-8 text-red-400 text-xs font-mono bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-full">
                <span className="inline-block w-2 h-2 bg-red-400 rounded-full mr-2 animate-pulse"></span>
                GPI TOOLS
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1]">
                WHERE DO YOU STAND<span className="text-red-600">?</span>
              </h1>

              <p className="text-xl text-zinc-400 mb-8 max-w-2xl">
                Tools for measuring where you are on the particle-to-field spectrum.
              </p>
            </div>
          </div>
        </section>

        {/* Full Diagnostic */}
        <section className="py-8 px-6">
          <div className="max-w-7xl mx-auto">
            <Link
              href="/diagnostic"
              className="block bg-gradient-to-r from-red-950 to-zinc-950 border-2 border-red-600 rounded-xl p-8 hover:border-red-500 transition-all group"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex-1">
                  <div className="text-red-500 text-sm font-mono mb-2">FULL ASSESSMENT</div>
                  <h2 className="text-2xl md:text-3xl font-black mb-3">
                    GPI DIAGNOSTIC
                  </h2>
                  <p className="text-zinc-400 mb-4 max-w-xl">
                    32 questions. 7 dimensions. Complete organizational physics assessment.
                  </p>
                  <div className="text-zinc-500 text-sm">15-20 minutes</div>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-40">
                    <GPISpectrum score={5.0} size="lg" showMarker={false} />
                  </div>
                  <div className="mt-4 bg-red-600 px-6 py-3 text-center font-black group-hover:bg-red-500 transition-colors">
                    CALCULATE YOUR GPI
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Five Questions */}
        <section className="py-12 px-6 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <div className="text-purple-500 text-xs font-mono mb-2">PERSONAL AUDIT • 3 MIN</div>
                <h2 className="text-2xl font-black mb-4">THE FIVE QUESTIONS</h2>
                <p className="text-zinc-400 mb-6">
                  The career audit you've been avoiding. Answer honestly. The mirror doesn't lie.
                </p>
                <Link
                  href="/tools/five-questions"
                  className="inline-block bg-purple-600 px-6 py-3 font-black hover:bg-purple-500 transition-colors"
                >
                  START AUDIT
                </Link>
              </div>
              <div className="space-y-3">
                {fiveQuestions.map((q, i) => (
                  <div
                    key={i}
                    className="border-l-2 border-purple-600 pl-4 py-2 text-sm text-zinc-400"
                  >
                    <span className="text-purple-500 font-bold mr-2">{i + 1}.</span>
                    {q}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Signal vs Structure */}
        <section className="py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <div className="text-yellow-500 text-xs font-mono mb-2">CAREER POSITIONING • 2 MIN</div>
                <h2 className="text-2xl font-black mb-4">SIGNAL VS STRUCTURE</h2>
                <p className="text-zinc-400 mb-6">
                  Your role type + your industry phase = your trajectory. Find your quadrant.
                </p>
                <Link
                  href="/tools/signal-vs-structure"
                  className="inline-block bg-yellow-600 text-black px-6 py-3 font-black hover:bg-yellow-500 transition-colors"
                >
                  FIND YOUR QUADRANT
                </Link>
              </div>
              <div className="space-y-3">
                {signalVsStructureQuestions.map((q, i) => (
                  <div
                    key={i}
                    className="border-l-2 border-yellow-600 pl-4 py-2 text-sm text-zinc-400"
                  >
                    <span className="text-yellow-500 font-bold mr-2">{i + 1}.</span>
                    {q}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Framework Link */}
        <section className="py-12 px-6 bg-zinc-950 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-zinc-500 mb-4">
              Want to understand what the scores mean?
            </p>
            <Link
              href="/gpi-framework"
              className="text-white font-bold hover:text-red-500 transition-colors"
            >
              EXPLORE THE GPI FRAMEWORK →
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default ToolsPage;
