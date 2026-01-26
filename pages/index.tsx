import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import SEOHead from '../components/SEOHead';
import Navigation from '../components/Navigation';
import { ArrowRight } from 'lucide-react';

const Home: NextPage = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to actual newsletter service
    setSubscribed(true);
  };

  return (
    <>
      <SEOHead
        title="GPI Studio | Organizational Physics"
        description="Some companies move. Some companies calcify. We measure the difference. 66+ company analyses across 7 dimensions."
        ogImage="/images/og-home.svg"
      />

      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://gpi.studio/#organization",
              "name": "GPI Studio",
              "url": "https://gpi.studio",
              "logo": "https://gpi.studio/logo.png",
              "description": "Organizational physics. We measure where energy gets stuck.",
            })
          }}
        />
      </Head>

      <div className="min-h-screen bg-black text-white">
        <Navigation currentPage="home" />

        {/* Hero - Concept Forward */}
        <section className="pt-28 pb-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-zinc-600 mb-6">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              ORGANIZATIONAL PHYSICS
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1]">
              SOME COMPANIES MOVE<span className="text-red-600">.</span><br />
              SOME COMPANIES CALCIFY<span className="text-red-600">.</span>
            </h1>

            <p className="text-xl text-zinc-400 mb-8 max-w-2xl">
              We measure the difference. 66 companies scored. 7 dimensions. The pattern is clear.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/insights/gpi-analyses"
                className="inline-flex items-center gap-2 bg-red-600 px-6 py-3 font-bold hover:bg-red-700 transition-colors group"
              >
                SEE THE ANALYSES
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/gpi-framework"
                className="inline-flex items-center gap-2 border border-zinc-700 px-6 py-3 font-bold hover:border-zinc-500 transition-colors"
              >
                UNDERSTAND THE FRAMEWORK
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Analysis */}
        <section className="py-12 px-6 border-t border-zinc-900">
          <div className="max-w-4xl mx-auto">
            <div className="text-xs font-mono text-zinc-600 mb-6">LATEST ANALYSIS</div>

            <Link href="/insights/gpi-analyses" className="block group">
              <div className="border border-zinc-800 p-8 hover:border-red-600/50 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-mono text-red-500 bg-red-500/10 px-2 py-1">VITAL SIGNS</span>
                </div>

                <h2 className="text-2xl md:text-3xl font-black mb-4 group-hover:text-red-500 transition-colors">
                  Disney's Metabolic Stress
                </h2>

                <p className="text-zinc-400 mb-6 max-w-2xl">
                  Attendance down 1%. Per-guest spending up 5%. You don't ask that question when the parks are full. GPI 6.7, transitioning.
                </p>

                <div className="flex items-center gap-6 text-sm">
                  <div>
                    <span className="text-zinc-600">GPI Score</span>
                    <span className="ml-2 text-yellow-500 font-bold">6.7</span>
                  </div>
                  <div>
                    <span className="text-zinc-600">State</span>
                    <span className="ml-2 text-yellow-500 font-bold">TRANSITIONING</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Content Series */}
        <section className="py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-xs font-mono text-zinc-600 mb-6">CONTENT SERIES</div>

            <div className="grid md:grid-cols-3 gap-4">
              {/* Weekly Smackdown */}
              <Link href="/insights/gpi-analyses" className="block group">
                <div className="border border-zinc-800 p-6 h-full hover:border-red-600/50 transition-all">
                  <div className="text-xs font-mono text-red-500 mb-3">WEEKLY SMACKDOWN</div>
                  <h3 className="font-bold mb-2 group-hover:text-red-500 transition-colors">Netflix vs WBD</h3>
                  <p className="text-sm text-zinc-500">
                    Who wins when physics decides? One company pivots. The other prays.
                  </p>
                </div>
              </Link>

              {/* Calcification Alert */}
              <Link href="/insights/gpi-analyses" className="block group">
                <div className="border border-zinc-800 p-6 h-full hover:border-red-600/50 transition-all">
                  <div className="text-xs font-mono text-red-500 mb-3">CALCIFICATION ALERT</div>
                  <h3 className="font-bold mb-2 group-hover:text-red-500 transition-colors">Saks Fifth Avenue</h3>
                  <p className="text-sm text-zinc-500">
                    GPI 8.2. This isn't a rough quarter. This is physics.
                  </p>
                </div>
              </Link>

              {/* The Autopsy */}
              <Link href="/insights/gpi-analyses" className="block group">
                <div className="border border-zinc-800 p-6 h-full hover:border-red-600/50 transition-all">
                  <div className="text-xs font-mono text-red-500 mb-3">THE AUTOPSY</div>
                  <h3 className="font-bold mb-2 group-hover:text-red-500 transition-colors">Blockbuster</h3>
                  <p className="text-sm text-zinc-500">
                    They had meetings about the meetings about the threat. Death by decision latency.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* The Proof */}
        <section className="py-16 px-6 bg-zinc-950">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl md:text-7xl font-black text-red-600 mb-4">66+</div>
            <div className="text-xl font-bold mb-4">COMPANIES SCORED</div>
            <p className="text-zinc-500 mb-8 max-w-lg mx-auto">
              Fortune 500s. Retailers. Media giants. Tech. Same 7 dimensions. Same physics. Different scores.
            </p>
            <Link
              href="/insights/gpi-analyses"
              className="inline-flex items-center gap-2 text-red-500 font-bold hover:text-red-400 transition-colors group"
            >
              BROWSE ALL ANALYSES
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>

        {/* The Framework - Brief */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-black mb-6">
                  WHY SOME COMPANIES CAN'T MOVE<span className="text-red-600">.</span>
                </h2>
                <p className="text-zinc-400 mb-4">
                  Organizations calcify. Decision latency increases. Error correction slows. Knowledge gets stuck in silos.
                </p>
                <p className="text-zinc-400 mb-6">
                  GPI measures where energy gets trapped. Seven dimensions. One score. The physics of your organization.
                </p>
                <Link
                  href="/gpi-framework"
                  className="inline-flex items-center gap-2 text-white font-bold hover:text-red-500 transition-colors group"
                >
                  UNDERSTAND THE FRAMEWORK
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* 7 Dimensions - Compact */}
              <div className="grid grid-cols-2 gap-2">
                {[
                  { name: 'Decision Latency', desc: 'Speed to yes' },
                  { name: 'Error Correction', desc: 'Speed to fix' },
                  { name: 'Knowledge Location', desc: 'Where expertise lives' },
                  { name: 'Structural Lock-In', desc: 'Process rigidity' },
                  { name: 'Talent Flow', desc: 'Movement to impact' },
                  { name: 'Capital Intensity', desc: 'Cost to validate' },
                  { name: 'Knowledge Velocity', desc: 'Learning spread' },
                ].map((dim, i) => (
                  <div key={i} className="bg-zinc-900/50 p-3">
                    <div className="text-xs font-bold text-white">{dim.name}</div>
                    <div className="text-xs text-zinc-600">{dim.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter - Primary Conversion */}
        <section className="py-16 px-6 bg-zinc-950">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl font-black mb-4">GET THE ANALYSIS</h2>
            <p className="text-zinc-500 mb-8">
              Weekly breakdowns. Who's calcifying. Who's not. No spam. Just physics.
            </p>

            {subscribed ? (
              <div className="text-green-500 font-bold">You're in. Watch your inbox.</div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="flex-1 bg-zinc-900 border border-zinc-800 px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-red-600"
                />
                <button
                  type="submit"
                  className="bg-red-600 px-6 py-3 font-bold hover:bg-red-700 transition-colors"
                >
                  SUBSCRIBE
                </button>
              </form>
            )}
          </div>
        </section>

        {/* Diagnostic - Secondary CTA */}
        <section className="py-12 px-6 border-t border-zinc-900">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-zinc-600 text-sm mb-4">
              Curious about your own organization?
            </p>
            <Link
              href="/diagnostic"
              className="inline-flex items-center gap-2 text-white font-bold hover:text-red-500 transition-colors"
            >
              TAKE THE DIAGNOSTIC
              <ArrowRight size={16} />
            </Link>
            <p className="text-zinc-700 text-xs mt-2">
              32 questions. 7 dimensions. Free.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-6 border-t border-zinc-900">
          <div className="max-w-4xl mx-auto flex justify-between items-center text-sm text-zinc-600">
            <div>GPI.STUDIO</div>
            <div>© IMAGINATION G LLC</div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
