import satori from 'satori';
import sharp from 'sharp';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const fontBold = readFileSync('/System/Library/Fonts/Supplemental/Arial Black.ttf');
const fontRegular = readFileSync('/System/Library/Fonts/Supplemental/Arial Bold.ttf');

const svg = await satori(
  {
    type: 'div',
    props: {
      style: {
        width: '300px',
        height: '300px',
        backgroundColor: '#fafaf9', // stone-50
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      },
      children: [
        {
          type: 'div',
          props: {
            style: {
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'baseline',
            },
            children: [
              {
                type: 'span',
                props: {
                  style: {
                    fontSize: '42px',
                    fontWeight: 900,
                    color: '#1c1917',
                    letterSpacing: '-1px',
                    lineHeight: 1,
                  },
                  children: 'GPI',
                },
              },
              {
                type: 'span',
                props: {
                  style: {
                    fontSize: '42px',
                    fontWeight: 900,
                    color: '#dc2626',
                    lineHeight: 1,
                    marginLeft: '1px',
                    marginRight: '1px',
                  },
                  children: '.',
                },
              },
              {
                type: 'span',
                props: {
                  style: {
                    fontSize: '42px',
                    fontWeight: 900,
                    color: '#1c1917',
                    letterSpacing: '-1px',
                    lineHeight: 1,
                  },
                  children: 'STUDIO',
                },
              },
            ],
          },
        },
      ],
    },
  },
  {
    width: 300,
    height: 300,
    fonts: [
      {
        name: 'Arial Black',
        data: fontBold,
        weight: 900,
        style: 'normal',
      },
      {
        name: 'Arial Black',
        data: fontRegular,
        weight: 700,
        style: 'normal',
      },
    ],
  }
);

const png = await sharp(Buffer.from(svg)).png().toFile(
  join(__dirname, '..', 'public', 'images', 'gpi-studio-linkedin-logo.png')
);

console.log('Created: public/images/gpi-studio-linkedin-logo.png (300x300)');
