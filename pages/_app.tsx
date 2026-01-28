import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Script from 'next/script';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

const GA_TRACKING_ID = 'G-V3R0S40J79';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    // Track AI referrals
    const trackAIReferral = () => {
      if (typeof window !== 'undefined' && document.referrer) {
        const referrer = document.referrer;
        const aiDomains = [
          'chat.openai.com',
          'perplexity.ai',
          'claude.ai',
          'bard.google.com',
          'copilot.microsoft.com'
        ];

        const isAIReferral = aiDomains.some(domain => referrer.includes(domain));

        if (isAIReferral && window.gtag) {
          window.gtag('event', 'ai_referral', {
            source: referrer,
            landing_page: router.pathname,
            timestamp: new Date().toISOString()
          });
        }
      }
    };

    trackAIReferral();
  }, [router.pathname]);

  return (
    <>
      {/* Google Analytics */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
