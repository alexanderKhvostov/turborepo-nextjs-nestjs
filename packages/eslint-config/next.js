import importPlugin from 'eslint-plugin-import';
import onlyWarnPlugin from 'eslint-plugin-only-warn';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { baseConfig } from './base.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * A custom ESLint configuration for libraries that use Next.js.
 *
 * @type {import("eslint").Linter.Config[]}
 */
export const nextJsConfig = [
  ...baseConfig,
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    plugins: {
      import: importPlugin,
      'only-warn': onlyWarnPlugin,
    },
    languageOptions: {
      globals: {
        React: 'readonly',
        JSX: 'readonly',
      },
      parserOptions: {
        project: path.join(process.cwd(), 'tsconfig.json'),
      },
    },
    settings: {
      'import/resolver': {
        typescript: {
          project: path.join(process.cwd(), 'tsconfig.json'),
        },
      },
    },
    rules: {
      // Next.js specific import sorting
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling'],
            'index',
            'object',
            'type',
          ],
          pathGroups: [
            {
              pattern: 'react',
              group: 'external',
              position: 'before',
            },
            {
              pattern: 'next/**',
              group: 'external',
              position: 'before',
            },
            {
              pattern: '@repo/**',
              group: 'internal',
              position: 'before',
            },
          ],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
    },
  },
];
