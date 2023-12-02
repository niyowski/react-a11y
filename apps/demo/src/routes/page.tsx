import { Button } from '@demo/ui';

export function Page() {
  return (
    <div className="flex flex-col">
      <div>
        <Button
          onClick={() => {
            // eslint-disable-next-line no-console
            console.log('clicked');
          }}
        >
          Click me
        </Button>
      </div>
    </div>
  );
}

export default Page;
