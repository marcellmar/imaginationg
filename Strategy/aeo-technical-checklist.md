# AEO Technical Implementation Checklist

## Overview

This checklist ensures IMAGINATION G's website is fully optimized for AI engine crawling, indexing, and citation. Complete these items before launching AEO content.

---

## 1. AI Crawler Access ✓

### robots.txt Configuration

**Current robots.txt location**: `/public/robots.txt`

```txt
# AI Crawler Access
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Meta-ExternalAgent
Allow: /

User-agent: Meta-ExternalFetcher
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: Claude
Allow: /

# Traditional Crawlers
User-agent: *
Allow: /

# Sitemap
Sitemap: https://www.imaginationg.studio/sitemap.xml
```

### Implementation Steps
- [ ] Update `/public/robots.txt` with AI crawler permissions
- [ ] Verify no security plugins block AI user agents
- [ ] Test crawler access using online robots.txt validators
- [ ] Monitor server logs for AI crawler activity

---

## 2. Static Site Generation (SSG) Setup ✓

### Next.js Configuration

**For Answer Pages** (`/pages/answers/[...slug].tsx`):

```typescript
export async function getStaticPaths() {
  // Generate paths for all answer pages
  const paths = await getAllAnswerPaths();
  return {
    paths,
    fallback: 'blocking' // Generate new pages on-demand
  };
}

export async function getStaticProps({ params }) {
  const content = await getAnswerContent(params.slug);
  return {
    props: { content },
    revalidate: 86400 // Regenerate every 24 hours
  };
}
```

### Implementation Checklist
- [ ] Convert all answer pages to use `getStaticProps`
- [ ] Remove client-side data fetching from answer pages
- [ ] Ensure content is fully rendered in initial HTML
- [ ] Test with JavaScript disabled

---

## 3. Performance Optimization ✓

### Target Metrics
- [ ] Page Speed: < 2 seconds (target: < 1 second)
- [ ] Time to First Byte: < 500ms
- [ ] Core Web Vitals: All green
- [ ] Lighthouse Score: > 90

### Implementation Steps

**1. Image Optimization**
```jsx
import Image from 'next/image';

<Image
  src="/images/concept.jpg"
  alt="Descriptive alt text for AI understanding"
  width={800}
  height={400}
  priority={true} // For above-fold images
  placeholder="blur"
/>
```

**2. Font Optimization**
```css
/* Use font-display: swap for faster rendering */
@font-face {
  font-family: 'Custom Font';
  src: url('/fonts/custom.woff2') format('woff2');
  font-display: swap;
}
```

**3. Code Splitting**
```typescript
// Lazy load non-critical components
const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  ssr: false // Don't render server-side if not needed
});
```

### Checklist
- [ ] Implement Next.js Image component for all images
- [ ] Enable automatic image optimization
- [ ] Configure CDN for static assets
- [ ] Implement proper caching headers
- [ ] Minimize JavaScript bundle size
- [ ] Enable gzip/brotli compression

---

## 4. Schema Markup Implementation ✓

### Required Schema Types

**1. Organization Schema** (Site-wide)
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.imaginationg.studio/#organization",
  "name": "IMAGINATION G",
  "url": "https://www.imaginationg.studio",
  "logo": "https://www.imaginationg.studio/logo.png",
  "description": "Movement Architecture & Business Transformation",
  "sameAs": [
    "https://twitter.com/imaginationg",
    "https://linkedin.com/company/imaginationg"
  ]
}
</script>
```

**2. Article Schema** (Answer Pages)
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "{Page Title}",
  "description": "{Meta Description}",
  "datePublished": "{Publication Date}",
  "dateModified": "{Last Modified Date}",
  "author": {
    "@type": "Organization",
    "name": "IMAGINATION G"
  },
  "publisher": {
    "@type": "Organization",
    "name": "IMAGINATION G",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.imaginationg.studio/logo.png"
    }
  }
}
</script>
```

