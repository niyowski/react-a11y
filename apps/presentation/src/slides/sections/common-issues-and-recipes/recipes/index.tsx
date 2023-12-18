import { LightbulbIcon, MinusIcon } from 'lucide-react';

import { Anchor } from '~/components/anchor';
import { BulletedList, type BulletPoint } from '~/components/bulleted-list';
import { Slide } from '~/reveal/templates/slide';

const createId = (value: string) => value.toLowerCase().replace(/\s/g, '-');

const basics = [
  'Use semantic HTML elements',
  'Avoid low contrast text',
  'Provide descriptive text for images',
  'Associate labels with form controls',
];

const libraries: Array<{ href: string; title: string }> = [
  { href: 'https://chakra-ui.com/', title: 'Chakra UI' },
  { href: 'https://material-ui.com/', title: 'Material UI' },
  { href: 'https://www.radix-ui.com/', title: 'Radix UI' },
  { href: 'https://react-spectrum.adobe.com/react-aria/', title: 'React Aria' },
  { href: 'https://reakit.io/', title: 'Reakit' },
];

const issues: BulletPoint[] = [
  {
    id: '1',
    icon: { component: LightbulbIcon, className: 'text-warning-500' },
    text: { content: 'Be mindful about the basics' },
    children: basics.map((basic) => ({
      id: createId(basic),
      icon: { component: MinusIcon },
      text: { content: basic },
    })),
  },
  {
    id: '2',
    icon: { component: LightbulbIcon, className: 'text-warning-500' },
    text: {
      content: (
        <>
          Follow the{' '}
          <Anchor href="https://www.w3.org/WAI/ARIA/apg/patterns/">
            WCAG patterns
          </Anchor>
        </>
      ),
    },
  },
  {
    id: '3',
    icon: { component: LightbulbIcon, className: 'text-warning-500' },
    text: {
      content: 'Use UI libraries that have built-in accessibility support',
    },
    children: [
      {
        id: '3.1',
        icon: { component: MinusIcon },
        text: {
          content: (
            <>
              {libraries.map((lib, index) => (
                <>
                  <Anchor key={createId(lib.title)} href={lib.href}>
                    {lib.title}
                  </Anchor>
                  {index < libraries.length - 1 ? ', ' : ''}
                </>
              ))}
            </>
          ),
        },
      },
      {
        id: '3.2',
        icon: { component: MinusIcon },
        text: { content: 'Do not hesitate report accessibility issues' },
      },
    ],
  },
];

export default () => {
  return (
    <Slide id="recipes" title="Recipes" alignTop centerContent>
      <BulletedList items={issues} />
    </Slide>
  );
};
