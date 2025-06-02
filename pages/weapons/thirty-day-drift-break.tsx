import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const ThirtyDayDriftBreakPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>30-DAY DRIFT BREAK | IMAGINATION G</title>
        <meta name="description" content="Forced movement. You act or you admit defeat." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "30-Day Drift Break",
              "description": "Intensive 30-day program to break organizational drift patterns and force movement",
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
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-4">30-DAY DRIFT BREAK</h1>
              <p className="text-3xl md:text-4xl font-black text-red-500 mb-2">$3,000</p>
              <p className="text-zinc-400">Forced movement. You act or you admit defeat.</p>
            </div>

            {/* Quote Box */}
            <div className="bg-zinc-900 border border-zinc-800 p-8 mb-12">
              <p className="text-xl font-bold mb-4">
                You've been "planning" for months. Maybe years.
              </p>
              <p className="text-zinc-400 mb-4">Another strategy session won't save you.</p>
              <p className="text-zinc-400 mb-4">Another framework won't move you.</p>
              <p className="text-zinc-400 mb-4">Another mentor won't push you.</p>
              <p className="text-white font-bold">Only movement moves you.</p>
            </div>

            {/* The Contract */}
            <section className="mb-12">
              <h2 className="text-2xl font-black mb-6">THE CONTRACT:</h2>
              <p className="text-zinc-400 mb-2">30 days. Daily accountability.</p>
              <p className="text-zinc-400 mb-2">One action per day. No excuses.</p>
              <p className="text-zinc-400 mb-2">Miss a day? You're out. No refund.</p>
              <p className="text-red-500 font-bold">Move or admit you're a coward.</p>
            </section>

            {/* The Rules */}
            <section className="mb-12">
              <h2 className="text-2xl font-black mb-6">THE RULES:</h2>
              <ol className="space-y-2">
                <li className="text-zinc-400">1. One move per day. Documented.</li>
                <li className="text-zinc-400">2. No planning. Only action.</li>
                <li className="text-zinc-400">3. No meetings about meetings.</li>
                <li className="text-zinc-400">4. No "research." Ship or shut up.</li>
                <li className="text-red-500 font-bold">5. Miss one day? You're out. Forever.</li>
              </ol>
            </section>

            {/* What Counts */}
            <section className="mb-12">
              <h2 className="text-2xl font-black mb-6">WHAT COUNTS AS MOVEMENT:</h2>
              <p className="text-zinc-400 mb-2">• Money in the bank</p>
              <p className="text-zinc-400 mb-2">• Product shipped</p>
              <p className="text-zinc-400 mb-2">• Customer contacted</p>
              <p className="text-zinc-400 mb-2">• Thing built</p>
              <p className="text-white font-bold">• Blood spilled</p>
            </section>

            {/* What Doesn't */}
            <section className="mb-12">
              <h2 className="text-2xl font-black mb-6">WHAT DOESN'T:</h2>
              <div className="grid grid-cols-2 gap-4 text-zinc-400">
                <div>
                  <p>Planning</p>
                  <p>Researching</p>
                  <p>Networking</p>
                  <p>Brainstorming</p>
                </div>
                <div>
                  <p>Strategizing</p>
                  <p>Optimizing</p>
                  <p>Pivoting</p>
                  <p>Thinking</p>
                </div>
              </div>
            </section>

            {/* The Truth */}
            <section className="mb-16">
              <h2 className="text-2xl font-black mb-6">THE TRUTH:</h2>
              <p className="text-zinc-400 mb-2">You don't need more time.</p>
              <p className="text-zinc-400 mb-2">You don't need more money.</p>
              <p className="text-zinc-400 mb-4">You don't need more advice.</p>
              <p className="text-red-500 font-bold text-xl">You need to move. Now. Or never.</p>
            </section>

            {/* Warning Box */}
            <div className="bg-red-900 border border-red-500 p-8 mb-12">
              <h3 className="text-2xl font-black mb-4 text-red-500">WARNING:</h3>
              <p className="text-white mb-2">This is our most intensive intervention.</p>
              <p className="text-white mb-2">Most people quit by day 7.</p>
              <p className="text-white mb-2">The rest quit by day 14.</p>
              <p className="text-white font-bold">If you're going to quit, don't start.</p>
            </div>

            {/* Still Reading */}
            <section className="mb-16 text-center">
              <h3 className="text-2xl font-black mb-4">STILL READING?</h3>
              <p className="text-zinc-400 mb-2">That's the problem.</p>
              <p className="text-zinc-400 mb-8">You read. You plan. You think.</p>
              <p className="text-white font-bold mb-2">But you don't move.</p>
            </section>

            {/* Main CTA */}
            <div className="text-center mb-16">
              <a 
                href="https://outlook.office.com/owa/calendar/IG@imaginationg.studio/bookings/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-red-500 hover:bg-red-600 text-white px-12 py-6 text-2xl font-black transition-colors"
              >
                OVERRIDE NOW. OR OPTIMIZE FOREVER.
              </a>
            </div>

            {/* Next Weapon */}
            <div className="text-center text-zinc-600">
              <p className="mb-4">Next intervention:</p>
              <Link href="/weapons/first-blood-build" className="text-white hover:text-zinc-400 transition-colors">
                FIRST BLOOD BUILD →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThirtyDayDriftBreakPage;