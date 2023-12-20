const DEFAULT_LOCALE = 'en-US';

export const formatNumber = (
  value: number,
  options?: Intl.NumberFormatOptions,
) => {
  return Intl.NumberFormat(DEFAULT_LOCALE, options).format(value);
};
