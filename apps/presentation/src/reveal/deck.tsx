import type { PropsWithChildren } from 'react';

export const SlideDeck = ({ children }: PropsWithChildren) => {
  return (
    <div className="reveal">
      <div className="slides">{children}</div>
    </div>
  );
};
