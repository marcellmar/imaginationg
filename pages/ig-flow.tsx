import type { NextPage } from 'next';
import Head from 'next/head';
import IGCompleteFlowIntegrated from '../IGCompleteFlowIntegrated';

const IGFlowPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>IMAGINATION G | Move or Drift</title>
        <meta name="description" content="Stop lying to yourself. Pick your weapon. Move." />
        <meta name="robots" content="noindex, nofollow" /> {/* Keep this page semi-private */}
      </Head>
      
      <IGCompleteFlowIntegrated />
    </>
  );
};

export default IGFlowPage;