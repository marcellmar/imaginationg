import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const TheMarketSmackdownPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>THE MARKET SMACKDOWN | IMAGINATION G</title>
        <meta name="description" content="The market already told you 'no.' Face it." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "The Market Smackdown",
              "description": "Brutal market reality assessment to confront failed assumptions and pivot strategy",
              "provider": {
                "@type": "Organization",
                "name": "IMAGINATION G",
                "url": "https://www.imaginationg.studio"
              },
              "areaServed": "Worldwide",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Business Transformation Services"
              }
            })
          }}
        />
      </Head>

      <div className="min-h-screen bg-black text-white">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 bg-black z-50 border-b border-zinc-800">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/" className="text-xl font-black">IMAGINATION G</Link>
            <div className="flex items-center gap-6">
              <Link href="/" className="text-sm hover:text-zinc-400">← Home</Link>
              <Link href="/weapons" className="text-sm hover:text-zinc-400">Weapons</Link>
              <Link href="/about" className="text-sm hover:text-zinc-400">About</Link>
              <Link href="/diagnostic" className="bg-white text-black px-4 py-2 text-sm font-bold hover:bg-zinc-200">
                Book a Call
              </Link>
            </div>
          </div>
        </nav>

        <div className="pt-24 pb-20 px-6">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-4">THE MARKET SMACKDOWN</h1>
              <p className="text-3xl md:text-4xl font-black text-red-500 mb-2">$1,500</p>
              <p className="text-zinc-400">The market already told you 'no.' Face it.</p>
            </div>

            {/* Quote Box */}
            <div className="bg-zinc-900 border border-zinc-800 p-8 mb-12">
              <p className="text-xl font-bold mb-4">
                The market isn't confused. You are.
              </p>
              <p className="text-zinc-400 mb-4">They said no.</p>
              <p className="text-zinc-400 mb-4">Multiple times.</p>
              <p className="text-zinc-400 mb-4">In multiple ways.</p>
              <p className="text-white font-bold">You just weren't listening.</p>
            </div>

            {/* The Process */}
            <section className="mb-12">
              <h2 className="text-2xl font-black mb-6">THE PROCESS:</h2>
              <p className="text-zinc-400 mb-2">5-7 days of market truth.</p>
              <p className="text-zinc-400 mb-2">We talk to the people who said no.</p>
              <p className="text-zinc-400 mb-2">We document why they walked.</p>
              <p className="text-red-500 font-bold">Then we make you read it. All of it.</p>
            </section>

            {/* What We Deliver */}
            <section className="mb-12">
              <h2 className="text-2xl font-black mb-6">WHAT WE DELIVER:</h2>
              <ol className="space-y-2">
                <li className="text-zinc-400">1. The real reason they said no (not the polite one)</li>
                <li className="text-zinc-400">2. The problem they actually have (not what you think)</li>
                <li className="text-zinc-400">3. The price they'd actually pay (spoiler: it's not what you charged)</li>
                <li className="text-zinc-400">4. The competitor they chose instead (and why)</li>
                <li className="text-red-500 font-bold">5. The move you should have made (too late now)</li>
              </ol>
            </section>

            {/* What You'll Learn */}
            <section className="mb-12">
              <h2 className="text-2xl font-black mb-6">WHAT YOU'LL LEARN:</h2>
              <p className="text-zinc-400 mb-2">Your pitch was wrong.</p>
              <p className="text-zinc-400 mb-2">Your price was wrong.</p>
              <p className="text-zinc-400 mb-2">Your product was wrong.</p>
              <p className="text-zinc-400 mb-2">Your timing was wrong.</p>
              <p className="text-white font-bold">Everything was wrong. Now what?</p>
            </section>

            {/* What We Don't Do */}
            <section className="mb-12">
              <h2 className="text-2xl font-black mb-6">WHAT WE DON'T DO:</h2>
              <div className="grid grid-cols-2 gap-4 text-zinc-400">
                <div>
                  <p>No market research</p>
                  <p>No surveys</p>
                  <p>No focus groups</p>
                  <p>No validation</p>
                </div>
                <div>
                  <p>No pivoting</p>
                  <p>No iterating</p>
                  <p>No optimizing</p>
                  <p>No hope</p>
                </div>
              </div>
            </section>

            {/* The Truth */}
            <section className="mb-16">
              <h2 className="text-2xl font-black mb-6">THE TRUTH:</h2>
              <p className="text-zinc-400 mb-2">The market already spoke.</p>
              <p className="text-zinc-400 mb-2">Loud and clear.</p>
              <p className="text-zinc-400 mb-4">You just didn't want to hear it.</p>
              <p className="text-red-500 font-bold text-xl">Face it now or fail forever.</p>
            </section>

            {/* CTA Box */}
            <div className="bg-zinc-900 border border-zinc-800 p-8 mb-12">
              <h3 className="text-2xl font-black mb-4">NOT SURE THIS IS YOUR WEAPON?</h3>
              <p className="text-zinc-400 mb-6">
                Take the 60-second drift diagnostic. Find out if the market hates you or you hate yourself.
              </p>
              <Link 
                href="/diagnostic"
                className="inline-block bg-zinc-800 hover:bg-zinc-700 text-white px-6 py-3 font-bold transition-colors"
              >
                TAKE THE DIAGNOSTIC
              </Link>
            </div>

            {/* Still Reading */}
            <section className="mb-16 text-center">
              <h3 className="text-2xl font-black mb-4">STILL READING?</h3>
              <p className="text-zinc-400 mb-2">You know they said no.</p>
              <p className="text-zinc-400 mb-8">You know why.</p>
              <p className="text-white font-bold mb-2">Face it or keep bleeding.</p>
            </section>

            {/* Main CTA */}
            <div className="text-center mb-16">
              <a 
                href="https://outlook.office.com/owa/calendar/IG@imaginationg.studio/bookings/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-red-500 hover:bg-red-600 text-white px-12 py-6 text-2xl font-black transition-colors"
              >
                FACE THE TRUTH. OR KEEP LYING.
              </a>
            </div>

            {/* Next Weapon */}
            <div className="text-center text-zinc-600">
              <p className="mb-4">Next weapon:</p>
              <Link href="/weapons/thirty-day-drift-break" className="text-white hover:text-zinc-400 transition-colors">
                30-DAY DRIFT BREAK →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TheMarketSmackdownPage;