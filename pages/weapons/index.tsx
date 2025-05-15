import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';

const weapons = [
  {
    id: 1,
    title: "Clarity Collision",
    description: "You speak. We cut. You move. We leave.",
    price: "$500",
    duration: "90 minutes",
    popular: false,
    slug: "clarity-catalyst-call"
  },
  {
    id: 2,
    title: "Ecosystem Collision Map",
    description: "Your network is dead. Get the real collisions. Or stay soft.",
    price: "$1,000",
    duration: "1 week",
    popular: false,
    slug: "ecosystem-map"
  },
  {
    id: 3,
    title: "Market Smackdown",
    description: "Face the truth you've been avoiding. Go or drift.",
    price: "$1,500",
    duration: "5-7 days",
    popular: false,
    slug: "pre-market-signal-scan"
  },
  {
    id: 4,
    title: "30-Day Drift Break", 
    description: "Movement. Forced. No plan. No options. Just move.",
    price: "$3,000",
    duration: "4 weeks",
    popular: true,
    slug: "movement-sprint"
  },
  {
    id: 5,
    title: "First Blood Build",
    description: "Bleed for it. Or keep lying to yourself. Build the bruise.",
    price: "$5,000",
    duration: "2-3 weeks",
    popular: false,
    slug: "mvp-jumpstart"
  }
];

const WeaponsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Weapons | IMAGINATION G</title>
        <meta name="description" content="Pick your weapon. Stop drifting. Start moving." />
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

        {/* Header */}
        <header className="pt-32 pb-16 px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">PICK YOUR WEAPON</h1>
            <p className="text-xl md:text-2xl text-zinc-500 max-w-3xl mx-auto">
              Stop lying to yourself. Choose how you'll move.
            </p>
          </div>
        </header>

        {/* Weapons List */}
        <main className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 max-w-5xl mx-auto">
              {weapons.map((weapon) => (
                <Link 
                  key={weapon.id}
                  href={`/weapons/${weapon.slug}`}
                  className={`border border-zinc-800 p-8 hover:bg-zinc-900 transition-all duration-300 cursor-pointer relative ${
                    weapon.popular ? 'border-white' : ''
                  }`}
                >
                  {weapon.popular && (
                    <div className="absolute top-0 right-0 bg-white text-black px-4 py-1 text-sm font-medium">
                      MOST LETHAL
                    </div>
                  )}
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{weapon.title}</h3>
                      <p className="text-zinc-400">{weapon.description}</p>
                    </div>
                    <p className="text-3xl font-bold">{weapon.price}</p>
                  </div>
                  <p className="text-sm text-zinc-500 mb-6">Duration: {weapon.duration}</p>
                  <div className="flex items-center group">
                    <span className="text-white group-hover:text-zinc-300 transition-colors">DEPLOY</span>
                    <ArrowRight className="ml-2 h-4 w-4 text-white group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="text-center mt-16">
              <div className="bg-zinc-900 p-8 inline-block">
                <h3 className="text-2xl font-bold mb-4">CAN'T DECIDE?</h3>
                <p className="text-lg text-zinc-400 mb-6">Let the diagnostic prescribe your weapon based on your drift patterns.</p>
                <Link 
                  href="/diagnostic"
                  className="inline-flex items-center bg-red-500 text-white px-8 py-4 text-lg font-medium hover:bg-red-600 transition-all duration-300">
                  TAKE THE 60-SECOND DIAGNOSTIC
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <p className="text-sm text-zinc-500 mt-4">Warning: Brutally honest results.</p>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="py-12 px-6 bg-zinc-900 border-t border-zinc-800 text-center">
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

export default WeaponsPage;