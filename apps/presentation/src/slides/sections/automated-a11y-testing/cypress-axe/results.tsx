import { ImageSlide } from '~/reveal/templates/image';

export default () => {
  return (
    <>
      <ImageSlide
        id="cypress-axe-results-demo-e2e"
        aria-label="cypress-axe results for e2e tests"
        title="Results (End-to-end)"
        image={{
          src: '/images/cypress-axe/result-demo-e2e.png',
          alt: 'Cypress window showing accessibility violations for e2e tests',
        }}
        alignTop
        centerContent
      />
      <ImageSlide
        id="cypress-axe-results-ui-component"
        aria-label="cypress-axe results for component tests"
        title="Results (Component)"
        image={{
          src: '/images/cypress-axe/result-ui-component.png',
          alt: 'Cypress window showing accessibility violations for component tests',
        }}
        alignTop
        centerContent
      />
    </>
  );
};
