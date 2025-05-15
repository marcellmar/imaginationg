import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const TheMapPage = () => {
  return (
    <>
      <Head>
        <title>THE MAP | $1,000 | IMAGINATION G</title>
        <meta name="description" content="Your network is dead. We show you the collisions you've been pretending aren't there. Use the map. Or drift back into fake connections." />
      </Head>

      <div className="min-h-screen bg-black text-white font-sans">
        {/* Navigation */}
        <nav className="bg-black bg-opacity-95 backdrop-blur-sm shadow-lg px-6 py-4 fixed top-0 left-0 right-0 z-50">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <Link href="/" className="text-xl font-bold tracking-wider">IMAGINATION G</Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="hover:text-gray-300 transition-colors flex items-center gap-1">
                <span>←</span> Home
              </Link>
              <Link href="/weapons" className="hover:text-gray-300 transition-colors">Weapons</Link>
              <Link href="/about" className="hover:text-gray-300 transition-colors">About</Link>
              <a
                href="https://outlook.office.com/owa/calendar/IG@imaginationg.studio/bookings/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-6 py-2 font-medium hover:bg-gray-200 transition-all inline-block">
                Book a Call
              </a>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="pt-32 pb-16 px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-black mb-6">THE MAP</h1>
            <p className="text-2xl md:text-3xl text-red-500 font-bold mb-4">$1,000</p>
            <p className="text-xl text-zinc-500">7 days. Real collisions. No more hiding.</p>
          </div>
        </header>

        {/* Main Content */}
        <main className="px-6 pb-20">
          <div className="max-w-4xl mx-auto">
            {/* Opening Statement */}
            <div className="bg-zinc-900 p-8 mb-12">
              <h2 className="text-3xl font-bold mb-6">Your network is dead.</h2>
              <div className="space-y-4 text-lg text-zinc-400">
                <p className="text-white font-bold text-2xl">You know it. They know it.</p>
                <p>LinkedIn connections that go nowhere.</p>
                <p>Coffee chats that waste time.</p>
                <p>Networking events where you smile and die inside.</p>
                <p className="text-white font-bold">We show you the collisions you've been pretending aren't there.</p>
              </div>
            </div>

            {/* What You Get */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-white mb-6">WHAT YOU GET:</h3>
              <div className="space-y-4 text-xl">
                <p className="text-white font-bold">Visual map of your dead zones.</p>
                <p>5-10 collision points that will actually move you.</p>
                <p>Scripts that cut through the BS.</p>
                <p>Weekly targets. No excuses.</p>
                <p className="text-red-500 font-bold">Real connections. Or keep pretending.</p>
              </div>
            </div>

            {/* The Process */}
            <div className="border-t border-zinc-800 pt-12 mb-12">
              <h3 className="text-2xl font-bold text-white mb-6">THE PROCESS:</h3>
              <div className="space-y-4 text-lg">
                <div className="flex gap-6">
                  <span className="text-zinc-500 font-mono w-20">Day 1-2</span>
                  <p>Audit your network. Spoiler: It's weaker than you think.</p>
                </div>
                <div className="flex gap-6">
                  <span className="text-zinc-500 font-mono w-20">Day 3-4</span>
                  <p>Identify real players. Not the posers you've been collecting.</p>
                </div>
                <div className="flex gap-6">
                  <span className="text-zinc-500 font-mono w-20">Day 5-6</span>
                  <p>Map collision points. Where power meets opportunity.</p>
                </div>
                <div className="flex gap-6">
                  <span className="text-zinc-500 font-mono w-20">Day 7</span>
                  <p className="font-bold">Deliver your weapon. Now go hunt.</p>
                </div>
              </div>
            </div>

            {/* Warning */}
            <div className="border-t border-zinc-800 pt-12 mb-12">
              <h3 className="text-2xl font-bold text-white mb-6">FAIR WARNING:</h3>
              <div className="space-y-4 text-lg">
                <p>This isn't about LinkedIn optimization.</p>
                <p>This isn't about networking "best practices."</p>
                <p>This isn't about being liked.</p>
                <p className="text-red-500 font-bold">This is about collision. Impact. Movement.</p>
              </div>
            </div>

            {/* Best For */}
            <div className="border-t border-zinc-800 pt-12 mb-12">
              <h3 className="text-2xl font-bold text-white mb-6">BEST FOR:</h3>
              <div className="space-y-2 text-lg">
                <p>• Isolated founders who think they're "introverted"</p>
                <p>• Companies entering new markets (and failing)</p>
                <p>• Leaders who need allies, not LinkedIn connections</p>
                <p className="text-red-500 font-bold">• Anyone sick of networking theater</p>
              </div>
            </div>

            {/* The Truth */}
            <div className="border-t border-zinc-800 pt-12 mb-12">
              <h3 className="text-2xl font-bold text-white mb-6">THE TRUTH:</h3>
              <div className="space-y-2 text-xl">
                <p>Your network isn't working because you're playing it safe.</p>
                <p>You're collecting contacts, not creating collisions.</p>
                <p>You're networking, not hunting.</p>
                <p className="font-bold text-red-500">We'll show you the difference.</p>
              </div>
            </div>

            {/* Diagnostic CTA */}
            <div className="bg-zinc-900 border-l-4 border-orange-500 p-8 mb-12">
              <h3 className="text-xl font-bold mb-2">NOT SURE THIS IS YOUR WEAPON?</h3>
              <p className="text-zinc-300 mb-4">Take the 60-second drift diagnostic. Find out if your network is dead or just sleeping.</p>
              <Link 
                href="/diagnostic"
                className="inline-block bg-orange-500 text-black px-6 py-3 font-bold hover:bg-orange-400 transition-all"
              >
                TAKE THE DIAGNOSTIC
              </Link>
            </div>

            {/* Final Provocation */}
            <div className="bg-zinc-900 p-8 mb-12">
              <p className="text-2xl font-bold mb-4">STILL COLLECTING BUSINESS CARDS?</p>
              <p className="text-xl text-zinc-400">That's cute.</p>
              <p className="text-xl text-zinc-400">How's that working for you?</p>
              <p className="text-xl font-bold text-white mt-4">Get the map or stay lost.</p>
            </div>

            {/* CTA */}
            <div className="text-center">
              <a
                href="https://outlook.office.com/owa/calendar/IG@imaginationg.studio/bookings/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-500 text-white px-10 py-5 text-xl md:text-2xl font-black hover:bg-red-600 transition-all inline-block"
              >
                GET THE MAP. OR STAY LOST.
              </a>
            </div>

            {/* Navigation */}
            <div className="mt-20 pt-12 border-t border-zinc-800 flex justify-between">
              <div>
                <p className="text-lg text-zinc-500 mb-2">Previous weapon:</p>
                <Link 
                  href="/weapons/the-naming"
                  className="text-white hover:text-gray-300 transition-colors text-xl font-bold"
                >
                  ← THE NAMING
                </Link>
              </div>
              <div className="text-right">
                <p className="text-lg text-zinc-500 mb-2">Next weapon:</p>
                <Link 
                  href="/weapons/the-market-smackdown"
                  className="text-white hover:text-gray-300 transition-colors text-xl font-bold"
                >
                  THE MARKET SMACKDOWN →
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default TheMapPage;