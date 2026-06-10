/**
 * GPI (Growing Pains Index) Calculator Engine
 * Data source: Notion GPI Dimensions Database (synced December 28, 2024)
 *
 * Calculates organizational physics across 7 dimensions.
 * Scores range from 1 (field state - adaptive) to 10 (particle state - rigid).
 */

import {
  GPIDimension,
  DimensionKey,
  DimensionScore,
  GPIState,
  GPIResult,
  GPIFullResult,
  DiagnosticAnswer,
  QuestionMapping,
} from './gpi-types';
import { calculateIndustryPercentile } from './gpi-industry-benchmarks';

/**
 * GPI Dimension Definitions
 * Weights and descriptions from Notion GPI Dimensions database
 */
export const GPI_DIMENSIONS: Record<DimensionKey, GPIDimension> = {
  DECISION_LATENCY: {
    key: 'DECISION_LATENCY',
    order: 1,
    weight: 0.20,
    label: 'Decision Latency',
    description: 'Time from signal to decision to action',
    lowDescription: 'Real-time/continuous',
    highDescription: 'Annual/generational',
  },
  KNOWLEDGE_LOCATION: {
    key: 'KNOWLEDGE_LOCATION',
    order: 2,
    weight: 0.15,
    label: 'Knowledge Location',
    description: 'Where operational knowledge resides',
    lowDescription: 'Distributed/codified',
    highDescription: 'Institutional black box',
  },
  ERROR_CORRECTION: {
    key: 'ERROR_CORRECTION',
    order: 3,
    weight: 0.20,
    label: 'Error Correction Speed',
    description: 'Time for identifying and fixing mistakes',
    lowDescription: 'Self-correcting',
    highDescription: 'Generational',
  },
  STRUCTURAL_LOCKIN: {
    key: 'STRUCTURAL_LOCKIN',
    order: 4,
    weight: 0.15,
    label: 'Structural Lock-In',
    description: 'Degree to which legacy systems prevent adaptation',
    lowDescription: 'Modular/flexible',
    highDescription: 'Structural paralysis',
  },
  TALENT_FLOW: {
    key: 'TALENT_FLOW',
    order: 5,
    weight: 0.10,
    label: 'Talent Flow',
    description: 'Ease of entry, exit, and mobility',
    lowDescription: 'Highly fluid',
    highDescription: 'Exodus or stagnation',
  },
  CAPITAL_INTENSITY: {
    key: 'CAPITAL_INTENSITY',
    order: 6,
    weight: 0.10,
    label: 'Capital Intensity',
    description: 'Ratio of physical to digital/human',
    lowDescription: 'Purely digital',
    highDescription: 'Infrastructure-locked',
  },
  KNOWLEDGE_VELOCITY: {
    key: 'KNOWLEDGE_VELOCITY',
    order: 7,
    weight: 0.10,
    label: 'Knowledge Velocity',
    description: 'How fast operational knowledge updates',
    lowDescription: 'Real-time algorithmic',
    highDescription: 'Generational transfer',
  },
};

/**
 * Question to Dimension Mapping
 * Maps the 32 diagnostic questions to GPI dimensions
 * fieldAnswer = true means "yes" indicates field state (lower GPI)
 */
