import {
  Link as RouterLink,
  type LinkProps as RouterLinkProps,
} from 'react-router-dom';

import type { Testable } from '../types';
import { classNames } from '../utils/css';
import { type LinkVariants, linkVariants } from './variants';

type Variants = LinkVariants;
export interface LinkProps extends RouterLinkProps, Variants, Testable {}

export const Link: React.FC<LinkProps> = ({
  intent,
  children,
  className,
  ...props
}) => {
  return (
    <RouterLink
      {...props}
      className={classNames(linkVariants({ intent }), className)}
    >
      {children}
    </RouterLink>
  );
};
