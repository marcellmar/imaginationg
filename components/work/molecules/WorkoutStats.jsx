'use client';

import React from 'react';

const WorkoutStats = ({ currentStreak, maxStreak }) => {
  return (
    <div className="w-full flex justify-between items-center bg-zinc-900 py-3 px-4 mb-8 rounded">
      <div className="text-center">
        <div className="text-xs text-zinc-500">CURRENT STREAK</div>
        <div className="text-2xl font-mono">{currentStreak}</div>
      </div>
      
      <div className="h-10 w-px bg-zinc-700" />
      
      <div className="text-center">
        <div className="text-xs text-zinc-500">MAX STREAK</div>
        <div className="text-2xl font-mono">{maxStreak}</div>
      </div>
    </div>
  );
};

export default WorkoutStats;