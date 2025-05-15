import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>IMAGINATION G</title>
        <meta name="description" content="You suck. Now what?" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="min-h-screen bg-black text-white font-sans flex items-center justify-center px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-2">YOU SUCK.</h1>
          <h2 className="text-5xl md:text-7xl font-black mb-12">NOW WHAT?</h2>
          
          <div className="space-y-2 text-xl md:text-2xl text-zinc-400 mb-12">
            <p>You're bluffing.</p>
            <p>They see it.</p>
            <p>You see it.</p>
            <p>You stall.</p>
            <p>You fake.</p>
            <p>They feel it.</p>
            <p>You hide it.</p>
            <p className="text-white font-bold pt-4">Stop lying.</p>
          </div>
          
          <div className="space-y-4 text-xl md:text-2xl mb-12">
            <p>We don't consult.</p>
            <p className="text-white font-bold">We call your bluff.</p>
            <p className="text-zinc-400">We make you say the move you've been hiding from.</p>
            <div className="pt-4 text-zinc-400">
              <p>You act.</p>
              <p>Or you stall again.</p>
            </div>
          </div>
          
          <div className="border-t border-zinc-800 pt-12 mb-12">
            <h3 className="text-2xl md:text-3xl font-black mb-6">WHO ARE WE FOR?</h3>
            <p className="text-lg text-zinc-400 mb-8">If you're reading this, you already know.</p>
            
            <div className="space-y-2 text-lg text-zinc-400">
              <p>If you want frameworks—<span className="text-white font-bold">this isn't for you.</span></p>
              <p>If you need hand-holding—<span className="text-white font-bold">this isn't for you.</span></p>
              <p>If you want validation—<span className="text-white font-bold">you won't find it here.</span></p>
            </div>
            
            <div className="text-lg mt-8">
              <p className="font-bold text-white mb-4">We are for the ones who:</p>
              <div className="space-y-1 text-zinc-300">
                <p>Know they're bluffing.</p>
                <p>Can't stand it anymore.</p>
                <p>Want collision. <span className="text-white font-bold">Fast. Loud. Final.</span></p>
              </div>
            </div>
          </div>
          
          <div className="my-16">
            <p className="text-xl text-zinc-500 mb-4">THE ONLY DOOR:</p>
            <Link 
              href="/ig-complete-flow"
              className="inline-block bg-red-500 text-white px-10 py-5 text-xl md:text-2xl font-black hover:bg-red-600 transition-all">
              YOU SUCK. NOW WHAT?
            </Link>
          </div>
          
          <p className="text-lg text-zinc-500">
            That's it. Click or leave. <span className="text-white font-bold">We're not waiting.</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;