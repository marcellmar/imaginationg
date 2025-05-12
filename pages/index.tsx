import type { NextPage } from 'next';
import Head from 'next/head';
import ImaginationGLanding from '../components/ImaginationGLanding';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>IMAGINATION G | A Studio for Aligned Futures</title>
        <meta name="description" content="We don't consult. We catalyze. For those who refuse to drift in broken systems and want to architect movement that matters." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph / Social Media Meta Tags */}
        <meta property="og:title" content="IMAGINATION G | A Studio for Aligned Futures" />
        <meta property="og:description" content="We don't consult. We catalyze. For those who refuse to drift in broken systems and want to architect movement that matters." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://imaginationg.studio" />
        <meta property="og:image" content="https://imaginationg.studio/images/og-image.jpg" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IMAGINATION G | A Studio for Aligned Futures" />
        <meta name="twitter:description" content="We don't consult. We catalyze. For those who refuse to drift in broken systems and want to architect movement that matters." />
        <meta name="twitter:image" content="https://imaginationg.studio/images/og-image.jpg" />
      </Head>
      
      <ImaginationGLanding />
    </>
  );
};

export default Home;