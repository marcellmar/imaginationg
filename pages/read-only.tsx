import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const ReadOnlyPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>READ-ONLY | IMAGINATION G</title>
        <meta name="description" content="Signal detected. Access denied. You chose optimization over override." />
      </Head>

      <div className="min-h-screen bg-black text-white font-sans">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 bg-black z-50 border-b border-zinc-800">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/" className="text-xl font-black">IMAGINATION G</Link>
            <div className="flex items-center gap-6">
              <Link href="/" className="text-sm hover:text-zinc-400">← Home</Link>
              <Link href="/weapons" className="text-sm hover:text-zinc-400">Interventions</Link>
              <Link href="/about" className="text-sm hover:text-zinc-400">About</Link>
              <Link href="/diagnostic" className="bg-white text-black px-4 py-2 text-sm font-bold hover:bg-zinc-200">
                Book a Call
              </Link>
            </div>
          </div>
        </nav>

        <div className="min-h-screen flex items-center justify-center px-6 pt-24">
          <div className="text-center max-w-4xl">
            <h1 className="text-7xl md:text-9xl font-black mb-16 text-zinc-600">READ-ONLY</h1>
            
            <div className="space-y-8 text-2xl md:text-3xl text-zinc-600 mb-20">
              <p>You chose to clean the edges.</p>
              <p>Signal detected. Access denied.</p>
              <p className="text-lg text-zinc-500 mt-8">Optimization maintains the drift.</p>
            </div>
            
            <div className="space-y-6">
              <Link 
                href="/ig-complete-flow"
                className="block text-2xl font-black text-white border-b-4 border-white hover:text-red-500 hover:border-red-500 transition-all mx-auto w-fit"
              >
                REQUEST ACCESS
              </Link>
              
              <p className="text-zinc-500 text-sm">
                Ready to build from real instead of cleaning around the problem?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReadOnlyPage;