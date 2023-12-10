import { Button, type ButtonProps } from './button';

const mount = (props: ButtonProps) => {
  return cy.mount(<Button {...props} />);
};

const getButton = () => cy.get('button');

describe('Button', () => {
  it('should render correctly', () => {
    // Arrange
    const props: ButtonProps = {
      children: 'My Button',
      onClick: cy.spy().as('onClick'),
    };

    // Act && Assert
    mount(props);
    getButton().should('contains.text', props.children).click();
    cy.get('@onClick').should('have.been.called');
  });
});
