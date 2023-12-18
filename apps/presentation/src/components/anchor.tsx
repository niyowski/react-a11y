import { classNames } from '~/utils/css';

type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const Anchor: React.FC<AnchorProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <a
      {...rest}
      className={classNames(
        'text-secondary-300 hover:text-secondary-600 underline decoration-dashed underline-offset-8',
        className,
      )}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};
