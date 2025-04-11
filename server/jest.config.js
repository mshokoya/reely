module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFilesAfterEnv: ['<rootDir>/src/tests/setup/jest.setup.ts'],
  testMatch: ['<rootDir>/src/**/*.test.ts'],
  moduleFileExtensions: ['ts', 'js', 'json'],
  // collectCoverageFrom: ['src/**/*.{ts,js}', '!**/node_modules/**'],
  coverageDirectory: 'coverage',
  resetMocks: true,
  restoreMocks: true,
  clearMocks: true,
  // testPathIgnorePatterns: ['/node_modules/'],
  // testRegex: '.*\\.test\\.ts$',
};