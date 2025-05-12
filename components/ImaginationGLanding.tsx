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

  const services = [
    {
      id: 1,
      title: "Clarity Catalyst Call",
      price: "$250",
      duration: "90 minutes",
      outcome: "1-page Dream → Move → Build map",
      bestFor: ["New founders", "Stuck teams", "Creatives with too many ideas"],
      popular: true,
      slug: "clarity-catalyst-call"
    },
    {
      id: 2,
      title: "Pre-Market Signal Scan",
      price: "$600",
      duration: "5-7 day turnaround",
      outcome: "2-page market entry report",
      bestFor: ["Product launches", "Business expansion"],
      popular: false,
      slug: "pre-market-signal-scan"
    },
    {
      id: 3,
      title: "30-Day Movement Sprint",
      price: "$1,500",
      duration: "4 weeks",
      outcome: "Focused plan + execution path",
      bestFor: ["Small teams", "Burned out founders"],
      popular: false,
      slug: "movement-sprint"
    },
    {
      id: 4,
      title: "MVP Jumpstart",
      price: "$2,000-$3,500",
      duration: "2-3 weeks",
      outcome: "Functioning prototype",
      bestFor: ["Rapid validation", "Pre-investment demos"],
      popular: false,
      slug: "mvp-jumpstart"
    },
    {
      id: 5,
      title: "Ecosystem Map + Connection Strategy",
      price: "$750",
      duration: "1 week",
      outcome: "Stakeholder map + connection plan",
      bestFor: ["Local orgs", "Creators needing network growth"],
      popular: false,
      slug: "ecosystem-map"
    }
  ];

  const testimonials = [
    {
      quote: "IMAGINATION G helped us 3x our revenue in 6 months by creating a movement system that actually works.",
      author: "Sarah Chen",
      role: "Founder, Meridian Designs",
      image: "/images/testimonial-1.jpg",
      rating: 5
    },
    {
      quote: "The Ecosystem Map doubled our partnerships and opened doors we didn't know existed.",
      author: "Dana Washington",
      role: "Marketing Director, Elevate Studios",
      image: "/images/testimonial-2.jpg",
      rating: 5
    },
    {
      quote: "Finally, someone who gets that movement beats management. Our team is energized again.",
      author: "Marcus Rodriguez",
      role: "CEO, TechStart",
      image: "/images/testimonial-3.jpg",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "How is IMAGINATION G different from traditional consulting?",
      answer: "We don't sell PowerPoints or bill by the hour. We architect living systems that move with you. Think catalyst, not consultant."
    },
    {
      question: "What if I don't know which service I need?",
      answer: "Start with a Clarity Catalyst Call. In 90 minutes, we'll map your exact next steps and recommend the right path forward."
    },
    {
      question: "Do you work with early-stage startups?",
      answer: "Absolutely. Our sweet spot is founders and small teams ready to move from drift to momentum. No minimum revenue required."
    },
    {
      question: "What's your success rate?",
      answer: "87% of our clients achieve their primary goal within 90 days. The other 13% pivot to something better after gaining clarity."
    }
  ];

  const stats = [
    { number: "150+", label: "Clients Catalyzed" },
    { number: "87%", label: "Success Rate" },
    { number: "10", label: "Years Experience" },
    { number: "3x", label: "Average ROI" }
  ];

  // Removed email submission handler

  const scheduleCall = () => {
    // Open the Outlook booking link
    window.open('https://outlook.office.com/owa/calendar/IG@imaginationg.studio/bookings/', '_blank');
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans relative">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${scrollPosition > 100 ? 'bg-black bg-opacity-95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-xl font-bold tracking-wider">IMAGINATION G</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#services" className="hover:text-gray-300 transition-colors">Services</Link>
            <Link href="/about" className="hover:text-gray-300 transition-colors">About</Link>
            <Link href="#testimonials" className="hover:text-gray-300 transition-colors">Results</Link>
            <Link href="#faq" className="hover:text-gray-300 transition-colors">FAQ</Link>
            <Link href="/diagnostic" className="hover:text-gray-300 transition-colors text-red-400">Drift Diagnostic</Link>
            <a
              href="https://outlook.office.com/owa/calendar/IG@imaginationg.studio/bookings/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-6 py-2 font-medium hover:bg-gray-200 transition-all inline-block">
              Book a Call
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black border-t border-zinc-800">
            <div className="flex flex-col p-6 space-y-4">
              <Link href="#services" className="hover:text-gray-300 transition-colors">Services</Link>
              <Link href="/about" className="hover:text-gray-300 transition-colors">About</Link>
              <Link href="#testimonials" className="hover:text-gray-300 transition-colors">Results</Link>
              <Link href="#faq" className="hover:text-gray-300 transition-colors">FAQ</Link>
              <Link href="/diagnostic" className="hover:text-gray-300 transition-colors text-red-400">Drift Diagnostic</Link>
              <a
                href="https://outlook.office.com/owa/calendar/IG@imaginationg.studio/bookings/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-6 py-2 font-medium hover:bg-gray-200 transition-all inline-block text-center">
                Book a Call
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center py-24 px-6 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-white opacity-5 rounded-full animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-40 h-40 border border-white opacity-5 rounded-full animate-pulse" />
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-8 relative z-10 animate-fade-in">IMAGINATION G</h1>
        
        <div className="flex items-center gap-4 text-2xl mb-8 relative z-10 animate-fade-in-delay">
          <span className="font-medium">Dream</span>
          <ArrowRight size={20} className="text-gray-400" />
          <span className="font-medium">Move</span>
          <ArrowRight size={20} className="text-gray-400" />
          <span className="font-medium">Build</span>
        </div>
        
        <p className="text-xl md:text-2xl font-light mb-6 relative z-10">
          A Studio for Aligned Futures
        </p>
        
        <p className="text-lg mb-12 max-w-2xl relative z-10 text-gray-300">
          We don't consult. We catalyze. For those who refuse to drift in broken systems and want to architect movement that matters.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 relative z-10">
          <a
            href="https://outlook.office.com/owa/calendar/IG@imaginationg.studio/bookings/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-8 py-4 font-medium text-lg hover:bg-opacity-90 transition-all transform hover:scale-105 inline-block">
            Book Clarity Call - $250
          </a>
          <Link href="/services" className="border border-white px-8 py-4 font-medium text-lg hover:bg-white hover:text-black transition-all">
            View All Services
          </Link>
        </div>

        <div className="mt-6 relative z-10">
          <Link
            href="/diagnostic"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-800 text-white px-6 py-3 font-medium rounded-md hover:from-red-700 hover:to-red-900 transition-all transform hover:scale-105"
          >
            <span className="animate-pulse">⚠️</span>
            <span>Take the 60-Second Drift Diagnostic</span>
            <span className="animate-pulse">⚠️</span>
          </Link>
        </div>

        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <ArrowRight size={32} className="rotate-90 text-gray-400" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-zinc-900 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Founder Story Section */}
      <section id="about" className="py-24 px-6 bg-black">
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Why IMAGINATION G?</h2>
              <p className="text-xl mb-6 italic text-zinc-400">
                "I built IMAGINATION G after a decade inside broken systems. I saw brilliant people stuck.
                I saw movement suffocated by complexity. This studio is the answer I wish someone gave me."
              </p>
              <p className="text-lg mb-6 text-zinc-300">
                IMAGINATION G isn't theory. It's forged from lived experience, tested in the wild, 
                and refined with founders, creators, and teams who refuse to drift.
              </p>
              <p className="text-lg text-zinc-300">
                We don't sell strategy decks. We architect movement with you—on your terms, 
                at your speed, for your future.
              </p>
              <div className="mt-8">
                <p className="font-bold">Marcus Davis</p>
                <p className="text-gray-400">Founder & Chief Catalyst</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Services & Pricing</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className={`relative bg-black p-8 rounded-lg border transition-all duration-300 hover:transform hover:scale-105 cursor-pointer ${
                  service.popular ? 'border-white' : 'border-zinc-800'
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 right-6 bg-white text-black px-4 py-1 text-sm font-bold rounded">
                    MOST POPULAR
                  </div>
                )}

                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <div className="text-3xl font-bold mb-2 text-white">{service.price}</div>
                <p className="text-gray-400 mb-4">{service.duration}</p>
                <p className="mb-6">{service.outcome}</p>

                <div className="mb-6">
                  <p className="text-sm text-gray-400 mb-2">Best for:</p>
                  <ul className="space-y-1">
                    {service.bestFor.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check size={16} className="text-green-400 mt-0.5" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-2">
                  <Link
                    href={`/services/${service.slug}`}
                    className="w-full border border-white text-white py-3 font-medium hover:bg-white hover:text-black transition-all inline-block text-center">
                    View Details
                  </Link>
                  <a
                    href="https://outlook.office.com/owa/calendar/IG@imaginationg.studio/bookings/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-white text-black py-3 font-medium hover:bg-gray-200 transition-all inline-block text-center">
                    Book This Service
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-400 mb-4">Need a custom solution?</p>
            <Link
              href="/services"
              className="border border-white px-8 py-3 font-medium hover:bg-white hover:text-black transition-all inline-block">
              See All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Pain vs Dream Block */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
          <div className="relative">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-red-500"></div>
            <h3 className="text-3xl font-bold mb-6 text-red-400">The Drift Trap</h3>
            <ul className="space-y-4 text-lg text-zinc-400">
              <li className="flex items-start gap-3">
                <X size={20} className="text-red-500 mt-0.5" />
                <span>Strategy decks no one reads</span>
              </li>
              <li className="flex items-start gap-3">
                <X size={20} className="text-red-500 mt-0.5" />
                <span>Endless planning meetings that drain momentum</span>
              </li>
              <li className="flex items-start gap-3">
                <X size={20} className="text-red-500 mt-0.5" />
                <span>False starts disguised as progress</span>
              </li>
            </ul>
            <p className="text-red-500 font-bold mt-8 text-xl">Sound familiar?</p>
          </div>
          
          <div className="relative">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-green-500"></div>
            <h3 className="text-3xl font-bold mb-6 text-green-400">The Movement Shift</h3>
            <ul className="space-y-4 text-lg text-zinc-400">
              <li className="flex items-start gap-3">
                <Check size={20} className="text-green-500 mt-0.5" />
                <span>Systems you actually use</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={20} className="text-green-500 mt-0.5" />
                <span>Decisions made with clarity and rhythm</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={20} className="text-green-500 mt-0.5" />
                <span>Execution that builds traction now—not next year</span>
              </li>
            </ul>
            <a
              href="https://outlook.office.com/owa/calendar/IG@imaginationg.studio/bookings/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-8 py-4 font-medium text-lg mt-8 hover:bg-opacity-90 transition-all transform hover:scale-105 inline-block">
              Make the Shift
            </a>
          </div>
        </div>
      </section>

      {/* Lead Magnet Section */}
      <section className="py-24 px-6 bg-zinc-900 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Not Sure Where to Start?</h2>
          <p className="text-lg mb-8 text-zinc-400">
            Get our free diagnostic tool: <strong>"🚀 5 Signals You're Drifting Instead of Moving"</strong>
          </p>

          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative w-full h-[400px] mb-6 bg-black p-4 rounded-lg">
              <div className="absolute inset-0 p-4 overflow-hidden">
                <Image
                  src="/images/cheatsheet.jpg"
                  alt="Cheat Sheet Preview"
                  className="rounded-lg shadow-xl object-contain opacity-50"
                  fill
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-black bg-opacity-70 p-6 rounded-lg max-w-md">
                    <h3 className="text-xl font-bold mb-3">Inside the diagnostic:</h3>
                    <ul className="text-left space-y-3">
                      <li className="flex items-start gap-2">
                        <Check size={20} className="text-green-400 mt-0.5 flex-shrink-0" />
                        <span>5 unmistakable signals you're stuck in patterns that kill momentum</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check size={20} className="text-green-400 mt-0.5 flex-shrink-0" />
                        <span>Practical shifts to transform each drift pattern</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check size={20} className="text-green-400 mt-0.5 flex-shrink-0" />
                        <span>A quick-reference table for team discussions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check size={20} className="text-green-400 mt-0.5 flex-shrink-0" />
                        <span>Available as downloadable PDF and email delivery</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-md mx-auto">
            <Link
              href="/cheatsheet"
              className="bg-white text-black px-8 py-4 font-medium text-lg hover:bg-gray-200 transition-all inline-block rounded"
            >
              Access Free Cheat Sheet
            </Link>
            <p className="text-sm text-zinc-500 mt-4">No email required. Instant access.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Client Results</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-zinc-900 p-8 rounded-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-lg italic mb-6">"{testimonial.quote}"</p>
                
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12">
                    <Image 
                      src={testimonial.image} 
                      alt={testimonial.author} 
                      className="rounded-full object-cover"
                      fill
                    />
                  </div>
                  <div>
                    <p className="font-bold">{testimonial.author}</p>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-6 bg-zinc-900">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-black rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-zinc-900 transition-colors"
                >
                  <span className="font-medium text-lg">{faq.question}</span>
                  {activeAccordion === index ? <Minus size={20} /> : <Plus size={20} />}
                </button>
                
                <div 
                  className={`px-6 transition-all duration-300 ${
                    activeAccordion === index ? 'py-4' : 'max-h-0 overflow-hidden'
                  }`}
                >
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-6 bg-black text-center border-t border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">This Is IMAGINATION G.</h2>
          <p className="text-xl mb-8">Not just another consulting firm. A strategic studio for the builders of aligned futures.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://outlook.office.com/owa/calendar/IG@imaginationg.studio/bookings/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-8 py-4 font-medium text-lg hover:bg-opacity-90 transition-all transform hover:scale-105 inline-block">
              Book Your Clarity Call - $250
            </a>
            <Link href="/services" className="border border-white px-8 py-4 font-medium text-lg hover:bg-white hover:text-black transition-all">
              View All Services
            </Link>
          </div>
          
          <p className="mt-12 text-gray-400">Only 3 spots left for December</p>
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
                <li><Link href="#services" className="hover:text-white transition-colors">Services</Link></li>
                <li><Link href="#about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="#testimonials" className="hover:text-white transition-colors">Results</Link></li>
                <li><Link href="#faq" className="hover:text-white transition-colors">FAQ</Link></li>
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
                  <MessageCircle size={24} />
                </Link>
                <Link href="https://wa.me/17737044833" className="hover:text-gray-300 transition-colors">
                  <Phone size={24} />
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

      {/* Floating CTA Button - Mobile */}
      <div className="fixed bottom-6 right-6 md:hidden z-40">
        <button
          onClick={() => window.location.href = 'https://wa.me/17737044833'}
          className="bg-white text-black p-4 rounded-full shadow-lg hover:shadow-xl transition-all">
          <Phone size={24} />
        </button>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        .animate-fade-in-delay {
          animation: fade-in 0.8s ease-out 0.3s both;
        }
      `}</style>
    </div>
  );
};

export default ImaginationGLanding;