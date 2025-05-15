import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const IGCompleteFlow = () => {
  const [currentPage, setCurrentPage] = useState('filter');
  const [timeOnPage, setTimeOnPage] = useState(0);
  const [drift, setDrift] = useState('');
  const [move, setMove] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeOnPage(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Filter Page
  if (currentPage === 'filter') {
    return (
      <div className="min-h-screen bg-black text-white font-sans relative overflow-hidden">
        <div className="absolute top-1/4 left-0 w-px h-64 bg-white opacity-10"></div>
        <div className="absolute bottom-1/4 right-0 w-px h-64 bg-white opacity-10"></div>
        
        <div className="relative z-10 min-h-screen flex flex-col justify-center px-6">
          <div className="max-w-5xl mx-auto w-full">
            <div className="mb-16">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-4">
                YOU SUCK.
              </h1>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
                NOW WHAT?
              </h2>
            </div>
            
            <div className="mb-20 space-y-16 max-w-3xl">
              <div>
                <p className="text-2xl md:text-3xl font-light mb-6">Name your drift.</p>
                <p className="text-xl text-zinc-500 mb-8">The thing killing you. The stuck. The lie.</p>
                <input
                  type="text"
                  value={drift}
                  onChange={(e) => setDrift(e.target.value)}
                  className="w-full bg-black border-b-2 border-white text-white text-2xl px-0 py-4 focus:outline-none transition-all duration-300 hover:border-zinc-300"
                  placeholder="Type it. Own it."
                />
              </div>
              
              {drift && (
                <div className="animate-fade-in">
                  <p className="text-2xl md:text-3xl font-light mb-6">Now name your move.</p>
                  <p className="text-xl text-zinc-500 mb-8">The real one. Not the corporate BS.</p>
                  <input
                    type="text"
                    value={move}
                    onChange={(e) => setMove(e.target.value)}
                    className="w-full bg-black border-b-2 border-white text-white text-2xl px-0 py-4 focus:outline-none transition-all duration-300 hover:border-zinc-300"
                    placeholder="The move that scares you."
                  />
                </div>
              )}
            </div>
            
            {drift && move && (
              <div className="flex flex-col sm:flex-row gap-8 justify-center animate-fade-in">
                <button 
                  onClick={() => setCurrentPage('weapons')}
                  className="bg-white text-black px-12 py-6 text-xl font-medium tracking-wider hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
                >
                  MOVE
                </button>
                
                <button 
                  onClick={() => setCurrentPage('drift')}
                  className="border-2 border-white px-12 py-6 text-xl font-medium tracking-wider hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
                >
                  DRIFT
                </button>
              </div>
            )}
          </div>
        </div>
        
        <div className="fixed top-8 right-8 text-zinc-600 text-sm">
          <p>{timeOnPage}s</p>
          <p className="text-xs">Still here?</p>
          <a href="/imaginationg" className="text-xs underline hover:text-zinc-400 transition-colors block mt-2">
            [too intense? view polite version]
          </a>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-20"></div>
      </div>
    );
  }

  // Drift Page
  if (currentPage === 'drift') {
    return (
      <div className="min-h-screen bg-black text-white font-sans relative">
        <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
          <div className="text-center max-w-3xl">
            <h1 className="text-6xl md:text-8xl font-bold mb-12 tracking-wider">ENJOY THE DRIFT.</h1>
            <p className="text-2xl md:text-3xl font-light mb-8">Your competitors are building.</p>
            <p className="text-xl text-zinc-500 mb-16">While you're still planning.</p>
            
            <div className="mt-16 pt-16 border-t border-zinc-800">
              <p className="text-lg mb-8 text-zinc-600">Here's your corporate comfort kit:</p>
              <a href="/imaginationg" className="text-sm underline hover:text-zinc-400 transition-colors">
                [prefer the diplomatic approach?]
              </a>
              <ul className="text-left space-y-4 text-lg text-zinc-500 max-w-xl mx-auto">
                <li className="ml-8">1. Schedule another strategy session</li>
                <li className="ml-8">2. Commission a market research report</li>
                <li className="ml-8">3. Form a committee to study the problem</li>
                <li className="ml-8">4. Wait for better timing</li>
                <li className="ml-8">5. Blame external factors</li>
              </ul>
            </div>
            
            <button 
              onClick={() => setCurrentPage('filter')}
              className="mt-16 text-xl border-b-2 border-white hover:text-gray-400 hover:border-gray-400 transition-all duration-200"
            >
              [READY TO STOP LYING? TRY AGAIN]
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Weapons Page
  if (currentPage === 'weapons') {
    const weapons = [
      { 
        id: 'catalyst', 
        name: 'Clarity Collision', 
        serviceName: 'Clarity Catalyst Call',
        price: '$500', 
        desc: 'You speak. We cut. You move. We leave.',
        serviceUrl: '/weapons/clarity-catalyst-call'
      },
      { 
        id: 'map', 
        name: 'Ecosystem Collision Map', 
        serviceName: 'Ecosystem Map + Connection Strategy',
        price: '$1,000', 
        desc: 'Your network is dead. Get the real collisions. Or stay soft.',
        serviceUrl: '/weapons/ecosystem-map'
      },
      { 
        id: 'signal', 
        name: 'Market Smackdown', 
        serviceName: 'Pre-Market Signal Scan',
        price: '$1,500', 
        desc: 'Face the truth you\'ve been avoiding. Go or drift.',
        serviceUrl: '/weapons/pre-market-signal-scan'
      },
      { 
        id: 'sprint', 
        name: '30-Day Drift Break', 
        serviceName: '30-Day Movement Sprint',
        price: '$3,000', 
        desc: 'Movement. Forced. No plan. No options. Just move.',
        serviceUrl: '/weapons/movement-sprint'
      },
      { 
        id: 'mvp', 
        name: 'First Blood Build', 
        serviceName: 'MVP Jumpstart',
        price: '$5,000', 
        desc: 'Bleed for it. Or keep lying to yourself. Build the bruise.',
        serviceUrl: '/weapons/mvp-jumpstart'
      }
    ];

    return (
      <div className="min-h-screen bg-black text-white font-sans relative">
        <div className="relative z-10 min-h-screen px-6 py-16">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-wider">PICK YOUR WEAPON</h1>
            <p className="text-2xl mb-16 text-zinc-500 font-light">You know why you're here.</p>
            
            <div className="space-y-0">
              {weapons.map((w) => (
                <button 
                  key={w.id}
                  onClick={() => { 
                    // Store flow data in sessionStorage
                    const flowData = {
                      drift,
                      move,
                      weapon: w.id,
                      service: w,
                      fromFlow: true,
                      timestamp: new Date().toISOString()
                    };
                    sessionStorage.setItem('flowData', JSON.stringify(flowData));
                    
                    // Capture lead data
                    fetch('/api/capture-flow-lead', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify(flowData)
                    }).catch(console.error);
                    
                    // Navigate directly to service page
                    window.location.href = w.serviceUrl;
                  }}
                  className="w-full text-left p-8 border-b border-zinc-800 hover:bg-zinc-900 transition-all duration-300 group"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-zinc-300 transition-colors">{w.name}</h3>
                      <p className="text-lg text-zinc-500">{w.desc}</p>
                    </div>
                    <p className="text-2xl md:text-3xl font-bold">{w.price}</p>
                  </div>
                </button>
              ))}
            </div>
            
            <div className="mt-20 text-center">
              <p className="text-lg mb-8 text-zinc-600">Still drifting?</p>
              <button 
                onClick={() => setCurrentPage('filter')}
                className="text-lg underline hover:text-zinc-400 transition-colors"
                >
                [BACK TO THE MIRROR]
              </button>
              <a href="/weapons" className="block mt-4 text-sm underline hover:text-zinc-400 transition-colors">
                [just show me the weapons]
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default IGCompleteFlow;