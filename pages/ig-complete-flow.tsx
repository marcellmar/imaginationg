import type { NextPage } from 'next';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import SEOHead from '../components/SEOHead';
import Navigation from '../components/Navigation';
import { ArrowRight } from 'lucide-react';

const IGFlowPage: NextPage = () => {
  const router = useRouter();
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

  // Handle redirect to interventions with stored data
  const handleOverride = () => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('flowData', JSON.stringify({
        drift,
        move,
        fromFlow: true
      }));
      router.push('/interventions');
    }
  };

  // Filter Page - The Mirror
  if (currentPage === 'filter') {
    return (
      <>
        <SEOHead
          title="Build From Real - Surface Buried Truth | IMAGINATION G"
          description="Name what's buried. Choose your override. Grant full system access. No optimization theater."
          ogImage="/images/og-default.jpg"
        />

        <div className="min-h-screen bg-black text-white">
          <Navigation />
          
          {/* System status in corner */}
          <div className="fixed top-24 right-8 text-green-400 font-mono bg-zinc-950 border border-zinc-800 p-3 z-40">
            <p className="text-xs">OVERRIDE MODE:</p>
            <p className="text-lg font-bold">{timeOnPage}s</p>
            <p className="text-xs text-zinc-600">TRUTH DETECTION</p>
          </div>
          
          <section className="pt-24 pb-16 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="max-w-4xl mx-auto">
                {/* System Status Badge */}
                <div className="inline-block mb-8 text-green-400 text-xs font-mono bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-full">
                  <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                  SYSTEM: TRUTH DETECTION
                </div>

                {/* The invitation */}
                <div className="mb-24 text-center">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-[1.1]">
                    AGENCY OVER AESTHETICS<span className="text-red-600">.</span><br />
                    SIGNAL OVER NOISE<span className="text-red-600">.</span><br />
                    OVERRIDE OVER OPTIMIZE<span className="text-red-600">.</span>
                  </h1>
                  <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
                    You didn't come to clean the edges.<br />
                    You came to dismantle what was never true.
                  </p>
                </div>
                
                {/* First truth */}
                <div className="max-w-2xl mx-auto space-y-24">
                  <div>
                    <div className="mb-12 text-center">
                      <p className="text-3xl md:text-4xl font-black text-white">
                        NAME WHAT'S <span className="text-red-600">BURIED</span>
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
                      className="w-full bg-black border-b-4 border-white text-white text-2xl md:text-3xl px-0 py-4 focus:outline-none text-center font-black"
                      placeholder=""
                      autoFocus
                    />
                    {drift.length > 3 && !driftComplete && (
                      <div className="text-center mt-8">
                        <button
                          onClick={() => setDriftComplete(true)}
                          className="text-zinc-600 hover:text-white transition-colors"
                        >
                          <ArrowRight size={32} />
                        </button>
                      </div>
                    )}
                  </div>
                  
                  {/* Second truth */}
                  {driftComplete && (
                    <div className="animate-fade-in">
                      <div className="mb-12 text-center">
                        <p className="text-3xl md:text-4xl font-black text-white">
                          NAME THE <span className="text-red-600">OVERRIDE</span>
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
                        className="w-full bg-black border-b-4 border-white text-white text-2xl md:text-3xl px-0 py-4 focus:outline-none text-center font-black"
                        placeholder=""
                        autoFocus
                      />
                      {move.length > 3 && !moveComplete && (
                        <div className="text-center mt-8">
                          <button
                            onClick={() => setMoveComplete(true)}
                            className="text-zinc-600 hover:text-white transition-colors"
                          >
                            <ArrowRight size={32} />
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Truth Box and Buttons - Shows when move is complete */}
                {moveComplete && (
                  <div className="animate-fade-in mt-24">
                    {/* Truth Box */}
                    <div className="border-4 border-red-600 p-12 max-w-4xl mx-auto mb-12 bg-zinc-950">
                      <h3 className="text-3xl md:text-4xl font-black text-red-600 mb-12">
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
                    <div className="mb-12 text-center">
                      <h3 className="text-3xl md:text-4xl font-black">
                        NOW BUILD FROM <span className="text-red-600">REAL.</span>
                      </h3>
                    </div>

                    {/* Action Buttons */}
                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                      <button
                        onClick={handleOverride}
                        className="bg-red-600 hover:bg-red-700 text-white px-8 py-8 text-2xl font-black transition-colors"
                      >
                        OVERRIDE
                        <span className="block text-base font-normal mt-2">Grant full access</span>
                      </button>
                      <button
                        onClick={() => setCurrentPage('drift')}
                        className="bg-zinc-950 hover:bg-zinc-900 text-white px-8 py-8 text-2xl font-black border-2 border-zinc-700 transition-colors"
                      >
                        OPTIMIZE
                        <span className="block text-base font-normal mt-2">Clean the edges</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }

  // Optimize Page - The Choice to Stay Surface
  if (currentPage === 'drift') {
    return (
      <>
        <SEOHead
          title="Read-Only Mode - Access Denied | IMAGINATION G"
          description="Truth remains buried. Override path unused. Signal detected but access denied."
          noindex={true}
        />

        <div className="min-h-screen bg-black text-white">
          <Navigation />
          
          <section className="pt-24 pb-16 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="min-h-[80vh] flex items-center justify-center">
                <div className="text-center max-w-4xl">
                  {/* System Status Badge */}
                  <div className="inline-block mb-8 text-red-600 text-xs font-mono bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-full">
                    <span className="inline-block w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                    ACCESS: DENIED
                  </div>

                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-16 text-zinc-600">READ-ONLY</h1>
                  
                  <div className="space-y-8 text-xl md:text-2xl text-zinc-600 mb-20">
                    <p>Truth remains buried: <span className="text-white font-bold">{drift}</span></p>
                    <p>Override path unused: <span className="text-white font-bold">{move}</span></p>
                    <p className="text-lg text-zinc-500 mt-8">Signal detected. Access denied.</p>
                  </div>
                  
                  <button 
                    onClick={() => {
                      setCurrentPage('filter');
                      setDrift('');
                      setMove('');
                      setDriftComplete(false);
                      setMoveComplete(false);
                    }}
                    className="text-2xl font-black text-white border-b-4 border-white hover:text-red-600 hover:border-red-600 transition-all pb-2"
                  >
                    REQUEST ACCESS
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }

  return null;
};

export default IGFlowPage;