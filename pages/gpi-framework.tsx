import React from 'react';
import Link from 'next/link';
import SEOHead from '../components/SEOHead';
import Navigation from '../components/Navigation';
import { ArrowRight, Clock, RotateCcw, MapPin, Lock, Users, Building2, Zap } from 'lucide-react';

const GPIFrameworkPage = () => {
  return (
    <>
      <SEOHead
        title="The GPI Framework | Organizational Physics"
        description="GPI is a map, not a report card. Seven dimensions. One score. What kind of organism are you, and are you built for the terrain you're actually in?"
        ogImage="/images/og-gpi-framework.svg"
      />

      <div className="min-h-screen bg-black text-white">
        <Navigation currentPage="framework" />

        {/* Hero */}
        <section className="pt-28 pb-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-zinc-600 mb-6">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              THE FRAMEWORK
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1]">
              GPI IS A MAP<span className="text-red-600">.</span><br />
              NOT A REPORT CARD<span className="text-red-600">.</span>
            </h1>

            <p className="text-xl text-zinc-400 mb-4 max-w-2xl">
              A high score isn't a failure. A low score isn't a win. GPI tells you what kind of organism you are and whether the terrain you're in rewards that.
            </p>

            <p className="text-xl text-white font-bold">
              Machines get optimized. Organisms get understood.
            </p>
          </div>
        </section>

        {/* The Scale + Three States */}
        <section className="py-16 px-6 border-t border-zinc-900 bg-zinc-950">
          <div className="max-w-4xl mx-auto">
            <div className="text-xs font-mono text-zinc-600 mb-2">THE GPI SCALE</div>
            <h2 className="text-3xl font-black mb-10">THREE METABOLIC STATES</h2>

            {/* Scale bar */}
            <div className="mb-12">
              <div className="flex items-center justify-between mb-2">
                <span className="text-green-500 font-black text-2xl">1</span>
                <span className="text-yellow-500 font-black text-2xl">5</span>
                <span className="text-red-500 font-black text-2xl">10</span>
              </div>
              <div className="h-3 bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 rounded-full" />
              <div className="flex justify-between mt-2 text-xs font-mono text-zinc-600">
                <span>Fast. Adaptive.</span>
                <span>In transition.</span>
                <span>Hierarchy-routed.</span>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-zinc-800 p-6">
                <div className="text-5xl font-black text-green-500 mb-3">1-3</div>
                <div className="text-xl font-black text-white mb-3">FIELD STATE</div>
                <p className="text-zinc-500 text-sm mb-4">Energy flows freely. Decisions happen at the edge. The org learns faster than it plans. Built for Grasslands and fast-moving Rivers.</p>
                <Link href="/gpi-framework/field-state" className="text-xs font-mono text-green-500 hover:text-green-400">
                  FIELD STATE →
                </Link>
              </div>

              <div className="border border-zinc-800 p-6">
                <div className="text-5xl font-black text-yellow-500 mb-3">4-6</div>
                <div className="text-xl font-black text-white mb-3">TRANSITIONING</div>
                <p className="text-zinc-500 text-sm mb-4">Mixed metabolism. Some energy flows, some gets trapped. Can go either direction. The window where intervention actually changes things.</p>
                <Link href="/gpi-framework/transition-state" className="text-xs font-mono text-yellow-500 hover:text-yellow-400">
                  TRANSITION STATE →
                </Link>
              </div>

              <div className="border border-zinc-800 p-6">
                <div className="text-5xl font-black text-red-500 mb-3">7-10</div>
                <div className="text-xl font-black text-white mb-3">PARTICLE STATE</div>
                <p className="text-zinc-500 text-sm mb-4">Hierarchy routes everything. Energy gets trapped at approval layers. Can be optimal in Swamps. Lethal in Grasslands.</p>
                <Link href="/gpi-framework/particle-state" className="text-xs font-mono text-red-500 hover:text-red-400">
                  PARTICLE STATE →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 7 Dimensions */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-4xl mx-auto">
            <div className="text-xs font-mono text-zinc-600 mb-2">HOW THE SCORE IS BUILT</div>
            <h2 className="text-3xl font-black mb-4">7 DIMENSIONS</h2>
            <p className="text-zinc-500 mb-10 max-w-2xl">
              Each one measures where energy leaks. Together they produce the score. Weight shows how much each dimension moves the number.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                { name: 'DECISION LATENCY', slug: 'decision-latency', icon: Clock, desc: 'How long between signal and action. The most expensive delay most orgs never measure.' },
                { name: 'ERROR CORRECTION', slug: 'error-correction', icon: RotateCcw, desc: 'Whether mistakes compound or reverse. Slow error correction means the org learns slower than it fails.' },
                { name: 'KNOWLEDGE LOCATION', slug: 'knowledge-location', icon: MapPin, desc: 'Is expertise findable or trapped in specific heads. When those heads leave, the knowledge goes with them.' },
                { name: 'STRUCTURAL LOCK-IN', slug: 'structural-lock-in', icon: Lock, desc: 'How expensive direction changes are. Org chart, vendor contracts, infrastructure. Anything that makes pivoting slow.' },
                { name: 'TALENT FLOW', slug: 'talent-flow', icon: Users, desc: 'Whether people move toward hard problems or stay stuck in roles that outlived their purpose.' },
                { name: 'CAPITAL INTENSITY', slug: 'capital-intensity', icon: Building2, desc: 'How much physical infrastructure anchors strategy. Every dollar in an asset is a dollar that can\'t move.' },
                { name: 'KNOWLEDGE VELOCITY', slug: 'knowledge-velocity', icon: Zap, desc: 'How fast insight becomes action. The gap between knowing something and doing something about it.' },
              ].map((dim) => (
                <Link key={dim.name} href={`/gpi-framework/${dim.slug}`} className="group">
                  <div className="border border-zinc-800 p-6 hover:border-red-600/50 transition-colors h-full">
                    <div className="flex items-start gap-3 mb-3">
                      <dim.icon size={16} className="text-red-600 mt-0.5 flex-shrink-0" />
                      <h3 className="font-black text-white group-hover:text-red-500 transition-colors text-sm">{dim.name}</h3>
                    </div>
                    <p className="text-zinc-500 text-sm">{dim.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Terrain: same score, different physics */}
        <section className="py-16 px-6 border-t border-zinc-900 bg-zinc-950">
          <div className="max-w-4xl mx-auto">
            <div className="text-xs font-mono text-zinc-600 mb-2">CONTEXT CHANGES EVERYTHING</div>
            <h2 className="text-3xl font-black mb-4">
              SAME SCORE<span className="text-red-600">.</span><br />DIFFERENT PHYSICS<span className="text-red-600">.</span>
            </h2>
            <p className="text-zinc-400 mb-10 max-w-2xl">
              A GPI of 5.0 in tech is a death sentence. A GPI of 5.0 in utilities might be optimal. The terrain sets the tolerance threshold. The score tells you where you sit relative to it.
            </p>

            <div className="space-y-0">
              {[
                { name: 'GRASSLANDS', desc: 'Speed is oxygen.', examples: 'Tech, AI, fast fashion', tolerance: '≤4.0', color: 'text-green-500' },
                { name: 'JUNGLES', desc: 'Complexity hides inefficiency.', examples: 'Healthcare, pharma, retail', tolerance: '≤5.5', color: 'text-emerald-600' },
                { name: 'HIGHLANDS', desc: 'Altitude is the moat.', examples: 'TSMC, Costco, luxury', tolerance: '≤6.5', color: 'text-blue-500' },
                { name: 'SWAMPS', desc: 'Movement accelerates sinking.', examples: 'Utilities, Oracle, SAP', tolerance: '≤7.0', color: 'text-yellow-600' },
                { name: 'RIVERS', desc: 'The terrain itself is moving.', examples: 'EV, AI infrastructure', tolerance: 'Trajectory', color: 'text-cyan-500' },
                { name: 'DESERTS', desc: 'Resources extracted faster than regeneration.', examples: 'Print media, coal, late retail', tolerance: 'Autopsy', color: 'text-zinc-500' },
              ].map((biome, i) => (
                <div key={i} className="flex items-center gap-6 py-4 border-b border-zinc-800 last:border-0">
                  <div className={`text-xs font-mono font-bold ${biome.color} w-28 flex-shrink-0`}>{biome.name}</div>
                  <div className="flex-1">
                    <span className="text-sm text-zinc-300">{biome.desc}</span>
                    <span className="text-xs text-zinc-600 ml-3">{biome.examples}</span>
                  </div>
                  <div className={`text-sm font-bold font-mono ${biome.color} flex-shrink-0`}>{biome.tolerance}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* r-K Species Tease */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-4xl mx-auto">
            <div className="text-xs font-mono text-zinc-600 mb-2">SPECIES TYPE</div>
            <h2 className="text-3xl font-black mb-6">
              SAME TERRAIN<span className="text-red-600">.</span><br />DIFFERENT SPECIES<span className="text-red-600">.</span>
            </h2>

            <p className="text-zinc-400 mb-8 max-w-2xl">
              Two orgs in the same market with the same GPI score can have opposite outcomes. One is built for volume and scale. The other is built for moat and permanence. The strategy type determines whether the terrain rewards you.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="border border-zinc-800 p-6">
                <div className="text-green-500 font-mono font-bold text-sm mb-3">r-STRATEGY</div>
                <p className="text-zinc-300 text-sm mb-3">Volume over quality. Thin margins, massive scale, rapid replacement. Dandelions. Bacteria. Walmart.</p>
                <p className="text-xs text-zinc-600">McDonald's, Shein, Amazon retail, fast fashion</p>
              </div>

              <div className="border border-zinc-800 p-6">
                <div className="text-blue-500 font-mono font-bold text-sm mb-3">K-STRATEGY</div>
                <p className="text-zinc-300 text-sm mb-3">Quality over volume. Fat margins, deliberate scarcity, generational durability. Redwood trees. Whales. Hermès.</p>
                <p className="text-xs text-zinc-600">Ferrari, TSMC, Berkshire, Costco, luxury goods</p>
              </div>
            </div>

            <div className="border-l-2 border-red-600 pl-6">
              <p className="text-zinc-300 text-sm">
                Blockbuster was K-strategy in a terrain that switched to r-strategy overnight. Quibi spent $1.75B as K-strategy in TikTok's r-terrain. WeWork thought they were building Highland moats in commodity Grasslands.
              </p>
              <p className="text-zinc-500 text-xs mt-3">Wrong species for the terrain. GPI doesn't save you from that.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 border-t border-zinc-900 bg-zinc-950">
          <div className="max-w-4xl mx-auto">
            <p className="text-zinc-500 mb-2 text-sm font-mono">32 QUESTIONS. NOT A GRADE. A READ.</p>
            <h2 className="text-3xl font-black mb-6">
              KNOW YOUR SCORE<span className="text-red-600">.</span>
            </h2>
            <Link
              href="/diagnostic"
              className="inline-flex items-center gap-2 bg-red-600 px-8 py-4 text-lg font-black hover:bg-red-700 transition-colors group"
            >
              TAKE THE DIAGNOSTIC
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default GPIFrameworkPage;
