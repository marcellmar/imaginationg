import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const WeaponsPage: NextPage = () => {
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
      price: '$500',
      duration: 'One Session. One Truth.',
      description: 'Surface the buried signal. Say what you\'ve been building around instead of from. Out loud.',
      url: '/weapons/the-naming'
    },
    {
      name: 'THE MAP',
      price: '$1,000',
      duration: '7 days',
      description: 'Map the real connections. Surface the recursive patterns you\'ve been optimizing around.',
      url: '/weapons/the-map'
    },
    {
      name: 'THE MARKET SMACKDOWN',
      price: '$1,500',
      duration: '5-7 days',
      description: 'The market signal is already there. We help you hear what you\'ve been ignoring.',
      url: '/weapons/the-market-smackdown'
    },
    {
      name: '30-DAY DRIFT BREAK',
      price: '$3,000',
      duration: '30 days',
      description: '30-day real-time edits to live operations. No simulations. Just the override you named.',
      badge: 'LIVE SYSTEM',
      url: '/weapons/thirty-day-drift-break'
    },
    {
      name: 'FIRST BLOOD BUILD',
      price: '$5,000',
      duration: '6 weeks max',
      description: 'Build from the truth you surfaced. Function over form. Agency over aesthetics.',
      url: '/weapons/first-blood-build'
    }
  ];

  return (
    <>
      <Head>
        <title>INTERVENTIONS | IMAGINATION G</title>
        <meta name="description" content="Systematic interventions to surface buried truth and build from real foundations." />
      </Head>

      <div className="min-h-screen bg-black text-white">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-sm z-50 border-b border-zinc-800">
          <div className="max-w-6xl mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <Link href="/" className="text-2xl font-black hover:text-zinc-400 transition-colors">
                IMAGINATION G
              </Link>
              <Link href="/ig-complete-flow" className="text-sm font-bold hover:text-zinc-400 transition-colors">
                [BUILD FROM REAL]
              </Link>
            </div>
          </div>
        </nav>

        <div className="pt-24 px-6 pb-20">
          <div className="max-w-4xl mx-auto">
            {/* Hero */}
            <div className="mb-20 text-center">
              <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tight">AVAILABLE INTERVENTIONS</h1>
              <p className="text-xl text-zinc-400">Deploy targeted intervention. Or optimize around the problem.</p>
            </div>
            
            {/* Flow Data Display */}
            {flowData && (
              <div className="grid md:grid-cols-2 gap-8 mb-20 max-w-3xl mx-auto">
                <div className="bg-zinc-900 border border-zinc-800 p-6 rounded">
                  <p className="text-zinc-500 text-sm uppercase mb-2">BURIED TRUTH:</p>
                  <p className="text-xl text-white">{flowData.drift}</p>
                </div>
                <div className="bg-zinc-900 border border-zinc-800 p-6 rounded">
                  <p className="text-zinc-500 text-sm uppercase mb-2">OVERRIDE PATH:</p>
                  <p className="text-xl text-white">{flowData.move}</p>
                </div>
              </div>
            )}
            
            {/* Interventions List */}
            <div className="space-y-0">
              {interventions.map((intervention, index) => (
                <div key={index} className="border-b border-zinc-800 py-12 hover:bg-zinc-950 transition-all group">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-2">
                        <h2 className="text-2xl md:text-3xl font-black">{intervention.name}</h2>
                        {intervention.badge && (
                          <span className="text-sm font-bold text-red-500 border border-red-500 px-2 py-1">
                            {intervention.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-lg text-zinc-400 mb-2">{intervention.description}</p>
                      <p className="text-sm text-zinc-600">{intervention.duration}</p>
                    </div>
                    <div className="flex items-center gap-6">
                      <span className="text-2xl md:text-3xl font-black">{intervention.price}</span>
                      <Link 
                        href={intervention.url}
                        className="bg-white text-black px-6 py-3 text-lg font-black hover:bg-zinc-900 hover:text-white transition-all duration-300"
                      >
                        DEPLOY
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-20 text-center">
              <p className="text-xl text-zinc-400 mb-8">Not sure which intervention you need?</p>
              <Link 
                href="/diagnostic"
                className="inline-block bg-black text-white px-8 py-4 text-xl font-black border-4 border-white hover:bg-white hover:text-black transition-all duration-300"
              >
                TAKE THE DIAGNOSTIC
              </Link>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-zinc-800 px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start gap-8">
              <div>
                <h3 className="text-2xl font-black mb-4">IMAGINATION G</h3>
                <p className="text-zinc-400">We don't consult. We collide.</p>
              </div>
              <div className="flex gap-8">
                <Link href="/about" className="text-zinc-400 hover:text-white transition-colors">About</Link>
                <Link href="/weapons" className="text-zinc-400 hover:text-white transition-colors">Interventions</Link>
                <Link href="/case-studies" className="text-zinc-400 hover:text-white transition-colors">Results</Link>
                <Link href="/diagnostic" className="text-zinc-400 hover:text-white transition-colors">Diagnostic</Link>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-zinc-800 text-zinc-600 text-sm">
              <p>&copy; 2024 IMAGINATION G. No refunds. No apologies.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default WeaponsPage;