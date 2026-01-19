/**
 * Chart Generation API Route
 * POST /api/charts/generate
 *
 * Generates GPI charts using Satori and Sharp
 */

import type { NextApiRequest, NextApiResponse } from 'next';
import {
  generateRadarChart,
  generateComparisonChart,
  generateScoreCard,
  svgToPng,
} from '../../../lib/charts/satori-generator';
import { processImage, optimizeForSocial, optimizeForPrint } from '../../../lib/charts/image-pipeline';
import { CompanyData, DimensionKey } from '../../../lib/charts/types';

type ChartType = 'radar' | 'comparison' | 'scorecard';
type OutputFormat = 'svg' | 'png' | 'webp' | 'social' | 'print';

interface GenerateRequest {
  type: ChartType;
  format?: OutputFormat;
  company?: CompanyData;
  company1?: CompanyData;
  company2?: CompanyData;
  options?: {
    width?: number;
    height?: number;
    scale?: number;
    showLabels?: boolean;
    showValues?: boolean;
    showFooter?: boolean;
  };
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const body: GenerateRequest = req.body;
    const { type, format = 'png', options = {} } = body;

    let svg: string;
    let width: number;
    let height: number;

    // Generate the appropriate chart type
    switch (type) {
      case 'radar':
        if (!body.company) {
          return res.status(400).json({ error: 'Company data required for radar chart' });
        }
        const radarResult = await generateRadarChart(body.company, options);
        svg = radarResult.svg;
        width = radarResult.width;
        height = radarResult.height;
        break;

      case 'comparison':
        if (!body.company1 || !body.company2) {
          return res.status(400).json({ error: 'Two companies required for comparison chart' });
        }
        const compResult = await generateComparisonChart(body.company1, body.company2, options);
        svg = compResult.svg;
        width = compResult.width;
        height = compResult.height;
        break;

      case 'scorecard':
        if (!body.company) {
          return res.status(400).json({ error: 'Company data required for score card' });
        }
        const cardResult = await generateScoreCard(body.company, options);
        svg = cardResult.svg;
        width = cardResult.width;
        height = cardResult.height;
        break;

      default:
        return res.status(400).json({ error: `Unknown chart type: ${type}` });
    }

    // Return based on format
    switch (format) {
      case 'svg':
        res.setHeader('Content-Type', 'image/svg+xml');
        res.setHeader('Content-Disposition', `inline; filename="${type}-chart.svg"`);
        return res.status(200).send(svg);

      case 'png':
        const pngBuffer = svgToPng(svg, options.scale || 2);
        res.setHeader('Content-Type', 'image/png');
        res.setHeader('Content-Disposition', `inline; filename="${type}-chart.png"`);
        return res.status(200).send(pngBuffer);

      case 'webp':
        const pngForWebp = svgToPng(svg, options.scale || 2);
        const webpResult = await processImage(pngForWebp, { format: 'webp', quality: 90 });
        res.setHeader('Content-Type', 'image/webp');
        res.setHeader('Content-Disposition', `inline; filename="${type}-chart.webp"`);
        return res.status(200).send(webpResult.buffer);

      case 'social':
        const pngForSocial = svgToPng(svg, 2);
        const socialResult = await optimizeForSocial(pngForSocial, 'og');
        res.setHeader('Content-Type', 'image/png');
        res.setHeader('Content-Disposition', `inline; filename="${type}-chart-og.png"`);
        return res.status(200).send(socialResult.buffer);

      case 'print':
        const pngForPrint = svgToPng(svg, 3);
        const printResult = await optimizeForPrint(pngForPrint, { dpi: 300 });
        res.setHeader('Content-Type', 'image/png');
        res.setHeader('Content-Disposition', `inline; filename="${type}-chart-print.png"`);
        return res.status(200).send(printResult.buffer);

      default:
        return res.status(400).json({ error: `Unknown format: ${format}` });
    }
  } catch (error) {
    console.error('Chart generation error:', error);
    return res.status(500).json({
      error: 'Failed to generate chart',
      details: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}

// Increase body size limit for API route
export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
  },
};
