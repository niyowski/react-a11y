import React from 'react';

import { classNames } from '../../utils/css';
import { type RadiusVariants, radiusVariants } from '../../variants/radius';
import { type ButtonVariants, buttonVariants } from './variants';

type Variants = ButtonVariants & RadiusVariants;
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    Variants {}

export const Button: React.FC<ButtonProps> = ({
  intent,
  radius,
  className,
  ...props
}) => {
  return (
    <button
      type="button"
      {...props}
      className={classNames(
        buttonVariants({ intent }),
        radiusVariants({ radius }),
        className,
      )}
    />
  );
};
