import { SlideTitle } from '~/components/slide-title';
import { classNames } from '~/utils/css';

import type { Transition } from '../types';

const DEFAULT_BG_GRADIENT = 'linear-gradient(to bottom, #1e1b4b, #0f172a)';
const DEFAULT_TRANSITION: Transition = 'none';

type SlideDataAttributes = {
  'data-background-gradient'?: string;
  'data-background-image'?: string;
  'data-background-opacity'?: string;
  'data-transition'?: Transition;
  'data-visibility'?: 'hidden';
  'data-auto-animate'?: boolean;
};

export type SlideProps = {
  id: string;
  title?: string;
  alignTop?: boolean;
  centerContent?: boolean;
  className?: string;
  children?: React.ReactNode;
  notes?: React.ReactNode;
} & SlideDataAttributes;

export const Slide = ({
  id,
  title,
  alignTop,
  centerContent,
  className,
  children,
  notes,
  'data-background-gradient': backgroundGradient = DEFAULT_BG_GRADIENT,
  'data-transition': transition = DEFAULT_TRANSITION,
  ...rest
}: SlideProps) => {
  return (
    <section
      id={id}
      className={classNames(
        'flex flex-col',
        {
          'top-0': alignTop,
          'items-center': centerContent,
        },
        className,
      )}
      data-background-gradient={backgroundGradient}
      data-transition={transition}
      {...rest}
    >
      {Boolean(title) && <SlideTitle>{title}</SlideTitle>}
      {children}
      {Boolean(notes) && (
        <aside id={`${id}-notes`} className="notes">
          {notes}
        </aside>
      )}
    </section>
  );
};
