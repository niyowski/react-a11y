import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { expectToHaveNoViolations } from 'test/a11y';

import { Anchor } from './anchor';
import { Link } from './link';

describe('Link', () => {
  it('should render correctly', async () => {
    // Arrange
    const text = 'My Link';
    const href = '/';

    // Act
    const { container } = render(
      <MemoryRouter>
        <Link to={href}>{text}</Link>
      </MemoryRouter>,
    );

    // Assert
    expect(screen.getByRole('link')).toHaveTextContent(text);

    // Assert A11y
    await expectToHaveNoViolations(container);
  });
});

describe('Anchor', () => {
  it('should render correctly', async () => {
    // Arrange
    const text = 'My Link';
    const href = 'https://jestjs.io/';

    // Act
    const { container } = render(<Anchor href={href}>{text}</Anchor>);

    // Assert
    expect(screen.getByRole('link')).toHaveTextContent(text);

    // Assert A11y
    await expectToHaveNoViolations(container);
  });
});
