import Agenda from './agenda';
import Author from './author';
import BadAttitude from './bad-attitude';
import Intro from './intro';
import NoOfPeopleWithDisabilities from './no-of-people-with-disabilities';
import Outro from './outro';
import Sections from './sections';
import WhyShouldWeCare from './why-should-we-care';

export function Slides() {
  return (
    <>
      <Intro />
      <NoOfPeopleWithDisabilities />
      <WhyShouldWeCare />
      <Author />
      <Agenda />
      <Sections />
      <BadAttitude />
      <Outro />
    </>
  );
}
