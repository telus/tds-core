---
title: Forms
template: doc.jade
---

## Form guidelines

---

**Keep forms as simple as possible**

<ul class="list list--bulleted">
    <li class="list__item">Only ask for the information you absolutely need</li>
    <li class="list__item">If you do ask for optional information, mark the labels of optional fields with '(optional)'</li>
    <li class="list__item">Don't mark mandatory fields with asterisks</li>
</ul>

**Form fields**

<ul class="list list--bulleted">
    <li class="list__item">Left-align labels, input fields, buttons and helper text</li>
    <li class="list__item">Input boxes should invoke the appropriate mobile OS keyboard based on type</li>
    <li class="list__item">Help prevent people from making errors; e.g. date pickers ensures correct date format</li>
    <li class="list__item">Perform inline validation and provide clear error messages to resolve</li>
</ul>

**Form focus states**

<ul class="list list--bulleted">
    <li class="list__item">Interactive UI elements (buttons, links, menus, etc.) should have visible focus when swiped to / tapped</li>
    <li class="list__item">Click on the label or inside the form field to show the focus state</li>
    <li class="list__item">Focus should not get lost or reset to the top when interacting with UI elements</li>
</ul>

## Text input fields

---

The simplest implementation of a form field consists of a `.form` block containing a label and an input tag.

<fieldset class="field">
  <label for="firstname">First Name</label>
  <input id="firstname" name="firstname" required>
</fieldset>

<fieldset class="field">
  <label for="comment">Message</label>
  <textarea id="comment" name="comment" required></textarea>
</fieldset>

```html
<fieldset class="field">
  <label for="firstname">First Name</label>
  <input id="firstname" name="firstname" required>
</fieldset>

<fieldset class="field">
  <label for="comment">Message</label>
  <textarea id="comment" name="comment" required></textarea>
</fieldset>
```

### Disabling a field

Adding the standard `[disabled]` HTML attribute will cause an input to appear greyed-out.

<fieldset class="field">
  <label for="lastname">First Name (Disabled)</label>
  <input id="lastname" name="lastname" disabled>
</fieldset>

```html
<fieldset class="field">
  <label for="firstname">First Name (Disabled)</label>
  <input id="firstname" name="firstname" disabled>
</fieldset>
```

## Selections

---

A selection input allows a user to choose one, or many values from a set.

<ul class="list list--bulleted">
    <li class="list__item">The choices are grouped together by a `<fieldset>` tag</li>
    <li class="list__item">Each input should have its own `<label>`</li>
    <li class="list__item">The grouping is described as a whole by a `<legend>` or `<h1>` tag within the fieldset</li>
</ul>

### Radio inputs

A radio input lets the user pick a single value from one or more choices.

<fieldset class="field">
    <legend class="subhead">Choose one</legend>
    <label for="choice_a" class="choice">
	    <input type="radio" name="answer" id="choice_a">
	    <span class="choice__text">Choice A</span>
    </label>
    <label for="choice_b" class="choice">
	    <input type="radio" name="answer" id="choice_b">
	    <span class="choice__text">Choice B</span>
    </label>
    <label for="choice_c" class="choice">
	    <input type="radio" name="answer" id="choice_c" disabled checked>
	    <span class="choice__text">Choice C</span>
    </label>
</fieldset>

```html
<fieldset class="field">
    <legend class="subhead">Choose one</legend>
    <label for="choice_a" class="choice">
	    <input type="radio" name="answer" id="choice_a">
	    <span class="choice__text">Choice A</span>
    </label>
    <label for="choice_b" class="choice">
	    <input type="radio" name="answer" id="choice_b">
	    <span class="choice__text">Choice B</span>
    </label>
    <label for="choice_c" class="choice">
	    <input type="radio" name="answer" id="choice_c" disabled checked>
	    <span class="choice__text">Choice C</span>
    </label>
</fieldset>
```

### Checkboxes

Checkboxes are similar to radio buttons in their appearance and markup. The key difference is that checkboxes can accept a multiple choice response.

<fieldset class="field">
    <legend class="subhead">Choose all that apply</legend>
    <label for="multiple-choice-a" class="choice">
        <input type="checkbox" name="multiple-choice" id="multiple-choice-a">
        <span class="choice__text">Choice A</span>
    </label>
    <label for="multiple-choice-b" class="choice">
        <input type="checkbox" name="multiple-choice" id="multiple-choice-b">
        <span class="choice__text">Choice B</span>
    </label>
    <label for="multiple-choice-c" class="choice">
	    <input type="checkbox" name="multiple-choice" id="multiple-choice-c" disabled>
        <span class="choice__text">Choice C</span>
    </label>
    <label for="multiple-choice-d" class="choice">
	    <input type="checkbox" name="multiple-choice" id="multiple-choice-d" checked disabled>
	    <span class="choice__text">Choice D</span>
    </label>
