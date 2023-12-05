import { useMemo } from 'react';

import { data as webaimOverview } from './data/webaim-overview';
import { data as webaimWcag2 } from './data/webaim-wcag2';

export const useStats = () => useMemo(() => [webaimOverview, webaimWcag2], []);
