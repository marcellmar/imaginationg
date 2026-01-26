/**
 * Satori Chart Generator
 * Generates SVG from React components using Satori
 * Then converts to PNG/WebP using resvg-js and Sharp
 *
 * IMPORTANT: Satori requires:
 * - Every element with multiple children must have display: flex
 * - Only flexbox layout (no CSS grid)
 * - All styles must be inline
 */

import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { CompanyData, ChartOptions, COLORS, DIMENSIONS, getScoreColor, getStateColor } from './types';
import * as fs from 'fs';
import * as path from 'path';

// Font loading
let fontData: ArrayBuffer | null = null;
let fontBoldData: ArrayBuffer | null = null;

async function loadFonts() {
  if (fontData && fontBoldData) {
    return { regular: fontData, bold: fontBoldData };
  }

  // Try local fonts first
  try {
    const fontDir = path.join(process.cwd(), 'public', 'fonts');
    const regularBuffer = fs.readFileSync(path.join(fontDir, 'Inter-Regular.woff'));
    const boldBuffer = fs.readFileSync(path.join(fontDir, 'Inter-Bold.woff'));
    fontData = regularBuffer.buffer.slice(regularBuffer.byteOffset, regularBuffer.byteOffset + regularBuffer.byteLength);
    fontBoldData = boldBuffer.buffer.slice(boldBuffer.byteOffset, boldBuffer.byteOffset + boldBuffer.byteLength);
    return { regular: fontData, bold: fontBoldData };
  } catch {
    // Fallback to fetch
    const regularRes = await fetch(
      'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff'
    );
    fontData = await regularRes.arrayBuffer();

    const boldRes = await fetch(
      'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYAZ9hjp-Ek-_EeA.woff'
    );
    fontBoldData = await boldRes.arrayBuffer();

    return { regular: fontData, bold: fontBoldData };
  }
}

/**
 * Generate radar chart points for SVG path
 */
function generateRadarPoints(
  scores: number[],
  centerX: number,
  centerY: number,
  maxRadius: number
): string {
  const numPoints = scores.length;
  const points: string[] = [];

  scores.forEach((score, i) => {
    const angle = (i / numPoints) * 2 * Math.PI - Math.PI / 2;
    const radius = (score / 10) * maxRadius;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    points.push(`${x},${y}`);
  });

  return points.join(' ');
}

/**
 * Build SVG content as a string (avoiding Satori JSX complexity for SVG)
 */
function buildRadarSVG(
  scores: number[],
  center: number,
  maxRadius: number,
  stateColor: string,
  showLabels: boolean,
  showValues: boolean
): string {
  const labelRadius = maxRadius + 35;

  // Grid circles
  const gridCircles = [2, 4, 6, 8, 10]
    .map(level => {
      const r = (level / 10) * maxRadius;
      return `<circle cx="${center}" cy="${center}" r="${r}" fill="none" stroke="${COLORS.border}" stroke-width="1"/>`;
    })
    .join('');

  // Axis lines
  const axisLines = DIMENSIONS.map((_, i) => {
    const angle = (i / 7) * 2 * Math.PI - Math.PI / 2;
    const x2 = center + maxRadius * Math.cos(angle);
    const y2 = center + maxRadius * Math.sin(angle);
    return `<line x1="${center}" y1="${center}" x2="${x2}" y2="${y2}" stroke="${COLORS.border}" stroke-width="1"/>`;
  }).join('');

  // Data polygon
  const polygonPoints = generateRadarPoints(scores, center, center, maxRadius);
  const polygon = `<polygon points="${polygonPoints}" fill="${stateColor}" fill-opacity="0.2" stroke="${stateColor}" stroke-width="2"/>`;

  // Data points
  const dataPoints = scores
    .map((score, i) => {
      const angle = (i / 7) * 2 * Math.PI - Math.PI / 2;
      const radius = (score / 10) * maxRadius;
      const x = center + radius * Math.cos(angle);
      const y = center + radius * Math.sin(angle);
      const color = getScoreColor(score);
      return `<circle cx="${x}" cy="${y}" r="6" fill="${color}" stroke="${COLORS.text}" stroke-width="1.5"/>`;
    })
    .join('');

  // Labels - positioned outside the radar with proper spacing
  let labels = '';
  if (showLabels) {
    labels = DIMENSIONS.map((dim, i) => {
      const angle = (i / 7) * 2 * Math.PI - Math.PI / 2;
      const x = center + labelRadius * Math.cos(angle);
      const y = center + labelRadius * Math.sin(angle);
      const score = scores[i];
      const scoreColor = getScoreColor(score);

      // Adjust vertical alignment based on position
      const labelY = y - 6;
      const valueY = y + 12;

      let labelText = `<text x="${x}" y="${labelY}" text-anchor="middle" dominant-baseline="middle" fill="${COLORS.textMuted}" font-size="12" font-weight="600" font-family="Arial, sans-serif">${dim.short}</text>`;

      if (showValues) {
        labelText += `<text x="${x}" y="${valueY}" text-anchor="middle" dominant-baseline="middle" fill="${scoreColor}" font-size="14" font-weight="700" font-family="Arial, sans-serif">${score.toFixed(1)}</text>`;
      }

      return labelText;
    }).join('');
  }

  return `${gridCircles}${axisLines}${polygon}${dataPoints}${labels}`;
}

