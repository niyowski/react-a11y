import { render, screen } from 'test/utils';

import { testId } from '~/constants';

import { Page } from './page';

describe('HomePage', () => {
  it('should stats', async () => {
    // Act
    render(<Page />);

    // Assert
    expect(screen.getByTestId(testId.stats)).toBeInTheDocument();
  });
});
