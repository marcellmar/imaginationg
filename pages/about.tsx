import type { NextPage } from 'next';
import Head from 'next/head';

const AboutPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>ABOUT | IMAGINATION G</title>
        <meta name="description" content="We don't consult. We collide." />
      </Head>

      <div className="min-h-screen bg-black text-white font-sans">
        <div className="min-h-screen flex items-center justify-center px-6">
          <div className="max-w-4xl text-center">
            <h1 className="text-6xl md:text-8xl font-black mb-20">THE TRUTH</h1>
            
            <div className="space-y-16 text-2xl md:text-3xl text-zinc-600">
              <div>
                <p className="text-white font-black mb-4">WE ARE:</p>
                <p>The mirror.</p>
                <p>The collision.</p>
                <p>The exit.</p>
              </div>
              
              <div>
                <p className="text-white font-black mb-4">WE'RE NOT:</p>
                <p>Consultants.</p>
                <p>Partners.</p>
                <p>Friends.</p>
              </div>
              
              <div>
                <p className="text-white font-black mb-4">OUR CODE:</p>
                <p>Show up.</p>
                <p>Name it.</p>
                <p>Leave.</p>
              </div>
              
              <div>
                <p className="text-white font-black mb-4">YOUR MOVE:</p>
                <a href="/ig-complete-flow" className="text-white border-b-4 border-white hover:text-red-500 hover:border-red-500 transition-all pb-2">
                  FACE THE MIRROR
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;