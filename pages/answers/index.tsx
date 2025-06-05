import type { NextPage } from 'next';
import Link from 'next/link';
import SEOHead from '../../components/SEOHead';
import Navigation from '../../components/Navigation';
import RelatedContent from '../../components/RelatedContent';
import { ArrowRight } from 'lucide-react';

const AnswersHub: NextPage = () => {
  return (
    <>
      <SEOHead
        title="Business Questions Answered | IMAGINATION G"
        description="Get direct answers to your business questions. No fluff, no optimization theater - just brutal truth about signal amplification, override protocols, and business transformation."
        ogImage="/images/og-answers.svg"
      />

      <div className="min-h-screen bg-black text-white">
        <Navigation currentPage="answers" />

        {/* Hero Section */}
        <section className="pt-24 pb-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              {/* System Status Badge */}
              <div className="inline-block mb-8 text-green-400 text-xs font-mono bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-full">
                <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                KNOWLEDGE: ACCESSIBLE
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1]">
                ANSWERS<span className="text-red-600">.</span>
              </h1>
              
              <p className="text-xl text-zinc-400 mb-8 max-w-2xl">
                Business dysfunction decoded. No MBA speak. No optimization theater. 
                Just buried truths about why organizations fail and how signal gets corrupted.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Answer Box */}
        <section className="py-16 px-6 bg-zinc-950 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <div className="bg-black border-2 border-red-600 p-8">
                <h2 className="text-2xl font-black mb-4 text-red-600">WHAT MAKES IMAGINATION G DIFFERENT?</h2>
                <p className="text-lg">
                  We use proprietary behavioral markers (Nexel, Morrin, Strune) to decode dysfunction patterns 
                  that traditional consultants can't see. We don't optimize—we override.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* IG Lexicon Section */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <div className="border-4 border-red-600 p-12 bg-zinc-950">
                <h2 className="text-3xl font-black mb-6 text-red-600">IG LEXICON: BEHAVIORAL PHYSICS</h2>
                <p className="text-lg text-zinc-300 mb-8">
                  <span className="text-red-600 font-bold">TL;DR:</span> Traditional business language describes symptoms. 
                  Our lexicon names the actual forces. These terms are untranslatable—and uncopiable.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <Link href="/answers/glossary/nexel" className="block border-2 border-zinc-800 p-6 hover:border-red-600 transition-all group">
                      <h3 className="font-black text-xl text-red-600 mb-2 group-hover:text-white transition-colors">
                        Nexel <ArrowRight className="inline ml-2" size={16} />
                      </h3>
                      <p className="text-zinc-400">Your behavioral identity marker. How you move through constraint.</p>
                    </Link>
                    
                    <Link href="/answers/glossary/morrin" className="block border-2 border-zinc-800 p-6 hover:border-red-600 transition-all group">
                      <h3 className="font-black text-xl text-red-600 mb-2 group-hover:text-white transition-colors">
                        Morrin <ArrowRight className="inline ml-2" size={16} />
                      </h3>
                      <p className="text-zinc-400">Post-choice existence. The moment aligned action begins.</p>
                    </Link>
                    
                    <Link href="/answers/glossary/strune" className="block border-2 border-zinc-800 p-6 hover:border-red-600 transition-all group">
                      <h3 className="font-black text-xl text-red-600 mb-2 group-hover:text-white transition-colors">
                        Strune <ArrowRight className="inline ml-2" size={16} />
                      </h3>
                      <p className="text-zinc-400">When movement creates its own resistance. The pattern trap.</p>
                    </Link>
                    
                    <Link href="/answers/glossary/pilor" className="block border-2 border-zinc-800 p-6 hover:border-red-600 transition-all group">
                      <h3 className="font-black text-xl text-red-600 mb-2 group-hover:text-white transition-colors">
                        Pilor <ArrowRight className="inline ml-2" size={16} />
                      </h3>
                      <p className="text-zinc-400">Recursive failure loops. Systems optimizing for dysfunction.</p>
                    </Link>
                    
                    <Link href="/answers/glossary/kithara" className="block border-2 border-zinc-800 p-6 hover:border-red-600 transition-all group">
                      <h3 className="font-black text-xl text-red-600 mb-2 group-hover:text-white transition-colors">
                        Kithara <ArrowRight className="inline ml-2" size={16} />
                      </h3>
                      <p className="text-zinc-400">False harmony that prevents truth. The comfort that kills.</p>
                    </Link>
                  </div>
                  
                  <div className="space-y-4">
                    <Link href="/answers/glossary/soreth" className="block border-2 border-zinc-800 p-6 hover:border-red-600 transition-all group">
                      <h3 className="font-black text-xl text-red-600 mb-2 group-hover:text-white transition-colors">
                        Soreth <ArrowRight className="inline ml-2" size={16} />
                      </h3>
                      <p className="text-zinc-400">Hidden energy drains. The invisible tax on every action.</p>
                    </Link>
                    
                    <Link href="/answers/glossary/voxel" className="block border-2 border-zinc-800 p-6 hover:border-red-600 transition-all group">
                      <h3 className="font-black text-xl text-red-600 mb-2 group-hover:text-white transition-colors">
                        Voxel <ArrowRight className="inline ml-2" size={16} />
                      </h3>
                      <p className="text-zinc-400">Three-dimensional truth. Where reality meets perception meets action.</p>
                    </Link>
                    
                    <Link href="/answers/glossary/quorr" className="block border-2 border-zinc-800 p-6 hover:border-red-600 transition-all group">
                      <h3 className="font-black text-xl text-red-600 mb-2 group-hover:text-white transition-colors">
                        Quorr <ArrowRight className="inline ml-2" size={16} />
                      </h3>
                      <p className="text-zinc-400">Technical debt disguised as features. Complexity serving no one.</p>
                    </Link>
                    
                    <Link href="/answers/glossary/threnn" className="block border-2 border-zinc-800 p-6 hover:border-red-600 transition-all group">
                      <h3 className="font-black text-xl text-red-600 mb-2 group-hover:text-white transition-colors">
                        Threnn <ArrowRight className="inline ml-2" size={16} />
                      </h3>
                      <p className="text-zinc-400">Momentum multiplication. When aligned systems compound force.</p>
                    </Link>
                    
                    <Link href="/answers/glossary/zelith" className="block border-2 border-zinc-800 p-6 hover:border-red-600 transition-all group">
                      <h3 className="font-black text-xl text-red-600 mb-2 group-hover:text-white transition-colors">
                        Zelith <ArrowRight className="inline ml-2" size={16} />
                      </h3>
                      <p className="text-zinc-400">Maximum pressure point. Where systems collapse or breakthrough.</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 px-6 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl space-y-8">
              {/* Core Concepts */}
              <div className="border border-zinc-800 p-8">
                <h2 className="text-2xl font-black mb-4 text-red-600">CORE CONCEPTS</h2>
                <p className="text-zinc-400 mb-6">
                  The fundamental forces that kill organizations. What others won't tell you.
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <Link href="/answers/glossary/organizational-drift" className="block text-zinc-300 hover:text-red-600 transition-colors">
                    → Organizational Drift: When noise overwhelms signal
                  </Link>
                  <Link href="/answers/glossary/strategy-theater" className="block text-zinc-300 hover:text-red-600 transition-colors">
                    → Strategy Theater: Performance without function
                  </Link>
                  <Link href="/answers/glossary/clarity-catalyst" className="block text-zinc-300 hover:text-red-600 transition-colors">
                    → Clarity Catalyst: Human signal amplification
                  </Link>
                  <Link href="/answers/glossary/movement-architecture" className="block text-zinc-300 hover:text-red-600 transition-colors">
                    → Movement Architecture: Truth amplification systems
                  </Link>
                  <Link href="/answers/glossary/first-blood" className="block text-zinc-300 hover:text-red-600 transition-colors">
                    → First Blood: The cut that proves you're alive
                  </Link>
                  <Link href="/answers/guides/clarity-ritual" className="block text-zinc-300 hover:text-red-600 transition-colors">
                    → The Clarity Ritual: Stop optimization theater
                  </Link>
                </div>
              </div>

              {/* Comparisons */}
              <div className="border border-zinc-800 p-8">
                <h2 className="text-2xl font-black mb-4 text-yellow-500">COMPARISONS</h2>
                <p className="text-zinc-400 mb-6">
                  Why traditional approaches fail and what actually works.
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <Link href="/answers/compare/consultant-vs-catalyst" className="block text-zinc-300 hover:text-yellow-500 transition-colors">
                    → Consultant vs Catalyst: Why advice doesn't work
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Insights */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-black mb-12 text-center">BURIED TRUTHS MOST CONSULTANTS WON'T TELL YOU</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="border-2 border-red-600 p-6">
                <h3 className="font-black text-red-600 mb-3">Why Good People Create Bad Systems</h3>
                <p className="text-sm text-zinc-400 mb-4">
                  The most competent individuals often build the most dysfunctional organizations through 
                  complexity bias and dependency creation.
                </p>
                <Link href="/answers/glossary/pilor" className="text-red-600 text-sm font-bold hover:underline">
                  → Read About Pilor Loops
                </Link>
              </div>
              
              <div className="border-2 border-yellow-500 p-6">
                <h3 className="font-black text-yellow-500 mb-3">The Mathematics of Truth Decay</h3>
                <p className="text-sm text-zinc-400 mb-4">
                  Truth systematically degrades as it moves through organizational layers. 
                  Signal Clarity = Original Truth × (0.7)^n
                </p>
                <Link href="/answers/glossary/strune" className="text-yellow-500 text-sm font-bold hover:underline">
                  → Read About Strune Patterns
                </Link>
              </div>

              <div className="border-2 border-green-500 p-6">
                <h3 className="font-black text-green-500 mb-3">The Trillion-Dollar Avoidance Industry</h3>
                <p className="text-sm text-zinc-400 mb-4">
                  Entire industries exist to help organizations avoid decisions through 
                  external validation and consensus building.
                </p>
                <Link href="/answers/glossary/kithara" className="text-green-500 text-sm font-bold hover:underline">
                  → Read About Kithara State
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 bg-zinc-950">
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-3xl font-black mb-6">READY TO SURFACE BURIED TRUTH?</h3>
            <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              Stop asking why your organization is broken. Start understanding how dysfunction actually works.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/diagnostic"
                className="bg-red-600 px-8 py-4 text-lg font-black hover:bg-red-700 transition-colors"
              >
                DETECT YOUR SIGNAL
              </Link>
              <Link 
                href="/interventions"
                className="border-2 border-zinc-700 px-8 py-4 text-lg font-black hover:border-zinc-500 transition-colors"
              >
                VIEW INTERVENTIONS
              </Link>
            </div>
          </div>
        </section>

        {/* Related Content */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto">
            <RelatedContent
              title="Start Your Journey"
              items={[
                {
                  href: "/answers/glossary/nexel",
                  title: "Discover Your Nexel",
                  description: "Your behavioral identity marker. How you move through constraint.",
                  color: "red"
                },
                {
                  href: "/ig-complete-flow",
                  title: "Name Your Truth",
                  description: "Surface what's buried. Choose your override path.",
                  color: "yellow"
                },
                {
                  href: "/interventions/the-naming",
                  title: "Book The Naming",
                  description: "One session to surface your buried signal.",
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

export default AnswersHub;