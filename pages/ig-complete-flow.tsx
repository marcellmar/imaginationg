import type { NextPage } from 'next';
import Head from 'next/head';
import IGCompleteFlow from '../IG Complete Flow (2)';

const IGFlowPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>IMAGINATION G - You Suck. Now What?</title>
        <meta name="description" content="Name your drift. Name your move. Pick your weapon." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <IGCompleteFlow />
    </>
  );
};

export default IGFlowPage;