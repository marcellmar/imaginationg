# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This repository contains a Next.js website for "IMAGINATION G", a consulting/strategy studio. The website is built with React/Next.js, TypeScript, and follows a dark theme (black/zinc color scheme). Key features include:

- Responsive landing page with multiple sections
- Services pages with detailed information
- Interactive drift diagnostic tool
- PDF cheatsheet generation and download
- Client retention features (Momentum Hub, Momentum Tracker)
- Case studies section
- Email functionality for lead generation

The codebase uses:
- Next.js for page routing and server components
- React hooks (useState, useEffect, useRef)
- TypeScript for type safety
- Lucide React icons
- Tailwind CSS-like utility classes for styling
- Next.js Image component for optimized images
- PDF generation with @react-pdf/renderer
- Client-side JavaScript for interactive components

## Getting Started

To run the project locally:

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

The development server will start at http://localhost:3000

## File Structure

- `/pages/` - Next.js pages (routes)
  - `index.tsx` - Home page
  - `diagnostic.tsx` - Drift diagnostic interactive tool
  - `cheatsheet.tsx` - PDF download page
  - `momentum-hub.tsx` - Client Momentum Hub
  - `momentum-tracker.tsx` - Client Momentum Tracker
  - `case-studies.tsx` - Case studies page
  - `/services/` - Service detail pages
  - `/api/` - API routes for email and PDF generation

- `/components/` - Reusable React components
  - `ImaginationGLanding.tsx` - Main landing page component
  - `ServiceLayout.tsx` - Layout for service pages
  - `ServiceContent.tsx` - Content for service pages
  - `DriftCheatSheet.tsx` - Cheatsheet component
  - `CheatsheetPDF.tsx` - PDF renderer component
  - `MomentumTracker.tsx` - Tracker component
  - `NewsletterSignup.tsx` - Email signup component

- `/public/` - Static assets
  - `/images/` - Image assets
  - `IMAGINATION_G_Drift_Movement_Playbook.pdf` - Downloadable PDF

- `/styles/` - Global styles
  - `globals.css` - Global CSS

## Working with the Code

When making changes:

1. Maintain the responsive design patterns (mobile-first approach with md: breakpoints)
2. Keep consistent styling with the established color scheme (black, zinc, white with red/green accents)
3. For interactive components that require client-side JavaScript:
   - Use the useEffect hook to ensure scripts run only after component mounting
   - Prefer event listeners over inline onclick handlers
   - Use clean-up functions to prevent memory leaks
4. When working with PDF generation, test both visual rendering and download functionality

## Important Notes

1. The diagnostic.tsx page uses client-side JavaScript that properly attaches event listeners to YES/NO buttons after component mounting to prevent "selectAnswer is not defined" errors

2. For updating Marcus's photo, replace the image in `/public/images/marcus-davis.jpg` and it will update across the site

3. Email functionality uses nodemailer - ensure proper configuration when deploying to production

4. All image paths now point to proper image files in the `/public/images/` directory