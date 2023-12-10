import { BulletedList, type BulletPoint } from '~/components/bullets';
import { Heading } from '~/components/heading';
import { AuthorSlide, ContactInfo } from '~/reveal/templates/author';
import { Image } from '~/types';

const image: Image = {
  src: '/images/author.png',
  alt: 'Mehmet Yarar',
};

const info: BulletPoint[] = [
  {
    id: '1',
    icon: { name: 'code', className: 'text-teal-500' },
    text: { content: 'Software Engineer at EPAM, 2+ years' },
    transition: 'fade-in-then-semi-out',
  },
  {
    id: '2',
    icon: { name: 'atom', className: 'text-blue-500' },
    text: { content: 'Developing in React, since 2018' },
    transition: 'fade-in-then-semi-out',
  },
  {
    id: '3',
    icon: { name: 'briefcase', className: 'text-pink-500' },
    text: { content: 'Nowadays...' },
    transition: 'fade-in-then-semi-out',
    children: [
      {
        id: '3.1',
        icon: { name: 'check', className: 'text-pink-500' },
        text: { content: 'Microfrontends & Design Systems' },
      },
      {
        id: '3.2',
        icon: { name: 'check', className: 'text-pink-500' },
        text: { content: 'Internationalization' },
      },
      {
        id: '3.3',
        icon: { name: 'check', className: 'text-pink-500' },
        text: { content: 'Web Security' },
      },
      {
        id: '3.4',
        icon: { name: 'check', className: 'text-pink-500' },
        text: { content: 'Web Accessibility' },
      },
    ],
  },
];

const contact: ContactInfo[] = [
  {
    id: '1',
    icon: { name: 'at-sign' },
    title: 'niyowski',
  },
];

export default function Slide() {
  return (
    <AuthorSlide image={image} contact={contact} data-transition="concave">
      <Heading as="h2">Mehmet Yarar</Heading>
      <BulletedList items={info} />
    </AuthorSlide>
  );
}
