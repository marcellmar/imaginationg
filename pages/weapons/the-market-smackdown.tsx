import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const TheMarketSmackdownPage = () => {
  return (
    <>
      <Head>
        <title>THE MARKET SMACKDOWN | $1,500 | IMAGINATION G</title>
        <meta name="description" content="The market's already told you 'no.' We make you face it. You move. Or you keep lying." />
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
            <h1 className="text-4xl md:text-6xl font-black mb-6">THE MARKET SMACKDOWN</h1>
            <p className="text-2xl md:text-3xl text-red-500 font-bold mb-4">$1,500</p>
            <p className="text-xl text-zinc-500">5-7 days. One verdict. No sugar coating.</p>
          </div>
        </header>

        {/* Main Content */}
        <main className="px-6 pb-20">
          <div className="max-w-4xl mx-auto">
            {/* Opening Statement */}
            <div className="bg-zinc-900 p-8 mb-12">
              <h2 className="text-3xl font-bold mb-6">The market's already told you 'no.'</h2>
              <div className="space-y-4 text-lg text-zinc-400">
                <p className="text-white font-bold text-2xl">You're just not listening.</p>
                <p>Zero traction. Zero sales. Zero momentum.</p>
                <p>But you keep pushing your "vision."</p>
                <p>Keep telling yourself "they just don't get it yet."</p>
                <p className="text-white font-bold">We make you face the verdict you've been avoiding.</p>
              </div>
            </div>

            {/* What You Get */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-white mb-6">WHAT YOU GET:</h3>
              <div className="space-y-4 text-xl">
                <p className="text-white font-bold">GO | NO-GO verdict. No maybes.</p>
                <p>3 market truths you've been denying.</p>
                <p>Competitor moves that are killing you.</p>
                <p>Customer pain points you're ignoring.</p>
                <p className="text-red-500 font-bold">Entry strategy or exit plan. Choose.</p>
              </div>
            </div>

            {/* The Process */}
            <div className="border-t border-zinc-800 pt-12 mb-12">
              <h3 className="text-2xl font-bold text-white mb-6">THE SCAN:</h3>
              <div className="space-y-4 text-lg">
                <div className="flex gap-6">
                  <span className="text-zinc-500 font-mono w-20">Day 1-2</span>
                  <p>Deep market reconnaissance. The real data.</p>
                </div>
                <div className="flex gap-6">
                  <span className="text-zinc-500 font-mono w-20">Day 3-4</span>
                  <p>Customer pain point extraction. What they actually want.</p>
                </div>
                <div className="flex gap-6">
                  <span className="text-zinc-500 font-mono w-20">Day 5-6</span>
                  <p>Competitor weakness mapping. Your real position.</p>
                </div>
                <div className="flex gap-6">
                  <span className="text-zinc-500 font-mono w-20">Day 7</span>
                  <p className="font-bold">Deliver the verdict. No sugar coating.</p>
                </div>
              </div>
            </div>

            {/* Warning */}
            <div className="border-t border-zinc-800 pt-12 mb-12">
              <h3 className="text-2xl font-bold text-white mb-6">FAIR WARNING:</h3>
              <div className="space-y-4 text-lg">
                <p>This isn't market research.</p>
                <p>This isn't a validation study.</p>
                <p>This isn't what you want to hear.</p>
                <p className="text-red-500 font-bold">This is the truth that will save or sink you.</p>
              </div>
            </div>

            {/* Who This Is For */}
            <div className="border-t border-zinc-800 pt-12 mb-12">
              <h3 className="text-2xl font-bold text-white mb-6">WHO NEEDS THIS SMACKDOWN:</h3>
              <div className="space-y-2 text-lg">
                <p>• Pre-launch products built on assumptions</p>
                <p>• Founders hearing crickets</p>
                <p>• Teams planning expansion (without data)</p>
                <p>• Anyone who says "the market just needs education"</p>
                <p className="text-red-500 font-bold">• Leaders ready for reality</p>
              </div>
            </div>

            {/* The Truth */}
            <div className="border-t border-zinc-800 pt-12 mb-12">
              <h3 className="text-2xl font-bold text-white mb-6">THE TRUTH:</h3>
              <div className="space-y-2 text-xl">
                <p>The market doesn't care about your feelings.</p>
                <p>Your competitors aren't waiting for you.</p>
                <p>Your customers have already chosen.</p>
                <p className="font-bold text-red-500">We'll tell you what they chose. And why it wasn't you.</p>
              </div>
            </div>

            {/* Diagnostic CTA */}
            <div className="bg-zinc-900 border-l-4 border-orange-500 p-8 mb-12">
              <h3 className="text-xl font-bold mb-2">NOT SURE THIS IS YOUR WEAPON?</h3>
              <p className="text-zinc-300 mb-4">Take the 60-second drift diagnostic. Find out if you're delusional or just drifting.</p>
              <Link 
                href="/diagnostic"
                className="inline-block bg-orange-500 text-black px-6 py-3 font-bold hover:bg-orange-400 transition-all"
              >
                TAKE THE DIAGNOSTIC
              </Link>
            </div>

            {/* Final Provocation */}
            <div className="bg-zinc-900 p-8 mb-12">
              <p className="text-2xl font-bold mb-4">STILL THINK YOUR PRODUCT IS "AHEAD OF ITS TIME"?</p>
              <p className="text-xl text-zinc-400">That's what they all say.</p>
              <p className="text-xl text-zinc-400">Right before they fail.</p>
              <p className="text-xl font-bold text-white mt-4">Face the truth or face extinction.</p>
            </div>

            {/* CTA */}
            <div className="text-center">
              <a
                href="https://outlook.office.com/owa/calendar/IG@imaginationg.studio/bookings/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-500 text-white px-10 py-5 text-xl md:text-2xl font-black hover:bg-red-600 transition-all inline-block"
              >
                BOOK THE SMACKDOWN. OR KEEP FAILING.
              </a>
            </div>

            {/* Navigation */}
            <div className="mt-20 pt-12 border-t border-zinc-800 flex justify-between">
              <div>
                <p className="text-lg text-zinc-500 mb-2">Previous weapon:</p>
                <Link 
                  href="/weapons/the-map"
                  className="text-white hover:text-gray-300 transition-colors text-xl font-bold"
                >
                  ← THE MAP
                </Link>
              </div>
              <div className="text-right">
                <p className="text-lg text-zinc-500 mb-2">Next weapon:</p>
                <Link 
                  href="/weapons/thirty-day-drift-break"
                  className="text-white hover:text-gray-300 transition-colors text-xl font-bold"
                >
                  30-DAY DRIFT BREAK →
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default TheMarketSmackdownPage;