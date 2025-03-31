/** @type {import('jest').Config} */
const config = {
  rootDir: 'src',
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverageFrom: ['**/*.(t|j)s'],
  coverageDirectory: '../coverage',
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'ts', 'json'],
  collectCoverage: true,
  coverageProvider: 'v8',
};

module.exports = config; 