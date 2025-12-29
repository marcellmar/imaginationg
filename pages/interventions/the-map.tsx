import type { NextPage } from 'next';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import SEOHead from '../../components/SEOHead';
import Navigation from '../../components/Navigation';
import RelatedContent from '../../components/RelatedContent';
import { Check, AlertCircle, Calendar, Video, FileText, BarChart3, Clock, Users, Network, Target } from 'lucide-react';

const TheMapPage: NextPage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [connectionData, setConnectionData] = useState({
    currentConnections: '',
    businessGoals: '',
    blockedBy: '',
    idealOutcomes: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleConnectionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    console.log('Connection audit submitted:', connectionData);
  };

  const tabs = [
    { id: 'overview', label: 'GPI Impact', icon: FileText },
    { id: 'audit', label: 'Knowledge Audit', icon: Network },
    { id: 'analysis', label: 'Flow Analysis', icon: BarChart3 },
    { id: 'delivery', label: 'GPI Tracking', icon: Users },
    { id: 'book', label: 'Deploy', icon: Calendar }
  ];

  return (
    <>
      <SEOHead
        title="THE MAP - Improve Knowledge Location & Talent Flow | IMAGINATION G"
        description="Target Knowledge Location and Talent Flow dimensions. Map where information gets stuck and talent can't flow. 5 days. -0.8 GPI points."
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
                INTERVENTION PORTAL: THE MAP
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1]">
                THE MAP<span className="text-red-600">.</span>
              </h1>
              
              <p className="text-xl text-zinc-400 mb-8 max-w-2xl">
                Map where knowledge gets stuck and talent flow is blocked. Surface the connection gaps creating organizational friction.
              </p>

              <div className="flex flex-wrap gap-6 items-center mb-6">
                <span className="text-4xl font-black">$1,500</span>
                <span className="text-zinc-500">|</span>
                <span className="text-lg text-zinc-400">5 Days. Clear Connections.</span>
                <span className="text-zinc-500">|</span>
                <span className="text-sm text-green-400 bg-green-400/10 px-3 py-1 rounded-full">3+ CONNECTIONS GUARANTEED</span>
              </div>

              {/* GPI Targeting */}
              <div className="flex flex-wrap items-center gap-4 mb-8 p-4 bg-zinc-950 border border-zinc-800 rounded-lg">
                <Target className="text-red-600" size={20} />
                <span className="text-xs text-zinc-500 uppercase">GPI Targets:</span>
                <span className="text-sm font-mono bg-red-600/20 text-red-400 px-3 py-1 rounded">Knowledge Location</span>
                <span className="text-sm font-mono bg-red-600/20 text-red-400 px-3 py-1 rounded">Talent Flow</span>
                <span className="text-zinc-700">|</span>
                <span className="text-xs text-zinc-500">
                  Recommended when <span className="font-mono text-yellow-400">GPI &gt; 6.0</span>
                </span>
                <span className="text-zinc-700">|</span>
                <span className="text-xs text-zinc-500">
                  Expected: <span className="font-mono text-green-400">-0.8 points</span>
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
                        <div className="text-3xl font-black text-red-600 mb-2">-0.8</div>
                        <div className="text-sm text-zinc-400">Expected GPI Reduction</div>
                      </div>
                      <div className="text-center p-4 border border-zinc-800">
                        <div className="text-3xl font-black text-yellow-400 mb-2">2</div>
                        <div className="text-sm text-zinc-400">Dimensions Targeted</div>
                      </div>
                      <div className="text-center p-4 border border-zinc-800">
                        <div className="text-3xl font-black text-green-400 mb-2">5</div>
                        <div className="text-sm text-zinc-400">Days to Flow State</div>
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
                          <h4 className="font-bold">KNOWLEDGE LOCATION (15% of GPI)</h4>
                        </div>
                        <p className="text-zinc-400 mb-4">Measures how easily information can be found. In particle state, knowledge is scattered, siloed, or hoarded.</p>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-zinc-500">Particle State:</span>
                            <span>Nobody knows who knows what</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-zinc-500">Field State:</span>
                            <span>Information finds who needs it</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-zinc-950 border border-zinc-800 p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                          <h4 className="font-bold">TALENT FLOW (10% of GPI)</h4>
                        </div>
                        <p className="text-zinc-400 mb-4">Measures how easily people move to where they're needed. Particle state means roles lock in talent.</p>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-zinc-500">Particle State:</span>
                            <span>People stuck in wrong positions</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-zinc-500">Field State:</span>
                            <span>Talent flows to opportunities</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Expected Outcomes */}
                  <div>
                    <h3 className="text-xl font-black mb-6">EXPECTED OUTCOMES</h3>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <div className="flex items-start gap-4">
                          <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                          <p className="text-lg">Knowledge friction points mapped and visible</p>
                        </div>
                        <div className="flex items-start gap-4">
                          <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                          <p className="text-lg">Talent flow blockers identified</p>
                        </div>
                        <div className="flex items-start gap-4">
                          <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                          <p className="text-lg">Information hoarding patterns exposed</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-start gap-4">
                          <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                          <p className="text-lg">Connection pathways established</p>
                        </div>
                        <div className="flex items-start gap-4">
                          <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                          <p className="text-lg">30-60-90 day flow improvement plan</p>
                        </div>
                        <div className="flex items-start gap-4">
                          <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                          <p className="text-lg">GPI re-measurement baseline</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Protocol in GPI Terms */}
                  <div className="bg-zinc-950 border border-zinc-800 p-8">
                    <h3 className="text-xl font-black mb-4">THE FLOW RESTORATION PROTOCOL</h3>
                    <div className="space-y-6">
                      <div className="flex gap-6 items-start">
                        <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">DAY 1</div>
                        <div className="flex-1">
                          <p className="text-lg mb-2">Knowledge Location Audit</p>
                          <p className="text-zinc-400">Map where information currently lives. Identify knowledge silos and hoarding patterns.</p>
                        </div>
                      </div>
                      <div className="flex gap-6 items-start">
                        <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">DAY 2-3</div>
                        <div className="flex-1">
                          <p className="text-lg mb-2">Talent Flow Mapping</p>
                          <p className="text-zinc-400">Identify where people are stuck. Find blocked pathways and artificial barriers.</p>
                        </div>
                      </div>
                      <div className="flex gap-6 items-start">
                        <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">DAY 4</div>
                        <div className="flex-1">
                          <p className="text-lg mb-2">Friction Point Analysis</p>
                          <p className="text-zinc-400">Score each blocker. Identify which particle-state behaviors drive highest GPI.</p>
                        </div>
                      </div>
                      <div className="flex gap-6 items-start">
                        <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">DAY 5</div>
                        <div className="flex-1">
                          <p className="text-lg mb-2">Flow State Map Delivery</p>
                          <p className="text-zinc-400">Complete organizational flow map with intervention priorities and GPI reduction targets.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Best For */}
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="border border-zinc-800 p-6">
                      <h3 className="font-bold text-red-600 mb-3">GPI 6.0-7.5</h3>
                      <p className="text-zinc-400">Information silos emerging. Knowledge starting to get stuck in departments.</p>
                    </div>
                    <div className="border border-zinc-800 p-6">
                      <h3 className="font-bold text-red-600 mb-3">GPI 7.5-8.5</h3>
                      <p className="text-zinc-400">Clear talent flow issues. People can't move to where they're needed.</p>
                    </div>
                    <div className="border border-zinc-800 p-6">
                      <h3 className="font-bold text-red-600 mb-3">GPI 8.5+</h3>
                      <p className="text-zinc-400">Severe particle state. Knowledge hoarded, talent trapped, organization calcifying.</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Knowledge Audit Tab */}
              {activeTab === 'audit' && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-black mb-4">KNOWLEDGE LOCATION AUDIT</h2>
                    <p className="text-xl text-zinc-400 mb-8">Identify where information gets stuck and who hoards knowledge. 10 minutes to map your friction points.</p>
                  </div>

                  {!isSubmitted ? (
                    <form onSubmit={handleConnectionSubmit} className="space-y-8">
                      <div className="bg-zinc-950 border border-zinc-800 p-8">
                        <h3 className="text-xl font-bold mb-6">DIMENSION FRICTION ASSESSMENT</h3>

                        <div className="space-y-6">
                          <div>
                            <label className="block text-lg font-bold mb-3">Where does critical information currently live?</label>
                            <p className="text-zinc-400 text-sm mb-4">Map your knowledge silos. Which people/teams/systems hold information others need?</p>
                            <textarea
                              value={connectionData.currentConnections}
                              onChange={(e) => setConnectionData({...connectionData, currentConnections: e.target.value})}
                              className="w-full h-32 bg-black border border-zinc-700 p-4 text-white resize-none focus:border-red-600 focus:outline-none"
                              placeholder="1. Sales data only in Mike's head\n2. Technical specs buried in engineering Slack\n3. Customer feedback scattered across 5 tools..."
                              required
                            />
                          </div>

                          <div>
                            <label className="block text-lg font-bold mb-3">What decisions are blocked by missing information?</label>
                            <p className="text-zinc-400 text-sm mb-4">Where does knowledge location friction create particle-state behavior?</p>
                            <textarea
                              value={connectionData.businessGoals}
                              onChange={(e) => setConnectionData({...connectionData, businessGoals: e.target.value})}
                              className="w-full h-32 bg-black border border-zinc-700 p-4 text-white resize-none focus:border-red-600 focus:outline-none"
                              placeholder="1. Pricing decisions wait for finance review\n2. Product roadmap unclear to sales team\n3. Customer churn reasons unknown to product..."
                              required
                            />
                          </div>

                          <div>
                            <label className="block text-lg font-bold mb-3">Who can't move to where they're needed?</label>
                            <p className="text-zinc-400 text-sm mb-4">Talent flow blockers. People stuck in roles, teams that can't access help.</p>
                            <textarea
                              value={connectionData.blockedBy}
                              onChange={(e) => setConnectionData({...connectionData, blockedBy: e.target.value})}
                              className="w-full h-32 bg-black border border-zinc-700 p-4 text-white resize-none focus:border-red-600 focus:outline-none"
                              placeholder="Senior dev stuck on legacy system\nDesigner can't join critical project\nExpert knowledge locked in departing employee..."
                              required
                            />
                          </div>

                          <div>
                            <label className="block text-lg font-bold mb-3">In field state, how would information flow?</label>
                            <p className="text-zinc-400 text-sm mb-4">Describe the ideal state where knowledge finds who needs it.</p>
                            <textarea
                              value={connectionData.idealOutcomes}
                              onChange={(e) => setConnectionData({...connectionData, idealOutcomes: e.target.value})}
                              className="w-full h-32 bg-black border border-zinc-700 p-4 text-white resize-none focus:border-red-600 focus:outline-none"
                              placeholder="Anyone can find what they need in minutes\nNo single points of failure for knowledge\nTalent moves to problems, not the reverse..."
                              required
                            />
                          </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-zinc-800">
                          <button
                            type="submit"
                            className="bg-red-600 px-8 py-4 text-lg font-black hover:bg-red-700 transition-colors"
                          >
                            SUBMIT DIMENSION AUDIT
                          </button>
                        </div>
                      </div>
                    </form>
                  ) : (
                    <div className="bg-green-500/10 border border-green-500 p-8 text-center">
                      <Check className="text-green-500 mx-auto mb-4" size={48} />
                      <h3 className="text-xl font-bold text-green-500 mb-4">AUDIT RECEIVED</h3>
                      <p className="text-lg mb-6">Your friction points have been logged. Flow mapping begins within 24 hours.</p>
                      <p className="text-zinc-400">You'll receive daily GPI dimension updates via Teams and email.</p>
                    </div>
                  )}
                </div>
              )}

              {/* Flow Analysis Tab */}
              {activeTab === 'analysis' && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-black mb-4">FLOW STATE ANALYSIS</h2>
                    <p className="text-xl text-zinc-400 mb-8">Real-time dimension mapping. Track progress as we identify friction points across Knowledge Location and Talent Flow.</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-zinc-950 border border-zinc-800 p-6">
                      <h3 className="text-xl font-bold mb-4">DIMENSION MAPPING PROGRESS</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span>Knowledge Location Baseline</span>
                          <span className="text-green-400">COMPLETE</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Information Silo Mapping</span>
                          <span className="text-yellow-400">IN PROGRESS</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Talent Flow Blockers</span>
                          <span className="text-zinc-500">PENDING</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Friction Point Scoring</span>
                          <span className="text-zinc-500">PENDING</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Flow Restoration Plan</span>
                          <span className="text-zinc-500">PENDING</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-zinc-950 border border-zinc-800 p-6">
                      <h3 className="text-xl font-bold mb-4">DIMENSION SCORES (LIVE)</h3>
                      <div className="space-y-3 text-sm">
                        <p className="text-zinc-400">Your GPI dimension readings will appear here as mapping progresses:</p>
                        <div className="bg-black border border-zinc-700 p-3 min-h-[200px]">
                          <div className="space-y-3 text-zinc-500">
                            <div className="flex justify-between items-center">
                              <span>Knowledge Location:</span>
                              <span className="font-mono">--/10</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span>Talent Flow:</span>
                              <span className="font-mono">--/10</span>
                            </div>
                            <div className="border-t border-zinc-800 pt-3 mt-3">
                              <p className="text-xs">[Live friction points will populate as analysis progresses]</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-zinc-950 border border-zinc-800 p-6">
                    <h3 className="text-xl font-bold mb-4">FLOW MAPPING TIMELINE</h3>
                    <div className="grid md:grid-cols-5 gap-4">
                      <div className="text-center">
                        <div className="text-red-600 font-bold mb-2">DAY 1</div>
                        <p className="text-sm text-zinc-400">Knowledge Location baseline & silo identification</p>
                      </div>
                      <div className="text-center">
                        <div className="text-red-600 font-bold mb-2">DAY 2</div>
                        <p className="text-sm text-zinc-400">Information hoarding pattern analysis</p>
                      </div>
                      <div className="text-center">
                        <div className="text-red-600 font-bold mb-2">DAY 3</div>
                        <p className="text-sm text-zinc-400">Talent Flow mapping & blocker ID</p>
                      </div>
                      <div className="text-center">
                        <div className="text-red-600 font-bold mb-2">DAY 4</div>
                        <p className="text-sm text-zinc-400">Friction point scoring & GPI impact</p>
                      </div>
                      <div className="text-center">
                        <div className="text-red-600 font-bold mb-2">DAY 5</div>
                        <p className="text-sm text-zinc-400">Flow State Map & intervention plan</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* GPI Tracking Tab */}
              {activeTab === 'delivery' && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-black mb-4">GPI TRACKING & RE-MEASUREMENT</h2>
                    <p className="text-xl text-zinc-400 mb-8">Your flow state map with dimension scores and re-measurement timeline. Track progress toward field state.</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-zinc-950 border border-zinc-800 p-6">
                      <h3 className="text-xl font-bold mb-4">KNOWLEDGE LOCATION FINDINGS</h3>
                      <div className="bg-black border border-zinc-700 p-4 mb-4">
                        <p className="text-zinc-400 text-sm mb-2">Information silo map and hoarding patterns:</p>
                        <div className="h-40 border border-zinc-800 p-3 text-zinc-500 text-sm">
                          [Critical knowledge silos identified with flow restoration priorities]
                        </div>
                      </div>
                    </div>

                    <div className="bg-zinc-950 border border-zinc-800 p-6">
                      <h3 className="text-xl font-bold mb-4">TALENT FLOW BLOCKERS</h3>
                      <div className="bg-black border border-zinc-700 p-4 mb-4">
                        <p className="text-zinc-400 text-sm mb-2">Where people are stuck and pathways are blocked:</p>
                        <div className="h-40 border border-zinc-800 p-3 text-zinc-500 text-sm">
                          [Talent flow barriers with unblocking recommendations]
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-zinc-950 border border-zinc-800 p-6">
                    <h3 className="text-xl font-bold mb-6">GPI RE-MEASUREMENT TIMELINE</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="border border-zinc-700 p-4">
                        <p className="text-red-600 font-bold mb-2">30 DAYS</p>
                        <p className="text-sm text-zinc-400">First GPI dimension re-measurement. Target: Knowledge Location -0.3</p>
                        <div className="h-24 bg-black border border-zinc-800 p-2 mt-3 text-xs text-zinc-500">
                          [Knowledge Location score tracking]
                        </div>
                      </div>
                      <div className="border border-zinc-700 p-4">
                        <p className="text-yellow-500 font-bold mb-2">60 DAYS</p>
                        <p className="text-sm text-zinc-400">Second measurement. Target: Talent Flow -0.3</p>
                        <div className="h-24 bg-black border border-zinc-800 p-2 mt-3 text-xs text-zinc-500">
                          [Talent Flow score tracking]
                        </div>
                      </div>
                      <div className="border border-zinc-700 p-4">
                        <p className="text-green-500 font-bold mb-2">90 DAYS</p>
                        <p className="text-sm text-zinc-400">Full GPI re-assessment. Target: Overall -0.8 points</p>
                        <div className="h-24 bg-black border border-zinc-800 p-2 mt-3 text-xs text-zinc-500">
                          [Full GPI score comparison]
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-500/10 border border-green-500 p-6">
                    <h3 className="text-xl font-bold text-green-500 mb-4">GUARANTEE: MEASURABLE GPI REDUCTION</h3>
                    <p className="text-zinc-400">If your Knowledge Location and Talent Flow dimension scores don't improve within 90 days, full refund. Measured by re-assessment.</p>
                  </div>
                </div>
              )}

              {/* Deploy Tab */}
              {activeTab === 'book' && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-black mb-4">DEPLOY THE MAP</h2>
                    <p className="text-xl text-zinc-400 mb-8">5 days to map Knowledge Location and Talent Flow dimensions. Start moving toward field state.</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-zinc-950 border border-zinc-800 p-8">
                      <h3 className="text-2xl font-bold mb-6">INVESTMENT: $1,500</h3>
                      <div className="space-y-4 mb-8">
                        <div className="flex items-center gap-3">
                          <Check className="text-green-500" size={18} />
                          <span>Knowledge Location dimension mapping</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Check className="text-green-500" size={18} />
                          <span>Talent Flow blocker identification</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Check className="text-green-500" size={18} />
                          <span>Information silo analysis</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Check className="text-green-500" size={18} />
                          <span>Friction point scoring & prioritization</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Check className="text-green-500" size={18} />
                          <span>90-day GPI re-measurement plan</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Check className="text-green-500" size={18} />
                          <span>Measurable improvement guarantee</span>
                        </div>
                      </div>

                      <Link
                        href="https://outlook.office.com/owa/calendar/IG@imaginationg.studio/bookings/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full bg-red-600 px-8 py-4 text-lg font-black text-center hover:bg-red-700 transition-colors"
                      >
                        DEPLOY THE MAP →
                      </Link>
                    </div>

                    <div className="space-y-6">
                      <div className="bg-yellow-500/10 border border-yellow-500 p-6">
                        <h4 className="font-bold text-yellow-500 mb-3">GPI IMPACT CALCULATION</h4>
                        <p className="text-zinc-400 mb-3">What does -0.8 GPI points mean for your organization?</p>
                        <div className="text-sm space-y-1">
                          <p>• Information finds who needs it (not the reverse)</p>
                          <p>• Talent flows to problems, not stuck in roles</p>
                          <p>• Decisions unblocked by accessible knowledge</p>
                        </div>
                        <p className="text-yellow-500 font-bold mt-3">Movement toward field-state operations</p>
                      </div>

                      <div className="bg-zinc-900 border border-zinc-700 p-6">
                        <h4 className="font-bold mb-3">MEASURE YOUR GPI FIRST</h4>
                        <p className="text-zinc-400 mb-4">Take the GPI diagnostic to get your baseline scores before deployment.</p>
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

        {/* Next Intervention */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center">
              <Link 
                href="/interventions/the-naming"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                ← Previous: THE NAMING
              </Link>
              <Link 
                href="/interventions/the-market-smackdown"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                Next: THE MARKET SMACKDOWN →
              </Link>
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

export default TheMapPage;