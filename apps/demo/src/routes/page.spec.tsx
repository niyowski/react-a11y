import { renderPage, screen, userEvent } from 'test/utils';

import { Page } from './page';

describe('HomePage', () => {
  it('should have a button', async () => {
    // Arrange
    const user = userEvent.setup();
    const consoleSpy = jest.spyOn(console, 'log');

    // Act
    renderPage(<Page />, { route: '/' });

    // Assert
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();

    await user.click(button);
    expect(consoleSpy).toHaveBeenCalled();
  });
});
