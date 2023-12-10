import { ImageSlide } from '~/reveal/templates/image';
import type { Image } from '~/types';

const image: Image = {
  src: '/images/lets-get-started.gif',
  alt: 'Let us get started.',
};

export default function Slide() {
  return <ImageSlide image={image} />;
}
