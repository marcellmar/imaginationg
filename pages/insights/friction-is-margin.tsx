import type { NextPage } from 'next';
import Link from 'next/link';
import SEOHead from '../../components/SEOHead';
import Navigation from '../../components/Navigation';
import RelatedContent from '../../components/RelatedContent';
import { ArrowLeft, BookOpen } from 'lucide-react';

const FrictionIsMarginPage: NextPage = () => {
  return (
    <>
      <SEOHead
        title="Friction Is Margin - The Economics of Dysfunction | IMAGINATION G"
        description="That delay, complexity, and confusion isn't a bug. It's someone's business model. The gap is the product. Understanding friction economics."
        ogType="article"
        ogImage="/images/og-insights.svg"
        article={{
          publishedTime: "2025-01-15T00:00:00Z",
          author: "Marcus Davis"
        }}
      />

      <div className="min-h-screen bg-black text-white">
        <Navigation currentPage="insights" />

        {/* Hero Section */}
        <section className="pt-24 pb-16 px-6">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <Link href="/insights" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8">
              <ArrowLeft size={16} />
              Back to Insights
            </Link>

            {/* Meta */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs font-mono text-red-600 bg-red-600/10 px-3 py-1 rounded">GPI FOUNDATIONS</span>
              <span className="text-xs text-zinc-500">7 min read</span>
              <span className="text-xs text-zinc-600">•</span>
              <span className="text-xs text-zinc-500">STRUCTURAL LOCK-IN</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 leading-[1.1]">
              FRICTION<br />IS MARGIN<span className="text-red-600">.</span>
            </h1>

            <p className="text-2xl text-zinc-500 mb-8">
              The Economics of Dysfunction
            </p>

            <p className="text-xl text-zinc-400 max-w-2xl">
              That delay, that complexity, that confusion? Not a bug. It's someone's business model. The gap is the product.
            </p>

            {/* THE GAP ECONOMY VISUAL */}
            <div className="mt-16 flex justify-center">
              <div className="relative w-full max-w-lg h-64">
                {/* Left side - Organization */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-24 h-40 bg-zinc-900 border border-zinc-700 flex items-center justify-center">
                  <span className="text-xs font-mono text-zinc-500 [writing-mode:vertical-lr] rotate-180">YOUR ORG</span>
                </div>

                {/* Right side - Goal */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-24 h-40 bg-zinc-900 border border-zinc-700 flex items-center justify-center">
                  <span className="text-xs font-mono text-zinc-500 [writing-mode:vertical-lr] rotate-180">THE GOAL</span>
                </div>

                {/* THE GAP - where margin lives */}
                <div className="absolute left-24 right-24 top-1/2 -translate-y-1/2 h-40 border-l border-r border-dashed border-red-600/50 flex items-center justify-center overflow-hidden">
                  {/* Gap label */}
                  <div className="absolute top-2 text-xs font-mono text-red-600">THE GAP</div>

                  {/* Money falling into the gap */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 160">
                    {/* Animated dollar signs falling into the gap */}
                    {[0, 1, 2, 3, 4].map((i) => (
                      <g key={i}>
                        <text
                          x={30 + i * 35}
                          y="0"
                          fill="#22c55e"
                          fontSize="16"
                          fontWeight="bold"
                          opacity="0.8"
                        >
                          <animate
                            attributeName="y"
                            values="-20;180"
                            dur={`${2 + i * 0.3}s`}
                            repeatCount="indefinite"
                            begin={`${i * 0.4}s`}
                          />
                          <animate
                            attributeName="opacity"
                            values="0;0.8;0.8;0"
                            dur={`${2 + i * 0.3}s`}
                            repeatCount="indefinite"
                            begin={`${i * 0.4}s`}
                          />
                          $
                        </text>
                      </g>
                    ))}

                    {/* Pile of money at bottom */}
                    <rect x="20" y="130" width="160" height="20" fill="#22c55e" opacity="0.3">
                      <animate attributeName="height" values="15;25;15" dur="3s" repeatCount="indefinite" />
                      <animate attributeName="y" values="135;125;135" dur="3s" repeatCount="indefinite" />
                    </rect>
                  </svg>

                  {/* Bottom label */}
                  <div className="absolute bottom-2 text-xs font-mono text-green-600">MARGIN</div>
                </div>

                {/* Blocked arrows - energy that can't get through */}
                <svg className="absolute left-20 top-1/2 -translate-y-1/2 w-8 h-20" viewBox="0 0 30 80">
                  <line x1="25" y1="20" x2="5" y2="20" stroke="#ef4444" strokeWidth="2" strokeDasharray="4,2">
                    <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
                  </line>
                  <line x1="25" y1="40" x2="5" y2="40" stroke="#ef4444" strokeWidth="2" strokeDasharray="4,2">
                    <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
                  </line>
                  <line x1="25" y1="60" x2="5" y2="60" stroke="#ef4444" strokeWidth="2" strokeDasharray="4,2">
                    <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" begin="0.5s" />
                  </line>
                </svg>

                {/* Caption */}
                <div className="absolute -bottom-8 left-0 right-0 text-center">
                  <span className="text-xs font-mono text-zinc-600">Energy blocked. Money flows in. The gap is the product.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-8 px-6">
          <div className="max-w-3xl mx-auto space-y-16">

            {/* Opening */}
            <div className="space-y-4 text-zinc-300">
              <p>Every organization has friction. Delays between departments. Handoffs that lose information. Approvals that add weeks.</p>
              <p>The standard assumption: this is waste. Inefficiency. Something to eliminate.</p>
              <p className="text-white text-xl font-bold pt-4">The reality: every point of friction is someone's revenue stream.</p>
            </div>

            {/* Big Numbers */}
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-zinc-900 p-6">
                <p className="text-4xl font-black text-green-500">$1.3B</p>
                <p className="text-zinc-500 text-sm mt-2">Prior authorization industry</p>
              </div>
              <div className="bg-zinc-900 p-6">
                <p className="text-4xl font-black text-green-500">30%</p>
                <p className="text-zinc-500 text-sm mt-2">Growth in one year</p>
              </div>
            </div>

            {/* Quote */}
            <div className="bg-zinc-950 border border-zinc-800 p-8">
              <p className="text-2xl text-white italic">"Friction isn't entropy. Friction is margin."</p>
            </div>

            {/* The Gap Economy */}
            <div className="border-l-2 border-red-600 pl-6 space-y-4">
              <h2 className="text-xs font-mono text-red-500 mb-4">THE GAP ECONOMY</h2>
              <p className="text-zinc-300"><span className="text-white font-bold">Healthcare:</span> Revenue comes from the delay itself. Not from resolving it.</p>
              <p className="text-zinc-300"><span className="text-white font-bold">Enterprise Software:</span> Products designed to require consultants. Complexity is the billing mechanism.</p>
              <p className="text-zinc-300"><span className="text-white font-bold">Recruiting:</span> 15-25% of first-year salary. Value comes from information asymmetry.</p>
            </div>

            {/* Hospital Stats */}
            <div className="text-center py-8">
              <p className="text-6xl font-black text-red-600">2:1</p>
              <p className="text-xl text-zinc-400 mt-2">ratio of paperwork to treatment</p>
              <p className="text-sm text-zinc-600 mt-4">$687B administration vs $346B direct care</p>
            </div>

            {/* What happens when you try */}
            <div className="bg-zinc-950 border border-zinc-800 p-8">
              <h2 className="text-xs font-mono text-zinc-500 mb-6">WHAT HAPPENS WHEN YOU TRY TO ELIMINATE FRICTION</h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <span className="text-red-600 font-mono">→</span>
                  <p className="text-zinc-300"><span className="text-white">Remove an approval step.</span> The approvers fight it. Their authority is the friction.</p>
                </div>
                <div className="flex gap-4">
                  <span className="text-red-600 font-mono">→</span>
                  <p className="text-zinc-300"><span className="text-white">Automate a manual process.</span> The process owners resist. Their jobs are the friction.</p>
                </div>
                <div className="flex gap-4">
                  <span className="text-red-600 font-mono">→</span>
                  <p className="text-zinc-300"><span className="text-white">Share siloed knowledge.</span> The experts block it. Their scarcity is the friction.</p>
                </div>
                <div className="flex gap-4">
                  <span className="text-red-600 font-mono">→</span>
                  <p className="text-zinc-300"><span className="text-white">Simplify a complex system.</span> The vendors fight it. Their consultants bill the friction.</p>
                </div>
              </div>
            </div>

            {/* Enterprise stats */}
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-zinc-900 p-6">
                <p className="text-4xl font-black text-red-500">371</p>
                <p className="text-zinc-500 text-sm mt-2">apps in average enterprise</p>
              </div>
              <div className="bg-zinc-900 p-6">
                <p className="text-4xl font-black text-red-500">51%</p>
                <p className="text-zinc-500 text-sm mt-2">of SaaS licenses unused</p>
              </div>
            </div>

            {/* Vendor Quote */}
            <div className="border-l-2 border-yellow-500 pl-6">
              <p className="text-xl text-white italic">"Why would vendors fix problems that are their revenue stream?"</p>
            </div>

            {/* Lock-in creates margin */}
            <div className="space-y-4 text-zinc-300">
              <h2 className="text-xs font-mono text-zinc-500 mb-4">LOCK-IN CREATES FRICTION MARGIN</h2>
              <p>Legacy system dependencies <span className="text-red-500">= maintenance vendor revenue</span></p>
              <p>Custom integrations <span className="text-red-500">= consultant billable hours</span></p>
              <p>Proprietary data formats <span className="text-red-500">= switching cost protection</span></p>
              <p>Complex approval workflows <span className="text-red-500">= middle management justification</span></p>
            </div>

            {/* Clarity is violence */}
            <div className="bg-red-600/10 border border-red-600/30 p-8 space-y-4">
              <p className="text-white font-bold text-2xl">Clarity is violence to people whose power depends on ambiguity.</p>
              <p className="text-zinc-300">When you measure Decision Latency and expose that decisions take 6 weeks when they could take 6 hours, you're threatening the approval chain's relevance.</p>
              <p className="text-zinc-300">GPI doesn't just measure friction. It exposes margin.</p>
              <p className="text-red-500 font-bold text-xl pt-4">That's what makes it dangerous.</p>
            </div>

            {/* Field vs Particle */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-950/20 border border-green-900/50 p-6">
                <p className="text-green-500 font-bold text-sm mb-2">FIELD STATE (GPI 1-3)</p>
                <p className="text-zinc-300">Friction is waste. Energy flows freely. Decisions at the edge. Makes money by reducing friction for users.</p>
              </div>
              <div className="bg-red-950/20 border border-red-900/50 p-6">
                <p className="text-red-500 font-bold text-sm mb-2">PARTICLE STATE (GPI 7-10)</p>
                <p className="text-zinc-300">Friction is structural. Energy gets stuck. Approvals pile up. Makes money by monetizing friction against users.</p>
              </div>
            </div>

            {/* Closing */}
            <div className="text-center py-8 space-y-4">
              <p className="text-2xl font-black text-white">The gap is the product.</p>
              <p className="text-zinc-400">The delay is the margin. The complexity is the business model.</p>
              <p className="text-xl text-white font-bold pt-4">The first step is measuring who profits from your particle state.</p>
            </div>

            {/* Book Teaser */}
            <div className="border border-zinc-800 p-8 flex items-center gap-6">
              <BookOpen size={48} className="text-zinc-600 flex-shrink-0" />
              <div>
                <p className="text-zinc-500 text-sm uppercase mb-1">From the upcoming book</p>
                <p className="text-xl font-black">The Growing Pains Index</p>
                <p className="text-zinc-400">Chapter 2: You're Invested in the Waste</p>
              </div>
            </div>

          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-3xl font-black mb-6">EXPOSE YOUR FRICTION ECONOMICS</h3>
            <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              Measure where friction is margin in your organization. See the structural lock-in others defend.
            </p>
            <Link
              href="/diagnostic"
              className="inline-block bg-red-600 px-8 py-4 text-lg font-black hover:bg-red-700 transition-colors"
            >
              TAKE THE GPI DIAGNOSTIC
            </Link>
          </div>
        </section>

        {/* Related Content */}
        <section className="py-16 px-6 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <RelatedContent
              title="Continue Reading"
              items={[
                {
                  href: "/insights/why-success-creates-rigidity",
                  title: "Why Success Creates Rigidity",
                  description: "The trap no one sees coming. How optimization becomes prison.",
                  color: "red"
                },
                {
                  href: "/answers/glossary/the-hidden-drain",
                  title: "The Hidden Drain",
                  description: "Invisible energy losses that compound particle state. The silent tax.",
                  color: "yellow"
                },
                {
                  href: "/answers/glossary/the-friction-loop",
                  title: "The Friction Loop",
                  description: "When systems optimize for dysfunction. The recursive pattern.",
                  color: "green"
                }
              ]}
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default FrictionIsMarginPage;
