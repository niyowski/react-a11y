import { Input } from '../input';
import { Field, type FieldProps } from './field';

const testId = { field: 'field' };

const mount = (props: Omit<FieldProps, 'children'>) => {
  return cy.mount(
    <Field {...props} data-testid={testId.field}>
      <Input defaultValue="value" />
    </Field>,
  );
};

const getField = () => cy.get(`[data-testid=${testId.field}]`);
const getLabel = () => getField().find('label');
const getInput = () => getField().find('input');

describe('Field', () => {
  it('should render correctly', () => {
    // Arrange
    const props: Omit<FieldProps, 'children'> = {
      label: 'My Label',
    };

    // Act
    mount(props);

    // Assert
    getField().should('exist');
    getLabel().should('have.text', props.label);
    getInput().should('exist');
  });
});
