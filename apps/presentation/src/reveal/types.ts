import type { Options } from 'reveal.js';

export type Transition = Options['transition'];

/**
 * @see https://revealjs.com/fragments/.
 */
export type FragmentStyle =
  | 'none'
  | 'fade-out'
  | 'fade-up'
  | 'fade-down'
  | 'fade-left'
  | 'fade-right'
  | 'fade-in-then-out'
  | 'current-visible'
  | 'fade-in-then-semi-out'
  | 'grow'
  | 'semi-fade-out'
  | 'shrink'
  | 'strike'
  | 'highlight-red'
  | 'highlight-green'
  | 'highlight-blue'
  | 'highlight-current-red'
  | 'highlight-current-green'
  | 'highlight-current-blue';
