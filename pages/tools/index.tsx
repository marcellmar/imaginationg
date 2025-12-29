/**
 * GPI Tools - Diagnostic instruments
 */

import React from 'react';
import Link from 'next/link';
import SEOHead from '../../components/SEOHead';
import Navigation from '../../components/Navigation';
import { ArrowRight } from 'lucide-react';

const ToolsPage = () => {
  const tools = [
    {
      id: 'diagnostic',
      name: 'GPI DIAGNOSTIC',
      description: '32 questions. 7 dimensions. Full organizational assessment.',
      time: '~8 min',
      href: '/diagnostic',
      primary: true,
    },
    {
      id: 'five-questions',
      name: 'FIVE QUESTIONS',
      description: 'Personal career audit. Where does your value actually come from?',
      time: '~3 min',
      href: '/tools/five-questions',
    },
    {
      id: 'signal-structure',
      name: 'SIGNAL VS STRUCTURE',
      description: 'Role type + industry phase. Find your quadrant.',
      time: '~2 min',
      href: '/tools/signal-vs-structure',
    },
  ];

  return (
    <>
      <SEOHead
        title="Tools | IMAGINATION G"
        description="Diagnostic tools for measuring organizational friction. GPI diagnostic, career audits, and positioning assessments."
      />

      <div className="min-h-screen bg-black text-white">
        <Navigation currentPage="tools" />

        <section className="pt-20 pb-16 px-6">
          <div className="max-w-2xl mx-auto">

            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-zinc-600 mb-6">
                <span className="w-2 h-2 bg-red-500 rounded-full" />
                DIAGNOSTIC TOOLS
              </div>
              <h1 className="text-3xl md:text-4xl font-black tracking-tight">
                TOOLS
              </h1>
            </div>

            {/* Tools List */}
            <div className="space-y-4">
              {tools.map((tool) => (
                <Link
                  key={tool.id}
                  href={tool.href}
                  className={`block border p-6 transition-all group ${
                    tool.primary
                      ? 'border-red-600 hover:bg-red-600/10'
                      : 'border-zinc-800 hover:border-zinc-600'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h2 className={`font-black ${tool.primary ? 'text-red-500' : 'text-white'} group-hover:text-white transition-colors`}>
                          {tool.name}
                        </h2>
                        {tool.primary && (
                          <span className="text-xs font-mono text-red-500 bg-red-500/10 px-2 py-0.5">
                            FULL
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-zinc-500 mb-2">
                        {tool.description}
                      </p>
                      <span className="text-xs text-zinc-600">{tool.time}</span>
                    </div>
                    <ArrowRight
                      size={20}
                      className="text-zinc-600 group-hover:text-white group-hover:translate-x-1 transition-all mt-1"
                    />
                  </div>
                </Link>
              ))}
            </div>

            {/* Scale Reference */}
            <div className="mt-12 bg-zinc-950 border border-zinc-800 p-6">
              <div className="text-xs font-mono text-zinc-600 mb-4">GPI SCALE REFERENCE</div>
              <div className="relative h-2 bg-zinc-900 rounded-full mb-3">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 rounded-full" />
              </div>
              <div className="flex justify-between text-xs">
                <div>
                  <span className="font-mono text-green-500">1-3</span>
                  <span className="text-zinc-600 ml-2">Flow state</span>
                </div>
                <div>
                  <span className="font-mono text-yellow-500">4-6</span>
                  <span className="text-zinc-600 ml-2">Transition</span>
                </div>
                <div>
                  <span className="font-mono text-red-500">7-10</span>
                  <span className="text-zinc-600 ml-2">Friction</span>
                </div>
              </div>
            </div>

            {/* Framework Link */}
            <div className="mt-8 text-center">
              <Link
                href="/gpi-framework"
                className="text-zinc-500 hover:text-white transition-colors text-sm"
              >
                Learn how GPI works →
              </Link>
            </div>

          </div>
        </section>
      </div>
    </>
  );
};

export default ToolsPage;
