import { classNames } from '../../../utils/css';
import { testId } from '../constants';

export interface PrevButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {}

export const PrevButton: React.FC<PrevButtonProps> = ({ ...props }) => {
  return (
    <button
      {...props}
      className={classNames('absolute left-0 top-1/2 z-10')}
      data-testid={testId.carouselPrevButton}
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
          d="M15.75 19.5L8.25 12l7.5-7.5"
        />
      </svg>
    </button>
  );
};