#!/usr/bin/env npx tsx

/**
 * Generate GPI Charts for Marcus's Brain
 * Reads company data from GPI analyses and generates professional charts
 */

import * as fs from 'fs';
import * as path from 'path';
import {
  generateRadarChart,
  generateComparisonChart,
  generateScoreCard,
  svgToPng,
} from '../lib/charts/satori-generator';
import { CompanyData } from '../lib/charts/types';

// ============================================
// BRAIN COMPANY DATA (from GPI snapshots)
// ============================================

const BRAIN_COMPANIES: Record<string, CompanyData> = {
  // Field State (1.0-3.0)
  netflix: {
    name: 'Netflix',
    ticker: 'NFLX',
    scores: {
      DECISION_LATENCY: 3,
      KNOWLEDGE_LOCATION: 3,
      ERROR_CORRECTION: 3,
      STRUCTURAL_LOCKIN: 4,
      TALENT_FLOW: 3,
      CAPITAL_INTENSITY: 3,
      KNOWLEDGE_VELOCITY: 4,
    },
    gpi: 3.25,
    state: 'Field',
  },

  // Transitioning (3.1-6.9)
  amazon: {
    name: 'Amazon',
    ticker: 'AMZN',
    scores: {
      DECISION_LATENCY: 3,
      KNOWLEDGE_LOCATION: 3,
      ERROR_CORRECTION: 3,
      STRUCTURAL_LOCKIN: 4,
      TALENT_FLOW: 4,
      CAPITAL_INTENSITY: 6,
      KNOWLEDGE_VELOCITY: 3,
    },
    gpi: 3.55,
    state: 'Transitioning',
  },

  mckinsey: {
    name: 'McKinsey',
    ticker: 'Private',
    scores: {
      DECISION_LATENCY: 5,
      KNOWLEDGE_LOCATION: 4,
      ERROR_CORRECTION: 6,
      STRUCTURAL_LOCKIN: 5,
      TALENT_FLOW: 5,
      CAPITAL_INTENSITY: 3,
      KNOWLEDGE_VELOCITY: 4,
    },
    gpi: 4.6,
    state: 'Transitioning',
  },

  bain: {
    name: 'Bain & Company',
    ticker: 'Private',
    scores: {
      DECISION_LATENCY: 4,
      KNOWLEDGE_LOCATION: 4,
      ERROR_CORRECTION: 5,
      STRUCTURAL_LOCKIN: 4,
      TALENT_FLOW: 5,
      CAPITAL_INTENSITY: 3,
      KNOWLEDGE_VELOCITY: 4,
    },
    gpi: 4.2,
    state: 'Transitioning',
  },

  bcg: {
    name: 'BCG',
    ticker: 'Private',
    scores: {
      DECISION_LATENCY: 4,
      KNOWLEDGE_LOCATION: 4,
      ERROR_CORRECTION: 5,
      STRUCTURAL_LOCKIN: 5,
      TALENT_FLOW: 5,
      CAPITAL_INTENSITY: 3,
      KNOWLEDGE_VELOCITY: 4,
    },
    gpi: 4.35,
    state: 'Transitioning',
  },

  jll: {
    name: 'JLL',
    ticker: 'JLL',
    scores: {
      DECISION_LATENCY: 5,
      KNOWLEDGE_LOCATION: 5,
      ERROR_CORRECTION: 5,
      STRUCTURAL_LOCKIN: 6,
      TALENT_FLOW: 6,
      CAPITAL_INTENSITY: 5,
      KNOWLEDGE_VELOCITY: 5,
    },
    gpi: 5.5,
    state: 'Transitioning',
  },

  cbre: {
    name: 'CBRE',
    ticker: 'CBRE',
    scores: {
      DECISION_LATENCY: 6,
      KNOWLEDGE_LOCATION: 6,
      ERROR_CORRECTION: 6,
      STRUCTURAL_LOCKIN: 7,
      TALENT_FLOW: 7,
      CAPITAL_INTENSITY: 6,
      KNOWLEDGE_VELOCITY: 6,
    },
    gpi: 6.4,
    state: 'Transitioning',
  },

  ups: {
    name: 'UPS',
    ticker: 'UPS',
    scores: {
      DECISION_LATENCY: 7,
      KNOWLEDGE_LOCATION: 6,
      ERROR_CORRECTION: 6,
      STRUCTURAL_LOCKIN: 8,
      TALENT_FLOW: 6,
      CAPITAL_INTENSITY: 9,
      KNOWLEDGE_VELOCITY: 6,
    },
    gpi: 6.8,
    state: 'Transitioning',
  },

  comcast: {
    name: 'Comcast',
    ticker: 'CMCSA',
    scores: {
      DECISION_LATENCY: 7,
      KNOWLEDGE_LOCATION: 6,
      ERROR_CORRECTION: 6,
      STRUCTURAL_LOCKIN: 9,
      TALENT_FLOW: 6,
      CAPITAL_INTENSITY: 9,
      KNOWLEDGE_VELOCITY: 6,
    },
    gpi: 6.95,
    state: 'Transitioning',
  },

  // Particle State (7.0-10.0)
  wbd: {
    name: 'Warner Bros. Discovery',
    ticker: 'WBD',
    scores: {
      DECISION_LATENCY: 7,
      KNOWLEDGE_LOCATION: 6,
      ERROR_CORRECTION: 6,
      STRUCTURAL_LOCKIN: 9,
      TALENT_FLOW: 7,
      CAPITAL_INTENSITY: 9,
      KNOWLEDGE_VELOCITY: 6,
    },
    gpi: 7.05,
    state: 'Particle',
  },

  // Additional companies
  tesla: {
    name: 'Tesla',
    ticker: 'TSLA',
    scores: {
      DECISION_LATENCY: 2,
      KNOWLEDGE_LOCATION: 3,
      ERROR_CORRECTION: 2,
      STRUCTURAL_LOCKIN: 4,
      TALENT_FLOW: 3,
      CAPITAL_INTENSITY: 5,
      KNOWLEDGE_VELOCITY: 2,
    },
    gpi: 2.85,
    state: 'Field',
  },

  byd: {
    name: 'BYD',
    ticker: 'BYDDY',
    scores: {
      DECISION_LATENCY: 3,
      KNOWLEDGE_LOCATION: 3,
      ERROR_CORRECTION: 3,
      STRUCTURAL_LOCKIN: 4,
      TALENT_FLOW: 4,
      CAPITAL_INTENSITY: 5,
      KNOWLEDGE_VELOCITY: 3,
    },
    gpi: 3.45,
    state: 'Transitioning',
  },

  aldi: {
    name: 'Aldi',
    ticker: 'Private',
    scores: {
      DECISION_LATENCY: 3,
      KNOWLEDGE_LOCATION: 4,
      ERROR_CORRECTION: 4,
      STRUCTURAL_LOCKIN: 3,
      TALENT_FLOW: 4,
      CAPITAL_INTENSITY: 4,
      KNOWLEDGE_VELOCITY: 4,
    },
    gpi: 3.55,
    state: 'Transitioning',
  },
};

