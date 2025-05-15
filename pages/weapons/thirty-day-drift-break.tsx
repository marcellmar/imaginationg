import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const ThirtyDayDriftBreakPage = () => {
  return (
    <>
      <Head>
        <title>30-DAY DRIFT BREAK | $3,000 | IMAGINATION G</title>
        <meta name="description" content="Forced movement. No plans. No meetings. Just the thing you said you'd do—or didn't. You get 30 days to move. Or stay stuck." />
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
            <h1 className="text-4xl md:text-6xl font-black mb-6">30-DAY DRIFT BREAK</h1>
            <p className="text-2xl md:text-3xl text-red-500 font-bold mb-4">$3,000</p>
            <p className="text-xl text-zinc-500">30 days. Pure movement. No excuses.</p>
          </div>
        </header>

        {/* Main Content */}
        <main className="px-6 pb-20">
          <div className="max-w-4xl mx-auto">
            {/* Opening Statement */}
            <div className="bg-zinc-900 p-8 mb-12">
              <h2 className="text-3xl font-bold mb-6">Forced movement.</h2>
              <div className="space-y-4 text-lg text-zinc-400">
                <p className="text-white font-bold text-2xl">No plans. No meetings.</p>
                <p>Just the thing you said you'd do.</p>
                <p>The thing you've been avoiding.</p>
                <p>The thing that scares you.</p>
                <p className="text-white font-bold">30 days to move. Or admit you're stuck forever.</p>
              </div>
            </div>

            {/* What This Is */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-white mb-6">WHAT THIS IS:</h3>
              <div className="space-y-4 text-xl">
                <p className="text-white font-bold">30 days of forced momentum.</p>
                <p>Daily targets that hurt (in a good way).</p>
                <p>Weekly reality checks (no hiding).</p>
                <p>Tangible results or your money back.</p>
                <p className="text-red-500 font-bold">A taste of what moving actually feels like.</p>
              </div>
            </div>

            {/* The Sprint */}
            <div className="border-t border-zinc-800 pt-12 mb-12">
              <h3 className="text-2xl font-bold text-white mb-6">THE SPRINT:</h3>
              <div className="space-y-4 text-lg">
                <div className="flex gap-6">
                  <span className="text-zinc-500 font-mono w-20">Week 1</span>
                  <p>Break the inertia. First blood. It will hurt.</p>
                </div>
                <div className="flex gap-6">
                  <span className="text-zinc-500 font-mono w-20">Week 2</span>
                  <p>Build momentum. No excuses. Just movement.</p>
                </div>
                <div className="flex gap-6">
                  <span className="text-zinc-500 font-mono w-20">Week 3</span>
                  <p>Push harder. Feel the burn. Don't stop.</p>
                </div>
                <div className="flex gap-6">
                  <span className="text-zinc-500 font-mono w-20">Week 4</span>
                  <p className="font-bold">Sprint finish. New baseline. Or back to drift.</p>
                </div>
              </div>
            </div>

            {/* What We Don't Do */}
            <div className="border-t border-zinc-800 pt-12 mb-12">
              <h3 className="text-2xl font-bold text-white mb-6">WHAT WE DON'T DO:</h3>
              <div className="space-y-4 text-lg">
                <p className="text-zinc-500">No strategy sessions</p>
                <p className="text-zinc-500">No framework building</p>
                <p className="text-zinc-500">No planning meetings</p>
                <p className="text-zinc-500">No excuses accepted</p>
                <p className="text-red-500 font-bold">Just movement. Or failure.</p>
              </div>
            </div>

            {/* Who This Is For */}
            <div className="border-t border-zinc-800 pt-12 mb-12">
              <h3 className="text-2xl font-bold text-white mb-6">WHO NEEDS THIS:</h3>
              <div className="space-y-2 text-lg">
                <p>• Chronic procrastinators who hate themselves for it</p>
                <p>• Teams stuck in analysis paralysis</p>
                <p>• Leaders who've lost their edge</p>
                <p>• Anyone who says "I'll start Monday"</p>
                <p className="text-red-500 font-bold">• People ready to bleed for momentum</p>
              </div>
            </div>

            {/* The Truth */}
            <div className="border-t border-zinc-800 pt-12 mb-12">
              <h3 className="text-2xl font-bold text-white mb-6">THE TRUTH:</h3>
              <div className="space-y-2 text-xl">
                <p>You've been planning to move for years.</p>
                <p>You've been "almost ready" forever.</p>
                <p>You've been lying about your progress.</p>
                <p className="font-bold text-red-500">30 days. Move or stay stuck. Your choice.</p>
              </div>
            </div>

            {/* Diagnostic CTA */}
            <div className="bg-zinc-900 border-l-4 border-orange-500 p-8 mb-12">
              <h3 className="text-xl font-bold mb-2">NOT SURE THIS IS YOUR WEAPON?</h3>
              <p className="text-zinc-300 mb-4">Take the 60-second drift diagnostic. Find out if you need forced movement or forced retirement.</p>
              <Link 
                href="/diagnostic"
                className="inline-block bg-orange-500 text-black px-6 py-3 font-bold hover:bg-orange-400 transition-all"
              >
                TAKE THE DIAGNOSTIC
              </Link>
            </div>

            {/* Final Provocation */}
            <div className="bg-zinc-900 p-8 mb-12">
              <p className="text-2xl font-bold mb-4">STILL THINKING ABOUT IT?</p>
              <p className="text-xl text-zinc-400">That's your problem.</p>
              <p className="text-xl text-zinc-400">Always thinking. Never moving.</p>
              <p className="text-xl font-bold text-white mt-4">30 days. Move or drift forever.</p>
            </div>

            {/* CTA */}
            <div className="text-center">
              <a
                href="https://outlook.office.com/owa/calendar/IG@imaginationg.studio/bookings/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-500 text-white px-10 py-5 text-xl md:text-2xl font-black hover:bg-red-600 transition-all inline-block"
              >
                BOOK YOUR 30 DAYS. OR KEEP DRIFTING.
              </a>
            </div>

            {/* Navigation */}
            <div className="mt-20 pt-12 border-t border-zinc-800 flex justify-between">
              <div>
                <p className="text-lg text-zinc-500 mb-2">Previous weapon:</p>
                <Link 
                  href="/weapons/the-market-smackdown"
                  className="text-white hover:text-gray-300 transition-colors text-xl font-bold"
                >
                  ← THE MARKET SMACKDOWN
                </Link>
              </div>
              <div className="text-right">
                <p className="text-lg text-zinc-500 mb-2">Next weapon:</p>
                <Link 
                  href="/weapons/first-blood-build"
                  className="text-white hover:text-gray-300 transition-colors text-xl font-bold"
                >
                  FIRST BLOOD BUILD →
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default ThirtyDayDriftBreakPage;