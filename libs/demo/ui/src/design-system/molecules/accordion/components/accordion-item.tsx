import { Heading } from '../../../atoms/typography/heading';
import { classNames } from '../../../utils/css';
import { testId } from '../constants';
import type { AccordionItem } from '../types';
import { CloseButton } from './close-button';
import { OpenButton } from './open-button';

export interface ItemProps {
  item: AccordionItem;
  isFirst?: boolean;
  isLast?: boolean;
  isOpen?: boolean;
  onToggle: (id: string) => void;
}

export const Item: React.FC<ItemProps> = ({
  item: { id, title, content },
  isOpen,
  isFirst,
  isLast,
  onToggle,
}) => {
  const handleToggle = () => onToggle(id);
  const HeaderButton = isOpen ? CloseButton : OpenButton;

  return (
    <div
      data-testid={testId.accordionItem}
      className={classNames('border shadow', {
        'rounded-t border-b-0': isFirst,
        'rounded-b border-t-0': isLast,
      })}
    >
      <div
        data-testid={testId.accordionHeader}
        role="button"
        onClick={handleToggle}
        className={classNames(
          'hover:bg-base-200 bg-base-100 flex cursor-pointer items-center justify-between px-4 py-2',
          { 'border-b': isOpen },
        )}
      >
        <Heading as="h3" className="m-0">
          {title}
        </Heading>
        <HeaderButton onClick={handleToggle} />
      </div>
      <div
        data-testid={testId.accordionContent}
        className={classNames('hidden px-4 py-2', { block: isOpen })}
      >
        {content}
      </div>
    </div>
  );
};
