import type { NextPage } from 'next';
import Head from 'next/head';

const ThirtyDayDriftBreakPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>30-DAY DRIFT BREAK | IMAGINATION G</title>
        <meta name="description" content="30 days. Move or drown." />
      </Head>

      <div className="min-h-screen bg-black text-white">
        <div className="min-h-screen flex items-center justify-center px-6">
          <div className="text-center max-w-3xl">
            <h1 className="text-6xl md:text-8xl font-black mb-8">30-DAY DRIFT BREAK</h1>
            <p className="text-4xl text-white font-black mb-16">$3,000</p>
            
            <div className="space-y-6 text-2xl text-zinc-600 mb-20">
              <p>Forced movement.</p>
              <p>No meetings.</p>
              <p>30 days.</p>
              <p>Move or drown.</p>
            </div>
            
            <a 
              href="https://outlook.office.com/owa/calendar/IG@imaginationg.studio/bookings/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-2xl font-black text-white border-b-4 border-white hover:text-red-500 hover:border-red-500 transition-all pb-2"
            >
              START NOW
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

export default ThirtyDayDriftBreakPage;