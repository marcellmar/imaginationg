/**
 * CLI Script: Export GPI Charts as Standalone Images
 *
 * Usage:
 *   npx ts-node scripts/export-gpi-charts.ts --company "Netflix" --gpi 3.25
 *   npx ts-node scripts/export-gpi-charts.ts --compare "Netflix,WBD"
 *
 * Requirements:
 *   npm install playwright
 *   npx playwright install chromium
 */

import { chromium } from 'playwright';
import * as fs from 'fs';
import * as path from 'path';

// ============================================
// CONFIGURATION
// ============================================

const COLORS = {
  bg: '#000000',
  text: '#ffffff',
  textMuted: '#a1a1aa',
  grid: '#27272a',
  green: '#22c55e',
  yellow: '#eab308',
  red: '#ef4444',
};

const DIMENSIONS = [
  { key: 'DECISION_LATENCY', label: 'Decision Latency', short: 'Decision' },
  { key: 'KNOWLEDGE_LOCATION', label: 'Knowledge Location', short: 'Knowledge' },
  { key: 'ERROR_CORRECTION', label: 'Error Correction', short: 'Error Fix' },
  { key: 'STRUCTURAL_LOCKIN', label: 'Structural Lock-In', short: 'Lock-In' },
  { key: 'TALENT_FLOW', label: 'Talent Flow', short: 'Talent' },
  { key: 'CAPITAL_INTENSITY', label: 'Capital Intensity', short: 'Capital' },
  { key: 'KNOWLEDGE_VELOCITY', label: 'Knowledge Velocity', short: 'Velocity' },
];

// ============================================
// SVG GENERATION
// ============================================

function getScoreColor(score: number): string {
  if (score <= 3) return COLORS.green;
  if (score <= 6) return COLORS.yellow;
  return COLORS.red;
}

function getStateColor(gpi: number): string {
  if (gpi <= 3) return COLORS.green;
  if (gpi < 7) return COLORS.yellow;
  return COLORS.red;
}

function getState(gpi: number): string {
  if (gpi <= 3) return 'Field';
  if (gpi < 7) return 'Transitioning';
  return 'Particle';
}

interface CompanyData {
  name: string;
  scores: Record<string, number>;
  gpi: number;
}