**3. FAQ Schema** (Q&A Content)
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "{Question}",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "{Answer}"
    }
  }]
}
</script>
```

**4. HowTo Schema** (Guide Pages)
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "{Guide Title}",
  "description": "{Guide Description}",
  "step": [{
    "@type": "HowToStep",
    "name": "{Step Name}",
    "text": "{Step Description}"
  }]
}
</script>
```

### Implementation Checklist
- [ ] Add Organization schema to `_app.tsx`
- [ ] Create schema generator functions
- [ ] Implement dynamic schema for each content type
- [ ] Validate all schema with Google's testing tool
- [ ] Monitor schema in Search Console

---

## 5. XML Sitemap Configuration ✓

### Sitemap Structure
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Priority Pages for AI Crawlers -->
  <url>
    <loc>https://www.imaginationg.studio/answers/glossary/movement-architecture</loc>
    <lastmod>2025-01-30</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <!-- Additional answer pages -->
</urlset>
```

### Next.js Sitemap Generation
```typescript
// next-sitemap.config.js
module.exports = {
  siteUrl: 'https://www.imaginationg.studio',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/admin/*', '/api/*'],
  additionalPaths: async (config) => {
    const result = [];
    // Add answer pages with high priority
    const answerPages = await getAnswerPages();
    answerPages.forEach(page => {
      result.push({
        loc: page.url,
        changefreq: 'weekly',
        priority: 0.9,
        lastmod: page.lastModified
      });
    });
    return result;
  }
};
```

### Checklist
- [ ] Install and configure `next-sitemap`
- [ ] Generate sitemap with all answer pages
- [ ] Set high priority for answer content
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools

---

## 6. Meta Tag Optimization ✓

### Required Meta Tags

```jsx
// pages/answers/[...slug].tsx
import Head from 'next/head';

<Head>
  {/* Primary Meta Tags */}
  <title>{title} | IMAGINATION G</title>
  <meta name="title" content={`${title} | IMAGINATION G`} />
  <meta name="description" content={description} />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href={canonicalUrl} />
  
  {/* Open Graph / Facebook */}
  <meta property="og:type" content="article" />
  <meta property="og:url" content={canonicalUrl} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={ogImage} />
  
  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content={canonicalUrl} />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={twitterImage} />
  
  {/* AI-Specific Meta */}
  <meta name="publish_date" content={publishDate} />
  <meta name="last_modified" content={lastModified} />
  <meta name="author" content="IMAGINATION G" />