// Key comparisons to generate
const COMPARISONS = [
  ['netflix', 'wbd'],
  ['amazon', 'ups'],
  ['netflix', 'comcast'],
  ['mckinsey', 'cbre'],
  ['tesla', 'byd'],
  ['amazon', 'netflix'],
];

// ============================================
// HELPERS
// ============================================

async function ensureDir(dir: string) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

async function saveChart(svg: string, outputPath: string, scale: number = 3) {
  const pngBuffer = svgToPng(svg, scale);
  fs.writeFileSync(outputPath, pngBuffer);
  console.log(`  Saved: ${outputPath}`);
}

// ============================================
// MAIN
// ============================================

async function main() {
  const outputDir = process.argv[2] || '/Users/marcellmar/Documents/projects/marcus-gpi-brain/gpi-framework/active-spirals/constructed-artifacts/charts';

  await ensureDir(outputDir);
  await ensureDir(path.join(outputDir, 'radar'));
  await ensureDir(path.join(outputDir, 'scorecards'));
  await ensureDir(path.join(outputDir, 'comparisons'));

  console.log('Generating GPI Charts for Brain...\n');

  // Generate radar charts for all companies
  console.log('=== RADAR CHARTS ===');
  for (const [key, company] of Object.entries(BRAIN_COMPANIES)) {
    console.log(`[Radar] ${company.name} (GPI ${company.gpi})`);
    const result = await generateRadarChart(company);
    await saveChart(result.svg, path.join(outputDir, 'radar', `${key}-radar.png`));
  }

  // Generate scorecards
  console.log('\n=== SCORECARDS ===');
  for (const [key, company] of Object.entries(BRAIN_COMPANIES)) {
    console.log(`[Scorecard] ${company.name}`);
    const result = await generateScoreCard(company);
    await saveChart(result.svg, path.join(outputDir, 'scorecards', `${key}-scorecard.png`));
  }

  // Generate comparisons
  console.log('\n=== COMPARISONS ===');
  for (const [key1, key2] of COMPARISONS) {
    const c1 = BRAIN_COMPANIES[key1];
    const c2 = BRAIN_COMPANIES[key2];
    if (c1 && c2) {
      console.log(`[Comparison] ${c1.name} vs ${c2.name}`);
      const result = await generateComparisonChart(c1, c2);
      await saveChart(result.svg, path.join(outputDir, 'comparisons', `${key1}-vs-${key2}.png`));
    }
  }

  // Summary
  console.log('\n=== SUMMARY ===');
  console.log(`Generated ${Object.keys(BRAIN_COMPANIES).length} radar charts`);
  console.log(`Generated ${Object.keys(BRAIN_COMPANIES).length} scorecards`);
  console.log(`Generated ${COMPARISONS.length} comparison charts`);
  console.log(`\nOutput: ${outputDir}`);
}

main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
