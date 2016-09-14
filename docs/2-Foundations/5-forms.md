---
title: Forms
template: doc.jade
---

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

<fieldset class="field">
  <label for="firstname">First Name</label>
  <input id="firstname" name="firstname" required>
</fieldset>

```html
<fieldset class="field">
  <label for="firstname">First Name</label>
  <input id="firstname" name="firstname" required>
</fieldset>
```

### Modifiers

Disabling an input field with the standard `[disabled]` HTML attribute will cause it to appear greyed-out.

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

### Textarea
<fieldset class="field">
  <label for="comment">Message</label>
  <textarea id="comment" name="comment" required></textarea>
</fieldset>

```html
<fieldset class="field">
  <label for="comment">Message</label>
  <textarea id="comment" name="comment" required></textarea>
</fieldset>
```

## Selections

---

### Radio inputs

A radio input lets the user pick a single value from one or more choices.

* The choices are grouped together by a `<fieldset>` tag.
* Each input should have its own `<label>`.
* The grouping is described as a whole by a `<legend>` or `<h1>` tag within the fieldset.

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
        <input type="checkbox" name="multiple-choice" id="multiple-choice-c">
        <span class="choice__text">Choice C</span>
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
        <input type="checkbox" name="multiple-choice" id="multiple-choice-c">
        <span class="choice__text">Choice C</span>
    </label>
</fieldset>
```

### Stand-alone selection

When a simple input with just one possibility is all that's needed, we can pare the field down to just a simple `choice` block.

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

* **Small & XS**: 12 columns
* **Medium**: 7 columns
* **Large**: 5 columns
* **XL**: 4 columns

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

A field helper offers the user a detailed explanation of the input expected in a form field. Construct one by placing a `.helper` block between the label and input.

### Standard field helper

<div class="field">
    <label for="input_d">Field helper</label>
    <div class="helper">
        <p class="text--small">
            <strong>Your password must be:</strong>
        </p>
        <ul class="helper__list">
            <li>8 characters or longer, no spaces</li>
            <li>A mix of numbers, lowercase and uppercase letters</li>
        </ul>
    </div>
    <input type="password" id="input_d" placeholder="Enter password">
</div>

```html
<div class="field">
    <label for="input_d">Field helper</label>
    <div class="helper">
        <p class="text--small">
            <strong>Your password must be:</strong>
        </p>
        <ul class="helper__list">
            <li>8 characters or longer, no spaces</li>
            <li>A mix of numbers, lowercase and uppercase letters</li>
        </ul>
    </div>
    <input type="password" id="input_d" placeholder="Enter password">
</div>
```

### Success modifier

The `--success` modifier can be used on the helper to provide positive feedback when the user has successfully completed the form field.

<div class="field">
    <label for="input_e">Successful field helper</label>
    <div class="helper helper--success">
        <p class="text--small">
            <strong>Your password must be:</strong>
        </p>
        <ul class="helper__list">
            <li>8 characters or longer, no spaces</li>
            <li>A mix of numbers, lowercase and uppercase letters</li>
        </ul>
    </div>
    <input type="password" id="input_e" placeholder="Enter password">
</div>

```html
<div class="field">
    <label for="input_e">Successful field helper</label>
    <div class="helper helper--success">
        <p class="text--small">
            <strong>Your password must be:</strong>
        </p>
        <ul class="helper__list">
            <li>8 characters or longer, no spaces</li>
            <li>A mix of numbers, lowercase and uppercase letters</li>
        </ul>
    </div>
    <input type="password" id="input_e" placeholder="Enter password">
</div>
```

## Example forms

---

See these features in action on the [form examples page](/examples/forms.html)
