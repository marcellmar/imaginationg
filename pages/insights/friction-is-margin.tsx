import type { NextPage } from 'next';
import DeepReadPage from '../../components/DeepReadPage';
import { deepReads } from '../../lib/deep-reads';

const FrictionIsMarginPage: NextPage = () => {
  return <DeepReadPage read={deepReads['friction-is-margin']} />;
};

export default FrictionIsMarginPage;
