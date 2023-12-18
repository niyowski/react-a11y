import type { PropsWithChildren } from 'react';

export const SlideDeck = ({ children }: PropsWithChildren) => {
  return (
    <div className="reveal">
      <main className="slides">{children}</main>
    </div>
  );
};
