import { Input } from '../input';
import { Field, type FieldProps } from './field';

const testId = { field: 'field' };

const mount = (props: Omit<FieldProps, 'children'>) => {
  cy.mount(
    <Field {...props} data-testid={testId.field}>
      <Input defaultValue="value" />
    </Field>,
  );
  cy.injectAndConfigureAxe();
};

const getField = () => cy.get(`[data-testid=${testId.field}]`);
const getLabel = () => getField().find('label');
const getInput = () => getField().find('input');

describe('Field', () => {
  // Arrange
  const props: Omit<FieldProps, 'children'> = {
    label: 'My Label',
  };

  it('should render correctly', () => {
    // Act
    mount(props);

    // Assert
    getField().should('exist');
    getLabel().should('have.text', props.label);
    getInput().should('exist');
  });

  it('should not have any a11y violations', () => {
    // Act
    mount(props);

    // Assert
    cy.auditAccessibility();
  });
});
