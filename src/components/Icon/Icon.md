### Available Icons

```
<div className="docs--horizontal-spacing">
  <Icon glyph="caretDown" />
  <Icon glyph="caretUp" />
  <Icon glyph="checkmark" />
  <Icon glyph="leftChevron" />
  <Icon glyph="chevron" />
  <Icon glyph="exclamationPointCircle" />
  <Icon glyph="expander" />
  <Icon glyph="hamburger" />
  <Icon glyph="incomplete" />
  <Icon glyph="location" />
  <Icon glyph="minus" />
  <Icon glyph="plus" />
  <Icon glyph="questionMarkCircle" />
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
  <Icon glyph="exclamationPointCircle" variant="error" />
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

#### Decorative icons

Decorative icons do not perform a role beyond visual aesthetics and should be hidden from screen readers using the
`aria-hidden` attribute. Usually, the information being communicated with the icon is also conveyed in another manner.

This example shows a decorative icon that is hidden from screen readers. The Icon component sets `aria-hidden` to `true` by default; you can inspect the element and see.

```
<Paragraph>
  <Icon glyph="location" /> You are located in British Columbia.
</Paragraph>
```

#### Meaningful icons

Meaningful icons have meaning within the context of the page, which should be communicated to screen readers with the
`aria-label` attribute. Meaningful icons can also be interactive elements, which should be designated with
the `role` prop.

This example shows a meaningful icon that represents an action. By applying `aria-label` to the parent `<button>`, screen readers would be able to interpret the button's intention, and the user can use their keyboard to target the button and take that action. The icon itself can remain hidden from screen readers as the button provides all meaningful information.

```
<Paragraph>
  <button aria-label="search" style={{appearance: 'none', background: 'none', border: 0, cursor: 'pointer'}} type="submit"><Icon glyph="spyglass" /></button>
</Paragraph>
```
