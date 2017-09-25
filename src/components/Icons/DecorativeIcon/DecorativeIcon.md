### Available Icons

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
  <DecorativeIcon symbol="incomplete" />
  <DecorativeIcon symbol="location" />
  <DecorativeIcon symbol="minus" />
  <DecorativeIcon symbol="plus" />
  <DecorativeIcon symbol="questionMarkCircle" />
  <DecorativeIcon symbol="spyglass" />
  <DecorativeIcon symbol="times" />
</div>
```

### Modifying color

Use the `variant` prop to alter the icon's color. Each variant has semantic meaning.

```
<div className="docs--horizontal-spacing">
  <DecorativeIcon symbol="checkmark" variant="primary" />
  <DecorativeIcon symbol="incomplete" variant="secondary" />
  <DecorativeIcon symbol="exclamationPointCircle" variant="error" />
</div>
```

### Adjusting size

Use the `size` prop to adjust the icon's size.

```
<div className="docs--horizontal-spacing">
  <DecorativeIcon symbol="chevron" variant="primary" size={16} />
  <DecorativeIcon symbol="exclamationPointCircle" variant="error" size={24} />
</div>
```
