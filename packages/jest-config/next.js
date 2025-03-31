import nextJest from 'next/jest.js';
import { config as baseConfig } from './base.js';

const createJestConfig = nextJest({
  dir: './',
});

const config = {
  ...baseConfig,
  moduleFileExtensions: [...baseConfig.moduleFileExtensions, 'jsx', 'tsx'],
};

export default createJestConfig(config);
