import type { NextPage } from 'next';
import Link from 'next/link';
import SEOHead from '../../components/SEOHead';
import Navigation from '../../components/Navigation';
import { Zap, AlertTriangle, CheckCircle, ArrowRight, Radio, Waves, Send, MessageSquare } from 'lucide-react';

const VelocityBoostPage: NextPage = () => {
  return (
    <>
      <SEOHead
        title="Velocity Boost — Accelerate Signal Propagation | GPI Action Guide"
        description="Information moves slowly. Teams don't hear what other teams learned. Here's how to accelerate signal propagation. Free GPI action guide for Knowledge Velocity."
      />

      <div className="min-h-screen bg-black text-white">
        <Navigation currentPage="actions" />

        <section className="pt-24 pb-16 px-6">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-12">
              <Link href="/actions" className="text-zinc-500 hover:text-white text-sm mb-4 inline-block">
                ← All Action Guides
              </Link>

              <div className="flex items-center gap-3 mb-6">
                <span className="text-xs font-mono bg-cyan-600/20 text-cyan-400 px-3 py-1 rounded">
                  KNOWLEDGE VELOCITY (10%)
                </span>
              </div>

              {/* Hero Visual */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h1 className="text-4xl md:text-5xl font-black mb-4">
                    VELOCITY BOOST<span className="text-red-600">.</span>
                  </h1>
                  <p className="text-xl text-zinc-400">
                    Information moves slowly. Teams don't hear what other teams learned.
                    Here's how to accelerate signal propagation.
                  </p>
                </div>

                {/* Signal Propagation Visual */}
                <div className="flex items-center justify-center">
                  <div className="relative w-48 h-48">
                    {/* Center signal source */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center z-10">
                      <Radio className="text-black" size={24} />
                    </div>

                    {/* Expanding waves */}
                    {[1, 2, 3, 4].map((ring) => (
                      <div
                        key={ring}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-cyan-500 rounded-full animate-ping"
                        style={{
                          width: `${ring * 40}px`,
                          height: `${ring * 40}px`,
                          animationDuration: '3s',
                          animationDelay: `${ring * 0.5}s`,
                          opacity: 1 - (ring * 0.2)
                        }}
                      />
                    ))}

                    {/* Receiving nodes */}
                    {[45, 135, 225, 315].map((angle, i) => (
                      <div
                        key={i}
                        className="absolute w-6 h-6 bg-cyan-500/30 border-2 border-cyan-500 rounded-full flex items-center justify-center"
                        style={{
                          top: `${50 + 42 * Math.sin(angle * Math.PI / 180)}%`,
                          left: `${50 + 42 * Math.cos(angle * Math.PI / 180)}%`,
                          transform: 'translate(-50%, -50%)',
                        }}
                      >
                        <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" style={{ animationDelay: `${i * 200}ms` }} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-zinc-950 border border-zinc-800 p-4 text-center">
                  <MessageSquare className="mx-auto text-red-500 mb-2" size={24} />
                  <div className="text-2xl font-black text-red-500">3mo</div>
                  <div className="text-xs text-zinc-500">Avg learning spread time</div>
                </div>
                <div className="bg-zinc-950 border border-zinc-800 p-4 text-center">
                  <Waves className="mx-auto text-yellow-500 mb-2" size={24} />
                  <div className="text-2xl font-black text-yellow-500">40%</div>
                  <div className="text-xs text-zinc-500">Duplicate problem-solving</div>
                </div>
                <div className="bg-zinc-950 border border-zinc-800 p-4 text-center">
                  <Send className="mx-auto text-green-500 mb-2" size={24} />
                  <div className="text-2xl font-black text-green-500">48hrs</div>
                  <div className="text-xs text-zinc-500">Target propagation time</div>
                </div>
              </div>
            </div>

            {/* The Problem */}
            <div className="border border-zinc-800 p-8 mb-8 bg-zinc-950 relative overflow-hidden">
              <h2 className="text-2xl font-black mb-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="text-white" size={20} />
                </div>
                THE PROBLEM
              </h2>
              <div className="space-y-4 text-zinc-300">
                <p>
                  Low Knowledge Velocity means learnings don't spread. One team discovers something
                  important, but that knowledge takes months (or never) to reach teams who need it.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  {[
                    { icon: '🔄', text: 'Teams solve the same problems independently' },
                    { icon: '🚧', text: 'Customer insights stay in sales, never reach product' },
                    { icon: '🏝️', text: 'Technical learnings trapped in engineering silos' },
                    { icon: '😤', text: '"We learned that months ago" when problems resurface' },
                    { icon: '📧', text: 'Weekly updates nobody reads' },
                    { icon: '🎭', text: 'All-hands that inform but don\'t transfer knowledge' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 bg-black/50 p-3 rounded border border-zinc-800">
                      <span className="text-xl">{item.icon}</span>
                      <span className="text-sm text-zinc-400">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Root Causes */}
            <div className="mb-8">
              <h2 className="text-2xl font-black mb-6">WHY IT HAPPENS</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: 'Signal Overload', desc: 'So much information that important signals get lost in the noise.' },
                  { title: 'Wrong Channels', desc: 'Knowledge shared where recipients don\'t look. Email to the void.' },
                  { title: 'Push, Not Pull', desc: 'Information pushed at people instead of made discoverable when needed.' },
                  { title: 'No Translation Layer', desc: 'Raw data shared without "what this means for you" context.' },
                ].map((cause, i) => (
                  <div key={i} className="border border-zinc-800 p-6 hover:border-cyan-600 transition-all">
                    <h3 className="font-bold text-cyan-500 mb-2">{cause.title}</h3>
                    <p className="text-zinc-400 text-sm">{cause.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* The Fix */}
            <div className="border-2 border-cyan-600 p-8 mb-8 bg-gradient-to-b from-black to-cyan-950/10 relative overflow-hidden">
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl" />

              <h2 className="text-2xl font-black mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                  <CheckCircle className="text-white" size={20} />
                </div>
                THE FIX
              </h2>

              <div className="space-y-6 relative">
                {[
                  { num: '01', title: 'Create Cross-Functional Signal Routes', desc: 'Identify the 3-5 types of insights that matter most and define explicit paths for how they travel.', code: ['Customer complaint → Support → Product (48h)', 'Technical risk → Eng → Leadership (24h)', 'Competitive intel → Sales → Strategy (weekly)', 'Market shift → Anyone → #signals channel (immediate)'] },
                  { num: '02', title: 'Weekly "What We Learned" Rituals', desc: 'Every team shares one learning per week in a standard format: What happened? What did we learn? Who else should know? Make it scannable, not a wall of text.' },
                  { num: '03', title: 'Embed Information in Workflow', desc: 'Don\'t make people go find information. Put relevant insights where decisions are made. CRM shows recent support tickets. Sprint planning shows related experiments.' },
                  { num: '04', title: 'Create Translators', desc: 'Some people are natural bridges between teams. Identify and empower them. Their job is to carry context, not just data.' },
                  { num: '05', title: 'Kill Low-Signal Channels', desc: 'Audit your communication channels. If a channel has low engagement, either fix it or kill it. Fewer, higher-signal channels beat many ignored ones.' },
                ].map((step, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 border-2 border-cyan-600 rounded-full flex items-center justify-center font-black text-cyan-500 group-hover:bg-cyan-600 group-hover:text-black transition-all">
                        {step.num}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-zinc-400 mb-4">{step.desc}</p>
                      {step.code && (
                        <div className="bg-zinc-900 border border-zinc-800 p-4 text-sm font-mono rounded">
                          <p className="text-cyan-400 mb-2">// Signal routing map</p>
                          {step.code.map((line, j) => (
                            <p key={j} className="text-zinc-300">{line}</p>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Measurement */}
            <div className="border border-zinc-800 p-8 mb-8 bg-zinc-950">
              <h2 className="text-2xl font-black mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-cyan-600 rounded-lg flex items-center justify-center">
                  <Zap className="text-white" size={20} />
                </div>
                HOW TO MEASURE PROGRESS
              </h2>

              <div className="space-y-4">
                {[
                  { metric: 'Time from learning to cross-team awareness', before: '3 months', after: '48 hours', pct: 98 },
                  { metric: 'Duplicate problem-solving incidents', before: '40%', after: '5%', pct: 88 },
                  { metric: 'Cross-reference rate (ideas that spread)', before: '10%', after: '60%', pct: 75 },
                  { metric: 'Channel engagement rates', before: '15%', after: '70%', pct: 80 },
                ].map((item, i) => (
                  <div key={i} className="bg-black border border-zinc-800 p-4 rounded">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-zinc-400">{item.metric}</span>
                      <div className="flex items-center gap-4 text-xs font-mono">
                        <span className="text-red-500">{item.before}</span>
                        <ArrowRight size={12} className="text-zinc-600" />
                        <span className="text-green-500">{item.after}</span>
                      </div>
                    </div>
                    <div className="h-2 bg-zinc-800 rounded overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded"
                        style={{ width: `${item.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Related */}
            <div className="border border-zinc-800 p-8 mb-8 bg-zinc-950">
              <h2 className="text-xl font-black mb-4">RELATED DIMENSIONS</h2>
              <div className="flex flex-wrap gap-3">
                <Link href="/actions/knowledge-flow" className="text-sm border border-zinc-700 px-4 py-2 hover:border-cyan-600 transition-colors flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  Knowledge Flow →
                </Link>
                <Link href="/actions/error-loops" className="text-sm border border-zinc-700 px-4 py-2 hover:border-cyan-600 transition-colors flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  Error Loops →
                </Link>
                <Link href="/gpi-framework/knowledge-velocity" className="text-sm border border-zinc-700 px-4 py-2 hover:border-cyan-600 transition-colors flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full" />
                  Framework Deep Dive →
                </Link>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center pt-8 border-t border-zinc-900">
              <p className="text-zinc-500 mb-6">
                Want to see your exact Knowledge Velocity score?
              </p>
              <Link
                href="/diagnostic"
                className="inline-flex items-center gap-2 bg-red-600 px-8 py-4 text-lg font-black hover:bg-red-700 transition-colors group"
              >
                TAKE THE GPI DIAGNOSTIC
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default VelocityBoostPage;
