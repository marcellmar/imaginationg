import type { NextPage } from 'next';
import DeepReadPage from '../../components/DeepReadPage';
import { deepReads } from '../../lib/deep-reads';

const TheAcquisitionTrapPage: NextPage = () => {
  return <DeepReadPage read={deepReads['the-acquisition-trap']} />;
};

export default TheAcquisitionTrapPage;