</fieldset>

```html
<fieldset class="field">
    <legend class="subhead">Choose all that apply</legend>
    <label for="multiple-choice-a" class="choice">
        <input type="checkbox" name="multiple-choice" id="multiple-choice-a">
        <span class="choice__text">Choice A</span>
    </label>
    <label for="multiple-choice-b" class="choice">
        <input type="checkbox" name="multiple-choice" id="multiple-choice-b">
        <span class="choice__text">Choice B</span>
    </label>
    <label for="multiple-choice-c" class="choice">
	    <input type="checkbox" name="multiple-choice" id="multiple-choice-c" disabled>
        <span class="choice__text">Choice C</span>
    </label>
    <label for="multiple-choice-d" class="choice">
	    <input type="checkbox" name="multiple-choice" id="multiple-choice-d" checked disabled>
	    <span class="choice__text">Choice D</span>
    </label>
</fieldset>
```

### Stand-alone selection

When only one choice is available, we can pare the field down to a simple `.choice` block.

<label for="tos-agree" class="choice">
    <input type="checkbox" id="tos-agree">
    <span class="choice__text">I have read and agree to the Terms of Service</span>
</label>

```html
<label for="tos-agree" class="choice">
    <input type="checkbox" id="tos-agree">
    <span class="choice__text">I have read and agree to the Terms of Service</span>
</label>
```

## Dropdowns

---

Create a dropdown by putting a label and select list inside the typical `.field` block, and modifying `.field__control` with `--dropdown`.

<div class="field">
    <label for="normal-dropdown">Dropdown Normal</label>
    <div class="field__control field__control--dropdown">
        <select id="normal-dropdown">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
        </select>
    </div>
</div>

```html
<div class="field">
    <label for="normal-dropdown">Dropdown Normal</label>
    <div class="field__control field__control--dropdown">
        <select id="normal-dropdown">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
        </select>
    </div>
</div>
```

### Disabled dropdown

Adding a `[disabled]` attribute to the `<select>` element will cause it to appear greyed out. In addition, modify `.field__control` with `--disabled` to correctly color the custom "caret" icon.

<div class="field">
    <label for="disabled-dropdown">Dropdown Disabled</label>
    <div class="field__control field__control--dropdown field__control--disabled">
        <select id="disabled-dropdown" disabled>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
        </select>
    </div>
</div>

```html
<div class="field">
    <label for="disabled-dropdown">Dropdown Disabled</label>
    <div class="field__control field__control--dropdown field__control--disabled">
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

<ul class="list list--bulleted">
    <li class="list__item">Modify the `.field` block with `.field--success` when its input is correct.</li>
    <li class="list__item">When there's a problem, use the `.field--error` modifier.</li>
</ul>

### Text field states

Wrap the input element in a `.field__control` block to ensure correct placement of the alert icon.

<div class="field field--success">
    <label for="successful-field">Success state</label>
    <div class="field__control">
        <input type="text" id="successful-field">
    </div>
</div>

<div class="field field--error">
    <label for="error-field">Error state</label>
    <div class="field__control">
        <input type="text" id="error-field">
    </div>
</div>

```html
<div class="field field--success">
    <label for="successful-field">Success state</label>
    <div class="field__control">
        <input type="text" id="successful-field">
    </div>
</div>

<div class="field field--error">
    <label for="error-field">Error state</label>
    <div class="field__control">
        <input type="text" id="error-field">
    </div>
</div>
```

### Dropdown states

The `.field` `--success` and `--error` modifiers will also style dropdowns with visual feedback.

<div class="field field--success">
    <label for="success-dropdown">Dropdown Successful</label>
    <div class="field__control field__control--dropdown">
        <select id="success-dropdown">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
        </select>
    </div>
</div>

<div class="field field--error">
    <label for="error-dropdown">Dropdown error/message</label>
    <div class="field__control field__control--dropdown">
        <select id="error-dropdown">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
        </select>
    </div>
</div>

```html
<div class="field field--success">
    <label for="success-dropdown">Dropdown Successful</label>
    <div class="field__control field__control--dropdown">
        <select id="success-dropdown">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
        </select>
    </div>
</div>

