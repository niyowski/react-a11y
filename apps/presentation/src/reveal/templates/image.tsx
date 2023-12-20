import { Anchor, type Link } from '~/components/anchor';
import { Image, type ImageResource } from '~/components/image';

import { Slide, type SlideProps } from './slide';

type ImageSlideProps = SlideProps & {
  image: ImageResource;
  credit?: Link;
};

export const ImageSlide: React.FC<ImageSlideProps> = ({
  image,
  credit,
  ...slideProps
}) => {
  return (
    <Slide {...slideProps} className="flex flex-col items-center">
      <Image {...image} className="r-stretch shadow-xl" data-preload />
      {credit && <Anchor {...credit} className="mt-4" />}
    </Slide>
  );
};
