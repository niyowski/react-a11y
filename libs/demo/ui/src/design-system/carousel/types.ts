import { Color } from '../types';

interface SlideImage {
  src: string;
  alt?: string;
}

interface SlideContent {
  title: string;
  children?: string | JSX.Element;
}

export interface CarouselSlide {
  id: string;
  image?: SlideImage;
  bgColor?: Color;
  content?: SlideContent;
}
