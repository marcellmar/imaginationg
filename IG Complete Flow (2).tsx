import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const IGCompleteFlow = () => {
  const [currentPage, setCurrentPage] = useState('filter');
  const [timeOnPage, setTimeOnPage] = useState(0);
  const [drift, setDrift] = useState('');
  const [move, setMove] = useState('');
  const [driftComplete, setDriftComplete] = useState(false);
  const [moveComplete, setMoveComplete] = useState(false);

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
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-0 w-full h-px bg-red-900 opacity-30"></div>
          <div className="absolute bottom-20 right-0 w-full h-px bg-red-900 opacity-30"></div>
          <div className="absolute left-20 top-0 h-full w-px bg-red-900 opacity-20"></div>
          <div className="absolute right-20 top-0 h-full w-px bg-red-900 opacity-20"></div>
        </div>
        
        <div className="relative z-10 min-h-screen flex flex-col justify-center px-6">
          <div className="max-w-5xl mx-auto w-full">
            {/* Header - Massive and confrontational */}
            <div className="mb-32 text-center">
              <h1 className="text-7xl md:text-9xl lg:text-[12rem] font-black tracking-tighter leading-none mb-4">
                <span className="text-red-500">YOU</span> <span className="text-white">SUCK.</span>
              </h1>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white">
                NOW WHAT?
              </h2>
            </div>
            
            {/* Input sections - Stark and minimal */}
            <div className="max-w-2xl mx-auto space-y-32">
              {/* Drift input */}
              <div>
                <div className="mb-16 text-center">
                  <p className="text-4xl md:text-5xl font-black text-white mb-4">
                    NAME YOUR <span className="text-red-500">DRIFT</span>
                  </p>
                  <p className="text-xl text-zinc-600">The thing killing you. The stuck. The lie.</p>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    value={drift}
                    onChange={(e) => setDrift(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter' && drift.length > 3) {
                        setDriftComplete(true);
                      }
                    }}
                    className="w-full bg-black border-b-8 border-red-500 text-white text-3xl md:text-4xl px-4 py-8 focus:outline-none transition-all duration-300 placeholder-zinc-700 text-center font-bold"
                    placeholder="TYPE THE TRUTH"
                    autoFocus
                  />
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-50"></div>
                </div>
                {drift.length > 3 && !driftComplete && (
                  <div className="text-center mt-8">
                    <button
                      onClick={() => setDriftComplete(true)}
                      className="text-zinc-500 text-lg hover:text-white transition-colors"
                    >
                      Press ENTER or click here to continue →
                    </button>
                  </div>
                )}
              </div>
              
              {/* Move input - Only shows after drift is complete */}
              {driftComplete && (
                <div className="animate-fade-in">
                  <div className="mb-16 text-center">
                    <p className="text-4xl md:text-5xl font-black text-white mb-4">
                      NAME YOUR <span className="text-red-500">MOVE</span>
                    </p>
                    <p className="text-xl text-zinc-600">The real one. Not the corporate BS.</p>
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      value={move}
                      onChange={(e) => setMove(e.target.value)}
                      onKeyPress={(e) => {
                        if (e.key === 'Enter' && move.length > 3) {
                          setMoveComplete(true);
                        }
                      }}
                      className="w-full bg-black border-b-8 border-red-500 text-white text-3xl md:text-4xl px-4 py-8 focus:outline-none transition-all duration-300 placeholder-zinc-700 text-center font-bold"
                      placeholder="TYPE THE MOVE"
                      autoFocus
                    />
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-50"></div>
                  </div>
                  {move.length > 3 && !moveComplete && (
                    <div className="text-center mt-8">
                      <button
                        onClick={() => setMoveComplete(true)}
                        className="text-zinc-500 text-lg hover:text-white transition-colors"
                      >
                        Press ENTER or click here to continue →
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
            
            {/* Action buttons - Massive and confrontational */}
            {moveComplete && (
              <div className="animate-fade-in mt-32">
                {/* Summary box */}
                <div className="mb-20 max-w-3xl mx-auto border-4 border-red-500 p-12 bg-black">
                  <h3 className="text-3xl font-black text-red-500 mb-8 text-center">THE TRUTH YOU JUST TOLD:</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="text-center">
                      <p className="text-sm text-zinc-600 uppercase tracking-widest mb-2">YOUR DRIFT:</p>
                      <p className="text-2xl text-white font-bold">{drift}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-zinc-600 uppercase tracking-widest mb-2">YOUR MOVE:</p>
                      <p className="text-2xl text-white font-bold">{move}</p>
                    </div>
                  </div>
                </div>
                
                {/* Decision time */}
                <div className="text-center mb-12">
                  <p className="text-3xl md:text-4xl font-black text-white">
                    DECISION TIME. NO MORE <span className="text-red-500">BULLSHIT.</span>
                  </p>
                </div>
                
                {/* Buttons */}
                <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                  <button 
                    onClick={() => setCurrentPage('weapons')}
                    className="group relative bg-red-600 text-white px-12 py-10 text-3xl font-black tracking-wider hover:bg-red-700 transition-all duration-300 transform hover:scale-105 border-4 border-red-600 shadow-2xl"
                  >
                    <span className="relative z-10">MOVE</span>
                    <span className="block text-lg font-normal mt-2">Pick your weapon</span>
                  </button>
                  
                  <button 
                    onClick={() => setCurrentPage('drift')}
                    className="group relative bg-zinc-900 text-white px-12 py-10 text-3xl font-black tracking-wider border-4 border-zinc-700 hover:border-white hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
                  >
                    <span className="relative z-10">DRIFT</span>
                    <span className="block text-lg font-normal mt-2">Keep lying</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Timer in corner */}
        <div className="fixed top-8 right-8 text-red-500 font-mono">
          <p className="text-2xl font-bold">{timeOnPage}s</p>
          <p className="text-xs text-zinc-600">STILL THINKING?</p>
        </div>
        
        {/* Bottom warning */}
        <div className="fixed bottom-8 left-0 right-0 text-center">
          <p className="text-sm text-zinc-700">NO CONSULTANTS. NO FRAMEWORKS. JUST COLLISION.</p>
        </div>
      </div>
    );
  }

  // Drift Page
  if (currentPage === 'drift') {
    return (
      <div className="min-h-screen bg-black text-white font-sans relative overflow-hidden">
        {/* Animated background lines */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-0 w-full h-px bg-red-900 opacity-20 animate-pulse"></div>
          <div className="absolute bottom-1/3 right-0 w-full h-px bg-red-900 opacity-20 animate-pulse"></div>
        </div>
        
        <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
          <div className="text-center max-w-4xl">
            <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-wider text-red-500">COWARD.</h1>
            <p className="text-4xl md:text-5xl font-light mb-12">There's your mirror.</p>
            
            <div className="mb-16 max-w-3xl mx-auto">
              <p className="text-2xl text-zinc-300 mb-6">You just told me your drift:</p>
              <p className="text-3xl text-white font-bold mb-6">"{drift}"</p>
              <p className="text-2xl text-zinc-300 mb-6">And your move:</p>
              <p className="text-3xl text-white font-bold mb-12">"{move}"</p>
              <p className="text-2xl text-red-500">AND YOU CHOSE DRIFT.</p>
            </div>
            
            <div className="space-y-6 mb-16">
              <p className="text-xl text-zinc-500">Know what that makes you?</p>
              <p className="text-3xl font-bold">A PROFESSIONAL LIAR.</p>
              <p className="text-xl text-zinc-500">The kind who schedules meetings about meetings.</p>
              <p className="text-xl text-zinc-500">The kind who says "let's circle back."</p>
              <p className="text-xl text-zinc-500">The kind who's "waiting for Q3."</p>
            </div>
            
            <div className="mt-16 pt-16 border-t border-zinc-800">
              <p className="text-2xl mb-8 text-zinc-400 font-bold">YOUR DRIFT STARTER PACK:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-2xl mx-auto mb-12">
                <div>
                  <h3 className="text-xl font-bold text-red-500 mb-4">EXCUSES YOU'LL USE:</h3>
                  <ul className="space-y-3 text-lg text-zinc-500">
                    <li>✓ "The market isn't ready"</li>
                    <li>✓ "We need more data"</li>
                    <li>✓ "Let's get stakeholder buy-in"</li>
                    <li>✓ "It's not the right time"</li>
                    <li>✓ "The tech isn't mature"</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-red-500 mb-4">WHAT YOU'LL LOSE:</h3>
                  <ul className="space-y-3 text-lg text-zinc-500">
                    <li>✗ Another year</li>
                    <li>✗ Your best people</li>
                    <li>✗ Market position</li>
                    <li>✗ Any remaining credibility</li>
                    <li>✗ The chance you just had</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-16">
              <p className="text-2xl mb-8 text-zinc-300">But hey, enjoy your PowerPoints.</p>
              <button 
                onClick={() => setCurrentPage('filter')}
                className="text-2xl font-bold text-white border-b-4 border-white hover:text-red-500 hover:border-red-500 transition-all duration-200"
              >
                I'M NOT A COWARD. LET ME PROVE IT.
              </button>
              <div className="mt-8">
                <p className="text-sm text-zinc-600">
                  [no soft version. deal with it.]
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="fixed bottom-8 right-8 text-zinc-600 text-sm">
          <p>{timeOnPage}s of drift</p>
          <p className="text-xs">and counting...</p>
        </div>
      </div>
    );
  }

  // Weapons Page
  if (currentPage === 'weapons') {
    const weapons = [
      { 
        id: 'catalyst', 
        name: 'THE NAMING', 
        serviceName: 'THE NAMING',
        price: '$500', 
        desc: 'This is not a conversation. It\'s the room. You say the thing you\'ve been lying about. Out loud.',
        serviceUrl: '/weapons/the-naming'
      },
      { 
        id: 'map', 
        name: 'THE MAP', 
        serviceName: 'THE MAP',
        price: '$1,000', 
        desc: 'Your network is dead. We show you the collisions you\'ve been pretending aren\'t there.',
        serviceUrl: '/weapons/the-map'
      },
      { 
        id: 'signal', 
        name: 'THE MARKET SMACKDOWN', 
        serviceName: 'THE MARKET SMACKDOWN',
        price: '$1,500', 
        desc: 'The market\'s already told you \'no.\' We make you face it.',
        serviceUrl: '/weapons/the-market-smackdown'
      },
      { 
        id: 'sprint', 
        name: '30-DAY DRIFT BREAK', 
        serviceName: '30-DAY DRIFT BREAK',
        price: '$3,000', 
        desc: 'Forced movement. No plans. No meetings. Just the thing you said you\'d do—or didn\'t.',
        serviceUrl: '/weapons/thirty-day-drift-break'
      },
      { 
        id: 'mvp', 
        name: 'FIRST BLOOD BUILD', 
        serviceName: 'FIRST BLOOD BUILD',
        price: '$5,000', 
        desc: 'Build the thing that bruises. Fast. Ugly. You bleed for it. Or you keep bluffing.',
        serviceUrl: '/weapons/first-blood-build'
      }
    ];

    return (
      <div className="min-h-screen bg-black text-white font-sans relative">
        <div className="relative z-10 min-h-screen px-6 py-16">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-wider">PICK YOUR WEAPON</h1>
            <p className="text-2xl mb-8 text-zinc-500 font-light">You know why you're here.</p>
            
            {/* Show user's drift and move */}
            <div className="mb-16 p-6 border border-zinc-800 bg-zinc-950 rounded-sm max-w-3xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-zinc-500 uppercase tracking-wider mb-2">YOUR DRIFT:</p>
                  <p className="text-lg text-white">{drift}</p>
                </div>
                <div>
                  <p className="text-sm text-zinc-500 uppercase tracking-wider mb-2">YOUR MOVE:</p>
                  <p className="text-lg text-white">{move}</p>
                </div>
              </div>
            </div>
            
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