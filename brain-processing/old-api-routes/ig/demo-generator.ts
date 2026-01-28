import type { NextApiRequest, NextApiResponse } from 'next';

// Demo scenario generators
const DEMO_SCENARIOS: Record<string, any> = {
  'startup-strune': {
    name: 'Growing Startup - Process Strune',
    description: 'Fast-growing startup developing process resistance',
    duration: 90, // days
    metrics: {
      initial: {
        nexel: { value: 0.8, type: 'piercer' },
        morrin: { value: 0.7, state: 'true-morrin' },
        strune: { value: 0.2, type: 'minimal' },
        pilor: { value: 0.1, depth: 0 },
        kithara: { value: 0.2, type: 'healthy' },
        soreth: { value: 0.3, drain: 'low' },
        voxel: { value: 0.2, alignment: 'good' },
        quorr: { value: 0.2, debt: 'low' },
        threnn: { value: 0.7, direction: 'positive' },
        zelith: { value: 0.1, proximity: 'distant' }
      },
      progression: [
        { day: 30, changes: { strune: 0.4, soreth: 0.4, quorr: 0.3 } },
        { day: 60, changes: { strune: 0.6, pilor: 0.3, kithara: 0.4, threnn: 0.5 } },
        { day: 90, changes: { strune: 0.75, pilor: 0.5, soreth: 0.6, threnn: 0.3 } }
      ]
    }
  },
  'enterprise-pilor': {
    name: 'Enterprise - Recursive Failure',
    description: 'Large enterprise stuck in pilor loops',
    duration: 180,
    metrics: {
      initial: {
        nexel: { value: 0.3, type: 'absorber' },
        morrin: { value: 0.3, state: 'pre-morrin' },
        strune: { value: 0.6, type: 'cultural' },
        pilor: { value: 0.7, depth: 3 },
        kithara: { value: 0.8, type: 'leadership' },
        soreth: { value: 0.7, drain: 'high' },
        voxel: { value: 0.7, alignment: 'poor' },
        quorr: { value: 0.8, debt: 'critical' },
        threnn: { value: 0.2, direction: 'negative' },
        zelith: { value: 0.5, proximity: 'approaching' }
      },
      progression: [
        { day: 60, changes: { pilor: 0.8, zelith: 0.6 } },
        { day: 120, changes: { pilor: 0.85, kithara: 0.9, zelith: 0.7 } },
        { day: 180, changes: { zelith: 0.85, threnn: 0.1 } }
      ]
    }
  },
  'growth-zelith': {
    name: 'Scale-up - Approaching Zelith',
    description: 'High-growth company hitting system limits',
    duration: 60,
    metrics: {
      initial: {
        nexel: { value: 0.7, type: 'amplifier' },
        morrin: { value: 0.6, state: 'true-morrin' },
        strune: { value: 0.4, type: 'technical' },
        pilor: { value: 0.3, depth: 1 },
        kithara: { value: 0.3, type: 'minimal' },
        soreth: { value: 0.5, drain: 'medium' },
        voxel: { value: 0.4, alignment: 'moderate' },
        quorr: { value: 0.5, debt: 'growing' },
        threnn: { value: 0.6, direction: 'volatile' },
        zelith: { value: 0.4, proximity: 'building' }
      },
      progression: [
        { day: 20, changes: { zelith: 0.6, strune: 0.5, soreth: 0.6 } },
        { day: 40, changes: { zelith: 0.75, quorr: 0.7, threnn: 0.3 } },
        { day: 60, changes: { zelith: 0.9, pilor: 0.6, kithara: 0.5 } }
      ]
    }
  },
  'transformation-success': {
    name: 'Post-Intervention Recovery',
    description: 'Organization after successful IG intervention',
    duration: 120,
    metrics: {
      initial: {
        nexel: { value: 0.5, type: 'router' },
        morrin: { value: 0.4, state: 'pre-morrin' },
        strune: { value: 0.7, type: 'process' },
        pilor: { value: 0.6, depth: 2 },
        kithara: { value: 0.6, type: 'cultural' },
        soreth: { value: 0.6, drain: 'high' },
        voxel: { value: 0.6, alignment: 'poor' },
        quorr: { value: 0.7, debt: 'high' },
        threnn: { value: 0.3, direction: 'negative' },
        zelith: { value: 0.7, proximity: 'critical' }
      },
      progression: [
        { day: 30, changes: { morrin: 0.7, strune: 0.5, kithara: 0.4 } },
        { day: 60, changes: { pilor: 0.3, threnn: 0.6, voxel: 0.4 } },
        { day: 90, changes: { strune: 0.3, soreth: 0.4, quorr: 0.5 } },
        { day: 120, changes: { threnn: 0.7, zelith: 0.3, voxel: 0.3 } }
      ]
    }
  }
};

