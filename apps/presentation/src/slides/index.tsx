import Agenda from './agenda';
import Author from './author';
import BadAttitude from './bad-attitude';
import Disability from './disability';
import Intro from './intro';
import Outro from './outro';
import Sections from './sections';
import WebAccessibility from './web-accessibility';
import WhyShouldWeCare from './why-should-we-care';

export function Slides() {
  return (
    <>
      <Intro />
      <Disability />
      <WhyShouldWeCare />
      <WebAccessibility />
      <Author />
      <Agenda />
      <Sections />
      <BadAttitude />
      <Outro />
    </>
  );
}
