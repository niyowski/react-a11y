import { render, screen } from '@testing-library/react';

import { testId } from './constants';
import { Gauge } from './gauge';

describe('Gauge', () => {
  it('should render correctly', () => {
    // Arrange
    const value = 42;
    const title = 'The Answer';
    const descr =
      'The answer to the ultimate question of life, the universe, and everything.';

    // Act && Assert
    const { rerender } = render(<Gauge value={value} />);
    expect(screen.getByTestId(testId.value)).toHaveTextContent(`${value}`);
    expect(screen.queryByTestId(testId.description)).not.toBeInTheDocument();

    // Act && Assert
    rerender(<Gauge value={value} title={title} />);
    expect(screen.getByTestId(testId.title)).toHaveTextContent(title);

    // Act && Assert
    rerender(<Gauge value={value} description={descr} />);
    expect(screen.getByTestId(testId.description)).toHaveTextContent(descr);
  });
});
