/**
 * GPIRadarChart Component
 * 7-dimension radar/spider chart visualization
 */

import React from 'react';
import { DimensionScore, DimensionKey } from '../../lib/gpi-types';
import { GPI_DIMENSIONS } from '../../lib/gpi-calculator';

interface GPIRadarChartProps {
  dimensions: DimensionScore[];
  size?: number;
  showLabels?: boolean;
  showValues?: boolean;
  highlightWeakest?: boolean;
}

const GPIRadarChart: React.FC<GPIRadarChartProps> = ({
  dimensions,
  size = 300,
  showLabels = true,
  showValues = true,
  highlightWeakest = true,
}) => {
  const center = size / 2;
  const maxRadius = (size / 2) * 0.75;
  const numDimensions = 7;
  const angleStep = (2 * Math.PI) / numDimensions;

  // Sort dimensions by order for consistent display
  const orderedDimensions = [...dimensions].sort((a, b) => {
    return GPI_DIMENSIONS[a.dimension].order - GPI_DIMENSIONS[b.dimension].order;
  });

  // Find weakest (highest score = most particle-like)
  const weakestScore = Math.max(...dimensions.map((d) => d.score));
  const strongestScore = Math.min(...dimensions.map((d) => d.score));

  // Get coordinates for a point at given angle and radius
  const getPoint = (angle: number, radius: number) => ({
    x: center + radius * Math.cos(angle - Math.PI / 2),
    y: center + radius * Math.sin(angle - Math.PI / 2),
  });

  // Create grid circles
  const gridCircles = [2, 4, 6, 8, 10].map((level) => ({
    level,
    radius: (level / 10) * maxRadius,
  }));

  // Create polygon points for the data
  const polygonPoints = orderedDimensions
    .map((dim, i) => {
      const angle = i * angleStep;
      const radius = (dim.score / 10) * maxRadius;
      const point = getPoint(angle, radius);
      return `${point.x},${point.y}`;
    })
    .join(' ');

  // Get color based on score
  const getScoreColor = (score: number) => {
    if (score <= 3) return 'text-green-500';
    if (score <= 6) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getFillColor = (score: number) => {
    if (score <= 3) return '#22c55e';
    if (score <= 6) return '#eab308';
    return '#ef4444';
  };

  // Short labels for dimensions
  const shortLabels: Record<DimensionKey, string> = {
    DECISION_LATENCY: 'Decision',
    KNOWLEDGE_LOCATION: 'Knowledge',
    ERROR_CORRECTION: 'Error Fix',
    STRUCTURAL_LOCKIN: 'Lock-In',
    TALENT_FLOW: 'Talent',
    CAPITAL_INTENSITY: 'Capital',
    KNOWLEDGE_VELOCITY: 'Velocity',
  };

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="overflow-visible">
        {/* Background circles (grid) */}
        {gridCircles.map(({ level, radius }) => (
          <circle
            key={level}
            cx={center}
            cy={center}
            r={radius}
            fill="none"
            stroke="#27272a"
            strokeWidth="1"
          />
        ))}

        {/* Axis lines */}
        {orderedDimensions.map((_, i) => {
          const angle = i * angleStep;
          const endPoint = getPoint(angle, maxRadius);
          return (
            <line
              key={i}
              x1={center}
              y1={center}
              x2={endPoint.x}
              y2={endPoint.y}
              stroke="#3f3f46"
              strokeWidth="1"
            />
          );
        })}

        {/* Data polygon fill */}
        <polygon
          points={polygonPoints}
          fill="rgba(239, 68, 68, 0.2)"
          stroke="#ef4444"
          strokeWidth="2"
        />

        {/* Data points */}
        {orderedDimensions.map((dim, i) => {
          const angle = i * angleStep;
          const radius = (dim.score / 10) * maxRadius;
          const point = getPoint(angle, radius);
          const isWeakest = highlightWeakest && dim.score === weakestScore;
          const isStrongest = dim.score === strongestScore;

          return (
            <g key={dim.dimension}>
              {/* Point */}
              <circle
                cx={point.x}
                cy={point.y}
                r={isWeakest ? 8 : isStrongest ? 6 : 5}
                fill={getFillColor(dim.score)}
                stroke={isWeakest ? '#fff' : 'none'}
                strokeWidth={isWeakest ? 2 : 0}
                className={isWeakest ? 'animate-pulse' : ''}
              />
            </g>
          );
        })}
      </svg>

      {/* Labels positioned around the chart */}
      {showLabels &&
        orderedDimensions.map((dim, i) => {
          const angle = i * angleStep;
          const labelRadius = maxRadius + 35;
          const point = getPoint(angle, labelRadius);
          const isWeakest = highlightWeakest && dim.score === weakestScore;

          return (
            <div
              key={dim.dimension}
              className="absolute text-center"
              style={{
                left: point.x,
                top: point.y,
                transform: 'translate(-50%, -50%)',
              }}
            >
              <div
                className={`text-xs font-bold whitespace-nowrap ${
                  isWeakest ? 'text-red-500' : 'text-zinc-400'
                }`}
              >
                {shortLabels[dim.dimension]}
              </div>
              {showValues && (
                <div
                  className={`text-sm font-black ${getScoreColor(dim.score)}`}
                >
                  {dim.score.toFixed(1)}
                </div>
              )}
            </div>
          );
        })}

      {/* Center score */}
      <div
        className="absolute flex items-center justify-center"
        style={{
          left: center,
          top: center,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="text-center bg-black/80 rounded-full p-3">
          <div className="text-xs text-zinc-500 uppercase">Avg</div>
          <div className="text-lg font-black text-white">
            {(
              orderedDimensions.reduce((sum, d) => sum + d.score, 0) /
              orderedDimensions.length
            ).toFixed(1)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GPIRadarChart;
