import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SEOHead from '../components/SEOHead';
import Navigation from '../components/Navigation';
import { ArrowRight } from 'lucide-react';

const AboutPage = () => {
  return (
    <>
      <SEOHead
        title="About | GPI Studio"
        description="Marcus Davis built GPI after measuring 100+ organizations. MS Supply Chain, military logistics, decade in China. The pattern was clear."
        ogImage="/images/og-about.svg"
      />

      <div className="min-h-screen bg-black text-white">
        <Navigation currentPage="about" />

        {/* Hero */}
        <section className="pt-28 pb-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-zinc-600 mb-6">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              ABOUT
            </div>

            <h1 className="text-4xl md:text-5xl font-black mb-6 leading-[1.1]">
              ORGANIZATIONS HAVE PHYSICS<span className="text-red-600">.</span>
            </h1>

            <p className="text-xl text-zinc-400 max-w-2xl">
              Energy flows or it doesn't. We built a way to measure it.
            </p>
          </div>
        </section>

        {/* The Insight */}
        <section className="py-12 px-6 border-t border-zinc-900">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-black mb-6">The Pattern</h2>
                <p className="text-zinc-400 mb-4">
                  After measuring 100+ organizations across military, government, manufacturing, and tech, the pattern was clear.
                </p>
                <p className="text-zinc-400 mb-4">
                  Some companies move fast. Others calcify. The difference isn't strategy or talent or capital. It's physics.
                </p>
                <p className="text-zinc-400">
                  Energy either flows through an organization or it gets stuck at boundaries. GPI measures where it gets stuck.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-black mb-6">What GPI Does</h2>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="text-red-600 font-black">01</div>
                    <div>
                      <div className="font-bold">Measure, not prescribe</div>
                      <div className="text-sm text-zinc-500">We show you the friction. You decide what to do.</div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-red-600 font-black">02</div>
                    <div>
                      <div className="font-bold">Expose, not advise</div>
                      <div className="text-sm text-zinc-500">The data speaks. We don't spin it.</div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-red-600 font-black">03</div>
                    <div>
                      <div className="font-bold">Quantify, not judge</div>
                      <div className="text-sm text-zinc-500">High GPI isn't "bad." It's a measurement. What you do with it matters.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Marcus */}
        <section className="py-16 px-6 bg-zinc-950">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center">
                <div className="relative w-64 h-64">
                  <Image
                    src="/images/marcus-davis.jpg"
                    alt="Marcus Davis"
                    className="object-cover"
                    fill
                  />
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-black mb-6">MARCUS DAVIS</h2>
                <div className="space-y-4 text-zinc-300">
                  <p>
                    Built GPI after a decade of seeing the same pattern everywhere.
                  </p>
                  <p className="text-zinc-500">
                    MS Supply Chain Management (Loyola). Lean Six Sigma Black Belt. U.S. Army logistics. Ten years in China. $1.2B public health programming at City of Chicago.
                  </p>
                  <p className="text-zinc-500">
                    Scaled manufacturing 50x. Taught 4,500+ students. Managed cross-cultural supply chains.
                  </p>
                  <p className="font-bold pt-4">
                    The pattern was always the same: organizations fail when energy gets stuck at boundaries.
                  </p>
                  <p className="text-xl font-black text-red-600 pt-2">
                    GPI shows you exactly where.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Work */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-black mb-8">The Work</h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-zinc-800 p-6">
                <div className="text-4xl font-black text-red-600 mb-2">66+</div>
                <div className="font-bold mb-1">Companies Analyzed</div>
                <div className="text-sm text-zinc-500">Fortune 500s, retailers, media, tech. Same 7 dimensions.</div>
              </div>

              <div className="border border-zinc-800 p-6">
                <div className="text-4xl font-black text-red-600 mb-2">7</div>
                <div className="font-bold mb-1">Content Series</div>
                <div className="text-sm text-zinc-500">Smackdowns, Vital Signs, Autopsies, and more.</div>
              </div>

              <div className="border border-zinc-800 p-6">
                <div className="text-4xl font-black text-red-600 mb-2">1</div>
                <div className="font-bold mb-1">Book (Coming)</div>
                <div className="text-sm text-zinc-500">The full framework. Why organizations calcify. What to do about it.</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 bg-zinc-950">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-black mb-6">SEE THE PATTERN<span className="text-red-600">.</span></h3>
            <p className="text-xl text-zinc-400 mb-8">
              66 companies. 7 dimensions. The physics is visible.
            </p>
            <Link
              href="/insights/gpi-analyses"
              className="inline-flex items-center gap-2 bg-red-600 px-8 py-4 text-lg font-black hover:bg-red-700 transition-colors group"
            >
              BROWSE THE ANALYSES
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-6 border-t border-zinc-900">
          <div className="max-w-4xl mx-auto flex justify-between items-center text-sm text-zinc-600">
            <div>GPI.STUDIO</div>
            <div>© IMAGINATION G LLC</div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default AboutPage;
