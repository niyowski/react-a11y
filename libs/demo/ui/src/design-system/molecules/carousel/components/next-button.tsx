import { classNames } from '../../../utils/css';
import { testId } from '../constants';

export interface NextButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {}

export const NextButton: React.FC<NextButtonProps> = ({ ...props }) => {
  return (
    <button
      {...props}
      className={classNames('absolute right-0 top-1/2 z-10')}
      data-testid={testId.carouselNextButton}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
    </button>
  );
};
