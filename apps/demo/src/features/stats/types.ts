import { StatProps } from '@demo/ui';

export type StatItem = Pick<
  StatProps,
  'id' | 'title' | 'description' | 'value' | 'color'
>;

export type StatInfo = {
  id: string;
  title: string;
  items: StatItem[];
};
