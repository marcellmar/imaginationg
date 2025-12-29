import React from 'react';
import Link from 'next/link';
import { ArrowRight, RotateCcw, TrendingUp, TrendingDown, Activity, AlertCircle } from 'lucide-react';
import Navigation from '../../components/Navigation';
import SEOHead from '../../components/SEOHead';

export default function SpiralModelPage() {
  return (
    <>
      <SEOHead
        title="The Spiral Model - GPI Framework | IMAGINATION G"
        description="Organizations don't achieve states—they cycle through them. The Spiral Model reveals the metabolic rhythm that spreadsheets can't capture."
      />

      <div className="min-h-screen bg-black text-white">
        <Navigation />

        {/* Hero */}
        <section className="pt-24 pb-16 px-6">
          <div className="max-w-4xl mx-auto">
            <Link href="/gpi-framework" className="inline-flex items-center text-zinc-500 hover:text-white mb-8 transition-colors">
              <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
              Back to Framework
            </Link>

            <div className="inline-block mb-6 text-red-500 text-xs font-mono bg-red-950/30 border border-red-900 px-4 py-2 rounded-full">
              <RotateCcw className="w-3 h-3 inline mr-2" />
              ORGANIZATIONAL DYNAMICS
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              THE SPIRAL MODEL<span className="text-red-600">.</span>
            </h1>

            <p className="text-xl text-zinc-400 mb-8 max-w-2xl">
              Your body doesn't "achieve" a state. It cycles. Breathe in, breathe out.
              Build tissue, break tissue. Companies are the same.
              <span className="text-white font-bold"> The health isn't in any single state—it's in the rhythm.</span>
            </p>
          </div>
        </section>

        {/* The Problem with Static Measurement */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-black mb-8">WHY SPREADSHEETS MISS IT</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="border border-zinc-800 p-6">
                <h3 className="font-bold text-red-500 mb-3">SNAPSHOT THINKING</h3>
                <p className="text-zinc-400 text-sm">
                  "We measured engagement at 72%." Static. Frozen.
                  No indication of direction, velocity, or phase.
                </p>
              </div>
              <div className="border border-green-900 p-6">
                <h3 className="font-bold text-green-500 mb-3">TRAJECTORY THINKING</h3>
                <p className="text-zinc-400 text-sm">
                  "We're in dissolution phase, velocity is healthy, and we're ascending."
                  Dynamic. Contextual. Actionable.
                </p>
              </div>
            </div>

            <p className="text-lg text-zinc-300">
              A company with GPI 7 (particle state) isn't necessarily sick. They might be
              at peak crystallization, about to dissolve productively. Or frozen solid,
              unable to change. <span className="text-white font-bold">You can't tell from a single measurement.</span>
            </p>
          </div>
        </section>

        {/* The Four Phases */}
        <section className="py-16 px-6 bg-zinc-950 border-t border-zinc-900">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-black mb-4">THE FOUR PHASES</h2>
            <p className="text-zinc-500 mb-12">Every organization cycles through these. The question is how well.</p>

            {/* Visual Cycle */}
            <div className="relative mb-16">
              <div className="grid grid-cols-2 gap-4 md:gap-8">
                {/* Crystallization - Top */}
                <div className="col-span-2 flex justify-center mb-4">
                  <div className="border-2 border-amber-600 p-6 max-w-md text-center">
                    <div className="text-amber-500 font-mono text-xs mb-2">PHASE 1</div>
                    <h3 className="text-xl font-black text-amber-400 mb-2">CRYSTALLIZATION</h3>
                    <p className="text-zinc-400 text-sm">
                      What works gets repeated. Patterns emerge. Success becomes process.
                      "Let's do that again."
                    </p>
                  </div>
                </div>

                {/* Field - Left */}
                <div className="flex justify-end">
                  <div className="border-2 border-green-600 p-6 max-w-xs">
                    <div className="text-green-500 font-mono text-xs mb-2">PHASE 4</div>
                    <h3 className="text-xl font-black text-green-400 mb-2">FIELD</h3>
                    <p className="text-zinc-400 text-sm">
                      Fluid. Experimental. New patterns emerge from chaos.
                      "What if we tried..."
                    </p>
                  </div>
                </div>

                {/* Particle - Right */}
                <div className="flex justify-start">
                  <div className="border-2 border-red-600 p-6 max-w-xs">
                    <div className="text-red-500 font-mono text-xs mb-2">PHASE 2</div>
                    <h3 className="text-xl font-black text-red-400 mb-2">PARTICLE</h3>
                    <p className="text-zinc-400 text-sm">
                      Process becomes policy becomes culture. Maximum structure.
                      "This is how we do things."
                    </p>
                  </div>
                </div>

                {/* Dissolution - Bottom */}
                <div className="col-span-2 flex justify-center mt-4">
                  <div className="border-2 border-purple-600 p-6 max-w-md text-center">
                    <div className="text-purple-500 font-mono text-xs mb-2">PHASE 3</div>
                    <h3 className="text-xl font-black text-purple-400 mb-2">DISSOLUTION</h3>
                    <p className="text-zinc-400 text-sm">
                      Reality stops matching structure. Cracks appear. The old way stops working.
                      Structure breaks—voluntarily or violently.
                    </p>
                  </div>
                </div>
              </div>

              {/* Arrows */}
              <div className="absolute inset-0 pointer-events-none hidden md:block">
                <svg className="w-full h-full" viewBox="0 0 400 300">
                  <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill="#666" />
                    </marker>
                  </defs>
                  {/* Crystallization to Particle */}
                  <path d="M 250 60 Q 300 100 280 140" stroke="#666" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
                  {/* Particle to Dissolution */}
                  <path d="M 280 180 Q 300 220 250 250" stroke="#666" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
                  {/* Dissolution to Field */}
                  <path d="M 150 250 Q 100 220 120 180" stroke="#666" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
                  {/* Field to Crystallization */}
                  <path d="M 120 140 Q 100 100 150 60" stroke="#666" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
                </svg>
              </div>
            </div>

            <div className="border-l-4 border-zinc-700 pl-6">
              <p className="text-lg text-zinc-300">
                The key insight: <span className="text-white font-bold">you don't return to the same place.</span>
                Each revolution happens at different altitude and stakes. The startup's particle state
                is "we don't know what we're doing." The enterprise's particle state is
                "we forgot what we're doing."
              </p>
            </div>
          </div>
        </section>

        {/* The Spiral Altitudes */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-black mb-8">SPIRAL ALTITUDES</h2>
            <p className="text-zinc-500 mb-8">Each revolution solves different problems at different scales.</p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 border border-zinc-800">
                <div className="text-zinc-600 font-mono text-sm w-24">SPIRAL 1</div>
                <div className="flex-1">
                  <span className="font-bold">Product-Market Fit</span>
                  <span className="text-zinc-500 ml-2">"Does anyone want this?"</span>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 border border-zinc-800">
                <div className="text-zinc-600 font-mono text-sm w-24">SPIRAL 2</div>
                <div className="flex-1">
                  <span className="font-bold">Team-Market Fit</span>
                  <span className="text-zinc-500 ml-2">"Can we scale the people?"</span>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 border border-zinc-800">
                <div className="text-zinc-600 font-mono text-sm w-24">SPIRAL 3</div>
                <div className="flex-1">
                  <span className="font-bold">Capital-Market Fit</span>
                  <span className="text-zinc-500 ml-2">"Can we scale the money?"</span>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 border border-zinc-800">
                <div className="text-zinc-600 font-mono text-sm w-24">SPIRAL 4</div>
                <div className="flex-1">
                  <span className="font-bold">Culture-Market Fit</span>
                  <span className="text-zinc-500 ml-2">"Can we scale the identity?"</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ascending vs Descending */}
        <section className="py-16 px-6 bg-zinc-950 border-t border-zinc-900">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-black mb-8">DIRECTION MATTERS</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="border border-green-900 p-8">
                <TrendingUp className="w-8 h-8 text-green-500 mb-4" />
                <h3 className="text-xl font-black text-green-400 mb-4">ASCENDING SPIRAL</h3>
                <ul className="space-y-3 text-zinc-400">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">+</span>
                    Each field state discovers something <span className="text-white">new</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">+</span>
                    Each particle state is more <span className="text-white">sophisticated</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">+</span>
                    Capability <span className="text-white">compounds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">+</span>
                    Like muscle: stress → recovery → <span className="text-white">stronger</span>
                  </li>
                </ul>
              </div>

              <div className="border border-red-900 p-8">
                <TrendingDown className="w-8 h-8 text-red-500 mb-4" />
                <h3 className="text-xl font-black text-red-400 mb-4">DESCENDING SPIRAL</h3>
                <ul className="space-y-3 text-zinc-400">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">−</span>
                    Each field state is more <span className="text-white">desperate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">−</span>
                    Each particle state is more <span className="text-white">defensive</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">−</span>
                    Capability <span className="text-white">erodes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">−</span>
                    Like disease: stress → damage → <span className="text-white">weaker</span>
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-center text-zinc-500 mt-8">
              The same company can switch directions. Most don't notice until it's too late.
            </p>
          </div>
        </section>

        {/* Measurable Dimensions */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-black mb-4">THE MEASURABLE DIMENSIONS</h2>
            <p className="text-zinc-500 mb-8">What the Spiral Model tracks that static metrics miss.</p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-zinc-800 p-6">
                <Activity className="w-6 h-6 text-blue-500 mb-3" />
                <h3 className="font-bold mb-2">SPIRAL VELOCITY</h3>
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
                <div className="w-6 h-6 text-purple-500 mb-3 font-bold text-lg">~</div>
                <h3 className="font-bold mb-2">SPIRAL AMPLITUDE</h3>
                <p className="text-zinc-500 text-sm mb-4">How extreme are the swings?</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Healthy</span>
                    <span>Controlled oscillation</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Sick</span>
                    <span>Wild swings</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Dead</span>
                    <span className="text-red-500">Flatline</span>
                  </div>
                </div>
              </div>

              <div className="border border-zinc-800 p-6">
                <TrendingUp className="w-6 h-6 text-green-500 mb-3" />
                <h3 className="font-bold mb-2">SPIRAL DIRECTION</h3>
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

              <div className="border border-zinc-800 p-6">
                <div className="w-6 h-6 text-amber-500 mb-3 font-bold text-lg">◐</div>
                <h3 className="font-bold mb-2">PHASE BALANCE</h3>
                <p className="text-zinc-500 text-sm mb-4">Time spent in each phase?</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Healthy</span>
                    <span>Proportional to need</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Stuck in particle</span>
                    <span>Can't dissolve</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Stuck in field</span>
                    <span>Can't commit</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Pathologies */}
        <section className="py-16 px-6 bg-zinc-950 border-t border-zinc-900">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-black mb-8">THE PATHOLOGIES</h2>
            <p className="text-zinc-500 mb-8">When the spiral breaks.</p>

            <div className="space-y-6">
              <div className="border-l-4 border-amber-600 pl-6 py-2">
                <h3 className="font-bold text-amber-400 mb-2">CRYSTALLIZATION ADDICTION</h3>
                <p className="text-zinc-400 mb-2">
                  "We need more process." Keeps adding structure. Terrified of dissolution.
                  Eventually so rigid the spiral stops entirely.
                </p>
                <p className="text-sm text-zinc-600">
                  GPI signal: Decision Latency keeps climbing
                </p>
              </div>

              <div className="border-l-4 border-purple-600 pl-6 py-2">
                <h3 className="font-bold text-purple-400 mb-2">DISSOLUTION PARALYSIS</h3>
                <p className="text-zinc-400 mb-2">
                  "We're still restructuring." Perpetual crisis mode. Can't let patterns form.
                  Burns out the organization.
                </p>
                <p className="text-sm text-zinc-600">
                  GPI signal: Error Correction in constant alarm
                </p>
              </div>

              <div className="border-l-4 border-green-600 pl-6 py-2">
                <h3 className="font-bold text-green-400 mb-2">FIELD ROMANTICISM</h3>
                <p className="text-zinc-400 mb-2">
                  "We're agile." Mistakes chaos for adaptability. Resists all structure.
                  Nothing compounds.
                </p>
                <p className="text-sm text-zinc-600">
                  GPI signal: Knowledge Velocity high, but no Structural Lock-in ever
                </p>
              </div>

              <div className="border-l-4 border-red-600 pl-6 py-2">
                <h3 className="font-bold text-red-400 mb-2">PARTICLE NOSTALGIA</h3>
                <p className="text-zinc-400 mb-2">
                  "Back to basics." Every crisis met by restoring the previous particle state.
                  Fighting the last war.
                </p>
                <p className="text-sm text-zinc-600">
                  GPI signal: Negative Talent Flow as new people rejected
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Reframe */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-black mb-8">THE REFRAME</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="border border-zinc-800 p-8">
                <h3 className="font-bold text-zinc-500 mb-4">STATIC GPI ASKS:</h3>
                <p className="text-xl">"What state are you in?"</p>
              </div>

              <div className="border border-red-900 p-8">
                <h3 className="font-bold text-red-500 mb-4">SPIRAL GPI ASKS:</h3>
                <ul className="space-y-2 text-lg">
                  <li>"Where are you in your current cycle?"</li>
                  <li>"How fast are you cycling?"</li>
                  <li>"Are you ascending or descending?"</li>
                  <li>"What phase are you stuck in?"</li>
                </ul>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 p-8 text-center">
              <p className="text-2xl font-black mb-4">
                This is the difference between a thermometer and an EKG.
              </p>
              <p className="text-zinc-400">
                One tells you temperature. The other tells you if you're alive.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 bg-zinc-950 border-t border-zinc-900">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-black mb-4">MEASURE YOUR SPIRAL</h3>
            <p className="text-zinc-400 mb-8">
              The diagnostic captures where you are. Your history reveals where you're heading.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/diagnostic"
                className="bg-red-600 px-8 py-4 font-bold hover:bg-red-700 transition-colors"
              >
                TAKE THE GPI DIAGNOSTIC
              </Link>
              <Link
                href="/gpi-framework"
                className="border border-zinc-700 px-8 py-4 font-bold hover:border-zinc-500 transition-colors"
              >
                BACK TO FRAMEWORK
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
