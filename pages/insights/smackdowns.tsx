import type { NextPage } from 'next';
import PublishingLanePage from '../../components/PublishingLanePage';
import { publishingLanes } from '../../lib/publishing-lanes';

const SmackdownsPage: NextPage = () => {
  return <PublishingLanePage lane={publishingLanes.smackdowns} />;
};

export default SmackdownsPage;
