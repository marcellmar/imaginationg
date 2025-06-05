import type { NextPage } from 'next';
import Link from 'next/link';
import SEOHead from '../../../components/SEOHead';
import Navigation from '../../../components/Navigation';
import RelatedContent from '../../../components/RelatedContent';
import { ArrowLeft, CheckCircle } from 'lucide-react';

const SorethPage: NextPage = () => {
  return (
    <>
      <SEOHead
        title="Soreth - Hidden Energy Drains | IMAGINATION G"
        description="Soreth represents hidden energy drains in systems—the invisible tax on every action. Learn to identify and eliminate these silent productivity killers."
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
                LEXICON: SORETH
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1]">
                SORETH<span className="text-red-600">.</span>
              </h1>
              
              <p className="text-xl text-zinc-400 mb-8 max-w-2xl">
                Hidden energy drains in systems. The invisible tax on every action.
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
                  Soreth (sore-eth) is the aggregate of invisible energy drains that tax every action 
                  in a system. It's not friction you can see—it's the thousand micro-resistances 
                  that make simple things exhausting and complex things impossible.
                </p>
              </div>

              {/* TL;DR Box */}
              <div className="bg-black border-2 border-yellow-500 p-8 mb-12">
                <h3 className="text-xl font-black text-yellow-500 mb-4">TL;DR</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 mt-0.5 flex-shrink-0" size={20} />
                    <span>Soreth = invisible energy vampires in systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 mt-0.5 flex-shrink-0" size={20} />
                    <span>Death by a thousand tiny cuts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 mt-0.5 flex-shrink-0" size={20} />
                    <span>Makes everything 10x harder than necessary</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 mt-0.5 flex-shrink-0" size={20} />
                    <span>Compounds silently until collapse</span>
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
              <h2 className="text-3xl font-black mb-12">TYPES OF SORETH</h2>
              
              <div className="space-y-8">
                <div className="border border-zinc-800 p-8">
                  <h3 className="text-2xl font-black text-red-600 mb-4">COGNITIVE SORETH</h3>
                  <p className="text-zinc-400 mb-4">
                    Mental energy drains from context switching, unclear priorities, decision fatigue. 
                    Every unmade decision, every ambiguous goal, every interruption compounds.
                  </p>
                  <p className="text-sm text-zinc-500">
                    <strong>Examples:</strong> Slack notifications, unclear ownership, "quick questions"<br />
                    <strong>Cost:</strong> 40-60% productivity loss
                  </p>
                </div>

                <div className="border border-zinc-800 p-8">
                  <h3 className="text-2xl font-black text-red-600 mb-4">PROCESS SORETH</h3>
                  <p className="text-zinc-400 mb-4">
                    Hidden taxes in workflows. The three approvals that could be one. The form that 
                    asks for information you already provided. The meeting before the meeting.
                  </p>
                  <p className="text-sm text-zinc-500">
                    <strong>Examples:</strong> Duplicate data entry, permission loops, status updates<br />
                    <strong>Cost:</strong> 2-5x time multiplication
                  </p>
                </div>

                <div className="border border-zinc-800 p-8">
                  <h3 className="text-2xl font-black text-red-600 mb-4">EMOTIONAL SORETH</h3>
                  <p className="text-zinc-400 mb-4">
                    Energy lost to organizational drama, unresolved conflicts, political navigation. 
                    The exhaustion of pretending, managing egos, walking on eggshells.
                  </p>
                  <p className="text-sm text-zinc-500">
                    <strong>Examples:</strong> Office politics, passive aggression, trust deficits<br />
                    <strong>Cost:</strong> Talent exodus, innovation death
                  </p>
                </div>

                <div className="border border-zinc-800 p-8">
                  <h3 className="text-2xl font-black text-red-600 mb-4">TECHNICAL SORETH</h3>
                  <p className="text-zinc-400 mb-4">
                    System inefficiencies that tax every interaction. Slow tools, broken integrations, 
                    manual workarounds for automated failures. Digital quicksand.
                  </p>
                  <p className="text-sm text-zinc-500">
                    <strong>Examples:</strong> Legacy systems, tool sprawl, "temporary" fixes<br />
                    <strong>Cost:</strong> Exponential as systems interconnect
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detection Section */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-black mb-12">SORETH DETECTION SIGNALS</h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="text-xl font-black mb-4 text-red-500">INDIVIDUAL SIGNALS</h3>
                  <ul className="space-y-3 text-zinc-400">
                    <li>• Exhausted but can't point to big tasks</li>
                    <li>• Simple things feel overwhelming</li>
                    <li>• Procrastination on "easy" items</li>
                    <li>• Energy crashes without clear cause</li>
                    <li>• Work feels like swimming in molasses</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-black mb-4 text-red-500">SYSTEM SIGNALS</h3>
                  <ul className="space-y-3 text-zinc-400">
                    <li>• Everything takes 3x estimated time</li>
                    <li>• High activity, low output</li>
                    <li>• People burn out doing "normal" work</li>
                    <li>• Simple changes require heroic effort</li>
                    <li>• Success feels unsustainable</li>
                  </ul>
                </div>
              </div>

              {/* Measurement Box */}
              <div className="bg-zinc-950 border border-zinc-800 p-8">
                <h3 className="text-xl font-black mb-6">THE SORETH MULTIPLIER</h3>
                <div className="space-y-4">
                  <p className="text-zinc-400">
                    <strong>Actual effort = Base effort × (1 + Soreth coefficient)</strong>
                  </p>
                  <p className="text-zinc-400">
                    Most organizations operate with a Soreth coefficient between 2x and 5x. 
                    This means every hour of "real work" requires 3-6 hours of total effort.
                  </p>
                  <p className="text-sm text-red-600">
                    <strong>Critical insight:</strong> Reducing Soreth by 50% doubles effective capacity 
                    without hiring, without overtime, without burnout.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Elimination Section */}
        <section className="py-16 px-6 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-black mb-12">SORETH ELIMINATION PROTOCOL</h2>
              
              <div className="space-y-6">
                <div className="flex gap-6 items-start">
                  <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">STEP 1</div>
                  <div className="flex-1">
                    <h4 className="font-black mb-2">Energy Audit</h4>
                    <p className="text-zinc-400">Track where energy actually goes vs. where value is created.</p>
                  </div>
                </div>
                
                <div className="flex gap-6 items-start">
                  <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">STEP 2</div>
                  <div className="flex-1">
                    <h4 className="font-black mb-2">Identify Vampires</h4>
                    <p className="text-zinc-400">Find the processes, people, and systems that drain without giving.</p>
                  </div>
                </div>
                
                <div className="flex gap-6 items-start">
                  <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">STEP 3</div>
                  <div className="flex-1">
                    <h4 className="font-black mb-2">Ruthless Elimination</h4>
                    <p className="text-zinc-400">Delete before optimizing. Question before accepting.</p>
                  </div>
                </div>
                
                <div className="flex gap-6 items-start">
                  <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">STEP 4</div>
                  <div className="flex-1">
                    <h4 className="font-black mb-2">Protect the Gains</h4>
                    <p className="text-zinc-400">Soreth grows back. Build systems to keep it out.</p>
                  </div>
                </div>
              </div>

              {/* Warning Box */}
              <div className="bg-black border-l-4 border-red-600 p-8 mt-12">
                <h3 className="text-xl font-black mb-4 text-red-600">SORETH LAW</h3>
                <p className="text-zinc-400">
                  Soreth is attracted to success. The more you achieve, the more energy vampires appear. 
                  Organizations that don't actively fight Soreth will eventually be consumed by it, 
                  no matter how successful they appear.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-3xl font-black mb-6">ELIMINATE YOUR SORETH</h3>
            <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              Stop bleeding energy into the void. Start moving without invisible resistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/services/ecosystem-map"
                className="bg-red-600 px-8 py-4 text-lg font-black hover:bg-red-700 transition-colors"
              >
                MAP YOUR ENERGY DRAINS
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
                  href: "/answers/glossary/kithara",
                  title: "Kithara State",
                  description: "False harmony hiding energy drains. The comfort trap.",
                  color: "red"
                },
                {
                  href: "/answers/glossary/threnn",
                  title: "Threnn Principle",
                  description: "Momentum multiplication. The opposite of Soreth.",
                  color: "yellow"
                },
                {
                  href: "/interventions/movement-sprint",
                  title: "Soreth Elimination Sprint",
                  description: "7 days to cut your energy tax in half.",
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

export default SorethPage;