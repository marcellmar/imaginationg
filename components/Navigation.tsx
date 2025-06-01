import React from 'react';
import Link from 'next/link';

interface NavigationProps {
  currentPage?: string;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-black z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-base font-black">IMAGINATION G</Link>
        <div className="flex items-center gap-8">
          <Link href="/" className={`text-sm hover:text-zinc-400 transition-colors ${currentPage === 'home' ? 'text-white' : 'text-zinc-400'}`}>
            ← Home
          </Link>
          <Link href="/weapons" className={`text-sm hover:text-zinc-400 transition-colors ${currentPage === 'weapons' ? 'text-white' : 'text-zinc-400'}`}>
            Weapons
          </Link>
          <Link href="/about" className={`text-sm hover:text-zinc-400 transition-colors ${currentPage === 'about' ? 'text-white' : 'text-zinc-400'}`}>
            About
          </Link>
          <Link 
            href="https://outlook.office.com/owa/calendar/IG@imaginationg.studio/bookings/" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-6 py-2 text-sm font-bold hover:bg-zinc-200 transition-colors"
          >
            Book a Call
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;