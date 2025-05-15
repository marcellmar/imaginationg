import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>IMAGINATION G</title>
        <meta name="description" content="The room. The mirror. The choice." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="min-h-screen bg-black text-white font-sans">
        {/* No navigation. No escape. */}
        
        <div className="min-h-screen flex items-center justify-center px-6">
          <div className="text-center">
            <h1 className="text-7xl md:text-9xl font-black mb-8 tracking-tighter">
              YOU SUCK.
            </h1>
            
            <h2 className="text-5xl md:text-7xl font-black mb-20 tracking-tight">
              NOW WHAT?
            </h2>
            
            <Link 
              href="/ig-complete-flow"
              className="inline-block text-3xl md:text-4xl font-black text-white hover:text-red-500 transition-colors border-b-4 border-white hover:border-red-500 pb-2">
              FACE IT
            </Link>
          </div>
        </div>
        
        {/* Nothing else. No footer. No navigation. No escape. */}
      </div>
    </>
  );
};

export default Home;