import { Text } from '~/components/text';
import { type Quote, QuoteSlide } from '~/reveal/templates/quote';

const quote: Quote = {
  author: 'Scott Hamilton',
  content: (
    <>
      The only disability in life is a{' '}
      <Text as="span" className="text-danger-500 text-4xl font-bold">
        bad attitude
      </Text>
      .
    </>
  ),
};

export default function Slide() {
  return (
    <QuoteSlide
      quote={quote}
      data-background-image="/images/valeria-voevodina-nWQ0fPpLFOo-unsplash.jpg"
      data-background-opacity="0.1"
    />
  );
}
