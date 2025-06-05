import type { NextPage } from 'next';
import Link from 'next/link';
import SEOHead from '../../components/SEOHead';
import Navigation from '../../components/Navigation';
import RelatedContent from '../../components/RelatedContent';
import { Check, AlertCircle } from 'lucide-react';

const TheNamingPage: NextPage = () => {
  return (
    <>
      <SEOHead
        title="THE NAMING - Surface Buried Truth | IMAGINATION G"
        description="Surface the buried signal. Say what you've been building around instead of from. One session. One truth. $500."
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
                INTERVENTION: THE NAMING
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1]">
                THE NAMING<span className="text-red-600">.</span>
              </h1>
              
              <p className="text-xl text-zinc-400 mb-8 max-w-2xl">
                Surface the buried signal. Say what you've been building around instead of from. Out loud.
              </p>

              <div className="flex flex-wrap gap-6 items-center mb-12">
                <span className="text-4xl font-black">$500</span>
                <span className="text-zinc-500">|</span>
                <span className="text-lg text-zinc-400">One Session. One Truth.</span>
              </div>

              {/* Primary CTA */}
              <Link 
                href="https://outlook.office.com/owa/calendar/IG@imaginationg.studio/bookings/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-red-600 px-8 py-4 text-xl font-black hover:bg-red-700 transition-colors mb-8"
              >
                BOOK THE NAMING →
              </Link>

              {/* Warning Box */}
              <div className="bg-zinc-950 border-l-4 border-yellow-500 p-6">
                <div className="flex items-start gap-4">
                  <AlertCircle className="text-yellow-500 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-lg font-bold mb-2">NOT SURE THIS IS YOUR INTERVENTION?</h3>
                    <p className="text-zinc-400 mb-4">Take the 60-second signal detection. Find out if you're amplifying signal or optimizing noise.</p>
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
                    <p className="text-lg">Your buried truth named and owned</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <p className="text-lg">The real block identified</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <p className="text-lg">Your override path clarified</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <p className="text-lg">Binary next step defined</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <p className="text-lg">Recording of the session</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <p className="text-lg">Zero BS, all signal</p>
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
                  <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">0-15 MIN</div>
                  <div className="flex-1">
                    <p className="text-lg">You vomit your noise. We listen.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">15-45 MIN</div>
                  <div className="flex-1">
                    <p className="text-lg">We cut through to signal. Find the buried truth.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">45-60 MIN</div>
                  <div className="flex-1">
                    <p className="text-lg">Together, we name it. Out loud. No escape.</p>
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
                  <p className="text-zinc-400">Who are done lying to themselves about what's really broken</p>
                </div>
                <div className="border border-zinc-800 p-6">
                  <h3 className="font-bold text-red-600 mb-3">TEAMS</h3>
                  <p className="text-zinc-400">Stuck in analysis paralysis, optimization theater, or false harmony</p>
                </div>
                <div className="border border-zinc-800 p-6">
                  <h3 className="font-bold text-red-600 mb-3">LEADERS</h3>
                  <p className="text-zinc-400">Ready to stop managing noise and start amplifying signal</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 bg-zinc-950">
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-3xl font-black mb-6">READY TO NAME IT?</h3>
            <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              60 minutes. One truth. The beginning of everything real.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="https://outlook.office.com/owa/calendar/IG@imaginationg.studio/bookings/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 px-8 py-4 text-lg font-black hover:bg-red-700 transition-colors"
              >
                BOOK THE NAMING
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
                href="/interventions"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                ← Back to Interventions
              </Link>
              <Link 
                href="/interventions/the-map"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                Next: THE MAP →
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
                  href: "/answers/glossary/nexel",
                  title: "What is Your Nexel?",
                  description: "Your behavioral identity marker. How you move through constraint.",
                  color: "red"
                },
                {
                  href: "/answers/glossary/morrin",
                  title: "Enter Morrin State",
                  description: "Post-choice existence. The moment aligned action begins.",
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

export default TheNamingPage;