### Minimal usage

A Chevron Link is a navigational element that should only be used as a standalone call to action.

By default, Chevron Links will be displayed in the `primary` variant.

```
<ChevronLink href="http://tds.telus.com">Go to Telus.com</ChevronLink>
```

### Usage criteria

- Chevron Links have a fixed font size of 1rem and it should not change.
- Due to the chevron's hover animation, provide ample whitespace so that it does not overlap with nearby elements.
- Do not place them inline with other text.
- They usually appear next to [Button Links](#linkbutton) as a secondary call to action.


Specify the variant to create a button for secondary actions.

```
<ChevronLink href="http://tds.telus.com" variant="secondary">Get great deals</ChevronLink>
```

### Placing Chevron Links on solid colours

Use the inverted Chevron Link on top of the solid TELUS purple.

```
const PurpleBlock = require('../../__docs__/PurpleBlock').default;

<PurpleBlock>
  <ChevronLink href="http://tds.telus.com" variant="inverted">Find out how</ChevronLink>
</PurpleBlock>
```

### Using Chevron Link for navigation in a multi-step operation

Chevron Link can be used as a "back" button by specifying the `direction`. These are not suitable for breadcrumb navigation due to the chevron's hover animation.

```
<ChevronLink href="http://tds.telus.com" direction="left">Plans</ChevronLink>
```
