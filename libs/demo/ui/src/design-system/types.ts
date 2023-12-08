import { COLORS } from './constants';

export type Color = (typeof COLORS)[number];

export interface Testable {
  'data-testid'?: string;
}

export interface Styleable {
  className?: string;
}

export interface Submitable {
  required?: boolean;
}
