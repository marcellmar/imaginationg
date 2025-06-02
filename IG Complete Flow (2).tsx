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
        
        {/* System status in corner */}
        <div className="fixed top-8 right-8 text-green-400 font-mono bg-black border border-zinc-800 p-3">
          <p className="text-xs">OVERRIDE MODE:</p>
          <p className="text-lg font-bold">{timeOnPage}s</p>
          <p className="text-xs text-zinc-600">TRUTH DETECTION</p>
        </div>
        
        <div className="min-h-screen flex flex-col justify-center px-6">
          <div className="max-w-4xl mx-auto w-full">
            {/* The invitation */}
            <div className="mb-24 text-center">
              <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tight leading-tight">
                AGENCY OVER AESTHETICS<span className="text-red-600">.</span><br />
                SIGNAL OVER NOISE<span className="text-red-600">.</span><br />
                OVERRIDE OVER OPTIMIZE<span className="text-red-600">.</span>
              </h1>
              <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
                You didn't come to clean the edges.<br />
                You came to dismantle what was never true.
              </p>
            </div>
            
            {/* First truth */}
            <div className="max-w-2xl mx-auto space-y-32">
              <div>
                <div className="mb-12 text-center">
                  <p className="text-3xl md:text-4xl font-black text-white">
                    NAME WHAT'S <span className="text-red-500">BURIED</span>
                  </p>
                  <p className="text-lg md:text-xl text-zinc-500 mt-4">
                    The truth you've been building around instead of from.
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
                      NAME THE <span className="text-red-500">OVERRIDE</span>
                    </p>
                    <p className="text-lg md:text-xl text-zinc-500 mt-4">
                      What you would build from that truth.
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
                    THE SIGNAL YOU JUST AMPLIFIED:
                  </h3>
                  <div className="grid md:grid-cols-2 gap-16">
                    <div>
                      <p className="text-zinc-500 text-sm uppercase mb-4">BURIED TRUTH:</p>
                      <p className="text-2xl text-white font-bold">{drift}</p>
                    </div>
                    <div>
                      <p className="text-zinc-500 text-sm uppercase mb-4">OVERRIDE PATH:</p>
                      <p className="text-2xl text-white font-bold">{move}</p>
                    </div>
                  </div>
                </div>

                {/* Decision Section */}
                <div className="mb-12">
                  <h3 className="text-4xl md:text-5xl font-black">
                    NOW BUILD FROM <span className="text-red-500">REAL.</span>
                  </h3>
                </div>

                {/* Action Buttons */}
                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                  <button
                    onClick={() => setCurrentPage('weapons')}
                    className="bg-red-500 hover:bg-red-600 text-white px-8 py-8 text-2xl font-black transition-colors"
                  >
                    OVERRIDE
                    <span className="block text-base font-normal mt-2">Grant full access</span>
                  </button>
                  <button
                    onClick={() => setCurrentPage('drift')}
                    className="bg-zinc-900 hover:bg-zinc-800 text-white px-8 py-8 text-2xl font-black border border-zinc-700 transition-colors"
                  >
                    OPTIMIZE
                    <span className="block text-base font-normal mt-2">Clean the edges</span>
                  </button>
                </div>
              </div>
            )}
            
            {/* Bottom text */}
            <div className="absolute bottom-8 left-0 right-0 text-center">
              <p className="text-zinc-600 text-sm font-mono">
                // We surface the buried truth
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Optimize Page - The Choice to Stay Surface
  if (currentPage === 'drift') {
    return (
      <div className="min-h-screen bg-black text-white font-sans">
        <div className="min-h-screen flex items-center justify-center px-6">
          <div className="text-center max-w-4xl">
            <h1 className="text-7xl md:text-9xl font-black mb-16 text-zinc-600">READ-ONLY</h1>
            
            <div className="space-y-8 text-2xl md:text-3xl text-zinc-600 mb-20">
              <p>Truth remains buried: <span className="text-white">{drift}</span></p>
              <p>Override path unused: <span className="text-white">{move}</span></p>
              <p className="text-lg text-zinc-500 mt-8">Signal detected. Access denied.</p>
            </div>
            
            <button 
              onClick={() => setCurrentPage('filter')}
              className="text-2xl font-black text-white border-b-4 border-white hover:text-red-500 hover:border-red-500 transition-all"
            >
              REQUEST ACCESS
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Redirect to Weapons Page
  if (currentPage === 'weapons') {
    // Store flow data in sessionStorage for potential use on weapons page
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('flowData', JSON.stringify({
        fromFlow: true,
        drift: drift,
        move: move
      }));
      window.location.href = '/weapons';
    }
    return null;
  }
};

export default IGCompleteFlow;