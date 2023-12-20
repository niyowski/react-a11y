import { PersonStandingIcon } from 'lucide-react';

import { Anchor } from '~/components/anchor';
import { BulletedList, type BulletPoint } from '~/components/bulleted-list';
import { Slide } from '~/reveal/templates/slide';

const highlights: BulletPoint[] = [
  {
    id: '1',
    icon: { component: PersonStandingIcon, className: 'text-info-500' },
    text: {
      content: (
        <>
          Understand the{' '}
          <Anchor href="https://www.w3.org/WAI/WCAG21/Understanding/intro#understanding-the-four-principles-of-accessibility">
            four principles of accessibility
          </Anchor>
        </>
      ),
    },
  },
  {
    id: '2',
    icon: { component: PersonStandingIcon, className: 'text-info-500' },
    text: {
      content: (
        <>
          Adhere to the{' '}
          <Anchor href="https://www.w3.org/WAI/standards-guidelines/wcag/glance/">
            Web Content Accessibility Guidelines
          </Anchor>
        </>
      ),
    },
  },
  {
    id: '3',
    icon: { component: PersonStandingIcon, className: 'text-info-500' },
    text: {
      content: (
        <Anchor href="https://www.w3.org/TR/WCAG22/">
          WCAG 2.2 Specification
        </Anchor>
      ),
    },
  },
];

export default () => {
  return (
    <Slide
      id="web-accessibility"
      title="Web Accessibility"
      alignTop
      centerContent
    >
      <BulletedList items={highlights} />
    </Slide>
  );
};
