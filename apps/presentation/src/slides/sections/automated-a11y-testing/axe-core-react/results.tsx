import { ImageSlide } from '~/reveal/templates/image';

export default () => {
  return (
    <ImageSlide
      id="axe-core-react-results"
      aria-label="@axe-core/react results"
      title="Results"
      image={{
        src: '/images/axe-core-react/result.png',
        alt: "The browser's console window showing accessibility violations",
      }}
      alignTop
      centerContent
    />
  );
};
