---
title: Buttons
template: doc.jade
---

* [Overview](#overview)
* [Primary Button](#primary-button)
* [Secondary Button](#secondary-button)
* [Inverted buttons](#inverted-buttons)
* [Disabled state](#disabled-state)
* [Anchor buttons](#anchor-buttons)
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

<button class="tds-button tds-button--primary">
    Submit Form
</button>

```html
<button class="tds-button tds-button--primary">
    Submit Form
</button>
```

## Secondary Button

---

A button that's used for secondary actions. The `button` and `button--secondary` blocks define its default appearance. In general, button classes can be applied to both `<button>` and `<a>` tags.

<button class="tds-button tds-button--secondary">Submit form</button>

```html
<button class="tds-button tds-button--secondary">
    Submit form
</button>
```

## Inverted Buttons

---
<div class="example example--inverted example--primary-bg">
  <button class="tds-button tds-button--inverted tds-button--primary">
    Lorem ipsum
  </button>
</div>
<div class="example example--inverted example--secondary-bg">
  <button class="tds-button tds-button--inverted tds-button--secondary">
    Lorem ipsum
  </button>
</div>

```html
<button class="tds-button tds-button--inverted tds-button--primary">
    Lorem ipsum
</button>

<button class="tds-button tds-button--inverted tds-button--secondary">
    Lorem ipsum
</button>
```

## Disabled state

If you want to prevent that a button from being clicked, use the `disabled` attribute.

<button class="tds-button tds-button--disabled" disabled>Disabled</button>

```html
<button class="tds-button tds-button--disabled" disabled>
    Disabled
</button>
```

## Anchor buttons

Button classes can also be applied to `<a>` tags. Remember to add the `role = button` to make your links accessible.

<a class="tds-button tds-button--primary" role="button" href="#">Anchor button</a>
<br/>
<a class="tds-button tds-button--secondary" role="button" href="#">Anchor button</a>

```html
<a class="tds-button tds-button--primary" role="button" href="#">
    Anchor button
</a>
<br/>
<a class="tds-button tds-button--secondary" role="button" href="#">
    Anchor button
</a>
```

_Note_: The mobile button width is fluid and stretches to cover all columns currently in view.


## Links

---

The `tds-button--link` class creates an element which behaves like a button, but looks like a link. See Spacing section below to see how it aligns perfectly when there's a button side by side.

<a class="tds-button tds-button--primary tds-button--link">Link button</a>
<br/>
<a class="tds-button tds-button--secondary tds-button--link">Link button</a>


```html
<a class="tds-button tds-button--primary tds-button--link" role="button" href="#">
    A link button
</a>
<br/>
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
