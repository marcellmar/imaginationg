'use client';

import React from 'react';
import Button from '../atoms/Button';
import CalendarGrid from '../molecules/CalendarGrid';
import { useBusiness } from '../../../context/BusinessWorkContext';

const CalendarScreen = () => {
  const { actions } = useBusiness();
  const calendarData = actions.getCalendarData();
  
  return (
    <div className="w-full max-w-md flex flex-col items-center">
      <h1 className="text-4xl font-extrabold tracking-tighter mb-8 text-center">
        LAST 30 DAYS
      </h1>
      
      <CalendarGrid days={calendarData} />
      
      <div className="w-full">
        <Button
          onClick={actions.reset}
          variant="primary"
        >
          BACK
        </Button>
      </div>
    </div>
  );
};

export default CalendarScreen;