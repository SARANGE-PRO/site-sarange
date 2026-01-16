# Contributing Guide

## Coding Standards

### Code Style

- We use **Prettier** for code formatting.
- **ESLint** is used for linting.
- **React**: Functional components with Hooks.
- **Tailwind CSS**: Use utility classes. Avoid custom CSS when possible.

### File Naming

- Components: PascalCase (e.g., `MyComponent.jsx`)
- Utilities/Hooks: camelCase (e.g., `useWindowSize.js`)
- Constant/Data files: camelCase (e.g., `constants.js`)

### Feature Structure (Upcoming)

- We are migrating to a feature-based structure:

  ```
  src/features/
    feature-name/
      components/
      hooks/
      services/
  ```

## Development Workflow

1. **Install dependencies**: `npm install`
2. **Start Dev Server**: `npm run dev`
3. **Lint & Format**: `npm run lint:fix` & `npm run format`
4. **Build**: `npm run build`

## Git Workflow

- Commit messages should be descriptive.
- Branch naming: `feature/name` or `fix/issue`.
