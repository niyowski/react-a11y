import { ResourceItem } from '../types';

export const data: ResourceItem[] = [
  {
    id: '1',
    title: 'Introduction to Web Accessibility',
    link: 'https://www.w3.org/WAI/fundamentals/accessibility-intro/',
    description: `
      When websites and web tools are properly designed and coded, people with
      disabilities can use them. However, currently many sites and tools are
      developed with accessibility barriers that make them difficult or
      impossible for some people to use. Making the web accessible benefits
      individuals, businesses, and society. International web standards define
      what is needed for accessibility.
    `,
  },
  {
    id: '2',
    title: 'WCAG 2 Overview',
    description: `
      This page introduces the Web Content Accessibility Guidelines (WCAG)
      international standard, including WCAG 2.0, WCAG 2.1, and WCAG 2.2.
      WCAG documents explain how to make web content more accessible to people
      with disabilities.
    `,
    link: 'https://www.w3.org/WAI/standards-guidelines/wcag/',
  },
  {
    id: '3',
    title: 'Learn Accessibility',
    description: `
      An evergreen accessibility course and reference to level up your web development.
    `,
    link: 'https://web.dev/learn/accessibility',
  },
];
