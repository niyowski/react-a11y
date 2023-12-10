import { render, screen } from '@testing-library/react';

import { Brand } from './brand';
import { testId } from './constants';

describe('Brand', () => {
  it('should render correctly', () => {
    // Arrange
    const logo = <img src="/logo.svg" data-testid="logo" />;
    const name = 'Brand';

    // Act
    const { baseElement } = render(
      <Brand logo={logo} name={name} data-testid={testId.brand} />,
    );

    // Assert
    expect(screen.getByTestId(testId.brand)).toBeInTheDocument();
    expect(baseElement).toContainElement(screen.getByTestId('logo'));
    expect(baseElement).toContainElement(screen.getByText(name));
  });
});
