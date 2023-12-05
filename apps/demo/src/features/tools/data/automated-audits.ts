import { ToolInfo } from '../types';

export const data: ToolInfo[] = [
  {
    id: '1',
    title: 'jest-axe',
    description: 'Custom Jest matcher for axe for testing accessibility.',
    link: 'https://github.com/NickColley/jest-axe',
    tags: ['jest', 'unit'],
  },
  {
    id: '2',
    title: 'cypress-axe',
    description: 'Test accessibility with axe-core in Cypress.',
    link: 'https://github.com/component-driven/cypress-axe',
    tags: ['cypress', 'component', 'integration', 'e2e'],
  },
  {
    id: '3',
    title: '@axe-core/playwright',
    description:
      'Provides a chainable axe API for playwright and automatically injects into all frames.',
    link: 'https://www.siteimprove.com/integrations/browser-extensions/',
    tags: ['playwright', 'integration', 'e2e'],
  },
];
