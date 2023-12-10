type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const Anchor = ({ children, ...rest }: AnchorProps) => {
  return (
    <a
      {...rest}
      className="text-secondary-500 hover:text-secondary-600"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};
