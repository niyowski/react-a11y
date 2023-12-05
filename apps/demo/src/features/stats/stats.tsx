import { Anchor, Gauge, Heading } from '@demo/ui';

import { testId } from '~/constants';

import { useStats } from './use-stats';

export const Stats: React.FC = () => {
  const stats = useStats();

  return (
    <div data-testid={testId.stats}>
      <Heading as="h1" className="my-8">
        The WebAIM Million - 2023
      </Heading>
      <Anchor href="https://webaim.org/projects/million/">Source</Anchor>
      {stats.map((stat) => (
        <div key={stat.id}>
          <Heading as="h2" className="my-8">
            {stat.title}
          </Heading>
          <div className="grid grid-cols-3 justify-evenly">
            {stat.items.map((item) => (
              <Gauge
                {...item}
                key={item.id}
                className="bg-base-100 mb-3 rounded p-4 shadow"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
