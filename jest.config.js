module.exports = {
  testURL: 'http://localhost:3000',
  preset: 'jest-puppeteer',
  extraSetupFiles: ['./tests/setup-tests.js'],
  globals: {},
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!**/node_modules/**'],
  coverageReporters: ['lcovonly', 'text-summary'],
};
