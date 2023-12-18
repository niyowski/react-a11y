import { SectionSlide } from '~/reveal/templates/section';

import AxeCorePlaywright from './axe-core-playwright';
import AxeCoreReact from './axe-core-react';
import CypressAxe from './cypress-axe';
import EslintPluginJsxA11y from './eslint-plugin-jsx-a11y';
import JestAxe from './jest-axe';

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
      <JestAxe />
      <CypressAxe />
      <AxeCorePlaywright />
    </>
  );
};
