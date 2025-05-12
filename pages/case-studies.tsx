import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Clock, Zap, BarChart2, TrendingUp, Check } from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: "From Drift to 3X Revenue in 6 Months",
      client: "Meridian Designs",
      industry: "Creative Agency",
      image: "/images/case-study-1.jpg",
      challenge: "Stuck in endless planning cycles with 15+ weekly meetings and no clear path forward.",
      solution: "30-Day Movement Sprint + Ecosystem Map",
      results: [
        "Reduced meetings by 60%",
        "Launched 3 new service offerings in 90 days",
        "3X revenue within 6 months",
        "Rebuilt team culture around ship-fast mentality"
      ],
      quote: "IMAGINATION G didn't give us a roadmap—they gave us movement. The clarity was immediate, and the revenue followed.",
      quoteAuthor: "Dana Washington, Founder",
      slug: "meridian-designs"
    },
    {
      id: 2,
      title: "Tech Startup Launches MVP in 14 Days After 6 Months of Stalling",
      client: "DataPulse",
      industry: "SaaS / Analytics",
      image: "/images/case-study-2.jpg",
      challenge: "Perfectionism paralysis with an engineering team that couldn't ship features.",
      solution: "Clarity Catalyst Call + MVP Jumpstart",
      results: [
        "Launched v1 in just 14 days",
        "Secured first 3 paying customers within 30 days",
        "Reduced feature bloat by 70%",
        "Secured $750K in seed funding based on early traction"
      ],
      quote: "We were over-engineering everything. Marcus helped us see that getting it out there was more important than getting it perfect.",
      quoteAuthor: "Alex Chen, Co-founder & CTO",
      slug: "datapulse"
    },
    {
      id: 3,
      title: "Non-Profit Doubles Donor Engagement After Strategic Reset",
      client: "EcoResilience",
      industry: "Environmental Non-Profit",
      image: "/images/case-study-3.jpg",
      challenge: "Mission drift and donor fatigue leading to funding plateau and team burnout.",
      solution: "Pre-Market Signal Scan + Ecosystem Map",
      results: [
        "Clarified mission to focus on 2 core initiatives (down from 7)",
        "105% increase in donor engagement",
        "Created ecosystem approach that brought in 3 major foundation grants",
        "Reduced team burnout by eliminating non-core activities"
      ],
      quote: "The Ecosystem Map was transformative. We stopped trying to do everything and started connecting the right dots.",
      quoteAuthor: "Marcus Rodriguez, Executive Director",
      slug: "ecoresilience"
    }
  ];

  return (
    <>
      <Head>
        <title>Client Success Stories | IMAGINATION G</title>
        <meta name="description" content="See how IMAGINATION G clients break drift patterns and create unstoppable momentum." />
      </Head>

      <div className="min-h-screen bg-black text-white">
        {/* Navigation */}
        <nav className="bg-black bg-opacity-95 backdrop-blur-sm shadow-lg px-6 py-4 fixed top-0 left-0 right-0 z-50">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <Link href="/" className="text-xl font-bold tracking-wider">IMAGINATION G</Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="hover:text-gray-300 transition-colors flex items-center gap-1">
                <span>←</span> Home
              </Link>
              <Link href="/#services" className="hover:text-gray-300 transition-colors">Services</Link>
              <Link href="/#about" className="hover:text-gray-300 transition-colors">About</Link>
              <Link href="/diagnostic" className="hover:text-gray-300 transition-colors">Diagnostic</Link>
            </div>
          </div>
        </nav>

        {/* Hero */}
        <section className="pt-32 pb-16 px-6 bg-zinc-900">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Client Success Stories</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
              See how organizations just like yours break drift patterns and create 
              unstoppable momentum with IMAGINATION G.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="bg-black p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-green-500">87%</div>
                <div className="text-sm text-gray-400">Success Rate</div>
              </div>
              <div className="bg-black p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-green-500">14</div>
                <div className="text-sm text-gray-400">Day Average Shift</div>
              </div>
              <div className="bg-black p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-green-500">3X</div>
                <div className="text-sm text-gray-400">Average Growth</div>
              </div>
              <div className="bg-black p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-green-500">60%</div>
                <div className="text-sm text-gray-400">Fewer Meetings</div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Case Studies */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                <div key={study.id} className="bg-zinc-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                  <div className="h-48 bg-zinc-800 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-2xl font-bold">{study.client}</div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-gray-400 mb-2">{study.industry}</div>
                    <h3 className="text-xl font-bold mb-4">{study.title}</h3>
                    <p className="text-gray-300 mb-4">{study.challenge}</p>
                    
                    <div className="bg-black p-3 rounded mb-4">
                      <div className="text-sm text-gray-400">Solution:</div>
                      <div className="font-medium">{study.solution}</div>
                    </div>

                    <h4 className="font-bold mb-2 text-green-500">Results:</h4>
                    <ul className="space-y-1 mb-6">
                      {study.results.slice(0, 2).map((result, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <Check size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link 
                      href={`/case-studies/${study.slug}`} 
                      className="inline-flex items-center text-white hover:text-green-500 transition-colors"
                    >
                      Read Full Case Study
                      <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Explanation */}
        <section className="py-16 px-6 bg-zinc-900">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <div className="inline-block relative w-24 h-24 mb-4 rounded-full overflow-hidden">
                <Image
                  src="/images/marcus-davis-profile.jpg"
                  alt="Marcus Davis - Founder"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-lg font-bold">Marcus Davis</div>
              <div className="text-gray-400 text-sm">Founder & Chief Catalyst</div>
            </div>

            <h2 className="text-3xl font-bold mb-10 text-center">How We Break Drift Patterns</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-black p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="bg-zinc-800 p-2 rounded-full">
                    <Clock size={24} className="text-yellow-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Day 1: Clarity Catalyst</h3>
                    <p className="text-gray-400 mb-4">We start by mapping your current drift patterns and identifying the exact stuck points in your system.</p>
                    <div className="border-l-2 border-yellow-500 pl-4">
                      <p className="italic text-sm text-gray-300">
                        "The clarity was immediate. We suddenly saw exactly where we were stuck and why."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-black p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="bg-zinc-800 p-2 rounded-full">
                    <Zap size={24} className="text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Week 1: Movement Design</h3>
                    <p className="text-gray-400 mb-4">We architect a movement system tailored to your team's natural rhythm and decision-making style.</p>
                    <div className="border-l-2 border-blue-500 pl-4">
                      <p className="italic text-sm text-gray-300">
                        "The system didn't feel forced. It actually worked with how we naturally operate."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-black p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="bg-zinc-800 p-2 rounded-full">
                    <BarChart2 size={24} className="text-purple-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Weeks 2-4: Implementation</h3>
                    <p className="text-gray-400 mb-4">We guide implementation with the right mix of accountability, tools, and micro-adjustments.</p>
                    <div className="border-l-2 border-purple-500 pl-4">
                      <p className="italic text-sm text-gray-300">
                        "The weekly check-ins kept us on track without overwhelming us."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-black p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="bg-zinc-800 p-2 rounded-full">
                    <TrendingUp size={24} className="text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Beyond: Sustained Growth</h3>
                    <p className="text-gray-400 mb-4">We provide the tools and frameworks to maintain momentum long after our work together ends.</p>
                    <div className="border-l-2 border-green-500 pl-4">
                      <p className="italic text-sm text-gray-300">
                        "A year later, and we're still using the system. It's just how we work now."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Create Your Success Story?</h2>
            <p className="text-xl text-gray-300 mb-8">
              It starts with a single catalytic conversation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://outlook.office.com/owa/calendar/IG@imaginationg.studio/bookings/" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-8 py-4 font-medium text-lg hover:bg-opacity-90 transition-all"
              >
                Book Your Clarity Call
              </a>
              <Link 
                href="/diagnostic"
                className="border border-white px-8 py-4 font-medium text-lg hover:bg-white hover:text-black transition-all"
              >
                Take the Drift Diagnostic
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 bg-zinc-900 border-t border-zinc-800">
          <div className="max-w-4xl mx-auto text-center">
            <Link href="/" className="text-xl font-bold inline-block mb-4">IMAGINATION G</Link>
            <p className="text-gray-400 mb-6">A Studio for Aligned Futures</p>
            <div className="flex justify-center gap-6 mb-8">
              <Link href="/" className="text-gray-500 hover:text-white transition-colors">Home</Link>
              <Link href="/#services" className="text-gray-500 hover:text-white transition-colors">Services</Link>
              <Link href="/diagnostic" className="text-gray-500 hover:text-white transition-colors">Diagnostic</Link>
              <Link href="/cheatsheet" className="text-gray-500 hover:text-white transition-colors">Playbook</Link>
            </div>
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} IMAGINATION G. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default CaseStudies;