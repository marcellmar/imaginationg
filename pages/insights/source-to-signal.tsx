import type { NextPage } from 'next';
import PublishingLanePage from '../../components/PublishingLanePage';
import { publishingLanes } from '../../lib/publishing-lanes';

const SourceToSignalPage: NextPage = () => {
  return <PublishingLanePage lane={publishingLanes['source-to-signal']} />;
};

export default SourceToSignalPage;
