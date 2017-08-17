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

### React Router Links (for SPAs)

When using Link with React Router, you must pass in the React Router Link component as a prop.
