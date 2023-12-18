import { ImageSlide } from '~/reveal/templates/image';

export default () => {
  return (
    <ImageSlide
      id="storybook-addon-a11y-results"
      aria-label="storybook-addon-a11y results"
      title="Results"
      image={{
        src: '/images/storybook-addon-a11y/result-storybook.png',
        alt: 'The Storybook window showing accessibility violations',
      }}
    />
  );
};
