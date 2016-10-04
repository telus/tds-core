---
title: Utility Icons
template: doc.jade
---

## Icons

---

<div class="container">
    <div class="grid-row">
        <div class="medium-4">
            <h3>Navigational</h3>
            <p>
                <i class="icon icon-core-hamburger icon--fw"></i>
                <i class="icon icon-core-hamburger icon--secondary icon--fw"></i>
                <i class="icon icon-core-hamburger icon--disabled icon--fw"></i><br>
                `hamburger`
            </p>
            <p>
                <i class="icon icon-core-spyglass icon--fw"></i>
                <i class="icon icon-core-spyglass icon--secondary icon--fw"></i>
                <i class="icon icon-core-spyglass icon--disabled icon--fw"></i><br>
                `spyglass`
            </p>
            <p>
                <i class="icon icon-core-location icon--fw"></i>
                <i class="icon icon-core-location icon--secondary icon--fw"></i>
                <i class="icon icon-core-location icon--disabled icon--fw"></i><br>
                `location`
            </p>
            <p>
                <i class="icon icon-core-close icon--fw"></i>
                <i class="icon icon-core-close icon--fw icon--secondary"></i>
                <i class="icon icon-core-close icon--fw icon--disabled"></i><br>
                `close`
            </p>
        </div>
        <div class="medium-4">
            <h3>Selection</h3>
            <p>
                <i class="icon icon-core-chevron icon--fw"></i>
                <i class="icon icon-core-chevron icon--fw icon--secondary"></i><br>
                `chevron`
            </p>
            <p>
                <i class="icon icon-core-caret-down icon--fw"></i>
                <i class="icon icon-core-caret-down icon--fw icon--secondary"></i>
                <i class="icon icon-core-caret-down icon--fw icon--disabled"></i>
                <i class="icon icon-core-caret-down icon--fw icon--error"></i><br>
                `caret-down`
            </p>
            <p>
                <i class="icon icon-core-plus icon--fw"></i>
                <i class="icon icon-core-plus icon--fw icon--secondary"></i>
                <i class="icon icon-core-plus icon--fw icon--disabled"></i><br>
                `plus`
            </p>
            <p>
                <i class="icon icon-core-dash icon--fw"></i>
                <i class="icon icon-core-dash icon--fw icon--secondary"></i>
                <i class="icon icon-core-dash icon--fw icon--disabled"></i><br>
                `dash`
            </p>
            <p>
                <i class="icon icon-core-expander icon--fw"></i><br>
                `expander`
            </p>
        </div>
        <div class="medium-4">
            <h3>Instructive</h3>
            <p>
                <i class="icon icon-core-help icon--fw"></i><br>
                `help`
            </p>
            <p>
                <i class="icon icon-core-checkmark icon--fw"></i><br>
                `checkmark`
            </p>
            <p>
                <i class="icon icon-core-incomplete icon--fw"></i><br>
                `incomplete`
            </p>
            <p>
                <i class="icon icon-core-alert icon--fw"></i><br>
                `alert`
            </p>
        </div>
    </div>
</div>

## Icon CSS classes

---

To render an icon anywhere in the page, mix the `icon` block with the glyph's named block. The named blocks follow the format `icon-core-name`, and each glyphs name can be found in the "[Icons](#icons)" section above.

**Basic icon example**

<p>
    <i class="icon icon-core-caret-down"></i>
    This is the "Caret (down)" icon
</p>

```html
<i class="icon icon-core-caret-down"></i>
This is the "Caret (down)" icon
```

### Color modifiers

The default ("primary") icon display is purple [[1]](#color-footnote). Modifier classes make it possible to style icons differently.

<ul class="list list--bulleted">
    <li class="list__item">
        `--secondary` colors an icon green to indicate a secondary action
    </li>
    <li class="list__item">
        `--disabled` colors an icon grey to indicate the action is turned off
    </li>
    <li class="list__item">
        `--error` colors an icon red to indicate a problem
    </li>
</ul>

**Examples of icons with modified colors**

<p>
    <i class="icon icon-core-caret-down icon--secondary"></i>
    <i class="icon icon-core-caret-down icon--disabled"></i>
    <i class="icon icon-core-caret-down icon--error"></i>
</p>

```html
<i class="icon icon-core-caret-down icon--secondary"></i>
<i class="icon icon-core-caret-down icon--disabled"></i>
<i class="icon icon-core-caret-down icon--error"></i>
```

<ol class="list list--numbered list--small">
    <li class="list__item" id="color-footnote">
        Color has special meaning for instructive icons.
        By default, each one is styled with its intended color.
        For example, "checkmark" is green, and "alert" is red without requiring any modifier.
    </li>
</ol>

### Fixed width modifier

The TELUS Core Icons font isn't fixed width, but the `--fw` helper can be used when you need to align glyphs vertically.

**Example of fixed width icons**

<p>
    <i class="icon icon-core-hamburger icon--fw"></i> Hamburger<br>
    <i class="icon icon-core-chevron icon--fw"></i> Chevron
</p>

```html
<i class="icon icon-core-hamburger icon--fw"></i> Hamburger<br>
<i class="icon icon-core-chevron icon--fw"></i> Chevron
```

## SCSS variables and mixins

---

In order to use variables, functions, and mixins, Thorium's SCSS source code must be imported by your project. See the [consumption page](http://localhost:8080/5-Governance/1-consumption.html) for further instructions.

### Core Icon Codepoint

Function `core-icon-codepoint` returns the unicode value for the given icon name.

```scss
.my-block {
  &::before {
    content: core-icon-codepoint(chevron);
  }
}
```

### Core Icon

Mixin `core-icon` outputs the properties of an inline block icon.

This mixin has one optional parameter - the name of an icon. If this parameter is given, your block will have `::before` pseudo element containing that glyph.

```scss
.my-custom-chevron {
  @include core-icon(chevron);
}

.my-generic-icon-block {
  @include core-icon;
}
```

### Variables

Variable | Value
--- | ---
`$color-icon-primary` | <span style="color:#4b286d;">#4b286d</span>
`$color-icon-primary-hover` | <span style="color:#7841b0;">#7841b0</span>
`$color-icon-secondary` | <span style="color: #177a00;">#177a00</span>
`$color-icon-secondary-hover` | <span style="color: #248700;">#248700</span>
`$color-icon-disabled` | <span style="color: #54595f;">#54595f</span>
`$color-icon-error` | <span style="color: #c12335;">#c12335</span>

## Accessibility

---

Icons are a helpful tool to supplement information, but should not be the only means by which you communicate something. The `.accessible-hide` class is one way to include helpful text along with an icon.

**Accessible icon example**

<p>
    This sentence contains the
    <i class="icon icon-core-spyglass">
        <span class="accessible-hide">spyglass</span>
    </i>
    icon.
</p>

```html
<p>
    This sentence contains the
    <i class="icon icon-core-spyglass">
        <span class="accessible-hide">spyglass</span>
    </i>
    icon.
</p>
```

That content will be read aloud by a screen reader as "this sentence contains the spyglass icon". Without the helper text, it would only be "this sentence contains the icon", which differs greatly from the code's intended meaning.