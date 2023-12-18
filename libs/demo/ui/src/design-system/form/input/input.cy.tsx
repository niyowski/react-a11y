import { useState } from 'react';

import { Input, type InputProps } from './input';

const mount = (props: InputProps) => {
  const Component = () => {
    const [value, setValue] = useState(props.value);
    return (
      <Input
        data-testid="input"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          props.onChange?.(e);
        }}
      />
    );
  };

  cy.mount(<Component />);
  cy.injectAndConfigureAxe();
};

const getInput = () => cy.get('input');

describe('Input', () => {
  // Arrange
  const props: InputProps = {
    value: 'My Input',
  };

  it('should render correctly', () => {
    // Arrange
    const propsWithOnChange: InputProps = {
      ...props,
      onChange: cy.spy().as('onChange'),
    };

    // Act && Assert
    mount(propsWithOnChange);
    getInput().should('have.value', props.value);

    // Act && Assert
    getInput().clear().type('New value');
    cy.get('@onChange').should('have.been.calledWithMatch', {
      target: { value: 'New value' },
    });
  });

  it('should not have any a11y violations', () => {
    // Act
    mount(props);

    // Assert
    cy.auditAccessibility();
  });
});
