'use client';

import React from 'react';
import { useBusiness } from '../../../context/BusinessWorkContext';
import Button from '../atoms/Button';

const BusinessHomeScreen = () => {
  const { actions, appOpens, history } = useBusiness();
  
  // Count completed work sessions
  const completedWork = history ? history.filter(w => w.completed).length : 0;
  
  // Navigate to location selection
  const handleStart = () => {
    actions.setView('location');
  };
  
  return (
    <div className="flex flex-col h-screen w-full bg-black text-white items-center justify-between py-8">
      {/* Main Content */}
      <div className="flex flex-col items-center justify-center flex-grow w-full">
        {/* Text Logo */}
        <h1 className="text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-4">WORK</h1>
        
        {/* Tagline */}
        <p className="text-xl font-bold mb-2">EXECUTE OR AVOID. BINARY TRUTH.</p>
        
        {/* Secondary Tagline */}
        <p className="text-sm font-medium mb-16 text-gray-400">TRACK BUSINESS EXECUTION. NO HIDING.</p>
        
        {/* Action Button */}
        <Button 
          onClick={handleStart}
          className="bg-red-600 text-white text-xl md:text-2xl font-bold py-3 md:py-4 px-8 md:px-12 w-4/5 md:w-3/4 max-w-xs hover:bg-red-700 transition-colors"
        >
          EXECUTE
        </Button>
      </div>
      
      {/* Optional: Counter */}
      <div className="mb-8">
        <p className="text-xs text-gray-600 text-center">
          OPENED {appOpens || 0} TIMES.
          <br />
          EXECUTED {completedWork} TIMES.
        </p>
      </div>
      
      {/* Footer */}
      <p className="text-xs text-gray-500 text-center px-6">
        TRANSPARENCY THROUGH BRUTALITY.
      </p>
    </div>
  );
};

export default BusinessHomeScreen;