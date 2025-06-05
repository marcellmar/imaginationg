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
                Back to Answers
              </Link>

              {/* System Status Badge */}
              <div className="inline-block mb-8 text-green-400 text-xs font-mono bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-full">
                <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                LEXICON: MORRIN
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1]">
                MORRIN<span className="text-red-600">.</span>
              </h1>
              
              <p className="text-xl text-zinc-400 mb-8 max-w-2xl">
                Post-choice existence. The moment aligned action begins.
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
                  Morrin (mor-rin) is the state that exists after true choice—when all other options dissolve 
                  and only forward movement remains. It's not determination or willpower. It's the physics of 
                  collapsed possibility creating singular momentum.
                </p>
              </div>

              {/* TL;DR Box */}
              <div className="bg-black border-2 border-yellow-500 p-8 mb-12">
                <h3 className="text-xl font-black text-yellow-500 mb-4">TL;DR</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 mt-0.5 flex-shrink-0" size={20} />
                    <span>Morrin = the state after real choice is made</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 mt-0.5 flex-shrink-0" size={20} />
                    <span>Not motivation—it's collapsed optionality</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 mt-0.5 flex-shrink-0" size={20} />
                    <span>Creates unstoppable forward momentum</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 mt-0.5 flex-shrink-0" size={20} />
                    <span>Can't be faked or forced—only entered</span>
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

        {/* CTA Section */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-3xl font-black mb-6">READY FOR MORRIN?</h3>
            <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              Stop negotiating with yourself. Make the choice that ends all choosing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/interventions/the-naming"
                className="bg-red-600 px-8 py-4 text-lg font-black hover:bg-red-700 transition-colors"
              >
                ENTER MORRIN STATE
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