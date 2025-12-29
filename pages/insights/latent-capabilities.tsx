import type { NextPage } from 'next';
import Link from 'next/link';
import SEOHead from '../../components/SEOHead';
import Navigation from '../../components/Navigation';
import RelatedContent from '../../components/RelatedContent';
import { ArrowLeft, BookOpen } from 'lucide-react';

const LatentCapabilitiesPage: NextPage = () => {
  return (
    <>
      <SEOHead
        title="Latent Capabilities - Assets You Have But Don't Use | IMAGINATION G"
        description="Most organizations have far more capability than they deploy. The constraint isn't capacity. It's coordination infrastructure."
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
              <span className="text-xs text-zinc-500">KNOWLEDGE LOCATION</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 leading-[1.1]">
              LATENT<br />CAPABILITIES<span className="text-red-600">.</span>
            </h1>

            <p className="text-2xl text-zinc-500 mb-8">
              Assets You Have But Don't Use
            </p>

            <p className="text-xl text-zinc-400 max-w-2xl">
              Most organizations have far more capability than they deploy. The constraint isn't capacity. It's coordination infrastructure.
            </p>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-8 px-6">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-invert prose-lg max-w-none">

              {/* The Core Insight */}
              <div className="border-l-4 border-red-600 pl-6 mb-12">
                <p className="text-xl text-zinc-300 italic mb-0">
                  "You don't need more capacity. You need coordination infrastructure."
                </p>
              </div>

              <h2 className="text-2xl font-black mt-12 mb-6">THE CAPACITY ILLUSION</h2>

              <p className="text-zinc-400 mb-6">
                When organizations hit constraints, the default response is predictable: hire more people, buy more equipment, expand facilities. Add capacity.
              </p>

              <p className="text-zinc-400 mb-6">
                But here's what the GPI reveals: most organizations aren't capacity-constrained. They're coordination-constrained. The capability already exists. It's just not accessible.
              </p>

              <p className="text-zinc-400 mb-6">
                <span className="text-white font-bold">Latent capability is the gap between what exists and what's deployed.</span> It's the skill your employee has that you never use. The connection between departments that never activates. The asset sitting idle while demand goes unmet elsewhere.
              </p>

              <div className="bg-zinc-950 border border-zinc-800 p-8 my-12">
                <h3 className="text-xl font-black text-red-600 mb-4">THE PHARMACY PARADOX</h3>
                <p className="text-zinc-400 mb-4">
                  Independent pharmacies across a region have excess capacity. Each one can fill more prescriptions than they receive. Meanwhile, CVS locations run at maximum utilization, turning customers away during peak hours.
                </p>
                <p className="text-zinc-400">
                  The independent pharmacies have latent capability. CVS has coordination infrastructure (centralized systems, brand recognition, insurance integrations). Neither has both. The one that figures out how to coordinate distributed capacity wins.
                </p>
              </div>

              <h2 className="text-2xl font-black mt-12 mb-6">TYPES OF LATENT CAPABILITY</h2>

              <p className="text-zinc-400 mb-6">
                Latent capability hides in different forms. Each type requires different coordination infrastructure to unlock.
              </p>

              <div className="space-y-8 my-12">
                <div className="border border-zinc-800 p-8 bg-black">
                  <h3 className="text-xl font-black text-yellow-500 mb-4">SKILL LATENCY</h3>
                  <p className="text-zinc-400 mb-4">
                    Capabilities people have that the organization doesn't deploy. The engineer who's also a graphic designer. The sales rep who speaks Mandarin. The manager who built databases before moving to management.
                  </p>
                  <p className="text-zinc-400 mb-4">
                    Rigid role definitions create skill latency. When job descriptions determine what people do (rather than what they can do), capability sits unused.
                  </p>
                  <p className="text-zinc-500 text-sm">
                    <span className="text-white">GPI Impact:</span> High Talent Flow scores (7-10) indicate skill latency. People are locked in roles, not flowing to problems.
                  </p>
                </div>

                <div className="border border-zinc-800 p-8 bg-black">
                  <h3 className="text-xl font-black text-yellow-500 mb-4">NETWORK LATENCY</h3>
                  <p className="text-zinc-400 mb-4">
                    Connections that exist but aren't activated. The sales team knows what customers need, but product never hears it. The operations team solved a problem that engineering is still working on. Information exists in one silo while another silo searches for it.
                  </p>
                  <p className="text-zinc-400 mb-4">
                    Network latency is a coordination failure. The nodes exist. The edges exist. But no signal flows.
                  </p>
                  <p className="text-zinc-500 text-sm">
                    <span className="text-white">GPI Impact:</span> High Knowledge Location scores (7-10) indicate network latency. Information is trapped, not flowing.
                  </p>
                </div>

                <div className="border border-zinc-800 p-8 bg-black">
                  <h3 className="text-xl font-black text-yellow-500 mb-4">TEMPORAL LATENCY</h3>
                  <p className="text-zinc-400 mb-4">
                    Capacity that exists but at the wrong time. Restaurants empty at 3pm while catering orders go unfulfilled. Consultants idle between projects while urgent requests wait in queue. Delivery trucks half-empty on return routes.
                  </p>
                  <p className="text-zinc-400 mb-4">
                    Temporal latency is a scheduling coordination problem. Capacity exists. Demand exists. They just don't meet.
                  </p>
                  <p className="text-zinc-500 text-sm">
                    <span className="text-white">GPI Impact:</span> High Decision Latency scores (7-10) often mask temporal latency. Slow systems can't match supply and demand in real-time.
                  </p>
                </div>

                <div className="border border-zinc-800 p-8 bg-black">
                  <h3 className="text-xl font-black text-yellow-500 mb-4">SPATIAL LATENCY</h3>
                  <p className="text-zinc-400 mb-4">
                    Assets that exist but in the wrong place. Medical equipment underutilized in one hospital, scarce in another. Inventory sitting in warehouse A while warehouse B has stockouts. Expertise concentrated in headquarters while field offices struggle.
                  </p>
                  <p className="text-zinc-400 mb-4">
                    Spatial latency is a logistics coordination problem. Assets are owned but not positioned where value can be created.
                  </p>
                  <p className="text-zinc-500 text-sm">
                    <span className="text-white">GPI Impact:</span> High Structural Lock-In scores (7-10) create spatial latency. Infrastructure can't flex to where it's needed.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-black mt-12 mb-6">THE COORDINATION GAP</h2>

              <p className="text-zinc-400 mb-6">
                Latent capability has always existed. What's new is our ability to activate it.
              </p>

              <p className="text-zinc-400 mb-6">
                In 1937, economist Ronald Coase asked why firms exist at all. His answer: transaction costs. It's cheaper to coordinate work inside a company than to contract for it outside. Firms exist because coordination across markets is expensive.
              </p>

              <p className="text-zinc-400 mb-6">
                <span className="text-white font-bold">What happens when coordination costs approach zero?</span>
              </p>

              <p className="text-zinc-400 mb-6">
                Firm boundaries dissolve. Latent capability becomes accessible. The independent pharmacies can coordinate like a chain without being a chain. The freelance specialists can operate like a firm without the firm.
              </p>

              <div className="bg-black border border-zinc-800 p-8 my-12">
                <h3 className="text-xl font-black mb-6">MARKETPLACE VS INFRASTRUCTURE</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-black text-red-500 mb-3">MARKETPLACE MODEL</h4>
                    <p className="text-zinc-400 text-sm mb-2">Uber, Airbnb, Upwork</p>
                    <ul className="text-zinc-500 text-sm space-y-1">
                      <li>• Extracts value from coordination</li>
                      <li>• Platform captures margin</li>
                      <li>• Providers commoditized</li>
                      <li>• Race to bottom on price</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-black text-green-500 mb-3">INFRASTRUCTURE MODEL</h4>
                    <p className="text-zinc-400 text-sm mb-2">The emerging alternative</p>
                    <ul className="text-zinc-500 text-sm space-y-1">
                      <li>• Enables coordination without extraction</li>
                      <li>• Providers retain value</li>
                      <li>• Capability differentiated</li>
                      <li>• Competition on quality</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-black mt-12 mb-6">ACTIVATING LATENT CAPABILITY</h2>

              <p className="text-zinc-400 mb-6">
                The process of activating latent capability follows a pattern:
              </p>

              <div className="bg-zinc-950 border border-zinc-800 p-8 my-12">
                <div className="space-y-6">
                  <div className="flex gap-6">
                    <div className="text-red-600 font-mono text-lg w-8">1</div>
                    <div>
                      <h4 className="font-black mb-2">VISIBILITY</h4>
                      <p className="text-zinc-400">First, see what exists. Map skills beyond job descriptions. Document connections between nodes. Track temporal utilization patterns. Inventory spatial distribution of assets.</p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="text-red-600 font-mono text-lg w-8">2</div>
                    <div>
                      <h4 className="font-black mb-2">ACCESSIBILITY</h4>
                      <p className="text-zinc-400">Make capability findable. Build the search infrastructure. Create the matching algorithms. Enable the discovery that currently doesn't happen.</p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="text-red-600 font-mono text-lg w-8">3</div>
                    <div>
                      <h4 className="font-black mb-2">ACTIVATION</h4>
                      <p className="text-zinc-400">Remove friction from deployment. Reduce the approval layers. Simplify the logistics. Make it easier to use latent capability than to request new capacity.</p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="text-red-600 font-mono text-lg w-8">4</div>
                    <div>
                      <h4 className="font-black mb-2">FEEDBACK</h4>
                      <p className="text-zinc-400">Learn from activation. Which latent capabilities create value? Which coordination patterns work? Build the intelligence layer that makes activation smarter over time.</p>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-black mt-12 mb-6">THE 30% FINDING</h2>

              <p className="text-zinc-400 mb-6">
                Across industries, a consistent pattern emerges: organizations typically have 20-40% more capability than they deploy. The average is around 30%.
              </p>

              <p className="text-zinc-400 mb-6">
                That's not waste in the traditional sense. It's not people slacking or equipment broken. It's capability that exists in the wrong form, wrong place, or wrong time. It's latency, not laziness.
              </p>

              <div className="bg-black border border-zinc-800 p-8 my-12">
                <h3 className="text-xl font-black mb-6">WHERE THE 30% HIDES</h3>
                <div className="space-y-3 font-mono text-sm">
                  <div className="flex justify-between items-center border-b border-zinc-800 pb-2">
                    <span>Skills beyond job descriptions</span>
                    <span className="text-yellow-400">~8-12%</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-zinc-800 pb-2">
                    <span>Off-peak capacity</span>
                    <span className="text-yellow-400">~10-15%</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-zinc-800 pb-2">
                    <span>Cross-functional knowledge</span>
                    <span className="text-yellow-400">~5-8%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Mispositioned assets</span>
                    <span className="text-yellow-400">~5-10%</span>
                  </div>
                </div>
              </div>

              <p className="text-zinc-400 mb-6">
                <span className="text-white font-bold">What would 30% more capability mean for your organization?</span> Not 30% more headcount. Not 30% more budget. Just activating what already exists.
              </p>

              <h2 className="text-2xl font-black mt-12 mb-6">GPI AND LATENT CAPABILITY</h2>

              <p className="text-zinc-400 mb-6">
                High GPI scores create latent capability. Low GPI scores activate it.
              </p>

              <div className="bg-zinc-950 border border-zinc-800 p-8 my-12">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-black text-red-500 mb-2">PARTICLE STATE (GPI 7-10)</h4>
                    <p className="text-zinc-400">Rigid role definitions trap skill latency. Siloed knowledge creates network latency. Slow decisions cause temporal latency. Fixed infrastructure generates spatial latency. Particle state maximizes latent capability by preventing coordination.</p>
                  </div>
                  <div>
                    <h4 className="font-black text-green-500 mb-2">FIELD STATE (GPI 1-3)</h4>
                    <p className="text-zinc-400">Fluid roles release skill latency. Connected knowledge eliminates network latency. Fast decisions capture temporal opportunities. Flexible infrastructure solves spatial mismatches. Field state minimizes latent capability by enabling coordination.</p>
                  </div>
                </div>
              </div>

              <p className="text-zinc-400 mb-6">
                The path from particle to field isn't about adding capability. It's about activating the capability that's already latent. The coordination infrastructure that enables field state is the same infrastructure that unlocks latent capability.
              </p>

              <div className="bg-red-600/10 border border-red-600/30 p-8 my-12">
                <h3 className="text-xl font-black text-red-600 mb-4">KEY INSIGHT</h3>
                <p className="text-lg text-zinc-300">
                  Before you add capacity, audit latency. Before you hire, coordinate. Before you buy, activate. The capability you need probably already exists. The question is whether you have the coordination infrastructure to deploy it. You don't need more. You need to use what you have.
                </p>
              </div>

            </article>

            {/* Book Teaser */}
            <div className="border border-zinc-800 p-8 mt-16 flex items-center gap-6">
              <BookOpen size={48} className="text-zinc-600 flex-shrink-0" />
              <div>
                <p className="text-zinc-500 text-sm uppercase mb-1">From the upcoming book</p>
                <p className="text-xl font-black">The Growing Pains Index</p>
                <p className="text-zinc-400">Chapter 8: Latent Capabilities</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-3xl font-black mb-6">FIND YOUR LATENT CAPABILITY</h3>
            <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              Measure the GPI dimensions that trap capability. See where coordination infrastructure is missing.
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
                  href: "/insights/metabolic-rate",
                  title: "Metabolic Rate",
                  description: "The speed of organizational change. Why some organizations process change faster.",
                  color: "red"
                },
                {
                  href: "/insights/friction-is-margin",
                  title: "Friction Is Margin",
                  description: "The economics that keep capability latent. Someone profits from the gap.",
                  color: "yellow"
                },
                {
                  href: "/answers/glossary/the-hidden-drain",
                  title: "The Hidden Drain",
                  description: "Invisible energy losses. Where latent capability leaks away.",
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

export default LatentCapabilitiesPage;
