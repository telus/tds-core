---
title: Selector Counter
template: doc.jade
---

## Overview

---

<div data-thorium-component="SelectorCounter" data-props="{&#034;max&#034;:5}" class="inline-component"></div>

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
<div data-thorium-component="SelectorCounter" data-props="{&#034;disabled&#034;:true}" class="inline-component"></div>

### Successful selector counter
<div data-thorium-component="SelectorCounter" data-props="{&#034;successful&#034;:true}" class="inline-component"></div>

### Invalid selector counter
<div data-thorium-component="SelectorCounter" data-props="{&#034;invalid&#034;:true}" class="inline-component"></div>

## Accessibility

---

* Customizing the incrementor and decrementor labels is a helpful way to accurately describe a Selector Counter's controls, especially when there are more than one present on the page.
* The component exposes a `focus()` method that you can call to place the cursor in the number field.

## Selector Counter Example

---

<div data-thorium-component="SelectorCounterExample" data-props="{}"></div>