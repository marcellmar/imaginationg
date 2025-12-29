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

        {/* Article Content */}
        <section className="py-8 px-6">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-invert prose-lg max-w-none">

              {/* The Core Insight */}
              <div className="border-l-4 border-red-600 pl-6 mb-12">
                <p className="text-xl text-zinc-300 italic mb-0">
                  "Friction isn't entropy. Friction is margin."
                </p>
              </div>

              <h2 className="text-2xl font-black mt-12 mb-6">THE INVISIBLE ECONOMY</h2>

              <p className="text-zinc-400 mb-6">
                Every organization has friction. Delays between departments. Handoffs that lose information. Approvals that add weeks. Complexity that requires specialists to navigate.
              </p>

              <p className="text-zinc-400 mb-6">
                The standard assumption: this is waste. Inefficiency. Something to eliminate.
              </p>

              <p className="text-zinc-400 mb-6">
                The reality: <span className="text-white font-bold">every point of friction is someone's revenue stream</span>.
              </p>

              <p className="text-zinc-400 mb-6">
                That approval layer? It employs a department. That integration challenge? It justifies a team. That knowledge silo? It protects a career. The complexity that slows you down is the same complexity that funds someone's paycheck.
              </p>

              <div className="bg-zinc-950 border border-zinc-800 p-8 my-12">
                <h3 className="text-xl font-black text-red-600 mb-6">THE GAP ECONOMY</h3>
                <div className="space-y-6">
                  <div className="border-b border-zinc-800 pb-4">
                    <p className="text-white font-bold mb-2">Healthcare Prior Authorization</p>
                    <p className="text-zinc-400 text-sm">$1.3 billion industry. Grew 30% in one year. Revenue comes from the delay itself, not from resolving it.</p>
                  </div>
                  <div className="border-b border-zinc-800 pb-4">
                    <p className="text-white font-bold mb-2">Enterprise Software Implementation</p>
                    <p className="text-zinc-400 text-sm">Products designed to require consultants. Complexity isn't a flaw. It's the billing mechanism.</p>
                  </div>
                  <div className="border-b border-zinc-800 pb-4">
                    <p className="text-white font-bold mb-2">Recruiting Industry</p>
                    <p className="text-zinc-400 text-sm">15-25% of first-year salary as fee. Value comes from information asymmetry, connecting known to unknown.</p>
                  </div>
                  <div>
                    <p className="text-white font-bold mb-2">Hospital Administration</p>
                    <p className="text-zinc-400 text-sm">$687 billion on administration vs $346 billion on direct care. 2:1 ratio of paperwork to treatment.</p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-black mt-12 mb-6">THE GAP IS THE PRODUCT</h2>

              <p className="text-zinc-400 mb-6">
                In particle state organizations (GPI 7-10), friction isn't accidental. It's structural.
              </p>

              <p className="text-zinc-400 mb-6">
                Consider what happens when you try to eliminate friction:
              </p>

              <div className="bg-black border border-zinc-800 p-8 my-12">
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <span className="text-red-600 font-mono">→</span>
                    <div>
                      <p className="text-white font-bold">Propose removing an approval step</p>
                      <p className="text-zinc-500 text-sm">The approvers fight it. Their authority is the friction.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-red-600 font-mono">→</span>
                    <div>
                      <p className="text-white font-bold">Suggest automating a manual process</p>
                      <p className="text-zinc-500 text-sm">The process owners resist. Their jobs are the friction.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-red-600 font-mono">→</span>
                    <div>
                      <p className="text-white font-bold">Try to share siloed knowledge</p>
                      <p className="text-zinc-500 text-sm">The experts block it. Their scarcity is the friction.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-red-600 font-mono">→</span>
                    <div>
                      <p className="text-white font-bold">Attempt to simplify a complex system</p>
                      <p className="text-zinc-500 text-sm">The vendors fight it. Their consultants bill the friction.</p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-zinc-400 mb-6">
                This isn't conspiracy. It's economics. <span className="text-white font-bold">People rationally defend revenue sources, even when those sources are organizational drag.</span>
              </p>

              <h2 className="text-2xl font-black mt-12 mb-6">THE VENDOR ECOSYSTEM</h2>

              <p className="text-zinc-400 mb-6">
                Outside your organization, an entire industry profits from your friction.
              </p>

              <p className="text-zinc-400 mb-6">
                Enterprise software that requires consultants to implement? That's not poor design. It's the business model. The implementation complexity generates more revenue than the software license.
              </p>

              <p className="text-zinc-400 mb-6">
                Consulting firms that "fix" broken processes? They have no incentive to fix them permanently. A solved problem is a lost client. Chronic dysfunction is recurring revenue.
              </p>

              <div className="border-l-4 border-yellow-500 pl-6 my-12">
                <p className="text-xl text-zinc-300 italic mb-0">
                  "Why would vendors fix problems that are their revenue stream?"
                </p>
              </div>

              <p className="text-zinc-400 mb-6">
                The average enterprise uses 371 applications. 51% of SaaS licenses go unused. Each integration point is friction. Each friction point is billable.
              </p>

              <h2 className="text-2xl font-black mt-12 mb-6">GPI DIMENSION: STRUCTURAL LOCK-IN</h2>

              <p className="text-zinc-400 mb-6">
                The Structural Lock-In dimension measures how much your infrastructure dictates your strategy. High lock-in (scores 8-10) means friction is literally built into your systems.
              </p>

              <div className="bg-zinc-950 border border-zinc-800 p-8 my-12">
                <h3 className="text-xl font-black mb-6">LOCK-IN CREATES FRICTION MARGIN</h3>
                <div className="space-y-4 font-mono text-sm">
                  <div className="flex justify-between items-center border-b border-zinc-800 pb-2">
                    <span>Legacy system dependencies</span>
                    <span className="text-red-400">= maintenance vendor revenue</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-zinc-800 pb-2">
                    <span>Custom integrations</span>
                    <span className="text-red-400">= consultant billable hours</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-zinc-800 pb-2">
                    <span>Proprietary data formats</span>
                    <span className="text-red-400">= switching cost protection</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Complex approval workflows</span>
                    <span className="text-red-400">= middle management justification</span>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-black mt-12 mb-6">CLARITY IS VIOLENCE</h2>

              <p className="text-zinc-400 mb-6">
                This explains why attempts to measure and expose friction meet such resistance.
              </p>

              <p className="text-zinc-400 mb-6">
                <span className="text-white font-bold">Clarity is violence to people whose power depends on ambiguity.</span>
              </p>

              <p className="text-zinc-400 mb-6">
                When you measure Decision Latency and expose that decisions take 6 weeks when they could take 6 hours, you're threatening the approval chain's relevance. When you map Knowledge Location and show that information is hoarded rather than shared, you're threatening gatekeepers' power. When you calculate the cost of Structural Lock-In, you're threatening vendors' contracts.
              </p>

              <p className="text-zinc-400 mb-6">
                GPI doesn't just measure friction. It exposes margin. That's what makes it dangerous to particle state defenders.
              </p>

              <h2 className="text-2xl font-black mt-12 mb-6">THE FIELD STATE ALTERNATIVE</h2>

              <p className="text-zinc-400 mb-6">
                In field state (GPI 1-3), friction is treated as waste, not margin.
              </p>

              <p className="text-zinc-400 mb-6">
                Energy flows freely. Decisions happen at the edge. Knowledge finds problems. The coordination infrastructure enables rather than extracts.
              </p>

              <p className="text-zinc-400 mb-6">
                The difference isn't ideology. It's economics. Field state organizations make money by reducing friction for users, not by monetizing friction against them.
              </p>

              <div className="bg-red-600/10 border border-red-600/30 p-8 my-12">
                <h3 className="text-xl font-black text-red-600 mb-4">KEY INSIGHT</h3>
                <p className="text-lg text-zinc-300">
                  The gap is the product. The delay is the margin. The complexity is the business model. Until you understand friction economics, you can't overcome them. The first step is measuring who profits from your particle state.
                </p>
              </div>

            </article>

            {/* Book Teaser */}
            <div className="border border-zinc-800 p-8 mt-16 flex items-center gap-6">
              <BookOpen size={48} className="text-zinc-600 flex-shrink-0" />
              <div>
                <p className="text-zinc-500 text-sm uppercase mb-1">From the upcoming book</p>
                <p className="text-xl font-black">The Growing Pains Index</p>
                <p className="text-zinc-400">Chapter 1: Why Success Creates Rigidity</p>
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
