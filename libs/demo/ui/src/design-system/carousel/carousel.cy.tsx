import { Carousel, type CarouselProps } from './carousel';
import { testId } from './constants';
import type { CarouselSlide } from './types';

const mount = (props: CarouselProps) => {
  cy.mount(<Carousel {...props} data-testid={testId.carousel} />);
  cy.injectAndConfigureAxe();
};

const getByTestId = (id: string) => cy.get(`[data-testid=${id}]`);

describe('Carousel', () => {
  // Arrange
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

  it('should render correctly', () => {
    // Act
    mount({ slides });

    // Assert
    getByTestId(testId.carousel).should('exist');
    getByTestId(testId.carouselPrevButton).should('exist');
    getByTestId(testId.carouselSlide).should('have.length', 3);
    getByTestId(testId.carouselSlideImage)
      .should('have.length', 2)
      .then(($items) => {
        cy.wrap($items[0]).should('have.attr', 'src', '/slide-1.jpg');
        cy.wrap($items[1]).should('have.attr', 'src', '/slide-3.jpg');
      });
    getByTestId(testId.carouselSlideContent).should('have.length', 2);
    getByTestId(testId.carouselNextButton).should('exist');
  });

  it('should not have any a11y violations', () => {
    // Act
    mount({ slides });

    // Assert
    cy.auditAccessibility();
  });
});
