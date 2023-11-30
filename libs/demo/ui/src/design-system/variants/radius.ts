import { cva, VariantProps } from 'class-variance-authority';

export const radiusVariants = cva(undefined, {
  variants: {
    radius: {
      default: 'rounded',
      full: 'rounded-full',
      special: 'rounded-special',
    },
  },
  defaultVariants: {
    radius: 'default',
  },
});

export type RadiusVariants = VariantProps<typeof radiusVariants>;
