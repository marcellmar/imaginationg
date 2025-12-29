/**
 * GPIStateVisual Component
 * Visual representations for the three organizational states
 * Inspired by Particle_Chaos_Field.html
 */

import React from 'react';
import { GPIState } from '../../lib/gpi-types';

interface GPIStateVisualProps {
  state: GPIState;
  size?: 'sm' | 'md' | 'lg';
  animate?: boolean;
}

const GPIStateVisual: React.FC<GPIStateVisualProps> = ({
  state,
  size = 'md',
  animate = true,
}) => {
  const sizeConfig = {
    sm: { container: 60, dotSize: 10, ringGap: 8 },
    md: { container: 90, dotSize: 14, ringGap: 12 },
    lg: { container: 120, dotSize: 18, ringGap: 16 },
  };

  const config = sizeConfig[size];

  // Particle State - Rigid grid
  if (state === 'particle') {
    return (
      <div
        className="grid grid-cols-4 gap-1.5"
        style={{ width: config.container, height: config.container }}
      >
        {Array.from({ length: 16 }).map((_, i) => (
          <div
            key={i}
            className={`bg-red-500 rounded-sm ${animate ? 'animate-pulse' : ''}`}
            style={{
              width: config.dotSize,
              height: config.dotSize,
              animationDelay: `${i * 50}ms`,
            }}
          />
        ))}
      </div>
    );
  }

  // Transitioning State - Scattered chaos
  if (state === 'transitioning') {
    const positions = [
      { top: '10%', left: '20%', rotate: 15 },
      { top: '5%', left: '60%', rotate: -30 },
      { top: '25%', left: '45%', rotate: 45 },
      { top: '40%', left: '10%', rotate: -15 },
      { top: '35%', left: '75%', rotate: 60 },
      { top: '55%', left: '35%', rotate: -45 },
      { top: '60%', left: '65%', rotate: 30 },
      { top: '75%', left: '15%', rotate: -60 },
      { top: '80%', left: '50%', rotate: 20 },
      { top: '70%', left: '85%', rotate: -25 },
    ];

    return (
      <div
        className="relative"
        style={{ width: config.container, height: config.container }}
      >
        {positions.map((pos, i) => (
          <div
            key={i}
            className={`absolute bg-yellow-500 rounded-sm ${
              animate ? 'animate-bounce' : ''
            }`}
            style={{
              top: pos.top,
              left: pos.left,
              width: config.dotSize * 0.85,
              height: config.dotSize * 0.85,
              transform: `rotate(${pos.rotate}deg)`,
              animationDelay: `${i * 100}ms`,
              animationDuration: '2s',
            }}
          />
        ))}
      </div>
    );
  }

  // Field State - Concentric rings
  return (
    <div
      className="relative"
      style={{ width: config.container, height: config.container }}
    >
      {/* Outer ring */}
      <div
        className={`absolute inset-0 border-2 border-green-500 rounded-full opacity-30 ${
          animate ? 'animate-ping' : ''
        }`}
        style={{ animationDuration: '3s' }}
      />
      {/* Middle ring */}
      <div
        className="absolute border-2 border-green-500 rounded-full opacity-50"
        style={{ inset: config.ringGap }}
      />
      {/* Inner ring */}
      <div
        className="absolute border-2 border-green-500 rounded-full opacity-70"
        style={{ inset: config.ringGap * 2 }}
      />
      {/* Center dot */}
      <div
        className={`absolute bg-green-500 rounded-full ${
          animate ? 'animate-pulse' : ''
        }`}
        style={{ inset: config.ringGap * 3 }}
      />
    </div>
  );
};

export default GPIStateVisual;
