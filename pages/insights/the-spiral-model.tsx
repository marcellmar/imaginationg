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

        {/* Article Content */}
        <section className="py-8 px-6">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-invert prose-lg max-w-none">

              {/* The Core Insight */}
              <div className="border-l-4 border-purple-600 pl-6 mb-12">
                <p className="text-xl text-zinc-300 italic mb-0">
                  "Organizations don't transform once. They cycle. The question isn't what state you're in—it's how well you're cycling."
                </p>
              </div>

              <h2 className="text-2xl font-black mt-12 mb-6">WHY SPREADSHEETS MISS IT</h2>

              <p className="text-zinc-400 mb-6">
                "We measured engagement at 72%." Static. Frozen. No indication of direction, velocity, or phase.
              </p>

              <p className="text-zinc-400 mb-6">
                A company with GPI 7 (particle state) isn't necessarily sick. They might be at peak crystallization,
                about to dissolve productively. Or frozen solid, unable to change.
                <span className="text-white font-bold"> You can't tell from a single measurement.</span>
              </p>

              <p className="text-zinc-400 mb-6">
                This is the difference between a thermometer and an EKG. One tells you temperature.
                The other tells you if you're alive.
              </p>

              <h2 className="text-2xl font-black mt-12 mb-6">THE FOUR PHASES</h2>

              <p className="text-zinc-400 mb-8">
                Every organization cycles through these. The question is how well.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-12 not-prose">
                <div className="border-2 border-amber-600 p-6">
                  <div className="text-amber-500 font-mono text-xs mb-2">PHASE 1</div>
                  <h3 className="text-xl font-black text-amber-400 mb-2">CRYSTALLIZATION</h3>
                  <p className="text-zinc-400 text-sm">
                    What works gets repeated. Patterns emerge. Success becomes process.
                    "Let's do that again."
                  </p>
                </div>

                <div className="border-2 border-red-600 p-6">
                  <div className="text-red-500 font-mono text-xs mb-2">PHASE 2</div>
                  <h3 className="text-xl font-black text-red-400 mb-2">PARTICLE</h3>
                  <p className="text-zinc-400 text-sm">
                    Process becomes policy becomes culture. Maximum structure. Minimum flexibility.
                    "This is how we do things."
                  </p>
                </div>

                <div className="border-2 border-purple-600 p-6">
                  <div className="text-purple-500 font-mono text-xs mb-2">PHASE 3</div>
                  <h3 className="text-xl font-black text-purple-400 mb-2">DISSOLUTION</h3>
                  <p className="text-zinc-400 text-sm">
                    Reality stops matching structure. Cracks appear. The old way stops working.
                    Structure breaks—voluntarily or violently.
                  </p>
                </div>

                <div className="border-2 border-green-600 p-6">
                  <div className="text-green-500 font-mono text-xs mb-2">PHASE 4</div>
                  <h3 className="text-xl font-black text-green-400 mb-2">FIELD</h3>
                  <p className="text-zinc-400 text-sm">
                    Fluid. Experimental. New patterns emerge from chaos. Not random—searching.
                    "What if we tried..."
                  </p>
                </div>
              </div>

              <p className="text-zinc-400 mb-6">
                Then back to crystallization. But <span className="text-white font-bold">higher</span>.
              </p>

              <h2 className="text-2xl font-black mt-12 mb-6">THE LINEAR MYTH</h2>

              <p className="text-zinc-400 mb-6">
                The consulting industry sells transformation as a journey from A to B. Current state to future state. Old model to new model. Particle to field.
              </p>

              <p className="text-zinc-400 mb-6">
                It's a compelling story. It fits in PowerPoint. It justifies contracts.
              </p>

              <p className="text-zinc-400 mb-6">
                It's also wrong.
              </p>

              <p className="text-zinc-400 mb-6">
                <span className="text-white font-bold">Organizational evolution isn't linear. It's helical.</span> Companies don't move from particle state to field state in a straight line. They spiral: mastering particle, expanding to field, returning to particle at a higher level, expanding again.
              </p>

              <p className="text-zinc-400 mb-6">
                This explains why "digital transformation" initiatives fail at predictable rates. Why acquired companies get rejected. Why innovation labs never influence core operations. The linear model assumes you can skip from GPI 8 to GPI 3. You can't.
              </p>

              <div className="bg-zinc-950 border border-zinc-800 p-8 my-12">
                <h3 className="text-xl font-black text-red-600 mb-4">THE TRANSFORMATION GRAVEYARD</h3>
                <div className="space-y-4 text-zinc-400">
                  <p><span className="text-white">Failed SAP implementations:</span> Tried to jump from manual processes to integrated systems without building capability</p>
                  <p><span className="text-white">Abandoned cloud migrations:</span> Attempted to move from on-premise to distributed without metabolic preparation</p>
                  <p><span className="text-white">Dead innovation labs:</span> Created field-state pockets in particle-state organizations without integration path</p>
                  <p><span className="text-white">Rejected acquisitions:</span> Bought field-state companies with particle-state metabolism and wondered why they failed</p>
                </div>
              </div>

              <h2 className="text-2xl font-black mt-12 mb-6">THE AMAZON SPIRAL</h2>

              <p className="text-zinc-400 mb-6">
                Amazon is often cited as a field state success story. GPI around 3.2: fast decisions, distributed knowledge, continuous error correction. But this misses how they got there.
              </p>

              <p className="text-zinc-400 mb-6">
                <span className="text-white font-bold">Amazon didn't start in field state. They spiraled to it.</span>
              </p>

              <div className="bg-black border border-zinc-800 p-8 my-12">
                <h3 className="text-xl font-black mb-6">THE AMAZON SPIRAL PHASES</h3>

                <div className="space-y-8">
                  <div className="border-l-4 border-red-600 pl-6">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-red-600 font-mono">PHASE 1</span>
                      <span className="text-zinc-500">|</span>
                      <span className="text-zinc-400">Retail (Particle - GPI ~7)</span>
                    </div>
                    <p className="text-zinc-400 text-sm">Started with books. Standardized product, predictable demand. Built warehouses, logistics, process optimization. <span className="text-white">Mastered particle operations before attempting field.</span></p>
                  </div>

                  <div className="border-l-4 border-yellow-500 pl-6">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-yellow-500 font-mono">PHASE 2</span>
                      <span className="text-zinc-500">|</span>
                      <span className="text-zinc-400">Marketplace (Field - GPI ~4)</span>
                    </div>
                    <p className="text-zinc-400 text-sm">Opened platform to third-party sellers. Distributed inventory, distributed fulfillment. <span className="text-white">Used Phase 1 infrastructure to enable Phase 2 coordination.</span></p>
                  </div>

                  <div className="border-l-4 border-green-500 pl-6">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-green-500 font-mono">PHASE 3</span>
                      <span className="text-zinc-500">|</span>
                      <span className="text-zinc-400">AWS (Field - GPI ~2)</span>
                    </div>
                    <p className="text-zinc-400 text-sm">Infrastructure-as-service at extreme scale. Distributed computing, distributed storage. <span className="text-white">Used Phase 2 coordination capability to enable Phase 3 platform.</span></p>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-6">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-blue-500 font-mono">PHASE 4</span>
                      <span className="text-zinc-500">|</span>
                      <span className="text-zinc-400">Logistics Network (Particle - GPI ~5)</span>
                    </div>
                    <p className="text-zinc-400 text-sm">Building own delivery infrastructure. But different from Phase 1: modular, flexible, technology-enabled. <span className="text-white">Revisiting particle with field capabilities.</span></p>
                  </div>
                </div>
              </div>

              <p className="text-zinc-400 mb-6">
                The key insight: <span className="text-white font-bold">each phase builds capability for the next phase</span>. You can't skip steps. You can't jump from Phase 1 to Phase 3. Each spiral builds on what came before.
              </p>

              <h2 className="text-2xl font-black mt-12 mb-6">METABOLIC COMPATIBILITY</h2>

              <p className="text-zinc-400 mb-6">
                The spiral model explains why some acquisitions work and others don't.
              </p>

              <div className="grid md:grid-cols-2 gap-8 my-12">
                <div className="border border-green-500/30 p-6 bg-green-500/5">
                  <h3 className="text-xl font-black text-green-500 mb-4">AMAZON + WHOLE FOODS</h3>
                  <p className="text-zinc-400 text-sm mb-4">
                    Amazon (GPI 3.2) acquired Whole Foods (GPI 6.1). Gap: 2.9 points. Within integrable range.
                  </p>
                  <p className="text-zinc-400 text-sm mb-4">
                    Both had spiral capability. Both had evolved through phases. Metabolic compatibility allowed integration.
                  </p>
                  <p className="text-zinc-500 text-sm">
                    <span className="text-green-400">Result:</span> Successful integration. Whole Foods GPI dropped to ~5.3.
                  </p>
                </div>

                <div className="border border-red-600/30 p-6 bg-red-600/5">
                  <h3 className="text-xl font-black text-red-600 mb-4">HP + AUTONOMY</h3>
                  <p className="text-zinc-400 text-sm mb-4">
                    HP (GPI 7.8) acquired Autonomy (GPI 3.1). Gap: 4.7 points. Beyond integrable range.
                  </p>
                  <p className="text-zinc-400 text-sm mb-4">
                    HP was deep particle. Autonomy was fast field. No spiral preparation. Automatic rejection.
                  </p>
                  <p className="text-zinc-500 text-sm">
                    <span className="text-red-400">Result:</span> $8.8 billion writedown. Complete failure.
                  </p>
                </div>
              </div>

              <p className="text-zinc-400 mb-6">
                The difference wasn't strategic logic. Both acquisitions made sense on paper. The difference was <span className="text-white font-bold">metabolic gap</span>. 3 points can be bridged. 5 points triggers antibody rejection.
              </p>

              <h2 className="text-2xl font-black mt-12 mb-6">THE 2-POINT RULE</h2>

              <p className="text-zinc-400 mb-6">
                Based on GPI analysis across hundreds of organizations, a pattern emerges:
              </p>

              <div className="bg-zinc-950 border border-zinc-800 p-8 my-12">
                <h3 className="text-xl font-black mb-6">METABOLIC SHIFT CAPACITY</h3>
                <div className="space-y-4 font-mono text-sm">
                  <div className="flex justify-between items-center border-b border-zinc-800 pb-2">
                    <span>1-2 point GPI shift</span>
                    <span className="text-green-400">Achievable in 1-2 years</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-zinc-800 pb-2">
                    <span>2-3 point GPI shift</span>
                    <span className="text-yellow-400">Achievable in 3-5 years</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-zinc-800 pb-2">
                    <span>4+ point GPI shift</span>
                    <span className="text-red-400">Requires multiple spiral phases</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>5+ point acquisition gap</span>
                    <span className="text-red-600">High failure probability</span>
                  </div>
                </div>
              </div>

              <p className="text-zinc-400 mb-6">
                This is why "transformation" timelines are usually fantasy. A GPI 8 organization claiming they'll be GPI 3 in 18 months isn't ambitious. They're delusional. The spiral takes time. Each phase must be mastered before the next.
              </p>

              <h2 className="text-2xl font-black mt-12 mb-6">PARTICLE ISN'T BAD</h2>

              <p className="text-zinc-400 mb-6">
                A common misreading of the GPI framework: particle state is bad, field state is good. This is wrong.
              </p>

              <p className="text-zinc-400 mb-6">
                <span className="text-white font-bold">Particle state at the wrong time is bad. Field state at the wrong time is equally bad.</span>
              </p>

              <p className="text-zinc-400 mb-6">
                Nuclear power plants should be particle state. Consistent, controlled, predictable. Startups should be field state. Adaptive, experimental, fast. The problem isn't the state. It's the mismatch between state and context.
              </p>

              <p className="text-zinc-400 mb-6">
                The spiral model shows that organizations need both. Amazon runs particle operations in fulfillment centers and field operations in AWS. Different metabolisms for different functions. The capability isn't being permanently field or permanently particle. It's being able to spiral between them as needed.
              </p>

              <div className="border-l-4 border-yellow-500 pl-6 my-12">
                <p className="text-xl text-zinc-300 italic mb-0">
                  "Transformation isn't choosing particle or field. It's building the capability to spiral between them."
                </p>
              </div>

              <h2 className="text-2xl font-black mt-12 mb-6">THE MEASURABLE DIMENSIONS</h2>

              <p className="text-zinc-400 mb-8">
                What the Spiral Model tracks that static metrics miss:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-12 not-prose">
                <div className="border border-zinc-800 p-6">
                  <Activity className="w-6 h-6 text-blue-500 mb-3" />
                  <h4 className="font-bold mb-2">SPIRAL VELOCITY</h4>
                  <p className="text-zinc-500 text-sm mb-4">How long for one full revolution?</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Startups</span>
                      <span className="font-mono">3-6 months</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Growth stage</span>
                      <span className="font-mono">12-18 months</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Enterprise</span>
                      <span className="font-mono">3-5 years</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-400">Dying</span>
                      <span className="font-mono text-red-500">∞ (stuck)</span>
                    </div>
                  </div>
                </div>

                <div className="border border-zinc-800 p-6">
                  <TrendingUp className="w-6 h-6 text-green-500 mb-3" />
                  <h4 className="font-bold mb-2">SPIRAL DIRECTION</h4>
                  <p className="text-zinc-500 text-sm mb-4">Net altitude change per cycle?</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-green-400">+1</span>
                      <span>Ascending (each cycle ends higher)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-400">0</span>
                      <span>Treading water</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-red-400">-1</span>
                      <span>Descending (each cycle ends lower)</span>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-black mt-12 mb-6">THE PATHOLOGIES</h2>

              <p className="text-zinc-400 mb-8">
                When the spiral breaks:
              </p>

              <div className="space-y-6 mb-12 not-prose">
                <div className="border-l-4 border-amber-600 pl-6 py-2">
                  <h4 className="font-bold text-amber-400 mb-2">CRYSTALLIZATION ADDICTION</h4>
                  <p className="text-zinc-400 mb-2">
                    "We need more process." Keeps adding structure. Terrified of dissolution.
                    Eventually so rigid the spiral stops entirely.
                  </p>
                  <p className="text-sm text-zinc-600">
                    GPI signal: Decision Latency keeps climbing
                  </p>
                </div>

                <div className="border-l-4 border-purple-600 pl-6 py-2">
                  <h4 className="font-bold text-purple-400 mb-2">DISSOLUTION PARALYSIS</h4>
                  <p className="text-zinc-400 mb-2">
                    "We're still restructuring." Perpetual crisis mode. Can't let patterns form.
                    Burns out the organization.
                  </p>
                  <p className="text-sm text-zinc-600">
                    GPI signal: Error Correction in constant alarm
                  </p>
                </div>

                <div className="border-l-4 border-green-600 pl-6 py-2">
                  <h4 className="font-bold text-green-400 mb-2">FIELD ROMANTICISM</h4>
                  <p className="text-zinc-400 mb-2">
                    "We're agile." Mistakes chaos for adaptability. Resists all structure.
                    Nothing compounds.
                  </p>
                  <p className="text-sm text-zinc-600">
                    GPI signal: Knowledge Velocity high, but no Structural Lock-in ever
                  </p>
                </div>

                <div className="border-l-4 border-red-600 pl-6 py-2">
                  <h4 className="font-bold text-red-400 mb-2">PARTICLE NOSTALGIA</h4>
                  <p className="text-zinc-400 mb-2">
                    "Back to basics." Every crisis met by restoring the previous particle state.
                    Fighting the last war.
                  </p>
                  <p className="text-sm text-zinc-600">
                    GPI signal: Negative Talent Flow as new people rejected
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-black mt-12 mb-6">YOUR SPIRAL POSITION</h2>

              <p className="text-zinc-400 mb-6">
                Where are you in the spiral? The diagnostic questions:
              </p>

              <div className="bg-black border border-zinc-800 p-8 my-12">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-black text-red-600 mb-2">PHASE IDENTIFICATION</h4>
                    <ul className="space-y-2 text-zinc-400 text-sm">
                      <li>• Are you building particle excellence? (Optimizing, standardizing, controlling)</li>
                      <li>• Are you expanding to field? (Distributing, coordinating, enabling)</li>
                      <li>• Are you returning to particle at higher level? (Re-stabilizing with new capabilities)</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-black text-red-600 mb-2">CAPABILITY ASSESSMENT</h4>
                    <ul className="space-y-2 text-zinc-400 text-sm">
                      <li>• Did you master the previous phase before moving on?</li>
                      <li>• Are you building capability or just changing labels?</li>
                      <li>• Is your current GPI appropriate for your current phase?</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-black text-red-600 mb-2">TRANSITION READINESS</h4>
                    <ul className="space-y-2 text-zinc-400 text-sm">
                      <li>• What infrastructure needs to exist for the next phase?</li>
                      <li>• What antibodies will activate when you try to transition?</li>
                      <li>• What's a realistic timeline based on the 2-point rule?</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-black mt-12 mb-6">BUILDING SPIRAL CAPABILITY</h2>

              <p className="text-zinc-400 mb-6">
                The organizations that navigate the spiral successfully share common patterns:
              </p>

              <div className="bg-zinc-950 border border-zinc-800 p-8 my-12">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-black text-green-400 mb-2">METABOLIC FLEXIBILITY</h4>
                    <p className="text-zinc-400">Different parts of the organization operate at different speeds. AWS teams move faster than retail teams. The platform absorbs metabolic differences rather than forcing uniformity.</p>
                  </div>
                  <div>
                    <h4 className="font-black text-green-400 mb-2">INFRASTRUCTURE INVESTMENT</h4>
                    <p className="text-zinc-400">They spend heavily on coordination capability: not just technology, but organizational structure, culture, and metrics. The investment timeline is years, not quarters.</p>
                  </div>
                  <div>
                    <h4 className="font-black text-green-400 mb-2">CAPABILITY CASCADE</h4>
                    <p className="text-zinc-400">Each phase builds capability for the next. They don't try to skip steps. They don't try to jump back. They spiral methodically.</p>
                  </div>
                  <div>
                    <h4 className="font-black text-green-400 mb-2">LONG-TERM VIEW</h4>
                    <p className="text-zinc-400">They plan in decades, not quarters. They resist pressure to short-circuit the spiral for short-term gains. They accept that real transformation takes real time.</p>
                  </div>
                </div>
              </div>

              <div className="bg-red-600/10 border border-red-600/30 p-8 my-12">
                <h3 className="text-xl font-black text-red-600 mb-4">KEY INSIGHT</h3>
                <p className="text-lg text-zinc-300">
                  The spiral isn't a limitation. It's how transformation actually works. Organizations that try to skip phases trigger antibody rejection. Organizations that try to jump too many GPI points at once fail. The path forward isn't faster movement. It's smarter spiraling. Build capability. Master phases. Accept the timeline. You can't skip the spiral. You can only spiral better.
                </p>
              </div>

            </article>

            {/* Book Teaser */}
            <div className="border border-zinc-800 p-8 mt-16 flex items-center gap-6">
              <BookOpen size={48} className="text-zinc-600 flex-shrink-0" />
              <div>
                <p className="text-zinc-500 text-sm uppercase mb-1">From the upcoming book</p>
                <p className="text-xl font-black">The Growing Pains Index</p>
                <p className="text-zinc-400">Chapter 4: The Spiral</p>
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
