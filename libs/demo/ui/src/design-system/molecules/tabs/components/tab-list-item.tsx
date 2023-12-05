import { Heading } from '../../../atoms/typography/heading';
import { classNames } from '../../../utils/css';
import { testId } from '../constants';

export interface TabListItem {
  id: string;
  icon?: JSX.Element;
  title: string;
}

export interface TabListItemProps extends TabListItem {
  isActive?: boolean;
  isFirst?: boolean;
  isLast?: boolean;
  onClick: (id: string) => void;
}

export const TabListItem: React.FC<TabListItemProps> = ({
  id,
  icon,
  title,
  isActive,
  isFirst,
  isLast,
  onClick,
}) => {
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: string,
  ) => {
    e.preventDefault();
    onClick(id);
  };

  return (
    <a
      data-testid={testId.tabListItem}
      onClick={(e) => handleClick(e, id)}
      className={classNames(
        'bg-base-500 block cursor-pointer px-4 py-2 text-white no-underline',
        {
          'bg-secondary-500 cursor-default': isActive,
          'rounded-bl-full rounded-tl-full': isFirst,
          'rounded-br-full rounded-tr-full': isLast,
        },
      )}
    >
      {icon}
      <Heading as="h2" className="not-prose">
        {title}
      </Heading>
    </a>
  );
};
