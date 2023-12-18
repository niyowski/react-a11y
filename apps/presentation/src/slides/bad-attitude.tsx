import { type Quote, QuoteSlide } from '~/reveal/templates/quote';

const quote: Quote = {
  attribution: 'Scott Hamilton',
  statement: (
    <>
      The only disability in life is a{' '}
      <span className="text-danger-400 text-4xl font-bold">bad attitude</span>.
    </>
  ),
};

export default () => {
  return (
    <QuoteSlide
      id="bad-attitude"
      quote={quote}
      data-background-image="/images/valeria-voevodina-nWQ0fPpLFOo-unsplash.jpg"
      data-background-opacity="0.1"
    />
  );
};
