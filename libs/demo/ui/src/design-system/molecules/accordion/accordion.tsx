import { useState } from 'react';

import type { Testable } from '../../types';
import { Item } from './components/accordion-item';
import type { AccordionItem } from './types';

export interface AccordionProps extends Testable {
  items: AccordionItem[];
  isAllExpanded?: boolean;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  isAllExpanded,
  ...props
}) => {
  const initialExpandedIds = isAllExpanded ? items.map((item) => item.id) : [];
  const [expandedIds, setExpandedIds] = useState<string[]>(initialExpandedIds);

  const isItemOpen = (id: string) => expandedIds.includes(id);

  const handleToggle = (id: string) => {
    if (isItemOpen(id)) {
      setExpandedIds(expandedIds.filter((openId) => openId !== id));
    } else {
      setExpandedIds([...expandedIds, id]);
    }
  };

  return (
    <div {...props}>
      {items.map((item, index) => (
        <Item
          key={item.id}
          item={item}
          isFirst={index === 0}
          isLast={index === items.length - 1}
          isOpen={isItemOpen(item.id)}
          onToggle={handleToggle}
        />
      ))}
    </div>
  );
};
