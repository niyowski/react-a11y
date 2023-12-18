import { type LucideIcon } from 'lucide-react';

import { FragmentStyle } from '~/reveal/types';
import { classNames } from '~/utils/css';

type BulletPointIcon = {
  component: LucideIcon;
  className?: string;
};

type BulletPointText = {
  content: React.ReactNode;
  className?: string;
};

export type BulletPoint = {
  id: string;
  icon?: BulletPointIcon;
  text: BulletPointText;
  children?: BulletPoint[];
  transition?: FragmentStyle;
};

const DEFAULT_ICON_SIZE = 20;
const DEFAULT_BULLET_POINT_TRANSITION: FragmentStyle = 'fade-up';

type BulletedListProps = {
  items: BulletPoint[];
  isParent?: boolean;
  className?: string;
};

export const BulletedList: React.FC<BulletedListProps> = ({
  items,
  isParent = true,
  className,
}) => {
  return (
    <ul className={classNames('m-0 list-none', { 'p-0': isParent }, className)}>
      {items.map(
        ({
          id,
          icon,
          text,
          children,
          transition = DEFAULT_BULLET_POINT_TRANSITION,
        }) => (
          <li
            key={id}
            className={classNames('flex flex-col px-0', {
              [`fragment ${transition}`]: transition !== 'none',
            })}
          >
            <p className="m-0 flex items-center">
              {icon && (
                <icon.component
                  size={DEFAULT_ICON_SIZE}
                  className={classNames('text-base-500 mr-2', icon.className)}
                />
              )}
              <span className={classNames('text-2xl', text.className)}>
                {text.content}
              </span>
            </p>
            {children && <BulletedList items={children} isParent={false} />}
          </li>
        ),
      )}
    </ul>
  );
};
