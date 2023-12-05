import { ToolInfo } from '../types';

export const data: ToolInfo[] = [
  {
    id: '1',
    title: 'WAVE Web Accessibility Evaluation',
    description: 'For testing accessibility directly within your web browser.',
    link: 'https://wave.webaim.org/',
    tags: ['chrome', 'edge', 'firefox'],
  },
  {
    id: '2',
    title: 'axe DevTools',
    description:
      'Find and fix more accessibility issues during website development with axe DevTools.',
    link: 'https://www.deque.com/axe/',
    tags: ['chrome', 'edge', 'firefox'],
  },
  {
    id: '3',
    title: 'Accessibility Developer Tools',
    description:
      'Instantly highlights issues on the page and provides clear explanations of how they impact your visitors.',
    link: 'https://www.siteimprove.com/integrations/browser-extensions/',
    tags: ['chrome', 'edge', 'firefox', 'opera'],
  },
  {
    id: '4',
    title: 'Accessibility Insights',
    description: 'Test accessibility of webpages and web applications.',
    link: 'https://accessibilityinsights.io/',
    tags: ['chrome', 'edge'],
  },
  {
    id: '5',
    title: 'IBM Equal Access Toolkit',
    description: 'Tools that test your code for accessibility issues.',
    link: 'https://www.ibm.com/able/toolkit/tools',
    tags: ['chrome', 'edge', 'firefox'],
  },
];
