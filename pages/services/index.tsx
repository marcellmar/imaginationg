import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';

const services = [
  {
    id: 1,
    title: "Clarity Catalyst Call",
    description: "A 90-minute session to move from confusion to clarity",
    price: "$250",
    duration: "90 minutes",
    popular: true,
    slug: "clarity-catalyst-call"
  },
  {
    id: 2,
    title: "Pre-Market Signal Scan",
    description: "Data-rich Go | Wait | No-Go market entry report",
    price: "$600",
    duration: "5-7 days",
    popular: false,
    slug: "pre-market-signal-scan"
  },
  {
    id: 3,
    title: "30-Day Movement Sprint",
    description: "A 4-week execution sprint to build momentum",
    price: "$1,500",
    duration: "4 weeks",
    popular: false,
    slug: "movement-sprint"
  },
  {
    id: 4,
    title: "MVP Jumpstart",
    description: "Rapid prototype development without the bloat",
    price: "$2,000-$3,500",
    duration: "2-3 weeks",
    popular: false,
    slug: "mvp-jumpstart"
  },
  {
    id: 5,
    title: "Ecosystem Map + Connection Strategy",
    description: "Build alliances and open doors with strategic connections",
    price: "$750",
    duration: "1 week",
    popular: false,
    slug: "ecosystem-map"
  }
];

const ServicesPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Services | IMAGINATION G</title>
        <meta name="description" content="We don't consult. We catalyze. Every offer is designed to cut drift, forge clarity, and engineer movement you can feel." />
      </Head>

      <div className="min-h-screen bg-black text-white">
        {/* Navigation Bar */}
        <nav className="bg-black bg-opacity-95 backdrop-blur-sm shadow-lg px-6 py-4 fixed top-0 left-0 right-0 z-50">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <Link href="/" className="text-xl font-bold tracking-wider">IMAGINATION G</Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="hover:text-gray-300 transition-colors flex items-center gap-1">
                <span>←</span> Home
              </Link>
              <Link href="/#services" className="hover:text-gray-300 transition-colors">Services</Link>
              <Link href="/about" className="hover:text-gray-300 transition-colors">About</Link>
              <a
                href="https://outlook.office.com/owa/calendar/IG@imaginationg.studio/bookings/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-6 py-2 font-medium hover:bg-gray-200 transition-all inline-block">
                Book a Call
              </a>
            </div>
          </div>
        </nav>

        {/* Header */}
        <header className="pt-32 pb-16 px-6 bg-zinc-900 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">IMAGINATION G Service Suite</h1>
            <p className="text-xl text-zinc-300 mb-8 max-w-3xl mx-auto">
              We don't consult. We catalyze. Every offer is designed to cut drift, forge clarity, and engineer movement you can feel.
            </p>
          </div>
        </header>

        {/* Services List */}
        <main className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service) => (
                <Link 
                  key={service.id}
                  href={`/services/${service.slug}`}
                  className={`relative bg-black p-8 rounded-lg border transition-all duration-300 hover:transform hover:scale-105 ${
                    service.popular ? 'border-white' : 'border-zinc-800'
                  }`}
                >
                  {service.popular && (
                    <div className="absolute -top-3 right-6 bg-white text-black px-4 py-1 text-sm font-bold rounded">
                      MOST POPULAR
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-zinc-400 mb-3">{service.description}</p>
                  <div className="text-3xl font-bold mb-2 text-white">{service.price}</div>
                  <p className="text-gray-400 mb-4">{service.duration}</p>
                  
                  <div className="mt-4 flex items-center gap-2 text-zinc-300 group-hover:text-white">
                    <span>Learn More</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <h2 className="text-2xl font-bold mb-6">Not sure which service is right for you?</h2>
              <a 
                href="https://outlook.office.com/owa/calendar/IG@imaginationg.studio/bookings/" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-8 py-4 font-medium hover:bg-gray-200 transition-all inline-block"
              >
                Book a Free 15-Minute Consultation
              </a>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="py-12 px-6 bg-zinc-900 border-t border-zinc-800 text-center">
          <div className="max-w-4xl mx-auto">
            <Link href="/" className="text-xl font-bold mb-4 inline-block">IMAGINATION G</Link>
            <p className="text-zinc-400 mb-6">A Studio for Aligned Futures</p>
            <p className="text-sm text-zinc-500">&copy; {new Date().getFullYear()} IMAGINATION G. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ServicesPage;