import { AlertCircleIcon, LightbulbIcon, MinusIcon } from 'lucide-react';

import { BulletedList, type BulletPoint } from '~/components/bulleted-list';
import { Slide } from '~/reveal/templates/slide';

const issues: BulletPoint[] = [
  {
    id: '1',
    icon: { component: AlertCircleIcon, className: 'text-danger-500' },
    text: { content: 'Dynamic content' },
    children: [
      {
        id: '1.1',
        icon: { component: LightbulbIcon, className: 'text-warning-500' },
        text: {
          content: (
            <>
              Use <em className="font-mono">aria-live</em> to inform user about
              the updates on the page
            </>
          ),
        },
      },
    ],
  },
  {
    id: '2',
    icon: { component: AlertCircleIcon, className: 'text-danger-500' },
    text: { content: 'Keyboard focus' },
    children: [
      {
        id: '2.1',
        icon: { component: LightbulbIcon, className: 'text-warning-500' },
        text: {
          content: (
            <>
              Avoid confusing users by changing the focus unexpectedly (
              <em className="font-mono">useRef</em>)
            </>
          ),
        },
      },
    ],
  },
  {
    id: '3',
    icon: { component: AlertCircleIcon, className: 'text-danger-500' },
    text: { content: 'Event handling' },
    children: [
      {
        id: '3.1',
        icon: { component: LightbulbIcon, className: 'text-warning-500' },
        text: {
          content: (
            <>
              Avoid using non-semantic elements to handle events (
              <em className="font-mono">div</em>,{' '}
              <em className="font-mono">span</em>)
            </>
          ),
        },
      },
      {
        id: '3.2',
        icon: { component: LightbulbIcon, className: 'text-warning-500' },
        text: { content: 'If you have to, then add the following:' },
        children: [
          {
            id: '3.2.1',
            icon: { component: MinusIcon },
            text: { content: <em className="font-mono">tabIndex="0"</em> },
          },
          {
            id: '3.2.2',
            icon: { component: MinusIcon },
            text: {
              content: (
                <>
                  <em className="font-mono">onKeyDown</em> or{' '}
                  <em className="font-mono">onKeyUp</em>
                </>
              ),
            },
          },
          {
            id: '3.2.3',
            icon: { component: MinusIcon },
            text: {
              content: (
                <>
                  appropriate role; e.g.,{' '}
                  <em className="font-mono">role="button"</em>
                </>
              ),
            },
          },
        ],
      },
    ],
  },
];

export default () => {
  return (
    <Slide
      id="other-issues"
      title="Other Most Common Issues"
      alignTop
      centerContent
    >
      <BulletedList items={issues} />
    </Slide>
  );
};
