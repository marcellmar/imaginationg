import type { NextPage } from 'next';
import PublishingLanePage from '../../components/PublishingLanePage';
import { publishingLanes } from '../../lib/publishing-lanes';

const AutopsiesPage: NextPage = () => {
  return <PublishingLanePage lane={publishingLanes.autopsies} />;
};

export default AutopsiesPage;
