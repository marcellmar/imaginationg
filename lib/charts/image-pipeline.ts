/**
 * Sharp Image Processing Pipeline
 * Optimizes and converts chart images for various outputs
 */

import sharp from 'sharp';
import { ExportOptions } from './types';

export interface ProcessedImage {
  buffer: Buffer;
  format: string;
  width: number;
  height: number;
  size: number;
}

export interface PipelineOptions {
  // Output format
  format: 'png' | 'webp' | 'avif' | 'jpeg';

  // Quality (1-100, for lossy formats)
  quality?: number;

  // Scale factor (1 = original, 2 = 2x resolution)
  scale?: number;

  // Resize to specific dimensions
  resize?: {
    width?: number;
    height?: number;
    fit?: 'cover' | 'contain' | 'fill' | 'inside' | 'outside';
  };

  // Book/print optimizations
  forPrint?: boolean;

  // Web optimizations
  forWeb?: boolean;
}

const DEFAULT_OPTIONS: PipelineOptions = {
  format: 'png',
  quality: 90,
  scale: 2,
};

/**
 * Process a PNG buffer through the Sharp pipeline
 */
export async function processImage(
  input: Buffer,
  options: PipelineOptions = DEFAULT_OPTIONS
): Promise<ProcessedImage> {
  const { format, quality = 90, scale = 1, resize, forPrint, forWeb } = options;

  let pipeline = sharp(input);

  // Get original metadata
  const metadata = await pipeline.metadata();
  const originalWidth = metadata.width || 600;
  const originalHeight = metadata.height || 700;

  // Apply scaling
  if (scale !== 1) {
    pipeline = pipeline.resize({
      width: Math.round(originalWidth * scale),
      height: Math.round(originalHeight * scale),
      fit: 'fill',
    });
  }

  // Apply custom resize
  if (resize) {
    pipeline = pipeline.resize({
      width: resize.width,
      height: resize.height,
      fit: resize.fit || 'inside',
    });
  }

  // Print optimizations (300 DPI target)
  if (forPrint) {
    pipeline = pipeline.withMetadata({
      density: 300,
    });
  }

  // Format-specific processing
  switch (format) {
    case 'png':
      pipeline = pipeline.png({
        compressionLevel: forWeb ? 9 : 6,
        palette: false, // Keep full color for charts
      });
      break;

    case 'webp':
      pipeline = pipeline.webp({
        quality,
        lossless: quality === 100,
        effort: forWeb ? 6 : 4,
      });
      break;

    case 'avif':
      pipeline = pipeline.avif({
        quality,
        lossless: quality === 100,
        effort: forWeb ? 9 : 4,
      });
      break;

    case 'jpeg':
      pipeline = pipeline.jpeg({
        quality,
        progressive: true,
        mozjpeg: true,
      });
      break;
  }

  const outputBuffer = await pipeline.toBuffer();
  const outputMetadata = await sharp(outputBuffer).metadata();

  return {
    buffer: outputBuffer,
    format,
    width: outputMetadata.width || originalWidth,
    height: outputMetadata.height || originalHeight,
    size: outputBuffer.length,
  };
}

/**
 * Generate multiple output formats from a single input
 */
export async function generateMultiFormat(
  input: Buffer,
  formats: ('png' | 'webp' | 'avif')[] = ['png', 'webp'],
  baseOptions: Omit<PipelineOptions, 'format'> = {}
): Promise<Record<string, ProcessedImage>> {
  const results: Record<string, ProcessedImage> = {};

  await Promise.all(
    formats.map(async format => {
      results[format] = await processImage(input, { ...baseOptions, format });
    })
  );

  return results;
}

/**
 * Optimize for social media sharing
 */
export async function optimizeForSocial(
  input: Buffer,
  platform: 'twitter' | 'linkedin' | 'og' = 'og'
): Promise<ProcessedImage> {
  const dimensions = {
    twitter: { width: 1200, height: 675 },
    linkedin: { width: 1200, height: 627 },
    og: { width: 1200, height: 630 },
  };

  const { width, height } = dimensions[platform];

  return processImage(input, {
    format: 'png',
    resize: { width, height, fit: 'contain' },
    forWeb: true,
  });
}

/**
 * Optimize for book/print output
 */
export async function optimizeForPrint(
  input: Buffer,
  options: {
    widthInches?: number;
    heightInches?: number;
    dpi?: number;
  } = {}
): Promise<ProcessedImage> {
  const { widthInches = 6, heightInches = 4, dpi = 300 } = options;

  const width = Math.round(widthInches * dpi);
  const height = Math.round(heightInches * dpi);

  return processImage(input, {
    format: 'png',
    resize: { width, height, fit: 'inside' },
    forPrint: true,
    quality: 100,
  });
}

/**
 * Create responsive image set
 */
export async function createResponsiveSet(
  input: Buffer,
  baseName: string
): Promise<{ name: string; image: ProcessedImage }[]> {
  const sizes = [
    { suffix: 'sm', scale: 0.5 },
    { suffix: 'md', scale: 1 },
    { suffix: 'lg', scale: 1.5 },
    { suffix: '2x', scale: 2 },
  ];

  const results = await Promise.all(
    sizes.map(async ({ suffix, scale }) => {
      const image = await processImage(input, {
        format: 'webp',
        scale,
        forWeb: true,
      });

      return {
        name: `${baseName}-${suffix}.webp`,
        image,
      };
    })
  );

  return results;
}

/**
 * Get image info without processing
 */
export async function getImageInfo(input: Buffer) {
  const metadata = await sharp(input).metadata();
  return {
    width: metadata.width,
    height: metadata.height,
    format: metadata.format,
    size: input.length,
    hasAlpha: metadata.hasAlpha,
    channels: metadata.channels,
  };
}

/**
 * Composite multiple charts into a single image
 */
export async function compositeCharts(
  charts: { buffer: Buffer; x: number; y: number }[],
  canvasWidth: number,
  canvasHeight: number,
  backgroundColor: string = '#000000'
): Promise<Buffer> {
  // Create base canvas
  const canvas = sharp({
    create: {
      width: canvasWidth,
      height: canvasHeight,
      channels: 4,
      background: backgroundColor,
    },
  });

  // Composite all charts
  const composites = charts.map(({ buffer, x, y }) => ({
    input: buffer,
    left: x,
    top: y,
  }));

  return canvas.composite(composites).png().toBuffer();
}