function generateRadarSVG(company: CompanyData, size: number = 400): string {
  const center = size / 2;
  const maxRadius = (size / 2) * 0.65;
  const labelRadius = maxRadius + 45;
  const numDimensions = 7;

  // Get ordered scores
  const scores = DIMENSIONS.map(d => company.scores[d.key] || 5);

  // Generate polygon points
  const points = scores.map((score, i) => {
    const angle = (i / numDimensions) * 2 * Math.PI - Math.PI / 2;
    const radius = (score / 10) * maxRadius;
    return {
      x: center + radius * Math.cos(angle),
      y: center + radius * Math.sin(angle),
    };
  });

  const polygonPoints = points.map(p => `${p.x},${p.y}`).join(' ');
  const stateColor = getStateColor(company.gpi);

  // Grid circles
  const gridCircles = [2, 4, 6, 8, 10].map(level => {
    const r = (level / 10) * maxRadius;
    return `<circle cx="${center}" cy="${center}" r="${r}" fill="none" stroke="${COLORS.grid}" stroke-width="1"/>`;
  }).join('');

  // Axis lines
  const axisLines = DIMENSIONS.map((_, i) => {
    const angle = (i / numDimensions) * 2 * Math.PI - Math.PI / 2;
    const x2 = center + maxRadius * Math.cos(angle);
    const y2 = center + maxRadius * Math.sin(angle);
    return `<line x1="${center}" y1="${center}" x2="${x2}" y2="${y2}" stroke="${COLORS.grid}" stroke-width="1"/>`;
  }).join('');

  // Data points
  const dataPoints = points.map((p, i) => {
    const color = getScoreColor(scores[i]);
    return `<circle cx="${p.x}" cy="${p.y}" r="6" fill="${color}" stroke="${COLORS.text}" stroke-width="1.5"/>`;
  }).join('');

  // Labels
  const labels = DIMENSIONS.map((dim, i) => {
    const angle = (i / numDimensions) * 2 * Math.PI - Math.PI / 2;
    const x = center + labelRadius * Math.cos(angle);
    const y = center + labelRadius * Math.sin(angle);
    const score = scores[i];
    const scoreColor = getScoreColor(score);

    return `
      <text x="${x}" y="${y - 8}" text-anchor="middle" fill="${COLORS.textMuted}" font-size="11" font-weight="600">${dim.short}</text>
      <text x="${x}" y="${y + 8}" text-anchor="middle" fill="${scoreColor}" font-size="13" font-weight="700">${score.toFixed(1)}</text>
    `;
  }).join('');

  return `
    <svg width="${size}" height="${size + 80}" xmlns="http://www.w3.org/2000/svg">
      <style>
        text { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
      </style>

      <!-- Background -->
      <rect width="100%" height="100%" fill="${COLORS.bg}"/>

      <!-- Title -->
      <text x="${center}" y="30" text-anchor="middle" fill="${COLORS.text}" font-size="18" font-weight="800">${company.name}</text>
      <text x="${center}" y="50" text-anchor="middle" fill="${stateColor}" font-size="14" font-weight="600">GPI ${company.gpi.toFixed(2)} | ${getState(company.gpi)} State</text>

      <!-- Chart area (offset down) -->
      <g transform="translate(0, 40)">
        ${gridCircles}
        ${axisLines}

        <!-- Data polygon -->
        <polygon points="${polygonPoints}" fill="${stateColor}" fill-opacity="0.2" stroke="${stateColor}" stroke-width="2"/>

        ${dataPoints}
        ${labels}
      </g>

      <!-- Footer -->
      <text x="${center}" y="${size + 70}" text-anchor="middle" fill="${COLORS.textMuted}" font-size="10" font-style="italic">Lower scores = healthier | imaginationg.com</text>
    </svg>
  `;
}

function generateComparisonSVG(company1: CompanyData, company2: CompanyData, size: number = 500): string {
  const center = size / 2;
  const maxRadius = (size / 2) * 0.55;
  const labelRadius = maxRadius + 50;
  const numDimensions = 7;

  const scores1 = DIMENSIONS.map(d => company1.scores[d.key] || 5);
  const scores2 = DIMENSIONS.map(d => company2.scores[d.key] || 5);

  const getPoints = (scores: number[]) => scores.map((score, i) => {
    const angle = (i / numDimensions) * 2 * Math.PI - Math.PI / 2;
    const radius = (score / 10) * maxRadius;
    return { x: center + radius * Math.cos(angle), y: center + radius * Math.sin(angle) };
  });

  const points1 = getPoints(scores1);
  const points2 = getPoints(scores2);

  const polygon1 = points1.map(p => `${p.x},${p.y}`).join(' ');
  const polygon2 = points2.map(p => `${p.x},${p.y}`).join(' ');

  const color1 = getStateColor(company1.gpi);
  const color2 = getStateColor(company2.gpi);
  const delta = Math.abs(company1.gpi - company2.gpi);

  // Grid
  const gridCircles = [2, 4, 6, 8, 10].map(level => {
    const r = (level / 10) * maxRadius;
    return `<circle cx="${center}" cy="${center}" r="${r}" fill="none" stroke="${COLORS.grid}" stroke-width="1"/>`;
  }).join('');

  const axisLines = DIMENSIONS.map((_, i) => {
    const angle = (i / numDimensions) * 2 * Math.PI - Math.PI / 2;
    const x2 = center + maxRadius * Math.cos(angle);
    const y2 = center + maxRadius * Math.sin(angle);
    return `<line x1="${center}" y1="${center}" x2="${x2}" y2="${y2}" stroke="${COLORS.grid}" stroke-width="1"/>`;
  }).join('');

  // Labels
  const labels = DIMENSIONS.map((dim, i) => {
    const angle = (i / numDimensions) * 2 * Math.PI - Math.PI / 2;
    const x = center + labelRadius * Math.cos(angle);
    const y = center + labelRadius * Math.sin(angle);
    return `<text x="${x}" y="${y}" text-anchor="middle" fill="${COLORS.textMuted}" font-size="10" font-weight="600">${dim.short}</text>`;
  }).join('');

  return `
    <svg width="${size}" height="${size + 100}" xmlns="http://www.w3.org/2000/svg">
      <style>
        text { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
      </style>

      <rect width="100%" height="100%" fill="${COLORS.bg}"/>

      <!-- Title -->
      <text x="${center}" y="28" text-anchor="middle" fill="${COLORS.text}" font-size="16" font-weight="800">${company1.name} vs ${company2.name}</text>
      <text x="${center}" y="48" text-anchor="middle" fill="${COLORS.textMuted}" font-size="12">GPI Delta: ${delta.toFixed(1)}</text>

      <!-- Chart -->
      <g transform="translate(0, 50)">
        ${gridCircles}
        ${axisLines}

        <polygon points="${polygon1}" fill="${color1}" fill-opacity="0.15" stroke="${color1}" stroke-width="2"/>
        <polygon points="${polygon2}" fill="${color2}" fill-opacity="0.15" stroke="${color2}" stroke-width="2"/>

        ${labels}
      </g>

      <!-- Legend -->
      <g transform="translate(${size - 150}, 70)">
        <rect x="0" y="0" width="12" height="12" fill="${color1}"/>
        <text x="18" y="10" fill="${COLORS.text}" font-size="11">${company1.name} (${company1.gpi.toFixed(2)})</text>

        <rect x="0" y="20" width="12" height="12" fill="${color2}"/>
        <text x="18" y="30" fill="${COLORS.text}" font-size="11">${company2.name} (${company2.gpi.toFixed(2)})</text>
      </g>

      <!-- Footer -->
      <text x="${center}" y="${size + 90}" text-anchor="middle" fill="${COLORS.textMuted}" font-size="10" font-style="italic">Lower scores = healthier | imaginationg.com</text>
    </svg>
  `;
}

