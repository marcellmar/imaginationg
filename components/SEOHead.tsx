import Head from 'next/head';
import { useRouter } from 'next/router';

interface SEOHeadProps {
  title: string;
  description: string;
  ogImage?: string;
  ogType?: string;
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
  };
  noindex?: boolean;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  ogImage = '/images/og/home.png',
  ogType = 'website',
  article,
  noindex = false
}) => {
  const router = useRouter();
  const siteUrl = 'https://gpi.studio';
  const canonicalUrl = `${siteUrl}${router.asPath.split('?')[0]}`;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      <link rel="alternate" type="application/json" title="GPI Studio agent manifest" href={`${siteUrl}/agent.json`} />
      <link rel="alternate" type="text/plain" title="GPI Studio LLM guide" href={`${siteUrl}/llms.txt`} />
      
      {/* Language and Region */}
      <meta httpEquiv="content-language" content="en-US" />
      <link rel="alternate" href={canonicalUrl} hrefLang="en" />
      <link rel="alternate" href={canonicalUrl} hrefLang="en-US" />
      <link rel="alternate" href={canonicalUrl} hrefLang="x-default" />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="GPI Studio" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
      <meta name="twitter:site" content="@imaginationg" />
      <meta name="twitter:creator" content="@imaginationg" />
      
      {/* Article Specific Tags */}
      {article && ogType === 'article' && (
        <>
          {article.publishedTime && (
            <meta property="article:published_time" content={article.publishedTime} />
          )}
          {article.modifiedTime && (
            <meta property="article:modified_time" content={article.modifiedTime} />
          )}
          {article.author && (
            <meta property="article:author" content={article.author} />
          )}
        </>
      )}
      
      {/* Robots */}
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* JSON-LD Structured Data */}
      {article && ogType === 'article' ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": title,
              "description": description,
              "image": fullOgImage,
              "url": canonicalUrl,
              "datePublished": article.publishedTime,
              ...(article.modifiedTime && { "dateModified": article.modifiedTime }),
              "author": {
                "@type": "Person",
                "name": article.author || "Marcus Davis",
                "url": "https://gpi.studio"
              },
              "publisher": {
                "@type": "Organization",
                "name": "GPI Studio",
                "url": "https://gpi.studio",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://gpi.studio/images/gpi-studio-linkedin-logo.png"
                }
              },
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": canonicalUrl
              }
            })
          }}
        />
      ) : ogType === 'website' && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": title,
              "description": description,
              "url": canonicalUrl,
              "publisher": {
                "@type": "Organization",
                "name": "GPI Studio",
                "url": "https://gpi.studio"
              },
              "hasPart": [
                {
                  "@type": "WebPage",
                  "name": "Reads",
                  "url": "https://gpi.studio/insights"
                },
                {
                  "@type": "WebPage",
                  "name": "Lens",
                  "url": "https://gpi.studio/gpi-framework"
                },
                {
                  "@type": "WebPage",
                  "name": "Maps",
                  "url": "https://gpi.studio/maps"
                },
                {
                  "@type": "WebPage",
                  "name": "Signal",
                  "url": "https://gpi.studio/signal"
                },
                {
                  "@type": "WebPage",
                  "name": "Work",
                  "url": "https://gpi.studio/work"
                },
                {
                  "@type": "WebPage",
                  "name": "Intake",
                  "url": "https://gpi.studio/intake"
                }
              ]
            })
          }}
        />
      )}
    </Head>
  );
};

export default SEOHead;
