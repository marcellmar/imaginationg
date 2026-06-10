import type { NextPage } from 'next';
import FrameworkDetailPage from '../../components/FrameworkDetailPage';
import { frameworkDetails } from '../../lib/framework-detail-data';

const FieldStatePage: NextPage = () => {
  return <FrameworkDetailPage spec={frameworkDetails['field-state']} />;
};

export default FieldStatePage;
