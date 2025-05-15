import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>IMAGINATION G</title>
        <meta name="description" content="Welcome to the drift." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="min-h-screen bg-black text-white font-sans flex items-center justify-center px-6 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-black mb-4">WELCOME TO THE DRIFT.</h1>
            <p className="text-2xl md:text-3xl font-bold">FEEL IT? GOOD. NOW SIT WITH IT.</p>
          </div>
          
          <div className="mb-16 space-y-4 text-lg text-zinc-400">
            <p>You already know why you're here.</p>
            <p>Something's stuck. You're sick of your own noise.</p>
            <div className="pt-4">
              <p>You want us to tell you what we do. <span className="text-white font-bold">We won't.</span></p>
              <p>You want services, case studies. <span className="text-white font-bold">We don't have them.</span></p>
            </div>
          </div>
          
          <div className="border-t border-zinc-800 pt-16 mb-16">
            <h2 className="text-2xl md:text-3xl font-black mb-6 text-center">WHO ARE WE FOR?</h2>
            <p className="text-lg text-zinc-400 mb-8 text-center">If you're reading this, you already know.</p>
            
            <div className="space-y-4 text-lg text-zinc-400 mb-8">
              <p>If you want frameworks and hand-holding—<span className="text-white font-bold">this isn't for you.</span></p>
              <p>If you hope someone will tell you what to do—<span className="text-white font-bold">this isn't for you.</span></p>
              <p>If you need validation or process—<span className="text-white font-bold">you won't find it here.</span></p>
            </div>
            
            <div className="text-lg">
              <p className="font-bold text-white mb-4">We are for the ones who:</p>
              <div className="pl-6 space-y-2 text-zinc-300">
                <p>Know they're drifting.</p>
                <p>Can't stand it anymore.</p>
                <p>Don't want help. They want collision.</p>
                <p className="text-white font-bold">Fast. Loud. Surgical.</p>
              </div>
            </div>
          </div>
          
          <div className="text-center space-y-4 text-lg">
            <p>We don't help. We collide.</p>
            <p>You name the move. <span className="text-red-500 font-bold">We leave.</span></p>
          </div>
          
          <div className="text-center my-16">
            <p className="text-xl text-zinc-500 mb-4">THE ONLY DOOR:</p>
            <Link 
              href="/ig-complete-flow"
              className="inline-block bg-red-500 text-white px-10 py-5 text-xl md:text-2xl font-black hover:bg-red-600 transition-all">
              YOU SUCK. NOW WHAT?
            </Link>
          </div>
          
          <p className="text-center text-lg text-zinc-500">
            If that's not you, close the window. If it is, the door's right there.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;