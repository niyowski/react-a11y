import { Heading } from '@demo/ui';

import { Resources } from '~/features/resources';

export function Page() {
  return (
    <div className="flex flex-col">
      <Heading as="h1">Resources</Heading>
      <Resources />
    </div>
  );
}

export default Page;
