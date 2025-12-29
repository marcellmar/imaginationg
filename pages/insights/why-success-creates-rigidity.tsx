import type { NextPage } from 'next';
import Link from 'next/link';
import SEOHead from '../../components/SEOHead';
import Navigation from '../../components/Navigation';
import RelatedContent from '../../components/RelatedContent';
import { ArrowLeft, BookOpen } from 'lucide-react';

const WhySuccessCreatesRigidityPage: NextPage = () => {
  return (
    <>
      <SEOHead
        title="Why Success Creates Rigidity - The Trap No One Sees | IMAGINATION G"
        description="Organizations don't fail because they stop doing what made them successful. They fail because they can't stop. The metabolic trap explained."
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
              <span className="text-xs text-zinc-500">8 min read</span>
              <span className="text-xs text-zinc-600">•</span>
              <span className="text-xs text-zinc-500">ALL DIMENSIONS</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 leading-[1.1]">
              WHY SUCCESS<br />CREATES RIGIDITY<span className="text-red-600">.</span>
            </h1>

            <p className="text-2xl text-zinc-500 mb-8">
              The Trap No One Sees Coming
            </p>

            <p className="text-xl text-zinc-400 max-w-2xl">
              Organizations don't fail because they stop doing what made them successful. They fail because they can't stop doing what made them successful.
            </p>

            {/* RIGIDITY VISUAL - Fluid to Frozen */}
            <div className="mt-16 flex justify-center">
              <div className="relative">
                <div className="flex items-center gap-8">
                  {/* Phase 1: Fluid - Adaptive */}
                  <div className="flex flex-col items-center">
                    <div className="relative w-24 h-32 border border-zinc-800 bg-zinc-950 overflow-hidden rounded-lg">
                      {/* Flowing particles */}
                      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 130">
                        {[0, 1, 2, 3, 4].map((i) => (
                          <circle
                            key={i}
                            r="6"
                            fill="#22c55e"
                            opacity="0.7"
                          >
                            <animate
                              attributeName="cx"
                              values={`${20 + i * 15};${80 - i * 10};${20 + i * 15}`}
                              dur={`${2 + i * 0.5}s`}
                              repeatCount="indefinite"
                            />
                            <animate
                              attributeName="cy"
                              values={`${20 + i * 20};${30 + i * 18};${20 + i * 20}`}
                              dur={`${2.5 + i * 0.3}s`}
                              repeatCount="indefinite"
                            />
                          </circle>
                        ))}
                      </svg>
                    </div>
                    <span className="text-xs font-mono text-green-500 mt-3">ADAPTIVE</span>
                    <span className="text-[10px] text-zinc-600">"how we work"</span>
                  </div>

                  {/* Arrow */}
                  <div className="flex flex-col items-center">
                    <svg width="40" height="20" viewBox="0 0 40 20">
                      <line x1="0" y1="10" x2="30" y2="10" stroke="#ef4444" strokeWidth="2" strokeDasharray="4,2">
                        <animate attributeName="stroke-dashoffset" values="0;-12" dur="1s" repeatCount="indefinite" />
                      </line>
                      <polygon points="28,5 38,10 28,15" fill="#ef4444" />
                    </svg>
                    <span className="text-xs font-mono text-red-500 mt-1">SUCCESS</span>
                  </div>

                  {/* Phase 2: Crystallizing */}
                  <div className="flex flex-col items-center">
                    <div className="relative w-24 h-32 border border-zinc-800 bg-zinc-950 overflow-hidden rounded-lg">
                      {/* Slowing particles */}
                      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 130">
                        {[0, 1, 2, 3, 4].map((i) => (
                          <circle
                            key={i}
                            r="6"
                            fill="#eab308"
                            opacity="0.7"
                          >
                            <animate
                              attributeName="cx"
                              values={`${30 + i * 10};${40 + i * 8};${30 + i * 10}`}
                              dur={`${4 + i * 0.5}s`}
                              repeatCount="indefinite"
                            />
                            <animate
                              attributeName="cy"
                              values={`${25 + i * 20};${28 + i * 19};${25 + i * 20}`}
                              dur={`${5 + i * 0.3}s`}
                              repeatCount="indefinite"
                            />
                          </circle>
                        ))}
                      </svg>
                    </div>
                    <span className="text-xs font-mono text-yellow-500 mt-3">OPTIMIZING</span>
                    <span className="text-[10px] text-zinc-600">"our process"</span>
                  </div>

                  {/* Arrow */}
                  <div className="flex flex-col items-center">
                    <svg width="40" height="20" viewBox="0 0 40 20">
                      <line x1="0" y1="10" x2="30" y2="10" stroke="#ef4444" strokeWidth="2" strokeDasharray="4,2">
                        <animate attributeName="stroke-dashoffset" values="0;-12" dur="1.5s" repeatCount="indefinite" />
                      </line>
                      <polygon points="28,5 38,10 28,15" fill="#ef4444" />
                    </svg>
                    <span className="text-xs font-mono text-red-500 mt-1">TIME</span>
                  </div>

                  {/* Phase 3: Frozen - Rigid */}
                  <div className="flex flex-col items-center">
                    <div className="relative w-24 h-32 border border-red-600/50 bg-zinc-950 overflow-hidden rounded-lg">
                      {/* Frozen grid */}
                      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 130">
                        {/* Fixed grid pattern */}
                        <line x1="25" y1="0" x2="25" y2="130" stroke="#ef4444" strokeWidth="1" opacity="0.3" />
                        <line x1="50" y1="0" x2="50" y2="130" stroke="#ef4444" strokeWidth="1" opacity="0.3" />
                        <line x1="75" y1="0" x2="75" y2="130" stroke="#ef4444" strokeWidth="1" opacity="0.3" />
                        <line x1="0" y1="32" x2="100" y2="32" stroke="#ef4444" strokeWidth="1" opacity="0.3" />
                        <line x1="0" y1="65" x2="100" y2="65" stroke="#ef4444" strokeWidth="1" opacity="0.3" />
                        <line x1="0" y1="98" x2="100" y2="98" stroke="#ef4444" strokeWidth="1" opacity="0.3" />
                        {/* Frozen circles - no movement */}
                        {[0, 1, 2, 3, 4].map((i) => (
                          <circle
                            key={i}
                            cx={25 + (i % 3) * 25}
                            cy={32 + Math.floor(i / 3) * 33}
                            r="6"
                            fill="#ef4444"
                            opacity="0.7"
                          />
                        ))}
                      </svg>
                    </div>
                    <span className="text-xs font-mono text-red-500 mt-3">RIGID</span>
                    <span className="text-[10px] text-zinc-600">"who we are"</span>
                  </div>
                </div>

                {/* Caption */}
                <div className="text-center mt-6">
                  <span className="text-xs font-mono text-zinc-600">Success crystallizes into identity. Identity resists change.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-8 px-6">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-invert prose-lg max-w-none">

              {/* The Paradox */}
              <div className="border-l-4 border-red-600 pl-6 mb-12">
                <p className="text-xl text-zinc-300 italic mb-0">
                  "Every optimization creates a dependency. Every dependency becomes a constraint."
                </p>
              </div>

              <h2 className="text-2xl font-black mt-12 mb-6">THE METABOLIC TRAP</h2>

              <p className="text-zinc-400 mb-6">
                Watch any successful organization long enough, and you'll witness the same pattern. The very processes that created success become the barriers to future adaptation. What worked becomes what's mandatory. What was discovered becomes what's defended.
              </p>

              <p className="text-zinc-400 mb-6">
                This isn't metaphor. It's organizational physics.
              </p>

              <p className="text-zinc-400 mb-6">
                When a company finds something that works (a sales process, a product architecture, a decision-making hierarchy) that success doesn't just create revenue. It creates infrastructure. And infrastructure has mass. It resists change not because people are stubborn, but because <span className="text-white font-bold">successful processes solidify into structures</span>.
              </p>

              <div className="bg-zinc-950 border border-zinc-800 p-8 my-12">
                <h3 className="text-xl font-black text-red-600 mb-4">THE SHIFT</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-zinc-500 mb-2 text-sm uppercase">Phase 1</p>
                    <p className="text-lg">"This is <span className="text-green-400">how we work</span>"</p>
                    <p className="text-zinc-600 text-sm mt-2">Adaptive. Experimental. Learning.</p>
                  </div>
                  <div>
                    <p className="text-zinc-500 mb-2 text-sm uppercase">Phase 2</p>
                    <p className="text-lg">"This is <span className="text-red-400">who we are</span>"</p>
                    <p className="text-zinc-600 text-sm mt-2">Defensive. Rigid. Protecting.</p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-black mt-12 mb-6">THE BIOLOGICAL REALITY</h2>

              <p className="text-zinc-400 mb-6">
                There's a difference between muscle memory and rigor mortis.
              </p>

              <p className="text-zinc-400 mb-6">
                Muscle memory is adaptive. Patterns that help you respond faster. Rigor mortis is fixed. Patterns that can't respond at all. Every organization sits somewhere on this spectrum. The GPI measures where.
              </p>

              <p className="text-zinc-400 mb-6">
                Organizations in particle state (GPI 7-10) have crossed from memory into mortis. Their processes don't enable action. They prevent it. Their hierarchies don't coordinate decisions. They delay them. Their expertise isn't distributed. It's hoarded.
              </p>

              <div className="bg-black border border-zinc-800 p-8 my-12">
                <h3 className="text-xl font-black mb-6">GPI DIMENSION IMPACT</h3>
                <div className="space-y-4 font-mono text-sm">
                  <div className="flex justify-between items-center border-b border-zinc-800 pb-2">
                    <span>Decision Latency</span>
                    <span className="text-red-400">Success → Approval layers → Paralysis</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-zinc-800 pb-2">
                    <span>Knowledge Location</span>
                    <span className="text-red-400">Expertise → Gatekeeping → Silos</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-zinc-800 pb-2">
                    <span>Structural Lock-In</span>
                    <span className="text-red-400">Infrastructure → Dependency → Prison</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Error Correction</span>
                    <span className="text-red-400">Learning → Defense → Denial</span>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-black mt-12 mb-6">DEFENDING CONSTRAINTS</h2>

              <p className="text-zinc-400 mb-6">
                Here's the part that makes this trap invisible: <span className="text-white font-bold">organizations defend their constraints more fiercely than their capabilities</span>.
              </p>

              <p className="text-zinc-400 mb-6">
                Watch what happens when someone proposes removing an approval step, reorganizing a department, or sunsetting a legacy system. The resistance isn't proportional to the capability being threatened. It's proportional to the identity wrapped around that constraint.
              </p>

              <p className="text-zinc-400 mb-6">
                "We've always done it this way" isn't laziness. It's organizational immune response. The system is protecting itself from foreign change, even beneficial change.
              </p>

              <div className="border-l-4 border-yellow-500 pl-6 my-12">
                <p className="text-xl text-zinc-300 italic mb-0">
                  "The vendor ecosystem profits from maintaining broken systems. Why would they fix problems that are their revenue stream?"
                </p>
              </div>

              <h2 className="text-2xl font-black mt-12 mb-6">FRICTION AS MARGIN</h2>

              <p className="text-zinc-400 mb-6">
                The trap deepens because inefficiencies aren't just tolerated. They're <span className="text-white font-bold">monetized</span>.
              </p>

              <p className="text-zinc-400 mb-6">
                Every approval layer employs someone. Every integration challenge justifies a team. Every knowledge silo protects a career. The friction that frustrates users becomes the margin that funds departments.
              </p>

              <p className="text-zinc-400 mb-6">
                Enterprise software that requires consultants to implement? That's not a bug. It's the business model. The complexity that slows you down is the same complexity that generates billable hours for someone else.
              </p>

              <p className="text-zinc-400 mb-6">
                This is why "fixing" problems threatens entire revenue streams. The gap is the product.
              </p>

              <h2 className="text-2xl font-black mt-12 mb-6">THE EARLY WARNING SIGNS</h2>

              <div className="bg-zinc-950 border border-zinc-800 p-8 my-12">
                <h3 className="text-xl font-black text-red-600 mb-6">IS YOUR SUCCESS MAKING YOU FRAGILE?</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="text-red-600 font-mono">01</span>
                    <p className="text-zinc-400">Your best-performing process is also your least changeable</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-red-600 font-mono">02</span>
                    <p className="text-zinc-400">New hires are confused by complexity that "veterans" defend</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-red-600 font-mono">03</span>
                    <p className="text-zinc-400">Someone's job exists primarily to work around a system flaw</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-red-600 font-mono">04</span>
                    <p className="text-zinc-400">Proposals for improvement trigger disproportionate resistance</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-red-600 font-mono">05</span>
                    <p className="text-zinc-400">Your competitors' failures look eerily familiar</p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-black mt-12 mb-6">THE ESCAPE</h2>

              <p className="text-zinc-400 mb-6">
                Success doesn't cause failure. <span className="text-white font-bold">The inability to unlearn success does.</span>
              </p>

              <p className="text-zinc-400 mb-6">
                Organizations that escape the trap share one characteristic: they treat what worked as information, not identity. They measure adaptation speed (GPI) as seriously as they measure revenue. They recognize that field state (GPI 1-3) requires actively unlearning the particle state patterns (GPI 7-10) that created their success.
              </p>

              <p className="text-zinc-400 mb-6">
                The first step is measurement. You can't escape a trap you can't see.
              </p>

              <div className="bg-red-600/10 border border-red-600/30 p-8 my-12">
                <h3 className="text-xl font-black text-red-600 mb-4">KEY INSIGHT</h3>
                <p className="text-lg text-zinc-300">
                  Every optimization creates a dependency. Every dependency becomes a constraint. The question isn't whether your success is creating rigidity. It's whether you're measuring it before it measures you.
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
            <h3 className="text-3xl font-black mb-6">MEASURE YOUR RIGIDITY</h3>
            <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              19 questions reveal where success has become constraint. See your particle-field position.
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
                  href: "/insights/friction-is-margin",
                  title: "Friction Is Margin",
                  description: "The economics of dysfunction. Why inefficiency is profitable for someone.",
                  color: "red"
                },
                {
                  href: "/insights/organizational-antibodies",
                  title: "Organizational Antibodies",
                  description: "Why good ideas get rejected. The immune system protecting particle state.",
                  color: "yellow"
                },
                {
                  href: "/answers/glossary/the-slow-calcification",
                  title: "The Slow Calcification",
                  description: "When temporary solutions become permanent constraints. GPI drift over time.",
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

export default WhySuccessCreatesRigidityPage;
