### Minimal Usage

The Heading component outputs an `h1` tag by default.

```
<Heading>Great Deals</Heading>
```

#### Usage criteria

- Be mindful of SEO and accessibility.
- Be sure to organise headers in a nested order: h1, then h2, then h3.
- Do **not** skip levels: h1, then h3.
- For hero overlays or promo blocks, use [Display Heading](#displayheading).

### Defining level

```
<div>
  <Heading level="h1">Great Deals</Heading>
  <Heading level="h2">Great Deals</Heading>
  <Heading level="h3">Great Deals</Heading>
  <Heading level="h4">Great Deals</Heading>
</div>
```

### Invert on dark colours

```
const PurpleBlock = require('../../__docs__/PurpleBlock').default;

<PurpleBlock>
  <Heading invert>Great Deals</Heading>
</PurpleBlock>
```
