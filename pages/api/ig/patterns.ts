import type { NextApiRequest, NextApiResponse } from 'next';

// Pattern detection algorithms for each IG concept
interface Pattern {
  id: string;
  type: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  confidence: number;
  detected_at: string;
  evidence: any;
  recommendations: string[];
  ig_concepts: string[];
}

// Nexel type detection
function detectNexelType(metrics: any): string {
  const decisionVelocity = metrics.decision_velocity || 0;
  const resourceReallocation = metrics.resource_reallocation || 0;
  const approvalLayers = metrics.approval_layers || 0;
  
  const piercerScore = (decisionVelocity * resourceReallocation) / (approvalLayers + 1);
  const routerScore = metrics.partnership_rate || 0;
  const absorberScore = (1 - metrics.change_completion_rate) || 0;
  const amplifierScore = metrics.crisis_performance_delta || 0;
  
  const scores: Record<string, number> = {
    piercer: piercerScore,
    router: routerScore,
    absorber: absorberScore,
    amplifier: amplifierScore
  };

  return Object.entries(scores).reduce((a, b) => scores[a[0]] > scores[b[0]] ? a : b)[0];
}

// Morrin state detection
function detectMorrinState(metrics: any): { state: string; confidence: number } {
  const resourceCommitment = metrics.resource_burn_rate || 0;
  const decisionReversal = metrics.decision_reversal_rate || 0;
  const strategicPivots = metrics.strategic_pivot_frequency || 0;
  
  const morrinScore = (resourceCommitment * (1 - decisionReversal)) / (strategicPivots + 1);
  
  return {
    state: morrinScore > 0.6 ? 'true-morrin' : 'pre-morrin',
    confidence: Math.min(0.95, Math.abs(morrinScore - 0.5) * 2)
  };
}

// Strune pattern detection
function detectStrunePatterns(metrics: any): Pattern[] {
  const patterns: Pattern[] = [];
  
  // Process Strune
  if (metrics.process_steps_added > 5 || metrics.approval_time_increase > 0.1) {
    patterns.push({
      id: 'strune-process-' + Date.now(),
      type: 'process_strune',
      severity: metrics.process_steps_added > 10 ? 'high' : 'medium',
      confidence: 0.85,
      detected_at: new Date().toISOString(),
      evidence: {
        process_steps_added: metrics.process_steps_added,
        approval_time_increase: metrics.approval_time_increase,
        compliance_cost_ratio: metrics.compliance_cost_ratio
      },
      recommendations: [
        'Conduct process audit to identify redundancies',
        'Implement First Blood Build to cut through complexity',
        'Establish "process sunset" policy'
      ],
      ig_concepts: ['strune', 'quorr']
    });
  }
  
  // Cultural Strune
  if (metrics.meeting_effectiveness < 0.4 || metrics.consensus_participants > 5) {
    patterns.push({
      id: 'strune-cultural-' + Date.now(),
      type: 'cultural_strune',
      severity: metrics.internal_nps_decline > 5 ? 'critical' : 'medium',
      confidence: 0.78,
      detected_at: new Date().toISOString(),
      evidence: {
        meeting_effectiveness: metrics.meeting_effectiveness,
        consensus_participants: metrics.consensus_participants,
        culture_initiatives_concurrent: metrics.culture_initiatives
      },
      recommendations: [
        'Implement decision-making framework with clear ownership',
        'Reduce meeting attendees to essential participants only',
        'Create "culture of action" initiative'
      ],
      ig_concepts: ['strune', 'kithara']
    });
  }
  
  return patterns;
}

// Pilor loop detection
function detectPilorLoops(metrics: any, historicalData: any[]): Pattern[] {
  const patterns: Pattern[] = [];
  
  // Check for repetitive failures
  const failurePatterns = analyzeFailureRepetition(historicalData);
  
  if (failurePatterns.similarity > 0.7) {
    patterns.push({
      id: 'pilor-' + failurePatterns.type + '-' + Date.now(),
      type: 'pilor_loop_' + failurePatterns.type,
      severity: failurePatterns.depth > 3 ? 'critical' : 'high',
      confidence: failurePatterns.similarity,
      detected_at: new Date().toISOString(),
      evidence: {
        recursion_depth: failurePatterns.depth,
        pattern_similarity: failurePatterns.similarity,
        repeated_solutions: failurePatterns.repeatedSolutions
      },
      recommendations: [
        'Schedule emergency "The Naming" session',
        'Break pattern with completely different approach',
        'Bring in external perspective to see blind spots',
        'Implement 30-Day Drift Break protocol'
      ],
      ig_concepts: ['pilor', 'strune']
    });
  }
  
  return patterns;
}

