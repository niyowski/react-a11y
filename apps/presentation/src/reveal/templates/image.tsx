import type { Image } from '~/types';

import { Slide, type SlideProps } from './slide';

type ImageSlideProps = SlideProps & {
  image: Image;
};

export const ImageSlide = ({
  image: { src, alt },
  ...rest
}: ImageSlideProps) => {
  return (
    <Slide {...rest}>
      <img src={src} alt={alt} className="w-full" data-preload />
    </Slide>
  );
};
