import { Button } from '@demo/ui';

import { BRAND_NAME, testId } from './constants';
import { Providers } from './providers';

// eslint-disable-next-line no-console
const log = console.log;

export function App() {
  return (
    <Providers>
      <div className="prose flex min-h-screen flex-col">
        <div className="p-4">
          <span data-testid={testId.brandName}>{BRAND_NAME}</span>
          <Button onClick={() => log('Clicked!')}>Click me</Button>
        </div>
        <div className="flex-1"></div>
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
    </Providers>
  );
}

export default App;
