'use client';

import React from 'react';
import Button from '../atoms/Button';
import { useBusiness } from '../../../context/BusinessWorkContext';

const RestedScreen = () => {
  const { actions } = useBusiness();
  
  return (
    <div className="w-full max-w-md flex flex-col items-center">
      <h1 className="text-5xl font-extrabold tracking-tighter mb-10 text-center">
        RESTED
      </h1>
      
      <div className="w-full">
        <Button
          onClick={actions.reset}
          variant="primary"
        >
          READY TOMORROW
        </Button>
      </div>
    </div>
  );
};

export default RestedScreen;