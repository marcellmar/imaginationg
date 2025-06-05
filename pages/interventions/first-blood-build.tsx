import type { NextPage } from 'next';
import Link from 'next/link';
import SEOHead from '../../components/SEOHead';
import Navigation from '../../components/Navigation';
import RelatedContent from '../../components/RelatedContent';
import { Check, AlertCircle } from 'lucide-react';

const FirstBloodBuildPage: NextPage = () => {
  return (
    <>
      <SEOHead
        title="FIRST BLOOD BUILD - Ship Function Over Form | IMAGINATION G"
        description="Build from the truth you surfaced. Function over form. Agency over aesthetics. 6 weeks max. $5,000."
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
                INTERVENTION: FIRST BLOOD BUILD
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1]">
                FIRST BLOOD<br />BUILD<span className="text-red-600">.</span>
              </h1>
              
              <p className="text-xl text-zinc-400 mb-8 max-w-2xl">
                Build from the truth you surfaced. Function over form. Agency over aesthetics.
              </p>

              <div className="flex flex-wrap gap-6 items-center mb-12">
                <span className="text-4xl font-black">$5,000</span>
                <span className="text-zinc-500">|</span>
                <span className="text-lg text-zinc-400">6 Weeks Max. Ship or Kill.</span>
              </div>

              {/* Primary CTA */}
              <Link 
                href="https://outlook.office.com/owa/calendar/IG@imaginationg.studio/bookings/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-red-600 px-8 py-4 text-xl font-black hover:bg-red-700 transition-colors mb-8"
              >
                BUILD FIRST BLOOD →
              </Link>

              {/* Warning Box */}
              <div className="bg-zinc-950 border-l-4 border-yellow-500 p-6">
                <div className="flex items-start gap-4">
                  <AlertCircle className="text-yellow-500 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-lg font-bold mb-2">NOT SURE THIS IS YOUR INTERVENTION?</h3>
                    <p className="text-zinc-400 mb-4">Take the 60-second signal detection. Find out if you're ready to ship ugly.</p>
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
                    <p className="text-lg">Working prototype in 6 weeks</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <p className="text-lg">First paying customer</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <p className="text-lg">Market feedback (brutal)</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <p className="text-lg">Technical architecture</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <p className="text-lg">Go-to-market strategy</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <p className="text-lg">Zero perfection, all function</p>
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
                  <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">WEEK 1-2</div>
                  <div className="flex-1">
                    <p className="text-lg">Strip to core function. Kill every nice-to-have.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">WEEK 3-4</div>
                  <div className="flex-1">
                    <p className="text-lg">Build the ugly version that actually works.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">WEEK 5-6</div>
                  <div className="flex-1">
                    <p className="text-lg">Get someone to pay. Ship or kill.</p>
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
                  <p className="text-zinc-400">Who've been perfecting instead of shipping</p>
                </div>
                <div className="border border-zinc-800 p-6">
                  <h3 className="font-bold text-red-600 mb-3">TEAMS</h3>
                  <p className="text-zinc-400">Ready to build ugly and test fast</p>
                </div>
                <div className="border border-zinc-800 p-6">
                  <h3 className="font-bold text-red-600 mb-3">IDEAS</h3>
                  <p className="text-zinc-400">That need reality more than refinement</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 bg-zinc-950">
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-3xl font-black mb-6">READY TO BLEED?</h3>
            <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              6 weeks. One thing. Shipped or dead.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="https://outlook.office.com/owa/calendar/IG@imaginationg.studio/bookings/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 px-8 py-4 text-lg font-black hover:bg-red-700 transition-colors"
              >
                SHIP UGLY
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
                href="/interventions/thirty-day-drift-break"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                ← Previous: 30-DAY DRIFT BREAK
              </Link>
              <Link 
                href="/interventions"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                Back to All Interventions →
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
                  href: "/answers/glossary/first-blood",
                  title: "Why First Blood Matters",
                  description: "The first cut that proves you're alive. Ship or die.",
                  color: "red"
                },
                {
                  href: "/answers/glossary/quorr",
                  title: "Escape Your Quorr",
                  description: "Technical debt disguised as features. Cut to core.",
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

export default FirstBloodBuildPage;