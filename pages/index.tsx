import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import SEOHead from '../components/SEOHead';
import Navigation from '../components/Navigation';

const Home: NextPage = () => {
  return (
    <>
      <SEOHead
        title="IMAGINATION G - Stop Optimizing Around Problems. Fix Them."
        description="Interactive intervention portals. Break stuck patterns, name buried truth, build working MVPs. No consulting theater. Just action."
        ogImage="/images/og-home.svg"
      />
      
      <Head>
        {/* Schema.org markup for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://www.imaginationg.studio/#organization",
              "name": "IMAGINATION G",
              "url": "https://www.imaginationg.studio",
              "logo": "https://www.imaginationg.studio/logo.png",
              "description": "Interactive intervention portals for breaking stuck patterns and shipping real solutions.",
              "sameAs": [
                "https://twitter.com/imaginationg",
                "https://linkedin.com/company/imaginationg"
              ],
              "slogan": "Stop optimizing around problems. Fix them.",
              "knowsAbout": [
                "Pattern Breaking",
                "Truth Excavation", 
                "MVP Development",
                "Business Interventions",
                "Interactive Portals"
              ],
              "offers": {
                "@type": "AggregateOffer",
                "name": "Business Intervention Portals",
                "description": "From pattern breaking to working MVPs"
              }
            })
          }}
        />
      </Head>
      
      <div className="min-h-screen bg-black text-white">
        {/* Navigation Bar */}
        <Navigation currentPage="home" />

        {/* Hero Section */}
        <section className="pt-24 pb-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
              {/* Left Column - Main Content */}
              <div>
                {/* System Status Badge */}
                <div className="inline-block mb-8 text-green-400 text-xs font-mono bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-full">
                  <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                  PORTALS: ACTIVE
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1]">
                  STOP OPTIMIZING<br />AROUND PROBLEMS<span className="text-red-600">.</span>
                </h1>
                
                <p className="text-xl text-zinc-400 mb-8 max-w-xl">
                  Fix them. Break stuck patterns. Name buried truth. Ship working solutions. No meetings about meetings.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <Link href="/start" className="bg-red-600 px-8 py-4 text-lg font-black hover:bg-red-700 transition-colors text-center">
                    DETECT PATTERN
                  </Link>
                  <Link href="/not-ready" className="border-2 border-zinc-700 px-8 py-4 text-lg font-black hover:border-zinc-500 transition-colors text-center">
                    NOT READY
                  </Link>
                </div>
              </div>

              {/* Right Column - Intervention Grid */}
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="border border-zinc-800 p-6 hover:border-red-600 transition-colors">
                    <h3 className="font-black text-red-600 mb-2">NAMING</h3>
                    <p className="text-sm text-zinc-400">Surface buried truth</p>
                  </div>
                  <div className="border border-zinc-800 p-6 hover:border-red-600 transition-colors">
                    <h3 className="font-black text-red-600 mb-2">MAP</h3>
                    <p className="text-sm text-zinc-400">Find real connections</p>
                  </div>
                  <div className="border border-zinc-800 p-6 hover:border-red-600 transition-colors">
                    <h3 className="font-black text-red-600 mb-2">SMACKDOWN</h3>
                    <p className="text-sm text-zinc-400">GO or NO-GO verdict</p>
                  </div>
                  <div className="border border-zinc-800 p-6 hover:border-red-600 transition-colors">
                    <h3 className="font-black text-red-600 mb-2">OVERRIDE</h3>
                    <p className="text-sm text-zinc-400">Break stuck patterns</p>
                  </div>
                </div>
                
                <div className="bg-zinc-950 border border-zinc-800 p-8">
                  <p className="text-lg font-bold mb-4">We don't consult. We intervene.</p>
                  <p className="text-zinc-400">
                    Interactive portals. Daily progress via Teams. Real action, not strategy documents. 
                    Fix the pattern or ship the MVP. No optimization theater.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default Home;