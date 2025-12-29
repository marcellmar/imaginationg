/**
 * GPIDimensionCard Component
 * Card component for displaying GPI dimension details
 */

import React from 'react';
import Link from 'next/link';
import { DimensionKey, GPIDimension } from '../../lib/gpi-types';
import { GPI_DIMENSIONS } from '../../lib/gpi-calculator';

// Extended dimension data with examples and deeper content
export const DIMENSION_EXTENDED_DATA: Record<DimensionKey, {
  slug: string;
  examples: {
    low: { company: string; gpi: number; description: string };
    high: { company: string; gpi: number; description: string };
  };
  questions: string[];
  interventions: string[];
}> = {
  DECISION_LATENCY: {
    slug: 'decision-latency',
    examples: {
      low: { company: 'Stripe', gpi: 1.5, description: 'Same-day API decisions, continuous deployment' },
      high: { company: 'Exxon Mobil', gpi: 6.8, description: 'Multi-year capital allocation cycles' },
    },
    questions: [
      'Can decisions be made within 24 hours?',
      'Are approvals required from multiple executives?',
      'How long does budget reallocation take?',
    ],
    interventions: ['THE NAMING', 'MARKET SMACKDOWN'],
  },
  KNOWLEDGE_LOCATION: {
    slug: 'knowledge-location',
    examples: {
      low: { company: 'GitLab', gpi: 1.8, description: 'Everything documented publicly, handbook-first culture' },
      high: { company: 'Epic Systems', gpi: 7.3, description: 'Proprietary systems, institutional knowledge hoarding' },
    },
    questions: [
      'Is operational knowledge documented and accessible?',
      'Can new hires find answers without asking veterans?',
      'Would the company function if key people left?',
    ],
    interventions: ['THE MAP', 'THE NAMING'],
  },
  ERROR_CORRECTION: {
    slug: 'error-correction',
    examples: {
      low: { company: 'Netflix', gpi: 2.0, description: 'Rapid iteration, A/B testing, quick pivots' },
      high: { company: 'Government', gpi: 9.0, description: 'Generational policy correction cycles' },
    },
    questions: [
      'How fast can mistakes be identified and fixed?',
      'Are there blame-free post-mortems?',
      'Can bad decisions be reversed easily?',
    ],
    interventions: ['THE OVERRIDE', 'FIRST BLOOD BUILD'],
  },
  STRUCTURAL_LOCKIN: {
    slug: 'structural-lock-in',
    examples: {
      low: { company: 'Shopify', gpi: 2.2, description: 'Modular architecture, easy pivots' },
      high: { company: 'Healthcare', gpi: 8.5, description: 'Legacy EMR systems, regulatory capture' },
    },
    questions: [
      'How much would it cost to change core systems?',
      'Are there vendor lock-ins or proprietary dependencies?',
      'Can processes be redesigned without massive investment?',
    ],
    interventions: ['THE OVERRIDE', 'THE BUILD'],
  },
  TALENT_FLOW: {
    slug: 'talent-flow',
    examples: {
      low: { company: 'Spotify', gpi: 2.5, description: 'Squad model, internal mobility, transparent promotions' },
      high: { company: 'Education', gpi: 7.5, description: 'Tenure systems, union constraints, rigid hierarchies' },
    },
    questions: [
      'Can top performers move between teams easily?',
      'Is hiring and firing responsive to needs?',
      'Do talented people want to stay?',
    ],
    interventions: ['THE MAP', 'THE NAMING'],
  },
  CAPITAL_INTENSITY: {
    slug: 'capital-intensity',
    examples: {
      low: { company: 'Notion', gpi: 1.5, description: 'Purely digital, minimal physical infrastructure' },
      high: { company: 'Phillips 66', gpi: 6.4, description: 'Refineries, pipelines, 40+ year asset lock-in' },
    },
    questions: [
      'How much physical infrastructure is required?',
      'Can the business scale without proportional capital?',
      'What\'s the ratio of digital to physical assets?',
    ],
    interventions: ['THE BUILD', 'MARKET SMACKDOWN'],
  },
  KNOWLEDGE_VELOCITY: {
    slug: 'knowledge-velocity',
    examples: {
      low: { company: 'OpenAI', gpi: 1.2, description: 'Real-time model updates, rapid research cycles' },
      high: { company: 'Construction', gpi: 8.0, description: 'Generational knowledge transfer, apprenticeship models' },
    },
    questions: [
      'How fast does operational knowledge update?',
      'Are best practices shared and adopted quickly?',
      'Is learning embedded in daily operations?',
    ],
    interventions: ['THE BUILD', 'THE MAP'],
  },
};

interface GPIDimensionCardProps {
  dimensionKey: DimensionKey;
  clickable?: boolean;
  showExamples?: boolean;
  compact?: boolean;
}

const GPIDimensionCard: React.FC<GPIDimensionCardProps> = ({
  dimensionKey,
  clickable = true,
  showExamples = true,
  compact = false,
}) => {
  const dimension = GPI_DIMENSIONS[dimensionKey];
  const extended = DIMENSION_EXTENDED_DATA[dimensionKey];

  const cardContent = (
    <div
      className={`border border-zinc-800 bg-black rounded-xl ${compact ? 'p-4' : 'p-6'} ${
        clickable ? 'hover:border-red-600 cursor-pointer transition-all hover:scale-[1.01]' : ''
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-red-600 text-black flex items-center justify-center font-black rounded">
            {dimension.order}
          </div>
          <h3 className={`font-black ${compact ? 'text-sm' : 'text-lg'}`}>
            {dimension.label.toUpperCase()}
          </h3>
        </div>
        <span className="text-xs font-mono text-zinc-500 bg-zinc-900 px-2 py-1 rounded">
          {Math.round(dimension.weight * 100)}% weight
        </span>
      </div>

      {/* Description */}
      <p className={`text-zinc-400 mb-4 ${compact ? 'text-sm' : ''}`}>
        {dimension.description}
      </p>

      {/* Low/High descriptions */}
      <div className={`space-y-2 ${compact ? 'text-xs' : 'text-sm'}`}>
        <div className="flex gap-2">
          <span className="text-green-500 font-mono w-12">1-3:</span>
          <span className="text-zinc-500">{dimension.lowDescription}</span>
        </div>
        <div className="flex gap-2">
          <span className="text-red-500 font-mono w-12">7-10:</span>
          <span className="text-zinc-500">{dimension.highDescription}</span>
        </div>
      </div>

      {/* Examples */}
      {showExamples && !compact && (
        <div className="mt-4 pt-4 border-t border-zinc-800">
          <div className="grid grid-cols-2 gap-4 text-xs">
            <div className="bg-green-950/30 border border-green-900/50 rounded p-3">
              <div className="text-green-500 font-bold">{extended.examples.low.company}</div>
              <div className="text-green-400/60">GPI {extended.examples.low.gpi}</div>
            </div>
            <div className="bg-red-950/30 border border-red-900/50 rounded p-3">
              <div className="text-red-500 font-bold">{extended.examples.high.company}</div>
              <div className="text-red-400/60">GPI {extended.examples.high.gpi}</div>
            </div>
          </div>
        </div>
      )}

      {/* Click indicator */}
      {clickable && (
        <div className="text-center mt-4 text-red-600 text-xs font-bold opacity-60">
          LEARN MORE →
        </div>
      )}
    </div>
  );

  if (clickable) {
    return <Link href={`/gpi-framework/${extended.slug}`}>{cardContent}</Link>;
  }

  return cardContent;
};

export default GPIDimensionCard;
