import type { NextPage } from 'next';
import Link from 'next/link';
import SEOHead from '../../../components/SEOHead';
import Navigation from '../../../components/Navigation';
import RelatedContent from '../../../components/RelatedContent';
import { ArrowLeft, CheckCircle } from 'lucide-react';

const FirstBloodPage: NextPage = () => {
  return (
    <>
      <SEOHead
        title="First Blood - The First Cut That Proves You're Alive | IMAGINATION G"
        description="First Blood is the initial market contact that proves viability. Learn why shipping ugly beats perfecting pretty and how first blood creates real momentum."
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
                LEXICON: FIRST BLOOD
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1]">
                FIRST BLOOD<span className="text-red-600">.</span>
              </h1>
              
              <p className="text-xl text-zinc-400 mb-8 max-w-2xl">
                The first cut that proves you're alive. Ship or die.
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
                  First Blood is the initial market contact that proves your idea can survive reality. 
                  It's not about perfection—it's about drawing blood. The first paying customer. 
                  The first real rejection. The first truth that can't be theorized away.
                </p>
              </div>

              {/* TL;DR Box */}
              <div className="bg-black border-2 border-yellow-500 p-8 mb-12">
                <h3 className="text-xl font-black text-yellow-500 mb-4">TL;DR</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 mt-0.5 flex-shrink-0" size={20} />
                    <span>First Blood = first real market contact</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 mt-0.5 flex-shrink-0" size={20} />
                    <span>Ugly that sells beats pretty that doesn't</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 mt-0.5 flex-shrink-0" size={20} />
                    <span>Proves you're building for reality, not ego</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-500 mt-0.5 flex-shrink-0" size={20} />
                    <span>Creates momentum that planning never can</span>
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
              <h2 className="text-3xl font-black mb-12">WHY FIRST BLOOD MATTERS</h2>
              
              <div className="space-y-8">
                <div className="border border-zinc-800 p-8">
                  <h3 className="text-2xl font-black text-red-600 mb-4">REALITY CONTACT</h3>
                  <p className="text-zinc-400 mb-4">
                    Before first blood, everything is theory. After first blood, you have data. 
                    Not projections. Not assumptions. Actual market response to actual offering.
                  </p>
                  <p className="text-sm text-zinc-500">
                    <strong>Truth:</strong> The market doesn't care about your deck
                  </p>
                </div>

                <div className="border border-zinc-800 p-8">
                  <h3 className="text-2xl font-black text-red-600 mb-4">MOMENTUM CREATION</h3>
                  <p className="text-zinc-400 mb-4">
                    First blood breaks the perfection paralysis. Once you ship ugly and survive, 
                    shipping becomes easier. Each iteration builds on real feedback, not imagined fears.
                  </p>
                  <p className="text-sm text-zinc-500">
                    <strong>Reality:</strong> Movement creates movement
                  </p>
                </div>

                <div className="border border-zinc-800 p-8">
                  <h3 className="text-2xl font-black text-red-600 mb-4">EGO DEATH</h3>
                  <p className="text-zinc-400 mb-4">
                    First blood kills the fantasy version of your product. What remains is what 
                    actually works. This death is necessary for real growth.
                  </p>
                  <p className="text-sm text-zinc-500">
                    <strong>Requirement:</strong> Your ego must bleed first
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Types Section */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-black mb-12">TYPES OF FIRST BLOOD</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-black mb-4 text-green-500">VALID FIRST BLOOD</h3>
                  <ul className="space-y-3 text-zinc-400">
                    <li>• First paying customer</li>
                    <li>• First public rejection</li>
                    <li>• First feature request from user</li>
                    <li>• First competitor response</li>
                    <li>• First refund request</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-black mb-4 text-red-500">FALSE FIRST BLOOD</h3>
                  <ul className="space-y-3 text-zinc-400">
                    <li>• Friends saying "cool idea"</li>
                    <li>• Investor interest (not money)</li>
                    <li>• Internal testing results</li>
                    <li>• Survey responses</li>
                    <li>• Advisor feedback</li>
                  </ul>
                </div>
              </div>

              {/* Formula Box */}
              <div className="bg-zinc-950 border-2 border-red-600 p-8 mt-12">
                <h3 className="text-xl font-black mb-4 text-red-600">THE FIRST BLOOD FORMULA</h3>
                <p className="text-lg font-mono text-center">
                  Minimum Viable Pain × Maximum Market Contact = First Blood
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 px-6 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-black mb-12">DRAWING FIRST BLOOD</h2>
              
              <div className="space-y-6">
                <div className="flex gap-6 items-start">
                  <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">RULE 1</div>
                  <div className="flex-1">
                    <h4 className="font-black mb-2">Ship at 30% Ready</h4>
                    <p className="text-zinc-400">If you're not embarrassed, you waited too long.</p>
                  </div>
                </div>
                
                <div className="flex gap-6 items-start">
                  <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">RULE 2</div>
                  <div className="flex-1">
                    <h4 className="font-black mb-2">Charge Money Immediately</h4>
                    <p className="text-zinc-400">Free users lie. Paying customers tell truth.</p>
                  </div>
                </div>
                
                <div className="flex gap-6 items-start">
                  <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">RULE 3</div>
                  <div className="flex-1">
                    <h4 className="font-black mb-2">Seek Rejection, Not Validation</h4>
                    <p className="text-zinc-400">One honest "no" beats ten polite "maybes".</p>
                  </div>
                </div>
                
                <div className="flex gap-6 items-start">
                  <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">RULE 4</div>
                  <div className="flex-1">
                    <h4 className="font-black mb-2">Measure Blood, Not Likes</h4>
                    <p className="text-zinc-400">Revenue, refunds, and rage. Everything else is vanity.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-3xl font-black mb-6">READY TO BLEED?</h3>
            <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              Stop polishing. Start shipping. Draw first blood or die in theory.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/interventions/first-blood-build"
                className="bg-red-600 px-8 py-4 text-lg font-black hover:bg-red-700 transition-colors"
              >
                BUILD FIRST BLOOD
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
                  href: "/answers/glossary/quorr",
                  title: "Escape Your Quorr",
                  description: "Technical debt disguised as features. What to cut for first blood.",
                  color: "red"
                },
                {
                  href: "/answers/glossary/voxel",
                  title: "Find Your Voxel",
                  description: "Three-dimensional truth. Where market meets reality meets action.",
                  color: "yellow"
                },
                {
                  href: "/answers/glossary/zelith",
                  title: "Hit Your Zelith",
                  description: "Maximum pressure point. Where first blood becomes breakthrough.",
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

export default FirstBloodPage;