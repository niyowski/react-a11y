/* eslint-disable */
export default {
  displayName: 'ui',
  preset: '../../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': [
      '@swc/jest',
      {
        jsc: {
          parser: { syntax: 'typescript', tsx: true },
          transform: { react: { runtime: 'automatic' } },
        },
      },
    ],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  setupFilesAfterEnv: ['<rootDir>/test/setup.ts'],
  coverageDirectory: '../../../coverage/libs/demo/ui',
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '!<rootDir>/src/**/index.{ts,tsx}',
    '!<rootDir>/src/**/constants.ts',
    '!<rootDir>/src/**/variants/**/*.ts',
    '!<rootDir>/src/**/variants.ts',
    '!<rootDir>/src/**/*.stories.{ts,tsx}',
    '!<rootDir>/src/**/*.cy.{ts,tsx}',
  ],
};
