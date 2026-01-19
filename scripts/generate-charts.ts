#!/usr/bin/env npx ts-node

/**
 * CLI Chart Generator
 * Generate GPI charts from the command line
 *
 * Usage:
 *   npx ts-node scripts/generate-charts.ts --help
 *   npx ts-node scripts/generate-charts.ts radar --company "Netflix" --gpi 3.25
 *   npx ts-node scripts/generate-charts.ts comparison --file companies.json
 *   npx ts-node scripts/generate-charts.ts batch --input data/ --output charts/
 */

import * as fs from 'fs';
import * as path from 'path';
import {
  generateRadarChart,
  generateComparisonChart,
  generateScoreCard,
  svgToPng,
} from '../lib/charts/satori-generator';
import {
  processImage,
  optimizeForPrint,
  generateMultiFormat,
} from '../lib/charts/image-pipeline';
import { CompanyData, DimensionKey, getState, DIMENSIONS } from '../lib/charts/types';

// ============================================
// SAMPLE DATA (for testing)
// ============================================

const SAMPLE_COMPANIES: Record<string, CompanyData> = {
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
};

// ============================================
// CLI HELPERS
// ============================================

function printHelp() {
  console.log(`
GPI Chart Generator CLI

Usage:
  npx ts-node scripts/generate-charts.ts <command> [options]

Commands:
  radar        Generate a single company radar chart
  comparison   Generate a comparison chart for two companies
  scorecard    Generate a score card
  batch        Batch generate charts from JSON file
  demo         Generate demo charts with sample data

Options:
  --company <name>    Company name (for radar/scorecard)
  --company1 <name>   First company (for comparison)
  --company2 <name>   Second company (for comparison)
  --gpi <score>       GPI score (1.0-10.0)
  --output <path>     Output directory (default: ./charts)
  --format <fmt>      Output format: png, svg, webp, all (default: png)
  --scale <n>         Scale factor: 1, 2, 3 (default: 2)
  --print             Optimize for print (300 DPI)
  --file <path>       JSON file with company data

Examples:
  # Generate Netflix radar chart
  npx ts-node scripts/generate-charts.ts radar --company netflix --output ./charts

  # Generate comparison
  npx ts-node scripts/generate-charts.ts comparison --company1 netflix --company2 wbd

  # Generate all demo charts
  npx ts-node scripts/generate-charts.ts demo --format all

  # Batch generate from JSON
  npx ts-node scripts/generate-charts.ts batch --file companies.json --output ./charts
  `);
}

function parseArgs(args: string[]): Record<string, string | boolean> {
  const result: Record<string, string | boolean> = {};
  let i = 0;

  while (i < args.length) {
    const arg = args[i];

    if (arg.startsWith('--')) {
      const key = arg.slice(2);
      const nextArg = args[i + 1];

      if (nextArg && !nextArg.startsWith('--')) {
        result[key] = nextArg;
        i += 2;
      } else {
        result[key] = true;
        i += 1;
      }
    } else {
      if (!result.command) {
        result.command = arg;
      }
      i += 1;
    }
  }

  return result;
}

async function ensureOutputDir(dir: string) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

async function saveChart(
  svg: string,
  outputPath: string,
  format: string,
  scale: number,
  forPrint: boolean
) {
  const baseName = path.basename(outputPath, path.extname(outputPath));
  const outputDir = path.dirname(outputPath);

  await ensureOutputDir(outputDir);

  if (format === 'svg' || format === 'all') {
    const svgPath = path.join(outputDir, `${baseName}.svg`);
    fs.writeFileSync(svgPath, svg);
    console.log(`  Saved: ${svgPath}`);
  }

  if (format === 'png' || format === 'all') {
    const pngBuffer = svgToPng(svg, scale);

    if (forPrint) {
      const printResult = await optimizeForPrint(pngBuffer, { dpi: 300 });
      const pngPath = path.join(outputDir, `${baseName}-print.png`);
      fs.writeFileSync(pngPath, printResult.buffer);
      console.log(`  Saved: ${pngPath} (${printResult.width}x${printResult.height}, 300 DPI)`);
    } else {
      const pngPath = path.join(outputDir, `${baseName}.png`);
      fs.writeFileSync(pngPath, pngBuffer);
      console.log(`  Saved: ${pngPath}`);
    }
  }

  if (format === 'webp' || format === 'all') {
    const pngBuffer = svgToPng(svg, scale);
    const webpResult = await processImage(pngBuffer, { format: 'webp', quality: 90 });
    const webpPath = path.join(outputDir, `${baseName}.webp`);
    fs.writeFileSync(webpPath, webpResult.buffer);
    console.log(`  Saved: ${webpPath} (${(webpResult.size / 1024).toFixed(1)} KB)`);
  }
}