export const QUESTION_MAPPING: QuestionMapping[] = [
  // Decision Latency (Q1-5, weight 20%)
  { questionId: 1, dimension: 'DECISION_LATENCY', fieldAnswer: true },
  { questionId: 2, dimension: 'DECISION_LATENCY', fieldAnswer: true },
  { questionId: 3, dimension: 'DECISION_LATENCY', fieldAnswer: true },
  { questionId: 4, dimension: 'DECISION_LATENCY', fieldAnswer: true },
  { questionId: 5, dimension: 'DECISION_LATENCY', fieldAnswer: true },

  // Error Correction Speed (Q6-10, weight 20%)
  { questionId: 6, dimension: 'ERROR_CORRECTION', fieldAnswer: true },
  { questionId: 7, dimension: 'ERROR_CORRECTION', fieldAnswer: true },
  { questionId: 8, dimension: 'ERROR_CORRECTION', fieldAnswer: true },
  { questionId: 9, dimension: 'ERROR_CORRECTION', fieldAnswer: true },
  { questionId: 10, dimension: 'ERROR_CORRECTION', fieldAnswer: true },

  // Knowledge Location (Q11-15, weight 15%)
  { questionId: 11, dimension: 'KNOWLEDGE_LOCATION', fieldAnswer: true },
  { questionId: 12, dimension: 'KNOWLEDGE_LOCATION', fieldAnswer: true },
  { questionId: 13, dimension: 'KNOWLEDGE_LOCATION', fieldAnswer: true },
  { questionId: 14, dimension: 'KNOWLEDGE_LOCATION', fieldAnswer: true },
  { questionId: 15, dimension: 'KNOWLEDGE_LOCATION', fieldAnswer: true },

  // Knowledge Velocity (Q16-19, weight 10%)
  { questionId: 16, dimension: 'KNOWLEDGE_VELOCITY', fieldAnswer: true },
  { questionId: 17, dimension: 'KNOWLEDGE_VELOCITY', fieldAnswer: true },
  { questionId: 18, dimension: 'KNOWLEDGE_VELOCITY', fieldAnswer: true },
  { questionId: 19, dimension: 'KNOWLEDGE_VELOCITY', fieldAnswer: true },

  // Talent Flow (Q20-23, weight 10%)
  { questionId: 20, dimension: 'TALENT_FLOW', fieldAnswer: true },
  { questionId: 21, dimension: 'TALENT_FLOW', fieldAnswer: true },
  { questionId: 22, dimension: 'TALENT_FLOW', fieldAnswer: true },
  { questionId: 23, dimension: 'TALENT_FLOW', fieldAnswer: true },

  // Structural Lock-In (Q24-28, weight 15%)
  { questionId: 24, dimension: 'STRUCTURAL_LOCKIN', fieldAnswer: true },
  { questionId: 25, dimension: 'STRUCTURAL_LOCKIN', fieldAnswer: true },
  { questionId: 26, dimension: 'STRUCTURAL_LOCKIN', fieldAnswer: true },
  { questionId: 27, dimension: 'STRUCTURAL_LOCKIN', fieldAnswer: true },
  { questionId: 28, dimension: 'STRUCTURAL_LOCKIN', fieldAnswer: true },

  // Capital Intensity (Q29-31, weight 10%)
  { questionId: 29, dimension: 'CAPITAL_INTENSITY', fieldAnswer: true },
  { questionId: 30, dimension: 'CAPITAL_INTENSITY', fieldAnswer: true },
  { questionId: 31, dimension: 'CAPITAL_INTENSITY', fieldAnswer: true },
  { questionId: 32, dimension: 'CAPITAL_INTENSITY', fieldAnswer: true },
];

/**
 * Get GPI state classification from score
 */
export function getGPIState(score: number): GPIState {
  if (score <= 3) return 'field';
  if (score <= 6) return 'transitioning';
  return 'particle';
}

/**
 * Get state label for display
 */
export function getStateLabel(state: GPIState): string {
  switch (state) {
    case 'field':
      return 'Field State';
    case 'transitioning':
      return 'Transition State';
    case 'particle':
      return 'Particle State';
  }
}

/**
 * Get state color for UI
 */
export function getStateColor(state: GPIState): string {
  switch (state) {
    case 'field':
      return 'green';
    case 'transitioning':
      return 'yellow';
    case 'particle':
      return 'red';
  }
}

/**
 * Calculate dimension scores from diagnostic answers
 */
