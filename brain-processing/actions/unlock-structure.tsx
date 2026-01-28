import type { NextPage } from 'next';
import Link from 'next/link';
import SEOHead from '../../components/SEOHead';
import Navigation from '../../components/Navigation';
import { Unlock, AlertTriangle, CheckCircle, ArrowRight, Lock, Key, Layers, RefreshCw } from 'lucide-react';

const UnlockStructurePage: NextPage = () => {
  return (
    <>
      <SEOHead
        title="Unlock Structure — Break Calcified Patterns | GPI Action Guide"
        description="Process has become identity. 'That's how we do it' kills adaptation. Here's how to break calcified patterns. Free GPI action guide for Structural Lock-In."
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
                <span className="text-xs font-mono bg-purple-600/20 text-purple-400 px-3 py-1 rounded">
                  STRUCTURAL LOCK-IN (15%)
                </span>
              </div>

              {/* Hero Visual */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h1 className="text-4xl md:text-5xl font-black mb-4">
                    UNLOCK STRUCTURE<span className="text-red-600">.</span>
                  </h1>
                  <p className="text-xl text-zinc-400">
                    Process has become identity. "That's how we do it" kills adaptation.
                    Here's how to break calcified patterns.
                  </p>
                </div>

                {/* Lock to Unlock Visual */}
                <div className="flex items-center justify-center gap-8">
                  {/* Locked */}
                  <div className="text-center">
                    <div className="w-16 h-16 border-4 border-purple-500 rounded-lg flex items-center justify-center mb-2 relative">
                      <Lock className="text-purple-500" size={28} />
                      <div className="absolute inset-0 border-4 border-purple-500/30 rounded-lg animate-pulse" />
                    </div>
                    <span className="text-xs text-purple-500 font-mono">LOCKED</span>
                  </div>

                  {/* Arrow */}
                  <div className="flex flex-col items-center">
                    <Key className="text-yellow-500 animate-bounce" size={24} />
                    <ArrowRight className="text-zinc-600 mt-2" size={24} />
                  </div>

                  {/* Unlocked */}
                  <div className="text-center">
                    <div className="w-16 h-16 border-4 border-green-500 rounded-lg flex items-center justify-center mb-2 relative">
                      <Unlock className="text-green-500" size={28} />
                      <div className="absolute -inset-2 border-2 border-green-500/20 rounded-xl animate-ping" style={{ animationDuration: '2s' }} />
                    </div>
                    <span className="text-xs text-green-500 font-mono">ADAPTIVE</span>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-zinc-950 border border-zinc-800 p-4 text-center">
                  <Lock className="mx-auto text-red-500 mb-2" size={24} />
                  <div className="text-2xl font-black text-red-500">5+ yrs</div>
                  <div className="text-xs text-zinc-500">Avg process age</div>
                </div>
                <div className="bg-zinc-950 border border-zinc-800 p-4 text-center">
                  <Layers className="mx-auto text-yellow-500 mb-2" size={24} />
                  <div className="text-2xl font-black text-yellow-500">12mo</div>
                  <div className="text-xs text-zinc-500">Time to change process</div>
                </div>
                <div className="bg-zinc-950 border border-zinc-800 p-4 text-center">
                  <RefreshCw className="mx-auto text-green-500 mb-2" size={24} />
                  <div className="text-2xl font-black text-green-500">30 days</div>
                  <div className="text-xs text-zinc-500">Target experiment cycle</div>
                </div>
              </div>
            </div>

            {/* The Problem */}
            <div className="border border-zinc-800 p-8 mb-8 bg-zinc-950 relative overflow-hidden">
              {/* Background chains */}
              <div className="absolute top-4 right-4 opacity-10">
                <svg width="80" height="80" viewBox="0 0 80 80">
                  <rect x="10" y="10" width="25" height="25" rx="5" fill="none" stroke="#a855f7" strokeWidth="3" />
                  <rect x="45" y="10" width="25" height="25" rx="5" fill="none" stroke="#a855f7" strokeWidth="3" />
                  <rect x="10" y="45" width="25" height="25" rx="5" fill="none" stroke="#a855f7" strokeWidth="3" />
                  <rect x="45" y="45" width="25" height="25" rx="5" fill="none" stroke="#a855f7" strokeWidth="3" />
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
                  High Structural Lock-In means the organization can't change how it operates,
                  even when the old way clearly isn't working.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  {[
                    { icon: '🏛️', text: '"We\'ve always done it this way"' },
                    { icon: '📊', text: 'Org chart changes feel impossible' },
                    { icon: '🦖', text: 'Tools older than most employees' },
                    { icon: '🔲', text: 'New initiatives forced into old structures' },
                    { icon: '⚙️', text: 'People optimize for system, not outcome' },
                    { icon: '🦠', text: 'Change initiatives die from antibodies' },
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
                  { title: 'Identity = Process', desc: 'People\'s roles are defined by how things work. Changing the process threatens identity.' },
                  { title: 'Sunk Cost In Systems', desc: 'We invested so much in this ERP/CRM/process that changing it feels wasteful.' },
                  { title: 'Success Fossilized', desc: 'What worked before became sacred. The market changed; the organization didn\'t.' },
                  { title: 'Fear of Chaos', desc: '"If we change this, everything might break." So nothing changes.' },
                ].map((cause, i) => (
                  <div key={i} className="border border-zinc-800 p-6 hover:border-purple-600 transition-all">
                    <h3 className="font-bold text-purple-500 mb-2">{cause.title}</h3>
                    <p className="text-zinc-400 text-sm">{cause.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* The Fix */}
            <div className="border-2 border-purple-600 p-8 mb-8 bg-gradient-to-b from-black to-purple-950/10 relative overflow-hidden">
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />

              <h2 className="text-2xl font-black mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                  <CheckCircle className="text-white" size={20} />
                </div>
                THE FIX
              </h2>

              <div className="space-y-6 relative">
                {[
                  { num: '01', title: 'Run Experiments Outside the System', desc: 'Don\'t try to change the whole org. Create small "labs" that operate differently. Let them prove what\'s possible before threatening the main structure.', code: ['Team size: 3-7 people', 'Duration: 90-day experiments', 'Protection: Executive sponsor shields from antibodies', 'Success metric: Defined before launch'] },
                  { num: '02', title: 'Question Every "We Have To"', desc: 'For one week, log every time someone says "we have to" or "we always." Then ask: says who? What\'s the actual consequence of not doing it?' },
                  { num: '03', title: 'Sunset Before Sunrise', desc: 'Before adding any new process, tool, or meeting, kill an existing one. Capacity for new requires releasing old. Make this a rule.' },
                  { num: '04', title: 'Rotate People Through Different Structures', desc: 'When people only know one way of working, they defend it. Exposure to alternatives creates openness to change.' },
                  { num: '05', title: 'Make Reversibility the Default', desc: '"Let\'s try this for 30 days" gets less resistance than "we\'re changing everything." Most changes stick if they work. Make rollback easy and change becomes safe.' },
                ].map((step, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 border-2 border-purple-600 rounded-full flex items-center justify-center font-black text-purple-500 group-hover:bg-purple-600 group-hover:text-black transition-all">
                        {step.num}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-zinc-400 mb-4">{step.desc}</p>
                      {step.code && (
                        <div className="bg-zinc-900 border border-zinc-800 p-4 text-sm font-mono rounded">
                          <p className="text-purple-400 mb-2">// Lab structure</p>
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
                <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                  <Unlock className="text-white" size={20} />
                </div>
                HOW TO MEASURE PROGRESS
              </h2>

              <div className="space-y-4">
                {[
                  { metric: 'Age of core processes', before: '5+ years', after: '<2 years', pct: 75 },
                  { metric: 'Experiments launched per quarter', before: '0', after: '5+', pct: 85 },
                  { metric: 'Processes retired per quarter', before: '0', after: '3+', pct: 80 },
                  { metric: 'Time from idea to running pilot', before: '6 months', after: '2 weeks', pct: 90 },
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
                <Link href="/actions/decision-speed" className="text-sm border border-zinc-700 px-4 py-2 hover:border-purple-600 transition-colors flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full" />
                  Decision Speed →
                </Link>
                <Link href="/actions/error-loops" className="text-sm border border-zinc-700 px-4 py-2 hover:border-purple-600 transition-colors flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  Error Loops →
                </Link>
                <Link href="/gpi-framework/structural-lockin" className="text-sm border border-zinc-700 px-4 py-2 hover:border-purple-600 transition-colors flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full" />
                  Framework Deep Dive →
                </Link>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center pt-8 border-t border-zinc-900">
              <p className="text-zinc-500 mb-6">
                Want to see your exact Structural Lock-In score?
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

export default UnlockStructurePage;
