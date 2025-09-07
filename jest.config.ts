import type { Config } from 'jest';
import presets from 'jest-preset-angular/presets';

export default {
  ...presets.createCjsPreset(),
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  moduleNameMapper: {
    '^@api/(.*)': '<rootDir>/src/app/shared/api/$1',
    '^@shared/(.*)': '<rootDir>/src/app/shared/$1',
    '^@typings/(.*)': '<rootDir>/src/app/shared/types/$1',
    'environments/(.*)': '<rootDir>/src/environments/$1',
    'app/(.*)': '<rootDir>/src/app/$1',
  },
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
  coverageReporters: ['html', 'text', 'text-summary', 'cobertura'],
} satisfies Config;
