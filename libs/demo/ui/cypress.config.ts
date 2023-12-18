import { nxComponentTestingPreset } from '@nx/react/plugins/component-testing';
import { defineConfig } from 'cypress';

export default defineConfig({
  component: {
    ...nxComponentTestingPreset(__filename, { bundler: 'vite' }),
    setupNodeEvents(on) {
      on('task', {
        log(message: string) {
          console.log(message);
          return null;
        },
        table(data: unknown[]) {
          console.table(data);
          return null;
        },
      });
    },
  },
});
