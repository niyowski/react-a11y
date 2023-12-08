import { Anchor, CarouselSlide } from '@demo/ui';

export const slides: CarouselSlide[] = [
  {
    id: '1',
    image: {
      src: '/carousel/elizabeth-woolner-9xxNZCJZ8bA-unsplash.jpg',
    },
    content: {
      title: 'People with Disabilities',
      children: (
        <p>
          An estimated 1.3 billion people – or 16% of the global population –
          experience a significant disability today.{' '}
          <Anchor
            href="https://www.who.int/news-room/fact-sheets/detail/disability-and-health"
            className="text-sm italic"
          >
            Source
          </Anchor>
        </p>
      ),
    },
  },
  {
    id: '2',
    image: {
      src: '/carousel/tingey-injury-law-firm-nSpj-Z12lX0-unsplash.jpg',
    },
    content: {
      title: 'Lawsuits Rising Exponentially In 2023',
      children: (
        <p>
          In USA, More than 4000 digital accessibility lawsuits are expected in
          2023.{' '}
          <Anchor
            href="https://info.usablenet.com/a-primer-on-ada-and-digital-accessibility"
            className="text-sm italic"
          >
            Source
          </Anchor>
        </p>
      ),
    },
  },
];
