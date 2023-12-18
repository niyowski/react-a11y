import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import { useFeatureToggle } from './use-feature-toggle';

export const usePageFocus = () => {
  const isCsrA11yEnabled = useFeatureToggle('csr-a11y');

  const { pathname } = useLocation();
  const focusRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!isCsrA11yEnabled) {
      return;
    }

    if (focusRef.current) {
      focusRef.current.focus();
    }
  }, [pathname, isCsrA11yEnabled]);

  return focusRef;
};
