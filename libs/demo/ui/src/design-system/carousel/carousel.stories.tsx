import type { Meta, StoryObj } from '@storybook/react';

import { Carousel } from './carousel';
import type { CarouselSlide } from './types';

const meta: Meta<typeof Carousel> = {
  title: 'Design System/Carousel',
  component: Carousel,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Carousel>;

const slides: CarouselSlide[] = [
  {
    id: 'slide-1',
    image: {
      src: '/elizabeth-woolner-9xxNZCJZ8bA-unsplash.jpg',
    },
    content: {
      title: 'Slide 1',
      children: 'Consequat culpa Lorem ex duis.',
    },
  },
  {
    id: 'slide-2',
    bgColor: 'blue',
    content: {
      title: 'Slide 2',
      children:
        'In cupidatat pariatur ut consectetur ut excepteur aliquip nostrud deserunt adipisicing cupidatat cupidatat.',
    },
  },
  {
    id: 'slide-3',
    image: {
      src: '/ian-schneider-TamMbr4okv4-unsplash.jpg',
    },
  },
];

export const Default: Story = {
  name: 'Carousel',
  render: (args) => <Carousel {...args} />,
  args: {
    slides,
  },
};
