import React from 'react';
import Link from 'next/link';

interface NavigationProps {
  currentPage?: string;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="font-black text-xl">
          IMAGINATION <span className="text-red-600">G</span>
        </Link>
        <div className="flex gap-6 text-sm font-bold">
          <Link href="/answers" className="hover:text-red-600 transition-colors">ANSWERS</Link>
          <Link href="/diagnostic" className="hover:text-red-600 transition-colors">DIAGNOSTIC</Link>
          <Link href="/about" className="hover:text-red-600 transition-colors">ABOUT</Link>
          <Link href="/start" className="hover:text-red-600 transition-colors">DETECT</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;