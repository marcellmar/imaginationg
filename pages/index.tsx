import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>IMAGINATION G - Stop Drifting. Start Moving.</title>
        <meta name="description" content="Stop organizational drift with Movement Architecture. Transform your business in 30 days through binary decisions and forced progress. No consulting theater." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
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
              "slogan": "Stop Drifting. Start Moving.",
              "knowsAbout": [
                "Movement Architecture",
                "Organizational Drift",
                "Business Transformation",
                "Binary Decision Framework",
                "Clarity Catalyst"
              ],
              "offers": {
                "@type": "AggregateOffer",
                "name": "Business Transformation Services",
                "description": "From drift diagnosis to movement implementation"
              }
            })
          }}
        />
      </Head>
      
      <div className="min-h-screen bg-black text-white">
        <section className="relative min-h-screen flex items-center justify-center px-4">
          <div className="relative z-10 text-center max-w-5xl mx-auto">
            
            {/* System status */}
            <div className="mb-8 text-green-400 text-sm font-mono bg-black border border-zinc-800 p-4">
              <p>SYSTEM STATUS:</p>
              <p>→ Signal clarity: ACTIVE</p>
              <p>→ Override protocols: ENABLED</p>
              <p>→ Truth detection: RUNNING</p>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight">
              AGENCY OVER AESTHETICS<span className="text-red-600">.</span><br />
              SIGNAL OVER NOISE<span className="text-red-600">.</span><br />
              OVERRIDE OVER OPTIMIZE<span className="text-red-600">.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-zinc-400 mb-12 leading-relaxed">
              You didn't come to clean the edges.<br />
              You came to dismantle what was never true.<br />
              This isn't about looking right.<br />
              It's about building from the only thing that lasts—what's real.
            </p>
            
            <div className="space-y-2 mb-12 text-zinc-300">
              <p>We don't build brands. We surface the buried truth.</p>
              <p>We don't insert ideas. We amplify signal.</p>
              <p>What we build reflects what you already knew.</p>
              <p>Organizations in alignment move naturally.</p>
            </div>
            
            <p className="text-5xl md:text-7xl font-black text-red-600 mb-8">
              ARE YOU IN<span className="text-white">?</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/ig-complete-flow" className="bg-red-600 px-12 py-6 text-2xl font-black hover:bg-red-700 transition-colors">
                BUILD FROM REAL
              </Link>
              <Link href="/read-only" className="border border-zinc-600 px-12 py-6 text-2xl font-black text-zinc-400 hover:bg-zinc-900 transition-colors inline-block text-center">
                CLEAN THE EDGES
              </Link>
            </div>
            
            <p className="text-zinc-500 mt-8">
              Truth doesn't need permission to exist.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;