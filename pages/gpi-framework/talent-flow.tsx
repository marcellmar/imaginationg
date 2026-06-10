import type { NextPage } from 'next';
import FrameworkDetailPage from '../../components/FrameworkDetailPage';
import { frameworkDetails } from '../../lib/framework-detail-data';

const TalentFlowPage: NextPage = () => {
  return <FrameworkDetailPage spec={frameworkDetails['talent-flow']} />;
};

export default TalentFlowPage;
