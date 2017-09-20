### Available Icons

```
<div className="docs--horizontal-spacing">
  <Icon glyph="caret-down" />
  <Icon glyph="caret-up" />
  <Icon glyph="checkmark" />
  <Icon glyph="left-chevron" />
  <Icon glyph="chevron" />
  <Icon glyph="exclamation-point-circle" />
  <Icon glyph="expander" />
  <Icon glyph="hamburger" />
  <Icon glyph="incomplete" />
  <Icon glyph="location" />
  <Icon glyph="minus" />
  <Icon glyph="plus" />
  <Icon glyph="question-mark-circle" />
  <Icon glyph="spyglass" />
  <Icon glyph="times" />
</div>
```

### Modifying color

Use the `variant` prop to alter the icon's color. Each variant has semantic meaning.

```
<div className="docs--horizontal-spacing">
  <Icon glyph="checkmark" variant="primary" />
  <Icon glyph="incomplete" variant="secondary" />
  <Icon glyph="exclamation-point-circle" variant="error" />
</div>
```

#### Primary and secondary

Indicates a primary or secondary action.

```
<div>
  <div><Icon glyph="plus" variant="primary" /> Add a user</div>
  <div><Icon glyph="minus" variant="secondary" /> Remove a user</div>
</div>
```

#### Error

Indicates a problem.

```
<div>
  <Icon glyph="location" variant="error" /> Your location needs to be updated
</div>
```

### Accessibility considerations

Icons can be either decorative or meaningful.

**Decorative icons** do not perform a role beyond visual aesthetics and should be hidden from screen readers using the
`aria-hidden` attribute. Usually, the information being communicated with the icon is also conveyed in another manner.

This example shows a decorative icon that is hidden from screen readers. The Icon component sets `aria-hidden` to `true` by default; you can inspect the element and see.

```
<Paragraph>
  <Icon glyph="location" /> You are located in British Columbia.
</Paragraph>
```

**Meaningful icons** have meaning within the context of the page, which should be communicated to screen readers with the
`aria-label` attribute. Meaningful icons can also be interactive elements, which should be designated with
the `role` prop.

This example shows a meaningful icon that needs accessibility attributes.

```
<Paragraph>
  <button style={{appearance: 'none', background: 'none', border: 0, cursor: 'pointer'}} type="submit"><Icon glyph="spyglass" label="search" /></button>
</Paragraph>
```
