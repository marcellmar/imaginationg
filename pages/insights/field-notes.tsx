import type { NextPage } from 'next';
import PublishingLanePage from '../../components/PublishingLanePage';
import { publishingLanes } from '../../lib/publishing-lanes';

const FieldNotesPage: NextPage = () => {
  return <PublishingLanePage lane={publishingLanes['field-notes']} />;
};

export default FieldNotesPage;
