import { Anchor, Heading } from '@demo/ui';

import { ResourceItem } from '../types';

interface AccordionContentProps {
  resources: ResourceItem[];
}

export const AccordionContent: React.FC<AccordionContentProps> = ({
  resources,
}) => {
  return (
    <ul>
      {resources.map((resource) => {
        return (
          <li key={resource.id}>
            <div>
              <Heading as="h3">{resource.title}</Heading>
              <p>{resource.description}</p>
              <Anchor href={resource.link}>Link</Anchor>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
