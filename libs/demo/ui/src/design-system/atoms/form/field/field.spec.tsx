import { render, screen } from '@testing-library/react';

import { Input } from '../input';
import { Field, type FieldProps } from './field';

// Arrange
const testId = { field: 'field' };
const labelText = 'My Label';
const requiredClass = 'after:content-["*"]';

const renderField = (props: Omit<FieldProps, 'children'>) => {
  return render(
    <Field {...props}>
      <Input data-testid={testId.field} />
    </Field>,
  );
};

describe('Field', () => {
  it('should render label correctly', () => {
    // Act
    renderField({ label: labelText });

    // Assert
    expect(screen.getByText(labelText)).toBeInTheDocument();
    expect(screen.getByTestId(testId.field)).toBeInTheDocument();
  });

  it('should render correctly when the label is hidden', () => {
    // Act
    renderField({ label: labelText, isLabelHidden: true });

    // Assert
    expect(screen.getByText(labelText)).toHaveClass('hidden');
  });

  it('should render correctly when required', () => {
    // Act
    renderField({ label: labelText, required: true });

    // Assert
    expect(screen.getByText(labelText)).toHaveClass(requiredClass);
    expect(screen.getByRole('textbox')).toHaveAttribute('required');
  });

  it('should render correctly when required and the label is hidden', () => {
    // Act
    renderField({ label: labelText, required: true, isLabelHidden: true });

    // Assert
    const { parentElement } = screen.getByText(labelText);
    expect(parentElement).toHaveClass(requiredClass);
  });
});
