import { Slide } from './slide';

type VerticalSlidesProps = React.PropsWithChildren<{
  id: string;
}>;

export const VerticalSlides: React.FC<VerticalSlidesProps> = ({
  id,
  children,
}) => {
  return <Slide id={id}>{children}</Slide>;
};
