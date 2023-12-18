import { VerticalSlides } from '~/reveal/templates/vertical';

import Highlights from './highlights';
import KeyboardFocusCode from './keyboard-focus';
import NavigationAnnouncerCode from './navigation-announcer';

export default () => {
  return (
    <VerticalSlides id="client-side-routing">
      <Highlights />
      <NavigationAnnouncerCode />
      <KeyboardFocusCode />
    </VerticalSlides>
  );
};
