import { render, screen } from '@testing-library/react';
import { expectToHaveNoViolations } from 'test/a11y';

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
  it('should render label correctly', async () => {
    // Act
    const { container } = renderField({ label: labelText });

    // Assert
    expect(screen.getByText(labelText)).toBeInTheDocument();
    expect(screen.getByTestId(testId.field)).toBeInTheDocument();

    // Assert A11y
    await expectToHaveNoViolations(container);
  });

  it('should render correctly when the label is hidden', async () => {
    // Act
    const { container } = renderField({
      label: labelText,
      isLabelHidden: true,
    });

    // Assert
    expect(screen.getByText(labelText)).toHaveClass('hidden');

    // Assert A11y
    await expectToHaveNoViolations(container);
  });

  it('should render correctly when required', async () => {
    // Act
    const { container } = renderField({ label: labelText, required: true });

    // Assert
    expect(screen.getByText(labelText)).toHaveClass(requiredClass);
    expect(screen.getByRole('textbox')).toHaveAttribute('required');

    // Assert A11y
    await expectToHaveNoViolations(container);
  });

  it('should render correctly when required and the label is hidden', async () => {
    // Act
    const { container } = renderField({
      label: labelText,
      required: true,
      isLabelHidden: true,
    });

    // Assert
    const { parentElement } = screen.getByText(labelText);
    expect(parentElement).toHaveClass(requiredClass);

    // Assert A11y
    await expectToHaveNoViolations(container);
  });
});
