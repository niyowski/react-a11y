import { classNames } from '../../utils/css';
import { testId } from '../constants';
import type { CarouselSlide } from '../types';
import { SlideContent } from './slide-content';
import { SlideImage } from './slide-image';

export interface SlideProps {
  slide: CarouselSlide;
  isActive?: boolean;
}

export const Slide: React.FC<SlideProps> = ({
  slide: { bgColor, image, content },
  isActive,
}) => {
  return (
    <div
      data-testid={testId.carouselSlide}
      className={classNames(
        'relative hidden flex-1 flex-col items-center justify-center rounded shadow',
        {
          [`bg-${bgColor}-500`]: Boolean(bgColor),
          flex: isActive,
        },
      )}
    >
      <SlideImage image={image} />
      <SlideContent content={content} />
    </div>
  );
};
