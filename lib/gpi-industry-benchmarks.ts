/**
 * GPI Industry Benchmarks
 * Data source: Notion GPI Analyses Database (synced December 28, 2024)
 */

import { IndustryBenchmark, GPIState, IndustryComparison } from './gpi-types';

// Industry benchmarks from Notion GPI Analyses database
export const INDUSTRY_BENCHMARKS: Record<string, IndustryBenchmark> = {
  'Technology/Software': {
    industry: 'Technology/Software',
    gpi: 1.5,
    state: 'field',
  },
  'Professional Services': {
    industry: 'Professional Services',
    gpi: 3.0,
    state: 'field',
  },
  'Shipping': {
    industry: 'Shipping',
    gpi: 3.9,
    state: 'field',
  },
  'Banking': {
    industry: 'Banking',
    gpi: 5.1,
    state: 'transitioning',
  },
  'Financial Services': {
    industry: 'Financial Services',
    gpi: 5.5,
    state: 'transitioning',
  },
  'Retail': {
    industry: 'Retail',
    gpi: 5.5,
    state: 'transitioning',
  },
  'Logistics/Transportation': {
    industry: 'Logistics/Transportation',
    gpi: 6.0,
    state: 'transitioning',
  },
  'Manufacturing': {
    industry: 'Manufacturing',
    gpi: 6.0,
    state: 'transitioning',
  },
  'Healthcare': {
    industry: 'Healthcare',
    gpi: 6.5,
    state: 'transitioning',
  },
  'Healthcare IT': {
    industry: 'Healthcare IT',
    gpi: 7.3,
    state: 'particle',
  },
  'Education': {
    industry: 'Education',
    gpi: 7.5,
    state: 'particle',
  },
  'Pharmaceuticals': {
    industry: 'Pharmaceuticals',
    gpi: 7.5,
    state: 'transitioning',
  },
  'Freight Brokerage': {
    industry: 'Freight Brokerage',
    gpi: 7.7,
    state: 'particle',
  },
  'Construction/Real Estate': {
    industry: 'Construction/Real Estate',
    gpi: 8.0,
    state: 'particle',
  },
  'Government/Public Sector': {
    industry: 'Government/Public Sector',
    gpi: 9.0,
    state: 'particle',
  },
};

// Company examples from Notion GPI Analyses (for validation/display)
export const COMPANY_EXAMPLES: Record<string, { gpi: number; state: GPIState; insight: string }> = {
  'Maersk': {
    gpi: 3.9,
    state: 'field',
    insight: 'Vertical integration success in shipping',
  },
  'Bradesco': {
    gpi: 5.1,
    state: 'transitioning',
    insight: 'Digital transformation underway in Brazilian banking',
  },
  'UPS': {
    gpi: 6.0,
    state: 'transitioning',
    insight: 'Service vs wage pressure, union dynamics',
  },
  'Epic Systems': {
    gpi: 7.3,
    state: 'particle',
    insight: '35% US hospital market, high structural lock-in',
  },
  'C.H. Robinson': {
    gpi: 7.7,
    state: 'particle',
    insight: 'Gap monetization, broker margin extraction',
  },
};

/**
 * Get list of all industries for dropdown selection
 */
export function getIndustryList(): string[] {
  return Object.keys(INDUSTRY_BENCHMARKS).sort((a, b) => {
    return INDUSTRY_BENCHMARKS[a].gpi - INDUSTRY_BENCHMARKS[b].gpi;
  });
}

/**
 * Get benchmark for a specific industry
 */
export function getIndustryBenchmark(industry: string): IndustryBenchmark | null {
  return INDUSTRY_BENCHMARKS[industry] || null;
}

/**
 * Calculate percentile ranking within an industry
 * Lower GPI = better (more field-like), so we invert the comparison
 */
export function calculateIndustryPercentile(yourGPI: number, industry: string): IndustryComparison {
  const benchmark = INDUSTRY_BENCHMARKS[industry];

  if (!benchmark) {
    // Default to overall average if industry not found
    const avgGPI = 5.5;
    return {
      industry: 'All Industries',
      industryAverage: avgGPI,
      yourScore: yourGPI,
      percentile: calculatePercentileFromDiff(yourGPI, avgGPI),
      position: yourGPI < avgGPI ? 'above' : yourGPI > avgGPI ? 'below' : 'average',
    };
  }

  const percentile = calculatePercentileFromDiff(yourGPI, benchmark.gpi);

  return {
    industry: benchmark.industry,
    industryAverage: benchmark.gpi,
    yourScore: yourGPI,
    percentile,
    position: yourGPI < benchmark.gpi ? 'above' : yourGPI > benchmark.gpi ? 'below' : 'average',
  };
}

/**
 * Calculate percentile based on difference from benchmark
 * Being lower than benchmark = higher percentile (better)
 */
function calculatePercentileFromDiff(yourGPI: number, benchmarkGPI: number): number {
  const diff = benchmarkGPI - yourGPI;
  // Each 1.0 point difference = ~15 percentile points
  const percentile = 50 + (diff * 15);
  return Math.min(99, Math.max(1, Math.round(percentile)));
}

/**
 * Get industries ranked by GPI (lowest/best first)
 */
export function getIndustryRankings(): IndustryBenchmark[] {
  return Object.values(INDUSTRY_BENCHMARKS).sort((a, b) => a.gpi - b.gpi);
}
