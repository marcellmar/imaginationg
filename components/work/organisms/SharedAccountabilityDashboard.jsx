'use client';

import React, { useState, useEffect } from 'react';
import { useBusiness } from '../../../context/BusinessWorkContext';
import { getActivityStats, getInterventions } from '../../../utils/businessDb';
import Button from '../atoms/Button';

const SharedAccountabilityDashboard = () => {
  const { userType, clientInfo, actions } = useBusiness();
  const [marcusStats, setMarcusStats] = useState(null);
  const [clientStats, setClientStats] = useState(null);
  const [intervention, setIntervention] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const loadStats = async () => {
      try {
        // Load Marcus's stats
        const mStats = await getActivityStats('marcus', 'internal', 7);
        setMarcusStats(mStats);
        
        // If viewing as client, load client stats
        if (userType === 'client' && clientInfo?.id) {
          const cStats = await getActivityStats(clientInfo.id, 'client', 7);
          setClientStats(cStats);
          
          // Load active intervention
          const interventions = await getInterventions({
            clientId: clientInfo.id,
            status: 'active'
          });
          if (interventions.length > 0) {
            setIntervention(interventions[0]);
          }
        }
        
        setLoading(false);
      } catch (error) {
        console.error('Error loading stats:', error);
        setLoading(false);
      }
    };
    
    loadStats();
  }, [userType, clientInfo]);
  
  if (loading) {
    return (
      <div className="w-full max-w-4xl mx-auto p-4">
        <div className="flex justify-center">
          <div className="w-8 h-8 border-4 border-white border-t-transparent animate-spin rounded-full"></div>
        </div>
      </div>
    );
  }
  
  const renderStatCard = (title, stats, isClient = false) => {
    if (!stats) return null;
    
    return (
      <div className={`p-6 rounded-lg ${isClient ? 'bg-zinc-900' : 'bg-zinc-800'}`}>
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <p className="text-sm text-zinc-400">EXECUTION RATE</p>
            <p className={`text-3xl font-bold ${stats.completionRate >= 85 ? 'text-green-500' : 'text-work-red'}`}>
              {stats.completionRate}%
            </p>
          </div>
          <div>
            <p className="text-sm text-zinc-400">LAST 7 DAYS</p>
            <p className="text-lg">
              {stats.completed}/{stats.total} COMPLETED
            </p>
          </div>
        </div>
        
        {Object.keys(stats.patterns).length > 0 && (
          <div>
            <p className="text-sm text-zinc-400 mb-2">PATTERN ANALYSIS</p>
            {Object.entries(stats.patterns)
              .sort((a, b) => b[1].avoidanceRate - a[1].avoidanceRate)
              .slice(0, 3)
              .map(([pattern, data]) => (
                <div key={pattern} className="flex justify-between mb-1">
                  <span className="text-sm">{pattern}</span>
                  <span className={`text-sm font-bold ${
                    data.avoidanceRate > 30 ? 'text-work-red' : 'text-zinc-400'
                  }`}>
                    {data.avoidanceRate}% AVOIDED
                  </span>
                </div>
              ))}
          </div>
        )}
      </div>
    );
  };
  
  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-black mb-8 text-center">
        MUTUAL ACCOUNTABILITY
      </h1>
      
      {intervention && (
        <div className="mb-8 p-4 bg-work-red text-black rounded-lg">
          <p className="font-bold">{intervention.type.toUpperCase()}</p>
          <p className="text-sm">DAY {intervention.currentDay || 1} OF {intervention.totalDays || 30}</p>
        </div>
      )}
      
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Marcus's Stats */}
        {renderStatCard("MARCUS - CONSULTANT", marcusStats)}
        
        {/* Client's Stats (if viewing as client) */}
        {userType === 'client' && clientStats && 
          renderStatCard(`${clientInfo?.name || 'CLIENT'} - YOU`, clientStats, true)}
      </div>
      
      {/* Mutual Commitments */}
      <div className="bg-zinc-900 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-bold mb-4">TODAY'S COMMITMENTS</h3>
        
        {userType === 'internal' ? (
          // Marcus's view
          <div className="space-y-4">
            <div>
              <p className="font-bold mb-2">YOUR COMMITMENTS:</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="mr-2">□</span>
                  Ship KAI integration update
                </li>
                <li className="flex items-center">
                  <span className="mr-2">□</span>
                  Review client progress
                </li>
                <li className="flex items-center">
                  <span className="mr-2">□</span>
                  Prepare tomorrow's intervention
                </li>
              </ul>
            </div>
            
            {clientInfo && (
              <div>
                <p className="font-bold mb-2">CLIENT'S COMMITMENTS:</p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="mr-2">□</span>
                    Complete market validation interviews
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">□</span>
                    Update product based on feedback
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">□</span>
                    Document key insights
                  </li>
                </ul>
              </div>
            )}
          </div>
        ) : (
          // Client's view
          <div className="space-y-4">
            <div>
              <p className="font-bold mb-2">YOUR COMMITMENTS:</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="mr-2">□</span>
                  Complete today's activities
                </li>
                <li className="flex items-center">
                  <span className="mr-2">□</span>
                  Upload evidence of completion
                </li>
                <li className="flex items-center">
                  <span className="mr-2">□</span>
                  Maintain momentum
                </li>
              </ul>
            </div>
            
            <div>
              <p className="font-bold mb-2">MARCUS'S COMMITMENTS:</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="mr-2">☑</span>
                  Review your progress daily
                </li>
                <li className="flex items-center">
                  <span className="mr-2">☑</span>
                  Provide intervention support
                </li>
                <li className="flex items-center">
                  <span className="mr-2">☑</span>
                  Hold you accountable
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
      
      {/* Pattern Warnings */}
      {(marcusStats?.patterns || clientStats?.patterns) && (
        <div className="bg-red-900 bg-opacity-20 border border-work-red p-6 rounded-lg mb-8">
          <h3 className="text-xl font-bold mb-4 text-work-red">PATTERN ALERTS</h3>
          
          {marcusStats && Object.entries(marcusStats.patterns)
            .filter(([_, data]) => data.avoidanceRate > 50)
            .map(([pattern, data]) => (
              <div key={pattern} className="mb-2">
                <p className="font-bold">MARCUS: {pattern} - {data.avoidanceRate}% AVOIDANCE</p>
                <p className="text-sm text-zinc-400">Intervention may be needed</p>
              </div>
            ))}
          
          {clientStats && Object.entries(clientStats.patterns)
            .filter(([_, data]) => data.avoidanceRate > 50)
            .map(([pattern, data]) => (
              <div key={pattern} className="mb-2">
                <p className="font-bold">CLIENT: {pattern} - {data.avoidanceRate}% AVOIDANCE</p>
                <p className="text-sm text-zinc-400">Pattern must be addressed</p>
              </div>
            ))}
        </div>
      )}
      
      <div className="flex justify-center">
        <Button
          onClick={() => actions.setView('home')}
          variant="primary"
        >
          BACK TO WORK
        </Button>
      </div>
    </div>
  );
};

export default SharedAccountabilityDashboard;