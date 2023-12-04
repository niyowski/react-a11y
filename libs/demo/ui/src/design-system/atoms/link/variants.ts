import { cva, VariantProps } from 'class-variance-authority';

export const linkVariants = cva(' no-underline', {
  variants: {
    intent: {
      default: ['text-base-500', 'hover:text-base-700', 'active:text-base-900'],
      primary: [
        'text-primary-500',
        'hover:text-primary-700',
        'active:text-primary-900',
      ],
      secondary: [
        'text-secondary-500',
        'hover:text-secondary-700',
        'active:text-secondary-900',
      ],
    },
  },
  defaultVariants: {
    intent: 'secondary',
  },
});

export type LinkVariants = VariantProps<typeof linkVariants>;
