import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const FirstBloodBuildPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>FIRST BLOOD BUILD | IMAGINATION G</title>
        <meta name="description" content="Build the thing that bruises. Fast. Ugly." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "First Blood Build",
              "description": "Rapid prototype development to test market assumptions and force early feedback",
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
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-4">FIRST BLOOD BUILD</h1>
              <p className="text-3xl md:text-4xl font-black text-red-500 mb-2">$5,000</p>
              <p className="text-zinc-400">Build the thing that bruises. Fast. Ugly.</p>
            </div>

            {/* Quote Box */}
            <div className="bg-zinc-900 border border-zinc-800 p-8 mb-12">
              <p className="text-xl font-bold mb-4">
                You've been perfecting for months.
              </p>
              <p className="text-zinc-400 mb-4">Polishing the deck.</p>
              <p className="text-zinc-400 mb-4">Refining the pitch.</p>
              <p className="text-zinc-400 mb-4">Tweaking the vision.</p>
              <p className="text-white font-bold">Meanwhile, someone uglier is eating your lunch.</p>
            </div>

            {/* The Deal */}
            <section className="mb-12">
              <h2 className="text-2xl font-black mb-6">THE DEAL:</h2>
              <p className="text-zinc-400 mb-2">6 weeks. One thing. Shipped.</p>
              <p className="text-zinc-400 mb-2">Not perfect. Not pretty. Not polished.</p>
              <p className="text-zinc-400 mb-2">Just real. In the market. Making money.</p>
              <p className="text-red-500 font-bold">Or bleeding trying.</p>
            </section>

            {/* What We Build */}
            <section className="mb-12">
              <h2 className="text-2xl font-black mb-6">WHAT WE BUILD:</h2>
              <ol className="space-y-2">
                <li className="text-zinc-400">1. The thing that tests your truth</li>
                <li className="text-zinc-400">2. The offer that bruises</li>
                <li className="text-zinc-400">3. The prototype that sells</li>
                <li className="text-zinc-400">4. The MVP that actually is minimal</li>
                <li className="text-red-500 font-bold">5. The thing you're scared to ship</li>
              </ol>
            </section>

            {/* The Process */}
            <section className="mb-12">
              <h2 className="text-2xl font-black mb-6">THE PROCESS:</h2>
              <p className="text-zinc-400 mb-2">Week 1-2: Strip it to the bone</p>
              <p className="text-zinc-400 mb-2">Week 3-4: Build the ugly version</p>
              <p className="text-zinc-400 mb-2">Week 5: Get someone to pay</p>
              <p className="text-zinc-400 mb-2">Week 6: Ship or shut down</p>
              <p className="text-white font-bold">No extensions. No excuses.</p>
            </section>

            {/* What We Don't Do */}
            <section className="mb-12">
              <h2 className="text-2xl font-black mb-6">WHAT WE DON'T DO:</h2>
              <div className="grid grid-cols-2 gap-4 text-zinc-400">
                <div>
                  <p>No perfecting</p>
                  <p>No polishing</p>
                  <p>No pivoting</p>
                  <p>No planning</p>
                </div>
                <div>
                  <p>No committees</p>
                  <p>No consensus</p>
                  <p>No comfort</p>
                  <p>No crying</p>
                </div>
              </div>
            </section>

            {/* The Truth */}
            <section className="mb-16">
              <h2 className="text-2xl font-black mb-6">THE TRUTH:</h2>
              <p className="text-zinc-400 mb-2">Your perfect idea is worthless.</p>
              <p className="text-zinc-400 mb-2">Your polished pitch is pointless.</p>
              <p className="text-zinc-400 mb-4">Your refined vision is irrelevant.</p>
              <p className="text-red-500 font-bold text-xl">Only what ships matters.</p>
            </section>

            {/* Warning Box */}
            <div className="bg-red-900 border border-red-500 p-8 mb-12">
              <h3 className="text-2xl font-black mb-4 text-red-500">WARNING:</h3>
              <p className="text-white mb-2">This will hurt.</p>
              <p className="text-white mb-2">You will bleed.</p>
              <p className="text-white mb-2">Your ego will die.</p>
              <p className="text-white font-bold">Good. That's the point.</p>
            </div>

            {/* Requirements */}
            <section className="mb-16">
              <h2 className="text-2xl font-black mb-6">REQUIREMENTS:</h2>
              <p className="text-zinc-400 mb-2">• Ready to ship ugly</p>
              <p className="text-zinc-400 mb-2">• Willing to bleed</p>
              <p className="text-zinc-400 mb-2">• Done perfecting</p>
              <p className="text-zinc-400 mb-2">• Tired of talking</p>
              <p className="text-red-500 font-bold">• Desperate enough to act</p>
            </section>

            {/* Still Reading */}
            <section className="mb-16 text-center">
              <h3 className="text-2xl font-black mb-4">STILL READING?</h3>
              <p className="text-zinc-400 mb-2">Of course you are.</p>
              <p className="text-zinc-400 mb-8">Reading is safe. Building bleeds.</p>
              <p className="text-white font-bold mb-2">Choose your pain.</p>
            </section>

            {/* Main CTA */}
            <div className="text-center mb-16">
              <a 
                href="https://outlook.office.com/owa/calendar/IG@imaginationg.studio/bookings/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-red-500 hover:bg-red-600 text-white px-12 py-6 text-2xl font-black transition-colors"
              >
                SHIP FUNCTION. OR POLISH FOREVER.
              </a>
            </div>

            {/* Back to Weapons */}
            <div className="text-center text-zinc-600">
              <Link href="/weapons" className="text-white hover:text-zinc-400 transition-colors">
                ← Back to interventions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstBloodBuildPage;