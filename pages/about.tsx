import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SEOHead from '../components/SEOHead';
import Navigation from '../components/Navigation';
import RelatedContent from '../components/RelatedContent';

const AboutPage = () => {
  return (
    <>
      <SEOHead
        title="About IMAGINATION G - Portal Interventions, Not Consulting"
        description="We don't consult. We intervene. Interactive portals break stuck patterns, ship working MVPs, and name buried truth. No optimization theater."
        ogImage="/images/og-about.svg"
      />

      <div className="min-h-screen bg-black text-white">
        {/* Navigation */}
        <Navigation currentPage="about" />

        {/* Hero Section */}
        <section className="pt-24 pb-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[60vh]">
              {/* Left Column - Main Content */}
              <div>
                {/* System Status Badge */}
                <div className="inline-block mb-8 text-green-400 text-xs font-mono bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-full">
                  <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                  INTERVENTIONS: READY
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1]">
                  WE DON'T<br />CONSULT<span className="text-red-600">.</span>
                </h1>
                
                <p className="text-xl text-zinc-400 mb-8 max-w-xl">
                  We intervene. Interactive portals. Daily progress via Teams. Break patterns or ship MVPs. No meetings about meetings.
                </p>
              </div>

              {/* Right Column - What We Are Grid */}
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="border border-zinc-800 p-6 hover:border-red-600 transition-colors">
                    <h3 className="font-black text-red-600 mb-2">INTERVENE</h3>
                    <p className="text-sm text-zinc-400">not advise</p>
                  </div>
                  <div className="border border-zinc-800 p-6 hover:border-red-600 transition-colors">
                    <h3 className="font-black text-red-600 mb-2">BREAK</h3>
                    <p className="text-sm text-zinc-400">not optimize</p>
                  </div>
                  <div className="border border-zinc-800 p-6 hover:border-red-600 transition-colors">
                    <h3 className="font-black text-red-600 mb-2">SHIP</h3>
                    <p className="text-sm text-zinc-400">not perfect</p>
                  </div>
                  <div className="border border-zinc-800 p-6 hover:border-red-600 transition-colors">
                    <h3 className="font-black text-red-600 mb-2">DEPLOY</h3>
                    <p className="text-sm text-zinc-400">not discuss</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Code Section */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-black mb-12 text-center">OUR APPROACH</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <p className="text-zinc-500 mb-2">We don't create strategy documents.</p>
                <p className="text-2xl font-black text-red-600">We build portals.</p>
              </div>
              <div className="text-center">
                <p className="text-zinc-500 mb-2">We don't schedule more meetings.</p>
                <p className="text-2xl font-black text-red-600">We break patterns.</p>
              </div>
              <div className="text-center">
                <p className="text-zinc-500 mb-2">We don't optimize around problems.</p>
                <p className="text-2xl font-black text-red-600">We fix them.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Marcus Section */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left - Image */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative w-64 h-64 lg:w-80 lg:h-80">
                  <Image
                    src="/images/marcus-davis.jpg"
                    alt="Marcus Davis"
                    className="object-cover rounded-lg"
                    fill
                  />
                </div>
              </div>

              {/* Right - Content */}
              <div className="max-w-xl">
                <h2 className="text-3xl font-black mb-6">MARCUS DAVIS</h2>
                <div className="space-y-4 text-lg text-zinc-300">
                  <p>Built IG after 10 years of watching brilliant teams get stuck in optimization loops.</p>
                  <p>Too many meetings about meetings.</p>
                  <p>Too many strategies without action.</p>
                  <p>Too much consulting theater.</p>
                  <p>Not enough pattern breaking.</p>
                  <p className="text-xl font-black text-red-600 pt-4">
                    These are the portals I wish I had.
                  </p>
                  <p className="text-xl font-black">
                    Now they're yours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How We Work Section */}
        <section className="py-16 px-6 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-black mb-12 text-center">HOW PORTALS WORK</h2>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <span className="text-red-600 font-black text-2xl">1</span>
                  <p className="text-lg">Take diagnostic or choose intervention portal</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-red-600 font-black text-2xl">2</span>
                  <p className="text-lg">Complete pre-session form (4 questions max)</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-red-600 font-black text-2xl">3</span>
                  <p className="text-lg">Daily progress tracking via Teams</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-red-600 font-black text-2xl">4</span>
                  <p className="text-lg">Pattern breaks or MVP ships</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-red-600 font-black text-2xl">5</span>
                  <p className="text-lg font-black text-red-600">You keep moving</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-3xl font-black mb-6">READY TO BREAK THE PATTERN?</h3>
            <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              Either you intervene or you optimize. Choose action.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/interventions" className="bg-red-600 px-8 py-4 text-lg font-black hover:bg-red-700 transition-colors text-center">
                DEPLOY INTERVENTION
              </Link>
              <Link href="/diagnostic" className="border-2 border-zinc-700 px-8 py-4 text-lg font-black hover:border-zinc-500 transition-colors text-center">
                DETECT PATTERN
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
                  title: "Discover Your Nexel",
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
                  href: "/answers/glossary/strune",
                  title: "Master Strune",
                  description: "Reality filtration. The precise cut that removes noise.",
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

export default AboutPage;