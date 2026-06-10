import type { NextPage } from 'next';
import PublishingLanePage from '../../components/PublishingLanePage';
import { publishingLanes } from '../../lib/publishing-lanes';

const VitalSignsPage: NextPage = () => {
  return <PublishingLanePage lane={publishingLanes['vital-signs']} />;
};

export default VitalSignsPage;
