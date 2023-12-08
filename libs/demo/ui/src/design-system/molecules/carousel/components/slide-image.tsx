import { testId } from '../constants';
import type { CarouselSlide } from '../types';

export interface SlideImageProps {
  image: CarouselSlide['image'];
}

export const SlideImage: React.FC<SlideImageProps> = ({ image }) => {
  if (!image) {
    return null;
  }

  const { src, alt } = image;

  return (
    <img
      src={src}
      alt={alt}
      className="absolute m-0 h-full w-full rounded object-cover shadow"
      data-testid={testId.carouselSlideImage}
    />
  );
};
