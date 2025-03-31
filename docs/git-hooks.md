# Git Hooks in Monorepo

This project uses Git hooks to ensure code quality and enforce coding style conventions. The hooks are configured using `husky`, `lint-staged`, and `commitlint`.

## Installed Hooks

### pre-commit

Runs before creating a commit. Performs the following checks:

- Runs ESLint to check and automatically fix code style issues in changed files
- Runs Prettier to format changed files

This is implemented using `lint-staged`, which applies these checks only to changed files, making the process fast and efficient.

### commit-msg

Checks the commit message format using `commitlint`. Messages must follow the [Conventional Commits](https://www.conventionalcommits.org/) standard:

```
type(scope): subject
```

Where:

- `type`: type of change (feat, fix, docs, style, refactor, test, chore)
- `scope`: (optional) scope of the change
- `subject`: brief description of the change

Examples:

- `feat: add user authentication`
- `fix(auth): resolve token expiration issue`
- `docs: update README with setup instructions`

### pre-push

Runs before pushing changes to the remote repository. Performs:

- Building and testing only changed packages (since the last commit)
- This helps detect issues before they reach the shared repository

## Turbo Pipeline

The project uses Turborepo to optimize command execution. Pipelines are configured for:

- **build**: project building with dependencies between packages
- **test**: running tests, considering dependencies
- **lint**: code style checking
- **format**: code formatting
- **clean**: cleaning generated files

## Development Workflow

1. Make changes to the code
2. On commit, lint-staged will automatically run to check style
3. Ensure the commit message format follows Conventional Commits
4. On push, tests will run for changed packages

## Helper Commands

- `yarn affected:build`: build only changed packages
- `yarn affected:test`: test only changed packages
- `yarn affected:lint`: lint only changed packages
- `yarn clean`: clean all temporary files

## Bypassing Hooks

In emergency cases, hooks can be bypassed using the `--no-verify` flag:

```bash
git commit --no-verify -m "feat: urgent fix"
git push --no-verify
```

However, this is not recommended for normal workflow.
