import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { GoogleAnalytics } from '@next/third-parties/google';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

// Replace with your actual GA4 measurement ID
const GA_MEASUREMENT_ID = 'G-V3R0S40J79';

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
        
        if (isAIReferral && typeof window.gtag !== 'undefined') {
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
      <Component {...pageProps} />
      <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />
    </>
  );
}

export default MyApp;