# IMAGINATION G

A devastatingly anti-consulting website that confronts drift and forces movement.

## Overview

IMAGINATION G is not a consulting firm. We don't partner, build, or nurture. We collide, hold mirrors, and leave. This site embodies the complete anti-pattern to traditional consulting.

## Philosophy

- **We don't consult. We collide.**
- **We don't help. We confront.**
- **We don't stay. We leave.**

## Site Architecture

### 1. The Holding Room (`/`)
- Single entry point
- No navigation
- No scrolling
- One door: "YOU SUCK. NOW WHAT?"
- Self-filtering mechanism

### 2. The Confrontation Flow (`/ig-complete-flow`)
- Forces users to name their drift
- Choose their "weapon" (service)
- No escape routes except forward
- Aggressive, confrontational messaging

### 3. Weapons (`/weapons`)
- Five collision tools priced from $500-$5,000
- No nurturing, just deployment
- Each weapon has a specific drift target

### 4. About (`/about`)
- Grid-based compact layout
- "What We Are" vs "What We're Not"
- Marcus Davis: minimal bio, maximum impact
- No testimonials, no case studies

### 5. Diagnostic (`/diagnostic`)
- 60-second drift assessment
- Prescribes specific weapons
- Aggressive questioning
- No soft options

## Technical Stack

- **Framework**: Next.js 13
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: React
- **Email**: Nodemailer
- **PDF Generation**: @react-pdf/renderer

## Services (Weapons)

1. **Clarity Collision** ($500) - 60-minute clarity collision
2. **Ecosystem Collision Map** ($1,000) - Visual ecosystem mapping
3. **Pre-Market Signal Scan** ($1,500) - Market signal detection
4. **Momentum Sprint** ($3,000) - 3-week momentum building
5. **MVP Accelerator** ($5,000) - 4-week MVP deployment

## Key Features

- **No Navigation on Home**: Just the holding room and one door
- **Aggressive Messaging**: Anti-consulting ethos throughout
- **Self-Selection**: Designed to filter out the uncommitted
- **No Follow-Up**: We leave, no nurturing sequences
- **Direct Booking**: No sales process, just action

## Getting Started

First, install the dependencies:

```bash
npm install
```

Create a `.env.local` file with your email credentials:

```bash
cp .env.local.example .env.local
```

Edit `.env.local`:

```
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Note: For Gmail, use an app password. See [Google's documentation](https://support.google.com/accounts/answer/185833).

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

## Deployment

The site is optimized for Vercel deployment. Simply connect your GitHub repository to Vercel and it will auto-deploy on push to main.

```bash
npm run build
npm run start
```

## Content Philosophy

- **Short, Punchy Statements**: No fluff, no explanations
- **Confrontational Tone**: Direct, aggressive, unapologetic
- **Binary Choices**: Move or drift, no middle ground
- **No Social Proof**: We don't care about success stories
- **No Process**: Just collision and exit

## User Journey

1. Land on holding room
2. Read confrontational messaging
3. Click "YOU SUCK. NOW WHAT?" or leave
4. Enter confrontation flow
5. Name your drift
6. Choose your weapon
7. Book and pay
8. We collide and leave

## Design Principles

- **Black and White**: Minimal color, maximum contrast
- **Red Accents**: For CTAs and emphasis
- **Grid Layouts**: Structured, no-nonsense presentation
- **Large Typography**: Bold statements, no subtlety
- **No Images**: Except Marcus Davis photo

## Anti-Patterns Embraced

- No testimonials
- No case studies
- No blog
- No resources
- No community
- No follow-up
- No nurturing
- No soft sells
- No multiple entry points
- No safety nets

## Key Files

- `/pages/index.tsx` - The holding room
- `/IG Complete Flow (2).tsx` - Confrontation flow component
- `/pages/weapons/` - Individual weapon pages
- `/components/WeaponLayout.tsx` - Weapon page layout
- `/pages/diagnostic.tsx` - Drift diagnostic tool
- `/pages/about.tsx` - About IG (grid layout)

## Email Configuration

The site uses Nodemailer for email functionality. Configure SMTP settings in `.env.local`:

```
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
```

## PDF Generation

The site generates PDF cheatsheets using @react-pdf/renderer. PDFs are stored in `/public/`:

- `IMAGINATION_G_5_Signals_Cheatsheet.pdf`
- `IMAGINATION_G_Drift_Movement_Playbook.pdf`

## Author

Built by Marcus Davis after 10 years of watching brilliant people drift.

---

**Remember**: This site is designed to repel as much as attract. If someone leaves without clicking the door, it's working perfectly.