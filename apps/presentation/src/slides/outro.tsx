import { BellIcon, ThumbsUpIcon } from 'lucide-react';

import { Anchor } from '~/components/anchor';
import { Image } from '~/components/image';
import { Slide } from '~/reveal/templates/slide';

export default () => {
  return (
    <Slide id="outro" title="Thank you for your attention!" centerContent>
      <div className="grid grid-cols-2">
        <div>
          <Image
            src="/images/qr-github.png"
            alt="QR code for the GitHub repository."
            className="w-80 rounded"
          />
          <span className="text-sm">Source Code</span>
        </div>
        <div>
          <Image
            src="/images/qr-presentation.png"
            alt="QR code for the presentation."
            className="w-80 rounded"
          />
          <span className="text-sm">Presentation</span>
        </div>
      </div>
      <aside>
        <ThumbsUpIcon
          size={32}
          aria-label="Like this video on YouTube"
          className="text-primary-500 inline-block"
        />
        <Anchor
          href="https://www.youtube.com/c/JavaScriptCompetencyCenter"
          className="mx-4 inline-flex items-center"
        >
          JavaScript Competency Center
        </Anchor>

        <BellIcon
          size={32}
          aria-label="Subcsribe to the JavaScript Competency Center channel"
          className="text-primary-500 inline-block"
        />
      </aside>
    </Slide>
  );
};
