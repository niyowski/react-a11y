import { useEffect, useState } from 'react';

import { useFeatureToggle } from './use-feature-toggle';

export const usePageTitle = (pathname: string) => {
  const isCsrA11yEnabled = useFeatureToggle('csr-a11y');
  const [pageTitle, setPageTitle] = useState(document.title);

  useEffect(() => {
    if (!isCsrA11yEnabled) {
      return;
    }

    setTimeout(() => {
      const title = document.title;
      setPageTitle(title);
    }, 500);
  }, [pathname, isCsrA11yEnabled]);

  return pageTitle;
};
