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
    { id: 'overview', label: 'GPI Impact', icon: FileText },
    { id: 'brief', label: 'Velocity Audit', icon: Target },
    { id: 'sprint', label: 'Rapid Build', icon: Zap },
    { id: 'ship', label: 'GPI Tracking', icon: BarChart3 },
    { id: 'book', label: 'Deploy', icon: Calendar }
  ];

  return (
    <>
      <SEOHead
        title="THE BUILD - Accelerate Knowledge Velocity | IMAGINATION G"
        description="Target Knowledge Velocity and Error Correction dimensions. Ship in 4 weeks. Get feedback loops running. -1.2 GPI points. Move toward field state."
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
                Accelerate knowledge velocity. Get feedback loops running in weeks not months. Ship, learn, correct errors fast. Field-state operations.
              </p>

              <div className="flex flex-wrap gap-6 items-center mb-6">
                <span className="text-4xl font-black">$4,500</span>
                <span className="text-zinc-500">|</span>
                <span className="text-lg text-zinc-400">4 Weeks. MVP or Kill.</span>
                <span className="text-zinc-500">|</span>
                <span className="text-sm text-green-400 bg-green-400/10 px-3 py-1 rounded-full">SHIP OR REFUND</span>
              </div>

              {/* GPI Targeting */}
              <div className="flex flex-wrap items-center gap-4 mb-8 p-4 bg-zinc-950 border border-zinc-800 rounded-lg">
                <Target className="text-red-600" size={20} />
                <span className="text-xs text-zinc-500 uppercase">GPI Targets:</span>
                <span className="text-sm font-mono bg-red-600/20 text-red-400 px-3 py-1 rounded">Knowledge Velocity</span>
                <span className="text-sm font-mono bg-red-600/20 text-red-400 px-3 py-1 rounded">Error Correction</span>
                <span className="text-zinc-700">|</span>
                <span className="text-xs text-zinc-500">
                  Recommended when <span className="font-mono text-yellow-400">GPI &gt; 6.0</span>
                </span>
                <span className="text-zinc-700">|</span>
                <span className="text-xs text-zinc-500">
                  Expected: <span className="font-mono text-green-400">-1.2 points</span>
                </span>
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
                  {/* GPI Impact Summary */}
                  <div className="bg-zinc-950 border border-red-600/30 p-8">
                    <h2 className="text-2xl font-black mb-6 text-red-600">GPI IMPACT SUMMARY</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="text-center p-4 border border-zinc-800">
                        <div className="text-3xl font-black text-red-600 mb-2">-1.2</div>
                        <div className="text-sm text-zinc-400">Expected GPI Reduction</div>
                      </div>
                      <div className="text-center p-4 border border-zinc-800">
                        <div className="text-3xl font-black text-yellow-400 mb-2">2</div>
                        <div className="text-sm text-zinc-400">Dimensions Targeted</div>
                      </div>
                      <div className="text-center p-4 border border-zinc-800">
                        <div className="text-3xl font-black text-green-400 mb-2">4 WKS</div>
                        <div className="text-sm text-zinc-400">To Field State</div>
                      </div>
                    </div>
                  </div>

                  {/* Dimensions Targeted */}
                  <div>
                    <h3 className="text-xl font-black mb-6">DIMENSIONS TARGETED</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-zinc-950 border border-zinc-800 p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                          <h4 className="font-bold">KNOWLEDGE VELOCITY (10% of GPI)</h4>
                        </div>
                        <p className="text-zinc-400 mb-4">How fast does learning become action? Particle state: Slow perfection loops. Field state: Rapid learning through shipping.</p>
                        <div className="flex justify-between text-sm">
                          <span className="text-red-400">Before: Particle (7-10)</span>
                          <span className="text-green-400">After: Field (1-3)</span>
                        </div>
                      </div>
                      <div className="bg-zinc-950 border border-zinc-800 p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                          <h4 className="font-bold">ERROR CORRECTION (20% of GPI)</h4>
                        </div>
                        <p className="text-zinc-400 mb-4">How quickly can mistakes be detected and fixed? Particle state: Errors hidden in process. Field state: Ship, learn, correct fast.</p>
                        <div className="flex justify-between text-sm">
                          <span className="text-red-400">Before: Particle (7-10)</span>
                          <span className="text-green-400">After: Field (1-3)</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Expected Outcomes */}
                  <div className="bg-zinc-950 border border-zinc-800 p-8">
                    <h3 className="text-xl font-black mb-6">EXPECTED OUTCOMES</h3>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <div className="flex items-start gap-4">
                          <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                          <p className="text-lg">Learning cycle reduced from months to weeks</p>
                        </div>
                        <div className="flex items-start gap-4">
                          <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                          <p className="text-lg">Error detection through real user feedback</p>
                        </div>
                        <div className="flex items-start gap-4">
                          <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                          <p className="text-lg">Knowledge Velocity score moves toward field</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-start gap-4">
                          <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                          <p className="text-lg">Error Correction dimension accelerated</p>
                        </div>
                        <div className="flex items-start gap-4">
                          <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                          <p className="text-lg">Market truth replaces internal assumptions</p>
                        </div>
                        <div className="flex items-start gap-4">
                          <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                          <p className="text-lg">Scale or kill decision based on data</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Protocol */}
                  <div className="bg-zinc-950 border border-zinc-800 p-8">
                    <h3 className="text-xl font-black mb-4">THE VELOCITY PROTOCOL</h3>
                    <div className="space-y-6">
                      <div className="flex gap-6 items-start">
                        <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">WEEK 1</div>
                        <div className="flex-1">
                          <p className="text-lg mb-2">Strip to core function—eliminate velocity friction</p>
                          <p className="text-zinc-400">Kill features that slow learning. Define the one metric that proves market fit.</p>
                        </div>
                      </div>
                      <div className="flex gap-6 items-start">
                        <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">WEEK 2-3</div>
                        <div className="flex-1">
                          <p className="text-lg mb-2">Build ugly, ship fast—maximum velocity</p>
                          <p className="text-zinc-400">Daily progress creates daily corrections. Learning compounds.</p>
                        </div>
                      </div>
                      <div className="flex gap-6 items-start">
                        <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">WEEK 4</div>
                        <div className="flex-1">
                          <p className="text-lg mb-2">Ship to users—error correction begins</p>
                          <p className="text-zinc-400">Real feedback creates real corrections. Scale or kill based on field data.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Best For */}
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="border border-zinc-800 p-6">
                      <h3 className="font-bold text-red-600 mb-3">HIGH GPI FOUNDERS</h3>
                      <p className="text-zinc-400">Knowledge Velocity score above 7. Perfecting instead of shipping. Assumptions instead of data.</p>
                    </div>
                    <div className="border border-zinc-800 p-6">
                      <h3 className="font-bold text-red-600 mb-3">SLOW ERROR LOOPS</h3>
                      <p className="text-zinc-400">Error Correction score above 7. Mistakes take months to surface. Learning cycles measured in quarters.</p>
                    </div>
                    <div className="border border-zinc-800 p-6">
                      <h3 className="font-bold text-red-600 mb-3">PARTICLE-STATE IDEAS</h3>
                      <p className="text-zinc-400">Too many features, not enough feedback. Need market reality to force field behavior.</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Build Brief Tab */}
              {activeTab === 'brief' && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-black mb-4">VELOCITY AUDIT</h2>
                    <p className="text-xl text-zinc-400 mb-8">Identify what's slowing your Knowledge Velocity and Error Correction dimensions. 5 minutes to expose the friction.</p>
                  </div>

                  <div className="bg-zinc-950 border border-red-600/30 p-6 mb-8">
                    <h3 className="text-lg font-bold text-red-600 mb-4">DIMENSION FRICTION ASSESSMENT</h3>
                    <p className="text-zinc-400">This form identifies friction in your Knowledge Velocity and Error Correction dimensions. Each answer reveals where particle-state behavior is blocking field-state operations.</p>
                  </div>

                  {!isSubmitted ? (
                    <form onSubmit={handleBuildSubmit} className="space-y-8">
                      <div className="bg-zinc-950 border border-zinc-800 p-8">
                        <h3 className="text-xl font-bold mb-6">VELOCITY FRICTION FORM</h3>

                        <div className="space-y-6">
                          <div>
                            <label className="block text-lg font-bold mb-3">Core function—what's the one thing that must work?</label>
                            <p className="text-zinc-400 text-sm mb-4">Not features. Strip to the single function that solves the problem. Everything else is velocity friction.</p>
                            <textarea
                              value={buildData.coreFunction}
                              onChange={(e) => setBuildData({...buildData, coreFunction: e.target.value})}
                              className="w-full h-32 bg-black border border-zinc-700 p-4 text-white resize-none focus:border-red-600 focus:outline-none"
                              placeholder="Lets users schedule meetings without email back-and-forth...&#10;Tracks expenses and automatically categorizes them...&#10;Finds the cheapest flight combinations in real-time..."
                              required
                            />
                          </div>

                          <div>
                            <label className="block text-lg font-bold mb-3">User friction—what specific pain are you solving?</label>
                            <p className="text-zinc-400 text-sm mb-4">The particle-state problem in your users' world. What friction are they trapped in?</p>
                            <textarea
                              value={buildData.userProblem}
                              onChange={(e) => setBuildData({...buildData, userProblem: e.target.value})}
                              className="w-full h-32 bg-black border border-zinc-700 p-4 text-white resize-none focus:border-red-600 focus:outline-none"
                              placeholder="Wasting 2 hours per week on email scheduling...&#10;Losing receipts and missing tax deductions...&#10;Paying 30% more for flights due to complex routing..."
                              required
                            />
                          </div>

                          <div>
                            <label className="block text-lg font-bold mb-3">Error correction signal—how will we know it's working?</label>
                            <p className="text-zinc-400 text-sm mb-4">The metric that triggers error correction. What number proves market fit?</p>
                            <textarea
                              value={buildData.successMetric}
                              onChange={(e) => setBuildData({...buildData, successMetric: e.target.value})}
                              className="w-full h-32 bg-black border border-zinc-700 p-4 text-white resize-none focus:border-red-600 focus:outline-none"
                              placeholder="10 people pay $20/month within 2 weeks of launch...&#10;Users save at least 1 hour per week measurably...&#10;50% of users return and use it again within 7 days..."
                              required
                            />
                          </div>

                          <div>
                            <label className="block text-lg font-bold mb-3">Current constraints—what limits velocity?</label>
                            <p className="text-zinc-400 text-sm mb-4">Real constraints that affect how fast we can ship and learn.</p>
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
                            SUBMIT VELOCITY AUDIT
                          </button>
                        </div>
                      </div>
                    </form>
                  ) : (
                    <div className="bg-green-500/10 border border-green-500 p-8 text-center">
                      <Check className="text-green-500 mx-auto mb-4" size={48} />
                      <h3 className="text-xl font-bold text-green-500 mb-4">VELOCITY FRICTION IDENTIFIED</h3>
                      <p className="text-lg mb-6">Core function locked. Knowledge Velocity protocol begins in 48 hours.</p>
                      <p className="text-zinc-400">You'll receive daily velocity updates—each one a chance for error correction.</p>
                    </div>
                  )}
                </div>
              )}

              {/* Live Sprint Tab */}
              {activeTab === 'sprint' && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-black mb-4">RAPID BUILD</h2>
                    <p className="text-xl text-zinc-400 mb-8">Field-state operations. Maximum velocity. Daily error correction signals. Ship ugly, learn fast.</p>
                  </div>

                  {/* Dimension Progress */}
                  <div className="bg-zinc-950 border border-red-600/30 p-6 mb-8">
                    <h3 className="text-lg font-bold text-red-600 mb-4">DIMENSION PROGRESS TRACKER</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm">Knowledge Velocity</span>
                          <span className="text-sm text-yellow-400">ACCELERATING</span>
                        </div>
                        <div className="w-full bg-zinc-800 h-2">
                          <div className="bg-yellow-400 h-2 w-1/3"></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm">Error Correction</span>
                          <span className="text-sm text-zinc-500">PENDING LAUNCH</span>
                        </div>
                        <div className="w-full bg-zinc-800 h-2">
                          <div className="bg-zinc-600 h-2 w-0"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-zinc-950 border border-zinc-800 p-6">
                      <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                        <Hammer className="text-red-600" size={24} />
                        VELOCITY PHASES
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span>Core Function Lock</span>
                          <span className="text-yellow-400">IN PROGRESS</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Friction Elimination</span>
                          <span className="text-zinc-500">PENDING</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Minimal Interface</span>
                          <span className="text-zinc-500">PENDING</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Ship to Users</span>
                          <span className="text-zinc-500">PENDING</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Error Correction Loop</span>
                          <span className="text-zinc-500">PENDING</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-zinc-950 border border-zinc-800 p-6">
                      <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                        <Zap className="text-red-600" size={24} />
                        DAILY VELOCITY SIGNALS
                      </h3>
                      <div className="space-y-4">
                        <p className="text-zinc-400 text-sm">Each day creates new data for error correction:</p>
                        <div className="bg-black border border-zinc-700 p-3 min-h-[200px]">
                          <p className="text-zinc-500 text-sm">[Daily velocity signals—what shipped, what blocked, what corrected—will appear during the 4-week sprint]</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-zinc-950 border border-zinc-800 p-6">
                    <h3 className="text-xl font-bold mb-4">VELOCITY TIMELINE</h3>
                    <div className="grid md:grid-cols-4 gap-4">
                      <div className="text-center p-4 border border-zinc-700">
                        <div className="text-red-600 font-bold mb-2">WEEK 1</div>
                        <p className="text-sm text-zinc-400">Lock core function. Kill velocity friction.</p>
                      </div>
                      <div className="text-center p-4 border border-zinc-700">
                        <div className="text-red-600 font-bold mb-2">WEEK 2</div>
                        <p className="text-sm text-zinc-400">Build ugly. Maximum velocity. No perfection.</p>
                      </div>
                      <div className="text-center p-4 border border-zinc-700">
                        <div className="text-red-600 font-bold mb-2">WEEK 3</div>
                        <p className="text-sm text-zinc-400">Finish core. Prepare error correction loop.</p>
                      </div>
                      <div className="text-center p-4 border border-zinc-700">
                        <div className="text-red-600 font-bold mb-2">WEEK 4</div>
                        <p className="text-sm text-zinc-400">Ship. First users. Error correction begins.</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-green-500/10 border border-green-500 p-6">
                      <h4 className="font-bold text-green-500 mb-3 flex items-center gap-2">
                        <Check size={20} />
                        FIELD-STATE OUTCOMES
                      </h4>
                      <div className="text-zinc-400 text-sm space-y-2">
                        <p>• Core function that enables error correction</p>
                        <p>• Minimal interface for maximum velocity</p>
                        <p>• User feedback loop installed</p>
                        <p>• Signal → correction pathway active</p>
                      </div>
                    </div>
                    <div className="bg-red-500/10 border border-red-500 p-6">
                      <h4 className="font-bold text-red-500 mb-3 flex items-center gap-2">
                        <AlertCircle size={20} />
                        VELOCITY FRICTION (CUT)
                      </h4>
                      <div className="text-zinc-400 text-sm space-y-2">
                        <p>• Beautiful design (slows learning)</p>
                        <p>• Feature completeness (blocks shipping)</p>
                        <p>• Perfect edge cases (delays feedback)</p>
                        <p>• Consensus requirements (particle behavior)</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Ship & Test Tab */}
              {activeTab === 'ship' && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-black mb-4">GPI TRACKING</h2>
                    <p className="text-xl text-zinc-400 mb-8">Measure dimension changes. Track velocity acceleration. Error correction signals live.</p>
                  </div>

                  {/* GPI Re-measurement Timeline */}
                  <div className="bg-zinc-950 border border-red-600/30 p-8">
                    <h3 className="text-xl font-black mb-6 text-red-600">GPI RE-MEASUREMENT TIMELINE</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="text-center p-4 border border-zinc-700">
                        <div className="text-2xl font-black text-yellow-400 mb-2">WEEK 2</div>
                        <div className="text-sm text-zinc-400">Knowledge Velocity check</div>
                        <div className="text-xs text-zinc-500 mt-2">First velocity acceleration signals</div>
                      </div>
                      <div className="text-center p-4 border border-zinc-700">
                        <div className="text-2xl font-black text-yellow-400 mb-2">WEEK 4</div>
                        <div className="text-sm text-zinc-400">Error Correction measurement</div>
                        <div className="text-xs text-zinc-500 mt-2">First user feedback → correction cycle</div>
                      </div>
                      <div className="text-center p-4 border border-zinc-700">
                        <div className="text-2xl font-black text-green-400 mb-2">WEEK 6</div>
                        <div className="text-sm text-zinc-400">Full GPI re-score</div>
                        <div className="text-xs text-zinc-500 mt-2">Compare to pre-intervention baseline</div>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-zinc-950 border border-zinc-800 p-6">
                      <h3 className="text-xl font-bold mb-4">FIELD-STATE CHECKLIST</h3>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <Check className="text-green-500" size={18} />
                          <span className="text-sm">Core function ships without waiting</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Check className="text-zinc-500" size={18} />
                          <span className="text-sm text-zinc-500">User feedback loop installed</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Check className="text-zinc-500" size={18} />
                          <span className="text-sm text-zinc-500">Error signals visible daily</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Check className="text-zinc-500" size={18} />
                          <span className="text-sm text-zinc-500">Correction cycle under 48 hours</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Check className="text-zinc-500" size={18} />
                          <span className="text-sm text-zinc-500">First paying user acquired</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-zinc-950 border border-zinc-800 p-6">
                      <h3 className="text-xl font-bold mb-4">DIMENSION SIGNALS</h3>
                      <div className="space-y-4">
                        <div className="bg-black border border-zinc-700 p-4">
                          <p className="text-sm font-bold text-green-400 mb-2">KNOWLEDGE VELOCITY</p>
                          <div className="h-16 border border-zinc-800 p-2 text-zinc-500 text-xs">
                            [Learning cycle time: Days from insight → implementation tracked here]
                          </div>
                        </div>
                        <div className="bg-black border border-zinc-700 p-4">
                          <p className="text-sm font-bold text-yellow-400 mb-2">ERROR CORRECTION</p>
                          <div className="h-16 border border-zinc-800 p-2 text-zinc-500 text-xs">
                            [Error detection → fix cycle: Time from signal → correction tracked here]
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-zinc-950 border border-zinc-800 p-6">
                    <h3 className="text-xl font-bold mb-6">FIELD STATE DECISION</h3>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="bg-green-500/10 border border-green-500 p-6">
                        <h4 className="font-bold text-green-500 mb-3">SCALE (FIELD ACHIEVED)</h4>
                        <div className="space-y-2 text-sm text-zinc-400">
                          <p>• Knowledge Velocity below 4</p>
                          <p>• Error Correction under 48 hours</p>
                          <p>• First paying customers acquired</p>
                          <p>• Clear signal → action pathway</p>
                        </div>
                      </div>
                      <div className="bg-red-500/10 border border-red-500 p-6">
                        <h4 className="font-bold text-red-500 mb-3">KILL (PARTICLE PERSISTS)</h4>
                        <div className="space-y-2 text-sm text-zinc-400">
                          <p>• Velocity still blocked after 4 weeks</p>
                          <p>• Error signals ignored or invisible</p>
                          <p>• No market fit signal detected</p>
                          <p>• Perfection loop re-established</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-500/10 border border-yellow-500 p-6">
                    <h3 className="text-xl font-bold text-yellow-500 mb-4">GPI-BASED DECISION</h3>
                    <p className="text-zinc-400">After 4 weeks, we'll measure actual dimension changes. If Knowledge Velocity and Error Correction moved toward field state, scale. If particle behavior persists despite intervention, kill and redirect resources.</p>
                  </div>
                </div>
              )}

              {/* Book Now Tab */}
              {activeTab === 'book' && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-black mb-4">DEPLOY THE BUILD</h2>
                    <p className="text-xl text-zinc-400 mb-8">Force field-state operations. Accelerate Knowledge Velocity. Enable Error Correction. Expected GPI reduction: -1.2 points.</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-zinc-950 border border-zinc-800 p-8">
                      <h3 className="text-2xl font-bold mb-6">INVESTMENT: $4,500</h3>
                      <div className="space-y-4 mb-8">
                        <div className="flex items-center gap-3">
                          <Check className="text-green-500" size={18} />
                          <span>Velocity friction identification</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Check className="text-green-500" size={18} />
                          <span>Core function lock (Week 1)</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Check className="text-green-500" size={18} />
                          <span>Maximum velocity build (Week 2-3)</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Check className="text-green-500" size={18} />
                          <span>Ship to users (Week 4)</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Check className="text-green-500" size={18} />
                          <span>Error correction loop installed</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Check className="text-green-500" size={18} />
                          <span>GPI re-measurement (Week 6)</span>
                        </div>
                      </div>

                      <Link
                        href="https://outlook.office.com/owa/calendar/IG@imaginationg.studio/bookings/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full bg-red-600 px-8 py-4 text-lg font-black text-center hover:bg-red-700 transition-colors"
                      >
                        ACCELERATE VELOCITY →
                      </Link>
                    </div>

                    <div className="space-y-6">
                      <div className="bg-red-500/10 border border-red-500 p-6">
                        <h4 className="font-bold text-red-500 mb-3">GPI IMPACT CALCULATION</h4>
                        <p className="text-zinc-400 mb-3">How particle-state stalls compound:</p>
                        <div className="text-sm space-y-1">
                          <p>• Average perfection delay: 6+ months</p>
                          <p>• Each month: Learning not happening</p>
                          <p>• Each month: Errors accumulating unseen</p>
                          <p>• Each month: GPI score calcifying higher</p>
                        </div>
                        <p className="text-red-400 font-bold mt-3">Ship now. Correct errors with data, not assumptions.</p>
                      </div>

                      <div className="bg-green-500/10 border border-green-500 p-6">
                        <h4 className="font-bold text-green-500 mb-3">DIMENSION TARGETS</h4>
                        <p className="text-zinc-400 mb-3">What moves toward field state:</p>
                        <div className="text-sm space-y-1">
                          <p>• Knowledge Velocity: 7+ → 3 or lower</p>
                          <p>• Error Correction: 7+ → 3 or lower</p>
                          <p>• Overall GPI: Expected -1.2 point reduction</p>
                          <p>• Learning cycle: Months → Days</p>
                        </div>
                      </div>

                      <div className="bg-zinc-900 border border-zinc-700 p-6">
                        <h4 className="font-bold mb-3">NEED DIMENSION DIAGNOSIS?</h4>
                        <p className="text-zinc-400 mb-4">Take the GPI diagnostic to confirm which dimensions need intervention.</p>
                        <Link
                          href="/diagnostic"
                          className="inline-block border border-zinc-600 px-4 py-2 text-sm font-bold hover:border-zinc-400 transition-colors"
                        >
                          GET YOUR GPI SCORE
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
              title="Understand The GPI Framework"
              items={[
                {
                  href: "/framework",
                  title: "The GPI Framework",
                  description: "7 dimensions that measure organizational friction. Particle vs Field state.",
                  color: "red"
                },
                {
                  href: "/diagnostic",
                  title: "Get Your GPI Score",
                  description: "19 binary questions. Measure your organizational state.",
                  color: "yellow"
                },
                {
                  href: "/interventions",
                  title: "All Interventions",
                  description: "Find the right intervention for your GPI dimensions.",
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