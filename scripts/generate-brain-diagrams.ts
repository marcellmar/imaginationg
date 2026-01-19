#!/usr/bin/env npx tsx

/**
 * Generate GPI Diagrams for Marcus's Brain
 * Professional diagrams using Satori (matching chart style)
 */

import * as fs from 'fs';
import * as path from 'path';
import {
  generateSpectrumDiagram,
  generateDimensionsDiagram,
  generateFormulaDiagram,
  generateDealDiagram,
  generateVersusDiagram,
  generateSpiralDiagram,
  generateHeatmapDiagram,
  generateGaugeDiagram,
  generateQuoteCard,
  generateIndustryMap,
  generateTrajectoryDiagram,
} from '../lib/charts/satori-diagrams';
import { svgToPng } from '../lib/charts/satori-generator';

// ============================================
// DATA
// ============================================

const SPECTRUM_DATA = {
  field: [
    { name: 'Tesla', gpi: 2.85 },
    { name: 'Netflix', gpi: 3.25 },
  ],
  transitioning: [
    { name: 'BYD', gpi: 3.45 },
    { name: 'Amazon', gpi: 3.55 },
    { name: 'Aldi', gpi: 3.55 },
    { name: 'Bain', gpi: 4.2 },
    { name: 'BCG', gpi: 4.35 },
    { name: 'McKinsey', gpi: 4.6 },
    { name: 'JLL', gpi: 5.5 },
    { name: 'CBRE', gpi: 6.4 },
    { name: 'UPS', gpi: 6.8 },
    { name: 'Comcast', gpi: 6.95 },
  ],
  particle: [
    { name: 'WBD', gpi: 7.05 },
  ],
};

const NETFLIX_WBD_DEAL = {
  acquirer: {
    name: 'Netflix',
    gpi: 3.25,
    traits: ['Field State', 'Culture Infrastructure', 'No Debt'],
  },
  target: {
    name: 'Warner Bros. Discovery',
    gpi: 7.05,
    traits: ['Particle State', 'Debt-Driven', 'Brain Drain'],
  },
  acquiring: [
    'Warner Bros. Pictures',
    'HBO + HBO Max',
    'DC Studios',
    'Content Libraries',
  ],
  spinningOff: [
    'CNN',
    'Discovery Networks',
    'TNT Sports',
    '$33B Debt',
  ],
  delta: 3.8,
};

const AMAZON_VS_UPS = {
  company1: {
    name: 'Amazon',
    gpi: 3.55,
    traits: ['Two-Pizza Teams', 'Single-Threaded Ownership', 'Ruthless Product Killing'],
    outcome: '0% → 28% delivery share in 10 years',
  },
  company2: {
    name: 'UPS',
    gpi: 6.8,
    traits: ['28 Committees', '5-Year Union Contract', '119 Years of Culture'],
    outcome: 'Contracting market share',
  },
  insight: 'Amazon built its own logistics network while UPS was still deciding what to do about Amazon.',
};

const CONSULTING_COMPARISON = {
  company1: {
    name: 'Bain & Company',
    gpi: 4.2,
    traits: ['Private Partnership', 'Results-Focused Culture', 'True North Values'],
    outcome: 'Highest alumni loyalty',
  },
  company2: {
    name: 'McKinsey',
    gpi: 4.6,
    traits: ['700 Senior Partners', 'Consensus Politics', '$650M Opioid Settlement'],
    outcome: 'Sells transformation it struggles to achieve',
  },
  insight: 'Both firms advise others on transformation while navigating their own partnership calcification.',
};

const TESLA_VS_BYD = {
  company1: {
    name: 'Tesla',
    gpi: 2.85,
    traits: ['CEO-Driven Speed', 'Vertical Integration', 'Software-First'],
    outcome: 'Market leader in premium EVs',
  },
  company2: {
    name: 'BYD',
    gpi: 3.45,
    traits: ['Battery Expertise', 'Manufacturing Scale', 'China-First'],
    outcome: 'Global volume leader 2024',
  },
  insight: 'Both operate in field state. Competition is about execution speed, not organizational drag.',
};

