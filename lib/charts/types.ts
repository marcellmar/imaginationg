/**
 * GPI Chart Types
 * Shared types for chart generation
 */

export type DimensionKey =
  | 'DECISION_LATENCY'
  | 'KNOWLEDGE_LOCATION'
  | 'ERROR_CORRECTION'
  | 'STRUCTURAL_LOCKIN'
  | 'TALENT_FLOW'
  | 'CAPITAL_INTENSITY'
  | 'KNOWLEDGE_VELOCITY';

export interface DimensionScore {
  dimension: DimensionKey;
  score: number;
}

export interface CompanyData {
  name: string;
  ticker?: string;
  scores: Record<DimensionKey, number>;
  gpi: number;
  state: 'Field' | 'Transitioning' | 'Particle';
}

export interface ChartOptions {
  width?: number;
  height?: number;
  showLabels?: boolean;
  showValues?: boolean;
  showFooter?: boolean;
  theme?: 'dark' | 'light';
}

export interface ExportOptions {
  format: 'png' | 'svg' | 'webp' | 'avif';
  quality?: number; // 1-100 for lossy formats
  scale?: number;   // 1x, 2x, 3x for resolution
}

export const DIMENSIONS: { key: DimensionKey; label: string; short: string; weight: number }[] = [
  { key: 'DECISION_LATENCY', label: 'Decision Latency', short: 'Decision', weight: 0.20 },
  { key: 'KNOWLEDGE_LOCATION', label: 'Knowledge Location', short: 'Knowledge', weight: 0.15 },
  { key: 'ERROR_CORRECTION', label: 'Error Correction', short: 'Error Fix', weight: 0.20 },
  { key: 'STRUCTURAL_LOCKIN', label: 'Structural Lock-In', short: 'Lock-In', weight: 0.15 },
  { key: 'TALENT_FLOW', label: 'Talent Flow', short: 'Talent', weight: 0.10 },
  { key: 'CAPITAL_INTENSITY', label: 'Capital Intensity', short: 'Capital', weight: 0.10 },
  { key: 'KNOWLEDGE_VELOCITY', label: 'Knowledge Velocity', short: 'Velocity', weight: 0.10 },
];

// Imagination G color palette
export const COLORS = {
  // Backgrounds
  bg: '#000000',
  bgSecondary: '#18181b',
  bgTertiary: '#27272a',

  // Text
  text: '#ffffff',
  textMuted: '#a1a1aa',
  textDim: '#71717a',

  // Borders
  border: '#3f3f46',
  borderLight: '#52525b',

  // State colors
  field: '#22c55e',
  fieldDark: '#16a34a',
  transitioning: '#eab308',
  transitioningDark: '#ca8a04',
  particle: '#ef4444',
  particleDark: '#dc2626',

  // Accent
  accent: '#ef4444',
  accentDark: '#dc2626',
} as const;

export function getScoreColor(score: number): string {
  if (score <= 3) return COLORS.field;
  if (score <= 6) return COLORS.transitioning;
  return COLORS.particle;
}

export function getStateColor(state: 'Field' | 'Transitioning' | 'Particle'): string {
  switch (state) {
    case 'Field': return COLORS.field;
    case 'Transitioning': return COLORS.transitioning;
    case 'Particle': return COLORS.particle;
  }
}

export function calculateGPI(scores: Record<DimensionKey, number>): number {
  return DIMENSIONS.reduce((sum, dim) => sum + (scores[dim.key] || 5) * dim.weight, 0);
}

export function getState(gpi: number): 'Field' | 'Transitioning' | 'Particle' {
  if (gpi <= 3) return 'Field';
  if (gpi < 7) return 'Transitioning';
  return 'Particle';
}
