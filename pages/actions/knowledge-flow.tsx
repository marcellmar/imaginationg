import type { NextPage } from 'next';
import Link from 'next/link';
import SEOHead from '../../components/SEOHead';
import Navigation from '../../components/Navigation';
import { Database, AlertTriangle, CheckCircle, ArrowRight, Brain, Users, BookOpen, Share2 } from 'lucide-react';

const KnowledgeFlowPage: NextPage = () => {
  return (
    <>
      <SEOHead
        title="Knowledge Flow — Distribute Critical Information | GPI Action Guide"
        description="Information hides. Expertise is trapped. Critical knowledge walks out the door. Here's how to distribute what matters. Free GPI action guide for Knowledge Location."
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
                <span className="text-xs font-mono bg-blue-600/20 text-blue-400 px-3 py-1 rounded">
                  KNOWLEDGE LOCATION (15%)
                </span>
              </div>

              {/* Hero Visual */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h1 className="text-4xl md:text-5xl font-black mb-4">
                    KNOWLEDGE FLOW<span className="text-red-600">.</span>
                  </h1>
                  <p className="text-xl text-zinc-400">
                    Information hides. Expertise is trapped in heads. Critical knowledge walks out the door.
                  </p>
                </div>

                {/* Network Visual */}
                <div className="flex items-center justify-center">
                  <div className="relative w-48 h-48">
                    {/* Central node */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center z-10">
                      <Brain className="text-black" size={24} />
                    </div>
                    {/* Connected nodes */}
                    {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                      <div
                        key={i}
                        className="absolute w-8 h-8 bg-blue-500/30 rounded-full border-2 border-blue-500 flex items-center justify-center"
                        style={{
                          top: `${50 + 40 * Math.sin(angle * Math.PI / 180)}%`,
                          left: `${50 + 40 * Math.cos(angle * Math.PI / 180)}%`,
                          transform: 'translate(-50%, -50%)',
                          animationDelay: `${i * 200}ms`
                        }}
                      >
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                      </div>
                    ))}
                    {/* Connection lines */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                      {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                        <line
                          key={i}
                          x1="50"
                          y1="50"
                          x2={50 + 35 * Math.cos(angle * Math.PI / 180)}
                          y2={50 + 35 * Math.sin(angle * Math.PI / 180)}
                          stroke="#3b82f6"
                          strokeWidth="1"
                          strokeDasharray="3 3"
                          className="animate-pulse"
                          style={{ animationDelay: `${i * 100}ms` }}
                        />
                      ))}
                    </svg>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-zinc-950 border border-zinc-800 p-4 text-center">
                  <Users className="mx-auto text-red-500 mb-2" size={24} />
                  <div className="text-2xl font-black text-red-500">1</div>
                  <div className="text-xs text-zinc-500">Single point of failure</div>
                </div>
                <div className="bg-zinc-950 border border-zinc-800 p-4 text-center">
                  <BookOpen className="mx-auto text-yellow-500 mb-2" size={24} />
                  <div className="text-2xl font-black text-yellow-500">6mo</div>
                  <div className="text-xs text-zinc-500">New hire ramp time</div>
                </div>
                <div className="bg-zinc-950 border border-zinc-800 p-4 text-center">
                  <Share2 className="mx-auto text-green-500 mb-2" size={24} />
                  <div className="text-2xl font-black text-green-500">3+</div>
                  <div className="text-xs text-zinc-500">Knowledge redundancy target</div>
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
                  High Knowledge Location friction means critical information is trapped in individual
                  heads instead of distributed across the organization.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  {[
                    { icon: '🧠', text: '"Only Sarah knows how that system works"' },
                    { icon: '🐢', text: 'New hires take 6+ months to become productive' },
                    { icon: '🔄', text: 'Same questions get asked and answered repeatedly' },
                    { icon: '📁', text: 'Documentation exists but nobody can find it' },
                    { icon: '📧', text: 'Critical processes live in email threads' },
                    { icon: '🚪', text: 'Departures cause project delays or failures' },
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
                  { title: 'Knowledge As Power', desc: 'Being the only one who knows something feels like job security. Sharing feels risky.' },
                  { title: 'No Documentation Habit', desc: 'Writing things down isn\'t part of the workflow. Learning stays verbal.' },
                  { title: 'Search Is Broken', desc: 'Information exists somewhere but finding it takes longer than asking someone.' },
                  { title: 'Expertise Rewarded, Teaching Isn\'t', desc: 'Being the expert gets promoted. Making others experts doesn\'t.' },
                ].map((cause, i) => (
                  <div key={i} className="border border-zinc-800 p-6 hover:border-blue-600 transition-all">
                    <h3 className="font-bold text-blue-500 mb-2">{cause.title}</h3>
                    <p className="text-zinc-400 text-sm">{cause.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* The Fix */}
            <div className="border-2 border-blue-600 p-8 mb-8 bg-gradient-to-b from-black to-blue-950/10 relative overflow-hidden">
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />

              <h2 className="text-2xl font-black mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                  <CheckCircle className="text-white" size={20} />
                </div>
                THE FIX
              </h2>

              <div className="space-y-6 relative">
                {[
                  { num: '01', title: 'Document Decisions, Not Just Outcomes', desc: 'Write down WHY you made a choice, not just what you decided. Future you (or your replacement) needs the reasoning, not just the result.', code: ['Context: We needed to choose a database', 'Decision: PostgreSQL over MongoDB', 'Why: Relational data, ACID compliance needed', 'Trade-offs: Less flexible schema'] },
                  { num: '02', title: 'Pair New With Experienced', desc: 'Don\'t just assign mentors—have new people shadow critical processes. Watching work get done transfers tacit knowledge that can\'t be written down.' },
                  { num: '03', title: 'Make Teaching Part of the Job', desc: 'Include "knowledge transfer" in performance reviews and promotion criteria. If you can\'t explain it to others, you don\'t fully own it yet.' },
                  { num: '04', title: 'Record Tribal Knowledge Sessions', desc: 'Monthly "how things actually work" sessions, recorded and searchable. Let experts explain the undocumented reality behind the official process.' },
                  { num: '05', title: 'Create Runbooks For Everything Critical', desc: 'If you\'d be in trouble when someone is on vacation, write the runbook. Step-by-step guides that let anyone handle the critical paths.' },
                ].map((step, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 border-2 border-blue-600 rounded-full flex items-center justify-center font-black text-blue-500 group-hover:bg-blue-600 group-hover:text-black transition-all">
                        {step.num}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-zinc-400 mb-4">{step.desc}</p>
                      {step.code && (
                        <div className="bg-zinc-900 border border-zinc-800 p-4 text-sm font-mono rounded">
                          <p className="text-blue-400 mb-2">// ADR (Architecture Decision Record)</p>
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
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Database className="text-white" size={20} />
                </div>
                HOW TO MEASURE PROGRESS
              </h2>

              <div className="space-y-4">
                {[
                  { metric: 'Time-to-productivity for new hires', before: '6 months', after: '6 weeks', pct: 85 },
                  { metric: 'Single points of failure count', before: '12+', after: '0', pct: 100 },
                  { metric: 'Documentation freshness (updated in 90 days)', before: '20%', after: '90%', pct: 90 },
                  { metric: 'Repeat question frequency', before: 'Daily', after: 'Rare', pct: 80 },
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
                <Link href="/actions/velocity-boost" className="text-sm border border-zinc-700 px-4 py-2 hover:border-blue-600 transition-colors flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full" />
                  Velocity Boost →
                </Link>
                <Link href="/actions/talent-mobility" className="text-sm border border-zinc-700 px-4 py-2 hover:border-blue-600 transition-colors flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                  Talent Mobility →
                </Link>
                <Link href="/gpi-framework/knowledge-location" className="text-sm border border-zinc-700 px-4 py-2 hover:border-blue-600 transition-colors flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  Framework Deep Dive →
                </Link>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center pt-8 border-t border-zinc-900">
              <p className="text-zinc-500 mb-6">
                Want to see your exact Knowledge Location score?
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

export default KnowledgeFlowPage;
