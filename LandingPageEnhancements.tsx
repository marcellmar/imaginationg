import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Check, Star, MessageCircle, Phone, Plus, Minus, Menu, X } from 'lucide-react';

const ImaginationGLanding = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [email, setEmail] = useState<string>('');

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
      popular: true
    },
    {
      id: 2,
      title: "Pre-Market Signal Scan",
      price: "$600",
      duration: "5-7 day turnaround",
      outcome: "2-page market entry report",
      bestFor: ["Product launches", "Business expansion"],
      popular: false
    },
    {
      id: 3,
      title: "30-Day Movement Sprint",
      price: "$1,500",
      duration: "4 weeks",
      outcome: "Focused plan + execution path",
      bestFor: ["Small teams", "Burned out founders"],
      popular: false
    },
    {
      id: 4,
      title: "MVP Jumpstart",
      price: "$2,000-$3,500",
      duration: "2-3 weeks",
      outcome: "Functioning prototype",
      bestFor: ["Rapid validation", "Pre-investment demos"],
      popular: false
    }
  ];

  const testimonials = [
    {
      quote: "IMAGINATION G helped us 3x our revenue in 6 months by creating a movement system that actually works.",
      author: "Sarah Chen",
      role: "Founder, Meridian Designs",
      image: "/api/placeholder/64/64",
      rating: 5
    },
    {
      quote: "The Ecosystem Map doubled our partnerships and opened doors we didn't know existed.",
      author: "Dana Washington",
      role: "Marketing Director, Elevate Studios",
      image: "/api/placeholder/64/64",
      rating: 5
    },
    {
      quote: "Finally, someone who gets that movement beats management. Our team is energized again.",
      author: "Marcus Rodriguez",
      role: "CEO, TechStart",
      image: "/api/placeholder/64/64",
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

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    // Handle email submission logic here
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans relative">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${scrollPosition > 100 ? 'bg-black bg-opacity-95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-xl font-bold tracking-wider">IMAGINATION G</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="hover:text-gray-300 transition-colors">Services</a>
            <a href="#about" className="hover:text-gray-300 transition-colors">About</a>
            <a href="#testimonials" className="hover:text-gray-300 transition-colors">Results</a>
            <a href="#faq" className="hover:text-gray-300 transition-colors">FAQ</a>
            <button className="bg-white text-black px-6 py-2 font-medium hover:bg-gray-200 transition-all">
              Book a Call
            </button>
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
              <a href="#services" className="hover:text-gray-300 transition-colors">Services</a>
              <a href="#about" className="hover:text-gray-300 transition-colors">About</a>
              <a href="#testimonials" className="hover:text-gray-300 transition-colors">Results</a>
              <a href="#faq" className="hover:text-gray-300 transition-colors">FAQ</a>
              <button className="bg-white text-black px-6 py-2 font-medium hover:bg-gray-200 transition-all">
                Book a Call
              </button>
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
          <button className="bg-white text-black px-8 py-4 font-medium text-lg hover:bg-opacity-90 transition-all transform hover:scale-105">
            Book Clarity Call - $250
          </button>
          <button className="border border-white px-8 py-4 font-medium text-lg hover:bg-white hover:text-black transition-all">
            View Services
          </button>
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
              <img 
                src="/api/placeholder/300/300" 
                alt="Founder" 
                className="rounded-lg shadow-xl"
              />
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
                <p className="font-bold">Jane Martinez</p>
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div 
                key={service.id}
                className={`relative bg-black p-8 rounded-lg border transition-all duration-300 hover:transform hover:scale-105 cursor-pointer ${
                  service.popular ? 'border-white' : 'border-zinc-800'
                }`}
                onClick={() => setSelectedService(service)}
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
                
                <button className="w-full bg-white text-black py-3 font-medium hover:bg-gray-200 transition-all">
                  Book This Service
                </button>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-400 mb-4">Need a custom solution?</p>
            <button className="border border-white px-8 py-3 font-medium hover:bg-white hover:text-black transition-all">
              Let's Talk
            </button>
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
            <button className="bg-white text-black px-8 py-4 font-medium text-lg mt-8 hover:bg-opacity-90 transition-all transform hover:scale-105">
              Make the Shift
            </button>
          </div>
        </div>
      </section>

      {/* Lead Magnet Section */}
      <section className="py-24 px-6 bg-zinc-900 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Not Sure Where to Start?</h2>
          <p className="text-lg mb-8 text-zinc-400">
            Get our free 1-page cheat sheet: <strong>"5 Signals You're Drifting Instead of Moving"</strong>
          </p>
          
          <div className="max-w-2xl mx-auto mb-8">
            <img 
              src="/api/placeholder/600/400" 
              alt="Cheat Sheet Preview" 
              className="rounded-lg shadow-xl mb-6"
            />
            <ul className="text-left space-y-2 mb-8">
              <li className="flex items-start gap-2">
                <Check size={20} className="text-green-400 mt-0.5" />
                <span>Instant clarity on your current state</span>
              </li>
              <li className="flex items-start gap-2">
                <Check size={20} className="text-green-400 mt-0.5" />
                <span>Simple diagnostic framework</span>
              </li>
              <li className="flex items-start gap-2">
                <Check size={20} className="text-green-400 mt-0.5" />
                <span>Actionable next steps</span>
              </li>
            </ul>
          </div>
          
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 bg-black border border-zinc-700 rounded focus:border-white focus:outline-none"
              />
              <button 
                onClick={handleSubmit}
                className="bg-white text-black px-6 py-3 font-medium hover:bg-gray-200 transition-all"
              >
                Get the Cheat Sheet
              </button>
            </div>
          </div>
          <p className="text-sm text-zinc-500 mt-4">No spam. Just clarity.</p>
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
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author} 
                    className="w-12 h-12 rounded-full"
                  />
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
            <button className="bg-white text-black px-8 py-4 font-medium text-lg hover:bg-opacity-90 transition-all transform hover:scale-105">
              Book Your Clarity Call - $250
            </button>
            <button className="border border-white px-8 py-4 font-medium text-lg hover:bg-white hover:text-black transition-all">
              View All Services
            </button>
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
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#testimonials" className="hover:text-white transition-colors">Results</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Free Cheat Sheet</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Connect</h4>
              <div className="flex gap-4 mb-4">
                <a href="#" className="hover:text-gray-300 transition-colors">
                  <MessageCircle size={24} />
                </a>
                <a href="#" className="hover:text-gray-300 transition-colors">
                  <Phone size={24} />
                </a>
              </div>
              <p className="text-gray-400">marcus@imaginationg.studio</p>
              <p className="text-gray-400">1-800-IMAGINE</p>
            </div>
          </div>
          
          <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>&copy; 2024 IMAGINATION G. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating CTA Button - Mobile */}
      <div className="fixed bottom-6 right-6 md:hidden z-40">
        <button className="bg-white text-black p-4 rounded-full shadow-lg hover:shadow-xl transition-all">
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