<span class="docs--badge__deprecated">deprecated</span>

<strong>The icon CSS classes are deprecated and should not be used. Use the [DecorativeIcon](#decorativeicon) or
[StandaloneIcon](#standaloneicon) component instead.</strong>


## Icons

---

<div class="container">
    <div class="grid-row">
	<div class="medium-4">
	    <h3>Navigational</h3>
	    <p>
    <i class="icon icon-core-hamburger icon--primary icon--fw"></i>
		<i class="icon icon-core-hamburger icon--secondary icon--fw"></i>
		<i class="icon icon-core-hamburger icon--disabled icon--fw"></i><br>
		`hamburger`
	    </p>
	    <p>
    <i class="icon icon-core-spyglass icon--primary icon--fw"></i>
		<i class="icon icon-core-spyglass icon--secondary icon--fw"></i>
		<i class="icon icon-core-spyglass icon--disabled icon--fw"></i><br>
		`spyglass`
	    </p>
	    <p>
    <i class="icon icon-core-location icon--primary icon--fw"></i>
		<i class="icon icon-core-location icon--secondary icon--fw"></i>
		<i class="icon icon-core-location icon--disabled icon--fw"></i><br>
		`location`
	    </p>
	    <p>
    <i class="icon icon-core-times icon--fw icon--primary"></i>
		<i class="icon icon-core-times icon--fw icon--secondary"></i>
		<i class="icon icon-core-times icon--fw icon--disabled"></i>
		<i class="icon icon-core-times icon--fw icon--error"></i><br>
		`times`
	    </p>
	    <p>
		<i class="icon icon-core-expander icon--fw"></i><br>
		`expander`
	    </p>
	</div>
	<div class="medium-4">
	    <h3>Selection</h3>
	    <p>
		<i class="icon icon-core-chevron icon--fw icon--primary"></i>
		<i class="icon icon-core-chevron icon--fw icon--secondary"></i><br>
		`chevron`
	    </p>
	    <p>
		<i class="icon icon-core-caret-down icon--fw icon--primary"></i>
		<i class="icon icon-core-caret-down icon--fw icon--secondary"></i>
		<i class="icon icon-core-caret-down icon--fw icon--disabled"></i>
		<i class="icon icon-core-caret-down icon--fw icon--error"></i><br>
		`caret-down`
	    </p>
	    <p>
		<i class="icon icon-core-plus icon--fw icon--primary"></i>
		<i class="icon icon-core-plus icon--fw icon--secondary"></i>
		<i class="icon icon-core-plus icon--fw icon--disabled"></i><br>
		`plus`
	    </p>
	    <p>
		<i class="icon icon-core-minus icon--fw icon--primary"></i>
		<i class="icon icon-core-minus icon--fw icon--secondary"></i>
		<i class="icon icon-core-minus icon--fw icon--disabled"></i><br>
		`minus`
	    </p>
	</div>
	<div class="medium-4">
	    <h3>Instructive</h3>
	    <p>
		<i class="icon icon-core-question-mark-circle icon--fw"></i><br>
		`question-mark-circle`
	    </p>
	    <p>
		<i class="icon icon-core-checkmark icon--fw"></i><br>
		`checkmark`
	    </p>
	    <p>
		<i class="icon icon-core-exclamation-point-circle icon--fw"></i><br>
		`exclamation-point-circle`
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

The default icon display is the default text colour (shark). Modifier classes make it possible to style icons differently.

* `--primary` colors an icon green to indicate a primary action
* `--secondary` colors an icon purple to indicate a secondary action
* `--disabled` colors an icon grey to indicate the action is turned off
* `--error` colors an icon red to indicate a problem

**Examples of icons with modified colors**

<p>
    <i class="icon icon-core-caret-down icon--primary"></i>
    <i class="icon icon-core-caret-down icon--secondary"></i>
    <i class="icon icon-core-caret-down icon--disabled"></i>
    <i class="icon icon-core-caret-down icon--error"></i>
</p>

```html
<i class="icon icon-core-caret-down icon--primary"></i>
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

In order to use variables, functions, and mixins, TDS' SCSS source code must be imported by your project. See the [Using TDS Core](/2-Use-TDS/1-getting-started.html#using-core) for further instructions.

### Core icon codepoint

Function `core-icon-codepoint` returns the unicode value for the given icon name.

```scss
.my-block {
  &::before {
    content: core-icon-codepoint(chevron);
  }
}
```

### Core icon

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
`$color-icon-primary` | <span style="color: #177a00;">#177a00</span>
`$color-icon-secondary` | <span style="color:#4b286d;">#4b286d</span>
`$color-icon-disabled` | <span style="color: #54595f;">#54595f</span>
`$color-icon-error` | <span style="color: #c12335;">#c12335</span>

## Accessibility

---

Icons are a helpful tool to supplement information, but should not be the only means by which you communicate something. The `.accessible-hide` class is one way to include helpful text along with an icon.

**Accessible icon example**

<p>
    Enter a keyword, then click
    <i class="icon icon-core-spyglass">
	<span class="accessible-hide">the search button</span>
    </i>
    to find relevant results.
</p>

```html
<p>
    Enter a keyword, then click
    <i class="icon icon-core-spyglass">
	<span class="accessible-hide">the search button</span>
    </i>
    to find relevant results.
</p>
```

That content will be read aloud by a screen reader as "enter a keyword, then click the search button to find relevant results". Without the helper text, it would be heard as "enter a keyword then click to find relevant results", which is not as clear.
