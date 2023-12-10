import type { HTMLAttributes } from 'react';

import type { SlideTransition } from '~/types';

const DEFAULT_BG_GRADIENT = 'linear-gradient(to bottom, #172554, #4a044e)';
const DEFAULT_TRANSITION: SlideTransition = 'none';

export type SlideContent = string | number | JSX.Element;

type RevealDataAttributes = {
  'data-background-gradient'?: string;
  'data-background-image'?: string;
  'data-background-opacity'?: string;
  'data-transition'?: SlideTransition;
};

export type SlideProps = Omit<HTMLAttributes<HTMLDivElement>, 'title'> & {
  notes?: SlideContent;
} & RevealDataAttributes;

export const Slide = ({
  'data-background-gradient': backgroundGradient = DEFAULT_BG_GRADIENT,
  'data-transition': transition = DEFAULT_TRANSITION,
  children,
  notes,
  ...rest
}: SlideProps) => {
  return (
    <section
      {...rest}
      data-background-gradient={backgroundGradient}
      data-transition={transition}
    >
      {children}
      {Boolean(notes) && <aside className="notes">{notes}</aside>}
    </section>
  );
};
