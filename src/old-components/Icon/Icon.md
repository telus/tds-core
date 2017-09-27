## Available icons

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

## Instructive icons

By default, all icons will inherit the color of the text around them, except for "instructive" icons. Instructive icons
have special meaning, and are pre-colored.

```
<div className="docs--horizontal-spacing">
  <Icon glyph="checkmark" />
  <Icon glyph="exclamation-point-circle" />
  <Icon glyph="incomplete" />
</div>
```

## Modifying colour

Use the `variant` prop to alter the icon's color. Each variant has semantic meaning.


### Primary and secondary

Indicates a primary or secondary action.

```
<div>
  <div><Icon glyph="plus" variant="primary" /> Add a user</div>
  <div><Icon glyph="minus" variant="secondary" /> Remove a user</div>
</div>
```

### Disabled

Indicates that an action is turned off.

```
<div>
  <Icon glyph="spyglass" variant="disabled" /> Search for a phone
</div>
```

### Error

Indicates a problem.

```
<div>
  <Icon glyph="location" variant="error" /> Your location needs to be updated
</div>
```

## Controlling alignment

Use the `fixedWidth` prop when aligning icons vertically.

```
<div className="docs--layout-vertically">
  <span><Icon glyph='hamburger' fixedWidth /> Close the menu</span>
  <span><Icon glyph='chevron' fixedWidth /> Account</span>
  <span><Icon glyph='chevron' fixedWidth /> Sign out</span>
</div>
```

## Accessibility considerations

Icons can be either decorative or meaningful.

**Decorative icons** do not perform a role beyond visual aesthetics and should be hidden from screen readers using the
`aria-hidden` attribute. Usually, the information being communicated with the icon is also conveyed in another manner.

This example shows a decorative icon that is hidden from screen readers.

```
<p>
  <Icon glyph="location" aria-hidden="true" /> You are located in British Columbia.
</p>
```

**Meaningful icons** have meaning within the context of the page, which should be communicated to screen readers with the
`aria-label` attribute. Meaningful icons can also be interactive elements, which should be designated with
the `role` prop.

This example shows a meaningful icon that needs accessibility attributes. (View the code to see the props)

```
<p>
  Click the X to close. <Icon glyph="times" role="button" aria-label="Click here to close the dialog." />
</p>
```
