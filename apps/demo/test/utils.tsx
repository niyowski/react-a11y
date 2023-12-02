import { render, RenderOptions } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ReactElement } from 'react';

import { Providers } from '~/app/providers';

type RenderOptionsWithoutWrapper = Omit<RenderOptions, 'wrapper'>;

const customRender = (
  ui: ReactElement,
  options: RenderOptionsWithoutWrapper = {},
) => {
  return render(ui, {
    ...options,
    wrapper: Providers,
  });
};

interface PageRenderOptions extends RenderOptionsWithoutWrapper {
  route: string;
}

const renderPage = (ui: ReactElement, options: PageRenderOptions) => {
  const { route, ...renderOptions } = options;

  window.history.pushState({}, 'Page', route);

  return render(ui, {
    ...renderOptions,
    wrapper: Providers,
  });
};

export * from '@testing-library/react';
export { customRender as render, renderPage };
export { userEvent };
