import { render, RenderOptions } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { PropsWithChildren, ReactElement } from 'react';
import { MemoryRouter } from 'react-router-dom';

import { Providers } from '~/app/providers';

interface CustomRenderOptions extends Omit<RenderOptions, 'wrapper'> {}

const customRender = (ui: ReactElement, options: CustomRenderOptions = {}) => {
  const Wrapper = ({ children }: PropsWithChildren) => (
    <Providers>
      <MemoryRouter>{children}</MemoryRouter>
    </Providers>
  );

  return render(ui, {
    ...options,
    wrapper: Wrapper,
  });
};

export * from '@testing-library/react';
export { customRender as render };
export { userEvent };
