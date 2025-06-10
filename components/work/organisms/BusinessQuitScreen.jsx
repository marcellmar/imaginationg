'use client';

import React from 'react';
import Button from '../atoms/Button';
import { useBusiness } from '../../../context/BusinessWorkContext';

const BusinessQuitScreen = () => {
  const { actions } = useBusiness();
  
  // Get pattern analysis
  const patternAnalysis = actions.getPatternAnalysis();
  
  // Sort patterns by avoidance rate
  const topAvoidancePatterns = Object.entries(patternAnalysis)
    .sort((a, b) => b[1].avoidanceRate - a[1].avoidanceRate)
    .slice(0, 3);
  
  // Confrontational messages for quitting
  const quitMessages = [
    "COMFORT WON TODAY.",
    "DRIFT GETS STRONGER.",
    "EXCUSES COMPOUND DAILY.",
    "MOMENTUM DIES HERE.",
    "PATTERNS BECOME DESTINY.",
    "AVOIDANCE BECOMES IDENTITY.",
    "TOMORROW'S EXCUSE STARTED TODAY.",
    "WEAK STAYS WEAK.",
    "HIDING BECOMES HABIT.",
    "FAILURE TASTES FAMILIAR.",
    "MEDIOCRITY EMBRACED.",
    "RESISTANCE WINS AGAIN.",
    "FEAR CHOSE FOR YOU.",
    "COMPLEXITY BEAT CLARITY.",
    "DRIFT DIRECTION: DOWN."
  ];
  
  const randomMessage = quitMessages[Math.floor(Math.random() * quitMessages.length)];
  
  return (
    <div className="w-full max-w-md flex flex-col items-center text-center">
      <h1 className="text-5xl font-black mb-6 text-work-red">
        AVOIDED.
      </h1>
      
      <p className="text-xl font-bold mb-8">
        {randomMessage}
      </p>
      
      {topAvoidancePatterns.length > 0 && (
        <div className="w-full mb-8 p-4 bg-zinc-900 rounded">
          <p className="text-sm text-zinc-400 mb-4">YOUR AVOIDANCE PATTERN:</p>
          {topAvoidancePatterns.map(([pattern, data]) => (
            <div key={pattern} className="mb-2">
              <span className="font-bold">{pattern}:</span>
              <span className="text-work-red ml-2">{data.avoidanceRate}% AVOIDED</span>
            </div>
          ))}
        </div>
      )}
      
      <div className="mb-8 text-sm text-zinc-400">
        <p>EXCUSES DON'T BUILD BUSINESSES.</p>
        <p>AVOIDANCE DOESN'T SHIP FEATURES.</p>
        <p>COMFORT DOESN'T CLOSE DEALS.</p>
      </div>
      
      <Button
        onClick={actions.reset}
        variant="primary"
        className="w-full mb-4"
      >
        FACE REALITY
      </Button>
      
      <p className="text-xs text-zinc-500">
        PATTERNS PERSIST UNTIL CONFRONTED.
      </p>
    </div>
  );
};

export default BusinessQuitScreen;