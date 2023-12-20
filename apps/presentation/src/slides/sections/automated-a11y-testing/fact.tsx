import { Anchor } from '~/components/anchor';
import { FactSlide } from '~/reveal/templates/fact';
import { formatNumber } from '~/utils/intl';

const pctIssuesFoundUsingAutomatedA11yTesting = 0.3;

export default () => {
  return (
    <FactSlide
      id="automated-a11y-testing-fact"
      fact={{
        figure: formatNumber(pctIssuesFoundUsingAutomatedA11yTesting, {
          style: 'percent',
          maximumFractionDigits: 0,
        }),
        description: (
          <>
            According to the{' '}
            <Anchor href="https://alphagov.github.io/accessibility-tool-audit/">
              research
            </Anchor>
            , only 30% of accessibility issues can be found using automated
            accessibility testing tools
          </>
        ),
      }}
    />
  );
};
