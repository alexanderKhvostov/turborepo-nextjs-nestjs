import onlyWarnPlugin from 'eslint-plugin-only-warn';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { baseConfig } from './base.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const project = path.resolve(process.cwd(), 'tsconfig.json');

/**
 * A custom ESLint configuration for libraries.
 *
 * @type {import("eslint").Linter.Config[]}
 */
export const libraryConfig = [
  ...baseConfig,
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    plugins: {
      'only-warn': onlyWarnPlugin,
    },
    languageOptions: {
      globals: {
        React: 'readonly',
        JSX: 'readonly',
      },
      parserOptions: {
        project,
      },
    },
    settings: {
      'import/resolver': {
        typescript: {
          project,
        },
      },
    },
    ignores: ['.*.js', 'node_modules/**', 'dist/**'],
  },
];
