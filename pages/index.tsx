import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import SEOHead from '../components/SEOHead';
import RelatedContent from '../components/RelatedContent';
import Navigation from '../components/Navigation';

const Home: NextPage = () => {
  return (
    <>
      <SEOHead
        title="IMAGINATION G - Agency Over Aesthetics. Signal Over Noise."
        description="Surface buried truth through signal amplification. Transform your business through binary decisions and forced progress. No consulting theater."
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
              "description": "Movement Architecture and Business Transformation. We don't consult. We collide.",
              "sameAs": [
                "https://twitter.com/imaginationg",
                "https://linkedin.com/company/imaginationg"
              ],
              "slogan": "Agency Over Aesthetics. Signal Over Noise.",
              "knowsAbout": [
                "Movement Architecture",
                "Signal Amplification",
                "Business Transformation",
                "Binary Decision Framework",
                "Clarity Catalyst"
              ],
              "offers": {
                "@type": "AggregateOffer",
                "name": "Business Transformation Services",
                "description": "From signal detection to truth amplification"
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
                  SIGNAL: ACTIVE
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1]">
                  AGENCY OVER<br />AESTHETICS<span className="text-red-600">.</span>
                </h1>
                
                <p className="text-xl text-zinc-400 mb-8 max-w-xl">
                  You didn't come to clean the edges. You came to dismantle what was never true.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <Link href="/ig-complete-flow" className="bg-red-600 px-8 py-4 text-lg font-black hover:bg-red-700 transition-colors text-center">
                    BUILD FROM REAL
                  </Link>
                  <Link href="/diagnostic" className="border-2 border-zinc-700 px-8 py-4 text-lg font-black hover:border-zinc-500 transition-colors text-center">
                    DETECT SIGNAL
                  </Link>
                </div>
              </div>

              {/* Right Column - Philosophy Grid */}
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="border border-zinc-800 p-6 hover:border-red-600 transition-colors">
                    <h3 className="font-black text-red-600 mb-2">SIGNAL</h3>
                    <p className="text-sm text-zinc-400">over noise</p>
                  </div>
                  <div className="border border-zinc-800 p-6 hover:border-red-600 transition-colors">
                    <h3 className="font-black text-red-600 mb-2">OVERRIDE</h3>
                    <p className="text-sm text-zinc-400">over optimize</p>
                  </div>
                  <div className="border border-zinc-800 p-6 hover:border-red-600 transition-colors">
                    <h3 className="font-black text-red-600 mb-2">FUNCTION</h3>
                    <p className="text-sm text-zinc-400">over form</p>
                  </div>
                  <div className="border border-zinc-800 p-6 hover:border-red-600 transition-colors">
                    <h3 className="font-black text-red-600 mb-2">TRUTH</h3>
                    <p className="text-sm text-zinc-400">over consensus</p>
                  </div>
                </div>
                
                <div className="bg-zinc-950 border border-zinc-800 p-8">
                  <p className="text-lg font-bold mb-4">We don't build brands.</p>
                  <p className="text-zinc-400">
                    We surface buried truth. We amplify signal. What we build reflects what you already knew. 
                    Organizations in alignment move naturally.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Content Section */}
        <section className="py-16 px-6 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <RelatedContent
              title="Start Your Signal Journey"
              items={[
                {
                  href: "/answers/glossary/nexel",
                  title: "What is Your Nexel?",
                  description: "Your behavioral identity marker. How you move through constraint.",
                  color: "red"
                },
                {
                  href: "/answers/glossary/soreth",
                  title: "Eliminate Soreth",
                  description: "Systemic friction draining your energy. Make it visible, then kill it.",
                  color: "yellow"
                },
                {
                  href: "/services/clarity-catalyst-call",
                  title: "Amplify Your Signal",
                  description: "45-minute truth amplification. No optimization theater.",
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

export default Home;