import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { Anchor } from './anchor';
import { Link } from './link';

describe('Link', () => {
  it('should render correctly', () => {
    // Arrange
    const text = 'My Link';
    const href = '/';

    // Act
    render(
      <MemoryRouter>
        <Link to={href}>{text}</Link>
      </MemoryRouter>,
    );

    // Assert
    expect(screen.getByRole('link')).toHaveTextContent(text);
  });
});

describe('Anchor', () => {
  it('should render correctly', () => {
    // Arrange
    const text = 'My Link';
    const href = 'https://jestjs.io/';

    // Act
    render(<Anchor href={href}>{text}</Anchor>);

    // Assert
    expect(screen.getByRole('link')).toHaveTextContent(text);
  });
});
