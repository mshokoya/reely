module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFilesAfterEnv: ['./src/tests/setup/jest.setup.ts'],
  testMatch: ['**/__tests__/**/*.test.ts', '**/integration/**/*.test.ts'],
  moduleFileExtensions: ['ts', 'js', 'json'],
  collectCoverageFrom: ['src/**/*.{ts,js}', '!**/node_modules/**'],
  coverageDirectory: 'coverage',
  resetMocks: true,
  restoreMocks: true,
  clearMocks: true,
};