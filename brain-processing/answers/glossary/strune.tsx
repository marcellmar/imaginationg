import type { NextPage } from 'next';
import Link from 'next/link';
import SEOHead from '../../../components/SEOHead';
import Navigation from '../../../components/Navigation';
import RelatedContent from '../../../components/RelatedContent';
import { ArrowLeft, CheckCircle } from 'lucide-react';

const StrunePage: NextPage = () => {
  return (
    <>
      <SEOHead
        title="Strune - Reality Filtration | IMAGINATION G"
        description="Strune is the precise cut that removes noise and reveals what actually matters. Learn to filter signal from static."
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
                PORTAL: STRUNE
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1]">
                STRUNE<span className="text-red-600">.</span>
              </h1>
              
              <p className="text-xl text-zinc-400 mb-12 max-w-2xl">
                Reality filtration. The precise cut that removes noise and reveals what actually matters.
              </p>

              {/* Portal Navigation */}
              <div className="border border-zinc-800 bg-zinc-950">
                <div className="flex border-b border-zinc-800 overflow-x-auto">
                  <div className="px-6 py-4 bg-red-600 text-white font-bold whitespace-nowrap">
                    STRUNE ELIMINATION
                  </div>
                  <Link href="/answers" className="px-6 py-4 font-bold transition-colors whitespace-nowrap text-zinc-400 hover:text-white hover:bg-zinc-900">
                    PATTERN HUB
                  </Link>
                </div>
              </div>
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
                  Strune is your ability to cut through noise and see what's real. Some people hear 100 opinions and get confused. 
                  Others filter down to the 3 facts that matter. Strune is precision. One clean cut instead of messy hacking.
                </p>
              </div>

              {/* TL;DR Box */}
              <div className="bg-black border-2 border-yellow-500 p-8 mb-12">
                <h3 className="text-xl font-black text-yellow-500 mb-4">TL;DR</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 mt-0.5 flex-shrink-0" size={20} />
                    <span>Strune = your reality filtration system</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 mt-0.5 flex-shrink-0" size={20} />
                    <span>High strune = cut through noise instantly</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 mt-0.5 flex-shrink-0" size={20} />
                    <span>Low strune = drowning in information</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 mt-0.5 flex-shrink-0" size={20} />
                    <span>One precise cut beats endless analysis</span>
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
              <h2 className="text-3xl font-black mb-12">COMMON STRUNE PATTERNS</h2>
              
              <div className="space-y-8">
                <div className="border border-zinc-800 p-8">
                  <h3 className="text-2xl font-black text-red-600 mb-4">PROCESS STRUNE</h3>
                  <p className="text-zinc-400 mb-4">
                    Creating processes to fix problems caused by too many processes. Each new system 
                    adds friction to solve friction from the last system.
                  </p>
                  <p className="text-sm text-zinc-500">
                    <strong>Example:</strong> Approval chains that create the delays they're meant to prevent<br />
                    <strong>Solution:</strong> Delete, don't add
                  </p>
                </div>

                <div className="border border-zinc-800 p-8">
                  <h3 className="text-2xl font-black text-red-600 mb-4">COMMUNICATION STRUNE</h3>
                  <p className="text-zinc-400 mb-4">
                    More meetings to discuss why nothing gets done. More channels to coordinate 
                    fragmented communication. More updates about lack of progress.
                  </p>
                  <p className="text-sm text-zinc-500">
                    <strong>Example:</strong> Daily standups about why yesterday's standup items aren't done<br />
                    <strong>Solution:</strong> Stop talking, start doing
                  </p>
                </div>

                <div className="border border-zinc-800 p-8">
                  <h3 className="text-2xl font-black text-red-600 mb-4">OPTIMIZATION STRUNE</h3>
                  <p className="text-zinc-400 mb-4">
                    Optimizing systems that shouldn't exist. Perfecting processes that create no value. 
                    Making the wrong thing more efficient.
                  </p>
                  <p className="text-sm text-zinc-500">
                    <strong>Example:</strong> Automating reports nobody reads<br />
                    <strong>Solution:</strong> Question existence before efficiency
                  </p>
                </div>

                <div className="border border-zinc-800 p-8">
                  <h3 className="text-2xl font-black text-red-600 mb-4">GROWTH STRUNE</h3>
                  <p className="text-zinc-400 mb-4">
                    Growing complexity faster than capability. Each expansion creates more problems 
                    than it solves. Success becomes the source of failure.
                  </p>
                  <p className="text-sm text-zinc-500">
                    <strong>Example:</strong> Hiring to manage problems created by hiring<br />
                    <strong>Solution:</strong> Constraint before expansion
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
              <h2 className="text-3xl font-black mb-12">STRUNE DETECTION SIGNALS</h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="text-xl font-black mb-4 text-red-500">ORGANIZATIONAL STRUNE</h3>
                  <ul className="space-y-3 text-zinc-400">
                    <li>• Working harder yields worse results</li>
                    <li>• Solutions create new problems</li>
                    <li>• Complexity grows exponentially</li>
                    <li>• Everyone's busy, nothing moves</li>
                    <li>• More resources = less output</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-black mb-4 text-red-500">PERSONAL STRUNE</h3>
                  <ul className="space-y-3 text-zinc-400">
                    <li>• Productivity systems kill productivity</li>
                    <li>• Planning prevents execution</li>
                    <li>• Optimization creates chaos</li>
                    <li>• Tools multiply, output shrinks</li>
                    <li>• Motion without movement</li>
                  </ul>
                </div>
              </div>

              {/* Physics Diagram */}
              <div className="bg-zinc-950 border border-zinc-800 p-8">
                <h3 className="text-xl font-black mb-6">THE STRUNE PHYSICS</h3>
                <div className="space-y-4 font-mono text-sm">
                  <div>EFFORT → RESISTANCE → MORE EFFORT → MORE RESISTANCE</div>
                  <div className="text-red-600">↓</div>
                  <div>SYSTEM LOCKS IN SELF-DEFEATING LOOP</div>
                  <div className="text-red-600">↓</div>
                  <div>COMPLETE PARALYSIS DESPITE MAXIMUM ACTIVITY</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Breaking Strune Section */}
        <section className="py-16 px-6 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-black mb-12">BREAKING STRUNE PATTERNS</h2>
              
              <div className="space-y-6">
                <div className="flex gap-6 items-start">
                  <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">STEP 1</div>
                  <div className="flex-1">
                    <h4 className="font-black mb-2">Stop All Movement</h4>
                    <p className="text-zinc-400">Strune feeds on motion. Starve it with stillness.</p>
                  </div>
                </div>
                
                <div className="flex gap-6 items-start">
                  <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">STEP 2</div>
                  <div className="flex-1">
                    <h4 className="font-black mb-2">Map the Pattern</h4>
                    <p className="text-zinc-400">Identify where your solution becomes your problem.</p>
                  </div>
                </div>
                
                <div className="flex gap-6 items-start">
                  <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">STEP 3</div>
                  <div className="flex-1">
                    <h4 className="font-black mb-2">Delete, Don't Fix</h4>
                    <p className="text-zinc-400">Remove the action creating resistance. Don't add more.</p>
                  </div>
                </div>
                
                <div className="flex gap-6 items-start">
                  <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">STEP 4</div>
                  <div className="flex-1">
                    <h4 className="font-black mb-2">Move Perpendicular</h4>
                    <p className="text-zinc-400">Change direction entirely. Don't push through—go around.</p>
                  </div>
                </div>
              </div>

              {/* Warning Box */}
              <div className="bg-black border-l-4 border-yellow-500 p-8 mt-12">
                <h3 className="text-xl font-black mb-4 text-yellow-500">CRITICAL INSIGHT</h3>
                <p className="text-zinc-400">
                  The only way to break strune is to stop doing what created it. Not do it better. 
                  Not do it differently. Stop. The pattern cannot survive without your participation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-3xl font-black mb-6">BREAK YOUR STRUNE PATTERN</h3>
            <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              Stop creating the resistance you're fighting. Start moving without friction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/diagnostic"
                className="bg-red-600 px-8 py-4 text-lg font-black hover:bg-red-700 transition-colors"
              >
                DIAGNOSE YOUR STRUNE
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
                  href: "/answers/glossary/pilor",
                  title: "Understanding Pilor",
                  description: "Recursive failure loops. When systems optimize for dysfunction.",
                  color: "red"
                },
                {
                  href: "/answers/glossary/nexel",
                  title: "Your Nexel Type",
                  description: "How you naturally move through constraint—or create it.",
                  color: "yellow"
                },
                {
                  href: "/interventions/the-map",
                  title: "Map Your Strune",
                  description: "Visualize your self-generated resistance patterns.",
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

export default StrunePage;