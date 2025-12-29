/**
 * Particle State Deep Dive Page
 * GPI 7-10: Rigid, calcified organizational systems
 */

import React from 'react';
import Link from 'next/link';
import SEOHead from '../../components/SEOHead';
import Navigation from '../../components/Navigation';
import { GPIStateVisual, GPISpectrum } from '../../components/gpi';

const ParticleStatePage = () => {
  // Company examples with particle state characteristics
  const companyExamples = [
    {
      name: 'Epic Systems',
      gpi: 7.3,
      insight: '35% US hospital market share. Structural lock-in so deep that switching costs exceed the pain of staying. The gap is the product.',
    },
    {
      name: 'C.H. Robinson',
      gpi: 7.7,
      insight: 'Freight brokerage built on information asymmetry. Profits from the gap between shippers and carriers.',
    },
    {
      name: 'Construction Industry',
      gpi: 8.0,
      insight: 'Manual fortress. Knowledge transfers generationally. Change happens when people retire, not when markets shift.',
    },
    {
      name: 'Higher Education',
      gpi: 7.5,
      insight: 'Tenure systems, union constraints, rigid hierarchies. Credentials are the moat. Learning is secondary.',
    },
    {
      name: 'Government',
      gpi: 9.0,
      insight: 'Frozen by design. Regulations written to prevent change. Friction is a constitutional feature.',
    },
  ];

  const characteristics = [
    {
      title: 'Fixed Nodes, Fixed Roles',
      description: 'Every position has a box on the org chart. Every process has an owner. Change means changing the chart, and nobody wants to redraw the chart.',
    },
    {
      title: 'Information Trapped in Silos',
      description: 'Knowledge is power, so knowledge is hoarded. Departments compete for budget, not outcomes. The left hand doesn\'t know what the right hand is doing. By design.',
    },
    {
      title: 'Change Requires Permission',
      description: 'Nothing moves without approval from above. Innovation proposals die in committee. "That\'s not how we do things here" is the unofficial motto.',
    },
    {
      title: 'Slow Metabolism',
      description: 'The organization processes change at geological timescales. What takes field organizations weeks takes particle organizations years.',
    },
    {
      title: 'Friction is a Feature',
      description: 'Inefficiency isn\'t a bug. It\'s someone\'s business model. The gap, the delay, the complexity: these are revenue streams, not problems to solve.',
    },
  ];

  const diagnosticSignals = [
    'Decisions take months to years',
    'Key knowledge exists only in veterans\' heads',
    'Mistakes persist until someone retires',
    'Changing core systems is "impossible"',
    'Top performers leave; loyalists stay',
    'Best practices from a decade ago still rule',
  ];

  const frictionPoints = [
    {
      title: 'Prior Authorization',
      description: 'Healthcare: 93% of physicians report care delays. 14 hours/week on paperwork. $1.3B industry built on saying "no."',
    },
    {
      title: 'Textbook Publishing',
      description: 'Education: $300 textbooks with $20 of content. New editions that change nothing. Bundled access codes that expire.',
    },
    {
      title: 'Recruiting Agencies',
      description: 'Employment: 15-25% of first-year salary to introduce two parties. In the age of LinkedIn.',
    },
    {
      title: 'Commercial Real Estate',
      description: 'Property: 6% commissions on million-dollar transactions. The same percentage since 1950.',
    },
  ];

  return (
    <>
      <SEOHead
        title="Particle State Organizations (GPI 7-10) | IMAGINATION G"
        description="Particle state organizations score GPI 7-10. Fixed roles, information silos, slow metabolism. Friction isn't entropy. Friction is margin."
        ogImage="/images/og-particle-state.svg"
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
              <div className="inline-flex items-center gap-3 mb-8 bg-red-950/50 border border-red-800 px-4 py-2 rounded-full">
                <GPIStateVisual state="particle" size="sm" animate={false} />
                <span className="text-red-400 text-sm font-bold">GPI 7-10</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1]">
                PARTICLE STATE<span className="text-red-500">.</span>
              </h1>

              <p className="text-2xl text-red-400 font-bold mb-4">RIGID</p>

              <p className="text-xl text-zinc-400 mb-8 max-w-2xl">
                Organizations where friction isn't entropy. Friction is margin. The gap,
                the delay, the complexity: these aren't bugs. They're someone's business model.
              </p>

              {/* Particle State Visual - Rigid Frozen Grid */}
              <div className="mb-12 p-8 bg-zinc-950 border border-zinc-800 rounded-xl">
                <svg viewBox="0 0 400 150" className="w-full max-w-lg mx-auto">
                  {/* Rigid grid of boxes */}
                  {/* Row 1 */}
                  <rect x="60" y="20" width="40" height="35" fill="#ef4444" opacity="0.7" stroke="#ef4444" strokeWidth="2" />
                  <rect x="110" y="20" width="40" height="35" fill="#ef4444" opacity="0.6" stroke="#ef4444" strokeWidth="2" />
                  <rect x="160" y="20" width="40" height="35" fill="#ef4444" opacity="0.8" stroke="#ef4444" strokeWidth="2" />
                  <rect x="210" y="20" width="40" height="35" fill="#ef4444" opacity="0.5" stroke="#ef4444" strokeWidth="2" />
                  <rect x="260" y="20" width="40" height="35" fill="#ef4444" opacity="0.7" stroke="#ef4444" strokeWidth="2" />
                  <rect x="310" y="20" width="40" height="35" fill="#ef4444" opacity="0.6" stroke="#ef4444" strokeWidth="2" />

                  {/* Row 2 */}
                  <rect x="60" y="60" width="40" height="35" fill="#ef4444" opacity="0.5" stroke="#ef4444" strokeWidth="2" />
                  <rect x="110" y="60" width="40" height="35" fill="#ef4444" opacity="0.8" stroke="#ef4444" strokeWidth="2" />
                  <rect x="160" y="60" width="40" height="35" fill="#ef4444" opacity="0.6" stroke="#ef4444" strokeWidth="2" />
                  <rect x="210" y="60" width="40" height="35" fill="#ef4444" opacity="0.7" stroke="#ef4444" strokeWidth="2" />
                  <rect x="260" y="60" width="40" height="35" fill="#ef4444" opacity="0.5" stroke="#ef4444" strokeWidth="2" />
                  <rect x="310" y="60" width="40" height="35" fill="#ef4444" opacity="0.8" stroke="#ef4444" strokeWidth="2" />

                  {/* Row 3 */}
                  <rect x="60" y="100" width="40" height="35" fill="#ef4444" opacity="0.6" stroke="#ef4444" strokeWidth="2" />
                  <rect x="110" y="100" width="40" height="35" fill="#ef4444" opacity="0.7" stroke="#ef4444" strokeWidth="2" />
                  <rect x="160" y="100" width="40" height="35" fill="#ef4444" opacity="0.5" stroke="#ef4444" strokeWidth="2" />
                  <rect x="210" y="100" width="40" height="35" fill="#ef4444" opacity="0.8" stroke="#ef4444" strokeWidth="2" />
                  <rect x="260" y="100" width="40" height="35" fill="#ef4444" opacity="0.6" stroke="#ef4444" strokeWidth="2" />
                  <rect x="310" y="100" width="40" height="35" fill="#ef4444" opacity="0.7" stroke="#ef4444" strokeWidth="2" />

                  {/* Trapped particles in cells - trying to move but stuck */}
                  <circle cx="80" cy="37" r="8" fill="white" opacity="0.2">
                    <animate attributeName="cx" values="78;82;78" dur="0.5s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="180" cy="37" r="8" fill="white" opacity="0.2">
                    <animate attributeName="cy" values="35;39;35" dur="0.6s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="280" cy="37" r="8" fill="white" opacity="0.2">
                    <animate attributeName="cx" values="278;282;278" dur="0.4s" repeatCount="indefinite" />
                  </circle>

                  <circle cx="130" cy="77" r="8" fill="white" opacity="0.2">
                    <animate attributeName="cx" values="128;132;128" dur="0.7s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="230" cy="77" r="8" fill="white" opacity="0.2">
                    <animate attributeName="cy" values="75;79;75" dur="0.5s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="330" cy="77" r="8" fill="white" opacity="0.2">
                    <animate attributeName="cx" values="328;332;328" dur="0.6s" repeatCount="indefinite" />
                  </circle>

                  <circle cx="80" cy="117" r="8" fill="white" opacity="0.2">
                    <animate attributeName="cy" values="115;119;115" dur="0.4s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="180" cy="117" r="8" fill="white" opacity="0.2">
                    <animate attributeName="cx" values="178;182;178" dur="0.5s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="280" cy="117" r="8" fill="white" opacity="0.2">
                    <animate attributeName="cy" values="115;119;115" dur="0.6s" repeatCount="indefinite" />
                  </circle>

                  {/* Locks on several cells */}
                  <rect x="123" y="30" width="14" height="10" fill="#ef4444" rx="1" />
                  <path d="M 126 30 L 126 26 Q 130 22, 134 26 L 134 30" fill="none" stroke="#ef4444" strokeWidth="2" />

                  <rect x="223" y="70" width="14" height="10" fill="#ef4444" rx="1" />
                  <path d="M 226 70 L 226 66 Q 230 62, 234 66 L 234 70" fill="none" stroke="#ef4444" strokeWidth="2" />

                  <rect x="323" y="110" width="14" height="10" fill="#ef4444" rx="1" />
                  <path d="M 326 110 L 326 106 Q 330 102, 334 106 L 334 110" fill="none" stroke="#ef4444" strokeWidth="2" />

                  {/* Barrier walls between cells */}
                  <line x1="100" y1="20" x2="100" y2="135" stroke="#ef4444" strokeWidth="3" opacity="0.8" />
                  <line x1="150" y1="20" x2="150" y2="135" stroke="#ef4444" strokeWidth="3" opacity="0.8" />
                  <line x1="200" y1="20" x2="200" y2="135" stroke="#ef4444" strokeWidth="3" opacity="0.8" />
                  <line x1="250" y1="20" x2="250" y2="135" stroke="#ef4444" strokeWidth="3" opacity="0.8" />
                  <line x1="300" y1="20" x2="300" y2="135" stroke="#ef4444" strokeWidth="3" opacity="0.8" />
                  <line x1="350" y1="20" x2="350" y2="135" stroke="#ef4444" strokeWidth="3" opacity="0.8" />

                  {/* Label */}
                  <text x="200" y="147" textAnchor="middle" fill="#ef4444" fontSize="10" fontWeight="bold">FRICTION IS MARGIN</text>

                  {/* Money symbols in the gaps */}
                  <text x="100" y="80" textAnchor="middle" fill="#22c55e" fontSize="10" fontWeight="bold">$</text>
                  <text x="200" y="50" textAnchor="middle" fill="#22c55e" fontSize="10" fontWeight="bold">$</text>
                  <text x="300" y="120" textAnchor="middle" fill="#22c55e" fontSize="10" fontWeight="bold">$</text>
                </svg>
              </div>

              {/* Spectrum */}
              <div className="max-w-md mb-12">
                <GPISpectrum score={8.0} size="lg" />
              </div>
            </div>
          </div>
        </section>

        {/* What It Feels Like */}
        <section className="py-16 px-6 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-black mb-8">WHAT IT FEELS LIKE</h2>

              <div className="bg-red-950/20 border border-red-900/50 rounded-xl p-8 mb-8">
                <p className="text-xl text-zinc-300 leading-relaxed mb-6">
                  You know the problem. You know the solution. You even know who needs to
                  approve it. But between knowing and doing lies an ocean of committees,
                  stakeholders, review cycles, and "alignment meetings."
                </p>
                <p className="text-lg text-zinc-400 leading-relaxed">
                  The organization isn't stupid. It's frozen. Smart people work here. They've
                  just learned that proposing change creates more pain than enduring the status
                  quo. So they stop proposing. They start protecting.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-zinc-800 rounded-xl p-6">
                  <h3 className="font-bold text-red-500 mb-3">DECISIONS</h3>
                  <p className="text-zinc-400">
                    Months to years. Budget cycles, committee reviews, stakeholder alignment.
                    By the time you decide, the opportunity has passed.
                  </p>
                </div>
                <div className="border border-zinc-800 rounded-xl p-6">
                  <h3 className="font-bold text-red-500 mb-3">ERRORS</h3>
                  <p className="text-zinc-400">
                    Persist for years. Blame is assigned, not fixed. The same mistakes
                    recur until the people who remember retire.
                  </p>
                </div>
                <div className="border border-zinc-800 rounded-xl p-6">
                  <h3 className="font-bold text-red-500 mb-3">KNOWLEDGE</h3>
                  <p className="text-zinc-400">
                    Lives in people's heads. Tribal. When veterans leave, decades of
                    institutional knowledge walk out the door.
                  </p>
                </div>
                <div className="border border-zinc-800 rounded-xl p-6">
                  <h3 className="font-bold text-red-500 mb-3">CHANGE</h3>
                  <p className="text-zinc-400">
                    Effectively impossible. Legacy systems are too entangled to replace.
                    "We tried that once" is the death sentence for innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Core Insight */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-red-950/50 to-zinc-950 border border-red-800 rounded-xl p-8">
                <h2 className="text-3xl font-black mb-6 text-red-500">FRICTION IS MARGIN</h2>
                <p className="text-xl text-zinc-300 leading-relaxed mb-6">
                  The central insight of particle state organizations: inefficiency isn't
                  accidental. It's profitable. For someone.
                </p>
                <ul className="space-y-4 text-zinc-400">
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">→</span>
                    <span>The delay in healthcare approvals funds a $1.3B denial management industry</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">→</span>
                    <span>The complexity in enterprise software justifies $500/hour consultants</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">→</span>
                    <span>The opacity in real estate creates room for 6% commissions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">→</span>
                    <span>The gap between shippers and carriers is the freight broker's entire business</span>
                  </li>
                </ul>
                <p className="text-lg text-zinc-300 mt-6 font-bold">
                  The system isn't broken. It's functioning. For someone else.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Characteristics */}
        <section className="py-16 px-6 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-black mb-8">PARTICLE STATE CHARACTERISTICS</h2>

              <div className="space-y-6">
                {characteristics.map((char, i) => (
                  <div key={i} className="border-l-4 border-red-600 pl-6 py-2">
                    <h3 className="text-xl font-bold mb-2">{char.title}</h3>
                    <p className="text-zinc-400">{char.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Company Examples */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-black mb-8">PARTICLE STATE EXAMPLES</h2>

              <div className="space-y-4">
                {companyExamples.map((company) => (
                  <div key={company.name} className="bg-zinc-950 border border-zinc-800 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold">{company.name}</h3>
                      <span className="text-red-500 font-mono font-bold text-xl">
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
        <section className="py-16 px-6 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-black mb-8">YOU'RE IN PARTICLE STATE IF...</h2>

              <div className="grid md:grid-cols-2 gap-4">
                {diagnosticSignals.map((signal, i) => (
                  <div key={i} className="flex items-start gap-3 bg-red-950/20 border border-red-900/30 rounded-lg p-4">
                    <span className="text-red-500 font-bold">✗</span>
                    <span className="text-zinc-300">{signal}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Friction Points */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-black mb-8">WHERE FRICTION BECOMES MARGIN</h2>

              <div className="grid md:grid-cols-2 gap-6">
                {frictionPoints.map((point, i) => (
                  <div key={i} className="bg-zinc-950 border border-zinc-800 rounded-xl p-6">
                    <h3 className="font-bold text-red-500 mb-3">{point.title}</h3>
                    <p className="text-zinc-400 text-sm">{point.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-16 px-6 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-black mb-8">INDUSTRIES THAT CLUSTER HERE</h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: 'Healthcare', gpi: 6.5 },
                  { name: 'Education', gpi: 7.5 },
                  { name: 'Construction', gpi: 8.0 },
                  { name: 'Government', gpi: 9.0 },
                ].map((industry) => (
                  <div key={industry.name} className="bg-black border border-zinc-800 rounded-lg p-4 text-center">
                    <div className="text-2xl font-black text-red-500 mb-1">{industry.gpi}</div>
                    <div className="text-sm text-zinc-400">{industry.name}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 border border-zinc-800 rounded-xl">
                <h3 className="font-bold mb-3">WHY THESE INDUSTRIES?</h3>
                <p className="text-zinc-400">
                  These industries share common traits: heavy regulation, physical infrastructure
                  dependencies, captured markets, and business models that profit from complexity
                  rather than efficiency. They've calcified because calcification is profitable.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Can You Escape? */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-black mb-8">CAN YOU ESCAPE PARTICLE STATE?</h2>

              <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-8">
                <p className="text-lg text-zinc-300 mb-6">
                  Most organizations don't. The forces that created particle state are the
                  same forces that maintain it. Breaking free requires:
                </p>
                <ul className="space-y-4 text-zinc-400 mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-500">1.</span>
                    <span><strong className="text-white">Existential threat:</strong> Disruption that makes the status quo untenable</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-500">2.</span>
                    <span><strong className="text-white">New leadership:</strong> Outsiders who aren't invested in the existing structure</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-500">3.</span>
                    <span><strong className="text-white">Permission to fail:</strong> Safety to experiment without career risk</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-500">4.</span>
                    <span><strong className="text-white">Capital patience:</strong> Investors willing to sacrifice short-term returns</span>
                  </li>
                </ul>
                <p className="text-lg text-zinc-300">
                  Without all four, particle state is sticky. Very sticky. The organizations
                  that escape usually do so through near-death experiences that force transformation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between gap-6">
              <Link
                href="/gpi-framework/transition-state"
                className="border border-yellow-700 px-8 py-4 text-lg font-black hover:border-yellow-500 transition-colors text-center text-yellow-500"
              >
                ← TRANSITION STATE
              </Link>
              <Link
                href="/diagnostic"
                className="bg-red-600 px-8 py-4 text-lg font-black hover:bg-red-700 transition-colors text-center"
              >
                CALCULATE YOUR GPI →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ParticleStatePage;
