import type { NextPage } from 'next';
import DeepReadPage from '../../components/DeepReadPage';
import { deepReads } from '../../lib/deep-reads';

const TheSpiralModelPage: NextPage = () => {
  return <DeepReadPage read={deepReads['the-spiral-model']} />;
};

export default TheSpiralModelPage;
