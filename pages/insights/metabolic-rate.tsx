import type { NextPage } from 'next';
import DeepReadPage from '../../components/DeepReadPage';
import { deepReads } from '../../lib/deep-reads';

const MetabolicRatePage: NextPage = () => {
  return <DeepReadPage read={deepReads['metabolic-rate']} />;
};

export default MetabolicRatePage;
