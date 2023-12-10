import type { PropsWithChildren } from 'react';

import { Slide } from './slide';

export const VerticalSlides = ({ children }: PropsWithChildren) => {
  return <Slide>{children}</Slide>;
};
