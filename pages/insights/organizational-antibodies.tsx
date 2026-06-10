import type { NextPage } from 'next';
import DeepReadPage from '../../components/DeepReadPage';
import { deepReads } from '../../lib/deep-reads';

const OrganizationalAntibodiesPage: NextPage = () => {
  return <DeepReadPage read={deepReads['organizational-antibodies']} />;
};

export default OrganizationalAntibodiesPage;
