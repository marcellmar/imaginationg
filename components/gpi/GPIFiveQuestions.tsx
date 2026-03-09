/**
 * GPIFiveQuestions Component
 * Quick personal audit diagnostic
 * Inspired by Five_Questions.html
 */

import React, { useState } from 'react';

interface Question {
  number: number;
  text: string;
  subtext: {
    signal: string;
    mixed: string;
    structure: string;
  };
  color: string;
}

const QUESTIONS: Question[] = [
  {
    number: 1,
    text: 'If your role disappeared tomorrow, how long before anyone outside your team would notice?',
    subtext: {
      signal: 'Days = signal. You\'re creating visible impact.',
      mixed: 'Weeks = mixed. You\'re useful but not essential.',
      structure: 'Months = structure. You\'re maintaining, not creating.',
    },
    color: 'red',
  },
  {
    number: 2,
    text: 'What percentage of your work could be written as a checklist and handed to someone else, or something else?',
    subtext: {
      signal: '<20% = safe for now. Your judgment matters.',
      mixed: '20-60% = watch closely. Parts of you are automatable.',
      structure: '>60% = urgent. You\'re competing with systems that don\'t sleep.',
    },
    color: 'yellow',
  },
  {
    number: 3,
    text: 'When was the last time your industry\'s fundamentals changed, and did you change with them?',
    subtext: {
      signal: 'You led the change = signal.',
      mixed: 'You adapted to it = survivable.',
      structure: 'You\'re still doing it the old way = the floor is moving under you.',
    },
    color: 'green',
  },
  {
    number: 4,
    text: 'If you left your industry entirely, what would transfer and what would evaporate?',
    subtext: {
      signal: 'Transferable: Pattern recognition, decision-making, communication, learning velocity.',
      mixed: '',
      structure: 'Evaporates: Industry jargon, legacy system knowledge, regulatory muscle memory, relationships that only matter inside the walls.',
    },
    color: 'blue',
  },
  {
    number: 5,
    text: 'Are you being paid for what you know, or for what you figure out?',
    subtext: {
      signal: 'What you know has a half-life. It decays. AI is compressing that half-life to months.',
      mixed: '',
      structure: 'What you figure out is renewable. It compounds. It\'s the only durable asset.',
    },
    color: 'purple',
  },
];

const COLOR_CLASSES: Record<string, { border: string; accent: string; bg: string }> = {
  red: { border: 'border-l-red-500', accent: 'text-red-500', bg: 'bg-red-500' },
  yellow: { border: 'border-l-yellow-500', accent: 'text-yellow-500', bg: 'bg-yellow-500' },
  green: { border: 'border-l-green-500', accent: 'text-green-500', bg: 'bg-green-500' },
  blue: { border: 'border-l-blue-500', accent: 'text-blue-500', bg: 'bg-blue-500' },
  purple: { border: 'border-l-purple-500', accent: 'text-purple-500', bg: 'bg-purple-500' },
};

interface GPIFiveQuestionsProps {
  interactive?: boolean;
  onComplete?: (score: number) => void;
}

