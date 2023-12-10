import { Brand, type BrandProps } from './brand';
import { testId } from './constants';

const mount = (props: BrandProps) => {
  return cy.mount(<Brand {...props} data-testid={testId.brand} />);
};

const getByTestId = (id: string) => cy.get(`[data-testid=${id}]`);

describe('Brand', () => {
  it('should render correctly', () => {
    // Arrange
    const props: BrandProps = {
      logo: <img src="/logo.svg" className="h-8 w-8" data-testid="logo" />,
      name: 'My Brand',
    };

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
});
