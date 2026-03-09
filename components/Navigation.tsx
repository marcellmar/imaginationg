import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  currentPage?: string;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { key: 'insights', label: 'Insights', href: '/insights' },
    { key: 'analyses', label: 'Analyses', href: '/insights/gpi-analyses' },
    { key: 'framework', label: 'Framework', href: '/gpi-framework' },
    { key: 'diagnostic', label: 'Diagnostic', href: '/diagnostic' },
    { key: 'about', label: 'About', href: '/about' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-stone-50/70 backdrop-blur-xl border-b border-stone-200/60">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="font-black text-lg tracking-tight text-stone-900">
            GPI<span className="text-red-600">.</span>STUDIO
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-7 text-sm font-medium text-stone-500">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className={`hover:text-stone-900 transition-colors ${
                    currentPage === item.key ? 'text-stone-900' : ''
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <Link
              href="/work-with-us"
              className={`text-sm font-semibold px-4 py-2 transition-colors ${
                currentPage === 'work'
                  ? 'bg-stone-900 text-white'
                  : 'bg-stone-900 text-white hover:bg-stone-800'
              }`}
            >
              Work With Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-stone-900 hover:text-red-600 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          <div className="absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-stone-200">
            <div className="flex flex-col py-2">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-6 py-4 text-base font-medium border-b border-stone-100 hover:bg-stone-50 transition-colors ${
                    currentPage === item.key ? 'text-red-600' : 'text-stone-900'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/work-with-us"
                onClick={() => setIsOpen(false)}
                className="mx-6 my-4 text-center bg-stone-900 text-white py-3 text-sm font-semibold"
              >
                Work With Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
