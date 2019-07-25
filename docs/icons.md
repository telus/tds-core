### Available icons

```jsx
<Box inline between={3}>
  <DecorativeIcon symbol="caretDown" />
  <DecorativeIcon symbol="caretUp" />
  <DecorativeIcon symbol="checkmark" />
  <DecorativeIcon symbol="leftChevron" />
  <DecorativeIcon symbol="chevron" />
  <DecorativeIcon symbol="exclamationPointCircle" />
  <DecorativeIcon symbol="expander" />
  <DecorativeIcon symbol="hamburger" />
  <DecorativeIcon symbol="location" />
  <DecorativeIcon symbol="minus" />
  <DecorativeIcon symbol="plus" />
  <DecorativeIcon symbol="questionMarkCircle" />
  <DecorativeIcon symbol="spyglass" />
  <DecorativeIcon symbol="times" />
</Box>
```

### Modifying colour

Use the `variant` prop to alter the icon's colour. Each variant has semantic meaning.

```jsx
<Box inline between={3}>
  <DecorativeIcon symbol="checkmark" variant="primary" />
  <DecorativeIcon symbol="times" variant="secondary" />
  <DecorativeIcon symbol="exclamationPointCircle" variant="error" />
</Box>
```

### Adjusting size

Use the `size` prop to adjust the icon's size.

#### Usage Criteria

- Use the following sizes when applicable:
  - 16px: Chevrons/Carets (visually 8x12px); Check (visually 14x14px) and Times (visually 12x12px) are in 16px containers
  - 20px: For subnav with text (ie. My TELUS)/ Notification icons
  - 24px: Benefit List icons
  - 32px: For a list of benefits that has five or more items; cannot utilize benefit list and needs to span full width. See design example in Invision, linked below
  - 48px: For service callouts; use between 3-5 icons in the same section
- General usage guideline is to refrain from using more than 2 sizes on one UX flow for consistency
- Icons used within the same section needs to be the same size
- Exceptions can be made if a page also requires notifications
- If the icons are too similar in size (ie. 20px + 24px) it is recommended to stick to one size

Design Example: <https://telus.invisionapp.com/d/#/console/13491097/373446256/preview>

```jsx
<Box inline between={3}>
  <DecorativeIcon symbol="exclamationPointCircle" size={16} />
  <DecorativeIcon symbol="exclamationPointCircle" size={20} />
  <DecorativeIcon symbol="exclamationPointCircle" size={24} />
  <DecorativeIcon symbol="exclamationPointCircle" size={32} />
  <DecorativeIcon symbol="exclamationPointCircle" size={48} />
</Box>
```
