/**
 * GPIQuadrantMatrix Component
 * Signal vs Structure 2x2 matrix for career positioning
 * Inspired by Signal_vs_Structure.html
 */

import React from 'react';

interface QuadrantData {
  title: string;
  subtitle: string;
  description: string;
  verdict: string;
  titleColor: string;
  verdictColor: string;
  bgGradient: string;
  borderColor: string;
}

const QUADRANTS: Record<string, QuadrantData> = {
  trappedTalent: {
    title: 'TRAPPED TALENT',
    subtitle: 'Signal role in a Particle industry',
    description: 'You see the inefficiency. You propose solutions. Nothing moves. Your ideas die in committees. You\'re too valuable to fire, too frustrated to stay.',
    verdict: 'MOVE: Your skills transfer. The industry won\'t.',
    titleColor: 'text-yellow-500',
    verdictColor: 'text-yellow-500',
    bgGradient: 'from-yellow-950/40 to-zinc-950',
    borderColor: 'border-yellow-900/50',
  },
  thrive: {
    title: 'THRIVE',
    subtitle: 'Signal role in a Field industry',
    description: 'You\'re in the right place. Your ability to read patterns, adapt, and generate insight is valued. The system rewards what you do naturally.',
    verdict: 'STAY: Compound your advantage.',
    titleColor: 'text-green-500',
    verdictColor: 'text-green-500',
    bgGradient: 'from-green-950/40 to-zinc-950',
    borderColor: 'border-green-900/50',
  },
  comfortableDecline: {
    title: 'COMFORTABLE DECLINE',
    subtitle: 'Structure role in a Particle industry',
    description: 'Feels stable. Isn\'t. You\'re a cog in a machine that\'s calcifying. The job exists because the system is too rigid to eliminate it. Yet.',
    verdict: 'PREPARE: The floor will shift. Build skills now.',
    titleColor: 'text-red-500',
    verdictColor: 'text-red-500',
    bgGradient: 'from-red-950/40 to-zinc-950',
    borderColor: 'border-red-900/50',
  },
  displaced: {
    title: 'DISPLACED',
    subtitle: 'Structure role in a Field industry',
    description: 'The role is already being automated or eliminated. You\'re competing with systems that don\'t sleep. The industry moved; you didn\'t.',
    verdict: 'RUN: Reskill or relocate. Now.',
    titleColor: 'text-purple-500',
    verdictColor: 'text-purple-500',
    bgGradient: 'from-purple-950/40 to-zinc-950',
    borderColor: 'border-purple-900/50',
  },
};

interface GPIQuadrantMatrixProps {
  interactive?: boolean;
  selectedQuadrant?: string | null;
  onSelect?: (quadrant: string) => void;
}

const GPIQuadrantMatrix: React.FC<GPIQuadrantMatrixProps> = ({
  interactive = false,
  selectedQuadrant = null,
  onSelect,
}) => {
  const renderQuadrant = (key: string, data: QuadrantData) => {
    const isSelected = selectedQuadrant === key;

    return (
      <div
        className={`bg-gradient-to-br ${data.bgGradient} border ${data.borderColor} rounded-xl p-5 ${
          interactive ? 'cursor-pointer hover:scale-[1.02] transition-all' : ''
        } ${isSelected ? 'ring-2 ring-white ring-opacity-50' : ''}`}
        onClick={() => interactive && onSelect?.(key)}
      >
        <h3 className={`text-lg font-black ${data.titleColor} mb-1`}>
          {data.title}
        </h3>
        <p className="text-xs text-zinc-500 mb-3">
          {data.subtitle}
        </p>
        <p className="text-sm text-zinc-400 mb-4 leading-relaxed">
          {data.description}
        </p>
        <div className={`pt-3 border-t border-zinc-800 text-sm font-semibold ${data.verdictColor}`}>
          → {data.verdict}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-black mb-2">SIGNAL VS STRUCTURE</h2>
        <p className="text-zinc-500">Your role type + your industry phase = your trajectory</p>
      </div>

      {/* Matrix container with axes */}
      <div className="relative pl-16 pb-16">
        {/* Y-axis label */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 origin-center whitespace-nowrap">
          <span className="text-xs text-zinc-600 tracking-widest uppercase">Your Role Type</span>
        </div>

        {/* Y-axis ends */}
        <div className="absolute left-6 top-0 bottom-16 flex flex-col justify-between py-8">
          <span className="text-xs text-zinc-500 -rotate-90 origin-center">SIGNAL</span>
          <span className="text-xs text-zinc-500 -rotate-90 origin-center">STRUCTURE</span>
        </div>

        {/* X-axis label */}
        <div className="absolute bottom-0 left-16 right-0 text-center">
          <span className="text-xs text-zinc-600 tracking-widest uppercase">Industry Phase</span>
        </div>

        {/* X-axis ends */}
        <div className="absolute bottom-6 left-16 right-0 flex justify-between px-8">
          <span className="text-xs text-zinc-500">PARTICLE (Rigid)</span>
          <span className="text-xs text-zinc-500">FIELD (Fluid)</span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-3">
          {renderQuadrant('trappedTalent', QUADRANTS.trappedTalent)}
          {renderQuadrant('thrive', QUADRANTS.thrive)}
          {renderQuadrant('comfortableDecline', QUADRANTS.comfortableDecline)}
          {renderQuadrant('displaced', QUADRANTS.displaced)}
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-8 pt-6 border-t border-zinc-800">
        <p className="text-sm">
          <span className="text-green-500 font-semibold">Signal</span>
          <span className="text-zinc-500"> = You process information, make decisions, create.</span>
        </p>
        <p className="text-sm mt-1">
          <span className="text-red-500 font-semibold">Structure</span>
          <span className="text-zinc-500"> = You execute processes, maintain systems, follow protocols.</span>
        </p>
      </div>
    </div>
  );
};

export default GPIQuadrantMatrix;
export { QUADRANTS };
