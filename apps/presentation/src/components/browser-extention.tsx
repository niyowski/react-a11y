import { DollarSignIcon } from 'lucide-react';

import { Anchor } from './anchor';

type Browser = 'Brave' | 'Chrome' | 'Edge' | 'Firefox' | 'Opera' | 'Safari';

type BrowserExtensionProps = {
  id?: string;
  href: string;
  title: string;
  hasPaidVersion?: boolean;
  browsers: Browser[];
};

export const BrowserExtension: React.FC<BrowserExtensionProps> = ({
  href,
  title,
  hasPaidVersion,
  browsers,
}) => {
  return (
    <>
      <Anchor href={href}>{title}</Anchor>
      {hasPaidVersion && (
        <DollarSignIcon
          size={20}
          className="text-success-500 ml-2 inline-block"
        />
      )}
      <span className="text-base-300 ml-2 pt-2 text-xs italic">
        {browsers.join(', ')}
      </span>
    </>
  );
};
