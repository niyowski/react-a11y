import { Heading } from '@demo/ui';
import { Helmet } from 'react-helmet-async';

import { Resources } from '~/features/resources';
import { usePageFocus } from '~/hooks/use-page-focus';

export function Page() {
  const ref = usePageFocus();

  return (
    <>
      <Helmet>
        <title>Demo | Resources</title>
      </Helmet>
      <div className="flex flex-col">
        <Heading as="h1" tabIndex={-1} ref={ref}>
          Resources
        </Heading>
        <Resources />
      </div>
    </>
  );
}

export default Page;
