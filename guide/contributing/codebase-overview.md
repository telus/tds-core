!INCLUDE "../tds-sunset.html"

# Codebase overview

A description of the structure of the codebase, conventions being followed, and patterns.

## Contents

- [Tools](#tools)
- [Component structure and standards](#component-structure-and-standards)
- [Building components](#building-components)
  - [Creating new components from scratch](#creating-new-components-from-scratch)
  - [React & JSX practices](#react--jsx-practices)
  - [Code style and conventions](#code-style-and-conventions)
  - [Styling components](#styling-components)
- [Writing tests](#writing-tests)

## Tools

The TDS codebase maintains a set of organizational and syntactical standards.
We utilize the following tools for the development, release, and distribution processes:

- [Styleguidist](https://react-styleguidist.js.org/): isolated React component development environment with a
  living style guide
- [Rollup](https://rollupjs.org/): Rollup is a JavaScript module bundler, similar to webpack, built with ES2015 modules
  in mind and optimized for libraries
- [ES2015+](https://github.com/lukehoban/es6features): We write all JavaScript as ES2015 modules, generally following
  the comprehensive AirBnb style guides for JavaScript and React, and then transpile it for the browser with Babel
- [Jest](https://facebook.github.io/jest/) and [Enzyme](https://github.com/blainekasten/enzyme-matchers):
  we use jest as our test runner and enzyme to test our React components
- [Nightwatch](https://nightwatchjs.org/): We use Nightwatch to perform automated visual regression testing on our components
- Linters and Prettier: standardize code style and format
- [styled-components](https://www.styled-components.com/): facilitates the use of CSS-In-JS
- [NPM](https://www.npmjs.com/): we use NPM as our node package manager
- [Openshift](https://www.openshift.com/) and [Docker](https://www.docker.com/): the CI pipeline is largely
  based on the TELUS isomorphic starter kit pipeline, using Docker as the build artifact
- [Lerna](https://lernajs.io/): A tool for managing JavaScript projects with multiple packages

## Component structure and standards

All TDS components have a common directory structure and set of standards. Where you have a
component named `ButtonLink`, the files are organized like this:

```bash
    /packages/
    │
    └─── ButtonLink
        │  ButtonLink.md
        │  ButtonLink.jsx
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
- To include custom documentation with a component, use `<ComponentName>.md`
- To include documentation for the npm registry page, use `README.md`

## Building components

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

### React & JSX practices

Though the following practices are not strictly enforced, they are strongly encouraged:

### Code style and conventions

Here are some guidelines to consider when writing code.

#### General

- When creating components, consider this order of preference:
  - Functional components, optionally with hooks and effects
  - Pure components
  - Class components
- Accessibility and responsiveness is a must for every component
- Provide a flexible and predictable interface via props
- Prefer containment over specialization. See [React docs on composition vs inheritance][react-composition]
- Components should only be aware of themselves or their direct children
- Reuse component logic and shared assets as much as possible
  - Give particular consideration to [@tds/core-colours][tds-colours], [@tds/shared-styles][tds-styles], [@tds/shared-typography][tds-type], and other core components

#### React

- **DO** make components self-contained. A component should not know anything about other components, except for its direct children
- **DO** provide a clear, prop-based API to the component. Avoid allowing consumers to customize styles by passing in `className` or `style` as this is not a clear API. Use a prop with known values instead
- **DO** use React component state for ephemeral UI state within components, while avoiding redux or other application state containers
- **DO** use dependencies when needed, such as open source React components so long as they do not bloat the component final component build
- **DO** use tds-core components and other tds-community components judiciously
- **DO** make components compatible with React 15 or greater
- **DO** use [ponyfills](https://github.com/sindresorhus/ponyfill) when using native JavaScript APIs with low browser support. The alternative is to require that any consumer of your component include a global polyfill in their app, making your component less self-contained, thought this may be preferable in some cases
- **DO** forward `rest` props onto the primary HTML element of the component so that consumers can still attach global HTML attributes such as `id`.
- **DON'T** hardcode content without giving consumers the ability to override it with other copy or languages

#### React props

- De-structure props in the function signature to make it easy to see all of the used props
- Always accept "rest" props (except for className and style) to allow for common global HTML attributes such as `id`.
  Spread these onto the main HTML element of the component before other props. This is to prevent accidental or
  purposeful overriding. `className` and `style` are also not available as a prop interface in most components because
  TDS strictly enforces the TELUS brand through styles, and as such there should be no potential inaccurate brand
  representations
- If a parent component does not use props and only passes them down to its children, pass components as props

#### Styling (styled-components)

- **DO** use object notation with styled-components
- **DO** name your styled component starting with the word "Styled" (e.g. `StyledDiv`)
- **DON'T** specify external margins. Components must be able to fit into various layouts
- **DON'T** use HTML elements or IDs as CSS selectors
- **DON'T** hardcode pixel values unless an absolute pixel value is required. Use tds-core components or relative values such as rem instead
- **DON'T** style components directly using the `style` prop

#### Utility modules

A utility module is a shared package that can provide common functionality to multiple components. Utility modules are
not published to NPM, but are versioned in order for lerna to know it should upgrade components consuming one that has
been modified. For an example of a utility module, look at [util-generate-id][tds-util-example] on tds-core.

- **DO** add utility modules to the `/shared` directory with its own `package.json` file
- **DO** configure `private: true` within a utility module's `package.json`
- **DO** add utility modules as a **devDependency** to components that consume one
- **DON'T** create utility modules that cannot be reused in any other component

[Here is an example of a React component that follows the above patterns](https://github.com/telus/tds-core/blob/6c5383d95e7b92d2c313b8f2f6ccd276b5a38976/packages/ButtonLink/ButtonLink.jsx).

### Styling components

TDS components use styled-components. You can learn about its usage and design from the
[styled-components documentation site](https://www.styled-components.com/). When it comes to styled-components, the following patterns are strongly encouraged:

- Use object notation whenever possible
- Use PascalCase component names
- Deconstruct the props object when using them in a Styled Component
  - `const StyledDiv = styled.div(({propA, propB}) => ({color: propA, height: propB}))`
- Components should make effective use of 'layout' components such as Box or FlexGrid, rather than styles

See the [CSS Reference Architecture documentation](https://github.com/telus/reference-architecture/blob/master/development/css.md#how) for the most up-to-date organization-wide information.

#### Rendered DOM

```html
<!-- the 'class' attribute contains a hash generated by styled-components. This prevents class collision. -->
<a class="sc_hash" href="#">Find out how</a>
```

## Writing tests

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

Always prefer "shallow" rendering, then "render", then "mount". Only "mount" if you are testing the lifecycle methods. Using "render" is required for snapshot testing styled components because it prints all auto-generated CSS classes.

Use a snapshot test for components that do not have any logic and to increase confidence in the structure of the
component. Snapshot tests do not replace unit tests.

[react-composition]: https://reactjs.org/docs/composition-vs-inheritance.html
[tds-colours]: https://tds.telus.com/components/index.html#colours
[tds-styles]: https://www.npmjs.com/package/@tds/shared-styles
[tds-type]: https://www.npmjs.com/package/@tds/shared-typography
