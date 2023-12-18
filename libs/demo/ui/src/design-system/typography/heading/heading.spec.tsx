import { render, screen } from '@testing-library/react';
import { expectToHaveNoViolations } from 'test/a11y';

import { Heading, type HeadingProps } from './heading';

describe('Heading', () => {
  it.each<number[]>([[1, 2, 3, 4, 5, 6]])(
    `should render h%s correctly`,
    async (level) => {
      // Arrange
      const as = `h${level}` as HeadingProps['as'];
      const text = `My Heading ${level}`;
      const testId = `heading-${level}`;

      // Act
      const { container } = render(
        <Heading as={as} data-testid={testId}>
          {text}
        </Heading>,
      );

      // Assert
      expect(screen.getByRole('heading', { level })).toHaveTextContent(text);
      expect(screen.getByTestId(testId)).toBeInTheDocument();

      // Assert A11y
      await expectToHaveNoViolations(container);
    },
  );
});
