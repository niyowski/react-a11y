import { useEffect, useState } from 'react';

import type { Testable } from '../types';
import { Item } from './components/accordion-item';
import type { AccordionItem } from './types';

export interface AccordionProps extends Testable {
  items: AccordionItem[];
  isAllExpanded?: boolean;
}

const getExpandedIds = ({ items, isAllExpanded }: AccordionProps) => {
  return isAllExpanded ? items.map((item) => item.id) : [];
};

export const Accordion: React.FC<AccordionProps> = ({
  items,
  isAllExpanded,
  ...props
}) => {
  const [expandedIds, setExpandedIds] = useState(
    getExpandedIds({ items, isAllExpanded }),
  );

  const isItemOpen = (id: string) => expandedIds.includes(id);

  const handleToggle = (id: string) => {
    if (isItemOpen(id)) {
      setExpandedIds(expandedIds.filter((openId) => openId !== id));
    } else {
      setExpandedIds([...expandedIds, id]);
    }
  };

  useEffect(() => {
    setExpandedIds(getExpandedIds({ items, isAllExpanded }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAllExpanded]);

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
