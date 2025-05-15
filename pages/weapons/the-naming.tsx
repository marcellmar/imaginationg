import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const TheNamingPage = () => {
  return (
    <>
      <Head>
        <title>THE NAMING | $500 | IMAGINATION G</title>
        <meta name="description" content="This is not therapy. This is not coaching. This is THE NAMING. Book the room or keep lying." />
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
            <h1 className="text-4xl md:text-6xl font-black mb-6">THE NAMING</h1>
            <p className="text-2xl md:text-3xl text-red-500 font-bold mb-4">$500</p>
            <p className="text-xl text-zinc-500">60 minutes. One room. One truth.</p>
          </div>
        </header>

        {/* Main Content */}
        <main className="px-6 pb-20">
          <div className="max-w-4xl mx-auto">
            {/* Opening Statement */}
            <div className="bg-zinc-900 p-8 mb-12">
              <h2 className="text-3xl font-bold mb-6">This is not therapy. This is not coaching. This is THE NAMING.</h2>
              <div className="space-y-4 text-lg text-zinc-400">
                <p className="text-white font-bold text-2xl">You've been lying.</p>
                <p>To your team. To your customers. To yourself.</p>
                <p>Everyone knows it.</p>
                <p className="text-white font-bold">Now you say it out loud.</p>
              </div>
            </div>

            {/* The Room */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-white mb-6">THE ROOM:</h3>
              <div className="space-y-4 text-xl">
                <p>Four walls. Two chairs. One mirror.</p>
                <p>You sit. You speak. Or you don't.</p>
                <p className="font-bold text-red-500">We don't care which.</p>
              </div>
            </div>

            {/* The Rules */}
            <div className="border-t border-zinc-800 pt-12 mb-12">
              <h3 className="text-2xl font-bold text-white mb-6">THE RULES:</h3>
              <div className="space-y-2 text-lg">
                <p>1. We don't talk. You do.</p>
                <p>2. We don't guide. You find.</p>
                <p>3. We don't comfort. You crack.</p>
                <p>4. We don't judge. You confess.</p>
                <p className="text-red-500 font-bold">5. At 60 minutes, we leave. Done or not.</p>
              </div>
            </div>

            {/* What Happens */}
            <div className="border-t border-zinc-800 pt-12 mb-12">
              <h3 className="text-2xl font-bold text-white mb-6">WHAT HAPPENS:</h3>
              <div className="space-y-2 text-lg">
                <p>You book. You show up. You sit.</p>
                <p>The clock starts.</p>
                <p>You speak your lie out loud.</p>
                <p>Or you sit in silence.</p>
                <p>Or you crack and run.</p>
                <p className="text-white font-bold">All three end the same: We leave at 60.</p>
              </div>
            </div>

            {/* What We Don't Do */}
            <div className="border-t border-zinc-800 pt-12 mb-12">
              <h3 className="text-2xl font-bold text-white mb-6">WHAT WE DON'T DO:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
                <div>
                  <p className="text-zinc-500">No frameworks</p>
                  <p className="text-zinc-500">No worksheets</p>
                  <p className="text-zinc-500">No follow-up</p>
                  <p className="text-zinc-500">No check-ins</p>
                </div>
                <div>
                  <p className="text-zinc-500">No advice</p>
                  <p className="text-zinc-500">No solutions</p>
                  <p className="text-zinc-500">No next steps</p>
                  <p className="text-zinc-500">No care</p>
                </div>
              </div>
            </div>

            {/* The Truth */}
            <div className="border-t border-zinc-800 pt-12 mb-12">
              <h3 className="text-2xl font-bold text-white mb-6">THE TRUTH:</h3>
              <div className="space-y-2 text-xl">
                <p>You already know what you need to say.</p>
                <p>You've known for months. Maybe years.</p>
                <p>You just need the room.</p>
                <p className="font-bold text-red-500">This is the room.</p>
              </div>
            </div>

            {/* Diagnostic CTA */}
            <div className="bg-zinc-900 border-l-4 border-orange-500 p-8 mb-12">
              <h3 className="text-xl font-bold mb-2">NOT SURE THIS IS YOUR WEAPON?</h3>
              <p className="text-zinc-300 mb-4">Take the 60-second drift diagnostic. Find out if you're moving or just lying to yourself.</p>
              <Link 
                href="/diagnostic"
                className="inline-block bg-orange-500 text-black px-6 py-3 font-bold hover:bg-orange-400 transition-all"
              >
                TAKE THE DIAGNOSTIC
              </Link>
            </div>

            {/* Final Provocation */}
            <div className="bg-zinc-900 p-8 mb-12">
              <p className="text-2xl font-bold mb-4">STILL READING?</p>
              <p className="text-xl text-zinc-400">You're stalling.</p>
              <p className="text-xl text-zinc-400">Which proves you need this.</p>
              <p className="text-xl font-bold text-white mt-4">Book the room or keep lying.</p>
            </div>

            {/* CTA */}
            <div className="text-center">
              <a
                href="https://outlook.office.com/owa/calendar/IG@imaginationg.studio/bookings/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-500 text-white px-10 py-5 text-xl md:text-2xl font-black hover:bg-red-600 transition-all inline-block"
              >
                BOOK THE ROOM. OR KEEP LYING.
              </a>
            </div>

            {/* Next Weapon */}
            <div className="mt-20 pt-12 border-t border-zinc-800 text-center">
              <p className="text-lg text-zinc-500 mb-4">Next weapon:</p>
              <Link 
                href="/weapons/the-map"
                className="text-white hover:text-gray-300 transition-colors text-xl font-bold"
              >
                THE MAP →
              </Link>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default TheNamingPage;