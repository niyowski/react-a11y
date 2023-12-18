import { render, screen } from '@testing-library/react';
import { expectToHaveNoViolations } from 'test/a11y';

import { Brand } from './brand';
import { testId } from './constants';

describe('Brand', () => {
  // Arrange
  const logo = <img src="/logo.svg" data-testid="logo" />;
  const name = 'Brand';

  it('should render correctly', () => {
    // Act
    const { baseElement } = render(
      <Brand logo={logo} name={name} data-testid={testId.brand} />,
    );

    // Assert
    expect(screen.getByTestId(testId.brand)).toBeInTheDocument();
    expect(baseElement).toContainElement(screen.getByTestId('logo'));
    expect(baseElement).toContainElement(screen.getByText(name));
  });

  it('should not have any a11y violations', async () => {
    // Act
    const { container } = render(<Brand logo={logo} name={name} />);

    // Assert
    await expectToHaveNoViolations(container);
  });
});
