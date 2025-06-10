'use client';

import React from 'react';

const CalendarDay = ({ status, date }) => {
  const statusColors = {
    'completed': 'bg-white',
    'quit': 'bg-work-red',
    'rest': 'bg-blue-500',
    'skipped': 'bg-black',
    'empty': 'bg-black border border-zinc-800'
  };
  
  const formattedDate = date.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric' 
  });
  
  return (
    <div 
      className={`aspect-square ${statusColors[status]}`}
      title={`${formattedDate}: ${status.toUpperCase()}`}
      aria-label={`${formattedDate}: ${status}`}
    />
  );
};

export default React.memo(CalendarDay);