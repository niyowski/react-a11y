import { DataVizComponentProps } from '@demo/ui';

export type StatItem = Pick<
  DataVizComponentProps,
  'id' | 'title' | 'description' | 'value' | 'color'
>;

export type StatInfo = {
  id: string;
  title: string;
  items: StatItem[];
};
