import { Image } from '~/components/image';
import { Slide } from '~/reveal/templates/slide';

export default () => {
  return (
    <Slide id="outro" title="Thank you for your attention!">
      <div className="flex items-center justify-center">
        <Image
          src="/images/qr-github.png"
          alt="QR code for the GitHub repository."
          className="w-80 rounded"
        />
      </div>
      <p>
        Contributions are welcome{' '}
        <span role="img" aria-label="Heart emoji">
          ❤️
        </span>
      </p>
    </Slide>
  );
};
