import { Brand, type BrandProps } from './brand';
import { testId } from './constants';

const mount = (props: BrandProps) => {
  cy.mount(<Brand {...props} data-testid={testId.brand} />);
  cy.injectAndConfigureAxe();
};

const getByTestId = (id: string) => cy.get(`[data-testid=${id}]`);

describe('Brand', () => {
  // Arrange
  const props: BrandProps = {
    logo: <img src="/logo.svg" className="h-8 w-8" data-testid="logo" />,
    name: 'My Brand',
  };

  it('should render correctly', () => {
    // Act
    mount(props);

    // Assert
    getByTestId(testId.brand)
      .children()
      .should('have.length', 2)
      .then(($children) => {
        cy.wrap($children[0]).should('have.attr', 'data-testid', 'logo');
        cy.wrap($children[1]).should('contain.text', props.name);
      });
  });

  it('should not have any a11y violations', () => {
    // Act
    mount(props);

    // Assert
    cy.auditAccessibility();
  });
});
