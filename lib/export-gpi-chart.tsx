/**
 * GPI Chart Export Utility
 * Export React SVG charts as standalone PNG/SVG images
 *
 * Usage:
 * 1. In browser: Call exportChartAsPNG(svgElement, 'filename')
 * 2. Server-side: Use the API endpoint with Puppeteer
 * 3. CLI: Use the standalone script with Playwright
 */

// ============================================
// BROWSER EXPORT (Client-side)
// ============================================

/**
 * Export an SVG element as PNG
 * Works in browser only
 */
export async function exportChartAsPNG(
  svgElement: SVGElement,
  filename: string = 'gpi-chart',
  scale: number = 2 // 2x for retina
): Promise<void> {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Canvas context not available');

  // Get SVG dimensions
  const svgRect = svgElement.getBoundingClientRect();
  canvas.width = svgRect.width * scale;
  canvas.height = svgRect.height * scale;

  // Create image from SVG
  const svgData = new XMLSerializer().serializeToString(svgElement);
  const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
  const url = URL.createObjectURL(svgBlob);

  const img = new Image();
  img.onload = () => {
    // Fill background (black for IG style)
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw scaled image
    ctx.scale(scale, scale);
    ctx.drawImage(img, 0, 0);

    // Trigger download
    const pngUrl = canvas.toDataURL('image/png');
    const downloadLink = document.createElement('a');
    downloadLink.href = pngUrl;
    downloadLink.download = `${filename}.png`;
    downloadLink.click();

    URL.revokeObjectURL(url);
  };
  img.src = url;
}

/**
 * Export an SVG element as SVG file
 */
export function exportChartAsSVG(
  svgElement: SVGElement,
  filename: string = 'gpi-chart'
): void {
  // Clone and add background
  const clone = svgElement.cloneNode(true) as SVGElement;

  // Add black background rect as first child
  const bg = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  bg.setAttribute('width', '100%');
  bg.setAttribute('height', '100%');
  bg.setAttribute('fill', '#000000');
  clone.insertBefore(bg, clone.firstChild);

  const svgData = new XMLSerializer().serializeToString(clone);
  const blob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
  const url = URL.createObjectURL(blob);

  const downloadLink = document.createElement('a');
  downloadLink.href = url;
  downloadLink.download = `${filename}.svg`;
  downloadLink.click();

  URL.revokeObjectURL(url);
}

// ============================================
// REACT HOOK FOR EASY EXPORT
// ============================================

import { useRef, useCallback } from 'react';

/**
 * Hook to add export capability to any chart component
 *
 * Usage:
 * const { svgRef, exportPNG, exportSVG } = useChartExport();
 * <svg ref={svgRef}>...</svg>
 * <button onClick={() => exportPNG('my-chart')}>Download PNG</button>
 */
export function useChartExport() {
  const svgRef = useRef<SVGSVGElement>(null);

  const exportPNG = useCallback(async (filename?: string) => {
    if (svgRef.current) {
      await exportChartAsPNG(svgRef.current, filename);
    }
  }, []);

  const exportSVG = useCallback((filename?: string) => {
    if (svgRef.current) {
      exportChartAsSVG(svgRef.current, filename);
    }
  }, []);

  return { svgRef, exportPNG, exportSVG };
}

// ============================================
// COMPONENT WRAPPER WITH EXPORT BUTTON
// ============================================

import React from 'react';

interface ExportableChartProps {
  children: React.ReactNode;
  filename?: string;
  showExportButton?: boolean;
}

/**
 * Wrapper component that adds export functionality
 *
 * Usage:
 * <ExportableChart filename="netflix-gpi">
 *   <GPIRadarChart dimensions={...} />
 * </ExportableChart>
 */
export const ExportableChart: React.FC<ExportableChartProps> = ({
  children,
  filename = 'gpi-chart',
  showExportButton = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleExport = async (format: 'png' | 'svg') => {
    const svg = containerRef.current?.querySelector('svg');
    if (!svg) return;

    if (format === 'png') {
      await exportChartAsPNG(svg, filename);
    } else {
      exportChartAsSVG(svg, filename);
    }
  };

  return (
    <div className="relative">
      <div ref={containerRef}>{children}</div>

      {showExportButton && (
        <div className="absolute top-2 right-2 flex gap-2">
          <button
            onClick={() => handleExport('png')}
            className="px-2 py-1 text-xs bg-zinc-800 hover:bg-zinc-700 text-white rounded transition-colors"
          >
            PNG
          </button>
          <button
            onClick={() => handleExport('svg')}
            className="px-2 py-1 text-xs bg-zinc-800 hover:bg-zinc-700 text-white rounded transition-colors"
          >
            SVG
          </button>
        </div>
      )}
    </div>
  );
};

// ============================================
// SERVER-SIDE / CLI EXPORT (Node.js)
// ============================================

/**
 * For server-side rendering, create an API route or script:
 *
 * Option 1: Puppeteer (headless Chrome)
 * ```
 * npm install puppeteer
 * ```
 *
 * Option 2: Playwright
 * ```
 * npm install playwright
 * ```
 *
 * See: /scripts/export-gpi-charts.ts for CLI implementation
 */

// Type exports
export type { ExportableChartProps };
