import { render, screen } from '@testing-library/react';
import { expectToHaveNoViolations } from 'test/a11y';

import { Button } from './button';

describe('Button', () => {
  // Arrange
  const buttonText = 'My Button';

  it('should render correctly', () => {
    // Act
    render(<Button>{buttonText}</Button>);

    // Assert
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent(buttonText);
  });

  it('should not have any a11y violations', async () => {
    // Act
    const { container } = render(<Button>{buttonText}</Button>);

    // Assert
    await expectToHaveNoViolations(container);
  });
});
