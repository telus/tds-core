<span class="docs--badge__deprecated">deprecated</span>

**The button CSS classes are deprecated and should not be used. Use the [Button](#button) component instead.**

## Overview

---

A button is a graphical control element which triggers an action. The button houses a label in its center which describes the action.

### Behavior

**Colour Change**

The shape colour of normal and hover fade between one another on hover of the button.

### Recommendations

* Use buttons to move though a transaction.
* Aim to use only one button per page.
* Avoid excessively long button text
* Make sure the button text describes an action

## Primary Button

---

A button that's used for primary actions. The `button` and `button--primary` blocks define its default appearance. In general, button classes can be applied to both `<button>` and `<a>` tags.

<button class="button button--primary">
  Submit form
</button>

```html
<button class="button button--primary">
  Submit form
</button>
```

### Outlined Primary button

<button class="button button--primary button--outlined">
  Submit form
</button>

```html
<button class="button button--primary button--outlined">
  Submit form
</button>
```

### Inverted Primary button

<div class="example example--inverted example--primary">
    <button class="button button--primary button--inverted">
        Submit form
    </button>
</div>

```html
<button class="button button--primary button--inverted">
    Submit form
</button>
```

### Inverted Outlined Primary button

<div class="example example--inverted example--primary">
    <button class="button button--primary button--inverted button--outlined">
        Submit form
    </button>
</div>

```html
<button class="button button--primary button--inverted button--outlined">
    Submit form
</button>
```


## Secondary Button

---

<button class="button button--secondary">
    Submit Form
</button>

```html
<button class="button button--secondary">
    Submit Form
</button>
```

### Outlined secondary button

<button class="button button--secondary button--outlined">
    Submit form
</button>

```html
<button class="button button--secondary button--outlined">
    Submit form
</button>
```

### Inverted Secondary button

<div class="example example--inverted example--secondary">
    <button class="button button--secondary button--inverted">
        Submit form
    </button>
</div>

```html
<button class="button button--secondary button--inverted">
    Submit form
</button>
```

### Inverted Outlined Secondary button

<div class="example example--inverted example--secondary">
    <button class="button button--secondary button--inverted button--outlined">
        Submit form
    </button>
</div>

```html
<button class="button button--secondary button--inverted button--outlined">
    Submit form
</button>
```


## Anchor buttons

Button classes can also be applied to `<a>` tags.

<a class="button button--primary" role="button" href="#">Anchor button</a>

<a class="button button--primary button--outlined" role="button" href="#">Anchor Outlined button</a>
<div class="example example--inverted example--primary">
  <a class="button button--primary button--inverted button--outlined" role="button" href="#">Anchor Inverted button</a>
</div>

```html
<a class="button button--primary" role="button" href="#">
    Anchor button
</a>

<a class="button button--primary button--outlined" role="button" href="#">
  Anchor Outlined button
</a>

<div class="example example--inverted example--primary">
  <a class="button button--primary button--inverted button--outlined" role="button" href="#">Anchor Inverted button</a>
</div>
```

_Note_: The mobile button width is fluid and stretches to cover all columns currently in view.


## Links

---

The `button--link` class creates an element which behaves like a button, but looks like a link.

<div>
    <a class="button button--secondary button--link">Link button</a>
</div>

```html
<a class="button button--secondary button--link" role="button" href="#">
    A link button
</a>
```

## Spacing

---

Buttons will occupy 100% width of their parent's at the small viewport and below. In other viewports, they'll display inline. Link buttons are separated from buttons by 40 pixels.

<div>
    <button class="button button--secondary">Button</button>
    <a class="button button--secondary button--link">Link button</a>
</div>
<div>
    <button class="button button--primary">Button</button>
    <a class="button button--primary button--link">Link button</a>
</div>
