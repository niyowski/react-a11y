import { axe, DEFAULT_AXE_OPTIONS } from 'test/a11y';
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

  it('should not have any a11y violations', async () => {
    // Act
    const { container } = render(<Page />);

    // Assert
    expect(await axe(container, DEFAULT_AXE_OPTIONS)).toHaveNoViolations();
  });
});
