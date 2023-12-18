import { PropsWithChildren } from 'react';
import { HelmetProvider } from 'react-helmet-async';

export const Providers = ({ children }: PropsWithChildren) => {
  return <HelmetProvider>{children}</HelmetProvider>;
};
