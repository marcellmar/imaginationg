import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import MomentumTracker from '../components/MomentumTracker';
import { ArrowLeft } from 'lucide-react';

const MomentumTrackerPage = () => {
  return (
    <>
      <Head>
        <title>Momentum Tracker | IMAGINATION G</title>
        <meta name="description" content="Track and maintain your momentum with our interactive tracking tool." />
      </Head>

      <div className="min-h-screen bg-black text-white">
        {/* Navigation */}
        <nav className="bg-black bg-opacity-95 backdrop-blur-sm shadow-lg px-6 py-4 fixed top-0 left-0 right-0 z-50">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <Link href="/" className="text-xl font-bold tracking-wider">IMAGINATION G</Link>
            <div className="flex items-center gap-4">
              <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                Home
              </Link>
              <span className="text-gray-600">|</span>
              <Link href="/momentum-hub" className="text-gray-400 hover:text-white transition-colors">
                Client Hub
              </Link>
            </div>
          </div>
        </nav>

        {/* Content */}
        <div className="pt-32 pb-16 px-6">
          <div className="max-w-4xl mx-auto">
            <Link 
              href="/momentum-hub" 
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft size={16} />
              <span>Back to Momentum Hub</span>
            </Link>

            <h1 className="text-4xl font-bold mb-4">Momentum Tracker</h1>
            <p className="text-xl text-gray-300 mb-12">Track your key metrics to measure movement and prevent drift.</p>
            
            <MomentumTracker />
            
            <div className="mt-12 bg-zinc-900 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">How to Use This Tool</h2>
              <p className="mb-6">The Momentum Tracker helps you quantify your progress and provides personalized recommendations to maintain and accelerate your movement.</p>
              
              <h3 className="text-xl font-bold mb-2">Tracking Guidelines</h3>
              <ul className="space-y-2 mb-8">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">•</span>
                  <span><strong>Weekly Check-in:</strong> Update your metrics every Monday morning</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">•</span>
                  <span><strong>Be Honest:</strong> Accurate data leads to better recommendations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">•</span>
                  <span><strong>Watch for Patterns:</strong> Notice how your score changes over time</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">•</span>
                  <span><strong>Take Action:</strong> Implement the recommended actions immediately</span>
                </li>
              </ul>
              
              <h3 className="text-xl font-bold mb-2">Understanding Your Score</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-black p-4 rounded-lg">
                  <div className="text-green-500 font-bold mb-1">80-100: Unstoppable</div>
                  <p className="text-sm">You're in full momentum mode. Keep tracking to maintain this level.</p>
                </div>
                <div className="bg-black p-4 rounded-lg">
                  <div className="text-blue-500 font-bold mb-1">60-79: Strong Momentum</div>
                  <p className="text-sm">Great progress with room for optimization. Focus on your strongest metrics.</p>
                </div>
                <div className="bg-black p-4 rounded-lg">
                  <div className="text-yellow-500 font-bold mb-1">40-59: Building Momentum</div>
                  <p className="text-sm">You're making progress but need more consistency. Implement all recommendations.</p>
                </div>
                <div className="bg-black p-4 rounded-lg">
                  <div className="text-orange-500 font-bold mb-1">20-39: Early Signs of Movement</div>
                  <p className="text-sm">You're starting to break drift patterns. Focus on quick wins this week.</p>
                </div>
                <div className="bg-black p-4 rounded-lg sm:col-span-2">
                  <div className="text-red-500 font-bold mb-1">0-19: Drift Warning</div>
                  <p className="text-sm">Several drift signals detected. Consider booking a Clarity Call for intervention.</p>
                </div>
              </div>
              
              <div className="text-center">
                <a 
                  href="https://outlook.office.com/owa/calendar/IG@imaginationg.studio/bookings/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black px-6 py-3 font-medium inline-block rounded hover:bg-gray-200 transition-all"
                >
                  Book Movement Support Session
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="py-12 px-6 bg-zinc-900 border-t border-zinc-800">
          <div className="max-w-4xl mx-auto text-center">
            <Link href="/" className="text-xl font-bold inline-block mb-4">IMAGINATION G</Link>
            <p className="text-gray-400 mb-6">A Studio for Aligned Futures</p>
            <div className="flex justify-center gap-6 mb-8">
              <Link href="/" className="text-gray-500 hover:text-white transition-colors">Home</Link>
              <Link href="/weapons" className="text-gray-500 hover:text-white transition-colors">Weapons</Link>
              <Link href="/diagnostic" className="text-gray-500 hover:text-white transition-colors">Diagnostic</Link>
              <Link href="/cheatsheet" className="text-gray-500 hover:text-white transition-colors">Playbook</Link>
            </div>
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} IMAGINATION G. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default MomentumTrackerPage;