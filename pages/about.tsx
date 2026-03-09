import React from 'react';
import SEOHead from '../components/SEOHead';
import Navigation from '../components/Navigation';

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
  return (
    <>
      <SEOHead
        title="About | Imagination G"
        description="Marcus Davis. 15+ years, 17 cities, 4 continents. From head to hands."
      />

      <div className="min-h-screen bg-stone-50 text-stone-900">
        <Navigation currentPage="about" />

        {/* Hero */}
        <section className="pt-28 pb-10 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-stone-400 mb-6">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              ABOUT
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1]">
              FROM HEAD<span className="text-red-600">.</span><br />
              TO HANDS<span className="text-red-600">.</span>
            </h1>

            <p className="text-xl text-stone-500 max-w-2xl">
              I've spent 15 years walking into systems I didn't build, figuring out why they're stuck, and building the thing that unsticks them.
            </p>
          </div>
        </section>

        {/* Stats Ribbon */}
        <section className="px-6 pb-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-x-8 gap-y-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <span className="text-3xl md:text-4xl font-black text-stone-900">{s.num}</span>
                  <span className="text-xs font-mono text-stone-400 ml-2 tracking-widest">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Org Wall */}
        <section className="px-6 pb-12">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm text-stone-500 leading-loose">
              {orgs.join(' · ')}
            </p>
          </div>
        </section>

        {/* What Got Built */}
        <section className="py-12 px-6 border-t border-stone-200 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-black mb-8">WHAT GOT BUILT<span className="text-red-600">.</span></h2>

            <div className="columns-1 md:columns-2 gap-8">
              {built.map((item, i) => (
                <p key={i} className="text-sm text-stone-700 mb-3 break-inside-avoid">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* GPI Thread */}
        <section className="py-12 px-6 border-t border-stone-200">
          <div className="max-w-2xl mx-auto">
            <p className="text-stone-600 mb-3">
              After enough engagements across enough industries and continents, the same pattern kept showing up. Organizations that looked healthy on paper were stuck in practice. The speed of decisions, the location of knowledge, the cost of changing direction told a different story than the financials.
            </p>
            <p className="text-stone-900 font-bold mb-6">
              That pattern became the Growing Pains Index.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/diagnostic"
                className="inline-flex items-center justify-center bg-red-600 px-6 py-3 text-sm font-black hover:bg-red-700 transition-colors text-white"
              >
                TAKE THE DIAGNOSTIC
              </a>
              <a
                href="/work-with-us"
                className="inline-flex items-center justify-center border-2 border-stone-900 px-6 py-3 text-sm font-black hover:bg-stone-900 hover:text-white transition-colors"
              >
                WORK WITH US
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
