/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: '<rootDir>/test/mongo-test-environment',
  collectCoverageFrom: [
    "src/**/*.ts",
  ],
  coveragePathIgnorePatterns: [
    "<rootDir>/node_modules",
    "<rootDir>/src/database/index.ts",
    "<rootDir>/src/index.ts",
    "<rootDir>/src/utils/console-stamp.ts",
    "<rootDir>/src/utils/logger.ts",
  ],
  coverageReporters: [
    "lcov",
  ],
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50,
    }
  },
  transform: {
    ts: "ts-jest",
  },
  testRegex: "(/__tests__/.*|\\.(test|spec))\\.(ts)$",
  moduleFileExtensions: [
    "ts",
    "js",
    "json",
  ],
};