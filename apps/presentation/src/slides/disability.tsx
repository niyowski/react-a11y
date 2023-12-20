import { Anchor } from '~/components/anchor';
import { type Fact, FactSlide } from '~/reveal/templates/fact';
import { ImageSlide } from '~/reveal/templates/image';
import { VerticalSlides } from '~/reveal/templates/vertical';
import { formatNumber } from '~/utils/intl';

const noOfPeopleWithDisabilitiesWorldwide = 1300000000;
const fact: Fact = {
  figure: formatNumber(noOfPeopleWithDisabilitiesWorldwide),
  description: (
    <>
      According to the{' '}
      <Anchor href="https://www.who.int/news-room/fact-sheets/detail/disability-and-health">
        World Health Organization
      </Anchor>
      , over one billion people experience a significant a disability.
    </>
  ),
};

export default () => {
  return (
    <VerticalSlides id="disability">
      <FactSlide
        id="no-of-people-with-disabilities"
        fact={fact}
        data-transition="zoom"
      />
      <ImageSlide
        id="disability"
        image={{
          src: '/images/disability/spectrum.png',
          alt: 'A disability is a spectrum.',
        }}
        credit={{
          href: 'https://www.designwithdisabledpeoplenow.com/language',
          children: 'Alexa Vaughn',
        }}
        data-transition="concave"
        notes={
          <p>A disability could be a permanent, temporary, or situational.</p>
        }
      />
      <ImageSlide
        id="disability"
        image={{
          src: '/images/disability/definition.png',
          alt: 'A disability is not a health condition, but rather a mismatched interaction between the features of a person’s body and the features of the environment in which they live.',
        }}
        credit={{
          href: 'https://inclusive.microsoft.design/',
          children: 'Microsoft Inclusive Design',
        }}
        data-transition="concave"
        notes={
          <p>
            Imagine a person with a wheelchair facing stairs. When a stairlift
            is provided, the person is enabled.
          </p>
        }
      />
    </VerticalSlides>
  );
};
