import React, { useState } from 'react';
import SEOHead from '../../components/SEOHead';
import Navigation from '../../components/Navigation';
import { ArrowRight, RefreshCw, Users, Target, Lightbulb, Clock, CheckCircle } from 'lucide-react';

const BlockFlipPage = () => {
  const [currentStep, setCurrentStep] = useState<'intro' | 'setup' | 'exercise' | 'results'>('intro');
  const [problemStatement, setProblemStatement] = useState('');
  const [teamSize, setTeamSize] = useState('');
  const [flippedProblems, setFlippedProblems] = useState<string[]>([]);
  const [selectedFlip, setSelectedFlip] = useState('');
  const [insights, setInsights] = useState('');

  const flipTechniques = [
    {
      id: 'opposite',
      name: 'THE OPPOSITE',
      description: 'What if we wanted the exact opposite outcome?',
      example: '"We can\'t ship fast enough" → "What if we wanted to ship as slowly as possible?"',
      instructions: 'Flip your problem to its complete opposite and explore why someone would want that.'
    },
    {
      id: 'resource',
      name: 'RESOURCE FLIP',
      description: 'What if we had unlimited resources vs. zero resources?',
      example: '"We don\'t have enough budget" → "What if money was no object?" OR "What if we had $0?"',
      instructions: 'Explore both extremes: infinite resources and no resources at all.'
    },
    {
      id: 'customer',
      name: 'CUSTOMER FLIP',
      description: 'What if our worst customer was our target customer?',
      example: '"Users don\'t engage" → "What if non-users were our primary target?"',
      instructions: 'Design for the people who currently hate or avoid your product.'
    },
    {
      id: 'time',
      name: 'TIME FLIP',
      description: 'What if we had to solve this in 1 hour vs. 10 years?',
      example: '"This will take months to fix" → "What if we had to fix it by 5pm today?"',
      instructions: 'Explore both extreme time constraints and unlimited time.'
    },
    {
      id: 'success',
      name: 'SUCCESS FLIP',
      description: 'What if failure was success and success was failure?',
      example: '"We need more sales" → "What if losing customers was our goal?"',
      instructions: 'Redefine what success and failure mean in your context.'
    },
    {
      id: 'role',
      name: 'ROLE FLIP',
      description: 'What if you were your competitor solving this problem?',
      example: '"Our product is slow" → "How would our fastest competitor approach this?"',
      instructions: 'Take on the perspective of someone completely different in your industry.'
    }
  ];

  const handleProblemSubmit = () => {
    if (problemStatement.trim() && teamSize) {
      setCurrentStep('exercise');
    }
  };

  const addFlippedProblem = (technique: any) => {
    const flip = `${technique.name}: ${technique.instructions}`;
    setFlippedProblems([...flippedProblems, flip]);
  };

  const completeExercise = () => {
    if (selectedFlip && insights.trim()) {
      setCurrentStep('results');
    }
  };

  const restart = () => {
    setCurrentStep('intro');
    setProblemStatement('');
    setTeamSize('');
    setFlippedProblems([]);
    setSelectedFlip('');
    setInsights('');
  };

  // INTRO SCREEN
  if (currentStep === 'intro') {
    return (
      <>
        <SEOHead
          title="Block Flip Exercise - Team Problem-Solving Reframe | IMAGINATION G"
          description="Flip stuck problems upside down to unlock breakthrough solutions. Team exercise for breaking mental constraints."
          ogImage="/images/og-block-flip.svg"
        />
        
        <div className="min-h-screen bg-black text-white">
          <Navigation />

          <section className="pt-24 pb-16 px-6">
            <div className="max-w-4xl mx-auto">
              <div className="inline-block mb-8 text-green-400 text-xs font-mono bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-full">
                <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                BLOCK FLIP: READY
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1]">
                BLOCK FLIP<br />EXERCISE<span className="text-red-600">.</span>
              </h1>
              
              <p className="text-xl text-zinc-400 mb-12 max-w-2xl">
                Flip stuck problems upside down to unlock breakthrough solutions. 
                Team exercise for breaking mental constraints and finding alternative approaches.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="border border-zinc-800 p-6 bg-zinc-950">
                  <h3 className="text-xl font-black mb-4 text-red-600">WHAT IT DOES</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <RefreshCw className="text-red-500" size={16} />
                      <span className="text-sm">Breaks mental constraints on problem-solving</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Lightbulb className="text-yellow-500" size={16} />
                      <span className="text-sm">Generates unexpected solution angles</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="text-blue-500" size={16} />
                      <span className="text-sm">Engages entire team in creative thinking</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Target className="text-green-500" size={16} />
                      <span className="text-sm">Reveals hidden assumptions</span>
                    </div>
                  </div>
                </div>

                <div className="border border-zinc-800 p-6 bg-zinc-950">
                  <h3 className="text-xl font-black mb-4 text-blue-600">WHEN TO USE</h3>
                  <div className="space-y-3 text-sm text-zinc-400">
                    <div>• Team is stuck on the same solutions</div>
                    <div>• Need breakthrough thinking on complex problems</div>
                    <div>• Want to challenge assumptions and constraints</div>
                    <div>• Looking for innovative approaches</div>
                    <div>• Team needs creative energy boost</div>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-950 border border-zinc-800 p-8 mb-12">
                <h3 className="text-xl font-black mb-4">HOW IT WORKS</h3>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-xl font-black">1</span>
                    </div>
                    <h4 className="font-bold mb-2">SETUP</h4>
                    <p className="text-sm text-zinc-400">Define your stuck problem and gather your team</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-xl font-black">2</span>
                    </div>
                    <h4 className="font-bold mb-2">FLIP</h4>
                    <p className="text-sm text-zinc-400">Apply 6 different flipping techniques to your problem</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-xl font-black">3</span>
                    </div>
                    <h4 className="font-bold mb-2">EXPLORE</h4>
                    <p className="text-sm text-zinc-400">Choose the most promising flip and dig deeper</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-xl font-black">4</span>
                    </div>
                    <h4 className="font-bold mb-2">EXTRACT</h4>
                    <p className="text-sm text-zinc-400">Extract actionable insights for real solutions</p>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <button
                  onClick={() => setCurrentStep('setup')}
                  className="bg-red-600 px-12 py-6 text-2xl font-black hover:bg-red-700 transition-colors mb-4"
                >
                  START BLOCK FLIP
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
          title="Setup Block Flip Exercise | IMAGINATION G"
          description="Define your problem and team setup for the Block Flip exercise."
        />
        
        <div className="min-h-screen bg-black text-white">
          <Navigation />

          <section className="pt-24 pb-16 px-6">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <h1 className="text-4xl font-black mb-6">
                  SETUP YOUR<br />BLOCK FLIP<span className="text-red-600">.</span>
                </h1>
                <p className="text-xl text-zinc-400">
                  Define the problem you're stuck on and gather your team.
                </p>
              </div>

              <div className="space-y-8">
                <div>
                  <label className="block text-lg font-black mb-4">
                    WHAT PROBLEM ARE YOU STUCK ON?
                  </label>
                  <textarea
                    value={problemStatement}
                    onChange={(e) => setProblemStatement(e.target.value)}
                    placeholder="e.g., 'We can't ship features fast enough' or 'Users don't engage with our onboarding'"
                    className="w-full h-32 p-4 bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-500 resize-none"
                    maxLength={500}
                  />
                  <p className="text-sm text-zinc-500 mt-2">
                    Be specific. What exactly is the challenge your team faces?
                  </p>
                </div>

                <div>
                  <label className="block text-lg font-black mb-4">
                    TEAM SIZE
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {['2-3 people', '4-6 people', '7-10 people', '10+ people'].map((size) => (
                      <button
                        key={size}
                        onClick={() => setTeamSize(size)}
                        className={`p-4 border-2 transition-colors ${
                          teamSize === size
                            ? 'border-red-600 bg-red-950'
                            : 'border-zinc-800 hover:border-zinc-600'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-zinc-950 border border-zinc-800 p-6">
                  <h3 className="font-black mb-3">TEAM SETUP TIPS</h3>
                  <div className="space-y-2 text-sm text-zinc-400">
                    <div>• Include diverse perspectives (different roles, experience levels)</div>
                    <div>• Have someone facilitate who isn't deeply attached to current solutions</div>
                    <div>• Set phones aside - this requires full mental engagement</div>
                    <div>• Prepare to get weird - the best flips sound ridiculous at first</div>
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
                        ? 'bg-red-600 hover:bg-red-700'
                        : 'bg-zinc-800 text-zinc-600 cursor-not-allowed'
                    }`}
                  >
                    START FLIPPING →
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
          title="Block Flip Exercise in Progress | IMAGINATION G"
          description="Apply flipping techniques to break through stuck problem patterns."
        />
        
        <div className="min-h-screen bg-black text-white">
          <Navigation />

          <section className="pt-24 pb-16 px-6">
            <div className="max-w-6xl mx-auto">
              <div className="mb-8">
                <h1 className="text-4xl font-black mb-4">
                  FLIP YOUR<br />PROBLEM<span className="text-red-600">.</span>
                </h1>
                <div className="bg-zinc-950 border border-zinc-800 p-4">
                  <p className="text-zinc-400 text-sm mb-1">YOUR PROBLEM:</p>
                  <p className="text-lg">{problemStatement}</p>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-black mb-6">CHOOSE FLIPPING TECHNIQUES</h2>
                <p className="text-zinc-400 mb-6">
                  Apply these techniques with your team. Spend 3-5 minutes on each flip. 
                  Don't judge ideas yet - just generate alternatives.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {flipTechniques.map((technique) => (
                  <div key={technique.id} className="border border-zinc-800 p-6 bg-zinc-950">
                    <h3 className="text-xl font-black mb-3 text-red-600">{technique.name}</h3>
                    <p className="text-zinc-400 mb-4">{technique.description}</p>
                    <div className="bg-black border border-zinc-700 p-3 mb-4">
                      <p className="text-sm text-zinc-300">{technique.example}</p>
                    </div>
                    <p className="text-sm text-zinc-500 mb-4">{technique.instructions}</p>
                    <button
                      onClick={() => addFlippedProblem(technique)}
                      className="w-full border-2 border-red-600 px-4 py-2 font-bold hover:bg-red-600 transition-colors"
                    >
                      TRY THIS FLIP
                    </button>
                  </div>
                ))}
              </div>

              {flippedProblems.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-2xl font-black mb-4">YOUR FLIPS</h3>
                  <div className="space-y-3">
                    {flippedProblems.map((flip, index) => (
                      <div key={index} className="border border-zinc-700 p-4 bg-zinc-900">
                        <p className="text-sm">{flip}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {flippedProblems.length >= 2 && (
                <div className="border-2 border-red-600 p-8 bg-black">
                  <h3 className="text-2xl font-black mb-4">SELECT YOUR BEST FLIP</h3>
                  <p className="text-zinc-400 mb-6">
                    Which flip generated the most interesting ideas or revealed surprising insights?
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    {flippedProblems.map((flip, index) => (
                      <label key={index} className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="radio"
                          name="selectedFlip"
                          value={flip}
                          onChange={(e) => setSelectedFlip(e.target.value)}
                          className="mt-1"
                        />
                        <span className="text-sm">{flip}</span>
                      </label>
                    ))}
                  </div>

                  {selectedFlip && (
                    <div>
                      <label className="block text-lg font-black mb-4">
                        WHAT INSIGHTS DID THIS FLIP REVEAL?
                      </label>
                      <textarea
                        value={insights}
                        onChange={(e) => setInsights(e.target.value)}
                        placeholder="What assumptions were challenged? What new possibilities emerged? What would you try differently?"
                        className="w-full h-32 p-4 bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-500 resize-none mb-4"
                      />
                      
                      <button
                        onClick={completeExercise}
                        disabled={!insights.trim()}
                        className={`w-full py-4 text-lg font-black transition-colors ${
                          insights.trim()
                            ? 'bg-red-600 hover:bg-red-700'
                            : 'bg-zinc-800 text-zinc-600 cursor-not-allowed'
                        }`}
                      >
                        COMPLETE EXERCISE
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
        title="Block Flip Results | IMAGINATION G"
        description="Your breakthrough insights from the Block Flip exercise."
      />
      
      <div className="min-h-screen bg-black text-white">
        <Navigation />

        <section className="pt-24 pb-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block mb-8 text-green-400 text-xs font-mono bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-full">
                <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                FLIP COMPLETE
              </div>

              <h1 className="text-4xl md:text-5xl font-black mb-6">
                BREAKTHROUGH<br />ACHIEVED<span className="text-red-600">.</span>
              </h1>
            </div>

            <div className="space-y-8 mb-12">
              <div className="bg-zinc-950 border border-zinc-800 p-8">
                <h2 className="text-2xl font-black mb-4">ORIGINAL PROBLEM</h2>
                <p className="text-zinc-300 text-lg">{problemStatement}</p>
              </div>

              <div className="bg-zinc-950 border border-zinc-800 p-8">
                <h2 className="text-2xl font-black mb-4">WINNING FLIP</h2>
                <p className="text-zinc-300">{selectedFlip}</p>
              </div>

              <div className="border-2 border-green-500 p-8 bg-green-950">
                <h2 className="text-2xl font-black mb-4 text-green-400">KEY INSIGHTS</h2>
                <p className="text-green-100 text-lg leading-relaxed">{insights}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="border border-zinc-800 p-6 text-center">
                <CheckCircle className="text-green-500 mx-auto mb-3" size={32} />
                <h3 className="font-black mb-2">NEXT STEPS</h3>
                <p className="text-sm text-zinc-400">Turn insights into specific actions your team can take this week</p>
              </div>
              
              <div className="border border-zinc-800 p-6 text-center">
                <Users className="text-blue-500 mx-auto mb-3" size={32} />
                <h3 className="font-black mb-2">TEAM ALIGNMENT</h3>
                <p className="text-sm text-zinc-400">Share results with stakeholders and get buy-in for new approaches</p>
              </div>
              
              <div className="border border-zinc-800 p-6 text-center">
                <RefreshCw className="text-purple-500 mx-auto mb-3" size={32} />
                <h3 className="font-black mb-2">ITERATE</h3>
                <p className="text-sm text-zinc-400">Use Block Flip monthly on different problems to build creative thinking</p>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={restart}
                className="bg-red-600 px-8 py-4 text-lg font-black hover:bg-red-700 transition-colors mr-4"
              >
                FLIP ANOTHER PROBLEM
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

export default BlockFlipPage;