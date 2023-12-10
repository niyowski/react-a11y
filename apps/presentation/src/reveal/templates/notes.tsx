import type { HTMLAttributes } from 'react';

import { classNames } from '~/utils/css';

type SlideNotesProps = HTMLAttributes<HTMLDivElement>;

export const SlideNotes = ({
  children,
  className,
  ...rest
}: SlideNotesProps) => {
  return (
    <aside {...rest} className={classNames('notes', className)}>
      {children}
    </aside>
  );
};
