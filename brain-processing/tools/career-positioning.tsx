/**
 * Career Positioning Tool
 * Merged from Five Questions + Signal vs Structure
 *
 * 6 questions: 3 about your role, 3 about your industry
 * Output: 2x2 quadrant (Signal/Structure × Field/Particle)
 */

import React, { useState } from 'react';
import Link from 'next/link';
import SEOHead from '../../components/SEOHead';
import Navigation from '../../components/Navigation';
import { User, Building2, ArrowRight } from 'lucide-react';

interface Question {
  id: number;
  category: 'role' | 'industry';
  text: string;
  subtext: string;
  optionA: { label: string; shortLabel: string };
  optionB: { label: string; shortLabel: string };
}

const QUESTIONS: Question[] = [
  // ROLE QUESTIONS (Signal vs Structure)
  {
    id: 1,
    category: 'role',
    text: 'If your role disappeared tomorrow, how long before anyone outside your team would notice?',
    subtext: 'This measures your visible impact.',
    optionA: { label: 'Days to weeks. I create visible outcomes.', shortLabel: 'DAYS' },
    optionB: { label: 'Months. I maintain things that run quietly.', shortLabel: 'MONTHS' },
  },
  {
    id: 2,
    category: 'role',
    text: 'What percentage of your work could be written as a checklist and handed to someone else?',
    subtext: 'This measures your replaceability.',
    optionA: { label: 'Less than 30%. My judgment is the value.', shortLabel: '<30%' },
    optionB: { label: 'More than 50%. Process is the value.', shortLabel: '>50%' },
  },
  {
    id: 3,
    category: 'role',
    text: 'Are you paid for what you know, or what you figure out?',
    subtext: 'Knowledge decays. Figuring out compounds.',
    optionA: { label: 'What I figure out. Problems nobody has solved.', shortLabel: 'FIGURE OUT' },
    optionB: { label: 'What I know. Expertise and credentials.', shortLabel: 'KNOW' },
  },
  // INDUSTRY QUESTIONS (Field vs Particle)
  {
    id: 4,
    category: 'industry',
    text: 'When was the last time your industry\'s fundamentals changed?',
    subtext: 'This measures industry velocity.',
    optionA: { label: 'Recently. And I changed with them.', shortLabel: 'RECENTLY' },
    optionB: { label: 'Years ago. Or still doing it the old way.', shortLabel: 'YEARS AGO' },
  },
  {
    id: 5,
    category: 'industry',
    text: 'Is disruption actively happening in your industry right now?',
    subtext: 'This measures environmental pressure.',
    optionA: { label: 'Yes. New players, new models, constant change.', shortLabel: 'YES' },
    optionB: { label: 'No. Incumbents rule. Change is slow.', shortLabel: 'NO' },
  },
  {
    id: 6,
    category: 'industry',
    text: 'How fast is your industry adopting AI and automation?',
    subtext: 'This measures transformation speed.',
    optionA: { label: 'Leading. AI is already changing how we work.', shortLabel: 'LEADING' },
    optionB: { label: 'Lagging. We\'re watching, not adopting.', shortLabel: 'LAGGING' },
  },
];

const QUADRANTS = {
  signalField: {
    key: 'signalField',
    title: 'COMPOUND',
    subtitle: 'Signal role in Field industry',
    color: 'green',
    emoji: '🚀',
    description: 'You\'re positioned to thrive. Your skills create value in an environment that rewards adaptation. You\'re building on solid ground.',
    risk: 'Low. Keep compounding.',
    action: 'Double down on what makes you valuable. Build systems. Mentor others. Your advantage compounds over time.',
  },
  signalParticle: {
    key: 'signalParticle',
    title: 'TRAPPED TALENT',
    subtitle: 'Signal role in Particle industry',
    color: 'yellow',
    emoji: '🔒',
    description: 'You have valuable skills stuck in a slow-moving environment. Your potential is being wasted. The ceiling is the industry, not you.',
    risk: 'Medium. Opportunity cost is high.',
    action: 'Consider industry change. Or find the pockets of innovation within your organization. Your skills transfer. Your industry doesn\'t.',
  },
  structureField: {
    key: 'structureField',
    title: 'MOVE. NOW.',
    subtitle: 'Structure role in Field industry',
    color: 'red',
    emoji: '🚨',
    description: 'The floor is moving under you. Your role is being automated, outsourced, or eliminated. A structure role in a fast-changing industry is first to go.',
    risk: 'High. Clock is ticking.',
    action: 'Urgently develop signal skills. Learn what can\'t be automated. Move before you\'re moved. This is not a drill.',
  },
  structureParticle: {
    key: 'structureParticle',
    title: 'COMFORTABLE DECLINE',
    subtitle: 'Structure role in Particle industry',
    color: 'orange',
    emoji: '⏳',
    description: 'Stable for now. But the clock is ticking. When disruption finally hits your industry, structure roles will be first to go. You have time. Use it.',
    risk: 'Medium-High. Deceptively safe.',
    action: 'Start building transferable skills now while you have the safety to experiment. Don\'t mistake stability for security.',
  },
};

