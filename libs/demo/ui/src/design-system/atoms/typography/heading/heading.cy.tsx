import { Heading, type HeadingProps } from './heading';

const mount = (props: HeadingProps) => {
  return cy.mount(<Heading data-testid="heading" {...props} />);
};

const getElement = () => cy.get('[data-testid=heading]');

describe('Heading', () => {
  it('should render correctly', () => {
    [1, 2, 3, 4, 5, 6].forEach((level) => {
      // Arrange
      const as = `h${level}` as HeadingProps['as'];
      const text = `My Heading ${level}`;

      // Act
      mount({ as, children: text });

      // Assert
      getElement().should('have.text', text);
    });
  });
});
