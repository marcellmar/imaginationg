import React from 'react';
import Link from 'next/link';
import SEOHead from '../components/SEOHead';
import Navigation from '../components/Navigation';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowRight } from 'lucide-react';

const stats = [
  { num: '15+', label: 'YEARS' },
  { num: '17', label: 'CITIES' },
  { num: '4', label: 'CONTINENTS' },
  { num: '4,500+', label: 'STUDENTS' },
  { num: '5,000+', label: 'DEVICES' },
];

const orgs = [
  'US Army', 'City of Chicago', 'City of San Diego', 'USPS',
  'Grubb & Ellis', 'Goodwill Industries', 'Briggs & Stratton',
  'Topco Associates', 'Remote Patient Devices', 'HOPE LLC',
  'Varroc TYC', 'Mitsubishi', 'Winston & Strawn',
  'Physicians Revenue Group', 'Black Diamond Charities',
  'Dept. of Veteran Affairs', 'Illinois National Guard',
  'UIC', 'Chongqing University of Technology',
  'Walgreens', 'UPS Store',
];

const built = [
  'First citywide real estate asset control system, San Diego',
  'First site selection methodology for Goodwill Industries',
  'First forecasting tool for the United States Postal Service',
  'First emerging markets research tool for Grubb & Ellis Logistics',
  '5,000+ FDA-compliant blood pressure monitors deployed, 99.7% uptime',
  'Cannabis beverage bottling line scaled from 200 to 10,000+ units daily',
  'Cannabis packaging equipment, design through deployment',
  'Computer asset control system for 2,000+ users',
  'Nationwide food distribution network, DRY, LTL, REEFER',
  'Inventory rollout and recovery across Europe and Middle East',
  'Standard work development, operator training, and assembly line continuous improvement for Briggs & Stratton, Sherrill NY',
  'Curriculum for 4,500+ students across 7 years in China',
  'Management training for automotive manufacturers, Chongqing',
  'Municipal communication training, ShapingBa district government',
  'Finance Tracker Power App, Chicago Department of Public Health',
  'Mayor\'s Priority Initiative Tracker, City of Chicago',
  'TB patient tracking system, food inspection workflows',
  'Nationwide GIS and demographic data analysis system',
];

const AboutPage = () => {
  useScrollReveal();

  return (
    <>
      <SEOHead
        title="About | Imagination G"
        description="Marcus Davis. 15+ years, 17 cities, 4 continents. From head to hands."
      />

      <div className="min-h-screen bg-stone-50 text-stone-900">
        <Navigation currentPage="about" />

        {/* Hero */}
        <section className="pt-36 pb-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-stone-400 mb-8">
              <span className="w-2 h-2 bg-red-500 rounded-full" />
              ABOUT
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-[1.05] tracking-headline">
              FROM HEAD<span className="text-red-600">.</span><br />
              TO HANDS<span className="text-red-600">.</span>
            </h1>

            <p className="text-xl md:text-2xl text-stone-500 max-w-2xl mx-auto leading-relaxed">
              I've spent 15 years walking into systems I didn't build, figuring out why they're stuck, and building the thing that unsticks them.
            </p>
          </div>
        </section>

        {/* Stats Ribbon */}
        <section className="py-24 px-6 border-t border-stone-200 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 fade-up">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <span className="text-4xl md:text-5xl font-black text-stone-900">{s.num}</span>
                  <div className="text-xs font-mono text-stone-400 mt-2 tracking-widest">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="fade-up mt-16 text-center">
              <p className="text-sm text-stone-500 leading-loose">
                {orgs.join(' · ')}
              </p>
            </div>
          </div>
        </section>

        {/* What Got Built */}
        <section className="py-24 px-6 border-t border-stone-200">
          <div className="max-w-4xl mx-auto">
            <div className="fade-up text-xs font-mono text-stone-400 mb-2">THE TRACK RECORD</div>
            <h2 className="fade-up text-3xl md:text-4xl font-black mb-12 tracking-headline">
              WHAT GOT BUILT<span className="text-red-600">.</span>
            </h2>

            <div className="columns-1 md:columns-2 gap-8 fade-up-stagger">
              {built.map((item, i) => (
                <p key={i} className="fade-up text-sm text-stone-700 mb-4 break-inside-avoid leading-relaxed">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* GPI Thread */}
        <section className="py-24 px-6 border-t border-stone-200 bg-white">
          <div className="max-w-2xl mx-auto text-center fade-up">
            <p className="text-stone-600 mb-4 text-lg leading-relaxed">
              After enough engagements across enough industries and continents, the same pattern kept showing up. Organizations that looked healthy on paper were stuck in practice. The speed of decisions, the location of knowledge, the cost of changing direction told a different story than the financials.
            </p>
            <p className="text-stone-900 font-bold text-xl mb-10">
              That pattern became the Growing Pains Index.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/diagnostic"
                className="inline-flex items-center justify-center gap-2 bg-stone-900 px-8 py-4 text-sm font-semibold hover:bg-stone-800 transition-colors text-white group"
              >
                Take the Diagnostic
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/work-with-us"
                className="inline-flex items-center justify-center border border-stone-300 px-8 py-4 text-sm font-semibold hover:border-stone-900 transition-colors"
              >
                Work With Us
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 px-6 border-t border-stone-200">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
              <div>
                <div className="font-black text-sm mb-4">GPI<span className="text-red-600">.</span>STUDIO</div>
                <p className="text-sm text-stone-400 leading-relaxed">
                  Organizational physics.<br />
                  We measure where energy gets stuck.
                </p>
              </div>
              <div>
                <div className="text-xs font-mono text-stone-400 mb-4">RESEARCH</div>
                <div className="space-y-3">
                  <Link href="/insights" className="block text-sm text-stone-500 hover:text-stone-900 transition-colors">Insights</Link>
                  <Link href="/insights/gpi-analyses" className="block text-sm text-stone-500 hover:text-stone-900 transition-colors">Analyses</Link>
                  <Link href="/gpi-framework" className="block text-sm text-stone-500 hover:text-stone-900 transition-colors">Framework</Link>
                </div>
              </div>
              <div>
                <div className="text-xs font-mono text-stone-400 mb-4">WORK</div>
                <div className="space-y-3">
                  <Link href="/diagnostic" className="block text-sm text-stone-500 hover:text-stone-900 transition-colors">Diagnostic</Link>
                  <Link href="/consult" className="block text-sm text-stone-500 hover:text-stone-900 transition-colors">Book a Session</Link>
                  <Link href="/work-with-us" className="block text-sm text-stone-500 hover:text-stone-900 transition-colors">Work With Us</Link>
                </div>
              </div>
              <div>
                <div className="text-xs font-mono text-stone-400 mb-4">COMPANY</div>
                <div className="space-y-3">
                  <Link href="/about" className="block text-sm text-stone-500 hover:text-stone-900 transition-colors">About</Link>
                </div>
              </div>
            </div>
            <div className="pt-8 border-t border-stone-200 flex justify-between items-center text-xs text-stone-400">
              <div>© {new Date().getFullYear()} Imagination G LLC</div>
              <div className="font-mono">gpi.studio</div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default AboutPage;
