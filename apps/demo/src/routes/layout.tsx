import { Anchor, Brand, Link } from '@demo/ui';
import { Outlet, useLocation } from 'react-router-dom';

import { BRAND_NAME, testId } from '~/constants';
import { NewsletterSubscription } from '~/features/newsletter';
import { useAxe } from '~/hooks/use-axe';
import { useFeatureToggle } from '~/hooks/use-feature-toggle';
import { usePageTitle } from '~/hooks/use-page-title';

export function Layout() {
  const { pathname } = useLocation();
  useAxe(pathname);

  const isCsrA11yEnabled = useFeatureToggle('csr-a11y');
  const pageTitle = usePageTitle(pathname);

  return (
    <>
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
                  className="m-0"
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
        <div className="grid grid-cols-3 p-4">
          <span>
            <Anchor href="https://opensource.org/licenses/MIT">MIT</Anchor>{' '}
            Licensed.
          </span>
          <div></div>
          <NewsletterSubscription />
        </div>
      </div>
      {isCsrA11yEnabled && (
        <div
          aria-live="polite"
          className="absolute -left-[10000px] top-auto h-1 w-1 overflow-hidden"
        >
          {`Navigated to ${pageTitle}`}
        </div>
      )}
    </>
  );
}

export default Layout;
