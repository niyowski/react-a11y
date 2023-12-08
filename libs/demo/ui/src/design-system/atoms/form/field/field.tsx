import { cloneElement } from 'react';

import type { Submitable, Testable } from '../../../types';
import { classNames } from '../../../utils/css';

export interface FieldProps extends Submitable, Testable {
  label: string;
  isLabelHidden?: boolean;
  children: JSX.Element;
}

export const Field: React.FC<FieldProps> = ({
  required,
  label,
  isLabelHidden,
  children,
  ...props
}) => {
  return (
    <div
      {...props}
      className={classNames('relative flex flex-col', {
        'after:text-danger-500 after:absolute after:right-2 after:translate-y-1/4 after:font-bold after:content-["*"]':
          required && isLabelHidden,
      })}
    >
      <label
        className={classNames('mb-2', {
          hidden: isLabelHidden,
          'after:text-danger-500 after:ml-1 after:font-bold after:content-["*"]':
            required,
        })}
      >
        {label}
      </label>
      {cloneElement<Submitable>(children, {
        required,
      })}
    </div>
  );
};
