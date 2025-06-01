import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About IMAGINATION G - Movement Catalysts, Not Consultants</title>
        <meta name="description" content="IMAGINATION G creates business transformation through confrontation, not consultation. We force movement in 30 days using binary decisions. Learn our catalyst approach." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph / Social Media Meta Tags */}
        <meta property="og:title" content="About IG | We Collide. We Leave." />
        <meta property="og:description" content="We don't consult. We don't coach. We don't facilitate. We collide." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://imaginationg.studio/about" />
        <meta property="og:image" content="https://imaginationg.studio/images/og-image.jpg" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About IG | We Collide. We Leave." />
        <meta name="twitter:description" content="We don't consult. We don't coach. We don't facilitate. We collide." />
        <meta name="twitter:image" content="https://imaginationg.studio/images/og-image.jpg" />
      </Head>

      <div className="min-h-screen bg-black text-white">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 bg-black z-50">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/" className="text-base font-black">IMAGINATION G</Link>
            <div className="flex items-center gap-8">
              <Link href="/" className="text-sm hover:text-zinc-400">← Home</Link>
              <Link href="/weapons" className="text-sm hover:text-zinc-400">Weapons</Link>
              <Link href="/about" className="text-sm hover:text-zinc-400">About</Link>
              <Link 
                href="https://outlook.office.com/owa/calendar/IG@imaginationg.studio/bookings/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-6 py-2 text-sm font-bold hover:bg-zinc-200 transition-colors"
              >
                Book a Call
              </Link>
            </div>
          </div>
        </nav>

        {/* Header */}
        <header className="pt-32 pb-16 px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">ABOUT IG</h1>
            <p className="text-xl md:text-2xl text-zinc-500 max-w-3xl mx-auto">
              We don't consult. We collide.
            </p>
          </div>
        </header>

        {/* Main Content Grid */}
        <main className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 max-w-5xl mx-auto">
              
              {/* What We Are */}
              <div className="border border-zinc-800 p-8">
                <h2 className="text-3xl font-black mb-6">WHAT WE ARE</h2>
                <div className="space-y-4 text-lg">
                  <p>We show up.</p>
                  <p>We hold the mirror you've been avoiding.</p>
                  <p>We force the drift into daylight.</p>
                  <p>We make you name the move.</p>
                  <p className="text-red-500 font-bold">We leave.</p>
                </div>
              </div>

              {/* What We're Not */}
              <div className="border border-zinc-800 p-8">
                <h2 className="text-3xl font-black mb-6">WHAT WE'RE NOT</h2>
                <div className="space-y-4 text-lg">
                  <p>We don't partner with you.</p>
                  <p>We don't build with you.</p>
                  <p>We don't help you feel better.</p>
                  <p>We don't check in.</p>
                  <p className="text-red-500 font-bold">We don't care if you fail.</p>
                </div>
              </div>

              {/* Our Code */}
              <div className="border border-zinc-800 p-8 md:col-span-2">
                <h2 className="text-3xl font-black mb-6">OUR CODE</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <p className="text-xl mb-2">We don't coddle.</p>
                    <p className="text-xl font-bold text-red-500">We confront.</p>
                  </div>
                  <div>
                    <p className="text-xl mb-2">We don't create dependencies.</p>
                    <p className="text-xl font-bold text-red-500">We create exits.</p>
                  </div>
                  <div>
                    <p className="text-xl mb-2">We don't do frameworks.</p>
                    <p className="text-xl font-bold text-red-500">We do collisions.</p>
                  </div>
                </div>
              </div>

              {/* How We Work */}
              <div className="border border-zinc-800 p-8">
                <h2 className="text-3xl font-bold mb-6">HOW WE WORK</h2>
                <div className="space-y-4 text-lg">
                  <p className="font-bold text-red-500">You move first.</p>
                  <p>You pick the weapon.</p>
                  <p>You name the drift.</p>
                  <p>You own the outcome.</p>
                  <p>We end the call.</p>
                </div>
              </div>

              {/* Marcus Davis */}
              <div className="border border-zinc-800 p-8">
                <h2 className="text-3xl font-bold mb-6">MARCUS DAVIS</h2>
                <div className="mb-6">
                  <div className="relative w-48 h-48">
                    <Image
                      src="/images/marcus-davis.jpg"
                      alt="Marcus Davis"
                      className="object-cover rounded-lg"
                      fill
                    />
                  </div>
                </div>
                <div className="space-y-4 text-lg">
                  <p>Built IG after 10 years of watching brilliant people drift.</p>
                  <p>Saw too much talk. Not enough blood.</p>
                  <p>This is the collision I wish I had.</p>
                  <p className="text-red-500 font-bold">Now it's yours.</p>
                </div>
              </div>
            </div>
            
            {/* Final CTA - similar to weapons page */}
            <div className="text-center mt-16">
              <div className="bg-zinc-900 p-8 inline-block">
                <h3 className="text-2xl font-bold mb-4">STILL HERE?</h3>
                <p className="text-lg text-zinc-400 mb-6">Either you get it or you don't. We're not waiting.</p>
                <div className="space-y-4">
                  <Link 
                    href="/weapons"
                    className="block bg-red-500 text-white px-8 py-4 text-lg font-medium hover:bg-red-600 transition-all">
                    PICK YOUR WEAPON
                  </Link>
                  <Link 
                    href="/diagnostic"
                    className="block border-2 border-white text-white px-8 py-4 text-lg font-medium hover:bg-white hover:text-black transition-all">
                    TAKE THE DIAGNOSTIC
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Minimal Footer */}
        <footer className="py-8 px-6 bg-zinc-900 border-t border-zinc-800">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg font-bold mb-2">IMAGINATION G</p>
            <p className="text-sm text-zinc-600">© {new Date().getFullYear()} All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default AboutPage;