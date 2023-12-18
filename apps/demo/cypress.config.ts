import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';
import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'cypress',
      bundler: 'vite',
    }),
    setupNodeEvents(on) {
      on('task', {
        log(message: string) {
          // eslint-disable-next-line no-console
          console.log(message);
          return null;
        },
        table(data: unknown[]) {
          // eslint-disable-next-line no-console
          console.table(data);
          return null;
        },
      });
    },
  },
});
