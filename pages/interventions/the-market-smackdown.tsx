import type { NextPage } from 'next';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import SEOHead from '../../components/SEOHead';
import Navigation from '../../components/Navigation';
import RelatedContent from '../../components/RelatedContent';
import { Check, AlertCircle, Calendar, Video, FileText, BarChart3, Clock, Users, TrendingUp, X } from 'lucide-react';

const TheMarketSmackdownPage: NextPage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [marketData, setMarketData] = useState({
    market: '',
    product: '',
    customers: '',
    competitors: '',
    evidence: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleMarketSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    console.log('Market analysis submitted:', marketData);
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: FileText },
    { id: 'submission', label: 'Market Data', icon: TrendingUp },
    { id: 'analysis', label: 'Live Analysis', icon: BarChart3 },
    { id: 'verdict', label: 'GO/NO-GO', icon: Check },
    { id: 'book', label: 'Book Now', icon: Calendar }
  ];

  return (
    <>
      <SEOHead
        title="THE MARKET SMACKDOWN - GO/NO-GO Market Decision | IMAGINATION G"
        description="Simple question: Should you enter this market or not? Evidence-based GO/NO-GO decision in 3 days. $2,250."
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
                INTERVENTION PORTAL: MARKET SMACKDOWN
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1]">
                THE MARKET<br />SMACKDOWN<span className="text-red-600">.</span>
              </h1>
              
              <p className="text-xl text-zinc-400 mb-8 max-w-2xl">
                Simple question: Should you enter this market or not? We'll give you a definitive answer based on evidence.
              </p>

              <div className="flex flex-wrap gap-6 items-center mb-8">
                <span className="text-4xl font-black">$2,250</span>
                <span className="text-zinc-500">|</span>
                <span className="text-lg text-zinc-400">3 Days. Clear Verdict.</span>
                <span className="text-zinc-500">|</span>
                <span className="text-sm text-green-400 bg-green-400/10 px-3 py-1 rounded-full">GO/NO-GO GUARANTEED</span>
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
                    <h2 className="text-3xl font-black mb-8">SIMPLE QUESTION: GO OR NO-GO?</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <div className="flex items-start gap-4">
                          <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                          <p className="text-lg">Clear GO or NO-GO verdict</p>
                        </div>
                        <div className="flex items-start gap-4">
                          <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                          <p className="text-lg">Evidence-based market analysis</p>
                        </div>
                        <div className="flex items-start gap-4">
                          <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                          <p className="text-lg">Customer demand reality check</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-start gap-4">
                          <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                          <p className="text-lg">Competitive landscape truth</p>
                        </div>
                        <div className="flex items-start gap-4">
                          <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                          <p className="text-lg">If GO: Launch strategy included</p>
                        </div>
                        <div className="flex items-start gap-4">
                          <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                          <p className="text-lg">If NO-GO: Alternative directions</p>
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
                          <p className="text-lg mb-2">Market data collection and customer evidence review</p>
                          <p className="text-zinc-400">We analyze your target market and existing customer feedback</p>
                        </div>
                      </div>
                      <div className="flex gap-6 items-start">
                        <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">DAY 2</div>
                        <div className="flex-1">
                          <p className="text-lg mb-2">Competitive analysis and demand validation</p>
                          <p className="text-zinc-400">Real market size, competition strength, and customer willingness to pay</p>
                        </div>
                      </div>
                      <div className="flex gap-6 items-start">
                        <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">DAY 3</div>
                        <div className="flex-1">
                          <p className="text-lg mb-2">GO/NO-GO verdict delivery with action plan</p>
                          <p className="text-zinc-400">Clear recommendation with immediate next steps</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-green-500/10 border border-green-500 p-6">
                      <h4 className="font-bold text-green-500 mb-3 flex items-center gap-2">
                        <Check size={20} />
                        IF GO: LAUNCH STRATEGY
                      </h4>
                      <ul className="text-zinc-400 text-sm space-y-2">
                        <li>• Target customer segments</li>
                        <li>• Positioning against competition</li>
                        <li>• Launch timeline and milestones</li>
                        <li>• Revenue projections</li>
                      </ul>
                    </div>
                    <div className="bg-red-500/10 border border-red-500 p-6">
                      <h4 className="font-bold text-red-500 mb-3 flex items-center gap-2">
                        <X size={20} />
                        IF NO-GO: PIVOT OPTIONS
                      </h4>
                      <ul className="text-zinc-400 text-sm space-y-2">
                        <li>• Why this market won't work</li>
                        <li>• Alternative market opportunities</li>
                        <li>• Product modification options</li>
                        <li>• Timeline for pivot decision</li>
                      </ul>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="border border-zinc-800 p-6">
                      <h3 className="font-bold text-red-600 mb-3">FOUNDERS</h3>
                      <p className="text-zinc-400">Considering a new market or unsure about current direction</p>
                    </div>
                    <div className="border border-zinc-800 p-6">
                      <h3 className="font-bold text-red-600 mb-3">STARTUPS</h3>
                      <p className="text-zinc-400">Need validation before major investment or launch</p>
                    </div>
                    <div className="border border-zinc-800 p-6">
                      <h3 className="font-bold text-red-600 mb-3">PRODUCT TEAMS</h3>
                      <p className="text-zinc-400">Debating market entry or expansion decisions</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Market Data Submission Tab */}
              {activeTab === 'submission' && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-black mb-4">MARKET DATA SUBMISSION</h2>
                    <p className="text-xl text-zinc-400 mb-8">Tell us about your market opportunity. 10 minutes to submit the key information we need.</p>
                  </div>

                  {!isSubmitted ? (
                    <form onSubmit={handleMarketSubmit} className="space-y-8">
                      <div className="bg-zinc-950 border border-zinc-800 p-8">
                        <h3 className="text-xl font-bold mb-6">MARKET ANALYSIS FORM</h3>
                        
                        <div className="space-y-6">
                          <div>
                            <label className="block text-lg font-bold mb-3">Describe the market you want to enter</label>
                            <p className="text-zinc-400 text-sm mb-4">Be specific: industry, size, target customers, geographic scope.</p>
                            <textarea
                              value={marketData.market}
                              onChange={(e) => setMarketData({...marketData, market: e.target.value})}
                              className="w-full h-32 bg-black border border-zinc-700 p-4 text-white resize-none focus:border-red-600 focus:outline-none"
                              placeholder="B2B SaaS for mid-market manufacturing companies in North America...&#10;E-commerce platform for sustainable fashion brands...&#10;Mobile app for fitness tracking in Asia..."
                              required
                            />
                          </div>

                          <div>
                            <label className="block text-lg font-bold mb-3">What product/service are you offering?</label>
                            <p className="text-zinc-400 text-sm mb-4">Core functionality, key features, value proposition.</p>
                            <textarea
                              value={marketData.product}
                              onChange={(e) => setMarketData({...marketData, product: e.target.value})}
                              className="w-full h-32 bg-black border border-zinc-700 p-4 text-white resize-none focus:border-red-600 focus:outline-none"
                              placeholder="AI-powered inventory management that reduces waste by 30%...&#10;Subscription box for eco-friendly fashion with personalization...&#10;Fitness app with social challenges and AR workouts..."
                              required
                            />
                          </div>

                          <div>
                            <label className="block text-lg font-bold mb-3">Who are your target customers?</label>
                            <p className="text-zinc-400 text-sm mb-4">Demographics, company size, budget, buying behavior, pain points.</p>
                            <textarea
                              value={marketData.customers}
                              onChange={(e) => setMarketData({...marketData, customers: e.target.value})}
                              className="w-full h-32 bg-black border border-zinc-700 p-4 text-white resize-none focus:border-red-600 focus:outline-none"
                              placeholder="Manufacturing companies, 100-1000 employees, $10M+ revenue...&#10;Women 25-40, environmentally conscious, $100K+ income...&#10;Fitness enthusiasts, 18-35, tech-savvy, $50K+ income..."
                              required
                            />
                          </div>

                          <div>
                            <label className="block text-lg font-bold mb-3">Who are your main competitors?</label>
                            <p className="text-zinc-400 text-sm mb-4">Direct and indirect competitors, their pricing, market position.</p>
                            <textarea
                              value={marketData.competitors}
                              onChange={(e) => setMarketData({...marketData, competitors: e.target.value})}
                              className="w-full h-32 bg-black border border-zinc-700 p-4 text-white resize-none focus:border-red-600 focus:outline-none"
                              placeholder="Direct: Oracle, SAP (enterprise), Fishbowl (SMB)&#10;Indirect: Excel, manual processes&#10;Pricing: $500-5000/month..."
                              required
                            />
                          </div>

                          <div>
                            <label className="block text-lg font-bold mb-3">What evidence do you have of market demand?</label>
                            <p className="text-zinc-400 text-sm mb-4">Customer interviews, surveys, pre-orders, beta feedback, market research.</p>
                            <textarea
                              value={marketData.evidence}
                              onChange={(e) => setMarketData({...marketData, evidence: e.target.value})}
                              className="w-full h-32 bg-black border border-zinc-700 p-4 text-white resize-none focus:border-red-600 focus:outline-none"
                              placeholder="50 customer interviews, 80% said would pay $200/month&#10;1000 signups for beta, 200 active users&#10;Market research shows $2B market growing 15%/year..."
                              required
                            />
                          </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-zinc-800">
                          <button
                            type="submit"
                            className="bg-red-600 px-8 py-4 text-lg font-black hover:bg-red-700 transition-colors"
                          >
                            SUBMIT FOR ANALYSIS
                          </button>
                        </div>
                      </div>
                    </form>
                  ) : (
                    <div className="bg-green-500/10 border border-green-500 p-8 text-center">
                      <Check className="text-green-500 mx-auto mb-4" size={48} />
                      <h3 className="text-xl font-bold text-green-500 mb-4">MARKET DATA RECEIVED</h3>
                      <p className="text-lg mb-6">Your market information has been submitted. Analysis begins within 2 hours.</p>
                      <p className="text-zinc-400">You'll receive daily updates and the final GO/NO-GO verdict in 3 days.</p>
                    </div>
                  )}
                </div>
              )}

              {/* Live Analysis Tab */}
              {activeTab === 'analysis' && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-black mb-4">LIVE MARKET ANALYSIS</h2>
                    <p className="text-xl text-zinc-400 mb-8">Real-time analysis of your market opportunity. Track progress as we validate demand and assess competition.</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-zinc-950 border border-zinc-800 p-6">
                      <h3 className="text-xl font-bold mb-4">ANALYSIS PROGRESS</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span>Market Data Review</span>
                          <span className="text-green-400">COMPLETE</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Customer Demand Validation</span>
                          <span className="text-yellow-400">IN PROGRESS</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Competitive Analysis</span>
                          <span className="text-zinc-500">PENDING</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Market Size Assessment</span>
                          <span className="text-zinc-500">PENDING</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>GO/NO-GO Verdict</span>
                          <span className="text-zinc-500">PENDING</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-zinc-950 border border-zinc-800 p-6">
                      <h3 className="text-xl font-bold mb-4">INITIAL FINDINGS</h3>
                      <div className="space-y-3 text-sm">
                        <p className="text-zinc-400">Live analysis results will appear here as we work through your market data:</p>
                        <div className="bg-black border border-zinc-700 p-3 min-h-[200px]">
                          <p className="text-zinc-500">[Real-time findings and insights will populate here during the 3-day analysis process]</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-zinc-950 border border-zinc-800 p-6">
                    <h3 className="text-xl font-bold mb-4">EVIDENCE REVIEW SCHEDULE</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-red-600 font-bold mb-2">DAY 1</div>
                        <p className="text-sm text-zinc-400">Market data collection and customer evidence review</p>
                      </div>
                      <div className="text-center">
                        <div className="text-red-600 font-bold mb-2">DAY 2</div>
                        <p className="text-sm text-zinc-400">Competitive analysis and demand validation</p>
                      </div>
                      <div className="text-center">
                        <div className="text-red-600 font-bold mb-2">DAY 3</div>
                        <p className="text-sm text-zinc-400">GO/NO-GO verdict delivery with action plan</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-green-500/10 border border-green-500 p-6">
                      <h4 className="font-bold text-green-500 mb-3 flex items-center gap-2">
                        <TrendingUp size={20} />
                        POSITIVE SIGNALS
                      </h4>
                      <div className="text-zinc-400 text-sm space-y-2">
                        <p>[Positive market indicators will be identified and tracked here]</p>
                      </div>
                    </div>
                    <div className="bg-red-500/10 border border-red-500 p-6">
                      <h4 className="font-bold text-red-500 mb-3 flex items-center gap-2">
                        <AlertCircle size={20} />
                        WARNING SIGNALS
                      </h4>
                      <div className="text-zinc-400 text-sm space-y-2">
                        <p>[Market risks and warning signs will be flagged here]</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* GO/NO-GO Verdict Tab */}
              {activeTab === 'verdict' && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-black mb-4">GO/NO-GO VERDICT</h2>
                    <p className="text-xl text-zinc-400 mb-8">Final recommendation based on evidence analysis. Clear direction for your market entry decision.</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-green-500/10 border border-green-500 p-8 text-center">
                      <Check className="text-green-500 mx-auto mb-4" size={64} />
                      <h3 className="text-2xl font-black text-green-500 mb-4">GO VERDICT</h3>
                      <p className="text-lg mb-6">Market validation confirmed. Proceed with launch strategy.</p>
                      <div className="text-left space-y-4">
                        <h4 className="font-bold text-green-500">IF GO - YOU GET:</h4>
                        <ul className="text-zinc-400 text-sm space-y-2">
                          <li>• Target customer segments & sizing</li>
                          <li>• Competitive positioning strategy</li>
                          <li>• Go-to-market launch plan</li>
                          <li>• Revenue projections & milestones</li>
                          <li>• Risk mitigation strategies</li>
                          <li>• Success metrics to track</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-red-500/10 border border-red-500 p-8 text-center">
                      <X className="text-red-500 mx-auto mb-4" size={64} />
                      <h3 className="text-2xl font-black text-red-500 mb-4">NO-GO VERDICT</h3>
                      <p className="text-lg mb-6">Market evidence insufficient. Pivot recommended.</p>
                      <div className="text-left space-y-4">
                        <h4 className="font-bold text-red-500">IF NO-GO - YOU GET:</h4>
                        <ul className="text-zinc-400 text-sm space-y-2">
                          <li>• Specific reasons why market won't work</li>
                          <li>• Alternative market opportunities</li>
                          <li>• Product modification recommendations</li>
                          <li>• Pivot timeline and priorities</li>
                          <li>• Resource reallocation strategy</li>
                          <li>• Future validation checkpoints</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-zinc-950 border border-zinc-800 p-8">
                    <h3 className="text-xl font-bold mb-6">EVIDENCE SUMMARY</h3>
                    <div className="space-y-6">
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="border border-zinc-700 p-4">
                          <h4 className="font-bold text-blue-400 mb-3">MARKET SIZE</h4>
                          <div className="h-20 bg-black border border-zinc-800 p-3 text-zinc-500 text-sm">
                            [Market size analysis results]
                          </div>
                        </div>
                        <div className="border border-zinc-700 p-4">
                          <h4 className="font-bold text-yellow-400 mb-3">CUSTOMER DEMAND</h4>
                          <div className="h-20 bg-black border border-zinc-800 p-3 text-zinc-500 text-sm">
                            [Demand validation findings]
                          </div>
                        </div>
                        <div className="border border-zinc-700 p-4">
                          <h4 className="font-bold text-purple-400 mb-3">COMPETITION</h4>
                          <div className="h-20 bg-black border border-zinc-800 p-3 text-zinc-500 text-sm">
                            [Competitive analysis summary]
                          </div>
                        </div>
                      </div>

                      <div className="border border-zinc-700 p-6">
                        <h4 className="font-bold mb-3">FINAL RECOMMENDATION</h4>
                        <div className="bg-black border border-zinc-800 p-4 min-h-[120px]">
                          <p className="text-zinc-500 text-sm">[Your specific GO or NO-GO recommendation with detailed reasoning will appear here after analysis completion]</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-500/10 border border-yellow-500 p-6">
                    <h3 className="text-xl font-bold text-yellow-500 mb-4">GUARANTEE: DEFINITIVE ANSWER</h3>
                    <p className="text-zinc-400">You will receive a clear GO or NO-GO verdict with detailed reasoning. If the analysis is inconclusive, we'll extend the timeline until we can give you a definitive answer.</p>
                  </div>
                </div>
              )}

              {/* Book Now Tab */}
              {activeTab === 'book' && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-black mb-4">BOOK MARKET SMACKDOWN</h2>
                    <p className="text-xl text-zinc-400 mb-8">3 days to get a definitive GO or NO-GO decision on your market opportunity. Stop guessing.</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-zinc-950 border border-zinc-800 p-8">
                      <h3 className="text-2xl font-bold mb-6">INVESTMENT: $2,250</h3>
                      <div className="space-y-4 mb-8">
                        <div className="flex items-center gap-3">
                          <Check className="text-green-500" size={18} />
                          <span>Complete market opportunity analysis</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Check className="text-green-500" size={18} />
                          <span>Customer demand validation</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Check className="text-green-500" size={18} />
                          <span>Competitive landscape assessment</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Check className="text-green-500" size={18} />
                          <span>Clear GO or NO-GO verdict</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Check className="text-green-500" size={18} />
                          <span>30-day action plan included</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Check className="text-green-500" size={18} />
                          <span>Clarity guarantee</span>
                        </div>
                      </div>
                      
                      <Link 
                        href="https://outlook.office.com/owa/calendar/IG@imaginationg.studio/bookings/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full bg-red-600 px-8 py-4 text-lg font-black text-center hover:bg-red-700 transition-colors"
                      >
                        GET YOUR VERDICT →
                      </Link>
                    </div>

                    <div className="space-y-6">
                      <div className="bg-yellow-500/10 border border-yellow-500 p-6">
                        <h4 className="font-bold text-yellow-500 mb-3">ROI CALCULATION</h4>
                        <p className="text-zinc-400 mb-3">How much could you waste pursuing the wrong market?</p>
                        <div className="text-sm space-y-1">
                          <p>• Average failed product cost: $100K-500K</p>
                          <p>• Time lost on wrong direction: 6-18 months</p>
                          <p>• Opportunity cost of delay: Immeasurable</p>
                        </div>
                        <p className="text-yellow-500 font-bold mt-3">Prevents $100K+ in wrong direction</p>
                      </div>

                      <div className="bg-zinc-900 border border-zinc-700 p-6">
                        <h4 className="font-bold mb-3">SIMPLE OUTCOMES</h4>
                        <div className="space-y-3 text-sm">
                          <div className="flex items-center gap-2">
                            <Check className="text-green-500" size={16} />
                            <span>GO: Launch with confidence</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <X className="text-red-500" size={16} />
                            <span>NO-GO: Pivot before waste</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-zinc-900 border border-zinc-700 p-6">
                        <h4 className="font-bold mb-3">NOT SURE THIS IS RIGHT?</h4>
                        <p className="text-zinc-400 mb-4">Take our diagnostic to see if you need market validation or a different intervention.</p>
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
                  href="/interventions/the-map"
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  ← Previous: THE MAP
                </Link>
                <Link 
                  href="/interventions/the-override"
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  Next: THE OVERRIDE →
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
                  href: "/answers/glossary/pilor",
                  title: "Escape Your Pilor",
                  description: "Market rejection loops. The signals you keep missing.",
                  color: "red"
                },
                {
                  href: "/answers/glossary/voxel",
                  title: "Find Your Voxel",
                  description: "Truth in three dimensions. Where market meets reality.",
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

export default TheMarketSmackdownPage;