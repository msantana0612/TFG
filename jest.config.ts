import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest', // Usa el preset correcto para TypeScript
  testEnvironment: 'jsdom', // Define el entorno de pruebas para un DOM simulado
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
};

module.exports = {
  reporters: [
    'default', // Reporte estándar
    ['jest-junit', { outputDirectory: './test-results/jest', outputName: 'results.xml' }] // Reporte en formato JUnit XML
  ],
};

export default config;