/**
 * GPI Radar Chart Component (Satori-compatible)
 */
function GPIRadarChartSatori({
  company,
  width = 600,
  height = 700,
  showLabels = true,
  showValues = true,
  showFooter = true,
}: {
  company: CompanyData;
  width?: number;
  height?: number;
  showLabels?: boolean;
  showValues?: boolean;
  showFooter?: boolean;
}) {
  // Calculate sizes
  const chartAreaSize = Math.min(width - 40, height - 140);
  const labelOffset = 55;
  const maxRadius = (chartAreaSize / 2) - labelOffset;
  const svgSize = (maxRadius * 2) + 20; // Just the chart, no labels
  const center = svgSize / 2;

  const scores = DIMENSIONS.map(d => company.scores[d.key] || 5);
  const stateColor = getStateColor(company.state);

  // Build SVG without labels (labels rendered by Satori)
  const svgContent = buildRadarSVG(scores, center, maxRadius, stateColor, false, false);

  // Calculate label positions relative to chart area center
  const labelRadius = maxRadius + 40;
  const labelPositions = DIMENSIONS.map((dim, i) => {
    const angle = (i / 7) * 2 * Math.PI - Math.PI / 2;
    return {
      x: labelRadius * Math.cos(angle),
      y: labelRadius * Math.sin(angle),
      label: dim.short,
      score: scores[i],
    };
  });

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: width,
        height: height,
        backgroundColor: COLORS.bg,
        fontFamily: 'Inter, sans-serif',
        padding: 20,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginBottom: 10,
        }}
      >
        <span
          style={{
            fontSize: 24,
            fontWeight: 800,
            color: COLORS.text,
            marginBottom: 4,
          }}
        >
          {company.name}
        </span>
        <span
          style={{
            fontSize: 16,
            fontWeight: 600,
            color: stateColor,
          }}
        >
          GPI {company.gpi.toFixed(2)} | {company.state} State
        </span>
      </div>

      {/* Chart container with labels */}
      <div
        style={{
          display: 'flex',
          position: 'relative',
          width: chartAreaSize,
          height: chartAreaSize,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* SVG Chart */}
        <img
          src={`data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="${svgSize}" height="${svgSize}" viewBox="0 0 ${svgSize} ${svgSize}">${svgContent}</svg>`)}`}
          width={svgSize}
          height={svgSize}
          style={{ position: 'absolute' }}
        />

        {/* Labels rendered by Satori */}
        {showLabels && labelPositions.map((pos, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              position: 'absolute',
              left: chartAreaSize / 2 + pos.x - 30,
              top: chartAreaSize / 2 + pos.y - 15,
              width: 60,
            }}
          >
            <span
              style={{
                fontSize: 11,
                fontWeight: 600,
                color: COLORS.textMuted,
                textAlign: 'center',
              }}
            >
              {pos.label}
            </span>
            {showValues && (
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: getScoreColor(pos.score),
                  textAlign: 'center',
                }}
              >
                {pos.score.toFixed(1)}
              </span>
            )}
          </div>
        ))}
      </div>

      {showFooter && (
        <span
          style={{
            marginTop: 15,
            fontSize: 10,
            color: COLORS.textDim,
            fontStyle: 'italic',
          }}
        >
          Lower scores = healthier | imaginationg.studio
        </span>
      )}
    </div>
  );
}

/**
 * Build comparison SVG content (with labels - for reference)
 */
function buildComparisonSVG(
  scores1: number[],
  scores2: number[],
  center: number,
  maxRadius: number,
  color1: string,
  color2: string
): string {
  const labelRadius = maxRadius + 35;

  // Grid circles
  const gridCircles = [2, 4, 6, 8, 10]
    .map(level => {
      const r = (level / 10) * maxRadius;
      return `<circle cx="${center}" cy="${center}" r="${r}" fill="none" stroke="${COLORS.border}" stroke-width="1"/>`;
    })
    .join('');

  // Axis lines
  const axisLines = DIMENSIONS.map((_, i) => {
    const angle = (i / 7) * 2 * Math.PI - Math.PI / 2;
    const x2 = center + maxRadius * Math.cos(angle);
    const y2 = center + maxRadius * Math.sin(angle);
    return `<line x1="${center}" y1="${center}" x2="${x2}" y2="${y2}" stroke="${COLORS.border}" stroke-width="1"/>`;
  }).join('');

  // Polygons
  const polygon1 = `<polygon points="${generateRadarPoints(scores1, center, center, maxRadius)}" fill="${color1}" fill-opacity="0.15" stroke="${color1}" stroke-width="2.5"/>`;
  const polygon2 = `<polygon points="${generateRadarPoints(scores2, center, center, maxRadius)}" fill="${color2}" fill-opacity="0.15" stroke="${color2}" stroke-width="2.5"/>`;

  // Labels
  const labels = DIMENSIONS.map((dim, i) => {
    const angle = (i / 7) * 2 * Math.PI - Math.PI / 2;
    const x = center + labelRadius * Math.cos(angle);
    const y = center + labelRadius * Math.sin(angle);
    return `<text x="${x}" y="${y}" text-anchor="middle" dominant-baseline="middle" fill="${COLORS.textMuted}" font-size="11" font-weight="600" font-family="Arial, sans-serif">${dim.short}</text>`;
  }).join('');

  return `${gridCircles}${axisLines}${polygon1}${polygon2}${labels}`;
}

/**
 * Build comparison SVG content without labels (labels rendered by Satori)
 */
function buildComparisonSVGNoLabels(
  scores1: number[],
  scores2: number[],
  center: number,
  maxRadius: number,
  color1: string,
  color2: string
): string {
  // Grid circles
  const gridCircles = [2, 4, 6, 8, 10]
    .map(level => {
      const r = (level / 10) * maxRadius;
      return `<circle cx="${center}" cy="${center}" r="${r}" fill="none" stroke="${COLORS.border}" stroke-width="1"/>`;
    })
    .join('');

  // Axis lines
  const axisLines = DIMENSIONS.map((_, i) => {
    const angle = (i / 7) * 2 * Math.PI - Math.PI / 2;
    const x2 = center + maxRadius * Math.cos(angle);
    const y2 = center + maxRadius * Math.sin(angle);
    return `<line x1="${center}" y1="${center}" x2="${x2}" y2="${y2}" stroke="${COLORS.border}" stroke-width="1"/>`;
  }).join('');

  // Polygons
  const polygon1 = `<polygon points="${generateRadarPoints(scores1, center, center, maxRadius)}" fill="${color1}" fill-opacity="0.15" stroke="${color1}" stroke-width="2.5"/>`;
  const polygon2 = `<polygon points="${generateRadarPoints(scores2, center, center, maxRadius)}" fill="${color2}" fill-opacity="0.15" stroke="${color2}" stroke-width="2.5"/>`;

  return `${gridCircles}${axisLines}${polygon1}${polygon2}`;
}

/**
 * GPI Comparison Chart Component (Satori-compatible)
 */
function GPIComparisonChartSatori({
  company1,
  company2,
  width = 700,
  height = 750,
  showFooter = true,
}: {
  company1: CompanyData;
  company2: CompanyData;
  width?: number;
  height?: number;
  showFooter?: boolean;
}) {
  // Calculate sizes
  const chartAreaSize = Math.min(width - 40, height - 200);
  const labelOffset = 55;
  const maxRadius = (chartAreaSize / 2) - labelOffset;
  const svgSize = (maxRadius * 2) + 20;
  const center = svgSize / 2;

  const scores1 = DIMENSIONS.map(d => company1.scores[d.key] || 5);
  const scores2 = DIMENSIONS.map(d => company2.scores[d.key] || 5);

  const color1 = getStateColor(company1.state);
  const color2 = getStateColor(company2.state);
  const delta = Math.abs(company1.gpi - company2.gpi);

  // Build SVG without labels
  const svgContent = buildComparisonSVGNoLabels(scores1, scores2, center, maxRadius, color1, color2);

  // Label positions
  const labelRadius = maxRadius + 40;
  const labelPositions = DIMENSIONS.map((dim, i) => {
    const angle = (i / 7) * 2 * Math.PI - Math.PI / 2;
    return {
      x: labelRadius * Math.cos(angle),
      y: labelRadius * Math.sin(angle),
      label: dim.short,
    };
  });

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: width,
        height: height,
        backgroundColor: COLORS.bg,
        fontFamily: 'Inter, sans-serif',
        padding: 20,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginBottom: 10,
        }}
      >
        <span
          style={{
            fontSize: 22,
            fontWeight: 800,
            color: COLORS.text,
            marginBottom: 4,
          }}
        >
          {company1.name} vs {company2.name}
        </span>
        <span
          style={{
            fontSize: 14,
            color: COLORS.textMuted,
          }}
        >
          GPI Delta: {delta.toFixed(1)}
        </span>
      </div>

      <div
        style={{
          display: 'flex',
          gap: 24,
          marginBottom: 15,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div
            style={{
              width: 14,
              height: 14,
              backgroundColor: color1,
              borderRadius: 2,
            }}
          />
          <span style={{ fontSize: 12, color: COLORS.text }}>
            {company1.name} ({company1.gpi.toFixed(2)})
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div
            style={{
              width: 14,
              height: 14,
              backgroundColor: color2,
              borderRadius: 2,
            }}
          />
          <span style={{ fontSize: 12, color: COLORS.text }}>
            {company2.name} ({company2.gpi.toFixed(2)})
          </span>
        </div>
      </div>

      {/* Chart container with labels */}
      <div
        style={{
          display: 'flex',
          position: 'relative',
          width: chartAreaSize,
          height: chartAreaSize,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          src={`data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="${svgSize}" height="${svgSize}" viewBox="0 0 ${svgSize} ${svgSize}">${svgContent}</svg>`)}`}
          width={svgSize}
          height={svgSize}
          style={{ position: 'absolute' }}
        />

        {/* Labels rendered by Satori */}
        {labelPositions.map((pos, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              position: 'absolute',
              left: chartAreaSize / 2 + pos.x - 30,
              top: chartAreaSize / 2 + pos.y - 10,
              width: 60,
            }}
          >
            <span
              style={{
                fontSize: 10,
                fontWeight: 600,
                color: COLORS.textMuted,
                textAlign: 'center',
              }}
            >
              {pos.label}
            </span>
          </div>
        ))}
      </div>

      {showFooter && (
        <span
          style={{
            marginTop: 15,
            fontSize: 10,
            color: COLORS.textDim,
            fontStyle: 'italic',
          }}
        >
          Lower scores = healthier | imaginationg.studio
        </span>
      )}
    </div>
  );
}

