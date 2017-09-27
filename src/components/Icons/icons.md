### Available icons

```
<div className="docs--horizontal-spacing">
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
</div>
```

### Modifying colour

Use the `variant` prop to alter the icon's colour. Each variant has semantic meaning.

```
<div className="docs--horizontal-spacing">
  <DecorativeIcon symbol="checkmark" variant="primary" />
  <DecorativeIcon symbol="times" variant="secondary" />
  <DecorativeIcon symbol="exclamationPointCircle" variant="error" />
</div>
```

### Adjusting size

Use the `size` prop to adjust the icon's size.

```
<div className="docs--horizontal-spacing">
  <DecorativeIcon symbol="exclamationPointCircle" size={16} />
  <DecorativeIcon symbol="exclamationPointCircle" size={24} />
</div>
```
