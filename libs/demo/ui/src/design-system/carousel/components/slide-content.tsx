import { Heading } from '../../typography/heading';
import { testId } from '../constants';
import type { CarouselSlide } from '../types';

export interface SlideContentProps {
  content: CarouselSlide['content'];
}

export const SlideContent: React.FC<SlideContentProps> = ({ content }) => {
  if (!content) {
    return null;
  }

  const { title, children } = content;

  return (
    <div
      className="rounded-special z-10 h-36 w-4/5 bg-white/50 p-4 backdrop-blur"
      data-testid={testId.carouselSlideContent}
    >
      <Heading as="h2" className="m-0 mb-2">
        {title}
      </Heading>
      {typeof children === 'string' ? <p>{children}</p> : children}
    </div>
  );
};
