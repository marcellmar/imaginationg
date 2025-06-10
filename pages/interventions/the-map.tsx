import type { NextPage } from 'next';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import SEOHead from '../../components/SEOHead';
import Navigation from '../../components/Navigation';
import RelatedContent from '../../components/RelatedContent';
import { Check, AlertCircle, Calendar, Video, FileText, BarChart3, Clock, Users, Network } from 'lucide-react';

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
    { id: 'overview', label: 'Overview', icon: FileText },
    { id: 'audit', label: 'Connection Audit', icon: Network },
    { id: 'analysis', label: 'Live Analysis', icon: BarChart3 },
    { id: 'delivery', label: 'Map Delivery', icon: Users },
    { id: 'book', label: 'Book Now', icon: Calendar }
  ];

  return (
    <>
      <SEOHead
        title="THE MAP - Surface Recursive Patterns | IMAGINATION G"
        description="Map the real connections. Surface the recursive patterns you've been optimizing around. 7 days. $1,000."
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
                Identify the real connections that will move your business forward. Stop wasting time on dead networks.
              </p>

              <div className="flex flex-wrap gap-6 items-center mb-8">
                <span className="text-4xl font-black">$1,500</span>
                <span className="text-zinc-500">|</span>
                <span className="text-lg text-zinc-400">5 Days. Clear Connections.</span>
                <span className="text-zinc-500">|</span>
                <span className="text-sm text-green-400 bg-green-400/10 px-3 py-1 rounded-full">3+ CONNECTIONS GUARANTEED</span>
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
                    <h2 className="text-3xl font-black mb-8">FIND YOUR REAL CONNECTIONS</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <div className="flex items-start gap-4">
                          <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                          <p className="text-lg">3+ high-value connections identified</p>
                        </div>
                        <div className="flex items-start gap-4">
                          <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                          <p className="text-lg">Dead network pruning recommendations</p>
                        </div>
                        <div className="flex items-start gap-4">
                          <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                          <p className="text-lg">Connection activation strategies</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-start gap-4">
                          <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                          <p className="text-lg">Business impact assessment</p>
                        </div>
                        <div className="flex items-start gap-4">
                          <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                          <p className="text-lg">30-60-90 day connection plan</p>
                        </div>
                        <div className="flex items-start gap-4">
                          <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                          <p className="text-lg">Self-execution toolkit</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-zinc-950 border border-zinc-800 p-8">
                    <h3 className="text-xl font-black mb-4">THE SIMPLIFIED PROCESS</h3>
                    <div className="space-y-6">
                      <div className="flex gap-6 items-start">
                        <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">DAY 1</div>
                        <div className="flex-1">
                          <p className="text-lg mb-2">Connection audit and business goal alignment</p>
                          <p className="text-zinc-400">We analyze your current network against your actual business objectives</p>
                        </div>
                      </div>
                      <div className="flex gap-6 items-start">
                        <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">DAY 2-3</div>
                        <div className="flex-1">
                          <p className="text-lg mb-2">High-value connection identification</p>
                          <p className="text-zinc-400">Find the people who can actually move your business forward</p>
                        </div>
                      </div>
                      <div className="flex gap-6 items-start">
                        <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">DAY 4</div>
                        <div className="flex-1">
                          <p className="text-lg mb-2">Dead weight identification and pruning strategy</p>
                          <p className="text-zinc-400">Stop wasting time on connections that drain energy</p>
                        </div>
                      </div>
                      <div className="flex gap-6 items-start">
                        <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">DAY 5</div>
                        <div className="flex-1">
                          <p className="text-lg mb-2">Connection map delivery and activation plan</p>
                          <p className="text-zinc-400">Your roadmap to turn connections into business results</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="border border-zinc-800 p-6">
                      <h3 className="font-bold text-red-600 mb-3">FOUNDERS</h3>
                      <p className="text-zinc-400">Whose network feels dead and relationships feel transactional</p>
                    </div>
                    <div className="border border-zinc-800 p-6">
                      <h3 className="font-bold text-red-600 mb-3">BUSINESS LEADERS</h3>
                      <p className="text-zinc-400">Stuck in the same networking circles with no business impact</p>
                    </div>
                    <div className="border border-zinc-800 p-6">
                      <h3 className="font-bold text-red-600 mb-3">SALES TEAMS</h3>
                      <p className="text-zinc-400">Need to identify decision-makers and real influence paths</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Connection Audit Tab */}
              {activeTab === 'audit' && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-black mb-4">CONNECTION AUDIT</h2>
                    <p className="text-xl text-zinc-400 mb-8">Help us understand your current network and business objectives. 10 minutes to map your connection reality.</p>
                  </div>

                  {!isSubmitted ? (
                    <form onSubmit={handleConnectionSubmit} className="space-y-8">
                      <div className="bg-zinc-950 border border-zinc-800 p-8">
                        <h3 className="text-xl font-bold mb-6">NETWORK ANALYSIS FORM</h3>
                        
                        <div className="space-y-6">
                          <div>
                            <label className="block text-lg font-bold mb-3">List your top 10 business connections</label>
                            <p className="text-zinc-400 text-sm mb-4">Names and their relationship to your business goals. Include clients, partners, referrers, advisors.</p>
                            <textarea
                              value={connectionData.currentConnections}
                              onChange={(e) => setConnectionData({...connectionData, currentConnections: e.target.value})}
                              className="w-full h-32 bg-black border border-zinc-700 p-4 text-white resize-none focus:border-red-600 focus:outline-none"
                              placeholder="1. John Smith - Key client, $50K annual\n2. Sarah Johnson - Referral partner\n3. Mike Chen - Industry advisor..."
                              required
                            />
                          </div>

                          <div>
                            <label className="block text-lg font-bold mb-3">What are your top 3 business goals for the next 90 days?</label>
                            <p className="text-zinc-400 text-sm mb-4">Revenue targets, new markets, partnerships, hiring, funding - be specific.</p>
                            <textarea
                              value={connectionData.businessGoals}
                              onChange={(e) => setConnectionData({...connectionData, businessGoals: e.target.value})}
                              className="w-full h-32 bg-black border border-zinc-700 p-4 text-white resize-none focus:border-red-600 focus:outline-none"
                              placeholder="1. Close 5 new enterprise clients worth $25K each\n2. Find 3 strategic referral partners\n3. Raise $500K seed round..."
                              required
                            />
                          </div>

                          <div>
                            <label className="block text-lg font-bold mb-3">What's blocking you from reaching these goals?</label>
                            <p className="text-zinc-400 text-sm mb-4">Connection gaps, access issues, relationship problems, network weaknesses.</p>
                            <textarea
                              value={connectionData.blockedBy}
                              onChange={(e) => setConnectionData({...connectionData, blockedBy: e.target.value})}
                              className="w-full h-32 bg-black border border-zinc-700 p-4 text-white resize-none focus:border-red-600 focus:outline-none"
                              placeholder="Can't get warm intros to enterprise decision makers\nNo connections in target industry\nExisting network isn't converting..."
                              required
                            />
                          </div>

                          <div>
                            <label className="block text-lg font-bold mb-3">If you had the perfect connections, what would happen?</label>
                            <p className="text-zinc-400 text-sm mb-4">Ideal outcomes if network barriers were removed. Dream scenario.</p>
                            <textarea
                              value={connectionData.idealOutcomes}
                              onChange={(e) => setConnectionData({...connectionData, idealOutcomes: e.target.value})}
                              className="w-full h-32 bg-black border border-zinc-700 p-4 text-white resize-none focus:border-red-600 focus:outline-none"
                              placeholder="Direct access to 10 enterprise CTOs\n3 VCs who actually return calls\nPartnership with industry leader..."
                              required
                            />
                          </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-zinc-800">
                          <button
                            type="submit"
                            className="bg-red-600 px-8 py-4 text-lg font-black hover:bg-red-700 transition-colors"
                          >
                            SUBMIT CONNECTION AUDIT
                          </button>
                        </div>
                      </div>
                    </form>
                  ) : (
                    <div className="bg-green-500/10 border border-green-500 p-8 text-center">
                      <Check className="text-green-500 mx-auto mb-4" size={48} />
                      <h3 className="text-xl font-bold text-green-500 mb-4">AUDIT COMPLETE</h3>
                      <p className="text-lg mb-6">Your connection data has been submitted. We'll begin analysis within 24 hours.</p>
                      <p className="text-zinc-400">You'll receive daily progress updates via Teams and email.</p>
                    </div>
                  )}
                </div>
              )}

              {/* Live Analysis Tab */}
              {activeTab === 'analysis' && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-black mb-4">LIVE CONNECTION ANALYSIS</h2>
                    <p className="text-xl text-zinc-400 mb-8">Real-time analysis of your network. Track progress as we identify your high-value connections.</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-zinc-950 border border-zinc-800 p-6">
                      <h3 className="text-xl font-bold mb-4">ANALYSIS PROGRESS</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span>Connection Assessment</span>
                          <span className="text-green-400">COMPLETE</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Goal Alignment Analysis</span>
                          <span className="text-yellow-400">IN PROGRESS</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>High-Value Identification</span>
                          <span className="text-zinc-500">PENDING</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Dead Weight Analysis</span>
                          <span className="text-zinc-500">PENDING</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Activation Strategy</span>
                          <span className="text-zinc-500">PENDING</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-zinc-950 border border-zinc-800 p-6">
                      <h3 className="text-xl font-bold mb-4">INITIAL FINDINGS</h3>
                      <div className="space-y-3 text-sm">
                        <p className="text-zinc-400">Your analysis results will appear here as we work through your network:</p>
                        <div className="bg-black border border-zinc-700 p-3 min-h-[200px]">
                          <p className="text-zinc-500">[Live analysis findings will populate here during the 5-day process]</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-zinc-950 border border-zinc-800 p-6">
                    <h3 className="text-xl font-bold mb-4">DAILY UPDATE SCHEDULE</h3>
                    <div className="grid md:grid-cols-5 gap-4">
                      <div className="text-center">
                        <div className="text-red-600 font-bold mb-2">DAY 1</div>
                        <p className="text-sm text-zinc-400">Network audit & goal alignment</p>
                      </div>
                      <div className="text-center">
                        <div className="text-red-600 font-bold mb-2">DAY 2</div>
                        <p className="text-sm text-zinc-400">High-value connection identification</p>
                      </div>
                      <div className="text-center">
                        <div className="text-red-600 font-bold mb-2">DAY 3</div>
                        <p className="text-sm text-zinc-400">Business impact assessment</p>
                      </div>
                      <div className="text-center">
                        <div className="text-red-600 font-bold mb-2">DAY 4</div>
                        <p className="text-sm text-zinc-400">Dead weight pruning strategy</p>
                      </div>
                      <div className="text-center">
                        <div className="text-red-600 font-bold mb-2">DAY 5</div>
                        <p className="text-sm text-zinc-400">Final map & activation plan</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Map Delivery Tab */}
              {activeTab === 'delivery' && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-black mb-4">YOUR CONNECTION MAP</h2>
                    <p className="text-xl text-zinc-400 mb-8">Complete connection strategy with activation plan. Everything you need to turn relationships into business results.</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-zinc-950 border border-zinc-800 p-6">
                      <h3 className="text-xl font-bold mb-4">HIGH-VALUE CONNECTIONS</h3>
                      <div className="bg-black border border-zinc-700 p-4 mb-4">
                        <p className="text-zinc-400 text-sm mb-2">Your top connections that will move business forward:</p>
                        <div className="h-40 border border-zinc-800 p-3 text-zinc-500 text-sm">
                          [3-5 high-value connections with specific activation strategies will be detailed here]
                        </div>
                      </div>
                    </div>

                    <div className="bg-zinc-950 border border-zinc-800 p-6">
                      <h3 className="text-xl font-bold mb-4">DEAD WEIGHT PRUNING</h3>
                      <div className="bg-black border border-zinc-700 p-4 mb-4">
                        <p className="text-zinc-400 text-sm mb-2">Connections draining energy with no business value:</p>
                        <div className="h-40 border border-zinc-800 p-3 text-zinc-500 text-sm">
                          [Specific recommendations for reducing time on low-value connections]
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-zinc-950 border border-zinc-800 p-6">
                    <h3 className="text-xl font-bold mb-6">30-60-90 DAY ACTIVATION PLAN</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="border border-zinc-700 p-4">
                        <p className="text-red-600 font-bold mb-2">30 DAYS</p>
                        <p className="text-sm text-zinc-400">Immediate actions to activate your top 3 connections</p>
                        <div className="h-24 bg-black border border-zinc-800 p-2 mt-3 text-xs text-zinc-500">
                          [Specific 30-day action plan]
                        </div>
                      </div>
                      <div className="border border-zinc-700 p-4">
                        <p className="text-yellow-500 font-bold mb-2">60 DAYS</p>
                        <p className="text-sm text-zinc-400">Relationship deepening and value delivery</p>
                        <div className="h-24 bg-black border border-zinc-800 p-2 mt-3 text-xs text-zinc-500">
                          [60-day relationship building plan]
                        </div>
                      </div>
                      <div className="border border-zinc-700 p-4">
                        <p className="text-green-500 font-bold mb-2">90 DAYS</p>
                        <p className="text-sm text-zinc-400">Business results and relationship scaling</p>
                        <div className="h-24 bg-black border border-zinc-800 p-2 mt-3 text-xs text-zinc-500">
                          [90-day business impact plan]
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-500/10 border border-green-500 p-6">
                    <h3 className="text-xl font-bold text-green-500 mb-4">GUARANTEE: 3+ HIGH-VALUE CONNECTIONS</h3>
                    <p className="text-zinc-400">If we don't identify at least 3 connections that can materially impact your business goals, full refund. No exceptions.</p>
                  </div>
                </div>
              )}

              {/* Book Now Tab */}
              {activeTab === 'book' && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-black mb-4">BOOK THE MAP</h2>
                    <p className="text-xl text-zinc-400 mb-8">5 days to identify the connections that will actually move your business forward. Stop wasting time on dead networks.</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-zinc-950 border border-zinc-800 p-8">
                      <h3 className="text-2xl font-bold mb-6">INVESTMENT: $1,500</h3>
                      <div className="space-y-4 mb-8">
                        <div className="flex items-center gap-3">
                          <Check className="text-green-500" size={18} />
                          <span>Complete network audit & analysis</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Check className="text-green-500" size={18} />
                          <span>3+ high-value connections identified</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Check className="text-green-500" size={18} />
                          <span>Dead weight pruning strategy</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Check className="text-green-500" size={18} />
                          <span>30-60-90 day activation plan</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Check className="text-green-500" size={18} />
                          <span>Self-execution toolkit</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Check className="text-green-500" size={18} />
                          <span>Connection value guarantee</span>
                        </div>
                      </div>
                      
                      <Link 
                        href="https://outlook.office.com/owa/calendar/IG@imaginationg.studio/bookings/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full bg-red-600 px-8 py-4 text-lg font-black text-center hover:bg-red-700 transition-colors"
                      >
                        BOOK THE MAP →
                      </Link>
                    </div>

                    <div className="space-y-6">
                      <div className="bg-yellow-500/10 border border-yellow-500 p-6">
                        <h4 className="font-bold text-yellow-500 mb-3">ROI CALCULATION</h4>
                        <p className="text-zinc-400 mb-3">How much revenue are you missing from weak connections?</p>
                        <div className="text-sm space-y-1">
                          <p>• Average deal size increase with warm intro: 3x</p>
                          <p>• Time saved with direct access: 40+ hours/month</p>
                          <p>• Conversion rate with quality connections: 10x higher</p>
                        </div>
                        <p className="text-yellow-500 font-bold mt-3">One good connection pays for entire investment</p>
                      </div>

                      <div className="bg-zinc-900 border border-zinc-700 p-6">
                        <h4 className="font-bold mb-3">NOT SURE THIS IS RIGHT?</h4>
                        <p className="text-zinc-400 mb-4">Take our diagnostic to see if you need connection mapping or a different intervention.</p>
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
              title="Learn The Language"
              items={[
                {
                  href: "/answers/glossary/strune",
                  title: "Understanding Strune",
                  description: "When movement creates its own resistance. The pattern trap.",
                  color: "red"
                },
                {
                  href: "/answers/glossary/kithara",
                  title: "Break Your Kithara",
                  description: "False harmony that kills truth. Time to create friction.",
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

export default TheMapPage;