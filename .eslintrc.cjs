// This configuration only applies to the package manager root.
/** @type {import("eslint").Linter.Config} */
module.exports = {
  ignorePatterns: ['apps/**', 'packages/**', '.eslintrc.cjs'],
  extends: [require.resolve('@repo/eslint-config/library.cjs')],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
  },
};
