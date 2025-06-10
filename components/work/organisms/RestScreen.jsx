'use client';

import React from 'react';
import Button from '../atoms/Button';
import { useBusiness } from '../../../context/BusinessWorkContext';

const RestScreen = () => {
  const { location, actions } = useBusiness();
  
  return (
    <div className="w-full max-w-md flex flex-col items-center">
      <h1 className="text-5xl font-extrabold tracking-tighter mb-4 text-center">
        REST
      </h1>
      
      <p className="text-2xl mb-10 text-center">
        WORKED 3+ DAYS STRAIGHT
      </p>
      
      <div className="w-full flex flex-col gap-4">
        <Button
          onClick={actions.takeRest}
          variant="primary"
        >
          REST
        </Button>
        
        <Button
          onClick={() => {
            const generatedWorkout = actions.generateWorkout(location);
            actions.setWorkout(generatedWorkout); 
            actions.setView('workout');
          }}
          variant="secondary"
        >
          WORK ANYWAY
        </Button>
      </div>
    </div>
  );
};

export default RestScreen;