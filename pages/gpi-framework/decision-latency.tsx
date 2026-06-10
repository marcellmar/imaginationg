import type { NextPage } from 'next';
import FrameworkDetailPage from '../../components/FrameworkDetailPage';
import { frameworkDetails } from '../../lib/framework-detail-data';

const DecisionLatencyPage: NextPage = () => {
  return <FrameworkDetailPage spec={frameworkDetails['decision-latency']} />;
};

export default DecisionLatencyPage;
