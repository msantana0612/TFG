import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest', // Usa el preset correcto para TypeScript
  testEnvironment: 'jsdom', // Define el entorno de pruebas para un DOM simulado
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
};

export default config;
