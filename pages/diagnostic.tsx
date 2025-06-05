import React, { useState } from 'react';
import Link from 'next/link';
import SEOHead from '../components/SEOHead';
import Navigation from '../components/Navigation';

const DiagnosticPage = () => {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answers, setAnswers] = useState<Record<number, 'yes' | 'no'>>({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 1,
      title: "THE AGENCY DETECTOR",
      question: "Made a decision this week without external validation?",
      yesText: "FULL AGENCY",
      yesSubtext: "Internal signal clear.",
      noText: "NEED VALIDATION",
      noSubtext: "Outsourced your signal."
    },
    {
      id: 2,
      title: "THE MEETING AUDIT",
      question: "Last 3 meetings produced immediate action?",
      yesText: "MEETINGS = MOVEMENT",
      yesSubtext: "Talk creates reality.",
      noText: "MEETINGS = THEATER",
      noSubtext: "Talk replaces action."
    },
    {
      id: 3,
      title: "THE DEPENDENCY TEST",
      question: "Can you ship without permission?",
      yesText: "INDEPENDENT",
      yesSubtext: "You own your output.",
      noText: "DEPENDENT",
      noSubtext: "Committees own you."
    },
    {
      id: 4,
      title: "THE REVENUE REALITY",
      question: "Profitable without new funding?",
      yesText: "SELF-SUSTAINING",
      yesSubtext: "Market validates you.",
      noText: "FUNDING DEPENDENT",
      noSubtext: "VCs validate you."
    },
    {
      id: 5,
      title: "THE CHOICE AUDIT",
      question: "Made 5+ binary decisions today?",
      yesText: "DECISIVE",
      yesSubtext: "Choice is your default.",
      noText: "DEFERRING",
      noSubtext: "Maybe is your default."
    },
    {
      id: 6,
      title: "THE ACTION RATIO",
      question: "More building than planning this week?",
      yesText: "BUILDER MODE",
      yesSubtext: "Reality over strategy.",
      noText: "PLANNER MODE",
      noSubtext: "Strategy over reality."
    },
    {
      id: 7,
      title: "THE SPEED CHECK",
      question: "Decisions happen same day?",
      yesText: "VELOCITY",
      yesSubtext: "Speed is strategy.",
      noText: "DELAYED",
      noSubtext: "Process is strategy."
    },
    {
      id: 8,
      title: "THE TRUTH TRACKER",
      question: "Killed a sacred cow this month?",
      yesText: "TRUTH SEEKER",
      yesSubtext: "Reality over comfort.",
      noText: "COMFORT KEEPER",
      noSubtext: "Comfort over reality."
    },
    {
      id: 9,
      title: "THE OUTPUT SCANNER",
      question: "Shipped something real this week?",
      yesText: "SHIPPER",
      yesSubtext: "Done beats perfect.",
      noText: "POLISHER",
      noSubtext: "Perfect beats done."
    },
    {
      id: 10,
      title: "THE CLARITY METER",
      question: "Can you explain your business in one sentence?",
      yesText: "CRYSTAL CLEAR",
      yesSubtext: "Simplicity is power.",
      noText: "COMPLICATED",
      noSubtext: "Complexity is hiding."
    },
    {
      id: 11,
      title: "THE MOMENTUM GAUGE",
      question: "Moving faster than last quarter?",
      yesText: "ACCELERATING",
      yesSubtext: "Momentum compounds.",
      noText: "DECELERATING",
      noSubtext: "Friction compounds."
    },
    {
      id: 12,
      title: "THE CONFLICT CHECK",
      question: "Had a productive conflict this week?",
      yesText: "TRUTH FRICTION",
      yesSubtext: "Conflict creates clarity.",
      noText: "FALSE HARMONY",
      noSubtext: "Silence creates decay."
    }
  ];

  const handleAnswer = (answer: 'yes' | 'no') => {
    setAnswers({ ...answers, [currentQuestion]: answer });
    
    if (currentQuestion < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateResults = () => {
    let driftScore = 0;
    let recommendedIntervention = '';
    let interventionUrl = '';
    
    // Calculate drift score based on answers (each "no" = drift indicator)
    const driftIndicators = [
      answers[1] === 'no', // No recent decisions
      answers[2] === 'no', // Meetings don't produce decisions  
      answers[3] === 'no', // Need external validation
      answers[4] === 'no', // No profitable initiatives
      answers[5] === 'no', // Can't make binary choices
      answers[6] === 'no', // More planning than executing
      answers[7] === 'no', // Committee-based decisions
      answers[8] === 'no', // No sacred cows killed
      answers[9] === 'no', // Not shipping regularly
      answers[10] === 'no', // No clear vision
      answers[11] === 'no', // Not accelerating
      answers[12] === 'no'  // Avoiding conflict
    ];
    
    const driftCount = driftIndicators.filter(Boolean).length;
    driftScore = Math.round((driftCount / 12) * 100);

    // Determine intervention based on most critical drift pattern
    if (answers[10] === 'no' || answers[5] === 'no') {
      // Clarity issues or can't make binary decisions
      recommendedIntervention = 'THE NAMING';
      interventionUrl = '/interventions/the-naming';
    } else if (answers[2] === 'no' || answers[6] === 'no' || answers[7] === 'no') {
      // Meeting/planning/committee issues = strategy theater
      recommendedIntervention = 'CLARITY RITUAL';
      interventionUrl = '/answers/guides/clarity-ritual';
    } else if (answers[4] === 'no') {
      // Revenue/profitability issues
      recommendedIntervention = 'THE MARKET SMACKDOWN';
      interventionUrl = '/interventions/the-market-smackdown';
    } else if (answers[9] === 'no') {
      // Not shipping/building
      recommendedIntervention = 'FIRST BLOOD BUILD';
      interventionUrl = '/interventions/first-blood-build';
    } else if (answers[11] === 'no' || answers[1] === 'no') {
      // Momentum/decision velocity issues
      recommendedIntervention = '30-DAY DRIFT BREAK';
      interventionUrl = '/interventions/thirty-day-drift-break';
    } else if (answers[12] === 'no' || answers[8] === 'no') {
      // Avoiding conflict or protecting dysfunction
      recommendedIntervention = 'THE NAMING';
      interventionUrl = '/interventions/the-naming';
    } else {
      // Default recommendation for comprehensive approach
      recommendedIntervention = 'THE MAP';
      interventionUrl = '/interventions/the-map';
    }

    return { driftScore, recommendedIntervention, interventionUrl };
  };

  // Start Screen
  if (!started) {
    return (
      <>
        <SEOHead
          title="Signal Detection Diagnostic | IMAGINATION G"
          description="19 binary questions. Zero escape routes. Find out if you're amplifying signal or optimizing noise."
          ogImage="/images/og-diagnostic.svg"
        />
        
        <div className="min-h-screen bg-black text-white">
          <Navigation currentPage="diagnostic" />

          <section className="pt-24 pb-16 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="max-w-3xl mx-auto text-center">
                {/* System Status Badge */}
                <div className="inline-block mb-8 text-green-400 text-xs font-mono bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-full">
                  <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                  DETECTION: READY
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1]">
                  SIGNAL<br />DETECTION<span className="text-red-600">.</span>
                </h1>
                
                <p className="text-xl text-zinc-400 mb-12 max-w-xl mx-auto">
                  19 binary questions. Zero escape routes. 
                  Find out if you're amplifying signal or optimizing noise.
                </p>
                
                <button
                  onClick={() => setStarted(true)}
                  className="bg-red-600 px-12 py-6 text-2xl font-black hover:bg-red-700 transition-colors"
                >
                  START DIAGNOSTIC
                </button>
                
                <p className="text-zinc-600 mt-8 text-sm">
                  Takes 60 seconds. No email required.
                </p>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }

  // Results Screen
  if (showResults) {
    const { driftScore, recommendedIntervention, interventionUrl } = calculateResults();
    
    return (
      <>
        <SEOHead
          title="Your Signal Detection Results | IMAGINATION G"
          description="Your signal pattern revealed. See exactly where noise is overwhelming truth."
        />
        
        <div className="min-h-screen bg-black text-white">
          <Navigation currentPage="diagnostic" />

          <section className="pt-24 pb-16 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-black mb-12 text-center">
                  SIGNAL ANALYSIS COMPLETE
                </h1>

                {/* Score Display */}
                <div className="bg-zinc-950 border border-zinc-800 p-12 mb-12 text-center">
                  <p className="text-zinc-500 mb-4">YOUR NOISE LEVEL</p>
                  <p className="text-7xl font-black mb-4">
                    {driftScore}%
                  </p>
                  <p className="text-xl text-zinc-400">
                    {driftScore < 25 && "Strong signal. Minor noise."}
                    {driftScore >= 25 && driftScore < 50 && "Signal present. Noise building."}
                    {driftScore >= 50 && driftScore < 75 && "Noise overwhelming signal."}
                    {driftScore >= 75 && "Signal buried. Pure noise."}
                  </p>
                </div>

                {/* Prescribed Intervention */}
                <div className="border-4 border-red-600 p-12 mb-12 text-center">
                  <h2 className="text-2xl font-black text-red-600 mb-4">YOUR PRESCRIBED INTERVENTION:</h2>
                  <h3 className="text-5xl font-black mb-8">{recommendedIntervention}</h3>
                  <p className="text-xl text-zinc-400 mb-8">
                    Based on your signal patterns, this is the intervention you need.
                  </p>
                  <Link 
                    href={interventionUrl}
                    className="inline-block bg-red-600 px-8 py-4 text-xl font-black hover:bg-red-700 transition-colors"
                  >
                    DEPLOY INTERVENTION →
                  </Link>
                </div>

                {/* Next Steps */}
                <div className="grid md:grid-cols-2 gap-4">
                  <Link 
                    href="/interventions"
                    className="border-2 border-zinc-700 px-6 py-4 text-lg font-black hover:border-zinc-500 transition-colors text-center"
                  >
                    VIEW ALL INTERVENTIONS
                  </Link>
                  <Link 
                    href="https://outlook.office.com/owa/calendar/IG@imaginationg.studio/bookings/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-black px-6 py-4 text-lg font-black hover:bg-zinc-200 transition-colors text-center"
                  >
                    BOOK CLARITY CALL
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }

  // Question Screen
  const currentQ = questions[currentQuestion - 1];
  
  return (
    <>
      <SEOHead
        title={`${currentQ.title} - Signal Detection | IMAGINATION G`}
        description="Binary choice diagnostic. No middle ground. Truth or noise."
      />
      
      <div className="min-h-screen bg-black text-white">
        <Navigation currentPage="diagnostic" />

        <section className="pt-24 pb-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mx-auto">
              {/* Progress */}
              <div className="mb-12">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-zinc-500">QUESTION {currentQuestion} OF {questions.length}</span>
                  <span className="text-sm text-zinc-500">{Math.round((currentQuestion / questions.length) * 100)}% COMPLETE</span>
                </div>
                <div className="h-1 bg-zinc-900">
                  <div 
                    className="h-1 bg-red-600 transition-all duration-300"
                    style={{ width: `${(currentQuestion / questions.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question */}
              <div className="text-center mb-16">
                <h2 className="text-2xl font-black text-red-600 mb-8">{currentQ.title}</h2>
                <h3 className="text-3xl md:text-4xl font-black mb-12">
                  {currentQ.question}
                </h3>
              </div>

              {/* Answer Options */}
              <div className="grid md:grid-cols-2 gap-6">
                <button
                  onClick={() => handleAnswer('yes')}
                  className="group border-2 border-green-600 p-8 hover:bg-green-600 transition-all"
                >
                  <h4 className="text-2xl font-black text-green-600 group-hover:text-black mb-2">
                    {currentQ.yesText}
                  </h4>
                  <p className="text-zinc-400 group-hover:text-black">
                    {currentQ.yesSubtext}
                  </p>
                </button>

                <button
                  onClick={() => handleAnswer('no')}
                  className="group border-2 border-red-600 p-8 hover:bg-red-600 transition-all"
                >
                  <h4 className="text-2xl font-black text-red-600 group-hover:text-black mb-2">
                    {currentQ.noText}
                  </h4>
                  <p className="text-zinc-400 group-hover:text-black">
                    {currentQ.noSubtext}
                  </p>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DiagnosticPage;