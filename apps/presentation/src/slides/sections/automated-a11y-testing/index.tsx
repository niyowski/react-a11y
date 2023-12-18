import { SectionSlide } from '~/reveal/templates/section';

import AxeCoreReact from './axe-core-react';
import EslintPluginJsxA11y from './eslint-plugin-jsx-a11y';

export default () => {
  return (
    <>
      <SectionSlide
        id="automated-a11y-testing"
        title="Automated Accessibility Testing"
      />
      {/** TODO: Add slides here */}
      <AxeCoreReact />
      <EslintPluginJsxA11y />
    </>
  );
};
