import { cva, VariantProps } from 'class-variance-authority';

export const gaugeVariants = cva('', {
  variants: {
    color: {
      red: 'text-red-500',
      orange: 'text-orange-500',
      amber: 'text-amber-500',
      yellow: 'text-yellow-500',
      lime: 'text-lime-500',
      green: 'text-green-500',
      emerald: 'text-emerald-500',
      teal: 'text-teal-500',
      cyan: 'text-cyan-500',
      sky: 'text-sky-500',
      blue: 'text-blue-500',
      indigo: 'text-indigo-500',
      violet: 'text-violet-500',
      purple: 'text-purple-500',
      fuchsia: 'text-fuchsia-500',
      pink: 'text-pink-500',
      rose: 'text-rose-500',
    },
    size: {
      small: 'w-12 h-12',
      medium: 'w-24 h-24',
      large: 'w-36 h-36',
    },
  },
  defaultVariants: {
    color: 'green',
    size: 'medium',
  },
});

export type GaugeVariants = VariantProps<typeof gaugeVariants>;
