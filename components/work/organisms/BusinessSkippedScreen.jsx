'use client';

import React from 'react';
import Button from '../atoms/Button';
import { useBusiness } from '../../../context/BusinessWorkContext';

const BusinessSkippedScreen = () => {
  const { actions, history } = useBusiness();
  
  // Count recent skips
  const recentSkips = history.slice(0, 10).filter(session => session.skipped).length;
  const skipRate = history.length > 0 
    ? Math.round((history.filter(s => s.skipped).length / history.length) * 100)
    : 0;
  
  return (
    <div className="w-full max-w-md flex flex-col items-center text-center">
      <h1 className="text-5xl font-black mb-6 text-work-red">
        SKIPPED.
      </h1>
      
      <div className="mb-8">
        <p className="text-xl font-bold mb-4">
          YOU HAD ONE JOB.
        </p>
        <p className="text-lg mb-2">
          EXECUTE OR AVOID.
        </p>
        <p className="text-lg">
          YOU CHOSE NEITHER.
        </p>
      </div>
      
      <p className="text-xl font-bold mb-8 text-zinc-400">
        INDECISION IS STILL AVOIDANCE.
      </p>
      
      {skipRate > 0 && (
        <div className="w-full mb-8 p-4 bg-zinc-900 rounded">
          <p className="text-sm text-zinc-400 mb-2">SKIP PATTERN EMERGING</p>
          <p className="text-2xl font-bold text-work-red">{skipRate}% SKIP RATE</p>
          <p className="text-sm text-zinc-400 mt-2">
            {recentSkips} SKIPS IN LAST 10 SESSIONS
          </p>
        </div>
      )}
      
      <div className="mb-8 text-sm text-zinc-400">
        <p>SKIPPING IS AVOIDANCE WITH EXTRA STEPS.</p>
        <p>BINARY MEANS TWO OPTIONS.</p>
        <p>NOT THREE.</p>
      </div>
      
      <Button
        onClick={actions.reset}
        variant="primary"
        className="w-full"
      >
        OWN IT
      </Button>
    </div>
  );
};

export default BusinessSkippedScreen;