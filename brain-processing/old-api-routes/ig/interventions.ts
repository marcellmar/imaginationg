import type { NextApiRequest, NextApiResponse } from 'next';

// Intervention types based on IG methodology
const INTERVENTIONS: Record<string, any> = {
  'the-naming': {
    id: 'the-naming',
    name: 'The Naming',
    description: 'Surface buried truth in one transformative session',
    duration: '4 hours',
    severity: ['high', 'critical'],
    targets: ['pilor', 'kithara', 'morrin'],
    outcomes: [
      'Clarity on actual vs perceived problems',
      'Commitment to single direction',
      'Truth injection into system'
    ],
    process: [
      'Pre-session behavioral audit',
      'Guided truth excavation',
      'Pattern identification',
      'Strategic realignment',
      'Action commitment'
    ],
    cost: '$5,000',
    urgency: 'Schedule within 72 hours for critical patterns'
  },
  'first-blood-build': {
    id: 'first-blood-build',
    name: 'First Blood Build',
    description: 'Ship ugly to kill perfection paralysis',
    duration: '48-72 hours',
    severity: ['medium', 'high'],
    targets: ['strune', 'quorr', 'pre-morrin'],
    outcomes: [
      'Working prototype in market',
      'Real customer feedback',
      'Momentum creation',
      'Ego death and rebirth'
    ],
    process: [
      'Identify minimum viable pain',
      'Strip to core function',
      'Build in 48 hours',
      'Launch immediately',
      'Iterate on real feedback'
    ],
    cost: '$2,500',
    urgency: 'Begin immediately to break paralysis'
  },
  'thirty-day-drift-break': {
    id: 'thirty-day-drift-break',
    name: '30-Day Drift Break',
    description: 'Reset organizational physics through structured intervention',
    duration: '30 days',
    severity: ['medium', 'high', 'critical'],
    targets: ['pilor', 'strune', 'soreth', 'kithara'],
    outcomes: [
      'Break recursive patterns',
      'Reduce process complexity by 50%',
      'Restore decision velocity',
      'Clear energy drains'
    ],
    process: [
      'Week 1: Pattern identification and freezing',
      'Week 2: Systematic deconstruction',
      'Week 3: Rebuild core processes',
      'Week 4: New pattern installation'
    ],
    cost: '$15,000',
    urgency: 'Critical for pilor depth > 2'
  },
  'market-smackdown': {
    id: 'market-smackdown',
    name: 'The Market Smackdown',
    description: 'Force market reality into delusional systems',
    duration: '2 weeks',
    severity: ['high', 'critical'],
    targets: ['voxel', 'kithara', 'zelith'],
    outcomes: [
      'Reality-perception alignment',
      'Market truth injection',
      'Delusion destruction',
      'Strategic clarity'
    ],
    process: [
      'Unfiltered customer interviews',
      'Competitor reality audit',
      'Internal belief mapping',
      'Gap analysis presentation',
      'Forced reconciliation'
    ],
    cost: '$7,500',
    urgency: 'Before zelith point reached'
  },
  'movement-sprint': {
    id: 'movement-sprint',
    name: 'Movement Sprint',
    description: 'Concentrated burst to create positive threnn',
    duration: '5 days',
    severity: ['low', 'medium'],
    targets: ['threnn', 'morrin', 'nexel'],
    outcomes: [
      'Momentum multiplication',
      'Team alignment',
      'Rapid progress',
      'Energy restoration'
    ],
    process: [
      'Day 1: Nexel alignment',
      'Day 2-3: Focused execution',
      'Day 4: Integration',
      'Day 5: Momentum capture'
    ],
    cost: '$3,500',
    urgency: 'When threnn < 0.3'
  },
  'clarity-catalyst-call': {
    id: 'clarity-catalyst-call',
    name: 'Clarity Catalyst Call',
    description: '90-minute truth injection session',
    duration: '90 minutes',
    severity: ['low', 'medium'],
    targets: ['kithara', 'voxel', 'morrin'],
    outcomes: [
      'Immediate clarity',
      'Decision unblocking',
      'Truth surfacing',
      'Next steps identified'
    ],
    process: [
      '30 min: Current state audit',
      '30 min: Pattern identification',
      '30 min: Action planning'
    ],
    cost: '$500',
    urgency: 'Within 48 hours of request'
  }
};

