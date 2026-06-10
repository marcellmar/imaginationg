import { publishingLanes } from '../../lib/publishing-lanes';
import PublishingLanePage from '../../components/PublishingLanePage';

export default function BehindTheMapPage() {
  return <PublishingLanePage lane={publishingLanes['source-to-signal']} />;
}
