import { cva, VariantProps } from 'class-variance-authority';

export const inputVariants = cva(
  'disabled:bg-base-200 disabled:text-base-400 min-w-[2.75rem] px-4 py-2 read-only:border-transparent disabled:border-transparent',
  {
    variants: {
      hasError: {
        true: 'border-danger-500 focus:ring-danger-500 focus:border-danger-500 text-danger-500 focus:text-current',
      },
    },
    defaultVariants: {
      hasError: false,
    },
  },
);

export type InputVariants = VariantProps<typeof inputVariants>;
