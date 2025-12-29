/**
 * GPISpectrum Component
 * Reusable spectrum bar showing GPI score on 1-10 scale
 */

import React from 'react';
import { GPIState } from '../../lib/gpi-types';
import { getGPIState, getStateLabel } from '../../lib/gpi-calculator';

interface GPISpectrumProps {
  score: number;
  showLabels?: boolean;
  showMarker?: boolean;
  size?: 'sm' | 'md' | 'lg';
  animate?: boolean;
}

const GPISpectrum: React.FC<GPISpectrumProps> = ({
  score,
  showLabels = true,
  showMarker = true,
  size = 'md',
  animate = true,
}) => {
  const state = getGPIState(score);
  const stateLabel = getStateLabel(state);
  const percentage = ((score - 1) / 9) * 100;

  const sizeClasses = {
    sm: {
      bar: 'h-2',
      text: 'text-xs',
      marker: 'w-3 h-3',
      markerOffset: '-mt-0.5',
    },
    md: {
      bar: 'h-3',
      text: 'text-sm',
      marker: 'w-4 h-4',
      markerOffset: '-mt-0.5',
    },
    lg: {
      bar: 'h-4',
      text: 'text-base',
      marker: 'w-5 h-5',
      markerOffset: '-mt-0.5',
    },
  };

  const classes = sizeClasses[size];

  const stateColors: Record<GPIState, string> = {
    field: 'bg-green-500',
    transitioning: 'bg-yellow-500',
    particle: 'bg-red-500',
  };

  const stateTextColors: Record<GPIState, string> = {
    field: 'text-green-500',
    transitioning: 'text-yellow-500',
    particle: 'text-red-500',
  };

  return (
    <div className="w-full">
      {/* Scale numbers */}
      {showLabels && (
        <div className={`flex items-center justify-between mb-1 ${classes.text}`}>
          <span className="text-green-500 font-bold">1</span>
          <span className="text-yellow-500 font-bold">5</span>
          <span className="text-red-500 font-bold">10</span>
        </div>
      )}

      {/* Spectrum bar */}
      <div className="relative">
        <div
          className={`w-full ${classes.bar} bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 rounded`}
        />

        {/* Score marker */}
        {showMarker && (
          <div
            className={`absolute ${classes.markerOffset} transition-all duration-500 ease-out`}
            style={{ left: `${percentage}%`, transform: 'translateX(-50%)' }}
          >
            <div
              className={`${classes.marker} bg-white rounded-full border-2 border-zinc-900 shadow-lg ${
                animate ? 'animate-pulse' : ''
              }`}
            />
            {/* Score label */}
            <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-1 ${stateTextColors[state]} font-black ${classes.text}`}>
              {score.toFixed(1)}
            </div>
          </div>
        )}
      </div>

      {/* State labels */}
      {showLabels && (
        <div className={`flex justify-between mt-1 ${classes.text} text-zinc-500`}>
          <span>Field</span>
          <span>Transition</span>
          <span>Particle</span>
        </div>
      )}
    </div>
  );
};

export default GPISpectrum;
