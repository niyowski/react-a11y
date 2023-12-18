import { Highlight, themes } from 'prism-react-renderer';

import { classNames } from '~/utils/css';

export type CodeBlock = {
  id: string;
  language: 'bash' | 'typescript';
  code: string;
  showLineNumbers?: boolean;
};

type SyntaxHighlighterProps = {
  block: CodeBlock;
};

export const SyntaxHighlighter: React.FC<SyntaxHighlighterProps> = ({
  block: { language, code, showLineNumbers },
}) => {
  return (
    <Highlight
      theme={themes.shadesOfPurple}
      code={code.trim()}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={classNames('mx-0 w-full p-0 text-base', className)}
          style={style}
        >
          <code className="scrollbar-thin scrollbar-track-transparent scrollbar-thumb-tertiary-950 p-4 font-mono">
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {showLineNumbers && (
                  <span className="text-tertiary-300 inline-block w-8">
                    {i + 1}
                  </span>
                )}
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </code>
        </pre>
      )}
    </Highlight>
  );
};
