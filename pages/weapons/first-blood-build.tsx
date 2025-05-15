import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const FirstBloodBuildPage = () => {
  return (
    <>
      <Head>
        <title>FIRST BLOOD BUILD | $5,000 | IMAGINATION G</title>
        <meta name="description" content="Build the thing that bruises. The thing you've been avoiding because it hurts. We make it real. Fast. Ugly. You bleed for it. Or you keep bluffing." />
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
            <h1 className="text-4xl md:text-6xl font-black mb-6">FIRST BLOOD BUILD</h1>
            <p className="text-2xl md:text-3xl text-red-500 font-bold mb-4">$5,000</p>
            <p className="text-xl text-zinc-500">2-3 weeks. Real bruises. No beauty.</p>
          </div>
        </header>

        {/* Main Content */}
        <main className="px-6 pb-20">
          <div className="max-w-4xl mx-auto">
            {/* Opening Statement */}
            <div className="bg-zinc-900 p-8 mb-12">
              <h2 className="text-3xl font-bold mb-6">Build the thing that bruises.</h2>
              <div className="space-y-4 text-lg text-zinc-400">
                <p className="text-white font-bold text-2xl">The thing you've been avoiding because it hurts.</p>
                <p>Your "someday" project.</p>
                <p>Your too-hard prototype.</p>
                <p>Your fear made real.</p>
                <p className="text-white font-bold">We make it real. Fast. Ugly. Painful.</p>
              </div>
            </div>

            {/* What You Get */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-white mb-6">WHAT YOU GET:</h3>
              <div className="space-y-4 text-xl">
                <p className="text-white font-bold">Working prototype in 6 weeks max.</p>
                <p>Core features only (no feature creep).</p>
                <p>User-tested and battle-ready.</p>
                <p>Launch plan included.</p>
                <p className="text-red-500 font-bold">Your vision made real. Bruises and all.</p>
              </div>
            </div>

            {/* The Build */}
            <div className="border-t border-zinc-800 pt-12 mb-12">
              <h3 className="text-2xl font-bold text-white mb-6">THE BUILD:</h3>
              <div className="space-y-4 text-lg">
                <div className="flex gap-6">
                  <span className="text-zinc-500 font-mono w-24">Week 1</span>
                  <p>Strip to core. Kill your darlings. Bleed a little.</p>
                </div>
                <div className="flex gap-6">
                  <span className="text-zinc-500 font-mono w-24">Weeks 2-3</span>
                  <p>Build fast. Break things. Fix them. Repeat.</p>
                </div>
                <div className="flex gap-6">
                  <span className="text-zinc-500 font-mono w-24">Weeks 4-5</span>
                  <p>User testing. Real feedback. More bruises.</p>
                </div>
                <div className="flex gap-6">
                  <span className="text-zinc-500 font-mono w-24">Week 6</span>
                  <p className="font-bold">Polish, launch prep, and ship it bleeding.</p>
                </div>
              </div>
            </div>

            {/* What This Isn't */}
            <div className="border-t border-zinc-800 pt-12 mb-12">
              <h3 className="text-2xl font-bold text-white mb-6">WHAT THIS ISN'T:</h3>
              <div className="space-y-4 text-lg">
                <p className="text-zinc-500">Not a perfect product</p>
                <p className="text-zinc-500">Not a beautiful prototype</p>
                <p className="text-zinc-500">Not a committee decision</p>
                <p className="text-zinc-500">Not a safe bet</p>
                <p className="text-red-500 font-bold">This is first blood. Raw. Real. Ready.</p>
              </div>
            </div>

            {/* Who This Is For */}
            <div className="border-t border-zinc-800 pt-12 mb-12">
              <h3 className="text-2xl font-bold text-white mb-6">WHO NEEDS THIS:</h3>
              <div className="space-y-2 text-lg">
                <p>• Founders with too many ideas (and no execution)</p>
                <p>• Teams needing validation (not validation theater)</p>
                <p>• Leaders sitting on "someday" projects</p>
                <p>• Anyone who's been polishing instead of shipping</p>
                <p className="text-red-500 font-bold">• Builders ready to bleed</p>
              </div>
            </div>

            {/* The Truth */}
            <div className="border-t border-zinc-800 pt-12 mb-12">
              <h3 className="text-2xl font-bold text-white mb-6">THE TRUTH:</h3>
              <div className="space-y-2 text-xl">
                <p>Perfect is the enemy of done.</p>
                <p>Beautiful is the enemy of shipped.</p>
                <p>Planning is the enemy of building.</p>
                <p className="font-bold text-red-500">We build to ship, not to admire.</p>
              </div>
            </div>

            {/* Diagnostic CTA */}
            <div className="bg-zinc-900 border-l-4 border-orange-500 p-8 mb-12">
              <h3 className="text-xl font-bold mb-2">NOT SURE THIS IS YOUR WEAPON?</h3>
              <p className="text-zinc-300 mb-4">Take the 60-second drift diagnostic. Find out if you need to build or need to quit.</p>
              <Link 
                href="/diagnostic"
                className="inline-block bg-orange-500 text-black px-6 py-3 font-bold hover:bg-orange-400 transition-all"
              >
                TAKE THE DIAGNOSTIC
              </Link>
            </div>

            {/* Final Provocation */}
            <div className="bg-zinc-900 p-8 mb-12">
              <p className="text-2xl font-bold mb-4">STILL PERFECTING YOUR PITCH DECK?</p>
              <p className="text-xl text-zinc-400">Still "validating" your idea?</p>
              <p className="text-xl text-zinc-400">Still waiting for the "right time"?</p>
              <p className="text-xl font-bold text-white mt-4">Build it ugly. Ship it bleeding. Or keep dreaming.</p>
            </div>

            {/* CTA */}
            <div className="text-center">
              <a
                href="https://outlook.office.com/owa/calendar/IG@imaginationg.studio/bookings/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-500 text-white px-10 py-5 text-xl md:text-2xl font-black hover:bg-red-600 transition-all inline-block"
              >
                BUILD IT BLEEDING. OR KEEP BLUFFING.
              </a>
            </div>

            {/* Navigation */}
            <div className="mt-20 pt-12 border-t border-zinc-800">
              <div>
                <p className="text-lg text-zinc-500 mb-2">Previous weapon:</p>
                <Link 
                  href="/weapons/thirty-day-drift-break"
                  className="text-white hover:text-gray-300 transition-colors text-xl font-bold"
                >
                  ← 30-DAY DRIFT BREAK
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default FirstBloodBuildPage;