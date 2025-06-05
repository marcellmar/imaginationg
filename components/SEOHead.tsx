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
  ogImage = '/images/og-default.jpg',
  ogType = 'website',
  article,
  noindex = false
}) => {
  const router = useRouter();
  const siteUrl = 'https://www.imaginationg.studio';
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
      <meta property="og:site_name" content="IMAGINATION G" />
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
    </Head>
  );
};

export default SEOHead;