import type { NextPage } from 'next';
import DeepReadPage from '../../components/DeepReadPage';
import { deepReads } from '../../lib/deep-reads';

const WhySuccessCreatesRigidityPage: NextPage = () => {
  return <DeepReadPage read={deepReads['why-success-creates-rigidity']} />;
};

export default WhySuccessCreatesRigidityPage;
