# Contributing

Thanks for your interest in contributing to Personal Resume Template! ❤️

## Before you start

Please check existing Issues and Pull Requests before opening a new one. For larger changes, open an Issue first so the direction can be discussed before implementation.

## Development

```bash
npm install
npm run dev
```

Before submitting a pull request, run:

```bash
npm run build
```

Make sure there are no new console errors and that the layout still works on mobile and desktop.

## Pull Request guidelines

1. Fork the repository.
2. Create a focused branch, for example `fix/mobile-nav` or `feat/accessibility-improvement`.
3. Keep changes small and related to one purpose.
4. Avoid adding unnecessary dependencies.
5. Keep the Persian RTL experience intact unless the change intentionally expands language support.
6. Test the production build with `npm run build`.
7. Update documentation when behavior or setup changes.
8. Open a pull request with a clear title and description.

## Commit messages

Prefer short, descriptive commit messages, for example:

```text
fix: improve mobile navigation
feat: add project links
docs: update deployment guide
```

## Design and accessibility

New UI should preserve responsive behavior, readable contrast, keyboard usability and reduced-motion support where applicable.

## Code of Conduct

By participating in this project, you agree to follow the project's [Code of Conduct](CODE_OF_CONDUCT.md).
