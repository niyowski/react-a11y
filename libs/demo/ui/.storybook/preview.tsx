import '../src/styles.css';

import * as Blocks from '@storybook/blocks';
import { Preview } from '@storybook/react';

const preview: Preview = {
  decorators: [
    (Story) => (
      <div className="prose">
        <Story />
      </div>
    ),
  ],
  parameters: {
    actions: {
      argTypesRegex: '^on[A-Z].*',
    },
    docs: {
      page: () => (
        <>
          <Blocks.Title />
          <Blocks.Subtitle />
          <Blocks.Description />
          <Blocks.Primary />
          <Blocks.Controls />
          <Blocks.Stories includePrimary={false} />
        </>
      ),
    },
    a11y: {
      config: {
        // I see no reason to disable any of the rules
      },
    },
  },
};

export default preview;
