import type { Config } from 'jest';

const config: Config = {
  displayName: 'demo',
  preset: '../../jest.preset.js',
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nx/react/plugins/jest',
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nx/react/babel'] }],
  },
  testMatch: ['<rootDir>/src/**/?(*.)+(spec|test).ts?(x)'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  setupFilesAfterEnv: ['<rootDir>/test/setup.ts'],
  coverageDirectory: '../../coverage/apps/demo',
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '!<rootDir>/src/**/index.{ts,tsx}',
    '!<rootDir>/src/**/constants.ts',
    '!<rootDir>/src/app/*.{ts,tsx}',
    '!<rootDir>/src/main.tsx',
  ],
};

export default config;
