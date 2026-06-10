import type { NextPage } from 'next';
import PublishingLanePage from '../../components/PublishingLanePage';
import { publishingLanes } from '../../lib/publishing-lanes';

const WildcardsPage: NextPage = () => {
  return <PublishingLanePage lane={publishingLanes.wildcards} />;
};

export default WildcardsPage;
