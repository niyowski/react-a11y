import {
  AlertCircleIcon,
  AlertTriangleIcon,
  AppWindowIcon,
  CheckCircleIcon,
  GithubIcon,
  InfoIcon,
} from 'lucide-react';

import { Anchor } from '~/components/anchor';
import { BulletedList, type BulletPoint } from '~/components/bulleted-list';
import { Slide } from '~/reveal/templates/slide';

const highlights: BulletPoint[] = [
  {
    id: '1',
    icon: { component: InfoIcon, className: 'text-info-500' },
    text: { content: 'Console-based accessibility audits' },
  },
  {
    id: '2',
    icon: { component: AppWindowIcon },
    text: { content: 'Browser support' },
    children: [
      {
        id: '2.1',
        icon: { component: CheckCircleIcon, className: 'text-success-500' },
        text: { content: 'Excellent support for Chrome' },
        transition: 'none',
      },
      {
        id: '2.2',
        icon: { component: AlertCircleIcon, className: 'text-warning-500' },
        text: { content: 'Limited support for Safari, Firefox' },
        transition: 'none',
      },
    ],
  },
  {
    id: '3',
    icon: { component: AlertTriangleIcon, className: 'text-warning-500' },
    text: { content: 'Use in development mode only' },
  },
  {
    id: '4',
    icon: { component: GithubIcon },
    text: {
      content: (
        <Anchor
          href="https://github.com/dequelabs/axe-core-npm/blob/develop/packages/react/README.md"
          aria-label="GitHub repository of @axe-core/react"
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
      id="axe-core-react-highlights"
      aria-label="@axe-core/react highlights"
      title="@axe-core/react"
      alignTop
      centerContent
    >
      <BulletedList items={highlights} />
    </Slide>
  );
};
