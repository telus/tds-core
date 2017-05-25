---
title: Buttons
template: doc.jade
---

* [Overview](#overview)
* [Primary Button](#primary-button)
* [Secondary Button](#secondary-button)
* [Disabled state](#disabled-state)
* [Links](#links)
* [Spacing](#spacing)


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

<button class="tds-button tds-button--primary">Submit form</button>

```html
<button class="tds-button tds-button--primary">
    Submit form
</button>
```

### Outlined Primary button

<button class="tds-button tds-button--primary tds-button--outlined">
    Submit form
</button>

```html
<button class="tds-button tds-button--primary tds-button--outlined">
    Submit form
</button>
```

### Inverted Primary button

<div class="example example--inverted example--primary">
    <button class="tds-button tds-button--primary tds-button--inverted">
        Submit form
    </button>
</div>

```html
<button class="tds-button tds-button--primary tds-button--inverted">
    Submit form
</button>
```

### Inverted Outlined Primary button

<div class="example example--inverted example--primary">
    <button class="tds-button tds-button--primary tds-button--inverted tds-button--outlined">
        Submit form
    </button>
</div>

```html
<button class="tds-button tds-button--primary tds-button--inverted tds-button--outlined">
    Submit form
</button>
```


## Secondary Button

---

<button class="tds-button tds-button--secondary">
    Submit Form
</button>

```html
<button class="tds-button tds-button--secondary">
    Submit Form
</button>
```

### Outlined secondary button

<button class="tds-button tds-button--secondary tds-button--outlined">
    Submit form
</button>

```html
<button class="tds-button tds-button--secondary tds-button--outlined">
    Submit form
</button>
```

### Inverted Secondary button

<div class="example example--inverted example--secondary">
    <button class="tds-button tds-button--secondary tds-button--inverted">
        Submit form
    </button>
</div>

```html
<button class="tds-button tds-button--secondary tds-button--inverted">
    Submit form
</button>
```

### Inverted Outlined Secondary button

<div class="example example--inverted example--secondary">
    <button class="tds-button tds-button--secondary tds-button--inverted tds-button--outlined">
        Submit form
    </button>
</div>

```html
<button class="tds-button tds-button--secondary tds-button--inverted tds-button--outlined">
    Submit form
</button>
```


## Anchor buttons

Button classes can also be applied to `<a>` tags.

<a class="tds-button tds-button--primary" role="button" href="#">Anchor button</a>

```html
<a class="tds-button tds-button--primary" role="button" href="#">
    Anchor button
</a>
```

## Disabled state

If you want to prevent that a button from being clicked, use the `disabled` attribute.

<button class="tds-button tds-button--primary tds-button--disabled" disabled>Disabled</button>

```html
<button class="tds-button tds-button--primary tds-button--disabled" disabled>
    Disabled
</button>
```

_Note_: The mobile button width is fluid and stretches to cover all columns currently in view.


## Links

---

The `tds-button--link` class creates an element which behaves like a button, but looks like a link.

<div>
    <a class="tds-button tds-button--secondary tds-button--link">Link button
    </a>
</div>

```html
<a class="tds-button tds-button--secondary tds-button--link" role="button" href="#">
    A link button
</a>
```

## Spacing

---

Buttons will occupy 100% width of their parent's at the small viewport and below. In other viewports, they'll display inline. Link buttons are separated from buttons by 40 pixels.

<div>
    <button class="tds-button tds-button--secondary">Button</button>
    <a class="tds-button tds-button--secondary tds-button--link">Link button</a>
</div>
<div>
    <button class="tds-button tds-button--primary">Button</button>
    <a class="tds-button tds-button--primary tds-button--link">Link button</a>
</div>