// ============================================
// COMMANDS
// ============================================

async function generateRadarCommand(args: Record<string, string | boolean>) {
  const companyKey = (args.company as string)?.toLowerCase();
  const outputDir = (args.output as string) || './charts';
  const format = (args.format as string) || 'png';
  const scale = parseInt(args.scale as string) || 2;
  const forPrint = !!args.print;

  const company = SAMPLE_COMPANIES[companyKey];
  if (!company) {
    console.error(`Unknown company: ${companyKey}`);
    console.log('Available: ' + Object.keys(SAMPLE_COMPANIES).join(', '));
    process.exit(1);
  }

  console.log(`Generating radar chart for ${company.name}...`);

  const result = await generateRadarChart(company, {
    width: 600,
    height: 700,
    showLabels: true,
    showValues: true,
  });

  const outputPath = path.join(outputDir, `${companyKey}-radar`);
  await saveChart(result.svg, outputPath, format, scale, forPrint);
}

async function generateComparisonCommand(args: Record<string, string | boolean>) {
  const company1Key = (args.company1 as string)?.toLowerCase();
  const company2Key = (args.company2 as string)?.toLowerCase();
  const outputDir = (args.output as string) || './charts';
  const format = (args.format as string) || 'png';
  const scale = parseInt(args.scale as string) || 2;
  const forPrint = !!args.print;

  const company1 = SAMPLE_COMPANIES[company1Key];
  const company2 = SAMPLE_COMPANIES[company2Key];

  if (!company1 || !company2) {
    console.error(`Unknown company. Available: ${Object.keys(SAMPLE_COMPANIES).join(', ')}`);
    process.exit(1);
  }

  console.log(`Generating comparison: ${company1.name} vs ${company2.name}...`);

  const result = await generateComparisonChart(company1, company2, {
    width: 700,
    height: 750,
  });

  const outputPath = path.join(outputDir, `${company1Key}-vs-${company2Key}`);
  await saveChart(result.svg, outputPath, format, scale, forPrint);
}

async function generateScorecardCommand(args: Record<string, string | boolean>) {
  const companyKey = (args.company as string)?.toLowerCase();
  const outputDir = (args.output as string) || './charts';
  const format = (args.format as string) || 'png';
  const scale = parseInt(args.scale as string) || 2;
  const forPrint = !!args.print;

  const company = SAMPLE_COMPANIES[companyKey];
  if (!company) {
    console.error(`Unknown company: ${companyKey}`);
    process.exit(1);
  }

  console.log(`Generating score card for ${company.name}...`);

  const result = await generateScoreCard(company, {
    width: 400,
    height: 200,
  });

  const outputPath = path.join(outputDir, `${companyKey}-scorecard`);
  await saveChart(result.svg, outputPath, format, scale, forPrint);
}

