import { render, screen } from '@testing-library/react';
import { expectToHaveNoViolations } from 'test/a11y';

import { Input } from './input';

describe('Input', () => {
  // Arrange
  const value = 'Input';

  it('should render correctly', () => {
    // Act
    render(<Input defaultValue={value} />);

    // Assert
    expect(screen.getByRole('textbox')).toHaveValue(value);
  });

  it('should not have any a11y violations', async () => {
    // Act
    const { container } = render(<Input defaultValue={value} />);

    // Assert
    await expectToHaveNoViolations(container);
  });
});
