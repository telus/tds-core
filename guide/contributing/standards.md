# Codebase overview and standards

When it comes to writing code and documentation we have internal standards that help keep everything consistent and highly maintainable.

## Documentation standards

[Documenting components](#documenting-components)

## Code standards

At a high level, all components are written in ECMAScript2015+ and React using JSX syntax. Component documentation is powered by [react-styleguidist](react-styleguidist.js.org) and [jest](https://facebook.github.io/jest/) is the testing framework. We broadly follow the comprehensive AirBnb style guides for [JavaScript](https://github.com/airbnb/javascript) and [React](https://github.com/airbnb/javascript/tree/master/react).

Currently, our styling language is [CSS Modules](https://github.com/css-modules/css-modules). This may likely change in the future.

Writing components for a widely-used component library has additional considerations than writing components for an application. Extra care is necessary to ensure safety and reusability. Make sure you read the section on [Component Library Considerations](#component-library-considerations).

### JavaScript

* Always use ES2015+ syntax.

### Basic React

* Name the component file, style file, and test file using the name of the component in PascalCase. Avoid using "index.js" as it is hard to use an IDE to search for a component when everything is named the same. (Ex: MyComponent.jsx, MyComponent.scss, and MyComponent.spec.jsx)
* Prefer functional stateless components. Only create a class when you either need state or need lifecycle methods.
* Prefer React state over "ref". Avoid storing components in state. Only store data in state.
* Keep inline styles to a minimum. If using inline styles, create the styles object outside of the component's render method if possible. Creating the object in the render method will create a brand new object on every render.

### Props

* De-structure props in the function signature to make it easy to see all of the used props.
* Always accept `rest` props (except for `className` and `style`) to allow for common global HTML attributes such as `id`. Spread these onto the main HTML element of the component _before_ other props. This is to prevent accidental or purposeful overriding.
* Always use propTypes. Always use isRequired when the prop is necessary.
* Only use defaultProps when there is a sensible default. Its fine to not provide a default.
* Use PropTypes.oneOf when there are a fixed number of values for a prop.
* Establish prop naming conventions across components. Ex: use "a11y..." as prop names for accessibility properties.
* Don't name props after attributes that already have meaning in HTML or React, such as "style", "title" or "name".
* If a parent component does not use props and only passes them down to its children, pass components as props instead.

Props de-structuring example:

**Do**
const MyLink = ({children, link, className, style, ...props}) => (
<a {...props} href={link}>children</a>
)

**Do not**
const MyLink = ({children, link, ...props}) => (
<a href={link} {...props}>children</a>
)

### Component Library Considerations

* Do not accept additional class names or styles as props (`className` or `style` props). Instead, provide a prop to customize the appearance.
* Always include accessibility attributes when appropriate.
* In general, a component should not know anything about other components. It can only control itself and any direct children.
* Do not give components external margins.
* Prefer `children` for nested text or components.
* Avoid letting components touch globals such as document or window. If that is necessary, consider a HOC or letting the app pass in a prop to do that.
* Avoid using React.cloneElement as it can get confusing as to what is happening.
* React's context can be helpful in communicating with deeply nested children, but use sparingly. Consider using a library to abstract it away too. (react-broadcast)
* Keep dependencies to an absolute minimum. Keep application responsibilities out of the design system. (CMS, application state, APIs, etc)
* When changing props, always deprecate a prop first. Avoid breaking changes. Same for a component name.
* Use polyfills when appropriate to ensure features used will be available in a wide range of browsers.

### Styles

* Always use component local styles
* Avoid use of float
* Avoid hard coding pixels aka "magic numbers". Everything should be based on rem or em or should be a derived values
* Responsive by default
* Avoid styling html tags directly. Avoid styling based on id or other properties. Only apply styles based on class name
* Use flexbox, but be aware of IE11 bugs. Test in IE11

### SCSS & CSS Modules

* Prefer mixins and `composes` over extending classes
* Keep nesting to a minimum. 2 levels max
* For variations, use a different class name to represent each variation that `composes` a base class

## Documenting components

* Write in complete sentences, using plain language
* Avoid jargon
* Avoid overly specific or "React-y" phrases like "It renders its children prop"
* Be brief, but complete

### Component comment docs

* Use the component declaration comment for a short (1 to 2 sentence) description of what the component is. Not what it does
* Use prop type comments on all props. Be consistent across components. Write in complete sentences here, with punctuation
* Each component must be accompanied by an example/docs file. Name it the same as the component (something like MyComponent.docs.md). Do not name it README.md as that is hard to search for with an IDE
* Use prop type annotations appropriately (`@deprecated`, `@since,` etc)

### Example file

* Start with the minimal usage of the component, passing in only required props.
* Add additional text to add more context as often as needed
* Include additional examples for the optional props. You don't necessarily need an example for each optional prop or value.
* When a component is interactive, provide an example that lets the documentation reader interact with it. Tell the reader what to do and what to expect.
* Examples should look "real". Avoid lorum ipsum. Use real looking data.
* Use "badges" to denote the version at which components where changed or added. Badges can go anywhere.
* Provide explicit guidelines on when to use or when not to use the component or specific props
* Call out when accessibility props are necessary
* Use the shorthand for boolean props. (Ex: `<MyComponent someBool />`. not `<MyComponent someBool={true} />`)
