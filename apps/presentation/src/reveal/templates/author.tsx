import { Icon, type IconName } from '~/components/icons';
import { Text } from '~/components/text';
import type { Image } from '~/types';
import { classNames } from '~/utils/css';

import { Slide, type SlideProps } from './slide';

type ContactIcon = {
  name: IconName;
  className?: string;
};

export type ContactInfo = {
  id: string;
  icon?: ContactIcon;
  title: string;
};

type AuthorSlideProps = SlideProps & {
  image: Image;
  contact: ContactInfo[];
};

export const AuthorSlide = ({
  image,
  contact,
  children,
  ...rest
}: AuthorSlideProps) => {
  return (
    <Slide {...rest} className="flex">
      <article className="flex-1">{children}</article>
      <aside>
        <img
          src={image.src}
          alt={image.alt}
          className="m-0 w-60 rounded-full shadow-2xl hue-rotate-90"
        />
        <div className="flex flex-col items-center">
          {contact.map(({ id, icon, title }) => (
            <Text
              as="p"
              key={id}
              className="fragment m-0 inline-flex items-center"
            >
              {icon && (
                <Icon
                  role="presentation"
                  name={icon.name}
                  className={classNames('mr-1 h-4 w-4', icon.className)}
                />
              )}
              {title}
            </Text>
          ))}
        </div>
      </aside>
    </Slide>
  );
};
