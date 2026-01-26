import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  currentPage?: string;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { key: 'home', label: 'HOME', href: '/' },
    { key: 'companies', label: 'COMPANIES', href: '/companies' },
    { key: 'deals', label: 'DEALS', href: '/deals' },
    { key: 'insights', label: 'INSIGHTS', href: '/insights' },
    { key: 'framework', label: 'FRAMEWORK', href: '/gpi-framework' },
    { key: 'diagnostic', label: 'DIAGNOSTIC', href: '/diagnostic' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="font-black text-xl tracking-tight">
            GPI<span className="text-red-600">.</span>STUDIO
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-6 text-sm font-bold">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={`hover:text-red-600 transition-colors ${
                  currentPage === item.key ? 'text-red-600' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white hover:text-red-600 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Menu */}
          <div className="absolute top-16 left-0 right-0 bg-black border-b border-zinc-800">
            <div className="flex flex-col py-4">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-6 py-4 text-lg font-bold border-b border-zinc-900 hover:bg-zinc-900 transition-colors ${
                    currentPage === item.key ? 'text-red-600' : 'text-white'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
