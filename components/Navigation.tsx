import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  currentPage?: string;
}

const navItems = [
  { key: 'reads', label: 'Reads', href: '/insights' },
  { key: 'framework', label: 'Lens', href: '/gpi-framework' },
  { key: 'maps', label: 'Maps', href: '/maps' },
  { key: 'diagnostic', label: 'Signal', href: '/signal' },
  { key: 'work', label: 'Work', href: '/work' },
  { key: 'about', label: 'About', href: '/about' },
];

const Navigation: React.FC<NavigationProps> = ({ currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-stone-300 bg-[#f7f2e8]/95">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <Link href="/" className="font-mono text-sm font-bold tracking-normal text-stone-950">
            GPI.STUDIO
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={`font-mono text-xs underline-offset-4 hover:underline ${
                  currentPage === item.key ? 'text-red-700 underline' : 'text-stone-700'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-stone-950"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed inset-x-0 top-12 z-40 border-b border-stone-300 bg-[#f7f2e8] md:hidden">
          <div className="flex flex-col px-5 py-3">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`border-b border-stone-200 py-4 font-mono text-sm ${
                  currentPage === item.key ? 'text-red-700' : 'text-stone-800'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
