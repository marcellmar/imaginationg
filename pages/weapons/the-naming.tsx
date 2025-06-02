import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const TheNamingPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>THE NAMING | IMAGINATION G</title>
        <meta name="description" content="Surface the buried signal. Say what you've been building around instead of from." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "The Naming",
              "description": "60-minute clarity catalyst session to identify and name what's broken in your business",
              "provider": {
                "@type": "Organization",
                "name": "IMAGINATION G",
                "url": "https://www.imaginationg.studio"
              },
              "areaServed": "Worldwide",
              "offers": {
                "@type": "Offer",
                "price": "500",
                "priceCurrency": "USD",
                "description": "Single 60-minute session"
              },
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
              <Link href="/weapons" className="text-sm hover:text-zinc-400">Interventions</Link>
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
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-4">THE NAMING</h1>
              <p className="text-3xl md:text-4xl font-black text-red-500 mb-2">$500</p>
              <p className="text-zinc-400">Surface the buried signal. Say what you've been building around instead of from.</p>
            </div>

            {/* Quote Box */}
            <div className="bg-zinc-900 border border-zinc-800 p-8 mb-12">
              <p className="text-xl font-bold mb-4">
                This is not therapy. This is not coaching. This is THE NAMING.
              </p>
              <p className="text-zinc-400 mb-4">You've been building around the truth instead of from it.</p>
              <p className="text-zinc-400 mb-4">Your system knows what's buried.</p>
              <p className="text-zinc-400 mb-4">Your signal is whispering under the noise.</p>
              <p className="text-white font-bold">Now you amplify it out loud.</p>
            </div>

            {/* The Room */}
            <section className="mb-12">
              <h2 className="text-2xl font-black mb-6">THE SIGNAL CHAMBER:</h2>
              <p className="text-zinc-400 mb-2">Four walls. Two chairs. One truth detector.</p>
              <p className="text-zinc-400 mb-2">You sit. You surface. Or you stay buried.</p>
              <p className="text-red-500 font-bold">We don't amplify noise.</p>
            </section>

            {/* The Rules */}
            <section className="mb-12">
              <h2 className="text-2xl font-black mb-6">THE PROTOCOLS:</h2>
              <ol className="space-y-2">
                <li className="text-zinc-400">1. We don't talk. You amplify.</li>
                <li className="text-zinc-400">2. We don't guide. You surface.</li>
                <li className="text-zinc-400">3. We don't insert ideas. You recognize signal.</li>
                <li className="text-zinc-400">4. We don't judge truth. You name it.</li>
                <li className="text-red-500 font-bold">5. At 60 minutes, signal detected or not.</li>
              </ol>
            </section>

            {/* What Happens */}
            <section className="mb-12">
              <h2 className="text-2xl font-black mb-6">WHAT HAPPENS:</h2>
              <p className="text-zinc-400 mb-2">You book. You show up. You sit.</p>
              <p className="text-zinc-400 mb-2">The truth detector activates.</p>
              <p className="text-zinc-400 mb-2">You name what you've been building around.</p>
              <p className="text-zinc-400 mb-2">Or you sit with the buried signal.</p>
              <p className="text-zinc-400 mb-2">Or the noise gets louder and you leave.</p>
              <p className="text-white font-bold">All paths end the same: Signal clear or not at 60.</p>
            </section>

            {/* What We Don't Do */}
            <section className="mb-12">
              <h2 className="text-2xl font-black mb-6">WHAT WE DON'T DO:</h2>
              <div className="grid grid-cols-2 gap-4 text-zinc-400">
                <div>
                  <p>No frameworks</p>
                  <p>No worksheets</p>
                  <p>No follow-up</p>
                  <p>No check-ins</p>
                </div>
                <div>
                  <p>No advice</p>
                  <p>No solutions</p>
                  <p>No next steps</p>
                  <p>No care</p>
                </div>
              </div>
            </section>

            {/* The Truth */}
            <section className="mb-16">
              <h2 className="text-2xl font-black mb-6">THE SIGNAL:</h2>
              <p className="text-zinc-400 mb-2">Your system already knows what's buried.</p>
              <p className="text-zinc-400 mb-2">The signal's been whispering for months. Maybe years.</p>
              <p className="text-zinc-400 mb-4">You just need the amplifier.</p>
              <p className="text-red-500 font-bold text-xl">This is the amplifier.</p>
            </section>

            {/* CTA Box */}
            <div className="bg-zinc-900 border border-zinc-800 p-8 mb-12">
              <h3 className="text-2xl font-black mb-4">SIGNAL UNCLEAR?</h3>
              <p className="text-zinc-400 mb-6">
                Run the signal detection. Find out what truth you've been building around.
              </p>
              <Link 
                href="/diagnostic"
                className="inline-block bg-zinc-800 hover:bg-zinc-700 text-white px-6 py-3 font-bold transition-colors"
              >
                RUN DIAGNOSTIC
              </Link>
            </div>

            {/* Still Reading */}
            <section className="mb-16 text-center">
              <h3 className="text-2xl font-black mb-4">STILL READING?</h3>
              <p className="text-zinc-400 mb-2">You're in noise mode.</p>
              <p className="text-zinc-400 mb-8">Which proves the signal is buried.</p>
              <p className="text-white font-bold mb-2">Amplify truth or stay buried.</p>
            </section>

            {/* Main CTA */}
            <div className="text-center mb-16">
              <a 
                href="https://outlook.office.com/owa/calendar/IG@imaginationg.studio/bookings/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-red-500 hover:bg-red-600 text-white px-12 py-6 text-2xl font-black transition-colors"
              >
                AMPLIFY SIGNAL. OR STAY BURIED.
              </a>
            </div>

            {/* Next Weapon */}
            <div className="text-center text-zinc-600">
              <p className="mb-4">Next intervention:</p>
              <Link href="/weapons/the-map" className="text-white hover:text-zinc-400 transition-colors">
                THE MAP →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TheNamingPage;