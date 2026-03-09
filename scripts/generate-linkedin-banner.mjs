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
        width: '1128px',
        height: '191px',
        backgroundColor: '#fafaf9',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: '60px',
        paddingRight: '60px',
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
                    fontSize: '48px',
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
                    fontSize: '48px',
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
                    fontSize: '48px',
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
        {
          type: 'div',
          props: {
            style: {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
            },
            children: [
              {
                type: 'span',
                props: {
                  style: {
                    fontSize: '18px',
                    fontWeight: 700,
                    color: '#78716c',
                    letterSpacing: '2px',
                    lineHeight: 1.4,
                  },
                  children: 'SEE WHAT\'S BROKEN,',
                },
              },
              {
                type: 'span',
                props: {
                  style: {
                    fontSize: '18px',
                    fontWeight: 700,
                    color: '#78716c',
                    letterSpacing: '2px',
                    lineHeight: 1.4,
                  },
                  children: 'BUILD WHAT\'S NEXT.',
                },
              },
            ],
          },
        },
      ],
    },
  },
  {
    width: 1128,
    height: 191,
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
  join(__dirname, '..', 'public', 'images', 'gpi-studio-linkedin-banner.png')
);

console.log('Created: public/images/gpi-studio-linkedin-banner.png (1128x191)');
