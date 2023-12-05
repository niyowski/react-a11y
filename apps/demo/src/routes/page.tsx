import { Stats } from '~/features/stats';
import { Tools } from '~/features/tools';

export function Page() {
  return (
    <div className="flex flex-col">
      <Stats />
      <Tools />
    </div>
  );
}

export default Page;
