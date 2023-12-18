import {
  AlertCircleIcon,
  GithubIcon,
  InfoIcon,
  PlusCircleIcon,
} from 'lucide-react';

import { Anchor } from '~/components/anchor';
import { BulletedList, type BulletPoint } from '~/components/bulleted-list';
import { Slide } from '~/reveal/templates/slide';

const highlights: BulletPoint[] = [
  {
    id: '1',
    icon: { component: InfoIcon, className: 'text-info-500' },
    text: { content: 'Static evaluation of JSX' },
  },
  {
    id: '2',
    icon: { component: InfoIcon, className: 'text-info-500' },
    text: { content: 'Included in most ESLint configs/plugins by default' },
  },
  {
    id: '3',
    icon: { component: AlertCircleIcon, className: 'text-warning-500' },
    text: { content: 'Limited functionality' },
    children: [
      {
        id: '3.1',
        icon: { component: PlusCircleIcon, className: 'text-success-500' },
        text: { content: 'Use in combination with @axe-core/react' },
        transition: 'none',
      },
    ],
  },
  {
    id: '4',
    icon: { component: GithubIcon },
    text: {
      content: (
        <Anchor
          href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y"
          aria-label="GitHub repository of eslint-plugin-jsx-a11y"
        >
          GitHub
        </Anchor>
      ),
    },
  },
];

export default () => {
  return (
    <Slide
      id="eslint-plugin-jsx-a11y-highlights"
      aria-label="eslint-plugin-jsx-a11y highlights"
      title="eslint-plugin-jsx-a11y"
      alignTop
      centerContent
    >
      <BulletedList items={highlights} />
    </Slide>
  );
};
