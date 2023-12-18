import { ImageSlide } from '~/reveal/templates/image';

export default () => {
  return (
    <>
      <ImageSlide
        id="axe-core-playwright-result-playwright-overview"
        aria-label="@axe-core/playwright results for the home page"
        title="Results (Overview)"
        image={{
          src: '/images/axe-core-playwright/result-playwright-overview.png',
          alt: "A browser window showing accessibility violations as a result of Playwright's automated accessibility testing.",
        }}
        alignTop
        centerContent
      />
      <ImageSlide
        id="axe-core-playwright-result-playwright-details"
        aria-label="@axe-core/playwright results for the resources page"
        title="Results (Details)"
        image={{
          src: '/images/axe-core-playwright/result-playwright-details.png',
          alt: "A browser window showing accessibility violations as a result of Playwright's automated accessibility testing.",
        }}
        alignTop
        centerContent
      />
    </>
  );
};
