'use client';

import React from 'react';
import CalendarDay from '../atoms/CalendarDay';

const CalendarGrid = ({ days }) => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-7 gap-2 mb-6">
        {days.map((day, index) => (
          <CalendarDay 
            key={index} 
            status={day.status} 
            date={day.date} 
          />
        ))}
      </div>
      
      {/* Legend */}
      <div className="flex justify-between text-xs mb-8">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-white mr-2" />
          <span>WORKED</span>
        </div>
        
        <div className="flex items-center">
          <div className="w-4 h-4 bg-work-red mr-2" />
          <span>QUIT</span>
        </div>
        
        <div className="flex items-center">
          <div className="w-4 h-4 bg-blue-500 mr-2" />
          <span>REST</span>
        </div>
        
        <div className="flex items-center">
          <div className="w-4 h-4 bg-black border border-zinc-800 mr-2" />
          <span>NOTHING</span>
        </div>
      </div>
    </div>
  );
};

export default CalendarGrid;