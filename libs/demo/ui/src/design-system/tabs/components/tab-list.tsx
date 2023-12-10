import { testId } from '../constants';
import type { Tab } from '../types';
import { TabListItem } from './tab-list-item';

export interface TabListProps {
  items: Tab[];
  activeItemId: string;
  onItemSelect: (itemId: string) => void;
}

export const TabList: React.FC<TabListProps> = ({
  items,
  activeItemId,
  onItemSelect,
}) => {
  return (
    <ul className="not-prose flex list-none" data-testid={testId.tabList}>
      {items.map((item, index) => (
        <li key={item.id} className="not-prose">
          <TabListItem
            item={item}
            isActive={item.id === activeItemId}
            isFirst={index === 0}
            isLast={index === items.length - 1}
            onClick={onItemSelect}
          />
        </li>
      ))}
    </ul>
  );
};
