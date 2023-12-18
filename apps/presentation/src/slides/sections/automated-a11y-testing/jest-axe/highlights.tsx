import { AlertTriangleIcon, GithubIcon, InfoIcon } from 'lucide-react';

import { Anchor } from '~/components/anchor';
import { BulletedList, type BulletPoint } from '~/components/bulleted-list';
import { Slide } from '~/reveal/templates/slide';

const highlights: BulletPoint[] = [
  {
    id: '1',
    icon: { component: InfoIcon, className: 'text-info-500' },
    text: { content: 'Custom Jest matcher based on axe-core' },
  },
  {
    id: '2',
    icon: { component: AlertTriangleIcon, className: 'text-warning-500' },
    text: { content: 'Color contrast rules are turned off by default' },
  },
  {
    id: '3',
    icon: { component: AlertTriangleIcon, className: 'text-warning-500' },
    text: {
      content: (
        <>
          Use the <em>baseElement</em> instead of container while testing
          portals
        </>
      ),
    },
  },
  {
    id: '4',
    icon: { component: GithubIcon },
    text: {
      content: (
        <Anchor
          href="https://github.com/nickcolley/jest-axe"
          aria-label="GitHub repository of jest-axe"
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
      id="jest-axe-highlights"
      aria-label="jest-axe highlights"
      title="jest-axe"
      alignTop
      centerContent
    >
      <BulletedList items={highlights} />
    </Slide>
  );
};
