import type { FragmentStyle } from '~/types';
import { classNames } from '~/utils/css';

import { Icon, type IconName } from './icons';
import { Text } from './text';

type BulletPointIcon = {
  name: IconName;
  className?: string;
};

type BulletPointText = {
  content: string;
  className?: string;
};

export type BulletPoint = {
  id: string;
  icon: BulletPointIcon;
  text: BulletPointText;
  children?: BulletPoint[];
  transition?: FragmentStyle;
};

type BulletedListProps = {
  items: BulletPoint[];
};

export const BulletedList = ({ items }: BulletedListProps) => {
  return (
    <ul className="m-0 list-none">
      {items.map(({ id, icon, text, children, transition = 'fade-up' }) => (
        <li
          key={id}
          className={classNames('flex flex-col', {
            [`fragment ${transition}`]: transition !== 'none',
          })}
        >
          <div className="flex items-center">
            <Icon
              role="presentation"
              name={icon.name}
              className={classNames('mr-4', icon.className)}
            />
            <Text as="span" className={classNames('text-2xl', text.className)}>
              {text.content}
            </Text>
          </div>
          {children && <BulletedList items={children} />}
        </li>
      ))}
    </ul>
  );
};
