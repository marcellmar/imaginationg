'use client';

import React, { useState } from 'react';
import Button from '../atoms/Button';
import WorkoutTimer from '../atoms/WorkoutTimer';
import BusinessActivityDisplay from '../molecules/BusinessActivityDisplay';
import EvidenceUpload from '../molecules/EvidenceUpload';
import { useBusiness } from '../../../context/BusinessWorkContext';

const BusinessActiveScreen = () => {
  const { workflow, currentActivity, time, actions } = useBusiness();
  const [showEvidenceModal, setShowEvidenceModal] = useState(false);
  
  const handleComplete = () => {
    setShowEvidenceModal(true);
  };
  
  const handleEvidenceSubmit = (evidenceData) => {
    actions.completeActivity(evidenceData.evidence, evidenceData.impact);
    setShowEvidenceModal(false);
  };
  
  return (
    <div className="w-full max-w-md flex flex-col items-center">
      <WorkoutTimer time={time} formatTime={actions.formatTime} />
      
      <div className="w-full mb-10">
        <BusinessActivityDisplay
          activity={workflow[currentActivity]}
          index={currentActivity}
          total={workflow.length}
        />
      </div>
      
      <div className="w-full flex flex-col gap-4">
        <Button
          onClick={handleComplete}
          variant="primary"
        >
          COMPLETED
        </Button>
        
        <Button
          onClick={actions.quitWork}
          variant="secondary"
        >
          AVOIDED
        </Button>
      </div>
      
      {/* Evidence Modal */}
      {showEvidenceModal && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50">
          <div className="bg-zinc-900 p-6 rounded-lg max-w-md w-full">
            <EvidenceUpload
              onSubmit={handleEvidenceSubmit}
              onCancel={() => setShowEvidenceModal(false)}
              activityName={workflow[currentActivity]?.name}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default BusinessActiveScreen;