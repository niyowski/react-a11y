import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import { Carousel } from './carousel';
import { testId } from './constants';
import type { CarouselSlide } from './types';

function expectToBeVisible(el: HTMLElement) {
  return expect(el).not.toHaveClass('hidden');
}

function expectToBeHidden(el: HTMLElement) {
  return expect(el).toHaveClass('hidden');
}

describe('Carousel', () => {
  it('should render correctly', async () => {
    // Arrange
    const user = userEvent.setup();
    const slides: CarouselSlide[] = [
      {
        id: 'slide-1',
        image: { src: '/slide-1.jpg' },
        content: { title: 'Slide 1', children: 'Slide 1 content' },
      },
      {
        id: 'slide-2',
        bgColor: 'blue',
        content: { title: 'Slide 2', children: 'Slide 2 content' },
      },
      {
        id: 'slide-3',
        image: { src: '/slide-3.jpg' },
      },
    ];

    // Act
    render(<Carousel slides={slides} data-testid={testId.carousel} />);

    // Assert
    expect(screen.getByTestId(testId.carousel)).toBeInTheDocument();
    const slideElements = screen.getAllByTestId(testId.carouselSlide);
    expect(slideElements).toHaveLength(3);
    expectToBeVisible(slideElements[0]);
    expectToBeHidden(slideElements[1]);
    expectToBeHidden(slideElements[2]);
    expect(screen.getAllByTestId(testId.carouselSlideImage)).toHaveLength(2);
    expect(screen.getAllByTestId(testId.carouselSlideContent)).toHaveLength(2);
    expect(screen.getByText('Slide 1')).toBeInTheDocument();
    expect(screen.getByText('Slide 1 content')).toBeInTheDocument();
    expect(screen.getByText('Slide 2')).toBeInTheDocument();
    expect(screen.getByText('Slide 2 content')).toBeInTheDocument();

    // Act && Assert
    const nextButton = screen.getByTestId(testId.carouselNextButton);
    await user.click(nextButton);
    expectToBeHidden(slideElements[0]);
    expectToBeVisible(slideElements[1]);
    expectToBeHidden(slideElements[2]);

    // Act && Assert
    await user.click(nextButton);
    expectToBeHidden(slideElements[0]);
    expectToBeHidden(slideElements[1]);
    expectToBeVisible(slideElements[2]);

    // Act && Assert
    await user.click(nextButton);
    expectToBeVisible(slideElements[0]);
    expectToBeHidden(slideElements[1]);
    expectToBeHidden(slideElements[2]);

    // Act && Assert
    const prevButton = screen.getByTestId(testId.carouselPrevButton);
    await user.click(prevButton);
    expectToBeHidden(slideElements[0]);
    expectToBeHidden(slideElements[1]);
    expectToBeVisible(slideElements[2]);

    // Act && Assert
    await user.click(prevButton);
    expectToBeHidden(slideElements[0]);
    expectToBeVisible(slideElements[1]);
    expectToBeHidden(slideElements[2]);
  });
});
