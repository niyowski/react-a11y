import { Heading } from '@demo/ui';
import { Helmet } from 'react-helmet-async';

import { Hero } from '~/features/hero';
import { Stats } from '~/features/stats';
import { Tools } from '~/features/tools';
import { usePageFocus } from '~/hooks/use-page-focus';

export function Page() {
  const ref = usePageFocus();

  return (
    <>
      <Helmet>
        <title>Demo | Home</title>
      </Helmet>
      <div className="flex flex-col">
        <Heading as="h1" tabIndex={-1} ref={ref}>
          Unveiling Accessibility Challenges in React.js
        </Heading>
        <Hero />
        <Stats />
        <Tools />
      </div>
    </>
  );
}

export default Page;
