import type { NextPage } from 'next';
import FrameworkDetailPage from '../../components/FrameworkDetailPage';
import { frameworkDetails } from '../../lib/framework-detail-data';

const KnowledgeLocationPage: NextPage = () => {
  return <FrameworkDetailPage spec={frameworkDetails['knowledge-location']} />;
};

export default KnowledgeLocationPage;
