import { SectionSlide } from '~/reveal/templates/section';

import AxeCorePlaywright from './axe-core-playwright';
import AxeCoreReact from './axe-core-react';
import CypressAxe from './cypress-axe';
import EslintPluginJsxA11y from './eslint-plugin-jsx-a11y';
import AutomatedA11yTestingFact from './fact';
import JestAxe from './jest-axe';
import StorybookAddonA11y from './storybook-addon-a11y';

export default () => {
  return (
    <>
      <SectionSlide
        id="automated-a11y-testing"
        title="Automated Accessibility Testing"
      />
      <AxeCoreReact />
      <EslintPluginJsxA11y />
      <JestAxe />
      <CypressAxe />
      <AxeCorePlaywright />
      <StorybookAddonA11y />
      <AutomatedA11yTestingFact />
    </>
  );
};