<div class="field field--error">
    <label for="error-dropdown">Dropdown error/message</label>
    <div class="field__control field__control--dropdown">
        <select id="error-dropdown">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
        </select>
    </div>
</div>
```

### Selection field states

Use the `.choice--error` modifier when there's a problem with an individual choice of a selection field.

<fieldset class="field">
    <legend class="subhead">Which shape has less than ten sides?</legend>
    <label for="choice-decagon" class="choice">
        <input type="radio" id="choice-decagon" name="shape-choice">
        <span class="choice__text">Decagon</span>
    </label>
    <label for="choice-octagon" class="choice choice--error">
        <input type="radio" id="choice-octagon" name="shape-choice" checked>
        <span class="choice__text">Octagon</span>
    </label>
</fieldset>

```html
<fieldset class="field">
    <legend class="subhead">Which shape has less than ten sides?</legend>
    <label for="choice-decagon" class="choice">
        <input type="radio" id="choice-decagon" name="shape-choice">
        <span class="choice__text">Decagon</span>
    </label>
    <label for="choice-octagon" class="choice choice--error">
        <input type="radio" id="choice-octagon" name="shape-choice" checked>
        <span class="choice__text">Octagon</span>
    </label>
</fieldset>
```

<fieldset class="field">
    <legend class="subhead">Which shape has four or more sides?</legend>
    <label for="choice-square" class="choice">
        <input type="checkbox" id="choice-square" name="shape-choice" checked>
        <span class="choice__text">Square</span>
    </label>
    <label for="choice-triangle" class="choice choice--error">
        <input type="checkbox" id="choice-triangle" name="shape-choice" checked>
        <span class="choice__text">Triangle</span>
    </label>
</fieldset>

```html
<fieldset class="field">
    <legend class="subhead">Which shape has four or more sides?</legend>
    <label for="choice-square" class="choice">
        <input type="checkbox" id="choice-square" name="shape-choice" checked>
        <span class="choice__text">Square</span>
    </label>
    <label for="choice-triangle" class="choice choice--error">
        <input type="checkbox" id="choice-triangle" name="shape-choice" checked>
        <span class="choice__text">Triangle</span>
    </label>
</fieldset>
```

## Arrangement

---

The responsive grid can be used to arrange complex form layouts.

<div class="grid-row">
    <div class="medium-6">
        <fieldset class="field">
            <label for="input_a">Input A</label>
            <input type="text" name="input_a">
        </fieldset>
    </div>
    <div class="medium-6">
        <fieldset class="field">
            <label for="input_b">Input B</label>
            <input type="text" name="input_b">
        </fieldset>
    </div>
</div>
<div class="grid-row">
    <div class="xs-12">
        <fieldset class="field">
            <label for="input_c">Input C</label>
            <input type="text" name="input_c">
        </fieldset>
    </div>
</div>

```html
<div class="grid-row">
    <div class="medium-6">
        <fieldset class="field">
            <label for="input_a">Input A</label>
            <input type="text" name="input_a">
        </fieldset>
    </div>
    <div class="medium-6">
        <fieldset class="field">
            <label for="input_b">Input B</label>
            <input type="text" name="input_b">
        </fieldset>
    </div>
</div>
<div class="grid-row">
    <div class="xs-12">
        <fieldset class="field">
            <label for="input_c">Input C</label>
            <input type="text" name="input_c">
        </fieldset>
    </div>
</div>
```

### Size and spacing

The `.button-row` block can be used to achieve the correct spacing between a form and its buttons. The class can be used on a stand-alone block, or mixed with `.grid-row`.

When laying out fields that'll potentially fill the entire viewport, the responsive grid should be used to constrain their maximum width to these limits:

<ul class="list list--bulleted">
    <li class="list__item">**Small & XS**: 12 columns</li>
    <li class="list__item">**Medium**: 7 columns</li>
    <li class="list__item">**Large**: 5 columns</li>
    <li class="list__item">**XL**: 4 columns</li>
</ul>

These limits can be achieved by combining grid column helpers (`.medium-7.large-5.xl-4`) or with the block `.field-col`

<div class="grid-row">
    <div class="field-col">
        <fieldset class="field">
            <label for="query">What are you looking for?</label>
            <input type="text" id="query" placeholder="Smart phones">
        </fieldset>
    </div>
</div>
<div class="button-row">
    <button type="submit" class="button button-primary">
        Search
    </button>
</div>

```html
<div class="grid-row">
    <div class="field-col">
        <fieldset class="field">
            <label for="query">What are you looking for?</label>
            <input type="text" id="query" placeholder="Smart phones">
        </fieldset>
    </div>
