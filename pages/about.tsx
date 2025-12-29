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
        title="About IMAGINATION G - Organizational Physics"
        description="We measure organizational friction. GPI diagnostic reveals where energy gets stuck. Like an X-ray for how your organization actually works."
        ogImage="/images/og-about.svg"
      />

      <div className="min-h-screen bg-black text-white">
        <Navigation currentPage="about" />

        {/* Hero Section */}
        <section className="pt-24 pb-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1]">
              WE MEASURE<br />WHERE ENERGY<br />GETS STUCK<span className="text-red-600">.</span>
            </h1>

            <p className="text-xl text-zinc-400 mb-12 max-w-2xl">
              Organizations have physics. Energy flows or it doesn't. We built a way to measure it.
            </p>

            {/* Friction vs Flow Visual */}
            <div className="flex justify-center mb-16">
              <div className="flex items-center gap-6 md:gap-12">

                {/* FRICTION: Energy hitting walls, getting stuck */}
                <div className="flex flex-col items-center">
                  <div className="relative w-32 h-32 mb-3">
                    {/* Vertical barriers */}
                    <div className="absolute left-[25%] top-2 bottom-2 w-1 bg-red-500/80" />
                    <div className="absolute left-[50%] top-4 bottom-4 w-1 bg-red-500/60" />
                    <div className="absolute left-[75%] top-2 bottom-2 w-1 bg-red-500/80" />

                    {/* Arrows hitting barriers and stopping */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                      {/* Arrow 1 - stopped at first barrier */}
                      <line x1="5" y1="25" x2="22" y2="25" stroke="#ef4444" strokeWidth="2" />
                      <polygon points="20,22 24,25 20,28" fill="#ef4444" />

                      {/* Arrow 2 - stopped at second barrier */}
                      <line x1="5" y1="50" x2="47" y2="50" stroke="#ef4444" strokeWidth="2" strokeOpacity="0.7" />
                      <polygon points="45,47 49,50 45,53" fill="#ef4444" fillOpacity="0.7" />

                      {/* Arrow 3 - stopped at first barrier */}
                      <line x1="5" y1="75" x2="22" y2="75" stroke="#ef4444" strokeWidth="2" />
                      <polygon points="20,72 24,75 20,78" fill="#ef4444" />

                      {/* Stuck energy - piling up */}
                      <circle cx="18" cy="35" r="2" fill="#ef4444" opacity="0.5" />
                      <circle cx="15" cy="40" r="2" fill="#ef4444" opacity="0.4" />
                      <circle cx="20" cy="65" r="2" fill="#ef4444" opacity="0.5" />
                    </svg>

                    {/* Heat/friction indicators */}
                    <div className="absolute left-[23%] top-1/4 w-2 h-2 bg-orange-500 rounded-full animate-pulse opacity-60" />
                    <div className="absolute left-[48%] top-1/2 w-2 h-2 bg-orange-500 rounded-full animate-pulse opacity-40" style={{ animationDelay: '300ms' }} />
                    <div className="absolute left-[73%] top-3/4 w-2 h-2 bg-orange-500 rounded-full animate-pulse opacity-60" style={{ animationDelay: '600ms' }} />
                  </div>
                  <span className="text-xs font-mono text-red-500">FRICTION</span>
                  <span className="text-[10px] text-zinc-600">Energy stuck at boundaries</span>
                </div>

                {/* Arrow showing GPI reveals this */}
                <div className="flex flex-col items-center">
                  <div className="text-zinc-600 text-xs font-mono mb-2">GPI</div>
                  <ArrowRight className="text-zinc-600" size={24} />
                  <div className="text-zinc-600 text-xs font-mono mt-2">REVEALS</div>
                </div>

                {/* FLOW: Energy moving freely through open channels */}
                <div className="flex flex-col items-center">
                  <div className="relative w-32 h-32 mb-3">
                    {/* Open channels - no barriers */}
                    <div className="absolute left-0 right-0 top-[20%] h-px bg-green-500/20" />
                    <div className="absolute left-0 right-0 top-[50%] h-px bg-green-500/20" />
                    <div className="absolute left-0 right-0 top-[80%] h-px bg-green-500/20" />

                    {/* Arrows flowing through */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                      {/* Arrow 1 - flowing through */}
                      <line x1="10" y1="20" x2="85" y2="20" stroke="#22c55e" strokeWidth="2">
                        <animate attributeName="x1" values="10;-20;10" dur="3s" repeatCount="indefinite" />
                        <animate attributeName="x2" values="85;55;85" dur="3s" repeatCount="indefinite" />
                      </line>
                      <polygon points="83,17 90,20 83,23" fill="#22c55e">
                        <animate attributeName="points" values="83,17 90,20 83,23;53,17 60,20 53,23;83,17 90,20 83,23" dur="3s" repeatCount="indefinite" />
                      </polygon>

                      {/* Arrow 2 - flowing through */}
                      <line x1="5" y1="50" x2="90" y2="50" stroke="#22c55e" strokeWidth="2" opacity="0.8">
                        <animate attributeName="x1" values="5;-25;5" dur="2.5s" repeatCount="indefinite" />
                        <animate attributeName="x2" values="90;60;90" dur="2.5s" repeatCount="indefinite" />
                      </line>
                      <polygon points="88,47 95,50 88,53" fill="#22c55e" opacity="0.8">
                        <animate attributeName="points" values="88,47 95,50 88,53;58,47 65,50 58,53;88,47 95,50 88,53" dur="2.5s" repeatCount="indefinite" />
                      </polygon>

                      {/* Arrow 3 - flowing through */}
                      <line x1="15" y1="80" x2="80" y2="80" stroke="#22c55e" strokeWidth="2">
                        <animate attributeName="x1" values="15;-15;15" dur="3.5s" repeatCount="indefinite" />
                        <animate attributeName="x2" values="80;50;80" dur="3.5s" repeatCount="indefinite" />
                      </line>
                      <polygon points="78,77 85,80 78,83" fill="#22c55e">
                        <animate attributeName="points" values="78,77 85,80 78,83;48,77 55,80 48,83;78,77 85,80 78,83" dur="3.5s" repeatCount="indefinite" />
                      </polygon>
                    </svg>
                  </div>
                  <span className="text-xs font-mono text-green-500">FLOW</span>
                  <span className="text-[10px] text-zinc-600">Energy moves freely</span>
                </div>
              </div>
            </div>

            {/* What We Do - Simple */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
              <div className="border border-zinc-800 p-6 hover:border-red-600 transition-all">
                <h3 className="font-black text-red-600 mb-1">MEASURE</h3>
                <p className="text-sm text-zinc-500">not prescribe</p>
              </div>
              <div className="border border-zinc-800 p-6 hover:border-red-600 transition-all">
                <h3 className="font-black text-red-600 mb-1">EXPOSE</h3>
                <p className="text-sm text-zinc-500">not advise</p>
              </div>
              <div className="border border-zinc-800 p-6 hover:border-red-600 transition-all">
                <h3 className="font-black text-red-600 mb-1">QUANTIFY</h3>
                <p className="text-sm text-zinc-500">not judge</p>
              </div>
              <div className="border border-zinc-800 p-6 hover:border-red-600 transition-all">
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

              <div>
                <h2 className="text-3xl font-black mb-6">MARCUS DAVIS</h2>
                <div className="space-y-4 text-zinc-300">
                  <p>Built GPI after measuring 100+ organizations.</p>
                  <p className="text-zinc-500">MS in Supply Chain + City Planning. Military logistics. Decade in China.</p>
                  <p className="text-lg font-black pt-4">
                    The pattern was clear: organizations fail when energy gets stuck at boundaries.
                  </p>
                  <p className="text-xl font-black text-red-600 pt-2">
                    GPI shows you exactly where.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-black mb-6">FIND YOUR FRICTION<span className="text-red-600">.</span></h3>
            <p className="text-xl text-zinc-400 mb-8">
              32 questions. 7 dimensions. See where energy gets stuck.
            </p>
            <Link
              href="/diagnostic"
              className="inline-flex items-center gap-2 bg-red-600 px-8 py-4 text-lg font-black hover:bg-red-700 transition-colors group"
            >
              TAKE THE DIAGNOSTIC
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
