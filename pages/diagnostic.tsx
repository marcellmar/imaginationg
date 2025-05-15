import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const DiagnosticPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [showResults, setShowResults] = useState(false);
  const [startTime, setStartTime] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: boolean }>({});

  const questions = [
    {
      id: 1,
      title: "THE REVENUE CHECK",
      question: "Your last big idea - did it make money?",
      answers: [
        { text: "YES, REAL CASH", subtext: "Numbers don't lie.", value: "no" },
        { text: "STILL WAITING", subtext: "Always tomorrow.", value: "yes" }
      ]
    },
    {
      id: 2,
      title: "THE MEETING CHECK",
      question: "Last week - meetings or making?",
      answers: [
        { text: "SHIPPED SOMETHING", subtext: "Movement over meetings.", value: "no" },
        { text: "TALKED ABOUT IT", subtext: "Professional talker.", value: "yes" }
      ]
    },
    {
      id: 3,
      title: "THE EXCUSE CHECK",
      question: "Why haven't you started?",
      answers: [
        { text: "I HAVE STARTED", subtext: "Already bleeding.", value: "no" },
        { text: "NEED MORE TIME/DATA/MONEY", subtext: "Classic drift.", value: "yes" }
      ]
    },
    {
      id: 4,
      title: "THE FEAR CHECK",
      question: "What scares you more?",
      answers: [
        { text: "STAYING STUCK", subtext: "Fear drives movement.", value: "no" },
        { text: "LOOKING STUPID", subtext: "Pride keeps you drifting.", value: "yes" }
      ]
    },
    {
      id: 5,
      title: "THE BLUFF CHECK",
      question: "If I called your biggest client right now, what would they say?",
      answers: [
        { text: "THEY DELIVER", subtext: "Reputation = results.", value: "no" },
        { text: "GREAT POTENTIAL", subtext: "Potential = haven't done shit.", value: "yes" }
      ]
    }
  ];

  const startDiagnostic = () => {
    setCurrentQuestion(1);
    setStartTime(Date.now());
    setAnswers({});
    setShowResults(false);
  };

  const selectAnswer = (questionId: number, answer: string) => {
    setAnswers({ ...answers, [questionId]: answer });
    setSelectedAnswers({ ...selectedAnswers, [questionId]: true });
    
    setTimeout(() => {
      if (questionId < questions.length) {
        setCurrentQuestion(questionId + 1);
      } else {
        // Show results
        calculateResults();
      }
    }, 500);
  };

  const calculateResults = () => {
    const driftScore = Object.values(answers).filter(a => a === 'yes').length;
    const totalQuestions = questions.length;
    setShowResults(true);
  };

  const getRecommendedWeapon = (driftScore: number) => {
    if (driftScore >= 4) {
      return { name: "30-DAY DRIFT BREAK", url: "/weapons/thirty-day-drift-break" };
    } else if (driftScore >= 3) {
      return { name: "THE MARKET SMACKDOWN", url: "/weapons/the-market-smackdown" };
    } else if (driftScore >= 2) {
      return { name: "THE MAP", url: "/weapons/the-map" };
    } else if (driftScore >= 1) {
      return { name: "THE NAMING", url: "/weapons/the-naming" };
    } else {
      return { name: "FIRST BLOOD BUILD", url: "/weapons/first-blood-build" };
    }
  };

  const driftScore = Object.values(answers).filter(a => a === 'yes').length;
  const recommendedWeapon = getRecommendedWeapon(driftScore);
  const timeElapsed = startTime ? Math.floor((Date.now() - startTime) / 1000) : 0;

  const getDriftLevel = (score: number) => {
    if (score >= 4) return { level: "TERMINAL DRIFT", className: "text-red-500" };
    if (score >= 3) return { level: "SEVERE DRIFT", className: "text-orange-500" };
    if (score >= 2) return { level: "MODERATE DRIFT", className: "text-yellow-500" };
    if (score >= 1) return { level: "MILD DRIFT", className: "text-blue-500" };
    return { level: "MINIMAL DRIFT", className: "text-green-500" };
  };

  const driftLevel = getDriftLevel(driftScore);

  return (
    <>
      <Head>
        <title>DRIFT DIAGNOSTIC | IMAGINATION G</title>
        <meta name="description" content="60 seconds to face the truth. Are you drifting or moving? Stop lying to yourself." />
      </Head>

      <div className="min-h-screen bg-black text-white font-sans">
        {/* Navigation */}
        <nav className="bg-black bg-opacity-95 backdrop-blur-sm shadow-lg px-6 py-4 fixed top-0 left-0 right-0 z-50">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <Link href="/" className="text-xl font-bold tracking-wider">IMAGINATION G</Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="hover:text-gray-300 transition-colors flex items-center gap-1">
                <span>←</span> Home
              </Link>
              <Link href="/weapons" className="hover:text-gray-300 transition-colors">Weapons</Link>
              <Link href="/about" className="hover:text-gray-300 transition-colors">About</Link>
              <a
                href="https://outlook.office.com/owa/calendar/IG@imaginationg.studio/bookings/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-6 py-2 font-medium hover:bg-gray-200 transition-all inline-block">
                Book a Call
              </a>
            </div>
          </div>
        </nav>

        <div className="pt-24 pb-16 px-6">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-7xl font-black mb-6">DRIFT DIAGNOSTIC</h1>
              <p className="text-2xl md:text-3xl text-red-500 font-bold">30 seconds to find out you're full of shit.</p>
              <p className="text-xl text-zinc-500 mt-4">Answer fast. No thinking. Just truth.</p>
            </div>

            {/* Start Screen */}
            {currentQuestion === 0 && !showResults && (
              <div className="text-center my-20">
                <div className="bg-black border-4 border-red-500 p-12 max-w-2xl mx-auto">
                  <h2 className="text-4xl font-black mb-6 text-red-500">STILL LYING TO YOURSELF?</h2>
                  <p className="text-2xl text-white mb-8">
                    5 punches to the face.<br/>
                    No escape routes.<br/>
                    Your weapon prescribed.<br/>
                  </p>
                  <p className="text-lg text-zinc-500 mb-8">
                    Most people fail. You're probably one of them.
                  </p>
                  <button 
                    onClick={startDiagnostic}
                    className="bg-red-600 text-white px-16 py-6 text-2xl font-black hover:bg-red-700 transition-all border-4 border-red-600">
                    FACE THE TRUTH
                  </button>
                </div>
              </div>
            )}

            {/* Questions */}
            {currentQuestion > 0 && !showResults && (
              <div className="space-y-8">
                {questions.filter(q => q.id === currentQuestion).map((q) => (
                  <div key={q.id} className="question animate-fade-in">
                    <h3 className="text-2xl font-bold mb-6">{q.id}. {q.title}</h3>
                    <p className="text-xl text-zinc-400 mb-6">{q.question}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {q.answers.map((answer, index) => (
                        <button 
                          key={index}
                          onClick={() => selectAnswer(q.id, answer.value)}
                          className={`answer-btn bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 py-6 px-8 text-xl font-medium transition-all ${
                            selectedAnswers[q.id] ? 'opacity-50' : ''
                          }`}
                          disabled={selectedAnswers[q.id]}>
                          <span className={`block ${answer.value === 'yes' ? 'text-red-500' : 'text-green-500'} font-bold`}>
                            {answer.text}
                          </span>
                          <span className="block text-sm text-zinc-500 mt-2">{answer.subtext}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Progress Bar */}
                <div className="mt-8">
                  <div className="bg-zinc-800 h-2 rounded-full overflow-hidden">
                    <div 
                      className="bg-red-500 h-full transition-all duration-300"
                      style={{ width: `${(currentQuestion / questions.length) * 100}%` }}
                    />
                  </div>
                  <p className="text-center text-zinc-500 mt-2">Question {currentQuestion} of {questions.length}</p>
                </div>
              </div>
            )}

            {/* Results */}
            {showResults && (
              <div className="text-center my-20 animate-fade-in">
                <div className="bg-zinc-900 border border-zinc-800 p-12 max-w-3xl mx-auto">
                  <h2 className="text-4xl font-bold mb-4">YOUR DRIFT DIAGNOSIS</h2>
                  <p className="text-lg text-zinc-500 mb-8">Completed in {timeElapsed} seconds</p>
                  
                  <div className="mb-12">
                    <p className="text-2xl mb-4">Drift Score:</p>
                    <p className={`text-6xl font-black ${driftLevel.className}`}>
                      {driftScore}/{questions.length}
                    </p>
                    <p className={`text-2xl mt-4 font-bold ${driftLevel.className}`}>
                      {driftLevel.level}
                    </p>
                    <p className="text-lg text-zinc-500 mt-4">
                      {driftScore >= 4 && "You're a professional drifter. Years wasted. Still talking."}
                      {driftScore === 3 && "Major drift. You know it. They know it. Stop lying."}
                      {driftScore === 2 && "Drifting hard. Time to face the mirror."}
                      {driftScore === 1 && "Slight drift. Still fixable. Move now."}
                      {driftScore === 0 && "No drift? Then why are you here? Stop wasting time."}
                    </p>
                  </div>

                  <div className="mb-12">
                    <p className="text-xl text-zinc-500 mb-4">YOUR PRESCRIBED WEAPON:</p>
                    <p className="text-3xl font-bold text-white mb-8">{recommendedWeapon.name}</p>
                    <a 
                      href={recommendedWeapon.url}
                      className="inline-block bg-red-500 text-white px-10 py-4 text-xl font-black hover:bg-red-600 transition-all">
                      GET YOUR WEAPON →
                    </a>
                  </div>

                  <div className="border-t border-zinc-800 pt-8 mt-12">
                    <button 
                      onClick={startDiagnostic}
                      className="text-zinc-500 hover:text-white transition-colors underline">
                      Retake Diagnostic
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DiagnosticPage;