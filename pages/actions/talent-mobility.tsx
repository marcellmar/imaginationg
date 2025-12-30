import type { NextPage } from 'next';
import Link from 'next/link';
import SEOHead from '../../components/SEOHead';
import Navigation from '../../components/Navigation';
import { Users, AlertTriangle, CheckCircle, ArrowRight, UserPlus, ArrowUpRight, Shuffle, TrendingUp } from 'lucide-react';

const TalentMobilityPage: NextPage = () => {
  return (
    <>
      <SEOHead
        title="Talent Mobility — Enable Internal Movement | GPI Action Guide"
        description="People are stuck. Managers hoard. Skills don't flow to impact. Here's how to enable movement. Free GPI action guide for Talent Flow."
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
                <span className="text-xs font-mono bg-yellow-600/20 text-yellow-400 px-3 py-1 rounded">
                  TALENT FLOW (10%)
                </span>
              </div>

              {/* Hero Visual */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h1 className="text-4xl md:text-5xl font-black mb-4">
                    TALENT MOBILITY<span className="text-red-600">.</span>
                  </h1>
                  <p className="text-xl text-zinc-400">
                    People are stuck. Managers hoard their best people. Skills don't flow to impact.
                  </p>
                </div>

                {/* Movement Visual */}
                <div className="flex items-center justify-center">
                  <div className="relative w-48 h-32">
                    {/* Static boxes (before) */}
                    <div className="absolute left-0 top-0 flex flex-col gap-2 opacity-40">
                      {[0, 1, 2].map((i) => (
                        <div key={i} className="w-8 h-8 border-2 border-yellow-500 rounded flex items-center justify-center">
                          <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                        </div>
                      ))}
                    </div>

                    {/* Arrows showing movement */}
                    <div className="absolute left-12 top-1/2 -translate-y-1/2">
                      <Shuffle className="text-yellow-500 animate-pulse" size={32} />
                    </div>

                    {/* Dynamic movement (after) */}
                    <div className="absolute right-0 top-0 flex flex-col gap-2">
                      {[0, 1, 2].map((i) => (
                        <div
                          key={i}
                          className="w-8 h-8 border-2 border-green-500 rounded flex items-center justify-center animate-bounce"
                          style={{ animationDelay: `${i * 200}ms`, animationDuration: '2s' }}
                        >
                          <div className="w-3 h-3 bg-green-500 rounded-full" />
                        </div>
                      ))}
                    </div>

                    {/* Connection lines */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 130">
                      <path d="M 45 20 Q 100 50 155 40" fill="none" stroke="#22c55e" strokeWidth="2" strokeDasharray="5 5" className="animate-pulse" />
                      <path d="M 45 65 Q 100 65 155 65" fill="none" stroke="#22c55e" strokeWidth="2" strokeDasharray="5 5" className="animate-pulse" style={{ animationDelay: '300ms' }} />
                      <path d="M 45 110 Q 100 80 155 90" fill="none" stroke="#22c55e" strokeWidth="2" strokeDasharray="5 5" className="animate-pulse" style={{ animationDelay: '600ms' }} />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-zinc-950 border border-zinc-800 p-4 text-center">
                  <Users className="mx-auto text-red-500 mb-2" size={24} />
                  <div className="text-2xl font-black text-red-500">6mo</div>
                  <div className="text-xs text-zinc-500">Avg transfer time</div>
                </div>
                <div className="bg-zinc-950 border border-zinc-800 p-4 text-center">
                  <ArrowUpRight className="mx-auto text-yellow-500 mb-2" size={24} />
                  <div className="text-2xl font-black text-yellow-500">15%</div>
                  <div className="text-xs text-zinc-500">Internal mobility rate</div>
                </div>
                <div className="bg-zinc-950 border border-zinc-800 p-4 text-center">
                  <TrendingUp className="mx-auto text-green-500 mb-2" size={24} />
                  <div className="text-2xl font-black text-green-500">40%</div>
                  <div className="text-xs text-zinc-500">Target mobility rate</div>
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
                  Low Talent Flow means people can't move to where they'd create the most value.
                  They're locked in roles by managers, politics, or invisible walls.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  {[
                    { icon: '🔒', text: 'Internal transfers take months of negotiation' },
                    { icon: '🦹', text: 'Managers block moves of best performers' },
                    { icon: '🚪', text: 'People leave company to change roles' },
                    { icon: '⚖️', text: 'Skills shortages next to skills surplus' },
                    { icon: '🚧', text: '"Not my department" prevents cross-functional help' },
                    { icon: '😔', text: 'High performers feel trapped and disengage' },
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
                  { title: 'Manager Incentives', desc: 'Managers are measured on their team\'s output, not on developing people for the org.' },
                  { title: 'Replacement Cost', desc: 'Losing someone means hiring, training, ramping. Easier to just block the move.' },
                  { title: 'Career Paths = Ladders', desc: 'Only "up" counts as progress. Lateral moves seen as stagnation.' },
                  { title: 'No Visibility', desc: 'People don\'t know what opportunities exist. Skills aren\'t visible across the org.' },
                ].map((cause, i) => (
                  <div key={i} className="border border-zinc-800 p-6 hover:border-yellow-600 transition-all">
                    <h3 className="font-bold text-yellow-500 mb-2">{cause.title}</h3>
                    <p className="text-zinc-400 text-sm">{cause.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* The Fix */}
            <div className="border-2 border-yellow-600 p-8 mb-8 bg-gradient-to-b from-black to-yellow-950/10 relative overflow-hidden">
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl" />

              <h2 className="text-2xl font-black mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                  <CheckCircle className="text-white" size={20} />
                </div>
                THE FIX
              </h2>

              <div className="space-y-6 relative">
                {[
                  { num: '01', title: 'Make Internal Moves Frictionless', desc: 'Employees should be able to apply internally without manager permission. Remove the "permission to explore" barrier. Let conversations happen first.', code: ['✓ Apply without current manager approval', '✓ Hiring manager can interview freely', '✓ Current manager notified only on offer', '✓ 30-day transition period guaranteed'] },
                  { num: '02', title: 'Reward Managers Who Develop, Not Hoard', desc: 'Track "talent exported" as a positive metric. Managers who grow people into new roles should be celebrated, not penalized.' },
                  { num: '03', title: 'Create Short-Term Project Mobility', desc: 'Before permanent moves, enable 2-4 week rotations or project assignments. Low-risk way for people to explore and build cross-team relationships.' },
                  { num: '04', title: 'Make Skills Visible', desc: 'Internal skills database or profiles that show what people know, not just their job title. Make it easy to find "who knows X" across the org.' },
                  { num: '05', title: 'Celebrate Lateral Moves', desc: 'Publicly recognize people who take on new challenges. Kill the stigma that only promotions count. Breadth of experience is an asset.' },
                ].map((step, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 border-2 border-yellow-600 rounded-full flex items-center justify-center font-black text-yellow-500 group-hover:bg-yellow-600 group-hover:text-black transition-all">
                        {step.num}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-zinc-400 mb-4">{step.desc}</p>
                      {step.code && (
                        <div className="bg-zinc-900 border border-zinc-800 p-4 text-sm font-mono rounded">
                          <p className="text-yellow-400 mb-2">// Internal mobility policy</p>
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
                <div className="w-10 h-10 bg-yellow-600 rounded-lg flex items-center justify-center">
                  <Users className="text-white" size={20} />
                </div>
                HOW TO MEASURE PROGRESS
              </h2>

              <div className="space-y-4">
                {[
                  { metric: 'Internal mobility rate', before: '15%', after: '40%', pct: 80 },
                  { metric: 'Time from application to transfer', before: '6 months', after: '30 days', pct: 92 },
                  { metric: 'Retention of internal transfer requesters', before: '40%', after: '90%', pct: 85 },
                  { metric: 'Cross-functional project participation', before: '10%', after: '50%', pct: 75 },
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
                <Link href="/actions/knowledge-flow" className="text-sm border border-zinc-700 px-4 py-2 hover:border-yellow-600 transition-colors flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  Knowledge Flow →
                </Link>
                <Link href="/actions/unlock-structure" className="text-sm border border-zinc-700 px-4 py-2 hover:border-yellow-600 transition-colors flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full" />
                  Unlock Structure →
                </Link>
                <Link href="/gpi-framework/talent-flow" className="text-sm border border-zinc-700 px-4 py-2 hover:border-yellow-600 transition-colors flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                  Framework Deep Dive →
                </Link>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center pt-8 border-t border-zinc-900">
              <p className="text-zinc-500 mb-6">
                Want to see your exact Talent Flow score?
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

export default TalentMobilityPage;
