import type { NextPage } from 'next';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import SEOHead from '../../components/SEOHead';
import Navigation from '../../components/Navigation';
import RelatedContent from '../../components/RelatedContent';
import { Check, AlertCircle, Calendar, Video, FileText, BarChart3, Clock, Users, Target } from 'lucide-react';

const TheNamingPage: NextPage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [prepFormData, setPrepFormData] = useState({
    optimizing: '',
    avoiding: '',
    wouldDo: '',
    costOfAvoidance: ''
  });
  const [sessionNotes, setSessionNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handlePrepSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // In real implementation, this would send to API
    console.log('Prep form submitted:', prepFormData);
  };

  const tabs = [
    { id: 'overview', label: 'GPI Impact', icon: FileText },
    { id: 'prep', label: 'Dimension Audit', icon: Clock },
    { id: 'session', label: 'Live Session', icon: Video },
    { id: 'follow-up', label: 'GPI Tracking', icon: BarChart3 },
    { id: 'book', label: 'Deploy', icon: Calendar }
  ];

  return (
    <>
      <SEOHead
        title="THE NAMING - Reduce Decision Latency | IMAGINATION G"
        description="Target Decision Latency and Knowledge Location dimensions. Surface what's slowing decisions. Move from particle state toward field state. One session. -0.5 GPI points."
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
                INTERVENTION PORTAL: THE NAMING
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1]">
                THE NAMING<span className="text-red-600">.</span>
              </h1>
              
              <p className="text-xl text-zinc-400 mb-8 max-w-2xl">
                Surface what's creating decision latency. Name the knowledge that's trapped in silos. One session to reduce organizational friction.
              </p>

              <div className="flex flex-wrap gap-6 items-center mb-6">
                <span className="text-4xl font-black">$750</span>
                <span className="text-zinc-500">|</span>
                <span className="text-lg text-zinc-400">One Session. Complete Protocol.</span>
                <span className="text-zinc-500">|</span>
                <span className="text-sm text-green-400 bg-green-400/10 px-3 py-1 rounded-full">CLARITY GUARANTEED</span>
              </div>

              {/* GPI Targeting */}
              <div className="flex flex-wrap items-center gap-4 mb-8 p-4 bg-zinc-950 border border-zinc-800 rounded-lg">
                <Target className="text-red-600" size={20} />
                <span className="text-xs text-zinc-500 uppercase">GPI Targets:</span>
                <span className="text-sm font-mono bg-red-600/20 text-red-400 px-3 py-1 rounded">Decision Latency</span>
                <span className="text-sm font-mono bg-red-600/20 text-red-400 px-3 py-1 rounded">Knowledge Location</span>
                <span className="text-zinc-700">|</span>
                <span className="text-xs text-zinc-500">
                  Recommended when <span className="font-mono text-yellow-400">GPI &gt; 7.0</span>
                </span>
                <span className="text-zinc-700">|</span>
                <span className="text-xs text-zinc-500">
                  Expected: <span className="font-mono text-green-400">-0.5 points</span>
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
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-zinc-950 border border-red-600/30 p-6">
                      <h3 className="text-lg font-black text-red-500 mb-4">DIMENSIONS TARGETED</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="font-bold">Decision Latency</span>
                          <span className="text-xs font-mono bg-red-600/20 text-red-400 px-2 py-1 rounded">20% weight</span>
                        </div>
                        <p className="text-sm text-zinc-400">Time from signal to decision to action. Currently stuck in approval chains and unclear ownership.</p>
                        <div className="flex items-center justify-between">
                          <span className="font-bold">Knowledge Location</span>
                          <span className="text-xs font-mono bg-red-600/20 text-red-400 px-2 py-1 rounded">15% weight</span>
                        </div>
                        <p className="text-sm text-zinc-400">Where operational knowledge lives. Trapped in institutional black boxes instead of distributed/codified.</p>
                      </div>
                    </div>
                    <div className="bg-zinc-950 border border-green-600/30 p-6">
                      <h3 className="text-lg font-black text-green-500 mb-4">EXPECTED OUTCOMES</h3>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <Check className="text-green-500 mt-1 flex-shrink-0" size={18} />
                          <p>Reduce overall GPI by <span className="font-mono text-green-400">0.5 points</span></p>
                        </div>
                        <div className="flex items-start gap-3">
                          <Check className="text-green-500 mt-1 flex-shrink-0" size={18} />
                          <p>Move Decision Latency from particle → transition state</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <Check className="text-green-500 mt-1 flex-shrink-0" size={18} />
                          <p>Surface hidden knowledge blockers</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <Check className="text-green-500 mt-1 flex-shrink-0" size={18} />
                          <p>Establish clear decision ownership</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-zinc-950 border border-zinc-800 p-8">
                    <h3 className="text-xl font-black mb-4">THE PROTOCOL</h3>
                    <div className="space-y-6">
                      <div className="flex gap-6 items-start">
                        <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">PRE-SESSION</div>
                        <div className="flex-1">
                          <p className="text-lg mb-2">Dimension audit preparation</p>
                          <p className="text-zinc-400">15 minutes to identify where decisions stall and knowledge gets stuck</p>
                        </div>
                      </div>
                      <div className="flex gap-6 items-start">
                        <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">0-15 MIN</div>
                        <div className="flex-1">
                          <p className="text-lg mb-2">Current state assessment</p>
                          <p className="text-zinc-400">Map decision pathways and knowledge silos creating friction</p>
                        </div>
                      </div>
                      <div className="flex gap-6 items-start">
                        <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">15-45 MIN</div>
                        <div className="flex-1">
                          <p className="text-lg mb-2">Friction point identification</p>
                          <p className="text-zinc-400">Name the specific blockers creating particle-state behavior</p>
                        </div>
                      </div>
                      <div className="flex gap-6 items-start">
                        <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">45-60 MIN</div>
                        <div className="flex-1">
                          <p className="text-lg mb-2">Field-state path definition</p>
                          <p className="text-zinc-400">Define specific actions to reduce Decision Latency score</p>
                        </div>
                      </div>
                      <div className="flex gap-6 items-start">
                        <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">POST</div>
                        <div className="flex-1">
                          <p className="text-lg mb-2">GPI re-measurement</p>
                          <p className="text-zinc-400">30-day follow-up to measure actual dimension improvement</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="border border-zinc-800 p-6">
                      <h3 className="font-bold text-red-600 mb-2">GPI 7-10</h3>
                      <p className="text-sm font-bold mb-2">PARTICLE STATE</p>
                      <p className="text-zinc-400 text-sm">Decisions take months. Knowledge trapped in silos. High urgency for this intervention.</p>
                    </div>
                    <div className="border border-zinc-800 p-6">
                      <h3 className="font-bold text-yellow-600 mb-2">GPI 4-6</h3>
                      <p className="text-sm font-bold mb-2">TRANSITION STATE</p>
                      <p className="text-zinc-400 text-sm">Mixed signals. Some decisions fast, others stalled. Good candidate for targeted improvement.</p>
                    </div>
                    <div className="border border-zinc-800 p-6">
                      <h3 className="font-bold text-green-600 mb-2">GPI 1-3</h3>
                      <p className="text-sm font-bold mb-2">FIELD STATE</p>
                      <p className="text-zinc-400 text-sm">Already adaptive. May not need this intervention. Consider other dimension targets.</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Pre-Session Tab */}
              {activeTab === 'prep' && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-black mb-4">DIMENSION AUDIT</h2>
                    <p className="text-xl text-zinc-400 mb-8">15 minutes to map your Decision Latency and Knowledge Location friction points. Complete before session.</p>
                  </div>

                  {!isSubmitted ? (
                    <form onSubmit={handlePrepSubmit} className="space-y-8">
                      <div className="bg-zinc-950 border border-zinc-800 p-8">
                        <h3 className="text-xl font-bold mb-6">FRICTION POINT IDENTIFICATION</h3>

                        <div className="space-y-6">
                          <div>
                            <label className="block text-lg font-bold mb-3">Where do decisions stall?</label>
                            <p className="text-zinc-400 text-sm mb-4">Map the approval chains, unclear ownership, and decision bottlenecks creating latency.</p>
                            <textarea
                              value={prepFormData.optimizing}
                              onChange={(e) => setPrepFormData({...prepFormData, optimizing: e.target.value})}
                              className="w-full h-32 bg-black border border-zinc-700 p-4 text-white resize-none focus:border-red-600 focus:outline-none"
                              placeholder="Describe where decisions get stuck..."
                              required
                            />
                          </div>

                          <div>
                            <label className="block text-lg font-bold mb-3">Where is knowledge trapped?</label>
                            <p className="text-zinc-400 text-sm mb-4">Identify silos, undocumented processes, single points of failure in your knowledge systems.</p>
                            <textarea
                              value={prepFormData.avoiding}
                              onChange={(e) => setPrepFormData({...prepFormData, avoiding: e.target.value})}
                              className="w-full h-32 bg-black border border-zinc-700 p-4 text-white resize-none focus:border-red-600 focus:outline-none"
                              placeholder="Describe knowledge bottlenecks..."
                              required
                            />
                          </div>

                          <div>
                            <label className="block text-lg font-bold mb-3">What would field-state look like?</label>
                            <p className="text-zinc-400 text-sm mb-4">If decisions were hours instead of weeks, if knowledge flowed freely - what would you build?</p>
                            <textarea
                              value={prepFormData.wouldDo}
                              onChange={(e) => setPrepFormData({...prepFormData, wouldDo: e.target.value})}
                              className="w-full h-32 bg-black border border-zinc-700 p-4 text-white resize-none focus:border-red-600 focus:outline-none"
                              placeholder="Describe your field-state vision..."
                              required
                            />
                          </div>

                          <div>
                            <label className="block text-lg font-bold mb-3">What's the cost of current GPI?</label>
                            <p className="text-zinc-400 text-sm mb-4">Quantify: delayed projects, missed opportunities, talent leaving due to friction.</p>
                            <textarea
                              value={prepFormData.costOfAvoidance}
                              onChange={(e) => setPrepFormData({...prepFormData, costOfAvoidance: e.target.value})}
                              className="w-full h-32 bg-black border border-zinc-700 p-4 text-white resize-none focus:border-red-600 focus:outline-none"
                              placeholder="Estimate friction costs..."
                              required
                            />
                          </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-zinc-800">
                          <div className="bg-yellow-500/10 border border-yellow-500 p-4 mb-6">
                            <p className="text-yellow-500 font-bold mb-2">AUDIT CHECKLIST</p>
                            <div className="space-y-2 text-sm">
                              <div className="flex items-center gap-2">
                                <input type="checkbox" required className="text-red-600" />
                                <span>I've mapped my decision latency bottlenecks</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <input type="checkbox" required className="text-red-600" />
                                <span>I've identified knowledge silos</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <input type="checkbox" required className="text-red-600" />
                                <span>I can quantify the cost of current friction</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <input type="checkbox" required className="text-red-600" />
                                <span>I'm ready to define field-state actions</span>
                              </div>
                            </div>
                          </div>

                          <button
                            type="submit"
                            className="bg-red-600 px-8 py-4 text-lg font-black hover:bg-red-700 transition-colors"
                          >
                            SUBMIT AUDIT
                          </button>
                        </div>
                      </div>
                    </form>
                  ) : (
                    <div className="bg-green-500/10 border border-green-500 p-8 text-center">
                      <Check className="text-green-500 mx-auto mb-4" size={48} />
                      <h3 className="text-xl font-bold text-green-500 mb-4">DIMENSION AUDIT COMPLETE</h3>
                      <p className="text-lg mb-6">Your friction points have been mapped. Ready for live session.</p>
                      <p className="text-zinc-400">You'll receive your Teams meeting link within 15 minutes.</p>
                    </div>
                  )}
                </div>
              )}

              {/* Live Session Tab */}
              {activeTab === 'session' && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-black mb-4">LIVE SESSION SPACE</h2>
                    <p className="text-xl text-zinc-400 mb-8">60 minutes of truth excavation via Microsoft Teams. Access your session materials here.</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-zinc-950 border border-zinc-800 p-6">
                      <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                        <Video className="text-red-600" size={24} />
                        SESSION ACCESS
                      </h3>
                      <div className="space-y-4">
                        <div className="bg-blue-500/10 border border-blue-500 p-4">
                          <p className="text-blue-400 font-bold mb-2">Microsoft Teams Meeting</p>
                          <p className="text-sm text-zinc-400 mb-3">Your session link will be provided after booking confirmation</p>
                          <Link 
                            href="https://outlook.office.com/owa/calendar/IG@imaginationg.studio/bookings/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-blue-600 px-4 py-2 text-sm font-bold hover:bg-blue-700 transition-colors"
                          >
                            BOOK SESSION
                          </Link>
                        </div>
                        <div className="space-y-2 text-sm">
                          <p className="font-bold">SESSION REQUIREMENTS:</p>
                          <ul className="space-y-1 text-zinc-400">
                            <li>• Teams desktop app or web browser</li>
                            <li>• Quiet, private space for 60 minutes</li>
                            <li>• Completed pre-session preparation</li>
                            <li>• Willingness to speak truth out loud</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-zinc-950 border border-zinc-800 p-6">
                      <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                        <FileText className="text-red-600" size={24} />
                        SESSION NOTES
                      </h3>
                      <div className="space-y-4">
                        <p className="text-zinc-400 text-sm">Real-time session notes and key insights will appear here during your naming session.</p>
                        <textarea
                          value={sessionNotes}
                          onChange={(e) => setSessionNotes(e.target.value)}
                          className="w-full h-48 bg-black border border-zinc-700 p-4 text-white resize-none focus:border-red-600 focus:outline-none"
                          placeholder="Session notes and insights will be captured here..."
                          readOnly
                        />
                        <p className="text-xs text-zinc-500">Notes are automatically saved and will be included in your post-session summary.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-zinc-950 border border-zinc-800 p-6">
                    <h3 className="text-xl font-bold mb-4">SESSION PROTOCOL</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="border border-zinc-700 p-4">
                        <p className="text-red-600 font-mono text-sm mb-2">0-15 MIN</p>
                        <p className="font-bold mb-2">Signal Detection</p>
                        <p className="text-zinc-400 text-sm">Review preparation, establish context, create safety for truth-telling</p>
                      </div>
                      <div className="border border-zinc-700 p-4">
                        <p className="text-red-600 font-mono text-sm mb-2">15-45 MIN</p>
                        <p className="font-bold mb-2">Truth Excavation</p>
                        <p className="text-zinc-400 text-sm">Surface buried signal, name what's real, test reality together</p>
                      </div>
                      <div className="border border-zinc-700 p-4">
                        <p className="text-red-600 font-mono text-sm mb-2">45-60 MIN</p>
                        <p className="font-bold mb-2">Action Definition</p>
                        <p className="text-zinc-400 text-sm">Binary next step, recorded commitment, momentum activation</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Follow-Up Tab */}
              {activeTab === 'follow-up' && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-black mb-4">GPI TRACKING</h2>
                    <p className="text-xl text-zinc-400 mb-8">Measure actual dimension improvement. Track your move toward field state.</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-zinc-950 border border-zinc-800 p-6">
                      <h3 className="text-xl font-bold mb-4">DIMENSION SUMMARY</h3>
                      <div className="bg-black border border-zinc-700 p-4 mb-4">
                        <p className="text-zinc-400 text-sm mb-2">Your friction points and field-state path:</p>
                        <div className="h-32 border border-zinc-800 p-3 text-zinc-500 text-sm">
                          [Decision Latency blockers identified + Knowledge Location gaps mapped]
                        </div>
                      </div>
                      <div className="space-y-3">
                        <p className="font-bold text-sm">DELIVERABLES:</p>
                        <ul className="space-y-1 text-sm text-zinc-400">
                          <li>• Dimension-specific friction map</li>
                          <li>• Field-state action plan</li>
                          <li>• Expected GPI improvement timeline</li>
                          <li>• Session recording</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-zinc-950 border border-zinc-800 p-6">
                      <h3 className="text-xl font-bold mb-4">FIELD-STATE ACTIONS</h3>
                      <div className="space-y-4">
                        <div className="bg-black border border-zinc-700 p-4">
                          <p className="text-sm text-zinc-400 mb-2">Your committed dimension improvements:</p>
                          <div className="h-20 border border-zinc-800 p-3 text-zinc-500 text-sm">
                            [Specific actions to reduce Decision Latency and improve Knowledge Location]
                          </div>
                        </div>
                        <div className="bg-yellow-500/10 border border-yellow-500 p-4">
                          <p className="text-yellow-500 font-bold text-sm mb-2">48-HOUR CHECK-IN</p>
                          <p className="text-zinc-400 text-sm">Have you implemented the first field-state action? Tracking dimension movement.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-zinc-950 border border-zinc-800 p-6">
                    <h3 className="text-xl font-bold mb-6">GPI RE-MEASUREMENT</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="text-3xl font-black text-red-600 mb-2">48 HOURS</div>
                        <p className="font-bold mb-2">Action Check</p>
                        <p className="text-zinc-400 text-sm">First field-state action implemented. Early friction reduction signals.</p>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-black text-yellow-500 mb-2">7 DAYS</div>
                        <p className="font-bold mb-2">Dimension Check</p>
                        <p className="text-zinc-400 text-sm">Re-assess Decision Latency and Knowledge Location scores. Measure movement.</p>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-black text-green-500 mb-2">30 DAYS</div>
                        <p className="font-bold mb-2">GPI Re-Score</p>
                        <p className="text-zinc-400 text-sm">Full GPI re-assessment. Validate -0.5 point improvement target.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-500/10 border border-green-500 p-6">
                    <h3 className="text-xl font-bold text-green-500 mb-4">GUARANTEE: DIMENSION IMPROVEMENT OR REDO</h3>
                    <p className="text-zinc-400">If you don't see measurable improvement in Decision Latency or Knowledge Location within 30 days, we'll do another session free.</p>
                  </div>
                </div>
              )}

              {/* Book Now Tab */}
              {activeTab === 'book' && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-black mb-4">DEPLOY THE NAMING</h2>
                    <p className="text-xl text-zinc-400 mb-8">60 minutes to target Decision Latency and Knowledge Location. Expected: -0.5 GPI points.</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-zinc-950 border border-zinc-800 p-8">
                      <h3 className="text-2xl font-bold mb-6">INVESTMENT: $750</h3>
                      <div className="space-y-4 mb-8">
                        <div className="flex items-center gap-3">
                          <Check className="text-green-500" size={18} />
                          <span>Pre-session truth excavation prep</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Check className="text-green-500" size={18} />
                          <span>60-minute live naming session</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Check className="text-green-500" size={18} />
                          <span>Microsoft Teams integration</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Check className="text-green-500" size={18} />
                          <span>Session recording & summary</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Check className="text-green-500" size={18} />
                          <span>48-hour & 30-day follow-up</span>
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
                        BOOK NOW →
                      </Link>
                    </div>

                    <div className="space-y-6">
                      <div className="bg-yellow-500/10 border border-yellow-500 p-6">
                        <h4 className="font-bold text-yellow-500 mb-3">ROI CALCULATION</h4>
                        <p className="text-zinc-400 mb-3">How much are you losing by optimizing around the real problem instead of solving it?</p>
                        <div className="text-sm space-y-1">
                          <p>• Average cost of avoidance: $5,000/month</p>
                          <p>• Time wasted on wrong priorities: 40+ hours/month</p>
                          <p>• Opportunity cost of delayed action: Immeasurable</p>
                        </div>
                        <p className="text-yellow-500 font-bold mt-3">Investment pays for itself in Week 1</p>
                      </div>

                      <div className="bg-blue-500/10 border border-blue-500 p-6">
                        <h4 className="font-bold text-blue-500 mb-3">TEAMS SETUP</h4>
                        <p className="text-zinc-400 mb-3">We'll use your company's Microsoft Teams for the session. Secure, familiar, integrated.</p>
                        <div className="text-sm space-y-1">
                          <p>• No external software required</p>
                          <p>• Automatic recording to your Teams</p>
                          <p>• Calendar integration included</p>
                          <p>• Enterprise-grade security</p>
                        </div>
                      </div>

                      <div className="bg-zinc-900 border border-zinc-700 p-6">
                        <h4 className="font-bold mb-3">NOT SURE THIS IS RIGHT?</h4>
                        <p className="text-zinc-400 mb-4">Take our 60-second diagnostic to identify which intervention fits your situation.</p>
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
                  href="/interventions"
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  ← Back to All Interventions
                </Link>
                <Link 
                  href="/interventions/the-map"
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  Next: THE MAP →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Related Content */}
        <section className="py-16 px-6 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <RelatedContent
              title="GPI Framework"
              items={[
                {
                  href: "/gpi-framework",
                  title: "The GPI Framework",
                  description: "7 dimensions of organizational physics. Field state to particle state.",
                  color: "red"
                },
                {
                  href: "/diagnostic",
                  title: "Calculate Your GPI",
                  description: "32 questions. 7 dimensions. Know your organizational physics score.",
                  color: "yellow"
                },
                {
                  href: "/interventions",
                  title: "All Interventions",
                  description: "Target specific dimensions. Deploy based on your GPI results.",
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

export default TheNamingPage;