// Kithara state detection
function detectKitharaState(metrics: any): Pattern | null {
  const publicPrivateDelta = Math.abs(metrics.public_sentiment - metrics.private_sentiment);
  const agreementRate = metrics.meeting_agreement_rate || 0;
  const anonymousFeedbackDelta = metrics.anonymous_feedback_delta || 0;
  
  if (publicPrivateDelta > 0.3 || agreementRate > 0.95) {
    return {
      id: 'kithara-' + Date.now(),
      type: 'false_harmony',
      severity: publicPrivateDelta > 0.5 ? 'critical' : 'high',
      confidence: 0.82,
      detected_at: new Date().toISOString(),
      evidence: {
        sentiment_gap: publicPrivateDelta,
        agreement_rate: agreementRate,
        anonymous_delta: anonymousFeedbackDelta
      },
      recommendations: [
        'Create safe spaces for dissent',
        'Implement anonymous feedback channels',
        'Reward constructive conflict in public forums',
        'Leadership modeling of vulnerability'
      ],
      ig_concepts: ['kithara', 'pilor']
    };
  }
  
  return null;
}

// Zelith proximity calculation
function calculateZelithProximity(metrics: any): Pattern | null {
  const externalPressure = metrics.market_pressure || 0;
  const internalStrain = metrics.employee_turnover || 0;
  const resourceDepletion = metrics.burn_rate || 0;
  const adaptationCapacity = metrics.change_success_rate || 1;
  
  const zelithScore = (externalPressure * internalStrain * resourceDepletion) / adaptationCapacity;
  
  if (zelithScore > 0.6) {
    return {
      id: 'zelith-' + Date.now(),
      type: 'zelith_approach',
      severity: zelithScore > 0.8 ? 'critical' : 'high',
      confidence: 0.88,
      detected_at: new Date().toISOString(),
      evidence: {
        proximity_score: zelithScore,
        pressure_sources: {
          external: externalPressure,
          internal: internalStrain,
          resources: resourceDepletion
        },
        time_to_zelith_days: Math.round(180 * (1 - zelithScore))
      },
      recommendations: [
        'Immediate leadership alignment session',
        'Resource reallocation to core functions',
        'Prepare transformation plan',
        'Clear communication about coming changes'
      ],
      ig_concepts: ['zelith', 'morrin']
    };
  }
  
  return null;
}

// Helper function to analyze failure repetition
function analyzeFailureRepetition(historicalData: any[]) {
  // Simplified pattern matching - in production would use ML
  const recentFailures = historicalData.slice(-5);
  let similarity = 0;
  let repeatedSolutions = 0;
  
  if (recentFailures.length >= 2) {
    // Compare failure patterns
    for (let i = 1; i < recentFailures.length; i++) {
      if (recentFailures[i].solution_type === recentFailures[i-1].solution_type) {
        repeatedSolutions++;
      }
    }
    similarity = repeatedSolutions / (recentFailures.length - 1);
  }
  
  return {
    similarity,
    depth: repeatedSolutions,
    type: recentFailures[0]?.area || 'general',
    repeatedSolutions
  };
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: 'Method not allowed' });
  }
  
  try {
    const { metrics, historicalData = [] } = req.body;
    
    if (!metrics) {
      return res.status(400).json({ error: 'Metrics data required' });
    }
    
    const patterns: Pattern[] = [];
    
    // Run all pattern detection algorithms
    
    // Nexel type
    const nexelType = detectNexelType(metrics);
    
    // Morrin state
    const morrinState = detectMorrinState(metrics);
    if (morrinState.state === 'pre-morrin' && morrinState.confidence > 0.7) {
      patterns.push({
        id: 'morrin-pre-' + Date.now(),
        type: 'pre_morrin_state',
        severity: 'medium',
        confidence: morrinState.confidence,
        detected_at: new Date().toISOString(),
        evidence: { state: morrinState.state },
        recommendations: [
          'Commit to single strategic direction',
          'Close alternative options explicitly',
          'Accelerate resource deployment'
        ],
        ig_concepts: ['morrin']
      });
    }
    
    // Strune patterns
    const strunePatterns = detectStrunePatterns(metrics);
    patterns.push(...strunePatterns);
    
    // Pilor loops
    const pilorLoops = detectPilorLoops(metrics, historicalData);
    patterns.push(...pilorLoops);
    
    // Kithara state
    const kitharaPattern = detectKitharaState(metrics);
    if (kitharaPattern) patterns.push(kitharaPattern);
    
    // Zelith proximity
    const zelithPattern = calculateZelithProximity(metrics);
    if (zelithPattern) patterns.push(zelithPattern);
    
    // Sort by severity
    patterns.sort((a, b) => {
      const severityOrder = { critical: 4, high: 3, medium: 2, low: 1 };
      return severityOrder[b.severity] - severityOrder[a.severity];
    });
    
    res.status(200).json({
      success: true,
      nexel_type: nexelType,
      patterns,
      analysis_timestamp: new Date().toISOString()
    });
    
  } catch (error) {
    console.error('Pattern detection error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to detect patterns'
    });
  }
}