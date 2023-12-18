import { type CodeBlock, SyntaxHighlighter } from '~/components/code-block';

import { Slide, type SlideProps } from './slide';

type CodeSlideProps = SlideProps & {
  blocks: CodeBlock[];
};

export type { SyntaxHighlighter as Code };

export const CodeSlide: React.FC<CodeSlideProps> = ({
  blocks,
  ...slideProps
}) => {
  return (
    <Slide {...slideProps}>
      {blocks.map((block) => (
        <SyntaxHighlighter key={block.id} block={block} />
      ))}
    </Slide>
  );
};
