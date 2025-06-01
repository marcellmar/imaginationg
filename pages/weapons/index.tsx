import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const WeaponsPage: NextPage = () => {
  const weapons = [
    {
      name: 'THE NAMING',
      price: '$500',
      duration: 'One Room. One Hour.',
      description: 'This is not a conversation. It\'s the room. You say the thing you\'ve been lying about. Out loud.',
      url: '/weapons/the-naming'
    },
    {
      name: 'THE MAP',
      price: '$1,000',
      duration: '7 days',
      description: 'Your network is dead. We show you the collisions you\'ve been pretending aren\'t there.',
      url: '/weapons/the-map'
    },
    {
      name: 'THE MARKET SMACKDOWN',
      price: '$1,500',
      duration: '5-7 days',
      description: 'The market\'s already told you \'no.\' We make you face it.',
      url: '/weapons/the-market-smackdown'
    },
    {
      name: '30-DAY DRIFT BREAK',
      price: '$3,000',
      duration: '30 days',
      description: 'Forced movement. No plans. No meetings. Just the thing you said you\'d do—or didn\'t.',
      badge: 'MOST LETHAL',
      url: '/weapons/thirty-day-drift-break'
    },
    {
      name: 'FIRST BLOOD BUILD',
      price: '$5,000',
      duration: '6 weeks max',
      description: 'Build the thing that bruises. Fast. Ugly. You bleed for it. Or you keep bluffing.',
      url: '/weapons/first-blood-build'
    }
  ];

  return (
    <>
      <Head>
        <title>WEAPONS | IMAGINATION G</title>
        <meta name="description" content="The rack. Choose. Or leave." />
      </Head>

      <div className="min-h-screen bg-black text-white">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-sm z-50 border-b border-zinc-800">
          <div className="max-w-6xl mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <Link href="/" className="text-2xl font-black hover:text-zinc-400 transition-colors">
                IMAGINATION G
              </Link>
              <Link href="/ig-complete-flow" className="text-sm font-bold hover:text-zinc-400 transition-colors">
                [YOU SUCK. NOW WHAT?]
              </Link>
            </div>
          </div>
        </nav>

        <div className="pt-24 px-6 pb-20">
          <div className="max-w-4xl mx-auto">
            {/* Hero */}
            <div className="mb-20 text-center">
              <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tight">THE RACK</h1>
              <p className="text-xl text-zinc-400">Choose your weapon. Or stay stuck.</p>
            </div>
            
            {/* Weapons List */}
            <div className="space-y-0">
              {weapons.map((weapon, index) => (
                <div key={index} className="border-b border-zinc-800 py-12 hover:bg-zinc-950 transition-all group">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-2">
                        <h2 className="text-2xl md:text-3xl font-black">{weapon.name}</h2>
                        {weapon.badge && (
                          <span className="text-sm font-bold text-red-500 border border-red-500 px-2 py-1">
                            {weapon.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-lg text-zinc-400 mb-2">{weapon.description}</p>
                      <p className="text-sm text-zinc-600">{weapon.duration}</p>
                    </div>
                    <div className="flex items-center gap-6">
                      <span className="text-2xl md:text-3xl font-black">{weapon.price}</span>
                      <Link 
                        href={weapon.url}
                        className="bg-white text-black px-6 py-3 text-lg font-black hover:bg-zinc-900 hover:text-white transition-all duration-300"
                      >
                        DEPLOY
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-20 text-center">
              <p className="text-xl text-zinc-400 mb-8">Not sure which weapon you need?</p>
              <Link 
                href="/diagnostic"
                className="inline-block bg-black text-white px-8 py-4 text-xl font-black border-4 border-white hover:bg-white hover:text-black transition-all duration-300"
              >
                TAKE THE DIAGNOSTIC
              </Link>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-zinc-800 px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start gap-8">
              <div>
                <h3 className="text-2xl font-black mb-4">IMAGINATION G</h3>
                <p className="text-zinc-400">We don't consult. We collide.</p>
              </div>
              <div className="flex gap-8">
                <Link href="/about" className="text-zinc-400 hover:text-white transition-colors">About</Link>
                <Link href="/weapons" className="text-zinc-400 hover:text-white transition-colors">Weapons</Link>
                <Link href="/case-studies" className="text-zinc-400 hover:text-white transition-colors">Results</Link>
                <Link href="/diagnostic" className="text-zinc-400 hover:text-white transition-colors">Diagnostic</Link>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-zinc-800 text-zinc-600 text-sm">
              <p>&copy; 2024 IMAGINATION G. No refunds. No apologies.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default WeaponsPage;