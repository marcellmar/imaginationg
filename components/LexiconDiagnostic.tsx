import React, { useState } from 'react';
import Link from 'next/link';

interface DiagnosticQuestion {
  id: number;
  question: string;
  yesText: string;
  yesSubtext: string;
  noText: string;
  noSubtext: string;
}

interface DiagnosticResult {
  score: number;
  severity: 'low' | 'medium' | 'high' | 'critical';
  title: string;
  description: string;
  recommendation: string;
  interventionUrl?: string;
}

interface LexiconDiagnosticProps {
  lexiconTerm: string;
  questions: DiagnosticQuestion[];
  calculateResults: (answers: Record<number, 'yes' | 'no'>) => DiagnosticResult;
  color?: 'red' | 'yellow' | 'green';
}

const LexiconDiagnostic: React.FC<LexiconDiagnosticProps> = ({
  lexiconTerm,
  questions,
  calculateResults,
  color = 'red'
}) => {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answers, setAnswers] = useState<Record<number, 'yes' | 'no'>>({});
  const [showResults, setShowResults] = useState(false);

  const colorClasses = {
    red: {
      primary: 'text-red-600',
      border: 'border-red-600',
      bg: 'bg-red-600',
      hover: 'hover:bg-red-700'
    },
    yellow: {
      primary: 'text-yellow-500',
      border: 'border-yellow-500',
      bg: 'bg-yellow-500',
      hover: 'hover:bg-yellow-600'
    },
    green: {
      primary: 'text-green-500',
      border: 'border-green-500',
      bg: 'bg-green-500',
      hover: 'hover:bg-green-600'
    }
  };

  const colors = colorClasses[color];

  const handleAnswer = (answer: 'yes' | 'no') => {
    setAnswers({ ...answers, [currentQuestion]: answer });
    
    if (currentQuestion < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'low': return 'text-green-500';
      case 'medium': return 'text-yellow-500';
      case 'high': return 'text-orange-500';
      case 'critical': return 'text-red-500';
      default: return 'text-red-500';
    }
  };

  // Start Screen
  if (!started) {
    return (
      <div className="bg-zinc-950 border border-zinc-800 p-8 my-12">
        <div className="text-center">
          <div className={`inline-block mb-6 text-xs font-mono bg-zinc-900 border ${colors.border} px-4 py-2 rounded-full`}>
            <span className={`inline-block w-2 h-2 ${colors.bg} rounded-full mr-2 animate-pulse`}></span>
            {lexiconTerm.toUpperCase()} DIAGNOSTIC
          </div>

          <h3 className="text-2xl font-black mb-4">
            DETECT YOUR {lexiconTerm.toUpperCase()} LEVEL
          </h3>
          
          <p className="text-zinc-400 mb-8">
            {questions.length} targeted questions to measure your exposure to {lexiconTerm}.
          </p>
          
          <button
            onClick={() => setStarted(true)}
            className={`${colors.bg} px-8 py-4 text-lg font-black ${colors.hover} transition-colors text-black`}
          >
            START DIAGNOSTIC
          </button>
          
          <p className="text-zinc-600 mt-4 text-sm">
            Takes 60 seconds. No data stored.
          </p>
        </div>
      </div>
    );
  }

  // Results Screen
  if (showResults) {
    const result = calculateResults(answers);
    
    return (
      <div className="bg-zinc-950 border border-zinc-800 p-8 my-12">
        <h3 className="text-2xl font-black mb-8 text-center">
          {lexiconTerm.toUpperCase()} ANALYSIS COMPLETE
        </h3>

        {/* Score Display */}
        <div className="bg-black border border-zinc-700 p-8 mb-8 text-center">
          <p className="text-zinc-500 mb-2">YOUR {lexiconTerm.toUpperCase()} LEVEL</p>
          <p className="text-5xl font-black mb-2">
            {result.score}%
          </p>
          <p className={`text-lg font-black ${getSeverityColor(result.severity)}`}>
            {result.severity.toUpperCase()}
          </p>
        </div>

        {/* Result Analysis */}
        <div className="mb-8">
          <h4 className="text-xl font-black mb-4">{result.title}</h4>
          <p className="text-zinc-400 mb-6">{result.description}</p>
          
          <div className={`border-l-4 ${colors.border} bg-zinc-900 p-6`}>
            <h5 className="font-black mb-2">RECOMMENDED ACTION:</h5>
            <p className="text-zinc-300">{result.recommendation}</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          {result.interventionUrl && (
            <Link 
              href={result.interventionUrl}
              className={`${colors.bg} px-6 py-3 text-center font-black ${colors.hover} transition-colors text-black`}
            >
              DEPLOY INTERVENTION →
            </Link>
          )}
          <button
            onClick={() => {
              setStarted(false);
              setCurrentQuestion(1);
              setAnswers({});
              setShowResults(false);
            }}
            className="border-2 border-zinc-700 px-6 py-3 font-black hover:border-zinc-500 transition-colors"
          >
            RETAKE DIAGNOSTIC
          </button>
        </div>
      </div>
    );
  }

  // Question Screen
  const currentQ = questions[currentQuestion - 1];
  
  return (
    <div className="bg-zinc-950 border border-zinc-800 p-8 my-12">
      {/* Progress */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-zinc-500">QUESTION {currentQuestion} OF {questions.length}</span>
          <span className="text-sm text-zinc-500">{Math.round((currentQuestion / questions.length) * 100)}% COMPLETE</span>
        </div>
        <div className="h-1 bg-zinc-900">
          <div 
            className={`h-1 ${colors.bg} transition-all duration-300`}
            style={{ width: `${(currentQuestion / questions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="text-center mb-12">
        <h4 className="text-xl md:text-2xl font-black mb-8">
          {currentQ.question}
        </h4>
      </div>

      {/* Answer Options */}
      <div className="grid md:grid-cols-2 gap-4">
        <button
          onClick={() => handleAnswer('yes')}
          className="group border-2 border-green-600 p-6 hover:bg-green-600 transition-all"
        >
          <h5 className="text-lg font-black text-green-600 group-hover:text-black mb-2">
            {currentQ.yesText}
          </h5>
          <p className="text-sm text-zinc-400 group-hover:text-black">
            {currentQ.yesSubtext}
          </p>
        </button>

        <button
          onClick={() => handleAnswer('no')}
          className={`group border-2 ${colors.border} p-6 ${colors.hover} transition-all`}
        >
          <h5 className={`text-lg font-black ${colors.primary} group-hover:text-black mb-2`}>
            {currentQ.noText}
          </h5>
          <p className="text-sm text-zinc-400 group-hover:text-black">
            {currentQ.noSubtext}
          </p>
        </button>
      </div>
    </div>
  );
};

export default LexiconDiagnostic;