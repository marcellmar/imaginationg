import type { NextPage } from 'next';
import Link from 'next/link';
import SEOHead from '../../../components/SEOHead';
import Navigation from '../../../components/Navigation';
import RelatedContent from '../../../components/RelatedContent';
import { ArrowLeft, CheckCircle } from 'lucide-react';

const MorrinPage: NextPage = () => {
  return (
    <>
      <SEOHead
        title="Morrin - Post-Choice Existence | IMAGINATION G"
        description="Morrin is the state of post-choice existence—where movement begins after decision crystallizes. Learn why choice creates reality and how to enter morrin state."
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
                Back to Pattern Breakdown
              </Link>

              {/* System Status Badge */}
              <div className="inline-block mb-8 text-green-400 text-xs font-mono bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-full">
                <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                PORTAL: MORRIN
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1]">
                MORRIN<span className="text-red-600">.</span>
              </h1>
              
              <p className="text-xl text-zinc-400 mb-12 max-w-2xl">
                Post-choice existence. The moment aligned action begins.
              </p>

              {/* Portal Navigation */}
              <div className="border border-zinc-800 bg-zinc-950">
                <div className="flex border-b border-zinc-800 overflow-x-auto">
                  <div className="px-6 py-4 bg-red-600 text-white font-bold whitespace-nowrap">
                    MORRIN ACTIVATION
                  </div>
                  <Link href="/answers" className="px-6 py-4 font-bold transition-colors whitespace-nowrap text-zinc-400 hover:text-white hover:bg-zinc-900">
                    PATTERN HUB
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portal Content Section */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              
              {/* Morrin State Portal */}
              <div className="bg-black border-2 border-red-600 p-8 mb-8">
                <h2 className="text-2xl font-black mb-4 text-red-600">MORRIN STATE DETECTION</h2>
                <p className="text-lg leading-relaxed mb-6">
                  Morrin is when you stop choosing and start moving. No more "should I?" or "what if?" 
                  Just action. You know people in morrin—they execute without hesitation, momentum without motivation. 
                  The path becomes obvious because all other paths disappeared.
                </p>
                
                {/* State Indicators */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border border-zinc-700 p-4">
                    <h4 className="font-bold text-red-400 mb-2">Choice Crystallization</h4>
                    <p className="text-sm text-zinc-400">Decision finalized, action begins</p>
                  </div>
                  <div className="border border-zinc-700 p-4">
                    <h4 className="font-bold text-red-400 mb-2">Execution Mode</h4>
                    <p className="text-sm text-zinc-400">No "what if" thoughts, just movement</p>
                  </div>
                  <div className="border border-zinc-700 p-4">
                    <h4 className="font-bold text-red-400 mb-2">Inevitable Flow</h4>
                    <p className="text-sm text-zinc-400">Movement feels natural, not forced</p>
                  </div>
                  <div className="border border-zinc-700 p-4">
                    <h4 className="font-bold text-red-400 mb-2">Authentic State</h4>
                    <p className="text-sm text-zinc-400">Cannot be faked or manufactured</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Deep Dive Section */}
        <section className="py-16 px-6 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-black mb-12">THE PHYSICS OF MORRIN</h2>
              
              <div className="space-y-8">
                <div className="border border-zinc-800 p-8">
                  <h3 className="text-2xl font-black text-red-600 mb-4">BEFORE MORRIN</h3>
                  <p className="text-zinc-400 mb-4">
                    Multiple paths exist. Energy disperses across possibilities. Movement feels heavy 
                    because you're dragging unlived choices behind you.
                  </p>
                  <p className="text-sm text-zinc-500">
                    <strong>Symptoms:</strong> Analysis paralysis, optimization loops, false starts
                  </p>
                </div>

                <div className="border border-zinc-800 p-8">
                  <h3 className="text-2xl font-black text-red-600 mb-4">THE MORRIN MOMENT</h3>
                  <p className="text-zinc-400 mb-4">
                    Choice crystallizes. All paths but one evaporate. What seemed like options 
                    reveal themselves as illusions. Only the real remains.
                  </p>
                  <p className="text-sm text-zinc-500">
                    <strong>Experience:</strong> Sudden clarity, irreversible knowing, path emergence
                  </p>
                </div>

                <div className="border border-zinc-800 p-8">
                  <h3 className="text-2xl font-black text-red-600 mb-4">IN MORRIN STATE</h3>
                  <p className="text-zinc-400 mb-4">
                    Movement becomes frictionless. Not because obstacles disappear, but because 
                    hesitation does. Every action aligns. Every step compounds.
                  </p>
                  <p className="text-sm text-zinc-500">
                    <strong>Reality:</strong> Effortless execution, natural momentum, inevitable progress
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recognition Section */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-black mb-12">RECOGNIZING MORRIN</h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="text-xl font-black mb-4 text-green-500">TRUE MORRIN</h3>
                  <ul className="space-y-3 text-zinc-400">
                    <li>• No internal negotiation</li>
                    <li>• Actions feel inevitable</li>
                    <li>• Obstacles become fuel</li>
                    <li>• Time distortion (flow state)</li>
                    <li>• Zero need for motivation</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-black mb-4 text-red-500">FALSE MORRIN</h3>
                  <ul className="space-y-3 text-zinc-400">
                    <li>• Requires constant reinforcement</li>
                    <li>• Feels like pushing</li>
                    <li>• Obstacles create doubt</li>
                    <li>• Time feels heavy</li>
                    <li>• Needs external validation</li>
                  </ul>
                </div>
              </div>

              {/* Warning Box */}
              <div className="bg-zinc-950 border-l-4 border-red-600 p-8">
                <h3 className="text-xl font-black mb-4 text-red-600">CRITICAL WARNING</h3>
                <p className="text-zinc-400">
                  You cannot will yourself into morrin. You cannot optimize into morrin. 
                  You cannot strategize into morrin. You can only choose so completely that 
                  all other paths cease to exist.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Application Section */}
        <section className="py-16 px-6 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-black mb-12">ENTERING MORRIN STATE</h2>
              
              <div className="space-y-6">
                <div className="flex gap-6 items-start">
                  <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">STEP 1</div>
                  <div className="flex-1">
                    <h4 className="font-black mb-2">Surface the Buried Truth</h4>
                    <p className="text-zinc-400">What you've been building around instead of from.</p>
                  </div>
                </div>
                
                <div className="flex gap-6 items-start">
                  <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">STEP 2</div>
                  <div className="flex-1">
                    <h4 className="font-black mb-2">Name the Real Choice</h4>
                    <p className="text-zinc-400">Not what you should do. What you must do.</p>
                  </div>
                </div>
                
                <div className="flex gap-6 items-start">
                  <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">STEP 3</div>
                  <div className="flex-1">
                    <h4 className="font-black mb-2">Collapse the Options</h4>
                    <p className="text-zinc-400">Make the choice so completely that retreat becomes impossible.</p>
                  </div>
                </div>
                
                <div className="flex gap-6 items-start">
                  <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">STEP 4</div>
                  <div className="flex-1">
                    <h4 className="font-black mb-2">Move</h4>
                    <p className="text-zinc-400">Not because you're motivated. Because no other reality exists.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portal Action Section */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              
              {/* Action Framework */}
              <div className="bg-black border-2 border-red-600 p-8 mb-8">
                <h3 className="text-2xl font-black mb-4 text-red-600">MORRIN ACTIVATION PROTOCOL</h3>
                <p className="text-lg mb-6">
                  Stop negotiating with yourself. Make the choice that ends all choosing.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-white mb-3">ENTRY CONDITIONS</h4>
                    <ul className="space-y-2 text-zinc-400">
                      <li>• Surface the buried truth</li>
                      <li>• Name the real choice</li>
                      <li>• Collapse all options</li>
                      <li>• Commit completely</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-3">SUSTAINED MOVEMENT</h4>
                    <ul className="space-y-2 text-zinc-400">
                      <li>• Trust the process</li>
                      <li>• Execute without hesitation</li>
                      <li>• Ignore alternative paths</li>
                      <li>• Let momentum build</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Portal CTAs */}
              <div className="text-center">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/interventions/the-naming"
                    className="bg-red-600 px-8 py-4 text-lg font-black hover:bg-red-700 transition-colors"
                  >
                    ENTER MORRIN STATE
                  </Link>
                  <Link 
                    href="/interventions"
                    className="border-2 border-red-600 px-8 py-4 text-lg font-black hover:bg-red-600 transition-colors"
                  >
                    DEPLOY INTERVENTION
                  </Link>
                </div>
              </div>
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
                  href: "/answers/glossary/nexel",
                  title: "Discover Your Nexel",
                  description: "Your behavioral identity marker. How you move through constraint.",
                  color: "red"
                },
                {
                  href: "/answers/glossary/threnn",
                  title: "The Threnn Principle",
                  description: "Momentum multiplication through aligned systems. Post-morrin physics.",
                  color: "yellow"
                },
                {
                  href: "/interventions/thirty-day-drift-break",
                  title: "30-Day Morrin Lock",
                  description: "Force yourself into morrin state. No escape routes.",
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

export default MorrinPage;