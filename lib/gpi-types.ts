/**
 * GPI (Growing Pains Index) Type Definitions
 * Data source: Notion GPI Databases
 */

export type GPIState = 'field' | 'transitioning' | 'particle';

export type DimensionKey =
  | 'DECISION_LATENCY'
  | 'KNOWLEDGE_LOCATION'
  | 'ERROR_CORRECTION'
  | 'STRUCTURAL_LOCKIN'
  | 'TALENT_FLOW'
  | 'CAPITAL_INTENSITY'
  | 'KNOWLEDGE_VELOCITY';

export interface GPIDimension {
  key: DimensionKey;
  order: number;
  weight: number;
  label: string;
  description: string;
  lowDescription: string;  // Score 1-2 (Field)
  highDescription: string; // Score 9-10 (Particle)
}

export interface DimensionScore {
  dimension: DimensionKey;
  score: number;
  label: string;
  weight: number;
}

export interface GPIResult {
  overall: number;
  state: GPIState;
  dimensions: DimensionScore[];
  metabolicRate: number;
  plateauRisk: number;
  monthsToStagnation: number | null;
  weakestDimension: DimensionKey;
  strongestDimension: DimensionKey;
}

export interface IndustryBenchmark {
  industry: string;
  gpi: number;
  state: GPIState;
}

export interface IndustryComparison {
  industry: string;
  industryAverage: number;
  yourScore: number;
  percentile: number;
  position: 'above' | 'below' | 'average';
}

export interface GPIFullResult extends GPIResult {
  industryComparison: IndustryComparison;
  recommendedInterventions: string[];
}

export interface DiagnosticAnswer {
  questionId: number;
  answer: boolean; // true = "yes/field-like", false = "no/particle-like"
}

export interface QuestionMapping {
  questionId: number;
  dimension: DimensionKey;
  fieldAnswer: boolean; // which answer indicates field state
}
