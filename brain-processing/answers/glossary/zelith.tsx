import type { NextPage } from 'next';
import Link from 'next/link';
import SEOHead from '../../../components/SEOHead';
import Navigation from '../../../components/Navigation';
import RelatedContent from '../../../components/RelatedContent';
import { ArrowLeft, CheckCircle } from 'lucide-react';

const ZelithPage: NextPage = () => {
  return (
    <>
      <SEOHead
        title="Zelith - Maximum Pressure Point | IMAGINATION G"
        description="Zelith is the point of system collapse or breakthrough—the maximum pressure moment. Learn to recognize and navigate these critical transformation points."
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
                Back to Answers
              </Link>

              {/* System Status Badge */}
              <div className="inline-block mb-8 text-green-400 text-xs font-mono bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-full">
                <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                LEXICON: ZELITH
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1]">
                ZELITH<span className="text-red-600">.</span>
              </h1>
              
              <p className="text-xl text-zinc-400 mb-8 max-w-2xl">
                The point of system collapse or breakthrough. Maximum pressure moment.
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
                  Zelith (zeh-lith) is the critical pressure point where systems either shatter or 
                  transform. It's the moment of maximum tension when old structures can no longer 
                  hold and something must give—either breakthrough or breakdown.
                </p>
              </div>

              {/* TL;DR Box */}
              <div className="bg-black border-2 border-yellow-500 p-8 mb-12">
                <h3 className="text-xl font-black text-yellow-500 mb-4">TL;DR</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 mt-0.5 flex-shrink-0" size={20} />
                    <span>Zelith = maximum pressure before transformation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 mt-0.5 flex-shrink-0" size={20} />
                    <span>Systems either evolve or die at zelith</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 mt-0.5 flex-shrink-0" size={20} />
                    <span>Can't be avoided, only navigated</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 mt-0.5 flex-shrink-0" size={20} />
                    <span>The birth moment of new realities</span>
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
              <h2 className="text-3xl font-black mb-12">ZELITH PHYSICS</h2>
              
              <div className="space-y-8">
                <div className="border border-zinc-800 p-8">
                  <h3 className="text-2xl font-black text-red-600 mb-4">PRESSURE ACCUMULATION</h3>
                  <p className="text-zinc-400 mb-4">
                    Systems resist change until pressure exceeds structural integrity. Each unresolved 
                    tension adds force. Each postponed decision increases load. Zelith is inevitable.
                  </p>
                  <p className="text-sm text-zinc-500">
                    <strong>Timeline:</strong> Months to years of building pressure<br />
                    <strong>Warning:</strong> Often invisible until critical moment
                  </p>
                </div>

                <div className="border border-zinc-800 p-8">
                  <h3 className="text-2xl font-black text-red-600 mb-4">THE ZELITH MOMENT</h3>
                  <p className="text-zinc-400 mb-4">
                    Maximum pressure meets minimum stability. The system cannot maintain current form. 
                    Time compresses. Options crystallize. Evolution or extinction—no middle ground.
                  </p>
                  <p className="text-sm text-zinc-500">
                    <strong>Duration:</strong> Hours to days<br />
                    <strong>Character:</strong> Extreme clarity amid chaos
                  </p>
                </div>

                <div className="border border-zinc-800 p-8">
                  <h3 className="text-2xl font-black text-red-600 mb-4">POST-ZELITH REALITY</h3>
                  <p className="text-zinc-400 mb-4">
                    New equilibrium emerges. Either the system transcended its limitations (breakthrough) 
                    or collapsed under them (breakdown). Either way, return to previous state impossible.
                  </p>
                  <p className="text-sm text-zinc-500">
                    <strong>Breakthrough:</strong> 10x stronger than before<br />
                    <strong>Breakdown:</strong> Components scatter, reform elsewhere
                  </p>
                </div>
              </div>

              {/* Pressure Gauge Visualization */}
              <div className="bg-zinc-950 border border-zinc-800 p-8 mt-12">
                <h3 className="text-xl font-black mb-6">ZELITH PRESSURE SCALE</h3>
                <div className="space-y-3 font-mono text-sm">
                  <div><span className="text-green-500">▓▓░░░░░░░░</span> COMFORTABLE: No growth pressure</div>
                  <div><span className="text-yellow-500">▓▓▓▓▓░░░░░</span> STRESSED: Change becomes necessary</div>
                  <div><span className="text-orange-500">▓▓▓▓▓▓▓░░░</span> CRITICAL: Old systems failing</div>
                  <div><span className="text-red-600">▓▓▓▓▓▓▓▓▓▓</span> ZELITH: Transform or die</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recognition Section */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-black mb-12">APPROACHING ZELITH SIGNALS</h2>
              
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
                  <h3 className="text-xl font-black mb-4 text-red-500">SYSTEM SIGNALS</h3>
                  <ul className="space-y-3 text-zinc-400">
                    <li>• Cascade failures from tiny triggers</li>
                    <li>• Extreme polarization of opinions</li>
                    <li>• Time distortion (everything urgent)</li>
                    <li>• Binary thinking dominates</li>
                    <li>• Middle ground evaporates</li>
                  </ul>
                </div>
              </div>

              {/* Types Box */}
              <div className="bg-black border border-zinc-800 p-8">
                <h3 className="text-xl font-black mb-6">TYPES OF ZELITH</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-black text-yellow-500 mb-2">GROWTH ZELITH</h4>
                    <p className="text-zinc-400">Success creates pressure. Systems can't scale. Excellence demands evolution.</p>
                  </div>
                  <div>
                    <h4 className="font-black text-yellow-500 mb-2">CRISIS ZELITH</h4>
                    <p className="text-zinc-400">External shock meets internal weakness. Survival requires transformation.</p>
                  </div>
                  <div>
                    <h4 className="font-black text-yellow-500 mb-2">TRUTH ZELITH</h4>
                    <p className="text-zinc-400">Hidden realities surface. Pretense becomes unsustainable. Masks must drop.</p>
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
              <h2 className="text-3xl font-black mb-12">NAVIGATING ZELITH</h2>
              
              <div className="space-y-6">
                <div className="flex gap-6 items-start">
                  <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">BEFORE</div>
                  <div className="flex-1">
                    <h4 className="font-black mb-2">Prepare for Pressure</h4>
                    <p className="text-zinc-400">Build resilience. Remove quorr. Strengthen core. You can't prevent zelith, only prepare.</p>
                  </div>
                </div>
                
                <div className="flex gap-6 items-start">
                  <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">DURING</div>
                  <div className="flex-1">
                    <h4 className="font-black mb-2">Embrace the Chaos</h4>
                    <p className="text-zinc-400">Don't fight the pressure—use it. Zelith provides energy for transformation.</p>
                  </div>
                </div>
                
                <div className="flex gap-6 items-start">
                  <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">CHOICE</div>
                  <div className="flex-1">
                    <h4 className="font-black mb-2">Choose Breakthrough</h4>
                    <p className="text-zinc-400">At maximum pressure, choose evolution. Let old structures die so new ones can emerge.</p>
                  </div>
                </div>
                
                <div className="flex gap-6 items-start">
                  <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">AFTER</div>
                  <div className="flex-1">
                    <h4 className="font-black mb-2">Stabilize New Form</h4>
                    <p className="text-zinc-400">Post-zelith systems are fragile. Protect and nurture until new patterns solidify.</p>
                  </div>
                </div>
              </div>

              {/* Wisdom Box */}
              <div className="bg-black border-l-4 border-yellow-500 p-8 mt-12">
                <h3 className="text-xl font-black mb-4 text-yellow-500">ZELITH WISDOM</h3>
                <p className="text-zinc-400 mb-4">
                  Organizations that fear zelith get breakdown. Those that embrace it get breakthrough. 
                  The pressure is the same—the choice makes the difference.
                </p>
                <p className="text-zinc-400">
                  Every zelith carries the seeds of your next level of existence. The question isn't 
                  whether you'll face it, but whether you'll waste it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-3xl font-black mb-6">READY FOR ZELITH?</h3>
            <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              Transform pressure into power. Turn breakdown into breakthrough.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/services/clarity-catalyst-call"
                className="bg-red-600 px-8 py-4 text-lg font-black hover:bg-red-700 transition-colors"
              >
                NAVIGATE YOUR ZELITH
              </Link>
              <Link 
                href="/answers"
                className="border-2 border-zinc-700 px-8 py-4 text-lg font-black hover:border-zinc-500 transition-colors"
              >
                EXPLORE MORE CONCEPTS
              </Link>
            </div>
          </div>
        </section>

        {/* Related Content */}
        <section className="py-16 px-6 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <RelatedContent
              title="Related Concepts"
              items={[
                {
                  href: "/answers/glossary/morrin",
                  title: "Enter Morrin State",
                  description: "Post-choice existence. Often triggered by zelith pressure.",
                  color: "red"
                },
                {
                  href: "/answers/glossary/voxel",
                  title: "Voxel Thinking",
                  description: "Three-dimensional truth needed to navigate zelith moments.",
                  color: "yellow"
                },
                {
                  href: "/interventions/the-market-smackdown",
                  title: "Create Controlled Zelith",
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

export default ZelithPage;