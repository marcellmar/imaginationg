// Script to generate OG images for IMAGINATION G
// Run with: node scripts/generate-og-images.js

const fs = require('fs');
const path = require('path');

// SVG template for OG images
const createOGImage = (title = 'IMAGINATION G', subtitle = 'Stop Drifting. Start Moving.') => {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <!-- Black background -->
  <rect width="1200" height="630" fill="#000000"/>
  
  <!-- Red accent line -->
  <rect x="0" y="0" width="8" height="630" fill="#DC2626"/>
  
  <!-- Title -->
  <text x="100" y="250" font-family="Arial, sans-serif" font-size="72" font-weight="900" fill="#FFFFFF">
    ${title}
  </text>
  
  <!-- Subtitle -->
  <text x="100" y="340" font-family="Arial, sans-serif" font-size="36" font-weight="400" fill="#A1A1AA">
    ${subtitle}
  </text>
  
  <!-- Bottom branding -->
  <text x="100" y="550" font-family="Arial, sans-serif" font-size="24" font-weight="700" fill="#DC2626">
    IMAGINATION G
  </text>
  
  <!-- Grid pattern for visual interest -->
  <g opacity="0.05">
    ${Array.from({ length: 12 }, (_, i) => 
      `<line x1="${i * 100}" y1="0" x2="${i * 100}" y2="630" stroke="#FFFFFF" stroke-width="1"/>`
    ).join('')}
    ${Array.from({ length: 7 }, (_, i) => 
      `<line x1="0" y1="${i * 90}" x2="1200" y2="${i * 90}" stroke="#FFFFFF" stroke-width="1"/>`
    ).join('')}
  </g>
</svg>`;
};

// Create default OG image
const defaultOG = createOGImage();
fs.writeFileSync(
  path.join(__dirname, '../public/images/og-default.svg'),
  defaultOG
);

// Create specific OG images for key pages
const ogImages = [
  { file: 'og-home.svg', title: 'STOP DRIFTING', subtitle: 'Start Moving. Override Dysfunction.' },
  { file: 'og-about.svg', title: 'SIGNAL AMPLIFIERS', subtitle: 'Not Optimizers. We Override.' },
  { file: 'og-services.svg', title: 'MOVEMENT WEAPONS', subtitle: 'Binary Choices. Forced Progress.' },
  { file: 'og-answers.svg', title: 'BURIED TRUTHS', subtitle: 'Business Dysfunction Decoded.' },
  { file: 'og-diagnostic.svg', title: 'DETECT YOUR DRIFT', subtitle: '19 Binary Questions. Zero Escape.' },
];

ogImages.forEach(({ file, title, subtitle }) => {
  const svg = createOGImage(title, subtitle);
  fs.writeFileSync(
    path.join(__dirname, '../public/images/', file),
    svg
  );
});

console.log('✅ OG images generated successfully');
console.log('📝 Note: You may want to convert these SVGs to JPGs/PNGs for better compatibility');
console.log('   Use an online converter or image editing software');