export function calculateDimensionScores(answers: DiagnosticAnswer[]): DimensionScore[] {
  const dimensionScores: Record<DimensionKey, { fieldCount: number; totalCount: number }> = {
    DECISION_LATENCY: { fieldCount: 0, totalCount: 0 },
    KNOWLEDGE_LOCATION: { fieldCount: 0, totalCount: 0 },
    ERROR_CORRECTION: { fieldCount: 0, totalCount: 0 },
    STRUCTURAL_LOCKIN: { fieldCount: 0, totalCount: 0 },
    TALENT_FLOW: { fieldCount: 0, totalCount: 0 },
    CAPITAL_INTENSITY: { fieldCount: 0, totalCount: 0 },
    KNOWLEDGE_VELOCITY: { fieldCount: 0, totalCount: 0 },
  };

  // Map answers to dimensions
  for (const answer of answers) {
    const mapping = QUESTION_MAPPING.find((m) => m.questionId === answer.questionId);
    if (mapping) {
      dimensionScores[mapping.dimension].totalCount++;
      // If answer matches field answer, increment field count
      if (answer.answer === mapping.fieldAnswer) {
        dimensionScores[mapping.dimension].fieldCount++;
      }
    }
  }

  // Convert to 1-10 scores
  return Object.entries(dimensionScores).map(([key, counts]) => {
    const dimension = GPI_DIMENSIONS[key as DimensionKey];
    // Particle ratio = answers that DON'T indicate field state
    const particleRatio = counts.totalCount > 0
      ? (counts.totalCount - counts.fieldCount) / counts.totalCount
      : 0.5;
    // Score: 1 = all field, 10 = all particle
    const score = Math.round((1 + particleRatio * 9) * 10) / 10;

    return {
      dimension: key as DimensionKey,
      score,
      label: dimension.label,
      weight: dimension.weight,
    };
  });
}

/**
 * Calculate overall GPI from dimension scores (weighted average)
 */
export function calculateOverallGPI(dimensionScores: DimensionScore[]): number {
  let weightedSum = 0;
  let totalWeight = 0;

  for (const ds of dimensionScores) {
    weightedSum += ds.score * ds.weight;
    totalWeight += ds.weight;
  }

  const overall = totalWeight > 0 ? weightedSum / totalWeight : 5.0;
  return Math.round(overall * 10) / 10;
}

/**
 * Calculate metabolic rate
 * Based on Knowledge Velocity + Error Correction (the "speed" dimensions)
 */
export function calculateMetabolicRate(dimensionScores: DimensionScore[]): number {
  const knowledgeVelocity = dimensionScores.find((d) => d.dimension === 'KNOWLEDGE_VELOCITY')?.score || 5;
  const errorCorrection = dimensionScores.find((d) => d.dimension === 'ERROR_CORRECTION')?.score || 5;

  // Invert: low GPI = high metabolic rate
  const avgSpeed = (knowledgeVelocity + errorCorrection) / 2;
  const metabolicRate = Math.round((11 - avgSpeed) * 10) / 10;

  return Math.max(1, Math.min(10, metabolicRate));
}

/**
 * Calculate plateau risk
 * Based on Structural Lock-In + Decision Latency (the "rigidity" dimensions)
 */
export function calculatePlateauRisk(dimensionScores: DimensionScore[]): {
  risk: number;
  monthsToStagnation: number | null;
} {
  const structuralLockin = dimensionScores.find((d) => d.dimension === 'STRUCTURAL_LOCKIN')?.score || 5;
  const decisionLatency = dimensionScores.find((d) => d.dimension === 'DECISION_LATENCY')?.score || 5;

  // Average of rigidity dimensions
  const avgRigidity = (structuralLockin + decisionLatency) / 2;

  // Risk percentage: 0-100
  const risk = Math.round(avgRigidity * 10);

  // Months to stagnation prediction
  let monthsToStagnation: number | null = null;
  if (avgRigidity >= 7) {
    monthsToStagnation = Math.round(24 - (avgRigidity - 7) * 6); // 7=18mo, 10=0mo
    monthsToStagnation = Math.max(6, monthsToStagnation);
  } else if (avgRigidity >= 5) {
    monthsToStagnation = Math.round(36 - (avgRigidity - 5) * 6); // 5=36mo, 7=24mo
  }

  return { risk, monthsToStagnation };
}

/**
 * Find weakest and strongest dimensions
 */
