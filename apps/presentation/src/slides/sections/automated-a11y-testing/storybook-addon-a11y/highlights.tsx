import {
  CheckCheckIcon,
  GithubIcon,
  InfoIcon,
  LaughIcon,
  PanelTopIcon,
} from 'lucide-react';

import { Anchor } from '~/components/anchor';
import { BulletedList, type BulletPoint } from '~/components/bulleted-list';
import { Slide } from '~/reveal/templates/slide';

const highlights: BulletPoint[] = [
  {
    id: '1',
    icon: { component: InfoIcon, className: 'text-info-500' },
    text: { content: 'Audit accessibility visually' },
  },
  {
    id: '2',
    icon: { component: InfoIcon, className: 'text-info-500' },
    text: { content: 'Uses axe-core' },
  },
  {
    id: '3',
    icon: { component: CheckCheckIcon, className: 'text-success-500' },
    text: { content: 'Suits well with design systems' },
  },
  {
    id: '4',
    icon: { component: LaughIcon, className: 'text-tertiary-500' },
    text: { content: 'Easy setup' },
  },
  {
    id: '5',
    icon: { component: GithubIcon },
    text: {
      content: (
        <Anchor
          href="https://github.com/storybookjs/storybook/tree/next/code/addons/a11y"
          aria-label="GitHub repository for storybook-addon-a11y"
        >
          GitHub
        </Anchor>
      ),
    },
  },
  {
    id: '5',
    icon: { component: PanelTopIcon },
    text: {
      content: (
        <Anchor
          href="https://storybook.js.org/addons/@storybook/addon-a11y"
          aria-label="Storybook page for storybook-addon-a11y"
        >
          Storybook documentation
        </Anchor>
      ),
    },
  },
];

export default () => {
  return (
    <Slide
      id="storybook-addon-a11y-highlights"
      aria-label="storybook-addon-a11y highlights"
      title="storybook-addon-a11y"
      alignTop
      centerContent
    >
      <BulletedList items={highlights} />
    </Slide>
  );
};
