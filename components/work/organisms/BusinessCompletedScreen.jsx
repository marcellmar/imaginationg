'use client';

import React from 'react';
import Button from '../atoms/Button';
import { useBusiness } from '../../../context/BusinessWorkContext';

const BusinessCompletedScreen = () => {
  const { history, actions } = useBusiness();
  
  // Get the last completed session
  const lastSession = history[0];
  const duration = lastSession?.duration || 0;
  
  // Success messages for business context
  const successMessages = [
    "MOVEMENT OVER MANAGEMENT.",
    "YOU CHOSE PROGRESS OVER COMFORT.",
    "BINARY DECISION. ACTUAL RESULTS.",
    "NO EXCUSES. JUST EXECUTION.",
    "SHIPPED BEATS PERFECT.",
    "ACTION OVER ANALYSIS.",
    "MOMENTUM MAINTAINED.",
    "DRIFT DEFEATED TODAY.",
    "COMFORT ZONE DESTROYED.",
    "MEDIOCRITY REJECTED.",
    "EXECUTION DEFINES IDENTITY.",
    "PATTERNS COMPOUND. YOU CHOSE WELL.",
    "TODAY'S WORK ECHOES FOREVER.",
    "COMPLEXITY ELIMINATED. WORK DONE.",
    "SIGNAL OVER NOISE. ALWAYS."
  ];
  
  const randomMessage = successMessages[Math.floor(Math.random() * successMessages.length)];
  
  return (
    <div className="w-full max-w-md flex flex-col items-center text-center">
      <h1 className="text-5xl font-black mb-6">
        EXECUTION COMPLETE
      </h1>
      
      <p className="text-xl font-bold mb-8 text-work-red">
        {randomMessage}
      </p>
      
      {duration > 0 && (
        <div className="mb-8">
          <p className="text-sm text-zinc-400 mb-2">TIME INVESTED</p>
          <p className="text-3xl font-bold">{actions.formatTime(duration)}</p>
        </div>
      )}
      
      {lastSession?.activities && (
        <div className="w-full mb-8">
          <p className="text-sm text-zinc-400 mb-4">COMPLETED ACTIVITIES</p>
          {lastSession.activities.map((activity, index) => (
            <div key={index} className="mb-2 text-lg">
              ✓ {activity}
            </div>
          ))}
        </div>
      )}
      
      {lastSession?.evidence && (
        <div className="w-full mb-8 p-4 bg-zinc-900 rounded">
          <p className="text-sm text-zinc-400 mb-2">EVIDENCE PROVIDED</p>
          <p className="text-sm">{lastSession.evidence}</p>
        </div>
      )}
      
      {lastSession?.impact && (
        <div className="w-full mb-8 p-4 bg-zinc-900 rounded">
          <p className="text-sm text-zinc-400 mb-2">BUSINESS IMPACT</p>
          <p className="text-sm">{lastSession.impact}</p>
        </div>
      )}
      
      <Button
        onClick={actions.reset}
        variant="primary"
        className="w-full"
      >
        CONTINUE MOMENTUM
      </Button>
    </div>
  );
};

export default BusinessCompletedScreen;