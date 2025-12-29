import type { NextPage } from 'next';
import Link from 'next/link';
import SEOHead from '../../components/SEOHead';
import Navigation from '../../components/Navigation';
import RelatedContent from '../../components/RelatedContent';
import { ArrowLeft, BookOpen } from 'lucide-react';

const MetabolicRatePage: NextPage = () => {
  return (
    <>
      <SEOHead
        title="Metabolic Rate - The Speed of Organizational Change | IMAGINATION G"
        description="Every organization has a metabolic rate that determines how fast it can process change. Mismatched rates predict integration failure."
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
              <span className="text-xs text-zinc-500">9 min read</span>
              <span className="text-xs text-zinc-600">•</span>
              <span className="text-xs text-zinc-500">ALL DIMENSIONS</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 leading-[1.1]">
              METABOLIC<br />RATE<span className="text-red-600">.</span>
            </h1>

            <p className="text-2xl text-zinc-500 mb-8">
              The Speed of Organizational Change
            </p>

            <p className="text-xl text-zinc-400 max-w-2xl">
              Every organization has a metabolic rate that determines how fast it can process change. Mismatched metabolic rates predict integration failure.
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
                  "Speed is a function of infrastructure. Change the infrastructure, change the speed."
                </p>
              </div>

              <h2 className="text-2xl font-black mt-12 mb-6">THE BIOLOGICAL METAPHOR</h2>

              <p className="text-zinc-400 mb-6">
                A hummingbird's heart beats 1,200 times per minute. An elephant's beats 30 times. Neither is wrong. They're different metabolisms optimized for different contexts.
              </p>

              <p className="text-zinc-400 mb-6">
                Organizations work the same way. Some process change in days. Others take quarters. Some can pivot weekly. Others require annual planning cycles. Neither is inherently better. They're different metabolic rates.
              </p>

              <p className="text-zinc-400 mb-6">
                <span className="text-white font-bold">Metabolic rate is the speed at which an organization can process and respond to change.</span> It's determined by structure, culture, and infrastructure combined. And it's measurable.
              </p>

              <div className="bg-zinc-950 border border-zinc-800 p-8 my-12">
                <h3 className="text-xl font-black text-red-600 mb-4">WHAT METABOLIC RATE MEASURES</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-white font-bold mb-2">Signal Processing</p>
                    <p className="text-zinc-400 text-sm">How fast does new information flow through the organization? Hours? Weeks? Quarters?</p>
                  </div>
                  <div>
                    <p className="text-white font-bold mb-2">Decision Velocity</p>
                    <p className="text-zinc-400 text-sm">How quickly do decisions get made once information is available?</p>
                  </div>
                  <div>
                    <p className="text-white font-bold mb-2">Adaptation Speed</p>
                    <p className="text-zinc-400 text-sm">How fast can the organization change direction once a decision is made?</p>
                  </div>
                  <div>
                    <p className="text-white font-bold mb-2">Learning Velocity</p>
                    <p className="text-zinc-400 text-sm">How quickly do insights from actions get incorporated into future actions?</p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-black mt-12 mb-6">GPI AS METABOLIC MEASUREMENT</h2>

              <p className="text-zinc-400 mb-6">
                The GPI score is a proxy for metabolic rate. Average your scores across all seven dimensions, and you get a metabolic profile.
              </p>

              <div className="bg-black border border-zinc-800 p-8 my-12">
                <h3 className="text-xl font-black mb-6">METABOLIC RATE BY GPI</h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-green-500 pl-6">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-green-500 font-mono">GPI 1-3</span>
                      <span className="text-zinc-500">|</span>
                      <span className="text-zinc-400">Fast Metabolism</span>
                    </div>
                    <p className="text-zinc-500 text-sm">Weekly/daily cycles. Continuous adaptation. Real-time learning. High energy cost to maintain.</p>
                  </div>

                  <div className="border-l-4 border-yellow-500 pl-6">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-yellow-500 font-mono">GPI 4-6</span>
                      <span className="text-zinc-500">|</span>
                      <span className="text-zinc-400">Medium Metabolism</span>
                    </div>
                    <p className="text-zinc-500 text-sm">Monthly cycles. Periodic adaptation. Structured learning loops. Balanced energy cost.</p>
                  </div>

                  <div className="border-l-4 border-red-600 pl-6">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-red-600 font-mono">GPI 7-10</span>
                      <span className="text-zinc-500">|</span>
                      <span className="text-zinc-400">Slow Metabolism</span>
                    </div>
                    <p className="text-zinc-500 text-sm">Quarterly/annual cycles. Planned change windows. Retrospective learning. Low energy cost but high inertia.</p>
                  </div>
                </div>
              </div>

              <p className="text-zinc-400 mb-6">
                Each metabolic rate enables and constrains different things. Fast metabolism enables rapid response but requires constant energy. Slow metabolism conserves energy but limits adaptation speed.
              </p>

              <h2 className="text-2xl font-black mt-12 mb-6">METABOLIC COMPATIBILITY</h2>

              <p className="text-zinc-400 mb-6">
                Here's where metabolic rate becomes critical: compatibility.
              </p>

              <p className="text-zinc-400 mb-6">
                When organizations merge, partner, or try to integrate acquired companies, metabolic mismatch is the hidden killer. Two organizations with different metabolic rates will struggle to coordinate even if the strategic logic is perfect.
              </p>

              <div className="grid md:grid-cols-2 gap-8 my-12">
                <div className="border border-green-500/30 p-6 bg-green-500/5">
                  <h3 className="text-xl font-black text-green-500 mb-4">COMPATIBLE INTEGRATION</h3>
                  <p className="text-zinc-400 text-sm mb-4">
                    <span className="text-white">Disney + Pixar (2006)</span><br />
                    GPI gap: 2.2 points (5.4 to 3.2)
                  </p>
                  <ul className="text-zinc-500 text-sm space-y-1">
                    <li>• Gap within bridgeable range</li>
                    <li>• Disney preserved Pixar autonomy</li>
                    <li>• Brain Trust model spread to Disney Animation</li>
                    <li>• Result: 19 years of success, $100B+ value created</li>
                  </ul>
                </div>

                <div className="border border-red-600/30 p-6 bg-red-600/5">
                  <h3 className="text-xl font-black text-red-600 mb-4">INCOMPATIBLE INTEGRATION</h3>
                  <p className="text-zinc-400 text-sm mb-4">
                    <span className="text-white">HP + Autonomy (2011)</span><br />
                    GPI gap: ~5 points (7.8 to 3.1)
                  </p>
                  <ul className="text-zinc-500 text-sm space-y-1">
                    <li>• Gap beyond bridgeable range</li>
                    <li>• HP deep in particle state</li>
                    <li>• Integration timeline: fantasy</li>
                    <li>• Result: $8.8B writedown</li>
                  </ul>
                </div>
              </div>

              <div className="bg-zinc-950 border border-zinc-800 p-6 my-8">
                <p className="text-zinc-400 text-sm">
                  <span className="text-white font-bold">Another success case:</span> Google + YouTube (2006) had a GPI gap of just 0.2 points (2.3 to 2.5). Near-identical metabolic rates enabled seamless integration. YouTube maintained autonomy in San Bruno while leveraging Google's infrastructure and advertising expertise. From $1.65B acquisition to ~$400B estimated value in 19 years.
                </p>
              </div>

              <p className="text-zinc-400 mb-6">
                The pattern is consistent: organizations within 2-3 GPI points can integrate. Beyond that, antibody rejection becomes likely. Beyond 5 points, failure is almost certain.
              </p>

              <h2 className="text-2xl font-black mt-12 mb-6">THE 3-POINT RULE</h2>

              <p className="text-zinc-400 mb-6">
                Based on analysis of mergers, acquisitions, and major organizational changes:
              </p>

              <div className="bg-zinc-950 border border-zinc-800 p-8 my-12">
                <h3 className="text-xl font-black mb-6">METABOLIC COMPATIBILITY THRESHOLDS</h3>
                <div className="space-y-4 font-mono text-sm">
                  <div className="flex justify-between items-center border-b border-zinc-800 pb-2">
                    <span>0-2 point gap</span>
                    <span className="text-green-400">Standard integration possible</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-zinc-800 pb-2">
                    <span>3-4 point gap</span>
                    <span className="text-yellow-400">Quarantine and gradual bridge required</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-zinc-800 pb-2">
                    <span>5+ point gap</span>
                    <span className="text-red-400">Maintain separate operations</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>6+ point gap</span>
                    <span className="text-red-600">Reconsider the acquisition</span>
                  </div>
                </div>
              </div>

              <p className="text-zinc-400 mb-6">
                This applies beyond acquisitions. When fast teams are embedded in slow organizations, metabolic mismatch creates friction. When slow processes are imposed on fast teams, productivity collapses. Metabolic compatibility matters at every scale.
              </p>

              <h2 className="text-2xl font-black mt-12 mb-6">CAN YOU CHANGE YOUR METABOLISM?</h2>

              <p className="text-zinc-400 mb-6">
                Yes. But slowly.
              </p>

              <p className="text-zinc-400 mb-6">
                Metabolic rate is determined by infrastructure: decision-making structures, information systems, talent allocation models, capital deployment processes. Changing these takes time.
              </p>

              <div className="bg-black border border-zinc-800 p-8 my-12">
                <h3 className="text-xl font-black mb-6">METABOLIC SHIFT CAPACITY</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-white font-bold mb-1">1-2 points in 1-2 years</p>
                    <p className="text-zinc-500 text-sm">Achievable with focused effort. Process optimization, decision delegation, information system upgrades.</p>
                  </div>
                  <div>
                    <p className="text-white font-bold mb-1">2-3 points in 3-5 years</p>
                    <p className="text-zinc-500 text-sm">Requires structural change. Reorganization, new talent systems, significant infrastructure investment.</p>
                  </div>
                  <div>
                    <p className="text-white font-bold mb-1">4+ points in 5-10 years</p>
                    <p className="text-zinc-500 text-sm">Requires multiple spiral phases. Complete cultural and structural transformation. Leadership transitions.</p>
                  </div>
                </div>
              </div>

              <p className="text-zinc-400 mb-6">
                Organizations that claim they'll move 5 GPI points in 18 months are either lying or delusional. Metabolic change takes metabolic time. Crash diets don't work for bodies. They don't work for organizations either.
              </p>

              <h2 className="text-2xl font-black mt-12 mb-6">METABOLIC DEBT</h2>

              <p className="text-zinc-400 mb-6">
                Just as organizations accumulate technical debt, they accumulate metabolic debt: the gap between the speed they need and the speed their infrastructure supports.
              </p>

              <p className="text-zinc-400 mb-6">
                Metabolic debt accumulates when:
              </p>

              <ul className="space-y-2 text-zinc-400 mb-6">
                <li>• Organizations try to operate faster than their infrastructure supports</li>
                <li>• Workarounds become standard practice</li>
                <li>• Heroic effort substitutes for systemic capability</li>
                <li>• Speed is achieved through burnout rather than efficiency</li>
              </ul>

              <p className="text-zinc-400 mb-6">
                <span className="text-white font-bold">The interest on metabolic debt is paid in errors, burnout, and organizational fragility.</span> Eventually, the debt comes due.
              </p>

              <div className="border-l-4 border-yellow-500 pl-6 my-12">
                <p className="text-xl text-zinc-300 italic mb-0">
                  "You can borrow speed from the future by running people harder. But you can't borrow it forever. Eventually you have to build the infrastructure or accept the slower metabolism."
                </p>
              </div>

              <h2 className="text-2xl font-black mt-12 mb-6">FASTER ISN'T ALWAYS BETTER</h2>

              <p className="text-zinc-400 mb-6">
                High metabolism has costs. It requires constant energy. It creates instability. It makes long-term planning difficult.
              </p>

              <p className="text-zinc-400 mb-6">
                Some contexts reward slow metabolism:
              </p>

              <div className="bg-zinc-950 border border-zinc-800 p-8 my-12">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-black text-red-500 mb-3">SLOW METABOLISM FITS</h4>
                    <ul className="text-zinc-400 text-sm space-y-2">
                      <li>• Regulated industries (compliance over speed)</li>
                      <li>• Safety-critical operations (reliability over agility)</li>
                      <li>• Long-cycle businesses (infrastructure, real estate)</li>
                      <li>• Mature markets (optimization over disruption)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-black text-green-500 mb-3">FAST METABOLISM FITS</h4>
                    <ul className="text-zinc-400 text-sm space-y-2">
                      <li>• Technology (continuous adaptation)</li>
                      <li>• Consumer markets (rapid preference shifts)</li>
                      <li>• Early-stage ventures (learning over efficiency)</li>
                      <li>• Disrupted industries (survival over stability)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <p className="text-zinc-400 mb-6">
                The goal isn't the fastest metabolism. It's the right metabolism for your context. And the capability to shift when context changes.
              </p>

              <div className="bg-red-600/10 border border-red-600/30 p-8 my-12">
                <h3 className="text-xl font-black text-red-600 mb-4">KEY INSIGHT</h3>
                <p className="text-lg text-zinc-300">
                  Metabolic rate is infrastructure, not effort. You can't speed up a slow organization by working harder. You have to change the systems that determine speed: decision structures, information flows, resource allocation. Before asking "how do we move faster?" ask "what infrastructure determines our speed?" Change the infrastructure, change the metabolism.
                </p>
              </div>

            </article>

            {/* Book Teaser */}
            <div className="border border-zinc-800 p-8 mt-16 flex items-center gap-6">
              <BookOpen size={48} className="text-zinc-600 flex-shrink-0" />
              <div>
                <p className="text-zinc-500 text-sm uppercase mb-1">From the upcoming book</p>
                <p className="text-xl font-black">The Growing Pains Index</p>
                <p className="text-zinc-400">Chapter 6: Metabolic Rate</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-3xl font-black mb-6">MEASURE YOUR METABOLIC RATE</h3>
            <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              19 questions reveal your GPI across all dimensions. See your organizational metabolism.
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
                  href: "/insights/the-spiral-model",
                  title: "The Spiral Model",
                  description: "How organizations evolve through metabolic phases. The pattern of transformation.",
                  color: "red"
                },
                {
                  href: "/insights/organizational-antibodies",
                  title: "Organizational Antibodies",
                  description: "Why metabolic mismatches trigger rejection. The immune system at work.",
                  color: "yellow"
                },
                {
                  href: "/answers/glossary/the-decision-stall",
                  title: "The Decision Stall",
                  description: "When decision velocity drops to zero. The symptom of metabolic failure.",
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

export default MetabolicRatePage;
