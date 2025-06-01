import React, { useState, useEffect } from 'react';

const IGCompleteFlow = () => {
  const [currentPage, setCurrentPage] = useState('filter');
  const [drift, setDrift] = useState('');
  const [move, setMove] = useState('');
  const [driftComplete, setDriftComplete] = useState(false);
  const [moveComplete, setMoveComplete] = useState(false);
  const [timeOnPage, setTimeOnPage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeOnPage(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Filter Page - The Mirror
  if (currentPage === 'filter') {
    return (
      <div className="min-h-screen bg-black text-white font-sans">
        {/* No navigation. Just the room. */}
        
        {/* Timer in corner */}
        <div className="fixed top-8 right-8 text-red-500 font-mono">
          <p className="text-2xl md:text-3xl font-bold">{timeOnPage}s</p>
          <p className="text-xs text-zinc-600">STILL THINKING?</p>
        </div>
        
        <div className="min-h-screen flex flex-col justify-center px-6">
          <div className="max-w-4xl mx-auto w-full">
            {/* The confrontation */}
            <div className="mb-24 text-center">
              <h1 className="text-6xl md:text-8xl font-black mb-4 tracking-tight">YOU SUCK.</h1>
              <h2 className="text-6xl md:text-8xl font-black tracking-tight">NOW WHAT?</h2>
            </div>
            
            {/* First truth */}
            <div className="max-w-2xl mx-auto space-y-32">
              <div>
                <div className="mb-12 text-center">
                  <p className="text-3xl md:text-4xl font-black text-white">
                    NAME YOUR <span className="text-red-500">DRIFT</span>
                  </p>
                  <p className="text-lg md:text-xl text-zinc-500 mt-4">
                    The thing killing you. The stuck. The lie.
                  </p>
                </div>
                <input
                  type="text"
                  value={drift}
                  onChange={(e) => setDrift(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' && drift.length > 3) {
                      setDriftComplete(true);
                    }
                  }}
                  className="w-full bg-black border-b-4 border-white text-white text-2xl md:text-3xl px-0 py-4 focus:outline-none text-center"
                  placeholder=""
                  autoFocus
                />
                {drift.length > 3 && !driftComplete && (
                  <div className="text-center mt-8">
                    <button
                      onClick={() => setDriftComplete(true)}
                      className="text-zinc-600"
                    >
                      →
                    </button>
                  </div>
                )}
              </div>
              
              {/* Second truth */}
              {driftComplete && (
                <div className="animate-fade-in">
                  <div className="mb-12 text-center">
                    <p className="text-3xl md:text-4xl font-black text-white">
                      NAME YOUR <span className="text-red-500">MOVE</span>
                    </p>
                    <p className="text-lg md:text-xl text-zinc-500 mt-4">
                      The move you've been hiding from.
                    </p>
                  </div>
                  <input
                    type="text"
                    value={move}
                    onChange={(e) => setMove(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter' && move.length > 3) {
                        setMoveComplete(true);
                      }
                    }}
                    className="w-full bg-black border-b-4 border-white text-white text-2xl md:text-3xl px-0 py-4 focus:outline-none text-center"
                    placeholder=""
                    autoFocus
                  />
                  {move.length > 3 && !moveComplete && (
                    <div className="text-center mt-8">
                      <button
                        onClick={() => setMoveComplete(true)}
                        className="text-zinc-600"
                      >
                        →
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Truth Box and Buttons - Shows when move is complete */}
            {moveComplete && (
              <div className="animate-fade-in mt-32">
                {/* Truth Box */}
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
            
            {/* Bottom text */}
            <div className="absolute bottom-8 left-0 right-0 text-center">
              <p className="text-zinc-600 text-sm">
                NO CONSULTANTS. NO FRAMEWORKS. JUST COLLISION.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Drift Page - The Truth
  if (currentPage === 'drift') {
    return (
      <div className="min-h-screen bg-black text-white font-sans">
        <div className="min-h-screen flex items-center justify-center px-6">
          <div className="text-center max-w-4xl">
            <h1 className="text-7xl md:text-9xl font-black mb-16 text-red-500">COWARD</h1>
            
            <div className="space-y-8 text-2xl md:text-3xl text-zinc-600 mb-20">
              <p>Still drifting: <span className="text-white">{drift}</span></p>
              <p>Still lying: <span className="text-white">{move}</span></p>
            </div>
            
            <button 
              onClick={() => setCurrentPage('filter')}
              className="text-2xl font-black text-white border-b-4 border-white hover:text-red-500 hover:border-red-500 transition-all"
            >
              TRY AGAIN
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Weapons Page - Pick Your Weapon
  if (currentPage === 'weapons') {
    return (
      <div className="min-h-screen bg-black text-white font-sans px-8 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-6xl md:text-8xl font-black mb-4">PICK YOUR WEAPON</h1>
            <p className="text-zinc-500 text-xl">You know why you're here.</p>
          </div>

          {/* Drift and Move Display */}
          <div className="grid md:grid-cols-2 gap-8 mb-20 max-w-3xl">
            <div>
              <p className="text-zinc-500 text-sm uppercase mb-2">YOUR DRIFT:</p>
              <p className="text-xl text-white">{drift}</p>
            </div>
            <div>
              <p className="text-zinc-500 text-sm uppercase mb-2">YOUR MOVE:</p>
              <p className="text-xl text-white">{move}</p>
            </div>
          </div>

          {/* Weapons List */}
          <div className="space-y-16">
            {/* The Naming */}
            <a href="/weapons/the-naming" className="flex justify-between items-start group hover:opacity-80 transition-opacity cursor-pointer">
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-black mb-4 group-hover:text-red-500 transition-colors">THE NAMING</h2>
                <p className="text-zinc-400 text-lg max-w-3xl">
                  This is not a conversation. It's the room. You say the thing you've been lying about. Out loud.
                </p>
              </div>
              <div className="text-3xl md:text-4xl font-black ml-8">$500</div>
            </a>

            {/* The Map */}
            <a href="/weapons/the-map" className="flex justify-between items-start group hover:opacity-80 transition-opacity cursor-pointer">
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-black mb-4 group-hover:text-red-500 transition-colors">THE MAP</h2>
                <p className="text-zinc-400 text-lg max-w-3xl">
                  Your network is dead. We show you the collisions you've been pretending aren't there.
                </p>
              </div>
              <div className="text-3xl md:text-4xl font-black ml-8">$1,000</div>
            </a>

            {/* The Market Smackdown */}
            <a href="/weapons/the-market-smackdown" className="flex justify-between items-start group hover:opacity-80 transition-opacity cursor-pointer">
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-black mb-4 group-hover:text-red-500 transition-colors">THE MARKET SMACKDOWN</h2>
                <p className="text-zinc-400 text-lg max-w-3xl">
                  The market's already told you 'no.' We make you face it.
                </p>
              </div>
              <div className="text-3xl md:text-4xl font-black ml-8">$1,500</div>
            </a>

            {/* 30-Day Drift Break */}
            <a href="/weapons/thirty-day-drift-break" className="flex justify-between items-start group hover:opacity-80 transition-opacity cursor-pointer">
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-black mb-4 group-hover:text-red-500 transition-colors">30-DAY DRIFT BREAK</h2>
                <p className="text-zinc-400 text-lg max-w-3xl">
                  Forced movement. No plans. No meetings. Just the thing you said you'd do—or didn't.
                </p>
              </div>
              <div className="text-3xl md:text-4xl font-black ml-8">$3,000</div>
            </a>

            {/* First Blood Build */}
            <a href="/weapons/first-blood-build" className="flex justify-between items-start group hover:opacity-80 transition-opacity cursor-pointer">
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-black mb-4 group-hover:text-red-500 transition-colors">FIRST BLOOD BUILD</h2>
                <p className="text-zinc-400 text-lg max-w-3xl">
                  Build the thing that bruises. Fast. Ugly. You bleed for it. Or you keep bluffing.
                </p>
              </div>
              <div className="text-3xl md:text-4xl font-black ml-8">$5,000</div>
            </a>
          </div>

          {/* Bottom CTA */}
          <div className="mt-32 text-center">
            <p className="text-zinc-500 text-lg mb-8">Still drifting?</p>
            <button 
              onClick={() => setCurrentPage('filter')}
              className="text-white text-lg underline hover:text-zinc-400 transition-colors mb-4 block mx-auto"
            >
              [BACK TO THE MIRROR]
            </button>
            <a 
              href="/weapons"
              className="text-white text-sm underline hover:text-zinc-400 transition-colors"
            >
              [just show me the weapons]
            </a>
          </div>
        </div>
      </div>
    );
  }
};

export default IGCompleteFlow;