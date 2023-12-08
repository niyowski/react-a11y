import { Carousel } from '@demo/ui';

import { slides } from './data/slides';

export const Hero: React.FC = () => {
  return <Carousel slides={slides} className="h-96" />;
};
