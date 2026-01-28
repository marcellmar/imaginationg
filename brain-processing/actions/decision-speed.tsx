import type { NextPage } from 'next';
import Link from 'next/link';
import SEOHead from '../../components/SEOHead';
import Navigation from '../../components/Navigation';
import { Clock, AlertTriangle, CheckCircle, ArrowRight, Zap, Users, Timer, TrendingDown } from 'lucide-react';

const DecisionSpeedPage: NextPage = () => {
  return (
    <>
      <SEOHead
        title="Decision Speed — Reduce Decision Latency | GPI Action Guide"
        description="Decisions stall. Approvals queue. Here's how to move from committee paralysis to distributed authority. Free GPI action guide for Decision Latency."
      />

      <div className="min-h-screen bg-black text-white">
        <Navigation currentPage="actions" />

        <section className="pt-24 pb-16 px-6">
          <div className="max-w-4xl mx-auto">
            {/* Header with Visual */}
            <div className="mb-12">
              <Link href="/actions" className="text-zinc-500 hover:text-white text-sm mb-4 inline-block">
                ← All Action Guides
              </Link>

              <div className="flex items-center gap-3 mb-6">
                <span className="text-xs font-mono bg-red-600/20 text-red-400 px-3 py-1 rounded">
                  DECISION LATENCY (20%)
                </span>
                <span className="text-xs font-mono text-zinc-600">HIGHEST WEIGHTED DIMENSION</span>
              </div>

              {/* Hero Visual */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h1 className="text-4xl md:text-5xl font-black mb-4">
                    DECISION SPEED<span className="text-red-600">.</span>
                  </h1>
                  <p className="text-xl text-zinc-400">
                    Decisions stall. Approvals queue. The organization waits while opportunities pass.
                  </p>
                </div>

                {/* Transformation Visual */}
                <div className="flex items-center justify-center gap-6">
                  {/* Before: Particle State */}
                  <div className="text-center">
                    <div className="grid grid-cols-4 gap-1 mb-2">
                      {Array.from({ length: 16 }).map((_, i) => (
                        <div
                          key={i}
                          className="w-3 h-3 bg-red-500 rounded-sm animate-pulse"
                          style={{ animationDelay: `${i * 50}ms` }}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-red-500 font-mono">STALLED</span>
                  </div>

                  {/* Arrow */}
                  <div className="flex flex-col items-center">
                    <ArrowRight className="text-zinc-600" size={32} />
                    <span className="text-xs text-zinc-600 mt-1">TRANSFORM</span>
                  </div>

                  {/* After: Field State */}
                  <div className="text-center">
                    <div className="relative w-16 h-16 mb-2">
                      <div className="absolute inset-0 border-2 border-green-500 rounded-full opacity-30 animate-ping" style={{ animationDuration: '2s' }} />
                      <div className="absolute inset-2 border-2 border-green-500 rounded-full opacity-50" />
                      <div className="absolute inset-4 border-2 border-green-500 rounded-full opacity-70" />
                      <div className="absolute inset-6 bg-green-500 rounded-full animate-pulse" />
                    </div>
                    <span className="text-xs text-green-500 font-mono">FLOWING</span>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-zinc-950 border border-zinc-800 p-4 text-center">
                  <Timer className="mx-auto text-red-500 mb-2" size={24} />
                  <div className="text-2xl font-black text-red-500">72hrs</div>
                  <div className="text-xs text-zinc-500">Avg decision time (particle)</div>
                </div>
                <div className="bg-zinc-950 border border-zinc-800 p-4 text-center">
                  <Users className="mx-auto text-yellow-500 mb-2" size={24} />
                  <div className="text-2xl font-black text-yellow-500">8+</div>
                  <div className="text-xs text-zinc-500">Approvers per decision</div>
                </div>
                <div className="bg-zinc-950 border border-zinc-800 p-4 text-center">
                  <Zap className="mx-auto text-green-500 mb-2" size={24} />
                  <div className="text-2xl font-black text-green-500">4hrs</div>
                  <div className="text-xs text-zinc-500">Target (field state)</div>
                </div>
              </div>
            </div>

            {/* The Problem */}
            <div className="border border-zinc-800 p-8 mb-8 bg-zinc-950 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                <div className="grid grid-cols-4 gap-2">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <div key={i} className="w-6 h-6 bg-red-500" />
                  ))}
                </div>
              </div>

              <h2 className="text-2xl font-black mb-4 flex items-center gap-3 relative">
                <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="text-white" size={20} />
                </div>
                THE PROBLEM
              </h2>
              <div className="space-y-4 text-zinc-300 relative">
                <p>
                  High Decision Latency means decisions take too long to make. Not because the decisions
                  are complex, but because the organization has built friction into the process.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  {[
                    { icon: '🔄', text: 'Multiple approval layers for routine choices' },
                    { icon: '⏰', text: '"Let\'s circle back" as default response' },
                    { icon: '👥', text: 'Consensus required from people without context' },
                    { icon: '🔁', text: 'Same decisions re-litigated across meetings' },
                    { icon: '🚫', text: 'Junior employees never authorized to decide' },
                    { icon: '😰', text: 'Fear of "wrong" choice leads to no choice' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 bg-black/50 p-3 rounded border border-zinc-800">
                      <span className="text-xl">{item.icon}</span>
                      <span className="text-sm text-zinc-400">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Root Causes - Visual Cards */}
            <div className="mb-8">
              <h2 className="text-2xl font-black mb-6">WHY IT HAPPENS</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    title: 'Risk Aversion Culture',
                    desc: 'Past failures created excessive caution. Now every decision needs cover.',
                    icon: <TrendingDown className="text-red-500" size={24} />,
                    color: 'red'
                  },
                  {
                    title: 'Unclear Ownership',
                    desc: 'Nobody knows who has authority to decide what. So everyone weighs in.',
                    icon: <Users className="text-orange-500" size={24} />,
                    color: 'orange'
                  },
                  {
                    title: 'Consensus Addiction',
                    desc: 'The belief that everyone must agree before anyone can act.',
                    icon: <Users className="text-yellow-500" size={24} />,
                    color: 'yellow'
                  },
                  {
                    title: 'Analysis Paralysis',
                    desc: 'Waiting for "perfect" information that never comes.',
                    icon: <Clock className="text-purple-500" size={24} />,
                    color: 'purple'
                  },
                ].map((cause, i) => (
                  <div
                    key={i}
                    className={`border border-zinc-800 p-6 bg-gradient-to-br from-zinc-950 to-${cause.color}-950/20 hover:border-${cause.color}-600 transition-all group`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 bg-${cause.color}-600/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        {cause.icon}
                      </div>
                      <div>
                        <h3 className={`font-bold text-${cause.color}-500 mb-2`}>{cause.title}</h3>
                        <p className="text-zinc-400 text-sm">{cause.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* The Fix - Visual Steps */}
            <div className="border-2 border-red-600 p-8 mb-8 bg-gradient-to-b from-black to-red-950/10 relative overflow-hidden">
              {/* Background Accent */}
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-green-500/5 rounded-full blur-3xl" />

              <h2 className="text-2xl font-black mb-8 flex items-center gap-3 relative">
                <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                  <CheckCircle className="text-white" size={20} />
                </div>
                THE FIX
              </h2>

              <div className="space-y-6 relative">
                {[
                  {
                    num: '01',
                    title: 'Create a Decision Rights Matrix',
                    desc: 'Document who can decide what, unilaterally. Make it public. When someone asks "who decides X?" there should be one name, not a committee.',
                    code: ['Hiring decisions under $80K: Hiring manager', 'Feature prioritization: Product lead', 'Customer refunds under $500: Support rep']
                  },
                  {
                    num: '02',
                    title: 'Force Binary Framing',
                    desc: 'Ban "let\'s think about it" as an outcome. Every decision discussion ends with YES, NO, or a specific date when the decision WILL be made.',
                    code: null
                  },
                  {
                    num: '03',
                    title: 'Institute Decision Time Limits',
                    desc: 'Set explicit time boundaries. "If we haven\'t decided in 48 hours, the default is [X]." This forces action over deliberation.',
                    code: null
                  },
                  {
                    num: '04',
                    title: 'Reward Fast Wrong Over Slow Right',
                    desc: 'Celebrate quick decisions that got corrected, not slow decisions that were "right." Speed of learning beats accuracy of guessing.',
                    code: null
                  },
                  {
                    num: '05',
                    title: 'Push Decisions Down',
                    desc: 'The person closest to the information should make the call. Every time a decision escalates "just to be safe," you\'ve added latency.',
                    code: null
                  },
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
                          <p className="text-green-400 mb-2">// Example structure</p>
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

            {/* Measurement - Progress Visual */}
            <div className="border border-zinc-800 p-8 mb-8 bg-zinc-950">
              <h2 className="text-2xl font-black mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Clock className="text-white" size={20} />
                </div>
                HOW TO MEASURE PROGRESS
              </h2>

              <div className="space-y-4">
                {[
                  { metric: 'Time from "decision raised" to "decision made"', before: '72hrs', after: '4hrs', pct: 94 },
                  { metric: 'Number of people in routine decisions', before: '8+', after: '1-2', pct: 85 },
                  { metric: 'Decisions made at first discussion', before: '20%', after: '80%', pct: 80 },
                  { metric: 'Escalations per week', before: '25+', after: '5', pct: 80 },
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
                        className="h-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded transition-all duration-1000"
                        style={{ width: `${item.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-zinc-500 mt-6 text-sm">
                Retake the GPI diagnostic in 90 days. Your Decision Latency score should improve
                by 0.5-1.5 points if you've implemented these changes consistently.
              </p>
            </div>

            {/* Related */}
            <div className="border border-zinc-800 p-8 mb-8 bg-zinc-950">
              <h2 className="text-xl font-black mb-4">RELATED DIMENSIONS</h2>
              <p className="text-zinc-400 mb-4">
                Decision Latency often correlates with these other friction points:
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/actions/error-loops" className="text-sm border border-zinc-700 px-4 py-2 hover:border-red-600 transition-colors flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  Error Loops →
                </Link>
                <Link href="/actions/unlock-structure" className="text-sm border border-zinc-700 px-4 py-2 hover:border-red-600 transition-colors flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full" />
                  Unlock Structure →
                </Link>
                <Link href="/gpi-framework/decision-latency" className="text-sm border border-zinc-700 px-4 py-2 hover:border-red-600 transition-colors flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full" />
                  Framework Deep Dive →
                </Link>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center pt-8 border-t border-zinc-900">
              <p className="text-zinc-500 mb-6">
                Want to see your exact Decision Latency score?
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

export default DecisionSpeedPage;
