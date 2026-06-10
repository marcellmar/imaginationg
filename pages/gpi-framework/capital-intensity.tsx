import type { NextPage } from 'next';
import FrameworkDetailPage from '../../components/FrameworkDetailPage';
import { frameworkDetails } from '../../lib/framework-detail-data';

const CapitalIntensityPage: NextPage = () => {
  return <FrameworkDetailPage spec={frameworkDetails['capital-intensity']} />;
};

export default CapitalIntensityPage;