/**
 * GPI Score Card Component (Satori-compatible)
 */
function GPIScoreCardSatori({
  company,
  width = 400,
  height = 200,
}: {
  company: CompanyData;
  width?: number;
  height?: number;
}) {
  const stateColor = getStateColor(company.state);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: width,
        height: height,
        backgroundColor: COLORS.bg,
        border: `2px solid ${stateColor}`,
        borderRadius: 16,
        padding: 24,
        fontFamily: 'Inter, sans-serif',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
        <span
          style={{
            fontSize: 20,
            fontWeight: 800,
            color: COLORS.text,
          }}
        >
          {company.name}
        </span>
        {company.ticker && (
          <span style={{ fontSize: 14, color: COLORS.textMuted, marginLeft: 8 }}>
            ({company.ticker})
          </span>
        )}
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          gap: 12,
          marginBottom: 12,
        }}
      >
        <span
          style={{
            fontSize: 48,
            fontWeight: 800,
            color: stateColor,
          }}
        >
          {company.gpi.toFixed(2)}
        </span>
        <span
          style={{
            fontSize: 16,
            fontWeight: 600,
            color: COLORS.textMuted,
          }}
        >
          GPI Score
        </span>
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
        }}
      >
        <div
          style={{
            display: 'flex',
            backgroundColor: stateColor,
            color: company.state === 'Transitioning' ? '#000' : '#fff',
            padding: '6px 12px',
            borderRadius: 6,
            fontSize: 12,
            fontWeight: 700,
          }}
        >
          {company.state} State
        </div>
        <span
          style={{
            fontSize: 11,
            color: COLORS.textDim,
          }}
        >
          {company.state === 'Field'
            ? '1.0 - 3.0 (Adaptive)'
            : company.state === 'Transitioning'
            ? '3.1 - 6.9 (Mixed)'
            : '7.0 - 10.0 (Rigid)'}
        </span>
      </div>
    </div>
  );
}

