import { Anchor } from '@demo/ui';
import { Fragment } from 'react';

import { ToolInfo } from '../types';

interface TabContentProps {
  tools: ToolInfo[];
}

export const TabContent: React.FC<TabContentProps> = ({ tools }) => {
  return (
    <dl>
      {tools.map((tool) => (
        <Fragment key={tool.id}>
          <dt key={tool.id}>
            <Anchor href={tool.link}>{tool.title}</Anchor>
            {!!tool.tags?.length && (
              <span className="text-base-400 ml-2 text-sm italic">
                ({tool.tags.join(', ')})
              </span>
            )}
          </dt>
          {tool.description && <dd>{tool.description}</dd>}
        </Fragment>
      ))}
    </dl>
  );
};
