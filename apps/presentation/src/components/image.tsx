export type ImageResource = Required<Pick<HTMLImageElement, 'src' | 'alt'>>;

type ImageProps = React.ImgHTMLAttributes<HTMLImageElement> & ImageResource;

export const Image: React.FC<ImageProps> = ({ src, alt, ...rest }) => {
  return <img {...rest} src={src} alt={alt} />;
};
