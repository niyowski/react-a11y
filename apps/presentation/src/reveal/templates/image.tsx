import { Image, type ImageResource } from '~/components/image';

import { Slide, type SlideProps } from './slide';

type ImageSlideProps = SlideProps & {
  image: ImageResource;
};

export const ImageSlide: React.FC<ImageSlideProps> = ({
  image,
  ...slideProps
}) => {
  return (
    <Slide {...slideProps} className="flex flex-col items-center">
      <Image {...image} className="r-stretch shadow-xl" data-preload />
    </Slide>
  );
};
