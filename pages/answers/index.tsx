import type { NextPage } from 'next';
import Link from 'next/link';
import { useState } from 'react';
import SEOHead from '../../components/SEOHead';
import Navigation from '../../components/Navigation';
import RelatedContent from '../../components/RelatedContent';
import { ArrowRight, Search, Filter } from 'lucide-react';

const AnswersHub: NextPage = () => {
  const [activeTab, setActiveTab] = useState('lexicon');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
      <SEOHead
        title="Pattern Breakdown & Portal Knowledge | IMAGINATION G"
        description="Get direct answers about stuck patterns and portal interventions. No fluff, no optimization theater - just brutal truth about breaking patterns and shipping solutions."
        ogImage="/images/og-answers.svg"
      />

      <div className="min-h-screen bg-black text-white">
        <Navigation currentPage="answers" />

        {/* Hero Section */}
        <section className="pt-24 pb-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-6xl">
              {/* System Status Badge */}
              <div className="inline-block mb-8 text-green-400 text-xs font-mono bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-full">
                <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                KNOWLEDGE PORTAL: ACTIVE
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1]">
                PATTERN<br />BREAKDOWN<span className="text-red-600">.</span>
              </h1>
              
              <p className="text-xl text-zinc-400 mb-12 max-w-2xl">
                Why teams get stuck. How patterns form. Which portals break them. 
                No MBA speak. No optimization theater. Just direct answers.
              </p>

              {/* Portal Navigation */}
              <div className="border border-zinc-800 bg-zinc-950">
                <div className="flex border-b border-zinc-800 overflow-x-auto">
                  <button
                    onClick={() => setActiveTab('lexicon')}
                    className={`px-6 py-4 font-bold transition-colors whitespace-nowrap ${
                      activeTab === 'lexicon' 
                        ? 'bg-red-600 text-white' 
                        : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
                    }`}
                  >
                    IG LEXICON
                  </button>
                  <button
                    onClick={() => setActiveTab('concepts')}
                    className={`px-6 py-4 font-bold transition-colors whitespace-nowrap ${
                      activeTab === 'concepts' 
                        ? 'bg-red-600 text-white' 
                        : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
                    }`}
                  >
                    CORE CONCEPTS
                  </button>
                  <button
                    onClick={() => setActiveTab('patterns')}
                    className={`px-6 py-4 font-bold transition-colors whitespace-nowrap ${
                      activeTab === 'patterns' 
                        ? 'bg-red-600 text-white' 
                        : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
                    }`}
                  >
                    STUCK PATTERNS
                  </button>
                  <button
                    onClick={() => setActiveTab('solutions')}
                    className={`px-6 py-4 font-bold transition-colors whitespace-nowrap ${
                      activeTab === 'solutions' 
                        ? 'bg-red-600 text-white' 
                        : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
                    }`}
                  >
                    PORTAL SOLUTIONS
                  </button>
                </div>

                {/* Search Bar */}
                <div className="p-6 border-b border-zinc-800">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-500" size={20} />
                    <input
                      type="text"
                      placeholder="Search patterns, terms, or solutions..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-black border border-zinc-700 text-white placeholder-zinc-500 focus:border-red-600 focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portal Content Sections */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-6xl">
              
              {/* IG LEXICON TAB */}
              {activeTab === 'lexicon' && (
                <div className="space-y-8">
                  <div className="bg-black border-2 border-red-600 p-8">
                    <h2 className="text-2xl font-black mb-4 text-red-600">IG LEXICON: PATTERN PHYSICS</h2>
                    <p className="text-lg mb-6">
                      Traditional business language describes symptoms. Our lexicon names the actual stuck patterns. 
                      These terms decode what breaks teams.
                    </p>
                  </div>

                  {/* Lexicon Grid */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <Link href="/answers/glossary/nexel" className="border border-zinc-800 p-6 hover:border-red-600 transition-all group bg-zinc-950">
                      <h3 className="font-black text-xl text-red-600 mb-2 group-hover:text-white transition-colors">
                        Nexel <ArrowRight className="inline ml-2" size={16} />
                      </h3>
                      <p className="text-zinc-400">How you handle getting blocked. Your constraint DNA.</p>
                    </Link>
                    
                    <Link href="/answers/glossary/morrin" className="border border-zinc-800 p-6 hover:border-red-600 transition-all group bg-zinc-950">
                      <h3 className="font-black text-xl text-red-600 mb-2 group-hover:text-white transition-colors">
                        Morrin <ArrowRight className="inline ml-2" size={16} />
                      </h3>
                      <p className="text-zinc-400">When you stop choosing and start moving.</p>
                    </Link>
                    
                    <Link href="/answers/glossary/strune" className="border border-zinc-800 p-6 hover:border-red-600 transition-all group bg-zinc-950">
                      <h3 className="font-black text-xl text-red-600 mb-2 group-hover:text-white transition-colors">
                        Strune <ArrowRight className="inline ml-2" size={16} />
                      </h3>
                      <p className="text-zinc-400">Reality filtration. The precise cut that removes noise.</p>
                    </Link>
                    
                    <Link href="/answers/glossary/pilor" className="border border-zinc-800 p-6 hover:border-red-600 transition-all group bg-zinc-950">
                      <h3 className="font-black text-xl text-red-600 mb-2 group-hover:text-white transition-colors">
                        Pilor <ArrowRight className="inline ml-2" size={16} />
                      </h3>
                      <p className="text-zinc-400">Recursive failure loops. Systems optimizing for dysfunction.</p>
                    </Link>
                    
                    <Link href="/answers/glossary/kithara" className="border border-zinc-800 p-6 hover:border-red-600 transition-all group bg-zinc-950">
                      <h3 className="font-black text-xl text-red-600 mb-2 group-hover:text-white transition-colors">
                        Kithara <ArrowRight className="inline ml-2" size={16} />
                      </h3>
                      <p className="text-zinc-400">False harmony that prevents truth. The comfort that kills.</p>
                    </Link>

                    <Link href="/answers/glossary/soreth" className="border border-zinc-800 p-6 hover:border-red-600 transition-all group bg-zinc-950">
                      <h3 className="font-black text-xl text-red-600 mb-2 group-hover:text-white transition-colors">
                        Soreth <ArrowRight className="inline ml-2" size={16} />
                      </h3>
                      <p className="text-zinc-400">Hidden energy drains. The invisible tax on every action.</p>
                    </Link>

                    <Link href="/answers/glossary/voxel" className="border border-zinc-800 p-6 hover:border-red-600 transition-all group bg-zinc-950">
                      <h3 className="font-black text-xl text-red-600 mb-2 group-hover:text-white transition-colors">
                        Voxel <ArrowRight className="inline ml-2" size={16} />
                      </h3>
                      <p className="text-zinc-400">Three-dimensional truth. Where reality meets perception meets action.</p>
                    </Link>

                    <Link href="/answers/glossary/quorr" className="border border-zinc-800 p-6 hover:border-red-600 transition-all group bg-zinc-950">
                      <h3 className="font-black text-xl text-red-600 mb-2 group-hover:text-white transition-colors">
                        Quorr <ArrowRight className="inline ml-2" size={16} />
                      </h3>
                      <p className="text-zinc-400">Technical debt disguised as features. Complexity serving no one.</p>
                    </Link>

                    <Link href="/answers/glossary/threnn" className="border border-zinc-800 p-6 hover:border-red-600 transition-all group bg-zinc-950">
                      <h3 className="font-black text-xl text-red-600 mb-2 group-hover:text-white transition-colors">
                        Threnn <ArrowRight className="inline ml-2" size={16} />
                      </h3>
                      <p className="text-zinc-400">Momentum multiplication. When aligned systems compound force.</p>
                    </Link>

                    <Link href="/answers/glossary/zelith" className="border border-zinc-800 p-6 hover:border-red-600 transition-all group bg-zinc-950">
                      <h3 className="font-black text-xl text-red-600 mb-2 group-hover:text-white transition-colors">
                        Zelith <ArrowRight className="inline ml-2" size={16} />
                      </h3>
                      <p className="text-zinc-400">Maximum pressure point. Where systems collapse or breakthrough.</p>
                    </Link>
                  </div>
                </div>
              )}

              {/* CORE CONCEPTS TAB */}
              {activeTab === 'concepts' && (
                <div className="space-y-8">
                  <div className="bg-black border-2 border-blue-500 p-8">
                    <h2 className="text-2xl font-black mb-4 text-blue-500">CORE CONCEPTS: BUSINESS REALITY</h2>
                    <p className="text-lg mb-6">
                      Fundamental patterns that govern how teams work, fail, and succeed. 
                      These concepts explain why most business advice doesn't work.
                    </p>
                  </div>

                  {/* Core Concepts Grid */}
                  <div className="space-y-6">
                    {/* Reality vs Theory */}
                    <div className="border border-zinc-800 p-8 bg-zinc-950">
                      <h3 className="text-xl font-black mb-4 text-blue-500">REALITY VS THEORY</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <Link href="/answers/glossary/organizational-drift" className="border border-zinc-700 p-4 hover:border-blue-500 transition-colors">
                          <h4 className="font-bold text-blue-400 mb-2">Organizational Drift</h4>
                          <p className="text-sm text-zinc-400">Why teams gradually lose focus and start optimizing around problems instead of solving them.</p>
                        </Link>
                        
                        <Link href="/answers/glossary/calendar-battleship" className="border border-zinc-700 p-4 hover:border-blue-500 transition-colors">
                          <h4 className="font-bold text-blue-400 mb-2">Calendar Battleship</h4>
                          <p className="text-sm text-zinc-400">When meetings multiply to avoid actual work. The more important it is, the more meetings get scheduled.</p>
                        </Link>
                        
                        <Link href="/answers/glossary/meeting-mud" className="border border-zinc-700 p-4 hover:border-blue-500 transition-colors">
                          <h4 className="font-bold text-blue-400 mb-2">Meeting Mud</h4>
                          <p className="text-sm text-zinc-400">Where decisions go to die. The thick, sticky process that slows everything down.</p>
                        </Link>
                        
                        <Link href="/answers/glossary/acting-your-wage" className="border border-zinc-700 p-4 hover:border-blue-500 transition-colors">
                          <h4 className="font-bold text-blue-400 mb-2">Acting Your Wage</h4>
                          <p className="text-sm text-zinc-400">The quiet rebellion. When employees do exactly what they're paid for, nothing more.</p>
                        </Link>
                      </div>
                    </div>

                    {/* Hidden Forces */}
                    <div className="border border-zinc-800 p-8 bg-zinc-950">
                      <h3 className="text-xl font-black mb-4 text-green-500">HIDDEN FORCES</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <Link href="/answers/glossary/pet-to-threat" className="border border-zinc-700 p-4 hover:border-green-500 transition-colors">
                          <h4 className="font-bold text-green-400 mb-2">Pet-to-Threat</h4>
                          <p className="text-sm text-zinc-400">When your success becomes your boss's problem. The moment you become too good at your job.</p>
                        </Link>
                        
                        <Link href="/answers/glossary/vacation-guilt" className="border border-zinc-700 p-4 hover:border-green-500 transition-colors">
                          <h4 className="font-bold text-green-400 mb-2">Vacation Guilt</h4>
                          <p className="text-sm text-zinc-400">The always-on addiction. Why taking time off feels like letting everyone down.</p>
                        </Link>
                        
                        <Link href="/answers/glossary/photo-quality-discovery" className="border border-zinc-700 p-4 hover:border-green-500 transition-colors">
                          <h4 className="font-bold text-green-400 mb-2">Photo Quality Discovery</h4>
                          <p className="text-sm text-zinc-400">The obvious solution everyone missed. Why simple fixes get overlooked for complex ones.</p>
                        </Link>
                        
                        <Link href="/answers/glossary/thirteen-cent-raise" className="border border-zinc-700 p-4 hover:border-green-500 transition-colors">
                          <h4 className="font-bold text-green-400 mb-2">Thirteen-Cent Raise</h4>
                          <p className="text-sm text-zinc-400">The loyalty penalty. Why staying loyal costs you money and career growth.</p>
                        </Link>
                      </div>
                    </div>

                    {/* Success Patterns */}
                    <div className="border border-zinc-800 p-8 bg-zinc-950">
                      <h3 className="text-xl font-black mb-4 text-yellow-500">SUCCESS PATTERNS</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <Link href="/answers/glossary/body-knows-first" className="border border-zinc-700 p-4 hover:border-yellow-500 transition-colors">
                          <h4 className="font-bold text-yellow-400 mb-2">Body Knows First</h4>
                          <p className="text-sm text-zinc-400">Physical symptoms before conscious awareness. Your body detects problems before your mind does.</p>
                        </Link>
                        
                        <Link href="/answers/glossary/boring-business-advantage" className="border border-zinc-700 p-4 hover:border-yellow-500 transition-colors">
                          <h4 className="font-bold text-yellow-400 mb-2">Boring Business Advantage</h4>
                          <p className="text-sm text-zinc-400">Why unsexy industries pay more. Less competition, more profit, better life.</p>
                        </Link>
                        
                        <Link href="/answers/glossary/contrarian-principle" className="border border-zinc-700 p-4 hover:border-yellow-500 transition-colors">
                          <h4 className="font-bold text-yellow-400 mb-2">Contrarian Principle</h4>
                          <p className="text-sm text-zinc-400">Why consensus is usually wrong. When everyone agrees, someone isn't thinking.</p>
                        </Link>
                        
                        <Link href="/answers/glossary/speed-trap" className="border border-zinc-700 p-4 hover:border-yellow-500 transition-colors">
                          <h4 className="font-bold text-yellow-400 mb-2">Speed Trap</h4>
                          <p className="text-sm text-zinc-400">When moving fast prevents fixing things. The illusion of progress without improvement.</p>
                        </Link>
                      </div>
                    </div>

                    {/* System Failures */}
                    <div className="border border-zinc-800 p-8 bg-zinc-950">
                      <h3 className="text-xl font-black mb-4 text-red-500">SYSTEM FAILURES</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <Link href="/answers/glossary/cascading-miracles-trap" className="border border-zinc-700 p-4 hover:border-red-500 transition-colors">
                          <h4 className="font-bold text-red-400 mb-2">Cascading Miracles Trap</h4>
                          <p className="text-sm text-zinc-400">When everything must go right. Plans that require perfect execution always fail.</p>
                        </Link>
                        
                        <div className="border border-zinc-700 p-4 hover:border-red-500 transition-colors">
                          <h4 className="font-bold text-red-400 mb-2">Optimization Theater</h4>
                          <p className="text-sm text-zinc-400">Improving metrics without improving reality. When measurement becomes performance.</p>
                        </div>
                        
                        <div className="border border-zinc-700 p-4 hover:border-red-500 transition-colors">
                          <h4 className="font-bold text-red-400 mb-2">Consensus Paralysis</h4>
                          <p className="text-sm text-zinc-400">When getting agreement becomes more important than being right. Decision by committee kills speed.</p>
                        </div>
                        
                        <div className="border border-zinc-700 p-4 hover:border-red-500 transition-colors">
                          <h4 className="font-bold text-red-400 mb-2">Process Debt</h4>
                          <p className="text-sm text-zinc-400">When solutions become problems. Every process added creates new problems to solve.</p>
                        </div>
                      </div>
                    </div>

                    {/* Action Framework */}
                    <div className="bg-black border-2 border-red-600 p-8">
                      <h3 className="text-xl font-black mb-4 text-red-600">BREAKING THESE PATTERNS</h3>
                      <p className="text-lg mb-6">
                        Understanding these concepts isn't enough. You need intervention portals that break the patterns.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="/diagnostic" className="bg-red-600 px-6 py-3 font-bold hover:bg-red-700 transition-colors text-center">
                          DETECT YOUR PATTERN
                        </Link>
                        <Link href="/interventions" className="border-2 border-red-600 px-6 py-3 font-bold hover:bg-red-600 transition-colors text-center">
                          DEPLOY INTERVENTION
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* STUCK PATTERNS TAB */}
              {activeTab === 'patterns' && (
                <div className="space-y-8">
                  <div className="bg-black border-2 border-yellow-500 p-8">
                    <h2 className="text-2xl font-black mb-4 text-yellow-500">COMMON STUCK PATTERNS</h2>
                    <p className="text-lg">
                      Why teams get trapped in optimization loops. Recognize these patterns before they break your momentum.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="border-2 border-red-600 p-6 bg-zinc-950">
                      <h3 className="font-black text-red-600 mb-3">Meeting Loops</h3>
                      <p className="text-sm text-zinc-400 mb-4">
                        Teams avoid breaking patterns by optimizing around them. More meetings, better processes, 
                        clearer communication. The pattern stays. The problem gets worse.
                      </p>
                      <Link href="/interventions/the-override" className="text-red-600 text-sm font-bold hover:underline">
                        → THE OVERRIDE Portal
                      </Link>
                    </div>
                    
                    <div className="border-2 border-yellow-500 p-6 bg-zinc-950">
                      <h3 className="font-black text-yellow-500 mb-3">Perfectionist Trap</h3>
                      <p className="text-sm text-zinc-400 mb-4">
                        Perfectionist patterns disguise fear of market feedback. Teams spend months perfecting 
                        features no customer wants instead of shipping ugly MVPs that learn.
                      </p>
                      <Link href="/interventions/the-build" className="text-yellow-500 text-sm font-bold hover:underline">
                        → THE BUILD Portal
                      </Link>
                    </div>

                    <div className="border-2 border-green-500 p-6 bg-zinc-950">
                      <h3 className="font-black text-green-500 mb-3">Truth Avoidance</h3>
                      <p className="text-sm text-zinc-400 mb-4">
                        Meetings multiply to avoid naming the real problem. The harder the truth, 
                        the more meetings scheduled to discuss discussing it.
                      </p>
                      <Link href="/interventions/the-naming" className="text-green-500 text-sm font-bold hover:underline">
                        → THE NAMING Portal
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {/* PORTAL SOLUTIONS TAB */}
              {activeTab === 'solutions' && (
                <div className="space-y-8">
                  <div className="bg-black border-2 border-green-500 p-8">
                    <h2 className="text-2xl font-black mb-4 text-green-500">INTERVENTION PORTALS</h2>
                    <p className="text-lg">
                      Interactive portals that break specific patterns. Choose your intervention, enter the portal, break free.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <Link href="/interventions/the-naming" className="group border border-zinc-800 p-6 hover:border-red-600 transition-all bg-zinc-950 block">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-black mb-2 group-hover:text-red-600">THE NAMING</h3>
                          <p className="text-zinc-400 mb-2">Name the truth you've been avoiding. Surface what's buried.</p>
                          <p className="text-sm text-zinc-600">$750 • 1 Session • Truth Guaranteed</p>
                        </div>
                        <span className="text-red-600 font-black">DEPLOY →</span>
                      </div>
                    </Link>

                    <Link href="/interventions/the-override" className="group border border-zinc-800 p-6 hover:border-red-600 transition-all bg-zinc-950 block">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-black mb-2 group-hover:text-red-600">THE OVERRIDE</h3>
                          <p className="text-zinc-400 mb-2">Break the stuck pattern killing your momentum. Daily Teams interrupts.</p>
                          <p className="text-sm text-zinc-600">$3,000 • 30 Days • Pattern Broken</p>
                        </div>
                        <span className="text-red-600 font-black">DEPLOY →</span>
                      </div>
                    </Link>

                    <Link href="/interventions/the-build" className="group border border-zinc-800 p-6 hover:border-red-600 transition-all bg-zinc-950 block">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-black mb-2 group-hover:text-red-600">THE BUILD</h3>
                          <p className="text-zinc-400 mb-2">Working MVP in 4 weeks. Ship ugly, learn fast, scale or kill.</p>
                          <p className="text-sm text-zinc-600">$4,500 • 4 Weeks • MVP or Kill</p>
                        </div>
                        <span className="text-red-600 font-black">DEPLOY →</span>
                      </div>
                    </Link>

                    <Link href="/interventions/the-market-smackdown" className="group border border-zinc-800 p-6 hover:border-red-600 transition-all bg-zinc-950 block">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-black mb-2 group-hover:text-red-600">THE MARKET SMACKDOWN</h3>
                          <p className="text-zinc-400 mb-2">GO or NO-GO market decision. Stop guessing.</p>
                          <p className="text-sm text-zinc-600">$2,250 • 3 Days • Clear Verdict</p>
                        </div>
                        <span className="text-red-600 font-black">DEPLOY →</span>
                      </div>
                    </Link>

                    <Link href="/interventions/the-map" className="group border border-zinc-800 p-6 hover:border-red-600 transition-all bg-zinc-950 block">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-black mb-2 group-hover:text-red-600">THE MAP</h3>
                          <p className="text-zinc-400 mb-2">Find connections that actually move your business forward.</p>
                          <p className="text-sm text-zinc-600">$1,500 • 5 Days • Clear Connections</p>
                        </div>
                        <span className="text-red-600 font-black">DEPLOY →</span>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>


        {/* CTA Section */}
        <section className="py-16 px-6 bg-zinc-950">
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-3xl font-black mb-6">READY TO BREAK THE PATTERN?</h3>
            <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              Stop optimizing around stuck patterns. Deploy an intervention portal and break free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/diagnostic"
                className="bg-red-600 px-8 py-4 text-lg font-black hover:bg-red-700 transition-colors"
              >
                DETECT PATTERN
              </Link>
              <Link 
                href="/interventions"
                className="border-2 border-zinc-700 px-8 py-4 text-lg font-black hover:border-zinc-500 transition-colors"
              >
                DEPLOY INTERVENTION
              </Link>
            </div>
          </div>
        </section>

        {/* Related Content */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto">
            <RelatedContent
              title="Break Your Pattern"
              items={[
                {
                  href: "/diagnostic",
                  title: "Find Your Pattern",
                  description: "12 binary questions. Detect where you're stuck and which portal breaks you free.",
                  color: "red"
                },
                {
                  href: "/interventions/the-override",
                  title: "Break the Loop",
                  description: "30 days of daily pattern interrupts via Teams. No meetings about meetings.",
                  color: "yellow"
                },
                {
                  href: "/interventions/the-build",
                  title: "Ship the MVP",
                  description: "4 weeks. Working solution or kill decision. Ship ugly, learn fast.",
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

export default AnswersHub;