type QuadrantKey = keyof typeof QUADRANTS;

const CareerPositioningPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, 'A' | 'B'>>({});
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (answer: 'A' | 'B') => {
    const newAnswers = { ...answers, [QUESTIONS[currentQuestion].id]: answer };
    setAnswers(newAnswers);

    if (currentQuestion < QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const getResult = (): typeof QUADRANTS[QuadrantKey] => {
    let signalCount = 0;
    let fieldCount = 0;

    QUESTIONS.forEach(q => {
      const answer = answers[q.id];
      if (answer === 'A') {
        if (q.category === 'role') signalCount++;
        if (q.category === 'industry') fieldCount++;
      }
    });

    const isSignal = signalCount >= 2;
    const isField = fieldCount >= 2;

    if (isSignal && isField) return QUADRANTS.signalField;
    if (isSignal && !isField) return QUADRANTS.signalParticle;
    if (!isSignal && isField) return QUADRANTS.structureField;
    return QUADRANTS.structureParticle;
  };

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; border: string; text: string; glow: string }> = {
      green: { bg: 'bg-green-950/50', border: 'border-green-500', text: 'text-green-500', glow: 'shadow-green-500/20' },
      yellow: { bg: 'bg-yellow-950/50', border: 'border-yellow-500', text: 'text-yellow-500', glow: 'shadow-yellow-500/20' },
      red: { bg: 'bg-red-950/50', border: 'border-red-500', text: 'text-red-500', glow: 'shadow-red-500/20' },
      orange: { bg: 'bg-orange-950/50', border: 'border-orange-500', text: 'text-orange-500', glow: 'shadow-orange-500/20' },
    };
    return colors[color] || colors.green;
  };

  const reset = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResult(false);
  };

  const result = showResult ? getResult() : null;
  const currentQ = QUESTIONS[currentQuestion];
  const progress = ((currentQuestion + (showResult ? 1 : 0)) / QUESTIONS.length) * 100;

  // Results view
  if (showResult && result) {
    const colors = getColorClasses(result.color);

    return (
      <>
        <SEOHead
          title="Your Career Position | IMAGINATION G"
          description="Career positioning results based on role type and industry phase."
        />

        <div className="min-h-screen bg-black text-white">
          <Navigation currentPage="tools" />

          <section className="pt-24 pb-16 px-6">
            <div className="max-w-2xl mx-auto">

              {/* Result Header */}
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">{result.emoji}</div>
                <div className={`text-sm font-mono ${colors.text} mb-2`}>
                  {result.subtitle.toUpperCase()}
                </div>
                <h1 className={`text-4xl md:text-5xl font-black ${colors.text}`}>
                  {result.title}
                </h1>
              </div>

              {/* Main Result Card */}
              <div className={`${colors.bg} border-2 ${colors.border} rounded-xl p-8 mb-8 shadow-lg ${colors.glow}`}>
                <p className="text-lg text-zinc-300 mb-6 leading-relaxed">
                  {result.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-black/30 rounded-lg p-4">
                    <div className="text-xs font-mono text-zinc-500 mb-1">RISK LEVEL</div>
                    <div className="text-white font-bold">{result.risk}</div>
                  </div>
                  <div className="bg-black/30 rounded-lg p-4">
                    <div className="text-xs font-mono text-zinc-500 mb-1">YOUR QUADRANT</div>
                    <div className="text-white font-bold">{result.key === 'signalField' ? 'Signal × Field' : result.key === 'signalParticle' ? 'Signal × Particle' : result.key === 'structureField' ? 'Structure × Field' : 'Structure × Particle'}</div>
                  </div>
                </div>

                <div className="border-t border-zinc-700 pt-6">
                  <h3 className="text-sm font-bold text-zinc-400 mb-3">RECOMMENDED ACTION</h3>
                  <p className="text-zinc-300">{result.action}</p>
                </div>
              </div>

              {/* 2x2 Matrix Visualization */}
              <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-6 mb-8">
                <div className="text-xs font-mono text-zinc-600 mb-4 text-center">THE POSITIONING MATRIX</div>

                <div className="grid grid-cols-2 gap-2">
                  {/* Top row labels */}
                  <div className="col-span-2 grid grid-cols-3 mb-2">
                    <div></div>
                    <div className="text-center text-xs text-green-500 font-mono">FIELD</div>
                    <div className="text-center text-xs text-red-500 font-mono">PARTICLE</div>
                  </div>

                  {/* Signal row */}
                  <div className="text-right pr-3 text-xs text-green-500 font-mono flex items-center justify-end">SIGNAL</div>
                  <div className="grid grid-cols-2 gap-2 col-span-1">
                    <div className={`p-3 rounded text-center text-xs font-bold ${result.key === 'signalField' ? 'bg-green-600 text-white' : 'bg-zinc-800 text-zinc-500'}`}>
                      COMPOUND
                    </div>
                    <div className={`p-3 rounded text-center text-xs font-bold ${result.key === 'signalParticle' ? 'bg-yellow-600 text-black' : 'bg-zinc-800 text-zinc-500'}`}>
                      TRAPPED
                    </div>
                  </div>

                  {/* Structure row */}
                  <div className="text-right pr-3 text-xs text-red-500 font-mono flex items-center justify-end">STRUCTURE</div>
                  <div className="grid grid-cols-2 gap-2 col-span-1">
                    <div className={`p-3 rounded text-center text-xs font-bold ${result.key === 'structureField' ? 'bg-red-600 text-white' : 'bg-zinc-800 text-zinc-500'}`}>
                      MOVE NOW
                    </div>
                    <div className={`p-3 rounded text-center text-xs font-bold ${result.key === 'structureParticle' ? 'bg-orange-600 text-white' : 'bg-zinc-800 text-zinc-500'}`}>
                      DECLINE
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={reset}
                  className="flex-1 border-2 border-zinc-700 px-6 py-4 font-bold hover:border-zinc-500 transition-colors"
                >
                  RETAKE ASSESSMENT
                </button>
                <Link
                  href="/diagnostic"
                  className="flex-1 bg-red-600 px-6 py-4 font-bold hover:bg-red-700 transition-colors text-center flex items-center justify-center gap-2"
                >
                  GET FULL GPI SCORE <ArrowRight size={18} />
                </Link>
              </div>

              {/* Footer */}
              <div className="text-center mt-8 text-zinc-600 italic text-sm">
                Position yourself before the floor shifts.
              </div>

            </div>
          </section>
        </div>
      </>
    );
  }

  // Question view
  return (
    <>
      <SEOHead
        title="Career Positioning | IMAGINATION G"
        description="6 questions to reveal your career trajectory. Role type + industry phase = where you're headed."
      />

      <div className="min-h-screen bg-black text-white">
        <Navigation currentPage="tools" />

        <section className="pt-24 pb-16 px-6">
          <div className="max-w-2xl mx-auto">

            {/* Progress */}
            <div className="mb-8">
              <div className="flex justify-between text-xs font-mono text-zinc-600 mb-2">
                <span>QUESTION {currentQuestion + 1} OF {QUESTIONS.length}</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="h-1 bg-zinc-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-green-500 to-red-500 transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Category Badge */}
            <div className="flex justify-center mb-6">
              <div className={`inline-flex items-center gap-2 text-xs font-mono px-4 py-2 rounded-full border ${
                currentQ.category === 'role'
                  ? 'text-green-400 border-green-800 bg-green-950/30'
                  : 'text-blue-400 border-blue-800 bg-blue-950/30'
              }`}>
                {currentQ.category === 'role' ? <User size={14} /> : <Building2 size={14} />}
                {currentQ.category === 'role' ? 'ABOUT YOUR ROLE' : 'ABOUT YOUR INDUSTRY'}
              </div>
            </div>

            {/* Question */}
            <div className="text-center mb-8">
              <h1 className="text-2xl md:text-3xl font-black leading-tight mb-4">
                {currentQ.text}
              </h1>
              <p className="text-zinc-500 italic">
                {currentQ.subtext}
              </p>
            </div>

            {/* Answer Options */}
            <div className="space-y-4">
              <button
                onClick={() => handleAnswer('A')}
                className="w-full text-left border-2 border-zinc-800 hover:border-green-500 hover:bg-green-950/20 p-6 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 border-2 border-zinc-700 group-hover:border-green-500 group-hover:bg-green-500 rounded-full flex items-center justify-center font-black text-zinc-600 group-hover:text-black transition-all">
                    A
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-white group-hover:text-green-400 transition-colors">
                      {currentQ.optionA.label}
                    </div>
                  </div>
                </div>
              </button>

              <button
                onClick={() => handleAnswer('B')}
                className="w-full text-left border-2 border-zinc-800 hover:border-red-500 hover:bg-red-950/20 p-6 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 border-2 border-zinc-700 group-hover:border-red-500 group-hover:bg-red-500 rounded-full flex items-center justify-center font-black text-zinc-600 group-hover:text-white transition-all">
                    B
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-white group-hover:text-red-400 transition-colors">
                      {currentQ.optionB.label}
                    </div>
                  </div>
                </div>
              </button>
            </div>

            {/* Answer honestly note */}
            <div className="text-center mt-8 text-zinc-600 text-sm">
              Answer honestly. The mirror doesn't lie.
            </div>

          </div>
        </section>
      </div>
    </>
  );
};

export default CareerPositioningPage;
