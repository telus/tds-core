---
title: Selector Counter
template: doc.jade
---

## Overview

---

<div id="selectorCounter-min1-max5"></div>
<script type="text/babel">
  ReactDOM.render(
    <Thorium.SelectorCounter max="5" />,
    document.getElementById('selectorCounter-min1-max5')
  );
</script>

```javascript
import React from 'react';
import { SelectorCounter } from 'telus-thorium-enriched';

const SelectorCounterEx = () => (<SelectorCounter />);

export default SelectorCounterEx;
```

| Property | Type | Default | Description |
|---|---|---|---|
| aria-labeledby | `string` | `null` | ID of accessible label |
| aria-describedby | `string` | `null` | ID of accessible description |
| contextPrefix | `string` | `""` | Accessible text prefix for the change event announcement |
| contextSuffix | `string` | `""` | Accessible text suffix for the change event announcement |
| decrementorLabel | `string` | `"Decrease value"` | Accessible text |
| defaultValue | `number` | `0` | Initial value |
| disabled | `bool` | `false` | Prevents changes |
| id | `string` | `null` | Unique DOM id for the number input |
| incrementorLabel | `string` | `"Increase value"` | Accessible text |
| invalid | `bool` | `false` | Value fails validation |
| max | `number` | `null` | Maximum possible value |
| min | `number` | `0` | Minimum possible value |
| onChange | `func` | n/a | `onChange(newValue)` |
| successful | `bool` | `false` | Value passes validation |

### Disabled selector counter

<div id="selectorCounter-disabled"></div>
<script type="text/babel">
  ReactDOM.render(
    <Thorium.SelectorCounter disabled="true" />,
    document.getElementById('selectorCounter-disabled')
  );
</script>

```js
<SelectorCounter disabled="true" />
```

### Successful selector counter

<div id="selectorCounter-successful"></div>
<script type="text/babel">
  ReactDOM.render(
    <Thorium.SelectorCounter successful="true" />,
    document.getElementById('selectorCounter-successful')
  );
</script>

```js
<SelectorCounter successful="true" />
```

### Invalid selector counter

<div id="selectorCounter-invalid"></div>
<script type="text/babel">
  ReactDOM.render(
    <Thorium.SelectorCounter invalid="true" />,
    document.getElementById('selectorCounter-invalid')
  );
</script>

```js
<SelectorCounter invalid="true" />
```

## Accessibility

---

* Customizing the incrementor and decrementor labels is a helpful way to accurately describe a Selector Counter's controls, especially when there are more than one present on the page.
* The component exposes a `focus()` method that you can call to place the cursor in the number field.

### Contextual prefix/suffix text

The `contextPrefix` and `contextSuffix` props can be used to define text that helps the user understand changes in the field's value. For example, this code produces a field whose value is announced as "You chose [number] smartphone plans" whenever the number changes.

```js
<SelectorCounter
  contextPrefix="You chose"
  contextSuffix="smartphone plans" />
```

The contextual prefix &amp; suffix can be used together or separately. They're also optional - if an accessible field can be built using the standard label/description/aria markup, then use those first.

## Selector Counter Example

---

<div id="selectorCounterExample-noprops"></div>
<script type="text/babel">
  ReactDOM.render(
    <Thorium.SelectorCounterExample />,
    document.getElementById('selectorCounterExample-noprops')
  );
</script>