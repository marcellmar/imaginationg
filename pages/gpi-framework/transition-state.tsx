/**
 * Transition State Deep Dive Page
 * GPI 4-6: Breaking, chaotic organizational systems in flux
 */

import React from 'react';
import Link from 'next/link';
import SEOHead from '../../components/SEOHead';
import Navigation from '../../components/Navigation';
import { GPIStateVisual, GPISpectrum } from '../../components/gpi';

const TransitionStatePage = () => {
  // Company examples with transition state characteristics
  const companyExamples = [
    {
      name: 'Bradesco',
      gpi: 5.1,
      insight: 'Brazilian banking giant in digital transformation. Legacy branch networks colliding with mobile-first competitors.',
    },
    {
      name: 'UPS',
      gpi: 6.0,
      insight: 'Service vs wage pressure, union dynamics. Physical infrastructure meets algorithmic optimization demands.',
    },
    {
      name: 'Chevron',
      gpi: 6.7,
      insight: 'Energy transition pressure meets multi-decade asset commitments. Old playbook, new game.',
    },
    {
      name: 'Target',
      gpi: 5.5,
      insight: 'Omnichannel scramble. Stores as fulfillment centers. Physical retail trying to become digital.',
    },
    {
      name: 'Ford',
      gpi: 5.8,
      insight: 'EV transition while maintaining combustion business. Two companies in one body.',
    },
  ];

  const characteristics = [
    {
      title: 'Old Structures Cracking',
      description: 'What worked for decades is breaking. The rules that created success are now creating constraints. Legacy systems are buckling under new demands.',
    },
    {
      title: 'New Patterns Emerging',
      description: 'Pockets of innovation exist alongside calcified processes. Some teams operate like startups while others operate like museums.',
    },
    {
      title: 'High Turbulence',
      description: 'Constant reorganization. Strategy shifts every 18 months. Leaders leave, new ones arrive with different visions. Whiplash is the steady state.',
    },
    {
      title: 'Painful Transition',
      description: 'Neither fish nor fowl. Too rigid to compete with field-state insurgents, too adaptive to enjoy particle-state protections.',
    },
    {
      title: 'Opportunity in the Cracks',
      description: 'Those who can navigate ambiguity thrive. The chaos creates space for entrepreneurs inside the organization.',
    },
  ];

  const diagnosticSignals = [
    'Major decisions take weeks to months, not hours or years',
    'Some teams are agile, others are frozen',
    'Digital transformation initiatives are perpetually "underway"',
    'Org charts change faster than actual power structures',
    'Middle management is simultaneously expanding and contracting',
    'Revenue is stable but growth is slowing',
  ];

  const vulnerabilities = [
    {
      title: 'Stuck in the Middle',
      description: 'Too slow to out-innovate startups, too fast to out-lobby incumbents. The worst of both worlds.',
    },
    {
      title: 'Transformation Theater',
      description: 'Endless initiatives that change nothing. Digital transformation becomes an industry of its own.',
    },
    {
      title: 'Talent Exodus',
      description: 'Best people leave for field-state companies. Those who stay are often those who can\'t leave.',
    },
    {
      title: 'Capital Misallocation',
      description: 'Investing in both old and new simultaneously. Spreading resources thin across competing futures.',
    },
  ];

  return (
    <>
      <SEOHead
        title="Transition State Organizations (GPI 4-6) | IMAGINATION G"
        description="Transition state organizations score GPI 4-6. Old structures cracking, new patterns emerging, high turbulence. The most vulnerable and opportune state."
        ogImage="/images/og-transition-state.svg"
      />

      <div className="min-h-screen bg-black text-white">
        <Navigation currentPage="framework" />

        {/* Hero */}
        <section className="pt-24 pb-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto">
              {/* Breadcrumb */}
              <div className="mb-8">
                <Link href="/gpi-framework" className="text-zinc-500 hover:text-white transition-colors text-sm">
                  ← GPI Framework
                </Link>
              </div>

              {/* State badge */}
              <div className="inline-flex items-center gap-3 mb-8 bg-yellow-950/50 border border-yellow-800 px-4 py-2 rounded-full">
                <GPIStateVisual state="transitioning" size="sm" animate={false} />
                <span className="text-yellow-400 text-sm font-bold">GPI 4-6</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1]">
                TRANSITION STATE<span className="text-yellow-500">.</span>
              </h1>

              <p className="text-2xl text-yellow-400 font-bold mb-4">BREAKING</p>

              <p className="text-xl text-zinc-400 mb-8 max-w-2xl">
                Organizations in flux. Old structures cracking, new patterns emerging.
                The most vulnerable state. And the most opportune.
              </p>

              {/* Transition State Visual - Breaking Structure */}
              <div className="mb-12 p-8 bg-zinc-950 border border-zinc-800 rounded-xl">
                <svg viewBox="0 0 400 150" className="w-full max-w-lg mx-auto">
                  {/* Left side - Field-like (fluid) */}
                  <circle r="4" fill="#22c55e" opacity="0.8">
                    <animateMotion dur="2s" repeatCount="indefinite" path="M30,75 Q60,50 90,75" />
                  </circle>
                  <circle r="3" fill="#22c55e" opacity="0.7">
                    <animateMotion dur="2.5s" repeatCount="indefinite" path="M30,60 Q60,80 90,60" />
                  </circle>
                  <circle cx="50" cy="75" r="10" fill="#22c55e" opacity="0.3">
                    <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <text x="60" y="115" textAnchor="middle" fill="#22c55e" fontSize="8">FLUID</text>

                  {/* Center - Cracking/Breaking zone */}
                  {/* Cracked grid structure */}
                  <rect x="120" y="30" width="30" height="30" fill="#eab308" opacity="0.4" stroke="#eab308" strokeWidth="1">
                    <animate attributeName="x" values="120;122;120" dur="0.5s" repeatCount="indefinite" />
                  </rect>
                  <rect x="155" y="30" width="30" height="30" fill="#eab308" opacity="0.5" stroke="#eab308" strokeWidth="1" />
                  <rect x="190" y="30" width="30" height="30" fill="#eab308" opacity="0.3" stroke="#eab308" strokeWidth="1">
                    <animate attributeName="y" values="30;28;30" dur="0.7s" repeatCount="indefinite" />
                  </rect>

                  <rect x="120" y="65" width="30" height="30" fill="#eab308" opacity="0.5" stroke="#eab308" strokeWidth="1" />
                  <rect x="155" y="65" width="30" height="30" fill="#eab308" opacity="0.6" stroke="#eab308" strokeWidth="1">
                    <animate attributeName="opacity" values="0.4;0.7;0.4" dur="1s" repeatCount="indefinite" />
                  </rect>
                  <rect x="190" y="65" width="30" height="30" fill="#eab308" opacity="0.4" stroke="#eab308" strokeWidth="1" />

                  <rect x="120" y="100" width="30" height="30" fill="#eab308" opacity="0.3" stroke="#eab308" strokeWidth="1">
                    <animate attributeName="x" values="120;118;120" dur="0.6s" repeatCount="indefinite" />
                  </rect>
                  <rect x="155" y="100" width="30" height="30" fill="#eab308" opacity="0.5" stroke="#eab308" strokeWidth="1" />
                  <rect x="190" y="100" width="30" height="30" fill="#eab308" opacity="0.4" stroke="#eab308" strokeWidth="1">
                    <animate attributeName="y" values="100;102;100" dur="0.8s" repeatCount="indefinite" />
                  </rect>

                  {/* Crack lines */}
                  <path d="M150,30 L155,50 L148,65 L158,85 L150,100 L155,130" stroke="#eab308" strokeWidth="2" fill="none" opacity="0.8">
                    <animate attributeName="stroke-dasharray" values="0,200;100,100;200,0" dur="3s" repeatCount="indefinite" />
                  </path>
                  <path d="M185,25 L180,45 L190,60 L178,80 L188,95 L180,115" stroke="#eab308" strokeWidth="2" fill="none" opacity="0.6">
                    <animate attributeName="stroke-dasharray" values="0,200;100,100;200,0" dur="3.5s" begin="0.5s" repeatCount="indefinite" />
                  </path>

                  {/* Some particles escaping the grid */}
                  <circle r="4" fill="#22c55e">
                    <animate attributeName="cx" values="170;100;170" dur="3s" repeatCount="indefinite" />
                    <animate attributeName="cy" values="80;75;80" dur="3s" repeatCount="indefinite" />
                  </circle>
                  <circle r="3" fill="#eab308">
                    <animate attributeName="cx" values="170;180;170" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="cy" values="50;55;50" dur="2s" repeatCount="indefinite" />
                  </circle>

                  <text x="170" y="145" textAnchor="middle" fill="#eab308" fontSize="8">BREAKING</text>

                  {/* Right side - Particle-like (rigid) */}
                  <rect x="260" y="45" width="25" height="25" fill="#ef4444" opacity="0.7" />
                  <rect x="290" y="45" width="25" height="25" fill="#ef4444" opacity="0.7" />
                  <rect x="320" y="45" width="25" height="25" fill="#ef4444" opacity="0.7" />
                  <rect x="260" y="75" width="25" height="25" fill="#ef4444" opacity="0.7" />
                  <rect x="290" y="75" width="25" height="25" fill="#ef4444" opacity="0.7" />
                  <rect x="320" y="75" width="25" height="25" fill="#ef4444" opacity="0.7" />

                  {/* Lock on rigid side */}
                  <rect x="285" y="58" width="15" height="12" fill="#ef4444" rx="2" />
                  <path d="M 289 58 L 289 53 Q 292 48, 296 53 L 296 58" fill="none" stroke="#ef4444" strokeWidth="2" />

                  <text x="305" y="115" textAnchor="middle" fill="#ef4444" fontSize="8">FROZEN</text>

                  {/* Direction arrows */}
                  <path d="M 95 75 L 115 75 L 110 70 M 115 75 L 110 80" stroke="#22c55e" strokeWidth="2" fill="none" opacity="0.6" />
                  <path d="M 225 75 L 250 75 L 245 70 M 250 75 L 245 80" stroke="#ef4444" strokeWidth="2" fill="none" opacity="0.6" />
                </svg>
              </div>

              {/* Spectrum */}
              <div className="max-w-md mb-12">
                <GPISpectrum score={5.0} size="lg" />
              </div>
            </div>
          </div>
        </section>

        {/* What It Feels Like */}
        <section className="py-16 px-6 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-black mb-8">WHAT IT FEELS LIKE</h2>

              <div className="bg-yellow-950/20 border border-yellow-900/50 rounded-xl p-8 mb-8">
                <p className="text-xl text-zinc-300 leading-relaxed mb-6">
                  You attend meetings about transformation. Then you attend meetings about
                  the meetings. Somewhere between the strategy deck and the implementation,
                  everything stalls. Not from malice. From friction.
                </p>
                <p className="text-lg text-zinc-400 leading-relaxed">
                  Some days feel like a startup. Others feel like a government agency. It depends
                  which team you're working with, which initiative you're on, which leader is
                  sponsoring it. The organization is multiple organizations wearing one logo.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-zinc-800 rounded-xl p-6">
                  <h3 className="font-bold text-yellow-500 mb-3">DECISIONS</h3>
                  <p className="text-zinc-400">
                    Weeks to months. Multiple approval layers. Some fast-track processes exist
                    but most things still need committee blessing.
                  </p>
                </div>
                <div className="border border-zinc-800 rounded-xl p-6">
                  <h3 className="font-bold text-yellow-500 mb-3">ERRORS</h3>
                  <p className="text-zinc-400">
                    Caught in weeks, fixed in months. Post-mortems happen but recommendations
                    often die in implementation. Blame is diffuse.
                  </p>
                </div>
                <div className="border border-zinc-800 rounded-xl p-6">
                  <h3 className="font-bold text-yellow-500 mb-3">KNOWLEDGE</h3>
                  <p className="text-zinc-400">
                    Partially documented. Some teams share; others hoard. New hires can find
                    some answers but key knowledge is still tribal.
                  </p>
                </div>
                <div className="border border-zinc-800 rounded-xl p-6">
                  <h3 className="font-bold text-yellow-500 mb-3">CHANGE</h3>
                  <p className="text-zinc-400">
                    Possible but painful. Requires executive sponsorship and multi-quarter
                    timelines. Some areas are modular; most are entangled.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Characteristics */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-black mb-8">TRANSITION STATE CHARACTERISTICS</h2>

              <div className="space-y-6">
                {characteristics.map((char, i) => (
                  <div key={i} className="border-l-4 border-yellow-600 pl-6 py-2">
                    <h3 className="text-xl font-bold mb-2">{char.title}</h3>
                    <p className="text-zinc-400">{char.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Company Examples */}
        <section className="py-16 px-6 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-black mb-8">TRANSITION STATE EXAMPLES</h2>

              <div className="space-y-4">
                {companyExamples.map((company) => (
                  <div key={company.name} className="bg-black border border-zinc-800 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold">{company.name}</h3>
                      <span className="text-yellow-500 font-mono font-bold text-xl">
                        GPI {company.gpi}
                      </span>
                    </div>
                    <p className="text-zinc-400">{company.insight}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Diagnostic Signals */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-black mb-8">YOU'RE IN TRANSITION STATE IF...</h2>

              <div className="grid md:grid-cols-2 gap-4">
                {diagnosticSignals.map((signal, i) => (
                  <div key={i} className="flex items-start gap-3 bg-yellow-950/20 border border-yellow-900/30 rounded-lg p-4">
                    <span className="text-yellow-500 font-bold">~</span>
                    <span className="text-zinc-300">{signal}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Vulnerabilities */}
        <section className="py-16 px-6 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-black mb-8">WHY TRANSITION STATE IS DANGEROUS</h2>

              <div className="grid md:grid-cols-2 gap-6">
                {vulnerabilities.map((vuln, i) => (
                  <div key={i} className="bg-black border border-red-900/30 rounded-xl p-6">
                    <h3 className="font-bold text-red-500 mb-3">{vuln.title}</h3>
                    <p className="text-zinc-400">{vuln.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 border border-yellow-900/50 bg-yellow-950/20 rounded-xl">
                <h3 className="font-bold text-yellow-500 mb-3">THE 18-MONTH WINDOW</h3>
                <p className="text-zinc-400">
                  Organizations in transition state typically have 18-24 months before they either
                  break through to field state or calcify into particle state. The window is closing.
                  Most organizations don't make it through. They slide backward into rigidity, not
                  forward into fluidity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-black mb-8">INDUSTRIES THAT CLUSTER HERE</h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: 'Banking', gpi: 5.1 },
                  { name: 'Retail', gpi: 5.5 },
                  { name: 'Logistics', gpi: 6.0 },
                  { name: 'Manufacturing', gpi: 6.0 },
                ].map((industry) => (
                  <div key={industry.name} className="bg-zinc-950 border border-zinc-800 rounded-lg p-4 text-center">
                    <div className="text-2xl font-black text-yellow-500 mb-1">{industry.gpi}</div>
                    <div className="text-sm text-zinc-400">{industry.name}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 border border-zinc-800 rounded-xl">
                <h3 className="font-bold mb-3">WHY THESE INDUSTRIES?</h3>
                <p className="text-zinc-400">
                  These industries are being disrupted but have enough legacy infrastructure and
                  regulatory protection to resist complete transformation. They're caught between
                  the old world and the new, unable to fully commit to either.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Paths Forward */}
        <section className="py-16 px-6 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-black mb-8">TWO PATHS FROM HERE</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-950/20 border border-green-900/50 rounded-xl p-6">
                  <h3 className="font-bold text-green-500 text-xl mb-4">→ FIELD STATE</h3>
                  <ul className="space-y-3 text-zinc-400">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">•</span>
                      <span>Kill legacy systems, don't maintain them</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">•</span>
                      <span>Distribute decision authority aggressively</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">•</span>
                      <span>Document everything, hoard nothing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">•</span>
                      <span>Reward speed over perfection</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-red-950/20 border border-red-900/50 rounded-xl p-6">
                  <h3 className="font-bold text-red-500 text-xl mb-4">→ PARTICLE STATE</h3>
                  <ul className="space-y-3 text-zinc-400">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">•</span>
                      <span>Let transformation initiatives stall</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">•</span>
                      <span>Protect existing power structures</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">•</span>
                      <span>Prioritize consensus over speed</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">•</span>
                      <span>Add process to manage complexity</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between gap-6">
              <Link
                href="/gpi-framework/field-state"
                className="border border-green-700 px-8 py-4 text-lg font-black hover:border-green-500 transition-colors text-center text-green-500"
              >
                ← FIELD STATE
              </Link>
              <Link
                href="/gpi-framework/particle-state"
                className="bg-red-600 px-8 py-4 text-lg font-black hover:bg-red-700 transition-colors text-center"
              >
                NEXT: PARTICLE STATE →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TransitionStatePage;
