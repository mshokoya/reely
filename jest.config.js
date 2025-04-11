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


// // jest.config.js
// module.exports = {
//   // Indicates whether the coverage information should be collected while executing the test
//   collectCoverage: true,

//   // An array of glob patterns indicating a set of files for which coverage information should be collected
//   collectCoverageFrom: [
//     'src/**/*.{js,jsx,ts,tsx}',
//     '!src/**/*.d.ts',
//     '!src/index.{js,ts}',
//     '!src/setupTests.{js,ts}',
//     '!src/**/*.stories.{js,jsx,ts,tsx}',
//     '!src/**/__tests__/**/*',
//     '!src/**/__mocks__/**/*',
//   ],

//   // The directory where Jest should output its coverage files
//   coverageDirectory: 'coverage',

//   // The test environment that will be used for testing
//   testEnvironment: 'jsdom',

//   // An array of file extensions your modules use
//   moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],

//   // A map from regular expressions to module names that allow to stub out resources
//   moduleNameMapper: {
//     // Handle CSS imports (with CSS modules)
//     // https://jestjs.io/docs/webpack#mocking-css-modules
//     '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',

//     // Handle CSS imports (without CSS modules)
//     '^.+\\.(css|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',

//     // Handle image imports
//     // https://jestjs.io/docs/webpack#handling-static-assets
//     '^.+\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js',

//     // Handle module aliases
//     '^@/(.*)$': '<rootDir>/src/$1',
//   },

//   // A list of paths to directories that Jest should use to search for files in
//   roots: ['<rootDir>'],

//   // The glob patterns Jest uses to detect test files
//   testMatch: [
//     '<rootDir>/**/__tests__/**/*.{js,jsx,ts,tsx}',
//     '<rootDir>/**/*.{spec,test}.{js,jsx,ts,tsx}',
//   ],

//   // A list of paths to modules that run some code to configure or set up the testing framework
//   setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],

//   // The test runner to use
//   testRunner: 'jest-circus/runner',

//   // Automatically clear mock calls and instances between every test
//   clearMocks: true,

//   // Transform files with babel-jest
//   transform: {
//     '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
//   },

//   // Ignore paths for transformation
//   transformIgnorePatterns: [
//     '/node_modules/',
//     '^.+\\.module\\.(css|sass|scss)$',
//   ],

//   // An array of regexp pattern strings that are matched against all source file paths before re-running tests
//   watchPathIgnorePatterns: ['<rootDir>/node_modules/'],

//   // Indicates whether each individual test should be reported during the run
//   verbose: true,
// };