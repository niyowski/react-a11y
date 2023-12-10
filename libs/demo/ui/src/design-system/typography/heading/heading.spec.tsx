import { render, screen } from '@testing-library/react';

import { Heading, type HeadingProps } from './heading';

describe('Heading', () => {
  it.each<number[]>([[1, 2, 3, 4, 5, 6]])(
    `should render h%s correctly`,
    (level) => {
      // Arrange
      const as = `h${level}` as HeadingProps['as'];
      const text = `My Heading ${level}`;
      const testId = `heading-${level}`;

      // Act
      render(
        <Heading as={as} data-testid={testId}>
          {text}
        </Heading>,
      );

      // Assert
      expect(screen.getByRole('heading', { level })).toHaveTextContent(text);
      expect(screen.getByTestId(testId)).toBeInTheDocument();
    },
  );
});