// ============================================
// MAIN GENERATOR FUNCTIONS
// ============================================

export interface GenerateChartResult {
  svg: string;
  png?: Buffer;
  width: number;
  height: number;
}

/**
 * Generate GPI Radar Chart
 */
export async function generateRadarChart(
  company: CompanyData,
  options: ChartOptions = {}
): Promise<GenerateChartResult> {
  const { width = 600, height = 700, showLabels = true, showValues = true, showFooter = true } = options;

  const fonts = await loadFonts();

  const svg = await satori(
    <GPIRadarChartSatori
      company={company}
      width={width}
      height={height}
      showLabels={showLabels}
      showValues={showValues}
      showFooter={showFooter}
    />,
    {
      width,
      height,
      fonts: [
        { name: 'Inter', data: fonts.regular, weight: 400, style: 'normal' },
        { name: 'Inter', data: fonts.bold, weight: 700, style: 'normal' },
      ],
    }
  );

  return { svg, width, height };
}

/**
 * Generate GPI Comparison Chart
 */
export async function generateComparisonChart(
  company1: CompanyData,
  company2: CompanyData,
  options: ChartOptions = {}
): Promise<GenerateChartResult> {
  const { width = 700, height = 750, showFooter = true } = options;

  const fonts = await loadFonts();

  const svg = await satori(
    <GPIComparisonChartSatori
      company1={company1}
      company2={company2}
      width={width}
      height={height}
      showFooter={showFooter}
    />,
    {
      width,
      height,
      fonts: [
        { name: 'Inter', data: fonts.regular, weight: 400, style: 'normal' },
        { name: 'Inter', data: fonts.bold, weight: 700, style: 'normal' },
      ],
    }
  );

  return { svg, width, height };
}

/**
 * Generate GPI Score Card
 */
export async function generateScoreCard(
  company: CompanyData,
  options: { width?: number; height?: number } = {}
): Promise<GenerateChartResult> {
  const { width = 400, height = 200 } = options;

  const fonts = await loadFonts();

  const svg = await satori(
    <GPIScoreCardSatori company={company} width={width} height={height} />,
    {
      width,
      height,
      fonts: [
        { name: 'Inter', data: fonts.regular, weight: 400, style: 'normal' },
        { name: 'Inter', data: fonts.bold, weight: 700, style: 'normal' },
      ],
    }
  );

  return { svg, width, height };
}

/**
 * Convert SVG to PNG using resvg-js
 */
export function svgToPng(svg: string, scale: number = 3): Buffer {
  const resvg = new Resvg(svg, {
    fitTo: {
      mode: 'zoom',
      value: scale,
    },
  });

  const pngData = resvg.render();
  return pngData.asPng();
}

// Export components for direct use
export { GPIRadarChartSatori, GPIComparisonChartSatori, GPIScoreCardSatori };
