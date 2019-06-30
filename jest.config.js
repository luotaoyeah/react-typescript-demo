module.exports = {
  testURL: 'http://localhost:3000',
  preset: 'jest-puppeteer',
  extraSetupFiles: ['./tests/setup-tests.js'],
  globals: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: false,
  },
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!**/node_modules/**'],
  coverageReporters: ['lcovonly', 'text-summary'],
};
