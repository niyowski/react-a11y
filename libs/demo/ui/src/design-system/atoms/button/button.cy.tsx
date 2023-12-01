import { Button, ButtonProps } from './button';

const mount = (props: Partial<ButtonProps> = {}) => {
  return cy.mount(<Button data-cy="button" {...props} />);
};

const getButton = () => cy.get('[data-cy=button]');

describe('Button', () => {
  it('should render the button with the correct text', () => {
    // Arrange
    const props: Partial<ButtonProps> = {
      children: 'Click me!',
    };

    // Act
    mount(props);

    // Assert
    getButton().should('contains.text', props.children);
  });

  it('should call the onChange callback when clicked', () => {
    // Arrange
    const props: Partial<ButtonProps> = {
      onClick: cy.spy().as('onClick'),
    };

    // Act
    mount(props);
    getButton().click();

    // Assert
    cy.get('@onClick').should('have.been.called');
  });
});
