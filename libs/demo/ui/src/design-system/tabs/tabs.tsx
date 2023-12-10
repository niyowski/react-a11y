import { useState } from 'react';

import type { Testable } from '../types';
import { TabItem } from './components/tab-item';
import { TabList } from './components/tab-list';
import type { Tab } from './types';

export interface TabsProps extends Testable {
  tabs: Tab[];
}

export const Tabs: React.FC<TabsProps> = ({ tabs, ...props }) => {
  const [activeItemId, setActiveItemId] = useState<string>(tabs[0].id);

  return (
    <div {...props}>
      <TabList
        items={tabs}
        activeItemId={activeItemId}
        onItemSelect={setActiveItemId}
      />
      <div className="mt-1 rounded border p-4 shadow">
        {tabs.map(({ id, children }) => (
          <TabItem key={id} isActive={id === activeItemId}>
            {children}
          </TabItem>
        ))}
      </div>
    </div>
  );
};