// Generate time series data for a scenario
function generateScenarioData(scenario: any, upToDay?: number) {
  const data: any[] = [];
  const duration = upToDay || scenario.duration;
  
  // Start with initial metrics
  let currentMetrics = { ...scenario.metrics.initial };
  
  for (let day = 0; day <= duration; day++) {
    const date = new Date();
    date.setDate(date.getDate() - (duration - day));
    
    // Apply progression changes
    const progression = scenario.metrics.progression.find((p: any) => p.day === day);
    if (progression) {
      Object.entries(progression.changes).forEach(([metric, value]: [string, any]) => {
        currentMetrics[metric] = { 
          ...currentMetrics[metric], 
          value: value as number 
        };
      });
    }
    
    // Add some random variation for realism
    Object.keys(currentMetrics).forEach(metric => {
      const baseValue = currentMetrics[metric].value;
      const variation = (Math.random() - 0.5) * 0.05; // ±5% variation
      const value = Math.max(0, Math.min(1, baseValue + variation));
      
      data.push({
        time: date.toISOString(),
        metric_type: metric,
        value,
        confidence: 0.85 + Math.random() * 0.1,
        dimensions: currentMetrics[metric],
        data_source: 'demo'
      });
    });
  }
  
  return data;
}

// Generate realistic events and patterns
function generateEvents(scenario: any) {
  const events: any[] = [];
  const patterns: any[] = [];
  
  // Add events based on scenario
  switch (scenario) {
    case 'startup-strune':
      events.push(
        { day: 15, type: 'hiring_spike', description: 'Hired 20 new employees' },
        { day: 35, type: 'process_added', description: 'Implemented new approval process' },
        { day: 55, type: 'complaint_increase', description: 'Employee complaints about bureaucracy' }
      );
      patterns.push(
        { day: 40, type: 'process_strune', severity: 'medium' },
        { day: 70, type: 'process_strune', severity: 'high' }
      );
      break;
      
    case 'enterprise-pilor':
      events.push(
        { day: 30, type: 'reorg_attempt', description: 'Third reorganization in 2 years' },
        { day: 90, type: 'leadership_change', description: 'New VP of Innovation (4th in 3 years)' },
        { day: 150, type: 'strategy_pivot', description: 'Another "digital transformation" initiative' }
      );
      patterns.push(
        { day: 60, type: 'pilor_loop', severity: 'high' },
        { day: 120, type: 'kithara_state', severity: 'critical' },
        { day: 160, type: 'zelith_approach', severity: 'critical' }
      );
      break;
  }
  
  return { events, patterns };
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, query, body } = req;
  
  if (method === 'GET') {
    // List available scenarios
    const scenarios = Object.entries(DEMO_SCENARIOS).map(([key, scenario]) => ({
      id: key,
      name: scenario.name,
      description: scenario.description,
      duration: scenario.duration
    }));
    
    return res.status(200).json({ success: true, scenarios });
  }
  
  if (method === 'POST') {
    const { scenario: scenarioId, upToDay, includeEvents } = body;
    
    if (!scenarioId || !DEMO_SCENARIOS[scenarioId]) {
      return res.status(400).json({
        success: false,
        error: 'Invalid scenario ID'
      });
    }
    
    const scenario = DEMO_SCENARIOS[scenarioId];
    const timeSeriesData = generateScenarioData(scenario, upToDay);
    
    const response: any = {
      success: true,
      scenario: {
        id: scenarioId,
        name: scenario.name,
        description: scenario.description
      },
      data: timeSeriesData,
      currentDay: upToDay || scenario.duration
    };
    
    if (includeEvents) {
      const { events, patterns } = generateEvents(scenarioId);
      response.events = events;
      response.patterns = patterns;
    }
    
    // Calculate current metrics (latest values)
    const latestMetrics: Record<string, any> = {};
    Object.keys(scenario.metrics.initial).forEach(metric => {
      const latestData = timeSeriesData
        .filter(d => d.metric_type === metric)
        .sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime())[0];
      
      latestMetrics[metric] = latestData;
    });
    
    response.currentMetrics = latestMetrics;
    
    return res.status(200).json(response);
  }
  
  res.setHeader('Allow', ['GET', 'POST']);
  res.status(405).json({ success: false, error: 'Method not allowed' });
}