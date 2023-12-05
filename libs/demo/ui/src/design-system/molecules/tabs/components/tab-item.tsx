import { PropsWithChildren } from 'react';

import { classNames } from '../../../utils/css';
import { testId } from '../constants';

export interface TabItemProps {
  isActive?: boolean;
}

export const TabItem: React.FC<PropsWithChildren<TabItemProps>> = ({
  isActive,
  children,
}) => {
  return (
    <div
      className={classNames('hidden', { block: isActive })}
      data-testid={testId.tabItem}
    >
      {children}
    </div>
  );
};
