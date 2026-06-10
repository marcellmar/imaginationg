import type { NextPage } from 'next';
import PublishingLanePage from '../../components/PublishingLanePage';
import { publishingLanes } from '../../lib/publishing-lanes';

const CalcificationAlertsPage: NextPage = () => {
  return <PublishingLanePage lane={publishingLanes['calcification-alerts']} />;
};

export default CalcificationAlertsPage;
