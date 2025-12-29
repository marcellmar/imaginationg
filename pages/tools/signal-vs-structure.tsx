/**
 * Signal vs Structure Tool Page
 * Interactive career positioning diagnostic - question by question
 */

import React, { useState } from 'react';
import Link from 'next/link';
import SEOHead from '../../components/SEOHead';
import Navigation from '../../components/Navigation';

interface Question {
  id: number;
  text: string;
  type: 'role' | 'industry';
  optionA: { label: string; value: 'signal' | 'field' };
  optionB: { label: string; value: 'structure' | 'particle' };
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    text: 'Do you mostly execute defined processes, or define new ones?',
    type: 'role',
    optionA: { label: 'DEFINE NEW PROCESSES', value: 'signal' },
    optionB: { label: 'EXECUTE DEFINED PROCESSES', value: 'structure' },
  },
  {
    id: 2,
    text: 'Is your value in following protocols or in judgment calls?',
    type: 'role',
    optionA: { label: 'JUDGMENT CALLS', value: 'signal' },
    optionB: { label: 'FOLLOWING PROTOCOLS', value: 'structure' },
  },
  {
    id: 3,
    text: 'Could your job be described in a checklist?',
    type: 'role',
    optionA: { label: 'NO, TOO CONTEXTUAL', value: 'signal' },
    optionB: { label: 'YES, LARGELY', value: 'structure' },
  },
  {
    id: 4,
    text: 'How fast do decisions happen in your industry?',
    type: 'industry',
    optionA: { label: 'DAYS TO WEEKS', value: 'field' },
    optionB: { label: 'MONTHS TO YEARS', value: 'particle' },
  },
  {
    id: 5,
    text: 'Is disruption actively happening in your industry?',
    type: 'industry',
    optionA: { label: 'YES, CONSTANTLY', value: 'field' },
    optionB: { label: 'NO, RESISTANT TO CHANGE', value: 'particle' },
  },
  {
    id: 6,
    text: 'Is your industry adopting AI and automation quickly?',
    type: 'industry',
    optionA: { label: 'LEADING ADOPTION', value: 'field' },
    optionB: { label: 'LAGGING BEHIND', value: 'particle' },
  },
];

const QUADRANTS = {
  signalField: {
    title: 'THRIVE',
    subtitle: 'Signal role in Field industry',
    color: 'green',
    description: 'You\'re positioned well. Your skills compound in an environment that rewards them. Double down.',
    action: 'Focus on deepening your signal capabilities. Build systems. Mentor others.',
  },
  signalParticle: {
    title: 'TRAPPED TALENT',
    subtitle: 'Signal role in Particle industry',
    color: 'yellow',
    description: 'You have valuable skills stuck in a slow-moving environment. Your potential is being wasted.',
    action: 'Consider industry change or find the pockets of innovation within your organization.',
  },
  structureField: {
    title: 'DISPLACED',
    subtitle: 'Structure role in Field industry',
    color: 'red',
    description: 'The floor is moving under you. Your role is being automated or outsourced. Act now.',
    action: 'Urgently develop signal skills. Learn what can\'t be automated. Move before you\'re moved.',
  },
  structureParticle: {
    title: 'COMFORTABLE DECLINE',
    subtitle: 'Structure role in Particle industry',
    color: 'orange',
    description: 'Stable for now, but the clock is ticking. When disruption hits your industry, you\'ll be first to go.',
    action: 'Start building transferable skills now while you have the safety to do so.',
  },
};

