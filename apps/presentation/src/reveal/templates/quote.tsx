import { Text } from '~/components/text';

import { Slide, type SlideContent, type SlideProps } from './slide';

export type Quote = {
  content: SlideContent;
  author: string;
};

type QuoteProps = SlideProps & {
  quote: Quote;
};

export const QuoteSlide = ({
  quote: { content, author },
  ...rest
}: QuoteProps) => {
  return (
    <Slide {...rest}>
      <blockquote className="bg-white-400 h-full w-full rounded-md border border-gray-100 bg-opacity-10 bg-clip-padding shadow-2xl backdrop-blur-md backdrop-filter">
        <Text
          as="p"
          className="text-base-200 text-4xl before:hidden after:hidden"
        >
          {content}
        </Text>
        <footer>
          <Text as="span" className="text-base-400 text-2xl">
            —{author}
          </Text>
        </footer>
      </blockquote>
    </Slide>
  );
};
