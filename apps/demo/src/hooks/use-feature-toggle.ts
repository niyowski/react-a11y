const featureNames = ['csr-a11y'] as const;

type FeatureName = (typeof featureNames)[number];

const IS_CSR_A11Y_ENABLED = false;

const features = new Map<FeatureName, boolean>([
  ['csr-a11y', IS_CSR_A11Y_ENABLED],
]);

export const useFeatureToggle = (feature: FeatureName) => {
  return features.get(feature) ?? false;
};
