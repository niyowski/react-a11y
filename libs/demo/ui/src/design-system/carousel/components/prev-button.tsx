import { ArrowLeftCircle } from 'lucide-react';

import { Button, type ButtonProps } from '../../button';
import { testId } from '../constants';

export const PrevButton: React.FC<ButtonProps> = ({ ...props }) => {
  return (
    <Button
      {...props}
      intent="ghost"
      radius="full"
      className="absolute left-2 top-1/2 z-10 min-w-0 bg-transparent p-0"
      data-testid={testId.carouselPrevButton}
    >
      <ArrowLeftCircle size={32} />
    </Button>
  );
};
