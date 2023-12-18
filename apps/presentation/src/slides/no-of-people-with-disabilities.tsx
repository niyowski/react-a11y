import { Anchor } from '~/components/anchor';
import { type Fact, FactSlide } from '~/reveal/templates/fact';
import { formatNumber } from '~/utils/intl';

const figure = 1300000000;
const fact: Fact = {
  figure: formatNumber(figure),
  description: (
    <>
      According to the{' '}
      <Anchor href="https://www.who.int/news-room/fact-sheets/detail/disability-and-health">
        World Health Organization
      </Anchor>
      , over one billion people experience a significant a disability.
    </>
  ),
};

export default () => {
  return (
    <FactSlide
      id="no-of-people-with-disabilities"
      fact={fact}
      data-transition="zoom"
    />
  );
};
