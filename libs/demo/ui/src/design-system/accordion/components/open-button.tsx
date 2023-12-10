import { ChevronDown } from 'lucide-react';

import { Button, type ButtonProps } from '../../button';
import { testId } from '../constants';

export const OpenButton: React.FC<ButtonProps> = (props) => (
  <Button
    {...props}
    intent="ghost"
    radius="full"
    data-testid={testId.accordionToggleButton}
  >
    <ChevronDown size={16} />
  </Button>
);
