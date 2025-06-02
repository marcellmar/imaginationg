import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const DiagnosticPage = () => {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answers, setAnswers] = useState<Record<number, 'yes' | 'no'>>({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 1,
      title: "THE DECISION VELOCITY CHECK",
      question: "How long since your last major decision?",
      yesText: "THIS WEEK",
      yesSubtext: "Decisions create momentum.",
      noText: "STILL THINKING",
      noSubtext: "Analysis paralysis is drift."
    },
    {
      id: 2,
      title: "THE MEETING REALITY TEST",
      question: "Do your meetings produce decisions or more meetings?",
      yesText: "DECISIONS MADE",
      yesSubtext: "Action follows words.",
      noText: "MORE MEETINGS",
      noSubtext: "Strategy theater in full swing."
    },
    {
      id: 3,
      title: "THE CONSULTANT DEPENDENCY CHECK",
      question: "Making decisions without external 'experts'?",
      yesText: "WE DECIDE",
      yesSubtext: "Internal confidence intact.",
      noText: "NEED VALIDATION",
      noSubtext: "Outsourced your backbone."
    },
    {
      id: 4,
      title: "THE REVENUE REALITY",
      question: "Your last initiative - did it make money?",
      yesText: "PROFIT DELIVERED",
      yesSubtext: "Results, not reports.",
      noText: "STILL WAITING",
      noSubtext: "ROI is still theoretical."
    },
    {
      id: 5,
      title: "THE BINARY CHOICE TEST",
      question: "Can you answer business questions with YES or NO?",
      yesText: "CLEAR CHOICES",
      yesSubtext: "Binary decisions drive progress.",
      noText: "IT DEPENDS",
      noSubtext: "Conditional thinking kills momentum."
    },
    {
      id: 6,
      title: "THE PLANNING VS ACTION RATIO",
      question: "Spending more time planning or executing?",
      yesText: "EXECUTING",
      yesSubtext: "Bias toward action.",
      noText: "PLANNING",
      noSubtext: "Analysis addiction detected."
    },
    {
      id: 7,
      title: "THE COMMITTEE CORRUPTION",
      question: "Can one person make decisions in your company?",
      yesText: "INDIVIDUAL OWNERSHIP",
      yesSubtext: "Accountability drives results.",
      noText: "COMMITTEE REQUIRED",
      noSubtext: "Consensus kills speed."
    },
    {
      id: 8,
      title: "THE SACRED COW SCANNER",
      question: "Killed any 'untouchable' processes recently?",
      yesText: "SLAUGHTERED SOME",
      yesSubtext: "Progress requires sacrifice.",
      noText: "ALL SACRED",
      noSubtext: "Protecting dysfunction."
    },
    {
      id: 9,
      title: "THE SHIPPING VELOCITY",
      question: "Built and launched something in the last 30 days?",
      yesText: "SHIPPED IT",
      yesSubtext: "Ugly and live beats perfect and dead.",
      noText: "STILL PERFECTING",
      noSubtext: "Perfectionism is procrastination."
    },
    {
      id: 10,
      title: "THE CLARITY CATALYST",
      question: "Can you explain your vision in 10 words or less?",
      yesText: "CRYSTAL CLEAR",
      yesSubtext: "Clarity creates alignment.",
      noText: "NEEDS EXPLANATION",
      noSubtext: "Complexity is confusion."
    },
    {
      id: 11,
      title: "THE MOMENTUM MEASUREMENT",
      question: "Moving faster than you were 3 months ago?",
      yesText: "ACCELERATING",
      yesSubtext: "Velocity compounds value.",
      noText: "SAME SPEED",
      noSubtext: "Same pace equals drift."
    },
    {
      id: 12,
      title: "THE CONFLICT COMFORT",
      question: "Had a difficult business conversation this week?",
      yesText: "CONFRONTED TRUTH",
      yesSubtext: "Hard conversations create change.",
      noText: "AVOIDING CONFLICT",
      noSubtext: "Comfort zones kill companies."
    }
  ];

  const handleAnswer = (answer: 'yes' | 'no') => {
    const newAnswers = { ...answers, [currentQuestion]: answer };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
      }, 300);
    } else {
      setTimeout(() => {
        setShowResults(true);
      }, 300);
    }
  };

  const calculateResults = () => {
    let driftScore = 0;
    let recommendedWeapon = '';
    let weaponUrl = '';
    
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

    // Determine weapon based on most critical drift pattern
    if (answers[10] === 'no' || answers[5] === 'no') {
      // Clarity issues or can't make binary decisions
      recommendedWeapon = 'THE NAMING';
      weaponUrl = '/weapons/the-naming';
    } else if (answers[2] === 'no' || answers[6] === 'no' || answers[7] === 'no') {
      // Meeting/planning/committee issues = strategy theater
      recommendedWeapon = 'CLARITY RITUAL';
      weaponUrl = '/answers/guides/clarity-ritual';
    } else if (answers[4] === 'no') {
      // Revenue/profitability issues
      recommendedWeapon = 'THE MARKET SMACKDOWN';
      weaponUrl = '/weapons/the-market-smackdown';
    } else if (answers[9] === 'no') {
      // Not shipping/building
      recommendedWeapon = 'FIRST BLOOD BUILD';
      weaponUrl = '/weapons/first-blood-build';
    } else if (answers[11] === 'no' || answers[1] === 'no') {
      // Momentum/decision velocity issues
      recommendedWeapon = '30-DAY DRIFT BREAK';
      weaponUrl = '/weapons/thirty-day-drift-break';
    } else if (answers[12] === 'no' || answers[8] === 'no') {
      // Avoiding conflict or protecting dysfunction
      recommendedWeapon = 'THE NAMING';
      weaponUrl = '/weapons/the-naming';
    } else {
      // Default recommendation for comprehensive approach
      recommendedWeapon = 'THE MAP';
      weaponUrl = '/weapons/the-map';
    }

    return { driftScore, recommendedWeapon, weaponUrl };
  };

  if (!started) {
    return (
      <>
        <Head>
          <title>Drift Diagnostic | IMAGINATION G</title>
          <meta name="description" content="How do I know if my business is drifting? Take our 60-second diagnostic to identify drift patterns and get prescribed action." />
        </Head>

        <div className="min-h-screen bg-black text-white">
          {/* Navigation */}
          <nav className="fixed top-0 left-0 right-0 bg-black z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
              <Link href="/" className="text-base font-black">IMAGINATION G</Link>
              <div className="flex items-center gap-8">
                <Link href="/" className="text-sm hover:text-zinc-400">← Home</Link>
                <Link href="/weapons" className="text-sm hover:text-zinc-400">Weapons</Link>
                <Link href="/about" className="text-sm hover:text-zinc-400">About</Link>
                <Link href="/diagnostic" className="bg-white text-black px-6 py-2 text-sm font-bold hover:bg-zinc-200 transition-colors">
                  Book a Call
                </Link>
              </div>
            </div>
          </nav>

          <div className="flex items-center justify-center min-h-screen px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-6xl md:text-8xl font-black mb-4">DRIFT DIAGNOSTIC</h1>
              <p className="text-2xl text-red-500 mb-8">2 minutes to expose organizational drift patterns.</p>
              <p className="text-zinc-500 mb-16">12 questions. Binary choices. No escape routes.</p>

              <div className="border-2 border-red-500 p-12 max-w-2xl mx-auto">
                <h2 className="text-3xl font-black text-red-500 mb-6">COMPREHENSIVE DRIFT ANALYSIS</h2>
                <div className="space-y-2 mb-8">
                  <p className="text-lg">12 precision diagnostics.</p>
                  <p className="text-lg">Binary decision patterns.</p>
                  <p className="text-lg">Specific weapon prescribed.</p>
                  <p className="text-lg">Immediate action plan.</p>
                </div>
                <p className="text-zinc-500 mb-8">Most people fail. You're probably one of them.</p>
                <button
                  onClick={() => setStarted(true)}
                  className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 text-xl font-black transition-colors"
                >
                  FACE THE TRUTH
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (showResults) {
    const { driftScore, recommendedWeapon, weaponUrl } = calculateResults();
    
    return (
      <>
        <Head>
          <title>Your Results | IMAGINATION G</title>
        </Head>

        <div className="min-h-screen bg-black text-white">
          {/* Navigation */}
          <nav className="fixed top-0 left-0 right-0 bg-black z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
              <Link href="/" className="text-base font-black">IMAGINATION G</Link>
              <div className="flex items-center gap-8">
                <Link href="/" className="text-sm hover:text-zinc-400">← Home</Link>
                <Link href="/weapons" className="text-sm hover:text-zinc-400">Weapons</Link>
                <Link href="/about" className="text-sm hover:text-zinc-400">About</Link>
                <Link href="/diagnostic" className="bg-white text-black px-6 py-2 text-sm font-bold hover:bg-zinc-200 transition-colors">
                  Book a Call
                </Link>
              </div>
            </div>
          </nav>

          <div className="pt-32 pb-20 px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-black mb-8">YOUR DRIFT SCORE</h1>
              
              <div className={`text-8xl md:text-9xl font-black mb-8 ${
                driftScore >= 60 ? 'text-red-500' : 
                driftScore >= 40 ? 'text-yellow-500' : 
                'text-green-500'
              }`}>
                {driftScore}%
              </div>

              <p className="text-2xl text-zinc-400 mb-16">
                {driftScore >= 60 ? "You're drowning in drift. Time to move or die." :
                 driftScore >= 40 ? "Warning signs everywhere. Pick your weapon now." :
                 "Minor drift detected. Stay vigilant."}
              </p>

              <div className="border-2 border-red-500 p-12 mb-16">
                <h2 className="text-3xl font-black text-red-500 mb-4">YOUR PRESCRIBED WEAPON:</h2>
                <h3 className="text-5xl font-black mb-8">{recommendedWeapon}</h3>
                <p className="text-xl text-zinc-400 mb-8">
                  Based on your drift patterns, this is the intervention you need.
                </p>
                <Link 
                  href={weaponUrl}
                  className="inline-block bg-red-500 hover:bg-red-600 text-white px-8 py-4 text-xl font-black transition-colors"
                >
                  DEPLOY THIS WEAPON →
                </Link>
              </div>

              <div className="space-y-4 mb-16">
                <h3 className="text-2xl font-black mb-8">YOUR IMMEDIATE ACTION PLAN:</h3>
                {answers[1] === 'no' && (
                  <p className="text-lg text-zinc-400">→ TODAY: Make one major decision. Stop analyzing.</p>
                )}
                {answers[2] === 'no' && (
                  <p className="text-lg text-zinc-400">→ TODAY: Cancel one meeting. Make one decision instead.</p>
                )}
                {answers[3] === 'no' && (
                  <p className="text-lg text-zinc-400">→ TODAY: Stop asking consultants. Trust your instincts.</p>
                )}
                {answers[4] === 'no' && (
                  <p className="text-lg text-zinc-400">→ TODAY: Kill one initiative that doesn't make money.</p>
                )}
                {answers[5] === 'no' && (
                  <p className="text-lg text-zinc-400">→ TODAY: Answer three business questions with YES or NO only.</p>
                )}
                {answers[6] === 'no' && (
                  <p className="text-lg text-zinc-400">→ TODAY: Spend more time doing than planning.</p>
                )}
                {answers[7] === 'no' && (
                  <p className="text-lg text-zinc-400">→ TODAY: Assign one person to make decisions. No committees.</p>
                )}
                {answers[8] === 'no' && (
                  <p className="text-lg text-zinc-400">→ TODAY: Kill one 'sacred' process that wastes time.</p>
                )}
                {answers[9] === 'no' && (
                  <p className="text-lg text-zinc-400">→ TODAY: Ship something ugly but functional.</p>
                )}
                {answers[10] === 'no' && (
                  <p className="text-lg text-zinc-400">→ TODAY: Write your vision in 10 words. Then stick to it.</p>
                )}
                {answers[11] === 'no' && (
                  <p className="text-lg text-zinc-400">→ TODAY: Double your speed on one critical task.</p>
                )}
                {answers[12] === 'no' && (
                  <p className="text-lg text-zinc-400">→ TODAY: Have one difficult conversation you've been avoiding.</p>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                <Link 
                  href="/weapons"
                  className="bg-white text-black px-6 py-4 text-lg font-black hover:bg-zinc-200 transition-colors"
                >
                  VIEW ALL WEAPONS
                </Link>
                <Link 
                  href="https://outlook.office.com/owa/calendar/IG@imaginationg.studio/bookings/"
                  target="_blank"
                  className="border-2 border-white text-white px-6 py-4 text-lg font-black hover:bg-white hover:text-black transition-colors"
                >
                  BOOK INTERVENTION
                </Link>
              </div>

              <p className="text-zinc-500 mt-8 italic">
                87% of people who take this diagnostic are still drifting 30 days later. Don't be one of them.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }

  const question = questions[currentQuestion - 1];
  const progressPercentage = ((currentQuestion - 1) / questions.length) * 100;

  return (
    <>
      <Head>
        <title>Drift Diagnostic | IMAGINATION G</title>
      </Head>

      <div className="min-h-screen bg-black text-white">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 bg-black z-50">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/" className="text-base font-black">IMAGINATION G</Link>
            <div className="flex items-center gap-8">
              <Link href="/" className="text-sm hover:text-zinc-400">← Home</Link>
              <Link href="/weapons" className="text-sm hover:text-zinc-400">Weapons</Link>
              <Link href="/about" className="text-sm hover:text-zinc-400">About</Link>
              <Link href="/diagnostic" className="bg-white text-black px-6 py-2 text-sm font-bold hover:bg-zinc-200 transition-colors">
                Book a Call
              </Link>
            </div>
          </div>
        </nav>

        <div className="flex flex-col items-center justify-center min-h-screen px-6">
          <div className="max-w-4xl mx-auto w-full">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-6xl md:text-8xl font-black mb-4">DRIFT DIAGNOSTIC</h1>
              <p className="text-2xl text-red-500">30 seconds to find out you're full of shit.</p>
              <p className="text-zinc-500 mt-2">Answer fast. No thinking. Just truth.</p>
            </div>

            {/* Question */}
            <div className="mb-12">
              <h2 className="text-2xl font-black mb-4">{question.id}. {question.title}</h2>
              <p className="text-xl text-zinc-400 mb-12">{question.question}</p>

              <div className="grid md:grid-cols-2 gap-6">
                <button
                  onClick={() => handleAnswer('yes')}
                  className="group bg-zinc-900 hover:bg-green-900 border-2 border-zinc-700 hover:border-green-500 p-8 transition-all"
                >
                  <h3 className="text-2xl font-black text-green-500 mb-2">{question.yesText}</h3>
                  <p className="text-zinc-500">{question.yesSubtext}</p>
                </button>

                <button
                  onClick={() => handleAnswer('no')}
                  className="group bg-zinc-900 hover:bg-red-900 border-2 border-zinc-700 hover:border-red-500 p-8 transition-all"
                >
                  <h3 className="text-2xl font-black text-red-500 mb-2">{question.noText}</h3>
                  <p className="text-zinc-500">{question.noSubtext}</p>
                </button>
              </div>
            </div>

            {/* Progress */}
            <div className="max-w-2xl mx-auto">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-zinc-500">Question {currentQuestion} of {questions.length}</span>
              </div>
              <div className="h-1 bg-zinc-800 relative">
                <div 
                  className="h-full bg-red-500 transition-all duration-300"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DiagnosticPage;