import { Slide, type SlideProps } from './slide';

export type Quote = {
  statement: React.ReactNode;
  attribution: string;
};

type QuoteProps = SlideProps & {
  quote: Quote;
};

export const QuoteSlide: React.FC<QuoteProps> = ({
  quote: { statement, attribution },
  ...slideProps
}) => {
  return (
    <Slide {...slideProps}>
      <blockquote className="bg-white-400 border-base-100 h-full w-full rounded-md border bg-opacity-10 bg-clip-padding shadow-2xl backdrop-blur-md backdrop-filter">
        <p className="text-base-200 font-serif text-4xl before:hidden after:hidden">
          {statement}
        </p>
        <figcaption className="text-base-400 text-2xl">
          &mdash; {attribution}
        </figcaption>
      </blockquote>
    </Slide>
  );
};
