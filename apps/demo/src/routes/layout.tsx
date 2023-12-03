import { Brand } from '@demo/ui';
import { Outlet } from 'react-router-dom';

import { BRAND_NAME, testId } from '~/constants';

export function Layout() {
  return (
    <div className="prose flex min-h-screen max-w-none flex-col">
      <div className="p-4">
        <Brand
          logo={
            <img
              src="/logo.png"
              width={32}
              height={32}
              data-testid={testId.brandLogo}
            />
          }
          name={BRAND_NAME}
          data-testid={testId.brand}
        />
      </div>
      <div className="flex-1 p-4">
        <Outlet />
      </div>
      <div className="p-4">
        <a
          href="https://opensource.org/license/mit/"
          target="_blank"
          rel="noreferrer"
        >
          MIT
        </a>
      </div>
    </div>
  );
}

export default Layout;
