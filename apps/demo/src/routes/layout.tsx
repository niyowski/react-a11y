import { Anchor, Brand, Link } from '@demo/ui';
import { Outlet } from 'react-router-dom';

import { BRAND_NAME, testId } from '~/constants';

export function Layout() {
  return (
    <div className="prose mx-auto flex min-h-screen max-w-screen-lg flex-col">
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
          <Link to="/resources" intent="primary" className="px-4">
            Resources
          </Link>
          <Anchor
            href="https://github.com/niyowski/react-a11y"
            intent="primary"
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
