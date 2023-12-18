import { ImageSlide } from '~/reveal/templates/image';

export default () => {
  return (
    <>
      <ImageSlide
        id="eslint-plugin-jsx-a11y-results-ui-default-rules"
        aria-label="eslint-plugin-jsx-a11y results with default rules"
        title="Results (Default Rules)"
        image={{
          src: '/images/eslint-plugin-jsx-a11y/result-ui-default-rules.png',
          alt: 'Linting results for the UI library with the default rules',
        }}
        alignTop
        centerContent
      />
      <ImageSlide
        id="eslint-plugin-jsx-a11y-results-ui-custom-rules"
        aria-label="eslint-plugin-jsx-a11y results with custom rules"
        title="Results (Custom Rules)"
        image={{
          src: '/images/eslint-plugin-jsx-a11y/result-ui-custom-rules.png',
          alt: 'Linting results for the UI library with the custom rules',
        }}
        alignTop
        centerContent
      />
    </>
  );
};
