/**
 * Five Questions Quick Audit Page
 * Personal career diagnostic tool
 */

import React, { useState } from 'react';
import Link from 'next/link';
import SEOHead from '../../components/SEOHead';
import Navigation from '../../components/Navigation';

interface Question {
  id: number;
  text: string;
  subtext: string[];
  color: string;
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    text: 'If your role disappeared tomorrow, how long before anyone outside your team would notice?',
    subtext: [
      'Days = signal. You\'re creating visible impact.',
      'Weeks = mixed. You\'re useful but not essential.',
      'Months = structure. You\'re maintaining, not creating.',
    ],
    color: 'red',
  },
  {
    id: 2,
    text: 'What percentage of your work could be written as a checklist and handed to someone else, or something else?',
    subtext: [
      '<20% = safe for now. Your judgment matters.',
      '20-60% = watch closely. Parts of you are automatable.',
      '>60% = urgent. You\'re competing with systems that don\'t sleep.',
    ],
    color: 'yellow',
  },
  {
    id: 3,
    text: 'When was the last time your industry\'s fundamentals changed, and did you change with them?',
    subtext: [
      'You led the change = signal.',
      'You adapted to it = survivable.',
      'You\'re still doing it the old way = the floor is moving under you.',
    ],
    color: 'green',
  },
  {
    id: 4,
    text: 'If you left your industry entirely, what would transfer and what would evaporate?',
    subtext: [
      'Transferable: Pattern recognition, decision-making, communication, learning velocity.',
      'Evaporates: Industry jargon, legacy system knowledge, regulatory muscle memory, relationships that only matter inside the walls.',
    ],
    color: 'blue',
  },
  {
    id: 5,
    text: 'Are you being paid for what you know, or for what you figure out?',
    subtext: [
      'What you know has a half-life. It decays. AI is compressing that half-life to months.',
      'What you figure out is renewable. It compounds. It\'s the only durable asset.',
    ],
    color: 'purple',
  },
];

const COLOR_CLASSES: Record<string, { border: string; accent: string }> = {
  red: { border: 'border-l-red-500', accent: 'text-red-500' },
  yellow: { border: 'border-l-yellow-500', accent: 'text-yellow-500' },
  green: { border: 'border-l-green-500', accent: 'text-green-500' },
  blue: { border: 'border-l-blue-500', accent: 'text-blue-500' },
  purple: { border: 'border-l-purple-500', accent: 'text-purple-500' },
};

