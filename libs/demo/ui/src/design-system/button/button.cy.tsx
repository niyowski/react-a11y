import { Button, type ButtonProps } from './button';

const mount = (props: ButtonProps) => {
  cy.mount(<Button {...props} />);
  cy.injectAndConfigureAxe();
};

const getButton = () => cy.get('button');

describe('Button', () => {
  // Arrange
  const props: ButtonProps = {
    children: 'My Button',
  };

  it('should render correctly', () => {
    // Arrange
    const propsWithOnClick: ButtonProps = {
      ...props,
      onClick: cy.spy().as('onClick'),
    };

    // Act && Assert
    mount(propsWithOnClick);
    getButton().should('contains.text', props.children).click();
    cy.get('@onClick').should('have.been.called');
  });

  it('should not have any a11y violations', () => {
    // Act
    mount(props);

    // Assert
    cy.auditAccessibility();
  });
});
