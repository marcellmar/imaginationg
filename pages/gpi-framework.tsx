import React from 'react';
import Link from 'next/link';
import SEOHead from '../components/SEOHead';
import Navigation from '../components/Navigation';
import { getOrderedDimensions } from '../lib/gpi-calculator';
import { getIndustryRankings } from '../lib/gpi-industry-benchmarks';
import { GPIStateVisual } from '../components/gpi';

// Dimension slug mapping
const DIMENSION_SLUGS: Record<string, string> = {
  DECISION_LATENCY: 'decision-latency',
  KNOWLEDGE_LOCATION: 'knowledge-location',
  ERROR_CORRECTION: 'error-correction',
  STRUCTURAL_LOCKIN: 'structural-lock-in',
  TALENT_FLOW: 'talent-flow',
  CAPITAL_INTENSITY: 'capital-intensity',
  KNOWLEDGE_VELOCITY: 'knowledge-velocity',
};

const GPIFrameworkPage = () => {
  const dimensions = getOrderedDimensions();
  const industryRankings = getIndustryRankings().slice(0, 7); // Top 7 for display

  return (
    <>
      <SEOHead
        title="The Growing Pains Index (GPI) Framework | IMAGINATION G"
        description="GPI measures organizational physics across 7 dimensions. Scores from 1 (field state - adaptive) to 10 (particle state - rigid). Diagnostic exposure, not consulting theater."
        ogImage="/images/og-gpi-framework.svg"
      />

      <div className="min-h-screen bg-black text-white">
        <Navigation currentPage="framework" />

        {/* Hero */}
        <section className="pt-24 pb-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block mb-8 text-green-400 text-xs font-mono bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-full">
                <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                FRAMEWORK DOCUMENTATION
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1]">
                THE GROWING<br />PAINS INDEX<span className="text-red-600">.</span>
              </h1>

              <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
                A 1-10 scoring system that measures organizational physics.
                From rigid particle systems to adaptive field systems across 7 dimensions.
              </p>

              {/* GPI Spectrum */}
              <div className="max-w-2xl mx-auto mb-12">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-green-500 font-bold">1</span>
                  <span className="text-yellow-500 font-bold">5</span>
                  <span className="text-red-500 font-bold">10</span>
                </div>
                <div className="h-4 bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 rounded mb-2"></div>
                <div className="flex justify-between text-sm text-zinc-500">
                  <span>Field State (Adaptive)</span>
                  <span>Transition</span>
                  <span>Particle State (Rigid)</span>
                </div>
              </div>

              <Link
                href="/diagnostic"
                className="inline-block bg-red-600 px-8 py-4 text-xl font-black hover:bg-red-700 transition-colors"
              >
                CALCULATE YOUR GPI
              </Link>
            </div>
          </div>
        </section>

        {/* Three States - Now Clickable */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-black mb-4 text-center">
              THREE ORGANIZATIONAL STATES
            </h2>
            <p className="text-center text-zinc-500 mb-12 max-w-xl mx-auto">
              Click each state to learn more about its characteristics, examples, and dynamics.
            </p>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Field State */}
              <Link href="/gpi-framework/field-state" className="group">
                <div className="border-2 border-green-600 border-opacity-60 hover:border-opacity-100 p-8 rounded-xl bg-gradient-to-b from-green-950/30 to-black transition-all hover:scale-[1.02]">
                  <div className="flex justify-center mb-6">
                    <GPIStateVisual state="field" size="md" />
                  </div>
                  <div className="text-3xl font-black text-green-500 mb-2 text-center">
                    FIELD STATE
                  </div>
                  <div className="text-xl font-black mb-4 text-center">GPI 1-3</div>
                  <div className="space-y-2 text-zinc-400 text-sm">
                    <p>• Distributed intelligence</p>
                    <p>• Rapid adaptation</p>
                    <p>• Hours to days decisions</p>
                    <p>• Value creation focus</p>
                  </div>
                  <div className="text-center mt-4 text-green-500 text-xs font-bold opacity-60 group-hover:opacity-100 transition-opacity">
                    LEARN MORE →
                  </div>
                </div>
              </Link>

              {/* Transition State */}
              <Link href="/gpi-framework/transition-state" className="group">
                <div className="border-2 border-yellow-600 border-opacity-60 hover:border-opacity-100 p-8 rounded-xl bg-gradient-to-b from-yellow-950/30 to-black transition-all hover:scale-[1.02]">
                  <div className="flex justify-center mb-6">
                    <GPIStateVisual state="transitioning" size="md" />
                  </div>
                  <div className="text-3xl font-black text-yellow-500 mb-2 text-center">
                    TRANSITION
                  </div>
                  <div className="text-xl font-black mb-4 text-center">GPI 4-6</div>
                  <div className="space-y-2 text-zinc-400 text-sm">
                    <p>• Mixed systems</p>
                    <p>• High turbulence</p>
                    <p>• Weeks for decisions</p>
                    <p>• Hybrid profit model</p>
                  </div>
                  <div className="text-center mt-4 text-yellow-500 text-xs font-bold opacity-60 group-hover:opacity-100 transition-opacity">
                    LEARN MORE →
                  </div>
                </div>
              </Link>

              {/* Particle State */}
              <Link href="/gpi-framework/particle-state" className="group">
                <div className="border-2 border-red-600 border-opacity-60 hover:border-opacity-100 p-8 rounded-xl bg-gradient-to-b from-red-950/30 to-black transition-all hover:scale-[1.02]">
                  <div className="flex justify-center mb-6">
                    <GPIStateVisual state="particle" size="md" />
                  </div>
                  <div className="text-3xl font-black text-red-500 mb-2 text-center">
                    PARTICLE STATE
                  </div>
                  <div className="text-xl font-black mb-4 text-center">GPI 7-10</div>
                  <div className="space-y-2 text-zinc-400 text-sm">
                    <p>• Centralized control</p>
                    <p>• Rigid hierarchies</p>
                    <p>• Months to years</p>
                    <p>• Friction extraction</p>
                  </div>
                  <div className="text-center mt-4 text-red-500 text-xs font-bold opacity-60 group-hover:opacity-100 transition-opacity">
                    LEARN MORE →
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* The Spiral Model - NEW */}
        <section className="py-16 px-6 bg-gradient-to-b from-black to-zinc-950 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-block mb-4 text-purple-400 text-xs font-mono bg-purple-950/30 border border-purple-900 px-4 py-2 rounded-full">
                  ORGANIZATIONAL DYNAMICS
                </div>
                <h2 className="text-3xl font-black mb-4">
                  THE SPIRAL MODEL
                </h2>
                <p className="text-zinc-400 max-w-2xl mx-auto">
                  Organizations don't "achieve" a state. They <span className="text-white font-bold">cycle</span> through them.
                  The health isn't in any single state—it's in the rhythm.
                </p>
              </div>

              <Link href="/gpi-framework/spiral-model" className="group block">
                <div className="border border-purple-900 hover:border-purple-500 p-8 rounded-xl bg-black/50 transition-all">
                  {/* Mini Spiral Visualization */}
                  <div className="flex justify-center gap-4 mb-8 text-sm">
                    <div className="text-center">
                      <div className="w-16 h-16 border-2 border-amber-600 rounded-full flex items-center justify-center mb-2">
                        <span className="text-amber-500 text-xs font-bold">CRYST</span>
                      </div>
                      <span className="text-zinc-600">Structure forms</span>
                    </div>
                    <div className="flex items-center text-zinc-600">→</div>
                    <div className="text-center">
                      <div className="w-16 h-16 border-2 border-red-600 rounded-full flex items-center justify-center mb-2">
                        <span className="text-red-500 text-xs font-bold">PART</span>
                      </div>
                      <span className="text-zinc-600">Rigidity peaks</span>
                    </div>
                    <div className="flex items-center text-zinc-600">→</div>
                    <div className="text-center">
                      <div className="w-16 h-16 border-2 border-purple-600 rounded-full flex items-center justify-center mb-2">
                        <span className="text-purple-500 text-xs font-bold">DISS</span>
                      </div>
                      <span className="text-zinc-600">Structure breaks</span>
                    </div>
                    <div className="flex items-center text-zinc-600">→</div>
                    <div className="text-center">
                      <div className="w-16 h-16 border-2 border-green-600 rounded-full flex items-center justify-center mb-2">
                        <span className="text-green-500 text-xs font-bold">FIELD</span>
                      </div>
                      <span className="text-zinc-600">Adaptation</span>
                    </div>
                    <div className="flex items-center text-zinc-600">↻</div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6 text-center mb-8">
                    <div>
                      <div className="text-2xl font-black text-green-500 mb-1">VELOCITY</div>
                      <p className="text-zinc-500 text-sm">How fast you complete cycles</p>
                    </div>
                    <div>
                      <div className="text-2xl font-black text-purple-500 mb-1">DIRECTION</div>
                      <p className="text-zinc-500 text-sm">Ascending or descending?</p>
                    </div>
                    <div>
                      <div className="text-2xl font-black text-amber-500 mb-1">AMPLITUDE</div>
                      <p className="text-zinc-500 text-sm">How extreme the swings</p>
                    </div>
                  </div>

                  <div className="text-center">
                    <p className="text-lg text-zinc-300 mb-4">
                      Static GPI asks "what state are you in?" <br />
                      <span className="text-white font-bold">Spiral GPI asks "where are you heading?"</span>
                    </p>
                    <span className="text-purple-500 font-bold group-hover:underline">
                      EXPLORE THE SPIRAL MODEL →
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Seven Dimensions - Now Clickable */}
        <section className="py-16 px-6 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-black mb-4 text-center">
              SEVEN DIMENSIONS OF MEASUREMENT
            </h2>
            <p className="text-center text-zinc-400 mb-12 max-w-2xl mx-auto">
              Each dimension is scored 1-10 and weighted based on impact. Click to explore each dimension in depth.
            </p>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {dimensions.map((dim) => (
                <Link
                  key={dim.key}
                  href={`/gpi-framework/${DIMENSION_SLUGS[dim.key]}`}
                  className="group"
                >
                  <div className="border border-zinc-800 hover:border-red-600 p-6 bg-black rounded-xl transition-all hover:scale-[1.01]">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-red-600 text-black flex items-center justify-center font-black rounded">
                          {dim.order}
                        </div>
                        <h3 className="text-lg font-black">{dim.label.toUpperCase()}</h3>
                      </div>
                      <span className="text-xs font-mono text-zinc-500 bg-zinc-900 px-2 py-1 rounded">
                        {Math.round(dim.weight * 100)}% weight
                      </span>
                    </div>
                    <p className="text-zinc-400 mb-4">{dim.description}</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex gap-2">
                        <span className="text-green-500 font-mono w-12">1-3:</span>
                        <span className="text-zinc-500">{dim.lowDescription}</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-red-500 font-mono w-12">7-10:</span>
                        <span className="text-zinc-500">{dim.highDescription}</span>
                      </div>
                    </div>
                    <div className="text-center mt-4 text-red-600 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                      EXPLORE DIMENSION →
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Tools Section */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-black mb-4 text-center">
              QUICK ASSESSMENT TOOLS
            </h2>
            <p className="text-center text-zinc-400 mb-12 max-w-xl mx-auto">
              Not ready for the full diagnostic? Start with these lighter assessments.
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Link href="/tools/five-questions" className="group">
                <div className="border border-zinc-800 hover:border-purple-500 p-8 rounded-xl bg-zinc-950 transition-all">
                  <div className="text-purple-500 font-mono text-sm mb-2">PERSONAL AUDIT</div>
                  <h3 className="text-2xl font-black mb-3">THE FIVE QUESTIONS</h3>
                  <p className="text-zinc-400 mb-4">
                    The audit you've been avoiding. Five questions to reveal where you stand.
                    Takes 2 minutes.
                  </p>
                  <span className="text-purple-500 font-bold text-sm group-hover:underline">
                    START AUDIT →
                  </span>
                </div>
              </Link>

              <Link href="/tools/signal-vs-structure" className="group">
                <div className="border border-zinc-800 hover:border-yellow-500 p-8 rounded-xl bg-zinc-950 transition-all">
                  <div className="text-yellow-500 font-mono text-sm mb-2">CAREER POSITIONING</div>
                  <h3 className="text-2xl font-black mb-3">SIGNAL VS STRUCTURE</h3>
                  <p className="text-zinc-400 mb-4">
                    Your role type + industry phase = your trajectory.
                    Find your quadrant.
                  </p>
                  <span className="text-yellow-500 font-bold text-sm group-hover:underline">
                    FIND YOUR POSITION →
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* How GPI Works */}
        <section className="py-16 px-6 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-black mb-12 text-center">
                HOW GPI WORKS
              </h2>

              <div className="space-y-8">
                <div className="border-l-4 border-red-600 pl-6">
                  <h3 className="text-xl font-bold mb-3">1. DIAGNOSTIC ASSESSMENT</h3>
                  <p className="text-zinc-400">
                    32 binary questions map to the 7 dimensions. Each dimension gets a score from 1-10
                    based on your answers. No subjective evaluation - just data.
                  </p>
                </div>

                <div className="border-l-4 border-yellow-600 pl-6">
                  <h3 className="text-xl font-bold mb-3">2. WEIGHTED CALCULATION</h3>
                  <p className="text-zinc-400">
                    Weighted average across all dimensions generates your overall GPI score.
                    Decision Latency and Error Correction carry 20% each. Others range 10-15%.
                  </p>
                </div>

                <div className="border-l-4 border-green-600 pl-6">
                  <h3 className="text-xl font-bold mb-3">3. STATE CLASSIFICATION</h3>
                  <p className="text-zinc-400">
                    Your score determines organizational state: Field (1-3), Transition (4-6),
                    or Particle (7-10). Each state has distinct characteristics and constraints.
                  </p>
                </div>

                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-xl font-bold mb-3">4. INDUSTRY COMPARISON</h3>
                  <p className="text-zinc-400">
                    Your GPI is compared to industry benchmarks to show percentile ranking.
                    Some industries (healthcare, government) naturally score higher than others (tech).
                  </p>
                </div>

                <div className="border-l-4 border-purple-600 pl-6">
                  <h3 className="text-xl font-bold mb-3">5. INTERVENTION MATCHING</h3>
                  <p className="text-zinc-400">
                    Weakest dimensions determine which interventions target your specific friction points.
                    Each intervention promises measurable GPI improvement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Benchmarks */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-black mb-4 text-center">
              INDUSTRY BENCHMARKS
            </h2>
            <p className="text-center text-zinc-400 mb-12 max-w-2xl mx-auto">
              Average GPI scores by industry. Lower is better.
            </p>

            <div className="max-w-3xl mx-auto space-y-4">
              {industryRankings.map((industry, index) => (
                <div key={industry.industry} className="flex items-center gap-4">
                  <div className="w-8 text-zinc-500 font-mono text-sm">#{index + 1}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold">{industry.industry}</span>
                      <span className={`font-mono font-bold ${
                        industry.gpi <= 3 ? 'text-green-500' :
                        industry.gpi <= 6 ? 'text-yellow-500' : 'text-red-500'
                      }`}>{industry.gpi}</span>
                    </div>
                    <div className="h-2 bg-zinc-800 rounded overflow-hidden">
                      <div
                        className={`h-full ${
                          industry.gpi <= 3 ? 'bg-green-500' :
                          industry.gpi <= 6 ? 'bg-yellow-500' : 'bg-red-500'
                        }`}
                        style={{ width: `${(industry.gpi / 10) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why GPI Matters */}
        <section className="py-16 px-6 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-black mb-12 text-center">
                WHY GPI MATTERS
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="border border-zinc-800 p-8 rounded-xl">
                  <h3 className="text-xl font-bold text-red-600 mb-4">
                    TRADITIONAL METRICS MISS THIS
                  </h3>
                  <div className="space-y-3 text-zinc-400">
                    <p>CFOs measure quarterly profits, not coordination capacity</p>
                    <p>VCs measure revenue growth, not metabolic rate</p>
                    <p>HR measures retention, not talent flow efficiency</p>
                    <p>Consultants measure outputs, not system dynamics</p>
                  </div>
                </div>

                <div className="border border-zinc-800 p-8 rounded-xl">
                  <h3 className="text-xl font-bold text-green-600 mb-4">
                    GPI REVEALS HIDDEN STRUCTURE
                  </h3>
                  <div className="space-y-3 text-zinc-400">
                    <p>Organizations above 7.0 plateau within 18 months</p>
                    <p>Field-state companies (1-3) grow 3-5x faster</p>
                    <p>Particle-state profit from friction, not value</p>
                    <p>Transition-state (4-6) companies are most vulnerable</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-black mb-6">
              CALCULATE YOUR GPI SCORE
            </h2>
            <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              32 questions. 7 dimensions. Complete organizational physics assessment.
            </p>
            <Link
              href="/diagnostic"
              className="inline-block bg-red-600 px-12 py-6 text-2xl font-black hover:bg-red-700 transition-colors"
            >
              START DIAGNOSTIC
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default GPIFrameworkPage;
