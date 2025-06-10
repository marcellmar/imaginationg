import type { NextPage } from 'next';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import SEOHead from '../../components/SEOHead';
import Navigation from '../../components/Navigation';

const InterventionsPage: NextPage = () => {
  const [flowData, setFlowData] = useState<{drift: string, move: string} | null>(null);

  useEffect(() => {
    // Check for flow data from IG Complete Flow
    if (typeof window !== 'undefined') {
      const storedFlowData = sessionStorage.getItem('flowData');
      if (storedFlowData) {
        try {
          const data = JSON.parse(storedFlowData);
          if (data.fromFlow) {
            setFlowData({ drift: data.drift, move: data.move });
            sessionStorage.removeItem('flowData'); // Clear after reading
          }
        } catch (error) {
          console.error('Error parsing flow data:', error);
        }
      }
    }
  }, []);

  const interventions = [
    {
      name: 'THE NAMING',
      price: '$750',
      duration: 'Complete Portal Experience',
      description: 'Pre-session prep, live truth excavation via Teams, post-session tracking. Complete clarity guaranteed.',
      url: '/interventions/the-naming',
      badge: 'PORTAL'
    },
    {
      name: 'THE MAP',
      price: '$1,500',
      duration: '5 Days. Clear Connections.',
      description: 'Identify the real connections that will move your business forward. Stop wasting time on dead networks.',
      url: '/interventions/the-map',
      badge: 'PORTAL'
    },
    {
      name: 'THE MARKET SMACKDOWN',
      price: '$2,250',
      duration: '3 Days. Clear Verdict.',
      description: 'Simple question: Should you enter this market or not? Evidence-based GO/NO-GO decision.',
      url: '/interventions/the-market-smackdown',
      badge: 'PORTAL'
    },
    {
      name: 'THE OVERRIDE',
      price: '$3,000',
      duration: '30 Days. Pattern Broken.',
      description: 'Daily pattern interrupts via Teams. Break the stuck pattern that\'s killing momentum. No meetings about meetings.',
      badge: 'PORTAL',
      url: '/interventions/the-override'
    },
    {
      name: 'THE BUILD',
      price: '$4,500',
      duration: '4 Weeks. MVP or Kill.',
      description: 'Working MVP in 4 weeks. Get first paying customer. Ship ugly, learn fast, scale or kill based on data.',
      badge: 'PORTAL',
      url: '/interventions/the-build'
    }
  ];

  return (
    <>
      <SEOHead
        title="Movement Interventions | IMAGINATION G"
        description="Systematic interventions to surface buried truth and build from real foundations. From quick clarity calls to full transformations."
        ogImage="/images/og-services.svg"
      />

      <div className="min-h-screen bg-black text-white">
        <Navigation currentPage="interventions" />

        <section className="pt-24 pb-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto">
              {/* Hero */}
              <div className="mb-16 text-center">
                {/* System Status Badge */}
                <div className="inline-block mb-8 text-green-400 text-xs font-mono bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-full">
                  <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                  INTERVENTIONS: LOADED
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1]">
                  AVAILABLE<br />INTERVENTIONS<span className="text-red-600">.</span>
                </h1>
                <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                  Deploy targeted intervention. Or optimize around the problem.
                </p>
              </div>
              
              {/* Flow Data Display */}
              {flowData && (
                <div className="grid md:grid-cols-2 gap-6 mb-16 max-w-3xl mx-auto">
                  <div className="bg-zinc-950 border border-zinc-800 p-6">
                    <p className="text-zinc-500 text-sm uppercase mb-2">BURIED TRUTH:</p>
                    <p className="text-xl">{flowData.drift}</p>
                  </div>
                  <div className="bg-zinc-950 border border-zinc-800 p-6">
                    <p className="text-zinc-500 text-sm uppercase mb-2">OVERRIDE PATH:</p>
                    <p className="text-xl">{flowData.move}</p>
                  </div>
                </div>
              )}
              
              {/* Interventions Grid */}
              <div className="space-y-8">
                {interventions.map((intervention, index) => (
                  <div key={index} className="group border border-zinc-800 p-8 hover:border-red-600 transition-all">
                    <div className="flex flex-col lg:flex-row justify-between items-start gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-4">
                          <h2 className="text-2xl md:text-3xl font-black">{intervention.name}</h2>
                          {intervention.badge && (
                            <span className="text-xs font-bold text-red-600 border border-red-600 px-2 py-1 rounded">
                              {intervention.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-lg text-zinc-400 mb-4">{intervention.description}</p>
                        <p className="text-sm text-zinc-600">{intervention.duration}</p>
                      </div>
                      <div className="flex items-center gap-6">
                        <span className="text-3xl font-black">{intervention.price}</span>
                        <Link 
                          href={intervention.url}
                          className="bg-red-600 px-8 py-4 text-lg font-black hover:bg-red-700 transition-colors"
                        >
                          DEPLOY →
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom CTA */}
              <div className="mt-20 text-center border-t border-zinc-900 pt-16">
                <p className="text-xl text-zinc-400 mb-8">Not sure which intervention you need?</p>
                <Link 
                  href="/diagnostic"
                  className="inline-block border-2 border-zinc-700 px-8 py-4 text-xl font-black hover:border-zinc-500 transition-colors"
                >
                  TAKE THE DIAGNOSTIC
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default InterventionsPage;