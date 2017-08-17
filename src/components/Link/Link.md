### Minimal Usage

```
<Link href="https://www.telus.com">Go to TELUS.com</Link>
```

### Usage Criteria

- Links inherit the font size of surrounding text.
- Their colour is either shuttle grey or white.

### Inverted

```
const PurpleBlock = require('../__docs__/PurpleBlock').default;

<PurpleBlock>
  <Link href="https://www.telus.com" invert>Go to TELUS.com</Link>
</PurpleBlock>
```

### Using with React Router Links

When using Link with React Router, you must pass in the React Router Link component as a prop. It is recommended to set up a component wrapper in your project to avoid repetition, like so:

**linkwrapper.jsx**
```jsx
const React = require('react')
const ReactRouterLinkV3 = require('react-router').Link
// const ReactRouterLinkV4 = require('react-router-dom').Link
const Link = require('@telusdigital/tds').Link

const ReactRouterLink = ReactRouterLinkV3

const LinkWrapper = ({ children, ...rest }) => (
  React.createElement(
    Link,
    {
      reactRouterLinkComponent: rest.to ? ReactRouterLink : undefined,
      ...rest
    }
    children
  )
)

export default LinkWrapper
```

**app.js**
```jsx
const Link = require('linkwrapper')

const MyApp = () => (
  <main>
    ...
    <Link to="/more">Read More</Link>
    <Link href="https://www.telus.com/">Telus Website</Link>
  </main>
)
```

This way, you can output normal anchors or react router links using a single component.
