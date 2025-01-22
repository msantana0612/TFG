import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  clearMocks: true,
  reporters: [
    'default',
    ['jest-junit', { outputDirectory: './test-results/jest', outputName: 'results.xml' }]
  ]
};

export default config;
