import { Anchor, Brand, Link } from '@demo/ui';
import { Outlet } from 'react-router-dom';

import { BRAND_NAME, testId } from '~/constants';

export function Layout() {
  return (
    <div className="prose flex min-h-screen max-w-none flex-col">
      <div className="flex items-center justify-between p-4">
        <Link to="/" intent="primary">
          <Brand
            logo={
              <img
                src="/logo.png"
                width={64}
                height={64}
                data-testid={testId.brandLogo}
              />
            }
            name={BRAND_NAME}
            data-testid={testId.brand}
          />
        </Link>
        <div className="flex divide-x text-center">
          <Link to="/resources" className="px-4">
            Resources
          </Link>
          <Anchor
            href="https://github.com/niyowski/react-a11y"
            className="px-4"
          >
            Source Code
          </Anchor>
        </div>
      </div>
      <div className="flex-1 p-4">
        <Outlet />
      </div>
      <div className="p-4">
        <span>
          <Anchor href="https://opensource.org/licenses/MIT">MIT</Anchor>{' '}
          Licensed.
        </span>
      </div>
    </div>
  );
}

export default Layout;
