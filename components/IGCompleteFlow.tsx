import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const IGCompleteFlow = () => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState('filter');
  const [timeOnPage, setTimeOnPage] = useState(0);
  const [drift, setDrift] = useState('');
  const [move, setMove] = useState('');
  const [weapon, setWeapon] = useState('');
  const [email, setEmail] = useState('');
  const [selectedService, setSelectedService] = useState(null);

  // Map services to the aggressive flow
  const services = [
    {
      id: 'clarity-catalyst-call',
      aggName: 'Clarity Collision',
      officialName: 'Clarity Catalyst Call',
      price: '$250',
      desc: 'You speak. We cut. You move. We leave.',
      duration: '90 minutes'
    },
    {
      id: 'pre-market-signal-scan',
      aggName: 'Market Smackdown',
      officialName: 'Pre-Market Signal Scan',
      price: '$600',
      desc: 'Face the truth you\'ve been avoiding. Go or drift.',
      duration: '5-7 days'
    },
    {
      id: 'movement-sprint',
      aggName: '30-Day Drift Break',
      officialName: '30-Day Movement Sprint',
      price: '$1,500',
      desc: 'Movement. Forced. No plan. No options. Just move.',
      duration: '4 weeks'
    },
    {
      id: 'mvp-jumpstart',
      aggName: 'First Blood Build',
      officialName: 'MVP Jumpstart',
      price: '$2,000-$3,500',
      desc: 'Bleed for it. Or keep lying to yourself. Build the bruise.',
      duration: '2-3 weeks'
    },
    {
      id: 'ecosystem-map',
      aggName: 'Ecosystem Collision Map',
      officialName: 'Ecosystem Map + Connection Strategy',
      price: '$750',
      desc: 'Your network is dead. Get the real collisions. Or stay soft.',
      duration: '1 week'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeOnPage(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [currentPage]);

  // Filter Page
  if (currentPage === 'filter') {
    return (
      <div className="min-h-screen bg-black text-white font-sans relative overflow-hidden">
        {/* Subtle background lines */}
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
        
        {/* Status displays */}
        <div className="fixed top-8 right-8 text-zinc-600 text-sm">
          <p>{timeOnPage}s</p>
          <p className="text-xs">Still here?</p>
        </div>
        
        {/* Escape hatch to traditional site */}
        <div className="fixed bottom-8 left-8">
          <Link href="/" className="text-zinc-700 text-xs hover:text-zinc-500 transition-colors">
            [prefer the polite version?]
          </Link>
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
        
        {/* Escape hatch */}
        <div className="fixed bottom-8 left-8">
          <Link href="/" className="text-zinc-700 text-xs hover:text-zinc-500 transition-colors">
            [take me to safety]
          </Link>
        </div>
      </div>
    );
  }

  // Weapons Page
  if (currentPage === 'weapons') {
    return (
      <div className="min-h-screen bg-black text-white font-sans relative">
        <div className="relative z-10 min-h-screen px-6 py-16">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-wider">PICK YOUR WEAPON</h1>
            <p className="text-2xl mb-16 text-zinc-500 font-light">You know why you're here.</p>
            
            <div className="space-y-0">
              {services.map((service) => (
                <button 
                  key={service.id}
                  onClick={() => { 
                    setWeapon(service.id);
                    setSelectedService(service);
                    setCurrentPage('pay');
                  }}
                  className="w-full text-left p-8 border-b border-zinc-800 hover:bg-zinc-900 transition-all duration-300 group"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-zinc-300 transition-colors">
                        {service.aggName}
                      </h3>
                      <p className="text-lg text-zinc-500">{service.desc}</p>
                      <p className="text-sm text-zinc-700 mt-1">{service.duration}</p>
                    </div>
                    <p className="text-2xl md:text-3xl font-bold">{service.price}</p>
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
            </div>
          </div>
        </div>
        
        {/* Escape hatch */}
        <div className="fixed bottom-8 left-8">
          <Link href="/services" className="text-zinc-700 text-xs hover:text-zinc-500 transition-colors">
            [show me the polite menu]
          </Link>
        </div>
      </div>
    );
  }

  // Pay Page
  if (currentPage === 'pay') {
    const handlePayment = () => {
      // Store the selected data (could use context or state management)
      sessionStorage.setItem('selectedService', JSON.stringify({
        service: selectedService,
        drift: drift,
        move: move,
        email: email
      }));
      
      // Redirect to the actual service page
      router.push(`/services/${selectedService.id}`);
    };

    return (
      <div className="min-h-screen bg-black text-white font-sans relative">
        <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
          <div className="max-w-lg w-full">
            <h1 className="text-6xl md:text-8xl font-bold mb-16 tracking-wider">PAY UP.</h1>
            
            <div className="mb-16 space-y-6">
              <p className="text-xl">Your drift: <span className="font-bold text-red-500">{drift}</span></p>
              <p className="text-xl">Your move: <span className="font-bold text-green-500">{move}</span></p>
              <p className="text-xl">Your weapon: <span className="font-bold text-white">{selectedService.aggName}</span></p>
              <p className="text-2xl">({selectedService.officialName})</p>
              <p className="text-4xl font-bold mt-8">{selectedService.price}</p>
            </div>
            
            <div className="space-y-8">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-black border-b-2 border-white text-white text-xl px-0 py-4 focus:outline-none transition-all duration-300 hover:border-zinc-300"
                placeholder="Email. Now."
              />
              
              <div className="opacity-50">
                <input
                  type="text"
                  className="w-full bg-black border-b-2 border-zinc-700 text-zinc-700 text-xl px-0 py-4 focus:outline-none cursor-not-allowed"
                  placeholder="[payment details later]"
                  disabled
                />
              </div>
              
              <button 
                onClick={handlePayment}
                className="w-full bg-white text-black py-6 text-xl font-medium tracking-wider hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
              >
                CLAIM YOUR WEAPON →
              </button>
            </div>
            
            <div className="mt-12 text-center">
              <button 
                onClick={() => setCurrentPage('weapons')}
                className="text-sm underline hover:text-zinc-400 transition-colors"
              >
                [DIFFERENT WEAPON]
              </button>
            </div>
            
            <div className="mt-16 pt-8 border-t border-zinc-800">
              <p className="text-sm text-zinc-600 text-center mb-3">
                (You're entering the actual {selectedService.officialName} page)
              </p>
              <a 
                href={`/services/${selectedService.id}`}
                className="text-xs text-zinc-700 hover:text-zinc-500 transition-colors block text-center"
              >
                [skip theatrics → go direct]
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default IGCompleteFlow;