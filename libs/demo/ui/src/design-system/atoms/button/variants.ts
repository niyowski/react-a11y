import { cva, VariantProps } from 'class-variance-authority';

export const buttonVariants = cva(
  'disabled:bg-base-200 disabled:text-base-300 min-w-[2.75rem] border-transparent px-4 py-2 text-white',
  {
    variants: {
      intent: {
        default: 'bg-base-500 hover:bg-base-600',
        primary: 'bg-primary-500 hover:bg-primary-600',
        secondary: 'bg-secondary-500 hover:bg-secondary-600',
      },
    },
    defaultVariants: {
      intent: 'default',
    },
  },
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;
