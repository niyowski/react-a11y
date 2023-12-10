import { ChevronUp } from 'lucide-react';

import { Button, type ButtonProps } from '../../button';
import { testId } from '../constants';

export const CloseButton: React.FC<ButtonProps> = (props) => (
  <Button
    {...props}
    intent="ghost"
    radius="full"
    data-testid={testId.accordionToggleButton}
  >
    <ChevronUp size={16} />
  </Button>
);
