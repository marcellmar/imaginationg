import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About IMAGINATION G | A Studio for Aligned Futures</title>
        <meta name="description" content="We don't consult. We catalyze. For those who refuse to drift in broken systems and want to architect movement that matters." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph / Social Media Meta Tags */}
        <meta property="og:title" content="About IMAGINATION G | A Studio for Aligned Futures" />
        <meta property="og:description" content="We don't consult. We catalyze. For those who refuse to drift in broken systems and want to architect movement that matters." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://imaginationg.studio/about" />
        <meta property="og:image" content="https://imaginationg.studio/images/og-image.jpg" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About IMAGINATION G | A Studio for Aligned Futures" />
        <meta name="twitter:description" content="We don't consult. We catalyze. For those who refuse to drift in broken systems and want to architect movement that matters." />
        <meta name="twitter:image" content="https://imaginationg.studio/images/og-image.jpg" />
      </Head>

      <div className="min-h-screen bg-black text-white font-sans">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-black bg-opacity-95 backdrop-blur-sm shadow-lg">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <Link href="/" className="text-xl font-bold tracking-wider">IMAGINATION G</Link>
            
            <div className="hidden md:flex items-center gap-8">
              <Link href="/#services" className="hover:text-gray-300 transition-colors">Services</Link>
              <Link href="/about" className="hover:text-gray-300 transition-colors text-white font-medium">About</Link>
              <Link href="/#testimonials" className="hover:text-gray-300 transition-colors">Results</Link>
              <Link href="/#faq" className="hover:text-gray-300 transition-colors">FAQ</Link>
              <Link href="/diagnostic" className="hover:text-gray-300 transition-colors text-red-400">Drift Diagnostic</Link>
              <a
                href="https://outlook.office.com/owa/calendar/IG@imaginationg.studio/bookings/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-6 py-2 font-medium hover:bg-gray-200 transition-all inline-block">
                Book a Call
              </a>
            </div>

            {/* Mobile Menu Button - simplified for this page */}
            <Link href="/" className="md:hidden">
              <span className="text-sm text-gray-400">← Back to Home</span>
            </Link>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-32 pb-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">ABOUT IMAGINATION G</h1>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-red-500">We Don't Consult. We Catalyze.</h2>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 px-6 bg-zinc-900">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-xl">We're not here to play nice in the sandbox.</p>
              <p className="text-xl mb-8">We built IMAGINATION G because we were suffocating inside broken systems that mistake motion for movement, complexity for clarity, and meetings for momentum.</p>
              
              <p className="text-xl">We believe most consulting firms are casinos.</p>
              <p className="text-xl">They profit whether you win or lose.</p>
              <p className="text-xl mb-8">We think that's a crime.</p>
              
              <p className="text-xl">IMAGINATION G is a studio for aligned futures.</p>
              <p className="text-xl">We partner only with the willing.</p>
              <p className="text-xl">The restless.</p>
              <p className="text-xl mb-12">The builders who can't stand watching drift steal another quarter, another launch, another year.</p>
            </div>
          </div>
        </section>

        {/* Why We Exist Section */}
        <section className="py-16 px-6 bg-black">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">WHY WE EXIST</h2>
            
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-xl">Because drift is expensive.</p>
              <p className="text-xl">Because clarity is rare.</p>
              <p className="text-xl mb-8">Because movement—real, grounded, intentional movement—is the only thing that changes lives, companies, and cultures.</p>
              
              <p className="text-xl mb-6">We're the studio that says:</p>
              
              <p className="text-2xl font-bold text-red-500 mb-4">Stop hiding behind decks.</p>
              <p className="text-2xl font-bold text-red-500 mb-4">Stop drowning in plans.</p>
              <p className="text-2xl font-bold text-red-500 mb-12">Stop mistaking strategy for progress.</p>
            </div>
          </div>
        </section>

        {/* How We Roll Section */}
        <section className="py-16 px-6 bg-zinc-900">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">HOW WE ROLL</h2>
            
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-xl mb-2">We cut drift.</p>
              <p className="text-xl mb-2">We map moves.</p>
              <p className="text-xl mb-8">We architect momentum.</p>
              
              <p className="text-xl mb-2">We work fast, lean, and personal.</p>
              <p className="text-xl mb-2">We bring rhythm to the chaos.</p>
              <p className="text-xl mb-8">We build systems that move with you—not against you.</p>
              
              <p className="text-xl mb-6">Our tools?</p>
              
              <div className="border-l-4 border-green-500 pl-6 mb-8">
                <p className="text-lg mb-2">Brutal clarity sessions.</p>
                <p className="text-lg mb-2">Lightweight systems.</p>
                <p className="text-lg mb-2">Zero-fluff blueprints.</p>
                <p className="text-lg mb-6">High-stakes accountability.</p>
              </div>
              
              <p className="text-xl mb-2">We don't leave you with a PowerPoint.</p>
              <p className="text-xl mb-12">We leave you with motion.</p>
            </div>
          </div>
        </section>

        {/* Who We Serve Section */}
        <section className="py-16 px-6 bg-black">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">WHO WE SERVE</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-zinc-900 p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Founders</h3>
                <p className="text-gray-300">Who refuse to drift quietly into irrelevance.</p>
              </div>
              
              <div className="bg-zinc-900 p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Teams</h3>
                <p className="text-gray-300">Tangled in decision fog who need a rhythm reset.</p>
              </div>
              
              <div className="bg-zinc-900 p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Creators</h3>
                <p className="text-gray-300">Tired of polishing and ready to ship ugly and fast.</p>
              </div>
              
              <div className="bg-zinc-900 p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Platforms</h3>
                <p className="text-gray-300">Seeking to build community over ads.</p>
              </div>
            </div>
            
            <div className="prose prose-invert prose-lg max-w-none mb-12">
              <p className="text-xl mb-6">If you need alignment, acceleration, and action—we're your studio.</p>
              <p className="text-xl text-red-500 mb-12">If you want comfort, theory, and 6-month 'strategy decks'—we are not for you.</p>
            </div>
          </div>
        </section>

        {/* Our Vibe Section */}
        <section className="py-16 px-6 bg-zinc-900">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">OUR VIBE</h2>
            
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="bg-black px-6 py-3 rounded-lg text-xl font-bold">Sharp.</div>
              <div className="bg-black px-6 py-3 rounded-lg text-xl font-bold">Brutal.</div>
              <div className="bg-black px-6 py-3 rounded-lg text-xl font-bold">Playful.</div>
              <div className="bg-black px-6 py-3 rounded-lg text-xl font-bold">Alive.</div>
            </div>
            
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-xl mb-2">We build with people who bleed on their work.</p>
              <p className="text-xl mb-12">We are the punch and the hug.</p>
            </div>
          </div>
        </section>

        {/* Meet the Founder Section */}
        <section className="py-16 px-6 bg-black">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/3">
                <div className="relative w-full h-[300px]">
                  <Image
                    src="/images/marcus-davis.jpg"
                    alt="Marcus Davis - Founder"
                    className="rounded-lg shadow-xl object-cover"
                    fill
                  />
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Marcus Davis</h2>
                <p className="text-xl mb-6 italic text-zinc-400">
                  "I built IMAGINATION G after a decade inside broken systems. I saw brilliant people stuck.
                  I saw movement suffocated by complexity. This studio is the answer I wish someone gave me."
                </p>
                <p className="text-lg mb-6 text-zinc-300">
                  IMAGINATION G isn't theory. It's forged from lived experience, tested in the wild, 
                  and refined with founders, creators, and teams who refuse to drift.
                </p>
                <div className="mt-8">
                  <p className="font-bold">Marcus Davis</p>
                  <p className="text-gray-400">Founder & Chief Catalyst</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Your Move Section */}
        <section className="py-16 px-6 bg-zinc-900 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">YOUR MOVE</h2>
            
            <div className="prose prose-invert prose-lg max-w-none mb-12">
              <p className="text-xl mb-2">Drift is the default.</p>
              <p className="text-xl mb-8">Movement is a choice.</p>
              
              <p className="text-xl mb-12">If you're ready to choose movement—</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <a
                href="https://outlook.office.com/owa/calendar/IG@imaginationg.studio/bookings/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white text-black px-8 py-4 font-medium hover:bg-gray-200 transition-all">
                <span>👉</span>
                <span>Book a Catalyst Call</span>
              </a>
              
              <Link
                href="/diagnostic"
                className="flex items-center gap-2 border border-white px-8 py-4 font-medium hover:bg-white hover:text-black transition-all">
                <span>👉</span>
                <span>Audit Your Systems</span>
              </Link>
              
              <Link
                href="/cheatsheet"
                className="flex items-center gap-2 border border-white px-8 py-4 font-medium hover:bg-white hover:text-black transition-all">
                <span>👉</span>
                <span>Stop Bleeding in Drift</span>
              </Link>
            </div>
            
            <div className="pt-12 border-t border-zinc-800">
              <h2 className="text-4xl font-bold mb-4">IMAGINATION G.</h2>
              <p className="text-xl text-gray-400">For Builders of Aligned Futures.</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 px-6 bg-zinc-900 border-t border-zinc-800">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-xl mb-4">IMAGINATION G</h3>
                <p className="text-gray-400">A Studio for Aligned Futures</p>
              </div>
              
              <div>
                <h4 className="font-medium mb-4">Quick Links</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/#services" className="hover:text-white transition-colors">Services</Link></li>
                  <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                  <li><Link href="/#testimonials" className="hover:text-white transition-colors">Results</Link></li>
                  <li><Link href="/#faq" className="hover:text-white transition-colors">FAQ</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-4">Resources</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                  <li><Link href="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
                  <li><Link href="/cheatsheet" className="hover:text-white transition-colors">Free Cheat Sheet</Link></li>
                  <li><Link href="/diagnostic" className="hover:text-white transition-colors text-red-400">Drift Diagnostic Tool</Link></li>
                  <li><Link href="/momentum-hub" className="hover:text-white transition-colors text-green-400">Client Momentum Hub</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-4">Connect</h4>
                <div className="flex gap-4 mb-4">
                  <Link href="https://wa.me/17737044833" className="hover:text-gray-300 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                  </Link>
                  <Link href="https://wa.me/17737044833" className="hover:text-gray-300 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  </Link>
                </div>
                <p className="text-gray-400">marcus@imaginationg.studio</p>
                <p className="text-gray-400">+1-773-704-4833</p>
              </div>
            </div>
            
            <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
              <p>&copy; {new Date().getFullYear()} IMAGINATION G. All rights reserved.</p>
              <div className="flex gap-6 mt-4 md:mt-0">
                <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default AboutPage;