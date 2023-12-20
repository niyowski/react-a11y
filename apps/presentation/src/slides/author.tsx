import {
  AccessibilityIcon,
  AtomIcon,
  AtSignIcon,
  BriefcaseIcon,
  CodeIcon,
  GlobeIcon,
  LinkedinIcon,
  ShieldCheckIcon,
} from 'lucide-react';

import { Anchor } from '~/components/anchor';
import { BulletedList, type BulletPoint } from '~/components/bulleted-list';
import { Image } from '~/components/image';
import { Slide } from '~/reveal/templates/slide';

const authorName = 'Mehmet Yarar';

const contact: BulletPoint[] = [
  {
    id: '1',
    icon: { component: AtSignIcon },
    text: { content: 'niyowski' },
  },
  {
    id: '2',
    icon: { component: LinkedinIcon },
    text: {
      content: (
        <Anchor
          href="https://linkedin.com/in/mnyarar"
          aria-label={`LinkedIn page of ${authorName}`}
        >
          mnyarar
        </Anchor>
      ),
    },
  },
];

const highlights: BulletPoint[] = [
  {
    id: '1',
    icon: { component: CodeIcon, className: 'text-teal-500' },
    text: { content: 'Software Engineer at EPAM, 2+ years' },
  },
  {
    id: '2',
    icon: { component: AtomIcon, className: 'text-sky-500' },
    text: { content: 'Developing in React, since 2018' },
  },
  {
    id: '3',
    icon: { component: BriefcaseIcon, className: 'text-blue-500' },
    text: { content: 'Microfrontend Apps and Design System' },
    children: [
      {
        id: '3.1',
        icon: { component: GlobeIcon, className: 'text-blue-500' },
        text: { content: 'Internationalization' },
        transition: 'none',
      },
      {
        id: '3.2',
        icon: { component: AccessibilityIcon, className: 'text-blue-500' },
        text: { content: 'Accessibility' },
        transition: 'none',
      },
      {
        id: '3.3',
        icon: { component: ShieldCheckIcon, className: 'text-blue-500' },
        text: { content: 'Security' },
        transition: 'none',
      },
    ],
  },
];

export default () => {
  return (
    <Slide id="author" title={authorName} alignTop>
      <div className="flex">
        <BulletedList items={highlights} className="flex-1" />
        <div className="flex flex-col items-center">
          <Image
            src="/images/author.png"
            alt={authorName}
            className="m-0 w-60 rounded-full shadow-2xl hue-rotate-90"
          />
          <BulletedList items={contact} />
        </div>
      </div>
    </Slide>
  );
};
