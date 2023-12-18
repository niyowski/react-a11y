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
  rules: [],
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

    // eslint-disable-next-line no-console
    console.log(`Running accessibility checks with axe for path: ${path}`);

    axe(React, ReactDOM, timeout, config, context, logger);
  }, [path, options]);
};
