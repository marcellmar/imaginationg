import type { NextPage } from 'next';
import FrameworkDetailPage from '../../components/FrameworkDetailPage';
import { frameworkDetails } from '../../lib/framework-detail-data';

const KnowledgeVelocityPage: NextPage = () => {
  return <FrameworkDetailPage spec={frameworkDetails['knowledge-velocity']} />;
};

export default KnowledgeVelocityPage;
