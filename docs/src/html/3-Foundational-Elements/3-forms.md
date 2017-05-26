---
title: Forms
template: doc.jade
---

* [Form guidelines](#form-guidelines)
* [Text input fields](#text-input-fields)
* [Selections](#selections)
* [Dropdowns](#dropdowns)
* [States](#states)
* [Arrangement](#arrangement)
* [Field helpers](#field-helpers)
* [Hints](#hints)
* [Example forms](/examples/forms.html)


## Form guidelines

---

**Keep forms as simple as possible**

* Only ask for the information you absolutely need
* If you do ask for optional information, mark the labels of optional fields with '(optional)'
* Don't mark mandatory fields with asterisks

**Form fields**

* Left-align labels, input fields, buttons and helper text
* Input boxes should invoke the appropriate mobile OS keyboard based on type
* Help prevent people from making errors; e.g. date pickers ensures correct date format
* Perform inline validation and provide clear error messages to resolve

**Form focus states**

* Interactive UI elements (buttons, links, menus, etc.) should have visible focus when swiped to / tapped
* Click on the label or inside the form field to show the focus state
* Focus should not get lost or reset to the top when interacting with UI elements

## Text input fields

---

The simplest implementation of a form field consists of a `.form` block containing a label and an input tag.

<fieldset class="tds-field">
  <label for="firstname">First Name</label>
  <input id="firstname" name="firstname" required>
</fieldset>

<fieldset class="tds-field">
  <label for="comment">Message</label>
  <textarea id="comment" name="comment" required></textarea>
</fieldset>

```html
<fieldset class="tds-field">
  <label for="firstname">First Name</label>
  <input id="firstname" name="firstname" required>
</fieldset>

<fieldset class="tds-field">
  <label for="comment">Message</label>
  <textarea id="comment" name="comment" required></textarea>
</fieldset>
```

### Disabling a field

Adding the standard `[disabled]` HTML attribute will cause an input to appear greyed-out.

<fieldset class="tds-field">
  <label for="lastname">First Name (Disabled)</label>
  <input id="lastname" name="lastname" disabled>
</fieldset>

```html
<fieldset class="tds-field">
  <label for="firstname">First Name (Disabled)</label>
  <input id="firstname" name="firstname" disabled>
</fieldset>
```

## Selections

---

A selection input allows a user to choose one, or many values from a set.

* The choices are grouped together by a `<fieldset>` tag
* Each input should have its own `<label>`
* The grouping is described as a whole by a `<legend>` or `<h1>` tag within the fieldset

### Radio inputs

A radio input lets the user pick a single value from one or more choices.

<fieldset class="tds-field">
    <legend class="heading-3">Choose one</legend>
    <label for="choice_a" class="tds-choice">
	    <input type="radio" name="answer" id="choice_a">
	    <span class="tds-choice__text">Choice A</span>
    </label>
    <label for="choice_b" class="tds-choice">
	    <input type="radio" name="answer" id="choice_b">
	    <span class="tds-choice__text">Choice B</span>
    </label>
    <label for="choice_c" class="tds-choice">
	    <input type="radio" name="answer" id="choice_c" disabled checked>
	    <span class="tds-choice__text">Choice C</span>
    </label>
</fieldset>

```html
<fieldset class="tds-field">
    <legend class="heading-3">Choose one</legend>
    <label for="choice_a" class="tds-choice">
	    <input type="radio" name="answer" id="choice_a">
	    <span class="tds-choice__text">Choice A</span>
    </label>
    <label for="choice_b" class="tds-choice">
	    <input type="radio" name="answer" id="choice_b">
	    <span class="tds-choice__text">Choice B</span>
    </label>
    <label for="choice_c" class="tds-choice">
	    <input type="radio" name="answer" id="choice_c" disabled checked>
	    <span class="tds-choice__text">Choice C</span>
    </label>
</fieldset>
```

### Checkboxes

Checkboxes are similar to radio buttons in their appearance and markup. The key difference is that checkboxes can accept a multiple choice response.

<fieldset class="tds-field">
    <legend class="heading-3">Choose all that apply</legend>
    <label for="multiple-choice-a" class="tds-choice">
	<input type="checkbox" name="multiple-choice" id="multiple-choice-a">
	<span class="tds-choice__text">Choice A</span>
    </label>
    <label for="multiple-choice-b" class="tds-choice">
	<input type="checkbox" name="multiple-choice" id="multiple-choice-b">
	<span class="tds-choice__text">Choice B</span>
    </label>
    <label for="multiple-choice-c" class="tds-choice">
	    <input type="checkbox" name="multiple-choice" id="multiple-choice-c" disabled>
	<span class="tds-choice__text">Choice C</span>
    </label>
    <label for="multiple-choice-d" class="tds-choice">
	    <input type="checkbox" name="multiple-choice" id="multiple-choice-d" checked disabled>
	    <span class="tds-choice__text">Choice D</span>
    </label>
</fieldset>

```html
<fieldset class="tds-field">
    <legend class="heading-3">Choose all that apply</legend>
    <label for="multiple-choice-a" class="tds-choice">
	<input type="checkbox" name="multiple-choice" id="multiple-choice-a">
	<span class="tds-choice__text">Choice A</span>
    </label>
    <label for="multiple-choice-b" class="tds-choice">
	<input type="checkbox" name="multiple-choice" id="multiple-choice-b">
	<span class="tds-choice__text">Choice B</span>
    </label>
    <label for="multiple-choice-c" class="tds-choice">
	    <input type="checkbox" name="multiple-choice" id="multiple-choice-c" disabled>
	<span class="tds-choice__text">Choice C</span>
    </label>
    <label for="multiple-choice-d" class="tds-choice">
	    <input type="checkbox" name="multiple-choice" id="multiple-choice-d" checked disabled>
	    <span class="tds-choice__text">Choice D</span>
    </label>
</fieldset>
```

### Stand-alone selection

When only one choice is available, we can pare the field down to a simple `.tds-choice` block.

<label for="tos-agree" class="tds-choice">
    <input type="checkbox" id="tos-agree">
    <span class="tds-choice__text">I have read and agree to the Terms of Service</span>
</label>

```html
<label for="tos-agree" class="tds-choice">
    <input type="checkbox" id="tos-agree">
    <span class="tds-choice__text">I have read and agree to the Terms of Service</span>
</label>
```

## Dropdowns

---

Create a dropdown by putting a label and select list inside the typical `.tds-field` block, and modifying `.tds-field__control` with `--dropdown`.

<div class="tds-field">
    <label for="normal-dropdown">Dropdown Normal</label>
    <div class="tds-field__control tds-field__control--dropdown">
	<select id="normal-dropdown">
	    <option value="option1">Option 1</option>
	    <option value="option2">Option 2</option>
	    <option value="option3">Option 3</option>
	</select>
    </div>
</div>

```html
<div class="tds-field">
    <label for="normal-dropdown">Dropdown Normal</label>
    <div class="tds-field__control tds-field__control--dropdown">
	<select id="normal-dropdown">
	    <option value="option1">Option 1</option>
	    <option value="option2">Option 2</option>
	    <option value="option3">Option 3</option>
	</select>
    </div>
</div>
```

### Disabled dropdown

Adding a `[disabled]` attribute to the `<select>` element will cause it to appear greyed out. In addition, modify `.tds-field__control` with `--disabled` to correctly color the custom "caret" icon.

<div class="tds-field">
    <label for="disabled-dropdown">Dropdown Disabled</label>
    <div class="tds-field__control tds-field__control--dropdown tds-field__control--disabled">
	<select id="disabled-dropdown" disabled>
	    <option value="option1">Option 1</option>
	    <option value="option2">Option 2</option>
	    <option value="option3">Option 3</option>
	</select>
    </div>
</div>

```html
<div class="tds-field">
    <label for="disabled-dropdown">Dropdown Disabled</label>
    <div class="tds-field__control tds-field__control--dropdown tds-field__control--disabled">
	<select id="disabled-dropdown" disabled>
	    <option value="option1">Option 1</option>
	    <option value="option2">Option 2</option>
	    <option value="option3">Option 3</option>
	</select>
    </div>
</div>
```

## States

---

Form states give the user feedback regarding their input. They can affirm that the user's input was correct, or highlight errors that must be corrected.

* Modify the `.tds-field` block with `.tds-field--success` when its input is correct.
* When there's a problem, use the `.tds-field--error` modifier.

### Accessibility

See [Usable and Accessible Form Validation and Error Recovery](http://webaim.org/techniques/formvalidation/) by WebAIM for useful information on making form validation accessible. Some best practices for inline error recovery are:

* Associate the error message to the invalid control with `aria-describedby`
* Apply `aria-invalid="true"` to the control
* Set focus to the first control which needs attention

<p><small>The [Field Helpers](#field-helpers) section contains more documentation for inline error messages.</small></p>

### Text field states

Wrap the input element in a `.tds-field__control` block to ensure correct placement of the alert icon.

<div class="tds-field tds-field--success">
    <label for="successful-field">Success state</label>
    <div class="tds-field__control">
	<input type="text" id="successful-field">
    </div>
</div>

<div class="tds-field tds-field--error">
    <label for="error-field">Error state</label>
    <div class="tds-field__control">
	<input type="text" id="error-field" aria-invalid="true">
    </div>
</div>

```html
<div class="tds-field tds-field--success">
    <label for="successful-field">Success state</label>
    <div class="tds-field__control">
	<input type="text" id="successful-field">
    </div>
</div>

<div class="tds-field tds-field--error">
    <label for="error-field">Error state</label>
    <div class="tds-field__control">
	<input type="text" id="error-field" aria-invalid="true">
    </div>
</div>
```

### Dropdown states

The `.tds-field` `--success` and `--error` modifiers will also style dropdowns with visual feedback.

<div class="tds-field tds-field--success">
    <label for="success-dropdown">Dropdown Successful</label>
    <div class="tds-field__control tds-field__control--dropdown">
	<select id="success-dropdown">
	    <option value="option1">Option 1</option>
	    <option value="option2">Option 2</option>
	    <option value="option3">Option 3</option>
	</select>
    </div>
</div>

<div class="tds-field tds-field--error">
    <label for="error-dropdown">Dropdown error/message</label>
    <div class="tds-field__control tds-field__control--dropdown">
	<select id="error-dropdown" aria-invalid="true">
	    <option value="option1">Option 1</option>
	    <option value="option2">Option 2</option>
	    <option value="option3">Option 3</option>
	</select>
    </div>
</div>

```html
<div class="tds-field tds-field--success">
    <label for="success-dropdown">Dropdown Successful</label>
    <div class="tds-field__control tds-field__control--dropdown">
	<select id="success-dropdown">
	    <option value="option1">Option 1</option>
	    <option value="option2">Option 2</option>
	    <option value="option3">Option 3</option>
	</select>
    </div>
</div>

<div class="tds-field tds-field--error">
    <label for="error-dropdown">Dropdown error/message</label>
    <div class="tds-field__control tds-field__control--dropdown">
	<select id="error-dropdown" aria-invalid="true">
	    <option value="option1">Option 1</option>
	    <option value="option2">Option 2</option>
	    <option value="option3">Option 3</option>
	</select>
    </div>
</div>
```

### Selection field states

Use the `.tds-choice--error` modifier when there's a problem with an individual choice of a selection field.

<fieldset class="tds-field">
    <legend class="heading-3">Which shape has less than ten sides?</legend>
    <label for="choice-decagon" class="tds-choice">
	<input type="radio" id="choice-decagon" name="shape-choice">
	<span class="tds-choice__text">Decagon</span>
    </label>
    <label for="choice-octagon" class="tds-choice tds-choice--error">
	<input type="radio" id="choice-octagon" name="shape-choice"
	    aria-invalid="true" checked>
	<span class="tds-choice__text">Octagon</span>
    </label>
</fieldset>

```html
<fieldset class="tds-field">
    <legend class="heading-3">Which shape has less than ten sides?</legend>
    <label for="choice-decagon" class="tds-choice">
	<input type="radio" id="choice-decagon" name="shape-choice">
	<span class="tds-choice__text">Decagon</span>
    </label>
    <label for="choice-octagon" class="tds-choice tds-choice--error">
	<input type="radio" id="choice-octagon" name="shape-choice"
	    aria-invalid="true" aria-invalid="true">
	<span class="tds-choice__text">Octagon</span>
    </label>
</fieldset>
```

<fieldset class="tds-field">
    <legend class="heading-3">Which shape has four or more sides?</legend>
    <label for="choice-square" class="tds-choice">
	<input type="checkbox" id="choice-square" name="shape-choice" checked>
	<span class="tds-choice__text">Square</span>
    </label>
    <label for="choice-triangle" class="tds-choice tds-choice--error">
	<input type="checkbox" id="choice-triangle" name="shape-choice"
	    aria-invalid="true" checked>
	<span class="tds-choice__text">Triangle</span>
    </label>
</fieldset>

```html
<fieldset class="tds-field">
    <legend class="heading-3">Which shape has four or more sides?</legend>
    <label for="choice-square" class="tds-choice">
	<input type="checkbox" id="choice-square" name="shape-choice" checked>
	<span class="tds-choice__text">Square</span>
    </label>
    <label for="choice-triangle" class="tds-choice tds-choice--error">
	<input type="checkbox" id="choice-triangle" name="shape-choice"
	    aria-invalid="true" checked>
	<span class="tds-choice__text">Triangle</span>
    </label>
</fieldset>
```

## Arrangement

---

The responsive grid can be used to arrange complex form layouts.

<div class="tds-grid-row">
    <div class="tds-medium-6">
	<fieldset class="tds-field">
	    <label for="input_a">Input A</label>
	    <input type="text" name="input_a">
	</fieldset>
    </div>
    <div class="tds-medium-6">
	<fieldset class="tds-field">
	    <label for="input_b">Input B</label>
	    <input type="text" name="input_b">
	</fieldset>
    </div>
</div>
<div class="tds-grid-row">
    <div class="tds-xs-12">
	<fieldset class="tds-field">
	    <label for="input_c">Input C</label>
	    <input type="text" name="input_c">
	</fieldset>
    </div>
</div>

```html
<div class="tds-grid-row">
    <div class="tds-medium-6">
	<fieldset class="tds-field">
	    <label for="input_a">Input A</label>
	    <input type="text" name="input_a">
	</fieldset>
    </div>
    <div class="tds-medium-6">
	<fieldset class="tds-field">
	    <label for="input_b">Input B</label>
	    <input type="text" name="input_b">
	</fieldset>
    </div>
</div>
<div class="tds-grid-row">
    <div class="tds-xs-12">
	<fieldset class="tds-field">
	    <label for="input_c">Input C</label>
	    <input type="text" name="input_c">
	</fieldset>
    </div>
</div>
```

### Size and spacing

The `.tds-button-row` block can be used to achieve the correct spacing between a form and its buttons. The class can be used on a stand-alone block, or mixed with `.tds-grid-row`.

When laying out fields that'll potentially fill the entire viewport, the responsive grid should be used to constrain their maximum width to these limits:

* **Small & XS**: 12 columns
* **Medium**: 7 columns
* **Large**: 5 columns
* **XL**: 4 columns

These limits can be achieved by combining grid column helpers (`.tds-medium-7.tds-large-5.tds-xl-4`) or with the block `.tds-field-col`

<div class="tds-grid-row">
    <div class="tds-field-col">
	<fieldset class="tds-field">
	    <label for="query">What are you looking for?</label>
	    <input type="text" id="query" placeholder="Smart phones">
	</fieldset>
    </div>
</div>
<div class="tds-button-row">
    <button type="submit" class="tds-button tds-button--primary">
	Search
    </button>
</div>

```html
<div class="tds-grid-row">
    <div class="tds-field-col">
	<fieldset class="tds-field">
	    <label for="query">What are you looking for?</label>
	    <input type="text" id="query" placeholder="Smart phones">
	</fieldset>
    </div>
</div>
<div class="tds-button-row">
    <button type="submit" class="tds-button tds-button--primary">
	Search
    </button>
</div>
```

## Field helpers

---

A field helper offers the user a detailed explanation of the input expected by a form field. Construct one by placing a `.tds-helper` block between the label and input.

Use `aria-describedby` to accessibly mark up the relationship between the input field and the helper text.

* Assign the helper block a unique `id` attribute.</li>
* Add an `aria-describedby` attribute to the input element.
* Make the helper's id the value of `aria-describedby`.

### Standard field helper

<div class="tds-field">
    <label for="input_d">Field helper</label>
    <div class="tds-helper" id="a-standard-helper">
	<p class="text--medium">
	    <strong>Your password must be:</strong>
	</p>
	<ul class="list list--compact">
	    <li class="list__item">8 characters or longer, no spaces</li>
	    <li class="list__item">A mix of numbers, lowercase and uppercase letters</li>
	</ul>
    </div>
    <input type="password" id="input_d" placeholder="Enter password"
	aria-describedby="a-standard-helper">
</div>

```html
<div class="tds-field">
    <label for="input_d">Field helper</label>
    <div class="tds-helper" id="a-standard-helper">
	<p class="text--medium">
	    <strong>Your password must be:</strong>
	</p>
	<ul class="list list--compact">
	    <li class="list__item">8 characters or longer, no spaces</li>
	    <li class="list__item">A mix of numbers, lowercase and uppercase letters</li>
	</ul>
    </div>
    <input type="password" id="input_d" placeholder="Enter password"
	aria-describedby="a-standard-helper">
</div>
```

### Success modifier

The `--success` modifier can be used on the helper to provide positive feedback when the user has successfully completed the form field.

<div class="tds-field tds-field--success">
    <label for="input_e">Successful field helper</label>
    <div class="tds-helper tds-helper--success" id="a-success-helper">
	<p class="text--medium">
	    <strong>Your password must be:</strong>
	</p>
	<ul class="list list--checked list--compact">
	    <li class="list__item">8 characters or longer, no spaces</li>
	    <li class="list__item">A mix of numbers, lowercase and uppercase letters</li>
	</ul>
    </div>
    <input type="password" id="input_e" placeholder="Enter password"
	aria-describedby="a-success-helper">
</div>

```html
<div class="tds-field field--success">
    <label for="input_e">Successful field helper</label>
    <div class="tds-helper tds-helper--success" id="a-success-helper">
	<p class="text--medium">
	    <strong>Your password must be:</strong>
	</p>
	<ul class="list list--checked list--compact">
	    <li class="list__item">8 characters or longer, no spaces</li>
	    <li class="list__item">A mix of numbers, lowercase and uppercase letters</li>
	</ul>
    </div>
    <input type="password" id="input_e" placeholder="Enter password"
	aria-describedby="a-success-helper">
</div>
```

### Error modifier

A helper modified with `.tds-helper--error` can give detailed instructions regarding why a form field could not be processed.

* The form control should be associated to the error message with `aria-describedby`
* The `aria-invalid="true"` attribute should be added to the form control

<div class="tds-field tds-field--error">
    <label for="omitted-field">Error state/message</label>
    <div class="tds-helper tds-helper--error" id="omitted-field-error">
	<strong>General or field specific error message.</strong>
    </div>
    <div class="tds-field__control">
	<input type="text" id="omitted-field" placeholder="Text"
	    aria-describedby="omitted-field-error" aria-invalid="true">
    </div>
</div>

```html
<div class="tds-field tds-field--error">
    <label for="omitted-field">Error state/message</label>
    <div class="tds-helper tds-helper--error" id="omitted-field-error">
	<strong>General or field specific error message.</strong>
    </div>
    <div class="tds-field__control">
	<input type="text" id="omitted-field" placeholder="Text"
	    aria-describedby="omitted-field-error" aria-invalid="true">
    </div>
</div>
```

Use the "Error List" block when a field has a complex error message.

<div class="tds-field tds-field--error">
    <label for="input_f">Error field helper</label>
    <div class="tds-helper tds-helper--error" id="unfortunate-error">
	<p class="text--medium">
	    <strong>Your password must be:</strong>
	</p>
	<ul class="list list--error list--compact">
	    <li class="list__item">
		8 characters or longer, no spaces
	    </li>
	    <li class="list__item">
		A mix of numbers, lowercase and uppercase letters
	    </li>
	</ul>
    </div>
    <div class="field__control">
	<input type="password" id="input_f" placeholder="Enter password"
	    aria-describedby="unfortunate-error" aria-invalid="true">
    </div>
</div>

```html
<div class="tds-field tds-field--error">
    <label for="input_f">Error field helper</label>
    <div class="tds-helper tds-helper--error" id="unfortunate-error">
	<p class="text--medium">
	    <strong>Your password must be:</strong>
	</p>
	<ul class="list list--error list--compact">
	    <li class="list__item">
		8 characters or longer, no spaces
	    </li>
	    <li class="list__item">
		A mix of numbers, lowercase and uppercase letters
	    </li>
	</ul>
    </div>
    <div class="tds-field__control">
	<input type="password" id="input_f" placeholder="Enter password"
	    aria-describedby="unfortunate-error" aria-invalid="true">
    </div>
</div>
```

## Hints

---

Hints provide information a user may need to complete a form field. While a label is the succint, essential text identifying the purpose of an input field, a hint can be used to provide more detailed instructions.

* A hinted input should have an `aria-describedby` attribute whose value is the `id` of the hint text.
* The hint should not be nested inside the `<label>` tag.
* Modify the `.tds-field` block with `.tds-field--hinted` to position the icon correctly relative to the label.
* Modify the `.tds-hint` block with `.tds-hint--active` to reveal the speech bubble.
* Toggle the text's `aria-hidden` attribute when the button hides or shows the tooltip.

<div id="example-hint" class="tds-field tds-field--hinted">
    <label for="hinted-field">Interactive hint</label>
    <input type="text" id="hinted-field" aria-describedby="some-hint">
    <div class="tds-hint tds-hint--active">
	<button class="tds-button--plain tds-hint__trigger" aria-controls="some-hint">
	    <span class="tds-accessible-hide">Toggle helper text visibility</span>
	</button>
	<span id="some-hint" class="tds-hint__text" aria-role="tooltip" aria-hidden="false">
	    This text describes the field.
	</span>
    </div>
</div>

```html
<div id="example-hint" class="tds-field tds-field--hinted">
    <label for="hinted-field">Interactive hint</label>
    <input type="text" id="hinted-field" aria-describedby="some-hint">
    <div class="tds-hint tds-hint--active">
	<button class="tds-button-plain tds-hint__trigger" aria-controls="some-hint">
	    <span class="tds-accessible-hide">Toggle helper text visibility</span>
	</button>
	<span id="some-hint" class="tds-hint__text" aria-role="tooltip" aria-hidden="false">
	    This text describes the field.
	</span>
    </div>
</div>
```

## Example forms

---

See these features in action on the [form examples page](/examples/forms.html)
