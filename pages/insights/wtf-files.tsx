import PublishingLanePage from '../../components/PublishingLanePage';
import { publishingLanes } from '../../lib/publishing-lanes';

export default function WTFFilesPage() {
  return <PublishingLanePage lane={publishingLanes['wtf-files']} />;
}
