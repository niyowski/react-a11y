import { ArrowRightCircle } from 'lucide-react';

import { Button, type ButtonProps } from '../../button';
import { testId } from '../constants';

export const NextButton: React.FC<ButtonProps> = ({ ...props }) => {
  return (
    <Button
      {...props}
      intent="ghost"
      radius="full"
      className="absolute right-2 top-1/2 z-10 min-w-0 bg-transparent p-0"
      data-testid={testId.carouselNextButton}
    >
      <ArrowRightCircle size={32} />
    </Button>
  );
};
