/**
 * GPITargetBadge Component
 * Shows which GPI dimensions an intervention targets
 */

import React from 'react';
import { DimensionKey } from '../../lib/gpi-types';
import { GPI_DIMENSIONS } from '../../lib/gpi-calculator';

interface GPITargetBadgeProps {
  targetDimensions: DimensionKey[];
  recommendedWhenGPI?: number;
  expectedImprovement?: number;
  compact?: boolean;
}

const GPITargetBadge: React.FC<GPITargetBadgeProps> = ({
  targetDimensions,
  recommendedWhenGPI,
  expectedImprovement,
  compact = false,
}) => {
  if (compact) {
    return (
      <div className="flex flex-wrap gap-2">
        {targetDimensions.map((dim) => (
          <span
            key={dim}
            className="text-xs font-mono bg-red-600/20 text-red-400 px-2 py-1 rounded"
          >
            {GPI_DIMENSIONS[dim].label}
          </span>
        ))}
        {recommendedWhenGPI && (
          <span className="text-xs font-mono bg-yellow-600/20 text-yellow-400 px-2 py-1 rounded">
            GPI &gt; {recommendedWhenGPI}
          </span>
        )}
      </div>
    );
  }

  return (
    <div className="border border-stone-200 bg-white p-4 rounded-lg">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-2 h-2 bg-red-600 rounded-full"></div>
        <span className="text-xs font-bold text-stone-500 uppercase tracking-wider">
          GPI TARGETING
        </span>
      </div>

      <div className="space-y-3">
        {/* Target Dimensions */}
        <div>
          <span className="text-xs text-stone-500 block mb-2">Targets:</span>
          <div className="flex flex-wrap gap-2">
            {targetDimensions.map((dim) => (
              <span
                key={dim}
                className="text-sm font-bold bg-red-600/20 text-red-400 px-3 py-1.5 rounded border border-red-600/30"
              >
                {GPI_DIMENSIONS[dim].label}
              </span>
            ))}
          </div>
        </div>

        {/* Recommended When */}
        {recommendedWhenGPI && (
          <div className="flex items-center gap-2">
            <span className="text-xs text-stone-500">Recommended when:</span>
            <span className="text-sm font-mono bg-yellow-600/20 text-yellow-400 px-2 py-1 rounded">
              GPI &gt; {recommendedWhenGPI}
            </span>
          </div>
        )}

        {/* Expected Improvement */}
        {expectedImprovement && (
          <div className="flex items-center gap-2">
            <span className="text-xs text-stone-500">Expected improvement:</span>
            <span className="text-sm font-mono bg-green-600/20 text-green-400 px-2 py-1 rounded">
              -{expectedImprovement} GPI points
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default GPITargetBadge;