const GPIFiveQuestions: React.FC<GPIFiveQuestionsProps> = ({
  interactive = false,
  onComplete,
}) => {
  const [answers, setAnswers] = useState<Record<number, 'signal' | 'mixed' | 'structure'>>({});

  const handleAnswer = (questionNumber: number, answer: 'signal' | 'mixed' | 'structure') => {
    const newAnswers = { ...answers, [questionNumber]: answer };
    setAnswers(newAnswers);

    // Check if all questions answered
    if (Object.keys(newAnswers).length === 5 && onComplete) {
      const score = Object.values(newAnswers).filter(a => a === 'signal').length;
      onComplete(score);
    }
  };

  const signalCount = Object.values(answers).filter(a => a === 'signal').length;

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-2xl font-black mb-2">THE FIVE QUESTIONS</h2>
        <p className="text-stone-500">The audit you\'ve been avoiding. Answer honestly.</p>
      </div>

      {/* Questions */}
      <div className="space-y-5">
        {QUESTIONS.map((q) => {
          const colors = COLOR_CLASSES[q.color];
          const isAnswered = answers[q.number];

          return (
            <div
              key={q.number}
              className={`bg-white border border-stone-200 ${colors.border} border-l-4 rounded-xl p-6 transition-all ${
                isAnswered ? 'opacity-70' : ''
              }`}
            >
              <div className={`text-xs font-semibold ${colors.accent} tracking-widest uppercase mb-3`}>
                Question {q.number}
              </div>
              <p className="text-lg font-semibold text-stone-900 mb-4 leading-relaxed">
                {q.text}
              </p>
              <div className="space-y-2 text-sm text-stone-500">
                {q.subtext.signal && (
                  <p>
                    <span className="text-stone-600 italic">{q.subtext.signal}</span>
                  </p>
                )}
                {q.subtext.mixed && (
                  <p>
                    <span className="text-stone-600 italic">{q.subtext.mixed}</span>
                  </p>
                )}
                {q.subtext.structure && (
                  <p>
                    <span className="text-stone-600 italic">{q.subtext.structure}</span>
                  </p>
                )}
              </div>

              {/* Interactive answer buttons */}
              {interactive && (
                <div className="flex gap-2 mt-4 pt-4 border-t border-stone-200">
                  <button
                    onClick={() => handleAnswer(q.number, 'signal')}
                    className={`flex-1 py-2 px-3 rounded text-xs font-bold transition-all ${
                      answers[q.number] === 'signal'
                        ? 'bg-green-600 text-white'
                        : 'bg-stone-100 text-stone-500 hover:bg-stone-200'
                    }`}
                  >
                    SIGNAL
                  </button>
                  <button
                    onClick={() => handleAnswer(q.number, 'mixed')}
                    className={`flex-1 py-2 px-3 rounded text-xs font-bold transition-all ${
                      answers[q.number] === 'mixed'
                        ? 'bg-yellow-600 text-white'
                        : 'bg-stone-100 text-stone-500 hover:bg-stone-200'
                    }`}
                  >
                    MIXED
                  </button>
                  <button
                    onClick={() => handleAnswer(q.number, 'structure')}
                    className={`flex-1 py-2 px-3 rounded text-xs font-bold transition-all ${
                      answers[q.number] === 'structure'
                        ? 'bg-red-600 text-white'
                        : 'bg-stone-100 text-stone-500 hover:bg-stone-200'
                    }`}
                  >
                    STRUCTURE
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Scoring section */}
      <div className="mt-10 pt-8 border-t border-stone-200">
        <h3 className="text-center font-semibold mb-6">
          {interactive ? `Your Signal Score: ${signalCount}/5` : 'Count your honest answers'}
        </h3>
        <div className="grid grid-cols-3 gap-4">
          <div className={`text-center p-4 rounded-xl border ${
            interactive && signalCount <= 1 ? 'border-red-500 bg-red-50' : 'border-red-200 bg-red-50/50'
          }`}>
            <div className="text-2xl font-black text-red-500">0-1</div>
            <div className="text-xs text-stone-500 mt-1">Move. Now.</div>
          </div>
          <div className={`text-center p-4 rounded-xl border ${
            interactive && signalCount >= 2 && signalCount <= 3 ? 'border-yellow-500 bg-yellow-50' : 'border-yellow-200 bg-yellow-50/50'
          }`}>
            <div className="text-2xl font-black text-yellow-500">2-3</div>
            <div className="text-xs text-stone-500 mt-1">Build. Fast.</div>
          </div>
          <div className={`text-center p-4 rounded-xl border ${
            interactive && signalCount >= 4 ? 'border-green-500 bg-green-50' : 'border-green-200 bg-green-50/50'
          }`}>
            <div className="text-2xl font-black text-green-500">4-5</div>
            <div className="text-xs text-stone-500 mt-1">Compound.</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-8 text-stone-400 italic text-sm">
        The mirror doesn\'t lie. Neither should you.
      </div>
    </div>
  );
};

export default GPIFiveQuestions;
