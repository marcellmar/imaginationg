'use client';

import React from 'react';

const BusinessActivityDisplay = ({ activity }) => {
  if (!activity) return null;

  return (
    <div className="w-full max-w-sm">
      <div className="text-center mb-4">
        <p className="text-zinc-400 text-sm mb-2">NEXT ACTIVITY</p>
        <h3 className="text-2xl font-bold">{activity.name}</h3>
      </div>
      
      {activity.description && (
        <div className="mb-4">
          <p className="text-zinc-300">{activity.description}</p>
        </div>
      )}
      
      {activity.duration && (
        <div className="text-center">
          <p className="text-zinc-400 text-sm">DURATION</p>
          <p className="text-xl font-bold">{activity.duration} MIN</p>
        </div>
      )}
    </div>
  );
};

export default BusinessActivityDisplay;