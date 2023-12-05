import { StatInfo } from '../types';

export const data: StatInfo = {
  id: 'webaim-1M-overview',
  title: 'Overview',
  items: [
    {
      id: '1',
      title: 'Detected Errors',
      description: 'An average error per page',
      value: 50,
      color: 'red',
    },
    {
      id: '2',
      title: 'Error Density',
      description: 'Home page elements with accessibility errors',
      value: 4.8,
      color: 'rose',
    },
    {
      id: '3',
      title: 'WCAG Conformance',
      description: 'Home pages with WCAG 2 failures',
      value: 96.3,
      color: 'violet',
    },
  ],
};
