import type { Testable } from '../../types';

type HeadingElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    Testable {
  as: HeadingElement;
}

export const Heading: React.FC<HeadingProps> = ({ as: Element, ...props }) => {
  return <Element {...props} />;
};
