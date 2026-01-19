/**
 * GPI Charts Library
 * Unified export for all chart generation utilities
 */

// Types
export * from './types';

// Satori Generator
export {
  generateRadarChart,
  generateComparisonChart,
  generateScoreCard,
  svgToPng,
  GPIRadarChartSatori,
  GPIComparisonChartSatori,
  GPIScoreCardSatori,
} from './satori-generator';

// Image Pipeline
export {
  processImage,
  generateMultiFormat,
  optimizeForSocial,
  optimizeForPrint,
  createResponsiveSet,
  getImageInfo,
  compositeCharts,
} from './image-pipeline';

// Satori Diagrams
export {
  generateSpectrumDiagram,
  generateDimensionsDiagram,
  generateFormulaDiagram,
  generateDealDiagram,
  generateVersusDiagram,
  generateSpiralDiagram,
} from './satori-diagrams';

// Convenience function for quick generation
import { generateRadarChart, generateComparisonChart, svgToPng } from './satori-generator';
import { processImage, optimizeForPrint } from './image-pipeline';
import { CompanyData } from './types';

/**
 * Quick generate a chart with sensible defaults
 */
export async function quickGenerate(
  type: 'radar' | 'comparison',
  data: { company?: CompanyData; company1?: CompanyData; company2?: CompanyData },
  options: {
    format?: 'svg' | 'png' | 'webp';
    forPrint?: boolean;
    scale?: number;
  } = {}
): Promise<{ buffer: Buffer; mimeType: string; extension: string }> {
  const { format = 'png', forPrint = false, scale = 2 } = options;

  let svg: string;

  if (type === 'radar' && data.company) {
    const result = await generateRadarChart(data.company);
    svg = result.svg;
  } else if (type === 'comparison' && data.company1 && data.company2) {
    const result = await generateComparisonChart(data.company1, data.company2);
    svg = result.svg;
  } else {
    throw new Error('Invalid data for chart type');
  }

  if (format === 'svg') {
    return {
      buffer: Buffer.from(svg),
      mimeType: 'image/svg+xml',
      extension: 'svg',
    };
  }

  const pngBuffer = svgToPng(svg, scale);

  if (forPrint) {
    const printResult = await optimizeForPrint(pngBuffer);
    return {
      buffer: printResult.buffer,
      mimeType: 'image/png',
      extension: 'png',
    };
  }

  if (format === 'webp') {
    const webpResult = await processImage(pngBuffer, { format: 'webp', quality: 90 });
    return {
      buffer: webpResult.buffer,
      mimeType: 'image/webp',
      extension: 'webp',
    };
  }

  return {
    buffer: pngBuffer,
    mimeType: 'image/png',
    extension: 'png',
  };
}
