/**
 * GPIIndustryRanking Component
 * Visual industry ranking leaderboard
 * Inspired by GPI_Industry_Ranking.html
 */

import React from 'react';
import { getIndustryRankings } from '../../lib/gpi-industry-benchmarks';

interface IndustryDisplayData {
  industry: string;
  gpi: number;
  tagline: string;
}

// Extended industry data with taglines
const INDUSTRY_TAGLINES: Record<string, string> = {
  'Technology/Software': 'Field Native',
  'Professional Services': 'Knowledge Flow',
  'Shipping': 'Vertical Integration',
  'Banking': 'Digital Transition',
  'Financial Services': 'Regulated Adaptation',
  'Retail': 'Omnichannel Scramble',
  'Logistics/Transportation': 'Network Collapse',
  'Manufacturing': 'Automation Wave',
  'Healthcare': 'Friction Fortress',
  'Healthcare IT': 'Two Worlds Colliding',
  'Education': 'Tenure Trap',
  'Pharmaceuticals': 'Regulatory Capture',
  'Freight Brokerage': 'Gap Monetization',
  'Construction/Real Estate': 'Manual Fortress',
  'Government/Public Sector': 'Particle Prison',
};

interface GPIIndustryRankingProps {
  limit?: number;
  showTaglines?: boolean;
  highlightIndustry?: string;
}

const GPIIndustryRanking: React.FC<GPIIndustryRankingProps> = ({
  limit,
  showTaglines = true,
  highlightIndustry,
}) => {
  const industries = getIndustryRankings();
  const displayIndustries = limit ? industries.slice(0, limit) : industries;

  const getScoreColor = (gpi: number): string => {
    if (gpi <= 3) return 'green';
    if (gpi <= 6) return 'yellow';
    return 'red';
  };

  const getScoreClasses = (gpi: number) => {
    const color = getScoreColor(gpi);
    return {
      circle: color === 'green' ? 'bg-green-500 text-white' :
              color === 'yellow' ? 'bg-yellow-500 text-white' :
              'bg-red-500 text-white',
      bar: color === 'green' ? 'bg-green-500' :
           color === 'yellow' ? 'bg-yellow-500' :
           'bg-red-500',
      text: color === 'green' ? 'text-green-500' :
            color === 'yellow' ? 'text-yellow-500' :
            'text-red-500',
    };
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-black mb-2">THE GROWING PAINS INDEX</h2>
        <p className="text-stone-500 text-sm">
          10 = Maximum Pain (Particle Prison) → 1 = Minimum Pain (Field Native)
        </p>
      </div>

      {/* Legend */}
      <div className="flex justify-between mb-6 px-2 text-xs">
        <div className="text-left">
          <div className="text-red-500 font-bold">RIGID</div>
          <div className="text-stone-400">Calcified. Resisting.</div>
        </div>
        <div className="text-center">
          <div className="text-yellow-500 font-bold">BREAKING</div>
          <div className="text-stone-400">In transition.</div>
        </div>
        <div className="text-right">
          <div className="text-green-500 font-bold">FLUID</div>
          <div className="text-stone-400">Adaptive. Moving.</div>
        </div>
      </div>

      {/* Industry list */}
      <div className="space-y-3">
        {displayIndustries.map((industry, index) => {
          const classes = getScoreClasses(industry.gpi);
          const tagline = INDUSTRY_TAGLINES[industry.industry] || '';
          const isHighlighted = highlightIndustry === industry.industry;
          const barWidth = (industry.gpi / 10) * 100;

          return (
            <div
              key={industry.industry}
              className={`relative bg-stone-100 rounded-xl p-4 overflow-hidden transition-all ${
                isHighlighted ? 'ring-2 ring-stone-400 ring-opacity-50' : ''
              }`}
            >
              {/* Background bar */}
              <div
                className={`absolute left-0 top-0 bottom-0 ${classes.bar} opacity-10`}
                style={{ width: `${barWidth}%` }}
              />

              {/* Content */}
              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {/* Score circle */}
                  <div
                    className={`w-12 h-12 rounded-full ${classes.circle} flex items-center justify-center font-black text-xl`}
                  >
                    {industry.gpi}
                  </div>

                  {/* Industry info */}
                  <div>
                    <h3 className="font-semibold text-stone-900">{industry.industry}</h3>
                    {showTaglines && tagline && (
                      <p className="text-xs text-stone-500">{tagline}</p>
                    )}
                  </div>
                </div>

                {/* Score bars */}
                <div className="flex gap-1">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <div
                      key={i}
                      className={`w-2 h-6 rounded-sm ${
                        i < industry.gpi ? classes.bar : 'bg-stone-200'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="text-center mt-8 text-stone-500 text-sm">
        Where do you sit? The score determines your trajectory.
      </div>
    </div>
  );
};

export default GPIIndustryRanking;