// Heatmap data
const HEATMAP_DATA = {
  companies: [
    { name: 'Tesla', scores: { DL: 2, EC: 2, KL: 3, SL: 4, TF: 3, CI: 5, KV: 2 }, gpi: 2.85 },
    { name: 'Netflix', scores: { DL: 3, EC: 3, KL: 3, SL: 4, TF: 3, CI: 3, KV: 4 }, gpi: 3.25 },
    { name: 'Amazon', scores: { DL: 3, EC: 3, KL: 3, SL: 4, TF: 4, CI: 6, KV: 3 }, gpi: 3.55 },
    { name: 'McKinsey', scores: { DL: 5, EC: 6, KL: 4, SL: 5, TF: 5, CI: 3, KV: 4 }, gpi: 4.6 },
    { name: 'UPS', scores: { DL: 7, EC: 6, KL: 6, SL: 8, TF: 6, CI: 9, KV: 6 }, gpi: 6.8 },
    { name: 'Comcast', scores: { DL: 7, EC: 6, KL: 6, SL: 9, TF: 6, CI: 9, KV: 6 }, gpi: 6.95 },
    { name: 'WBD', scores: { DL: 7, EC: 6, KL: 6, SL: 9, TF: 7, CI: 9, KV: 6 }, gpi: 7.05 },
  ],
};

// Gauge data
const GAUGE_DATA = [
  { name: 'Netflix', ticker: 'NFLX', gpi: 3.25, trend: 'stable' as const },
  { name: 'Amazon', ticker: 'AMZN', gpi: 3.55, trend: 'stable' as const },
  { name: 'UPS', ticker: 'UPS', gpi: 6.8, trend: 'declining' as const },
];

// Quote data
const QUOTES = [
  {
    quote: 'Amazon built its own logistics network while UPS was still deciding what to do about Amazon.',
    company: 'Amazon vs UPS',
    context: 'GPI Delta Analysis',
  },
  {
    quote: 'McKinsey sells transformation it has not achieved itself.',
    company: 'McKinsey',
    gpi: 4.6,
    context: 'The Partnership Paradox',
  },
  {
    quote: 'Two particle-state companies merging create a larger particle, not a field.',
    context: 'M&A Prediction Framework',
  },
];

// Industry data
const INDUSTRY_DATA = {
  industries: [
    {
      name: 'Streaming & Media',
      companies: [
        { name: 'Netflix', gpi: 3.25 },
        { name: 'Comcast', gpi: 6.95 },
        { name: 'WBD', gpi: 7.05 },
      ],
    },
    {
      name: 'Consulting',
      companies: [
        { name: 'Bain', gpi: 4.2 },
        { name: 'BCG', gpi: 4.35 },
        { name: 'McKinsey', gpi: 4.6 },
      ],
    },
    {
      name: 'Logistics',
      companies: [
        { name: 'Amazon', gpi: 3.55 },
        { name: 'UPS', gpi: 6.8 },
      ],
    },
    {
      name: 'Electric Vehicles',
      companies: [
        { name: 'Tesla', gpi: 2.85 },
        { name: 'BYD', gpi: 3.45 },
      ],
    },
  ],
};

// Trajectory data
const NETFLIX_TRAJECTORY = {
  company: 'Netflix',
  current: 3.25,
  projections: [
    { year: '2027', gpi: 3.8, event: 'WBD integration challenges' },
    { year: '2028', gpi: 3.5, event: 'Integration stabilizes' },
    { year: '2029', gpi: 3.5, event: 'New equilibrium' },
  ],
};

// ============================================
// HELPERS
// ============================================

async function ensureDir(dir: string) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

async function saveDiagram(svg: string, outputPath: string, scale: number = 3) {
  const pngBuffer = svgToPng(svg, scale);
  fs.writeFileSync(outputPath, pngBuffer);
  console.log(`  Saved: ${outputPath}`);
}

// ============================================
// MAIN
// ============================================

