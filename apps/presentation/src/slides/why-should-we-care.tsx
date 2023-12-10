import { BulletedList, type BulletPoint } from '~/components/bullets';
import { Heading } from '~/components/heading';
import { Slide as BasicSlide } from '~/reveal/templates/slide';

const whyShouldWeCare: BulletPoint[] = [
  {
    id: '1',
    icon: { name: 'person-standing', className: 'text-blue-500' },
    text: { content: 'Empathy, equality, inclusiveness' },
    transition: 'fade-left',
  },
  {
    id: '2',
    icon: { name: 'dollar-sign', className: 'text-green-500' },
    text: { content: 'Business reach, more revenue' },
    transition: 'fade-right',
  },
  {
    id: '3',
    icon: { name: 'dollar-sign', className: 'text-red-500' },
    text: { content: 'Avoid lawsuits and fines' },
    transition: 'fade-left',
  },
  {
    id: '4',
    icon: { name: 'code', className: 'text-purple-500' },
    text: { content: 'Increased demand, job security' },
    transition: 'fade-right',
  },
];

export default function Slide() {
  return (
    <BasicSlide>
      <Heading as="h2">Why should we care?</Heading>
      <BulletedList items={whyShouldWeCare} />
    </BasicSlide>
  );
}
