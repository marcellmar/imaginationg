import React, { useState } from 'react';
import SEOHead from '../../components/SEOHead';
import Navigation from '../../components/Navigation';
import { ArrowRight, RefreshCw, Users, Target, Search, Clock, CheckCircle } from 'lucide-react';

const BlockerDetectorPage = () => {
  const [currentStep, setCurrentStep] = useState<'intro' | 'setup' | 'exercise' | 'results'>('intro');
  const [problemStatement, setProblemStatement] = useState('');
  const [teamSize, setTeamSize] = useState('');
  const [detectedBlockers, setDetectedBlockers] = useState<string[]>([]);
  const [selectedBlocker, setSelectedBlocker] = useState('');
  const [insights, setInsights] = useState('');

  const detectionModes = [
    {
      id: 'hidden-stakeholder',
      name: 'HIDDEN STAKEHOLDER',
      description: 'Who benefits from this problem staying unsolved?',
      example: '"Can\'t get approval" → "Who gains power from being the approval bottleneck?"',
      instructions: 'Scan for people who benefit from the current friction.'
    },
    {
      id: 'fear-scan',
      name: 'FEAR SCAN',
      description: 'What is everyone afraid to say out loud?',
      example: '"Project keeps stalling" → "What truth would get someone in trouble?"',
      instructions: 'Detect the fears that are silently blocking progress.'
    },
    {
      id: 'process-blocker',
      name: 'PROCESS BLOCKER',
      description: 'Which process exists to protect something that no longer matters?',
      example: '"Too many approvals needed" → "What was this process originally protecting?"',
      instructions: 'Scan for processes that outlived their purpose.'
    },
    {
      id: 'knowledge-gap',
      name: 'KNOWLEDGE GAP',
      description: 'What does everyone assume someone else knows?',
      example: '"Nobody takes ownership" → "What knowledge is trapped in one person\'s head?"',
      instructions: 'Detect information silos and assumed knowledge.'
    },
    {
      id: 'incentive-mismatch',
      name: 'INCENTIVE MISMATCH',
      description: 'Who gets rewarded for the wrong thing?',
      example: '"Quality keeps slipping" → "Who gets rewarded for speed over quality?"',
      instructions: 'Scan for misaligned incentives that create blockers.'
    },
    {
      id: 'decision-vacuum',
      name: 'DECISION VACUUM',
      description: 'What decision is nobody willing to make?',
      example: '"We\'re stuck on direction" → "What choice would make someone accountable?"',
      instructions: 'Detect decisions being avoided and why.'
    }
  ];

  const handleProblemSubmit = () => {
    if (problemStatement.trim() && teamSize) {
      setCurrentStep('exercise');
    }
  };

  const addDetectedBlocker = (mode: any) => {
    const blocker = `${mode.name}: ${mode.instructions}`;
    setDetectedBlockers([...detectedBlockers, blocker]);
  };

  const completeExercise = () => {
    if (selectedBlocker && insights.trim()) {
      setCurrentStep('results');
    }
  };

  const restart = () => {
    setCurrentStep('intro');
    setProblemStatement('');
    setTeamSize('');
    setDetectedBlockers([]);
    setSelectedBlocker('');
    setInsights('');
  };

  // INTRO SCREEN
  if (currentStep === 'intro') {
    return (
      <>
        <SEOHead
          title="Blocker Detector - Surface Hidden Resistance | IMAGINATION G"
          description="Scan for hidden resistance. Surface what is actually stopping movement. Team diagnostic for detecting invisible blockers."
          ogImage="/images/og-blocker-detector.svg"
        />

        <div className="min-h-screen bg-black text-white">
          <Navigation />

          <section className="pt-24 pb-16 px-6">
            <div className="max-w-4xl mx-auto">
              <div className="inline-block mb-8 text-purple-400 text-xs font-mono bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-full">
                <span className="inline-block w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></span>
                BLOCKER DETECTOR: READY
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1]">
                BLOCKER<br />DETECTOR<span className="text-red-600">.</span>
              </h1>

              <p className="text-xl text-zinc-400 mb-12 max-w-2xl">
                Scan for hidden resistance. Surface what is actually stopping movement.
                Team diagnostic for detecting the invisible forces blocking progress.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="border border-zinc-800 p-6 bg-zinc-950">
                  <h3 className="text-xl font-black mb-4 text-purple-600">WHAT IT DETECTS</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Search className="text-purple-500" size={16} />
                      <span className="text-sm">Hidden stakeholders benefiting from dysfunction</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Search className="text-yellow-500" size={16} />
                      <span className="text-sm">Unspoken fears blocking decisions</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Search className="text-blue-500" size={16} />
                      <span className="text-sm">Zombie processes that outlived their purpose</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Search className="text-green-500" size={16} />
                      <span className="text-sm">Incentive mismatches creating friction</span>
                    </div>
                  </div>
                </div>

                <div className="border border-zinc-800 p-6 bg-zinc-950">
                  <h3 className="text-xl font-black mb-4 text-blue-600">WHEN TO SCAN</h3>
                  <div className="space-y-3 text-sm text-zinc-400">
                    <div>• Progress keeps stalling for unclear reasons</div>
                    <div>• The obvious fixes do not fix the problem</div>
                    <div>• Team feels stuck but cannot explain why</div>
                    <div>• Decisions keep getting delayed or avoided</div>
                    <div>• Same problems keep recurring</div>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-950 border border-zinc-800 p-8 mb-12">
                <h3 className="text-xl font-black mb-4">HOW THE SCAN WORKS</h3>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-xl font-black">1</span>
                    </div>
                    <h4 className="font-bold mb-2">SETUP</h4>
                    <p className="text-sm text-zinc-400">Define the blockage and gather your team</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-xl font-black">2</span>
                    </div>
                    <h4 className="font-bold mb-2">SCAN</h4>
                    <p className="text-sm text-zinc-400">Apply 6 different detection modes to surface resistance</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-xl font-black">3</span>
                    </div>
                    <h4 className="font-bold mb-2">IDENTIFY</h4>
                    <p className="text-sm text-zinc-400">Choose the most significant blocker detected</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-xl font-black">4</span>
                    </div>
                    <h4 className="font-bold mb-2">EXTRACT</h4>
                    <p className="text-sm text-zinc-400">Extract actionable insights on how to remove it</p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <button
                  onClick={() => setCurrentStep('setup')}
                  className="bg-purple-600 px-12 py-6 text-2xl font-black hover:bg-purple-700 transition-colors mb-4"
                >
                  BEGIN DETECTION SCAN
                </button>
                <p className="text-zinc-600 text-sm">
                  <Clock className="inline mr-1" size={14} />
                  Takes 20-30 minutes with team
                </p>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }

  // SETUP SCREEN
  if (currentStep === 'setup') {
    return (
      <>
        <SEOHead
          title="Setup Detection Scan | IMAGINATION G"
          description="Define the blockage and team setup for the Blocker Detector scan."
        />

        <div className="min-h-screen bg-black text-white">
          <Navigation />

          <section className="pt-24 pb-16 px-6">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <h1 className="text-4xl font-black mb-6">
                  SETUP YOUR<br />DETECTION SCAN<span className="text-red-600">.</span>
                </h1>
                <p className="text-xl text-zinc-400">
                  Define the blockage you want to scan and gather your team.
                </p>
              </div>

              <div className="space-y-8">
                <div>
                  <label className="block text-lg font-black mb-4">
                    WHAT IS BLOCKING PROGRESS?
                  </label>
                  <textarea
                    value={problemStatement}
                    onChange={(e) => setProblemStatement(e.target.value)}
                    placeholder="e.g., 'We can't ship features fast enough' or 'Decisions keep getting delayed'"
                    className="w-full h-32 p-4 bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-500 resize-none"
                    maxLength={500}
                  />
                  <p className="text-sm text-zinc-500 mt-2">
                    Be specific. What exactly keeps stalling or getting stuck?
                  </p>
                </div>

                <div>
                  <label className="block text-lg font-black mb-4">
                    SCAN TEAM SIZE
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {['2-3 people', '4-6 people', '7-10 people', '10+ people'].map((size) => (
                      <button
                        key={size}
                        onClick={() => setTeamSize(size)}
                        className={`p-4 border-2 transition-colors ${
                          teamSize === size
                            ? 'border-purple-600 bg-purple-950'
                            : 'border-zinc-800 hover:border-zinc-600'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-zinc-950 border border-zinc-800 p-6">
                  <h3 className="font-black mb-3">SCAN SETUP TIPS</h3>
                  <div className="space-y-2 text-sm text-zinc-400">
                    <div>• Include diverse perspectives (different roles, experience levels)</div>
                    <div>• Have someone facilitate who is not deeply attached to current solutions</div>
                    <div>• Set phones aside. This requires full mental engagement</div>
                    <div>• Be ready to surface uncomfortable truths. That is the point.</div>
                  </div>
                </div>

                <div className="flex justify-between">
                  <button
                    onClick={() => setCurrentStep('intro')}
                    className="border-2 border-zinc-700 px-6 py-3 font-bold hover:border-zinc-500 transition-colors"
                  >
                    ← Back
                  </button>
                  <button
                    onClick={handleProblemSubmit}
                    disabled={!problemStatement.trim() || !teamSize}
                    className={`px-8 py-3 text-lg font-black transition-colors ${
                      problemStatement.trim() && teamSize
                        ? 'bg-purple-600 hover:bg-purple-700'
                        : 'bg-zinc-800 text-zinc-600 cursor-not-allowed'
                    }`}
                  >
                    BEGIN SCANNING →
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }

  // EXERCISE SCREEN
  if (currentStep === 'exercise') {
    return (
      <>
        <SEOHead
          title="Blocker Detection in Progress | IMAGINATION G"
          description="Apply detection modes to surface hidden blockers and resistance."
        />

        <div className="min-h-screen bg-black text-white">
          <Navigation />

          <section className="pt-24 pb-16 px-6">
            <div className="max-w-6xl mx-auto">
              <div className="mb-8">
                <h1 className="text-4xl font-black mb-4">
                  DETECT YOUR<br />BLOCKERS<span className="text-red-600">.</span>
                </h1>
                <div className="bg-zinc-950 border border-zinc-800 p-4">
                  <p className="text-zinc-400 text-sm mb-1">SCANNING FOR:</p>
                  <p className="text-lg">{problemStatement}</p>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-black mb-6">APPLY DETECTION MODES</h2>
                <p className="text-zinc-400 mb-6">
                  Run each detection mode with your team. Spend 3-5 minutes on each.
                  Surface what is hidden. Name what is unspoken.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {detectionModes.map((mode) => (
                  <div key={mode.id} className="border border-zinc-800 p-6 bg-zinc-950">
                    <h3 className="text-xl font-black mb-3 text-purple-600">{mode.name}</h3>
                    <p className="text-zinc-400 mb-4">{mode.description}</p>
                    <div className="bg-black border border-zinc-700 p-3 mb-4">
                      <p className="text-sm text-zinc-300">{mode.example}</p>
                    </div>
                    <p className="text-sm text-zinc-500 mb-4">{mode.instructions}</p>
                    <button
                      onClick={() => addDetectedBlocker(mode)}
                      className="w-full border-2 border-purple-600 px-4 py-2 font-bold hover:bg-purple-600 transition-colors"
                    >
                      RUN THIS SCAN
                    </button>
                  </div>
                ))}
              </div>

              {detectedBlockers.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-2xl font-black mb-4">BLOCKERS DETECTED</h3>
                  <div className="space-y-3">
                    {detectedBlockers.map((blocker, index) => (
                      <div key={index} className="border border-zinc-700 p-4 bg-zinc-900">
                        <p className="text-sm">{blocker}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {detectedBlockers.length >= 2 && (
                <div className="border-2 border-purple-600 p-8 bg-black">
                  <h3 className="text-2xl font-black mb-4">IDENTIFY PRIMARY BLOCKER</h3>
                  <p className="text-zinc-400 mb-6">
                    Which detection revealed the most significant hidden resistance?
                  </p>

                  <div className="space-y-4 mb-6">
                    {detectedBlockers.map((blocker, index) => (
                      <label key={index} className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="radio"
                          name="selectedBlocker"
                          value={blocker}
                          onChange={(e) => setSelectedBlocker(e.target.value)}
                          className="mt-1"
                        />
                        <span className="text-sm">{blocker}</span>
                      </label>
                    ))}
                  </div>

                  {selectedBlocker && (
                    <div>
                      <label className="block text-lg font-black mb-4">
                        WHAT DID THIS DETECTION REVEAL?
                      </label>
                      <textarea
                        value={insights}
                        onChange={(e) => setInsights(e.target.value)}
                        placeholder="What hidden forces were surfaced? What uncomfortable truths emerged? How can this blocker be addressed?"
                        className="w-full h-32 p-4 bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-500 resize-none mb-4"
                      />

                      <button
                        onClick={completeExercise}
                        disabled={!insights.trim()}
                        className={`w-full py-4 text-lg font-black transition-colors ${
                          insights.trim()
                            ? 'bg-purple-600 hover:bg-purple-700'
                            : 'bg-zinc-800 text-zinc-600 cursor-not-allowed'
                        }`}
                      >
                        COMPLETE DETECTION
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </section>
        </div>
      </>
    );
  }

  // RESULTS SCREEN
  return (
    <>
      <SEOHead
        title="Detection Results | IMAGINATION G"
        description="Your scan results from the Blocker Detector diagnostic."
      />

      <div className="min-h-screen bg-black text-white">
        <Navigation />

        <section className="pt-24 pb-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block mb-8 text-green-400 text-xs font-mono bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-full">
                <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                DETECTION COMPLETE
              </div>

              <h1 className="text-4xl md:text-5xl font-black mb-6">
                BLOCKERS<br />SURFACED<span className="text-red-600">.</span>
              </h1>
            </div>

            <div className="space-y-8 mb-12">
              <div className="bg-zinc-950 border border-zinc-800 p-8">
                <h2 className="text-2xl font-black mb-4">ORIGINAL BLOCKAGE</h2>
                <p className="text-zinc-300 text-lg">{problemStatement}</p>
              </div>

              <div className="bg-zinc-950 border border-zinc-800 p-8">
                <h2 className="text-2xl font-black mb-4">PRIMARY BLOCKER DETECTED</h2>
                <p className="text-zinc-300">{selectedBlocker}</p>
              </div>

              <div className="border-2 border-purple-500 p-8 bg-purple-950">
                <h2 className="text-2xl font-black mb-4 text-purple-400">SCAN FINDINGS</h2>
                <p className="text-purple-100 text-lg leading-relaxed">{insights}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="border border-zinc-800 p-6 text-center">
                <CheckCircle className="text-green-500 mx-auto mb-3" size={32} />
                <h3 className="font-black mb-2">NEXT STEPS</h3>
                <p className="text-sm text-zinc-400">Turn findings into specific actions to remove the blocker</p>
              </div>

              <div className="border border-zinc-800 p-6 text-center">
                <Users className="text-blue-500 mx-auto mb-3" size={32} />
                <h3 className="font-black mb-2">TEAM ALIGNMENT</h3>
                <p className="text-sm text-zinc-400">Share results with stakeholders and address hidden resistance</p>
              </div>

              <div className="border border-zinc-800 p-6 text-center">
                <RefreshCw className="text-purple-500 mx-auto mb-3" size={32} />
                <h3 className="font-black mb-2">RE-SCAN</h3>
                <p className="text-sm text-zinc-400">Run detection monthly on recurring blockages to surface new resistance</p>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={restart}
                className="bg-purple-600 px-8 py-4 text-lg font-black hover:bg-purple-700 transition-colors mr-4"
              >
                SCAN ANOTHER BLOCKAGE
              </button>
              <a
                href="/tools"
                className="border-2 border-zinc-700 px-8 py-4 text-lg font-black hover:border-zinc-500 transition-colors inline-block"
              >
                EXPLORE MORE TOOLS
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlockerDetectorPage;