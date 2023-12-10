const DEFAULT_LOCALE = 'en-US';

export const formatNumber = (value: number) => {
  return Intl.NumberFormat(DEFAULT_LOCALE).format(value);
};
