import { render, screen } from '@testing-library/react';
import { expectToHaveNoViolations } from 'test/a11y';

import { testId } from './constants';
import { Gauge } from './gauge';

describe('Gauge', () => {
  // Arrange
  const value = 42;

  it('should render correctly', () => {
    // Arrange
    const title = 'The Answer';
    const descr =
      'The answer to the ultimate question of life, the universe, and everything.';

    // Act && Assert
    const { rerender } = render(<Gauge value={value} />);
    expect(screen.getByTestId(testId.gaugeValue)).toHaveTextContent(`${value}`);
    expect(screen.queryByTestId(testId.gaugeDescr)).not.toBeInTheDocument();

    // Act && Assert
    rerender(<Gauge value={value} title={title} />);
    expect(screen.getByTestId(testId.gaugeTitle)).toHaveTextContent(title);

    // Act && Assert
    rerender(<Gauge value={value} description={descr} />);
    expect(screen.getByTestId(testId.gaugeDescr)).toHaveTextContent(descr);
  });

  it('should not have any a11y violations', async () => {
    // Act
    const { container } = render(<Gauge value={value} />);

    // Assert
    await expectToHaveNoViolations(container);
  });
});
