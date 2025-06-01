import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Check, Star, MessageCircle, Phone, Plus, Minus, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const ImaginationGLanding = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // Removed email state variables

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const weapons = [
    {
      id: 1,
      title: "Clarity Collision",
      price: "$500",
      duration: "90 minutes",
      outcome: "Your drift named. Your move clear.",
      bestFor: ["You speak. We cut. You move."],
      popular: false,
      slug: "clarity-catalyst-call"
    },
    {
      id: 2,
      title: "Ecosystem Collision Map",
      price: "$1,000",
      duration: "1 week",
      outcome: "Real collisions. Not soft connections.",
      bestFor: ["Your network is dead. Get real."],
      popular: false,
      slug: "ecosystem-map"  
    },
    {
      id: 3,
      title: "Market Smackdown",
      price: "$1,500",
      duration: "5-7 days",
      outcome: "The truth. Go or drift.",
      bestFor: ["Face it or keep lying."],
      popular: false,
      slug: "pre-market-signal-scan"
    },
    {
      id: 4,
      title: "Naming That Moves",
      price: "$2,000",
      duration: "2 weeks",
      outcome: "The name is your move.",
      bestFor: ["Tired of explaining yourself?"],
      popular: false,
      slug: "mvp-jumpstart"
    },
    {
      id: 5,
      title: "30-Day Movement Test",
      price: "$4,500",
      duration: "30 days",
      outcome: "Move or die.",
      bestFor: ["Still talking? Time to move."],
      popular: true,
      slug: "movement-sprint"
    }
  ];

  const testimonials = [
    {
      name: "Brian M.",
      company: "Founder, Peak Ventures",
      text: "After 6 months of nothing, 30 days changed everything. Thank you.",
      rating: 5
    },
    {
      name: "Emily R.",
      company: "CEO, GreenFlow",
      text: "I was done drifting. Marcus showed me what movement actually looks like. Revolutionary.",
      rating: 5
    },
    {
      name: "David L.",
      company: "Founder, NextGen AI",
      text: "The Ecosystem Map revealed connections I never saw. Game-changing insights.",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "Still talking? Still drifting?",
      answer: "Every moment you wait is movement lost. You know this. Pick your weapon. Move now."
    },
    {
      question: "Why 'weapons' and not 'services'?",
      answer: "Services maintain. Weapons destroy drift. You don't need maintenance. You need movement."
    },
    {
      question: "What if I pick the wrong weapon?",
      answer: "Start with Clarity Collision. 90 minutes. Your drift named. Your move clear."
    },
    {
      question: "Do you work with teams?",
      answer: "Teams drift together. Teams move together. Yes."
    },
    {
      question: "What's your success rate?",
      answer: "100% clarity. Movement depends on you using it."
    }
  ];

  const stats = [
    { label: "Drift Identified", value: "24hrs" },
    { label: "Movement Started", value: "48hrs" },
    { label: "Momentum Built", value: "30days" },
    { label: "Success Rate", value: "100%" }
  ];

  // Removed email submission handler

  const scheduleCall = () => {
    // Open the Outlook booking link
    window.open('https://outlook.office.com/owa/calendar/IG@imaginationg.studio/bookings/', '_blank');
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans relative">
      {/* Background gradient effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-black to-zinc-900" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-red-900/10 via-transparent to-transparent" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-zinc-800/20 via-transparent to-transparent" />
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollPosition > 50 ? 'bg-black/90 backdrop-blur-md' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="text-2xl font-bold tracking-tighter">
              IMAGINATION<span className="text-red-600">_</span>G
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="/case-studies" className="hover:text-red-600 transition-colors">Work</Link>
              <Link href="/about" className="hover:text-red-600 transition-colors">About</Link>
              <button 
                onClick={scheduleCall}
                className="bg-red-600 px-6 py-2 rounded hover:bg-red-700 transition-colors"
              >
                Book Marcus
              </button>
            </div>

            {/* Mobile menu button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-black/95 backdrop-blur-md absolute top-20 left-0 right-0 p-4 space-y-4">
              <Link href="/case-studies" className="block py-2 hover:text-red-600 transition-colors">Work</Link>
              <Link href="/about" className="block py-2 hover:text-red-600 transition-colors">About</Link>
              <button 
                onClick={scheduleCall}
                className="w-full bg-red-600 px-6 py-2 rounded hover:bg-red-700 transition-colors"
              >
                Book Marcus
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            STOP DRIFTING<span className="text-red-600">.</span><br />
            START MOVING<span className="text-red-600">.</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-3xl mx-auto">
            You've been stuck for months. Maybe years. Still building the same thing. 
            Still explaining the same vision. Still waiting for momentum.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/diagnostic" className="bg-red-600 px-8 py-4 rounded text-lg font-semibold hover:bg-red-700 transition-all hover:scale-105 flex items-center justify-center gap-2">
              Take the Drift Test <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/ig-complete-flow" className="border border-white/20 px-8 py-4 rounded text-lg font-semibold hover:bg-white/10 transition-all hover:scale-105">
              See Your Path
            </Link>
          </div>
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-600/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-zinc-600/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
      </section>

      {/* The Drift Section */}
      <section className="relative py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            THE DRIFT IS KILLING YOU<span className="text-red-600">.</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-red-600">You know these feelings:</h3>
              <ul className="space-y-4">
                {[
                  "Another week. Same problems.",
                  "Your competition is moving. You're not.",
                  "Lots of motion. Zero movement.",
                  "Everyone has advice. Nothing works.",
                  "You're tired of explaining your vision."
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-red-600 mt-1">→</span>
                    <span className="text-zinc-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-zinc-900/50 p-8 rounded-lg border border-zinc-800">
              <h3 className="text-2xl font-semibold mb-6">The Truth:</h3>
              <p className="text-zinc-300 mb-4">
                You don't need another strategy session. You don't need another advisor. 
                You don't need another framework.
              </p>
              <p className="text-xl font-semibold text-red-600">
                You need to move. Now.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">{stat.value}</div>
                <div className="text-sm text-zinc-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Choose Your Weapon Section */}
      <section className="relative py-24 px-4 bg-zinc-900/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            CHOOSE YOUR WEAPON<span className="text-red-600">.</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {weapons.map((weapon) => (
              <div key={weapon.id} className={`relative bg-black border ${weapon.popular ? 'border-red-600' : 'border-zinc-800'} rounded-lg p-8 hover:border-red-600/50 transition-all hover:scale-105`}>
                {weapon.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-red-600 px-4 py-1 rounded text-sm font-semibold">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-4">{weapon.title}</h3>
                <div className="text-3xl font-bold text-red-600 mb-4">{weapon.price}</div>
                <div className="text-zinc-400 mb-4">{weapon.duration}</div>
                <p className="text-zinc-300 mb-6">{weapon.outcome}</p>
                <div className="space-y-2 mb-8">
                  {weapon.bestFor.map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                      <span className="text-sm text-zinc-400">{item}</span>
                    </div>
                  ))}
                </div>
                <Link 
                  href={`/services/${weapon.slug}`}
                  className="block w-full bg-red-600 text-center py-3 rounded hover:bg-red-700 transition-colors"
                >
                  Choose This Weapon
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-zinc-400 mb-4">Not sure which weapon to choose?</p>
            <Link href="/diagnostic" className="text-red-600 hover:text-red-500 font-semibold">
              Take the 2-minute Drift Test →
            </Link>
          </div>
        </div>
      </section>

      {/* Marcus Section */}
      <section className="relative py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                MEET MARCUS<span className="text-red-600">.</span>
              </h2>
              <p className="text-xl text-zinc-300 mb-6">
                I don't do comfortable conversations. I don't validate your excuses. 
                I don't pretend your drift is strategy.
              </p>
              <p className="text-zinc-400 mb-6">
                15 years. 200+ founders. One pattern: The successful ones move. 
                The failures talk about moving.
              </p>
              <p className="text-zinc-400 mb-8">
                Former tech executive. Former corporate strategist. Current movement catalyst. 
                I've been in the drift. I know the way out.
              </p>
              <button 
                onClick={scheduleCall}
                className="bg-red-600 px-8 py-4 rounded text-lg font-semibold hover:bg-red-700 transition-all hover:scale-105"
              >
                Book a Reality Check
              </button>
            </div>
            <div className="relative">
              <Image 
                src="/images/marcus-davis.jpg" 
                alt="Marcus Davis"
                width={600}
                height={600}
                className="rounded-lg"
              />
              <div className="absolute -bottom-4 -right-4 bg-red-600 p-4 rounded">
                <p className="font-semibold">15+ Years</p>
                <p className="text-sm">Moving Founders Forward</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-24 px-4 bg-zinc-900/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            THEY STOPPED DRIFTING<span className="text-red-600">.</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-black border border-zinc-800 rounded-lg p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-red-600 text-red-600" />
                  ))}
                </div>
                <p className="text-zinc-300 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-zinc-400">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Cheatsheet Section */}
      <section className="relative py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            FREE: THE 5 SIGNALS YOU'RE DRIFTING<span className="text-red-600">.</span>
          </h2>
          <p className="text-xl text-zinc-300 mb-8">
            Download the checklist. Face the truth. Start moving.
          </p>
          <Link 
            href="/cheatsheet"
            className="inline-flex items-center gap-2 bg-red-600 px-8 py-4 rounded text-lg font-semibold hover:bg-red-700 transition-all hover:scale-105"
          >
            Get the Free Cheatsheet <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-24 px-4 bg-zinc-900/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            QUESTIONS<span className="text-red-600">?</span>
          </h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-zinc-800 rounded-lg overflow-hidden">
                <button
                  onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-zinc-900/50 transition-colors"
                >
                  <span className="font-semibold">{faq.question}</span>
                  {activeAccordion === index ? (
                    <Minus className="w-5 h-5 text-red-600" />
                  ) : (
                    <Plus className="w-5 h-5 text-red-600" />
                  )}
                </button>
                {activeAccordion === index && (
                  <div className="px-6 py-4 border-t border-zinc-800">
                    <p className="text-zinc-300">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            STILL READING<span className="text-red-600">?</span>
          </h2>
          <p className="text-2xl text-zinc-300 mb-12">
            That's the problem. You read. You think. You plan.<br />
            You don't move.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/diagnostic"
              className="bg-red-600 px-8 py-4 rounded text-lg font-semibold hover:bg-red-700 transition-all hover:scale-105"
            >
              Take the Drift Test
            </Link>
            <button 
              onClick={scheduleCall}
              className="border border-white/20 px-8 py-4 rounded text-lg font-semibold hover:bg-white/10 transition-all hover:scale-105"
            >
              Book Marcus Now
            </button>
          </div>
          <p className="text-zinc-500 mt-8">
            Your competition moved while you read this.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-zinc-800 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold tracking-tighter mb-4">
                IMAGINATION<span className="text-red-600">_</span>G
              </div>
              <p className="text-zinc-400 text-sm">
                Stop drifting. Start moving.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Weapons</h4>
              <ul className="space-y-2 text-zinc-400 text-sm">
                {weapons.map(weapon => (
                  <li key={weapon.id}>
                    <Link href={`/services/${weapon.slug}`} className="hover:text-white transition-colors">
                      {weapon.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-zinc-400 text-sm">
                <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
                <li><Link href="/diagnostic" className="hover:text-white transition-colors">Drift Test</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Ready to Move?</h4>
              <button 
                onClick={scheduleCall}
                className="bg-red-600 px-6 py-2 rounded hover:bg-red-700 transition-colors w-full"
              >
                Book Marcus
              </button>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-zinc-800 text-center text-zinc-400 text-sm">
            <p>&copy; 2024 IMAGINATION_G. Movement Starts Here.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ImaginationGLanding;