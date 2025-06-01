# AEO Audit Action Checklist

Based on the site audit, here's a prioritized checklist for making IMAGINATION G AEO-ready.

---

## 🚨 CRITICAL - Do Today (2-4 hours)

### 1. Create robots.txt
**Location**: `/public/robots.txt`
```txt
# AI Engine Crawlers
User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: Meta-ExternalAgent
Allow: /

# Traditional Crawlers
User-agent: *
Allow: /

# Sitemap
Sitemap: https://www.imaginationg.studio/sitemap.xml
```

### 2. Add Homepage Schema
**File**: `/pages/index.tsx`
```jsx
// Add to <Head> section
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "IMAGINATION G",
      "url": "https://www.imaginationg.studio",
      "description": "Movement Architecture & Business Transformation",
      "slogan": "Stop Drifting. Start Moving."
    })
  }}
/>
```

### 3. Install Analytics
```bash
npm install @next/third-parties
```

Add to `/pages/_app.tsx`:
```jsx
import { GoogleAnalytics } from '@next/third-parties/google'

<GoogleAnalytics gaId="G-XXXXXXXXXX" />
```

### 4. Fix Meta Descriptions
Update all pages to answer queries directly:
- ❌ Current: "You suck. Now what?"
- ✅ Better: "Organizational drift kills businesses. Movement Architecture transforms them in 30 days. No consulting BS."

---

## ⚡ HIGH PRIORITY - This Week (10-15 hours)

### 5. Install & Configure Sitemap
```bash
npm install next-sitemap
```

Create `next-sitemap.config.js`:
```javascript
module.exports = {
  siteUrl: 'https://www.imaginationg.studio',
  generateRobotsTxt: false, // We created custom
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/api/*'],
}
```

Add to `package.json`:
```json
"scripts": {
  "postbuild": "next-sitemap"
}
```

### 6. Create First Answer Pages
Create `/pages/answers/glossary/` directory:

**organizational-drift.tsx**:
```jsx
export async function getStaticProps() {
  return {
    props: {
      title: "What is Organizational Drift?",
      description: "Organizational drift is the gradual loss of momentum and purpose in businesses, leading to stagnation despite activity."
    }
  }
}
```

### 7. Add Schema to Service Pages
For each weapon/service page, add:
```jsx
<script type="application/ld+json">
{JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "The Naming",
  "description": "60-minute clarity catalyst session",
  "provider": {
    "@type": "Organization",
    "name": "IMAGINATION G"
  },
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Business Transformation Services"
  }
})}
</script>
```

### 8. Create Basic FAQ Schema
Add to relevant pages:
```jsx
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "What is Movement Architecture?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Movement Architecture is the systematic design of organizational transformation through binary decisions and forced progress."
    }
  }]
}
```

### 9. Set Up AI Tracking
Create `/components/AITracker.tsx`:
```jsx
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function AITracker() {
  const router = useRouter();
  
  useEffect(() => {
    const trackAIReferral = () => {
      const referrer = document.referrer;
      const aiDomains = [
        'chat.openai.com',
        'perplexity.ai',
        'claude.ai',
        'bard.google.com'
      ];
      
      if (aiDomains.some(domain => referrer.includes(domain))) {
        // Track with GA4
        gtag('event', 'ai_referral', {
          source: referrer,
          page: router.pathname
        });
      }
    };
    
    trackAIReferral();
  }, [router.pathname]);
  
  return null;
}
```

---

## 📈 MEDIUM PRIORITY - This Month (40 hours)

### 10. Create Answer Content Hub
Structure:
```
/pages/answers/
├── index.tsx (hub page)
├── glossary/
│   ├── movement-architecture.tsx
│   ├── organizational-drift.tsx
│   ├── clarity-catalyst.tsx
│   └── binary-decisions.tsx
├── guides/
│   ├── diagnose-drift.tsx
│   ├── 30-day-sprint.tsx
│   └── stop-strategy-theater.tsx
├── compare/
│   ├── consultant-vs-catalyst.tsx
│   └── planning-vs-movement.tsx
└── philosophy/
    ├── why-consulting-fails.tsx
    └── movement-manifesto.tsx
```

