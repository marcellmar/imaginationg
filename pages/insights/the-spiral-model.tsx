import type { NextPage } from 'next';
import Link from 'next/link';
import SEOHead from '../../components/SEOHead';
import Navigation from '../../components/Navigation';
import RelatedContent from '../../components/RelatedContent';
import { ArrowLeft, BookOpen, TrendingUp, TrendingDown, Activity } from 'lucide-react';

const TheSpiralModelPage: NextPage = () => {
  return (
    <>
      <SEOHead
        title="The Spiral Model - Why Transformation Isn't Linear | IMAGINATION G"
        description="You can't jump from particle to field. Organizational evolution spirals, revisiting particle thinking at higher levels of field capability."
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
              <span className="text-xs text-zinc-500">10 min read</span>
              <span className="text-xs text-zinc-600">•</span>
              <span className="text-xs text-zinc-500">TRANSFORMATION</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 leading-[1.1]">
              THE SPIRAL<br />MODEL<span className="text-red-600">.</span>
            </h1>

            <p className="text-2xl text-zinc-500 mb-8">
              Why Transformation Isn't Linear
            </p>

            <p className="text-xl text-zinc-400 max-w-2xl">
              Your body doesn't "achieve" a state. It cycles. Breathe in, breathe out. Build tissue, break tissue.
              Companies are the same. The health isn't in any single state—it's in the rhythm.
            </p>

            {/* SPIRAL VISUAL - 4 Phases Cycling Upward */}
            <div className="mt-16 flex justify-center">
              <div className="relative w-64 h-80">
                <svg viewBox="0 0 200 300" className="w-full h-full">
                  {/* Spiral path - going up */}
                  <path
                    d="M 100 280
                       C 160 260, 160 220, 100 200
                       C 40 180, 40 140, 100 120
                       C 160 100, 160 60, 100 40"
                    fill="none"
                    stroke="url(#spiralGradient)"
                    strokeWidth="3"
                    strokeDasharray="8,4"
                    opacity="0.6"
                  />

                  {/* Gradient definition */}
                  <defs>
                    <linearGradient id="spiralGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                      <stop offset="0%" stopColor="#f59e0b" />
                      <stop offset="33%" stopColor="#ef4444" />
                      <stop offset="66%" stopColor="#a855f7" />
                      <stop offset="100%" stopColor="#22c55e" />
                    </linearGradient>
                  </defs>

                  {/* Phase markers - animated dots traveling the spiral */}
                  <circle r="8" fill="#f59e0b">
                    <animateMotion
                      path="M 100 280 C 160 260, 160 220, 100 200 C 40 180, 40 140, 100 120 C 160 100, 160 60, 100 40"
                      dur="6s"
                      repeatCount="indefinite"
                    />
                  </circle>

                  {/* Phase labels on the spiral */}
                  <g className="text-xs font-mono">
                    {/* Crystallization - bottom */}
                    <text x="140" y="270" fill="#f59e0b" fontSize="10">CRYSTALLIZE</text>
                    <circle cx="100" cy="280" r="4" fill="#f59e0b" opacity="0.5" />

                    {/* Particle - right side */}
                    <text x="140" y="200" fill="#ef4444" fontSize="10">PARTICLE</text>
                    <circle cx="100" cy="200" r="4" fill="#ef4444" opacity="0.5" />

                    {/* Dissolution - left side */}
                    <text x="20" y="120" fill="#a855f7" fontSize="10">DISSOLVE</text>
                    <circle cx="100" cy="120" r="4" fill="#a855f7" opacity="0.5" />

                    {/* Field - top */}
                    <text x="140" y="40" fill="#22c55e" fontSize="10">FIELD</text>
                    <circle cx="100" cy="40" r="4" fill="#22c55e" opacity="0.5" />
                  </g>

                  {/* Upward arrow indicating growth */}
                  <path d="M 100 20 L 95 30 M 100 20 L 105 30" stroke="#22c55e" strokeWidth="2" fill="none">
                    <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
                  </path>
                  <text x="110" y="18" fill="#22c55e" fontSize="8" fontFamily="monospace">HIGHER</text>
                </svg>

                {/* Caption */}
                <div className="absolute -bottom-8 left-0 right-0 text-center">
                  <span className="text-xs font-mono text-zinc-600">Each cycle ends higher. You can't skip phases.</span>
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
              <p>"We measured engagement at 72%." Static. Frozen. No indication of direction, velocity, or phase.</p>
              <p>A company with GPI 7 isn't necessarily sick. They might be at peak crystallization, about to dissolve productively. Or frozen solid, unable to change.</p>
              <p className="text-white text-xl font-bold pt-4">You can't tell from a single measurement.</p>
            </div>

            {/* Quote */}
            <div className="bg-zinc-950 border border-zinc-800 p-8">
              <p className="text-2xl text-white italic">"Organizations don't transform once. They cycle. The question isn't what state you're in. It's how well you're cycling."</p>
            </div>

            {/* Thermometer vs EKG */}
            <div className="text-center py-4">
              <p className="text-zinc-400">This is the difference between a thermometer and an EKG.</p>
              <p className="text-white font-bold text-xl mt-2">One tells you temperature. The other tells you if you're alive.</p>
            </div>

            {/* Four Phases Grid */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border-2 border-amber-600 p-6">
                <div className="text-amber-500 font-mono text-xs mb-2">PHASE 1</div>
                <h3 className="text-xl font-black text-amber-400 mb-2">CRYSTALLIZATION</h3>
                <p className="text-zinc-400 text-sm">What works gets repeated. Patterns emerge. "Let's do that again."</p>
              </div>
              <div className="border-2 border-red-600 p-6">
                <div className="text-red-500 font-mono text-xs mb-2">PHASE 2</div>
                <h3 className="text-xl font-black text-red-400 mb-2">PARTICLE</h3>
                <p className="text-zinc-400 text-sm">Process becomes policy becomes culture. "This is how we do things."</p>
              </div>
              <div className="border-2 border-purple-600 p-6">
                <div className="text-purple-500 font-mono text-xs mb-2">PHASE 3</div>
                <h3 className="text-xl font-black text-purple-400 mb-2">DISSOLUTION</h3>
                <p className="text-zinc-400 text-sm">Reality stops matching structure. Cracks appear. Structure breaks.</p>
              </div>
              <div className="border-2 border-green-600 p-6">
                <div className="text-green-500 font-mono text-xs mb-2">PHASE 4</div>
                <h3 className="text-xl font-black text-green-400 mb-2">FIELD</h3>
                <p className="text-zinc-400 text-sm">Fluid. Experimental. New patterns emerge. "What if we tried..."</p>
              </div>
            </div>

            <p className="text-zinc-400 text-center">Then back to crystallization. But <span className="text-white font-bold">higher</span>.</p>

            {/* Linear Myth */}
            <div className="border-l-2 border-purple-600 pl-6 space-y-4">
              <h2 className="text-xs font-mono text-purple-500 mb-4">THE LINEAR MYTH</h2>
              <p className="text-zinc-300">The consulting industry sells transformation as a journey from A to B. Current state to future state.</p>
              <p className="text-zinc-300">It's a compelling story. It fits in PowerPoint. It justifies contracts.</p>
              <p className="text-white font-bold text-xl">It's also wrong.</p>
            </div>

            {/* Transformation Graveyard */}
            <div className="bg-zinc-950 border border-zinc-800 p-8">
              <h2 className="text-xs font-mono text-red-500 mb-6">THE TRANSFORMATION GRAVEYARD</h2>
              <div className="space-y-3 text-zinc-300">
                <p><span className="text-white font-bold">Failed SAP implementations:</span> Jumped to integrated systems without building capability</p>
                <p><span className="text-white font-bold">Abandoned cloud migrations:</span> On-premise to distributed without metabolic preparation</p>
                <p><span className="text-white font-bold">Dead innovation labs:</span> Field-state pockets in particle-state orgs, no integration path</p>
                <p><span className="text-white font-bold">Rejected acquisitions:</span> Bought field-state companies with particle-state metabolism</p>
              </div>
            </div>

            {/* Amazon Spiral */}
            <div className="space-y-4">
              <h2 className="text-xs font-mono text-zinc-500 mb-4">THE AMAZON SPIRAL</h2>
              <p className="text-zinc-300">Amazon is often cited as a field state success story. GPI around 3.2.</p>
              <p className="text-white font-bold text-xl">Amazon didn't start in field state. They spiraled to it.</p>
            </div>

            <div className="space-y-4">
              <div className="border-l-4 border-red-600 pl-6 py-2">
                <p className="text-red-600 font-mono text-sm">PHASE 1: Retail (GPI ~7)</p>
                <p className="text-zinc-400 text-sm">Books. Warehouses. Process optimization. <span className="text-white">Mastered particle first.</span></p>
              </div>
              <div className="border-l-4 border-yellow-500 pl-6 py-2">
                <p className="text-yellow-500 font-mono text-sm">PHASE 2: Marketplace (GPI ~4)</p>
                <p className="text-zinc-400 text-sm">Third-party sellers. Distributed inventory. <span className="text-white">Used Phase 1 to enable Phase 2.</span></p>
              </div>
              <div className="border-l-4 border-green-500 pl-6 py-2">
                <p className="text-green-500 font-mono text-sm">PHASE 3: AWS (GPI ~2)</p>
                <p className="text-zinc-400 text-sm">Infrastructure-as-service. <span className="text-white">Used Phase 2 coordination for Phase 3.</span></p>
              </div>
              <div className="border-l-4 border-blue-500 pl-6 py-2">
                <p className="text-blue-500 font-mono text-sm">PHASE 4: Logistics (GPI ~5)</p>
                <p className="text-zinc-400 text-sm">Own delivery infrastructure. <span className="text-white">Revisiting particle with field capabilities.</span></p>
              </div>
            </div>

            {/* Acquisition Comparison */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-950/20 border border-green-900/50 p-6">
                <p className="text-green-500 font-bold text-sm mb-2">AMAZON + WHOLE FOODS</p>
                <p className="text-zinc-300 text-sm mb-2">GPI gap: 2.9 points. Within range.</p>
                <p className="text-green-400 text-sm">Result: Successful integration.</p>
              </div>
              <div className="bg-red-950/20 border border-red-900/50 p-6">
                <p className="text-red-500 font-bold text-sm mb-2">HP + AUTONOMY</p>
                <p className="text-zinc-300 text-sm mb-2">GPI gap: 4.7 points. Beyond range.</p>
                <p className="text-red-400 text-sm">Result: $8.8 billion writedown.</p>
              </div>
            </div>

            {/* 2-Point Rule */}
            <div className="bg-zinc-950 border border-zinc-800 p-8">
              <h2 className="text-xs font-mono text-zinc-500 mb-6">THE 2-POINT RULE</h2>
              <div className="space-y-2 font-mono text-sm">
                <div className="flex justify-between"><span>1-2 point shift</span><span className="text-green-400">1-2 years</span></div>
                <div className="flex justify-between"><span>2-3 point shift</span><span className="text-yellow-400">3-5 years</span></div>
                <div className="flex justify-between"><span>4+ point shift</span><span className="text-red-400">Multiple spiral phases</span></div>
                <div className="flex justify-between"><span>5+ point acquisition gap</span><span className="text-red-600">High failure probability</span></div>
              </div>
            </div>

            {/* Particle isn't bad */}
            <div className="border-l-2 border-yellow-500 pl-6 space-y-4">
              <p className="text-xl text-white italic">"Transformation isn't choosing particle or field. It's building the capability to spiral between them."</p>
              <p className="text-zinc-400">Nuclear power plants should be particle state. Startups should be field state. The problem isn't the state. It's the mismatch.</p>
            </div>

            {/* Velocity and Direction */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-zinc-800 p-6">
                <Activity className="w-6 h-6 text-blue-500 mb-3" />
                <h4 className="font-bold mb-2">SPIRAL VELOCITY</h4>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between"><span className="text-zinc-400">Startups</span><span className="font-mono">3-6 months</span></div>
                  <div className="flex justify-between"><span className="text-zinc-400">Growth stage</span><span className="font-mono">12-18 months</span></div>
                  <div className="flex justify-between"><span className="text-zinc-400">Enterprise</span><span className="font-mono">3-5 years</span></div>
                  <div className="flex justify-between"><span className="text-zinc-400">Dying</span><span className="font-mono text-red-500">∞ (stuck)</span></div>
                </div>
              </div>
              <div className="border border-zinc-800 p-6">
                <TrendingUp className="w-6 h-6 text-green-500 mb-3" />
                <h4 className="font-bold mb-2">SPIRAL DIRECTION</h4>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between"><span className="text-green-400">+1</span><span>Ascending</span></div>
                  <div className="flex justify-between"><span className="text-zinc-400">0</span><span>Treading water</span></div>
                  <div className="flex justify-between"><span className="text-red-400">-1</span><span>Descending</span></div>
                </div>
              </div>
            </div>

            {/* Pathologies */}
            <div className="space-y-4">
              <h2 className="text-xs font-mono text-zinc-500 mb-4">WHEN THE SPIRAL BREAKS</h2>
              <div className="border-l-4 border-amber-600 pl-6 py-2">
                <p className="text-amber-400 font-bold">CRYSTALLIZATION ADDICTION</p>
                <p className="text-zinc-400 text-sm">"We need more process." Terrified of dissolution. Eventually frozen.</p>
              </div>
              <div className="border-l-4 border-purple-600 pl-6 py-2">
                <p className="text-purple-400 font-bold">DISSOLUTION PARALYSIS</p>
                <p className="text-zinc-400 text-sm">"We're still restructuring." Perpetual crisis. Burns out the org.</p>
              </div>
              <div className="border-l-4 border-green-600 pl-6 py-2">
                <p className="text-green-400 font-bold">FIELD ROMANTICISM</p>
                <p className="text-zinc-400 text-sm">"We're agile." Mistakes chaos for adaptability. Nothing compounds.</p>
              </div>
              <div className="border-l-4 border-red-600 pl-6 py-2">
                <p className="text-red-400 font-bold">PARTICLE NOSTALGIA</p>
                <p className="text-zinc-400 text-sm">"Back to basics." Every crisis met by restoring the old way.</p>
              </div>
            </div>

            {/* Closing */}
            <div className="bg-red-600/10 border border-red-600/30 p-8 space-y-4">
              <p className="text-white font-bold text-2xl">You can't skip the spiral.</p>
              <p className="text-zinc-300">Organizations that try to skip phases trigger antibody rejection. Organizations that try to jump too many GPI points at once fail.</p>
              <p className="text-zinc-300">The path forward isn't faster movement.</p>
              <p className="text-red-500 font-bold text-xl pt-4">It's smarter spiraling.</p>
            </div>

            {/* Book Teaser */}
            <div className="border border-zinc-800 p-8 flex items-center gap-6">
              <BookOpen size={48} className="text-zinc-600 flex-shrink-0" />
              <div>
                <p className="text-zinc-500 text-sm uppercase mb-1">From the upcoming book</p>
                <p className="text-xl font-black">The Growing Pains Index</p>
                <p className="text-zinc-400">Chapter 5: You Can't Skip the Transition</p>
              </div>
            </div>

          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-3xl font-black mb-6">FIND YOUR SPIRAL POSITION</h3>
            <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              Measure your current GPI. Understand which phase you're in. Plan realistic transitions.
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
                  href: "/insights/organizational-antibodies",
                  title: "Organizational Antibodies",
                  description: "Why the immune system rejects changes that skip spiral phases.",
                  color: "red"
                },
                {
                  href: "/insights/why-success-creates-rigidity",
                  title: "Why Success Creates Rigidity",
                  description: "The trap that locks organizations in particle state.",
                  color: "yellow"
                },
                {
                  href: "/answers/glossary/the-momentum-effect",
                  title: "The Momentum Effect",
                  description: "How velocity compounds in field state. The spiral accelerates.",
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

export default TheSpiralModelPage;
