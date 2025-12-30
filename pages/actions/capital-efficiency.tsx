import type { NextPage } from 'next';
import Link from 'next/link';
import SEOHead from '../../components/SEOHead';
import Navigation from '../../components/Navigation';
import { DollarSign, AlertTriangle, CheckCircle, ArrowRight, TrendingDown, Beaker, Target, Zap } from 'lucide-react';

const CapitalEfficiencyPage: NextPage = () => {
  return (
    <>
      <SEOHead
        title="Capital Efficiency — Validate Cheap, Build Smart | GPI Action Guide"
        description="Validation costs too much. Testing requires full builds. Ideas die from resource starvation. Here's how to validate cheap. Free GPI action guide for Capital Intensity."
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
                <span className="text-xs font-mono bg-orange-600/20 text-orange-400 px-3 py-1 rounded">
                  CAPITAL INTENSITY (10%)
                </span>
              </div>

              {/* Hero Visual */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h1 className="text-4xl md:text-5xl font-black mb-4">
                    CAPITAL EFFICIENCY<span className="text-red-600">.</span>
                  </h1>
                  <p className="text-xl text-zinc-400">
                    Validation costs too much. Testing requires full builds. Good ideas die from resource starvation.
                  </p>
                </div>

                {/* Cost Pyramid Visual */}
                <div className="flex items-center justify-center">
                  <div className="relative">
                    {/* Expensive (top) */}
                    <div className="w-16 h-12 bg-red-500/20 border-2 border-red-500 mb-1 mx-auto flex items-center justify-center">
                      <span className="text-xs font-mono text-red-500">$100K</span>
                    </div>
                    {/* Medium */}
                    <div className="w-24 h-12 bg-yellow-500/20 border-2 border-yellow-500 mb-1 mx-auto flex items-center justify-center">
                      <span className="text-xs font-mono text-yellow-500">$10K</span>
                    </div>
                    {/* Cheap */}
                    <div className="w-32 h-12 bg-green-500/20 border-2 border-green-500 mb-1 mx-auto flex items-center justify-center">
                      <span className="text-xs font-mono text-green-500">$200</span>
                    </div>
                    {/* Free */}
                    <div className="w-40 h-12 bg-green-500/30 border-2 border-green-500 mx-auto flex items-center justify-center animate-pulse">
                      <span className="text-xs font-mono text-green-500">$0 (conversation)</span>
                    </div>

                    {/* Arrow */}
                    <div className="absolute -right-8 top-1/2 -translate-y-1/2 flex items-center">
                      <ArrowRight className="text-green-500" size={24} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-zinc-950 border border-zinc-800 p-4 text-center">
                  <DollarSign className="mx-auto text-red-500 mb-2" size={24} />
                  <div className="text-2xl font-black text-red-500">$500K</div>
                  <div className="text-xs text-zinc-500">Avg failed initiative cost</div>
                </div>
                <div className="bg-zinc-950 border border-zinc-800 p-4 text-center">
                  <Beaker className="mx-auto text-yellow-500 mb-2" size={24} />
                  <div className="text-2xl font-black text-yellow-500">18mo</div>
                  <div className="text-xs text-zinc-500">Time to first customer</div>
                </div>
                <div className="bg-zinc-950 border border-zinc-800 p-4 text-center">
                  <Target className="mx-auto text-green-500 mb-2" size={24} />
                  <div className="text-2xl font-black text-green-500">$1K</div>
                  <div className="text-xs text-zinc-500">Target validation cost</div>
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
                  High Capital Intensity means it costs too much to test ideas. The organization
                  requires massive investment before learning anything.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  {[
                    { icon: '📋', text: '"We need a full business case before we can test"' },
                    { icon: '📆', text: 'Months of planning before any customer contact' },
                    { icon: '🏗️', text: 'Pilots that require enterprise-grade infrastructure' },
                    { icon: '💀', text: 'Ideas killed before testing because "too expensive"' },
                    { icon: '🎰', text: 'All-or-nothing launches with no staged validation' },
                    { icon: '📉', text: 'High failure rate on major initiatives' },
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
                  { title: 'Perfection Bias', desc: 'Releasing anything less than "ready" feels unprofessional. So nothing ships until it\'s expensive.' },
                  { title: 'Procurement Theater', desc: 'Getting budget requires full specifications. Specifications require knowing what to build. Catch-22.' },
                  { title: 'Infrastructure Overhead', desc: 'Testing anything requires full security, compliance, and IT review. Setup costs exceed experiment value.' },
                  { title: 'Fear of Looking Scrappy', desc: '"What will customers think?" Everything must be polished, even tests.' },
                ].map((cause, i) => (
                  <div key={i} className="border border-zinc-800 p-6 hover:border-orange-600 transition-all">
                    <h3 className="font-bold text-orange-500 mb-2">{cause.title}</h3>
                    <p className="text-zinc-400 text-sm">{cause.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* The Fix */}
            <div className="border-2 border-orange-600 p-8 mb-8 bg-gradient-to-b from-black to-orange-950/10 relative overflow-hidden">
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl" />

              <h2 className="text-2xl font-black mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                  <CheckCircle className="text-white" size={20} />
                </div>
                THE FIX
              </h2>

              <div className="space-y-6 relative">
                {[
                  { num: '01', title: 'Define the Minimum Learnable Experiment', desc: 'Before building anything, ask: "What\'s the cheapest way to learn if this works?" Often it\'s a conversation, landing page, or manual process—not a product.', code: ['Level 1: Customer conversations (free)', 'Level 2: Landing page + waitlist ($200)', 'Level 3: Manual/concierge MVP ($1,000)', 'Level 4: Automated MVP ($10,000)', 'Level 5: Scaled product ($100,000+)'] },
                  { num: '02', title: 'Create an Experimentation Budget', desc: 'Set aside dedicated funds for small tests that don\'t require business cases. "Innovation budget" with fast approval for experiments under $X.' },
                  { num: '03', title: 'Build "Test Infrastructure"', desc: 'Create a sandbox environment where teams can test quickly without full compliance/security review. Accept that test data isn\'t production data.' },
                  { num: '04', title: 'Sell Before You Build', desc: 'Can you get a letter of intent, pre-order, or pilot commitment before building anything? Customer commitment validates better than any prototype.' },
                  { num: '05', title: 'Celebrate Cheap Failures', desc: 'The goal isn\'t to avoid failure—it\'s to fail cheap. A $500 experiment that proves "no" is better than a $500K launch that proves "no."' },
                ].map((step, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 border-2 border-orange-600 rounded-full flex items-center justify-center font-black text-orange-500 group-hover:bg-orange-600 group-hover:text-black transition-all">
                        {step.num}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-zinc-400 mb-4">{step.desc}</p>
                      {step.code && (
                        <div className="bg-zinc-900 border border-zinc-800 p-4 text-sm font-mono rounded">
                          <p className="text-orange-400 mb-2">// Validation ladder</p>
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
                <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center">
                  <DollarSign className="text-white" size={20} />
                </div>
                HOW TO MEASURE PROGRESS
              </h2>

              <div className="space-y-4">
                {[
                  { metric: 'Cost per validated learning', before: '$100K', after: '$1K', pct: 99 },
                  { metric: 'Time from idea to first customer feedback', before: '18 months', after: '2 weeks', pct: 97 },
                  { metric: 'Experiments run per quarter', before: '1', after: '20+', pct: 85 },
                  { metric: 'Kill rate at early validation stage', before: '10%', after: '70%', pct: 80 },
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
                <Link href="/actions/decision-speed" className="text-sm border border-zinc-700 px-4 py-2 hover:border-orange-600 transition-colors flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full" />
                  Decision Speed →
                </Link>
                <Link href="/actions/error-loops" className="text-sm border border-zinc-700 px-4 py-2 hover:border-orange-600 transition-colors flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  Error Loops →
                </Link>
                <Link href="/gpi-framework/capital-intensity" className="text-sm border border-zinc-700 px-4 py-2 hover:border-orange-600 transition-colors flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full" />
                  Framework Deep Dive →
                </Link>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center pt-8 border-t border-zinc-900">
              <p className="text-zinc-500 mb-6">
                Want to see your exact Capital Intensity score?
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

export default CapitalEfficiencyPage;
