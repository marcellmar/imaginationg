import type { NextPage } from 'next';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import SEOHead from '../../components/SEOHead';
import Navigation from '../../components/Navigation';
import RelatedContent from '../../components/RelatedContent';
import { Check, AlertCircle, Calendar, Video, FileText, BarChart3, Clock, Users } from 'lucide-react';

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
    { id: 'overview', label: 'Overview', icon: FileText },
    { id: 'prep', label: 'Pre-Session', icon: Clock },
    { id: 'session', label: 'Live Session', icon: Video },
    { id: 'follow-up', label: 'Follow-Up', icon: BarChart3 },
    { id: 'book', label: 'Book Now', icon: Calendar }
  ];

  return (
    <>
      <SEOHead
        title="THE NAMING - Surface Buried Truth | IMAGINATION G"
        description="Surface the buried signal. Say what you've been building around instead of from. One session. One truth. $500."
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
                Complete intervention experience. Pre-session prep, live truth excavation, and momentum tracking.
              </p>

              <div className="flex flex-wrap gap-6 items-center mb-8">
                <span className="text-4xl font-black">$750</span>
                <span className="text-zinc-500">|</span>
                <span className="text-lg text-zinc-400">One Session. Complete Protocol.</span>
                <span className="text-zinc-500">|</span>
                <span className="text-sm text-green-400 bg-green-400/10 px-3 py-1 rounded-full">CLARITY GUARANTEED</span>
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
                    <h2 className="text-3xl font-black mb-8">COMPLETE INTERVENTION EXPERIENCE</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <div className="flex items-start gap-4">
                          <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                          <p className="text-lg">Pre-session truth excavation prep</p>
                        </div>
                        <div className="flex items-start gap-4">
                          <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                          <p className="text-lg">Live 60-minute naming session via Teams</p>
                        </div>
                        <div className="flex items-start gap-4">
                          <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                          <p className="text-lg">Real-time session recording and notes</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-start gap-4">
                          <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                          <p className="text-lg">Truth summary document delivery</p>
                        </div>
                        <div className="flex items-start gap-4">
                          <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                          <p className="text-lg">48-hour action commitment tracking</p>
                        </div>
                        <div className="flex items-start gap-4">
                          <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                          <p className="text-lg">30-day momentum measurement</p>
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
                          <p className="text-lg mb-2">Truth excavation preparation form</p>
                          <p className="text-zinc-400">15 minutes to surface what you've been avoiding</p>
                        </div>
                      </div>
                      <div className="flex gap-6 items-start">
                        <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">0-15 MIN</div>
                        <div className="flex-1">
                          <p className="text-lg mb-2">Signal detection and context setting</p>
                          <p className="text-zinc-400">Review prep work, establish safe container for truth</p>
                        </div>
                      </div>
                      <div className="flex gap-6 items-start">
                        <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">15-45 MIN</div>
                        <div className="flex-1">
                          <p className="text-lg mb-2">Truth excavation and reality testing</p>
                          <p className="text-zinc-400">Cut through noise, surface buried signal, name what's real</p>
                        </div>
                      </div>
                      <div className="flex gap-6 items-start">
                        <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">45-60 MIN</div>
                        <div className="flex-1">
                          <p className="text-lg mb-2">Action definition and commitment</p>
                          <p className="text-zinc-400">Binary next step, recorded commitment, momentum path</p>
                        </div>
                      </div>
                      <div className="flex gap-6 items-start">
                        <div className="text-red-600 font-mono text-sm w-24 flex-shrink-0">POST-SESSION</div>
                        <div className="flex-1">
                          <p className="text-lg mb-2">Follow-up and momentum tracking</p>
                          <p className="text-zinc-400">48-hour check-in, 30-day progress measurement</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="border border-zinc-800 p-6">
                      <h3 className="font-bold text-red-600 mb-3">FOUNDERS</h3>
                      <p className="text-zinc-400">Ready to stop optimizing around the real problem</p>
                    </div>
                    <div className="border border-zinc-800 p-6">
                      <h3 className="font-bold text-red-600 mb-3">TEAMS</h3>
                      <p className="text-zinc-400">Stuck in analysis paralysis or false harmony</p>
                    </div>
                    <div className="border border-zinc-800 p-6">
                      <h3 className="font-bold text-red-600 mb-3">LEADERS</h3>
                      <p className="text-zinc-400">Done managing noise, ready to amplify signal</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Pre-Session Tab */}
              {activeTab === 'prep' && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-black mb-4">PRE-SESSION PREPARATION</h2>
                    <p className="text-xl text-zinc-400 mb-8">15 minutes to excavate the truth you've been avoiding. Complete this before our session.</p>
                  </div>

                  {!isSubmitted ? (
                    <form onSubmit={handlePrepSubmit} className="space-y-8">
                      <div className="bg-zinc-950 border border-zinc-800 p-8">
                        <h3 className="text-xl font-bold mb-6">TRUTH EXCAVATION FORM</h3>
                        
                        <div className="space-y-6">
                          <div>
                            <label className="block text-lg font-bold mb-3">What are you optimizing around instead of solving?</label>
                            <p className="text-zinc-400 text-sm mb-4">What problem are you managing instead of fixing? What are you getting good at avoiding?</p>
                            <textarea
                              value={prepFormData.optimizing}
                              onChange={(e) => setPrepFormData({...prepFormData, optimizing: e.target.value})}
                              className="w-full h-32 bg-black border border-zinc-700 p-4 text-white resize-none focus:border-red-600 focus:outline-none"
                              placeholder="Type your honest answer here..."
                              required
                            />
                          </div>

                          <div>
                            <label className="block text-lg font-bold mb-3">What truth are you avoiding?</label>
                            <p className="text-zinc-400 text-sm mb-4">What do you know but refuse to acknowledge? What reality are you building around?</p>
                            <textarea
                              value={prepFormData.avoiding}
                              onChange={(e) => setPrepFormData({...prepFormData, avoiding: e.target.value})}
                              className="w-full h-32 bg-black border border-zinc-700 p-4 text-white resize-none focus:border-red-600 focus:outline-none"
                              placeholder="Type your honest answer here..."
                              required
                            />
                          </div>

                          <div>
                            <label className="block text-lg font-bold mb-3">What would you do if this problem was solved?</label>
                            <p className="text-zinc-400 text-sm mb-4">If you could wave a magic wand and the real issue was gone, what would you build? How would you move?</p>
                            <textarea
                              value={prepFormData.wouldDo}
                              onChange={(e) => setPrepFormData({...prepFormData, wouldDo: e.target.value})}
                              className="w-full h-32 bg-black border border-zinc-700 p-4 text-white resize-none focus:border-red-600 focus:outline-none"
                              placeholder="Type your honest answer here..."
                              required
                            />
                          </div>

                          <div>
                            <label className="block text-lg font-bold mb-3">What's the cost of continued avoidance?</label>
                            <p className="text-zinc-400 text-sm mb-4">What happens if you keep optimizing around this instead of solving it? What are you losing?</p>
                            <textarea
                              value={prepFormData.costOfAvoidance}
                              onChange={(e) => setPrepFormData({...prepFormData, costOfAvoidance: e.target.value})}
                              className="w-full h-32 bg-black border border-zinc-700 p-4 text-white resize-none focus:border-red-600 focus:outline-none"
                              placeholder="Type your honest answer here..."
                              required
                            />
                          </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-zinc-800">
                          <div className="bg-yellow-500/10 border border-yellow-500 p-4 mb-6">
                            <p className="text-yellow-500 font-bold mb-2">PREPARATION CHECKLIST</p>
                            <div className="space-y-2 text-sm">
                              <div className="flex items-center gap-2">
                                <input type="checkbox" required className="text-red-600" />
                                <span>I've identified what I'm optimizing around instead of solving</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <input type="checkbox" required className="text-red-600" />
                                <span>I'm prepared to name the truth I've been avoiding</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <input type="checkbox" required className="text-red-600" />
                                <span>I'm committed to hearing reality, even if it's uncomfortable</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <input type="checkbox" required className="text-red-600" />
                                <span>I'm ready to take immediate action after this session</span>
                              </div>
                            </div>
                          </div>
                          
                          <button
                            type="submit"
                            className="bg-red-600 px-8 py-4 text-lg font-black hover:bg-red-700 transition-colors"
                          >
                            SUBMIT PREPARATION
                          </button>
                        </div>
                      </div>
                    </form>
                  ) : (
                    <div className="bg-green-500/10 border border-green-500 p-8 text-center">
                      <Check className="text-green-500 mx-auto mb-4" size={48} />
                      <h3 className="text-xl font-bold text-green-500 mb-4">PREPARATION COMPLETE</h3>
                      <p className="text-lg mb-6">Your truth excavation form has been submitted. You're ready for the naming session.</p>
                      <p className="text-zinc-400">You'll receive a confirmation email with your Teams meeting link within 15 minutes.</p>
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
                    <h2 className="text-3xl font-black mb-4">POST-SESSION TRACKING</h2>
                    <p className="text-xl text-zinc-400 mb-8">Momentum maintenance and progress measurement. Your truth to action pipeline.</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-zinc-950 border border-zinc-800 p-6">
                      <h3 className="text-xl font-bold mb-4">TRUTH SUMMARY</h3>
                      <div className="bg-black border border-zinc-700 p-4 mb-4">
                        <p className="text-zinc-400 text-sm mb-2">Your excavated truth will appear here after the session:</p>
                        <div className="h-32 border border-zinc-800 p-3 text-zinc-500 text-sm">
                          [Truth summary and key insights from your naming session will be populated here]
                        </div>
                      </div>
                      <div className="space-y-3">
                        <p className="font-bold text-sm">INCLUDES:</p>
                        <ul className="space-y-1 text-sm text-zinc-400">
                          <li>• The truth you named</li>
                          <li>• What you were optimizing around</li>
                          <li>• Your committed next action</li>
                          <li>• Session recording link</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-zinc-950 border border-zinc-800 p-6">
                      <h3 className="text-xl font-bold mb-4">ACTION COMMITMENT</h3>
                      <div className="space-y-4">
                        <div className="bg-black border border-zinc-700 p-4">
                          <p className="text-sm text-zinc-400 mb-2">Your binary next step:</p>
                          <div className="h-20 border border-zinc-800 p-3 text-zinc-500 text-sm">
                            [Your specific committed action will be recorded here]
                          </div>
                        </div>
                        <div className="bg-yellow-500/10 border border-yellow-500 p-4">
                          <p className="text-yellow-500 font-bold text-sm mb-2">48-HOUR CHECK-IN</p>
                          <p className="text-zinc-400 text-sm">You'll receive an automated follow-up in 48 hours asking: "Have you taken the action you committed to?"</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-zinc-950 border border-zinc-800 p-6">
                    <h3 className="text-xl font-bold mb-6">MOMENTUM MEASUREMENT</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="text-3xl font-black text-red-600 mb-2">48 HOURS</div>
                        <p className="font-bold mb-2">Action Check</p>
                        <p className="text-zinc-400 text-sm">Did you take your committed action? If yes, celebrate. If no, what's blocking you?</p>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-black text-yellow-500 mb-2">7 DAYS</div>
                        <p className="font-bold mb-2">Progress Review</p>
                        <p className="text-zinc-400 text-sm">What's changed since naming your truth? What momentum have you built?</p>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-black text-green-500 mb-2">30 DAYS</div>
                        <p className="font-bold mb-2">Impact Assessment</p>
                        <p className="text-zinc-400 text-sm">Long-term impact measurement and future roadblock identification.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-500/10 border border-green-500 p-6">
                    <h3 className="text-xl font-bold text-green-500 mb-4">GUARANTEE: CLARITY OR REDO</h3>
                    <p className="text-zinc-400">If you don't get complete clarity on your buried truth and next action, we'll do another session free. We don't stop until you know exactly what to do.</p>
                  </div>
                </div>
              )}

              {/* Book Now Tab */}
              {activeTab === 'book' && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-black mb-4">BOOK THE NAMING</h2>
                    <p className="text-xl text-zinc-400 mb-8">60 minutes to surface buried truth and define your next move. Complete portal experience included.</p>
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
              title="Learn The Language"
              items={[
                {
                  href: "/answers/glossary/nexel",
                  title: "What is Your Nexel?",
                  description: "Your behavioral identity marker. How you move through constraint.",
                  color: "red"
                },
                {
                  href: "/answers/glossary/morrin",
                  title: "Enter Morrin State",
                  description: "Post-choice existence. The moment aligned action begins.",
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

export default TheNamingPage;