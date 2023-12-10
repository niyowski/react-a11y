import { useState } from 'react';

import type { Styleable, Testable } from '../types';
import { classNames } from '../utils/css';
import { NextButton } from './components/next-button';
import { PrevButton } from './components/prev-button';
import { Slide } from './components/slide';
import type { CarouselSlide } from './types';

export interface CarouselProps extends Styleable, Testable {
  slides: CarouselSlide[];
}

export const Carousel: React.FC<CarouselProps> = ({
  slides,
  className,
  ...props
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1,
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1,
    );
  };

  return (
    <div {...props} className={classNames('relative flex h-80', className)}>
      <PrevButton onClick={prevSlide} />
      {slides.map((slide, index) => (
        <Slide key={slide.id} slide={slide} isActive={index === currentSlide} />
      ))}
      <NextButton onClick={nextSlide} />
    </div>
  );
};
