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
      title: "THE REVENUE CHECK",
      question: "Your last big idea - did it make money?",
      yesText: "YES, REAL CASH",
      yesSubtext: "Numbers don't lie.",
      noText: "STILL WAITING",
      noSubtext: "Always tomorrow."
    },
    {
      id: 2,
      title: "THE NETWORK TEST",
      question: "Same LinkedIn connections for 6+ months?",
      yesText: "DEAD NETWORK",
      yesSubtext: "Same faces, same BS.",
      noText: "NEW COLLISIONS",
      noSubtext: "Fresh blood weekly."
    },
    {
      id: 3,
      title: "THE CLARITY CHECK",
      question: "Can you explain your vision in 10 words?",
      yesText: "CRYSTAL CLEAR",
      yesSubtext: "No fluff needed.",
      noText: "STILL FOGGY",
      noSubtext: "Lots of words, no point."
    },
    {
      id: 4,
      title: "THE SHIPPING TEST",
      question: "Built anything real in the last 30 days?",
      yesText: "SHIPPED IT",
      yesSubtext: "Ugly but live.",
      noText: "STILL PLANNING",
      noSubtext: "Perfect is the enemy."
    },
    {
      id: 5,
      title: "THE MOMENTUM CHECK",
      question: "Moving faster than 3 months ago?",
      yesText: "ACCELERATING",
      yesSubtext: "Speed is everything.",
      noText: "SAME PACE",
      noSubtext: "Or slower."
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
    
    // Calculate drift score based on answers
    if (answers[1] === 'no') driftScore += 20; // No revenue
    if (answers[2] === 'yes') driftScore += 20; // Dead network
    if (answers[3] === 'no') driftScore += 20; // No clarity
    if (answers[4] === 'no') driftScore += 20; // Not shipping
    if (answers[5] === 'no') driftScore += 20; // No momentum

    // Determine weapon based on highest need
    if (answers[3] === 'no') {
      recommendedWeapon = 'THE NAMING';
      weaponUrl = '/weapons/the-naming';
    } else if (answers[2] === 'yes') {
      recommendedWeapon = 'THE MAP';
      weaponUrl = '/weapons/the-map';
    } else if (answers[1] === 'no') {
      recommendedWeapon = 'THE MARKET SMACKDOWN';
      weaponUrl = '/weapons/the-market-smackdown';
    } else if (answers[4] === 'no') {
      recommendedWeapon = 'FIRST BLOOD BUILD';
      weaponUrl = '/weapons/first-blood-build';
    } else if (answers[5] === 'no') {
      recommendedWeapon = '30-DAY DRIFT BREAK';
      weaponUrl = '/weapons/thirty-day-drift-break';
    } else {
      recommendedWeapon = 'THE NAMING';
      weaponUrl = '/weapons/the-naming';
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
              <p className="text-2xl text-red-500 mb-8">30 seconds to find out you're full of shit.</p>
              <p className="text-zinc-500 mb-16">Answer fast. No thinking. Just truth.</p>

              <div className="border-2 border-red-500 p-12 max-w-2xl mx-auto">
                <h2 className="text-3xl font-black text-red-500 mb-6">STILL LYING TO YOURSELF?</h2>
                <div className="space-y-2 mb-8">
                  <p className="text-lg">5 punches to the face.</p>
                  <p className="text-lg">No escape routes.</p>
                  <p className="text-lg">Your weapon prescribed.</p>
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
                  <p className="text-lg text-zinc-400">→ TODAY: Stop talking. Start selling. Make $1.</p>
                )}
                {answers[2] === 'yes' && (
                  <p className="text-lg text-zinc-400">→ TODAY: Kill 5 dead relationships. Find 3 collision partners.</p>
                )}
                {answers[3] === 'no' && (
                  <p className="text-lg text-zinc-400">→ TODAY: Write your vision in 10 words. Or stay lost.</p>
                )}
                {answers[4] === 'no' && (
                  <p className="text-lg text-zinc-400">→ TODAY: Ship something ugly. Perfect is procrastination.</p>
                )}
                {answers[5] === 'no' && (
                  <p className="text-lg text-zinc-400">→ TODAY: Double your speed. Or get left behind.</p>
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