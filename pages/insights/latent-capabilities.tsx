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

            {/* LATENT CAPABILITY VISUAL - 30% Dormant */}
            <div className="mt-16 flex justify-center">
              <div className="relative w-full max-w-md">
                {/* Capacity Grid */}
                <div className="grid grid-cols-10 gap-2 p-6 bg-zinc-950 border border-zinc-800">
                  {/* 70 active nodes (lit) + 30 latent nodes (dim, pulsing) */}
                  {Array.from({ length: 100 }).map((_, i) => {
                    const isLatent = i >= 70;
                    return (
                      <div
                        key={i}
                        className={`w-4 h-4 rounded-sm ${
                          isLatent
                            ? 'bg-yellow-500/20 animate-pulse'
                            : 'bg-green-500'
                        }`}
                        style={{
                          animationDelay: isLatent ? `${(i - 70) * 100}ms` : undefined,
                          animationDuration: isLatent ? '2s' : undefined,
                        }}
                      />
                    );
                  })}
                </div>

                {/* Labels */}
                <div className="flex justify-between mt-4 text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-sm" />
                    <span className="text-zinc-400">DEPLOYED (70%)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-yellow-500/40 rounded-sm animate-pulse" />
                    <span className="text-yellow-500">LATENT (30%)</span>
                  </div>
                </div>

                {/* Bottom caption */}
                <div className="text-center mt-6">
                  <span className="text-xs font-mono text-zinc-600">
                    You don't need more capacity. You need coordination.
                  </span>
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
              <p>When organizations hit constraints, the default response: hire more people, buy more equipment, expand facilities. Add capacity.</p>
              <p>Most organizations aren't capacity-constrained. They're coordination-constrained.</p>
              <p className="text-white text-xl font-bold pt-4">The capability already exists. It's just not accessible.</p>
            </div>

            {/* Quote */}
            <div className="bg-zinc-950 border border-zinc-800 p-8">
              <p className="text-2xl text-white italic">"You don't need more capacity. You need coordination infrastructure."</p>
            </div>

            {/* Big Number */}
            <div className="text-center py-8">
              <p className="text-6xl font-black text-yellow-500">30%</p>
              <p className="text-xl text-zinc-400 mt-2">more capability than they deploy</p>
              <p className="text-sm text-zinc-600 mt-4">Consistent across industries. 20-40% range, averaging 30%.</p>
            </div>

            {/* Pharmacy Example */}
            <div className="border-l-2 border-red-600 pl-6 space-y-4">
              <h2 className="text-xs font-mono text-red-500 mb-4">THE PHARMACY PARADOX</h2>
              <p className="text-zinc-300">Independent pharmacies have excess capacity. Each can fill more prescriptions than they receive.</p>
              <p className="text-zinc-300">Meanwhile, CVS runs at maximum utilization, turning customers away.</p>
              <p className="text-white font-bold">The independents have capability. CVS has coordination. Neither has both.</p>
            </div>

            {/* 4 Types Grid */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-yellow-950/20 border border-yellow-900/50 p-6">
                <p className="text-yellow-500 font-bold text-sm mb-2">SKILL LATENCY</p>
                <p className="text-zinc-300 text-sm">The engineer who's also a designer. The sales rep who speaks Mandarin. Rigid roles trap unused skills.</p>
              </div>
              <div className="bg-yellow-950/20 border border-yellow-900/50 p-6">
                <p className="text-yellow-500 font-bold text-sm mb-2">NETWORK LATENCY</p>
                <p className="text-zinc-300 text-sm">Sales knows what customers need. Product never hears it. The nodes exist. No signal flows.</p>
              </div>
              <div className="bg-yellow-950/20 border border-yellow-900/50 p-6">
                <p className="text-yellow-500 font-bold text-sm mb-2">TEMPORAL LATENCY</p>
                <p className="text-zinc-300 text-sm">Restaurants empty at 3pm while catering goes unfilled. Capacity exists. Demand exists. They don't meet.</p>
              </div>
              <div className="bg-yellow-950/20 border border-yellow-900/50 p-6">
                <p className="text-yellow-500 font-bold text-sm mb-2">SPATIAL LATENCY</p>
                <p className="text-zinc-300 text-sm">Equipment underused in hospital A, scarce in hospital B. Assets owned but not positioned for value.</p>
              </div>
            </div>

            {/* Where 30% hides */}
            <div className="bg-zinc-950 border border-zinc-800 p-8">
              <h2 className="text-xs font-mono text-zinc-500 mb-6">WHERE THE 30% HIDES</h2>
              <div className="space-y-2 font-mono text-sm">
                <div className="flex justify-between"><span>Skills beyond job descriptions</span><span className="text-yellow-400">~8-12%</span></div>
                <div className="flex justify-between"><span>Off-peak capacity</span><span className="text-yellow-400">~10-15%</span></div>
                <div className="flex justify-between"><span>Cross-functional knowledge</span><span className="text-yellow-400">~5-8%</span></div>
                <div className="flex justify-between"><span>Mispositioned assets</span><span className="text-yellow-400">~5-10%</span></div>
              </div>
            </div>

            {/* Coase Quote */}
            <div className="border-l-2 border-yellow-500 pl-6 space-y-4">
              <p className="text-zinc-300">In 1937, economist Ronald Coase asked why firms exist. His answer: transaction costs. It's cheaper to coordinate inside than contract outside.</p>
              <p className="text-white font-bold text-xl">What happens when coordination costs approach zero?</p>
              <p className="text-zinc-300">Firm boundaries dissolve. The independents can coordinate like a chain without being a chain.</p>
            </div>

            {/* Marketplace vs Infrastructure */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-950/20 border border-red-900/50 p-6">
                <p className="text-red-500 font-bold text-sm mb-2">MARKETPLACE MODEL</p>
                <p className="text-zinc-500 text-xs mb-2">Uber, Airbnb, Upwork</p>
                <p className="text-zinc-300 text-sm">Extracts value from coordination. Platform captures margin. Providers commoditized.</p>
              </div>
              <div className="bg-green-950/20 border border-green-900/50 p-6">
                <p className="text-green-500 font-bold text-sm mb-2">INFRASTRUCTURE MODEL</p>
                <p className="text-zinc-500 text-xs mb-2">The emerging alternative</p>
                <p className="text-zinc-300 text-sm">Enables coordination without extraction. Providers retain value. Competition on quality.</p>
              </div>
            </div>

            {/* Activation Steps */}
            <div className="bg-zinc-950 border border-zinc-800 p-8">
              <h2 className="text-xs font-mono text-zinc-500 mb-6">ACTIVATING LATENT CAPABILITY</h2>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <span className="text-red-600 font-mono text-lg">1</span>
                  <div>
                    <p className="text-white font-bold">VISIBILITY</p>
                    <p className="text-zinc-400 text-sm">See what exists. Map skills beyond job descriptions.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="text-red-600 font-mono text-lg">2</span>
                  <div>
                    <p className="text-white font-bold">ACCESSIBILITY</p>
                    <p className="text-zinc-400 text-sm">Make capability findable. Build search infrastructure.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="text-red-600 font-mono text-lg">3</span>
                  <div>
                    <p className="text-white font-bold">ACTIVATION</p>
                    <p className="text-zinc-400 text-sm">Remove friction. Fewer approvals. Simpler logistics.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="text-red-600 font-mono text-lg">4</span>
                  <div>
                    <p className="text-white font-bold">FEEDBACK</p>
                    <p className="text-zinc-400 text-sm">Learn from activation. Build intelligence over time.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* GPI and Latent */}
            <div className="space-y-4">
              <h2 className="text-xs font-mono text-zinc-500 mb-4">GPI AND LATENT CAPABILITY</h2>
              <div className="space-y-2 text-sm">
                <p><span className="text-red-500 font-bold">Particle State (GPI 7-10):</span> <span className="text-zinc-400">Maximizes latent capability by preventing coordination.</span></p>
                <p><span className="text-green-500 font-bold">Field State (GPI 1-3):</span> <span className="text-zinc-400">Minimizes latent capability by enabling coordination.</span></p>
              </div>
            </div>

            {/* Closing */}
            <div className="bg-red-600/10 border border-red-600/30 p-8 space-y-4">
              <p className="text-white font-bold text-2xl">Before you add capacity, audit latency.</p>
              <p className="text-zinc-300">Before you hire, coordinate. Before you buy, activate.</p>
              <p className="text-zinc-300">The capability you need probably already exists.</p>
              <p className="text-red-500 font-bold text-xl pt-4">You don't need more. You need to use what you have.</p>
            </div>

            {/* Book Teaser */}
            <div className="border border-zinc-800 p-8 flex items-center gap-6">
              <BookOpen size={48} className="text-zinc-600 flex-shrink-0" />
              <div>
                <p className="text-zinc-500 text-sm uppercase mb-1">From the upcoming book</p>
                <p className="text-xl font-black">The Growing Pains Index</p>
                <p className="text-zinc-400">Chapter 9: What You Have But Don't Use</p>
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
