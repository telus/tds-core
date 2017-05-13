---
title: Buttons
template: doc.jade
---

* [Overview](#overview)
* [Purple Button](#purple-button)
* [Green Button](#green-button)
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

## Purple Button

---

A button that's used for primary actions. The `button` and `button--purple` blocks define its default appearance. In general, button classes can be applied to both `<button>` and `<a>` tags.

<button class="button button--purple">Submit form</button>

```html
<button class="button button--purple">
    Submit form
</button>
```

### Outlined purple button

<button class="button button--purple button--outlined">
    Submit form
</button>

```html
<button class="button button--purple button--outlined">
    Submit form
</button>
```

### Anchor buttons

Button classes can also be applied to `<a>` tags.

<a class="button button--purple" role="button" href="#">Anchor button</a>

```html
<a class="button button--purple" role="button" href="#">
    Anchor button
</a>
```

### Disabled state

If you want to prevent that a button from being clicked, use the `disabled` attribute.

<button class="button button--purple" disabled>Disabled</button>

```html
<button class="button button--purple" disabled>
    Disabled
</button>
```

_Note_: The mobile button width is fluid and stretches to cover all columns currently in view.

## Green Button

---

<button class="button button--green">
    Submit Form
</button>

```html
<button class="button button--green">
    Submit Form
</button>
```

### Outlined green button

<button class="button button--green button--outlined">
    Submit form
</button>

```html
<button class="button button--green button--outlined">
    Submit form
</button>
```

## Inverted Button

---

### Inverted + Inverted, Outlined

<div class="example example--inverted">
    <button class="button button--inverted">
        Submit form
    </button>
    <button class="button button--inverted button--outlined">
        Submit form
    </button>
</div>

```html
<button class="button button--inverted">
    Submit form
</button>
<button class="button button--inverted button--outlined">
    Submit form
</button>
```

## Links

---

The `button--link` class creates an element which behaves like a button, but looks like a link.

<div>
    <button class="button button--green">Button</button>
    <a class="button button--green button--link">Link button
    </a>
</div>

```html
<a class="button button--green button--link" role="button" href="#">
    A link button
</a>
```

## Spacing

---

Buttons will occupy 100% width of their parent's at the small viewport and below. In other viewports, they'll display inline. Link buttons are separated from buttons by 40 pixels.

<div>
    <button class="button button--purple">Button</button>
    <a class="button button--purple button--link">Link button</a>
</div>
<div>
    <button class="button button--green">Button</button>
    <a class="button button--green button--link">Link button</a>
</div>