// Match interventions to patterns
function recommendInterventions(patterns: any[], metrics: any) {
  const recommendations: any[] = [];
  
  patterns.forEach(pattern => {
    // Find interventions that target this pattern's severity and type
    Object.values(INTERVENTIONS).forEach(intervention => {
      if (intervention.severity.includes(pattern.severity)) {
        // Check if intervention targets the problematic metrics
        const relevantTarget = intervention.targets.some((target: string) => {
          const metric = metrics.find((m: any) => m.metric_type === target);
          return metric && metric.value > 0.5;
        });
        
        if (relevantTarget) {
          recommendations.push({
            intervention,
            pattern,
            priority: pattern.severity === 'critical' ? 'immediate' : 
                     pattern.severity === 'high' ? 'urgent' : 'recommended',
            matchScore: calculateMatchScore(intervention, pattern, metrics)
          });
        }
      }
    });
  });
  
  // Sort by match score and remove duplicates
  const uniqueRecommendations = recommendations
    .sort((a, b) => b.matchScore - a.matchScore)
    .filter((rec, index, self) => 
      index === self.findIndex(r => r.intervention.id === rec.intervention.id)
    )
    .slice(0, 3); // Top 3 recommendations
  
  return uniqueRecommendations;
}

// Calculate how well an intervention matches the current situation
function calculateMatchScore(intervention: any, pattern: any, metrics: any) {
  let score = 0;
  
  // Severity match
  if (pattern.severity === 'critical' && intervention.severity.includes('critical')) score += 3;
  else if (pattern.severity === 'high' && intervention.severity.includes('high')) score += 2;
  else if (intervention.severity.includes(pattern.severity)) score += 1;
  
  // Target metric alignment
  intervention.targets.forEach((target: string) => {
    const metric = metrics.find((m: any) => m.metric_type === target);
    if (metric && metric.value > 0.7) score += 2;
    else if (metric && metric.value > 0.5) score += 1;
  });
  
  // Pattern type match
  if (pattern.type.includes('pilor') && intervention.targets.includes('pilor')) score += 2;
  if (pattern.type.includes('strune') && intervention.targets.includes('strune')) score += 2;
  if (pattern.type.includes('zelith') && intervention.targets.includes('zelith')) score += 3;
  
  return score;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, query, body } = req;
  
  if (method === 'GET') {
    // Get all interventions or specific one
    const interventionId = query.id as string;
    
    if (interventionId) {
      const intervention = INTERVENTIONS[interventionId];
      if (!intervention) {
        return res.status(404).json({
          success: false,
          error: 'Intervention not found'
        });
      }
      return res.status(200).json({
        success: true,
        intervention
      });
    }
    
    // Return all interventions
    return res.status(200).json({
      success: true,
      interventions: Object.values(INTERVENTIONS)
    });
  }
  
  if (method === 'POST') {
    // Recommend interventions based on patterns and metrics
    const { patterns, metrics } = body;
    
    if (!patterns || !metrics) {
      return res.status(400).json({
        success: false,
        error: 'Patterns and metrics required'
      });
    }
    
    const recommendations = recommendInterventions(patterns, metrics);
    
    // Generate action plan
    const actionPlan = {
      immediate: recommendations.filter(r => r.priority === 'immediate'),
      urgent: recommendations.filter(r => r.priority === 'urgent'),
      recommended: recommendations.filter(r => r.priority === 'recommended')
    };
    
    // Calculate estimated impact
    const estimatedImpact = {
      timeToImpact: recommendations[0]?.intervention.duration || 'Unknown',
      primaryTargets: Array.from(new Set(recommendations.flatMap((r: any) => r.intervention.targets))),
      totalCost: recommendations.reduce((sum: number, r: any) => {
        const cost = parseInt(r.intervention.cost.replace(/[$,]/g, ''));
        return sum + cost;
      }, 0),
      confidenceScore: recommendations[0]?.matchScore / 10 || 0
    };
    
    return res.status(200).json({
      success: true,
      recommendations,
      actionPlan,
      estimatedImpact,
      analysisTimestamp: new Date().toISOString()
    });
  }
  
  res.setHeader('Allow', ['GET', 'POST']);
  res.status(405).json({
    success: false,
    error: 'Method not allowed'
  });
}