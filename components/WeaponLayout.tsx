import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';

interface WeaponLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
  price: string;
  nextWeapon?: {
    name: string;
    slug: string;
  };
  prevWeapon?: {
    name: string;
    slug: string;
  };
}

interface FlowData {
  fromFlow: boolean;
  drift: string;
  move: string;
}

const WeaponLayout: React.FC<WeaponLayoutProps> = ({
  children,
  title,
  description,
  price,
  nextWeapon,
  prevWeapon
}) => {
  const [flowData, setFlowData] = useState<FlowData | null>(null);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user is coming from the flow
    const stored = sessionStorage.getItem('flowData');
    if (stored) {
      try {
        const data = JSON.parse(stored);
        if (data.fromFlow) {
          setFlowData(data);
          setShowBanner(true);
          // Clear the flowData after reading to prevent showing again
          sessionStorage.removeItem('flowData');
        }
      } catch (error) {
        console.error('Error parsing flowData:', error);
      }
    }
  }, []);

  const handleCloseBanner = () => {
    setShowBanner(false);
  };

  return (
    <>
      <Head>
        <title>{title} | IMAGINATION G</title>
        <meta name="description" content={description} />
      </Head>

      <div className="min-h-screen bg-black text-white">
        {/* Navigation Bar */}
        <nav className="bg-black bg-opacity-95 backdrop-blur-sm shadow-lg px-6 py-4 fixed top-0 left-0 right-0 z-50">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <Link href="/" className="text-xl font-bold tracking-wider">IMAGINATION G</Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="hover:text-gray-300 transition-colors flex items-center gap-1">
                <span>←</span> Home
              </Link>
              <Link href="/weapons" className="hover:text-gray-300 transition-colors">Weapons</Link>
              <Link href="/about" className="hover:text-gray-300 transition-colors">About</Link>
              <a
                href="https://outlook.office.com/owa/calendar/IG@imaginationg.studio/bookings/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-6 py-2 font-medium hover:bg-gray-200 transition-all inline-block">
                Book a Call
              </a>
            </div>
          </div>
        </nav>

        {/* Flow Banner */}
        {showBanner && flowData && (
          <div className="fixed top-20 left-0 right-0 z-40 bg-gradient-to-r from-red-600 to-orange-600 text-white">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
              <p className="text-lg font-medium">
                You've named your drift: <span className="font-bold">{flowData.drift}</span>. 
                Your move: <span className="font-bold">{flowData.move}</span>. 
                Let's make it happen.
              </p>
              <button 
                onClick={handleCloseBanner}
                className="p-1 hover:bg-white hover:bg-opacity-20 rounded"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        )}

        {/* Service Header */}
        <header className={`${showBanner ? 'pt-44' : 'pt-32'} pb-16 px-6 transition-all duration-300`}>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
            <p className="text-xl text-zinc-400 mb-6 max-w-3xl">{description}</p>
            <div className="text-3xl font-bold text-white mb-8">{price}</div>
          </div>
        </header>

        {/* Service Content */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            {children}
          </div>
        </section>

        {/* Navigation Between Services */}
        <nav className="py-12 px-6 border-t border-zinc-800">
          <div className="max-w-4xl mx-auto flex justify-between items-center">
            {prevWeapon ? (
              <Link href={`/weapons/${prevWeapon.slug}`} className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
                <ArrowLeft size={20} />
                <span>{prevWeapon.name}</span>
              </Link>
            ) : (
              <div></div>
            )}
            
            {nextWeapon ? (
              <Link href={`/weapons/${nextWeapon.slug}`} className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
                <span>{nextWeapon.name}</span>
                <ArrowRight size={20} />
              </Link>
            ) : (
              <div></div>
            )}
          </div>
        </nav>

        {/* Footer */}
        <footer className="py-12 px-6 bg-zinc-900 text-center">
          <div className="max-w-4xl mx-auto">
            <Link href="/" className="text-xl font-bold mb-4 inline-block">IMAGINATION G</Link>
            <p className="text-zinc-400 mb-6">STOP DRIFTING. START MOVING.</p>
            <p className="text-sm text-zinc-500">&copy; {new Date().getFullYear()} IMAGINATION G. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default WeaponLayout;