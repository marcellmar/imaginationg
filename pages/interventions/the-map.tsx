import type { NextPage } from 'next';
import Link from 'next/link';
import SEOHead from '../../components/SEOHead';
import Navigation from '../../components/Navigation';
import RelatedContent from '../../components/RelatedContent';
import { Check, AlertCircle } from 'lucide-react';

const TheMapPage: NextPage = () => {
  return (
    <>
      <SEOHead
        title="THE MAP - Surface Recursive Patterns | IMAGINATION G"
        description="Map the real connections. Surface the recursive patterns you've been optimizing around. 7 days. $1,000."
        ogType="article"
        ogImage="/images/og-services.svg"
      />

      <div className="min-h-screen bg-black text-white">
        <Navigation />

        {/* Hero Section */}
        <section className="pt-24 pb-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              {/* System Status Badge */}
              <div className="inline-block mb-8 text-green-400 text-xs font-mono bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-full">
                <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                INTERVENTION: THE MAP
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1]">
                THE MAP<span className="text-red-600">.</span>
              </h1>
              
              <p className="text-xl text-zinc-400 mb-8 max-w-2xl">
                Map the real connections. Surface the recursive patterns you've been optimizing around.
              </p>

              <div className="flex flex-wrap gap-6 items-center mb-12">
                <span className="text-4xl font-black">$1,000</span>
                <span className="text-zinc-500">|</span>
                <span className="text-lg text-zinc-400">7 Days. Zero Management.</span>
              </div>

              {/* Primary CTA */}
              <Link 
                href="https://outlook.office.com/owa/calendar/IG@imaginationg.studio/bookings/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-red-600 px-8 py-4 text-xl font-black hover:bg-red-700 transition-colors mb-8"
              >
                GET THE MAP →
              </Link>

              {/* Warning Box */}
              <div className="bg-zinc-950 border-l-4 border-yellow-500 p-6">
                <div className="flex items-start gap-4">
                  <AlertCircle className="text-yellow-500 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-lg font-bold mb-2">NOT SURE THIS IS YOUR INTERVENTION?</h3>
                    <p className="text-zinc-400 mb-4">Take the 60-second signal detection. Find out if you're building real connections or optimizing networks.</p>
                    <Link 
                      href="/diagnostic"
                      className="inline-block border border-yellow-500 text-yellow-500 px-6 py-2 font-bold hover:bg-yellow-500 hover:text-black transition-all"
                    >
                      TAKE THE DIAGNOSTIC
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What You Get Section */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-black mb-12">WHAT YOU GET</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <p className="text-lg">Complete ecosystem map</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <p className="text-lg">Recursive pattern analysis</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <p className="text-lg">Five signal carriers identified</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <p className="text-lg">Three pattern break strategies</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <p className="text-lg">One critical connection override</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <p className="text-lg">Zero management required</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Process Section */}
        <section className="py-16 px-6 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-black mb-12">THE PROCESS</h2>
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">DAY 1-2</div>
                  <div className="flex-1">
                    <p className="text-lg">We analyze your current ecosystem. Trace the patterns.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">DAY 3-5</div>
                  <div className="flex-1">
                    <p className="text-lg">We identify signal carriers. Map the recursion.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">DAY 6-7</div>
                  <div className="flex-1">
                    <p className="text-lg">We deliver your map. You execute the overrides.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Best For Section */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-black mb-12">BEST FOR</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="border border-zinc-800 p-6">
                  <h3 className="font-bold text-red-600 mb-3">FOUNDERS</h3>
                  <p className="text-zinc-400">Whose network feels dead and relationships feel fake</p>
                </div>
                <div className="border border-zinc-800 p-6">
                  <h3 className="font-bold text-red-600 mb-3">LEADERS</h3>
                  <p className="text-zinc-400">Running in circles with the same broken connections</p>
                </div>
                <div className="border border-zinc-800 p-6">
                  <h3 className="font-bold text-red-600 mb-3">TEAMS</h3>
                  <p className="text-zinc-400">Stuck in recursive patterns they can't see or break</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 bg-zinc-950">
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-3xl font-black mb-6">READY TO MAP REALITY?</h3>
            <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              7 days. One map. The connections that actually matter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="https://outlook.office.com/owa/calendar/IG@imaginationg.studio/bookings/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 px-8 py-4 text-lg font-black hover:bg-red-700 transition-colors"
              >
                GET THE MAP
              </Link>
              <Link 
                href="/interventions"
                className="border-2 border-zinc-700 px-8 py-4 text-lg font-black hover:border-zinc-500 transition-colors"
              >
                VIEW ALL INTERVENTIONS
              </Link>
            </div>
          </div>
        </section>

        {/* Next Intervention */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center">
              <Link 
                href="/interventions/the-naming"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                ← Previous: THE NAMING
              </Link>
              <Link 
                href="/interventions/the-market-smackdown"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                Next: THE MARKET SMACKDOWN →
              </Link>
            </div>
          </div>
        </section>

        {/* Related Content */}
        <section className="py-16 px-6 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <RelatedContent
              title="Learn The Language"
              items={[
                {
                  href: "/answers/glossary/strune",
                  title: "Understanding Strune",
                  description: "When movement creates its own resistance. The pattern trap.",
                  color: "red"
                },
                {
                  href: "/answers/glossary/kithara",
                  title: "Break Your Kithara",
                  description: "False harmony that kills truth. Time to create friction.",
                  color: "yellow"
                },
                {
                  href: "/diagnostic",
                  title: "Detect Your Signal",
                  description: "19 binary questions. Find where truth is buried.",
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

export default TheMapPage;