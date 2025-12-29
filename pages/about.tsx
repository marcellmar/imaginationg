import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SEOHead from '../components/SEOHead';
import Navigation from '../components/Navigation';

const AboutPage = () => {
  return (
    <>
      <SEOHead
        title="About IMAGINATION G - Organizational Physics"
        description="We measure organizational friction. GPI diagnostic reveals where energy gets stuck. Like an X-ray for how your organization actually works."
        ogImage="/images/og-about.svg"
      />

      <div className="min-h-screen bg-black text-white">
        <Navigation currentPage="about" />

        {/* Hero Section */}
        <section className="pt-24 pb-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block mb-8 text-green-400 text-xs font-mono bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-full">
              <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              ABOUT IMAGINATION G
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1]">
              WE MEASURE<br />NOT PRESCRIBE<span className="text-red-600">.</span>
            </h1>

            <p className="text-xl text-zinc-400 mb-12 max-w-2xl">
              Organizations have physics. Energy flows or it doesn't. We built a way to measure it.
            </p>

            {/* What We Do Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
              <div className="border border-zinc-800 p-6">
                <h3 className="font-black text-red-600 mb-1">MEASURE</h3>
                <p className="text-sm text-zinc-500">not prescribe</p>
              </div>
              <div className="border border-zinc-800 p-6">
                <h3 className="font-black text-red-600 mb-1">EXPOSE</h3>
                <p className="text-sm text-zinc-500">not advise</p>
              </div>
              <div className="border border-zinc-800 p-6">
                <h3 className="font-black text-red-600 mb-1">QUANTIFY</h3>
                <p className="text-sm text-zinc-500">not judge</p>
              </div>
              <div className="border border-zinc-800 p-6">
                <h3 className="font-black text-red-600 mb-1">X-RAY</h3>
                <p className="text-sm text-zinc-500">not treat</p>
              </div>
            </div>
          </div>
        </section>

        {/* Marcus Section */}
        <section className="py-16 px-6 bg-zinc-950">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="flex justify-center">
                <div className="relative w-64 h-64">
                  <Image
                    src="/images/marcus-davis.jpg"
                    alt="Marcus Davis"
                    className="object-cover rounded-lg"
                    fill
                  />
                </div>
              </div>

              {/* Content */}
              <div>
                <h2 className="text-3xl font-black mb-6">MARCUS DAVIS</h2>
                <div className="space-y-4 text-zinc-300">
                  <p>Built GPI after measuring 100+ organizations.</p>
                  <p className="text-zinc-500">MS in Supply Chain + City Planning. Military logistics. Decade in China.</p>
                  <p className="text-lg font-black pt-4">
                    The pattern was obvious: organizations that measure coordination capacity outperform those that measure connection strength.
                  </p>
                  <p className="text-xl font-black text-red-600 pt-2">
                    GPI is the X-ray I wish I had 20 years ago.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Book */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="border border-zinc-800 p-8 md:p-12">
              <div className="text-xs font-mono text-zinc-500 mb-4">COMING 2026</div>
              <h2 className="text-3xl font-black mb-4">THE GROWING PAINS INDEX</h2>
              <p className="text-zinc-400 mb-6 max-w-xl">
                The book behind the framework. Why industries calcify, how organizations fail, and what the physics of growth actually looks like.
              </p>
              <Link
                href="/insights"
                className="inline-block border border-zinc-700 px-6 py-3 font-bold hover:border-zinc-500 transition-colors"
              >
                READ EARLY EXCERPTS →
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 bg-zinc-950">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-black mb-6">READY TO MEASURE?</h3>
            <p className="text-xl text-zinc-400 mb-8">
              32 questions. 7 dimensions. Your organizational physics, quantified.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/diagnostic" className="bg-red-600 px-8 py-4 text-lg font-black hover:bg-red-700 transition-colors text-center">
                TAKE THE GPI DIAGNOSTIC
              </Link>
              <Link href="/gpi-framework" className="border-2 border-zinc-700 px-8 py-4 text-lg font-black hover:border-zinc-500 transition-colors text-center">
                EXPLORE THE FRAMEWORK
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
