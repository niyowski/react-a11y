import { classNames } from '~/utils/css';

type SlideTitleProps = React.HTMLAttributes<HTMLHeadingElement>;

export const SlideTitle: React.FC<SlideTitleProps> = ({
  children,
  className,
}) => {
  return (
    <h2 className={classNames('text-primary-500 my-4 text-6xl', className)}>
      {children}
    </h2>
  );
};