async function main() {
  const outputDir = process.argv[2] || '/Users/marcellmar/Documents/projects/marcus-gpi-brain/gpi-framework/active-spirals/constructed-artifacts/charts/diagrams';

  await ensureDir(outputDir);

  console.log('Generating GPI Diagrams (Satori)...\n');

  // Framework diagrams
  console.log('=== FRAMEWORK DIAGRAMS ===');

  console.log('[Diagram] GPI Company Spectrum');
  const spectrum = await generateSpectrumDiagram(SPECTRUM_DATA);
  await saveDiagram(spectrum.svg, path.join(outputDir, 'gpi-spectrum.png'));

  console.log('[Diagram] GPI Dimensions');
  const dimensions = await generateDimensionsDiagram();
  await saveDiagram(dimensions.svg, path.join(outputDir, 'gpi-dimensions.png'));

  console.log('[Diagram] GPI Formula');
  const formula = await generateFormulaDiagram();
  await saveDiagram(formula.svg, path.join(outputDir, 'gpi-formula.png'));

  console.log('[Diagram] Transformation Spiral');
  const spiral = await generateSpiralDiagram();
  await saveDiagram(spiral.svg, path.join(outputDir, 'transformation-spiral.png'));

  // Deal diagrams
  console.log('\n=== DEAL DIAGRAMS ===');

  console.log('[Diagram] Netflix + WBD Deal');
  const deal = await generateDealDiagram(NETFLIX_WBD_DEAL);
  await saveDiagram(deal.svg, path.join(outputDir, 'netflix-wbd-deal.png'));

  // Versus diagrams
  console.log('\n=== VERSUS DIAGRAMS ===');

  console.log('[Diagram] Amazon vs UPS');
  const amazonUps = await generateVersusDiagram(AMAZON_VS_UPS);
  await saveDiagram(amazonUps.svg, path.join(outputDir, 'amazon-vs-ups-story.png'));

  console.log('[Diagram] Bain vs McKinsey');
  const consulting = await generateVersusDiagram(CONSULTING_COMPARISON);
  await saveDiagram(consulting.svg, path.join(outputDir, 'bain-vs-mckinsey.png'));

  console.log('[Diagram] Tesla vs BYD');
  const evs = await generateVersusDiagram(TESLA_VS_BYD);
  await saveDiagram(evs.svg, path.join(outputDir, 'tesla-vs-byd-story.png'));

  // Heatmap
  console.log('\n=== HEATMAP ===');
  console.log('[Diagram] GPI Heatmap');
  const heatmap = await generateHeatmapDiagram(HEATMAP_DATA);
  await saveDiagram(heatmap.svg, path.join(outputDir, 'gpi-heatmap.png'));

  // Gauges
  console.log('\n=== GAUGES ===');
  for (const gauge of GAUGE_DATA) {
    console.log(`[Gauge] ${gauge.name}`);
    const g = await generateGaugeDiagram(gauge);
    await saveDiagram(g.svg, path.join(outputDir, `gauge-${gauge.name.toLowerCase()}.png`));
  }

  // Quote cards
  console.log('\n=== QUOTE CARDS ===');
  for (let i = 0; i < QUOTES.length; i++) {
    console.log(`[Quote] ${i + 1}`);
    const q = await generateQuoteCard(QUOTES[i]);
    await saveDiagram(q.svg, path.join(outputDir, `quote-${i + 1}.png`));
  }

  // Industry map
  console.log('\n=== INDUSTRY MAP ===');
  console.log('[Diagram] Industry Map');
  const industry = await generateIndustryMap(INDUSTRY_DATA);
  await saveDiagram(industry.svg, path.join(outputDir, 'industry-map.png'));

  // Trajectory
  console.log('\n=== TRAJECTORY ===');
  console.log('[Diagram] Netflix Trajectory');
  const trajectory = await generateTrajectoryDiagram(NETFLIX_TRAJECTORY);
  await saveDiagram(trajectory.svg, path.join(outputDir, 'netflix-trajectory.png'));

  console.log('\n=== SUMMARY ===');
  console.log('Generated 18+ professional diagrams');
  console.log(`Output: ${outputDir}`);
}

main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
