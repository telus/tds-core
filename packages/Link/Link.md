### Minimal usage

```jsx
<Link href="#">Go to the TDS homepage</Link>
```

### Usage criteria

- Links inherit the font size of surrounding text.
- Their colour is either shuttle grey or white.

### Inverted

```jsx { "props": { "className": "docs_purple-block" } }
<Paragraph invert>
  Call Screen requires a subscription.{' '}
  <Link href="#" invert>
    Log in
  </Link>{' '}
  to your account and make sure you are subscribed.
</Paragraph>
```

### Using with React Router Links

When using Link with React Router, you must pass in the React Router Link component as a prop. Our intention is to have developers supply the React Router Link component whether they are on version 3 of React Router, or are using the latest React Router DOM package on version 4. This way, we avoid deep dependency conflicts.

It is recommended to set up a component wrapper in your project to avoid repetition, like so:

**LinkWrapper.jsx**

```jsx noeditor static
import React from 'react'

// React Router version 3
import { Link as ReactRouterLink } from 'react-router'

// React Router version 4
// import { Link as ReactRouterLink } from 'react-router-dom'

import TdsLink from '@tds/core-link'

// If you're importing from @telus/tds, write this as:
// import { Link as TdsLink } from '@telus/tds';

const LinkWrapper = ({ children, ...rest }) => (
  <TdsLink {...rest} reactRouterLinkComponent={rest.to ? ReactRouterLink : undefined}>
    {children}
  </TdsLink>
)

export default LinkWrapper
```

**App.js**

```js noeditor static
import Link from './LinkWrapper'

const MyApp = () => (
  <main>
    ...
    <Link to="/more">Read More</Link>
    <Link href="https://www.telus.com/">Telus Website</Link>
  </main>
)
```

This way, you can output normal anchors or react router links using a single component.
