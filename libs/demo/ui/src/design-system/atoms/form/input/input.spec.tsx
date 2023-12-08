import { render, screen } from '@testing-library/react';

import { Input } from './input';

describe('Input', () => {
  it('should render correctly', () => {
    // Arrange
    const value = 'Input';

    // Act
    render(<Input defaultValue={value} />);

    // Assert
    expect(screen.getByRole('textbox')).toHaveValue(value);
  });
});
