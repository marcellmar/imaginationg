import type { NextPage } from 'next';
import DeepReadPage from '../../components/DeepReadPage';
import { deepReads } from '../../lib/deep-reads';

const LatentCapabilitiesPage: NextPage = () => {
  return <DeepReadPage read={deepReads['latent-capabilities']} />;
};

export default LatentCapabilitiesPage;
