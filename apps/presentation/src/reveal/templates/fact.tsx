import { Heading } from '~/components/heading';
import { Text } from '~/components/text';

import { Slide, type SlideContent, type SlideProps } from './slide';

type FactSlideProps = SlideProps & {
  figure: SlideContent;
  description: SlideContent;
};

export const FactSlide = ({ figure, description, ...rest }: FactSlideProps) => {
  return (
    <Slide {...rest}>
      <Heading as="h2" className="text-[8rem]">
        {figure}
      </Heading>
      <Text as="p" className="text-base-400 italic">
        {description}
      </Text>
    </Slide>
  );
};
