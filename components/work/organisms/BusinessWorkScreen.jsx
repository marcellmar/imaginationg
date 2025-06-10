'use client';

import React from 'react';
import Button from '../atoms/Button';
import BusinessActivityDisplay from '../molecules/BusinessActivityDisplay';
import { useBusiness } from '../../../context/BusinessWorkContext';

const BusinessWorkScreen = () => {
  const { workflow, actions } = useBusiness();
  
  return (
    <div className="w-full max-w-md flex flex-col items-center">
      <h1 className="text-4xl font-extrabold tracking-tighter mb-8 text-center">
        TODAY'S EXECUTION
      </h1>
      
      {/* Activities list */}
      <div className="w-full mb-10">
        {workflow.map((activity, index) => (
          <BusinessActivityDisplay
            key={index}
            activity={activity}
          />
        ))}
      </div>
      
      {/* Action buttons */}
      <div className="w-full flex flex-col gap-4">
        <Button
          onClick={actions.startWork}
          variant="primary"
        >
          EXECUTE
        </Button>
        
        <Button
          onClick={actions.skipWork}
          variant="secondary"
        >
          AVOID
        </Button>
      </div>
    </div>
  );
};

export default BusinessWorkScreen;