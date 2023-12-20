import { classNames } from '~/utils/css';

export type ImageResource = Required<Pick<HTMLImageElement, 'src' | 'alt'>>;

type ImageProps = React.ImgHTMLAttributes<HTMLImageElement> & ImageResource;

export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  className,
  ...rest
}) => {
  return (
    <img
      {...rest}
      src={src}
      alt={alt}
      className={classNames('m-0 rounded', className)}
    />
  );
};
