# Codebase overview

A description of the structure of the codebase, conventions being followed, and patterns.

## Contents

- [Tools](#tools)
- [Component structure &amp; standards](#standards)
- [Building components](#building-components)
  - [Creating a new component from scratch](#creating-component)
  - [React &amp; JSX patterns](#react-patterns)
  - [Styling components](#styling)
- [Writing test](#tests)

## Tools

The TDS codebase maintains a set of organisational and syntactical standards.
We utilize the following tools for the development, release, and distribution processes:

- [Styleguidist](https://react-styleguidist.js.org/): component props are parsed and converted
to documentation.
- [Rollup](https://rollupjs.org/): Rollup delivers a component package with tree-shaken 
methods, scoped CSS, 
- [ES2015+](https://github.com/lukehoban/es6features): throughout this codebase, we utilize 
JavaScript patterns such as ternary operators,
deconstructors, and spread operators
- [CSS Modules](https://github.com/css-modules/css-modules): facilitates the buildup of scoped 
CSS while maintaining the familiar interface of SCSS
- [Yarn](https://github.com/css-modules/css-modules): we chose Yarn as our node package 
manager for its speed and deep dependency version locking. It is used in our build pipelines
for deployment to npmjs.com

## Component structure &amp; standards {#structure}

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

Here you may notice some of our standards:

- Use PascalCase for all file names
- Avoid non-verbose filenames such as `index.jsx`
- Every component must include a set of unit tests and snapshot
- If a component requires custom styling, use CSS Modules and suffix your scss file with `.modules.scss`
- To include custom documentation with a component, use `<ComponentName>.md`

## Building components

Building React components for TDS involves a set of coding standards in order to maintain consistent syntax
and form across the codebase. Though the majority of syntax is automatically formatted with our linter rules and 
with the aid of Prettier (see [Developer Guide](./contributing/developer-guide.md) for setup), this guide covers
the more subjective rules we uphold.

### Creating new components from scratch {#creating-component}

When starting fresh, you can use the scaffolding script to generate a component directory structure:

```sh
yarn scaffold PriceLock
```

This will output a set of files in the [aforementioned structure](#structure).

### React &amp; JSX patterns {#react-patterns}

Though the following patterns are not strictly enforced, they are strongly encouraged:

#### General

- Prefer functional stateless components. Only create a class when you either need state or need lifecycle methods
- Prefer React state over "ref". Avoid storing components in state. Only store data in state
- Keep inline styles to a minimum. If using inline styles, create the styles object outside of the component's render
  method if possible. Creating the object in the render method will create a brand new object on every render
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
- Always use propTypes. Always use isRequired when the prop is necessary.
- Only use defaultProps when there is a sensible default. Its fine to not provide a default.
- Use PropTypes.oneOf when there are a fixed number of values for a prop.
- Establish prop naming conventions across components. Ex: use "a11y..." as prop names for accessibility properties.
- Prefer semantic naming of props over pre-existing attributes that already have meaning in HTML or React,
such as "style", "title" or "name".
- If a parent component does not use props and only passes them down to its children, pass components as props instead.

#### Annotated React example

```jsx
import React from 'react'
import PropTypes from 'prop-types'
import styles from './ButtonLink.modules.scss'


                    // Destructure props in function signature
                    // and use `rest` props
const ButtonLink = ({variant, href, children, ...rest}) => {

    // spread `rest` props at the front of the component
    // to be overridable by latter props
  return <a {...rest} href={href} className={styles[variant]}>{children}</a>
}

// Always use `propTypes`
ButtonLink.propTypes = {
  /**
   * Documentation for `variant` prop
   */
                    // use `PropTypes.oneOf` when there are a
                    // fixed number of values for a prop
  variant: PropTypes.oneOf(['primary', 'secondary', 'inverted']),
  /**
   * Documentation for `href` prop 
   */
  href: PropTypes.string,
  /**
   * Documentation for `children` prop
   */
                    // use `isRequired` when prop is necessary
  children: PropTypes.string.isRequired
}

ButtonLink.defaultProps = {
          // add sensible default
  variant: 'primary',
        // default prop not needed, so null/undefined can be used
  href: null
}
```

### Styling components {#styling}

TDS components use CSS Modules with Sass. You can learn about its usage and design from the 
[CSS Modules GitHub repository](https://github.com/css-modules/css-modules). TDS components derive CSS modules from 
their respective **ComponentName.modules.scss** file. The following patterns are strongly encouraged:

- Use the `composes` property rather than SCSS `@extend` or comma-separated classes. Mixins are acceptable
- Use camelCase class names
- Use flexbox, but be aware of cross-browser limitations
- Avoid styling html tags, ids, or other attributes. Only apply styles based on class name
- Avoid use of the `float` property
- Avoid external margins: a component's boundary ends at its border. Component should not have preconceptions
over how a page is laid out, in order to make their placement flexible and highly reusable
- Keep nesting to a single level. At build time, all CSS Module class names are scoped
- Components should make effective use of 'layout' components such as Box or Responsive, rather than styles

#### Annotated CSS Modules example

**ButtonLink.modules.scss**

```scss
@import '../../../scss/settings/colours';

// reusable styles composed in subsequent 'variant' classes
.base {
  text-decoration: none;
}

.primary {
            // the `.base` class will be used whenever `.primary` is used
  composes: base;

  &:link,
  &:visited {
          // tds colour variable imported above
    color: $button-text-color;
  }

  &:hover {
    color: $primary-bg-color;
  }
}
```

**ButtonLink.jsx**

```jsx
// ... other imports

      // `styles` is a JavaScript object containing all class names as keys
import styles from './ButtonLink.modules.scss'

const ButtonLink = ({variant, href, children, ...rest}) => (
  <a
    {...rest}
    href={href}

              {/* the `variant` prop contains a string
              such as 'primary' to be passed
              as a key into `styles` */}
    className={styles[variant]}>
      {children}
  </a>
)

// ... propTypes
```

**App.js**

```jsx
import { ButtonLink } from '@telusdigital/tds'

              // the component is used in a typical manner
export default <ButtonLink variant="primary">Find out how</ButtonLink>
```

**Rendered DOM**

```html
<!-- the 'class' attribute contains the 'primary'
and 'base' classes since 'primary' composes' base -->
<a class="primary base" href="#">Find out how</a>
```

### Writing tests {#tests}

Tests utilise [Jest](https://facebook.github.io/jest/) and 
[Enzyme matchers](https://github.com/blainekasten/enzyme-matchers). Tests are treated as a first-class citizen. Tests
should clearly outline the features and expected output for a component. For some inspiration, have a look at how
pre-existing TDS components' tests are written.

Use assertions that produce helpful error messages.
enzyme-matchers is useful for this.

Do:

```js
expect(myComponent).toHaveProp("someBoolean", true); 
      // => Expected myComponent to have the prop "someBoolean"
      //    with the value of true, but it was false.
```

Do not:

```js
expect(myComponent.props().someBoolean).toBeTruthy();
      // => Expected false to be truthy.
```

Always prefer "shallow" rendering, then "render", then "mount". Only "mount" if you are testing the lifecycle methods.

Use a snapshot test for components that do not have any logic and to increase confidence in the structure of the
component. Snapshot tests do not replace unit tests.
