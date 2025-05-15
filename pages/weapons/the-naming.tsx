import type { NextPage } from 'next';
import Head from 'next/head';

const TheNamingPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>THE NAMING | IMAGINATION G</title>
        <meta name="description" content="The room. The truth. The exit." />
      </Head>

      <div className="min-h-screen bg-black text-white">
        <div className="min-h-screen flex items-center justify-center px-6">
          <div className="text-center max-w-3xl">
            <h1 className="text-6xl md:text-8xl font-black mb-8">THE NAMING</h1>
            <p className="text-4xl text-white font-black mb-16">$500</p>
            
            <div className="space-y-6 text-2xl text-zinc-600 mb-20">
              <p>The room.</p>
              <p>You speak.</p>
              <p>Or you don't.</p>
              <p>We leave either way.</p>
            </div>
            
            <a 
              href="https://outlook.office.com/owa/calendar/IG@imaginationg.studio/bookings/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-2xl font-black text-white border-b-4 border-white hover:text-red-500 hover:border-red-500 transition-all pb-2"
            >
              BOOK THE ROOM
            </a>
            
            <div className="mt-20">
              <a href="/weapons" className="text-zinc-600 text-sm hover:text-white transition-colors">
                ← back to the rack
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TheNamingPage;