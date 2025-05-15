import React, { useState } from 'react';
import Head from 'next/head';

const DiagnosticPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 1,
      question: "Your last big idea - did it make money?",
      options: ["YES", "STILL WAITING"]
    },
    {
      id: 2,
      question: "Last week - meetings or making?",
      options: ["SHIPPED SOMETHING", "TALKED ABOUT IT"]
    },
    {
      id: 3,
      question: "Why haven't you started?",
      options: ["I HAVE STARTED", "NEED MORE TIME"]
    },
    {
      id: 4,
      question: "What scares you more?",
      options: ["STAYING STUCK", "LOOKING STUPID"]
    },
    {
      id: 5,
      question: "What would your biggest client say?",
      options: ["THEY DELIVER", "GREAT POTENTIAL"]
    }
  ];

  const selectAnswer = (questionId: number, answer: string) => {
    const value = answer === questions[questionId - 1].options[0] ? 'no' : 'yes';
    setAnswers({ ...answers, [questionId]: value });
    
    if (questionId < questions.length) {
      setCurrentQuestion(questionId + 1);
    } else {
      setShowResults(true);
    }
  };

  const driftScore = Object.values(answers).filter(a => a === 'yes').length;

  const getWeapon = (score: number) => {
    if (score >= 4) return { name: "30-DAY DRIFT BREAK", url: "/weapons/thirty-day-drift-break" };
    if (score >= 3) return { name: "THE MARKET SMACKDOWN", url: "/weapons/the-market-smackdown" };
    if (score >= 2) return { name: "THE MAP", url: "/weapons/the-map" };
    if (score >= 1) return { name: "THE NAMING", url: "/weapons/the-naming" };
    return { name: "FIRST BLOOD BUILD", url: "/weapons/first-blood-build" };
  };

  const weapon = getWeapon(driftScore);

  return (
    <>
      <Head>
        <title>DIAGNOSTIC | IMAGINATION G</title>
        <meta name="description" content="The questions. The score. The weapon." />
      </Head>

      <div className="min-h-screen bg-black text-white font-sans">
        <div className="min-h-screen flex items-center justify-center px-6">
          {currentQuestion === 0 && !showResults && (
            <div className="text-center">
              <h1 className="text-6xl md:text-8xl font-black mb-16">THE TEST</h1>
              <button 
                onClick={() => setCurrentQuestion(1)}
                className="text-2xl font-black text-white border-b-4 border-white hover:text-red-500 hover:border-red-500 transition-all pb-2"
              >
                BEGIN
              </button>
            </div>
          )}

          {currentQuestion > 0 && !showResults && (
            <div className="text-center max-w-3xl">
              <div className="mb-16">
                <p className="text-3xl md:text-4xl font-black mb-2">{currentQuestion}/5</p>
              </div>
              <h2 className="text-3xl md:text-5xl font-black mb-16">{questions[currentQuestion - 1].question}</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {questions[currentQuestion - 1].options.map((option, index) => (
                  <button 
                    key={index}
                    onClick={() => selectAnswer(currentQuestion, option)}
                    className="bg-black text-white px-8 py-6 text-xl font-black border-4 border-white hover:bg-white hover:text-black transition-all"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}

          {showResults && (
            <div className="text-center max-w-3xl">
              <h2 className="text-6xl md:text-8xl font-black mb-8 text-red-500">
                {driftScore}/{questions.length}
              </h2>
              <p className="text-3xl font-black mb-16">YOUR WEAPON:</p>
              <a 
                href={weapon.url}
                className="inline-block text-3xl font-black text-white border-b-4 border-white hover:text-red-500 hover:border-red-500 transition-all pb-2"
              >
                {weapon.name}
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DiagnosticPage;