import { Code2Icon, DollarSignIcon, PersonStandingIcon } from 'lucide-react';

import { BulletedList, type BulletPoint } from '~/components/bulleted-list';
import { Slide } from '~/reveal/templates/slide';

const whyShouldWeCare: BulletPoint[] = [
  {
    id: '1',
    icon: { component: PersonStandingIcon, className: 'text-blue-500' },
    text: { content: 'Empathy, equality, inclusiveness' },
    transition: 'fade-left',
  },
  {
    id: '2',
    icon: { component: DollarSignIcon, className: 'text-green-500' },
    text: { content: 'Business reach, more revenue' },
    transition: 'fade-right',
  },
  {
    id: '3',
    icon: { component: DollarSignIcon, className: 'text-red-500' },
    text: { content: 'Avoid lawsuits and fines' },
    transition: 'fade-left',
  },
  {
    id: '4',
    icon: { component: Code2Icon, className: 'text-purple-500' },
    text: { content: 'Increased demand, job security' },
    transition: 'fade-right',
  },
];

export default () => {
  return (
    <Slide
      id="why-should-we-care"
      title="Why should we care?"
      alignTop
      centerContent
    >
      <BulletedList items={whyShouldWeCare} />
    </Slide>
  );
};
