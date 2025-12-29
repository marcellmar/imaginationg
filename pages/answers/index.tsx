import type { NextPage } from 'next';
import Link from 'next/link';
import { useState } from 'react';
import SEOHead from '../../components/SEOHead';
import Navigation from '../../components/Navigation';
import RelatedContent from '../../components/RelatedContent';
import { ArrowRight, Search, Filter } from 'lucide-react';

const AnswersHub: NextPage = () => {
  const [activeTab, setActiveTab] = useState('lexicon');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
      <SEOHead
        title="GPI Friction Patterns & Dimension Knowledge | IMAGINATION G"
        description="Understand why organizations get stuck in particle state. Learn the patterns that create friction across GPI dimensions. Map symptoms to root causes."
        ogImage="/images/og-answers.svg"
      />

      <div className="min-h-screen bg-black text-white">
        <Navigation currentPage="answers" />

        {/* Hero Section */}
        <section className="pt-24 pb-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-6xl">
              {/* System Status Badge */}
              <div className="inline-block mb-8 text-green-400 text-xs font-mono bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-full">
                <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                GPI KNOWLEDGE BASE: ACTIVE
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1]">
                FRICTION<br />PATTERNS<span className="text-red-600">.</span>
              </h1>

              <p className="text-xl text-zinc-400 mb-8 max-w-2xl">
                Why organizations calcify into particle state. How friction patterns form across dimensions.
                Which interventions move you toward field state.
              </p>

              {/* GPI Scale Reference */}
              <div className="inline-flex items-center gap-4 text-sm mb-8">
                <span className="text-zinc-500">GPI Scale:</span>
                <span className="text-green-500">1-3 Field</span>
                <span className="text-zinc-700">|</span>
                <span className="text-yellow-500">4-6 Transition</span>
                <span className="text-zinc-700">|</span>
                <span className="text-red-500">7-10 Particle</span>
              </div>

              {/* Portal Navigation */}
              <div className="border border-zinc-800 bg-zinc-950">
                <div className="flex border-b border-zinc-800 overflow-x-auto">
                  <button
                    onClick={() => setActiveTab('lexicon')}
                    className={`px-6 py-4 font-bold transition-colors whitespace-nowrap ${
                      activeTab === 'lexicon'
                        ? 'bg-red-600 text-white'
                        : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
                    }`}
                  >
                    FRICTION LEXICON
                  </button>
                  <button
                    onClick={() => setActiveTab('concepts')}
                    className={`px-6 py-4 font-bold transition-colors whitespace-nowrap ${
                      activeTab === 'concepts'
                        ? 'bg-red-600 text-white'
                        : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
                    }`}
                  >
                    DIMENSION CONCEPTS
                  </button>
                  <button
                    onClick={() => setActiveTab('patterns')}
                    className={`px-6 py-4 font-bold transition-colors whitespace-nowrap ${
                      activeTab === 'patterns'
                        ? 'bg-red-600 text-white'
                        : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
                    }`}
                  >
                    PARTICLE PATTERNS
                  </button>
                  <button
                    onClick={() => setActiveTab('solutions')}
                    className={`px-6 py-4 font-bold transition-colors whitespace-nowrap ${
                      activeTab === 'solutions'
                        ? 'bg-red-600 text-white'
                        : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
                    }`}
                  >
                    GPI INTERVENTIONS
                  </button>
                </div>

                {/* Search Bar */}
                <div className="p-6 border-b border-zinc-800">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-500" size={20} />
                    <input
                      type="text"
                      placeholder="Search friction patterns, dimensions, or interventions..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-black border border-zinc-700 text-white placeholder-zinc-500 focus:border-red-600 focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portal Content Sections */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-6xl">

              {/* FRICTION LEXICON TAB */}
              {activeTab === 'lexicon' && (
                <div className="space-y-8">
                  <div className="bg-black border-2 border-red-600 p-8">
                    <h2 className="text-2xl font-black mb-4 text-red-600">FRICTION LEXICON: DIMENSION PHYSICS</h2>
                    <p className="text-lg mb-6">
                      Traditional business language describes symptoms. Our lexicon names the friction patterns that drive GPI scores higher.
                      These terms decode what creates particle state.
                    </p>
                  </div>

                  {/* Friction Patterns Grid */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <Link href="/answers/glossary/the-constraint-response" className="border border-zinc-800 p-6 hover:border-red-600 transition-all group bg-zinc-950">
                      <h3 className="font-black text-xl text-red-600 mb-2 group-hover:text-white transition-colors">
                        The Constraint Response <ArrowRight className="inline ml-2" size={16} />
                      </h3>
                      <p className="text-zinc-400">How you break through Structural Lock-In. Your pattern for navigating blocks.</p>
                      <p className="text-xs text-zinc-600 mt-2 font-mono">STRUCTURAL LOCK-IN • DECISION LATENCY</p>
                    </Link>

                    <Link href="/answers/glossary/the-friction-loop" className="border border-zinc-800 p-6 hover:border-red-600 transition-all group bg-zinc-950">
                      <h3 className="font-black text-xl text-red-600 mb-2 group-hover:text-white transition-colors">
                        The Friction Loop <ArrowRight className="inline ml-2" size={16} />
                      </h3>
                      <p className="text-zinc-400">When systems optimize for dysfunction. Recursive patterns that accelerate particle state.</p>
                      <p className="text-xs text-zinc-600 mt-2 font-mono">ERROR CORRECTION • STRUCTURAL LOCK-IN</p>
                    </Link>

                    <Link href="/answers/glossary/the-hidden-drain" className="border border-zinc-800 p-6 hover:border-red-600 transition-all group bg-zinc-950">
                      <h3 className="font-black text-xl text-red-600 mb-2 group-hover:text-white transition-colors">
                        The Hidden Drain <ArrowRight className="inline ml-2" size={16} />
                      </h3>
                      <p className="text-zinc-400">Invisible energy losses. The silent tax that compounds particle state.</p>
                      <p className="text-xs text-zinc-600 mt-2 font-mono">KNOWLEDGE VELOCITY • DECISION LATENCY</p>
                    </Link>

                    <Link href="/answers/glossary/the-false-harmony" className="border border-zinc-800 p-6 hover:border-red-600 transition-all group bg-zinc-950">
                      <h3 className="font-black text-xl text-red-600 mb-2 group-hover:text-white transition-colors">
                        The False Harmony <ArrowRight className="inline ml-2" size={16} />
                      </h3>
                      <p className="text-zinc-400">Surface agreement that prevents truth. The comfort that kills Error Correction.</p>
                      <p className="text-xs text-zinc-600 mt-2 font-mono">ERROR CORRECTION • KNOWLEDGE LOCATION</p>
                    </Link>

                    <Link href="/answers/glossary/the-slow-calcification" className="border border-zinc-800 p-6 hover:border-red-600 transition-all group bg-zinc-950">
                      <h3 className="font-black text-xl text-red-600 mb-2 group-hover:text-white transition-colors">
                        The Slow Calcification <ArrowRight className="inline ml-2" size={16} />
                      </h3>
                      <p className="text-zinc-400">Gradual hardening from field to particle state. How flexibility dies.</p>
                      <p className="text-xs text-zinc-600 mt-2 font-mono">STRUCTURAL LOCK-IN • ALL DIMENSIONS</p>
                    </Link>

                    <Link href="/answers/glossary/the-decision-stall" className="border border-zinc-800 p-6 hover:border-red-600 transition-all group bg-zinc-950">
                      <h3 className="font-black text-xl text-red-600 mb-2 group-hover:text-white transition-colors">
                        The Decision Stall <ArrowRight className="inline ml-2" size={16} />
                      </h3>
                      <p className="text-zinc-400">When consensus-seeking prevents decisions. Particle state through paralysis.</p>
                      <p className="text-xs text-zinc-600 mt-2 font-mono">DECISION LATENCY • ERROR CORRECTION</p>
                    </Link>

                    <Link href="/answers/glossary/the-meeting-loop" className="border border-zinc-800 p-6 hover:border-red-600 transition-all group bg-zinc-950">
                      <h3 className="font-black text-xl text-red-600 mb-2 group-hover:text-white transition-colors">
                        The Meeting Loop <ArrowRight className="inline ml-2" size={16} />
                      </h3>
                      <p className="text-zinc-400">How meetings multiply to avoid work. Calendar warfare that accelerates GPI.</p>
                      <p className="text-xs text-zinc-600 mt-2 font-mono">DECISION LATENCY • KNOWLEDGE VELOCITY</p>
                    </Link>

                    <Link href="/answers/glossary/the-first-signal" className="border border-zinc-800 p-6 hover:border-red-600 transition-all group bg-zinc-950">
                      <h3 className="font-black text-xl text-red-600 mb-2 group-hover:text-white transition-colors">
                        The First Signal <ArrowRight className="inline ml-2" size={16} />
                      </h3>
                      <p className="text-zinc-400">Initial market contact. The moment that enables Error Correction.</p>
                      <p className="text-xs text-zinc-600 mt-2 font-mono">ERROR CORRECTION • KNOWLEDGE VELOCITY</p>
                    </Link>

                    <Link href="/answers/glossary/the-momentum-effect" className="border border-zinc-800 p-6 hover:border-red-600 transition-all group bg-zinc-950">
                      <h3 className="font-black text-xl text-red-600 mb-2 group-hover:text-white transition-colors">
                        The Momentum Effect <ArrowRight className="inline ml-2" size={16} />
                      </h3>
                      <p className="text-zinc-400">How velocity compounds in field state. Aligned systems multiply force.</p>
                      <p className="text-xs text-zinc-600 mt-2 font-mono">KNOWLEDGE VELOCITY • DECISION LATENCY</p>
                    </Link>

                    <Link href="/answers/glossary/the-breaking-point" className="border border-zinc-800 p-6 hover:border-red-600 transition-all group bg-zinc-950">
                      <h3 className="font-black text-xl text-red-600 mb-2 group-hover:text-white transition-colors">
                        The Breaking Point <ArrowRight className="inline ml-2" size={16} />
                      </h3>
                      <p className="text-zinc-400">Maximum pressure before transformation. Where particle state collapses or evolves.</p>
                      <p className="text-xs text-zinc-600 mt-2 font-mono">ALL DIMENSIONS • TRANSFORMATION</p>
                    </Link>
                  </div>
                </div>
              )}

              {/* DIMENSION CONCEPTS TAB */}
              {activeTab === 'concepts' && (
                <div className="space-y-8">
                  <div className="bg-black border-2 border-blue-500 p-8">
                    <h2 className="text-2xl font-black mb-4 text-blue-500">DIMENSION CONCEPTS: ORGANIZATIONAL PHYSICS</h2>
                    <p className="text-lg mb-6">
                      The patterns that govern how GPI dimensions interact. Why particle state calcifies.
                      How friction compounds across dimensions.
                    </p>
                  </div>

                  {/* Core Concepts Grid */}
                  <div className="space-y-6">
                    {/* Decision Latency Patterns */}
                    <div className="border border-zinc-800 p-8 bg-zinc-950">
                      <h3 className="text-xl font-black mb-4 text-blue-500">DECISION LATENCY PATTERNS</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <Link href="/answers/glossary/the-slow-calcification" className="border border-zinc-700 p-4 hover:border-blue-500 transition-colors">
                          <h4 className="font-bold text-blue-400 mb-2">The Slow Calcification</h4>
                          <p className="text-sm text-zinc-400">Why teams gradually lose focus and start optimizing around problems instead of solving them.</p>
                        </Link>

                        <Link href="/answers/glossary/the-meeting-loop" className="border border-zinc-700 p-4 hover:border-blue-500 transition-colors">
                          <h4 className="font-bold text-blue-400 mb-2">The Meeting Loop</h4>
                          <p className="text-sm text-zinc-400">When meetings multiply to avoid actual work. The more important it is, the more meetings get scheduled.</p>
                        </Link>

                        <Link href="/answers/glossary/the-decision-stall" className="border border-zinc-700 p-4 hover:border-blue-500 transition-colors">
                          <h4 className="font-bold text-blue-400 mb-2">The Decision Stall</h4>
                          <p className="text-sm text-zinc-400">When consensus-seeking becomes more important than deciding. Decision by committee kills velocity.</p>
                        </Link>

                        <Link href="/answers/glossary/the-hidden-drain" className="border border-zinc-700 p-4 hover:border-blue-500 transition-colors">
                          <h4 className="font-bold text-blue-400 mb-2">The Hidden Drain</h4>
                          <p className="text-sm text-zinc-400">Invisible energy losses that tax every action. The thousand micro-resistances that compound.</p>
                        </Link>
                      </div>
                    </div>

                    {/* Structural Lock-In Patterns */}
                    <div className="border border-zinc-800 p-8 bg-zinc-950">
                      <h3 className="text-xl font-black mb-4 text-green-500">STRUCTURAL LOCK-IN PATTERNS</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <Link href="/answers/glossary/the-constraint-response" className="border border-zinc-700 p-4 hover:border-green-500 transition-colors">
                          <h4 className="font-bold text-green-400 mb-2">The Constraint Response</h4>
                          <p className="text-sm text-zinc-400">How you break through Structural Lock-In. Your pattern for navigating blocks.</p>
                        </Link>

                        <Link href="/answers/glossary/the-friction-loop" className="border border-zinc-700 p-4 hover:border-green-500 transition-colors">
                          <h4 className="font-bold text-green-400 mb-2">The Friction Loop</h4>
                          <p className="text-sm text-zinc-400">Recursive failure loops. When systems optimize for dysfunction instead of output.</p>
                        </Link>

                        <Link href="/answers/glossary/the-false-harmony" className="border border-zinc-700 p-4 hover:border-green-500 transition-colors">
                          <h4 className="font-bold text-green-400 mb-2">The False Harmony</h4>
                          <p className="text-sm text-zinc-400">Surface agreement that prevents truth. The comfort that kills Error Correction.</p>
                        </Link>

                        <Link href="/answers/glossary/the-breaking-point" className="border border-zinc-700 p-4 hover:border-green-500 transition-colors">
                          <h4 className="font-bold text-green-400 mb-2">The Breaking Point</h4>
                          <p className="text-sm text-zinc-400">Maximum pressure before transformation. Where particle state collapses or evolves.</p>
                        </Link>
                      </div>
                    </div>

                    {/* Knowledge Velocity Patterns */}
                    <div className="border border-zinc-800 p-8 bg-zinc-950">
                      <h3 className="text-xl font-black mb-4 text-yellow-500">KNOWLEDGE VELOCITY PATTERNS</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <Link href="/answers/glossary/the-first-signal" className="border border-zinc-700 p-4 hover:border-yellow-500 transition-colors">
                          <h4 className="font-bold text-yellow-400 mb-2">The First Signal</h4>
                          <p className="text-sm text-zinc-400">Initial market contact. The moment that enables Error Correction and breaks theory mode.</p>
                        </Link>

                        <Link href="/answers/glossary/the-momentum-effect" className="border border-zinc-700 p-4 hover:border-yellow-500 transition-colors">
                          <h4 className="font-bold text-yellow-400 mb-2">The Momentum Effect</h4>
                          <p className="text-sm text-zinc-400">How velocity compounds in field state. Aligned systems multiply force exponentially.</p>
                        </Link>

                        <Link href="/answers/glossary/the-hidden-drain" className="border border-zinc-700 p-4 hover:border-yellow-500 transition-colors">
                          <h4 className="font-bold text-yellow-400 mb-2">The Hidden Drain</h4>
                          <p className="text-sm text-zinc-400">Invisible taxes on every action. How Knowledge Velocity gets silently destroyed.</p>
                        </Link>

                        <Link href="/answers/glossary/the-friction-loop" className="border border-zinc-700 p-4 hover:border-yellow-500 transition-colors">
                          <h4 className="font-bold text-yellow-400 mb-2">The Friction Loop</h4>
                          <p className="text-sm text-zinc-400">When moving fast prevents fixing things. The illusion of progress without improvement.</p>
                        </Link>
                      </div>
                    </div>

                    {/* Error Correction Failures */}
                    <div className="border border-zinc-800 p-8 bg-zinc-950">
                      <h3 className="text-xl font-black mb-4 text-red-500">ERROR CORRECTION FAILURES</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <Link href="/answers/glossary/the-false-harmony" className="border border-zinc-700 p-4 hover:border-red-500 transition-colors">
                          <h4 className="font-bold text-red-400 mb-2">The False Harmony</h4>
                          <p className="text-sm text-zinc-400">When surface agreement blocks truth signals. Comfort that prevents correction.</p>
                        </Link>

                        <Link href="/answers/glossary/the-decision-stall" className="border border-zinc-700 p-4 hover:border-red-500 transition-colors">
                          <h4 className="font-bold text-red-400 mb-2">The Decision Stall</h4>
                          <p className="text-sm text-zinc-400">Consensus paralysis. Getting agreement becomes more important than being right.</p>
                        </Link>

                        <Link href="/answers/glossary/the-friction-loop" className="border border-zinc-700 p-4 hover:border-red-500 transition-colors">
                          <h4 className="font-bold text-red-400 mb-2">The Friction Loop</h4>
                          <p className="text-sm text-zinc-400">Recursive patterns that block correction. Systems optimizing for consistent dysfunction.</p>
                        </Link>

                        <Link href="/answers/glossary/the-slow-calcification" className="border border-zinc-700 p-4 hover:border-red-500 transition-colors">
                          <h4 className="font-bold text-red-400 mb-2">The Slow Calcification</h4>
                          <p className="text-sm text-zinc-400">Gradual hardening that kills adaptability. When flexibility becomes brittleness.</p>
                        </Link>
                      </div>
                    </div>

                    {/* Move Toward Field State */}
                    <div className="bg-black border-2 border-red-600 p-8">
                      <h3 className="text-xl font-black mb-4 text-red-600">MOVE TOWARD FIELD STATE</h3>
                      <p className="text-lg mb-6">
                        Understanding friction patterns isn't enough. You need to measure your GPI and deploy targeted interventions.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="/diagnostic" className="bg-red-600 px-6 py-3 font-bold hover:bg-red-700 transition-colors text-center">
                          MEASURE YOUR GPI
                        </Link>
                        <Link href="/interventions" className="border-2 border-red-600 px-6 py-3 font-bold hover:bg-red-600 transition-colors text-center">
                          TARGET YOUR DIMENSIONS
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* PARTICLE PATTERNS TAB */}
              {activeTab === 'patterns' && (
                <div className="space-y-8">
                  <div className="bg-black border-2 border-yellow-500 p-8">
                    <h2 className="text-2xl font-black mb-4 text-yellow-500">PARTICLE STATE PATTERNS</h2>
                    <p className="text-lg">
                      How organizations calcify into high-friction states. Recognize these patterns—they compound GPI scores across dimensions.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="border-2 border-red-600 p-6 bg-zinc-950">
                      <div className="text-xs text-red-400 mb-2 font-mono">STRUCTURAL LOCK-IN • ERROR CORRECTION</div>
                      <h3 className="font-black text-red-600 mb-3">Meeting Loops</h3>
                      <p className="text-sm text-zinc-400 mb-4">
                        Teams optimize around problems instead of solving them. More meetings, better processes.
                        Friction compounds. GPI rises. Particle state calcifies.
                      </p>
                      <Link href="/interventions/the-override" className="text-red-600 text-sm font-bold hover:underline">
                        → THE OVERRIDE • -1.5 GPI
                      </Link>
                    </div>

                    <div className="border-2 border-yellow-500 p-6 bg-zinc-950">
                      <div className="text-xs text-yellow-400 mb-2 font-mono">KNOWLEDGE VELOCITY • ERROR CORRECTION</div>
                      <h3 className="font-black text-yellow-500 mb-3">Perfectionist Trap</h3>
                      <p className="text-sm text-zinc-400 mb-4">
                        Perfection disguises fear of feedback. Months perfecting features no one wants.
                        Knowledge Velocity frozen. Error signals blocked. Particle state hardens.
                      </p>
                      <Link href="/interventions/the-build" className="text-yellow-500 text-sm font-bold hover:underline">
                        → THE BUILD • -1.2 GPI
                      </Link>
                    </div>

                    <div className="border-2 border-green-500 p-6 bg-zinc-950">
                      <div className="text-xs text-green-400 mb-2 font-mono">DECISION LATENCY • KNOWLEDGE LOCATION</div>
                      <h3 className="font-black text-green-500 mb-3">Truth Avoidance</h3>
                      <p className="text-sm text-zinc-400 mb-4">
                        Meetings multiply to avoid naming the real problem. Signal gets buried deeper.
                        Decision Latency expands. Knowledge Location obscured. Particle state intensifies.
                      </p>
                      <Link href="/interventions/the-naming" className="text-green-500 text-sm font-bold hover:underline">
                        → THE NAMING • -0.5 GPI
                      </Link>
                    </div>
                  </div>

                  {/* GPI Dimension Quick Reference */}
                  <div className="bg-zinc-950 border border-zinc-800 p-6">
                    <h3 className="font-bold mb-4 text-zinc-400">GPI DIMENSIONS AFFECTED BY PARTICLE PATTERNS</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div className="text-center">
                        <div className="text-red-400 font-mono">Decision Latency</div>
                        <div className="text-zinc-500">20% weight</div>
                      </div>
                      <div className="text-center">
                        <div className="text-red-400 font-mono">Error Correction</div>
                        <div className="text-zinc-500">20% weight</div>
                      </div>
                      <div className="text-center">
                        <div className="text-red-400 font-mono">Structural Lock-In</div>
                        <div className="text-zinc-500">15% weight</div>
                      </div>
                      <div className="text-center">
                        <div className="text-red-400 font-mono">Knowledge Velocity</div>
                        <div className="text-zinc-500">10% weight</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* GPI INTERVENTIONS TAB */}
              {activeTab === 'solutions' && (
                <div className="space-y-8">
                  <div className="bg-black border-2 border-green-500 p-8">
                    <h2 className="text-2xl font-black mb-4 text-green-500">GPI-TARGETED INTERVENTIONS</h2>
                    <p className="text-lg">
                      Each intervention targets specific GPI dimensions. Deploy based on which dimensions are in particle state.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <Link href="/interventions/the-naming" className="group border border-zinc-800 p-6 hover:border-red-600 transition-all bg-zinc-950 block">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex flex-wrap gap-2 mb-2">
                            <span className="text-xs font-mono bg-red-600/20 text-red-400 px-2 py-1 rounded">Decision Latency</span>
                            <span className="text-xs font-mono bg-red-600/20 text-red-400 px-2 py-1 rounded">Knowledge Location</span>
                          </div>
                          <h3 className="text-xl font-black mb-2 group-hover:text-red-600">THE NAMING</h3>
                          <p className="text-zinc-400 mb-2">Surface buried signal. Move Decision Latency from particle to field.</p>
                          <p className="text-sm text-zinc-600">$750 • 90 Min • Expected: <span className="text-green-400">-0.5 GPI</span></p>
                        </div>
                        <span className="text-red-600 font-black">DEPLOY →</span>
                      </div>
                    </Link>

                    <Link href="/interventions/the-override" className="group border border-zinc-800 p-6 hover:border-red-600 transition-all bg-zinc-950 block">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex flex-wrap gap-2 mb-2">
                            <span className="text-xs font-mono bg-red-600/20 text-red-400 px-2 py-1 rounded">Structural Lock-In</span>
                            <span className="text-xs font-mono bg-red-600/20 text-red-400 px-2 py-1 rounded">Error Correction</span>
                          </div>
                          <h3 className="text-xl font-black mb-2 group-hover:text-red-600">THE OVERRIDE</h3>
                          <p className="text-zinc-400 mb-2">Break particle-state lock-in. Daily pattern interrupts force field behavior.</p>
                          <p className="text-sm text-zinc-600">$3,000 • 30 Days • Expected: <span className="text-green-400">-1.5 GPI</span></p>
                        </div>
                        <span className="text-red-600 font-black">DEPLOY →</span>
                      </div>
                    </Link>

                    <Link href="/interventions/the-build" className="group border border-zinc-800 p-6 hover:border-red-600 transition-all bg-zinc-950 block">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex flex-wrap gap-2 mb-2">
                            <span className="text-xs font-mono bg-red-600/20 text-red-400 px-2 py-1 rounded">Knowledge Velocity</span>
                            <span className="text-xs font-mono bg-red-600/20 text-red-400 px-2 py-1 rounded">Error Correction</span>
                          </div>
                          <h3 className="text-xl font-black mb-2 group-hover:text-red-600">THE BUILD</h3>
                          <p className="text-zinc-400 mb-2">Accelerate Knowledge Velocity. Ship ugly, enable error correction loops.</p>
                          <p className="text-sm text-zinc-600">$4,500 • 4 Weeks • Expected: <span className="text-green-400">-1.2 GPI</span></p>
                        </div>
                        <span className="text-red-600 font-black">DEPLOY →</span>
                      </div>
                    </Link>

                    <Link href="/interventions/the-market-smackdown" className="group border border-zinc-800 p-6 hover:border-red-600 transition-all bg-zinc-950 block">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex flex-wrap gap-2 mb-2">
                            <span className="text-xs font-mono bg-red-600/20 text-red-400 px-2 py-1 rounded">Decision Latency</span>
                          </div>
                          <h3 className="text-xl font-black mb-2 group-hover:text-red-600">THE MARKET SMACKDOWN</h3>
                          <p className="text-zinc-400 mb-2">Collapse Decision Latency dimension. GO/NO-GO in 72 hours.</p>
                          <p className="text-sm text-zinc-600">$2,250 • 3 Days • Expected: <span className="text-green-400">-1.0 GPI</span></p>
                        </div>
                        <span className="text-red-600 font-black">DEPLOY →</span>
                      </div>
                    </Link>

                    <Link href="/interventions/the-map" className="group border border-zinc-800 p-6 hover:border-red-600 transition-all bg-zinc-950 block">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex flex-wrap gap-2 mb-2">
                            <span className="text-xs font-mono bg-red-600/20 text-red-400 px-2 py-1 rounded">Knowledge Location</span>
                            <span className="text-xs font-mono bg-red-600/20 text-red-400 px-2 py-1 rounded">Talent Flow</span>
                          </div>
                          <h3 className="text-xl font-black mb-2 group-hover:text-red-600">THE MAP</h3>
                          <p className="text-zinc-400 mb-2">Target Knowledge Location friction. Map where information gets stuck.</p>
                          <p className="text-sm text-zinc-600">$1,500 • 5 Days • Expected: <span className="text-green-400">-0.8 GPI</span></p>
                        </div>
                        <span className="text-red-600 font-black">DEPLOY →</span>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>


        {/* CTA Section */}
        <section className="py-16 px-6 bg-zinc-950">
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-3xl font-black mb-6">READY TO MOVE TOWARD FIELD STATE?</h3>
            <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              Measure your GPI. Identify particle dimensions. Deploy targeted interventions. Track your movement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/diagnostic"
                className="bg-red-600 px-8 py-4 text-lg font-black hover:bg-red-700 transition-colors"
              >
                MEASURE YOUR GPI
              </Link>
              <Link
                href="/framework"
                className="border-2 border-zinc-700 px-8 py-4 text-lg font-black hover:border-zinc-500 transition-colors"
              >
                UNDERSTAND THE FRAMEWORK
              </Link>
            </div>
          </div>
        </section>

        {/* Related Content */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto">
            <RelatedContent
              title="Understand The GPI Framework"
              items={[
                {
                  href: "/framework",
                  title: "The GPI Framework",
                  description: "7 dimensions that measure organizational friction. Particle vs Field state explained.",
                  color: "red"
                },
                {
                  href: "/diagnostic",
                  title: "Measure Your GPI",
                  description: "19 binary questions. Get your dimension scores. Identify particle-state patterns.",
                  color: "yellow"
                },
                {
                  href: "/interventions",
                  title: "Target Your Dimensions",
                  description: "Each intervention moves specific dimensions toward field state.",
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

export default AnswersHub;