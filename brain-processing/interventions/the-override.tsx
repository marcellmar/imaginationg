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
    { id: 'overview', label: 'GPI Impact', icon: FileText },
    { id: 'audit', label: 'Lock-In Audit', icon: Target },
    { id: 'override', label: 'Daily Override', icon: Zap },
    { id: 'lock-in', label: 'GPI Tracking', icon: BarChart3 },
    { id: 'book', label: 'Deploy', icon: Calendar }
  ];

  return (
    <>
      <SEOHead
        title="THE OVERRIDE - Break Structural Lock-In | IMAGINATION G"
        description="Target Structural Lock-In and Error Correction dimensions. 30-day pattern break. Force adaptation. -1.5 GPI points. Move toward field state."
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
                Break structural lock-in and accelerate error correction. 30-day daily pattern interrupts. Force adaptation toward field state.
              </p>

              <div className="flex flex-wrap gap-6 items-center mb-6">
                <span className="text-4xl font-black">$3,000</span>
                <span className="text-zinc-500">|</span>
                <span className="text-lg text-zinc-400">30 Days. Live Operations. Pattern Broken.</span>
                <span className="text-zinc-500">|</span>
                <span className="text-sm text-green-400 bg-green-400/10 px-3 py-1 rounded-full">MOMENTUM GUARANTEED</span>
              </div>

              {/* GPI Targeting */}
              <div className="flex flex-wrap items-center gap-4 mb-8 p-4 bg-zinc-950 border border-zinc-800 rounded-lg">
                <Target className="text-red-600" size={20} />
                <span className="text-xs text-zinc-500 uppercase">GPI Targets:</span>
                <span className="text-sm font-mono bg-red-600/20 text-red-400 px-3 py-1 rounded">Structural Lock-In</span>
                <span className="text-sm font-mono bg-red-600/20 text-red-400 px-3 py-1 rounded">Error Correction</span>
                <span className="text-zinc-700">|</span>
                <span className="text-xs text-zinc-500">
                  Recommended when <span className="font-mono text-yellow-400">GPI &gt; 7.0</span>
                </span>
                <span className="text-zinc-700">|</span>
                <span className="text-xs text-zinc-500">
                  Expected: <span className="font-mono text-green-400">-1.5 points</span>
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
                        <div className="text-3xl font-black text-red-600 mb-2">-1.5</div>
                        <div className="text-sm text-zinc-400">Expected GPI Reduction</div>
                      </div>
                      <div className="text-center p-4 border border-zinc-800">
                        <div className="text-3xl font-black text-yellow-400 mb-2">2</div>
                        <div className="text-sm text-zinc-400">Dimensions Targeted</div>
                      </div>
                      <div className="text-center p-4 border border-zinc-800">
                        <div className="text-3xl font-black text-green-400 mb-2">30</div>
                        <div className="text-sm text-zinc-400">Days to Field State</div>
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
                          <h4 className="font-bold">STRUCTURAL LOCK-IN (15% of GPI)</h4>
                        </div>
                        <p className="text-zinc-400 mb-4">Measures how easily the organization can change direction. Particle state means patterns are calcified and resist change.</p>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-zinc-500">Particle State:</span>
                            <span>Patterns repeat despite failure</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-zinc-500">Field State:</span>
                            <span>Adapts when something isn't working</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-zinc-950 border border-zinc-800 p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                          <h4 className="font-bold">ERROR CORRECTION (20% of GPI)</h4>
                        </div>
                        <p className="text-zinc-400 mb-4">Measures how quickly mistakes are detected and fixed. Particle state hides errors or takes months to correct.</p>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-zinc-500">Particle State:</span>
                            <span>Errors hidden, denied, or slow to fix</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-zinc-500">Field State:</span>
                            <span>Fast feedback, fast correction</span>
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
                          <p className="text-lg">Structural lock-in patterns identified and broken</p>
                        </div>
                        <div className="flex items-start gap-4">
                          <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                          <p className="text-lg">Error correction loops accelerated</p>
                        </div>
                        <div className="flex items-start gap-4">
                          <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                          <p className="text-lg">Daily pattern interrupts via Teams</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-start gap-4">
                          <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                          <p className="text-lg">New adaptation protocols installed</p>
                        </div>
                        <div className="flex items-start gap-4">
                          <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                          <p className="text-lg">Self-monitoring capability transferred</p>
                        </div>
                        <div className="flex items-start gap-4">
                          <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                          <p className="text-lg">GPI re-measurement at day 30</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Protocol in GPI Terms */}
                  <div className="bg-zinc-950 border border-zinc-800 p-8">
                    <h3 className="text-xl font-black mb-4">THE LOCK-IN BREAK PROTOCOL</h3>
                    <div className="space-y-6">
                      <div className="flex gap-6 items-start">
                        <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">DAY 1-3</div>
                        <div className="flex-1">
                          <p className="text-lg mb-2">Structural Lock-In Audit</p>
                          <p className="text-zinc-400">Map calcified patterns. Identify what keeps repeating despite failure.</p>
                        </div>
                      </div>
                      <div className="flex gap-6 items-start">
                        <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">DAY 4-21</div>
                        <div className="flex-1">
                          <p className="text-lg mb-2">Daily Pattern Interrupts</p>
                          <p className="text-zinc-400">Real-time interventions when lock-in behavior detected. Error correction acceleration.</p>
                        </div>
                      </div>
                      <div className="flex gap-6 items-start">
                        <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">DAY 22-30</div>
                        <div className="flex-1">
                          <p className="text-lg mb-2">Field State Lock-In</p>
                          <p className="text-zinc-400">New patterns become default. Error correction is automatic. GPI re-measurement.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Best For */}
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="border border-zinc-800 p-6">
                      <h3 className="font-bold text-red-600 mb-3">GPI 7.0-8.0</h3>
                      <p className="text-zinc-400">Clear lock-in patterns. Same meetings, same problems, no change.</p>
                    </div>
                    <div className="border border-zinc-800 p-6">
                      <h3 className="font-bold text-red-600 mb-3">GPI 8.0-9.0</h3>
                      <p className="text-zinc-400">Severe calcification. Errors take months to correct. Patterns resist all change.</p>
                    </div>
                    <div className="border border-zinc-800 p-6">
                      <h3 className="font-bold text-red-600 mb-3">GPI 9.0+</h3>
                      <p className="text-zinc-400">Terminal particle state. Without intervention, organization will calcify completely.</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Lock-In Audit Tab */}
              {activeTab === 'audit' && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-black mb-4">STRUCTURAL LOCK-IN AUDIT</h2>
                    <p className="text-xl text-zinc-400 mb-8">Map the calcified patterns creating particle-state behavior. 5 minutes to identify what's resisting change.</p>
                  </div>

                  {!isSubmitted ? (
                    <form onSubmit={handlePatternSubmit} className="space-y-8">
                      <div className="bg-zinc-950 border border-zinc-800 p-8">
                        <h3 className="text-xl font-bold mb-6">LOCK-IN IDENTIFICATION FORM</h3>

                        <div className="space-y-6">
                          <div>
                            <label className="block text-lg font-bold mb-3">What pattern keeps repeating despite failure?</label>
                            <p className="text-zinc-400 text-sm mb-4">The structural lock-in. What happens over and over even though everyone knows it doesn't work?</p>
                            <textarea
                              value={patternData.stuckPattern}
                              onChange={(e) => setPatternData({...patternData, stuckPattern: e.target.value})}
                              className="w-full h-32 bg-black border border-zinc-700 p-4 text-white resize-none focus:border-red-600 focus:outline-none"
                              placeholder="Same planning meetings, same lack of action...&#10;Same approval chains that block everything...&#10;Same excuses for why things can't change..."
                              required
                            />
                          </div>

                          <div>
                            <label className="block text-lg font-bold mb-3">What errors take too long to correct?</label>
                            <p className="text-zinc-400 text-sm mb-4">Error Correction dimension. Where do mistakes get hidden or take months to fix?</p>
                            <textarea
                              value={patternData.realProblem}
                              onChange={(e) => setPatternData({...patternData, realProblem: e.target.value})}
                              className="w-full h-32 bg-black border border-zinc-700 p-4 text-white resize-none focus:border-red-600 focus:outline-none"
                              placeholder="Product issues that take quarters to address...&#10;Team problems that everyone pretends don't exist...&#10;Strategic mistakes that get defended instead of fixed..."
                              required
                            />
                          </div>

                          <div>
                            <label className="block text-lg font-bold mb-3">What would field-state look like here?</label>
                            <p className="text-zinc-400 text-sm mb-4">If you could adapt instantly, what would change?</p>
                            <textarea
                              value={patternData.quickWin}
                              onChange={(e) => setPatternData({...patternData, quickWin: e.target.value})}
                              className="w-full h-32 bg-black border border-zinc-700 p-4 text-white resize-none focus:border-red-600 focus:outline-none"
                              placeholder="Decide and test in days, not months...&#10;Kill what's not working immediately...&#10;Errors corrected same day they're found..."
                              required
                            />
                          </div>

                          <div>
                            <label className="block text-lg font-bold mb-3">What's enforcing the lock-in?</label>
                            <p className="text-zinc-400 text-sm mb-4">What structural forces keep the pattern calcified?</p>
                            <textarea
                              value={patternData.blockedBy}
                              onChange={(e) => setPatternData({...patternData, blockedBy: e.target.value})}
                              className="w-full h-32 bg-black border border-zinc-700 p-4 text-white resize-none focus:border-red-600 focus:outline-none"
                              placeholder="Incentives that reward the old way...&#10;Fear of admitting past decisions were wrong...&#10;Political structures that resist change..."
                              required
                            />
                          </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-zinc-800">
                          <button
                            type="submit"
                            className="bg-red-600 px-8 py-4 text-lg font-black hover:bg-red-700 transition-colors"
                          >
                            SUBMIT LOCK-IN AUDIT
                          </button>
                        </div>
                      </div>
                    </form>
                  ) : (
                    <div className="bg-green-500/10 border border-green-500 p-8 text-center">
                      <Check className="text-green-500 mx-auto mb-4" size={48} />
                      <h3 className="text-xl font-bold text-green-500 mb-4">LOCK-IN MAPPED</h3>
                      <p className="text-lg mb-6">Your structural lock-in points are identified. Override protocol begins in 48 hours.</p>
                      <p className="text-zinc-400">Daily pattern interrupts via Teams starting within 2 business days.</p>
                    </div>
                  )}
                </div>
              )}

              {/* Daily Override Tab */}
              {activeTab === 'override' && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-black mb-4">DAILY OVERRIDE PROTOCOL</h2>
                    <p className="text-xl text-zinc-400 mb-8">Real-time interventions to break lock-in and accelerate error correction. 10-minute daily pattern interrupts.</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-zinc-950 border border-zinc-800 p-6">
                      <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                        <Zap className="text-red-600" size={24} />
                        LOCK-IN INTERRUPTS
                      </h3>
                      <div className="space-y-4">
                        <div className="bg-blue-500/10 border border-blue-500 p-4">
                          <p className="text-blue-400 font-bold mb-2">Microsoft Teams Quick Calls</p>
                          <p className="text-sm text-zinc-400 mb-3">10 minutes max. Direct intervention when structural lock-in behavior detected.</p>
                        </div>
                        <div className="space-y-2 text-sm">
                          <p className="font-bold">PARTICLE-STATE TRIGGERS:</p>
                          <ul className="space-y-1 text-zinc-400">
                            <li>• Repeating a pattern that already failed</li>
                            <li>• Hiding or defending an error</li>
                            <li>• Resisting obvious needed change</li>
                            <li>• Delaying correction of known problems</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-zinc-950 border border-zinc-800 p-6">
                      <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                        <Target className="text-red-600" size={24} />
                        FIELD-STATE FORCING
                      </h3>
                      <div className="space-y-4">
                        <p className="text-zinc-400 text-sm">Real-time dimension corrections:</p>
                        <div className="space-y-3">
                          <div className="bg-black border border-zinc-700 p-3">
                            <p className="text-sm font-bold text-green-400 mb-1">LOCK-IN: Same meeting, same outcome</p>
                            <p className="text-xs text-zinc-400">OVERRIDE: Cancel it. Do something different now.</p>
                          </div>
                          <div className="bg-black border border-zinc-700 p-3">
                            <p className="text-sm font-bold text-green-400 mb-1">ERROR: Taking weeks to address</p>
                            <p className="text-xs text-zinc-400">OVERRIDE: Fix today. Correct in hours not months.</p>
                          </div>
                          <div className="bg-black border border-zinc-700 p-3">
                            <p className="text-sm font-bold text-green-400 mb-1">PATTERN: We've always done it this way</p>
                            <p className="text-xs text-zinc-400">OVERRIDE: Not anymore. New pattern starts now.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-zinc-950 border border-zinc-800 p-6">
                    <h3 className="text-xl font-bold mb-4">GPI DIMENSION TRACKING BY WEEK</h3>
                    <div className="grid md:grid-cols-4 gap-6">
                      <div className="text-center">
                        <div className="text-red-600 font-mono text-sm mb-2">WEEK 1</div>
                        <p className="text-xs text-zinc-400">Lock-in baseline measured<br />First pattern interrupts</p>
                      </div>
                      <div className="text-center">
                        <div className="text-red-600 font-mono text-sm mb-2">WEEK 2</div>
                        <p className="text-xs text-zinc-400">Error Correction accelerating<br />New patterns emerging</p>
                      </div>
                      <div className="text-center">
                        <div className="text-red-600 font-mono text-sm mb-2">WEEK 3</div>
                        <p className="text-xs text-zinc-400">Lock-in resistance dropping<br />Field-state behaviors growing</p>
                      </div>
                      <div className="text-center">
                        <div className="text-red-600 font-mono text-sm mb-2">WEEK 4</div>
                        <p className="text-xs text-zinc-400">Field state locked in<br />GPI re-measurement</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-500/10 border border-yellow-500 p-6">
                    <h4 className="font-bold text-yellow-500 mb-3">REAL-TIME DIMENSION ALERTS</h4>
                    <p className="text-zinc-400">Teams notifications when particle-state behavior detected. Immediate intervention to correct Structural Lock-In and Error Correction dimensions on the spot.</p>
                  </div>
                </div>
              )}

              {/* GPI Tracking Tab */}
              {activeTab === 'lock-in' && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-black mb-4">GPI TRACKING & RE-MEASUREMENT</h2>
                    <p className="text-xl text-zinc-400 mb-8">Track dimension improvement. Lock in field-state patterns. GPI re-measurement at day 30.</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-zinc-950 border border-zinc-800 p-6">
                      <h3 className="text-xl font-bold mb-4">STRUCTURAL LOCK-IN TRACKING</h3>
                      <div className="space-y-4">
                        <p className="text-zinc-400 text-sm">Field-state patterns that replace calcified behaviors:</p>
                        <div className="space-y-3">
                          <div className="bg-black border border-zinc-700 p-3">
                            <p className="text-sm font-bold text-green-400 mb-1">ADAPTATION PROTOCOLS</p>
                            <p className="text-xs text-zinc-400">New patterns for responding to failure with change</p>
                          </div>
                          <div className="bg-black border border-zinc-700 p-3">
                            <p className="text-sm font-bold text-green-400 mb-1">PATTERN BREAK TRIGGERS</p>
                            <p className="text-xs text-zinc-400">Self-detecting when old lock-in behavior starts</p>
                          </div>
                          <div className="bg-black border border-zinc-700 p-3">
                            <p className="text-sm font-bold text-green-400 mb-1">DIMENSION METRICS</p>
                            <p className="text-xs text-zinc-400">Measurable indicators of Structural Lock-In reduction</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-zinc-950 border border-zinc-800 p-6">
                      <h3 className="text-xl font-bold mb-4">ERROR CORRECTION TRACKING</h3>
                      <div className="space-y-4">
                        <p className="text-zinc-400 text-sm">Accelerated error detection and correction systems:</p>
                        <div className="space-y-3">
                          <div className="bg-black border border-zinc-700 p-3">
                            <p className="text-sm font-bold text-yellow-400 mb-1">ERROR DETECTION SPEED</p>
                            <p className="text-xs text-zinc-400">Time from error to awareness (target: hours not weeks)</p>
                          </div>
                          <div className="bg-black border border-zinc-700 p-3">
                            <p className="text-sm font-bold text-yellow-400 mb-1">CORRECTION VELOCITY</p>
                            <p className="text-xs text-zinc-400">Time from detection to fix (target: same day)</p>
                          </div>
                          <div className="bg-black border border-zinc-700 p-3">
                            <p className="text-sm font-bold text-yellow-400 mb-1">TRANSPARENCY METRICS</p>
                            <p className="text-xs text-zinc-400">Errors surfaced openly vs. hidden/defended</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-zinc-950 border border-zinc-800 p-6">
                    <h3 className="text-xl font-bold mb-6">GPI RE-MEASUREMENT CHECKLIST (DAY 30)</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold text-green-500 mb-3">STRUCTURAL LOCK-IN REDUCTION</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2">
                            <Check className="text-green-500" size={16} />
                            <span>Calcified patterns identified and broken</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Check className="text-green-500" size={16} />
                            <span>New adaptation protocols installed</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Check className="text-green-500" size={16} />
                            <span>Lock-in detection capability transferred</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Check className="text-green-500" size={16} />
                            <span>Self-correction systems operational</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-blue-500 mb-3">ERROR CORRECTION IMPROVEMENT</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2">
                            <Check className="text-blue-500" size={16} />
                            <span>Error detection time reduced</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Check className="text-blue-500" size={16} />
                            <span>Correction velocity increased</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Check className="text-blue-500" size={16} />
                            <span>Transparency culture established</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Check className="text-blue-500" size={16} />
                            <span>Feedback loops functioning</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-500/10 border border-green-500 p-6">
                    <h3 className="text-xl font-bold text-green-500 mb-4">GUARANTEE: MEASURABLE GPI REDUCTION</h3>
                    <p className="text-zinc-400">If your Structural Lock-In and Error Correction dimension scores don't improve by day 30, we extend until they do. Target: -1.5 GPI points. Measured by re-assessment.</p>
                  </div>
                </div>
              )}

              {/* Deploy Tab */}
              {activeTab === 'book' && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-black mb-4">DEPLOY THE OVERRIDE</h2>
                    <p className="text-xl text-zinc-400 mb-8">30 days to break Structural Lock-In and accelerate Error Correction. Target: -1.5 GPI points.</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-zinc-950 border border-zinc-800 p-8">
                      <h3 className="text-2xl font-bold mb-6">INVESTMENT: $3,000</h3>
                      <div className="space-y-4 mb-8">
                        <div className="flex items-center gap-3">
                          <Check className="text-green-500" size={18} />
                          <span>Structural Lock-In dimension audit</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Check className="text-green-500" size={18} />
                          <span>Error Correction acceleration</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Check className="text-green-500" size={18} />
                          <span>Daily pattern interrupts via Teams</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Check className="text-green-500" size={18} />
                          <span>Weekly GPI dimension tracking</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Check className="text-green-500" size={18} />
                          <span>Field-state pattern installation</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Check className="text-green-500" size={18} />
                          <span>Day 30 GPI re-measurement</span>
                        </div>
                      </div>

                      <Link
                        href="https://outlook.office.com/owa/calendar/IG@imaginationg.studio/bookings/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full bg-red-600 px-8 py-4 text-lg font-black text-center hover:bg-red-700 transition-colors"
                      >
                        DEPLOY OVERRIDE →
                      </Link>
                    </div>

                    <div className="space-y-6">
                      <div className="bg-yellow-500/10 border border-yellow-500 p-6">
                        <h4 className="font-bold text-yellow-500 mb-3">GPI IMPACT CALCULATION</h4>
                        <p className="text-zinc-400 mb-3">What does -1.5 GPI points mean for two dimensions?</p>
                        <div className="text-sm space-y-1">
                          <p>• Structural Lock-In: Patterns adapt instead of repeat</p>
                          <p>• Error Correction: Fixes in hours not months</p>
                          <p>• Organization becomes responsive to signal</p>
                        </div>
                        <p className="text-yellow-500 font-bold mt-3">Particle state → Field state transition</p>
                      </div>

                      <div className="bg-blue-500/10 border border-blue-500 p-6">
                        <h4 className="font-bold text-blue-500 mb-3">TEAMS INTEGRATION</h4>
                        <p className="text-zinc-400 mb-3">All interventions happen through your existing Microsoft Teams setup.</p>
                        <div className="text-sm space-y-1">
                          <p>• Real-time particle-state detection</p>
                          <p>• 10-minute dimension corrections</p>
                          <p>• Lock-in break alerts</p>
                          <p>• Error correction forcing</p>
                        </div>
                      </div>

                      <div className="bg-zinc-900 border border-zinc-700 p-6">
                        <h4 className="font-bold mb-3">MEASURE YOUR GPI FIRST</h4>
                        <p className="text-zinc-400 mb-4">Take the GPI diagnostic to baseline your Structural Lock-In and Error Correction scores.</p>
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

export default TheOverridePage;