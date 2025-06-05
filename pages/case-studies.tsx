import React from 'react';
import Link from 'next/link';
import SEOHead from '../components/SEOHead';
import Navigation from '../components/Navigation';
import RelatedContent from '../components/RelatedContent';
import { Check, TrendingUp } from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: "From Signal to 3X Revenue",
      client: "Meridian Designs",
      industry: "Creative Agency",
      noise: "15+ weekly meetings. Zero decisions.",
      signal: "Ship daily or die.",
      intervention: "30-Day Movement Sprint",
      results: [
        "Meetings cut by 60%",
        "3 new offerings in 90 days",
        "3X revenue in 6 months",
        "Team rebuilt on action"
      ],
      quote: "IMAGINATION G didn't give us a roadmap—they gave us movement.",
      quoteAuthor: "Dana Washington, Founder"
    },
    {
      id: 2,
      title: "14-Day MVP After 6 Months Stuck",
      client: "DataPulse",
      industry: "SaaS / Analytics",
      noise: "Perfectionism paralysis.",
      signal: "Ship ugly. Learn fast.",
      intervention: "MVP Jumpstart",
      results: [
        "V1 launched in 14 days",
        "3 paying customers in 30 days",
        "Feature bloat cut 70%",
        "$750K raised on traction"
      ],
      quote: "We were over-engineering everything. Marcus showed us ugly beats perfect.",
      quoteAuthor: "Alex Chen, CTO"
    },
    {
      id: 3,
      title: "Non-Profit Doubles Impact",
      client: "Bridge Forward",
      industry: "Education Non-Profit",
      noise: "Mission statement word-smithing.",
      signal: "Help kids. Everything else is noise.",
      intervention: "The Naming + Ecosystem Map",
      results: [
        "Donor engagement 2X",
        "Program clarity achieved",
        "Board aligned in 1 session",
        "Impact metrics simplified"
      ],
      quote: "We remembered why we started. The rest handled itself.",
      quoteAuthor: "Maria Torres, Executive Director"
    }
  ];

  return (
    <>
      <SEOHead
        title="Case Studies - Signal Amplification Results | IMAGINATION G"
        description="Real transformations. No optimization theater. See how businesses cut through noise to amplify signal and multiply results."
        ogImage="/images/og-default.jpg"
      />

      <div className="min-h-screen bg-black text-white">
        <Navigation />

        {/* Hero Section */}
        <section className="pt-24 pb-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              {/* System Status Badge */}
              <div className="inline-block mb-8 text-green-400 text-xs font-mono bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-full">
                <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                RESULTS: VERIFIED
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1]">
                SIGNAL<br />AMPLIFIED<span className="text-red-600">.</span>
              </h1>
              
              <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                Real businesses. Real noise. Real breakthroughs.
                No case study theater.
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-24">
              {caseStudies.map((study, index) => (
                <div key={study.id} className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Content Side */}
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <h2 className="text-3xl md:text-4xl font-black mb-6">
                      {study.title}
                    </h2>
                    
                    <div className="mb-8">
                      <p className="text-sm text-zinc-500 mb-1">{study.industry}</p>
                      <p className="text-2xl font-bold">{study.client}</p>
                    </div>

                    <div className="space-y-6 mb-8">
                      <div>
                        <p className="text-sm text-red-600 font-bold mb-2">THE NOISE:</p>
                        <p className="text-lg">{study.noise}</p>
                      </div>
                      
                      <div>
                        <p className="text-sm text-green-500 font-bold mb-2">THE SIGNAL:</p>
                        <p className="text-lg">{study.signal}</p>
                      </div>
                      
                      <div>
                        <p className="text-sm text-yellow-500 font-bold mb-2">THE INTERVENTION:</p>
                        <p className="text-lg">{study.intervention}</p>
                      </div>
                    </div>

                    <div className="border-l-4 border-zinc-800 pl-6 mb-8">
                      <p className="text-xl italic mb-4">"{study.quote}"</p>
                      <p className="text-sm text-zinc-500">— {study.quoteAuthor}</p>
                    </div>
                  </div>

                  {/* Results Side */}
                  <div className={`bg-zinc-950 border border-zinc-800 p-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <h3 className="text-2xl font-black mb-6 flex items-center gap-2">
                      <TrendingUp className="text-green-500" size={24} />
                      RESULTS
                    </h3>
                    <div className="space-y-3">
                      {study.results.map((result, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <Check className="text-green-500 mt-1 flex-shrink-0" size={16} />
                          <p className="text-lg">{result}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-16 px-6 bg-zinc-950">
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-3xl font-black mb-6">YOUR SIGNAL IS BURIED</h3>
            <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              Stop optimizing noise. Start amplifying truth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/diagnostic"
                className="bg-red-600 px-8 py-4 text-lg font-black hover:bg-red-700 transition-colors"
              >
                DETECT YOUR SIGNAL
              </Link>
              <Link 
                href="/interventions"
                className="border-2 border-zinc-700 px-8 py-4 text-lg font-black hover:border-zinc-500 transition-colors"
              >
                VIEW INTERVENTIONS
              </Link>
            </div>
          </div>
        </section>

        {/* Related Content */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto">
            <RelatedContent
              title="Start Your Override"
              items={[
                {
                  href: "/interventions/the-naming",
                  title: "THE NAMING",
                  description: "Surface your buried truth. One session. One breakthrough.",
                  color: "red"
                },
                {
                  href: "/interventions/thirty-day-drift-break",
                  title: "30-DAY DRIFT BREAK",
                  description: "Real-time intervention. Live system override.",
                  color: "yellow"
                },
                {
                  href: "/diagnostic",
                  title: "Signal Detection",
                  description: "19 binary questions. Find your noise source.",
                  color: "green"
                }
              ]}
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudies;