# Tility-UI

Tility-UI is a collection of customizable react ui components.
It's inspired by [Flowbite](https://flowbite-react.com) and build with [Turborepo](https://turbo.build/repo), [React](https://reactjs.org/), [React-Aria](https://github.com/adobe/react-spectrum) and [Tailwind](https://tailwindcss.com).

## Developing

Install dependencies

```bash
pnpm install
```

### Useful Commands

- `pnpm run build` - Build all packages except the Storybook site
- `pnpm run build:docs` - Build the Storybook site
- `pnpm run build:all` - Build all packages including the Storybook site
- `pnpm run dev` - Run all packages locally and preview with Storybook
- `pnpm run lint` - Lint all packages
- `pnpm run changeset:create` - Create changelog
- `pnpm run changeset:apply` - Apply changelog and bump version
- `pnpm run clean` - Clean up all `node_modules` and `dist` folders (runs each package's clean script)
