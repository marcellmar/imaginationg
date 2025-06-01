import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const IGCompleteFlow = () => {
  const [currentPage, setCurrentPage] = useState('main');
  const [drift, setDrift] = useState('');
  const [move, setMove] = useState('');
  const [showTruth, setShowTruth] = useState(false);

  useEffect(() => {
    if (drift && move) {
      setShowTruth(true);
    }
  }, [drift, move]);

  // Main Page - Single view with both inputs
  if (currentPage === 'main') {
    return (
      <div className="min-h-screen bg-black text-white">
        <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12">
          <div className="max-w-4xl mx-auto w-full text-center">
            {/* Header */}
            <div className="mb-16">
              <p className="text-red-500 text-sm font-bold mb-4">YOU SUCK.</p>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-none mb-4">
                NOW WHAT?
              </h1>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-2">
                NAME YOUR <span className="text-red-500">DRIFT</span>
              </h2>
              <p className="text-zinc-500 text-lg mb-8">
                The thing killing you. The stuck. The lie.
              </p>
              <div className="max-w-2xl mx-auto mb-16">
                <input
                  type="text"
                  value={drift}
                  onChange={(e) => setDrift(e.target.value)}
                  className="w-full bg-transparent text-white text-2xl md:text-3xl text-center pb-2 border-b border-zinc-600 focus:border-white focus:outline-none transition-colors"
                  placeholder=""
                />
                {drift && (
                  <p className="mt-4 text-2xl text-white">{drift}</p>
                )}
              </div>
            </div>

            {/* Move Section */}
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-2">
                NAME YOUR <span className="text-red-500">MOVE</span>
              </h2>
              <p className="text-zinc-500 text-lg mb-8">
                The real one. Not the corporate BS.
              </p>
              <div className="max-w-2xl mx-auto">
                <input
                  type="text"
                  value={move}
                  onChange={(e) => setMove(e.target.value)}
                  className="w-full bg-transparent text-white text-2xl md:text-3xl text-center pb-2 border-b border-zinc-600 focus:border-white focus:outline-none transition-colors"
                  placeholder=""
                />
                {move && (
                  <p className="mt-4 text-2xl text-white">{move}</p>
                )}
              </div>
            </div>

            {/* Truth Box - Shows when both are filled */}
            {showTruth && (
              <div className="mb-12">
                <div className="border-2 border-red-500 p-12 max-w-4xl mx-auto mb-12">
                  <h3 className="text-3xl md:text-4xl font-black text-red-500 mb-12">
                    THE TRUTH YOU JUST TOLD:
                  </h3>
                  <div className="grid md:grid-cols-2 gap-16">
                    <div>
                      <p className="text-zinc-500 text-sm uppercase mb-4">YOUR DRIFT:</p>
                      <p className="text-2xl text-white font-bold">{drift}</p>
                    </div>
                    <div>
                      <p className="text-zinc-500 text-sm uppercase mb-4">YOUR MOVE:</p>
                      <p className="text-2xl text-white font-bold">{move}</p>
                    </div>
                  </div>
                </div>

                {/* Decision Section */}
                <div className="mb-12">
                  <h3 className="text-4xl md:text-5xl font-black">
                    DECISION TIME. NO MORE <span className="text-red-500">BULLSHIT.</span>
                  </h3>
                </div>

                {/* Action Buttons */}
                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                  <button
                    onClick={() => setCurrentPage('weapons')}
                    className="bg-red-500 hover:bg-red-600 text-white px-8 py-8 text-2xl font-black transition-colors"
                  >
                    MOVE
                    <span className="block text-base font-normal mt-2">Pick your weapon</span>
                  </button>
                  <button
                    onClick={() => setCurrentPage('drift')}
                    className="bg-zinc-900 hover:bg-zinc-800 text-white px-8 py-8 text-2xl font-black border border-zinc-700 transition-colors"
                  >
                    DRIFT
                    <span className="block text-base font-normal mt-2">Keep lying</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Weapons Page - Grid layout matching screenshot
  if (currentPage === 'weapons') {
    return (
      <div className="min-h-screen bg-black text-white">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 bg-black z-50">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/" className="text-base font-black">IMAGINATION G</Link>
            <div className="flex items-center gap-8">
              <Link href="/" className="text-sm hover:text-zinc-400">← Home</Link>
              <Link href="/weapons" className="text-sm hover:text-zinc-400">Weapons</Link>
              <Link href="/about" className="text-sm hover:text-zinc-400">About</Link>
              <Link href="/diagnostic" className="bg-white text-black px-6 py-2 text-sm font-bold hover:bg-zinc-200 transition-colors">
                Book a Call
              </Link>
            </div>
          </div>
        </nav>

        <div className="pt-24 pb-20 px-6">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-20">
              <h1 className="text-5xl md:text-6xl lg:text-8xl font-black mb-6 tracking-tight">
                PICK YOUR WEAPON
              </h1>
              <p className="text-xl text-zinc-500">
                Stop lying to yourself. Choose how you'll move.
              </p>
            </div>

            {/* Weapons Grid */}
            <div className="grid md:grid-cols-2 gap-0 border-t border-l border-zinc-800 mb-0">
              {/* The Naming */}
              <div className="border-r border-b border-zinc-800 p-10">
                <div className="flex justify-between items-start mb-6">
                  <h2 className="text-2xl font-black">THE NAMING</h2>
                  <p className="text-3xl font-black">$500</p>
                </div>
                <p className="text-zinc-400 mb-6 leading-relaxed">
                  This is not a conversation. It's the room. You say the thing you've been lying about. Out loud.
                </p>
                <p className="text-sm text-zinc-500 mb-8">Duration: One Room. One Hour.</p>
                <button 
                  onClick={() => window.location.href = '/weapons/the-naming'}
                  className="text-sm font-bold hover:text-zinc-400 transition-colors"
                >
                  DEPLOY →
                </button>
              </div>

              {/* The Map */}
              <div className="border-r border-b border-zinc-800 p-10">
                <div className="flex justify-between items-start mb-6">
                  <h2 className="text-2xl font-black">THE MAP</h2>
                  <p className="text-3xl font-black">$1,000</p>
                </div>
                <p className="text-zinc-400 mb-6 leading-relaxed">
                  Your network is dead. We show you the collisions you've been pretending aren't there.
                </p>
                <p className="text-sm text-zinc-500 mb-8">Duration: 7 days</p>
                <button 
                  onClick={() => window.location.href = '/weapons/the-map'}
                  className="text-sm font-bold hover:text-zinc-400 transition-colors"
                >
                  DEPLOY →
                </button>
              </div>

              {/* The Market Smackdown */}
              <div className="border-r border-b border-zinc-800 p-10">
                <div className="flex justify-between items-start mb-6">
                  <h2 className="text-2xl font-black">THE MARKET SMACKDOWN</h2>
                  <p className="text-3xl font-black">$1,500</p>
                </div>
                <p className="text-zinc-400 mb-6 leading-relaxed">
                  The market's already told you 'no.' We make you face it.
                </p>
                <p className="text-sm text-zinc-500 mb-8">Duration: 5-7 days</p>
                <button 
                  onClick={() => window.location.href = '/weapons/the-market-smackdown'}
                  className="text-sm font-bold hover:text-zinc-400 transition-colors"
                >
                  DEPLOY →
                </button>
              </div>

              {/* 30-Day Drift Break */}
              <div className="border-r border-b border-zinc-800 p-10 relative">
                <div className="absolute top-4 right-4 bg-zinc-900 text-white text-xs px-3 py-1 font-bold">
                  MOST LETHAL
                </div>
                <div className="flex justify-between items-start mb-6">
                  <h2 className="text-2xl font-black">30-DAY DRIFT BREAK</h2>
                  <p className="text-3xl font-black">$3,000</p>
                </div>
                <p className="text-zinc-400 mb-6 leading-relaxed">
                  Forced movement. No plans. No meetings. Just the thing you said you'd do—or didn't.
                </p>
                <p className="text-sm text-zinc-500 mb-8">Duration: 30 days</p>
                <button 
                  onClick={() => window.location.href = '/weapons/thirty-day-drift-break'}
                  className="text-sm font-bold hover:text-zinc-400 transition-colors"
                >
                  DEPLOY →
                </button>
              </div>

              {/* First Blood Build - Full Width */}
              <div className="border-r border-b border-zinc-800 p-10 md:col-span-2">
                <div className="flex justify-between items-start mb-6">
                  <h2 className="text-2xl font-black">FIRST BLOOD BUILD</h2>
                  <p className="text-3xl font-black">$5,000</p>
                </div>
                <p className="text-zinc-400 mb-6 leading-relaxed max-w-3xl">
                  Build the thing that bruises. Fast. Ugly. You bleed for it. Or you keep bluffing.
                </p>
                <p className="text-sm text-zinc-500 mb-8">Duration: 6 weeks max</p>
                <button 
                  onClick={() => window.location.href = '/weapons/first-blood-build'}
                  className="text-sm font-bold hover:text-zinc-400 transition-colors"
                >
                  DEPLOY →
                </button>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-zinc-900 p-16 text-center mt-20 rounded">
              <h3 className="text-3xl font-black mb-4">CAN'T DECIDE?</h3>
              <p className="text-zinc-400 mb-8">
                Let the diagnostic prescribe your weapon based on your drift patterns.
              </p>
              <Link 
                href="/diagnostic"
                className="inline-block bg-red-500 hover:bg-red-600 text-white px-8 py-4 text-base font-black transition-colors"
              >
                TAKE THE 60-SECOND DIAGNOSTIC →
              </Link>
              <p className="text-sm text-zinc-500 mt-6">
                Warning: Brutally honest results.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="py-16 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h3 className="text-xl font-black mb-4">IMAGINATION G</h3>
            <p className="text-zinc-500 mb-8">A Studio for Aligned Futures</p>
            <p className="text-sm text-zinc-600">© 2025 IMAGINATION G. All rights reserved.</p>
          </div>
        </footer>
      </div>
    );
  }

  // Drift Page (Coward)
  if (currentPage === 'drift') {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
        <div className="text-center max-w-4xl">
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-black mb-16 text-red-500">
            COWARD
          </h1>
          <div className="space-y-6 text-2xl text-zinc-400 mb-16">
            <p>Still drifting: <span className="text-white font-bold">{drift}</span></p>
            <p>Still lying about: <span className="text-white font-bold">{move}</span></p>
          </div>
          <button
            onClick={() => {
              setCurrentPage('main');
              setDrift('');
              setMove('');
              setShowTruth(false);
            }}
            className="text-xl font-black text-white hover:text-red-500 transition-colors"
          >
            TRY AGAIN →
          </button>
        </div>
      </div>
    );
  }
};

export default IGCompleteFlow;