/**
 * GPIScoreCard Component
 * Shareable, embeddable GPI score display card
 */

import React from 'react';
import { GPIResult, GPIState, DimensionKey } from '../../lib/gpi-types';
import { GPI_DIMENSIONS, getStateLabel, getStateColor } from '../../lib/gpi-calculator';
import GPISpectrum from './GPISpectrum';

interface GPIScoreCardProps {
  result: GPIResult;
  industry?: string;
  compactMode?: boolean;
  showDimensions?: boolean;
  showMetrics?: boolean;
}

const GPIScoreCard: React.FC<GPIScoreCardProps> = ({
  result,
  industry,
  compactMode = false,
  showDimensions = true,
  showMetrics = true,
}) => {
  const stateLabel = getStateLabel(result.state);
  const stateColorName = getStateColor(result.state);

  const stateStyles: Record<GPIState, { bg: string; text: string; border: string }> = {
    field: { bg: 'bg-green-500/10', text: 'text-green-500', border: 'border-green-500' },
    transitioning: { bg: 'bg-yellow-500/10', text: 'text-yellow-500', border: 'border-yellow-500' },
    particle: { bg: 'bg-red-500/10', text: 'text-red-500', border: 'border-red-500' },
  };

  const style = stateStyles[result.state];

  // Sort dimensions by score (highest = weakest)
  const sortedDimensions = [...result.dimensions].sort((a, b) => b.score - a.score);
  const weakestDim = GPI_DIMENSIONS[result.weakestDimension];
  const strongestDim = GPI_DIMENSIONS[result.strongestDimension];

  if (compactMode) {
    return (
      <div className={`border ${style.border} ${style.bg} p-4 rounded-lg`}>
        <div className="flex items-center justify-between mb-3">
          <div>
            <span className="text-xs text-stone-500 uppercase">GPI Score</span>
            <div className={`text-3xl font-black ${style.text}`}>
              {result.overall.toFixed(1)}
            </div>
          </div>
          <div className={`px-3 py-1 ${style.bg} border ${style.border} rounded-full`}>
            <span className={`text-sm font-bold ${style.text}`}>{stateLabel}</span>
          </div>
        </div>
        <GPISpectrum score={result.overall} size="sm" showLabels={false} />
      </div>
    );
  }

  return (
    <div className="border border-stone-200 bg-white rounded-lg overflow-hidden">
      {/* Header */}
      <div className={`${style.bg} border-b ${style.border} px-6 py-4`}>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs text-stone-500 uppercase tracking-wider">
              Growing Pains Index
            </span>
            <div className="flex items-baseline gap-3 mt-1">
              <span className={`text-5xl font-black ${style.text}`}>
                {result.overall.toFixed(1)}
              </span>
              <span className="text-stone-500 text-lg">/10</span>
            </div>
          </div>
          <div className="text-right">
            <div className={`px-4 py-2 ${style.bg} border ${style.border} rounded-lg`}>
              <span className={`text-lg font-bold ${style.text}`}>{stateLabel}</span>
            </div>
            {industry && (
              <span className="text-xs text-stone-500 mt-2 block">{industry}</span>
            )}
          </div>
        </div>
      </div>

      {/* Spectrum */}
      <div className="px-6 py-4 border-b border-stone-200">
        <GPISpectrum score={result.overall} size="md" />
      </div>

      {/* Metrics */}
      {showMetrics && (
        <div className="px-6 py-4 border-b border-stone-200 grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-xs text-stone-500 uppercase mb-1">Metabolic Rate</div>
            <div className="text-xl font-bold text-stone-900">{result.metabolicRate.toFixed(1)}</div>
            <div className="text-xs text-stone-400">
              {result.metabolicRate >= 7 ? 'High' : result.metabolicRate >= 4 ? 'Medium' : 'Low'}
            </div>
          </div>
          <div className="text-center">
            <div className="text-xs text-stone-500 uppercase mb-1">Plateau Risk</div>
            <div className={`text-xl font-bold ${
              result.plateauRisk >= 70 ? 'text-red-500' :
              result.plateauRisk >= 40 ? 'text-yellow-500' : 'text-green-500'
            }`}>
              {result.plateauRisk}%
            </div>
            {result.monthsToStagnation && (
              <div className="text-xs text-stone-400">
                ~{result.monthsToStagnation} months
              </div>
            )}
          </div>
          <div className="text-center">
            <div className="text-xs text-stone-500 uppercase mb-1">Weakest</div>
            <div className="text-sm font-bold text-red-500">{weakestDim.label}</div>
            <div className="text-xs text-stone-400">
              {result.dimensions.find(d => d.dimension === result.weakestDimension)?.score.toFixed(1)}
            </div>
          </div>
        </div>
      )}

      {/* Dimensions */}
      {showDimensions && (
        <div className="px-6 py-4">
          <div className="text-xs text-stone-500 uppercase mb-3">Dimension Breakdown</div>
          <div className="space-y-3">
            {sortedDimensions.map((dim) => {
              const dimInfo = GPI_DIMENSIONS[dim.dimension];
              const isWeakest = dim.dimension === result.weakestDimension;
              const isStrongest = dim.dimension === result.strongestDimension;
              const percentage = (dim.score / 10) * 100;

              return (
                <div key={dim.dimension} className="relative">
                  <div className="flex justify-between items-center mb-1">
                    <span className={`text-sm ${isWeakest ? 'text-red-500 font-bold' : isStrongest ? 'text-green-500' : 'text-stone-500'}`}>
                      {dimInfo.label}
                      {isWeakest && <span className="ml-2 text-xs">(Weakest)</span>}
                      {isStrongest && <span className="ml-2 text-xs">(Strongest)</span>}
                    </span>
                    <span className={`text-sm font-mono ${
                      dim.score <= 3 ? 'text-green-500' :
                      dim.score <= 6 ? 'text-yellow-500' : 'text-red-500'
                    }`}>
                      {dim.score.toFixed(1)}
                    </span>
                  </div>
                  <div className="h-2 bg-stone-200 rounded overflow-hidden">
                    <div
                      className={`h-full transition-all duration-500 ${
                        dim.score <= 3 ? 'bg-green-500' :
                        dim.score <= 6 ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="px-6 py-3 bg-stone-100 text-center">
        <span className="text-xs text-stone-400">
          IMAGINATION G • GPI Diagnostic
        </span>
      </div>
    </div>
  );
};

export default GPIScoreCard;
