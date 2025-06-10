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

      <section>
        <h3 className="text-2xl font-bold mb-6 border-b border-zinc-800 pb-3">Why It Works</h3>
        <p className="text-lg leading-relaxed">{whyItWorks}</p>
      </section>

      <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold mb-4">Ready to Escape the Drift?</h3>
        <p className="text-zinc-300 mb-6">Stop waiting for perfect. Start moving forward. Today.</p>
        <Link 
          href="https://outlook.office.com/owa/calendar/IG@imaginationg.studio/bookings/"
          className="inline-block bg-red-600 hover:bg-red-700 px-8 py-4 rounded-md font-semibold transition-all hover:scale-105"
        >
          Book This Service
        </Link>
      </div>
    </div>
  );
};

export default ServiceContent;