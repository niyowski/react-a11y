import { type CodeBlock } from '~/components/code-block';
import { CodeSlide } from '~/reveal/templates/code';

const installation: CodeBlock = {
  id: 'axe-core-react-installation',
  language: 'bash',
  code: `npm install @axe-core/react --save-dev`,
};

const codeImpl = `
// use-axe.ts
'use client';

import axe from '@axe-core/react';
import merge from 'deepmerge';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

type AxeConfig = NonNullable<Parameters<typeof axe>[3]>;
type AxeContext = Parameters<typeof axe>[4];
type AxeLogger = Parameters<typeof axe>[5];

type AxeHookOptions = {
  rules?: AxeConfig['rules'];
  timeout?: number;
};

const DEFAULT_TIMEOUT = 1000;
const DEFAULT_CONFIG: AxeConfig = {
  rules: [{ id: 'a-rule-that-is-disabled-always', enabled: false }],
};

export const useAxe = (path?: string, options?: AxeHookOptions) => {
  useEffect(() => {
    const isServer = typeof window === 'undefined';
    const isDevelopment = process.env.NODE_ENV === 'development';
    if (isServer || !isDevelopment) {
      return;
    }

    const timeout = options?.timeout ?? DEFAULT_TIMEOUT;
    const config = merge(DEFAULT_CONFIG, { rules: options?.rules ?? [] });
    const context: AxeContext = undefined; // document.getElementById('root');
    const logger: AxeLogger = undefined; // (results) => console.log(results);

    axe(React, ReactDOM, timeout, config, context, logger);
  }, [path, options]);
};

// Some component where the path can be determined
export function AComponentWherePathCanBeDetermined() {
  const { pathname } = useLocation(); // react-router-dom
  useAxe(pathname);

  // ...
}
`;

const implementation: CodeBlock = {
  id: 'axe-core-react-implementation',
  language: 'typescript',
  code: codeImpl,
  showLineNumbers: true,
};

export default () => {
  return (
    <CodeSlide
      id="axe-core-react-code"
      aria-label="How to use @axe-core/react?"
      title="How to use"
      blocks={[installation, implementation]}
      alignTop
      centerContent
    />
  );
};
