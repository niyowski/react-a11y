import { expectToHaveNoViolations } from 'test/a11y';
import { render } from 'test/utils';

import { Page } from './page';

describe('ResourcesPage', () => {
  it('should not have any a11y violations', async () => {
    // Act
    const { container } = render(<Page />);

    // Assert
    await expectToHaveNoViolations(container);
  });
});
