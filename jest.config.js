module.exports = {
  testURL: 'http://localhost:3001',
  preset: 'jest-puppeteer',
  globals: {},
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!**/node_modules/**'],
  coverageReporters: ['lcovonly', 'text-summary'],
};
