import { SlideTitle } from '~/components/slide-title';

import { Slide, type SlideProps } from './slide';

export type Fact = {
  figure: string;
  description: React.ReactNode;
};

type FactSlideProps = SlideProps & {
  fact: Fact;
};

export const FactSlide: React.FC<FactSlideProps> = ({
  fact: { figure, description },
  ...slideProps
}) => {
  return (
    <Slide {...slideProps}>
      <SlideTitle className="text-[8rem]">{figure}</SlideTitle>
      <p className="text-base-300 m-0 mt-16 text-lg">{description}</p>
    </Slide>
  );
};
