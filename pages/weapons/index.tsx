import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const WeaponsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>WEAPONS | IMAGINATION G</title>
        <meta name="description" content="The rack. Choose. Or leave." />
      </Head>

      <div className="min-h-screen bg-black text-white">
        <div className="min-h-screen flex flex-col justify-center px-6">
          <div className="max-w-4xl mx-auto w-full">
            <h1 className="text-6xl md:text-8xl font-black mb-20 text-center">THE RACK</h1>
            
            <div className="space-y-0">
              <Link href="/weapons/the-naming" className="block border-b border-zinc-800 py-8 hover:bg-zinc-950 transition-all">
                <div className="flex justify-between items-center px-4">
                  <span className="text-2xl md:text-3xl font-black">THE NAMING</span>
                  <span className="text-2xl md:text-3xl font-black">$500</span>
                </div>
              </Link>
              
              <Link href="/weapons/the-map" className="block border-b border-zinc-800 py-8 hover:bg-zinc-950 transition-all">
                <div className="flex justify-between items-center px-4">
                  <span className="text-2xl md:text-3xl font-black">THE MAP</span>
                  <span className="text-2xl md:text-3xl font-black">$1,000</span>
                </div>
              </Link>
              
              <Link href="/weapons/the-market-smackdown" className="block border-b border-zinc-800 py-8 hover:bg-zinc-950 transition-all">
                <div className="flex justify-between items-center px-4">
                  <span className="text-2xl md:text-3xl font-black">THE MARKET SMACKDOWN</span>
                  <span className="text-2xl md:text-3xl font-black">$1,500</span>
                </div>
              </Link>
              
              <Link href="/weapons/thirty-day-drift-break" className="block border-b border-zinc-800 py-8 hover:bg-zinc-950 transition-all">
                <div className="flex justify-between items-center px-4">
                  <span className="text-2xl md:text-3xl font-black">30-DAY DRIFT BREAK</span>
                  <span className="text-2xl md:text-3xl font-black">$3,000</span>
                </div>
              </Link>
              
              <Link href="/weapons/first-blood-build" className="block border-b border-zinc-800 py-8 hover:bg-zinc-950 transition-all">
                <div className="flex justify-between items-center px-4">
                  <span className="text-2xl md:text-3xl font-black">FIRST BLOOD BUILD</span>
                  <span className="text-2xl md:text-3xl font-black">$5,000</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeaponsPage;