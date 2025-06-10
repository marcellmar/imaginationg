'use client';

import React, { useRef, useEffect } from 'react';

const WorkoutTimer = ({ time, formatTime }) => {
  const timerRef = useRef(null);
  
  // Simple animation when time changes
  useEffect(() => {
    if (timerRef.current) {
      timerRef.current.classList.add('scale-110');
      
      const timer = setTimeout(() => {
        if (timerRef.current) {
          timerRef.current.classList.remove('scale-110');
        }
      }, 200);
      
      return () => clearTimeout(timer);
    }
  }, [time]);
  
  return (
    <div 
      ref={timerRef}
      className="text-5xl font-mono font-bold mb-4 transition-transform duration-200 ease-out"
      aria-live="polite"
      aria-label={`Workout time: ${formatTime(time)}`}
    >
      {formatTime(time)}
    </div>
  );
};

export default WorkoutTimer;