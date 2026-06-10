import type { NextPage } from 'next';
import DeepReadPage from '../../components/DeepReadPage';
import { deepReads } from '../../lib/deep-reads';

const InvestedInTheWastePage: NextPage = () => {
  return <DeepReadPage read={deepReads['invested-in-the-waste']} />;
};

export default InvestedInTheWastePage;
