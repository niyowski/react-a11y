import clsx, { type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/** A Tailwind utility that merges the given classes. */
export function classNames(...classes: ClassValue[]) {
  return twMerge(clsx(classes));
}
