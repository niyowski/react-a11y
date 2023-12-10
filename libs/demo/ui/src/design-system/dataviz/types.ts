import { Color } from '../types';

export interface DataVizComponentProps {
  id?: string;
  value: number;
  title?: string;
  description?: string;
  color?: Color | null;
}
