import type { NextPage } from 'next';
import FrameworkDetailPage from '../../components/FrameworkDetailPage';
import { frameworkDetails } from '../../lib/framework-detail-data';

const StructuralLockInPage: NextPage = () => {
  return <FrameworkDetailPage spec={frameworkDetails['structural-lock-in']} />;
};

export default StructuralLockInPage;