export function findExtremes(dimensionScores: DimensionScore[]): {
  weakest: DimensionKey;
  strongest: DimensionKey;
} {
  let weakest = dimensionScores[0];
  let strongest = dimensionScores[0];

  for (const ds of dimensionScores) {
    if (ds.score > weakest.score) weakest = ds;
    if (ds.score < strongest.score) strongest = ds;
  }

  return {
    weakest: weakest.dimension,
    strongest: strongest.dimension,
  };
}

/**
 * Get recommended interventions based on dimension scores
 */
export function getRecommendedInterventions(dimensionScores: DimensionScore[]): string[] {
  const recommendations: string[] = [];

  const getScore = (dim: DimensionKey) =>
    dimensionScores.find((d) => d.dimension === dim)?.score || 5;

  // THE NAMING: Decision Latency > 7.0 or Knowledge Location > 6.5
  if (getScore('DECISION_LATENCY') > 7.0 || getScore('KNOWLEDGE_LOCATION') > 6.5) {
    recommendations.push('THE NAMING');
  }

  // THE MAP: Knowledge Location > 6.0 or Talent Flow > 6.5
  if (getScore('KNOWLEDGE_LOCATION') > 6.0 || getScore('TALENT_FLOW') > 6.5) {
    recommendations.push('THE MAP');
  }

  // MARKET SMACKDOWN: Decision Latency > 5.0
  if (getScore('DECISION_LATENCY') > 5.0) {
    recommendations.push('THE MARKET SMACKDOWN');
  }

  // THE OVERRIDE: Structural Lock-In > 7.0
  if (getScore('STRUCTURAL_LOCKIN') > 7.0) {
    recommendations.push('THE OVERRIDE');
  }

  // THE BUILD: Knowledge Velocity > 6.0
  if (getScore('KNOWLEDGE_VELOCITY') > 6.0) {
    recommendations.push('THE BUILD');
  }

  return recommendations;
}

/**
 * Main GPI calculation function
 * Takes diagnostic answers and returns complete GPI result
 */
export function calculateGPI(answers: DiagnosticAnswer[]): GPIResult {
  const dimensionScores = calculateDimensionScores(answers);
  const overall = calculateOverallGPI(dimensionScores);
  const state = getGPIState(overall);
  const metabolicRate = calculateMetabolicRate(dimensionScores);
  const { risk: plateauRisk, monthsToStagnation } = calculatePlateauRisk(dimensionScores);
  const { weakest, strongest } = findExtremes(dimensionScores);

  return {
    overall,
    state,
    dimensions: dimensionScores,
    metabolicRate,
    plateauRisk,
    monthsToStagnation,
    weakestDimension: weakest,
    strongestDimension: strongest,
  };
}

/**
 * Full GPI calculation with industry comparison
 */
export function calculateFullGPI(answers: DiagnosticAnswer[], industry: string): GPIFullResult {
  const baseResult = calculateGPI(answers);
  const industryComparison = calculateIndustryPercentile(baseResult.overall, industry);
  const recommendedInterventions = getRecommendedInterventions(baseResult.dimensions);

  return {
    ...baseResult,
    industryComparison,
    recommendedInterventions,
  };
}

/**
 * Get ordered list of dimensions (by order property)
 */
export function getOrderedDimensions(): GPIDimension[] {
  return Object.values(GPI_DIMENSIONS).sort((a, b) => a.order - b.order);
}

/**
 * Quick GPI estimate from simple inputs (for preview/teaser)
 */
export function quickGPIEstimate(params: {
  decisionSpeed: 'fast' | 'medium' | 'slow';
  changeability: 'high' | 'medium' | 'low';
  knowledgeSharing: 'open' | 'mixed' | 'siloed';
}): number {
  let score = 5; // Start at neutral

  switch (params.decisionSpeed) {
    case 'fast': score -= 1.5; break;
    case 'slow': score += 1.5; break;
  }

  switch (params.changeability) {
    case 'high': score -= 1.5; break;
    case 'low': score += 1.5; break;
  }

  switch (params.knowledgeSharing) {
    case 'open': score -= 1; break;
    case 'siloed': score += 1; break;
  }

  return Math.max(1, Math.min(10, Math.round(score * 10) / 10));
}
