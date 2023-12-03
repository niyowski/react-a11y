import { render, screen } from '@testing-library/react';

import { Brand } from './brand';

describe('Brand', () => {
  it('should render correctly', () => {
    // Arrange
    const logo = <img src="/logo.svg" data-testid="logo" />;
    const name = 'Brand';
    const testId = 'brand';

    // Act
    const { baseElement } = render(
      <Brand logo={logo} name={name} data-testid={testId} />,
    );

    // Assert
    expect(baseElement).toContainElement(screen.getByTestId('logo'));
    expect(baseElement).toContainElement(screen.getByText(name));
    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });
});
