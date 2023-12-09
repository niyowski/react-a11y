import { Accordion, AccordionItem } from '@demo/ui';

import { AccordionContent } from './components/accordion-content';
import { data as documentation } from './data/documentation';
import { data as onlineCourses } from './data/online-courses';

const items: AccordionItem[] = [
  {
    id: 'documentation',
    title: 'Documentation',
    content: <AccordionContent resources={documentation} />,
  },
  {
    id: 'online-courses',
    title: 'Online Courses',
    content: <AccordionContent resources={onlineCourses} />,
  },
];

export const Resources = () => {
  return <Accordion items={items} isAllExpanded />;
};
