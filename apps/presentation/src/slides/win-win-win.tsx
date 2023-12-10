import { ImageSlide } from '~/reveal/templates/image';
import type { Image } from '~/types';

const image: Image = {
  src: '/images/win-win-win.gif',
  alt: 'Everybody wins when web accessibility is taken care of.',
};

export default function Slide() {
  return <ImageSlide image={image} data-transition="concave" />;
}
