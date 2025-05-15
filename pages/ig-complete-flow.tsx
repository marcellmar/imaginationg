import type { NextPage } from 'next';
import Head from 'next/head';
import IGCompleteFlow from '../IG Complete Flow (2)';

const IGCompleteFlowPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>IMAGINATION G | Move or Drift</title>
        <meta name="description" content="Stop lying to yourself. Pick your weapon. Move." />
        <meta name="robots" content="noindex, nofollow" /> {/* Keep this page semi-private */}
      </Head>
      
      <IGCompleteFlow />
    </>
  );
};

export default IGCompleteFlowPage;