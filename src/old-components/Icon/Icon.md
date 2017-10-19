## Available icons

```jsx { "props": { "className": "docs__simple-horizontal-spacing" } }
<div className="wrapper">
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

```jsx { "props": { "className": "docs__simple-horizontal-spacing" } }
<div className="wrapper">
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
<Text block size="medium">
  <div><Icon glyph="plus" variant="primary" /> Add a user</div>
  <div><Icon glyph="minus" variant="secondary" /> Remove a user</div>
</Text>
```

### Disabled

Indicates that an action is turned off.

```
<Text size="medium">
  <Icon glyph="spyglass" variant="disabled" /> Search for a phone
</Text>
```

### Error

Indicates a problem.

```
<Text size="medium">
  <Icon glyph="location" variant="error" /> Your location needs to be updated
</Text>
```

## Controlling alignment

Use the `fixedWidth` prop when aligning icons vertically.

```jsx
<Text block size="medium">
  <div><Icon glyph='hamburger' fixedWidth /> Close the menu</div>
  <div><Icon glyph='chevron' fixedWidth /> Account</div>
  <div><Icon glyph='chevron' fixedWidth /> Sign out</div>
</Text>
```

## Accessibility considerations

Icons can be either decorative or meaningful.

**Decorative icons** do not perform a role beyond visual aesthetics and should be hidden from screen readers using the
`aria-hidden` attribute. Usually, the information being communicated with the icon is also conveyed in another manner.

This example shows a decorative icon that is hidden from screen readers.

```
<Paragraph size="medium">
  <Icon glyph="location" aria-hidden="true" /> You are located in British Columbia.
</Paragraph>
```

**Meaningful icons** have meaning within the context of the page, which should be communicated to screen readers with the
`aria-label` attribute. Meaningful icons can also be interactive elements, which should be designated with
the `role` prop.

This example shows a meaningful icon that needs accessibility attributes. (View the code to see the props)

```
<Paragraph size="medium">
  Click the X to close. <Icon glyph="times" role="button" aria-label="Click here to close the dialog." />
</Paragraph>
```