</div>
<div class="button-row">
    <button type="submit" class="button button-primary">
        Search
    </button>
</div>
```

## Field helpers

---

A field helper offers the user a detailed explanation of the input expected by a form field. Construct one by placing a `.helper` block between the label and input.

Use `aria-describedby` to accessibly mark up the relationship between the input field and the helper text.

<ul class="list list--bulleted">
    <li class="list__item">Assign the helper block a unique `id` attribute.</li>
    <li class="list__item">Add an `aria-describedby` attribute to the input element.</li>
    <li class="list__item">Make the helper's id the value of `aria-describedby`.</li>
</ul>

### Standard field helper

<div class="field">
    <label for="input_d">Field helper</label>
    <div class="helper" id="a-standard-helper">
        <p class="text--small">
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
<div class="field">
    <label for="input_d">Field helper</label>
    <div class="helper" id="a-standard-helper">
        <p class="text--small">
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

<div class="field field--success">
    <label for="input_e">Successful field helper</label>
    <div class="helper helper--success" id="a-success-helper">
        <p class="text--small">
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
<div class="field field--success">
    <label for="input_e">Successful field helper</label>
    <div class="helper helper--success" id="a-success-helper">
        <p class="text--small">
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

A helper modified with `.helper--error` can give detailed instructions regarding why a form field could not be processed.

<div class="field field--error">
    <label for="omitted-field">Error state/message</label>
    <div class="helper helper--error" id="omitted-field-error">
        <strong>General or field specific error message.</strong>
    </div>
    <div class="field__control">
        <input type="text" id="omitted-field" placeholder="Text"
            aria-describedby="omitted-field-error">
    </div>
</div>

```html
<div class="field field--error">
    <label for="omitted-field">Error state/message</label>
    <div class="helper helper--error" id="omitted-field-error">
        <strong>General or field specific error message.</strong>
    </div>
    <div class="field__control">
        <input type="text" id="omitted-field" placeholder="Text"
            aria-describedby="omitted-field-error">
    </div>
</div>
```

Use the "Error List" block when a field has a complex error message.

<div class="field field--error">
    <label for="input_f">Error field helper</label>
    <div class="helper helper--error" id="unfortunate-error">
        <p class="text--small">
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
            aria-describedby="unfortunate-error">
    </div>
</div>

```html
<div class="field field--error">
    <label for="input_f">Error field helper</label>
    <div class="helper helper--error" id="unfortunate-error">
        <p class="text--small">
            <strong>Your password must be:</strong>
        </p>
        <ul class="list list--error">
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
            aria-describedby="unfortunate-error">
    </div>
</div>
```

## Hints

---

Hints provide information a user may need to complete a form field. While a label is the succint, essential text identifying the purpose of an input field, a hint can be used to provide more detailed instructions.

<ul class="list list--bulleted">
    <li class="list__item">A hinted input should have an `aria-describedby` attribute whose value is the `id` of the hint text.</li>
    <li class="list__item">The hint should not be nested inside the `<label>` tag.</li>
    <li class="list__item">Modify the `.field` block with `.field--hinted` to position the icon correctly relative to the label.</li>
    <li class="list__item">Modify the `.hint` block with `.hint--active` to reveal the speech bubble.</li>
    <li class="list__item">Toggle the text's `aria-hidden` attribute when the button hides or shows the tooltip.</li>
</ul>

<div id="example-hint" class="field field--hinted">
    <label for="hinted-field">Interactive hint</label>
    <input type="text" id="hinted-field" aria-describedby="some-hint">
    <div class="hint hint--active">
        <button class="button button-plain hint__trigger" aria-controls="some-hint">
            <span class="accessible-hide">Toggle helper text visibility</span>
        </button>
        <span id="some-hint" class="hint__text" aria-role="tooltip" aria-hidden="false">
            This text describes the field.
        </span>
    </div>
</div>

```html
<div id="example-hint" class="field field--hinted">
    <label for="hinted-field">Interactive hint</label>
    <input type="text" id="hinted-field" aria-describedby="some-hint">
    <div class="hint hint--active">
        <button class="button button-plain hint__trigger" aria-controls="some-hint">
            <span class="accessible-hide">Toggle helper text visibility</span>
        </button>
        <span id="some-hint" class="hint__text" aria-role="tooltip" aria-hidden="false">
            This text describes the field.
        </span>
    </div>
</div>
```

## Example forms

---

See these features in action on the [form examples page](/examples/forms.html)
