import type { NextPage } from 'next';
import FrameworkDetailPage from '../../components/FrameworkDetailPage';
import { frameworkDetails } from '../../lib/framework-detail-data';

const TransitionStatePage: NextPage = () => {
  return <FrameworkDetailPage spec={frameworkDetails['transition-state']} />;
};

export default TransitionStatePage;
