import { render, screen } from 'test/utils';

import { BRAND_NAME, testId } from '~/constants';

import { Layout } from './layout';

describe('Layout', () => {
  it('should have a brand name', () => {
    // Act
    render(<Layout />);

    // Assert
    expect(screen.getByTestId(testId.brandName)).toHaveTextContent(BRAND_NAME);
  });
});
