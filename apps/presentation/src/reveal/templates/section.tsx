import { Slide, type SlideProps } from './slide';

type SectionSlideProps = SlideProps & {
  title: string;
};

export const SectionSlide: React.FC<SectionSlideProps> = ({
  title,
  ...slideProps
}) => {
  return (
    <Slide {...slideProps}>
      <h2>{title}</h2>
    </Slide>
  );
};
