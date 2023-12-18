import AutomatedA11yTesting from './automated-a11y-testing';
import CommonIssuesAndRecipes from './common-issues-and-recipes';
import ManualA11yTesting from './manual-a11y-testing';

export default () => {
  return (
    <>
      <AutomatedA11yTesting />
      <ManualA11yTesting />
      <CommonIssuesAndRecipes />
    </>
  );
};
