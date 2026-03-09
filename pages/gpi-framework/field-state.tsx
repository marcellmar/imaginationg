/**
 * Field State Deep Dive Page
 * GPI 1-3: Adaptive, fluid organizational systems
 */

import React from 'react';
import Link from 'next/link';
import SEOHead from '../../components/SEOHead';
import Navigation from '../../components/Navigation';
import { GPIStateVisual, GPISpectrum } from '../../components/gpi';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const FieldStatePage = () => {
  useScrollReveal();

  // Company examples with field state characteristics
  const companyExamples = [
    {
      name: 'Stripe',
      gpi: 1.5,
      insight: 'API-first architecture enables same-day decisions. Continuous deployment means errors are caught and fixed in hours, not quarters.',
    },
    {
      name: 'Notion',
      gpi: 1.8,
      insight: 'Purely digital product with minimal physical infrastructure. Knowledge is the product, and it flows without friction.',
    },
    {
      name: 'GitLab',
      gpi: 1.8,
      insight: 'Handbook-first culture means knowledge is documented and accessible. Remote-first eliminated geographic friction.',
    },
    {
      name: 'Shopify',
      gpi: 2.2,
      insight: 'Modular architecture allows rapid pivots. Merchant success is measured in real-time.',
    },
    {
      name: 'Maersk',
      gpi: 3.9,
      insight: 'Vertical integration in shipping. Digital transformation turning a particle industry into field operations.',
    },
  ];

  const characteristics = [
    {
      title: 'Signal Flows Freely',
      description: 'Information moves without gatekeepers. Data is accessible to those who need it. Decisions are informed by real-time signals, not quarterly reports.',
    },
    {
      title: 'Roles Adapt in Real-Time',
      description: 'Job descriptions are guidelines, not prisons. People move to where they create the most value. Hierarchy exists for coordination, not control.',
    },
    {
      title: 'AI-Coordinated Systems',
      description: 'Algorithms handle routine decisions. Humans focus on judgment calls. The boundary between human and machine work is fluid and evolving.',
    },
    {
      title: 'Fast Metabolism',
      description: 'The organization processes change quickly. What takes particle organizations years takes field organizations weeks.',
    },
    {
      title: 'Friction is Eliminated',
      description: 'Inefficiency is treated as a bug, not a feature. Nobody profits from delay. Value creation is the only margin.',
    },
  ];

  const diagnosticSignals = [
    'Decisions happen in hours or days, not months',
    'New employees can find answers without asking veterans',
    'Mistakes are caught and fixed before they compound',
    'Systems can be changed without massive investment',
    'Top performers choose to stay',
    'Knowledge updates continuously, not generationally',
  ];

  return (
    <>
      <SEOHead
        title="Field State Organizations (GPI 1-3) | IMAGINATION G"
        description="Field state organizations score GPI 1-3. Signal flows freely, roles adapt in real-time, friction is eliminated. Learn what makes organizations adaptive."
        ogImage="/images/og-field-state.svg"
      />

      <div className="min-h-screen bg-stone-50 text-stone-900">
        <Navigation currentPage="framework" />

        {/* Hero */}
        <section className="pt-36 pb-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto">
              {/* Breadcrumb */}
              <div className="mb-8">
                <Link href="/gpi-framework" className="text-stone-500 hover:text-stone-900 transition-colors text-sm">
                  ← GPI Framework
                </Link>
              </div>

              {/* State badge */}
              <div className="inline-flex items-center gap-3 mb-8 bg-stone-100 border border-stone-300 px-4 py-2 rounded-full">
                <GPIStateVisual state="field" size="sm" animate={false} />
                <span className="text-stone-700 text-sm font-bold">GPI 1-3</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1]">
                FIELD STATE<span className="text-red-600">.</span>
              </h1>

              <p className="text-2xl text-stone-700 font-bold mb-4">FLUID</p>

              <p className="text-xl text-stone-500 mb-8 max-w-2xl">
                Organizations where signal flows freely, roles adapt in real-time, and friction
                is treated as waste to eliminate, not margin to extract.
              </p>

              {/* Field State Visual - Flowing Energy */}
              <div className="mb-12 p-8 bg-white border border-stone-200">
                <svg viewBox="0 0 400 150" className="w-full max-w-lg mx-auto">
                  {/* Background grid - very faint, showing structure without rigidity */}
                  <defs>
                    <pattern id="fieldGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1c1917" strokeWidth="0.3" opacity="0.2" />
                    </pattern>
                  </defs>
                  <rect width="400" height="150" fill="url(#fieldGrid)" />

                  {/* Central energy field - pulsing */}
                  <ellipse cx="200" cy="75" rx="120" ry="50" fill="#1c1917" opacity="0.1">
                    <animate attributeName="rx" values="100;130;100" dur="3s" repeatCount="indefinite" />
                    <animate attributeName="ry" values="40;55;40" dur="3s" repeatCount="indefinite" />
                  </ellipse>

                  {/* Flowing particles - moving freely */}
                  <circle r="6" fill="#1c1917" opacity="0.9">
                    <animateMotion dur="3s" repeatCount="indefinite" path="M50,75 Q125,30 200,75 Q275,120 350,75" />
                  </circle>
                  <circle r="5" fill="#1c1917" opacity="0.8">
                    <animateMotion dur="2.5s" repeatCount="indefinite" path="M50,75 Q125,110 200,75 Q275,40 350,75" />
                  </circle>
                  <circle r="7" fill="#1c1917" opacity="0.7">
                    <animateMotion dur="4s" repeatCount="indefinite" path="M50,50 Q125,75 200,50 Q275,75 350,50" />
                  </circle>
                  <circle r="4" fill="#1c1917" opacity="0.9">
                    <animateMotion dur="3.5s" repeatCount="indefinite" path="M50,100 Q125,75 200,100 Q275,75 350,100" />
                  </circle>
                  <circle r="6" fill="#1c1917" opacity="0.8">
                    <animateMotion dur="2.8s" begin="0.5s" repeatCount="indefinite" path="M50,60 Q150,90 200,60 Q250,30 350,60" />
                  </circle>

                  {/* Adaptive nodes - breathing, not fixed */}
                  <circle cx="80" cy="75" r="15" fill="#1c1917" opacity="0.3">
                    <animate attributeName="r" values="12;18;12" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="160" cy="50" r="12" fill="#1c1917" opacity="0.3">
                    <animate attributeName="r" values="10;15;10" dur="2.5s" begin="0.3s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="200" cy="90" r="14" fill="#1c1917" opacity="0.3">
                    <animate attributeName="r" values="11;16;11" dur="2.2s" begin="0.6s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="240" cy="55" r="13" fill="#1c1917" opacity="0.3">
                    <animate attributeName="r" values="10;16;10" dur="2.8s" begin="0.9s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="320" cy="75" r="15" fill="#1c1917" opacity="0.3">
                    <animate attributeName="r" values="12;18;12" dur="2s" begin="1.2s" repeatCount="indefinite" />
                  </circle>

                  {/* Wave effect spreading */}
                  <circle cx="200" cy="75" r="30" fill="none" stroke="#1c1917" strokeWidth="1" opacity="0.5">
                    <animate attributeName="r" values="20;80;20" dur="4s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.5;0;0.5" dur="4s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="200" cy="75" r="50" fill="none" stroke="#1c1917" strokeWidth="1" opacity="0.3">
                    <animate attributeName="r" values="30;100;30" dur="4s" begin="1s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.3;0;0.3" dur="4s" begin="1s" repeatCount="indefinite" />
                  </circle>

                  {/* Labels */}
                  <text x="200" y="140" textAnchor="middle" fill="#1c1917" fontSize="10" fontWeight="bold">SIGNAL FLOWS FREELY</text>
                </svg>
              </div>

              {/* Spectrum */}
              <div className="max-w-md mb-12">
                <GPISpectrum score={2.0} size="lg" />
              </div>
            </div>
          </div>
        </section>

        {/* What It Feels Like */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto fade-up">
              <h2 className="text-3xl font-black mb-8">WHAT IT FEELS LIKE</h2>

              <div className="bg-stone-100 border border-stone-300 p-8 mb-8">
                <p className="text-xl text-stone-600 leading-relaxed mb-6">
                  You propose an idea on Monday. By Wednesday, someone's testing it. By Friday,
                  you know if it works. If it doesn't, you've already moved on. If it does,
                  it's shipping.
                </p>
                <p className="text-lg text-stone-500 leading-relaxed">
                  Information isn't power here. It's infrastructure. Everyone has access to the
                  same data. Your value isn't in what you know; it's in what you figure out.
                  The organization rewards pattern recognition, not political positioning.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-stone-200 p-6">
                  <h3 className="font-bold text-stone-900 mb-3">DECISIONS</h3>
                  <p className="text-stone-500">
                    Hours to days. Most decisions don't require executive approval.
                    Authority is distributed to those with context.
                  </p>
                </div>
                <div className="border border-stone-200 p-6">
                  <h3 className="font-bold text-stone-900 mb-3">ERRORS</h3>
                  <p className="text-stone-500">
                    Caught in days, fixed in hours. Blame-free post-mortems.
                    Mistakes are learning opportunities, not career-ending events.
                  </p>
                </div>
                <div className="border border-stone-200 p-6">
                  <h3 className="font-bold text-stone-900 mb-3">KNOWLEDGE</h3>
                  <p className="text-stone-500">
                    Documented and accessible. New hires can find answers.
                    The organization functions even when key people leave.
                  </p>
                </div>
                <div className="border border-stone-200 p-6">
                  <h3 className="font-bold text-stone-900 mb-3">CHANGE</h3>
                  <p className="text-stone-500">
                    Continuous and expected. Systems are modular and replaceable.
                    Pivots happen without massive restructuring.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Characteristics */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto fade-up">
              <h2 className="text-3xl font-black mb-8">FIELD STATE CHARACTERISTICS</h2>

              <div className="space-y-6">
                {characteristics.map((char, i) => (
                  <div key={i} className="border-l-4 border-stone-400 pl-6 py-2">
                    <h3 className="text-xl font-bold mb-2">{char.title}</h3>
                    <p className="text-stone-500">{char.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Company Examples */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto fade-up">
              <h2 className="text-3xl font-black mb-8">FIELD STATE EXAMPLES</h2>

              <div className="space-y-4">
                {companyExamples.map((company) => (
                  <div key={company.name} className="bg-stone-50 border border-stone-200 p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold">{company.name}</h3>
                      <span className="text-stone-900 font-mono font-bold text-xl">
                        GPI {company.gpi}
                      </span>
                    </div>
                    <p className="text-stone-500">{company.insight}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Diagnostic Signals */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto fade-up">
              <h2 className="text-3xl font-black mb-8">YOU'RE IN FIELD STATE IF...</h2>

              <div className="grid md:grid-cols-2 gap-4">
                {diagnosticSignals.map((signal, i) => (
                  <div key={i} className="flex items-start gap-3 bg-stone-100 border border-stone-200 p-4">
                    <span className="text-stone-900 font-bold">✓</span>
                    <span className="text-stone-600">{signal}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto fade-up">
              <h2 className="text-3xl font-black mb-8">INDUSTRIES THAT CLUSTER HERE</h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: 'Technology/Software', gpi: 1.5 },
                  { name: 'Professional Services', gpi: 3.0 },
                  { name: 'Shipping (Modern)', gpi: 3.9 },
                  { name: 'Media & Entertainment', gpi: 2.5 },
                ].map((industry) => (
                  <div key={industry.name} className="bg-stone-50 border border-stone-200 p-4 text-center">
                    <div className="text-2xl font-black text-stone-900 mb-1">{industry.gpi}</div>
                    <div className="text-sm text-stone-500">{industry.name}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 border border-stone-200">
                <h3 className="font-bold mb-3">WHY THESE INDUSTRIES?</h3>
                <p className="text-stone-500">
                  Field state organizations cluster in industries where digital transformation
                  has removed physical constraints, where knowledge is the primary asset, and
                  where competition punishes inefficiency rather than rewarding it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Transition Paths */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto fade-up">
              <h2 className="text-3xl font-black mb-8">STAYING IN FIELD STATE</h2>

              <div className="bg-stone-100 border border-stone-200 p-8">
                <p className="text-lg text-stone-600 mb-6">
                  Field state isn't permanent. Organizations calcify over time. The forces
                  that push toward particle state are constant:
                </p>
                <ul className="space-y-3 text-stone-500">
                  <li className="flex items-start gap-3">
                    <span className="text-stone-500">→</span>
                    <span>Success breeds process. What worked gets codified into rules.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-stone-500">→</span>
                    <span>Growth breeds hierarchy. More people means more coordination overhead.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-stone-500">→</span>
                    <span>Age breeds tradition. "How we've always done it" becomes doctrine.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-stone-500">→</span>
                    <span>Regulation breeds compliance. External rules create internal rigidity.</span>
                  </li>
                </ul>
                <p className="text-lg text-stone-600 mt-6">
                  Staying field requires constant vigilance. It's not a destination. It's a practice.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-24 px-6 border-t border-stone-200">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between gap-6">
              <Link
                href="/gpi-framework"
                className="border border-stone-300 px-8 py-4 text-sm font-semibold hover:border-stone-400 transition-colors text-center"
              >
                Back to Framework
              </Link>
              <Link
                href="/gpi-framework/transition-state"
                className="bg-stone-900 text-white px-8 py-4 text-sm font-semibold hover:bg-stone-800 transition-colors text-center"
              >
                Next: Transition State
              </Link>
            </div>
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

export default FieldStatePage;
