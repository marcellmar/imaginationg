import type { NextPage } from 'next';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import SEOHead from '../../components/SEOHead';
import Navigation from '../../components/Navigation';
import RelatedContent from '../../components/RelatedContent';
import { Check, AlertCircle, Calendar, Video, FileText, BarChart3, Clock, Users, Hammer, Zap, Target } from 'lucide-react';

const TheBuildPage: NextPage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [buildData, setBuildData] = useState({
    coreFunction: '',
    userProblem: '',
    successMetric: '',
    constraints: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleBuildSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    console.log('Build brief submitted:', buildData);
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: FileText },
    { id: 'brief', label: 'Build Brief', icon: Target },
    { id: 'sprint', label: 'Live Sprint', icon: Zap },
    { id: 'ship', label: 'Ship & Test', icon: BarChart3 },
    { id: 'book', label: 'Book Now', icon: Calendar }
  ];

  return (
    <>
      <SEOHead
        title="THE BUILD - MVP in 4 Weeks | IMAGINATION G"
        description="Build working MVP in 4 weeks. Get first paying customer. Proof of concept or kill it. $4,500."
        ogType="article"
        ogImage="/images/og-services.svg"
      />

      <div className="min-h-screen bg-black text-white">
        <Navigation />

        {/* Hero Section */}
        <section className="pt-24 pb-8 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-6xl mx-auto">
              {/* System Status Badge */}
              <div className="inline-block mb-8 text-green-400 text-xs font-mono bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-full">
                <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                INTERVENTION PORTAL: THE BUILD
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1]">
                THE BUILD<span className="text-red-600">.</span>
              </h1>
              
              <p className="text-xl text-zinc-400 mb-8 max-w-2xl">
                Working MVP in 4 weeks. Get first paying customer. Proof of concept or kill it. Ship ugly, learn fast.
              </p>

              <div className="flex flex-wrap gap-6 items-center mb-8">
                <span className="text-4xl font-black">$4,500</span>
                <span className="text-zinc-500">|</span>
                <span className="text-lg text-zinc-400">4 Weeks. MVP or Kill.</span>
                <span className="text-zinc-500">|</span>
                <span className="text-sm text-green-400 bg-green-400/10 px-3 py-1 rounded-full">SHIP OR REFUND</span>
              </div>
            </div>
          </div>
        </section>

        {/* Portal Navigation */}
        <section className="px-6 border-b border-zinc-800">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-6xl mx-auto">
              <div className="flex overflow-x-auto space-x-0 border-b border-zinc-800">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-2 px-6 py-4 font-bold transition-all whitespace-nowrap ${
                        activeTab === tab.id
                          ? 'text-red-600 border-b-2 border-red-600 bg-red-600/5'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      <Icon size={18} />
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Portal Content */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-6xl mx-auto">
              
              {/* Overview Tab */}
              {activeTab === 'overview' && (
                <div className="space-y-12">
                  <div>
                    <h2 className="text-3xl font-black mb-8">SHIP UGLY, LEARN FAST</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <div className="flex items-start gap-4">
                          <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                          <p className="text-lg">Core function definition and scope</p>
                        </div>
                        <div className="flex items-start gap-4">
                          <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                          <p className="text-lg">Working MVP in 4 weeks</p>
                        </div>
                        <div className="flex items-start gap-4">
                          <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                          <p className="text-lg">Daily build progress via Teams</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-start gap-4">
                          <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                          <p className="text-lg">First paying customer acquisition</p>
                        </div>
                        <div className="flex items-start gap-4">
                          <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                          <p className="text-lg">Real market feedback (brutal honesty)</p>
                        </div>
                        <div className="flex items-start gap-4">
                          <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                          <p className="text-lg">Kill or scale decision with data</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-zinc-950 border border-zinc-800 p-8">
                    <h3 className="text-xl font-black mb-4">THE SIMPLE PROCESS</h3>
                    <div className="space-y-6">
                      <div className="flex gap-6 items-start">
                        <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">WEEK 1</div>
                        <div className="flex-1">
                          <p className="text-lg mb-2">Strip to core: What's the one thing that solves the problem?</p>
                          <p className="text-zinc-400">Kill features, focus function, define success metric</p>
                        </div>
                      </div>
                      <div className="flex gap-6 items-start">
                        <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">WEEK 2-3</div>
                        <div className="flex-1">
                          <p className="text-lg mb-2">Build the ugly version that actually works</p>
                          <p className="text-zinc-400">Daily progress via Teams, no perfection allowed</p>
                        </div>
                      </div>
                      <div className="flex gap-6 items-start">
                        <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">WEEK 4</div>
                        <div className="flex-1">
                          <p className="text-lg mb-2">Ship to real users, get first paying customer</p>
                          <p className="text-zinc-400">Launch, measure, decide: scale or kill based on data</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="border border-zinc-800 p-6">
                      <h3 className="font-bold text-red-600 mb-3">FOUNDERS</h3>
                      <p className="text-zinc-400">Who've been perfecting instead of shipping for months</p>
                    </div>
                    <div className="border border-zinc-800 p-6">
                      <h3 className="font-bold text-red-600 mb-3">TEAMS</h3>
                      <p className="text-zinc-400">Ready to build ugly and test fast with real users</p>
                    </div>
                    <div className="border border-zinc-800 p-6">
                      <h3 className="font-bold text-red-600 mb-3">IDEAS</h3>
                      <p className="text-zinc-400">That need market reality more than feature refinement</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Build Brief Tab */}
              {activeTab === 'brief' && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-black mb-4">BUILD BRIEF</h2>
                    <p className="text-xl text-zinc-400 mb-8">Define the core function and success metric. 5 minutes to scope what we're building.</p>
                  </div>

                  {!isSubmitted ? (
                    <form onSubmit={handleBuildSubmit} className="space-y-8">
                      <div className="bg-zinc-950 border border-zinc-800 p-8">
                        <h3 className="text-xl font-bold mb-6">MVP DEFINITION FORM</h3>
                        
                        <div className="space-y-6">
                          <div>
                            <label className="block text-lg font-bold mb-3">What's the one core function this solves?</label>
                            <p className="text-zinc-400 text-sm mb-4">Not features. Not nice-to-haves. The one thing it must do.</p>
                            <textarea
                              value={buildData.coreFunction}
                              onChange={(e) => setBuildData({...buildData, coreFunction: e.target.value})}
                              className="w-full h-32 bg-black border border-zinc-700 p-4 text-white resize-none focus:border-red-600 focus:outline-none"
                              placeholder="Lets users schedule meetings without email back-and-forth...&#10;Tracks expenses and automatically categorizes them...&#10;Finds the cheapest flight combinations in real-time..."
                              required
                            />
                          </div>

                          <div>
                            <label className="block text-lg font-bold mb-3">What problem does this solve for users?</label>
                            <p className="text-zinc-400 text-sm mb-4">Pain point, frustration, or inefficiency they currently face.</p>
                            <textarea
                              value={buildData.userProblem}
                              onChange={(e) => setBuildData({...buildData, userProblem: e.target.value})}
                              className="w-full h-32 bg-black border border-zinc-700 p-4 text-white resize-none focus:border-red-600 focus:outline-none"
                              placeholder="Wasting 2 hours per week on email scheduling...&#10;Losing receipts and missing tax deductions...&#10;Paying 30% more for flights due to complex routing..."
                              required
                            />
                          </div>

                          <div>
                            <label className="block text-lg font-bold mb-3">How will we know it's working?</label>
                            <p className="text-zinc-400 text-sm mb-4">Simple success metric. What number proves people want this?</p>
                            <textarea
                              value={buildData.successMetric}
                              onChange={(e) => setBuildData({...buildData, successMetric: e.target.value})}
                              className="w-full h-32 bg-black border border-zinc-700 p-4 text-white resize-none focus:border-red-600 focus:outline-none"
                              placeholder="10 people pay $20/month within 2 weeks of launch...&#10;Users save at least 1 hour per week measurably...&#10;50% of users return and use it again within 7 days..."
                              required
                            />
                          </div>

                          <div>
                            <label className="block text-lg font-bold mb-3">What constraints do we have?</label>
                            <p className="text-zinc-400 text-sm mb-4">Budget, timeline, technical, team, or resource limitations.</p>
                            <textarea
                              value={buildData.constraints}
                              onChange={(e) => setBuildData({...buildData, constraints: e.target.value})}
                              className="w-full h-32 bg-black border border-zinc-700 p-4 text-white resize-none focus:border-red-600 focus:outline-none"
                              placeholder="Must integrate with existing CRM system...&#10;Can't spend more than $1000 on third-party tools...&#10;Team has no mobile development experience..."
                              required
                            />
                          </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-zinc-800">
                          <button
                            type="submit"
                            className="bg-red-600 px-8 py-4 text-lg font-black hover:bg-red-700 transition-colors"
                          >
                            SUBMIT BUILD BRIEF
                          </button>
                        </div>
                      </div>
                    </form>
                  ) : (
                    <div className="bg-green-500/10 border border-green-500 p-8 text-center">
                      <Check className="text-green-500 mx-auto mb-4" size={48} />
                      <h3 className="text-xl font-bold text-green-500 mb-4">BUILD BRIEF LOCKED</h3>
                      <p className="text-lg mb-6">Scope defined. Build sprint starts in 48 hours.</p>
                      <p className="text-zinc-400">You'll receive daily progress updates via Teams starting Monday.</p>
                    </div>
                  )}
                </div>
              )}

              {/* Live Sprint Tab */}
              {activeTab === 'sprint' && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-black mb-4">LIVE BUILD SPRINT</h2>
                    <p className="text-xl text-zinc-400 mb-8">Daily progress updates. Real builds, real progress. No perfection allowed.</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-zinc-950 border border-zinc-800 p-6">
                      <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                        <Hammer className="text-red-600" size={24} />
                        BUILD PROGRESS
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span>Core Function Build</span>
                          <span className="text-yellow-400">IN PROGRESS</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>User Interface</span>
                          <span className="text-zinc-500">PENDING</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Basic Testing</span>
                          <span className="text-zinc-500">PENDING</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>User Onboarding</span>
                          <span className="text-zinc-500">PENDING</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Launch Preparation</span>
                          <span className="text-zinc-500">PENDING</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-zinc-950 border border-zinc-800 p-6">
                      <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                        <Zap className="text-red-600" size={24} />
                        DAILY UPDATES
                      </h3>
                      <div className="space-y-4">
                        <p className="text-zinc-400 text-sm">Live build progress will appear here:</p>
                        <div className="bg-black border border-zinc-700 p-3 min-h-[200px]">
                          <p className="text-zinc-500 text-sm">[Daily progress updates, blockers, and decisions will be posted here during the 4-week sprint]</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-zinc-950 border border-zinc-800 p-6">
                    <h3 className="text-xl font-bold mb-4">SPRINT SCHEDULE</h3>
                    <div className="grid md:grid-cols-4 gap-4">
                      <div className="text-center">
                        <div className="text-red-600 font-bold mb-2">WEEK 1</div>
                        <p className="text-sm text-zinc-400">Core function build & basic structure</p>
                      </div>
                      <div className="text-center">
                        <div className="text-red-600 font-bold mb-2">WEEK 2</div>
                        <p className="text-sm text-zinc-400">User interface & interaction flow</p>
                      </div>
                      <div className="text-center">
                        <div className="text-red-600 font-bold mb-2">WEEK 3</div>
                        <p className="text-sm text-zinc-400">Testing, debugging & optimization</p>
                      </div>
                      <div className="text-center">
                        <div className="text-red-600 font-bold mb-2">WEEK 4</div>
                        <p className="text-sm text-zinc-400">Launch prep & first user onboarding</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-green-500/10 border border-green-500 p-6">
                      <h4 className="font-bold text-green-500 mb-3 flex items-center gap-2">
                        <Check size={20} />
                        WHAT GETS BUILT
                      </h4>
                      <div className="text-zinc-400 text-sm space-y-2">
                        <p>• Core function that solves the user problem</p>
                        <p>• Minimal viable interface (ugly but functional)</p>
                        <p>• Basic user onboarding flow</p>
                        <p>• Payment/signup mechanism</p>
                      </div>
                    </div>
                    <div className="bg-red-500/10 border border-red-500 p-6">
                      <h4 className="font-bold text-red-500 mb-3 flex items-center gap-2">
                        <AlertCircle size={20} />
                        WHAT GETS CUT
                      </h4>
                      <div className="text-zinc-400 text-sm space-y-2">
                        <p>• Beautiful design and animations</p>
                        <p>• Advanced features and nice-to-haves</p>
                        <p>• Perfect mobile responsiveness</p>
                        <p>• Comprehensive error handling</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Ship & Test Tab */}
              {activeTab === 'ship' && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-black mb-4">SHIP & TEST</h2>
                    <p className="text-xl text-zinc-400 mb-8">Launch to real users. Get first paying customer. Measure what matters. Scale or kill based on data.</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-zinc-950 border border-zinc-800 p-6">
                      <h3 className="text-xl font-bold mb-4">LAUNCH CHECKLIST</h3>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <Check className="text-green-500" size={18} />
                          <span className="text-sm">Core function working end-to-end</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Check className="text-zinc-500" size={18} />
                          <span className="text-sm text-zinc-500">Payment system integrated</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Check className="text-zinc-500" size={18} />
                          <span className="text-sm text-zinc-500">Basic user onboarding flow</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Check className="text-zinc-500" size={18} />
                          <span className="text-sm text-zinc-500">Analytics tracking setup</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Check className="text-zinc-500" size={18} />
                          <span className="text-sm text-zinc-500">First 10 users identified</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-zinc-950 border border-zinc-800 p-6">
                      <h3 className="text-xl font-bold mb-4">FIRST CUSTOMER TARGET</h3>
                      <div className="space-y-4">
                        <div className="bg-black border border-zinc-700 p-4">
                          <p className="text-sm font-bold text-green-400 mb-2">SUCCESS METRIC</p>
                          <div className="h-16 border border-zinc-800 p-2 text-zinc-500 text-xs">
                            [Your specific success metric from the build brief will be tracked here]
                          </div>
                        </div>
                        <div className="bg-black border border-zinc-700 p-4">
                          <p className="text-sm font-bold text-yellow-400 mb-2">CURRENT STATUS</p>
                          <div className="h-16 border border-zinc-800 p-2 text-zinc-500 text-xs">
                            [Real-time progress toward first paying customer]
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-zinc-950 border border-zinc-800 p-6">
                    <h3 className="text-xl font-bold mb-6">SCALE OR KILL DECISION</h3>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="bg-green-500/10 border border-green-500 p-6">
                        <h4 className="font-bold text-green-500 mb-3">SCALE SIGNALS</h4>
                        <div className="space-y-2 text-sm text-zinc-400">
                          <p>• Hit success metric within 2 weeks</p>
                          <p>• Users actively engaging daily</p>
                          <p>• Word-of-mouth referrals happening</p>
                          <p>• Clear path to more customers</p>
                        </div>
                      </div>
                      <div className="bg-red-500/10 border border-red-500 p-6">
                        <h4 className="font-bold text-red-500 mb-3">KILL SIGNALS</h4>
                        <div className="space-y-2 text-sm text-zinc-400">
                          <p>• No paying customers after 3 weeks</p>
                          <p>• Users try once and never return</p>
                          <p>• Core problem not actually solved</p>
                          <p>• Can't find product-market fit</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-500/10 border border-yellow-500 p-6">
                    <h3 className="text-xl font-bold text-yellow-500 mb-4">DATA-DRIVEN DECISION</h3>
                    <p className="text-zinc-400">After 4 weeks, we'll have real data. Based on user behavior and success metrics, we'll recommend: scale up investment, pivot the approach, or kill the project and try something else.</p>
                  </div>
                </div>
              )}

              {/* Book Now Tab */}
              {activeTab === 'book' && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-black mb-4">BOOK THE BUILD</h2>
                    <p className="text-xl text-zinc-400 mb-8">4 weeks to working MVP and first paying customer. Ship ugly, learn fast, scale or kill based on data.</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-zinc-950 border border-zinc-800 p-8">
                      <h3 className="text-2xl font-bold mb-6">INVESTMENT: $4,500</h3>
                      <div className="space-y-4 mb-8">
                        <div className="flex items-center gap-3">
                          <Check className="text-green-500" size={18} />
                          <span>Core function definition & scope</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Check className="text-green-500" size={18} />
                          <span>Working MVP in 4 weeks</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Check className="text-green-500" size={18} />
                          <span>Daily build progress via Teams</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Check className="text-green-500" size={18} />
                          <span>Launch to real users</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Check className="text-green-500" size={18} />
                          <span>First paying customer acquisition</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Check className="text-green-500" size={18} />
                          <span>Scale or kill recommendation</span>
                        </div>
                      </div>
                      
                      <Link 
                        href="https://outlook.office.com/owa/calendar/IG@imaginationg.studio/bookings/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full bg-red-600 px-8 py-4 text-lg font-black text-center hover:bg-red-700 transition-colors"
                      >
                        SHIP UGLY →
                      </Link>
                    </div>

                    <div className="space-y-6">
                      <div className="bg-yellow-500/10 border border-yellow-500 p-6">
                        <h4 className="font-bold text-yellow-500 mb-3">COST OF PERFECTING</h4>
                        <p className="text-zinc-400 mb-3">How much are you losing by not shipping?</p>
                        <div className="text-sm space-y-1">
                          <p>• Average perfection delay: 6+ months</p>
                          <p>• Market opportunity lost: $50,000+</p>
                          <p>• Competitor advantage: Immeasurable</p>
                          <p>• Team frustration cost: High turnover</p>
                        </div>
                        <p className="text-yellow-500 font-bold mt-3">Ship now, perfect later</p>
                      </div>

                      <div className="bg-blue-500/10 border border-blue-500 p-6">
                        <h4 className="font-bold text-blue-500 mb-3">TEAMS COLLABORATION</h4>
                        <p className="text-zinc-400 mb-3">Daily build updates through your Microsoft Teams.</p>
                        <div className="text-sm space-y-1">
                          <p>• Real-time progress tracking</p>
                          <p>• Quick daily check-ins</p>
                          <p>• Instant feedback and decisions</p>
                          <p>• Secure team communication</p>
                        </div>
                      </div>

                      <div className="bg-zinc-900 border border-zinc-700 p-6">
                        <h4 className="font-bold mb-3">NOT SURE THIS IS RIGHT?</h4>
                        <p className="text-zinc-400 mb-4">Take the diagnostic to see if you need building or a different intervention.</p>
                        <Link 
                          href="/diagnostic"
                          className="inline-block border border-zinc-600 px-4 py-2 text-sm font-bold hover:border-zinc-400 transition-colors"
                        >
                          TAKE THE DIAGNOSTIC
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-16 px-6 border-t border-zinc-800">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-6xl mx-auto">
              <div className="flex justify-between items-center">
                <Link 
                  href="/interventions/the-override"
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  ← Previous: THE OVERRIDE
                </Link>
                <Link 
                  href="/interventions"
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  Back to All Interventions →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Related Content */}
        <section className="py-16 px-6 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <RelatedContent
              title="Learn The Language"
              items={[
                {
                  href: "/answers/glossary/first-blood",
                  title: "Why First Blood Matters",
                  description: "The first cut that proves you're alive. Ship or die.",
                  color: "red"
                },
                {
                  href: "/answers/glossary/quorr",
                  title: "Escape Your Quorr",
                  description: "Technical debt disguised as features. Cut to core.",
                  color: "yellow"
                },
                {
                  href: "/diagnostic",
                  title: "Detect Your Signal",
                  description: "19 binary questions. Find where truth is buried.",
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

export default TheBuildPage;