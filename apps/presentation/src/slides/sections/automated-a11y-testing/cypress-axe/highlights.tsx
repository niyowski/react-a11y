import {
  AlertCircleIcon,
  AlertTriangleIcon,
  CheckCheckIcon,
  GithubIcon,
  InfoIcon,
  ZapIcon,
} from 'lucide-react';

import { Anchor } from '~/components/anchor';
import { BulletedList, type BulletPoint } from '~/components/bulleted-list';
import { Slide } from '~/reveal/templates/slide';

const highlights: BulletPoint[] = [
  {
    id: '1',
    icon: { component: InfoIcon, className: 'text-info-500' },
    text: { content: 'Accessibility audit in Cypress with axe-core' },
  },
  {
    id: '2',
    icon: { component: AlertCircleIcon, className: 'text-warning-500' },
    text: { content: 'Complicated setup in comparison to other axe tests' },
  },
  {
    id: '3',
    icon: { component: CheckCheckIcon, className: 'text-success-500' },
    text: { content: 'Can check color contrast violations' },
  },
  {
    id: '4',
    icon: { component: ZapIcon, className: 'text-warning-500' },
    text: { content: 'Suits for component, integration and end-to-end tests' },
    children: [
      {
        id: '4.1',
        icon: { component: AlertTriangleIcon, className: 'text-warning-500' },
        text: {
          content: 'You may need to disable some rules for component tests',
        },
        transition: 'none',
      },
    ],
  },
  {
    id: '5',
    icon: { component: GithubIcon, className: 'text-base-500' },
    text: {
      content: (
        <Anchor
          href="https://github.com/component-driven/cypress-axe"
          aria-label="GitHub repository of cypress-axe"
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
      id="cypress-axe-highlights"
      aria-label="cypress-axe highlights"
      title="cypress-axe"
      alignTop
      centerContent
    >
      <BulletedList items={highlights} />
    </Slide>
  );
};
