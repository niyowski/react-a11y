import { render, screen } from 'test/utils';

import { App } from './app';
import { BRAND_NAME, testId } from './constants';

describe('App', () => {
  it('should have a brand name', () => {
    // Act
    render(<App />);

    // Assert
    expect(screen.getByTestId(testId.brandName)).toHaveTextContent(BRAND_NAME);
  });
});
