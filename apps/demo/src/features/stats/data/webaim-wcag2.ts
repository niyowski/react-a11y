import { StatInfo } from '../types';

export const data: StatInfo = {
  id: 'webaim-1M-wcag2-failures',
  title: 'WCAG 2.0 Failures',
  items: [
    {
      id: '1',
      description: 'Low contrast text',
      value: 83.6,
      color: 'yellow',
    },
    {
      id: '2',
      description: 'Missing alternative text for images',
      value: 58.2,
      color: 'orange',
    },
    {
      id: '3',
      description: 'Empty links',
      value: 50.1,
      color: 'sky',
    },
    {
      id: '4',
      description: 'Missing form input labels',
      value: 45.9,
      color: 'indigo',
    },
    {
      id: '5',
      description: 'Empty buttons',
      value: 27.5,
      color: 'pink',
    },
    {
      id: '6',
      description: 'Missing document language',
      value: 18.6,
      color: 'violet',
    },
  ],
};
