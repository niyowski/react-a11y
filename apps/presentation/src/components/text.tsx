import type { HTMLAttributes } from 'react';

import { classNames } from '~/utils/css';

type TextElement = 'p' | 'span';

export type TextProps = HTMLAttributes<
  HTMLParagraphElement | HTMLSpanElement
> & {
  as: TextElement;
};

export const Text = ({ as: Element, className, ...rest }: TextProps) => {
  return <Element {...rest} className={classNames('text-base', className)} />;
};
