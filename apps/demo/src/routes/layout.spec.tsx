import { render, screen } from 'test/utils';

import { BRAND_NAME, testId } from '~/constants';

import { Layout } from './layout';

describe('Layout', () => {
  it('should have a brand', () => {
    // Act
    render(<Layout />);

    // Assert
    expect(screen.getByTestId(testId.brandLogo)).toBeInTheDocument();
    expect(screen.getByTestId(testId.brand)).toHaveTextContent(BRAND_NAME);
  });
});
