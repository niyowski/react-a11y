import { Carousel, type CarouselProps } from './carousel';
import { testId } from './constants';
import type { CarouselSlide } from './types';

const mount = (props: CarouselProps) => {
  return cy.mount(<Carousel data-testid={testId.carousel} {...props} />);
};

const getCarousel = () => cy.get(`[data-testid=${testId.carousel}]`);
const getPrevButton = () =>
  cy.get(`[data-testid=${testId.carouselPrevButton}]`);
const getNextButton = () =>
  cy.get(`[data-testid=${testId.carouselNextButton}]`);
const getSlides = () => cy.get(`[data-testid=${testId.carouselSlide}]`);
const getSlideImages = () =>
  cy.get(`[data-testid=${testId.carouselSlideImage}]`);
const getSlideContent = () =>
  cy.get(`[data-testid=${testId.carouselSlideContent}]`);

describe('Tabs', () => {
  it('should render correctly', () => {
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

    // Act
    mount({ slides });

    // Assert
    getCarousel().should('exist');
    getPrevButton().should('exist');
    getSlides().should('have.length', 3);
    getSlideImages()
      .should('have.length', 2)
      .then(($items) => {
        cy.wrap($items[0]).should('have.attr', 'src', '/slide-1.jpg');
        cy.wrap($items[1]).should('have.attr', 'src', '/slide-3.jpg');
      });
    getSlideContent().should('have.length', 2);
    getNextButton().should('exist');
  });
});
