import { Brand, type BrandProps } from './brand';

const mount = (props: BrandProps) => {
  return cy.mount(<Brand data-testid="brand" {...props} />);
};

const getElement = () => cy.get('[data-testid=brand]');

describe('Brand', () => {
  it('should render correctly', () => {
    // Arrange
    const props: BrandProps = {
      logo: <img src="/logo.svg" data-testid="logo" />,
      name: 'My Brand',
    };

    // Act
    mount(props);

    // Assert
    getElement()
      .children()
      .should('have.length', 2)
      .then(($children) => {
        cy.wrap($children[0]).should('have.attr', 'data-testid', 'logo');
        cy.wrap($children[1]).should('contain.text', props.name);
      });
  });
});
