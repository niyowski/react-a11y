import { useState } from 'react';

import type { Testable } from '../../types';
import { TabItem } from './components/tab-item';
import { TabList } from './components/tab-list';
import type { TabListItem } from './components/tab-list-item';

export interface Tab extends TabListItem {
  children?: React.ReactNode;
}

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
