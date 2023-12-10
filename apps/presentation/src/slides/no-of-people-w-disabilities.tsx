import { Anchor } from '~/components/anchor';
import { Text } from '~/components/text';
import { FactSlide } from '~/reveal/templates/fact';
import { formatNumber } from '~/utils/intl';

const noOfPeopleWithDisabilities = 1300000000;
const sourceLink =
  'https://www.who.int/news-room/fact-sheets/detail/disability-and-health';

export default function Slide() {
  return (
    <FactSlide
      data-transition="zoom"
      figure={formatNumber(noOfPeopleWithDisabilities)}
      description={
        <Text as="p">
          According to the{' '}
          <Anchor href={sourceLink}>
            <abbr title="World Health Organization">WHO</abbr>
          </Anchor>
          , over one billion people experience a significant a disability.
        </Text>
      }
    />
  );
}
