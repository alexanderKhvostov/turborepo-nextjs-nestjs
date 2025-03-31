const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const config = {
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  moduleFileExtensions: ['js', 'ts', 'jsx', 'tsx', 'json'],
  testEnvironment: 'jsdom',
};

module.exports = createJestConfig(config);
