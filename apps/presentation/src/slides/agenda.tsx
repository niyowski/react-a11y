import { BulletedList, type BulletPoint } from '~/components/bullets';
import { Heading } from '~/components/heading';
import { Slide as BasicSlide } from '~/reveal/templates/slide';

const agenda: BulletPoint[] = [
  {
    id: '1',
    icon: { name: 'star', className: 'text-primary-500' },
    text: { content: 'Manual Testing' },
    transition: 'grow',
  },
  {
    id: '2',
    icon: { name: 'star', className: 'text-primary-500' },
    text: { content: 'Automated Testing' },
    transition: 'grow',
  },
  {
    id: '3',
    icon: { name: 'star', className: 'text-primary-500' },
    text: { content: 'Common Issues' },
    transition: 'grow',
  },
];

export default function Slide() {
  return (
    <BasicSlide>
      <Heading as="h2">Agenda</Heading>
      <BulletedList items={agenda} />
    </BasicSlide>
  );
}
