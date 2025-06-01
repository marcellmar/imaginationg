import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const TheMapPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>THE MAP | IMAGINATION G</title>
        <meta name="description" content="Your network is dead. We show you where to collide." />
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
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-4">THE MAP</h1>
              <p className="text-3xl md:text-4xl font-black text-red-500 mb-2">$1,000</p>
              <p className="text-zinc-400">Your network is dead. We show you where to collide.</p>
            </div>

            {/* Quote Box */}
            <div className="bg-zinc-900 border border-zinc-800 p-8 mb-12">
              <p className="text-xl font-bold mb-4">
                You're playing the wrong game with the wrong people.
              </p>
              <p className="text-zinc-400 mb-4">Your "network" is a graveyard.</p>
              <p className="text-zinc-400 mb-4">Dead connections. Dead ideas. Dead ends.</p>
              <p className="text-zinc-400 mb-4">We don't expand your network.</p>
              <p className="text-white font-bold">We show you who to collide with.</p>
            </div>

            {/* The Process */}
            <section className="mb-12">
              <h2 className="text-2xl font-black mb-6">THE PROCESS:</h2>
              <p className="text-zinc-400 mb-2">7 days. No meetings. No intros.</p>
              <p className="text-zinc-400 mb-2">We dissect your ecosystem.</p>
              <p className="text-zinc-400 mb-2">We map the collisions you're avoiding.</p>
              <p className="text-red-500 font-bold">Then we hand you the map and leave.</p>
            </section>

            {/* What We Map */}
            <section className="mb-12">
              <h2 className="text-2xl font-black mb-6">WHAT WE MAP:</h2>
              <ol className="space-y-2">
                <li className="text-zinc-400">1. The people using you (cut them)</li>
                <li className="text-zinc-400">2. The people you're avoiding (face them)</li>
                <li className="text-zinc-400">3. The collision points (use them)</li>
                <li className="text-zinc-400">4. The escape routes (close them)</li>
                <li className="text-red-500 font-bold">5. The one move that matters (make it)</li>
              </ol>
            </section>

            {/* What You Get */}
            <section className="mb-12">
              <h2 className="text-2xl font-black mb-6">WHAT YOU GET:</h2>
              <p className="text-zinc-400 mb-2">One document.</p>
              <p className="text-zinc-400 mb-2">Five names.</p>
              <p className="text-zinc-400 mb-2">Three collisions.</p>
              <p className="text-zinc-400 mb-2">One move.</p>
              <p className="text-white font-bold">No follow-up. No hand-holding.</p>
            </section>

            {/* What We Don't Do */}
            <section className="mb-12">
              <h2 className="text-2xl font-black mb-6">WHAT WE DON'T DO:</h2>
              <div className="grid grid-cols-2 gap-4 text-zinc-400">
                <div>
                  <p>No networking events</p>
                  <p>No LinkedIn strategies</p>
                  <p>No warm intros</p>
                  <p>No coffee chats</p>
                </div>
                <div>
                  <p>No follow-up emails</p>
                  <p>No relationship building</p>
                  <p>No community building</p>
                  <p>No bullshit</p>
                </div>
              </div>
            </section>

            {/* The Truth */}
            <section className="mb-16">
              <h2 className="text-2xl font-black mb-6">THE TRUTH:</h2>
              <p className="text-zinc-400 mb-2">Your network isn't small.</p>
              <p className="text-zinc-400 mb-2">It's dead.</p>
              <p className="text-zinc-400 mb-4">And you killed it with politeness.</p>
              <p className="text-red-500 font-bold text-xl">Time to collide or stay buried.</p>
            </section>

            {/* CTA Box */}
            <div className="bg-zinc-900 border border-zinc-800 p-8 mb-12">
              <h3 className="text-2xl font-black mb-4">NOT SURE THIS IS YOUR WEAPON?</h3>
              <p className="text-zinc-400 mb-6">
                Take the 60-second drift diagnostic. Find out if you're moving or just networking.
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
              <p className="text-zinc-400 mb-2">You already know your network is dead.</p>
              <p className="text-zinc-400 mb-8">Stop pretending otherwise.</p>
              <p className="text-white font-bold mb-2">Get the map or keep drowning.</p>
            </section>

            {/* Main CTA */}
            <div className="text-center mb-16">
              <a 
                href="https://outlook.office.com/owa/calendar/IG@imaginationg.studio/bookings/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-red-500 hover:bg-red-600 text-white px-12 py-6 text-2xl font-black transition-colors"
              >
                GET THE MAP. OR KEEP PRETENDING.
              </a>
            </div>

            {/* Next Weapon */}
            <div className="text-center text-zinc-600">
              <p className="mb-4">Next weapon:</p>
              <Link href="/weapons/the-market-smackdown" className="text-white hover:text-zinc-400 transition-colors">
                THE MARKET SMACKDOWN →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TheMapPage;