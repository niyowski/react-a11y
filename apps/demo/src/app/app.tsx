import { Button } from '@demo/ui';

import { BRAND_NAME, testId } from './constants';
import { Providers } from './providers';

// eslint-disable-next-line no-console
const log = console.log;

export function App() {
  return (
    <Providers>
      <div>
        <span data-testid={testId.brandName}>{BRAND_NAME}</span>
        <Button onClick={() => log('Clicked!')}>Click me</Button>
      </div>
    </Providers>
  );
}

export default App;
