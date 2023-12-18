import { VerticalSlides } from '~/reveal/templates/vertical';

import Code from './code';
import Highlights from './highlights';
import Results from './results';

export default () => {
  return (
    <VerticalSlides id="storybook-addon-a11y">
      <Highlights />
      <Code />
      <Results />
    </VerticalSlides>
  );
};
