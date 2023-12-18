import { Heading, type HeadingProps } from './heading';

const testId = { heading: 'heading' };

const mount = (props: HeadingProps) => {
  return cy.mount(<Heading {...props} data-testid={testId.heading} />);
};

const getElement = () => cy.get(`[data-testid=${testId.heading}]`);

describe('Heading', () => {
  it('should render correctly', () => {
    [1, 2, 3, 4, 5, 6].forEach((level) => {
      // Arrange
      const as = `h${level}` as HeadingProps['as'];
      const text = `My Heading ${level}`;

      // Act
      mount({ as, children: text });
      cy.injectAndConfigureAxe();

      // Assert
      getElement().should('have.text', text);

      // Assert a11y
      cy.auditAccessibility();
    });
  });
});
