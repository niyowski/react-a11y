import { BRAND_NAME, testId } from './constants';
import { Providers } from './providers';

export function App() {
  return (
    <Providers>
      <div>
        <span data-testid={testId.brandName}>{BRAND_NAME}</span>
      </div>
    </Providers>
  );
}

export default App;
