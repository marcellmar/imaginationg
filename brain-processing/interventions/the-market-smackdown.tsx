import type { NextPage } from 'next';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import SEOHead from '../../components/SEOHead';
import Navigation from '../../components/Navigation';
import RelatedContent from '../../components/RelatedContent';
import { Check, AlertCircle, Calendar, Video, FileText, BarChart3, Clock, Users, TrendingUp, X, Target } from 'lucide-react';

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
    { id: 'overview', label: 'GPI Impact', icon: FileText },
    { id: 'submission', label: 'GTM Audit', icon: TrendingUp },
    { id: 'analysis', label: 'Market Analysis', icon: BarChart3 },
    { id: 'verdict', label: 'GO/NO-GO', icon: Check },
    { id: 'book', label: 'Deploy', icon: Calendar }
  ];

  return (
    <>
      <SEOHead
        title="THE MARKET SMACKDOWN - Go-To-Market Decision | IMAGINATION G"
        description="Target Decision Latency and Capital Intensity. Force GO/NO-GO on your product, service, or upgrade in 72 hours. Move from particle to field state."
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
                GO/NO-GO on your product launch, service offering, or upgrade. 72 hours to decide: ship it or kill it. Stop burning capital on maybe.
              </p>

              <div className="flex flex-wrap gap-6 items-center mb-6">
                <span className="text-4xl font-black">$2,250</span>
                <span className="text-zinc-500">|</span>
                <span className="text-lg text-zinc-400">3 Days. Clear Verdict.</span>
                <span className="text-zinc-500">|</span>
                <span className="text-sm text-green-400 bg-green-400/10 px-3 py-1 rounded-full">GO/NO-GO GUARANTEED</span>
              </div>

              {/* GPI Targeting */}
              <div className="flex flex-wrap items-center gap-4 mb-8 p-4 bg-zinc-950 border border-zinc-800 rounded-lg">
                <Target className="text-red-600" size={20} />
                <span className="text-xs text-zinc-500 uppercase">GPI Targets:</span>
                <span className="text-sm font-mono bg-red-600/20 text-red-400 px-3 py-1 rounded">Decision Latency</span>
                <span className="text-sm font-mono bg-yellow-600/20 text-yellow-400 px-3 py-1 rounded">Capital Intensity</span>
                <span className="text-zinc-700">|</span>
                <span className="text-xs text-zinc-500">
                  Recommended when <span className="font-mono text-yellow-400">GPI &gt; 5.0</span>
                </span>
                <span className="text-zinc-700">|</span>
                <span className="text-xs text-zinc-500">
                  Expected: <span className="font-mono text-green-400">-1.0 points</span>
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
                    <div className="grid md:grid-cols-4 gap-6">
                      <div className="text-center p-4 border border-zinc-800">
                        <div className="text-3xl font-black text-red-600 mb-2">-1.0</div>
                        <div className="text-sm text-zinc-400">Expected GPI Reduction</div>
                      </div>
                      <div className="text-center p-4 border border-zinc-800">
                        <div className="text-3xl font-black text-yellow-400 mb-2">2</div>
                        <div className="text-sm text-zinc-400">Dimensions Targeted</div>
                      </div>
                      <div className="text-center p-4 border border-zinc-800">
                        <div className="text-3xl font-black text-green-400 mb-2">72hrs</div>
                        <div className="text-sm text-zinc-400">Time to Decision</div>
                      </div>
                      <div className="text-center p-4 border border-zinc-800">
                        <div className="text-3xl font-black text-blue-400 mb-2">GTM</div>
                        <div className="text-sm text-zinc-400">Go-To-Market Focus</div>
                      </div>
                    </div>
                  </div>

                  {/* Dimensions Targeted */}
                  <div>
                    <h3 className="text-xl font-black mb-6">DIMENSIONS TARGETED</h3>
                    <div className="space-y-6">
                      <div className="bg-zinc-950 border border-zinc-800 p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                          <h4 className="font-bold">DECISION LATENCY (20% of GPI)</h4>
                        </div>
                        <p className="text-zinc-400 mb-4">Measures how long go-to-market decisions take. Particle state means products sit in review cycles while competitors ship.</p>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-zinc-500">Particle State:</span>
                              <span>Product launches take years</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-zinc-500">Field State:</span>
                              <span>Ship fast, iterate faster</span>
                            </div>
                          </div>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-zinc-500">Your Result:</span>
                              <span>GO/NO-GO in 72 hours</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-zinc-500">Pattern Break:</span>
                              <span>Endless review → market test</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-zinc-950 border border-zinc-800 p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <h4 className="font-bold">CAPITAL INTENSITY (10% of GPI)</h4>
                        </div>
                        <p className="text-zinc-400 mb-4">Measures capital required to go to market. Evaluates whether the investment makes sense before you burn resources on maybe.</p>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-zinc-500">Particle State:</span>
                              <span>Over-invest in unproven ideas</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-zinc-500">Field State:</span>
                              <span>Right-size capital to evidence</span>
                            </div>
                          </div>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-zinc-500">Your Result:</span>
                              <span>Capital clarity before commit</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-zinc-500">Pattern Break:</span>
                              <span>Sunk cost trap → smart deploy</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Expected Outcomes */}
                  <div>
                    <h3 className="text-xl font-black mb-6">EXPECTED OUTCOMES</h3>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="bg-green-500/10 border border-green-500 p-6">
                        <h4 className="font-bold text-green-500 mb-3 flex items-center gap-2">
                          <Check size={20} />
                          IF GO: SHIP IT
                        </h4>
                        <ul className="text-zinc-400 text-sm space-y-2">
                          <li>• Launch plan with capital requirements</li>
                          <li>• Market entry timeline defined</li>
                          <li>• Investment size right-sized to evidence</li>
                          <li>• First customer targets identified</li>
                          <li>• Error correction checkpoints built in</li>
                        </ul>
                      </div>
                      <div className="bg-red-500/10 border border-red-500 p-6">
                        <h4 className="font-bold text-red-500 mb-3 flex items-center gap-2">
                          <X size={20} />
                          IF NO-GO: KILL IT
                        </h4>
                        <ul className="text-zinc-400 text-sm space-y-2">
                          <li>• Capital saved from bad bet</li>
                          <li>• Clear reasoning why it won't work</li>
                          <li>• Alternative directions evaluated</li>
                          <li>• Resources freed for winning moves</li>
                          <li>• No sunk cost regret downstream</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Protocol in GPI Terms */}
                  <div className="bg-zinc-950 border border-zinc-800 p-8">
                    <h3 className="text-xl font-black mb-4">THE GO-TO-MARKET PROTOCOL</h3>
                    <div className="space-y-6">
                      <div className="flex gap-6 items-start">
                        <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">DAY 1</div>
                        <div className="flex-1">
                          <p className="text-lg mb-2">Market & Capital Assessment</p>
                          <p className="text-zinc-400">Define the product/service/upgrade. Map target market. Calculate capital requirements. Identify what evidence exists.</p>
                        </div>
                      </div>
                      <div className="flex gap-6 items-start">
                        <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">DAY 2</div>
                        <div className="flex-1">
                          <p className="text-lg mb-2">Evidence vs Investment Analysis</p>
                          <p className="text-zinc-400">Does the evidence justify the capital? Competitive landscape. Time-to-market. First customer viability.</p>
                        </div>
                      </div>
                      <div className="flex gap-6 items-start">
                        <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">DAY 3</div>
                        <div className="flex-1">
                          <p className="text-lg mb-2">GO/NO-GO Verdict</p>
                          <p className="text-zinc-400">Ship it or kill it. If GO: launch plan with milestones. If NO-GO: clear rationale and capital saved.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Best For */}
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="border border-zinc-800 p-6">
                      <h3 className="font-bold text-red-600 mb-3">NEW PRODUCT</h3>
                      <p className="text-zinc-400">Should we build this? Will the market pay? How much capital to commit?</p>
                    </div>
                    <div className="border border-zinc-800 p-6">
                      <h3 className="font-bold text-yellow-500 mb-3">NEW SERVICE</h3>
                      <p className="text-zinc-400">Should we offer this? Can we deliver? What's the minimum viable investment?</p>
                    </div>
                    <div className="border border-zinc-800 p-6">
                      <h3 className="font-bold text-green-500 mb-3">UPGRADE / PIVOT</h3>
                      <p className="text-zinc-400">Should we ship this version? Pivot direction? Invest more or cut losses?</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Decision Audit Tab */}
              {activeTab === 'submission' && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-black mb-4">GO-TO-MARKET AUDIT</h2>
                    <p className="text-xl text-zinc-400 mb-8">Define what you're taking to market. We'll evaluate product-market fit and capital requirements. 10 minutes.</p>
                  </div>

                  {!isSubmitted ? (
                    <form onSubmit={handleMarketSubmit} className="space-y-8">
                      <div className="bg-zinc-950 border border-zinc-800 p-8">
                        <h3 className="text-xl font-bold mb-6">MARKET SUBMISSION FORM</h3>

                        <div className="space-y-6">
                          <div>
                            <label className="block text-lg font-bold mb-3">What are you taking to market?</label>
                            <p className="text-zinc-400 text-sm mb-4">Product, service, or upgrade. Be specific about what you're selling.</p>
                            <textarea
                              value={marketData.market}
                              onChange={(e) => setMarketData({...marketData, market: e.target.value})}
                              className="w-full h-32 bg-black border border-zinc-700 p-4 text-white resize-none focus:border-red-600 focus:outline-none"
                              placeholder="New SaaS product for X market...&#10;Professional service offering for Y industry...&#10;Major upgrade to existing product..."
                              required
                            />
                          </div>

                          <div>
                            <label className="block text-lg font-bold mb-3">Who is the target customer?</label>
                            <p className="text-zinc-400 text-sm mb-4">First customer profile. Who pays? What problem do they have?</p>
                            <textarea
                              value={marketData.product}
                              onChange={(e) => setMarketData({...marketData, product: e.target.value})}
                              className="w-full h-32 bg-black border border-zinc-700 p-4 text-white resize-none focus:border-red-600 focus:outline-none"
                              placeholder="Mid-market companies struggling with...&#10;Enterprise buyers who currently use...&#10;SMBs that can't afford..."
                              required
                            />
                          </div>

                          <div>
                            <label className="block text-lg font-bold mb-3">What capital is required?</label>
                            <p className="text-zinc-400 text-sm mb-4">Investment needed to launch. Development, marketing, operations.</p>
                            <textarea
                              value={marketData.customers}
                              onChange={(e) => setMarketData({...marketData, customers: e.target.value})}
                              className="w-full h-32 bg-black border border-zinc-700 p-4 text-white resize-none focus:border-red-600 focus:outline-none"
                              placeholder="$50K for MVP development...&#10;$200K runway for 6-month pilot...&#10;$10K to test market response..."
                              required
                            />
                          </div>

                          <div>
                            <label className="block text-lg font-bold mb-3">What evidence exists?</label>
                            <p className="text-zinc-400 text-sm mb-4">Customer conversations, pilots, market research, competitive intel.</p>
                            <textarea
                              value={marketData.competitors}
                              onChange={(e) => setMarketData({...marketData, competitors: e.target.value})}
                              className="w-full h-32 bg-black border border-zinc-700 p-4 text-white resize-none focus:border-red-600 focus:outline-none"
                              placeholder="Spoke to 10 potential customers...&#10;Competitor raised $5M for similar product...&#10;Existing customers requesting this feature..."
                              required
                            />
                          </div>

                          <div>
                            <label className="block text-lg font-bold mb-3">What's the cost of waiting?</label>
                            <p className="text-zinc-400 text-sm mb-4">Market timing. Competitive window. Opportunity cost.</p>
                            <textarea
                              value={marketData.evidence}
                              onChange={(e) => setMarketData({...marketData, evidence: e.target.value})}
                              className="w-full h-32 bg-black border border-zinc-700 p-4 text-white resize-none focus:border-red-600 focus:outline-none"
                              placeholder="Competitor launching in Q2...&#10;Market window closes in 6 months...&#10;Existing customers churning to alternatives..."
                              required
                            />
                          </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-zinc-800">
                          <button
                            type="submit"
                            className="bg-red-600 px-8 py-4 text-lg font-black hover:bg-red-700 transition-colors"
                          >
                            SUBMIT FOR MARKET SMACKDOWN
                          </button>
                        </div>
                      </div>
                    </form>
                  ) : (
                    <div className="bg-green-500/10 border border-green-500 p-8 text-center">
                      <Check className="text-green-500 mx-auto mb-4" size={48} />
                      <h3 className="text-xl font-bold text-green-500 mb-4">SUBMISSION RECEIVED</h3>
                      <p className="text-lg mb-6">Your go-to-market case is logged. Analysis begins within 2 hours.</p>
                      <p className="text-zinc-400">GO/NO-GO verdict in 72 hours. Ship it or kill it.</p>
                    </div>
                  )}
                </div>
              )}

              {/* Market Analysis Tab */}
              {activeTab === 'analysis' && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-black mb-4">MARKET ANALYSIS</h2>
                    <p className="text-xl text-zinc-400 mb-8">Real-time evaluation of your go-to-market case. Track as we assess product-market fit and capital requirements.</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-zinc-950 border border-zinc-800 p-6">
                      <h3 className="text-xl font-bold mb-4">ANALYSIS PROGRESS</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span>Product/Service Definition</span>
                          <span className="text-green-400">RECEIVED</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Target Market Analysis</span>
                          <span className="text-yellow-400">IN PROGRESS</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Capital Requirements Review</span>
                          <span className="text-zinc-500">PENDING</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Evidence Evaluation</span>
                          <span className="text-zinc-500">PENDING</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>GO/NO-GO Verdict</span>
                          <span className="text-zinc-500">PENDING</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-zinc-950 border border-zinc-800 p-6">
                      <h3 className="text-xl font-bold mb-4">EVALUATION METRICS</h3>
                      <div className="space-y-3 text-sm">
                        <p className="text-zinc-400">Key factors being assessed:</p>
                        <div className="bg-black border border-zinc-700 p-3 min-h-[200px]">
                          <div className="space-y-3 text-zinc-500">
                            <div className="flex justify-between items-center">
                              <span>Product-Market Fit:</span>
                              <span className="font-mono">--/10</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span>Capital Efficiency:</span>
                              <span className="font-mono">--/10</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span>Evidence Strength:</span>
                              <span className="font-mono">--/10</span>
                            </div>
                            <div className="border-t border-zinc-800 pt-3 mt-3">
                              <p className="text-xs">[Live scoring as analysis progresses]</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-zinc-950 border border-zinc-800 p-6">
                    <h3 className="text-xl font-bold mb-4">SMACKDOWN TIMELINE</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-red-600 font-bold mb-2">DAY 1</div>
                        <p className="text-sm text-zinc-400">Market & capital assessment</p>
                      </div>
                      <div className="text-center">
                        <div className="text-red-600 font-bold mb-2">DAY 2</div>
                        <p className="text-sm text-zinc-400">Evidence vs investment analysis</p>
                      </div>
                      <div className="text-center">
                        <div className="text-red-600 font-bold mb-2">DAY 3</div>
                        <p className="text-sm text-zinc-400">GO/NO-GO verdict delivered</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-green-500/10 border border-green-500 p-6">
                      <h4 className="font-bold text-green-500 mb-3 flex items-center gap-2">
                        <TrendingUp size={20} />
                        STRENGTHS IDENTIFIED
                      </h4>
                      <div className="text-zinc-400 text-sm space-y-2">
                        <p>[Market strengths will be tracked here]</p>
                      </div>
                    </div>
                    <div className="bg-red-500/10 border border-red-500 p-6">
                      <h4 className="font-bold text-red-500 mb-3 flex items-center gap-2">
                        <AlertCircle size={20} />
                        RISKS FLAGGED
                      </h4>
                      <div className="text-zinc-400 text-sm space-y-2">
                        <p>[Market risks and capital concerns]</p>
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
                    <p className="text-xl text-zinc-400 mb-8">Ship it or kill it. Clear direction with capital requirements defined.</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-green-500/10 border border-green-500 p-8 text-center">
                      <Check className="text-green-500 mx-auto mb-4" size={64} />
                      <h3 className="text-2xl font-black text-green-500 mb-4">GO: SHIP IT</h3>
                      <p className="text-lg mb-6">Market case validated. Capital requirements clear. Launch.</p>
                      <div className="text-left space-y-4">
                        <h4 className="font-bold text-green-500">SHIP DELIVERABLES:</h4>
                        <ul className="text-zinc-400 text-sm space-y-2">
                          <li>• Launch plan with milestones</li>
                          <li>• Capital deployment schedule</li>
                          <li>• First customer acquisition strategy</li>
                          <li>• Success metrics defined</li>
                          <li>• Error correction checkpoints</li>
                          <li>• 30-60-90 day roadmap</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-red-500/10 border border-red-500 p-8 text-center">
                      <X className="text-red-500 mx-auto mb-4" size={64} />
                      <h3 className="text-2xl font-black text-red-500 mb-4">NO-GO: KILL IT</h3>
                      <p className="text-lg mb-6">Market case doesn't hold. Capital saved. Move on.</p>
                      <div className="text-left space-y-4">
                        <h4 className="font-bold text-red-500">KILL DELIVERABLES:</h4>
                        <ul className="text-zinc-400 text-sm space-y-2">
                          <li>• Clear reasoning why it won't work</li>
                          <li>• Capital saved calculation</li>
                          <li>• Alternative opportunities identified</li>
                          <li>• Resource reallocation plan</li>
                          <li>• Lessons captured for next attempt</li>
                          <li>• No sunk cost regret downstream</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-zinc-950 border border-zinc-800 p-8">
                    <h3 className="text-xl font-bold mb-6">VERDICT BREAKDOWN</h3>
                    <div className="space-y-6">
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="border border-zinc-700 p-4">
                          <h4 className="font-bold text-red-400 mb-3">MARKET FIT ASSESSMENT</h4>
                          <div className="h-20 bg-black border border-zinc-800 p-3 text-zinc-500 text-sm">
                            [Product-market fit evaluation]
                          </div>
                        </div>
                        <div className="border border-zinc-700 p-4">
                          <h4 className="font-bold text-yellow-400 mb-3">CAPITAL ANALYSIS</h4>
                          <div className="h-20 bg-black border border-zinc-800 p-3 text-zinc-500 text-sm">
                            [Investment vs evidence assessment]
                          </div>
                        </div>
                        <div className="border border-zinc-700 p-4">
                          <h4 className="font-bold text-green-400 mb-3">TIMING EVALUATION</h4>
                          <div className="h-20 bg-black border border-zinc-800 p-3 text-zinc-500 text-sm">
                            [Market window and competition]
                          </div>
                        </div>
                      </div>

                      <div className="border border-zinc-700 p-6">
                        <h4 className="font-bold mb-3">FINAL VERDICT</h4>
                        <div className="bg-black border border-zinc-800 p-4 min-h-[120px]">
                          <p className="text-zinc-500 text-sm">[Your GO or NO-GO verdict with complete reasoning. Ship it or kill it. No maybe.]</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-500/10 border border-yellow-500 p-6">
                    <h3 className="text-xl font-bold text-yellow-500 mb-4">THE SMACKDOWN GUARANTEE</h3>
                    <p className="text-zinc-400">You will receive a clear GO or NO-GO verdict in 72 hours. Not maybe. Not "more research needed." A decision. If GO: launch plan with capital requirements. If NO-GO: clear reasoning and capital saved.</p>
                  </div>
                </div>
              )}

              {/* Deploy Tab */}
              {activeTab === 'book' && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-black mb-4">DEPLOY THE SMACKDOWN</h2>
                    <p className="text-xl text-zinc-400 mb-8">72 hours to decide on your product, service, or upgrade. Ship it or kill it.</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-zinc-950 border border-zinc-800 p-8">
                      <h3 className="text-2xl font-bold mb-6">INVESTMENT: $2,250</h3>
                      <div className="space-y-4 mb-8">
                        <div className="flex items-center gap-3">
                          <Check className="text-green-500" size={18} />
                          <span>Product-market fit evaluation</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Check className="text-green-500" size={18} />
                          <span>Capital requirements analysis</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Check className="text-green-500" size={18} />
                          <span>Evidence vs investment assessment</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Check className="text-green-500" size={18} />
                          <span>Competitive timing evaluation</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Check className="text-green-500" size={18} />
                          <span>GO/NO-GO verdict with reasoning</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Check className="text-green-500" size={18} />
                          <span>Launch plan or kill rationale</span>
                        </div>
                      </div>

                      <Link
                        href="https://outlook.office.com/owa/calendar/IG@imaginationg.studio/bookings/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full bg-red-600 px-8 py-4 text-lg font-black text-center hover:bg-red-700 transition-colors"
                      >
                        DEPLOY SMACKDOWN →
                      </Link>
                    </div>

                    <div className="space-y-6">
                      <div className="bg-yellow-500/10 border border-yellow-500 p-6">
                        <h4 className="font-bold text-yellow-500 mb-3">DIMENSIONS TARGETED</h4>
                        <p className="text-zinc-400 mb-3">Market Smackdown targets two GPI dimensions:</p>
                        <div className="text-sm space-y-1">
                          <p><span className="text-red-400 font-bold">Decision Latency:</span> Stop sitting on market decisions</p>
                          <p><span className="text-yellow-400 font-bold">Capital Intensity:</span> Right-size investment to evidence</p>
                        </div>
                        <p className="text-yellow-500 font-bold mt-3">Expected: -1.0 GPI points</p>
                      </div>

                      <div className="bg-zinc-900 border border-zinc-700 p-6">
                        <h4 className="font-bold mb-3">BINARY OUTCOMES</h4>
                        <div className="space-y-3 text-sm">
                          <div className="flex items-center gap-2">
                            <Check className="text-green-500" size={16} />
                            <span>GO: Launch plan + capital deployment</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <X className="text-red-500" size={16} />
                            <span>NO-GO: Capital saved + clear reasoning</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-zinc-900 border border-zinc-700 p-6">
                        <h4 className="font-bold mb-3">MEASURE YOUR GPI FIRST</h4>
                        <p className="text-zinc-400 mb-4">Take the GPI diagnostic to measure your organization's current state.</p>
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

export default TheMarketSmackdownPage;