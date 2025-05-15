import React, { useState, useEffect } from 'react';

const IGCompleteFlow = () => {
  const [currentPage, setCurrentPage] = useState('filter');
  const [drift, setDrift] = useState('');
  const [move, setMove] = useState('');
  const [driftComplete, setDriftComplete] = useState(false);
  const [moveComplete, setMoveComplete] = useState(false);

  // Filter Page - The Mirror
  if (currentPage === 'filter') {
    return (
      <div className="min-h-screen bg-black text-white font-sans">
        {/* No navigation. Just the room. */}
        
        <div className="min-h-screen flex flex-col justify-center px-6">
          <div className="max-w-4xl mx-auto w-full">
            {/* The confrontation */}
            <div className="mb-24 text-center">
              <h1 className="text-7xl md:text-9xl lg:text-[10rem] font-black tracking-tighter leading-none mb-8">
                THE MIRROR
              </h1>
            </div>
            
            {/* First truth */}
            <div className="max-w-2xl mx-auto space-y-32">
              <div>
                <div className="mb-12 text-center">
                  <p className="text-3xl md:text-4xl font-black text-white">
                    NAME YOUR <span className="text-red-500">DRIFT</span>
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
            
            {/* The choice */}
            {moveComplete && (
              <div className="animate-fade-in mt-32">
                <div className="text-center mb-16">
                  <p className="text-4xl md:text-5xl font-black text-white">
                    THE CHOICE
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-12 max-w-2xl mx-auto">
                  <button 
                    onClick={() => setCurrentPage('weapons')}
                    className="bg-black text-white px-12 py-8 text-2xl font-black border-4 border-white hover:bg-white hover:text-black transition-all"
                  >
                    MOVE
                  </button>
                  
                  <button 
                    onClick={() => setCurrentPage('drift')}
                    className="bg-black text-white px-12 py-8 text-2xl font-black border-4 border-white hover:border-red-500 hover:text-red-500 transition-all"
                  >
                    DRIFT
                  </button>
                </div>
              </div>
            )}
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

  // Weapons Page - The Rack
  if (currentPage === 'weapons') {
    const weapons = [
      { id: 'naming', name: 'THE NAMING', price: '$500', url: '/weapons/the-naming' },
      { id: 'map', name: 'THE MAP', price: '$1,000', url: '/weapons/the-map' },
      { id: 'market', name: 'THE MARKET SMACKDOWN', price: '$1,500', url: '/weapons/the-market-smackdown' },
      { id: 'drift', name: '30-DAY DRIFT BREAK', price: '$3,000', url: '/weapons/thirty-day-drift-break' },
      { id: 'build', name: 'FIRST BLOOD BUILD', price: '$5,000', url: '/weapons/first-blood-build' }
    ];

    return (
      <div className="min-h-screen bg-black text-white font-sans">
        <div className="min-h-screen flex flex-col justify-center px-6">
          <div className="max-w-4xl mx-auto w-full">
            <h1 className="text-6xl md:text-8xl font-black mb-20 text-center">THE WEAPONS</h1>
            
            <div className="space-y-0">
              {weapons.map((w) => (
                <a
                  key={w.id}
                  href={w.url}
                  className="block border-b border-zinc-800 py-8 hover:bg-zinc-950 transition-all"
                >
                  <div className="flex justify-between items-center px-4">
                    <h2 className="text-2xl md:text-3xl font-black">{w.name}</h2>
                    <p className="text-2xl md:text-3xl font-black">{w.price}</p>
                  </div>
                </a>
              ))}
            </div>
            
            <div className="mt-20 text-center">
              <button 
                onClick={() => setCurrentPage('filter')}
                className="text-zinc-600 text-xl"
              >
                ← back to the mirror
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default IGCompleteFlow;