// ============================================
// EXPORT FUNCTIONS
// ============================================

async function exportSVGtoPNG(svg: string, outputPath: string, width: number = 800): Promise<void> {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Set viewport
  await page.setViewportSize({ width, height: width });

  // Load SVG as data URL
  const svgBase64 = Buffer.from(svg).toString('base64');
  const dataUrl = `data:image/svg+xml;base64,${svgBase64}`;

  await page.setContent(`
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { margin: 0; padding: 0; background: #000; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
          img { max-width: 100%; height: auto; }
        </style>
      </head>
      <body>
        <img src="${dataUrl}" />
      </body>
    </html>
  `);

  // Wait for render
  await page.waitForTimeout(100);

  // Screenshot
  await page.screenshot({ path: outputPath, type: 'png' });

  await browser.close();
  console.log(`Saved: ${outputPath}`);
}

function saveSVG(svg: string, outputPath: string): void {
  fs.writeFileSync(outputPath, svg);
  console.log(`Saved: ${outputPath}`);
}

// ============================================
// CLI
// ============================================

async function main() {
  const args = process.argv.slice(2);

  // Example: Generate Netflix chart
  const netflix: CompanyData = {
    name: 'Netflix',
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
  };

  const wbd: CompanyData = {
    name: 'Warner Bros. Discovery',
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
  };

  const outputDir = path.join(__dirname, '../public/charts');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Generate single chart
  const netflixSVG = generateRadarSVG(netflix);
  saveSVG(netflixSVG, path.join(outputDir, 'netflix-gpi.svg'));

  // Generate comparison
  const comparisonSVG = generateComparisonSVG(netflix, wbd);
  saveSVG(comparisonSVG, path.join(outputDir, 'netflix-vs-wbd.svg'));

  // Export as PNG (requires Playwright)
  try {
    await exportSVGtoPNG(netflixSVG, path.join(outputDir, 'netflix-gpi.png'));
    await exportSVGtoPNG(comparisonSVG, path.join(outputDir, 'netflix-vs-wbd.png'), 1000);
  } catch (e) {
    console.log('PNG export requires Playwright. Run: npx playwright install chromium');
  }
}

main().catch(console.error);
