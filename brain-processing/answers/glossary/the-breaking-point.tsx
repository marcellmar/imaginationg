import type { NextPage } from 'next';
import Link from 'next/link';
import SEOHead from '../../../components/SEOHead';
import Navigation from '../../../components/Navigation';
import RelatedContent from '../../../components/RelatedContent';
import { ArrowLeft, CheckCircle } from 'lucide-react';

const BreakingPointPage: NextPage = () => {
  return (
    <>
      <SEOHead
        title="The Breaking Point - Maximum Pressure Before Transformation | IMAGINATION G"
        description="The Breaking Point is where systems either shatter or transform—the maximum pressure moment before particle state collapses or transforms to field state."
        ogType="article"
        ogImage="/images/og-answers.svg"
        article={{
          publishedTime: "2025-06-05T00:00:00Z",
          author: "IMAGINATION G"
        }}
      />

      <div className="min-h-screen bg-black text-white">
        <Navigation />

        {/* Hero Section */}
        <section className="pt-24 pb-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              {/* Breadcrumb */}
              <Link href="/answers" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8">
                <ArrowLeft size={16} />
                Back to Friction Patterns
              </Link>

              {/* System Status Badge */}
              <div className="inline-block mb-8 text-green-400 text-xs font-mono bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-full">
                <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                GPI DIMENSION: ALL DIMENSIONS • TRANSFORMATION POINT
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1]">
                THE BREAKING<br />POINT<span className="text-red-600">.</span>
              </h1>

              <p className="text-xl text-zinc-400 mb-8 max-w-2xl">
                Maximum pressure before transformation. Where particle state either collapses or transforms to field state.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Answer Section */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <div className="bg-zinc-950 border border-zinc-800 p-8 mb-12">
                <h2 className="text-2xl font-black mb-4 text-red-600">QUICK ANSWER</h2>
                <p className="text-lg leading-relaxed">
                  The Breaking Point is the critical pressure point where systems either shatter or
                  transform. It's the moment of maximum tension when old structures can no longer
                  hold and something must give—either breakthrough to field state or breakdown into chaos.
                </p>
              </div>

              {/* TL;DR Box */}
              <div className="bg-black border-2 border-yellow-500 p-8 mb-12">
                <h3 className="text-xl font-black text-yellow-500 mb-4">TL;DR</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 mt-0.5 flex-shrink-0" size={20} />
                    <span>Breaking Point = maximum pressure before GPI transformation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 mt-0.5 flex-shrink-0" size={20} />
                    <span>Systems either evolve to field state or collapse</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 mt-0.5 flex-shrink-0" size={20} />
                    <span>Can't be avoided, only navigated</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 mt-0.5 flex-shrink-0" size={20} />
                    <span>The birth moment of new organizational realities</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Deep Dive Section */}
        <section className="py-16 px-6 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-black mb-12">BREAKING POINT PHYSICS</h2>

              <div className="space-y-8">
                <div className="border border-zinc-800 p-8">
                  <h3 className="text-2xl font-black text-red-600 mb-4">PRESSURE ACCUMULATION</h3>
                  <p className="text-zinc-400 mb-4">
                    Systems resist change until pressure exceeds structural integrity. Each unresolved
                    dimension issue adds force. Each postponed decision increases load. The Breaking Point is inevitable.
                  </p>
                  <p className="text-sm text-zinc-500">
                    <strong>Timeline:</strong> Months to years of GPI climbing toward 10<br />
                    <strong>Warning:</strong> Often invisible until critical moment
                  </p>
                </div>

                <div className="border border-zinc-800 p-8">
                  <h3 className="text-2xl font-black text-red-600 mb-4">THE BREAKING MOMENT</h3>
                  <p className="text-zinc-400 mb-4">
                    Maximum pressure meets minimum stability. The system cannot maintain current form.
                    Time compresses. Options crystallize. Transformation or extinction—no middle ground.
                  </p>
                  <p className="text-sm text-zinc-500">
                    <strong>Duration:</strong> Hours to days<br />
                    <strong>Character:</strong> Extreme clarity amid chaos
                  </p>
                </div>

                <div className="border border-zinc-800 p-8">
                  <h3 className="text-2xl font-black text-red-600 mb-4">POST-BREAKING REALITY</h3>
                  <p className="text-zinc-400 mb-4">
                    New equilibrium emerges. Either the system transcended its limitations (field state breakthrough)
                    or collapsed under them (terminal particle state). Either way, return to previous state impossible.
                  </p>
                  <p className="text-sm text-zinc-500">
                    <strong>Breakthrough:</strong> GPI drops 3-5 points, field state characteristics emerge<br />
                    <strong>Breakdown:</strong> Components scatter, reform elsewhere
                  </p>
                </div>
              </div>

              {/* Pressure Gauge Visualization */}
              <div className="bg-zinc-950 border border-zinc-800 p-8 mt-12">
                <h3 className="text-xl font-black mb-6">GPI PRESSURE SCALE</h3>
                <div className="space-y-3 font-mono text-sm">
                  <div><span className="text-green-500">▓▓░░░░░░░░</span> GPI 1-3: Field state. No growth pressure</div>
                  <div><span className="text-yellow-500">▓▓▓▓▓░░░░░</span> GPI 4-6: Transition. Change becomes necessary</div>
                  <div><span className="text-orange-500">▓▓▓▓▓▓▓░░░</span> GPI 7-8: Particle state. Old systems failing</div>
                  <div><span className="text-red-600">▓▓▓▓▓▓▓▓▓▓</span> GPI 9-10: Breaking Point. Transform or die</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recognition Section */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-black mb-12">APPROACHING BREAKING POINT SIGNALS</h2>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="text-xl font-black mb-4 text-red-500">ORGANIZATIONAL SIGNALS</h3>
                  <ul className="space-y-3 text-zinc-400">
                    <li>• Everything feels impossibly hard</li>
                    <li>• Small problems trigger huge reactions</li>
                    <li>• Old solutions completely stop working</li>
                    <li>• Tension you can physically feel</li>
                    <li>• Sense of impending "something"</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-black mb-4 text-red-500">GPI DIMENSION SIGNALS</h3>
                  <ul className="space-y-3 text-zinc-400">
                    <li>• Decision Latency: Cascade failures from tiny triggers</li>
                    <li>• Structural Lock-In: Extreme polarization</li>
                    <li>• Talent Flow: Binary thinking dominates</li>
                    <li>• Knowledge Velocity: Time distortion (everything urgent)</li>
                    <li>• Error Correction: Middle ground evaporates</li>
                  </ul>
                </div>
              </div>

              {/* Types Box */}
              <div className="bg-black border border-zinc-800 p-8">
                <h3 className="text-xl font-black mb-6">TYPES OF BREAKING POINTS</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-black text-yellow-500 mb-2">GROWTH BREAKING POINT</h4>
                    <p className="text-zinc-400">Success creates pressure. Systems can't scale. Excellence demands field state evolution. Capital Intensity dimension often triggers this.</p>
                  </div>
                  <div>
                    <h4 className="font-black text-yellow-500 mb-2">CRISIS BREAKING POINT</h4>
                    <p className="text-zinc-400">External shock meets internal particle state. Survival requires transformation. All dimensions under simultaneous pressure.</p>
                  </div>
                  <div>
                    <h4 className="font-black text-yellow-500 mb-2">TRUTH BREAKING POINT</h4>
                    <p className="text-zinc-400">Hidden realities surface. Pretense becomes unsustainable. Masks must drop. Knowledge Location dimension often triggers this.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Section */}
        <section className="py-16 px-6 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-black mb-12">NAVIGATING THE BREAKING POINT</h2>

              <div className="space-y-6">
                <div className="flex gap-6 items-start">
                  <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">BEFORE</div>
                  <div className="flex-1">
                    <h4 className="font-black mb-2">Prepare for Pressure</h4>
                    <p className="text-zinc-400">Build resilience. Reduce GPI on controllable dimensions. Strengthen core. You can't prevent the Breaking Point, only prepare.</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">DURING</div>
                  <div className="flex-1">
                    <h4 className="font-black mb-2">Embrace the Chaos</h4>
                    <p className="text-zinc-400">Don't fight the pressure—use it. The Breaking Point provides energy for transformation to field state.</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">CHOICE</div>
                  <div className="flex-1">
                    <h4 className="font-black mb-2">Choose Breakthrough</h4>
                    <p className="text-zinc-400">At maximum pressure, choose evolution. Let particle state structures die so field state can emerge.</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">AFTER</div>
                  <div className="flex-1">
                    <h4 className="font-black mb-2">Stabilize New Form</h4>
                    <p className="text-zinc-400">Post-breaking systems are fragile. Protect and nurture until field state patterns solidify. Re-measure GPI at 30/60/90 days.</p>
                  </div>
                </div>
              </div>

              {/* Wisdom Box */}
              <div className="bg-black border-l-4 border-yellow-500 p-8 mt-12">
                <h3 className="text-xl font-black mb-4 text-yellow-500">BREAKING POINT WISDOM</h3>
                <p className="text-zinc-400 mb-4">
                  Organizations that fear the Breaking Point get breakdown. Those that embrace it get breakthrough.
                  The pressure is the same—the choice makes the difference.
                </p>
                <p className="text-zinc-400">
                  Every Breaking Point carries the seeds of your next level of existence. The question isn't
                  whether you'll face it, but whether you'll use it to reach field state.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-3xl font-black mb-6">READY FOR YOUR BREAKING POINT?</h3>
            <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              Transform pressure into power. Turn breakdown into breakthrough to field state.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/diagnostic"
                className="bg-red-600 px-8 py-4 text-lg font-black hover:bg-red-700 transition-colors"
              >
                MEASURE YOUR GPI
              </Link>
              <Link
                href="/answers"
                className="border-2 border-zinc-700 px-8 py-4 text-lg font-black hover:border-zinc-500 transition-colors"
              >
                EXPLORE MORE PATTERNS
              </Link>
            </div>
          </div>
        </section>

        {/* Related Content */}
        <section className="py-16 px-6 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <RelatedContent
              title="Related Friction Patterns"
              items={[
                {
                  href: "/answers/glossary/the-constraint-response",
                  title: "The Constraint Response",
                  description: "Your pattern for navigating Breaking Points. How you break through.",
                  color: "red"
                },
                {
                  href: "/answers/glossary/the-momentum-effect",
                  title: "The Momentum Effect",
                  description: "Field-state velocity needed to navigate Breaking Point moments.",
                  color: "yellow"
                },
                {
                  href: "/interventions/the-market-smackdown",
                  title: "Create Controlled Breaking Point",
                  description: "Force breakthrough before breakdown finds you.",
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

export default BreakingPointPage;
