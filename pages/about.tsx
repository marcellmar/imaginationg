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
        title="About IMAGINATION G - Signal Amplifiers, Not Optimizers"
        description="IMAGINATION G surfaces buried truth through override, not optimization. Agency over aesthetics. Signal over noise. We amplify what's real."
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
                  TRUTH: AMPLIFIED
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1]">
                  WE DON'T<br />OPTIMIZE<span className="text-red-600">.</span>
                </h1>
                
                <p className="text-xl text-zinc-400 mb-8 max-w-xl">
                  We override. We surface buried signal. We amplify truth. We leave.
                </p>
              </div>

              {/* Right Column - What We Are Grid */}
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="border border-zinc-800 p-6 hover:border-red-600 transition-colors">
                    <h3 className="font-black text-red-600 mb-2">SHOW UP</h3>
                    <p className="text-sm text-zinc-400">not consult</p>
                  </div>
                  <div className="border border-zinc-800 p-6 hover:border-red-600 transition-colors">
                    <h3 className="font-black text-red-600 mb-2">SURFACE</h3>
                    <p className="text-sm text-zinc-400">not bury</p>
                  </div>
                  <div className="border border-zinc-800 p-6 hover:border-red-600 transition-colors">
                    <h3 className="font-black text-red-600 mb-2">AMPLIFY</h3>
                    <p className="text-sm text-zinc-400">not muffle</p>
                  </div>
                  <div className="border border-zinc-800 p-6 hover:border-red-600 transition-colors">
                    <h3 className="font-black text-red-600 mb-2">LEAVE</h3>
                    <p className="text-sm text-zinc-400">not linger</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Code Section */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-black mb-12 text-center">OUR CODE</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <p className="text-zinc-500 mb-2">We don't optimize noise.</p>
                <p className="text-2xl font-black text-red-600">We amplify signal.</p>
              </div>
              <div className="text-center">
                <p className="text-zinc-500 mb-2">We don't build dependencies.</p>
                <p className="text-2xl font-black text-red-600">We build agency.</p>
              </div>
              <div className="text-center">
                <p className="text-zinc-500 mb-2">We don't polish aesthetics.</p>
                <p className="text-2xl font-black text-red-600">We ship function.</p>
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
                  <p>Built IG after 10 years of watching brilliant people optimize around truth.</p>
                  <p>Saw too much noise. Not enough signal.</p>
                  <p>Too many consultants polishing problems.</p>
                  <p>Not enough people solving them.</p>
                  <p className="text-xl font-black text-red-600 pt-4">
                    This is the override I wish I had.
                  </p>
                  <p className="text-xl font-black">
                    Now it's yours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How We Work Section */}
        <section className="py-16 px-6 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-black mb-12 text-center">HOW WE WORK</h2>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <span className="text-red-600 font-black text-2xl">1</span>
                  <p className="text-lg">You choose override over optimization</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-red-600 font-black text-2xl">2</span>
                  <p className="text-lg">You select the intervention that fits</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-red-600 font-black text-2xl">3</span>
                  <p className="text-lg">You name the buried truth</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-red-600 font-black text-2xl">4</span>
                  <p className="text-lg">We amplify your signal</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-red-600 font-black text-2xl">5</span>
                  <p className="text-lg font-black text-red-600">We leave</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-3xl font-black mb-6">SIGNAL CLEAR?</h3>
            <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              Either you override or you optimize. We're not waiting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/interventions" className="bg-red-600 px-8 py-4 text-lg font-black hover:bg-red-700 transition-colors text-center">
                DEPLOY INTERVENTION
              </Link>
              <Link href="/diagnostic" className="border-2 border-zinc-700 px-8 py-4 text-lg font-black hover:border-zinc-500 transition-colors text-center">
                DETECT SIGNAL
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