async function generateDemoCommand(args: Record<string, string | boolean>) {
  const outputDir = (args.output as string) || './charts/demo';
  const format = (args.format as string) || 'all';
  const scale = parseInt(args.scale as string) || 2;
  const forPrint = !!args.print;

  console.log('Generating demo charts...\n');

  // Generate radar charts for all sample companies
  for (const [key, company] of Object.entries(SAMPLE_COMPANIES)) {
    console.log(`[Radar] ${company.name}`);
    const result = await generateRadarChart(company);
    const outputPath = path.join(outputDir, `${key}-radar`);
    await saveChart(result.svg, outputPath, format, scale, forPrint);
  }

  // Generate comparison
  console.log(`\n[Comparison] Netflix vs WBD`);
  const compResult = await generateComparisonChart(
    SAMPLE_COMPANIES.netflix,
    SAMPLE_COMPANIES.wbd
  );
  await saveChart(
    compResult.svg,
    path.join(outputDir, 'netflix-vs-wbd'),
    format,
    scale,
    forPrint
  );

  // Generate score cards
  for (const [key, company] of Object.entries(SAMPLE_COMPANIES)) {
    console.log(`\n[Scorecard] ${company.name}`);
    const result = await generateScoreCard(company);
    const outputPath = path.join(outputDir, `${key}-scorecard`);
    await saveChart(result.svg, outputPath, format, scale, forPrint);
  }

  console.log(`\nDemo charts generated in ${outputDir}`);
}

async function batchGenerateCommand(args: Record<string, string | boolean>) {
  const inputFile = args.file as string;
  const outputDir = (args.output as string) || './charts';
  const format = (args.format as string) || 'png';
  const scale = parseInt(args.scale as string) || 2;
  const forPrint = !!args.print;

  if (!inputFile) {
    console.error('--file required for batch command');
    process.exit(1);
  }

  if (!fs.existsSync(inputFile)) {
    console.error(`File not found: ${inputFile}`);
    process.exit(1);
  }

  const data = JSON.parse(fs.readFileSync(inputFile, 'utf-8'));

  if (Array.isArray(data)) {
    // Array of companies
    for (const company of data as CompanyData[]) {
      console.log(`Generating radar for ${company.name}...`);
      const result = await generateRadarChart(company);
      const safeName = company.name.toLowerCase().replace(/[^a-z0-9]/g, '-');
      const outputPath = path.join(outputDir, `${safeName}-radar`);
      await saveChart(result.svg, outputPath, format, scale, forPrint);
    }
  } else if (data.companies) {
    // Object with companies array
    for (const company of data.companies as CompanyData[]) {
      console.log(`Generating radar for ${company.name}...`);
      const result = await generateRadarChart(company);
      const safeName = company.name.toLowerCase().replace(/[^a-z0-9]/g, '-');
      const outputPath = path.join(outputDir, `${safeName}-radar`);
      await saveChart(result.svg, outputPath, format, scale, forPrint);
    }

    // Generate comparisons if specified
    if (data.comparisons) {
      for (const comp of data.comparisons as { company1: string; company2: string }[]) {
        const c1 = (data.companies as CompanyData[]).find(c => c.name === comp.company1);
        const c2 = (data.companies as CompanyData[]).find(c => c.name === comp.company2);

        if (c1 && c2) {
          console.log(`Generating comparison: ${c1.name} vs ${c2.name}...`);
          const result = await generateComparisonChart(c1, c2);
          const safeName = `${c1.name}-vs-${c2.name}`.toLowerCase().replace(/[^a-z0-9]/g, '-');
          const outputPath = path.join(outputDir, safeName);
          await saveChart(result.svg, outputPath, format, scale, forPrint);
        }
      }
    }
  }

  console.log(`\nBatch generation complete. Output: ${outputDir}`);
}

// ============================================
// MAIN
// ============================================

async function main() {
  const args = parseArgs(process.argv.slice(2));

  if (args.help || !args.command) {
    printHelp();
    process.exit(args.help ? 0 : 1);
  }

  switch (args.command) {
    case 'radar':
      await generateRadarCommand(args);
      break;
    case 'comparison':
      await generateComparisonCommand(args);
      break;
    case 'scorecard':
      await generateScorecardCommand(args);
      break;
    case 'demo':
      await generateDemoCommand(args);
      break;
    case 'batch':
      await batchGenerateCommand(args);
      break;
    default:
      console.error(`Unknown command: ${args.command}`);
      printHelp();
      process.exit(1);
  }
}

main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
