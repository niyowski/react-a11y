import { AlertCircleIcon, LightbulbIcon, MinusIcon } from 'lucide-react';

import { BulletedList, type BulletPoint } from '~/components/bulleted-list';
import { Slide } from '~/reveal/templates/slide';

const highlights: BulletPoint[] = [
  {
    id: '1',
    icon: { component: AlertCircleIcon, className: 'text-danger-500' },
    text: {
      content:
        'Screen readers or other assistive technologies are not informed when the route changes',
    },
  },
  {
    id: '2',
    icon: { component: LightbulbIcon, className: 'text-warning-500' },
    text: {
      content: (
        <>
          Update the page title (<em className="font-mono">document.title</em>,{' '}
          <em className="font-mono">react-helmet-async</em>)
        </>
      ),
    },
  },
  {
    id: '3',
    icon: { component: LightbulbIcon, className: 'text-warning-500' },
    text: {
      content: (
        <>
          Use the <em className="font-mono">aria-live</em> regions
        </>
      ),
    },
  },
  {
    id: '4',
    icon: { component: LightbulbIcon, className: 'text-warning-500' },
    text: { content: 'Shift keyboard focus to' },
    children: [
      {
        id: '4.1',
        icon: { component: MinusIcon },
        text: { content: 'the top of the new content' },
        transition: 'none',
      },
      {
        id: '4.2',
        icon: { component: MinusIcon },
        text: { content: 'an element that describes the new page' },
        transition: 'none',
      },
    ],
  },
];

export default () => {
  return (
    <Slide
      id="client-side-routing-highlights"
      title="Client-Side Routing"
      alignTop
      centerContent
    >
      <BulletedList items={highlights} />
    </Slide>
  );
};
