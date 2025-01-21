import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  reporters: [
    'default',
    ['jest-junit', { outputDirectory: './test-results/jest', outputName: 'results.xml' }]
  ]
};

export default config;
