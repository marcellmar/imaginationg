# IMAGINATION G Landing Page

This is a modern, responsive landing page for IMAGINATION G, a strategic studio for founders and teams founded by Marcus Davis.

## Technologies Used

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
```

Create a `.env.local` file from the example:

```bash
cp .env.local.example .env.local
```

Edit `.env.local` to add your email credentials for PDF delivery:

```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Note: For Gmail, you'll need to use an app password. See [Google's documentation](https://support.google.com/accounts/answer/185833) for setup instructions.

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

The easiest way to deploy this app is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Adding Real Content

To make the landing page your own:

1. Replace placeholder images in `/public/images/` with your actual images
2. Update the text content in `components/ImaginationGLanding.tsx`
3. Replace the scheduling and contact links with your actual service links
4. Add your analytics tracking code in `pages/_app.tsx`
5. Update the meta tags in `pages/index.tsx`

## Features

- Fully responsive design
- Animated hero section
- Service cards with detailed service pages
- Testimonials
- FAQ accordion
- PDF cheatsheet generation and download
- Email delivery of cheatsheet PDF
- SEO optimized
- Mobile floating action button