import { render, screen } from '@testing-library/react';

import { Button } from './button';

describe('Button', () => {
  it('should render correctly', () => {
    // Arrange
    const buttonText = 'My Button';

    // Act
    render(<Button>{buttonText}</Button>);

    // Assert
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent(buttonText);
  });
});
