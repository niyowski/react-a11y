import React from 'react';

import type { Testable } from '../types';

export interface BrandProps extends Testable {
  logo: JSX.Element;
  name: string;
}

export const Brand: React.FC<BrandProps> = ({ name, logo, ...props }) => {
  return (
    <div className="flex items-center" {...props}>
      {logo}
      <span className="ml-2 text-2xl">{name}</span>
    </div>
  );
};
