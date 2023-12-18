import { LinkIcon } from 'lucide-react';

import { BrowserExtension } from '~/components/browser-extention';
import { BulletedList, type BulletPoint } from '~/components/bulleted-list';
import { Slide } from '~/reveal/templates/slide';

const browserExtensions: BulletPoint[] = [
  {
    id: 'axe-dev-tools',
    icon: { component: LinkIcon, className: 'text-info-500' },
    text: {
      content: (
        <BrowserExtension
          href="https://docs.deque.com/devtools-html/4.0.0/en/devtools-extension"
          title="axe DevTools"
          browsers={['Chrome', 'Edge', 'Firefox']}
          hasPaidVersion
        />
      ),
    },
  },
  {
    id: 'a11y-insights-for-web',
    icon: { component: LinkIcon, className: 'text-info-500' },
    text: {
      content: (
        <BrowserExtension
          href="https://accessibilityinsights.io/docs/web/overview/"
          title="Accesibility Insights for Web"
          browsers={['Chrome', 'Edge']}
        />
      ),
    },
  },
  {
    id: 'wave',
    icon: { component: LinkIcon, className: 'text-info-500' },
    text: {
      content: (
        <BrowserExtension
          href="https://wave.webaim.org/extension/"
          title="WAVE Accessibility Evaluation Tool"
          browsers={['Chrome', 'Edge', 'Firefox']}
        />
      ),
    },
  },
  {
    id: 'siteimprove',
    icon: { component: LinkIcon, className: 'text-info-500' },
    text: {
      content: (
        <BrowserExtension
          href="https://www.siteimprove.com/integrations/browser-extensions/"
          title="Siteimprove"
          browsers={['Chrome', 'Edge', 'Firefox', 'Opera']}
        />
      ),
    },
  },
  {
    id: 'ibm-equal-access-accessibility-checker',
    icon: { component: LinkIcon, className: 'text-info-500' },
    text: {
      content: (
        <BrowserExtension
          href="https://www.ibm.com/able/toolkit/tools"
          title="IBM Equal Access Accessibility Checker"
          browsers={['Chrome', 'Edge', 'Firefox']}
        />
      ),
    },
  },
  {
    id: 'stark',
    icon: { component: LinkIcon, className: 'text-info-500' },
    text: {
      content: (
        <BrowserExtension
          href="https://www.getstark.co/"
          title="Stark"
          browsers={['Brave', 'Chrome', 'Edge', 'Firefox', 'Safari']}
          hasPaidVersion
        />
      ),
    },
  },
  {
    id: 'equalweb-accessibility-checker',
    icon: { component: LinkIcon, className: 'text-info-500' },
    text: {
      content: (
        <BrowserExtension
          href="https://www.equalweb.com/11312/11528/Web_Accessibility_Checker"
          title="EqualWeb Accessibility Checker"
          browsers={['Chrome']}
          hasPaidVersion
        />
      ),
    },
  },
  {
    id: 'wcag-color-contrast-check',
    icon: { component: LinkIcon, className: 'text-info-500' },
    text: {
      content: (
        <BrowserExtension
          href="https://chromewebstore.google.com/detail/wcag-color-contrast-check/plnahcmalebffmaghcpcmpaciebdhgdf"
          title="WCAG Color contrast checker"
          browsers={['Chrome']}
        />
      ),
    },
  },
];

export default () => {
  return (
    <Slide
      id="browser-extentions"
      title="Browser Extensions"
      alignTop
      centerContent
    >
      <BulletedList items={browserExtensions} />
    </Slide>
  );
};
