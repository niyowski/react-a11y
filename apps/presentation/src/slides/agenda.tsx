import { ArrowRightIcon } from 'lucide-react';

import { BulletedList, type BulletPoint } from '~/components/bulleted-list';
import { Slide } from '~/reveal/templates/slide';

const agenda: BulletPoint[] = [
  {
    id: '1',
    icon: { component: ArrowRightIcon, className: 'text-primary-500' },
    text: { content: 'Automated Accessibility Testing' },
  },
  {
    id: '2',
    icon: { component: ArrowRightIcon, className: 'text-primary-500' },
    text: { content: 'Manual Accessibility Testing' },
  },

  {
    id: '3',
    icon: { component: ArrowRightIcon, className: 'text-primary-500' },
    text: { content: 'Common Issues and Recipes' },
  },
];

export default () => {
  return (
    <Slide id="agenda" title="Agenda" alignTop centerContent>
      <BulletedList items={agenda} />
    </Slide>
  );
};
