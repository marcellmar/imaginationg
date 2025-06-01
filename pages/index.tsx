import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>IMAGINATION G - Stop Drifting. Start Moving.</title>
        <meta name="description" content="Stop organizational drift with Movement Architecture. Transform your business in 30 days through binary decisions and forced progress. No consulting theater." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Schema.org markup for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://www.imaginationg.studio/#organization",
              "name": "IMAGINATION G",
              "url": "https://www.imaginationg.studio",
              "logo": "https://www.imaginationg.studio/logo.png",
              "description": "Movement Architecture and Business Transformation. We don't consult. We collide.",
              "sameAs": [
                "https://twitter.com/imaginationg",
                "https://linkedin.com/company/imaginationg"
              ],
              "slogan": "Stop Drifting. Start Moving.",
              "knowsAbout": [
                "Movement Architecture",
                "Organizational Drift",
                "Business Transformation",
                "Binary Decision Framework",
                "Clarity Catalyst"
              ],
              "offers": {
                "@type": "AggregateOffer",
                "name": "Business Transformation Services",
                "description": "From drift diagnosis to movement implementation"
              }
            })
          }}
        />
      </Head>
      
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-2">YOU SUCK.</h1>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-16">NOW WHAT?</h2>
          
          {/* First Section */}
          <div className="space-y-1 text-base md:text-lg text-zinc-400 mb-12">
            <p>You're bluffing.</p>
            <p>They see it.</p>
            <p>You see it.</p>
            <p>You stall.</p>
            <p>You fake.</p>
            <p>They feel it.</p>
            <p>You hide it.</p>
          </div>
          
          <p className="text-lg md:text-xl font-bold text-white mb-12">Stop lying.</p>
          
          {/* Middle Section */}
          <div className="space-y-1 mb-16">
            <p className="text-base md:text-lg text-zinc-400">We don't consult.</p>
            <p className="text-lg md:text-xl font-bold text-white">We call your bluff.</p>
            <p className="text-base md:text-lg text-zinc-400 mt-4">We make you say the move you've been hiding from.</p>
          </div>
          
          <div className="space-y-1 text-base md:text-lg text-zinc-400 mb-16">
            <p>You act.</p>
            <p>Or you stall again.</p>
          </div>
          
          {/* Who Are We For Section */}
          <h3 className="text-2xl md:text-3xl font-black mb-8">WHO ARE WE FOR?</h3>
          
          <p className="text-base md:text-lg text-zinc-400 mb-8">If you're reading this, you already know.</p>
          
          <div className="space-y-1 text-base md:text-lg text-zinc-400 mb-8">
            <p>If you want frameworks—<span className="font-bold text-white">this isn't for you.</span></p>
            <p>If you need hand-holding—<span className="font-bold text-white">this isn't for you.</span></p>
            <p>If you want validation—<span className="font-bold text-white">you won't find it here.</span></p>
          </div>
          
          <p className="text-base md:text-lg font-bold text-white mb-4">We are for the ones who:</p>
          
          <div className="space-y-1 text-base md:text-lg text-zinc-400 mb-16">
            <p>Know they're bluffing.</p>
            <p>Can't stand it anymore.</p>
            <p>Want collision. <span className="font-bold text-white">Fast. Loud. Final.</span></p>
          </div>
          
          {/* CTA Section */}
          <p className="text-sm text-zinc-500 mb-4">THE ONLY DOOR:</p>
          
          <Link 
            href="/ig-complete-flow"
            className="inline-block bg-red-500 text-white px-8 py-4 text-lg md:text-xl font-black hover:bg-red-600 transition-colors mb-12">
            YOU SUCK. NOW WHAT?
          </Link>
          
          <p className="text-sm text-zinc-500">That's it. Click or leave. <span className="font-bold text-white">We're not waiting.</span></p>
        </div>
      </div>
    </>
  );
};

export default Home;