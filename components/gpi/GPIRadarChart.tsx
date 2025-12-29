/**
 * GPIRadarChart Component
 * 7-dimension radar/spider chart visualization with hover tooltips
 */

import React, { useState, useEffect } from 'react';
import { DimensionScore, DimensionKey } from '../../lib/gpi-types';
import { GPI_DIMENSIONS } from '../../lib/gpi-calculator';

interface GPIRadarChartProps {
  dimensions: DimensionScore[];
  size?: number;
  showLabels?: boolean;
  showValues?: boolean;
  highlightWeakest?: boolean;
  animated?: boolean;
}

// Funny everyday descriptions for each dimension
const funnyDescriptions: Record<DimensionKey, { low: string; high: string }> = {
  DECISION_LATENCY: {
    low: "Decisions happen in the meeting, not after 47 follow-up emails.",
    high: "Your org needs a committee to decide if they need a committee.",
  },
  KNOWLEDGE_LOCATION: {
    low: "Anyone can find out who knows what without playing corporate detective.",
    high: "Critical info lives in Dave's head. Dave retired last week.",
  },
  ERROR_CORRECTION: {
    low: "Mistakes get fixed before anyone writes a 'lessons learned' doc.",
    high: "You're still fixing the same bug from 2019. It has a name now.",
  },
  STRUCTURAL_LOCKIN: {
    low: "You can change vendors without a 6-month 'transition roadmap.'",
    high: "You'd leave that software but it knows too much about you.",
  },
  TALENT_FLOW: {
    low: "Good people move to where they're needed, not where HR says.",
    high: "Your best engineer is stuck in a role because 'headcount.'",
  },
  CAPITAL_INTENSITY: {
    low: "You can test ideas without a 40-page business case.",
    high: "Getting $500 for an experiment requires CFO approval and a blood oath.",
  },
  KNOWLEDGE_VELOCITY: {
    low: "When one team learns something, everyone knows by Tuesday.",
    high: "Team A solved this last year. Team B is solving it again. Team C is next.",
  },
};

const GPIRadarChart: React.FC<GPIRadarChartProps> = ({
  dimensions,
  size = 300,
  showLabels = true,
  showValues = true,
  highlightWeakest = true,
  animated = true,
}) => {
  const [hoveredDimension, setHoveredDimension] = useState<DimensionKey | null>(null);
  const [animationProgress, setAnimationProgress] = useState(animated ? 0 : 1);

  // Animation on mount
  useEffect(() => {
    if (!animated) return;

    const duration = 800;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setAnimationProgress(eased);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [animated]);

  const center = size / 2;
  const maxRadius = (size / 2) * 0.75;
  const numDimensions = 7;
  const angleStep = (2 * Math.PI) / numDimensions;

  // Sort dimensions by order for consistent display
  const orderedDimensions = [...dimensions].sort((a, b) => {
    return GPI_DIMENSIONS[a.dimension].order - GPI_DIMENSIONS[b.dimension].order;
  });

  // Find weakest (highest score = most friction)
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

  // Create polygon points for the data (with animation)
  const polygonPoints = orderedDimensions
    .map((dim, i) => {
      const angle = i * angleStep;
      const radius = (dim.score / 10) * maxRadius * animationProgress;
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

  // Get hovered dimension data
  const hoveredData = hoveredDimension
    ? orderedDimensions.find(d => d.dimension === hoveredDimension)
    : null;

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
            style={{
              opacity: animated ? animationProgress : 1,
            }}
          />
        ))}

        {/* Axis lines */}
        {orderedDimensions.map((dim, i) => {
          const angle = i * angleStep;
          const endPoint = getPoint(angle, maxRadius);
          const isHovered = hoveredDimension === dim.dimension;
          return (
            <line
              key={i}
              x1={center}
              y1={center}
              x2={endPoint.x}
              y2={endPoint.y}
              stroke={isHovered ? '#71717a' : '#3f3f46'}
              strokeWidth={isHovered ? 2 : 1}
              style={{
                transition: 'stroke 0.2s, stroke-width 0.2s',
              }}
            />
          );
        })}

        {/* Data polygon fill */}
        <polygon
          points={polygonPoints}
          fill="rgba(239, 68, 68, 0.2)"
          stroke="#ef4444"
          strokeWidth="2"
          style={{
            transition: 'all 0.3s ease-out',
          }}
        />

        {/* Data points with hover areas */}
        {orderedDimensions.map((dim, i) => {
          const angle = i * angleStep;
          const radius = (dim.score / 10) * maxRadius * animationProgress;
          const point = getPoint(angle, radius);
          const isWeakest = highlightWeakest && dim.score === weakestScore;
          const isStrongest = dim.score === strongestScore;
          const isHovered = hoveredDimension === dim.dimension;

          // Larger hit area for hover
          const hitAreaRadius = maxRadius + 20;
          const hitPoint = getPoint(angle, hitAreaRadius / 2);

          return (
            <g key={dim.dimension}>
              {/* Invisible hit area for easier hovering */}
              <circle
                cx={hitPoint.x}
                cy={hitPoint.y}
                r={35}
                fill="transparent"
                style={{ cursor: 'pointer' }}
                onMouseEnter={() => setHoveredDimension(dim.dimension)}
                onMouseLeave={() => setHoveredDimension(null)}
              />

              {/* Visible point */}
              <circle
                cx={point.x}
                cy={point.y}
                r={isHovered ? 10 : isWeakest ? 8 : isStrongest ? 6 : 5}
                fill={getFillColor(dim.score)}
                stroke={isHovered || isWeakest ? '#fff' : 'none'}
                strokeWidth={isHovered ? 3 : isWeakest ? 2 : 0}
                className={isWeakest && !isHovered ? 'animate-pulse' : ''}
                style={{
                  transition: 'r 0.2s, stroke-width 0.2s',
                  filter: isHovered ? 'drop-shadow(0 0 8px rgba(255,255,255,0.5))' : 'none',
                }}
                onMouseEnter={() => setHoveredDimension(dim.dimension)}
                onMouseLeave={() => setHoveredDimension(null)}
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
          const isHovered = hoveredDimension === dim.dimension;

          return (
            <div
              key={dim.dimension}
              className="absolute text-center"
              style={{
                left: point.x,
                top: point.y,
                transform: 'translate(-50%, -50%)',
                cursor: 'pointer',
                transition: 'transform 0.2s',
              }}
              onMouseEnter={() => setHoveredDimension(dim.dimension)}
              onMouseLeave={() => setHoveredDimension(null)}
            >
              <div
                className={`text-xs font-bold whitespace-nowrap transition-colors ${
                  isHovered ? 'text-white' : isWeakest ? 'text-red-500' : 'text-zinc-400'
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
      {!hoveredDimension && (
        <div
          className="absolute flex items-center justify-center pointer-events-none"
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
      )}

      {/* Hover tooltip - shows in center */}
      {hoveredData && (
        <div
          className="absolute flex items-center justify-center pointer-events-none"
          style={{
            left: center,
            top: center,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div
            className="text-center bg-zinc-900 border border-zinc-700 rounded-lg p-4 max-w-[200px]"
            style={{
              animation: 'fadeIn 0.15s ease-out',
            }}
          >
            <div className={`text-sm font-black mb-1 ${getScoreColor(hoveredData.score)}`}>
              {hoveredData.score.toFixed(1)}/10
            </div>
            <div className="text-xs text-zinc-400 leading-relaxed">
              {hoveredData.score > 5
                ? funnyDescriptions[hoveredData.dimension].high
                : funnyDescriptions[hoveredData.dimension].low
              }
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default GPIRadarChart;
