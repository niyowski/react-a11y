import { classNames } from '~/utils/css';

type HeadingElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

const fontSizes = new Map<HeadingElement, string>([
  ['h1', 'text-6xl'],
  ['h2', 'text-5xl'],
  ['h3', 'text-4xl'],
  ['h4', 'text-3xl'],
  ['h5', 'text-2xl'],
  ['h6', 'text-xl'],
]);

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> & {
  as: HeadingElement;
};

export const Heading = ({ as: Element, className, ...rest }: HeadingProps) => {
  return (
    <Element
      {...rest}
      className={classNames(
        'text-primary-500',
        fontSizes.get(Element),
        className,
      )}
    />
  );
};
