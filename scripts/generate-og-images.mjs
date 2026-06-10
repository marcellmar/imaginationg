import satori from 'satori';
import sharp from 'sharp';
import { readFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const fontBold = readFileSync('/System/Library/Fonts/Supplemental/Arial Black.ttf');
const fontRegular = readFileSync('/System/Library/Fonts/Supplemental/Arial Bold.ttf');
const outDir = join(__dirname, '..', 'public', 'images', 'og');

mkdirSync(outDir, { recursive: true });

const fonts = [
  { name: 'Arial Black', data: fontBold, weight: 900, style: 'normal' },
  { name: 'Arial Black', data: fontRegular, weight: 700, style: 'normal' },
];

async function generateOG(filename, title, subtitle, accent = false) {
  const svg = await satori(
    {
      type: 'div',
      props: {
        style: {
          width: '1200px',
          height: '630px',
          backgroundColor: '#fafaf9',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
        },
        children: [
          {
            type: 'div',
            props: {
              style: {
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'baseline',
                marginBottom: '40px',
              },
              children: [
                {
                  type: 'span',
                  props: {
                    style: { fontSize: '24px', fontWeight: 900, color: '#1c1917', letterSpacing: '-0.5px' },
                    children: 'GPI',
                  },
                },
                {
                  type: 'span',
                  props: {
                    style: { fontSize: '24px', fontWeight: 900, color: '#dc2626', marginLeft: '1px', marginRight: '1px' },
                    children: '.',
                  },
                },
                {
                  type: 'span',
                  props: {
                    style: { fontSize: '24px', fontWeight: 900, color: '#1c1917', letterSpacing: '-0.5px' },
                    children: 'STUDIO',
                  },
                },
              ],
            },
          },
          {
            type: 'div',
            props: {
              style: {
                fontSize: '64px',
                fontWeight: 900,
                color: '#1c1917',
                lineHeight: 1.1,
                letterSpacing: '-2px',
                maxWidth: '900px',
              },
              children: title,
            },
          },
          subtitle ? {
            type: 'div',
            props: {
              style: {
                fontSize: '24px',
                fontWeight: 700,
                color: '#78716c',
                marginTop: '24px',
                maxWidth: '800px',
                lineHeight: 1.4,
              },
              children: subtitle,
            },
          } : null,
          {
            type: 'div',
            props: {
              style: {
                position: 'absolute',
                bottom: '80px',
                left: '80px',
                fontSize: '16px',
                fontWeight: 700,
                color: '#a8a29e',
                letterSpacing: '3px',
              },
              children: 'gpi.studio',
            },
          },
          accent ? {
            type: 'div',
            props: {
              style: {
                position: 'absolute',
                bottom: '0',
                left: '0',
                right: '0',
                height: '6px',
                backgroundColor: '#dc2626',
              },
              children: '',
            },
          } : null,
        ].filter(Boolean),
      },
    },
    { width: 1200, height: 630, fonts }
  );

  await sharp(Buffer.from(svg)).png().toFile(join(outDir, filename));
  console.log(`Created: ${filename}`);
}

// Generate all OG images
await generateOG('home.png', "GROWING PAINS AREN'T RANDOM.", 'They leave signals. GPI Studio reads the pressure before it hardens.', true);
await generateOG('home-growing-pains.png', "GROWING PAINS AREN'T RANDOM.", 'They leave signals. GPI Studio reads the pressure before it hardens.', true);
await generateOG('diagnostic.png', 'ORGANIZATIONAL DIAGNOSTIC', '42 questions. 7 dimensions. See what the balance sheet misses.', true);
await generateOG('insights.png', 'INSIGHTS', 'Research and analysis on organizational physics.', false);
await generateOG('framework.png', 'THE GPI FRAMEWORK', '7 dimensions that determine whether an organization can move.', true);
await generateOG('companies.png', 'COMPANY ANALYSES', '48+ organizations scored across structural friction, decision latency, and metabolic rate.', false);
await generateOG('analyses.png', 'GPI ANALYSES', 'Deep dives into how real companies score on organizational physics.', false);

// Article OGs
const articles = [
  { file: 'friction-is-margin.png', title: 'FRICTION IS MARGIN', sub: 'That delay and complexity is someone\'s business model.' },
  { file: 'metabolic-rate.png', title: 'METABOLIC RATE', sub: 'Every organization has one. Most don\'t measure it.' },
  { file: 'invested-in-the-waste.png', title: 'INVESTED IN THE WASTE', sub: 'When the dysfunction becomes the strategy.' },
  { file: 'acquisition-trap.png', title: 'THE ACQUISITION TRAP', sub: 'Buying growth doesn\'t fix the metabolism.' },
  { file: 'success-creates-rigidity.png', title: 'WHY SUCCESS CREATES RIGIDITY', sub: 'The thing that worked becomes the thing that kills you.' },
  { file: 'organizational-antibodies.png', title: 'ORGANIZATIONAL ANTIBODIES', sub: 'Every org has an immune system. It doesn\'t always protect the right things.' },
  { file: 'spiral-model.png', title: 'THE SPIRAL MODEL', sub: 'Organizations don\'t transform linearly. They spiral.' },
  { file: 'latent-capabilities.png', title: 'LATENT CAPABILITIES', sub: 'What your org can do but doesn\'t know it can do.' },
  { file: 'netflix-paramount.png', title: 'NETFLIX LET PARAMOUNT WIN', sub: 'Sometimes the best move is letting someone else have the thing you don\'t need.' },
];

for (const a of articles) {
  await generateOG(a.file, a.title, a.sub, true);
}

console.log(`\nDone. ${9 + 6} OG images generated in public/images/og/`);
