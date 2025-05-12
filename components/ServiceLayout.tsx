import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

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

const ServiceLayout: React.FC<ServiceLayoutProps> = ({
  children,
  title,
  description,
  price,
  nextService,
  prevService
}) => {
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
              <Link href="/#services" className="hover:text-gray-300 transition-colors">Services</Link>
              <Link href="/#about" className="hover:text-gray-300 transition-colors">About</Link>
              <Link href="/#testimonials" className="hover:text-gray-300 transition-colors">Results</Link>
              <Link href="/#faq" className="hover:text-gray-300 transition-colors">FAQ</Link>
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

        {/* Service Header */}
        <header className="pt-32 pb-16 px-6 bg-zinc-900">
          <div className="max-w-4xl mx-auto">
            <Link 
              href="/#services" 
              className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft size={16} />
              <span>Back to all services</span>
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
            <p className="text-xl text-zinc-300 mb-6">{description}</p>
            <div className="text-3xl font-bold text-white">{price}</div>
          </div>
        </header>

        {/* Service Content */}
        <main className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            {children}
          </div>
        </main>

        {/* Service Navigation */}
        <div className="py-16 px-6 bg-zinc-900 border-t border-zinc-800">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            {prevService ? (
              <Link 
                href={`/services/${prevService.slug}`} 
                className="flex flex-col items-start group"
              >
                <span className="flex items-center gap-1 text-zinc-400 group-hover:text-white transition-colors">
                  <ArrowLeft size={16} />
                  <span>Previous Service</span>
                </span>
                <span className="text-xl font-medium group-hover:text-white transition-colors">{prevService.name}</span>
              </Link>
            ) : (
              <div></div>
            )}

            <a 
              href="https://outlook.office.com/owa/calendar/IG@imaginationg.studio/bookings/" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-8 py-4 font-medium hover:bg-gray-200 transition-all inline-block"
            >
              Book This Service
            </a>

            {nextService ? (
              <Link 
                href={`/services/${nextService.slug}`} 
                className="flex flex-col items-end group"
              >
                <span className="flex items-center gap-1 text-zinc-400 group-hover:text-white transition-colors">
                  <span>Next Service</span>
                  <ArrowRight size={16} />
                </span>
                <span className="text-xl font-medium group-hover:text-white transition-colors">{nextService.name}</span>
              </Link>
            ) : (
              <div></div>
            )}
          </div>
        </div>

        {/* Footer */}
        <footer className="py-12 px-6 bg-black border-t border-zinc-800 text-center">
          <div className="max-w-4xl mx-auto">
            <Link href="/" className="text-xl font-bold mb-4 inline-block">IMAGINATION G</Link>
            <p className="text-zinc-400 mb-6">A Studio for Aligned Futures</p>
            <p className="text-sm text-zinc-500">&copy; {new Date().getFullYear()} IMAGINATION G. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ServiceLayout;