'use client';

import React from 'react';
import { BusinessProvider, useBusiness } from '../../context/BusinessWorkContext';

// Import all business screens
import BusinessHomeScreen from './organisms/BusinessHomeScreen';
import LocationScreen from './organisms/LocationScreen';
import BusinessWorkScreen from './organisms/BusinessWorkScreen';
import BusinessActiveScreen from './organisms/BusinessActiveScreen';
import BusinessCompletedScreen from './organisms/BusinessCompletedScreen';
import BusinessQuitScreen from './organisms/BusinessQuitScreen';
import BusinessSkippedScreen from './organisms/BusinessSkippedScreen';
import RestScreen from './organisms/RestScreen';
import RestedScreen from './organisms/RestedScreen';
import CalendarScreen from './organisms/CalendarScreen';

const BusinessAppContent = () => {
  const { view, loading } = useBusiness();

  // Show loading spinner while data is being loaded
  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
        <div className="w-12 h-12 border-4 border-white border-t-transparent animate-spin rounded-full"></div>
      </div>
    );
  }

  // Determine which view to render
  const renderView = () => {
    switch (view) {
      case 'home':
        return <BusinessHomeScreen />;
      case 'location':
        return <LocationScreen />;
      case 'rest':
        return <RestScreen />;
      case 'work':
        return <BusinessWorkScreen />;
      case 'active':
        return <BusinessActiveScreen />;
      case 'completed':
        return <BusinessCompletedScreen />;
      case 'quit':
        return <BusinessQuitScreen />;
      case 'skipped':
        return <BusinessSkippedScreen />;
      case 'rested':
        return <RestedScreen />;
      case 'calendar':
        return <CalendarScreen />;
      default:
        return <BusinessHomeScreen />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      {renderView()}
    </div>
  );
};

const BusinessApp = () => {
  return (
    <BusinessProvider>
      <BusinessAppContent />
    </BusinessProvider>
  );
};

export default BusinessApp;