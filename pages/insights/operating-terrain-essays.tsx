import type { NextPage } from 'next';
import PublishingLanePage from '../../components/PublishingLanePage';
import { publishingLanes } from '../../lib/publishing-lanes';

const OperatingTerrainEssaysPage: NextPage = () => {
  return <PublishingLanePage lane={publishingLanes['operating-terrain-essays']} />;
};

export default OperatingTerrainEssaysPage;
