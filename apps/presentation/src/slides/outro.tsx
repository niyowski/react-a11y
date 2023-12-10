import { Heading } from '~/components/heading';
import { Text } from '~/components/text';
import { Slide as BasicSlide } from '~/reveal/templates/slide';

export default function Slide() {
  return (
    <BasicSlide>
      <Heading as="h2">Thank you for your attention!</Heading>
      <article className="flex items-center justify-center">
        <img
          src="/images/qr-github.png"
          alt="QR code for the GitHub repository."
          className="w-80 rounded"
        />
      </article>
      <Text as="p">Contributions are welcome</Text>
    </BasicSlide>
  );
}
