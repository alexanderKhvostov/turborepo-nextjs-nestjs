import onlyWarnPlugin from 'eslint-plugin-only-warn';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { baseConfig } from './base.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const project = path.resolve(process.cwd(), 'tsconfig.json');

/**
 * This is a custom ESLint configuration for use with
 * internal (bundled by their consumer) libraries
 * that utilize React.
 *
 * This config extends the Vercel Engineering Style Guide.
 * For more information, see https://github.com/vercel/style-guide
 *
 * @type {import("eslint").Linter.Config[]}
 */
export const reactInternalConfig = [
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
