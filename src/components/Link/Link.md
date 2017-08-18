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

When using Link with React Router, you must pass in the React Router Link component as a prop. Our intention is to have developers supply the React Router Link component whether they are on version 3 of React Router, or are using the latest React Router DOM package on version 4. This way, we avoid deep dependency conflicts.

It is recommended to set up a component wrapper in your project to avoid repetition, like so:

**LinkWrapper.jsx (React Router version 3)**
```jsx
import React from 'react'
import { Link as ReactRouterLink } from 'react-router'
import { Link as TdsLink } from '@telusdigital/tds')

const Link = ({ children, ...rest }) => (
  <TdsLink
    {..rest}
    reactRouterLinkComponent={rest.to ? ReactRouterLink : undefined}>
    {children}
  </TdsLink>
)

export default Link
```

**LinkWrapper.jsx (React Router DOM version 4)**
```jsx
import React from 'react'
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as TdsLink } from '@telusdigital/tds'

// Same component wrapper as above
```

**app.js**
```jsx
import Link from 'LinkWrapper'

const MyApp = () => (
  <main>
    ...
    <Link to="/more">Read More</Link>
    <Link href="https://www.telus.com/">Telus Website</Link>
  </main>
)
```

This way, you can output normal anchors or react router links using a single component.
