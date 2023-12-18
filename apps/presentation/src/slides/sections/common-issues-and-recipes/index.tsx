import { SectionSlide } from '~/reveal/templates/section';

import ClientSideRouting from './client-side-routing';
import OtherIssues from './other-issues';
import Recipes from './recipes';

export default () => {
  return (
    <>
      <SectionSlide
        id="common-issues-and-recipes"
        title="Common Issues and Recipes"
      />
      {/** TODO: Add slides here */}
      <ClientSideRouting />
      <OtherIssues />
      <Recipes />
    </>
  );
};