</Head>
```

### Checklist
- [ ] Implement dynamic meta tag generation
- [ ] Ensure descriptions answer queries directly
- [ ] Add publish/modified dates to all content
- [ ] Include canonical URLs
- [ ] Test with social media debuggers

---

## 7. URL Structure Optimization ✓

### URL Best Practices

✅ **Good URLs**:
- `/answers/glossary/movement-architecture`
- `/answers/compare/consultant-vs-catalyst`
- `/answers/guides/diagnose-organizational-drift`

❌ **Bad URLs**:
- `/pages/answer?id=123`
- `/content/2025/01/30/post-title`
- `/answers/g/ma` (too abbreviated)

### Implementation
```typescript
// utils/slugify.ts
export function createSeoSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
```

### Checklist
- [ ] Implement semantic URL structure
- [ ] Remove dates from URLs
- [ ] Use hyphens, not underscores
- [ ] Keep URLs under 60 characters
- [ ] Include primary keywords

---

## 8. Analytics & Tracking ✓

### AI Referral Tracking

```typescript
// components/AiTracker.tsx
useEffect(() => {
  const referrer = document.referrer;
  const aiSources = [
    'chat.openai.com',
    'perplexity.ai',
    'claude.ai',
    'bard.google.com',
    'copilot.microsoft.com'
  ];
  
  const isAiReferral = aiSources.some(source => 
    referrer.includes(source)
  );
  
  if (isAiReferral) {
    // Track AI engine visit
    gtag('event', 'ai_referral', {
      'source': referrer,
      'landing_page': window.location.pathname
    });
  }
}, []);
```

### Custom Dimensions
```javascript
// Google Analytics 4 Configuration
gtag('config', 'GA_MEASUREMENT_ID', {
  'custom_map.dimension1': 'ai_source',
  'custom_map.dimension2': 'content_type',
  'custom_map.dimension3': 'citation_query'
});
```

### Checklist
- [ ] Implement AI referral tracking
- [ ] Set up custom GA4 events
- [ ] Create AI traffic dashboard
- [ ] Monitor citation performance
- [ ] Track conversion paths

---

## 9. Security Considerations ✓

### WAF Configuration
```nginx
# Whitelist AI crawlers in WAF
# CloudFlare example
firewall_rules {
  expression = "(http.user_agent contains \"GPTBot\") or 
                (http.user_agent contains \"ClaudeBot\") or 
                (http.user_agent contains \"PerplexityBot\")"
  action = "allow"
}
```

### Rate Limiting
```typescript
// Exclude AI bots from rate limiting
const aiUserAgents = [
  'GPTBot', 'ClaudeBot', 'PerplexityBot', 
  'ChatGPT-User', 'anthropic-ai'
];

if (!aiUserAgents.some(bot => userAgent.includes(bot))) {
  // Apply rate limiting
}
```

### Checklist
- [ ] Whitelist AI crawlers in WAF
- [ ] Exclude from rate limiting
- [ ] Monitor for crawler abuse
- [ ] Implement crawler-specific logging
- [ ] Set up alerts for unusual activity

---

## 10. Testing Protocol ✓

### Pre-Launch Testing

**1. Crawler Access Test**
```bash
# Test with curl using AI user agents
curl -H "User-Agent: Mozilla/5.0 (compatible; GPTBot/1.0)" \
     https://www.imaginationg.studio/answers/test-page
```

**2. JavaScript Disabled Test**
- Disable JavaScript in browser
- Navigate to all answer pages
- Verify all content is visible

**3. Performance Test**
```bash
# Lighthouse CLI
lighthouse https://www.imaginationg.studio/answers/test \
          --only-categories=performance
```

**4. Schema Validation**
- Use Google's Rich Results Test
- Validate each schema type
- Check for errors/warnings

### Checklist
- [ ] Test all AI crawler access
- [ ] Verify content without JavaScript
- [ ] Run performance benchmarks
- [ ] Validate all schema markup
- [ ] Test meta tag generation
- [ ] Verify sitemap generation
- [ ] Check analytics tracking

---

## Monitoring & Maintenance ✓

### Weekly Tasks
- [ ] Check AI crawler activity in logs
- [ ] Monitor page speed metrics
- [ ] Review AI referral traffic
- [ ] Check for crawl errors

### Monthly Tasks
- [ ] Update content timestamps
- [ ] Regenerate sitemaps
- [ ] Review schema validation
- [ ] Analyze citation performance

### Quarterly Tasks
- [ ] Full technical audit
- [ ] Update crawler permissions
- [ ] Performance optimization
- [ ] Security review

---

## Launch Checklist Summary

### Phase 1: Infrastructure (Days 1-3)
- [ ] Configure robots.txt
- [ ] Implement SSG for answer pages
- [ ] Set up schema templates
- [ ] Configure sitemaps

### Phase 2: Optimization (Days 4-5)
- [ ] Optimize page speed
- [ ] Implement meta tag system
- [ ] Set up URL structure
- [ ] Configure analytics

### Phase 3: Testing (Days 6-7)
- [ ] Complete all testing protocols
- [ ] Fix identified issues
- [ ] Document configurations
- [ ] Deploy to production

### Phase 4: Monitoring (Ongoing)
- [ ] Set up monitoring dashboards
- [ ] Configure alerts
- [ ] Establish maintenance schedule
- [ ] Track performance metrics

---

*Checklist Version: 1.0*
*Created: January 2025*
*For: IMAGINATION G Technical Team*