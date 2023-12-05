import { Heading, Tab, Tabs } from '@demo/ui';

import { TabContent } from './components/tab-content';
import { data as automatedAudits } from './data/automated-audits';
import { data as developerTools } from './data/developer-tools';
import { data as manualAudits } from './data/manual-audits';

const tabs: Tab[] = [
  {
    id: 'developer-tools',
    title: 'Developer Tools',
    children: <TabContent tools={developerTools} />,
  },
  {
    id: 'automated-audits',
    title: 'Automated Testing',
    children: <TabContent tools={automatedAudits} />,
  },
  {
    id: 'manual-audits',
    title: 'Manual Audits',
    children: <TabContent tools={manualAudits} />,
  },
];

export const Tools: React.FC = () => {
  return (
    <div className="my-4">
      <Heading as="h1">Tools</Heading>
      <Tabs tabs={tabs} />
    </div>
  );
};
