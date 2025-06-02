import type { NextPage } from 'next';
import Head from 'next/head';
import IGCompleteFlow from '../IG Complete Flow (2)';

const IGFlowPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>IMAGINATION G - Build From Real</title>
        <meta name="description" content="Surface the buried truth. Name what you've been building around instead of from. Grant full override access to live systems." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <IGCompleteFlow />
    </>
  );
};

export default IGFlowPage;