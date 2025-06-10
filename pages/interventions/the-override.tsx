import type { NextPage } from 'next';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import SEOHead from '../../components/SEOHead';
import Navigation from '../../components/Navigation';
import RelatedContent from '../../components/RelatedContent';
import { Check, AlertCircle, Calendar, Video, FileText, BarChart3, Clock, Users, Zap, Target } from 'lucide-react';

const TheOverridePage: NextPage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [patternData, setPatternData] = useState({
    stuckPattern: '',
    realProblem: '',
    quickWin: '',
    blockedBy: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handlePatternSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    console.log('Pattern audit submitted:', patternData);
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: FileText },
    { id: 'audit', label: 'Pattern Audit', icon: Target },
    { id: 'override', label: 'Live Override', icon: Zap },
    { id: 'lock-in', label: 'Lock-In', icon: BarChart3 },
    { id: 'book', label: 'Book Now', icon: Calendar }
  ];

  return (
    <>
      <SEOHead
        title="THE OVERRIDE - Break Stuck Patterns in 30 Days | IMAGINATION G"
        description="30-day live pattern break. Stop optimizing around the problem. Fix it. $3,000."
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
                INTERVENTION PORTAL: THE OVERRIDE
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1]">
                THE OVERRIDE<span className="text-red-600">.</span>
              </h1>
              
              <p className="text-xl text-zinc-400 mb-8 max-w-2xl">
                30-day live pattern break. Stop optimizing around the problem. Fix it. No meetings about meetings.
              </p>

              <div className="flex flex-wrap gap-6 items-center mb-8">
                <span className="text-4xl font-black">$3,000</span>
                <span className="text-zinc-500">|</span>
                <span className="text-lg text-zinc-400">30 Days. Live Operations. Pattern Broken.</span>
                <span className="text-zinc-500">|</span>
                <span className="text-sm text-green-400 bg-green-400/10 px-3 py-1 rounded-full">MOMENTUM GUARANTEED</span>
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
                    <h2 className="text-3xl font-black mb-8">BREAK THE PATTERN THAT'S KILLING YOU</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <div className="flex items-start gap-4">
                          <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                          <p className="text-lg">Pattern audit and real problem identification</p>
                        </div>
                        <div className="flex items-start gap-4">
                          <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                          <p className="text-lg">Daily pattern interrupts via Teams</p>
                        </div>
                        <div className="flex items-start gap-4">
                          <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                          <p className="text-lg">Live operations override</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-start gap-4">
                          <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                          <p className="text-lg">Weekly momentum measurement</p>
                        </div>
                        <div className="flex items-start gap-4">
                          <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                          <p className="text-lg">New pattern lock-in protocols</p>
                        </div>
                        <div className="flex items-start gap-4">
                          <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                          <p className="text-lg">Self-sustaining system handoff</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-zinc-950 border border-zinc-800 p-8">
                    <h3 className="text-xl font-black mb-4">THE SIMPLE PROCESS</h3>
                    <div className="space-y-6">
                      <div className="flex gap-6 items-start">
                        <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">DAY 1-3</div>
                        <div className="flex-1">
                          <p className="text-lg mb-2">Pattern audit: What's really stuck and why</p>
                          <p className="text-zinc-400">Identify the actual pattern that's killing momentum</p>
                        </div>
                      </div>
                      <div className="flex gap-6 items-start">
                        <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">DAY 4-21</div>
                        <div className="flex-1">
                          <p className="text-lg mb-2">Daily pattern breaks via Teams calls</p>
                          <p className="text-zinc-400">10-minute daily interrupts to stop the drift in real-time</p>
                        </div>
                      </div>
                      <div className="flex gap-6 items-start">
                        <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">DAY 22-30</div>
                        <div className="flex-1">
                          <p className="text-lg mb-2">New pattern lock-in and handoff</p>
                          <p className="text-zinc-400">Make the new way automatic, transfer control back to you</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="border border-zinc-800 p-6">
                      <h3 className="font-bold text-red-600 mb-3">TEAMS</h3>
                      <p className="text-zinc-400">Stuck in meeting loops, decision paralysis, or analysis death spirals</p>
                    </div>
                    <div className="border border-zinc-800 p-6">
                      <h3 className="font-bold text-red-600 mb-3">FOUNDERS</h3>
                      <p className="text-zinc-400">Know what needs to happen but can't break the old pattern</p>
                    </div>
                    <div className="border border-zinc-800 p-6">
                      <h3 className="font-bold text-red-600 mb-3">LEADERS</h3>
                      <p className="text-zinc-400">Ready to stop managing symptoms and fix the actual problem</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Pattern Audit Tab */}
              {activeTab === 'audit' && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-black mb-4">PATTERN AUDIT</h2>
                    <p className="text-xl text-zinc-400 mb-8">Identify the stuck pattern that's killing your momentum. 5 minutes to surface what's really broken.</p>
                  </div>

                  {!isSubmitted ? (
                    <form onSubmit={handlePatternSubmit} className="space-y-8">
                      <div className="bg-zinc-950 border border-zinc-800 p-8">
                        <h3 className="text-xl font-bold mb-6">STUCK PATTERN FORM</h3>
                        
                        <div className="space-y-6">
                          <div>
                            <label className="block text-lg font-bold mb-3">What pattern are you stuck in?</label>
                            <p className="text-zinc-400 text-sm mb-4">The thing you keep doing that isn't working. Be specific.</p>
                            <textarea
                              value={patternData.stuckPattern}
                              onChange={(e) => setPatternData({...patternData, stuckPattern: e.target.value})}
                              className="w-full h-32 bg-black border border-zinc-700 p-4 text-white resize-none focus:border-red-600 focus:outline-none"
                              placeholder="Endless planning meetings that never result in action...&#10;Debating strategy for months while competitors ship...&#10;Getting stuck in analysis paralysis on decisions..."
                              required
                            />
                          </div>

                          <div>
                            <label className="block text-lg font-bold mb-3">What's the real problem underneath?</label>
                            <p className="text-zinc-400 text-sm mb-4">What are you really avoiding? What's the fear driving the pattern?</p>
                            <textarea
                              value={patternData.realProblem}
                              onChange={(e) => setPatternData({...patternData, realProblem: e.target.value})}
                              className="w-full h-32 bg-black border border-zinc-700 p-4 text-white resize-none focus:border-red-600 focus:outline-none"
                              placeholder="Fear of making the wrong decision...&#10;Don't know which option will actually work...&#10;Avoiding conflict about priorities..."
                              required
                            />
                          </div>

                          <div>
                            <label className="block text-lg font-bold mb-3">What would be a quick win if you just did it?</label>
                            <p className="text-zinc-400 text-sm mb-4">The obvious thing everyone knows should happen but somehow doesn't.</p>
                            <textarea
                              value={patternData.quickWin}
                              onChange={(e) => setPatternData({...patternData, quickWin: e.target.value})}
                              className="w-full h-32 bg-black border border-zinc-700 p-4 text-white resize-none focus:border-red-600 focus:outline-none"
                              placeholder="Just pick one option and test it for 2 weeks...&#10;Stop the weekly status meetings and start shipping...&#10;Make the hard decision we've been avoiding..."
                              required
                            />
                          </div>

                          <div>
                            <label className="block text-lg font-bold mb-3">What's blocking you from just doing that?</label>
                            <p className="text-zinc-400 text-sm mb-4">The real reason. Not the official reason - the actual one.</p>
                            <textarea
                              value={patternData.blockedBy}
                              onChange={(e) => setPatternData({...patternData, blockedBy: e.target.value})}
                              className="w-full h-32 bg-black border border-zinc-700 p-4 text-white resize-none focus:border-red-600 focus:outline-none"
                              placeholder="Afraid the team will resist change...&#10;Don't want to be wrong publicly...&#10;Comfortable with the current dysfunction..."
                              required
                            />
                          </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-zinc-800">
                          <button
                            type="submit"
                            className="bg-red-600 px-8 py-4 text-lg font-black hover:bg-red-700 transition-colors"
                          >
                            SUBMIT PATTERN AUDIT
                          </button>
                        </div>
                      </div>
                    </form>
                  ) : (
                    <div className="bg-green-500/10 border border-green-500 p-8 text-center">
                      <Check className="text-green-500 mx-auto mb-4" size={48} />
                      <h3 className="text-xl font-bold text-green-500 mb-4">PATTERN IDENTIFIED</h3>
                      <p className="text-lg mb-6">Your stuck pattern has been analyzed. Override protocol begins in 48 hours.</p>
                      <p className="text-zinc-400">You'll receive your first pattern interrupt via Teams within 2 business days.</p>
                    </div>
                  )}
                </div>
              )}

              {/* Live Override Tab */}
              {activeTab === 'override' && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-black mb-4">LIVE PATTERN OVERRIDE</h2>
                    <p className="text-xl text-zinc-400 mb-8">Daily 10-minute interrupts to break the pattern in real-time. No theory. Just action.</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-zinc-950 border border-zinc-800 p-6">
                      <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                        <Zap className="text-red-600" size={24} />
                        DAILY INTERRUPTS
                      </h3>
                      <div className="space-y-4">
                        <div className="bg-blue-500/10 border border-blue-500 p-4">
                          <p className="text-blue-400 font-bold mb-2">Microsoft Teams Quick Calls</p>
                          <p className="text-sm text-zinc-400 mb-3">10 minutes max. Direct intervention when you're about to repeat the pattern.</p>
                        </div>
                        <div className="space-y-2 text-sm">
                          <p className="font-bold">INTERRUPT TRIGGERS:</p>
                          <ul className="space-y-1 text-zinc-400">
                            <li>• Scheduling another planning meeting</li>
                            <li>• Starting to overthink a decision</li>
                            <li>• Avoiding the obvious next step</li>
                            <li>• Getting stuck in analysis mode</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-zinc-950 border border-zinc-800 p-6">
                      <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                        <Target className="text-red-600" size={24} />
                        PATTERN BREAKS
                      </h3>
                      <div className="space-y-4">
                        <p className="text-zinc-400 text-sm">Real-time interventions to stop drift and force action:</p>
                        <div className="space-y-3">
                          <div className="bg-black border border-zinc-700 p-3">
                            <p className="text-sm font-bold text-green-400 mb-1">INSTEAD OF: Another meeting to discuss</p>
                            <p className="text-xs text-zinc-400">WE DO: Make the decision in the next 10 minutes</p>
                          </div>
                          <div className="bg-black border border-zinc-700 p-3">
                            <p className="text-sm font-bold text-green-400 mb-1">INSTEAD OF: More analysis</p>
                            <p className="text-xs text-zinc-400">WE DO: Test the hypothesis this week</p>
                          </div>
                          <div className="bg-black border border-zinc-700 p-3">
                            <p className="text-sm font-bold text-green-400 mb-1">INSTEAD OF: Perfect planning</p>
                            <p className="text-xs text-zinc-400">WE DO: Ship the minimum viable version today</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-zinc-950 border border-zinc-800 p-6">
                    <h3 className="text-xl font-bold mb-4">WEEKLY MOMENTUM CHECK</h3>
                    <div className="grid md:grid-cols-4 gap-6">
                      <div className="text-center">
                        <div className="text-red-600 font-mono text-sm mb-2">WEEK 1</div>
                        <p className="text-xs text-zinc-400">Pattern identified<br />First interrupts deployed</p>
                      </div>
                      <div className="text-center">
                        <div className="text-red-600 font-mono text-sm mb-2">WEEK 2</div>
                        <p className="text-xs text-zinc-400">Old pattern breaking<br />New actions taking hold</p>
                      </div>
                      <div className="text-center">
                        <div className="text-red-600 font-mono text-sm mb-2">WEEK 3</div>
                        <p className="text-xs text-zinc-400">Momentum building<br />Resistance decreasing</p>
                      </div>
                      <div className="text-center">
                        <div className="text-red-600 font-mono text-sm mb-2">WEEK 4</div>
                        <p className="text-xs text-zinc-400">New pattern locked<br />Self-sustaining system</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-500/10 border border-yellow-500 p-6">
                    <h4 className="font-bold text-yellow-500 mb-3">REAL-TIME ALERTS</h4>
                    <p className="text-zinc-400">You'll get Teams notifications when we detect you're about to fall back into the old pattern. Immediate intervention available on-demand.</p>
                  </div>
                </div>
              )}

              {/* Lock-In Tab */}
              {activeTab === 'lock-in' && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-black mb-4">PATTERN LOCK-IN</h2>
                    <p className="text-xl text-zinc-400 mb-8">Make the new pattern automatic. Transfer control back to you. Ensure the change sticks.</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-zinc-950 border border-zinc-800 p-6">
                      <h3 className="text-xl font-bold mb-4">NEW PATTERN AUTOMATION</h3>
                      <div className="space-y-4">
                        <p className="text-zinc-400 text-sm">Systems and triggers to make the new way automatic:</p>
                        <div className="space-y-3">
                          <div className="bg-black border border-zinc-700 p-3">
                            <p className="text-sm font-bold text-green-400 mb-1">DECISION PROTOCOLS</p>
                            <p className="text-xs text-zinc-400">Simple rules for when to decide vs. when to gather more info</p>
                          </div>
                          <div className="bg-black border border-zinc-700 p-3">
                            <p className="text-sm font-bold text-green-400 mb-1">ACTION TRIGGERS</p>
                            <p className="text-xs text-zinc-400">Automatic next steps that prevent drift back to old patterns</p>
                          </div>
                          <div className="bg-black border border-zinc-700 p-3">
                            <p className="text-sm font-bold text-green-400 mb-1">MOMENTUM METRICS</p>
                            <p className="text-xs text-zinc-400">Simple measures to track if the new pattern is working</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-zinc-950 border border-zinc-800 p-6">
                      <h3 className="text-xl font-bold mb-4">SELF-MONITORING TOOLKIT</h3>
                      <div className="space-y-4">
                        <p className="text-zinc-400 text-sm">Tools to detect and correct drift without external help:</p>
                        <div className="space-y-3">
                          <div className="bg-black border border-zinc-700 p-3">
                            <p className="text-sm font-bold text-yellow-400 mb-1">EARLY WARNING SIGNALS</p>
                            <p className="text-xs text-zinc-400">How to spot when you're starting to slip back</p>
                          </div>
                          <div className="bg-black border border-zinc-700 p-3">
                            <p className="text-sm font-bold text-yellow-400 mb-1">SELF-CORRECTION METHODS</p>
                            <p className="text-xs text-zinc-400">Quick interventions you can deploy yourself</p>
                          </div>
                          <div className="bg-black border border-zinc-700 p-3">
                            <p className="text-sm font-bold text-yellow-400 mb-1">TEAM ACCOUNTABILITY</p>
                            <p className="text-xs text-zinc-400">How your team can help maintain the new pattern</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-zinc-950 border border-zinc-800 p-6">
                    <h3 className="text-xl font-bold mb-6">HANDOFF CHECKLIST</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold text-green-500 mb-3">SYSTEMS IN PLACE</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2">
                            <Check className="text-green-500" size={16} />
                            <span>New decision process documented</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Check className="text-green-500" size={16} />
                            <span>Action triggers automated</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Check className="text-green-500" size={16} />
                            <span>Momentum metrics defined</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Check className="text-green-500" size={16} />
                            <span>Team aligned on new pattern</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-blue-500 mb-3">CAPABILITIES TRANSFERRED</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2">
                            <Check className="text-blue-500" size={16} />
                            <span>Drift detection skills learned</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Check className="text-blue-500" size={16} />
                            <span>Self-correction methods practiced</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Check className="text-blue-500" size={16} />
                            <span>Pattern interrupt tools ready</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Check className="text-blue-500" size={16} />
                            <span>Independent operation confirmed</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-500/10 border border-green-500 p-6">
                    <h3 className="text-xl font-bold text-green-500 mb-4">GUARANTEE: MOMENTUM OR EXTEND</h3>
                    <p className="text-zinc-400">If you're not showing clear momentum and pattern change by day 30, we extend until you are. The old pattern gets broken, period.</p>
                  </div>
                </div>
              )}

              {/* Book Now Tab */}
              {activeTab === 'book' && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-black mb-4">BOOK THE OVERRIDE</h2>
                    <p className="text-xl text-zinc-400 mb-8">30 days to break the pattern that's killing your momentum. No meetings about meetings. Just action.</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-zinc-950 border border-zinc-800 p-8">
                      <h3 className="text-2xl font-bold mb-6">INVESTMENT: $3,000</h3>
                      <div className="space-y-4 mb-8">
                        <div className="flex items-center gap-3">
                          <Check className="text-green-500" size={18} />
                          <span>Pattern audit and real problem identification</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Check className="text-green-500" size={18} />
                          <span>Daily pattern interrupts via Teams</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Check className="text-green-500" size={18} />
                          <span>Live operations override</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Check className="text-green-500" size={18} />
                          <span>Weekly momentum measurement</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Check className="text-green-500" size={18} />
                          <span>New pattern lock-in system</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Check className="text-green-500" size={18} />
                          <span>Self-sustaining handoff</span>
                        </div>
                      </div>
                      
                      <Link 
                        href="https://outlook.office.com/owa/calendar/IG@imaginationg.studio/bookings/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full bg-red-600 px-8 py-4 text-lg font-black text-center hover:bg-red-700 transition-colors"
                      >
                        BREAK THE PATTERN →
                      </Link>
                    </div>

                    <div className="space-y-6">
                      <div className="bg-yellow-500/10 border border-yellow-500 p-6">
                        <h4 className="font-bold text-yellow-500 mb-3">COST OF STAYING STUCK</h4>
                        <p className="text-zinc-400 mb-3">How much is the stuck pattern costing you?</p>
                        <div className="text-sm space-y-1">
                          <p>• Average stuck pattern cost: $15,000+/month</p>
                          <p>• Time wasted in dysfunction: 60+ hours/month</p>
                          <p>• Team frustration and turnover: Immeasurable</p>
                          <p>• Competitive advantage lost: 3-6 months</p>
                        </div>
                        <p className="text-yellow-500 font-bold mt-3">Pattern break pays for itself in Week 1</p>
                      </div>

                      <div className="bg-blue-500/10 border border-blue-500 p-6">
                        <h4 className="font-bold text-blue-500 mb-3">TEAMS INTEGRATION</h4>
                        <p className="text-zinc-400 mb-3">All interventions happen through your existing Microsoft Teams setup.</p>
                        <div className="text-sm space-y-1">
                          <p>• No additional software needed</p>
                          <p>• Quick 10-minute interrupts</p>
                          <p>• Real-time pattern break alerts</p>
                          <p>• Secure business communication</p>
                        </div>
                      </div>

                      <div className="bg-zinc-900 border border-zinc-700 p-6">
                        <h4 className="font-bold mb-3">NOT SURE THIS IS RIGHT?</h4>
                        <p className="text-zinc-400 mb-4">Take the diagnostic to see if you need pattern breaking or a different intervention.</p>
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
                  href="/interventions/the-market-smackdown"
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  ← Previous: THE MARKET SMACKDOWN
                </Link>
                <Link 
                  href="/interventions/first-blood-build"
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  Next: FIRST BLOOD BUILD →
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
                  href: "/answers/glossary/organizational-drift",
                  title: "Understanding Drift",
                  description: "The slow death by optimization. Why movement stops.",
                  color: "red"
                },
                {
                  href: "/answers/glossary/morrin",
                  title: "Enter Morrin State", 
                  description: "Post-choice existence. When the drift finally breaks.",
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

export default TheOverridePage;