const SignalVsStructurePage = () => {
  const [answers, setAnswers] = useState<Record<number, 'A' | 'B'>>({});
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (questionId: number, answer: 'A' | 'B') => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const isComplete = Object.keys(answers).length === 6;

  const getResult = () => {
    let signalCount = 0;
    let fieldCount = 0;

    QUESTIONS.forEach(q => {
      const answer = answers[q.id];
      if (answer === 'A') {
        if (q.type === 'role') signalCount++;
        if (q.type === 'industry') fieldCount++;
      }
    });

    const isSignal = signalCount >= 2;
    const isField = fieldCount >= 2;

    if (isSignal && isField) return QUADRANTS.signalField;
    if (isSignal && !isField) return QUADRANTS.signalParticle;
    if (!isSignal && isField) return QUADRANTS.structureField;
    return QUADRANTS.structureParticle;
  };

  const result = isComplete ? getResult() : null;

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; border: string; text: string }> = {
      green: { bg: 'bg-green-950', border: 'border-green-500', text: 'text-green-500' },
      yellow: { bg: 'bg-yellow-950', border: 'border-yellow-500', text: 'text-yellow-500' },
      red: { bg: 'bg-red-950', border: 'border-red-500', text: 'text-red-500' },
      orange: { bg: 'bg-orange-950', border: 'border-orange-500', text: 'text-orange-500' },
    };
    return colors[color] || colors.green;
  };

  return (
    <>
      <SEOHead
        title="Signal vs Structure: Career Positioning | IMAGINATION G"
        description="Discover your career trajectory. Your role type combined with your industry phase determines where you're headed."
        ogImage="/images/og-signal-structure.svg"
      />

      <div className="min-h-screen bg-black text-white">
        <Navigation currentPage="tools" />

        {/* Hero */}
        <section className="pt-24 pb-12 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block mb-8 text-yellow-400 text-xs font-mono bg-zinc-950 border border-zinc-800 px-4 py-2 rounded-full">
                <span className="inline-block w-2 h-2 bg-yellow-400 rounded-full mr-2 animate-pulse"></span>
                CAREER POSITIONING
              </div>

              <h1 className="text-4xl md:text-5xl font-black mb-6 leading-[1.1]">
                SIGNAL VS STRUCTURE<span className="text-red-600">.</span>
              </h1>

              <p className="text-xl text-zinc-400 mb-4">
                Your role type + your industry phase = your trajectory.
              </p>
            </div>
          </div>
        </section>

        {/* Questions */}
        <section className="py-8 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {QUESTIONS.map((q) => {
                const answer = answers[q.id];
                const isRole = q.type === 'role';

                return (
                  <div
                    key={q.id}
                    className={`bg-zinc-950 border border-zinc-800 ${isRole ? 'border-l-green-500' : 'border-l-blue-500'} border-l-4 rounded-xl p-6`}
                  >
                    <div className={`text-xs font-semibold ${isRole ? 'text-green-500' : 'text-blue-500'} tracking-widest uppercase mb-3`}>
                      {isRole ? 'Your Role' : 'Your Industry'} • Question {isRole ? q.id : q.id - 3}
                    </div>
                    <p className="text-lg font-semibold text-white mb-6 leading-relaxed">
                      {q.text}
                    </p>

                    {/* Answer buttons */}
                    <div className="flex gap-3">
                      <button
                        onClick={() => handleAnswer(q.id, 'A')}
                        className={`flex-1 py-3 px-4 rounded-lg text-sm font-bold transition-all ${
                          answer === 'A'
                            ? 'bg-green-600 text-white'
                            : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
                        }`}
                      >
                        {q.optionA.label}
                      </button>
                      <button
                        onClick={() => handleAnswer(q.id, 'B')}
                        className={`flex-1 py-3 px-4 rounded-lg text-sm font-bold transition-all ${
                          answer === 'B'
                            ? 'bg-red-600 text-white'
                            : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
                        }`}
                      >
                        {q.optionB.label}
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
              <h2 className="text-2xl font-black mb-2">YOUR QUADRANT</h2>
              <p className="text-zinc-500">
                {isComplete ? 'Based on your answers' : 'Answer all 6 questions to reveal'}
              </p>
            </div>

            {/* Result Card */}
            {result ? (
              <div className={`${getColorClasses(result.color).bg} border-2 ${getColorClasses(result.color).border} rounded-xl p-8`}>
                <div className={`text-sm font-mono ${getColorClasses(result.color).text} mb-2`}>
                  {result.subtitle}
                </div>
                <h3 className={`text-4xl font-black ${getColorClasses(result.color).text} mb-4`}>
                  {result.title}
                </h3>
                <p className="text-zinc-300 mb-6">{result.description}</p>
                <div className="border-t border-zinc-700 pt-6">
                  <h4 className="text-sm font-bold text-zinc-500 mb-2">RECOMMENDED ACTION:</h4>
                  <p className="text-zinc-400">{result.action}</p>
                </div>
              </div>
            ) : (
              <div className="border-2 border-zinc-800 border-dashed rounded-xl p-12 text-center">
                <div className="text-6xl font-black text-zinc-800 mb-4">?</div>
                <p className="text-zinc-600">Complete all questions above</p>
              </div>
            )}

            {/* Footer */}
            {result && (
              <div className="text-center mt-8">
                <p className="text-zinc-600 italic mb-6">
                  Position yourself before the floor shifts.
                </p>
                <Link
                  href="/diagnostic"
                  className="inline-block bg-red-600 px-8 py-4 text-lg font-black hover:bg-red-700 transition-colors"
                >
                  GET YOUR FULL GPI SCORE →
                </Link>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default SignalVsStructurePage;
