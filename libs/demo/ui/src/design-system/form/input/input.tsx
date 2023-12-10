import React, { forwardRef } from 'react';

import type { Submitable, Testable } from '../../types';
import { classNames } from '../../utils/css';
import { type RadiusVariants, radiusVariants } from '../../variants/radius';
import { type InputVariants, inputVariants } from '../variants';

type Variants = InputVariants & RadiusVariants;
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    Variants,
    Submitable,
    Testable {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ hasError, radius, className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type="text"
        {...props}
        className={classNames(
          inputVariants({ hasError }),
          radiusVariants({ radius }),
          className,
        )}
      />
    );
  },
);