const FiveQuestionsPage = () => {
  const [answers, setAnswers] = useState<Record<number, 'signal' | 'mixed' | 'structure'>>({});
  const [showResult, setShowResult] = useState(false);

  const signalCount = Object.values(answers).filter(a => a === 'signal').length;
  const isComplete = Object.keys(answers).length === 5;

  const handleAnswer = (questionId: number, answer: 'signal' | 'mixed' | 'structure') => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const getResultMessage = () => {
    if (signalCount >= 4) {
      return {
        score: '4-5',
        title: 'COMPOUND',
        color: 'text-green-500',
        message: 'You\'re positioned well. Your skills compound over time. Double down on what makes you valuable.',
        action: 'Focus on deepening your signal capabilities. Mentor others. Build systems.',
      };
    }
    if (signalCount >= 2) {
      return {
        score: '2-3',
        title: 'BUILD. FAST.',
        color: 'text-yellow-500',
        message: 'You\'re in transition. Some signal, some structure. The window is closing.',
        action: 'Identify which parts of your work are structure and actively develop the signal parts. Learn new skills that can\'t be automated.',
      };
    }
    return {
      score: '0-1',
      title: 'MOVE. NOW.',
      color: 'text-red-500',
      message: 'Your position is precarious. Structure roles in shifting industries are the first to go.',
      action: 'Don\'t wait. Start building transferable skills today. Consider industry change before it\'s forced on you.',
    };
  };

  const result = getResultMessage();

  return (
    <>
      <SEOHead
        title="The Five Questions: Career Audit | IMAGINATION G"
        description="The audit you've been avoiding. Five questions to reveal where you stand. Answer honestly. The mirror doesn't lie."
        ogImage="/images/og-five-questions.svg"
      />

      <div className="min-h-screen bg-black text-white">
        <Navigation currentPage="tools" />

        {/* Hero */}
        <section className="pt-24 pb-12 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block mb-8 text-purple-400 text-xs font-mono bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-full">
                <span className="inline-block w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></span>
                PERSONAL AUDIT
              </div>

              <h1 className="text-4xl md:text-5xl font-black mb-6 leading-[1.1]">
                THE FIVE QUESTIONS<span className="text-red-600">.</span>
              </h1>

              <p className="text-xl text-zinc-400 mb-4">
                The audit you've been avoiding. Answer honestly.
              </p>
            </div>
          </div>
        </section>

        {/* Questions */}
        <section className="py-8 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {QUESTIONS.map((q) => {
                const colors = COLOR_CLASSES[q.color];
                const answer = answers[q.id];

                return (
                  <div
                    key={q.id}
                    className={`bg-zinc-950 border border-zinc-800 ${colors.border} border-l-4 rounded-xl p-6`}
                  >
                    <div className={`text-xs font-semibold ${colors.accent} tracking-widest uppercase mb-3`}>
                      Question {q.id}
                    </div>
                    <p className="text-lg font-semibold text-white mb-4 leading-relaxed">
                      {q.text}
                    </p>
                    <div className="space-y-2 text-sm text-zinc-500 mb-6">
                      {q.subtext.map((s, i) => (
                        <p key={i} className="italic">{s}</p>
                      ))}
                    </div>

                    {/* Answer buttons */}
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleAnswer(q.id, 'signal')}
                        className={`flex-1 py-3 px-4 rounded-lg text-sm font-bold transition-all ${
                          answer === 'signal'
                            ? 'bg-green-600 text-white'
                            : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
                        }`}
                      >
                        SIGNAL
                      </button>
                      <button
                        onClick={() => handleAnswer(q.id, 'mixed')}
                        className={`flex-1 py-3 px-4 rounded-lg text-sm font-bold transition-all ${
                          answer === 'mixed'
                            ? 'bg-yellow-600 text-black'
                            : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
                        }`}
                      >
                        MIXED
                      </button>
                      <button
                        onClick={() => handleAnswer(q.id, 'structure')}
                        className={`flex-1 py-3 px-4 rounded-lg text-sm font-bold transition-all ${
                          answer === 'structure'
                            ? 'bg-red-600 text-white'
                            : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
                        }`}
                      >
                        STRUCTURE
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Result */}
        <section className="py-12 px-6 bg-zinc-950">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-black mb-2">YOUR SCORE</h2>
              <div className="text-6xl font-black text-white">
                {signalCount}<span className="text-zinc-600">/5</span>
              </div>
              <p className="text-zinc-500 mt-2">Signal answers</p>
            </div>

            {/* Score legend */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className={`text-center p-4 rounded-xl border ${
                signalCount <= 1 ? 'border-red-500 bg-red-950/30' : 'border-zinc-800'
              }`}>
                <div className="text-2xl font-black text-red-500">0-1</div>
                <div className="text-xs text-zinc-500 mt-1">Move. Now.</div>
              </div>
              <div className={`text-center p-4 rounded-xl border ${
                signalCount >= 2 && signalCount <= 3 ? 'border-yellow-500 bg-yellow-950/30' : 'border-zinc-800'
              }`}>
                <div className="text-2xl font-black text-yellow-500">2-3</div>
                <div className="text-xs text-zinc-500 mt-1">Build. Fast.</div>
              </div>
              <div className={`text-center p-4 rounded-xl border ${
                signalCount >= 4 ? 'border-green-500 bg-green-950/30' : 'border-zinc-800'
              }`}>
                <div className="text-2xl font-black text-green-500">4-5</div>
                <div className="text-xs text-zinc-500 mt-1">Compound.</div>
              </div>
            </div>

            {/* Personalized result */}
            {isComplete && (
              <div className="bg-black border border-zinc-800 rounded-xl p-8">
                <h3 className={`text-2xl font-black ${result.color} mb-4`}>
                  {result.title}
                </h3>
                <p className="text-zinc-300 mb-6">{result.message}</p>
                <div className="border-t border-zinc-800 pt-6">
                  <h4 className="text-sm font-bold text-zinc-500 mb-2">RECOMMENDED ACTION:</h4>
                  <p className="text-zinc-400">{result.action}</p>
                </div>
              </div>
            )}

            {/* Footer */}
            <div className="text-center mt-8 text-zinc-600 italic">
              The mirror doesn't lie. Neither should you.
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 border-t border-zinc-900">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-black mb-6">
              WANT THE FULL DIAGNOSTIC?
            </h2>
            <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              The GPI diagnostic measures your organization across 7 dimensions.
              32 questions. Complete organizational physics assessment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/diagnostic"
                className="bg-red-600 px-8 py-4 text-lg font-black hover:bg-red-700 transition-colors"
              >
                CALCULATE YOUR GPI
              </Link>
              <Link
                href="/tools/signal-vs-structure"
                className="border-2 border-zinc-700 px-8 py-4 text-lg font-black hover:border-zinc-500 transition-colors"
              >
                SIGNAL VS STRUCTURE →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FiveQuestionsPage;