### 11. Optimize Existing Content
For each existing page:
- [ ] Add comprehensive meta tags
- [ ] Include publish/modified dates
- [ ] Add relevant schema markup
- [ ] Ensure static rendering
- [ ] Add internal links to answers

### 12. Create next.config.js
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.imaginationg.studio'],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index, follow'
          }
        ]
      }
    ]
  }
}

module.exports = nextConfig
```

### 13. Performance Optimization
- [ ] Remove Google Fonts, use system fonts
- [ ] Implement image lazy loading
- [ ] Add resource hints for critical assets
- [ ] Enable Next.js automatic static optimization

### 14. Content Templates
Create reusable templates for:
- [ ] Glossary definitions
- [ ] How-to guides  
- [ ] Comparison pages
- [ ] Philosophy articles
- [ ] Case studies

---

## 🎯 QUICK WINS - Can Do Immediately

### Meta Description Updates
Update these pages with answer-focused descriptions:

**index.tsx**:
```jsx
<meta name="description" content="Stop organizational drift with Movement Architecture. Transform your business in 30 days through binary decisions and forced progress. No consulting theater." />
```

**diagnostic.tsx**:
```jsx
<meta name="description" content="Diagnose your organizational drift in 60 seconds. Free assessment reveals if you're moving or just busy. Get your prescribed transformation weapon." />
```

**about.tsx**:
```jsx
<meta name="description" content="IMAGINATION G creates business transformation through confrontation, not consultation. We force movement, not plans. Learn our catalyst approach." />
```

### Internal Linking
Add to every page footer:
```jsx
<div className="mt-16 pt-8 border-t border-zinc-800">
  <h4 className="font-black mb-4">Learn More</h4>
  <div className="grid md:grid-cols-3 gap-4 text-sm">
    <Link href="/answers/glossary/organizational-drift">
      What is Organizational Drift? →
    </Link>
    <Link href="/answers/compare/consultant-vs-catalyst">
      Consultant vs Catalyst →
    </Link>
    <Link href="/answers/guides/30-day-movement">
      The 30-Day Movement Sprint →
    </Link>
  </div>
</div>
```

---

## 📊 Measurement Setup

### 1. Google Search Console
- Verify property ownership
- Submit sitemap
- Monitor crawl errors
- Track search performance

### 2. AI Citation Monitoring
Weekly manual checks:
- [ ] Search your terms in ChatGPT
- [ ] Query Perplexity for your concepts
- [ ] Test Claude's knowledge
- [ ] Document citations found

### 3. Custom Analytics Events
Track these interactions:
```javascript
// AI Referral
gtag('event', 'ai_referral', { source, landing_page });

// Answer Page Views  
gtag('event', 'answer_page_view', { topic, type });

// Conversion from Answer
gtag('event', 'answer_to_conversion', { answer_topic, conversion_type });
```

---

## 🚀 30-Day Success Metrics

### Week 1 Goals
- [ ] robots.txt live
- [ ] 5 answer pages published
- [ ] Schema on homepage
- [ ] Analytics tracking

### Week 2 Goals  
- [ ] Sitemap submitted
- [ ] 15 answer pages live
- [ ] All services have schema
- [ ] Meta tags optimized

### Week 3 Goals
- [ ] 30 answer pages live
- [ ] First AI citations appearing
- [ ] Performance optimized
- [ ] Internal linking complete

### Week 4 Goals
- [ ] 50+ pages indexed
- [ ] Multiple AI citations
- [ ] Traffic from AI sources
- [ ] First AI-driven lead

---

## Resources Needed

### Technical
- Developer time: 40-60 hours
- Content writer: 20-30 hours  
- SEO specialist: 10-15 hours

### Tools
- Next-sitemap: Free
- Schema validator: Free
- Search Console: Free
- Analytics: Free

### Budget
- Technical implementation: $5,000-10,000
- Content creation: $5,000-10,000
- Total investment: $10,000-20,000
- ROI timeline: 60-90 days

---

*Checklist Version: 1.0*  
*Created from Audit: January 30, 2025*  
*Start Date: ____________*  
*Target Completion: ____________*