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
  return cy.mount(<Component />);
};

const getInput = () => cy.get('[data-testid=input]');

describe('Input', () => {
  it('should render correctly', () => {
    // Arrange
    const props: InputProps = {
      value: 'My Input',
      onChange: cy.spy().as('onChange'),
    };

    // Act && Assert
    mount(props);
    getInput().should('have.value', props.value);

    // Act && Assert
    getInput().clear().type('New value');
    cy.get('@onChange').should('have.been.calledWithMatch', {
      target: { value: 'New value' },
    });
  });
});
