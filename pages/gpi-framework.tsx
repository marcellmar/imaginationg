import React from 'react';
import Link from 'next/link';
import SEOHead from '../components/SEOHead';
import Navigation from '../components/Navigation';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowRight, Clock, RotateCcw, MapPin, Lock, Users, Building2, Zap } from 'lucide-react';

const GPIFrameworkPage = () => {
  useScrollReveal();

  return (
    <>
      <SEOHead
        title="The GPI Framework | Organizational Physics"
        description="GPI is a map, not a report card. Seven dimensions. One score. What kind of organism are you, and are you built for the terrain you're actually in?"
        ogImage="/images/og-gpi-framework.svg"
      />

      <div className="min-h-screen bg-stone-50 text-stone-900">
        <Navigation currentPage="framework" />

        {/* Hero - Centered */}
        <section className="pt-36 pb-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-stone-400 mb-8">
              <span className="w-2 h-2 bg-red-500 rounded-full" />
              THE FRAMEWORK
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-[1.05] tracking-headline">
              GPI IS A MAP<span className="text-red-600">.</span><br />
              NOT A REPORT CARD<span className="text-red-600">.</span>
            </h1>

            <p className="text-xl md:text-2xl text-stone-500 mb-6 max-w-2xl mx-auto leading-relaxed">
              A high score isn't a failure. A low score isn't a win. GPI tells you what kind of organism you are and whether the terrain you're in rewards that.
            </p>

            <p className="text-xl md:text-2xl text-stone-900 font-semibold">
              Machines get optimized. Organisms get understood.
            </p>
          </div>
        </section>

        {/* The Scale + Three States */}
        <section className="py-24 px-6 border-t border-stone-200 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="fade-up text-xs font-mono text-stone-400 mb-2">THE GPI SCALE</div>
            <h2 className="fade-up text-3xl md:text-4xl font-black mb-12 tracking-headline">THREE METABOLIC STATES</h2>

            {/* Scale bar */}
            <div className="fade-up mb-16">
              <div className="flex items-center justify-between mb-3">
                <span className="text-stone-900 font-black text-2xl">1</span>
                <span className="text-stone-500 font-black text-2xl">5</span>
                <span className="text-stone-900 font-black text-2xl">10</span>
              </div>
              <div className="h-2 bg-gradient-to-r from-stone-300 via-stone-500 to-stone-900 rounded-full" />
              <div className="flex justify-between mt-3 text-xs font-mono text-stone-400">
                <span>Fast. Adaptive.</span>
                <span>In transition.</span>
                <span>Hierarchy-routed.</span>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 fade-up-stagger">
              <div className="fade-up border border-stone-200 p-8 hover:border-stone-400 transition-colors">
                <div className="text-5xl font-black text-stone-900 mb-4">1-3</div>
                <div className="text-sm font-black text-stone-900 mb-4 tracking-widest">FIELD STATE</div>
                <p className="text-stone-500 text-sm leading-relaxed mb-5">Energy flows freely. Decisions happen at the edge. The org learns faster than it plans.</p>
                <Link href="/gpi-framework/field-state" className="text-xs font-medium text-stone-500 hover:text-stone-900 transition-colors">
                  Learn more →
                </Link>
              </div>

              <div className="fade-up border border-stone-200 p-8 hover:border-stone-400 transition-colors">
                <div className="text-5xl font-black text-stone-500 mb-4">4-6</div>
                <div className="text-sm font-black text-stone-900 mb-4 tracking-widest">TRANSITIONING</div>
                <p className="text-stone-500 text-sm leading-relaxed mb-5">Mixed metabolism. Some energy flows, some gets trapped. The window where intervention changes things.</p>
                <Link href="/gpi-framework/transition-state" className="text-xs font-medium text-stone-500 hover:text-stone-900 transition-colors">
                  Learn more →
                </Link>
              </div>

              <div className="fade-up border border-stone-200 p-8 hover:border-stone-400 transition-colors">
                <div className="text-5xl font-black text-red-600 mb-4">7-10</div>
                <div className="text-sm font-black text-stone-900 mb-4 tracking-widest">PARTICLE STATE</div>
                <p className="text-stone-500 text-sm leading-relaxed mb-5">Hierarchy routes everything. Energy gets trapped at approval layers. Can be optimal in Swamps. Lethal in Grasslands.</p>
                <Link href="/gpi-framework/particle-state" className="text-xs font-medium text-stone-500 hover:text-stone-900 transition-colors">
                  Learn more →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 7 Dimensions */}
        <section className="py-24 px-6 border-t border-stone-200">
          <div className="max-w-4xl mx-auto">
            <div className="fade-up text-xs font-mono text-stone-400 mb-2">HOW THE SCORE IS BUILT</div>
            <h2 className="fade-up text-3xl md:text-4xl font-black mb-5 tracking-headline">7 DIMENSIONS</h2>
            <p className="fade-up text-stone-500 mb-12 max-w-2xl text-lg leading-relaxed">
              Each one measures where energy leaks. Together they produce the score.
            </p>

            <div className="grid md:grid-cols-2 gap-5 fade-up-stagger">
              {[
                { name: 'Decision Latency', slug: 'decision-latency', icon: Clock, desc: 'How long between signal and action. The most expensive delay most orgs never measure.' },
                { name: 'Error Correction', slug: 'error-correction', icon: RotateCcw, desc: 'Whether mistakes compound or reverse. Slow error correction means the org learns slower than it fails.' },
                { name: 'Knowledge Location', slug: 'knowledge-location', icon: MapPin, desc: 'Is expertise findable or trapped in specific heads. When those heads leave, the knowledge goes with them.' },
                { name: 'Structural Lock-In', slug: 'structural-lock-in', icon: Lock, desc: 'How expensive direction changes are. Org chart, vendor contracts, infrastructure.' },
                { name: 'Talent Flow', slug: 'talent-flow', icon: Users, desc: 'Whether people move toward hard problems or stay stuck in roles that outlived their purpose.' },
                { name: 'Capital Intensity', slug: 'capital-intensity', icon: Building2, desc: 'How much physical infrastructure anchors strategy. Every dollar in an asset is a dollar that can\'t move.' },
                { name: 'Knowledge Velocity', slug: 'knowledge-velocity', icon: Zap, desc: 'How fast insight becomes action. The gap between knowing something and doing something about it.' },
              ].map((dim) => (
                <Link key={dim.name} href={`/gpi-framework/${dim.slug}`} className="group fade-up">
                  <div className="border border-stone-200 p-7 hover:border-stone-400 hover:shadow-sm transition-all h-full">
                    <div className="flex items-start gap-3 mb-4">
                      <dim.icon size={16} className="text-stone-400 group-hover:text-red-600 mt-0.5 flex-shrink-0 transition-colors" />
                      <h3 className="font-semibold text-stone-900 group-hover:text-red-600 transition-colors">{dim.name}</h3>
                    </div>
                    <p className="text-stone-500 text-sm leading-relaxed">{dim.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Terrain */}
        <section className="py-24 px-6 border-t border-stone-200 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="fade-up text-xs font-mono text-stone-400 mb-2">CONTEXT CHANGES EVERYTHING</div>
            <h2 className="fade-up text-3xl md:text-4xl font-black mb-5 tracking-headline">
              SAME SCORE<span className="text-red-600">.</span> DIFFERENT PHYSICS<span className="text-red-600">.</span>
            </h2>
            <p className="fade-up text-stone-500 mb-12 max-w-2xl text-lg leading-relaxed">
              A GPI of 5.0 in tech is a death sentence. A GPI of 5.0 in utilities might be optimal. The terrain sets the tolerance threshold.
            </p>

            <div className="fade-up space-y-0">
              {[
                { name: 'GRASSLANDS', desc: 'Speed is oxygen.', examples: 'Tech, AI, fast fashion', tolerance: '≤4.0' },
                { name: 'JUNGLES', desc: 'Complexity hides inefficiency.', examples: 'Healthcare, pharma, retail', tolerance: '≤5.5' },
                { name: 'HIGHLANDS', desc: 'Altitude is the moat.', examples: 'TSMC, Costco, luxury', tolerance: '≤6.5' },
                { name: 'SWAMPS', desc: 'Movement accelerates sinking.', examples: 'Utilities, Oracle, SAP', tolerance: '≤7.0' },
                { name: 'RIVERS', desc: 'The terrain itself is moving.', examples: 'EV, AI infrastructure', tolerance: 'Trajectory' },
                { name: 'DESERTS', desc: 'Resources extracted faster than regeneration.', examples: 'Print media, coal, late retail', tolerance: 'Autopsy' },
              ].map((biome, i) => (
                <div key={i} className="flex items-center gap-6 py-5 border-b border-stone-200 last:border-0">
                  <div className="text-xs font-mono font-bold text-stone-900 w-28 flex-shrink-0">{biome.name}</div>
                  <div className="flex-1">
                    <span className="text-sm text-stone-600">{biome.desc}</span>
                    <span className="text-xs text-stone-400 ml-3">{biome.examples}</span>
                  </div>
                  <div className="text-sm font-bold font-mono text-stone-500 flex-shrink-0">{biome.tolerance}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* r-K Species */}
        <section className="py-24 px-6 border-t border-stone-200">
          <div className="max-w-4xl mx-auto">
            <div className="fade-up text-xs font-mono text-stone-400 mb-2">SPECIES TYPE</div>
            <h2 className="fade-up text-3xl md:text-4xl font-black mb-8 tracking-headline">
              SAME TERRAIN<span className="text-red-600">.</span> DIFFERENT SPECIES<span className="text-red-600">.</span>
            </h2>

            <p className="fade-up text-stone-500 mb-12 max-w-2xl text-lg leading-relaxed">
              Two orgs in the same market with the same GPI score can have opposite outcomes. One is built for volume and scale. The other is built for moat and permanence.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-10 fade-up-stagger">
              <div className="fade-up border border-stone-200 p-8">
                <div className="text-stone-900 font-mono font-bold text-sm mb-4">r-STRATEGY</div>
                <p className="text-stone-600 text-sm mb-4 leading-relaxed">Volume over quality. Thin margins, massive scale, rapid replacement. Dandelions. Bacteria. Walmart.</p>
                <p className="text-xs text-stone-400">McDonald's, Shein, Amazon retail, fast fashion</p>
              </div>

              <div className="fade-up border border-stone-200 p-8">
                <div className="text-stone-900 font-mono font-bold text-sm mb-4">K-STRATEGY</div>
                <p className="text-stone-600 text-sm mb-4 leading-relaxed">Quality over volume. Fat margins, deliberate scarcity, generational durability. Redwood trees. Whales. Hermès.</p>
                <p className="text-xs text-stone-400">Ferrari, TSMC, Berkshire, Costco, luxury goods</p>
              </div>
            </div>

            <div className="fade-up border-l-2 border-red-600 pl-6">
              <p className="text-stone-600 text-sm leading-relaxed">
                Blockbuster was K-strategy in a terrain that switched to r-strategy overnight. Quibi spent $1.75B as K-strategy in TikTok's r-terrain. WeWork thought they were building Highland moats in commodity Grasslands.
              </p>
              <p className="text-stone-400 text-xs mt-4">Wrong species for the terrain. GPI doesn't save you from that.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 border-t border-stone-200 bg-white">
          <div className="max-w-4xl mx-auto text-center fade-up">
            <p className="text-stone-400 mb-3 text-sm font-mono">32 QUESTIONS. NOT A GRADE. A READ.</p>
            <h2 className="text-3xl md:text-4xl font-black mb-8 tracking-headline">
              KNOW YOUR SCORE<span className="text-red-600">.</span>
            </h2>
            <Link
              href="/diagnostic"
              className="inline-flex items-center gap-2 bg-stone-900 px-8 py-4 text-sm font-semibold hover:bg-stone-800 transition-colors group text-white"
            >
              Take the Diagnostic
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 px-6 border-t border-stone-200">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
              <div>
                <div className="font-black text-sm mb-4">GPI<span className="text-red-600">.</span>STUDIO</div>
                <p className="text-sm text-stone-400 leading-relaxed">
                  Organizational physics.<br />
                  We measure where energy gets stuck.
                </p>
              </div>
              <div>
                <div className="text-xs font-mono text-stone-400 mb-4">RESEARCH</div>
                <div className="space-y-3">
                  <Link href="/insights" className="block text-sm text-stone-500 hover:text-stone-900 transition-colors">Insights</Link>
                  <Link href="/insights/gpi-analyses" className="block text-sm text-stone-500 hover:text-stone-900 transition-colors">Analyses</Link>
                  <Link href="/gpi-framework" className="block text-sm text-stone-500 hover:text-stone-900 transition-colors">Framework</Link>
                </div>
              </div>
              <div>
                <div className="text-xs font-mono text-stone-400 mb-4">WORK</div>
                <div className="space-y-3">
                  <Link href="/diagnostic" className="block text-sm text-stone-500 hover:text-stone-900 transition-colors">Diagnostic</Link>
                  <Link href="/consult" className="block text-sm text-stone-500 hover:text-stone-900 transition-colors">Book a Session</Link>
                  <Link href="/work-with-us" className="block text-sm text-stone-500 hover:text-stone-900 transition-colors">Work With Us</Link>
                </div>
              </div>
              <div>
                <div className="text-xs font-mono text-stone-400 mb-4">COMPANY</div>
                <div className="space-y-3">
                  <Link href="/about" className="block text-sm text-stone-500 hover:text-stone-900 transition-colors">About</Link>
                </div>
              </div>
            </div>
            <div className="pt-8 border-t border-stone-200 flex justify-between items-center text-xs text-stone-400">
              <div>© {new Date().getFullYear()} Imagination G LLC</div>
              <div className="font-mono">gpi.studio</div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default GPIFrameworkPage;
