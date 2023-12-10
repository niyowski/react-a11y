import { Heading } from '~/components/heading';
import { Text } from '~/components/text';

import { Slide, type SlideContent, type SlideProps } from './slide';

type IntroSlideProps = SlideProps & {
  title: SlideContent;
  subtitle: SlideContent;
};

export const IntroSlide = ({ title, subtitle, ...rest }: IntroSlideProps) => {
  return (
    <Slide {...rest}>
      <Heading as="h1" className="text-base-200">
        {title}
      </Heading>
      <Text as="p" className="text-base-400 italic">
        {subtitle}
      </Text>
    </Slide>
  );
};
