# Codebase overview

A description of the structure of the codebase, conventions being followed, and patterns.

## Contents

- [Tools](#tools)
- [Component structure and standards](#component-s-and-s)
- [Building components](#building-components)
- [Writing test](#writing-tests)

## Tools {#tools}

The TDS codebase maintains a set of organizational and syntactical standards.
We utilize the following tools for the development, release, and distribution processes:

- [Styleguidist](https://react-styleguidist.js.org/): isolated React component development environment with a
  living style guide
- [Rollup](https://rollupjs.org/): Rollup is a JavaScript module bundler, similar to webpack, built with ES2015 modules
  in mind and optimized for libraries.
- [ES2015+](https://github.com/lukehoban/es6features): We write all JavaScript as ES2015 modules, generally following
  the comprehensive AirBnb style guides for JavaScript and React, and then transpile it for the browser with Babel
- [Jest](https://facebook.github.io/jest/) and [Enzyme](https://github.com/blainekasten/enzyme-matchers):
  we use jest as our test runner and enzyme to test our React components
- Linters and Prettier: standardize code style and format
- [CSS Modules](https://github.com/css-modules/css-modules): facilitates the buildup of scoped
  CSS while maintaining the familiar interface of SCSS
- [Lerna](https://lernajs.io/): A tool for managing JavaScript projects with multiple packages.

## Component structure and standards {#component-s-and-s}

All TDS components have a common directory structure and set of standards. Where you have a
component named `ButtonLink`, the files are organized like this:

```bash
    /packages/
    │
    └─── ButtonLink
        │  ButtonLink.md
        │  ButtonLink.jsx
        │  ButtonLink.modules.scss
        |  index.cjs.js
        │  index.es.js
        |  package.json
        |  README.md
        |  rollup.config.js
        |
        └─── __tests__
            │  ButtonLink.spec.jsx
            |
            └─── __snapshots__
                |  ButtonLink.spec.jsx.snap
```

Here you may notice some of our standards:

- Use PascalCase for all file names
- Every component must include a set of unit tests and snapshot
- If a component requires custom styling, use CSS Modules and suffix your scss file with `.modules.scss`
- To include custom documentation with a component, use `<ComponentName>.md`
- To include documentation for the npm registry page, use `README.md`

## Building components {#building-components}

Building React components for TDS involves a set of coding standards in order to maintain consistent syntax
and form across the codebase. Though the majority of syntax is automatically formatted with our linter rules and
with the aid of Prettier (see [Developer Guide](./contributing/developer-guide.md) for setup), this guide covers
the more subjective rules we uphold.

### Creating new components from scratch

When starting fresh, you can use the scaffolding script to generate a component directory structure:

```sh
npm run scaffold [ComponentName]
```

This will output a set of files in the aforementioned structure.

### React & JSX patterns

Though the following patterns are not strictly enforced, they are strongly encouraged:

#### General

- Prefer functional stateless components. Only create a class when you either need state or need lifecycle methods
- Accessibility and responsiveness is a must for every component
- Provide a flexible and predictable interface via props
- Components should only be aware of themselves or their direct children

#### Props

- De-structure props in the function signature to make it easy to see all of the used props.
- Always accept "rest" props (except for className and style) to allow for common global HTML attributes such as `id`.
  Spread these onto the main HTML element of the component before other props. This is to prevent accidental or
  purposeful overriding. `className` and `style` are also not available as a prop interface in most components because
  TDS strictly enforces the TELUS brand through styles, and as such there should be no potential inaccurate brand
  representations.
- If a parent component does not use props and only passes them down to its children, pass components as props.

[Here is an example of a React component that follows the above patterns](https://github.com/telusdigital/tds-core/blob/309271bff529a690532b781e4b3dd26939642f37/src/components/Link/ButtonLink/ButtonLink.jsx).

### Styling components

TDS components use CSS Modules with Sass. You can learn about its usage and design from the
[CSS Modules GitHub repository](https://github.com/css-modules/css-modules). TDS components derive CSS modules from
their respective **ComponentName.modules.scss** file. The following patterns are strongly encouraged:

- Use the `composes` property rather than SCSS `@extend` or comma-separated classes. Mixins are acceptable
- Use camelCase class names
- Use flexbox, but be aware of cross-browser limitations
- Components should make effective use of 'layout' components such as Box or Responsive, rather than styles

[Here is an example of a scss file that uses the `composes` property from CSS modules](https://github.com/telusdigital/tds-core/blob/309271bff529a690532b781e4b3dd26939642f37/src/components/Link/ButtonLink/ButtonLink.modules.scss).

#### Rendered DOM

From the `composes` example above:

```html
<!--
  the 'class' attribute contains the 'primary'
  and 'base' classes since 'primary' composes' base
-->
<a class="primary base" href="#">Find out how</a>
```

## Writing tests {#writing-tests}

Tests utilize Jest and Enzyme matchers. Tests are treated as a first-class citizen. Tests
should clearly outline the features and expected output for a component. For some inspiration, have a look at how
pre-existing TDS components' tests are written.

Use assertions that produce helpful error messages, [enzyme-matchers](https://github.com/blainekasten/enzyme-matchers) is useful for this.

Do:

```js
expect(myComponent).toHaveProp('someBoolean', true)
// => Expected myComponent to have the prop "someBoolean"
//    with the value of true, but it was false.
```

Do not:

```js
expect(myComponent.props().someBoolean).toBeTruthy()
// => Expected false to be truthy.
```

Always prefer "shallow" rendering, then "render", then "mount". Only "mount" if you are testing the lifecycle methods.

Use a snapshot test for components that do not have any logic and to increase confidence in the structure of the
component. Snapshot tests do not replace unit tests.
