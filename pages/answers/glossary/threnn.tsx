import type { NextPage } from 'next';
import Link from 'next/link';
import SEOHead from '../../../components/SEOHead';
import Navigation from '../../../components/Navigation';
import RelatedContent from '../../../components/RelatedContent';
import { ArrowLeft, CheckCircle } from 'lucide-react';

const ThrennPage: NextPage = () => {
  return (
    <>
      <SEOHead
        title="Threnn - Momentum Multiplication | IMAGINATION G"
        description="Threnn is the momentum multiplication effect when aligned systems compound force. Learn how to create unstoppable organizational velocity."
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
                LEXICON: THRENN
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1]">
                THRENN<span className="text-red-600">.</span>
              </h1>
              
              <p className="text-xl text-zinc-400 mb-8 max-w-2xl">
                Momentum multiplication effect. When aligned systems compound force.
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
                  Threnn (thren) is the exponential force multiplication that occurs when systems align 
                  perfectly. It's not addition—it's multiplication. When true threnn kicks in, 
                  1+1 doesn't equal 2. It equals 10.
                </p>
              </div>

              {/* TL;DR Box */}
              <div className="bg-black border-2 border-yellow-500 p-8 mb-12">
                <h3 className="text-xl font-black text-yellow-500 mb-4">TL;DR</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 mt-0.5 flex-shrink-0" size={20} />
                    <span>Threnn = momentum that multiplies instead of adds</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 mt-0.5 flex-shrink-0" size={20} />
                    <span>Requires perfect system alignment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 mt-0.5 flex-shrink-0" size={20} />
                    <span>Small inputs create massive outputs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 mt-0.5 flex-shrink-0" size={20} />
                    <span>The physics of unstoppable organizations</span>
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
              <h2 className="text-3xl font-black mb-12">THE THRENN EQUATION</h2>
              
              <div className="space-y-8">
                <div className="border border-zinc-800 p-8">
                  <h3 className="text-2xl font-black text-red-600 mb-4">LINEAR MOMENTUM (NORMAL)</h3>
                  <p className="text-zinc-400 mb-4">
                    Traditional organizations add effort linearly. Ten people produce ten units of work. 
                    Double the input, double the output. Predictable, limited, exhausting.
                  </p>
                  <p className="text-sm text-zinc-500">
                    <strong>Formula:</strong> Output = Input × 1<br />
                    <strong>Reality:</strong> Actually less due to coordination costs
                  </p>
                </div>

                <div className="border border-zinc-800 p-8">
                  <h3 className="text-2xl font-black text-red-600 mb-4">THRENN MOMENTUM (EXPONENTIAL)</h3>
                  <p className="text-zinc-400 mb-4">
                    When systems achieve threnn, output compounds. Each action amplifies the next. 
                    Success creates more success. Movement generates its own energy.
                  </p>
                  <p className="text-sm text-zinc-500">
                    <strong>Formula:</strong> Output = Input ^ Alignment<br />
                    <strong>Reality:</strong> 10x results with same resources
                  </p>
                </div>

                <div className="border border-zinc-800 p-8">
                  <h3 className="text-2xl font-black text-red-600 mb-4">THE ALIGNMENT FACTOR</h3>
                  <p className="text-zinc-400 mb-4">
                    Threnn requires three alignments: Direction (everyone moving same way), 
                    Timing (movements synchronized), and Energy (no internal friction).
                  </p>
                  <p className="text-sm text-zinc-500">
                    <strong>Miss one:</strong> Linear growth at best<br />
                    <strong>Hit all three:</strong> Exponential explosion
                  </p>
                </div>
              </div>

              {/* Physics Visualization */}
              <div className="bg-zinc-950 border border-zinc-800 p-8 mt-12">
                <h3 className="text-xl font-black mb-6">THRENN MULTIPLICATION EFFECT</h3>
                <div className="font-mono text-sm space-y-2">
                  <div>MISALIGNED:  →  ←  ↑  ↓  = CANCEL OUT</div>
                  <div className="text-zinc-600">Forces work against each other</div>
                  <div className="mt-4">ALIGNED:     →  →  →  →  = MULTIPLY</div>
                  <div className="text-green-500">Forces compound exponentially</div>
                  <div className="mt-4 text-yellow-500">THRENN:      →→→→→→→→ = UNSTOPPABLE</div>
                  <div className="text-zinc-400">Organization becomes self-propelling</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Examples Section */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-black mb-12">THRENN IN ACTION</h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="text-xl font-black mb-4 text-green-500">STARTUP THRENN</h3>
                  <ul className="space-y-3 text-zinc-400">
                    <li>• Product-market fit clicks</li>
                    <li>• Team hits flow state</li>
                    <li>• Customers become evangelists</li>
                    <li>• Growth feeds growth</li>
                    <li>• Momentum becomes magnetic</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-black mb-4 text-green-500">MARKET THRENN</h3>
                  <ul className="space-y-3 text-zinc-400">
                    <li>• Timing meets technology</li>
                    <li>• Adoption hits critical mass</li>
                    <li>• Network effects activate</li>
                    <li>• Competition becomes irrelevant</li>
                    <li>• Category gets redefined</li>
                  </ul>
                </div>
              </div>

              {/* Case Study Box */}
              <div className="bg-black border border-zinc-800 p-8">
                <h3 className="text-xl font-black mb-4">THRENN CASE STUDY: THE 10X TEAM</h3>
                <p className="text-zinc-400 mb-4">
                  <strong>Situation:</strong> 5-person team competing against 50-person incumbents
                </p>
                <p className="text-zinc-400 mb-4">
                  <strong>Threnn Factors:</strong>
                </p>
                <ul className="space-y-2 ml-6 text-zinc-400">
                  <li>• Perfect role alignment (each person in their nexel)</li>
                  <li>• Zero internal friction (no politics, no process debt)</li>
                  <li>• Shared morrin state (all chose the mission completely)</li>
                  <li>• Daily momentum rituals (success compounds daily)</li>
                </ul>
                <p className="text-zinc-400 mt-4">
                  <strong>Result:</strong> Shipped more in 6 months than competitors in 2 years. 
                  Acquired for 9 figures.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Creating Threnn Section */}
        <section className="py-16 px-6 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-black mb-12">ENGINEERING THRENN</h2>
              
              <div className="space-y-6">
                <div className="flex gap-6 items-start">
                  <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">PHASE 1</div>
                  <div className="flex-1">
                    <h4 className="font-black mb-2">Eliminate Soreth</h4>
                    <p className="text-zinc-400">Remove all energy drains. Can't multiply from negative.</p>
                  </div>
                </div>
                
                <div className="flex gap-6 items-start">
                  <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">PHASE 2</div>
                  <div className="flex-1">
                    <h4 className="font-black mb-2">Achieve Direction Alignment</h4>
                    <p className="text-zinc-400">Everyone moving toward same point. No divergence.</p>
                  </div>
                </div>
                
                <div className="flex gap-6 items-start">
                  <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">PHASE 3</div>
                  <div className="flex-1">
                    <h4 className="font-black mb-2">Synchronize Timing</h4>
                    <p className="text-zinc-400">Actions coordinated. Rhythms matched. Pulses aligned.</p>
                  </div>
                </div>
                
                <div className="flex gap-6 items-start">
                  <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">PHASE 4</div>
                  <div className="flex-1">
                    <h4 className="font-black mb-2">Feed the Momentum</h4>
                    <p className="text-zinc-400">Small wins compound. Success rituals. Daily progress.</p>
                  </div>
                </div>
              </div>

              {/* Critical Warning */}
              <div className="bg-black border-l-4 border-red-600 p-8 mt-12">
                <h3 className="text-xl font-black mb-4 text-red-600">THRENN WARNING</h3>
                <p className="text-zinc-400">
                  Threnn is fragile in early stages. One misaligned element can collapse the entire 
                  multiplication effect. Protect threnn conditions zealously until momentum becomes 
                  self-sustaining. Then nothing can stop it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-3xl font-black mb-6">CREATE YOUR THRENN</h3>
            <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              Stop adding effort linearly. Start multiplying momentum exponentially.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/services/movement-sprint"
                className="bg-red-600 px-8 py-4 text-lg font-black hover:bg-red-700 transition-colors"
              >
                ACTIVATE THRENN STATE
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
                  title: "Morrin State",
                  description: "Post-choice existence. The prerequisite for threnn.",
                  color: "red"
                },
                {
                  href: "/answers/glossary/soreth",
                  title: "Eliminate Soreth",
                  description: "Remove energy drains before attempting threnn.",
                  color: "yellow"
                },
                {
                  href: "/interventions/thirty-day-drift-break",
                  title: "30-Day Threnn Lock",
                  description: "Force your organization into momentum multiplication.",
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

export default ThrennPage;