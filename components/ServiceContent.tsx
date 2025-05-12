import React from 'react';
import { Check } from 'lucide-react';
import Link from 'next/link';

interface ServiceContentProps {
  duration: string;
  outcome: string;
  includes: string[];
  bestFor: string[];
  whyItWorks: string;
}

const ServiceContent: React.FC<ServiceContentProps> = ({
  duration,
  outcome,
  includes,
  bestFor,
  whyItWorks
}) => {
  return (
    <div className="space-y-12">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-2 text-zinc-300">Duration</h3>
          <p className="text-2xl font-bold">{duration}</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 text-zinc-300">Outcome</h3>
          <p className="text-2xl">{outcome}</p>
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-bold mb-6 border-b border-zinc-800 pb-3">Includes</h3>
        <ul className="space-y-4">
          {includes.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check size={20} className="text-green-400 mt-1 flex-shrink-0" />
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h3 className="text-2xl font-bold mb-6 border-b border-zinc-800 pb-3">Best For</h3>
        <ul className="space-y-4">
          {bestFor.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check size={20} className="text-green-400 mt-1 flex-shrink-0" />
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-zinc-900 p-8 rounded-lg">
        <h3 className="text-2xl font-bold mb-4 text-white">Why It Works</h3>
        <p className="text-lg">{whyItWorks}</p>
      </section>

      <section className="text-center pt-6">
        <h3 className="text-2xl font-bold mb-6">Ready to start?</h3>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="https://outlook.office.com/owa/calendar/IG@imaginationg.studio/bookings/" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-8 py-4 font-medium text-lg hover:bg-opacity-90 transition-all transform hover:scale-105 inline-block"
          >
            Book Now
          </a>
          <Link 
            href="/#contact"
            className="border border-white px-8 py-4 font-medium text-lg hover:bg-white hover:text-black transition-all inline-block"
          >
            Ask a Question
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServiceContent;