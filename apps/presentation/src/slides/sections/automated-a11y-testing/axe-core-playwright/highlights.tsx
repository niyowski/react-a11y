import {
  AlertCircleIcon,
  GithubIcon,
  InfoIcon,
  SettingsIcon,
  ThumbsDownIcon,
} from 'lucide-react';

import { Anchor } from '~/components/anchor';
import { BulletedList, type BulletPoint } from '~/components/bulleted-list';
import { Slide } from '~/reveal/templates/slide';

const highlights: BulletPoint[] = [
  {
    id: '1',
    icon: { component: InfoIcon, className: 'text-info-500' },
    text: { content: 'Audit accessibility with Playwright end-to-end tests' },
  },
  {
    id: '2',
    icon: { component: AlertCircleIcon, className: 'text-info-500' },
    text: { content: 'Provides its own API to enable/disable rules' },
  },
  {
    id: '3',
    icon: { component: ThumbsDownIcon, className: 'text-danger-500' },
    text: { content: 'Hard to read the results' },
  },
  {
    id: '4',
    icon: { component: GithubIcon },
    text: {
      content: (
        <Anchor
          href="https://github.com/dequelabs/axe-core-npm/blob/develop/packages/playwright/README.md"
          aria-label="GitHub repository of @axe-core/playwright"
        >
          GitHub
        </Anchor>
      ),
    },
  },
  {
    id: '5',
    icon: { component: SettingsIcon },
    text: {
      content: (
        <Anchor
          href="https://playwright.dev/docs/accessibility-testing"
          aria-label="Guide to accessibility testing with Playwright"
        >
          Playwright documentation
        </Anchor>
      ),
    },
  },
];

export default () => {
  return (
    <Slide
      id="axe-core-playwright-highlights"
      aria-label="@axe-core/playwright highlights"
      title="@axe-core/playwright"
      alignTop
      centerContent
    >
      <BulletedList items={highlights} />
    </Slide>
  );
};
