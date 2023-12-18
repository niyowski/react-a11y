import { SectionSlide } from '~/reveal/templates/section';

import BrowserExtentions from './browser-extentions';

export default () => {
  return (
    <>
      <SectionSlide
        id="manual-a11y-testing"
        title="Manual Accessibility Testing"
      />
      {/** TODO: Add slides here */}
      <BrowserExtentions />
    </>
  );
};
