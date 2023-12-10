import type { Testable } from '../types';
import { classNames } from '../utils/css';
import { type LinkVariants, linkVariants } from './variants';

type Variants = LinkVariants;
export interface AnchorProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    Variants,
    Testable {}

export const Anchor: React.FC<AnchorProps> = ({
  intent,
  children,
  className,
  ...props
}) => {
  return (
    <a
      {...props}
      className={classNames(linkVariants({ intent }), className)}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};
