### Minimal usage

A Chevron Link is a navigational element that should only be used as a standalone call to action.

By default, Chevron Links will be displayed in the `primary` variant.

```
<ChevronLink href="#">Go to the TDS homepage</ChevronLink>
```

### Usage criteria

- Chevron Links have a fixed font size of 1rem and it should not change.
- Due to the chevron's hover animation, provide ample whitespace so that it does not overlap with nearby elements.
- Do not place them within other paragraph text.
- They can appear below or next to [Button Links](#linkbutton) as a secondary call to action.


Specify the variant to create a button for secondary actions.

```
<ChevronLink href="#" variant="secondary">Get great deals</ChevronLink>
```

### Placing Chevron Links on solid colours

Use the inverted Chevron Link on top of any solid dark colour such as TELUS purple.

```jsx { "props": { "className": "docs_purple-block" } }
<div>
  <ChevronLink href="#" variant="inverted">Find out how</ChevronLink>
</div>
```

### Using Chevron Link for navigation in a multi-step operation

Chevron Link can be used as a "back" button by specifying the `direction`. These are not suitable for breadcrumb navigation due to the chevron's hover animation.

```
<ChevronLink href="#" direction="left">Back to your plans</ChevronLink>
```
