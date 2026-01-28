import type { NextPage } from 'next';
import Link from 'next/link';
import SEOHead from '../../components/SEOHead';
import Navigation from '../../components/Navigation';
import { RefreshCw, AlertTriangle, CheckCircle, ArrowRight, Target, RotateCcw, Skull } from 'lucide-react';

const ErrorLoopsPage: NextPage = () => {
  return (
    <>
      <SEOHead
        title="Error Loops — Build Real Feedback Cycles | GPI Action Guide"
        description="Mistakes compound. Bad decisions persist. Here's how to build feedback loops that actually correct. Free GPI action guide for Error Correction."
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
                <span className="text-xs font-mono bg-green-600/20 text-green-400 px-3 py-1 rounded">
                  ERROR CORRECTION (20%)
                </span>
                <span className="text-xs font-mono text-zinc-600">HIGHEST WEIGHTED DIMENSION</span>
              </div>

              {/* Hero Visual */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h1 className="text-4xl md:text-5xl font-black mb-4">
                    ERROR LOOPS<span className="text-red-600">.</span>
                  </h1>
                  <p className="text-xl text-zinc-400">
                    Mistakes compound. Bad decisions persist. Sunk costs rule.
                    Here's how to build feedback loops that actually correct course.
                  </p>
                </div>

                {/* Feedback Loop Visual */}
                <div className="flex items-center justify-center">
                  <div className="relative w-40 h-40">
                    {/* Broken loop (before) */}
                    <div className="absolute inset-0 opacity-30">
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        <path
                          d="M50 10 A40 40 0 1 1 10 50"
                          fill="none"
                          stroke="#ef4444"
                          strokeWidth="4"
                          strokeDasharray="8 8"
                        />
                        <circle cx="10" cy="50" r="6" fill="#ef4444" />
                      </svg>
                    </div>
                    {/* Complete loop (after) */}
                    <div className="absolute inset-0">
                      <svg viewBox="0 0 100 100" className="w-full h-full animate-spin" style={{ animationDuration: '8s' }}>
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          fill="none"
                          stroke="#22c55e"
                          strokeWidth="4"
                          strokeDasharray="200 50"
                        />
                      </svg>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <RefreshCw className="text-green-500 animate-pulse" size={32} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-zinc-950 border border-zinc-800 p-4 text-center">
                  <Skull className="mx-auto text-red-500 mb-2" size={24} />
                  <div className="text-2xl font-black text-red-500">82%</div>
                  <div className="text-xs text-zinc-500">Denials overturned on appeal</div>
                </div>
                <div className="bg-zinc-950 border border-zinc-800 p-4 text-center">
                  <RotateCcw className="mx-auto text-yellow-500 mb-2" size={24} />
                  <div className="text-2xl font-black text-yellow-500">6mo</div>
                  <div className="text-xs text-zinc-500">Avg post-mortem delay</div>
                </div>
                <div className="bg-zinc-950 border border-zinc-800 p-4 text-center">
                  <Target className="mx-auto text-green-500 mb-2" size={24} />
                  <div className="text-2xl font-black text-green-500">48hrs</div>
                  <div className="text-xs text-zinc-500">Target correction speed</div>
                </div>
              </div>
            </div>

            {/* The Problem */}
            <div className="border border-zinc-800 p-8 mb-8 bg-zinc-950 relative overflow-hidden">
              {/* Background - Broken circles */}
              <div className="absolute top-4 right-4 opacity-10">
                <svg width="80" height="80" viewBox="0 0 80 80">
                  <circle cx="40" cy="40" r="35" fill="none" stroke="#ef4444" strokeWidth="3" strokeDasharray="20 10" />
                  <circle cx="40" cy="40" r="25" fill="none" stroke="#ef4444" strokeWidth="2" strokeDasharray="15 10" />
                </svg>
              </div>

              <h2 className="text-2xl font-black mb-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="text-white" size={20} />
                </div>
                THE PROBLEM
              </h2>
              <div className="space-y-4 text-zinc-300">
                <p>
                  Low Error Correction means the organization can't learn from mistakes.
                  Bad decisions persist long after evidence shows they're wrong.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  {[
                    { icon: '🚂', text: 'Projects continue despite clear failure signals' },
                    { icon: '💸', text: '"We\'ve invested too much to stop now" reasoning' },
                    { icon: '📅', text: 'Post-mortems happen months late (or never)' },
                    { icon: '🔁', text: 'Same mistakes repeat across teams' },
                    { icon: '😤', text: 'Critique treated as personal attack' },
                    { icon: '🙈', text: 'Bad news filtered before reaching leadership' },
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
                  { title: 'Failure Is Punished', desc: 'When admitting mistakes hurts careers, errors get hidden instead of fixed.', color: 'green' },
                  { title: 'Ego Over Evidence', desc: 'Changing course feels like admitting you were wrong. So you double down.', color: 'emerald' },
                  { title: 'No Feedback Loops', desc: 'Ship and forget. No measurement of what worked. No learning cycle.', color: 'teal' },
                  { title: 'Sunk Cost Fallacy', desc: 'Past investment justifies future investment, regardless of outcomes.', color: 'cyan' },
                ].map((cause, i) => (
                  <div key={i} className="border border-zinc-800 p-6 hover:border-green-600 transition-all group">
                    <h3 className="font-bold text-green-500 mb-2">{cause.title}</h3>
                    <p className="text-zinc-400 text-sm">{cause.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* The Fix */}
            <div className="border-2 border-green-600 p-8 mb-8 bg-gradient-to-b from-black to-green-950/10 relative overflow-hidden">
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-green-500/5 rounded-full blur-3xl" />

              <h2 className="text-2xl font-black mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                  <CheckCircle className="text-white" size={20} />
                </div>
                THE FIX
              </h2>

              <div className="space-y-6 relative">
                {[
                  { num: '01', title: 'Make Failure Safe', desc: 'Celebrate killed projects. Publicly praise people who admit something isn\'t working early, before more resources are wasted. "Good kill" should be a compliment.' },
                  { num: '02', title: 'Pre-Define Kill Criteria', desc: 'Before starting any initiative, write down: "We will stop this if [X] happens." Agreed-upon criteria remove ego from the decision.', code: ['Kill if: <100 users after 30 days', 'Kill if: Negative NPS after 3 months', 'Kill if: 2x over budget with no path'] },
                  { num: '03', title: 'Weekly Retros, Not Quarterly', desc: 'Fast feedback loops beat slow ones. What went wrong this week? What will we do differently next week? Keep it short, make it regular.' },
                  { num: '04', title: 'Separate Identity from Ideas', desc: 'Train people that critiquing an idea isn\'t critiquing them. "This approach isn\'t working" is different from "you failed."' },
                  { num: '05', title: 'Track Correction Speed', desc: 'Measure: How long from "evidence of problem" to "course correction"? Make this metric visible. Compete to shorten it.' },
                ].map((step, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 border-2 border-green-600 rounded-full flex items-center justify-center font-black text-green-500 group-hover:bg-green-600 group-hover:text-black transition-all">
                        {step.num}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-zinc-400 mb-4">{step.desc}</p>
                      {step.code && (
                        <div className="bg-zinc-900 border border-zinc-800 p-4 text-sm font-mono rounded">
                          <p className="text-green-400 mb-2">// Example kill criteria</p>
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
                  <RefreshCw className="text-white" size={20} />
                </div>
                HOW TO MEASURE PROGRESS
              </h2>

              <div className="space-y-4">
                {[
                  { metric: 'Time from problem identified to corrective action', before: '90 days', after: '7 days', pct: 92 },
                  { metric: 'Projects killed before completion', before: '5%', after: '25%', pct: 75 },
                  { metric: 'Repeat mistake rate', before: 'High', after: 'Low', pct: 85 },
                  { metric: 'Post-mortem completion rate', before: '20%', after: '95%', pct: 90 },
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
                <Link href="/actions/decision-speed" className="text-sm border border-zinc-700 px-4 py-2 hover:border-green-600 transition-colors flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full" />
                  Decision Speed →
                </Link>
                <Link href="/actions/velocity-boost" className="text-sm border border-zinc-700 px-4 py-2 hover:border-green-600 transition-colors flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full" />
                  Velocity Boost →
                </Link>
                <Link href="/gpi-framework/error-correction" className="text-sm border border-zinc-700 px-4 py-2 hover:border-green-600 transition-colors flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  Framework Deep Dive →
                </Link>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center pt-8 border-t border-zinc-900">
              <p className="text-zinc-500 mb-6">
                Want to see your exact Error Correction score?
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

export default ErrorLoopsPage;
