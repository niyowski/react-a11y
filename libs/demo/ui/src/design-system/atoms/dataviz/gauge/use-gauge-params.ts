import { useMemo } from 'react';

import { GAUGE_CIRCUMFERENCE } from './constants';

interface GaugeParams {
  initialOffset: number;
  strokeDasharray: string;
  strokeDashoffset: number;
}

export const useGaugeParams = (value: number) => {
  return useMemo<GaugeParams>(() => {
    const valueInCircumference = (value / 100) * GAUGE_CIRCUMFERENCE;
    const initialOffset = GAUGE_CIRCUMFERENCE;
    const strokeDasharray = `${GAUGE_CIRCUMFERENCE} ${GAUGE_CIRCUMFERENCE}`;
    const strokeDashoffset = initialOffset - valueInCircumference;

    return {
      initialOffset,
      strokeDasharray,
      strokeDashoffset,
    };
  }, [value]);
};
