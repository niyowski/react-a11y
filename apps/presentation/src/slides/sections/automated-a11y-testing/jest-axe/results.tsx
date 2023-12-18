import { ImageSlide } from '~/reveal/templates/image';

export default () => {
  return (
    <>
      <ImageSlide
        id="jest-axe-result-home-page"
        aria-label="jest-axe results for the home page"
        title="Results - Home Page"
        image={{
          src: '/images/jest-axe/result-home-page.png',
          alt: 'Unit test results showing accessibility violations for the home page',
        }}
        alignTop
        centerContent
      />
      <ImageSlide
        id="jest-axe/result-resources-page"
        aria-label="jest-axe results for the resources page"
        title="Results - Resources Page"
        image={{
          src: '/images/jest-axe/result-resources-page.png',
          alt: 'Unit test results showing accessibility violations for the resources page',
        }}
        alignTop
        centerContent
      />
    </>
  );
};
