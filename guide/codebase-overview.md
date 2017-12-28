# Codebase overview

A description of the structure of the codebase, conventions being followed, and principles.

## Tools

The TDS codebase maintains a set of organisational and syntactical standards.
We utilise the following tools for the development, release, and distribution processes:

- [Styleguidist](https://react-styleguidist.js.org/): component props are parsed and converted
to documentation.
- [Rollup](https://rollupjs.org/): Rollup delivers a component package with tree-shaken 
methods, scoped CSS, 
- [ES2015+](https://github.com/lukehoban/es6features): throughout this codebase, we utilise 
JavaScript patterns such as ternary operators,
deconstructors, and spread operators
- [CSS Modules](https://github.com/css-modules/css-modules): facilitates the buildup of scoped 
CSS while maintaining the familiar interface of SCSS
- [Yarn](https://github.com/css-modules/css-modules): we chose Yarn as our node package 
manager for its speed and deep dependency version locking. It is used in our build pipelines
for deployment to npmjs.com

## Component structure & standards

All TDS components have a common directory structure and set of standards. Where you have a
component named `PriceLock`, the files are organized like this:

```
/src/components/
│
└─── PriceLock
    │  PriceLock.md
    │  PriceLock.jsx
    │  PriceLock.modules.scss
    │
    └─── __tests__
        │  PriceLock.spec.jsx
        |
        └─── __snapshots__
            |  PriceLock.spec.jsx.snap
```

Here you may notice our standards:

- Use PascalCase for all file names
- Avoid non-verbose filenames such as `index.jsx`
- Every component must include a set of unit tests and snapshot
- If a component requires custom styling, use CSS Modules and suffix your scss file with `.modules.scss`
- To include custom documentation, use `<ComponentName>.md`

## Building components

### Creating new components from scratch

When starting fresh, you can use the scaffolding script to generate a component directory structure:

```sh
yarn scaffold PriceLock

# This will output a set of files in the aforementioned structure
```

### JSX Patterns

Coming soon...
