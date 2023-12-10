import { VerticalSlides } from '~/reveal/templates/vertical';

import Agenda from './agenda';
import Author from './author';
import BadAttitude from './bad-attitude';
import Intro from './intro';
import LetsGetStarted from './lets-get-started';
import NoOfPeopleWithDisabilities from './no-of-people-w-disabilities';
import Outro from './outro';
import WhyShouldWeCare from './why-should-we-care';
import WinWinWin from './win-win-win';

export default [
  <Intro />,
  <NoOfPeopleWithDisabilities />,
  <VerticalSlides>
    <WhyShouldWeCare />
    <WinWinWin />
  </VerticalSlides>,
  <Author />,
  <Agenda />,
  <LetsGetStarted />,
  <BadAttitude />,
  <Outro />,
];
