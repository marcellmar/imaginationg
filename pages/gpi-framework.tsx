import React from 'react';
import Link from 'next/link';
import SEOHead from '../components/SEOHead';
import Navigation from '../components/Navigation';
import { ArrowRight } from 'lucide-react';

const GPIFrameworkPage = () => {
  return (
    <>
      <SEOHead
        title="The GPI Framework | Organizational Physics"
        description="GPI measures era fit. High scores mean Connection Era infrastructure. Low scores mean Coordination Era readiness. 7 dimensions. 1 question: which world are you built for?"
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
              GPI MEASURES<br />ERA FIT<span className="text-red-600">.</span>
            </h1>

            <p className="text-xl text-zinc-400 mb-4 max-w-2xl">
              Is your organization built for the world that exists, or the world that used to exist?
            </p>

            <p className="text-xl text-white font-bold">
              7 dimensions. 1 score. The answer.
            </p>
          </div>
        </section>

        {/* The Era Shift - Text focused */}
        <section className="py-16 px-6 border-t border-zinc-900 bg-zinc-950">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Connection Era */}
              <div className="space-y-4">
                <div className="text-xs font-mono text-red-500">1995 — NOW (ENDING)</div>
                <h2 className="text-3xl font-black text-red-500">CONNECTION ERA</h2>
                <p className="text-zinc-400">
                  Success meant being connected. Who you knew. What networks you belonged to. How much access you had.
                </p>
                <p className="text-zinc-400">
                  Organizations built infrastructure for connection: platforms, hierarchies, approval chains, meetings.
                </p>
                <p className="text-zinc-500 text-sm">
                  That infrastructure is now the friction.
                </p>
                <div className="pt-4">
                  <span className="text-red-500 font-mono text-sm">HIGH GPI = CONNECTION ERA</span>
                </div>
              </div>

              {/* Coordination Era */}
              <div className="space-y-4">
                <div className="text-xs font-mono text-green-500">EMERGING</div>
                <h2 className="text-3xl font-black text-green-500">COORDINATION ERA</h2>
                <p className="text-zinc-400">
                  Connection is free now. Everyone is connected. What's scarce is coordination.
                </p>
                <p className="text-zinc-400">
                  The ability to move without hierarchy. To decide without delay. To ship without permission chains.
                </p>
                <p className="text-zinc-500 text-sm">
                  52% of Fortune 500 from 2000 are gone.
                </p>
                <div className="pt-4">
                  <span className="text-green-500 font-mono text-sm">LOW GPI = COORDINATION ERA</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Scale - Simple */}
        <section className="py-12 px-6 border-t border-zinc-900">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-3">
              <div>
                <span className="text-green-500 font-black text-3xl">1</span>
                <span className="text-zinc-600 text-sm ml-2">FIELD</span>
              </div>
              <div>
                <span className="text-yellow-500 font-black text-3xl">5</span>
                <span className="text-zinc-600 text-sm ml-2">TRANSITION</span>
              </div>
              <div>
                <span className="text-zinc-600 text-sm mr-2">PARTICLE</span>
                <span className="text-red-500 font-black text-3xl">10</span>
              </div>
            </div>
            <div className="h-3 bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 rounded-full"></div>
            <div className="flex justify-between mt-3 text-xs font-mono text-zinc-600">
              <span>COORDINATION READY</span>
              <span>CONNECTION INFRASTRUCTURE</span>
            </div>
          </div>
        </section>

        {/* Three States with Animated Visuals */}
        <section className="py-16 px-6 bg-zinc-950">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-black mb-4 text-center">THREE STATES</h2>
            <p className="text-center text-zinc-500 mb-12">
              Where does energy flow? Where does it get stuck?
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Field State */}
              <div className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    {/* Flowing particles - organic movement */}
                    {[...Array(12)].map((_, i) => (
                      <circle
                        key={i}
                        r="3"
                        fill="#22c55e"
                        opacity="0.8"
                      >
                        <animate
                          attributeName="cx"
                          values={`${20 + Math.random() * 60};${30 + Math.random() * 40};${20 + Math.random() * 60}`}
                          dur={`${3 + Math.random() * 2}s`}
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="cy"
                          values={`${20 + Math.random() * 60};${40 + Math.random() * 30};${20 + Math.random() * 60}`}
                          dur={`${4 + Math.random() * 2}s`}
                          repeatCount="indefinite"
                        />
                      </circle>
                    ))}
                    {/* Flowing connections */}
                    <path
                      d="M20,50 Q50,30 80,50 Q50,70 20,50"
                      fill="none"
                      stroke="#22c55e"
                      strokeWidth="0.5"
                      opacity="0.3"
                    >
                      <animate
                        attributeName="d"
                        values="M20,50 Q50,30 80,50 Q50,70 20,50;M20,50 Q50,70 80,50 Q50,30 20,50;M20,50 Q50,30 80,50 Q50,70 20,50"
                        dur="4s"
                        repeatCount="indefinite"
                      />
                    </path>
                  </svg>
                </div>
                <div className="text-5xl font-black text-green-500 mb-2">1-3</div>
                <div className="text-xl font-black text-white mb-3">FIELD</div>
                <p className="text-zinc-500 text-sm">
                  Coordination ready. Energy flows freely. Decisions happen at the edge.
                </p>
              </div>

              {/* Transition State */}
              <div className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    {/* Mixed - some flowing, some stuck */}
                    {[...Array(6)].map((_, i) => (
                      <circle
                        key={`flow-${i}`}
                        r="3"
                        fill="#eab308"
                        opacity="0.8"
                      >
                        <animate
                          attributeName="cx"
                          values={`${25 + Math.random() * 50};${35 + Math.random() * 30};${25 + Math.random() * 50}`}
                          dur={`${4 + Math.random() * 2}s`}
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="cy"
                          values={`${25 + Math.random() * 50};${45 + Math.random() * 20};${25 + Math.random() * 50}`}
                          dur={`${5 + Math.random() * 2}s`}
                          repeatCount="indefinite"
                        />
                      </circle>
                    ))}
                    {/* Stuck particles */}
                    {[[30, 30], [70, 30], [30, 70], [70, 70], [50, 50]].map(([cx, cy], i) => (
                      <circle
                        key={`stuck-${i}`}
                        cx={cx}
                        cy={cy}
                        r="4"
                        fill="#eab308"
                        opacity="0.5"
                      >
                        <animate
                          attributeName="r"
                          values="4;5;4"
                          dur="2s"
                          repeatCount="indefinite"
                        />
                      </circle>
                    ))}
                    {/* Partial grid lines */}
                    <line x1="30" y1="25" x2="30" y2="75" stroke="#eab308" strokeWidth="0.5" opacity="0.2" />
                    <line x1="70" y1="25" x2="70" y2="75" stroke="#eab308" strokeWidth="0.5" opacity="0.2" />
                  </svg>
                </div>
                <div className="text-5xl font-black text-yellow-500 mb-2">4-6</div>
                <div className="text-xl font-black text-white mb-3">TRANSITION</div>
                <p className="text-zinc-500 text-sm">
                  Mixed infrastructure. Some energy flows, some gets trapped. Critical window.
                </p>
              </div>

              {/* Particle State */}
              <div className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    {/* Rigid grid */}
                    {[20, 40, 60, 80].map((x) => (
                      <line key={`v-${x}`} x1={x} y1="15" x2={x} y2="85" stroke="#dc2626" strokeWidth="0.5" opacity="0.3" />
                    ))}
                    {[20, 40, 60, 80].map((y) => (
                      <line key={`h-${y}`} x1="15" y1={y} x2="85" y2={y} stroke="#dc2626" strokeWidth="0.5" opacity="0.3" />
                    ))}
                    {/* Stuck particles at intersections */}
                    {[[20,20],[40,20],[60,20],[80,20],
                      [20,40],[40,40],[60,40],[80,40],
                      [20,60],[40,60],[60,60],[80,60],
                      [20,80],[40,80],[60,80],[80,80]].map(([cx, cy], i) => (
                      <circle
                        key={i}
                        cx={cx}
                        cy={cy}
                        r="4"
                        fill="#dc2626"
                        opacity="0.7"
                      >
                        <animate
                          attributeName="opacity"
                          values="0.7;0.5;0.7"
                          dur={`${2 + i * 0.1}s`}
                          repeatCount="indefinite"
                        />
                      </circle>
                    ))}
                  </svg>
                </div>
                <div className="text-5xl font-black text-red-500 mb-2">7-10</div>
                <div className="text-xl font-black text-white mb-3">PARTICLE</div>
                <p className="text-zinc-500 text-sm">
                  Connection era infrastructure. Energy trapped. Hierarchy routes everything.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 7 Dimensions with Icons */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-black mb-4 text-center">7 DIMENSIONS</h2>
            <p className="text-center text-zinc-500 mb-12">
              Each measures the same thing differently: which era are you built for?
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  name: 'DECISION LATENCY',
                  slug: 'decision-latency',
                  weight: '20%',
                  question: 'How long to decide?',
                  low: 'Hours',
                  high: 'Months',
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                  )
                },
                {
                  name: 'ERROR CORRECTION',
                  slug: 'error-correction',
                  weight: '20%',
                  question: 'How fast do you learn?',
                  low: 'Immediate pivot',
                  high: 'Repeat failures',
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M4 12a8 8 0 018-8m8 8a8 8 0 01-8 8" />
                      <polyline points="4,8 4,12 8,12" />
                      <polyline points="20,16 20,12 16,12" />
                    </svg>
                  )
                },
                {
                  name: 'KNOWLEDGE LOCATION',
                  slug: 'knowledge-location',
                  weight: '15%',
                  question: 'Where does expertise live?',
                  low: 'Distributed',
                  high: 'Siloed',
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="12" cy="5" r="2" />
                      <circle cx="5" cy="19" r="2" />
                      <circle cx="19" cy="19" r="2" />
                      <path d="M12 7v4m-5.5 5.5L10 14m4 0l3.5 2.5" />
                    </svg>
                  )
                },
                {
                  name: 'STRUCTURAL LOCK-IN',
                  slug: 'structural-lock-in',
                  weight: '15%',
                  question: 'Can you reconfigure?',
                  low: 'Fluid teams',
                  high: 'Frozen org chart',
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="3" y="3" width="7" height="7" />
                      <rect x="14" y="3" width="7" height="7" />
                      <rect x="3" y="14" width="7" height="7" />
                      <rect x="14" y="14" width="7" height="7" />
                    </svg>
                  )
                },
                {
                  name: 'TALENT FLOW',
                  slug: 'talent-flow',
                  weight: '10%',
                  question: 'Do the best people rise?',
                  low: 'Merit moves',
                  high: 'Politics wins',
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="12" cy="7" r="4" />
                      <path d="M5 21v-2a4 4 0 014-4h6a4 4 0 014 4v2" />
                    </svg>
                  )
                },
                {
                  name: 'CAPITAL INTENSITY',
                  slug: 'capital-intensity',
                  weight: '10%',
                  question: 'Cost to pivot?',
                  low: 'Light assets',
                  high: 'Heavy infrastructure',
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="2" y="7" width="20" height="14" rx="2" />
                      <path d="M16 3v4M8 3v4" />
                      <circle cx="12" cy="14" r="3" />
                    </svg>
                  )
                },
                {
                  name: 'KNOWLEDGE VELOCITY',
                  slug: 'knowledge-velocity',
                  weight: '10%',
                  question: 'How fast does learning spread?',
                  low: 'Instant',
                  high: 'Gets stuck',
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                  )
                },
              ].map((dim) => (
                <Link key={dim.name} href={`/gpi-framework/${dim.slug}`} className="group">
                  <div className="border border-zinc-800 p-6 hover:border-red-600/50 transition-colors h-full">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-zinc-600 group-hover:text-red-500 transition-colors">{dim.icon}</span>
                        <h3 className="font-black text-white group-hover:text-red-500 transition-colors">{dim.name}</h3>
                      </div>
                      <span className="text-xs font-mono text-zinc-600 bg-zinc-900 px-2 py-1">{dim.weight}</span>
                    </div>
                    <p className="text-zinc-400 text-sm mb-4">{dim.question}</p>
                    <div className="flex justify-between text-xs">
                      <span className="text-green-500">{dim.low}</span>
                      <span className="text-red-500">{dim.high}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-black mb-4">
                  WHICH ERA ARE<br />YOU BUILT FOR<span className="text-red-600">?</span>
                </h2>
                <p className="text-zinc-400 mb-6">
                  32 questions. 7 dimensions. See if your organization is ready for what's next.
                </p>
                <Link
                  href="/diagnostic"
                  className="inline-flex items-center gap-2 bg-red-600 px-8 py-4 text-lg font-black hover:bg-red-700 transition-colors group"
                >
                  TAKE THE DIAGNOSTIC
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="text-center">
                <div className="text-7xl font-black text-zinc-800">?</div>
                <p className="text-zinc-600 text-sm mt-4">Your score is waiting.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer link */}
        <section className="py-8 px-6 border-t border-zinc-900">
          <div className="max-w-4xl mx-auto text-center">
            <Link href="/companies" className="text-zinc-600 hover:text-white transition-colors text-sm">
              See how 101+ companies scored →
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default GPIFrameworkPage;
