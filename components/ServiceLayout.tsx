import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';

interface ServiceLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
  price: string;
  nextService?: {
    name: string;
    slug: string;
  };
  prevService?: {
    name: string;
    slug: string;
  };
}

interface FlowData {
  fromFlow: boolean;
  drift: string;
  move: string;
}

const ServiceLayout: React.FC<ServiceLayoutProps> = ({
  children,
  title,
  description,
  price,
  nextService,
  prevService
}) => {
  const [flowData, setFlowData] = useState<FlowData | null>(null);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check for flowData in sessionStorage
    const storedFlowData = sessionStorage.getItem('flowData');
    if (storedFlowData) {
      try {
        const data = JSON.parse(storedFlowData);
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

  return (
    <>
      <Head>
        <title>{title} - IMAGINATION_G</title>
        <meta name="description" content={description} />
      </Head>

      <div className="min-h-screen bg-black text-white">
        {/* Flow Banner */}
        {showBanner && flowData && (
          <div className="fixed top-0 left-0 right-0 z-50 bg-red-600 text-white p-4">
            <div className="max-w-6xl mx-auto flex items-center justify-between">
              <div className="flex-1">
                <p className="font-semibold">Based on your flow analysis:</p>
                <p className="text-sm">Your Drift: {flowData.drift} → Your Move: {flowData.move}</p>
              </div>
              <button 
                onClick={() => setShowBanner(false)}
                className="ml-4 hover:bg-red-700 p-1 rounded"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        )}

        {/* Header */}
        <header className={`bg-zinc-900 border-b border-zinc-800 ${showBanner ? 'mt-24' : ''}`}>
          <div className="max-w-6xl mx-auto px-4 py-6">
            <nav className="flex items-center justify-between">
              <Link href="/" className="text-2xl font-bold">
                IMAGINATION<span className="text-red-600">_</span>G
              </Link>
              <Link 
                href="/ig-complete-flow"
                className="text-sm hover:text-red-600 transition-colors"
              >
                Back to Flow
              </Link>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-6xl mx-auto px-4 py-16">
          {/* Service Header */}
          <div className="mb-12">
            <Link 
              href="/services"
              className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-4"
            >
              <ArrowLeft size={16} />
              All Services
            </Link>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
            <p className="text-xl text-zinc-300 mb-6 max-w-3xl">{description}</p>
            <div className="text-3xl font-bold text-red-600">{price}</div>
          </div>

          {/* Content */}
          <div className="max-w-4xl">
            {children}
          </div>

          {/* Navigation */}
          <div className="mt-16 pt-8 border-t border-zinc-800">
            <div className="flex justify-between items-center">
              {prevService ? (
                <Link 
                  href={`/services/${prevService.slug}`}
                  className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
                >
                  <ArrowLeft size={16} />
                  {prevService.name}
                </Link>
              ) : (
                <div />
              )}
              
              {nextService ? (
                <Link 
                  href={`/services/${nextService.slug}`}
                  className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
                >
                  {nextService.name}
                  <ArrowRight size={16} />
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-zinc-900 border-t border-zinc-800 mt-24">
          <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-zinc-400 text-sm">
                © 2024 IMAGINATION_G. Stop drifting. Start moving.
              </p>
              <div className="flex gap-6">
                <Link href="/about" className="text-zinc-400 hover:text-white text-sm transition-colors">
                  About
                </Link>
                <Link href="/case-studies" className="text-zinc-400 hover:text-white text-sm transition-colors">
                  Case Studies
                </Link>
                <Link href="/diagnostic" className="text-zinc-400 hover:text-white text-sm transition-colors">
                  Drift Test
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ServiceLayout;