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

## Deployment

### GitHub
- **Repository:** `marcellmar/imaginationg`
- **Branch:** `main` (auto-deploys to Vercel)
- **URL:** https://github.com/marcellmar/imaginationg

### Vercel
- **Project:** imaginationg
- **Domain:** https://gpi.studio
- **Framework:** Next.js (auto-detected)
- **Build Command:** `npm run build`
- **Output Directory:** `.next`

### Environment Variables (Vercel)
Required environment variables in Vercel dashboard:
- `NOTION_API_KEY` - Notion integration token for GPI content and diagnostic submissions
- `RESEND_API_KEY` - Resend API key for transactional emails (optional, emails won't send without it)

### Notion Databases
The site integrates with Notion for content management:
- **GPI Analyses:** `7d636c92-c316-4bfc-9bc7-7899e575e19e` - Company/industry GPI scores
- **GPI Content:** `2d8990ae-cd45-811a-b634-c11c51be4013` - Published articles (7 series)
- **Diagnostic Submissions:** `2d8990ae-cd45-810c-bcf6-cf242c398775` - User diagnostic results

### Content Series
GPI Analyses publishes 7 content series:
1. **Weekly Smackdown** - Head-to-head GPI comparisons
2. **Transition Watch** - Companies attempting transformation
3. **Calcification Alert** - High-GPI particles in the news
4. **Field Notes** - How low-GPI companies stay fluid
5. **Wildcard** - Unexpected insights ("can't unsee it" test)
6. **The Autopsy** - Forensic breakdown of dead companies
7. **Vital Signs** - Ongoing metabolic monitoring, early warnings

## API Routes

- `/api/gpi-content` - Fetch published GPI content from Notion
- `/api/gpi-content/[slug]` - Fetch single article by slug with blocks
- `/api/diagnostic-submit` - Save diagnostic results to Notion + email via Resend
- `/api/subscribe` - Email list signup

## Key Pages

- `/diagnostic` - 32-question GPI diagnostic with results and save modal
- `/insights/gpi-analyses` - Content hub for all GPI articles
- `/insights/gpi-analyses/[slug]` - Individual article pages
- `/actions` - Action guides index
- `/actions/[dimension]` - Dimension-specific action guides (7 pages)
- `/gpi-framework` - GPI Framework explanation with dimension pages

## Writing Style Preferences

All GPI content on this website follows Marcus's book voice. See the brain at `/book-consulting/active-spirals/constructed-artifacts/gpi-book-writing-skill.md` for full guidelines.

**Structure:**
- Numbered sections (## 1., ## 2., ## 3., etc.)
- Very short paragraphs, often single sentences
- No formal headers, no signposting
- Let ideas flow naturally

**Voice:**
- **Never use em dashes (—)** - Use commas, periods, or "and" instead
- Contractions everywhere (don't, can't, won't)
- Specific numbers always ($352M, 5%, 6.7 not "significant" or "major")
- Bar conversation, not boardroom presentation
- Read aloud test: if it sounds like a deck, rewrite

**Kill ALL AI patterns:**
- NO "Here's the..." or "Here's what..."
- NO "What to watch" or "What this means" signposting
- NO "That's not X. That's Y." line-break reversals
- NO "Furthermore," "Moreover," "Additionally"
- NO sentence triplets or mirror structures
- NO instructional framing ("Let me show you")

**What works:**
- Short declarative punchlines: "Direction of travel is clear."
- Questions that land: "You don't ask that question when the parks are full."
- Direct statements without setup: "The tell." not "Here's the tell."
- Specific numbers: "Attendance down 1%. Per-guest spending up 5%."
- Simple transitions: Just start the next paragraph

**GPI terminology:**
- Field (1.0-3.0): Fluid, adaptive
- Transitioning (3.1-6.9): Mixed state
- Particle (7.0-10.0): Rigid, calcified
- Core concept: "Friction is margin"

**Series-specific:**
- Wildcard content must pass the "can't unsee it" test
- Vital Signs: numbered sections, see Disney example in brain

**Sources as inline hyperlinks:**
Make the word/number itself the clickable link (different color). No "Sources:" section.

Examples:
- "Attendance fell [1%](url)" → reader clicks "1%"
- "[$352M](url) operating income" → reader clicks "$352M"
- "CFO [said it](url)" → reader clicks "said it"

Don't link: analysis, GPI scores, opinions.

## GPI Dimension Keys

Used in code for mapping:
- `DECISION_LATENCY` - Decision Speed
- `ERROR_CORRECTION` - Error Correction
- `KNOWLEDGE_LOCATION` - Knowledge Flow
- `KNOWLEDGE_VELOCITY` - Velocity
- `TALENT_FLOW` - Talent Mobility
- `STRUCTURAL_LOCKIN` - Structural Lock-in
- `CAPITAL_INTENSITY` - Capital Efficiency