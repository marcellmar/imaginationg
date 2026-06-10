import type { NextPage } from 'next';
import FrameworkDetailPage from '../../components/FrameworkDetailPage';
import { frameworkDetails } from '../../lib/framework-detail-data';

const ParticleStatePage: NextPage = () => {
  return <FrameworkDetailPage spec={frameworkDetails['particle-state']} />;
};

export default ParticleStatePage;
