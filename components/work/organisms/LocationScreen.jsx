'use client';

import React from 'react';
import Button from '../atoms/Button';
import WorkoutStats from '../molecules/WorkoutStats';
import { useBusiness } from '../../../context/BusinessWorkContext';

const LocationScreen = () => {
  const { history, appOpens, currentStreak, maxStreak, actions } = useBusiness();
  
  // Calculate completed workouts percentage
  const completedWorkouts = history.filter(workout => workout.completed).length;
  const showWarning = appOpens > 3 && appOpens > completedWorkouts * 2;
  
  // Calculate exercise diversity percentage
  const uniqueExercises = new Set();
  history.forEach(workout => {
    if (workout.exercises && Array.isArray(workout.exercises)) {
      workout.exercises.forEach(exercise => {
        if (exercise !== 'REST') {
          uniqueExercises.add(exercise);
        }
      });
    }
  });
  
  return (
    <div className="w-full max-w-md flex flex-col items-center">
      {/* App open warning */}
      {showWarning && (
        <div className="fixed top-4 left-0 right-0 mx-auto w-full max-w-xs bg-work-red text-black py-2 px-4 text-center font-bold text-sm">
          OPENED APP {appOpens} TIMES. WORKED {completedWorkouts} TIMES.
        </div>
      )}
      
      <h1 className="text-4xl font-extrabold tracking-tighter mb-10 text-center">
        WHERE ARE YOU WORKING?
      </h1>
      
      {/* Location buttons */}
      <div className="w-full flex flex-col gap-4 mb-8">
        <Button
          onClick={() => actions.chooseLocation('REMOTE')}
          variant="primary"
        >
          REMOTE
        </Button>
        
        <Button
          onClick={() => actions.chooseLocation('OFFICE')}
          variant="primary"
        >
          OFFICE
        </Button>
        
        <Button
          onClick={() => actions.chooseLocation('CLIENT_SITE')}
          variant="primary"
        >
          CLIENT SITE
        </Button>
        
        <Button
          onClick={() => actions.chooseLocation('COFFEE_MEETING')}
          variant="primary"
        >
          COFFEE MEETING
        </Button>
      </div>
      
      {/* Stats and calendar button */}
      {history.length > 0 && (
        <>
          <WorkoutStats
            currentStreak={currentStreak}
            maxStreak={maxStreak}
          />
          
          {uniqueExercises.size > 0 && (
            <div className="text-sm text-zinc-400 mb-4 text-center">
              Tried {uniqueExercises.size} unique exercises
            </div>
          )}
          
          <Button
            onClick={() => actions.setView('calendar')}
            variant="tertiary"
            size="sm"
          >
            CALENDAR
          </Button>
        </>
      )}
    </div>
  );
};

export default LocationScreen;